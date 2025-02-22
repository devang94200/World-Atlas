import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./Pages/Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import "./App.css";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Country } from "./Pages/Country";

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,

    errorElement : <ErrorPage />,
    children :[
      {
        path : "/",
        element : <Home />,
      },
    
      {
        path : "about",
        element : <About />,
      },
    
      {
        path : "country",
        element : <Country />,
      },
    
      {
        path : "contact",
        element : <Contact />,
      },
    ]
  }
 

])

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
