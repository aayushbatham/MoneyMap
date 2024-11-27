import Link from 'next/link'

const CTASection = () => (
  <section className="py-20 bg-white/50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-light text-gray-800 mb-8">Ready to manage your finances better?</h2>
      <Link
        href="/signup"
        className="px-8 py-4 bg-pink-100 hover:bg-pink-200 text-pink-900 rounded-full transition inline-block"
      >
        Get Started Now
      </Link>
    </div>
  </section>
)

export default CTASection
