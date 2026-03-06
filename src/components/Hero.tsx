import { ArrowRight, Shield, BarChart3, Wallet } from 'lucide-react';

const REGISTER_URL = 'https://terminal.unitedchance.info/auth/registration';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-28 sm:pt-36 lg:pt-44 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">

      <div className="relative flex-1 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 -left-20 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-sky-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Trusted by 10,000+ investors</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Invest Smarter.
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Grow Faster.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join the next generation of investors. Access institutional-grade strategies,
              real-time analytics, and personalized portfolio management.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={REGISTER_URL}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Start Investing
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Learn More
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-xs sm:text-sm text-gray-600">Bank-level security</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-xs sm:text-sm text-gray-600">Real-time data</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-gray-200/50 p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Total Portfolio Value</p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">$284,502.34</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 rounded-full">
                    <span className="text-blue-600 font-semibold text-sm sm:text-base">+12.4%</span>
                  </div>
                </div>

                <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-blue-50 to-transparent rounded-xl sm:rounded-2xl flex items-end justify-between px-2 sm:px-4 pb-3 sm:pb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 75, 85, 60, 100].map((height, i) => (
                    <div
                      key={i}
                      className="w-2 sm:w-3 lg:w-4 bg-gradient-to-t from-blue-600 to-sky-400 rounded-t-md sm:rounded-t-lg transition-all hover:from-blue-700 hover:to-sky-500"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                  <div className="p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mb-1 sm:mb-2" />
                    <p className="text-[10px] sm:text-xs text-gray-500">Stocks</p>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">$142,250</p>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mb-1 sm:mb-2" />
                    <p className="text-[10px] sm:text-xs text-gray-500">Bonds</p>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">$85,120</p>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 mb-1 sm:mb-2" />
                    <p className="text-[10px] sm:text-xs text-gray-500">Crypto</p>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">$57,132</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">+24%</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
