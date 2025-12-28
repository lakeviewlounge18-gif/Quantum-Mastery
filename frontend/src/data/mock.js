// Mock data for Quantum Trading Mastery Landing Page

export const heroData = {
  logo: "https://customer-assets.emergentagent.com/job_edge-mastery/artifacts/f3v0nedu_The%20Quantom%20Logo.png",
  brandName: "Quantum Trading Mastery",
  tagline: "Coming Soon",
  announcement: "Australia's First Trading Community",
  launchDate: "2026-02-01T00:00:00",
  motto: "Master the Markets, Transform Your Future",
  subtitle: "From beginner to confident trader in just 7 days with Khan Hazara, The Quantum Trader",
  ctaButtons: [
    { id: 1, label: "Join the Waiting List", type: "primary" },
    { id: 2, label: "Dashboard Demo", type: "secondary" },
    { id: 3, label: "Learn about 1:1 Mentorship", type: "ghost" }
  ]
};

export const countdownData = {
  targetDate: "2026-02-01T00:00:00",
  title: "Enrollment Opens In"
};

export const fastTrackData = {
  title: "Learn Trading in 7 Days",
  subtitle: "Fast Track Program",
  description: "Our intensive program condenses years of trading knowledge into a focused 7-day journey",
  days: [
    { day: 1, title: "Foundation", description: "Market basics, terminology, and mindset" },
    { day: 2, title: "Technical Analysis", description: "Charts, patterns, and indicators" },
    { day: 3, title: "Risk Management", description: "Position sizing and stop-loss strategies" },
    { day: 4, title: "Entry & Exit", description: "Perfect timing for maximum profits" },
    { day: 5, title: "Live Trading", description: "Real-time market analysis and execution" },
    { day: 6, title: "Psychology", description: "Emotional control and discipline" },
    { day: 7, title: "Mastery", description: "Advanced strategies and automation" }
  ]
};

export const advantagesData = {
  title: "Why Quantum Trading?",
  subtitle: "Your Competitive Advantage",
  advantages: [
    { id: 1, icon: "Clock", title: "5+ Years Experience", description: "Proven track record in the markets" },
    { id: 2, icon: "Users", title: "1:1 Mentorship", description: "Personal guidance from Khan Hazara" },
    { id: 3, icon: "Zap", title: "7 Days to Learn", description: "Accelerated learning program" },
    { id: 4, icon: "TrendingUp", title: "92% Winning Rate", description: "Consistently profitable strategies" },
    { id: 5, icon: "BookOpen", title: "Journaling", description: "Professional trading journal included" },
    { id: 6, icon: "Copy", title: "Trade Copier", description: "2 months free - copy expert trades" }
  ]
};

export const mentorData = {
  name: "Khan Hazara",
  title: "The Quantum Trader",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  bio: "Khan Hazara known as The Quantum Trader for a reason. With over 5+ years of professional trading experience and a proven 92% win rate, Khan Hazara is committed to transform lives of other traders who are facing challenges with their strategies, mindset and risk management skills. His unique Quantum Trading Mastery Technique combines technical analysis with psychological Mastery.",
  stats: [
    { label: "Years Trading", value: "5+" },
    { label: "Students Mentored", value: "500+" },
    { label: "Win Rate", value: "92%" },
    { label: "Profit Factor", value: "3.2" }
  ],
  quote: "Trading isn't about predicting the future, it's about managing risk and capitalizing on probability and mastering the psychology.",
  mentorshipCard: {
    headline: "1:1 Mentorship Available",
    subheadline: "This service is exclusive for intermediate, advanced traders, business owners and entrepreneurs seeking personalized guidance. Khan offers exclusive one on one mentorship session in his personal trading room.",
    cta: "Apply for Mentorship"
  }
};

export const successStoriesData = {
  title: "Success Stories",
  subtitle: "Real Results from Real Traders",
  stories: [
    {
      id: 1,
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      role: "Former Accountant",
      quote: "I went from complete beginner to making consistent profits in just 3 weeks. Khan's mentorship changed my life.",
      profit: "+47% in 3 months"
    },
    {
      id: 2,
      name: "James T.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Software Engineer",
      quote: "The trade copier alone paid for the course 10x over. The community support is incredible.",
      profit: "+62% in 2 months"
    },
    {
      id: 3,
      name: "Maria L.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "Marketing Manager",
      quote: "The journaling feature helped me identify and fix my bad habits. Now I trade with confidence.",
      profit: "+35% in 6 weeks"
    }
  ]
};

