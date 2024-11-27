import Link from 'next/link'

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-6xl md:text-7xl font-light text-gray-800 mb-6">
        Smart Finance <span className="text-pink-600">Management</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Take control of your finances with our intuitive expense tracking solution.
        Monitor, analyze, and optimize your spending habits.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link
          href="/signup"
          className="px-8 py-4 bg-pink-100 hover:bg-pink-200 text-pink-900 rounded-full transition"
        >
          Start Free Trial
        </Link>
        <Link
          href="/demo"
          className="px-8 py-4 border border-pink-200 hover:bg-pink-50 text-pink-900 rounded-full transition"
        >
          View Demo
        </Link>
      </div>
    </div>
  </section>
)

export default HeroSection
