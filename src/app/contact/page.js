"use client";
import { useState } from "react";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const supabase = useSupabaseClient();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // map camelCase keys to snake_case for Supabase
//     const dataToInsert = {
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       city: formData.city,
//       email: formData.email,
//       message: formData.message,
//     };

//     const { error } = await supabase
//       .from("contacts") // your Supabase table name
//       .insert([dataToInsert]);

//     if (error) {
//       console.error("Insert error:", error);
//       alert("Something went wrong. Check the console.");
//       return;
//     }

//     setShowModal(true);
//     setFormData({
//   firstName: "",
//   lastName: "",
//   city: "",
//   email: "",
//   message: "",
// });
//   };
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);

  // Format data for Supabase
  const dataToInsert = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    city: formData.city,
    email: formData.email,
    message: formData.message,
  };

  // Insert into Supabase
  const { error } = await supabase
    .from("contacts")
    .insert([dataToInsert]);

  if (error) {
    console.error("Insert error:", error);
    alert("Something went wrong. Check the console.");
    return;
  }

  // Send email notification via API route
  try {
    const emailRes = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await emailRes.json();

    if (!result.success) {
      console.error("Email send error:", result.error);
      // optional: alert("Email failed to send.");
    }
  } catch (err) {
    console.error("Email API call failed:", err);
  }

  // Show success modal & reset form
  setShowModal(true);
  setFormData({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    message: "",
  });
  setIsSending(false);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 relative">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        <AlertDialog open={showModal} onOpenChange={setShowModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Message Sent</AlertDialogTitle>
              <AlertDialogDescription>
                Your message was sent successfully. Thank you.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowModal(false)}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

