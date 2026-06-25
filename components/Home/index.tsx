import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


const Home = () => {
    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-5xl font-bold">
          Cinnamon Pages
        </h1>
        <Button>
          Cinnamon Pages button
        </Button>
    </div>
    );
}

export default Home;