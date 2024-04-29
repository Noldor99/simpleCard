import MouseGallery from "@/components/MouseGallery"
import { useState } from "react"
import { Rating } from "@smastrom/react-rating"
import ToggleGroupDemo, { ToggleItem } from "@/components/ToggleGroupDemo"

const togglePattern: ToggleItem[] = [
  { value: "tab1", label: "Mouse" },
  { value: "tab2", label: "Mouse + Gaming Mic" },
  { value: "tab3", label: "Mouse + Headset" },
  { value: "tab4", label: "Mouse + Keyboard" },
  { value: "tab5", label: "Mouse + Mousepad" },
]
const toggleSize: ToggleItem[] = [
  { value: "tab1", label: "Wireless" },
  { value: "tab2", label: "Wired" },
]

const Radix = () => {
  const [rating, setRating] = useState(4)

  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="">
          <MouseGallery />
        </div>
        <div className="space-y-5">
          <h2 className="text-h3">
            Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
            Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable
            Buttons, On-Board Memory, PC / Mac
          </h2>
          <a
            className="text-blue-500 hover:underline"
            href="https://www.amazon.com/stores/LogitechG/page/0F4BFDF6-CD4A-4A8C-83A2-3104165D740C?ref_=ast_bln"
          >
            Visit the Logitech G Store
          </a>
          <div className="max-w-[100px]">
            <Rating value={rating} onChange={setRating} />
          </div>
          <div className="border-b border-black" />
          <span>Price: </span>
          <span className="text-h3 text-red">$34.64</span>
          <p className="text-red">Only 1 left in stock - order soon.</p>
          <ToggleGroupDemo toggleItems={toggleSize} name="Size" />
          <ToggleGroupDemo toggleItems={togglePattern} name="Pattern Name" />
          <div className="border-b border-black" />
          <div>
            {[
              { text: "Brand", label: "Logitech G" },
              { text: "Color", label: "Black" },
              { text: "Connectivity Technology", label: "LIGHTSPEED Wireless" },
              { text: "Movement Detection", label: "Optical" },
            ].map((item, index) => (
              <div key={index}>
                <span>{item.text}: </span>
                <span className="font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radix