export const spotsClaimed = {
  total: 100,
  claimed: 67,
  discount: "25% OFF",
  affiliateDiscount: "50% OFF",
  title: "First 100 Members Get 25% Off",
  subtitle: "Refer 5 Friends & Get 50% Off!",
  urgencyText: "Only 33 spots remaining at early bird pricing!",
  affiliateBonus: "+ FREE Trading Ebook"
};

export const affiliateData = {
  title: "Affiliate Program",
  subtitle: "Earn While You Learn",
  description: "Share Quantum Trading Mastery with your network and unlock exclusive rewards",
  tiers: [
    { id: 1, referrals: 1, reward: "10% Commission", description: "Earn on every referral" },
    { id: 2, referrals: 3, reward: "Free Ebook", description: "Trading Psychology Guide" },
    { id: 3, referrals: 5, reward: "50% Discount", description: "On your course enrollment" }
  ],
  preLaunchBonus: "Pre-Launch Special: Refer 5 friends before Feb 1st, 2026 and get 50% OFF + Free Ebook!",
  postLaunchNote: "After first 100 registrations, affiliate discount becomes 25%"
};

export const packagesData = {
  title: "How Much Will It Cost You?",
  subtitle: "Choose Your Trading Journey",
  packages: [
    {
      id: 1,
      name: "Starter",
      price: "Free",
      priceNote: "",
      cta: "Start Free",
      ctaIcon: "play",
      supportingLine: "No cost. No pressure. Learn the basics and understand how professional trading really works.",
      features: [
        "Access to Beginner Course (10 modules)",
        "Access to Journal (1 month free)",
        "Access to Telegram Channel",
        "Access to Weekly Webinar",
        "Access to Trading Community"
      ],
      highlight: false,
      badge: null
    },
    {
      id: 2,
      name: "Foundation Trader",
      price: "$99",
      priceNote: "/ monthly subscription",
      cta: "Build Your Foundation",
      ctaIcon: "layers",
      supportingLine: "Learn market structure, risk management, and execution the right way—step by step.",
      features: [
        "Everything in Starter",
        "Access to Intermediate Course (10 modules)",
        "Journaling (3 months free)",
        "Copy Trading (3 months free)",
        "Weekly Webinar Access",
        "Free E-book",
        "Quantum Mastery Candle Chart",
        "Lifetime Community Access",
        "Access to Leaderboard"
      ],
      highlight: false,
      badge: "Popular"
    },
    {
      id: 3,
      name: "Group Learning Program",
      price: "$1,299",
      priceNote: "4 weeks program",
      cta: "Join the Community",
      ctaIcon: "users",
      supportingLine: "Learn live with guidance, structure, accountability, and like-minded traders on the same journey.",
      note: "Min 7 people, Max 10 people per group",
      features: [
        "Everything in Foundation Trader",
        "Access to Advanced Course (10 modules)",
        "Private Group Mentoring Sessions x 4",
        "Live Trading Group Session x 4",
        "Quantum Edge Journaling (6 months free)",
        "Quantum Edge Copy Trading (6 months free)",
        "Access to Monthly Competition",
        "Exclusive Invitation to Events"
      ],
      highlight: true,
      badge: "Best Value"
    },
    {
      id: 4,
      name: "1:1 Mentorship",
      price: "Custom",
      priceNote: "7 days program",
      cta: "Apply for 1:1 Mentorship",
      ctaIcon: "crown",
      supportingLine: "Work directly with me. Personal strategy, mindset coaching, and real execution feedback.",
      features: [
        "Complete Trading Mastery Course",
        "1:1 Mentorship Session with Khan Hazara x 5",
        "Access to Khan Hazara Trading Room x 5",
        "Lifetime Community Access",
        "VIP Telegram Group",
        "Quantum Edge Journal (12 months free)",
        "Quantum Edge Copier (12 months free)",
        "Access to Competition & Win Prizes",
        "VIP Event Access",
        "Leadership Ranking",
        "Invite to Global Events",
        "Career Opportunity"
      ],
      highlight: false,
      badge: "Mastery"
    }
  ]
};

