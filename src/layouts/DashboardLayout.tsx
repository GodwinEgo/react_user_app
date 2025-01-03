import { FaBell, FaCog, FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    label: "Home",
    icon: <FaHome />,
    header: "Welcome to the User Dashboard",
  },
  {
    path: "/notifications",
    label: "Notifications",
    icon: <FaBell />,
    header: "Notifications",
  },
  { path: "/settings", label: "Settings", icon: <FaCog />, header: "Settings" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentNavLink = navLinks.find(
    (link) => link.path === location.pathname
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-72 bg-[#08083A] shadow-lg flex flex-col">
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
      <div className="flex-1 flex flex-col">
        <header className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow p-4 flex items-center justify-between">
          <div className="text-xl font-bold">{currentNavLink?.header}</div>
          <div className="flex items-center space-x-4">
            {location.pathname === "/" && (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded bg-gray-200 focus:outline-none"
              />
            )}
            {location.pathname === "/settings" ? (
              <FaHome
                className="cursor-pointer"
                onClick={() => navigate("/")}
              />
            ) : location.pathname === "/notifications" ? (
              <FaHome
                className="cursor-pointer"
                onClick={() => navigate("/")}
              />
            ) : (
              <>
                <div className="relative">
                  <FaBell
                    className="cursor-pointer"
                    onClick={() => navigate("/notifications")}
                  />
                  <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                </div>
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User avatar"
                  onClick={() => navigate("/settings")}
                />
              </>
            )}
          </div>
        </header>
        <main className="flex-1 bg-[#EAEDF7] p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
