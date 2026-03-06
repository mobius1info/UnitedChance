const stats = [
  { value: '$2.5B+', label: 'Assets Under Management' },
  { value: '10,000+', label: 'Active Investors' },
  { value: '98.5%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years of Excellence' },
];

export default function Statistics() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
