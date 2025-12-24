import { Zap, Calendar, Star, Share2, Users, Copy } from "lucide-react";

export default function EarnPoints() {
  return (
    <div className="space-y-8">
      {/* Your Rewards Journey */}
      <div>
        <h2 className="flex items-center text-lg font-semibold mb-4 border-l-4 border-[#9301fe] pl-3">
          Your Rewards Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {/* Top row */}
            <div className="bg-[#eef2ff] flex items-center gap-2 px-4 py-3 rounded-t-lg">
              <svg
                className="w-6 h-6 text-[#9301fe]"
                viewBox="0 0 384 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
                ></path>
              </svg>

              <h3 className="font-semibold text-gray-700">Points Balance</h3>
            </div>

            {/* Points row */}
            <div className="flex justify-between items-center px-4 my-8">
              <span className="text-3xl font-bold text-[#9301fe]">0</span>

              <img
                src="/coin.png"
                alt="coin spinning"
                className="w-15 h-auto"
              />
            </div>

            {/* Progress row */}
            <div className="px-4 mt-8 space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Progress to $5 Gift Card</span>
                <span>0 / 5000</span>
              </div>
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-[#9301fe] rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            {/* Info text */}
            <p className="px-4 mt-2 mb-6  text-gray-500 text-sm">
              🚀 Just getting started - keep earning points!
            </p>
          </div>

          {/* Second card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {/* Top row */}
            <div className="bg-[#eef2ff] flex items-center gap-2 px-4 py-3 rounded-t-lg">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 text-[#70d6ff]"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"></path>
                </svg>

                <h3 className="font-semibold text-gray-700 text-lg">
                  Daily Streak
                </h3>
              </div>
            </div>

            {/* Center wrapper */}
            <div className="flex flex-col items-center text-center px-4 py-4">
              {/* Streak value */}
              <div className="w-full">
                <p className="mt-2 text-3xl font-bold text-[#9301fe] text-left">
                  0 day
                </p>
              </div>

              {/* Day markers */}
              <div className="flex flex-wrap justify-center gap-3 mt-4 w-full">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, index) => (
                  <div
                    key={index}
                    className={`
            w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold
            bg-gray-200 text-gray-600
            ${index === 0 ? "border-2 border-[#9301fe]" : ""}
          `}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Info text */}
              <p className="text-gray-600 text-sm mt-4">
                Check in daily to earn +5 points
              </p>

              {/* Claim button */}
              <button className="flex items-center gap-2 bg-[#9013fe] hover:bg-[#7a0dde] text-white px-8 py-2 rounded-full mt-4 transition cursor-pointer">
                <Zap className="w-4 h-4" />
                Claim Today's Points
              </button>
            </div>
          </div>

          {/* Third card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Top row */}
            <div className="bg-gradient-to-r from-[#9013fe] to-[#4ac8ff] text-white px-4 py-5 flex items-start justify-between">
              <div>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>

                <h3 className="text-lg font-semibold mt-3">
                  Top Tool Spotlight
                </h3>
                <p className="text-md font-medium opacity-90 mt-1">Reclaim</p>
              </div>

              <img
                src="/reclaim.png"
                alt="Reclaim"
                className="rounded-full h-[64px] w-[64px] shadow-md"
              />
            </div>

            {/* Content row */}
            <div className="px-4 py-5 text-gray-700">
              <div className="flex items-start gap-3">
                <Calendar className="text-[#9013fe] w-8 h-8 mt-1 flex-shrink-0" />

                <div>
                  <h4 className="font-semibold text-base leading-snug">
                    Automate and Optimize Your Schedule
                  </h4>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Reclaim.ai is an AI-powered calendar assistant that
                    automatically schedules your tasks, meetings, and breaks to
                    boost productivity. Free to try — earn Flowwa Points when
                    you sign up!
                  </p>
                </div>
              </div>
            </div>

            {/* Action row */}
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              {/* Signup button */}
              <button className="flex items-center gap-2 bg-[#9013fe] hover:bg-[#7a0dde] text-white px-5 py-2 rounded-full text-sm transition font-medium cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 640 512">
                  <path
                    fill="currentColor"
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                  ></path>
                </svg>
                Sign up
              </button>

              {/* Claim button */}
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#9013fe] to-[#ff647f] text-white px-5 py-2 rounded-full text-sm transition font-medium hover:opacity-90 cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 640 512">
                  <path
                    fill="currentColor"
                    d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"
                  ></path>
                </svg>
                Claim 50 pts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Earn your points */}
      <div className="mt-8">
        <h2 className="flex items-center text-lg font-semibold mb-4 border-l-4 border-[#a11cfe] pl-3">
          Earn your points
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card one */}
          <div className="rounded-xl border border-transparent hover:border-[#a11cfe] transition cursor-pointer overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {/* Top row */}
            <div className="bg-white px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fcf4fc] flex items-center justify-center">
                <Star size={20} className="text-[#a11cfe]" />
              </div>

              <h3 className="font-semibold text-gray-800">
                Refer and win 10,000 points!
              </h3>
            </div>

            {/* Body */}
            <div className="bg-gray-50 px-5 py-4">
              <p className="text-sm text-black font-semibold leading-relaxed">
                Invite 3 friends by Nov 20 and earn a chance to be one of 5
                winners of{" "}
                <span className="text-[#a11cfe] font-medium">
                  10,000 points.
                </span>{" "}
                Friends must complete onboarding to qualify.
              </p>
            </div>
          </div>

          {/* Card two */}
          <div className="rounded-xl border border-transparent hover:border-[#a11cfe] transition cursor-pointer overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {/* Top row */}
            <div className="bg-white px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fcf4fc] flex items-center justify-center">
                <Share2 size={20} className="text-[#a11cfe]" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Share Your Stack
                </h3>
                <p className="text-xs text-gray-500"> Earn +25 pts</p>
              </div>
            </div>

            {/* Body */}
            <div className="bg-gray-50 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-black">
                  Share your tool stack
                </p>

                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#eef2ff] text-[#a11cfe] text-sm font-medium transition hover:bg-[#a11cfe] hover:text-white cursor-pointer">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refer & Earn */}
      <div className="mt-8">
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <span className="w-1 h-6 bg-[#a11cfe] rounded mr-3" />
          Refer & Earn
        </h2>

        <div className="bg-[#f9fafb] rounded-xl shadow-xs overflow-hidden">
          {/* Top info strip */}
          <div className="flex items-center gap-3 px-6 py-4 bg-[#f1f5ff]">
            <div className="w-10 h-10 flex items-center justify-center text-[#a11cfe]">
              <Users size={24} />
            </div>

            <div>
              <p className="font-semibold text-lg text-gray-800">
                Share Your Link
              </p>
              <p className="text-sm text-gray-600">
                Invite friends and earn 25 points when they join!
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 text-center py-6">
            <div>
              <p className="text-2xl font-semibold text-[#a11cfe]">0</p>
              <p className="text-sm text-gray-600">Referrals</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#a11cfe]">0</p>
              <p className="text-sm text-gray-600">Points Earned</p>
            </div>
          </div>

          {/* Referral link */}
          <div className="px-6 pb-6">
            <p className="text-sm text-gray-700 mb-2">
              Your personal referral link:
            </p>

            <div className="flex items-center gap-2 bg-[#faf7ff] border border-gray-200 rounded-lg px-4 py-3">
              <input
                readOnly
                value="https://app.flowvahub.com/signup/?ref=eddie7941"
                className="flex-1 bg-transparent text-sm outline-none"
              />

              <button className="text-[#a11cfe] hover:opacity-80 transition">
                {/* Copy icon */}
                <Copy size={22} className="cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-5 pb-6">
            {/* Facebook */}
            <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center cursor-pointer transform transition hover:scale-110">
              <svg
                viewBox="0 0 320 512"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </div>

            {/* X */}
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center cursor-pointer transform transition hover:scale-110">
              <svg
                viewBox="0 0 512 512"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </div>

            {/* LinkedIn */}
            <div className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center cursor-pointer transform transition hover:scale-110">
              <svg
                viewBox="0 0 448 512"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </div>

            {/* WhatsApp */}
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer transform transition hover:scale-110">
              <svg
                viewBox="0 0 448 512"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
