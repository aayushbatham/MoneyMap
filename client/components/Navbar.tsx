import Link from 'next/link'

const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
    <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-full shadow-md px-6 py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-light text-pink-600">
          ExpenseTracker
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-pink-600 transition">Features</Link>
          <Link href="/about" className="text-gray-600 hover:text-pink-600 transition">About</Link>
          <Link href="/login" className="text-gray-600 hover:text-pink-600 transition">Login</Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-900 rounded-full transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar