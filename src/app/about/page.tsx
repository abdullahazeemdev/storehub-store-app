
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingBag,
  Target,
  Heart,
  ShieldCheck,
  Truck,
  Headphones,
  ArrowRight,
  Sparkles,
  Package,
  Users,
  Star,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Shopping",
    description:
      "We focus on a reliable shopping experience, with product information that helps you shop confidently.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Truck,
    title: "Easy Shopping",
    description:
      "Explore a wide variety of products in one place with a simple and convenient browsing experience.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Headphones,
    title: "Customer First",
    description:
      "Your experience matters to us. We aim to make discovering products smooth and enjoyable.",
    color: "bg-orange-500/10 text-orange-500",
  },
];

export default function AboutPage() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`flex h-screen overflow-hidden transition-colors duration-300 ${
        dark
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Sidebar dark={dark} setDark={setDark} />

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-5 sm:p-8">

          {/* Top Label */}
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-blue-500">
            <Sparkles size={17} />
            ABOUT STOREHUB
          </div>

          {/* Hero Section */}
          <section
            className={`relative mb-10 overflow-hidden rounded-3xl border p-7 sm:p-12 lg:p-16 ${
              dark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span
                  className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                    dark
                      ? "bg-blue-500/10 text-blue-300"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  <ShoppingBag size={16} />
                  Your Shopping Destination
                </span>

                <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Shopping Made
                  <span className="block text-blue-500">
                    Simple & Better.
                  </span>
                </h1>

                <p
                  className={`mb-8 max-w-xl text-base leading-8 sm:text-lg ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Welcome to StoreHub — a modern online store designed
                  to make discovering products simple, convenient, and
                  enjoyable. Find what you need, explore your options,
                  and shop with confidence.
                </p>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Products
                  <ArrowRight size={19} />
                </Link>
              </div>

              {/* Hero Visual */}
              <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full bg-blue-500/10 sm:h-80 sm:w-80" />
                <div
                  className={`relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[2rem] border shadow-2xl ${
                    dark
                      ? "border-gray-700 bg-gray-800"
                      : "border-blue-100 bg-blue-50"
                  }`}
                >
                  <div className="absolute left-8 top-8 rounded-2xl bg-purple-500 p-4 text-white shadow-lg">
                    <Package size={30} />
                  </div>

                  <div className="rounded-[2rem] bg-blue-600 p-10 text-white shadow-2xl shadow-blue-600/30 sm:p-14">
                    <ShoppingBag size={90} strokeWidth={1.5} />
                  </div>

                  <div
                    className={`absolute bottom-8 right-5 rounded-2xl border p-4 shadow-lg sm:right-0 ${
                      dark
                        ? "border-gray-700 bg-gray-900"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-yellow-400/15 p-3 text-yellow-500">
                        <Star size={24} className="fill-yellow-400" />
                      </div>
                      <div>
                        <p className="font-bold">Made for You</p>
                        <p
                          className={`text-xs ${
                            dark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          A better way to shop
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div
              className={`rounded-3xl border p-7 sm:p-9 ${
                dark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <Target size={25} />
              </div>

              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>

              <p
                className={`leading-7 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our mission is to make online product discovery easier
                through a clean interface, organized categories, and
                a convenient shopping experience for everyone.
              </p>
            </div>

            <div
              className={`rounded-3xl border p-7 sm:p-9 ${
                dark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                <Heart size={25} />
              </div>

              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>

              <p
                className={`leading-7 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We envision a shopping platform where finding the
                right product feels effortless, information is easy
                to understand, and every visit feels welcoming.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-10">
            <div className="mb-7 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
                WHY STOREHUB
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                What Makes Us Different?
              </h2>

              <p
                className={`mx-auto mt-3 max-w-2xl leading-7 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We believe a good shopping experience starts with
                simplicity, convenience, and putting customers first.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      dark
                        ? "border-gray-800 bg-gray-900 hover:border-blue-500/40"
                        : "border-gray-200 bg-white hover:border-blue-200"
                    }`}
                  >
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}
                    >
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold">
                      {feature.title}
                    </h3>

                    <p
                      className={`text-sm leading-7 ${
                        dark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative mb-4 overflow-hidden rounded-3xl bg-blue-600 p-8 text-white sm:p-12">
            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/10" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <div className="mb-3 flex items-center gap-2 text-blue-100">
                  <Users size={20} />
                  <span className="text-sm font-semibold">
                    START EXPLORING
                  </span>
                </div>

                <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
                  Ready to Discover Something New?
                </h2>

                <p className="max-w-2xl leading-7 text-blue-100">
                  Explore our products and discover what StoreHub has
                  to offer.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Browse Products
                <ArrowRight size={19} />
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`py-5 text-center text-sm ${
              dark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            © 2026 StoreHub. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}
