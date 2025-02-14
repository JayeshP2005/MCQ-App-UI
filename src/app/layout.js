"use client";
import { Provider } from "react-redux";
import { store } from "@/store/Store";
import { Header } from "@/component/header/index";
import { Footer } from "@/component/footer/index";
import "bootstrap/dist/css/bootstrap.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
