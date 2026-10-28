"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  Info,
  Sun,
  Moon,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { name: "Products", href: "/products", icon: Package },
  { name: "About", href: "/about", icon: Info },
];

interface SidebarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export default function Sidebar({ dark, setDark }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`sticky top-0 flex h-screen shrink-0 flex-col overflow-y-auto border-r p-4 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } ${
        dark
          ? "border-gray-700 bg-gray-950 text-white"
          : "border-gray-200 bg-white text-gray-800"
      }`}
    >
      {/* Logo */}
      <div className="mb-10 flex items-center justify-between gap-1">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <ShoppingBag size={23} />
          </div>

          {!collapsed && (
            <span className="text-xl font-bold">
              Store<span className="text-blue-500">Hub</span>
            </span>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`cursor-pointer rounded-lg p-1 ${
            dark ? "hover:bg-gray-800" : "hover:bg-gray-100"
          }`}
          aria-label="Toggle sidebar width"
        >
          {collapsed ? (
            <ChevronRight size={19} />
          ) : (
            <ChevronLeft size={19} />
          )}
        </button>
      </div>

      {/* Menu */}
      {!collapsed && (
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Menu
        </p>
      )}

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = item.name === "Products";

          return (
            <Link
              key={item.name}
              href={item.href}
              title={collapsed ? item.name : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                active
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : dark
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={21} />

              {!collapsed && (
                <span className="font-medium">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div
        className={`mb-4 rounded-xl p-3 ${
          dark ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <button
          onClick={() => setDark(!dark)}
          className="flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 transition hover:bg-blue-500/10"
          title={dark ? "Switch to light theme" : "Switch to dark theme"}
          aria-label="Toggle theme"
        >
          {dark ? (
            <Sun size={21} className="text-yellow-400" />
          ) : (
            <Moon size={21} className="text-blue-600" />
          )}

          {!collapsed && (
            <span className="font-medium">
              {dark ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </button>
      </div>

      {!collapsed && (
        <p className="text-center text-xs text-gray-400">
          © 2026 StoreHub
        </p>
      )}
    </aside>
  );
}