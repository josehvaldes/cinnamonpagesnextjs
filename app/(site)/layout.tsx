import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-full px-15">
        {children}
      </main>
      <Footer />
    </>
  );
}