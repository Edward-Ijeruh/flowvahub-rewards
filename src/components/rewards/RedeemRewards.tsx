import { useState } from "react";
import { RewardsFilter } from "./RewardsFilter";
import { rewards } from "../../lib/rewardsData";

export default function RedeemRewards() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "unlocked" | "locked" | "coming-soon"
  >("all");

  // Filter counts
  const filterCounts = {
    all: rewards.length,
    unlocked: rewards.filter((r) => r.status === "unlocked").length,
    locked: rewards.filter((r) => r.status === "locked").length,
    "coming-soon": rewards.filter((r) => r.status === "coming-soon").length,
  };

  // Filtered rewards
  const filteredRewards = rewards.filter((reward) => {
    if (activeFilter === "all") return true;
    return reward.status === activeFilter;
  });

  return (
    <section>
      {/* Header */}
      <h2 className="flex items-center text-lg font-semibold mb-4 border-l-4 border-[#9301fe] pl-3">
        Redeem Your Points
      </h2>

      {/* Filter  */}
      <RewardsFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterCounts={filterCounts}
      />

      {/* Rewards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
        {filteredRewards.map((reward) => (
          <div
            key={reward.id}
            className="flex flex-col items-center p-4 rounded-xl border border-[#f0e4fe] shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative
                 opacity-60 cursor-not-allowed"
          >
            {/* Emoji box */}
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#eee0fe] mb-4 text-3xl">
              {reward.emoji}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-gray-800 text-center mb-1">
              {reward.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 text-center mb-2">
              {reward.status === "coming-soon"
                ? "Coming Soon"
                : `${reward.description}`}
            </p>

            {/* Points */}
            <div className="flex items-center gap-1 mb-4">
              <span>⭐</span>
              <span className="text-[#a11cfe] font-medium">
                {reward.pointsRequired} pts
              </span>
            </div>

            {/* Button */}
            <button
              disabled
              className="bg-[#e1e8f1] w-full text-gray-500 px-4 py-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-80"
            >
              {reward.status === "locked" ? "Locked" : "Coming Soon"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
