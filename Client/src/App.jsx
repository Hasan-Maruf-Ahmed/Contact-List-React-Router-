import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { loader, Root, loader as rootLoader } from "./routes/Root";
import { ErrorPage } from "./ErrorPage";
import Contact from "./routes/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={rootLoader}>
      <Route path="contacts/:contactId" element={<Contact/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
