import Image from "next/image";

const ImageExamples = () => {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Next.js Image Examples</h1>
      
      {/* 1. Basic Next.js Image with external URL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. External Image with Next.js Image Component</h2>
        <div className="border p-4 rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
            alt="Landscape example"
            width={400}
            height={300}
            className="rounded-lg"
            priority // Use for above-the-fold images
          />
        </div>
        <code className="block bg-gray-100 p-2 rounded text-sm">
          {`<Image
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
  alt="Landscape example"
  width={400}
  height={300}
  className="rounded-lg"
  priority
/>`}
        </code>
      </section>

      {/* 2. Responsive Image */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Responsive Image (fills container)</h2>
        <div className="border p-4 rounded-lg">
          <div className="relative w-full h-64">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
              alt="Mountain landscape"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <code className="block bg-gray-100 p-2 rounded text-sm">
          {`<div className="relative w-full h-64">
  <Image
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
    alt="Mountain landscape"
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>`}
        </code>
      </section>

      {/* 3. Local Image (would be in public folder) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Local Image from Public Folder</h2>
        <div className="border p-4 rounded-lg">
          {/* This would work if you have an image in public/images/ */}
          <div className="bg-gray-200 p-8 rounded-lg text-center">
            <p className="text-gray-600">Local image would appear here</p>
            <p className="text-sm text-gray-500 mt-2">Place images in public/images/ folder</p>
          </div>
        </div>
        <code className="block bg-gray-100 p-2 rounded text-sm">
          {`<Image
  src="/images/your-image.jpg"
  alt="Local image"
  width={400}
  height={300}
  className="rounded-lg"
/>`}
        </code>
      </section>

      {/* 4. Image with loading states */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Image with Blur Placeholder</h2>
        <div className="border p-4 rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
            alt="Forest example"
            width={400}
            height={300}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <code className="block bg-gray-100 p-2 rounded text-sm">
          {`<Image
  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
  alt="Forest example"
  width={400}
  height={300}
  className="rounded-lg"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>`}
        </code>
      </section>

      {/* 5. Regular HTML img tag (not recommended for most cases) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Regular HTML img tag (Not Recommended)</h2>
        <div className="border p-4 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
            alt="Ocean example"
            width="400"
            height="300"
            className="rounded-lg"
          />
        </div>
        <code className="block bg-gray-100 p-2 rounded text-sm">
          {`<img
  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
  alt="Ocean example"
  width="400"
  height="300"
  className="rounded-lg"
/>`}
        </code>
        <p className="text-red-600 text-sm">⚠️ Use Next.js Image component instead for better performance</p>
      </section>

      {/* Key Differences */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Differences: Next.js Image vs HTML img</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg bg-green-50">
            <h3 className="font-semibold text-green-800 mb-2">Next.js Image Component ✅</h3>
            <ul className="text-sm space-y-1 text-green-700">
              <li>• Automatic image optimization</li>
              <li>• Lazy loading by default</li>
              <li>• Prevents layout shift</li>
              <li>• WebP/AVIF format conversion</li>
              <li>• Responsive images</li>
              <li>• Built-in blur placeholder</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg bg-red-50">
            <h3 className="font-semibold text-red-800 mb-2">HTML img tag ❌</h3>
            <ul className="text-sm space-y-1 text-red-700">
              <li>• No automatic optimization</li>
              <li>• No lazy loading</li>
              <li>• Can cause layout shift</li>
              <li>• Serves original format</li>
              <li>• Manual responsive handling</li>
              <li>• No built-in placeholders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Configuration Note */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">External Image Configuration</h2>
        <div className="border p-4 rounded-lg bg-blue-50">
          <p className="text-blue-800 mb-2">For external images, add domains to next.config.js:</p>
          <code className="block bg-white p-2 rounded text-sm">
            {`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'example.com'],
    // or use remotePatterns for more control:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig`}
          </code>
        </div>
      </section>
    </div>
  );
};

export default ImageExamples;