import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./utils/layout.tsx";
import ItemPage from "./pages/ItemPage.tsx";
import { Cart } from "./pages/cart.tsx";
import { BurgerEdit } from "./pages/burger-edit.tsx";
import { CartProvider } from "./contexts/cart-provider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/burger/:id",
    element: <ItemPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/burger/:id/edit",
    element: <BurgerEdit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </CartProvider>
  </React.StrictMode>
);