export const includedData = {
  title: "What's Included",
  subtitle: "Everything You Need to Succeed",
  items: [
    { id: 1, icon: "GraduationCap", title: "Trading Mastery Course", description: "Complete A-Z curriculum" },
    { id: 2, icon: "Users", title: "1:1 Mentorship with Khan", description: "3 personal sessions" },
    { id: 3, icon: "Infinity", title: "Lifetime Community Access", description: "Never expire" },
    { id: 4, icon: "Copy", title: "Trade Copier", description: "2 months free access" },
    { id: 5, icon: "FileText", title: "Professional Trading Journal", description: "Track every trade" },
    { id: 6, icon: "Video", title: "Live Trading Room Access", description: "1 session per week" },
    { id: 7, icon: "Trophy", title: "Competition Entry & Leaderboard", description: "Win prizes" },
    { id: 8, icon: "BookOpen", title: "Trading Ebook Bonus", description: "For affiliates who refer 5+" }
  ]
};

export const faqData = {
  title: "Frequently Asked Questions",
  subtitle: "Got Questions? We've Got Answers",
  faqs: [
    {
      id: 1,
      question: "Do I need any prior trading experience?",
      answer: "No! Our program is designed for complete beginners. We start from the absolute basics and build up to advanced strategies in just 7 days."
    },
    {
      id: 2,
      question: "How does the 1:1 mentorship work?",
      answer: "You'll receive 5 personal sessions with Khan Hazara himself in his private trading room. These sessions are scheduled at your convenience and focus on your specific trading goals and challenges."
    },
    {
      id: 3,
      question: "What is the Trade Copier?",
      answer: "The Trade Copier automatically mirrors Khan's live trades to your account. This allows you to learn by doing while potentially profiting from expert trades."
    },
    {
      id: 4,
      question: "How does the affiliate program work?",
      answer: "Refer friends to join the waiting list. Once you refer 5 friends before launch, you'll receive 50% off your enrollment plus a free Trading Psychology Ebook. After the first 100 registrations, affiliate discount becomes 25%."
    },
    {
      id: 5,
      question: "When does the course launch?",
      answer: "Quantum Trading Mastery launches on February 1st, 2026. Join the waiting list now to secure your spot and get exclusive early-bird pricing."
    },
    {
      id: 6,
      question: "What's the difference between packages?",
      answer: "Starter is free for beginners. Foundation Trader ($99/mo) adds intermediate content and tools. Group Learning ($1,299) includes advanced modules with live sessions. 1:1 Mentorship is our premium offering with direct access to Khan Hazara."
    }
  ]
};

export const dashboardPreviewData = {
  title: "Interactive Dashboard Preview",
  subtitle: "Your Complete Trading Command Center",
  stats: [
    { label: "Total Profit", value: "$12,450", change: "+23.5%" },
    { label: "Win Rate", value: "87%", change: "+5.2%" },
    { label: "Active Trades", value: "4", change: "+2" },
    { label: "Portfolio Value", value: "$45,890", change: "+12.8%" }
  ],
  trades: [
    { pair: "EUR/USD", type: "BUY", profit: "+$234", status: "open" },
    { pair: "GBP/JPY", type: "SELL", profit: "+$567", status: "closed" },
    { pair: "XAU/USD", type: "BUY", profit: "+$890", status: "closed" },
    { pair: "BTC/USD", type: "BUY", profit: "-$123", status: "open" }
  ]
};

export const dashboardFeatures = {
  title: "Powerful Dashboard Features",
  subtitle: "Everything synced in real-time across all your devices",
  features: [
    { id: "metrics", icon: "BarChart3", title: "Dashboard Metrics", description: "Real-time P&L, win rate, drawdown, and 50+ performance metrics" },
    { id: "calendar", icon: "Calendar", title: "Calendar View", description: "Visualize your trades by day, week, or month with profit heatmaps" },
    { id: "journal", icon: "BookOpen", title: "Trade Journal", description: "Log emotions, screenshots, and notes for every trade" },
    { id: "accounts", icon: "Wallet", title: "Multi-Account Setup", description: "Connect unlimited MT4/MT5 accounts from any broker" },
    { id: "copier", icon: "Copy", title: "Copy Traders", description: "Mirror top performers' trades automatically to your accounts" },
    { id: "competition", icon: "Trophy", title: "Competition & Leaderboard", description: "Compete with other traders and climb the rankings" },
    { id: "community", icon: "Users", title: "Community Forum", description: "Share analysis, discuss strategies, and chat with fellow traders" },
    { id: "affiliate", icon: "Gift", title: "Affiliate Center", description: "Track your referrals and earn rewards" }
  ]
};

