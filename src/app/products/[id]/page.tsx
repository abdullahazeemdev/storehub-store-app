"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  Tag,
  Loader2,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
  brand?: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product nahi mila.");
        }

        const data: Product = await response.json();
        setProduct(data);
      } catch {
        setError("Product load nahi hua. Dobara try karo.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div
      className={`flex h-screen overflow-hidden transition-colors duration-300 ${
        dark
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar dark={dark} setDark={setDark} />

      {/* Detail Section */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl p-5 sm:p-8">
          {/* Back Button */}
          <Link
            href="/products"
            className={`mb-8 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium transition ${
              dark
                ? "bg-gray-900 text-gray-300 hover:bg-gray-800"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            <ArrowLeft size={19} />
            Back to Products
          </Link>

          {/* Loading */}
          {loading && (
            <div className="flex min-h-96 flex-col items-center justify-center gap-3">
              <Loader2
                size={38}
                className="animate-spin text-blue-500"
              />
              <p className={dark ? "text-gray-400" : "text-gray-500"}>
                Loading product details...
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div
              className={`rounded-2xl border p-8 text-center ${
                dark
                  ? "border-red-900 bg-gray-900 text-red-300"
                  : "border-red-200 bg-white text-red-600"
              }`}
            >
              {error}
            </div>
          )}

          {/* Product Details Card */}
          {!loading && !error && product && (
            <div
              className={`overflow-hidden rounded-3xl border shadow-sm transition-colors duration-300 ${
                dark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Product Image */}
                <div
                  className={`relative flex min-h-80 items-center justify-center p-8 sm:p-12 ${
                    dark ? "bg-gray-800/70" : "bg-gray-50"
                  }`}
                >
                  <span className="absolute left-6 top-6 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold capitalize text-white">
                    {product.category}
                  </span>

                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={500}
                    priority
                    className="max-h-[420px] w-full object-contain transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <div className="mb-4 flex items-center gap-2">
                    <Tag size={17} className="text-blue-500" />

                    <span
                      className={`text-sm capitalize ${
                        dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {product.category}
                    </span>
                  </div>

                  <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                    {product.title}
                  </h1>

                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 rounded-lg bg-yellow-400/10 px-3 py-2 text-sm font-semibold text-yellow-500">
                      <Star
                        size={17}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {product.rating.toFixed(1)} Rating
                    </span>

                    <span
                      className={`text-sm ${
                        product.stock > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>

                  <p
                    className={`mb-8 text-base leading-7 ${
                      dark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {product.description}
                  </p>

                  {product.brand && (
                    <p
                      className={`mb-5 text-sm ${
                        dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Brand:{" "}
                      <span className="font-semibold text-blue-500">
                        {product.brand}
                      </span>
                    </p>
                  )}

                  <div
                    className={`mb-7 border-t pt-6 ${
                      dark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <p
                      className={`mb-1 text-sm ${
                        dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Product Price
                    </p>

                    <p className="text-4xl font-bold text-blue-500">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    disabled={product.stock <= 0}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ShoppingBag size={21} />
                    {product.stock > 0
                      ? "Product Details"
                      : "Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}