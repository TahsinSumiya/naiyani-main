import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch('/api/config')
  .then((response) => response.json())
  .then((data) => {
    const stripePromise = loadStripe(data.publishableKey);

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <Elements stripe={stripePromise}>
            <RouterProvider router={routes} />
          </Elements>
        </Provider>
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.error('Error:', error);
    // Optionally render an error boundary or fallback UI here
  });
