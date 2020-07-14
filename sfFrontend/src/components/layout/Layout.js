import Header from "@components/header";
import Footer from "@components/footer";
import Meta from "@components/meta";
import { CartProvider } from "@state";

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
};

export default Layout;
