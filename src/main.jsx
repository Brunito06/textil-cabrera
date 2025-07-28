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
            "@type": "Organization",
            "name": "Textil Cabrera",
            "legalName": "Textil Cabrera SRL",
            "url": "https://textilcabrera.com",
            "logo": "https://textilcabrera.com/src/assets/mainImages/Logo.png",
            "foundingDate": "1989",
            "description": "Empresa uruguaya especializada en reciclaje textil desde 1989. Fabricamos estopas, trapos industriales, guatas siliconadas y productos TNT de alta calidad.",
            "telephone": "+598 2288 5630",
            "email": "tcc@adinet.com.uy",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ruta 8 km 28 Cno. Vega Helguera - Calle Edipo S/N",
              "addressLocality": "Barros Blancos",
              "addressRegion": "Canelones",
              "postalCode": "91000",
              "addressCountry": "UY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.736355",
              "longitude": "-55.984856"
            },
            "sameAs": [
              "https://www.instagram.com/textilcabrera28",
              "https://wa.me/+59898695831"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+598 2288 5630",
              "contactType": "customer service",
              "availableLanguage": ["Spanish", "English"]
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Productos de Reciclaje Textil",
                "description": "Estopas, trapos industriales, guatas siliconadas, productos TNT"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://textilcabrera.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Textil Cabrera",
            "url": "https://textilcabrera.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://textilcabrera.com/?s={search_term_string}"
              },
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
