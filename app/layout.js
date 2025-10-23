import "./globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Real Estate Listing Platform",
  keywords: "real estate, property, listings",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
