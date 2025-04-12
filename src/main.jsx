//import react
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";

//import react router
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//impoer i18n
import './i18n';

//import general styles
import './assets/index.css'

//import components
import {NavBar} from "./pages/NavBar/NavBar"  
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Footer } from "./pages/Footer/Footer"

  import ErrorPage from './pages/ErrorPage/ErrorPage'

const ComponentsWrapper = () =>{
  return(
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Textil Cabrera",
            "url": "https://textilcabrera.com",
            "telephone": "+598 2288 5630",
            "email": "tcc@adinet.com.uy",
            "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ruta 8 km 27.500",
            "addressLocality": "Pando",
            "addressRegion": "Canelones",
            "postalCode": "91000",
            "addressCountry": "UY",
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://textilcabrera.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentsWrapper/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/productos',
        element: <Products/>
      },
      {
        path: '/contacto',
        element: <ContactUs/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
