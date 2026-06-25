import Image from "next/image";
import {Heart, ShoppingBag} from "lucide-react";

const Header = () => {
  return (
    <header className="justify-between w-full gap-4 p-4">
        <div className="grid grid-cols-5 gap-4 w-full">
            <div className="col-start-1 col-end-2 flex items-center justify-start">
                <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={50}
                            height={10}
                            priority
                          />
            </div>

            <div className="col-start-2 col-end-4 flex items-center justify-center gap-8">
              
                <div className="flex flex-col gap-2 underline">
                    Home
                </div>
                <div className="flex flex-col gap-2">
                    Products
                </div>
                <div className="flex flex-col gap-2">
                    About
                </div>
                <div className="flex flex-col gap-2">
                    Contact
                </div>
              
            </div>

            <div className="col-start-5 col-end-6 flex items-center justify-end gap-8">
              <div className="flex flex-col gap-2">
                <Heart className="size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <ShoppingBag className="size-5" />
              </div>
            </div>

            
        </div>
    </header>
  );
}

export default Header;