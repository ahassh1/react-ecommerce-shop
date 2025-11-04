import { Link } from "react-router";

const Navbar = () => {
  return (
    <header>
      {/* header top start  */}
      <div className="navbar max-w-screen-2xl container mx-auto  px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-yellow-300 hover:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-yellow-300 hover:text-white">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:bg-yellow-300 hover:text-white">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:bg-yellow-300 hover:text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-yellow-300 hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
              <li></li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-bold flex justify-center gap-1.5"
          >
            <div className="flex items-center">
              <img src="/favicon.png" alt="" />
              <span className="text-yellow-300 text-2xl">
                Shop<span className="text-black">Zones</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-yellow-300 hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-yellow-300 hover:text-white">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:bg-yellow-300 hover:text-white">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:bg-yellow-300 hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-yellow-300 hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <details>
                <summary className="hover:bg-yellow-300 hover:text-white">
                  Categories
                </summary>
                <ul className="p-2 z-50">
                  <li className="hover:bg-yellow-300 hover:text-white">
                    <Link to="/">Pant</Link>
                  </li>
                  <li className="hover:bg-yellow-300 hover:text-white">
                    <Link to="/">Shirt</Link>
                  </li>
                  <li className="hover:bg-yellow-300 hover:text-white">
                    <Link to="/">Bottle</Link>
                  </li>
                  <li className="hover:bg-yellow-300 hover:text-white">
                    <Link to="/">Shoes</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link
            to="/login"
            className="btn btn-outline hover:bg-yellow-300 hidden sm:flex"
          >
            Log In
          </Link>
          <Link
            to="/ErrorPage
          "
            className="btn btn-primary bg-yellow-300 text-black border-none"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
