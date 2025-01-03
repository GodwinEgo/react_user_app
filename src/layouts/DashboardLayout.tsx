import { useEffect, useRef, useState } from "react";
import { FaBars, FaHome, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import HomePage from "../features/home";

const navLinks = [
  {
    path: "/",
    label: "Home",
    icon: <FaHome />,
    header: "Welcome to the User Dashboard",
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const currentNavLink = navLinks.find(
    (link) => link.path === location.pathname
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out w-72 bg-[#08083A] shadow-lg flex flex-col z-50`}
      >
        <div className="bg-white p-4 flex items-center justify-center">
          <img src="/logo.svg" alt="Nolimitbuzz Logo" className="h-12" />
        </div>
        <nav className="flex-1 py-6 pl-6 overflow-y-auto">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`mb-2 rounded-tl-full rounded-bl-full ${
                  location.pathname === link.path ? "bg-[#EAEDF7]" : ""
                }`}
              >
                <Link
                  to={link.path}
                  className={`flex space-x-4 items-center p-2 ${
                    location.pathname === link.path
                      ? "text-gray-700"
                      : "text-white"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span
                    className={`h-12 flex justify-center items-center aspect-square ${
                      location.pathname === link.path
                        ? "bg-[#4C59FB] rounded-full text-white"
                        : ""
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`${
                      location.pathname === link.path
                        ? "text-[#4C59FB]"
                        : "text-white"
                    } text-lg`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex-1 bg-white flex flex-col">
        <header className="shadow p-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
            <div className="text-xl font-bold">{currentNavLink?.header}</div>
          </div>
          <div className="flex w-[20vw] items-center space-x-4">
            {location.pathname === "/" && (
              <div className="relative w-full max-w-2xl hidden md:block">
                <input
                  type="text"
                  placeholder="Search by name, company, or email..."
                  className="p-2 rounded w-full bg-gray-200 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute top-3 right-2 text-gray-500" />
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 bg-[#EAEDF7] p-6 overflow-y-auto">
          {location.pathname === "/" ? (
            <HomePage searchQuery={searchQuery} />
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
