import { Button } from "@/components/ui/button";
import Hero from "./Hero";

type HomeProps = {
   healthStatus: string;
};

const Home = ({ healthStatus }: HomeProps) => {

   return (
    <>
       <Hero />
       
       <p>health check status: {healthStatus}</p>
       
       <Button>
          Cinnamon Pages button
       </Button>
    </>
    );
}

export default Home;