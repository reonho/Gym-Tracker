import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

export function meta() {
  return { title: "Gym Log" };
}

function NavBar({ children }) {
  return (
    <nav className="navbar is-black">
      <div className="navbar-brand">
        <a className="navbar-item ml-2 mr-0 p-1">
          <img src={require("../assets/dumbbell-128.png")} width="25" />
        </a>
        <a className="navbar-item has-text-white is-size-5 has-text-weight-bold">
          GYM Tracker
        </a>
        <a className="navbar-item" href="/">
          Home
        </a>
        <a className="navbar-item" href="/workouts">
          Workout
        </a>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
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
        <NavBar />
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
