import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import SportsPage from "./pages/SportsPage";
import BrandsPage from "./pages/BrandsPage";
import OutletPage from "./pages/OutletPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/outlet" element={<OutletPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
