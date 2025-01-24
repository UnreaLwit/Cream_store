import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router";
import { MainLayout } from "./components/layout/MainLayout";
import { ScrollToTop } from "./utils/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { CartPage } from "./pages/CartPage";
import { ShopPage } from "./pages/ShopPage";
import { IndividualItemPage } from "./pages/IndividualItemPage";
import { ContactsPage } from "./pages/ContactsPage";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        {ScrollToTop()}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:id" element={<IndividualItemPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
