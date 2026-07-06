import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Recommended from "./components/Recommended";
import Login from "./components/Login";
import MyProperties from "./components/MyProperties";
import AddProperty from "./components/AddProperty";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

export default function App() {

  return (

    <Routes>

      {/* HOME PAGE */}

      <Route
        path="/"
        element={
          <>
            <Hero />
            <Recommended />
            <Footer />
          </>
        }
      />

      {/* PROPERTIES PAGE */}

      <Route
        path="/properties"
        element={<MyProperties />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/add-property"
        element={<AddProperty />}
      />

    </Routes>

  );
}