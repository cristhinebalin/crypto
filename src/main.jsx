import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, Zap, Shield, BarChart3, Globe, ArrowRight, Star, Users, DollarSign,
  ChevronRight, Eye, EyeOff, Wallet, CreditCard, PieChart, Activity, Bell, Settings,
  Search, Filter, Download, Upload, RefreshCw, Lock, Smartphone, Mail, Phone, MapPin,
  Twitter, Facebook, Linkedin, Instagram, Award, Target, Layers, Cpu, HeadphonesIcon
} from 'lucide-react';

const CryptoWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPrice, setCurrentPrice] = useState(67420);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [tradeAmount, setTradeAmount] = useState('');
  const [tradeType, setTradeType] = useState('buy');

  // Mock real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentPrice(prev => prev + (Math.random() - 0.5) * 1000);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: currentPrice, change: 5.24, volume: '28.5B', marketCap: '1.3T', trending: true },
    { name: 'Ethereum', symbol: 'ETH', price: 3240, change: -2.18, volume: '15.2B', marketCap: '390B', trending: false },
    { name: 'Solana', symbol: 'SOL', price: 156, change: 12.45, volume: '2.8B', marketCap: '68B', trending: true },
    { name: 'Cardano', symbol: 'ADA', price: 0.42, change: 8.73, volume: '1.2B', marketCap: '15B', trending: true },
    { name: 'Polygon', symbol: 'MATIC', price: 0.89, change: -3.45, volume: '580M', marketCap: '8.2B', trending: false },
    { name: 'Chainlink', symbol: 'LINK', price: 14.32, change: 6.78, volume: '420M', marketCap: '8.9B', trending: true },
  ];

  const portfolioData = [
    { symbol: 'BTC', amount: 0.245, value: 16519, change: 5.24 },
    { symbol: 'ETH', amount: 8.42, value: 27281, change: -2.18 },
    { symbol: 'SOL', amount: 125.8, value: 19625, change: 12.45 },
    { symbol: 'ADA', amount: 15420, value: 6476, change: 8.73 },
  ];

  const transactions = [
    { type: 'buy', crypto: 'BTC', amount: 0.05, price: 65420, time: '2 hours ago', status: 'completed' },
    { type: 'sell', crypto: 'ETH', amount: 2.1, price: 3245, time: '5 hours ago', status: 'completed' },
    { type: 'buy', crypto: 'SOL', amount: 50, price: 152, time: '1 day ago', status: 'completed' },
    { type: 'buy', crypto: 'ADA', amount: 1000, price: 0.41, time: '2 days ago', status: 'pending' },
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', icon: <Globe className="w-5 h-5" /> },
    { id: 'markets', label: 'Markets', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'trading', label: 'Trading', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <PieChart className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <Users className="w-5 h-5" /> },
  ];

  const Navigation = () => (
    <nav className="relative z-50 flex items-center justify-between p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          CryptoVault Pro
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === item.id 
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                : 'hover:text-purple-400 hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
          <Bell className="w-5 h-5" />
        </button>
        <button className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition-all">
          Sign In
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  #1 Crypto Trading Platform 2025
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  The Future of
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Crypto Trading
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Advanced AI-powered trading, institutional-grade security, and lightning-fast execution. 
                  Join the next generation of digital asset management.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all group">
                  Start Trading Now
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-gray-600 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">25M+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">$5.2T</div>
                  <div className="text-gray-400">Total Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.99%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Live Portfolio</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Real-time</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-2">$89,421.45</div>
                  <div className="flex items-center text-green-400">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+12.34% (+$9,821.32)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {cryptoData.slice(0, 4).map((crypto, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          {crypto.symbol[0]}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{crypto.symbol}</div>
                          <div className="text-xs text-gray-400">{crypto.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm">${crypto.price.toLocaleString()}</div>
                        <div className={`text-xs ${crypto.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {crypto.change > 0 ? '+' : ''}{crypto.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Trading
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Cpu className="w-8 h-8" />, title: 'AI-Powered Analytics', desc: 'Advanced machine learning algorithms analyze market patterns in real-time' },
              { icon: <Shield className="w-8 h-8" />, title: 'Military-Grade Security', desc: 'Multi-signature wallets and hardware security modules protect your assets' },
              { icon: <Zap className="w-8 h-8" />, title: 'Lightning Execution', desc: 'Sub-millisecond order execution with direct market access' },
              { icon: <Globe className="w-8 h-8" />, title: 'Global Liquidity', desc: 'Access to 500+ trading pairs across major exchanges worldwide' },
              { icon: <Target className="w-8 h-8" />, title: 'Smart Orders', desc: 'Advanced order types including stop-loss, take-profit, and trailing stops' },
              { icon: <Layers className="w-8 h-8" />, title: 'DeFi Integration', desc: 'Seamless access to decentralized finance protocols and yield farming' },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const MarketsPage = () => (
    <div className="px-6 py-12 space-y-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-4xl font-bold mb-2">Cryptocurrency Markets</h1>
            <p className="text-gray-400">Real-time prices and market data for 500+ digital assets</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search cryptocurrencies..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm"
              />
            </div>
            <button className="p-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Market Overview</h3>
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-gray-400">Total Market Cap: </span>
                  <span className="text-green-400 font-bold">$2.1T</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-400">24h Volume: </span>
                  <span className="text-blue-400 font-bold">$89.5B</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="p-4 text-gray-400 font-medium">#</th>
                  <th className="p-4 text-gray-400 font-medium">Name</th>
                  <th className="p-4 text-gray-400 font-medium">Price</th>
                  <th className="p-4 text-gray-400 font-medium">24h Change</th>
                  <th className="p-4 text-gray-400 font-medium">Market Cap</th>
                  <th className="p-4 text-gray-400 font-medium">Volume</th>
                  <th className="p-4 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((crypto, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="p-4 text-gray-400">{index + 1}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          {crypto.symbol[0]}
                        </div>
                        <div>
                          <div className="font-semibold">{crypto.name}</div>
                          <div className="text-sm text-gray-400">{crypto.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-bold">${crypto.price.toLocaleString()}</td>
                    <td className="p-4">
                      <div className={`flex items-center ${crypto.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.trending ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {crypto.change > 0 ? '+' : ''}{crypto.change}%
                      </div>
                    </td>
                    <td className="p-4 text-gray-300">${crypto.marketCap}</td>
                    <td className="p-4 text-gray-300">${crypto.volume}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-all">
                          Buy
                        </button>
                        <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm hover:bg-red-500/30 transition-all">
                          Sell
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const TradingPage = () => (
    <div className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trading Interface */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Advanced Trading</h2>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30">
                    Spot
                  </button>
                  <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition-all">
                    Futures
                  </button>
                  <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition-all">
                    Options
                  </button>
                </div>
              </div>

              {/* Price Chart Placeholder */}
              <div className="bg-black/20 rounded-xl p-6 mb-6 h-96 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Advanced Trading Chart</h3>
                  <p className="text-gray-400">TradingView integration with 100+ technical indicators</p>
                </div>
              </div>

              {/* Quick Trade Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl hover:bg-green-500/30 transition-all">
                  <div className="text-green-400 font-semibold text-lg">Quick Buy</div>
                  <div className="text-sm text-gray-300">Market order execution</div>
                </button>
                <button className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl hover:bg-red-500/30 transition-all">
                  <div className="text-red-400 font-semibold text-lg">Quick Sell</div>
                  <div className="text-sm text-gray-300">Market order execution</div>
                </button>
              </div>
            </div>
          </div>

          {/* Order Book & Trade Form */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Place Order</h3>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setTradeType('buy')}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      tradeType === 'buy' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'hover:bg-white/10'
                    }`}
                  >
                    Buy
                  </button>
                  <button 
                    onClick={() => setTradeType('sell')}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      tradeType === 'sell' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'hover:bg-white/10'
                    }`}
                  >
                    Sell
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Amount</label>
                  <input 
                    type="number" 
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Price (USD)</label>
                  <input 
                    type="number" 
                    placeholder="Market Price"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                  />
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tradeType === 'buy' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/25' 
                    : 'bg-gradient-to-r from-red-500 to-rose-500 hover:shadow-lg hover:shadow-red-500/25'
                }`}>
                  {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
                </button>
              </div>
            </div>

            {/* Order Book */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Order Book</h3>
              <div className="space-y-2">
                {[
                  { price: 67520, amount: 0.245, side: 'sell' },
                  { price: 67510, amount: 0.156, side: 'sell' },
                  { price: 67500, amount: 0.089, side: 'sell' },
                  { price: 67490, amount: 0.134, side: 'buy' },
                  { price: 67480, amount: 0.267, side: 'buy' },
                  { price: 67470, amount: 0.198, side: 'buy' },
                ].map((order, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className={order.side === 'buy' ? 'text-green-400' : 'text-red-400'}>
                      ${order.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400">{order.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioPage = () => (
    <div className="px-6 py-12 space-y-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Portfolio Overview</h1>
            <p className="text-gray-400">Track your investments and performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowBalance(!showBalance)}
              className="p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Total Balance</h3>
              <Wallet className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-3xl font-bold mb-2">
              {showBalance ? '$89,421.45' : '••••••••'}
            </div>
            <div className="flex items-center text-green-400">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12.34% (+$9,821.32)</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">24h P&L</h3>
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold mb-2 text-green-400">
              {showBalance ? '+$2,145.67' : '••••••••'}
            </div>
            <div className="text-sm text-gray-400">
              Best performer: SOL (+12.45%)
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Available Balance</h3>
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold mb-2">
              {showBalance ? '$12,450.89' : '••••••••'}
            </div>
            <div className="text-sm text-gray-400">
              Ready for trading
            </div>
          </div>
        </div>

        {/* Holdings */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden mb-8">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold">Your Holdings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="p-4 text-gray-400 font-medium">Asset</th>
                  <th className="p-4 text-gray-400 font-medium">Amount</th>
                  <th className="p-4 text-gray-400 font-medium">Value</th>
                  <th className="p-4 text-gray-400 font-medium">24h Change</th>
                  <th className="p-4 text-gray-400 font-medium">Allocation</th>
                  <th className="p-4 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.map((asset, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          {asset.symbol[0]}
                        </div>
                        <div>
                          <div className="font-semibold">{asset.symbol}</div>
                          <div className="text-sm text-gray-400">{cryptoData.find(c => c.symbol === asset.symbol)?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-mono">{asset.amount.toFixed(asset.symbol === 'BTC' ? 6 : 2)}</td>
                    <td className="p-4 font-bold">${showBalance ? asset.value.toLocaleString() : '••••••'}</td>
                    <td className="p-4">
                      <div className={`flex items-center ${asset.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {asset.change > 0 ? '+' : ''}{asset.change}%
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" 
                            style={{width: `${(asset.value / 89421 * 100)}%`}}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400">{((asset.value / 89421) * 100).toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                          Trade
                        </button>
                        <button className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-lg text-sm hover:bg-gray-500/30 transition-all">
                          Send
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recent Transactions</h3>
            <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-all">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="divide-y divide-white/5">
            {transactions.map((tx, index) => (
              <div key={index} className="p-6 hover:bg-white/5 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === 'buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {tx.type === 'buy' ? <Upload className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {tx.type === 'buy' ? 'Bought' : 'Sold'} {tx.crypto}
                      </div>
                      <div className="text-sm text-gray-400">{tx.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">
                      {tx.type === 'buy' ? '+' : '-'}{tx.amount} {tx.crypto}
                    </div>
                    <div className="text-sm text-gray-400">
                      ${(tx.amount * tx.price).toLocaleString()}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tx.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tx.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="px-6 py-12 space-y-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> CryptoVault Pro</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the future of digital asset trading with cutting-edge technology, 
            unparalleled security, and institutional-grade infrastructure.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
              <Award className="w-4 h-4 mr-2 text-purple-400" />
              Our Mission
            </div>
            <h2 className="text-4xl font-bold">
              Democratizing Access to Advanced Trading
            </h2>
            <p className="text-lg text-gray-300">
              We believe everyone deserves access to professional-grade trading tools. 
              Our platform combines institutional infrastructure with user-friendly design, 
              making sophisticated trading strategies accessible to retail investors worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Security First</h4>
                  <p className="text-gray-400">Military-grade security protecting billions in digital assets</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-gray-400">Continuous development of next-generation trading features</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Transparency</h4>
                  <p className="text-gray-400">Open communication and fair trading practices</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="text-center space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-400">2019</div>
                    <div className="text-sm text-gray-400">Founded</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-400">25M+</div>
                    <div className="text-sm text-gray-400">Users</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">$5.2T</div>
                    <div className="text-sm text-gray-400">Volume Traded</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-yellow-400">150+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-400">World-class experts from technology and finance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'CEO & Co-Founder', bio: 'Former Goldman Sachs VP, Harvard MBA' },
              { name: 'Marcus Rodriguez', role: 'CTO & Co-Founder', bio: 'Ex-Google Senior Engineer, MIT CS' },
              { name: 'Dr. Emily Watson', role: 'Chief Security Officer', bio: 'Cybersecurity Expert, 15+ years' },
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-purple-400 mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions? Our team is here to help you succeed in your crypto journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">support@cryptovaultpro.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-gray-400">New York, NY • London, UK</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="text-gray-400">Follow us:</div>
                {[Twitter, Facebook, Linkedin, Instagram].map((Icon, index) => (
                  <button key={index} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Send us a Message</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm"
              />
              <textarea 
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 backdrop-blur-sm resize-none"
              ></textarea>
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'markets': return <MarketsPage />;
      case 'trading': return <TradingPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <Navigation />
      
      <div className="relative z-10">
        {renderCurrentPage()}
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">CryptoVault Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                The world's most advanced cryptocurrency trading platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Spot Trading</div>
                <div>Futures Trading</div>
                <div>Options Trading</div>
                <div>DeFi Staking</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Legal</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Help Center</div>
                <div>API Documentation</div>
                <div>Status Page</div>
                <div>Contact Us</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 CryptoVault Pro. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CryptoWebsite;