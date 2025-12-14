import { Copy } from "./types";

export const en: Copy = {
  metadata: {
    title: "Teseract - Everything in one place",
    description:
      "Turn your finances into a game you can finally win. Track net worth, goals, daily spending, and connect to an AI agent that acts on your data.",
  },
  header: {
    tagline: "everything in one place",
    nav: {
      features: "Features",
      goals: "Goals",
      aiAgent: "AI Financial Agent",
      faq: "FAQ",
    },
    cta: {
      full: "Join the waitlist",
      short: "Get access",
    },
    language: {
      toggle: "ES",
      aria: "Switch language",
    },
  },
  hero: {
    badges: [
      "Built for people who want to actually win with money",
      "Powered with AI",
    ],
    title: "Turn your finances into a game you can",
    highlight: "finally win.",
    description:
      "Teseract is your financial command center: net worth, missions, daily spending and visual goals—all in one place to keep you moving forward.",
    cta: "Get early access",
    bullets: [
      "Get an AI Agent that analyzes your data and gives you actionable insights",
      "Track net worth, debts, cashflow, daily spending and subscriptions",
      "Complete missions, unlock achievements",
      "Measure your progress with monthly reports",
    ],
    dashboard: {
      title: "Dashboard • Teseract",
      character: "Your character",
      classLabel: "Class: Builder",
      titleLabel: "Title: Net Worth Architect",
      xp: "1,240 / 2,000 XP",
      xpChange: "+120 this week",
      netWorthLabel: "Net worth",
      netWorth: "£ 18,450",
      netWorthChange: "+£1,250 this month",
      cashflowLabel: "Monthly cashflow",
      cashflow: "+£ 420",
      cashflowNote: "Stable • 4 sources",
      debtLabel: "Total debt",
      debt: "£ 14,450",
      debtChange: "-£350 vs last month",
      savingsLabel: "Savings rate",
      savingsStatus: "On track for goals",
      snapshotLabel: "SNAPSHOT",
      missionsTitle: "Missions • Education",
      missionSet: "Missions",
      missions: [
        {
          title: "Save £500 this month",
          reward: 'Reward: +150 pts • "Discipline" badge',
          progress: "60%",
        },
        {
          title: "Pay £300 of debt",
          reward: "Reward: +110 pts • Faster freedom",
          progress: "80%",
        },
        {
          title: "Finish one finance course",
          reward: "Reward: +90 pts • Progress boost",
          progress: "40%",
        },
      ],
      snapshot: {
        title: "SNAPSHOT",
        change: "+£ 1,670",
        body: "Net worth change in the last 30 days",
      },
    },
  },
  aiAgent: {
    badge: "AI Financial Agent",
    title: "Answers from an",
    highlight: "AI Agent",
    suffix: "that knows you",
    description:
      "No generic chat: the agent only speaks about your accounts, flows, and goals. It turns your data into clear, measurable actions with always-fresh context.",
    liveData: "Live data linked",
    youAsked: "You asked",
    agentInsight: "Agent insight",
    advisorPrefix: "It can also work as your",
    advisorTag: "financial advisor",
    chips: [
      "Next best action this week",
      "You can safely spend £X today",
      "This subscription is killing your cashflow",
      "What should I improve next month?",
    ],
    sampleQuestion: "Why did my cashflow drop this month?",
    sampleAnswer:
      "Subscriptions rose +£65 and food delivery +£40 vs last month. Pause 2 subs and cap delivery to twice a week and your cashflow normalizes in about 10 days.",
    sampleAction: "Next best action: pause 2 subs & set a 2 weekly delivery max. cap",
  },
  featuresIntro: {
    title: "Everything you need to",
    highlight: "master your finances",
    subtitle: "Powerful features designed to make financial management engaging and rewarding",
    monthlyReport: {
      badge: "Core premium feature",
      liveData: "Live data",
      monthlyLabel: "Monthly report",
      youAsked: "You asked",
      agentAnswer: "Agent answer",
      title: "Monthly reports with an interactive AI agent",
      description:
        "Every month-end you get an actionable report, not fluff. Ask instantly what happened, what to improve, and whether you're beating last quarter.",
      bullets: [
        "Contextual responses to your data",
        'Question examples: "Why did my cashflow drop?"',
        "Clear recommendations: next best action and safe limits",
      ],
      sampleQuestion: "Why did my cashflow drop this month?",
      sampleAnswer:
        "Subscriptions +£180 and dining +£120 vs last month. If you cap dining at £18/day and cancel 2 subs, you recover £210 next month.",
      sampleAction: "Next best action: lock subscriptions & adjust dining cap",
    },
  },
  features: [
    {
      id: "assets",
      title: "Track Your Assets",
      description:
        "Monitor all your assets in one place—cash, investments, property, and more. See your net worth grow in real time with beautiful visualizations and detailed breakdowns.",
      bullets: [
        "Real-time asset tracking",
        "Multiple asset categories",
        "Net worth visualization",
      ],
      image: { src: "/assets/assets.png", alt: "Assets Management" },
    },
    {
      id: "debts",
      title: "Manage Debts",
      description:
        "Track all your debts, see payment schedules, and watch your debt decrease as you complete missions. Get a clear view of your obligations and progress.",
      bullets: [
        "Complete debt overview",
        "Payment schedule tracking",
        "Progress visualization",
      ],
      image: { src: "/assets/debts.png", alt: "Debt Management" },
    },
    {
      id: "spending",
      title: "Daily Spending",
      description:
        "Monitor your daily expenses, set budgets, and get insights into your spending patterns. Understand where your money goes and make smarter decisions.",
      bullets: [
        "Real-time expense tracking",
        "Smart budget management",
        "Spending insights & analytics",
      ],
      image: { src: "/assets/daily_spending.png", alt: "Daily Spending" },
    },
    {
      id: "income",
      title: "Income Tracking",
      description:
        "Track all your income sources, see cashflow trends, and understand your financial health. Get a complete picture of your earnings and plan ahead.",
      bullets: [
        "Multiple income sources",
        "Cashflow visualization",
        "Income trend analysis",
      ],
      image: { src: "/assets/income.png", alt: "Income Tracking" },
    },
    {
      id: "subscriptions",
      title: "Subscription Management",
      description:
        "Keep track of all your subscriptions, avoid forgotten charges, and optimize recurring expenses. Never lose track of what you're paying for.",
      bullets: [
        "Complete subscription list",
        "Renewal date tracking",
        "Cost optimization insights",
      ],
      image: { src: "/assets/subscriptions.png", alt: "Subscription Management" },
    },
    {
      id: "missions",
      title: "Missions & Achievements",
      description:
        "Complete financial missions, earn XP, unlock achievements, and level up your financial game. Turn financial management into an engaging experience.",
      bullets: [
        "Structured financial goals",
        "XP and leveling system",
        "Unlockable achievements",
      ],
      image: {
        src: "/assets/financial_inventory_missions.png",
        alt: "Missions and achievements",
      },
    },
  ],
  goals: {
    badge: "Feature",
    title: "Visualize goals, make them real",
    description:
      "Bring your ambitions into a clear, measurable plan. See milestones, track momentum, and move from idea to execution with confidence.",
    bullets: [
      "Map goals into measurable, time-bound milestones",
      "Stay motivated with visual progress and momentum streaks",
      "Turn personal growth ideas into actionable weekly steps",
    ],
    exampleQuestion: "What is the best strategy to buy a car next year?",
    exampleAnswer:
      "To buy a car next year, target $18k: $12k down + $6k buffer. Shift $350/month from non-essentials, add $250/month from a side gig, and cap daily spending at $25. You'll hit it in about 12 months with room for fees.",
    exampleLabel: "Premium feature example",
    agentLabel: "AI Agent",
  },
  faq: {
    title: "Frequently Asked",
    highlight: "Questions",
    subtitle: "Everything you need to know about Teseract",
    items: [
      {
        q: "Why Teseract?",
        a: "At Teseract, we believe everyone should be the actor of their financial life. Teseract was born from a personal need: bringing everything into one place—no more scattered spreadsheets and apps—so you're not alone when starting out, growing wealth, or looking for clarity to make confident decisions.",
      },
      {
        q: "What is Teseract?",
        a: "Teseract is a financial management platform with missions and levels to keep you consistent. Track your net worth, complete missions, set goals and achieve them, unlock achievements, and steadily improve your financial health.",
      },
      {
        q: "What does the AI Agent do?",
        a: "The AI Agent is fully connected to your financial environment. You can ask it about any money topic: it acts as a tailored advisor and educator, reviews monthly reports, analyzes your situation, and suggests clear improvements—all personalized to your case.",
      },
      {
        q: "How does the gamification work?",
        a: "You earn XP by completing financial missions like saving money, paying off debt, or learning about finance. As you level up, you unlock new titles, badges, and achievements that reflect your financial progress.",
      },
      {
        q: "Is my financial data secure?",
        a: "Absolutely. We use bank-level encryption to protect your data. Your financial information is encrypted both in transit and at rest, and we never share your data with third parties.",
      },
      {
        q: "Can I use Teseract for free?",
        a: "Teseract offers a free tier with basic features. Premium plans unlock the AI Agent, advanced analytics and more. Join our waitlist to get early access and special pricing.",
      },
      {
        q: "When will Teseract be available?",
        a: "We're currently in beta testing. Join our waitlist to get early access and be notified when we launch publicly. Early supporters will receive exclusive benefits and discounts.",
      },
    ],
  },
  cta: {
    title: "Ready to",
    highlight: "level up",
    tail: "your finances?",
    subtitle: "Join us - turn your finances into a game you can finally win.",
    button: "Join the Waitlist",
    signups: "people already did",
  },
  footer: {
    tagline: "Turn your finances into a game you can finally win.",
    product: "Product",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    security: "Security",
    rights: `© ${new Date().getFullYear()} Teseract. All rights reserved.`,
  },
  waitlist: {
    title: "Join the Waitlist",
    subtitle:
      "Be among the first to experience Teseract. Get early access and exclusive updates.",
    placeholder: "Enter your email",
    consent: {
      prefix: "I agree to the",
      and: "and",
      suffix: ".",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
    errors: {
      consent: "Please accept the Privacy Policy and Terms to join.",
      generic: "Something went wrong. Please try again.",
    },
    cta: "Get Early Access",
    submitting: "Joining...",
    successTitle: "You're in!",
    successMessage: "We'll send you an email when Teseract is ready.",
  },
  legal: {
    privacy: {
      badge: "Privacy First",
      title: "Privacy Policy",
      lead: "We collect only what we need to run Teseract and keep you informed. No selling data, no hidden tricks—just transparent handling of your information.",
      updatedLabel: "Last updated:",
      contact: "Questions or requests? Email us at privacy@teseract.xyz.",
      sections: [
        {
          title: "1. What we collect",
          items: [
            "Email when you join the waitlist or sign up.",
            "Basic usage events to keep the service reliable and secure.",
          ],
        },
        {
          title: "2. How we use it",
          items: [
            "Send onboarding emails, product updates, and waitlist status.",
            "Improve reliability, performance, and security.",
          ],
        },
        {
          title: "3. Sharing & retention",
          body: "We don't sell your data. We use trusted processors (like email delivery) under strict agreements. Data is kept only as long as needed to operate the service or until you request deletion.",
        },
        {
          title: "4. Your rights",
          items: [
            "Access, correct, or delete your data.",
            "Unsubscribe from communications anytime.",
            "Contact us for any privacy request: privacy@teseract.xyz",
          ],
        },
        {
          title: "5. Contact",
          body: "Questions or requests? Email us at privacy@teseract.xyz.",
        },
      ],
    },
    terms: {
      badge: "Terms & Safety",
      title: "Terms of Service",
      lead: "Clear, simple ground rules so you know what to expect when using Teseract.",
      updatedLabel: "Last updated:",
      contact: "Questions? Reach us at support@teseract.com.",
      sections: [
        {
          title: "1. Acceptance",
          body: "By using Teseract you agree to these terms. If you don't agree, please do not use the service.",
        },
        {
          title: "2. Service",
          body: "Teseract helps you track finances, goals, and insights. Features may evolve as we improve the product.",
        },
        {
          title: "3. Use",
          items: [
            "You are responsible for the accuracy of your data.",
            "No misuse: no spam, abuse, or illegal activity.",
            "Use only where legally permitted in your region.",
          ],
        },
        {
          title: "4. Disclaimer",
          body: "Teseract is not a licensed financial advisor. Insights are informational and do not constitute financial advice.",
        },
        {
          title: "5. Liability",
          body: "Teseract is provided “as is”. We are not liable for losses arising from the use of the service, to the maximum extent allowed by law.",
        },
        {
          title: "6. Termination",
          body: "We may suspend or terminate accounts for misuse or legal reasons. You may stop using the service at any time.",
        },
        {
          title: "7. Contact",
          body: "Questions? Reach us at support@teseract.com.",
        },
      ],
    },
    security: {
      badge: "Security",
      title: "Security at Teseract",
      lead: "We protect your data with industry best practices so you can focus on your finances.",
      updatedLabel: "Last updated:",
      contact: "Security questions or reports? Email security@teseract.com.",
      sections: [
        {
          title: "Data Protection",
          items: [
            "Encryption in transit (HTTPS) for all traffic.",
            "Minimal data collection: email + necessary metadata only.",
          ],
        },
        {
          title: "Access & Control",
          items: [
            "Role-based access for internal tools.",
            "Data removal upon request; unsubscribe anytime.",
          ],
        },
        {
          title: "Vendors",
          body: "We work with trusted providers (e.g., email delivery) under data protection agreements. We do not sell your data.",
        },
        {
          title: "Contact",
          body: "Security questions or reports? Email security@teseract.com.",
        },
      ],
    },
  },
};
