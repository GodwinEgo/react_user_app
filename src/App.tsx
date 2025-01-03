import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./features/home";
import NotificationsPage from "./features/notfications";
import SettingsPage from "./features/settings";
import UserDetailsPage from "./features/user";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
