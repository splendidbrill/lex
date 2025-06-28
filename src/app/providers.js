// "use client";
// import { SessionContextProvider } from "@supabase/auth-helpers-nextjs";
// import { supabase } from "@/lib/supabaseClient";

// export default function Providers({ children, session }) {
//   return (
//     <SessionContextProvider supabaseClient={supabase} initialSession={session}>
//       {children}
//     </SessionContextProvider>
//   );
// }
"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/lib/supabaseClient";

export default function Providers({ children, session }) {
  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={session}>
      {children}
    </SessionContextProvider>
  );
}
