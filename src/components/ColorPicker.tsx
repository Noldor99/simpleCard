import { cn } from "@/lib/utils"
import React, { useState } from "react"

interface Color {
  id: number
  name: string
  value: string
}

const colors: Color[] = [
  { id: 2, name: "Green", value: "bg-greenBlue" },
  { id: 1, name: "Yellow", value: "bg-yellow" },
  { id: 3, name: "Purple", value: "bg-purple" },
]

const ColorPicker: React.FC = () => {
  const [activeColor, setActiveColor] = useState<Color | null>(null)

  const handleClick = (color: Color) => {
    setActiveColor(color)
  }

  return (
    <div>
      <p>Color: {activeColor ? activeColor.name : "None"}</p>
      <div className="flex gap-2 pt-3">
        {colors.map((color) => (
          <div
            className={cn(
              "p-1",
              color.name === activeColor?.name
                ? "border-2 border-purple rounded-md"
                : ""
            )}
          >
            <div
              key={color.id}
              onClick={() => handleClick(color)}
              className={cn("w-6 h-6 rounded-md cursor-pointer", color.value)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
