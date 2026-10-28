"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Eye, Star, Loader2 } from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  rating: number;
}

interface ProductsResponse {
  products: Product[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
          throw new Error("Products load nahi ho sake.");
        }

        const data: ProductsResponse = await response.json();
        setProducts(data.products);
      } catch {
        setError("Products load nahi huay. Internet check karke dobara try karo.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* Main Content */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-5 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <p
              className={`mb-2 text-sm font-semibold ${
                dark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              STOREHUB / PRODUCTS
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Our Products
            </h1>

            <p
              className={`mt-2 ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Discover products you will love.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div
              className={`flex max-w-xl items-center gap-3 rounded-2xl border px-4 py-3 transition-colors ${
                dark
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <Search
                size={21}
                className={dark ? "text-gray-400" : "text-gray-500"}
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className={`w-full bg-transparent outline-none placeholder:text-gray-400 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* Products Heading */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">All Products</h2>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                dark
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-600"
              }`}
            >
              {filteredProducts.length} Products
            </span>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex min-h-64 items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <Loader2
                  size={35}
                  className="animate-spin text-blue-500"
                />
                <p className={dark ? "text-gray-400" : "text-gray-500"}>
                  Loading products...
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div
              className={`rounded-2xl border p-6 text-center ${
                dark
                  ? "border-red-900 bg-red-950/30 text-red-300"
                  : "border-red-200 bg-red-50 text-red-600"
              }`}
            >
              {error}
            </div>
          )}

          {/* Products Grid */}
          {!loading && !error && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    dark
                      ? "border-gray-800 bg-gray-900 hover:border-blue-500/50"
                      : "border-gray-200 bg-white hover:border-blue-200"
                  }`}
                >
                  {/* Product Image */}
                  <div
                    className={`relative flex h-56 items-center justify-center overflow-hidden p-5 ${
                      dark ? "bg-gray-800" : "bg-gray-50"
                    }`}
                  >
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={300}
                      height={220}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold capitalize text-white">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    <h3
                      className={`mb-2 line-clamp-1 text-lg font-bold ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.title}
                    </h3>

                    <p
                      className={`mb-4 line-clamp-2 min-h-10 text-sm leading-5 ${
                        dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {product.description}
                    </p>

                    {/* Price and Rating */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-500">
                        ${product.price.toFixed(2)}
                      </span>

                      <span
                        className={`flex items-center gap-1 text-sm ${
                          dark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        {product.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/products/${product.id}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                      <Eye size={18} />
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Products Found */}
          {!loading && !error && filteredProducts.length === 0 && (
            <div
              className={`rounded-2xl border p-10 text-center ${
                dark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <Search
                size={35}
                className={`mx-auto mb-3 ${
                  dark ? "text-gray-500" : "text-gray-400"
                }`}
              />

              <h3 className="text-lg font-bold">
                No products found
              </h3>

              <p
                className={`mt-2 text-sm ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Try searching with another product name.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}