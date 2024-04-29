import { useState } from "react"
import { Rating } from "@smastrom/react-rating"
import ColorPicker from "@/components/ColorPicker"
import AdditionalServices from "@/components/AdditionalServices"
import { CarouselDemo } from "@/components/CarouselDemo"

const Shadcn = () => {
  const [rating, setRating] = useState(3)

  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="m-auto">
          <CarouselDemo />
        </div>
        <div className="space-y-5">
          <h2 className="text-h2">
            Мобільний телефон Motorola G32 8/256GB Mineral Grey (994656)
          </h2>
          <div className="flex justify-between items-center ">
            <div className="max-w-[100px]">
              <Rating value={rating} onChange={setRating} />
            </div>
            <div>
              <p>Код: 387428727</p>
            </div>
          </div>
          <div className="paper-rounded">
            <ColorPicker />
          </div>
          <div className="paper-rounded">
            <AdditionalServices />
          </div>
        </div>
      </div>
      <div className="paper-rounded mt-3 lg:mt-0">
        <p className="text-h3 pb-3">Про товар</p>
        <p>
          Екран (6.5", LCD, 2400x1080) / Qualcomm Snapdragon 680 (2.4 ГГц) /
          основна потрійна камера: 50 Мп + 8 Мп + 2 Мп, фронтальна камера: 16 Мп
          / RAM 8 ГБ / 256 ГБ вбудованої пам’яті + microSD (до 1 ТБ) / 3G / LTE
          / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*ч
        </p>
      </div>
    </div>
  )
}

export default Shadcn
