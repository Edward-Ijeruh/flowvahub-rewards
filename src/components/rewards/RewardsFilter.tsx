import { useEffect, useRef, useState } from "react";
import { MoreHorizontal } from "lucide-react";

const FILTERS = [
  { key: "all", label: "All Rewards" },
  { key: "unlocked", label: "Unlocked" },
  { key: "locked", label: "Locked" },
  { key: "coming-soon", label: "Coming Soon" },
];

export function RewardsFilter({
  activeFilter,
  setActiveFilter,
  filterCounts,
}: {
  activeFilter: string;
  setActiveFilter: (key: any) => void;
  filterCounts: Record<string, number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [hiddenFilters, setHiddenFilters] = useState<typeof FILTERS>([]);
  const [openMenu, setOpenMenu] = useState(false);

  // Detect filters not in view
  useEffect(() => {
    const checkVisibility = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();

      const hidden = FILTERS.filter(({ key }) => {
        const btn = buttonRefs.current[key];
        if (!btn) return false;

        const rect = btn.getBoundingClientRect();
        return rect.right > containerRect.right - 40;
      });

      setHiddenFilters(hidden);
    };

    checkVisibility();
    window.addEventListener("resize", checkVisibility);
    return () => window.removeEventListener("resize", checkVisibility);
  }, []);

  const handleSelect = (key: string) => {
    setActiveFilter(key);
    setOpenMenu(false);
    buttonRefs.current[key]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  return (
    <div className="relative mb-6">
      {/* Scrollable filters */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto no-scrollbar pr-10"
      >
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            ref={(el) => {
              buttonRefs.current[key] = el;
            }}
            onClick={() => handleSelect(key)}
            className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-t-lg transition cursor-pointer ${
              activeFilter === key
                ? "border-b-3 border-[#a11cfe] text-[#a11cfe] bg-[#f3eefb]"
                : "text-gray-300 hover:bg-[#f3eefb]"
            }`}
          >
            <span>{label}</span>

            <div
              className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold ${
                activeFilter === key
                  ? "bg-[#e9dbfb] text-[#a11cfe]"
                  : "bg-[#e2e8f0] text-gray-300"
              }`}
            >
              {filterCounts[key]}
            </div>
          </button>
        ))}
      </div>

      {/* Overflow menu */}
      {hiddenFilters.length > 0 && (
        <div className="bg-[#f9fafb]  absolute right-0 top-1">
          <button
            onClick={() => setOpenMenu((v) => !v)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>

          {/* Dropdown */}
          {openMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl z-20">
              {hiddenFilters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className="w-full flex justify-between items-center px-4 py-2 text-sm text-left"
                >
                  <span>{label}</span>
                  <span
                    className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold ${
                      activeFilter === key
                        ? "bg-[#e9dbfb] text-[#a11cfe]"
                        : "bg-[#e2e8f0] text-gray-300"
                    }`}
                  >
                    {filterCounts[key]}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
