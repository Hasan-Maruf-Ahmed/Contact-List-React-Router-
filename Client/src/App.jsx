import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Root } from "./routes/Root"
import { ErrorPage } from "./ErrorPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
