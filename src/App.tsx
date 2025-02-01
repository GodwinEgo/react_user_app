import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./features/home";
import UserDetailsPage from "./features/user";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home searchQuery="" />} />
          <Route path="/use/:id" element={<UserDetailsPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
