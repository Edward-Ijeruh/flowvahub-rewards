export type RewardStatus = "unlocked" | "locked" | "coming-soon";

export type Reward = {
  id: number;
  title: string;
  pointsRequired: number;
  description: string;
  status: RewardStatus;
  emoji: string;
};
export const rewards: Reward[] = [
  {
    id: 1,
    title: "$5 Bank Transfer",
    pointsRequired: 5000,
    description: "The $5 equivalent will be transferred to your bank account.",
    status: "locked",
    emoji: "💸",
  },
  {
    id: 2,
    title: "$5 PayPal International",
    pointsRequired: 5000,
    description:
      "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
    status: "locked",
    emoji: "💸",
  },
  {
    id: 3,
    title: "$5 Virtual Visa Card",
    pointsRequired: 5000,
    description:
      "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
    status: "locked",
    emoji: "🎁",
  },
  {
    id: 4,
    title: "$5 Apple Gift Carde",
    pointsRequired: 5000,
    description:
      "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
    status: "locked",
    emoji: "🎁",
  },
  {
    id: 5,
    title: "$5 Google Play Card",
    pointsRequired: 5000,
    description:
      "Use this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store.",
    status: "locked",
    emoji: "🎁",
  },
  {
    id: 6,
    title: "$5 Amazon Gift Card",
    pointsRequired: 5000,
    description:
      "Get a $5 digital gift card to spend on your favorite tools or platforms.",
    status: "locked",
    emoji: "🎁",
  },
  {
    id: 7,
    title: "$10 Amazon Gift Card",
    pointsRequired: 5000,
    description:
      "Get a $10 digital gift card to spend on your favorite tools or platforms.",
    status: "locked",
    emoji: "🎁",
  },
  {
    id: 8,
    title: "Free Udemy Course",
    pointsRequired: 0,
    description: "Coming Soon!",
    status: "coming-soon",
    emoji: "📚",
  },
];
