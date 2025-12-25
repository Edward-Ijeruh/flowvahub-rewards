import { useState } from "react";
import EarnPoints from "../components/rewards/EarnPoints";
import RedeemRewards from "../components/rewards/RedeemRewards";

export default function Rewards() {
  const [activeFilter, setActiveFilter] = useState<"earn" | "redeem">("earn");

  return (
    <div className="w-full h-full px-4 py-2 md:px-8 md:py-6">
      {/* Top row*/}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl ml-10 md:ml-0">Rewards Hub</h1>

        {/* Notification bell */}
        <div className="relative">
          <div className="w-11 h-11 rounded-full bg-[#e2e8f0] flex items-center justify-center cursor-pointer hover:bg-gray-300 transition group">
            <svg
              width="18"
              height="18"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="text-gray-600 transition-colors group-hover:text-[#a11cfe]"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
          </div>

          {/* Notification count */}
          <span className="absolute top-1 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center subtle-pulse">
            2
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-base mb-4">
        Earn points, unlock rewards, and celebrate your progress!
      </p>

      {/* Top filters */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveFilter("earn")}
          className={`px-4 py-2 rounded-t-lg transition duration-300 ease-in-out cursor-pointer ${
            activeFilter === "earn"
              ? "border-b-3 border-[#a11cfe] text-[#a11cfe] bg-[#f3eefb]"
              : "text-gray-500 hover:bg-[#f3eefb]"
          }`}
        >
          Earn Points
        </button>

        <button
          onClick={() => setActiveFilter("redeem")}
          className={`px-4 py-2 rounded-t-lg transition duration-300 ease-in-out cursor-pointer ${
            activeFilter === "redeem"
              ? "border-b-3 border-[#a11cfe] text-[#a11cfe] bg-[#f3eefb]"
              : "text-gray-500 hover:bg-[#f3eefb]"
          }`}
        >
          Redeem Rewards
        </button>
      </div>

      {/* Render Filtered Component */}
      <div>{activeFilter === "earn" ? <EarnPoints /> : <RedeemRewards />}</div>
    </div>
  );
}
