import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      {/* header top start  */}
      <div className="navbar max-w-screen-2xl container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-gradient-to-r from-blue-500 to-purple-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-white/20 hover:text-white text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-white/20 hover:text-white text-white">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:bg-white/20 hover:text-white text-white">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:bg-white/20 hover:text-white text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-white/20 hover:text-white text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-bold flex justify-center gap-1.5"
          >
            <div className="flex items-center">
              <img src="/favicon.png" alt="ShopZones Logo" />
              <span className="text-white text-2xl">
                Shop<span className="text-yellow-300">Zones</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className="hover:bg-white/20 hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-white/20 hover:text-white">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:bg-white/20 hover:text-white">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:bg-white/20 hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-white/20 hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <details>
                <summary className="hover:bg-white/20 hover:text-white">
                  Categories
                </summary>
                <ul className="p-2 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <li className="hover:bg-white/20 hover:text-white">
                    <Link to="/">Electronics</Link>
                  </li>
                  <li className="hover:bg-white/20 hover:text-white">
                    <Link to="/">Fashion</Link>
                  </li>
                  <li className="hover:bg-white/20 hover:text-white">
                    <Link to="/">Home & Garden</Link>
                  </li>
                  <li className="hover:bg-white/20 hover:text-white">
                    <Link to="/">Sports</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link
            to="/login"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 hidden sm:flex"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="btn bg-white text-blue-600 border-none hover:bg-gray-100 hover:text-blue-700"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
