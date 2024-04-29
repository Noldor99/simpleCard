import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export type TCheckboxItem = {
  value: string
  label: string
  url: string
}

const items: TCheckboxItem[] = [
  {
    value: "option1",
    url: "https://content2.rozetka.com.ua/services/offered_images/original/410848783.png",
    label: "Фільми, серіали, мультфільми, ТВ передачі онлайн",
  },
  {
    value: "option2",
    url: "https://content.rozetka.com.ua/goods/images/big/379805192.png",
    label: "Сервіси гарантії",
  },
  {
    value: "option3",
    url: "https://content.rozetka.com.ua/goods/images/big/379805277.png",
    label: "Налаштування смартфона у магазинах Rozetka",
  },
  {
    value: "option4",
    url: "https://content.rozetka.com.ua/goods/images/big/379805277.png",
    label: "Сервіс «Rozetka All Inclusive»",
  },
]

const AdditionalServices = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const handleCheckboxChange = (value: string) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value))
    } else {
      setCheckedItems([...checkedItems, value])
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold"> Додаткові послуги </p>
      {items.map((item) => (
        <div className="flex gap-3 items-center">
          <Checkbox
            key={item.value}
            checked={checkedItems.includes(item.value)}
            onCheckedChange={() => handleCheckboxChange(item.value)}
          />
          <div className="w-[50px] rounded-md">
            <img src={item.url} />
          </div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default AdditionalServices
