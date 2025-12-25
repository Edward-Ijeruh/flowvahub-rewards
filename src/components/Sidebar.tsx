import { useState, useEffect, useRef } from "react";
import { navItems } from "../lib/navItems";
import { supabase } from "../lib/supabase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const firstLetter = email ? email.charAt(0).toUpperCase() : "";
  const username = email ? email.split("@")[0] : "";

  // Get user
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setEmail(session.user.email!);
      } else {
        setEmail("");
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Logged out");
    navigate("/login");
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile harmburger */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 text-2xl font-bold bg-white px-2 rounded-lg"
      >
        ☰
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-60 h-screen flex flex-col justify-between border-r border-[#e7e8e8] p-4">
        {/* Brand logo */}
        <div>
          <img src="/brand-img.png" alt="Brand" className="w-45 px-4 mb-4" />

          {/* Nav options */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {}}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition cursor-pointer
                ${
                  item.label === "Rewards Hub"
                    ? "bg-[#e9d0ff] text-[#a11cfe]"
                    : "text-gray-700"
                }
                hover:bg-[#f2e5ff] hover:text-[#a11cfe]
              `}
              >
                {/* Icon */}
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d={item.path} />
                </svg>

                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User section*/}
        <div
          className="border-t border-[#778599] pt-3 relative"
          ref={dropdownRef}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 w-full px-2 pt-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white text-lg font-semibold">
              {firstLetter}
            </div>

            <div className="flex flex-col text-left">
              <span className="font-semibold">{username}</span>
              <span className="text-sm text-gray-500">{email}</span>
            </div>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute bottom-14 left-4 w-full px-4 py-2 bg-white shadow-lg border border-[#a11cfe] rounded-lg overflow-hidden">
              {/* Feedback */}
              <button className="w-full text-left px-3 py-2 hover:bg-[#f2e5ff] rounded-xl cursor-pointer">
                Feedback
              </button>

              {/* Support */}
              <button className="w-full text-left px-3 py-2 hover:bg-[#f2e5ff] rounded-xl cursor-pointer">
                Support
              </button>

              {/* Log out */}
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 hover:bg-red-100 hover:text-red-500 rounded-xl cursor-pointer"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile sidebar */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-30"></div>
      )}

      <aside
        className={`
          md:hidden fixed top-0 left-0 h-full w-64 bg-white border-r border-[#e7e8e8]
          flex flex-col justify-between p-4 z-40 transition-transform duration-300
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            {/* Brand logo */}
            <img src="/brand-img.png" alt="Brand" className="w-45 px-2" />

            {/* Close button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute right-3 top-2 text-2xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Nav options */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setIsMobileOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition cursor-pointer
                ${
                  item.label === "Rewards Hub"
                    ? "bg-[#e9d0ff] text-[#a11cfe]"
                    : "text-gray-700"
                }
                hover:bg-[#f2e5ff] hover:text-[#a11cfe]
              `}
              >
                {/* Icon */}
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d={item.path} />
                </svg>

                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User section */}
        <div className="border-t border-[#778599] pt-3">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 w-full px-2 pt-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white text-lg font-semibold">
              {firstLetter}
            </div>

            <div className="flex flex-col text-left">
              <span className="font-semibold">{username}</span>
              <span className="text-sm text-gray-500">{email}</span>
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute bottom-14 left-4 w-full px-4 py-2 bg-white shadow-lg border border-[#a11cfe] rounded-lg overflow-hidden">
              {/* Feedback */}
              <button className="w-full text-left px-3 py-2 hover:bg-[#f2e5ff] rounded-xl cursor-pointer">
                Feedback
              </button>

              {/* Support*/}
              <button className="w-full text-left px-3 py-2 hover:bg-[#f2e5ff] rounded-xl cursor-pointer">
                Support
              </button>

              {/* Log out */}
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 hover:bg-red-100 hover:text-red-500 rounded-xl cursor-pointer"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
