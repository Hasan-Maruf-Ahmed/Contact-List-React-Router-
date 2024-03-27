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
import { action as destroyAction } from "./routes/Destroy";
import Index from "./routes/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={rootLoader} action={rootAction}>
      <Route index={true} element={<Index />} />
      <Route path="contacts/:contactId" element={<Contact/>} loader={contactLoader}/>
      <Route path="contacts/:contactId/edit" element={<EditContact />} loader={contactLoader} action={editAction}/>
      <Route path="contacts/:contactId/destroy" action={destroyAction} errorElement={<div>Oops! There was an error.</div>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
