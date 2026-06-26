import Home from "@/components/Home";
import { healthCheckStatus } from "@/lib/api/health";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Next.js Cinnamon Application",
  description: "This is Home for Cinnamon Pages Next.js Application",
};

export const revalidate = 300; // Revalidate this page every 5 minutes (300 seconds)

//let's comment this out for now, we will use it later when we want to force dynamic rendering
//export const dynamic = "force-dynamic";

export default async function HomePage() {
  let healthStatus = "Unavailable";

  try {
    // Perform health check for testing purposes. This will be displayed on the home page.
    healthStatus = await healthCheckStatus();
  } catch {
    healthStatus = "Unavailable";
  }

  return (
    <>
    <Home healthStatus={healthStatus} />
    </>        
  );
}
