import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Next.js Cinnamon Application",
  description: "This is Home for Cinnamon Pages Next.js Application",
};


export default function HomePage() {
  return (
    <>
    <Home />
    </>        
  );
}
