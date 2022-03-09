import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import { initializeApp } from "firebase/app";
import FirebaseLogin from "~/components/FirebaseLogin.js";
export function meta() {
  return { title: "GainsBro" };
}

export let loader = async () => {
  return {
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MSG_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
  };
};

function NavBar({ children }) {
  return (
    <nav className="navbar is-black">
      <div className="navbar-brand">
        <Link className="navbar-item is-size-5 " to="/home">
          <div className="has-text-white has-text-weight-bold">GAINS</div>
          BRO
        </Link>
        <div className="navbar-item">{children}</div>
      </div>
    </nav>
  );
}

export default function App() {
  const data = useLoaderData();
  const app = initializeApp(data.firebaseConfig);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="black"></meta>
        <Meta />
        <Links />

        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        /> */}

        <link href="https://css.gg/css" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={require("../assets/logo.png")}></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
        ></link>
      </head>
      <body>
        <NavBar>
          <FirebaseLogin app={app} />
        </NavBar>
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
