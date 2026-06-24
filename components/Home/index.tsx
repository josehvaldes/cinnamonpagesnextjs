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
        <Separator className="my-3" />
        <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
    </div>
    );
}

export default Home;