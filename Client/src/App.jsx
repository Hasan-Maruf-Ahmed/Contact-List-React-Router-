import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Root } from "./routes/Root"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} />
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
