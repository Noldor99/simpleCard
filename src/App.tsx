import React from "react"
import { Routes, Route } from "react-router-dom"
import LayoutWrapper from "./components/layout/LayoutWrapper"
import NotFoundBlock from "./components/NotFoundBlock"
import Home from "./page/home/Home"
import Shadcn from "./page/shadcn/Shadcn"
import Radix from "./page/radix/Radix"

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/shadcn" element={<Shadcn />} />
          <Route path="/radix" element={<Radix />} />
        </Route>
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
