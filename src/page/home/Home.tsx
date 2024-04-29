import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="container-sm">
      <div className="flex justify-between">
        <Button onClick={() => navigate("/shadcn")}>Go to Shadcn</Button>
        <Button onClick={() => navigate("/radix")}>Go to Radix</Button>
      </div>
    </div>
  )
}

export default Home
