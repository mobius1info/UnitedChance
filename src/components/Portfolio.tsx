import { useState } from 'react';
import { Star, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';

const trades = [
  {
    id: 1,
    symbol: 'EURUSD',
    type: 'Buy',
    category: 'Forex',
    deposit: 5000,
    profit: 356.55,
    profitPercent: 7.13,
    image: '/Screenshot_1.png',
    review: {
      name: 'Maria S.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'I was new to forex trading, but the team at United Chance guided me through every step. Their EUR/USD recommendation brought me a nice 7% return. Highly recommend their advisory services!',
      rating: 5,
    },
  },
  {
    id: 2,
    symbol: 'AUDUSD',
    type: 'Sell',
    category: 'Forex',
    deposit: 750,
    profit: 51.59,
    profitPercent: 6.88,
    image: '/Screenshot_2.png',
    review: {
      name: 'David L.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Even with a small deposit, United Chance helped me make consistent profits. Their AUD/USD analysis was precise. Perfect for beginners like me!',
      rating: 5,
    },
  },
  {
    id: 3,
    symbol: 'BTCUSD',
    type: 'Sell',
    category: 'Crypto',
    deposit: 10000,
    profit: 644.70,
    profitPercent: 6.45,
    image: '/Screenshot_3.png',
    review: {
      name: 'James W.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      text: 'The crypto market can be volatile, but United Chance timing on Bitcoin was impeccable. They advised me to sell at the right moment, securing over $640 profit. Outstanding expertise!',
      rating: 5,
    },
  },
  {
    id: 4,
    symbol: 'ETHUSD',
    type: 'Buy',
    category: 'Crypto',
    deposit: 3000,
    profit: 209.86,
    profitPercent: 6.99,
    image: '/Screenshot_4.png',
    review: {
      name: 'Elena P.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'United Chance recommended Ethereum when the price was low. Their technical analysis was spot-on and I made a 7% return. Their crypto insights are invaluable!',
      rating: 5,
    },
  },
  {
    id: 5,
    symbol: 'LVS',
    type: 'Sell',
    category: 'Shares',
    deposit: 20000,
    profit: 3050,
    profitPercent: 15.25,
    image: '/Screenshot_5.png',
    review: {
      name: 'Alexander K.',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'United Chance analysts gave me a clear signal to sell LVS. The recommendation was spot-on, and I made over $3,000 profit. Their market analysis is truly professional!',
      rating: 5,
    },
  },
  {
    id: 6,
    symbol: 'BAC',
    type: 'Sell',
    category: 'Shares',
    deposit: 1000,
    profit: 153,
    profitPercent: 15.3,
    image: '/Screenshot_6.png',
    review: {
      name: 'Michael R.',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      text: 'A 15% return on Bank of America stock in just a few days! United Chance analysis of the banking sector was exceptional. They truly understand the markets.',
      rating: 5,
    },
  },
  {
    id: 7,
    symbol: 'XAUUSD',
    type: 'Buy',
    category: 'Commodities',
    deposit: 6800,
    profit: 510.72,
    profitPercent: 7.51,
    image: '/Screenshot_7.png',
    review: {
      name: 'Anna V.',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      text: 'Gold has always been my favorite asset to trade. United Chance predicted the gold rally perfectly. Over $500 profit thanks to their expert guidance!',
      rating: 5,
    },
  },
  {
    id: 8,
    symbol: 'UKOIL',
    type: 'Buy',
    category: 'Commodities',
    deposit: 50000,
    profit: 7407.47,
    profitPercent: 14.81,
    image: '/Screenshot_8.png',
    review: {
      name: 'Thomas H.',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'My biggest trade yet - over $7,400 profit on UK Oil! United Chance understanding of the energy markets is phenomenal. Their recommendations have been consistently profitable.',
      rating: 5,
    },
  },
  {
    id: 9,
    symbol: 'AUS200',
    type: 'Sell',
    category: 'Indexes',
    deposit: 4000,
    profit: 163.78,
    profitPercent: 4.09,
    image: '/Screenshot_9.png',
    review: {
      name: 'Robert M.',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      text: 'Index trading seemed complex until I started following United Chance recommendations. Their AUS200 call was perfectly timed. Reliable and professional service!',
      rating: 5,
    },
  },
  {
    id: 10,
    symbol: 'USA100',
    type: 'Buy',
    category: 'Indexes',
    deposit: 6000,
    profit: 222.76,
    profitPercent: 3.71,
    image: '/Screenshot_10.png',
    review: {
      name: 'Sophia T.',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      text: 'The USA100 recommendation from United Chance was excellent. Their market research and timing helped me secure solid profits. I trust their analysis completely!',
      rating: 5,
    },
  },
];

export default function Portfolio() {
  const [selectedTrade, setSelectedTrade] = useState<typeof trades[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (trade: typeof trades[0]) => {
    setSelectedTrade(trade);
    setCurrentIndex(trades.findIndex(t => t.id === trade.id));
  };

  const closeModal = () => setSelectedTrade(null);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? trades.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedTrade(trades[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === trades.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedTrade(trades[newIndex]);
  };

  const totalProfit = trades.reduce((sum, trade) => sum + trade.profit, 0);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gray-50 scroll-mt-32 sm:scroll-mt-40 lg:scroll-mt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-emerald-50 text-emerald-600 font-medium rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Clients Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            Real trading results from our clients who followed United Chance recommendations
          </p>
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/25 text-sm sm:text-base">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Total Profit: ${totalProfit.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {trades.map((trade) => (
            <div
              key={trade.id}
              onClick={() => openModal(trade)}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="relative aspect-video bg-gray-900">
                <img
                  src={trade.image}
                  alt={`${trade.symbol} trade`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[1%] right-[1.5%] w-[8%] h-[2.5%] backdrop-blur-md bg-white/50 rounded-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-end justify-between">
                  <div>
                    <span className={`inline-block px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded ${
                      trade.type === 'Buy' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                    }`}>
                      {trade.type}
                    </span>
                    <h3 className="text-white font-bold text-base sm:text-lg mt-0.5 sm:mt-1">{trade.symbol}</h3>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-300 bg-black/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {trade.category}
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">Deposit</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">${trade.deposit.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] sm:text-xs text-gray-500">Profit</p>
                    <p className="font-bold text-emerald-600 text-sm sm:text-base">+${trade.profit.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 sm:pt-3 border-t border-gray-100">
                  <img
                    src={trade.review.avatar}
                    alt={trade.review.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{trade.review.name}</p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(trade.review.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-blue-600 font-medium group-hover:text-blue-700">
                    Read review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTrade && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative bg-white rounded-xl sm:rounded-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-1 sm:p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-3 top-[30%] sm:top-[35%] -translate-y-1/2 z-10 p-1 sm:p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-3 top-[30%] sm:top-[35%] -translate-y-1/2 z-10 p-1 sm:p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>

            <div className="bg-gray-900 rounded-t-xl sm:rounded-t-2xl relative">
              <img
                src={selectedTrade.image}
                alt={`${selectedTrade.symbol} trade`}
                className="w-full max-h-[50vh] sm:max-h-[65vh] object-contain"
              />
              <div className="absolute top-[1%] right-[1.5%] w-[6%] h-[2%] backdrop-blur-md bg-white/50 rounded-[2px]" />
            </div>

            <div className="px-3 sm:px-5 py-3 sm:py-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-3">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{selectedTrade.symbol}</h3>
                  <span className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full ${
                    selectedTrade.type === 'Buy' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {selectedTrade.type}
                  </span>
                  <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                    {selectedTrade.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-400">Deposit: </span>
                    <span className="font-semibold text-gray-900">${selectedTrade.deposit.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Profit: </span>
                    <span className="font-semibold text-emerald-600">+${selectedTrade.profit.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Return: </span>
                    <span className="font-semibold text-blue-600">+{selectedTrade.profitPercent}%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src={selectedTrade.review.avatar}
                    alt={selectedTrade.review.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">{selectedTrade.review.name}</p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(selectedTrade.review.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 sm:line-clamp-2 flex-1">{selectedTrade.review.text}</p>
                <span className="text-[10px] sm:text-xs text-gray-400 flex-shrink-0 self-end sm:self-auto">{currentIndex + 1}/{trades.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
