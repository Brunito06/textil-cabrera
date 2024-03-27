//import styles
import './ErrorPage.css'

//import react router
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 id='errorNumber'>404</h1>
      <p id='errorP'>Oops! The page you're looking for is not here.</p>
      <a id='goHome' href="http://localhost:5173/"> 
            Go Back to Home 
      </a> 
    </div>
  );
}