import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./utils/layout.tsx";
import ItemPage from "./pages/ItemPage.tsx";
import { Cart } from "./pages/cart.tsx";
import { BurgerEdit } from "./pages/burger-edit.tsx";
import { CartProvider } from "./contexts/cart-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<App />} />
              <Route path="cart" element={<Cart />} />
              <Route path="burger/:id">
                <Route index element={<ItemPage />} />
                <Route path="edit" element={<BurgerEdit />} />
              </Route>
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
