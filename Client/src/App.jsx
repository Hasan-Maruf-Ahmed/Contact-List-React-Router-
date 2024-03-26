import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root, loader as rootLoader, action as rootAction } from "./routes/Root";
import { ErrorPage } from "./ErrorPage";
import Contact, { loader as contactLoader } from "./routes/Contact";
import EditContact, {action as editAction} from "./routes/EditContact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={rootLoader} action={rootAction}>
      <Route path="contacts/:contactId" element={<Contact/>} loader={contactLoader}/>
      <Route path="contacts/:contactId/edit" element={<EditContact />} loader={contactLoader} action={editAction}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
