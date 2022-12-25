import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { About } from "./pages/About";
import { Admin } from "./pages/Admin";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
