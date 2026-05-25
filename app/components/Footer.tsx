export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 border-t border-gray-200 mt-12">
      <p className="mb-2">© 2026 Arpita Jaiswal. Built with Next.js & Tailwind.</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:jaiswalarpita222@gmail.com" className="hover:text-purple-600 transition">Email</a>
        <a href="https://linkedin.com/in/imarpitajaiswal" className="hover:text-purple-600 transition">LinkedIn</a>
        <a href="https://github.com/imarpitajaiswal" className="hover:text-purple-600 transition">GitHub</a>
      </div>
    </footer>
  );
}