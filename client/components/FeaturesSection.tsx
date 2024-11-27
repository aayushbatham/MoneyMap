const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-light text-center text-gray-800 mb-16">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Expense Tracking</h3>
          <p className="text-gray-600 leading-relaxed">
            Easily log and categorize your expenses with our intuitive interface.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Budget Planning</h3>
          <p className="text-gray-600 leading-relaxed">
            Set and manage budgets for different categories to stay on track.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Analytics</h3>
          <p className="text-gray-600 leading-relaxed">
            Gain insights with detailed reports and spending analysis.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Bill Reminders</h3>
          <p className="text-gray-600 leading-relaxed">
            Never miss a payment with automated bill reminders and alerts.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturesSection
