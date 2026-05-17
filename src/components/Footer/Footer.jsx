import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="px-6 py-16 flex justify-center mb-[-150px]">
        <div
          className="w-full max-w-3xl rounded-2xl p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, #e0f0ff 0%, #fde8d8 50%, #fdf3e3 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,

              backgroundImage:
                "url('https://i.ibb.co.com/n8ry2Jvb/bg-shadow.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "inherit",
              zIndex: 0,
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-72 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button
                className="px-6 py-3 rounded-lg text-white text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ec4899)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0f1e] text-white px-10 pt-4 pb-6">
        <div className="flex justify-center mb-10 mt-30">
          <img src="https://i.ibb.co.com/7NyCfBc0/logo-footer.png" alt="" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-base font-semibold mb-3">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-72 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button
                className="px-6 py-3 rounded-lg text-white text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ec4899)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
          ©2024 Your Company All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
