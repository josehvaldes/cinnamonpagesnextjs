
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { maxHeaderSize } from "http";
import Image from "next/image";
const heroItems = [
    {
        id: 1,
        title: "Hero Item 1",
        image: "/images/hero/photo-hero_1",
    },
    {
        id: 2,
        title: "Hero Item 2",
        image: "/images/hero/photo-hero_2",
    },
    {
        id: 3,
        title: "Hero Item 3",
        image: "/images/hero/photo-hero_3",
    }
]

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <Carousel className="w-full flex items-center justify-center">
            <CarouselContent>
                {heroItems.map((item) => (
                <CarouselItem key={item.id}>
                    <div className="p-5">
                        <div className="flex h-64 w-full items-center justify-center">
                                <Image src={item.image} alt={item.title} width={maxHeaderSize} height={maxHeaderSize} />
                        </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
    );
}


export default Hero;