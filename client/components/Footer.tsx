import Link from 'next/link'

const Footer = () => (
  <footer className="bg-white/80 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-light text-pink-600">ExpenseTracker</Link>
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-pink-600">Privacy</Link>
          <Link href="/terms" className="text-sm text-gray-600 hover:text-pink-600">Terms</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-pink-600">Twitter</Link>
          <Link href="#" className="text-gray-600 hover:text-pink-600">Instagram</Link>
          <Link href="#" className="text-gray-600 hover:text-pink-600">LinkedIn</Link>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>© 2024 ExpenseTracker. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer
