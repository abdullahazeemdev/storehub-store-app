import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Sparkles,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function WelcomeHomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 px-6 py-4 backdrop-blur-md">
        <Navbar />
      </header>

      {/* Welcome Hero */}
      <main className="relative flex min-h-[calc(100vh-145px)] items-center overflow-hidden px-6 py-16">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles size={16} />
              Welcome to Store App
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Everything You Need,
              <span className="mt-2 block text-blue-600">
                All In One Place.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-slate-500 sm:text-lg lg:mx-0">
              Discover quality products, explore amazing deals, and enjoy a
              seamless shopping experience designed just for you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href={"products"}>
                <button className="group cursor-pointer flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700">
                  Get Started
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </Link>

              <button className="flex items-center justify-center gap-3 rounded-xl cursor-pointer border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50">
                Browse Catalog
                <ShoppingBag size={19} />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500 lg:justify-start">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-blue-600" />
                Secure Shopping
              </span>
              <span className="flex items-center gap-2">
                <Truck size={17} className="text-blue-600" />
                Easy Delivery
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-blue-200/50 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white bg-gradient-to-br from-blue-100 via-indigo-50 to-white p-8 shadow-2xl shadow-blue-900/10 sm:p-12">
              <div className="absolute right-6 top-6 rounded-full bg-white p-3 text-blue-600 shadow-md">
                <Sparkles size={22} />
              </div>

              <div className="flex min-h-72 flex-col items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-[2.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/30 transition duration-500 hover:rotate-3 hover:scale-105">
                  <ShoppingBag size={100} strokeWidth={1.3} />
                </div>

                <h2 className="mt-8 text-2xl font-extrabold">
                  Your Shopping Starts Here
                </h2>
                <p className="mt-2 text-center text-sm text-slate-500">
                  Everything you love, all in one place.
                </p>
              </div>

              <div className="absolute -left-4 top-1/4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg sm:-left-8">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-500">
                  <Zap size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold">Amazing Deals</p>
                  <p className="text-xs text-slate-400">Great finds await</p>
                </div>
              </div>

              <div className="absolute -bottom-4 right-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg sm:-right-5">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold">Shop with Ease</p>
                  <p className="text-xs text-slate-400">Simple & convenient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-6 py-5 text-center text-sm text-slate-400">
        © 2026 Store. All rights reserved.{" "}
      </footer>
    </div>
  );
}