export const calendarJournalData = {
  title: "Calendar Journaling",
  subtitle: "Track Every Trade, Every Day",
  description: "Our intelligent calendar view helps you identify patterns in your trading behavior and optimize your schedule for maximum profitability.",
  features: [
    "Color-coded profit/loss days",
    "Click any day to view trade details",
    "Weekly and monthly summaries",
    "Export reports for tax purposes"
  ],
  sampleDays: [
    { date: 1, profit: 234, trades: 3 },
    { date: 2, profit: -89, trades: 2 },
    { date: 3, profit: 456, trades: 5 },
    { date: 4, profit: 123, trades: 2 },
    { date: 5, profit: -45, trades: 1 },
    { date: 6, profit: 0, trades: 0 },
    { date: 7, profit: 0, trades: 0 },
    { date: 8, profit: 567, trades: 4 },
    { date: 9, profit: 234, trades: 3 },
    { date: 10, profit: -123, trades: 2 },
    { date: 11, profit: 789, trades: 6 },
    { date: 12, profit: 345, trades: 3 },
    { date: 13, profit: 0, trades: 0 },
    { date: 14, profit: 0, trades: 0 },
    { date: 15, profit: 456, trades: 4 },
    { date: 16, profit: 234, trades: 2 },
    { date: 17, profit: -67, trades: 1 },
    { date: 18, profit: 890, trades: 5 },
    { date: 19, profit: 123, trades: 2 },
    { date: 20, profit: 0, trades: 0 },
    { date: 21, profit: 0, trades: 0 }
  ]
};

export const chatbotData = {
  welcomeMessage: "Hi! I'm your Quantum Trading assistant. How can I help you today?",
  suggestions: [
    "Tell me about the course",
    "What packages are available?",
    "How does the affiliate work?",
    "Dashboard features"
  ],
  responses: {
    "Tell me about the course": "Quantum Trading Mastery is a comprehensive trading program with 3 levels: Beginner, Intermediate, and Advanced. Each level has 10 modules with video lessons and must be completed with a quiz before moving to the next level.",
    "What packages are available?": "We offer 4 packages: Starter (Free), Foundation Trader ($99/mo), Group Learning ($1,299 for 4 weeks), and 1:1 Mentorship (Custom pricing for 7 days). Each offers progressively more features and direct access to Khan Hazara.",
    "How does the affiliate work?": "Refer 5 friends before launch and get 50% OFF your course + a FREE Trading Ebook! After the first 100 registrations, affiliate discount becomes 25%. You also earn 10% commission on every successful referral.",
    "Dashboard features": "Our dashboard includes: Real-time metrics, Calendar journaling, Multi-account sync, Copy trading, Competition leaderboards, Community forum, Course progress tracking, and Affiliate center."
  }
};

