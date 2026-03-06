import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CRYPTO_IDS = ['bitcoin', 'ethereum', 'tether', 'ripple', 'binancecoin', 'solana', 'cardano', 'dogecoin'];

const FALLBACK_PRICES: CryptoPrice[] = [
  { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 91250.00, price_change_percentage_24h: 1.25 },
  { id: 'ethereum', symbol: 'eth', name: 'Ethereum', current_price: 2180.50, price_change_percentage_24h: -0.85 },
  { id: 'tether', symbol: 'usdt', name: 'Tether', current_price: 1.00, price_change_percentage_24h: 0.01 },
  { id: 'ripple', symbol: 'xrp', name: 'XRP', current_price: 2.42, price_change_percentage_24h: 2.15 },
  { id: 'binancecoin', symbol: 'bnb', name: 'BNB', current_price: 625.80, price_change_percentage_24h: 0.45 },
  { id: 'solana', symbol: 'sol', name: 'Solana', current_price: 138.25, price_change_percentage_24h: -1.20 },
  { id: 'cardano', symbol: 'ada', name: 'Cardano', current_price: 0.72, price_change_percentage_24h: 1.85 },
  { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', current_price: 0.21, price_change_percentage_24h: 0.95 },
];

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>(FALLBACK_PRICES);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${CRYPTO_IDS.join(',')}&order=market_cap_desc&sparkline=false`
        );
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setPrices(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch crypto prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const tickerContent = [...prices, ...prices].map((crypto, index) => (
    <div key={`${crypto.id}-${index}`} className="flex items-center gap-3 px-6 whitespace-nowrap">
      <div className="flex items-center gap-2">
        <span className="font-medium text-slate-400 text-sm">{crypto.symbol.toUpperCase()}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-600 font-medium">${crypto.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        <span className={`flex items-center gap-0.5 text-sm ${crypto.price_change_percentage_24h >= 0 ? 'text-emerald-600/70' : 'text-red-500/70'}`}>
          {crypto.price_change_percentage_24h >= 0 ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
        </span>
      </div>
      <div className="w-px h-4 bg-slate-300/30 ml-2" />
    </div>
  ));

  return (
    <div className="relative -mt-8 sm:-mt-12 lg:-mt-20 overflow-hidden z-10">
      <div className="absolute inset-0 bg-slate-100/80 backdrop-blur-sm" />
      <div className="relative py-2.5 border-b border-slate-200/50">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {tickerContent}
          </div>
        </div>
      </div>
    </div>
  );
}
