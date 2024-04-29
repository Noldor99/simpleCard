import { cn } from "@/lib/utils"
import * as Tabs from "@radix-ui/react-tabs"

const ImgSmartfone = [
  {
    value: "tab1",
    url: "https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SY355_.jpg",
  },
  {
    value: "tab2",
    url: "https://m.media-amazon.com/images/I/71BYvNUoumL._AC_SY355_.jpg",
  },
  {
    value: "tab3",
    url: "https://m.media-amazon.com/images/I/71sgEIlSvfL._AC_SY355_.jpg",
  },
  {
    value: "tab4",
    url: "https://m.media-amazon.com/images/I/61Z49vScNSL._AC_SY355_.jpg",
  },
]

const MouseGallery = () => (
  <Tabs.Root className="flex" defaultValue={ImgSmartfone[0].value}>
    <Tabs.List className="TabsList" aria-label="Manage your account">
      {ImgSmartfone.map((item) => (
        <Tabs.Trigger
          key={item.value}
          className={cn(
            "flex",
            "leading-none text-mauve11 select-none  outline-none cursor-default",
            "data-[state=active]:border-black data-[state=active]:border "
          )}
          value={item.value}
        >
          <div className="flex aspect-square items-center justify-center p-2">
            <img className="w-[40px]" src={item.url} alt="Shadcn" />
          </div>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {ImgSmartfone.map((item) => (
      <Tabs.Content key={item.value} className="TabsContent" value={item.value}>
        <div className="flex aspect-square items-center justify-center p-2">
          <img src={item.url} alt="Shadcn" />
        </div>
      </Tabs.Content>
    ))}
  </Tabs.Root>
)

export default MouseGallery
