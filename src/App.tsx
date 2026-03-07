import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicPage from "./components/PublicPage";
import VipPage from "./components/VipPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/vip/:slug" element={<VipPage />} />
      </Routes>
    </BrowserRouter>
  );
}
