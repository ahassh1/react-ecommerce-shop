import React from "react";
import bannerImg from "../../assets/images/banner/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-gradient-to-r from-blue-500 to-purple-600 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl space-y-6 text-white">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight md:text-6xl md:leading-tight lg:text-7xl">
            Discover Amazing
            <span className="block text-blue-500">Products Online</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg font-light text-gray-100 md:text-xl">
            Shop the latest trends with exclusive deals and fast delivery. Your
            perfect purchase is just a click away!
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto max-w-xl">
            <input
              type="text"
              placeholder="Search for products, brands, and categories..."
              className="w-full rounded-full border-0 bg-white/95 px-8 py-4 text-gray-800 shadow-lg backdrop-blur-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-yellow-300 p-3 transition-all hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              aria-label="Search products"
            >
              <FaSearch className="text-blue-600 text-lg" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 pt-8 text-sm text-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div>Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5K+</div>
              <div>Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div>Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
