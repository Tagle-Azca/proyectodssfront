import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Employee from "./Pages/Employee";
import Client from "./Pages/Client";
import Landing from "./Pages/Landing";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
