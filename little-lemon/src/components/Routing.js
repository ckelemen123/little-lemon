import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Reservations from "./Pages/Reservations";
import Order from "./Pages/Order";
import Confirmation from "./Pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservations />} />

      <Route path="/order" element={<Order />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
