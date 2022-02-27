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
  return { title: "Gym Log" };
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
        <Link
          className="navbar-item has-text-white is-size-5 has-text-weight-bold"
          to="/home"
        >
          LOGGY
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
        <Meta />
        <Links />
        <link href="https://css.gg/css" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
        />
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
