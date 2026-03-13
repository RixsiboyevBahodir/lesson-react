import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("../pages/auth/Login"));
const Home = lazy(() => import("../pages/home/Home"));
const Product = lazy(() => import("../pages/products/Product"));
const Layout = lazy(() => import("../components/Layout"));
const WishList = lazy(() => import("../pages/wishlist/WishList"));


export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Suspense fallback={"Loading"}>
            <Home />
          </Suspense>} />
          <Route path="products/:id" element={<Suspense fallback={"Loading"}>
            <Product />
          </Suspense>} />
          <Route path="wishlist" element={<Suspense fallback={"Loading"}>
            <WishList />
          </Suspense>} />
        </Route>
        <Route path="/auth" element={<Suspense fallback={"Loading"}>
          <Login />
        </Suspense>} />
      </Routes>
    </div>
  )
}
