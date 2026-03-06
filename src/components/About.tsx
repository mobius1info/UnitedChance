import { Shield, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 text-blue-600 font-medium rounded-full text-xs sm:text-sm mb-4">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Financial Markets
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              United Chance is a licensed financial advisory firm specializing in comprehensive market analysis
              and investment strategies. With over a decade of experience, we help individual investors and
              institutions navigate the complexities of global financial markets.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of certified analysts combines technical expertise with fundamental research to deliver
              actionable trading recommendations across Forex, Cryptocurrencies, Stocks, Commodities, and Indices.
              We pride ourselves on transparency, integrity, and a client-first approach.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Licensed</p>
                  <p className="text-sm text-gray-500">FINRA/SIPC Member</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-500">Active Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">85%+</p>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-500">Market Coverage</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial analysis and trading"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <p className="text-6xl sm:text-7xl font-bold mb-2">10+</p>
                  <p className="text-xl sm:text-2xl font-medium opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
