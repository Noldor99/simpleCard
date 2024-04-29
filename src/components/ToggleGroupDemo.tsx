import { useState } from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { cn } from "@/lib/utils"

export interface ToggleItem {
  value: string
  label: string
}

interface ToggleGroupDemoProps {
  toggleItems: ToggleItem[]
  name: string
}

const ToggleGroupDemo = ({ toggleItems, name }: ToggleGroupDemoProps) => {
  const [activeTab, setActiveTab] = useState(toggleItems[0].value)

  const activeTabLabel = toggleItems.find(
    (item) => item.value === activeTab
  )?.label

  const toggleGroupItemClasses = cn(
    "flex items-center justify-center bg-white p-2",
    "data-[state=on]:border data-[state=on]:border-red"
  )

  return (
    <div>
      <span>{name}: </span>
      <span className="text-lg font-bold">{activeTabLabel}</span>
      <ToggleGroup.Root
        className="flex flex-wrap gap-4 pt-1"
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
        onValueChange={(value) => setActiveTab(value)}
      >
        {toggleItems.map((item) => (
          <ToggleGroup.Item
            key={item.value}
            className={toggleGroupItemClasses}
            value={item.value}
          >
            {item.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}

export default ToggleGroupDemo