// Course Data for Dashboard
export const courseData = {
  levels: [
    {
      id: 1,
      name: "Beginner",
      description: "Master the fundamentals of trading",
      icon: "Sprout",
      color: "#70DB3E",
      locked: false,
      progress: 60,
      completedLessons: 6,
      totalLessons: 10,
      quizPassed: false,
      lessons: [
        { id: 1, title: "Introduction to Trading", duration: "15 min", completed: true, type: "video" },
        { id: 2, title: "Understanding Markets", duration: "20 min", completed: true, type: "video" },
        { id: 3, title: "Trading Terminology", duration: "18 min", completed: true, type: "video" },
        { id: 4, title: "Chart Basics", duration: "25 min", completed: true, type: "video" },
        { id: 5, title: "Candlestick Patterns", duration: "30 min", completed: true, type: "video" },
        { id: 6, title: "Support & Resistance", duration: "22 min", completed: true, type: "video" },
        { id: 7, title: "Trend Identification", duration: "20 min", completed: false, type: "video" },
        { id: 8, title: "Basic Indicators", duration: "28 min", completed: false, type: "video" },
        { id: 9, title: "Risk Introduction", duration: "18 min", completed: false, type: "video" },
        { id: 10, title: "Your First Trade", duration: "35 min", completed: false, type: "video" }
      ]
    },
    {
      id: 2,
      name: "Intermediate",
      description: "Develop advanced trading strategies",
      icon: "TrendingUp",
      color: "#FFB800",
      locked: true,
      progress: 0,
      completedLessons: 0,
      totalLessons: 10,
      quizPassed: false,
      lessons: [
        { id: 1, title: "Advanced Chart Patterns", duration: "25 min", completed: false, type: "video" },
        { id: 2, title: "Fibonacci Trading", duration: "30 min", completed: false, type: "video" },
        { id: 3, title: "Moving Averages Mastery", duration: "28 min", completed: false, type: "video" },
        { id: 4, title: "RSI & MACD Strategies", duration: "32 min", completed: false, type: "video" },
        { id: 5, title: "Volume Analysis", duration: "22 min", completed: false, type: "video" },
        { id: 6, title: "Multiple Timeframes", duration: "26 min", completed: false, type: "video" },
        { id: 7, title: "Entry Strategies", duration: "30 min", completed: false, type: "video" },
        { id: 8, title: "Exit Strategies", duration: "28 min", completed: false, type: "video" },
        { id: 9, title: "Position Sizing", duration: "24 min", completed: false, type: "video" },
        { id: 10, title: "Building Your System", duration: "35 min", completed: false, type: "video" }
      ]
    },
    {
      id: 3,
      name: "Advanced",
      description: "Master professional trading techniques",
      icon: "Crown",
      color: "#FF6B6B",
      locked: true,
      progress: 0,
      completedLessons: 0,
      totalLessons: 10,
      quizPassed: false,
      lessons: [
        { id: 1, title: "Institutional Trading", duration: "35 min", completed: false, type: "video" },
        { id: 2, title: "Order Flow Analysis", duration: "40 min", completed: false, type: "video" },
        { id: 3, title: "Smart Money Concepts", duration: "38 min", completed: false, type: "video" },
        { id: 4, title: "Liquidity Trading", duration: "32 min", completed: false, type: "video" },
        { id: 5, title: "News Trading", duration: "28 min", completed: false, type: "video" },
        { id: 6, title: "Correlation Trading", duration: "30 min", completed: false, type: "video" },
        { id: 7, title: "Portfolio Management", duration: "35 min", completed: false, type: "video" },
        { id: 8, title: "Trading Psychology", duration: "40 min", completed: false, type: "video" },
        { id: 9, title: "Automation Basics", duration: "45 min", completed: false, type: "video" },
        { id: 10, title: "Becoming a Pro Trader", duration: "50 min", completed: false, type: "video" }
      ]
    }
  ]
};

