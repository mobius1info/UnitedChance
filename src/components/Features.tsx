import { LineChart, Shield, Zap, Globe, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Real-time market data and AI-powered insights to help you make informed investment decisions.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Shield,
    title: 'Secure Investments',
    description: 'Bank-grade security protocols and insurance coverage to protect your assets 24/7.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Instant Execution',
    description: 'Lightning-fast trade execution with minimal slippage and competitive spreads.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Access to stocks, bonds, ETFs, and cryptocurrencies from markets around the world.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated portfolio managers and 24/7 customer support for all your investment needs.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'Fully licensed and regulated by top financial authorities for your peace of mind.',
    color: 'from-blue-500 to-sky-600',
  },
];

export default function Features() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-32 sm:scroll-mt-40 lg:scroll-mt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 text-blue-600 font-medium rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive investment tools and services designed to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 lg:p-8 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-gray-100 text-center sm:text-left"
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform mx-auto sm:mx-0`}>
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
