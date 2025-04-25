import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Md Sharif</h2>
            <p className="text-sm">
              Full-Stack Developer passionate about building performant and scalable web apps using TypeScript, Next.js, Nest.js, Node.js, MongoDB, postgresSQL, Prisma and Docker .
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="https://sharifdev.vercel.app/" target="_blank" className="hover:text-white">Contact</Link></li>
              <li><Link href="mailto:srak780@gmail.com" className="hover:text-white">Email Me</Link></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <Link href="mailto:srak780@gmail.com" className="hover:text-white">srak780@gmail.com</Link></li>
              <li>LinkedIn: <Link href="https://www.linkedin.com/in/md-sharif780" target="_blank" className="hover:text-white">md-sharif780</Link></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
          &copy; 2025-04-26 Md Sharif. All rights reserved.
        </div>
      </footer>
    );
  }
  