// Full Dashboard Mock Data
export const fullDashboardData = {
  user: {
    name: "John Trader",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rank: 12,
    memberSince: "2024-01-15",
    referrals: 3,
    affiliateDiscount: "25%"
  },
  accounts: [
    { id: 1, name: "IC Markets MT5", broker: "IC Markets", balance: 25430, currency: "USD", connected: true },
    { id: 2, name: "Pepperstone MT4", broker: "Pepperstone", balance: 15200, currency: "USD", connected: true },
    { id: 3, name: "XM Demo", broker: "XM", balance: 100000, currency: "USD", connected: false }
  ],
  metrics: {
    totalProfit: 12450,
    totalProfitPercent: 23.5,
    winRate: 87,
    totalTrades: 156,
    avgWin: 245,
    avgLoss: 89,
    profitFactor: 2.8,
    maxDrawdown: 8.5,
    bestDay: 1250,
    worstDay: -450,
    avgTradesPerDay: 3.2,
    sharpeRatio: 1.85
  },
  recentTrades: [
    { id: 1, pair: "EUR/USD", type: "BUY", entry: 1.0856, exit: 1.0892, profit: 234, date: "2025-01-15", notes: "Breakout trade" },
    { id: 2, pair: "GBP/JPY", type: "SELL", entry: 188.45, exit: 187.89, profit: 567, date: "2025-01-15", notes: "Trend continuation" },
    { id: 3, pair: "XAU/USD", type: "BUY", entry: 2045.50, exit: 2068.30, profit: 890, date: "2025-01-14", notes: "Safe haven play" },
    { id: 4, pair: "BTC/USD", type: "BUY", entry: 42500, exit: 42150, profit: -123, date: "2025-01-14", notes: "Stop hit early" }
  ],
  leaderboard: {
    live: [
      { rank: 1, name: "TradingKing99", profit: 45230, winRate: 94, country: "AU", countryFlag: "🇦🇺", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" },
      { rank: 2, name: "ForexQueen", profit: 38900, winRate: 91, country: "US", countryFlag: "🇺🇸", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face" },
      { rank: 3, name: "CryptoMaster", profit: 34500, winRate: 89, country: "UK", countryFlag: "🇬🇧", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" },
      { rank: 4, name: "GoldTrader", profit: 28900, winRate: 88, country: "DE", countryFlag: "🇩🇪", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" },
      { rank: 5, name: "SwingPro", profit: 25600, winRate: 86, country: "CA", countryFlag: "🇨🇦", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" },
      { rank: 6, name: "AlphaTrader", profit: 22100, winRate: 84, country: "JP", countryFlag: "🇯🇵", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face" },
      { rank: 7, name: "TrendRider", profit: 19800, winRate: 82, country: "SG", countryFlag: "🇸🇬", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face" }
    ],
    demo: [
      { rank: 1, name: "DemoKing", profit: 125000, winRate: 96, country: "AU", countryFlag: "🇦🇺", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face" },
      { rank: 2, name: "PracticeQueen", profit: 98500, winRate: 92, country: "NZ", countryFlag: "🇳🇿", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face" },
      { rank: 3, name: "SimTrader", profit: 87200, winRate: 90, country: "IN", countryFlag: "🇮🇳", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face" },
      { rank: 4, name: "VirtualPro", profit: 72500, winRate: 88, country: "BR", countryFlag: "🇧🇷", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" },
      { rank: 5, name: "TestMaster", profit: 65800, winRate: 85, country: "MX", countryFlag: "🇲🇽", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" },
      { rank: 6, name: "PaperTrader", profit: 58200, winRate: 83, country: "FR", countryFlag: "🇫🇷", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face" },
      { rank: 7, name: "SimPro", profit: 51000, winRate: 81, country: "IT", countryFlag: "🇮🇹", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" }
    ]
  },
  competitions: [
    {
      id: 1,
      title: "December 2024 Challenge",
      status: "past",
      prize: "$5,000",
      participants: 234,
      winner: "TradingKing99",
      winnerProfit: "+45.2%",
      startDate: "2024-12-01",
      endDate: "2024-12-31"
    },
    {
      id: 2,
      title: "January 2025 Trading Battle",
      status: "current",
      prize: "$10,000",
      participants: 312,
      registered: true,
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      daysLeft: 6
    },
    {
      id: 3,
      title: "February 2025 Grand Prix",
      status: "upcoming",
      prize: "$15,000",
      startDate: "2025-02-01",
      endDate: "2025-02-28",
      registrationOpen: true
    }
  ],
  communityPosts: [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
      content: "Just closed a perfect EUR/USD trade using the Quantum method! 📈 +2.5% today",
      likes: 45,
      comments: 12,
      time: "2 hours ago",
      topic: "Analysis",
      hasAttachment: false
    },
    {
      id: 2,
      author: "James T.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      content: "Analysis: Gold looking bullish on the 4H timeframe. Key level at 2050. Who's watching?",
      likes: 32,
      comments: 8,
      time: "4 hours ago",
      topic: "Analysis",
      hasAttachment: true,
      attachmentType: "image",
      attachmentUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400"
    },
    {
      id: 3,
      author: "Khan Hazara",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face",
      content: "Live trading session tomorrow at 9 AM EST! We'll be covering the NFP release strategy. Don't miss it! 🔥",
      likes: 156,
      comments: 43,
      time: "6 hours ago",
      isPinned: true,
      topic: "Announcement",
      hasAttachment: false
    },
    {
      id: 4,
      author: "Maria L.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      content: "Check out my analysis video on EUR/GBP setup. Strong support zone forming at 0.8450.",
      likes: 67,
      comments: 23,
      time: "8 hours ago",
      topic: "Education",
      hasAttachment: true,
      attachmentType: "video"
    }
  ],
  chatMessages: [
    { id: 1, author: "Mike T.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face", message: "Anyone watching gold right now?", time: "2 min ago" },
    { id: 2, author: "Sarah M.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face", message: "Yes! Looking for a breakout above 2065", time: "1 min ago" },
    { id: 3, author: "Khan Hazara", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face", message: "Good call Sarah. Wait for confirmation.", time: "just now" }
  ],
  forumTopics: ["Analysis", "Discussion", "Education", "Announcement", "Strategy", "Results"],
  copyTraders: [
    { id: 1, name: "Khan Hazara", profit: 892, winRate: 94, followers: 1250, copyCost: "Free with course" },
    { id: 2, name: "ProTrader Mike", profit: 67, winRate: 88, followers: 430, copyCost: "$49/mo" },
    { id: 3, name: "SwingMaster", profit: 54, winRate: 85, followers: 280, copyCost: "$29/mo" }
  ]
};
