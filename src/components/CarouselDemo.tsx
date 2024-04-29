import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const ImgSmartfone: string[] = [
  "https://content1.rozetka.com.ua/goods/images/big/350974345.jpg",
  "https://content.rozetka.com.ua/goods/images/big/350974343.jpg          ",
  "https://content2.rozetka.com.ua/goods/images/big/350974346.jpg",
  "https://content1.rozetka.com.ua/goods/images/big/350974347.jpg",
]

export function CarouselDemo() {
  return (
    <div>
      <Carousel className="w-full max-w-[220px] lg:max-w-[320px]">
        <CarouselContent>
          {ImgSmartfone.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div>
                  <div className="flex aspect-square items-center justify-center p-6">
                    <img src={item} alt="Shadcn" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
