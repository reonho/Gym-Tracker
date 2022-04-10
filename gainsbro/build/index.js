var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// assets/logo.png
var require_logo = __commonJS({
  "assets/logo.png"(exports, module2) {
    module2.exports = "/build/_assets/logo-U3Q6XKRB.png";
  }
});

// assets/banner.png
var require_banner = __commonJS({
  "assets/banner.png"(exports, module2) {
    module2.exports = "/build/_assets/banner-NAOHMWAI.png";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
var dotenv = require("dotenv");
dotenv.config();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/styles.module.css
var styles_module_default = "/build/_assets/styles.module-FCJAQGRA.css";

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\root.jsx
var import_app = require("firebase/app");

// app/components/FirebaseLogin.js
init_react();
var import_auth = require("firebase/auth");
var import_react = require("react");
var import_md = require("react-icons/md");
function FirebaseLogin(props) {
  const [user, setUser] = (0, import_react.useState)();
  const [dropdownActive, setDropdownActive] = (0, import_react.useState)(false);
  const provider = new import_auth.GoogleAuthProvider();
  const auth = (0, import_auth.getAuth)(props.app);
  function googleLogin() {
    (0, import_auth.signInWithRedirect)(auth, provider);
  }
  function logout() {
    auth.signOut();
  }
  (0, import_auth.onAuthStateChanged)(auth, (result) => {
    result ? setUser(result) : setUser(null);
  });
  return /* @__PURE__ */ React.createElement("div", null, !user && /* @__PURE__ */ React.createElement("button", {
    onClick: googleLogin,
    className: "button is-black soraFont"
  }, "Login"), user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `dropdown ${dropdownActive ? "is-active" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-trigger"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-black is-fullwidth soraFont ",
    "aria-haspopup": "true",
    "aria-controls": "dropdown-menu",
    onClick: () => {
      setDropdownActive((activeState) => !activeState);
    }
  }, /* @__PURE__ */ React.createElement("span", null, user.displayName), /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement(import_md.MdExpandMore, {
    size: 20
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-menu",
    id: "dropdown-menu",
    role: "menu"
  }, /* @__PURE__ */ React.createElement("a", {
    onClick: logout,
    className: "dropdown-item"
  }, "Logout")))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\root.jsx
function meta() {
  return { title: "GainsBro" };
}
function links() {
  return [{ rel: "stylesheet", href: styles_module_default }];
}
var loader = async () => {
  return {
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MSG_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    }
  };
};
function NavBar({ children }) {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "navbar is-black p-0 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-brand"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "navbar-item is-size-5 soraFont",
    to: "/home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "has-text-white has-text-weight-bold"
  }, "GAINS"), "BRO"), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-item"
  }, children)));
}
function App() {
  const data = (0, import_remix2.useLoaderData)();
  const app = (0, import_app.initializeApp)(data.firebaseConfig);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "black"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://css.gg/css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Merriweather&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: require_logo()
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
  })), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavBar, null, /* @__PURE__ */ React.createElement(FirebaseLogin, {
    app
  })), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.$locationId.jsx
var locations_locationId_exports = {};
__export(locations_locationId_exports, {
  action: () => action,
  default: () => LocationRoute,
  loader: () => loader2
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_lodash = require("lodash");

// app/service/location.js
init_react();

// app/supabase.js
init_react();
var import_supabase_js = require("@supabase/supabase-js");
var supabase;
var supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
var supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
if (false) {
  supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
} else {
  if (!global.supabase) {
    global.supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
  }
  supabase = global.supabase;
}
var supabase_default = supabase;

// app/service/location.js
async function getLocations(user) {
  const { data, error } = await supabase_default.from("location").select("*").eq("user_id", user);
  return data;
}
async function getWorkoutsPerLocation(user) {
  const { data, error } = await supabase_default.from("workouts_per_location").select("*").eq("user_id", user);
  return data;
}
async function deleteLocation(locationId) {
  const { data, error } = await supabase_default.from("location").delete().match({ id: locationId });
  return data;
}
async function renameLocation(locationId, locationName) {
  const { data, error } = await supabase_default.from("location").update({ name: locationName }).match({ id: locationId });
  return data;
}
async function addLocation(locationName, userId) {
  const { data, error } = await supabase_default.from("location").insert({ name: locationName, user_id: userId });
  return data;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.$locationId.jsx
var import_react2 = require("react");
var loader2 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const workoutsAtLocation = await getWorkoutsPerLocation(user);
  const getNameFromId = (0, import_lodash.mapValues)((0, import_lodash.groupBy)(workoutsAtLocation, (e) => e.id), (e) => {
    var _a;
    return (_a = e[0]) == null ? void 0 : _a.name;
  });
  const workoutsPerLocation = (0, import_lodash.mapValues)((0, import_lodash.groupBy)(workoutsAtLocation, (e) => e.id), (e) => {
    var _a;
    return ((_a = e[0]) == null ? void 0 : _a.count) ?? 0;
  });
  return [workoutsPerLocation, getNameFromId];
};
var action = async ({ request }) => {
  var _a;
  const form = await request.formData();
  if (request.method === "PUT") {
    const locationId = form.get("locationId");
    const locationName = form.get("locationName");
    await renameLocation(locationId, locationName.replace(/ /g, "_").toLowerCase());
  } else if (request.method === "DELETE") {
    const deleted = await deleteLocation(form.get("locationId"));
    if (deleted !== null) {
      const user = (_a = deleted == null ? void 0 : deleted[0]) == null ? void 0 : _a.user_id;
      return (0, import_remix3.redirect)(user ? `/locations?user=${user}` : "/");
    }
  }
  return "Success";
};
function LocationRoute() {
  const { locationId } = (0, import_remix3.useParams)();
  const [workoutsPerLocation, getNameFromId] = (0, import_remix3.useLoaderData)();
  const fetcher = (0, import_remix3.useFetcher)();
  const [showInput, setShowInput] = (0, import_react2.useState)(false);
  const [renameInput, setRenameInput] = (0, import_react2.useState)((0, import_lodash.startCase)(getNameFromId["" + locationId] ?? null));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "m-3 container box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-5 mb-1"
  }, (0, import_lodash.startCase)(getNameFromId["" + locationId])), /* @__PURE__ */ React.createElement("i", null, getNameFromId[locationId]), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2"
  }, "Number of workouts: ", workoutsPerLocation["" + locationId] ?? 0), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2"
  }), showInput && /* @__PURE__ */ React.createElement("div", {
    className: "level-item"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-info",
    value: renameInput,
    onChange: (e) => setRenameInput(e.target.value)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "button is-light is-info ml-1",
    onClick: () => {
      fetcher.submit({ locationId, locationName: renameInput }, { method: "PUT" });
      setShowInput(false);
    }
  }, "Submit")), !showInput && /* @__PURE__ */ React.createElement("div", {
    className: "buttons level-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "button is-light is-info",
    onClick: () => setShowInput((prev) => !prev)
  }, "Rename"), !workoutsPerLocation["" + locationId] && /* @__PURE__ */ React.createElement("div", {
    className: "button is-light is-danger",
    onClick: () => fetcher.submit({ locationId }, { method: "DELETE" })
  }, "Delete"))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements.jsx
var measurements_exports = {};
__export(measurements_exports, {
  default: () => MeasurementRoute
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_react4 = require("react");

// app/components/UserAuthorisedComponent.js
init_react();
var import_remix4 = __toESM(require_remix());
var import_auth2 = require("firebase/auth");
var import_react3 = require("react");
function UserAuthorisedComponent(props) {
  const [user, setUser] = (0, import_react3.useState)();
  const navigate = (0, import_remix4.useNavigate)();
  const auth = (0, import_auth2.getAuth)();
  (0, import_auth2.onAuthStateChanged)(auth, (result) => {
    result ? setUser(result) : setUser(null);
  });
  (0, import_react3.useEffect)(() => {
    if (user === null) {
      navigate("/");
    }
    if (user) {
      let _ = props.setUser ? props.setUser(user) : null;
      const uid = user.uid;
      if (props.idPredicate && !props.idPredicate(uid)) {
        navigate("/home");
      } else {
        let _2 = props.setUserId ? props.setUserId(uid) : null;
      }
    }
  }, [user]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.children);
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements.jsx
function MeasurementRoute() {
  const location = (0, import_remix5.useLocation)();
  const [searchParams] = (0, import_remix5.useSearchParams)();
  const userId = searchParams.get("user");
  const navigate = (0, import_remix5.useNavigate)();
  (0, import_react4.useEffect)(() => {
    if (location.pathname === "/measurements") {
      navigate(`/measurements/history?user=${userId}&measurement_id=1`);
    }
  }, [location, navigate, userId]);
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-2 mt-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Body Measurements"), /* @__PURE__ */ React.createElement("div", {
    className: "tabs"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/measurements/history" ? "is-active" : null
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/measurements/history?user=${userId}&measurement_id=1`
  }, "Records")), /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/measurements/add" ? "is-active" : null
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/measurements/add?user=${userId}`
  }, "Log Measurement")))))), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\history.jsx
var history_exports = {};
__export(history_exports, {
  default: () => MeasurementHistoryRoute,
  loader: () => loader3
});
init_react();
var import_dayjs2 = __toESM(require("dayjs"));
var import_lodash3 = require("lodash");
var import_remix6 = __toESM(require_remix());

// app/components/MeasurementProgress.js
init_react();
var import_react5 = require("react");
var import_auto = __toESM(require("chart.js/auto"));
var import_dayjs = __toESM(require("dayjs"));
var import_lodash2 = require("lodash");
function MeasurementProgress(props) {
  const [ctx, setCtx] = (0, import_react5.useState)(null);
  const chronologicalProgress = (0, import_lodash2.sortBy)(props.history, (e) => (0, import_dayjs.default)(e.date));
  (0, import_react5.useEffect)(() => {
    let color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`;
    setCtx(document.getElementById("measurementProgress"));
    let chartStatus = import_auto.default.getChart("measurementProgress");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    const measurementChart = new import_auto.default(ctx, {
      type: "line",
      data: {
        labels: chronologicalProgress.map((e) => (0, import_dayjs.default)(e.date).format("YYYY-MM-DD")),
        datasets: [
          {
            label: props.name,
            data: chronologicalProgress.map((e) => e.value),
            fill: true,
            tension: 0.4,
            borderColor: color,
            backgroundColor: color
          }
        ]
      },
      options: {
        plugins: {}
      }
    });
    return () => {
      measurementChart.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "measurementProgress"
  }));
}

// app/service/measurements.js
init_react();
async function getMeasurementTypes() {
  const { data, error } = await supabase_default.from("measurements").select("*");
  return data;
}
async function addMeasurement(measurement_id, value, user, date) {
  const { data, error } = await supabase_default.from("user_measurement").insert({
    measurement: measurement_id,
    value,
    user_id: user,
    date
  });
  return data;
}
async function getMeasurementHistory(measurement_id, user) {
  const { data, error } = await supabase_default.from("user_measurement").select("*").eq("user_id", user).eq("measurement", measurement_id);
  return data;
}
async function getMeasurementFromId(id, user) {
  const { data, error } = await supabase_default.from("user_measurement").select("*").eq("user_id", user).eq("id", id);
  return data;
}
async function editMeasurement(oldMeasurement, newMeasurement) {
  const { data, error } = await supabase_default.from("user_measurement").update(newMeasurement).match(oldMeasurement);
  console.log(error, oldMeasurement, data);
  return data;
}
async function deleteMeasurement(oldMeasurement) {
  const { data, error } = await supabase_default.from("user_measurement").delete().match(oldMeasurement);
  return data;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\history.jsx
var loader3 = async ({ request }) => {
  const metrics = await getMeasurementTypes();
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let measurementId = url.searchParams.get("measurement_id");
  const history = await getMeasurementHistory(measurementId, user);
  return [metrics, history.sort((a, b) => -(0, import_dayjs2.default)(a.date) + (0, import_dayjs2.default)(b.date))];
};
function MeasurementHistoryRoute() {
  var _a, _b;
  const submit = (0, import_remix6.useSubmit)();
  const location = (0, import_remix6.useLocation)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
  const [metrics, history] = (0, import_remix6.useLoaderData)();
  const userId = searchParams.getAll("user");
  const measurementId = searchParams.getAll("measurement_id");
  const metricName = (0, import_lodash3.startCase)((_b = (_a = metrics.filter((e) => e.id === parseInt(searchParams.get("measurement_id")))) == null ? void 0 : _a[0]) == null ? void 0 : _b.measurement);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-3"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("select", {
    className: "input",
    name: "measurement_id",
    defaultValue: searchParams.get("measurement_id") ?? 1,
    onChange: (e) => {
      submit({
        measurement_id: e.target.value,
        user: searchParams.getAll("user")
      });
    }
  }, metrics.map((e) => /* @__PURE__ */ React.createElement("option", {
    key: e.id,
    value: e.id
  }, (0, import_lodash3.startCase)(e["measurement"]))))), history.length === 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "m-3"
  }, "No Measurements") : location.pathname !== "/measurements/history/edit" && /* @__PURE__ */ React.createElement(MeasurementProgress, {
    history,
    name: metricName
  }), /* @__PURE__ */ React.createElement(import_remix6.Outlet, null), location.pathname !== "/measurements/history/edit" && /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, history.map((h) => /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      verticalAlign: "middle"
    },
    className: "p-3 m-1 box",
    key: h.id
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    class: "tag is-medium is-light mr-3"
  }, (0, import_dayjs2.default)(h.date).format("DD/MM/YYYY")), /* @__PURE__ */ React.createElement("span", {
    class: "tag is-light is-medium"
  }, h.value)), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: `/measurements/history/edit?user=${userId}&measurement_id=${measurementId}&id=${h.id}`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-info is-small"
  }, "Edit")))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\history\edit.jsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action2,
  default: () => EditMeasurementRoute,
  loader: () => loader4
});
init_react();
var import_react6 = require("react");
var import_remix7 = __toESM(require_remix());
var loader4 = async ({ request }) => {
  let url = new URL(request.url);
  const id = url.searchParams.get("id");
  const user = url.searchParams.get("user");
  const measurement = getMeasurementFromId(id, user);
  return measurement;
};
var action2 = async ({ request }) => {
  const form = await request.formData();
  const oldMeasurement = JSON.parse(form.get("oldMeasurement"));
  const measurementId = oldMeasurement.measurement;
  const user = oldMeasurement.user_id;
  if (request.method === "DELETE") {
    await deleteMeasurement(oldMeasurement);
  } else {
    const newMeasurement = __spreadProps(__spreadValues({}, oldMeasurement), {
      value: form.get("measurementValue"),
      date: form.get("date")
    });
    await editMeasurement(oldMeasurement, newMeasurement);
  }
  return (0, import_remix7.redirect)(`/measurements/history?user=${user}&measurement_id=${measurementId}`);
};
function EditMeasurementRoute() {
  const measurement = (0, import_remix7.useLoaderData)();
  const [searchParams] = (0, import_remix7.useSearchParams)();
  const [measurementValue, setMeasurementValue] = (0, import_react6.useState)(measurement[0].value);
  const [date, setDate] = (0, import_react6.useState)(measurement[0].date);
  const fetcher = (0, import_remix7.useFetcher)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "message-header "
  }, "Edit Record", /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: `/measurements/history?user=${searchParams.getAll("user")}&measurement_id=${searchParams.getAll("measurement_id")}`
  }, /* @__PURE__ */ React.createElement("button", {
    class: "delete",
    "aria-label": "delete"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "message-body"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "Value"), /* @__PURE__ */ React.createElement("input", {
    className: "input mb-2",
    type: "number",
    name: "measurementValue",
    value: measurementValue,
    onChange: (e) => setMeasurementValue(e.target.value)
  }), /* @__PURE__ */ React.createElement("b", null, "Date"), /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    className: "input mb-5",
    name: "date",
    value: date,
    onChange: (e) => setDate(e.target.value)
  }), /* @__PURE__ */ React.createElement("button", {
    className: "button mr-1 is-light is-success",
    onClick: () => {
      fetcher.submit({
        oldMeasurement: JSON.stringify(measurement[0]),
        measurementValue,
        date
      }, { method: "POST" });
    }
  }, "Submit"), /* @__PURE__ */ React.createElement("button", {
    className: "button mr-1 is-light is-danger",
    onClick: () => {
      fetcher.submit({ oldMeasurement: JSON.stringify(measurement[0]) }, {
        method: "DELETE"
      });
    }
  }, "Delete")))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\add.jsx
var add_exports = {};
__export(add_exports, {
  action: () => action3,
  default: () => AddMeasurementRoute,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_lodash5 = require("lodash");
var import_react7 = require("react");
var import_react_bootstrap_typeahead = require("react-bootstrap-typeahead");

// app/utils/utils.js
init_react();
var import_lodash4 = require("lodash");
function getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4)
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}
function getWeekNumber(date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 864e5 + 1) / 7);
}
var getCurrentDateTime = () => {
  const date = new Date();
  var year = date.getFullYear();
  var month = (0, import_lodash4.padStart)(date.getMonth() + 1, 2, 0);
  var day = (0, import_lodash4.padStart)(date.getDate(), 2, 0);
  var hr = (0, import_lodash4.padStart)(date.getHours(), 2, 0);
  var min = (0, import_lodash4.padStart)(date.getMinutes(), 2, 0);
  return `${year}-${month}-${day}T${hr}:${min}`;
};

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\add.jsx
var loader5 = async ({ request }) => {
  const metrics = await getMeasurementTypes();
  return metrics;
};
var action3 = async ({ request }) => {
  const form = await request.formData();
  await addMeasurement(form.get("metric"), form.get("value"), form.get("user"), form.get("date"));
  return (0, import_remix8.redirect)(`measurements/history?user=${form.get("user")}&measurement_id=${form.get("metric")}`);
};
function AddMeasurementRoute() {
  const metrics = (0, import_remix8.useLoaderData)().map((m) => __spreadProps(__spreadValues({}, m), {
    measurement_label: (0, import_lodash5.startCase)(m.measurement)
  }));
  const [selectedMetric, setSelectedMetric] = (0, import_react7.useState)();
  const [value, setValue] = (0, import_react7.useState)();
  const [user, setUser] = (0, import_react7.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react7.useState)(false);
  const [date, setDate] = (0, import_react7.useState)(getCurrentDateTime());
  const [searchParams] = (0, import_remix8.useSearchParams)();
  const submit = (0, import_remix8.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST",
    onSubmit: async (event) => {
      var _a;
      setIsSubmitting(true);
      event.preventDefault();
      submit({
        date,
        value,
        metric: (_a = selectedMetric == null ? void 0 : selectedMetric[0]) == null ? void 0 : _a.id,
        user: searchParams.getAll("user")
      }, { method: "POST" });
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field is-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-label is-normal"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Metric")), /* @__PURE__ */ React.createElement("div", {
    className: "field-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "control"
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap_typeahead.Typeahead, {
    id: "metric",
    labelKey: "measurement_label",
    onChange: (m) => setSelectedMetric(m),
    options: metrics,
    placeholder: "Choose Measurement"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "field is-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-label is-normal"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Value")), /* @__PURE__ */ React.createElement("div", {
    className: "field-body"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input",
    name: "metricValue",
    type: "number",
    step: "any",
    onChange: (e) => setValue(e.target.value)
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "field is-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-label is-normal"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Date")), /* @__PURE__ */ React.createElement("div", {
    className: "field-body"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    className: "input",
    name: "datetimeLocal",
    value: date,
    onChange: (e) => setDate(e.target.value)
  })))), /* @__PURE__ */ React.createElement("hr", {
    className: "dropdown-divider"
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: isSubmitting | !(value && selectedMetric && date),
    className: "button is-light is-info ml-1",
    type: "submit"
  }, "Log Measurement")))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics.jsx
var analytics_exports = {};
__export(analytics_exports, {
  default: () => AnalyticsRoute
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_dayjs3 = __toESM(require("dayjs"));
var import_react8 = require("react");
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs3.default.extend(weekOfYear);
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix9.useSearchParams)();
  const userId = searchParams.get("user");
  const location = (0, import_remix9.useLocation)();
  const user = searchParams.get("user");
  const date = new Date();
  const weekYear = `${(0, import_dayjs3.default)().year()}-W${getWeekNumber(date)}`;
  const navigate = (0, import_remix9.useNavigate)();
  (0, import_react8.useEffect)(() => {
    if (location.pathname === "/analytics/") {
      navigate(`/analytics/trained-this-week?user=${user}&week=${weekYear}`);
    }
  }, [location, navigate, user]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mt-5 mb-1"
  }, "Analytics"), /* @__PURE__ */ React.createElement("div", {
    className: "level"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-item "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box container m-2"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "menu"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "menu-label"
  }, "Effort Stats"), /* @__PURE__ */ React.createElement("ul", {
    className: "menu-list"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/trained-this-week" ? "is-active" : null,
    href: `/analytics/trained-this-week?user=${user}&week=${weekYear}`
  }, "Trained this Week")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/workouts-per-week" ? "is-active" : null,
    href: `/analytics/workouts-per-week?user=${user}`
  }, "Workouts per Week")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/schedule" ? "is-active" : null,
    href: `/analytics/schedule?user=${user}&week=${weekYear}`
  }, "Schedule")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/statistics" ? "is-active" : null,
    href: `/analytics/statistics?user=${user}`
  }, "Statistics"))), /* @__PURE__ */ React.createElement("ul", {
    className: "menu-list"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "menu-label"
  }, "Strength Stats"), /* @__PURE__ */ React.createElement("ul", {
    className: "menu-list"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/progressive-overload" ? "is-active" : null,
    href: `/analytics/progressive-overload?user=${user}`
  }, "Progressive Overload")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/personal-bests" ? "is-active" : null,
    href: `/analytics/personal-bests?user=${user}`
  }, "Personal Bests")))))), /* @__PURE__ */ React.createElement("div", {
    className: "level-item"
  }, location.pathname !== "/analytics" && /* @__PURE__ */ React.createElement("div", {
    className: "box container m-2"
  }, /* @__PURE__ */ React.createElement(import_remix9.Outlet, null))))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var progressive_overload_exports = {};
__export(progressive_overload_exports, {
  default: () => ProgressRoute,
  loader: () => loader6
});
init_react();

// app/service/exercises.js
init_react();
async function getExercises(muscle_group) {
  if (muscle_group) {
    const { data, error } = await supabase_default.from("exercise").select("*").eq("muscle_group", muscle_group);
    return data;
  } else {
    const { data, error } = await supabase_default.from("exercise").select("*");
    return data;
  }
}
async function getMuscleGroups() {
  const { data, error } = await supabase_default.from("distinct_muscle_groups").select("*").order("name");
  return data;
}
async function getExercisesForUser(userId) {
  const { data, error } = await supabase_default.from("exercises_for_user").select("*").eq("user_id", userId);
  return data;
}

// app/service/sets.js
init_react();
var import_dayjs4 = __toESM(require("dayjs"));
var weekOfYear2 = require("dayjs/plugin/weekOfYear");
import_dayjs4.default.extend(weekOfYear2);
async function deleteSet(formSet) {
  await supabase_default.from("set").delete().match({ id: formSet.get("index") });
  const { data } = await supabase_default.from("empty_workout_exercises").select("*");
  const ids = data.map((workout_exercise) => workout_exercise.id);
  await supabase_default.from("workout_exercise").delete().in("id", ids);
}
async function addSet(formSet) {
  var _a;
  const add = await supabase_default.from("set").insert([
    {
      workout_exercise: formSet.get("workout_exercise_id"),
      weight: null,
      repetitions: null,
      completed: false
    }
  ]);
  return (_a = add == null ? void 0 : add.data) == null ? void 0 : _a[0];
}
async function updateSet(formSet) {
  let submissionSet = {
    weight: null,
    repetitions: null,
    completed: false
  };
  const weightForSet = formSet.get("weight");
  const repsForSet = formSet.get("repetitions");
  const completedForSet = formSet.get("completed");
  if (weightForSet !== null) {
    submissionSet.weight = parseFloat(weightForSet);
  }
  if (repsForSet !== null) {
    submissionSet.repetitions = parseFloat(repsForSet);
  }
  if (completedForSet !== null) {
    submissionSet.completed = completedForSet === "true";
  }
  const { data } = await supabase_default.from("set").update(submissionSet).match({ id: formSet.get("index") });
  return data;
}
async function getSetsForUser(userId, filter_start, filter_end) {
  const filter_date_start = filter_start ? (0, import_dayjs4.default)(filter_start) : (0, import_dayjs4.default)((0, import_dayjs4.default)().week((0, import_dayjs4.default)().week()).startOf("week").startOf("day"));
  const filter_date_end = filter_end ? (0, import_dayjs4.default)(filter_end) : (0, import_dayjs4.default)();
  const { data, error } = await supabase_default.from("setsforworkout").select("*").eq("user_id", userId).gte("datetime_start", filter_date_start).lte("datetime_start", filter_date_end);
  return data;
}
async function getBestSetPerWorkoutExercise(userId, exerciseId) {
  if (exerciseId) {
    const { data } = await supabase_default.from("max_volume_for_workout_exercise").select("*").eq("user_id", userId).eq("exercise_id", exerciseId);
    return data;
  } else {
    const { data } = await supabase_default.from("max_volume_for_workout_exercise").select("*").eq("user_id", userId);
    return data;
  }
}
async function getLifetimeStatistics(userId) {
  const { data } = await supabase_default.from("lifetime_stats").select("*").eq("user_id", userId);
  return data;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var import_remix10 = __toESM(require_remix());
var import_lodash7 = require("lodash");

// app/components/ProgressiveOverload.js
init_react();
var import_react9 = require("react");
var import_auto2 = __toESM(require("chart.js/auto"));
var import_chart = require("chart.js");
var import_dayjs5 = __toESM(require("dayjs"));
var import_lodash6 = require("lodash");
import_auto2.default.register([import_chart.Tooltip]);
function ProgressiveOverload(props) {
  const [ctx, setCtx] = (0, import_react9.useState)(null);
  const exerciseProgress = (0, import_lodash6.sortBy)(props.progressiveOverload, (e) => e.datetime_start);
  (0, import_react9.useEffect)(() => {
    let color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`;
    setCtx(document.getElementById("progressiveOverload"));
    let chartStatus = import_auto2.default.getChart("progressiveOverload");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    const progressiveOverloadChart = new import_auto2.default(ctx, {
      type: "line",
      data: {
        labels: exerciseProgress.map((e) => (0, import_dayjs5.default)(e.datetime_start).format("DD/MM/YY")),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => e.max_volume),
            fill: true,
            tension: 0.4,
            borderColor: color,
            backgroundColor: color
          }
        ]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                return `Volume: ${exerciseProgress[dataIndex].max_volume} | Weight: ${exerciseProgress[dataIndex].weight} | Reps: ${exerciseProgress[dataIndex].repetitions}`;
              }
            }
          }
        }
      }
    });
    return () => {
      progressiveOverloadChart.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "progressiveOverload"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var loader6 = async ({ request }) => {
  var _a;
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const exercises = await getExercisesForUser(user);
  let exercise = url.searchParams.get("exercise_id") ?? ((_a = exercises[0]) == null ? void 0 : _a.id);
  const sets = await getBestSetPerWorkoutExercise(user, exercise);
  const setsByExercise = (0, import_lodash7.groupBy)(sets, (s) => s.exercise_id)[exercise];
  return { setsByExercise, exercises };
};
function ProgressRoute() {
  const { setsByExercise, exercises } = (0, import_remix10.useLoaderData)();
  const submit = (0, import_remix10.useSubmit)();
  const [searchParams] = (0, import_remix10.useSearchParams)();
  const singleExerciseChart = setsByExercise;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Progressive Overload"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), singleExerciseChart && /* @__PURE__ */ React.createElement("div", {
    className: "select mb-4 "
  }, /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("select", {
    className: "input",
    name: "exercise_id",
    onChange: (e) => {
      submit({
        exercise_id: e.target.value,
        user: searchParams.getAll("user")
      });
    }
  }, exercises.map((e) => /* @__PURE__ */ React.createElement("option", {
    key: e.id,
    value: e.id
  }, `${(0, import_lodash7.startCase)(e.name)} ${(e == null ? void 0 : e.variant) ? `(${(0, import_lodash7.startCase)(e.variant)})` : ""}`)))))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, singleExerciseChart ? /* @__PURE__ */ React.createElement(ProgressiveOverload, {
    progressiveOverload: singleExerciseChart
  }) : "Nothing trained yet"));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\trained-this-week.jsx
var trained_this_week_exports = {};
__export(trained_this_week_exports, {
  action: () => action4,
  default: () => ThisWeekRoute,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_dayjs6 = __toESM(require("dayjs"));
var import_lodash9 = __toESM(require("lodash"));

// app/components/WeeklyTrainingSets.js
init_react();
var import_react10 = require("react");
var import_auto3 = __toESM(require("chart.js/auto"));
var import_lodash8 = require("lodash");
function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = (0, import_react10.useState)(null);
  const sets = props.weeklySets;
  (0, import_react10.useEffect)(() => {
    let chartStatus = import_auto3.default.getChart("weeklySets");
    if (chartStatus) {
      chartStatus.destroy();
    }
    setCtx(document.getElementById("weeklySets"));
    const weeklySetsChart = new import_auto3.default(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(sets).map((e) => (0, import_lodash8.startCase)(e)),
        datasets: [
          {
            label: "# of Sets",
            borderRadius: 5,
            data: Object.values(sets),
            backgroundColor: Object.values(sets).map((e) => `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`)
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      weeklySetsChart.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "weeklySets"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\trained-this-week.jsx
var weekOfYear3 = require("dayjs/plugin/weekOfYear");
var customParseFormat = require("dayjs/plugin/customParseFormat");
import_dayjs6.default.extend(weekOfYear3);
import_dayjs6.default.extend(customParseFormat);
var action4 = async ({ request }) => {
};
var loader7 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let yearWeek = url.searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const userWorkouts = await getSetsForUser(user, weekStartingOnDay.toDateString(), new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 7)).toDateString());
  return (0, import_lodash9.default)(userWorkouts).groupBy((set) => set.muscle_group).mapValues((e) => e.length);
};
function ThisWeekRoute() {
  const weeklySets = (0, import_remix11.useLoaderData)();
  const [searchParams] = (0, import_remix11.useSearchParams)();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const submit = (0, import_remix11.useSubmit)();
  const renderTrainedThisWeek = () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "title is-4 mb-2"
    }, "Trained this Week"), /* @__PURE__ */ React.createElement("hr", {
      className: "mt-2 mb-3"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.toDateString()), " -", " ", /* @__PURE__ */ React.createElement("b", null, new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 6)).toDateString()), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
      className: "mt-2 mb-2"
    }, /* @__PURE__ */ React.createElement(import_remix11.Form, {
      method: "get"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "field-body"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "control"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "week",
      className: "input",
      name: "week",
      value: yearWeek,
      onChange: (e) => {
        submit({
          week: e.target.value,
          user: searchParams.getAll("user")
        });
      }
    })))))), Object.keys(weeklySets).length === 0 ? /* @__PURE__ */ React.createElement("div", {
      className: "m-3"
    }, "No Workouts") : /* @__PURE__ */ React.createElement(WeeklyTrainingSets, {
      weeklySets
    }));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, renderTrainedThisWeek());
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\workouts-per-week.jsx
var workouts_per_week_exports = {};
__export(workouts_per_week_exports, {
  default: () => WorkoutsPerWeekRoute,
  loader: () => loader8
});
init_react();
var import_remix12 = __toESM(require_remix());

// app/service/workouts.js
init_react();
async function createWorkout(workout) {
  var _a;
  let checkLocation = await supabase_default.from("location").select("id").match({ name: workout.location, user_id: workout.userId });
  let locationId;
  if (checkLocation.data.length === 0) {
    checkLocation = await supabase_default.from("location").insert({ name: workout.location, user_id: workout.userId });
  }
  locationId = (_a = checkLocation.data) == null ? void 0 : _a[0].id;
  const { data } = await supabase_default.from("workout").insert([
    {
      name: workout.name,
      datetime_start: workout.datetime,
      datetime_end: void 0,
      location: locationId,
      user_id: workout.userId
    }
  ]);
  return data[0].id;
}
async function deleteWorkout(workout_id) {
  const workout = await supabase_default.from("setsforworkout").select("*").eq("workout_id", workout_id);
  const associated_workout_exercises = "(" + workout.data.map((e) => e.workout_exercise_id).toString() + ")";
  await supabase_default.from("set").delete().filter("workout_exercise", "in", associated_workout_exercises);
  await supabase_default.from("workout_exercise").delete().match({ workout: workout_id });
  const _deleteWorkout = await supabase_default.from("workout").delete().match({ id: workout_id });
  return _deleteWorkout.data;
}
async function getWorkout(id) {
  let { data: workout } = await supabase_default.from("workouts_with_location").select("*").eq("id", id);
  return workout;
}
async function getExercisesForWorkout(id) {
  let { data } = await supabase_default.from("setsforworkout").select("*").eq("workout_id", id).order("set_id");
  return data;
}
async function finishWorkout(id, datetime) {
  const { data } = await supabase_default.from("workout").update({ datetime_end: datetime }).match({ id });
  return data;
}
async function getWorkoutsForUser(userId) {
  const { data } = await supabase_default.from("workouts_with_location").select("*").eq("user_id", userId);
  const workouts = data;
  return workouts.sort((a, b) => new Date(b.datetime_start) - new Date(a.datetime_start));
}
async function postExercisetoWorkout({ workout_id, exercise_id }) {
  var _a, _b, _c;
  const workoutExercise = await supabase_default.from("workout_exercise").select("*, exercise!inner(*)").eq("exercise", exercise_id).eq("workout", workout_id);
  if (workoutExercise == null ? void 0 : workoutExercise.data) {
    return;
  }
  const addExercise = await supabase_default.from("workout_exercise").insert([{ exercise: exercise_id, workout: workout_id }]);
  const addSet2 = await supabase_default.from("set").insert([
    {
      workout_exercise: (_b = (_a = addExercise == null ? void 0 : addExercise.data) == null ? void 0 : _a[0]) == null ? void 0 : _b.id,
      weight: null,
      repetitions: null,
      completed: false
    }
  ]);
  return (_c = addSet2 == null ? void 0 : addSet2.data) == null ? void 0 : _c[0];
}
async function deleteExerciseFromWorkout(form) {
  await supabase_default.from("set").delete().match({ workout_exercise: form.get("workout_exercise_id") });
  await supabase_default.from("workout_exercise").delete().match({ id: form.get("workout_exercise_id") });
  return;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\workouts-per-week.jsx
var import_lodash11 = __toESM(require("lodash"));
var import_dayjs7 = __toESM(require("dayjs"));

// app/components/WorkoutsPerWeek.js
init_react();
var import_react11 = require("react");
var import_auto4 = __toESM(require("chart.js/auto"));
var import_lodash10 = require("lodash");
function WorkoutsPerWeek(props) {
  const [ctx, setCtx] = (0, import_react11.useState)(null);
  (0, import_react11.useEffect)(() => {
    let chartStatus = import_auto4.default.getChart("workoutsPerWeek");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    if (Object.keys(props.workoutsPerWeek).length === 0) {
      return;
    }
    setCtx(document.getElementById("workoutsPerWeek"));
    const workoutsPerWeekChart = new import_auto4.default(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(props.workoutsPerWeek),
        datasets: [
          {
            label: "# Workouts per Week",
            data: Object.values(props.workoutsPerWeek),
            borderRadius: 5,
            backgroundColor: Object.values(props.workoutsPerWeek).map((e) => `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`)
          }
        ]
      },
      options: {
        indexAxis: "y",
        aspectRatio: 4 / Object.keys(props.workoutsPerWeek).length,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "workoutsPerWeek"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\workouts-per-week.jsx
var loader8 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getWorkoutsForUser(user);
  workouts = (0, import_lodash11.default)(workouts).groupBy((w) => `${(0, import_dayjs7.default)(w.datetime_start).year()} Week ${String(getWeekNumber(new Date(w.datetime_start))).padStart(2, "0")}`).mapValues((e) => e.length).value();
  let weeksToShow = Object.keys(workouts);
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash11.transform)((0, import_lodash11.pick)(workouts, weeksToShow), (res, val, key) => {
    res[key] = val;
  });
};
function WorkoutsPerWeekRoute() {
  const workouts = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Workouts per Week"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement(WorkoutsPerWeek, {
    workoutsPerWeek: workouts
  })));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\personal-bests.jsx
var personal_bests_exports = {};
__export(personal_bests_exports, {
  default: () => PersonalBestRoute,
  loader: () => loader9
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_lodash13 = __toESM(require("lodash"));
var import_react13 = require("react");

// app/components/PersonalBest.js
init_react();
var import_react12 = require("react");
var import_auto5 = __toESM(require("chart.js/auto"));
var import_lodash12 = require("lodash");
function PersonalRecords(props) {
  const [ctx, setCtx] = (0, import_react12.useState)(null);
  (0, import_react12.useEffect)(() => {
    let chartStatus = import_auto5.default.getChart("personalRecords");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    setCtx(document.getElementById("personalRecords"));
    const prChart = new import_auto5.default(ctx, {
      type: "bar",
      data: {
        labels: props.bestSets.map((value) => (0, import_lodash12.startCase)(`${value.exercise_name} ${value.variant ?? ""}`)),
        datasets: [
          {
            label: "Weight",
            data: props.bestSets.map((value) => value.weight),
            borderRadius: 5,
            backgroundColor: props.bestSets.map((e) => {
              return `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},0.4)`;
            })
          }
        ]
      },
      options: {
        indexAxis: "y",
        aspectRatio: 4 / props.bestSets.length,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                const set = Object.values(props.bestSets);
                return ` Weight: ${set[dataIndex].weight} | Vol: ${set[dataIndex].weight} x ${set[dataIndex].repetitions} = ${set[dataIndex].max_volume}`;
              }
            }
          }
        }
      }
    });
    return () => {
      prChart.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "personalRecords"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\personal-bests.jsx
var loader9 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const sets = await getBestSetPerWorkoutExercise(user);
  const bestSetByExercise = (0, import_lodash13.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash13.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  return Object.values(bestSetByExercise);
};
function PersonalBestRoute() {
  const listBestSets = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-1"
  }, "Personal Bests"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("i", null, "Weight of set with max volume")), listBestSets.length ? /* @__PURE__ */ React.createElement(PersonalRecords, {
    bestSets: listBestSets
  }) : "No workouts yet");
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\statistics.jsx
var statistics_exports = {};
__export(statistics_exports, {
  default: () => StatisticsRoute,
  loader: () => loader10
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_lodash14 = __toESM(require("lodash"));
var import_dayjs8 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs8.default.extend(weekOfYear4);
var loader10 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs8.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
  return [stats, totalTimeSpent, Math.round(totalTimeSpent / workouts.length)];
};
function StatisticsRoute() {
  const [stats, totalTimeSpent, averageTimeSpent] = (0, import_remix14.useLoaderData)();
  const abbv = {
    AW: "Average Weight",
    AR: "Average Repetitions",
    Reps: "Total Repetitions",
    Vol: "Total Volume",
    Num: "Total Number of Sets"
  };
  const formatNumber = (num, digits = 2) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item2) {
      return num >= item2.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  };
  let workoutsTable = stats.map((w) => ({
    Exercise: `${(0, import_lodash14.startCase)(w.name)} ${(w == null ? void 0 : w.variant) ? `(${(0, import_lodash14.startCase)(w.variant)})` : ""}`,
    Reps: Math.round(w.total_reps),
    Vol: Math.round(w.sum_volume),
    Num: w.num_sets
  }));
  const columnNames = [...Object.keys(Object.entries(workoutsTable)[0][1])];
  const rows = Object.entries(workoutsTable).map(([k, v], index) => [
    ...Object.values(v)
  ]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 m-2"
  }, "Statistics"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, "Total lifetime metrics:"), /* @__PURE__ */ React.createElement("div", {
    className: "notification",
    style: { flexDirection: "column", display: "flex" }
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Total Time: "), /* @__PURE__ */ React.createElement("i", null, totalTimeSpent, " min")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Average Time: "), /* @__PURE__ */ React.createElement("i", null, averageTimeSpent, " min")), columnNames.filter((c) => c !== "Exercise").map((name) => /* @__PURE__ */ React.createElement("p", {
    key: name
  }, /* @__PURE__ */ React.createElement("b", null, abbv[name], " (", name, "):", " "), /* @__PURE__ */ React.createElement("i", null, name === "Vol" ? formatNumber((0, import_lodash14.reduce)(Object.values(workoutsTable), (a, b) => a + b[name], 0)) : (0, import_lodash14.reduce)(Object.values(workoutsTable), (a, b) => a + b[name], 0))))), /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, "Total lifetime metrics by exercise: "), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("table", {
    style: { overflow: "scroll", fontSize: "1rem" },
    className: "table is-striped is-narrow is-hoverable is-fullwidth"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, columnNames.map((e, index) => /* @__PURE__ */ React.createElement("th", {
    key: index
  }, e)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((row, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, row.map((ele, eleIndex) => eleIndex >= 1 ? /* @__PURE__ */ React.createElement("td", {
    key: eleIndex
  }, formatNumber(ele)) : /* @__PURE__ */ React.createElement("th", {
    key: eleIndex
  }, ele))))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\schedule.jsx
var schedule_exports = {};
__export(schedule_exports, {
  default: () => WeeklyScheduleRoute,
  loader: () => loader11
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_lodash15 = __toESM(require("lodash"));
var import_dayjs9 = __toESM(require("dayjs"));
var weekOfYear5 = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
import_dayjs9.default.extend(weekOfYear5);
import_dayjs9.default.extend(utc);
var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var loader11 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const yearWeek = url.searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  let workouts = await getSetsForUser(user, weekStartingOnDay.toDateString(), new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 7)).toDateString());
  return workouts;
};
function WeeklyScheduleRoute() {
  let workoutData = (0, import_remix15.useLoaderData)();
  const [searchParams] = (0, import_remix15.useSearchParams)();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = (0, import_dayjs9.default)(getDateOfISOWeek(week, year));
  const submit = (0, import_remix15.useSubmit)();
  const workouts = (0, import_lodash15.default)(workoutData).groupBy((w) => import_dayjs9.default.utc(w.datetime_start).local().format("dddd")).mapValues((v) => (0, import_lodash15.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length).value()).value();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(6, "day").format("DD/MM/YYYY")), " "), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 mb-2"
  }, /* @__PURE__ */ React.createElement(import_remix15.Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-body"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "week",
    className: "input",
    name: "week",
    value: yearWeek,
    onChange: (e) => {
      submit({
        week: e.target.value,
        user: searchParams.getAll("user")
      });
    }
  }))))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexDirection: "row", flexWrap: "wrap" }
  }, [...Array(7).keys()].map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: item,
    style: { width: "50%" }
  }, (workouts == null ? void 0 : workouts[weekdays[item]]) ? /* @__PURE__ */ React.createElement("article", {
    key: index,
    className: `message is-small is-secondary m-3 `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message-header"
  }, `${weekdays[item]} - ${weekStartingOnDay.add(index, "day").format("DD/MM/YYYY")}`), /* @__PURE__ */ React.createElement("div", {
    className: "message-body"
  }, Object.entries(workouts == null ? void 0 : workouts[weekdays[item]]).map(([k, v], index2) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: index2
    }, /* @__PURE__ */ React.createElement("b", null, (0, import_lodash15.startCase)(k), " - ", v));
  }))) : /* @__PURE__ */ React.createElement("div", {
    className: "message is-small is-light m-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message-header"
  }, `${weekdays[item]} - ${weekStartingOnDay.add(index, "day").format("DD/MM/YYYY")}`), /* @__PURE__ */ React.createElement("div", {
    className: "message-body"
  }, /* @__PURE__ */ React.createElement("b", null, "Rest Day \u{1F4AA}")))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.jsx
var locations_exports = {};
__export(locations_exports, {
  action: () => action5,
  default: () => ManageLocationsRoute,
  loader: () => loader12
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_lodash16 = require("lodash");
var import_react14 = require("react");
var loader12 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
var action5 = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};
function ManageLocationsRoute() {
  const locations = (0, import_remix16.useLoaderData)();
  const [user, setUser] = (0, import_react14.useState)();
  const [searchParams] = (0, import_remix16.useSearchParams)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser,
    idPredicate: (id) => id === searchParams.get("user")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-1"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3 mt-5"
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix16.Link, {
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash16.startCase)(e.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement("b", null, "Add Location"), /* @__PURE__ */ React.createElement("hr", {
    class: "dropdown-divider"
  }), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-info",
    name: "locationName"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "input is-info",
    name: "userId",
    type: "hidden",
    value: searchParams.get("user")
  }), /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-info ml-1",
    type: "submit"
  }, "Submit"))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workouts.jsx
var workouts_exports = {};
__export(workouts_exports, {
  default: () => ViewWorkoutRoute,
  loader: () => loader13
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_lodash17 = require("lodash");
var import_dayjs10 = __toESM(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs10.default.extend(utc2);
var loader13 = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};
function ViewWorkoutRoute() {
  const workouts = (0, import_remix17.useLoaderData)();
  const [searchParams] = (0, import_remix17.useSearchParams)();
  const userId = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mt-5"
  }, "Workouts"), workouts.length === 0 && "No workouts yet", workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix17.Link, {
    key: "workout.id",
    className: "box",
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs10.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs10.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash17.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
    size: 40,
    className: "m-4 p-1"
  }) : /* @__PURE__ */ React.createElement(import_bs.BsClockHistory, {
    size: 40,
    className: "m-4 p-1"
  })))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout.jsx
var workout_exports = {};
__export(workout_exports, {
  default: () => NewWorkoutRoute
});
init_react();
var import_remix18 = __toESM(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_remix18.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action6,
  default: () => StartNewWorkoutRoute,
  loader: () => loader14
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_lodash18 = require("lodash");
var import_react16 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react15 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react15.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react15.useState)(props.running);
  (0, import_react15.useEffect)(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1e3);
      }, 1e3);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react15.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react15.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react15.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var import_dayjs11 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc3 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs11.default.extend(utc3);
import_dayjs11.default.extend(relativeTime);
var loader14 = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};
var action6 = async ({ request, params }) => {
  if (request.method == "POST") {
    const form = await request.formData();
    const workout = await finishWorkout(form.get("workout_id"), form.get("end"));
    return workout;
  }
  if (request.method == "DELETE") {
    const form = await request.formData();
    const workout = await deleteWorkout(form.get("workout_id"));
    return (0, import_remix19.redirect)("/");
  }
};
function toTime(time) {
  return /* @__PURE__ */ React.createElement("div", null, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ React.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ React.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ React.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
}
function workoutMetaData(workout) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "hero is-light mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hero-body "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title mb-3"
  }, workout == null ? void 0 : workout.name), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-pin"
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash18.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-alarm"
  })), /* @__PURE__ */ React.createElement("span", {
    id: "start"
  }, `${import_dayjs11.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix19.useLoaderData)()[0];
  const fetcher = (0, import_remix19.useFetcher)();
  const [userId, setUserId] = (0, import_react16.useState)();
  const [showMenu, setShowMenu] = (0, import_react16.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react16.useState)(false);
  const [customDate, setCustomDate] = (0, import_react16.useState)(null);
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUserId,
    idPredicate: (id) => id === workout.user_id
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, workoutMetaData(workout), /* @__PURE__ */ React.createElement("div", {
    className: "p-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message-body notification mb-3",
    style: {
      display: "flex",
      justifyContent: "space-between",
      verticalAlign: "middle"
    }
  }, (workout == null ? void 0 : workout.datetime_end) ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-1"
  }, "Workout Completed. "), toTime(import_dayjs11.default.utc(workout.datetime_end) - import_dayjs11.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: (0, import_dayjs11.default)() - import_dayjs11.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs11.default)().utc()
    }, { method: "POST" })
  }, "Finish"), showMenu && /* @__PURE__ */ React.createElement("div", {
    className: "box p-2",
    style: {
      position: "absolute",
      top: "80%",
      right: "3%",
      zIndex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-danger is-small is-fullwidth",
    onClick: () => fetcher.submit({
      workout_id: workout.id
    }, { method: "DELETE" })
  }, "Delete Workout")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setShowChangeTime((e) => !e),
    className: "button is-small is-light is-fullwidth"
  }, "Set Finish Time")), showChangeTime && /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "datetime-local",
    onSelect: (e) => {
      if ((0, import_dayjs11.default)(e.target.value) > import_dayjs11.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-small is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs11.default)(customDate).utc()
      }, { method: "POST" });
      setShowMenu(false);
    }
  }, "Finish"))), /* @__PURE__ */ React.createElement("button", {
    className: " button is-light  mb-2",
    onClick: () => setShowMenu((e) => !e)
  }, /* @__PURE__ */ React.createElement(import_md2.MdOutlineMenu, null)))), /* @__PURE__ */ React.createElement(import_remix19.Outlet, null))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader15
});
init_react();
var import_lodash19 = require("lodash");
var import_remix20 = __toESM(require_remix());
var loader15 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix20.useSearchParams)();
  const muscle_groups = (0, import_remix20.useLoaderData)();
  const navigate = (0, import_remix20.useNavigate)();
  const { workoutId } = (0, import_remix20.useParams)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      navigate(`/workout/${workoutId}/addExercise`);
    },
    className: `button is-light is-small ${searchParams.get("muscle_group") ?? "is-active"}`
  }, "All"), muscle_groups.map((muscle) => /* @__PURE__ */ React.createElement("button", {
    key: muscle,
    onClick: () => {
      setSearchParams({ muscle_group: muscle.name });
    },
    className: `button is-light is-small ${searchParams.get("muscle_group") === muscle.name ? "is-active" : ""}`
  }, (0, import_lodash19.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix20.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action7,
  default: () => AddExerciseRoute,
  loader: () => loader16
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_lodash20 = require("lodash");
var import_react17 = require("react");
var import_react_bootstrap_typeahead2 = require("react-bootstrap-typeahead");
var loader16 = async ({ request }) => {
  let url = new URL(request.url);
  let muscle_group = url.searchParams.get("muscle_group");
  const exercises = await getExercises(muscle_group);
  return exercises;
};
var action7 = async ({ params, request }) => {
  const { workoutId, user } = params;
  const form = await request.formData();
  let exercise = form.get("exercise");
  await postExercisetoWorkout({
    workout_id: workoutId,
    exercise_id: exercise
  });
  return (0, import_remix21.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix21.useParams)();
  const [selected, setSelected] = (0, import_react17.useState)([]);
  const [disabled, setDisabled] = (0, import_react17.useState)(false);
  const exercises = (0, import_remix21.useLoaderData)();
  const fetcher = (0, import_remix21.useFetcher)();
  const exNameToIdMap = (0, import_lodash20.mapValues)((0, import_lodash20.groupBy)(exercises, (exercise) => `${(0, import_lodash20.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash20.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_bootstrap_typeahead2.Typeahead, {
    id: "exercise_options",
    onChange: setSelected,
    options: exercises.map((exercise) => `${(0, import_lodash20.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash20.startCase)(exercise.variant)})` : ""}`),
    placeholder: "Choose Exercise",
    selected
  }), /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-item"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setDisabled(true);
      fetcher.submit({ exercise: exNameToIdMap[selected] }, { method: "POST" });
    },
    className: "button is-small is-dark ",
    disabled: !selected || disabled
  }, "Add")), /* @__PURE__ */ React.createElement("div", {
    className: "level-item"
  }, /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/workout/${workoutId}/currentExercises`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-small is-light"
  }, "Cancel"))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\currentExercises.jsx
var currentExercises_exports = {};
__export(currentExercises_exports, {
  action: () => action8,
  default: () => CurrentExercisesRoute,
  loader: () => loader17
});
init_react();
var import_remix22 = __toESM(require_remix());
var import_lodash22 = __toESM(require("lodash"));
var import_react19 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react18 = require("react");
var import_lodash21 = require("lodash");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react18.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react18.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react18.useState)(props.completed);
  const updateDb = (0, import_lodash21.debounce)((weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index), 200, {
    leading: true,
    trailing: true
  });
  (0, import_react18.useEffect)(() => {
    updateDb(weight, repetitions, completed, props.index);
  }, [weight, repetitions, completed]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mb-2 p-2",
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: "1vh",
      backgroundColor: completed ? "#ebfffc" : "#f5f5f5"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "number",
    placeholder: "Weight (kg)",
    value: weight,
    onChange: (e) => {
      setWeight(e.target.value);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-1"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "number",
    placeholder: "Reps",
    value: repetitions,
    onChange: (e) => {
      setRepetitions(() => {
        updateDb(weight, e.target.value, completed, props.index);
        return e.target.value;
      });
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-1"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-danger is-light is-small",
    onClick: props.deleteFunc
  }, /* @__PURE__ */ React.createElement(import_cg.CgClose, {
    size: 15
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "ml-1"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setCompleted((complete) => {
        return !complete;
      });
    },
    className: `button is-small is-light ${completed ? "is-primary" : ""}`
  }, /* @__PURE__ */ React.createElement(import_ri.RiCheckFill, {
    size: 15
  }))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\currentExercises.jsx
var loader17 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash22.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash22.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash22.groupBy)(setsForWorkout, (set) => `${(0, import_lodash22.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash22.startCase)(set.variant)})` : ""}`);
  return { exerciseSets, bestSetByExercise };
};
var action8 = async ({ request }) => {
  const form = await request.formData();
  switch (request.method) {
    case "PUT":
      if (form.get("type") === "set") {
        await updateSet(form);
        break;
      }
    case "POST":
      await addSet(form);
      break;
    case "DELETE":
      if (form.get("type") === "exercise") {
        await deleteExerciseFromWorkout(form);
        break;
      }
      if (form.get("type") === "set") {
        await deleteSet(form);
        break;
      }
  }
  return form;
};
function CurrentExercisesRoute() {
  const { exerciseSets, bestSetByExercise } = (0, import_remix22.useLoaderData)();
  const [showDelete, setShowDelete] = (0, import_react19.useState)();
  const [localExerciseState, setLocalExerciseState] = (0, import_react19.useState)(exerciseSets);
  const { workoutId } = (0, import_remix22.useParams)();
  const fetcher = (0, import_remix22.useFetcher)();
  (0, import_react19.useEffect)(() => setLocalExerciseState(exerciseSets), [exerciseSets]);
  const renderExerciseForm = (exercise_name, sets) => {
    var _a;
    const exerciseId = (_a = sets[0]) == null ? void 0 : _a.exercise_id;
    if (exerciseId == null) {
      return;
    }
    const exerciseSetForm = {
      workout_id: workoutId,
      exercise_name,
      workout_exercise_id: sets[0].workout_exercise_id
    };
    const submitSetForm = (weight, repetitions, completed, index) => fetcher.submit({
      workout_id: workoutId,
      repetitions,
      weight,
      index,
      completed,
      type: "set"
    }, { method: "PUT" });
    const deleteFunc = (index) => {
      setLocalExerciseState((oldState) => {
        const newState = __spreadValues({}, oldState);
        newState[exercise_name] = newState[exercise_name].filter((s) => s.set_id !== index);
        return newState;
      });
      fetcher.submit({
        workout_id: workoutId,
        exercise_name,
        type: "set",
        index
      }, { method: "DELETE" });
    };
    const submitFunc = () => {
      setLocalExerciseState((oldState) => {
        const newState = __spreadValues({}, oldState);
        newState[exercise_name] = [...newState[exercise_name], exerciseSetForm];
        return newState;
      });
      fetcher.submit(exerciseSetForm, { method: "POST" });
    };
    const previousBestSet = bestSetByExercise[exerciseId];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "box mb-3"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "title is-5 mb-1"
    }, exercise_name, " "), previousBestSet && /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, " PB:"), " ", previousBestSet.weight, " x", " ", previousBestSet.repetitions, " | ", previousBestSet.max_volume), /* @__PURE__ */ React.createElement("hr", {
      className: "mb-2 mt-2"
    }), sets.map((set) => /* @__PURE__ */ React.createElement(SetInput, {
      key: set.set_id,
      index: set.set_id,
      weight: set.weight,
      completed: set.completed,
      repetitions: set.repetitions,
      deleteFunc: () => deleteFunc(set.set_id),
      submitFunc: submitSetForm
    })), /* @__PURE__ */ React.createElement("buttons", {
      className: "level is-mobile mt-5"
    }, /* @__PURE__ */ React.createElement("div", {
      style: { width: "85%" }
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        submitFunc();
      },
      className: "button is-fullwidth is-black is-small tile"
    }, "+ Set")), /* @__PURE__ */ React.createElement("div", {
      className: `${(showDelete == null ? void 0 : showDelete[exerciseId]) ?? false ? "is-active" : ""} dropdown is-right`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "dropdown-trigger"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "button is-light is-small ml-1",
      "aria-haspopup": "true",
      "aria-controls": "dropdown-menu6",
      onClick: () => setShowDelete((e) => __spreadProps(__spreadValues({}, e), {
        [exerciseId]: !((e == null ? void 0 : e[exerciseId]) ?? false)
      }))
    }, /* @__PURE__ */ React.createElement(import_md3.MdOutlineMenu, null))), /* @__PURE__ */ React.createElement("div", {
      className: "dropdown-menu p-0 m-0",
      id: "dropdown-menu6",
      role: "menu"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "dropdown-content p-0 mt-1"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "dropdown-item p-2 m-0"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "button is-light is-danger is-small is-fullwidth m-0 p-0",
      onClick: () => fetcher.submit(__spreadProps(__spreadValues({}, exerciseSetForm), { type: "exercise" }), { method: "DELETE" })
    }, "Delete Exercise"))))))));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.entries(localExerciseState).map(([exercise_name, sets], exIndex) => /* @__PURE__ */ React.createElement("div", {
    key: exIndex
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix22.Outlet, null), /* @__PURE__ */ React.createElement(import_remix22.Link, {
    to: `/workout/${workoutId}/addExercise`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mt-5 button is-black is-fullwidth is-small"
  }, "+ Exercise")));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\create.jsx
var create_exports = {};
__export(create_exports, {
  action: () => action9,
  default: () => CreateWorkoutRoute,
  loader: () => loader18
});
init_react();
var import_remix23 = __toESM(require_remix());
var import_lodash23 = require("lodash");
var import_react20 = require("react");
var import_dayjs12 = __toESM(require("dayjs"));
var utc4 = require("dayjs/plugin/utc");
import_dayjs12.default.extend(utc4);
var action9 = async ({ request }) => {
  var _a;
  const form = await request.formData();
  let userId = form.get("userId");
  let name = form.get("name");
  let datetime = form.get("datetime");
  let location = form.get("location");
  location = ((_a = location == null ? void 0 : location.toLowerCase()) == null ? void 0 : _a.replace(/ /g, "_")) ?? null;
  const workoutObjectId = await createWorkout({
    name,
    datetime,
    location,
    userId
  });
  return (0, import_remix23.redirect)(`/workout/${workoutObjectId}/currentExercises`);
};
var loader18 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
function CreateWorkoutRoute() {
  const locations = (0, import_remix23.useLoaderData)();
  const [user, setUser] = (0, import_react20.useState)();
  const [hasLocation, setHasLocation] = (0, import_react20.useState)();
  const submit = (0, import_remix23.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3 mt-5"
  }, "Create New Workout"), /* @__PURE__ */ React.createElement(import_remix23.Form, {
    method: "POST",
    onSubmit: async (event) => {
      event.preventDefault();
      const uid = user.uid;
      const userId = document.createElement("input");
      userId.setAttribute("type", "hidden");
      userId.setAttribute("name", "userId");
      userId.setAttribute("value", uid);
      const datetime = document.createElement("input");
      datetime.setAttribute("type", "hidden");
      datetime.setAttribute("name", "datetime");
      datetime.setAttribute("value", (0, import_dayjs12.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs12.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
      event.target.append(userId);
      event.target.append(datetime);
      event.target.append(name);
      submit(event.target);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field is-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-label is-normal"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Name/Desc")), /* @__PURE__ */ React.createElement("div", {
    className: "field-body"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input",
    name: "namePlaceholder",
    type: "text",
    placeholder: `${(0, import_dayjs12.default)(getCurrentDateTime()).format("dddd")} workout`
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "field is-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-label is-normal"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Date")), /* @__PURE__ */ React.createElement("div", {
    className: "field-body"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    className: "input",
    name: "datetimeLocal",
    defaultValue: getCurrentDateTime()
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "field is-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field-label is-normal"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Location")), /* @__PURE__ */ React.createElement("div", {
    className: "field-body "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => {
      !e.target.value ? setHasLocation(false) : setHasLocation(true);
    },
    type: "text",
    autoComplete: "off",
    className: `input select `,
    list: "locations",
    name: "location"
  }), /* @__PURE__ */ React.createElement("datalist", {
    id: "locations",
    className: ""
  }, locations.map((item) => /* @__PURE__ */ React.createElement("option", {
    key: item.name,
    value: (0, import_lodash23.startCase)(item.name)
  })))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("button", {
    className: "button is-dark ",
    type: "submit",
    disabled: !hasLocation
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix23.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader19
});
init_react();
var import_remix24 = __toESM(require_remix());
var loader19 = async () => {
  return (0, import_remix24.redirect)("/home");
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeRoute
});
init_react();
var import_react21 = require("react");
var import_ri2 = require("react-icons/ri");
var import_gi = require("react-icons/gi");
var import_md4 = require("react-icons/md");
var import_remix25 = __toESM(require_remix());
function HomeRoute() {
  const [userId, setUserId] = (0, import_react21.useState)();
  const [user, setUser] = (0, import_react21.useState)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUserId,
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-6 level"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-left bounce container is-hidden-desktop"
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_banner()
  })), /* @__PURE__ */ React.createElement("div", {
    className: "level-left bounce container is-hidden-touch",
    style: { width: "60vw" }
  }, /* @__PURE__ */ React.createElement("img", {
    src: require_banner()
  })), user ? /* @__PURE__ */ React.createElement("div", {
    className: "level-right "
  }, /* @__PURE__ */ React.createElement("nav", {
    className: ""
  }, /* @__PURE__ */ React.createElement("p", {
    className: "box soraFont primary has-text-white title mb-2 is-4"
  }, "Hello, ", user && user.displayName), /* @__PURE__ */ React.createElement("a", null), /* @__PURE__ */ React.createElement("div", {
    className: "p-1"
  }, /* @__PURE__ */ React.createElement(import_remix25.Link, {
    className: "soraFont box p-4 mb-2",
    to: `/create?user=${userId}`
  }, "\u{1F4AA} Create Workout"), /* @__PURE__ */ React.createElement("a", {
    className: "box p-4 mb-2 soraFont ",
    href: `/analytics/?user=${userId}`
  }, "\u{1F4C8} Analytics"), /* @__PURE__ */ React.createElement("a", {
    className: "box p-4 mb-2 soraFont",
    href: `/workouts?user=${userId}`
  }, "\u{1F4C5} Workouts"), /* @__PURE__ */ React.createElement("a", {
    className: "box p-4 mb-2 soraFont ",
    href: `/locations?user=${userId}`
  }, "\u{1F3EA} Locations"), /* @__PURE__ */ React.createElement("a", {
    className: "box p-4 mb-2 soraFont ",
    href: `/measurements?user=${userId}`
  }, "\u{1F351} Measurements")))) : /* @__PURE__ */ React.createElement("div", {
    className: "level-right container soraFont"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-1 mb-1"
  }, "Workout, Smarter."), /* @__PURE__ */ React.createElement("div", null, "Please log in to continue..."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(FirebaseLogin, null))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "72ebf68c", "entry": { "module": "/build/entry.client-5YTKMBB4.js", "imports": ["/build/_shared/chunk-PPPN3KM7.js", "/build/_shared/chunk-CV24HI43.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RHIRSHVD.js", "imports": ["/build/_shared/chunk-RCF4GYLP.js", "/build/_shared/chunk-DUKUP6RN.js", "/build/_shared/chunk-NO2E4X2J.js", "/build/_shared/chunk-WUPTWQDT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-45B6V5AA.js", "imports": ["/build/_shared/chunk-XB6PLCNL.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-FN2YQYRM.js", "/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-MTR3K3PI.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-Y57V6CYU.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-2WO7OP7A.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-I55EIS4E.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-M3BM5UWQ.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-7OMXJ3EF.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-OV7DXXAU.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-FN2YQYRM.js", "/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-FS4P2GME.js", "imports": ["/build/_shared/chunk-QJQTZUSC.js", "/build/_shared/chunk-DJKJCTAI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LRXO6RX7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-A6OBPLW5.js", "imports": ["/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-E5TQJ4GH.js", "imports": ["/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements": { "id": "routes/measurements", "parentId": "root", "path": "measurements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements-IMPPPGOB.js", "imports": ["/build/_shared/chunk-DJKJCTAI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/add": { "id": "routes/measurements/add", "parentId": "routes/measurements", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/add-MX6RG2N2.js", "imports": ["/build/_shared/chunk-XA7KITFM.js", "/build/_shared/chunk-FN2YQYRM.js", "/build/_shared/chunk-WUPTWQDT.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history": { "id": "routes/measurements/history", "parentId": "routes/measurements", "path": "history", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history-EZAAGAAL.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history/edit": { "id": "routes/measurements/history/edit", "parentId": "routes/measurements/history", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history/edit-AOFVHCJX.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-VPY3XTXJ.js", "imports": ["/build/_shared/chunk-DJKJCTAI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-2MVWCPFB.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js", "/build/_shared/chunk-DUKUP6RN.js", "/build/_shared/chunk-NO2E4X2J.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-WUPTWQDT.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-GHLX3QQ7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-7NMI44H3.js", "imports": ["/build/_shared/chunk-XA7KITFM.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-QJP5D42U.js", "imports": ["/build/_shared/chunk-QJQTZUSC.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-KELGEJ4Y.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-72EBF68C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/locations.$locationId": {
    id: "routes/locations.$locationId",
    parentId: "root",
    path: "locations/:locationId",
    index: void 0,
    caseSensitive: void 0,
    module: locations_locationId_exports
  },
  "routes/measurements": {
    id: "routes/measurements",
    parentId: "root",
    path: "measurements",
    index: void 0,
    caseSensitive: void 0,
    module: measurements_exports
  },
  "routes/measurements/history": {
    id: "routes/measurements/history",
    parentId: "routes/measurements",
    path: "history",
    index: void 0,
    caseSensitive: void 0,
    module: history_exports
  },
  "routes/measurements/history/edit": {
    id: "routes/measurements/history/edit",
    parentId: "routes/measurements/history",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/measurements/add": {
    id: "routes/measurements/add",
    parentId: "routes/measurements",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  },
  "routes/analytics": {
    id: "routes/analytics",
    parentId: "root",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: analytics_exports
  },
  "routes/analytics/progressive-overload": {
    id: "routes/analytics/progressive-overload",
    parentId: "routes/analytics",
    path: "progressive-overload",
    index: void 0,
    caseSensitive: void 0,
    module: progressive_overload_exports
  },
  "routes/analytics/trained-this-week": {
    id: "routes/analytics/trained-this-week",
    parentId: "routes/analytics",
    path: "trained-this-week",
    index: void 0,
    caseSensitive: void 0,
    module: trained_this_week_exports
  },
  "routes/analytics/workouts-per-week": {
    id: "routes/analytics/workouts-per-week",
    parentId: "routes/analytics",
    path: "workouts-per-week",
    index: void 0,
    caseSensitive: void 0,
    module: workouts_per_week_exports
  },
  "routes/analytics/personal-bests": {
    id: "routes/analytics/personal-bests",
    parentId: "routes/analytics",
    path: "personal-bests",
    index: void 0,
    caseSensitive: void 0,
    module: personal_bests_exports
  },
  "routes/analytics/statistics": {
    id: "routes/analytics/statistics",
    parentId: "routes/analytics",
    path: "statistics",
    index: void 0,
    caseSensitive: void 0,
    module: statistics_exports
  },
  "routes/analytics/schedule": {
    id: "routes/analytics/schedule",
    parentId: "routes/analytics",
    path: "schedule",
    index: void 0,
    caseSensitive: void 0,
    module: schedule_exports
  },
  "routes/locations": {
    id: "routes/locations",
    parentId: "root",
    path: "locations",
    index: void 0,
    caseSensitive: void 0,
    module: locations_exports
  },
  "routes/workouts": {
    id: "routes/workouts",
    parentId: "root",
    path: "workouts",
    index: void 0,
    caseSensitive: void 0,
    module: workouts_exports
  },
  "routes/workout": {
    id: "routes/workout",
    parentId: "root",
    path: "workout",
    index: void 0,
    caseSensitive: void 0,
    module: workout_exports
  },
  "routes/workout/$workoutId": {
    id: "routes/workout/$workoutId",
    parentId: "routes/workout",
    path: ":workoutId",
    index: void 0,
    caseSensitive: void 0,
    module: workoutId_exports
  },
  "routes/workout/$workoutId/__addExerciseParent": {
    id: "routes/workout/$workoutId/__addExerciseParent",
    parentId: "routes/workout/$workoutId",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: addExerciseParent_exports
  },
  "routes/workout/$workoutId/__addExerciseParent/addExercise": {
    id: "routes/workout/$workoutId/__addExerciseParent/addExercise",
    parentId: "routes/workout/$workoutId/__addExerciseParent",
    path: "addExercise",
    index: void 0,
    caseSensitive: void 0,
    module: addExercise_exports
  },
  "routes/workout/$workoutId/currentExercises": {
    id: "routes/workout/$workoutId/currentExercises",
    parentId: "routes/workout/$workoutId",
    path: "currentExercises",
    index: void 0,
    caseSensitive: void 0,
    module: currentExercises_exports
  },
  "routes/create": {
    id: "routes/create",
    parentId: "root",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxtZWFzdXJlbWVudHNcXGhpc3RvcnkuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL01lYXN1cmVtZW50UHJvZ3Jlc3MuanMiLCAiLi4vYXBwL3NlcnZpY2UvbWVhc3VyZW1lbnRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbWVhc3VyZW1lbnRzXFxoaXN0b3J5XFxlZGl0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50c1xcYWRkLmpzeCIsICIuLi9hcHAvdXRpbHMvdXRpbHMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3MuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3giLCAiLi4vYXBwL3NlcnZpY2UvZXhlcmNpc2VzLmpzIiwgIi4uL2FwcC9zZXJ2aWNlL3NldHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcdHJhaW5lZC10aGlzLXdlZWsuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0cy5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcd29ya291dHMtcGVyLXdlZWsuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL3dvcmtvdXRzLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vlay5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xccGVyc29uYWwtYmVzdHMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvbmFsQmVzdC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc3RhdGlzdGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHNjaGVkdWxlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGxvY2F0aW9ucy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0cy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudFxcYWRkRXhlcmNpc2UuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcY3VycmVudEV4ZXJjaXNlcy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2V0SW5wdXQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxjcmVhdGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaG9tZS5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcaGlzdG9yeS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXG1lYXN1cmVtZW50c1xcXFxoaXN0b3J5XFxcXGVkaXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcYWRkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHRyYWluZWQtdGhpcy13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHdvcmtvdXRzLXBlci13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc3RhdGlzdGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc2NoZWR1bGUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWFzdXJlbWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJoaXN0b3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnlcIixcbiAgICAgIHBhdGg6IFwiZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJhZGRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic3RhdGlzdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInNjaGVkdWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMVxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tIFwifi9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiR2FpbnNCcm9cIiB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZmlyZWJhc2VDb25maWc6IHtcclxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gICAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0RPTUFJTixcclxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxyXG4gICAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5TVE9SQUdFX0JVQ0tFVCxcclxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk1TR19TRU5ERVJfSUQsXHJcbiAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5BUFBfSUQsXHJcbiAgICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk1FQVNVUkVNRU5UX0lELFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1ibGFjayBwLTAgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaXMtc2l6ZS01IHNvcmFGb250XCIgdG89XCIvaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZSBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPkdBSU5TPC9kaXY+XHJcbiAgICAgICAgICBCUk9cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGRhdGEuZmlyZWJhc2VDb25maWcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cImJsYWNrXCI+PC9tZXRhPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY3NzLmdnL2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvY3NzL1R5cGVhaGVhZC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMi4xNC4xL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29yYTp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3JlcXVpcmUoXCIuLi9hc3NldHMvbG9nby5wbmdcIil9PjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzc1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8TmF2QmFyPlxyXG4gICAgICAgICAgPEZpcmViYXNlTG9naW4gYXBwPXthcHB9IC8+XHJcbiAgICAgICAgPC9OYXZCYXI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWRFeHBhbmRNb3JlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUxvZ2luKHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChwcm9wcy5hcHApO1xyXG5cclxuICBmdW5jdGlvbiBnb29nbGVMb2dpbigpIHtcclxuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gIH1cclxuXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29vZ2xlTG9naW59IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1ibGFjayBzb3JhRm9udFwiPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRyb3Bkb3duICR7ZHJvcGRvd25BY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wZG93bkFjdGl2ZSgoYWN0aXZlU3RhdGUpID0+ICFhY3RpdmVTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPE1kRXhwYW5kTW9yZSBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VQYXJhbXMsIHVzZUxvYWRlckRhdGEsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWFwVmFsdWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFdvcmtvdXRzUGVyTG9jYXRpb24sXHJcbiAgZGVsZXRlTG9jYXRpb24sXHJcbiAgcmVuYW1lTG9jYXRpb24sXHJcbn0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3b3Jrb3V0c0F0TG9jYXRpb24gPSBhd2FpdCBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpO1xyXG5cclxuICBjb25zdCBnZXROYW1lRnJvbUlkID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5uYW1lXHJcbiAgKTtcclxuICBjb25zdCB3b3Jrb3V0c1BlckxvY2F0aW9uID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5jb3VudCA/PyAwXHJcbiAgKTtcclxuICByZXR1cm4gW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgY29uc3QgbG9jYXRpb25JZCA9IGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpO1xyXG5cclxuICAgIGF3YWl0IHJlbmFtZUxvY2F0aW9uKFxyXG4gICAgICBsb2NhdGlvbklkLFxyXG4gICAgICBsb2NhdGlvbk5hbWUucmVwbGFjZSgvIC9nLCBcIl9cIikudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAvLyBERUxFVEVcclxuICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBkZWxldGVMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uSWRcIikpO1xyXG4gICAgaWYgKGRlbGV0ZWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGRlbGV0ZWQ/LlswXT8udXNlcl9pZDtcclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KHVzZXIgPyBgL2xvY2F0aW9ucz91c2VyPSR7dXNlcn1gIDogXCIvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gXCJTdWNjZXNzXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvblJvdXRlKCkge1xyXG4gIGNvbnN0IHsgbG9jYXRpb25JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3Nob3dJbnB1dCwgc2V0U2hvd0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuYW1lSW5wdXQsIHNldFJlbmFtZUlucHV0XSA9IHVzZVN0YXRlKFxyXG4gICAgc3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdID8/IG51bGwpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIGNvbnRhaW5lciBib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPlxyXG4gICAgICAgICAge3N0YXJ0Q2FzZShnZXROYW1lRnJvbUlkW1wiXCIgKyBsb2NhdGlvbklkXSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGk+e2dldE5hbWVGcm9tSWRbbG9jYXRpb25JZF19PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgTnVtYmVyIG9mIHdvcmtvdXRzOiB7d29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gPz8gMH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAge3Nob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlbmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVuYW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGxvY2F0aW9uSWQ6IGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZTogcmVuYW1lSW5wdXQgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFNob3dJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGxldmVsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0lucHV0KChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZW5hbWVcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7IXdvcmtvdXRzUGVyTG9jYXRpb25bXCJcIiArIGxvY2F0aW9uSWRdICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbnModXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c19wZXJfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGxvY2F0aW9uSWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUxvY2F0aW9uKGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAudXBkYXRlKHsgbmFtZTogbG9jYXRpb25OYW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZExvY2F0aW9uKGxvY2F0aW9uTmFtZSwgdXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5pbnNlcnQoeyBuYW1lOiBsb2NhdGlvbk5hbWUsIHVzZXJfaWQ6IHVzZXJJZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxubGV0IHN1cGFiYXNlO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5zdXBhYmFzZSkge1xyXG4gICAgZ2xvYmFsLnN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG4gIH1cclxuICBzdXBhYmFzZSA9IGdsb2JhbC5zdXBhYmFzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XHJcbiIsICJpbXBvcnQgeyBMaW5rLCBPdXRsZXQsIHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzXCIpIHtcclxuICAgICAgbmF2aWdhdGUoYC9tZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0xYCk7XHJcbiAgICB9XHJcbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgdXNlcklkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIgbXQtNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Cb2R5IE1lYXN1cmVtZW50czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL21lYXN1cmVtZW50cy9oaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICB0bz17YC9tZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0xYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVjb3Jkc1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzL2FkZFwiID8gXCJpcy1hY3RpdmVcIiA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tZWFzdXJlbWVudHMvYWRkP3VzZXI9JHt1c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBNZWFzdXJlbWVudFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckF1dGhvcmlzZWRDb21wb25lbnQocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAocmVzdWx0KSA9PiB7XHJcbiAgICByZXN1bHQgPyBzZXRVc2VyKHJlc3VsdCkgOiBzZXRVc2VyKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgICAgbmF2aWdhdGUoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgbGV0IF8gPSBwcm9wcy5zZXRVc2VyID8gcHJvcHMuc2V0VXNlcih1c2VyKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICAgaWYgKHByb3BzLmlkUHJlZGljYXRlICYmICFwcm9wcy5pZFByZWRpY2F0ZSh1aWQpKSB7XHJcbiAgICAgICAgbmF2aWdhdGUoXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgXyA9IHByb3BzLnNldFVzZXJJZCA/IHByb3BzLnNldFVzZXJJZCh1aWQpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8Pntwcm9wcy5jaGlsZHJlbn08Lz47XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgTGluayxcclxuICBPdXRsZXQsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VMb2NhdGlvbixcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbiAgdXNlU3VibWl0LFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgTWVhc3VyZW1lbnRQcm9ncmVzcyBmcm9tIFwifi9jb21wb25lbnRzL01lYXN1cmVtZW50UHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRNZWFzdXJlbWVudFR5cGVzLFxyXG4gIGdldE1lYXN1cmVtZW50SGlzdG9yeSxcclxufSBmcm9tIFwifi9zZXJ2aWNlL21lYXN1cmVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBtZXRyaWNzID0gYXdhaXQgZ2V0TWVhc3VyZW1lbnRUeXBlcygpO1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgbWVhc3VyZW1lbnRJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibWVhc3VyZW1lbnRfaWRcIik7XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBnZXRNZWFzdXJlbWVudEhpc3RvcnkobWVhc3VyZW1lbnRJZCwgdXNlcik7XHJcbiAgcmV0dXJuIFttZXRyaWNzLCBoaXN0b3J5LnNvcnQoKGEsIGIpID0+IC1kYXlqcyhhLmRhdGUpICsgZGF5anMoYi5kYXRlKSldO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVhc3VyZW1lbnRIaXN0b3J5Um91dGUoKSB7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgW21ldHJpY3MsIGhpc3RvcnldID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50SWQgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwibWVhc3VyZW1lbnRfaWRcIik7XHJcbiAgY29uc3QgbWV0cmljTmFtZSA9IHN0YXJ0Q2FzZShcclxuICAgIG1ldHJpY3MuZmlsdGVyKFxyXG4gICAgICAoZSkgPT4gZS5pZCA9PT0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLmdldChcIm1lYXN1cmVtZW50X2lkXCIpKVxyXG4gICAgKT8uWzBdPy5tZWFzdXJlbWVudFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWFzdXJlbWVudF9pZFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoUGFyYW1zLmdldChcIm1lYXN1cmVtZW50X2lkXCIpID8/IDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlbWVudF9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21ldHJpY3MubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT5cclxuICAgICAgICAgICAgICAgIHtzdGFydENhc2UoZVtcIm1lYXN1cmVtZW50XCJdKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAge2hpc3RvcnkubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5ObyBNZWFzdXJlbWVudHM8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxNZWFzdXJlbWVudFByb2dyZXNzIGhpc3Rvcnk9e2hpc3Rvcnl9IG5hbWU9e21ldHJpY05hbWV9IC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge2hpc3RvcnkubWFwKChoKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgbS0xIGJveFwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2guaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLWxpZ2h0IG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF5anMoaC5kYXRlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLWxpZ2h0IGlzLW1lZGl1bVwiPntoLnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgdG89e2AvbWVhc3VyZW1lbnRzL2hpc3RvcnkvZWRpdD91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0ke21lYXN1cmVtZW50SWR9JmlkPSR7aC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcblxyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50UHJvZ3Jlc3MocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2hyb25vbG9naWNhbFByb2dyZXNzID0gc29ydEJ5KHByb3BzLmhpc3RvcnksIChlKSA9PiBkYXlqcyhlLmRhdGUpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNvbG9yID0gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgIH0sMC4zKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFzdXJlbWVudFByb2dyZXNzXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwibWVhc3VyZW1lbnRQcm9ncmVzc1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lYXN1cmVtZW50Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBjaHJvbm9sb2dpY2FsUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgZGF0YTogY2hyb25vbG9naWNhbFByb2dyZXNzLm1hcCgoZSkgPT4gZS52YWx1ZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczoge30sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG1lYXN1cmVtZW50Q2hhcnQuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIm1lYXN1cmVtZW50UHJvZ3Jlc3NcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50VHlwZXMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIm1lYXN1cmVtZW50c1wiKS5zZWxlY3QoXCIqXCIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lYXN1cmVtZW50KG1lYXN1cmVtZW50X2lkLCB2YWx1ZSwgdXNlciwgZGF0ZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ1c2VyX21lYXN1cmVtZW50XCIpLmluc2VydCh7XHJcbiAgICBtZWFzdXJlbWVudDogbWVhc3VyZW1lbnRfaWQsXHJcbiAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB1c2VyX2lkOiB1c2VyLFxyXG4gICAgZGF0ZTogZGF0ZSxcclxuICB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50SGlzdG9yeShtZWFzdXJlbWVudF9pZCwgdXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpXHJcbiAgICAuZXEoXCJtZWFzdXJlbWVudFwiLCBtZWFzdXJlbWVudF9pZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFzdXJlbWVudEZyb21JZChpZCwgdXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpXHJcbiAgICAuZXEoXCJpZFwiLCBpZCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdE1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50LCBuZXdNZWFzdXJlbWVudCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIilcclxuICAgIC51cGRhdGUobmV3TWVhc3VyZW1lbnQpXHJcbiAgICAubWF0Y2gob2xkTWVhc3VyZW1lbnQpO1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLCBvbGRNZWFzdXJlbWVudCwgZGF0YSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVhc3VyZW1lbnQob2xkTWVhc3VyZW1lbnQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ1c2VyX21lYXN1cmVtZW50XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaChvbGRNZWFzdXJlbWVudCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIExpbmssXHJcbiAgcmVkaXJlY3QsXHJcbiAgdXNlRmV0Y2hlcixcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICBnZXRNZWFzdXJlbWVudEZyb21JZCxcclxuICBlZGl0TWVhc3VyZW1lbnQsXHJcbiAgZGVsZXRlTWVhc3VyZW1lbnQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9tZWFzdXJlbWVudHMuanNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IGlkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gZ2V0TWVhc3VyZW1lbnRGcm9tSWQoaWQsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gbWVhc3VyZW1lbnQ7XHJcbn07XHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBvbGRNZWFzdXJlbWVudCA9IEpTT04ucGFyc2UoZm9ybS5nZXQoXCJvbGRNZWFzdXJlbWVudFwiKSk7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IG9sZE1lYXN1cmVtZW50Lm1lYXN1cmVtZW50O1xyXG4gIGNvbnN0IHVzZXIgPSBvbGRNZWFzdXJlbWVudC51c2VyX2lkO1xyXG5cclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIGF3YWl0IGRlbGV0ZU1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbmV3TWVhc3VyZW1lbnQgPSB7XHJcbiAgICAgIC4uLm9sZE1lYXN1cmVtZW50LFxyXG4gICAgICB2YWx1ZTogZm9ybS5nZXQoXCJtZWFzdXJlbWVudFZhbHVlXCIpLFxyXG4gICAgICBkYXRlOiBmb3JtLmdldChcImRhdGVcIiksXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgZWRpdE1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50LCBuZXdNZWFzdXJlbWVudCk7XHJcbiAgfVxyXG4gIHJldHVybiByZWRpcmVjdChcclxuICAgIGAvbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke3VzZXJ9Jm1lYXN1cmVtZW50X2lkPSR7bWVhc3VyZW1lbnRJZH1gXHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdE1lYXN1cmVtZW50Um91dGUoKSB7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBbbWVhc3VyZW1lbnRWYWx1ZSwgc2V0TWVhc3VyZW1lbnRWYWx1ZV0gPSB1c2VTdGF0ZShcclxuICAgIG1lYXN1cmVtZW50WzBdLnZhbHVlXHJcbiAgKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShtZWFzdXJlbWVudFswXS5kYXRlKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXIgXCI+XHJcbiAgICAgICAgICBFZGl0IFJlY29yZFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgdG89e2AvbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXRBbGwoXHJcbiAgICAgICAgICAgICAgXCJ1c2VyXCJcclxuICAgICAgICAgICAgKX0mbWVhc3VyZW1lbnRfaWQ9JHtzZWFyY2hQYXJhbXMuZ2V0QWxsKFwibWVhc3VyZW1lbnRfaWRcIil9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiIGFyaWEtbGFiZWw9XCJkZWxldGVcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Yj5WYWx1ZTwvYj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgbWItMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lYXN1cmVtZW50VmFsdWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZWFzdXJlbWVudFZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVhc3VyZW1lbnRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxiPkRhdGU8L2I+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgbWItNVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbXItMSBpcy1saWdodCBpcy1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZE1lYXN1cmVtZW50OiBKU09OLnN0cmluZ2lmeShtZWFzdXJlbWVudFswXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRWYWx1ZTogbWVhc3VyZW1lbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1yLTEgaXMtbGlnaHQgaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgeyBvbGRNZWFzdXJlbWVudDogSlNPTi5zdHJpbmdpZnkobWVhc3VyZW1lbnRbMF0pIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVN1Ym1pdCwgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldE1lYXN1cmVtZW50VHlwZXMsIGFkZE1lYXN1cmVtZW50IH0gZnJvbSBcIn4vc2VydmljZS9tZWFzdXJlbWVudHMuanNcIjtcclxuXHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZFwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZVRpbWUgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBnZXRNZWFzdXJlbWVudFR5cGVzKCk7XHJcbiAgcmV0dXJuIG1ldHJpY3M7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgYXdhaXQgYWRkTWVhc3VyZW1lbnQoXHJcbiAgICBmb3JtLmdldChcIm1ldHJpY1wiKSxcclxuICAgIGZvcm0uZ2V0KFwidmFsdWVcIiksXHJcbiAgICBmb3JtLmdldChcInVzZXJcIiksXHJcbiAgICBmb3JtLmdldChcImRhdGVcIilcclxuICApO1xyXG4gIHJldHVybiByZWRpcmVjdChcclxuICAgIGBtZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7Zm9ybS5nZXQoXCJ1c2VyXCIpfSZtZWFzdXJlbWVudF9pZD0ke2Zvcm0uZ2V0KFxyXG4gICAgICBcIm1ldHJpY1wiXHJcbiAgICApfWBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTWVhc3VyZW1lbnRSb3V0ZSgpIHtcclxuICBjb25zdCBtZXRyaWNzID0gdXNlTG9hZGVyRGF0YSgpLm1hcCgobSkgPT4gKHtcclxuICAgIC4uLm0sXHJcbiAgICBtZWFzdXJlbWVudF9sYWJlbDogc3RhcnRDYXNlKG0ubWVhc3VyZW1lbnQpLFxyXG4gIH0pKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNZXRyaWMsIHNldFNlbGVjdGVkTWV0cmljXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShnZXRDdXJyZW50RGF0ZVRpbWUoKSk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgbWV0cmljOiBzZWxlY3RlZE1ldHJpYz8uWzBdPy5pZCxcclxuICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TWV0cmljPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWV0cmljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT17XCJtZWFzdXJlbWVudF9sYWJlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobSkgPT4gc2V0U2VsZWN0ZWRNZXRyaWMobSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWV0cmljc31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBNZWFzdXJlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5WYWx1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWV0cmljVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nIHwgISh2YWx1ZSAmJiBzZWxlY3RlZE1ldHJpYyAmJiBkYXRlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBNZWFzdXJlbWVudFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVPZklTT1dlZWsodywgeSkge1xyXG4gIHZhciBzaW1wbGUgPSBuZXcgRGF0ZSh5LCAwLCAxICsgKHcgLSAxKSAqIDcpO1xyXG4gIHZhciBkb3cgPSBzaW1wbGUuZ2V0RGF5KCk7XHJcbiAgdmFyIElTT3dlZWtTdGFydCA9IHNpbXBsZTtcclxuICBpZiAoZG93IDw9IDQpIElTT3dlZWtTdGFydC5zZXREYXRlKHNpbXBsZS5nZXREYXRlKCkgLSBzaW1wbGUuZ2V0RGF5KCkgKyAxKTtcclxuICBlbHNlIElTT3dlZWtTdGFydC5zZXREYXRlKHNpbXBsZS5nZXREYXRlKCkgKyA4IC0gc2ltcGxlLmdldERheSgpKTtcclxuICByZXR1cm4gSVNPd2Vla1N0YXJ0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla051bWJlcihkYXRlKSB7XHJcbiAgdmFyIGQgPSBuZXcgRGF0ZShcclxuICAgIERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSlcclxuICApO1xyXG4gIHZhciBkYXlOdW0gPSBkLmdldFVUQ0RheSgpIHx8IDc7XHJcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIGRheU51bSk7XHJcbiAgdmFyIHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xyXG4gIHJldHVybiBNYXRoLmNlaWwoKChkIC0geWVhclN0YXJ0KSAvIDg2NDAwMDAwICsgMSkgLyA3KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnREYXRlVGltZSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB2YXIgbW9udGggPSBwYWRTdGFydChkYXRlLmdldE1vbnRoKCkgKyAxLCAyLCAwKTtcclxuICB2YXIgZGF5ID0gcGFkU3RhcnQoZGF0ZS5nZXREYXRlKCksIDIsIDApO1xyXG4gIHZhciBociA9IHBhZFN0YXJ0KGRhdGUuZ2V0SG91cnMoKSwgMiwgMCk7XHJcbiAgdmFyIG1pbiA9IHBhZFN0YXJ0KGRhdGUuZ2V0TWludXRlcygpLCAyLCAwKTtcclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aHJ9OiR7bWlufWA7XHJcbn07XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZVNlYXJjaFBhcmFtcywgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFdlZWtOdW1iZXIgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzUm91dGUoKSB7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgdXNlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHdlZWtZZWFyID0gYCR7ZGF5anMoKS55ZWFyKCl9LVcke2dldFdlZWtOdW1iZXIoZGF0ZSl9YDtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvXCIpIHtcclxuICAgICAgbmF2aWdhdGUoYC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gKTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb24sIG5hdmlnYXRlLCB1c2VyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gdXNlcklkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG10LTUgbWItMVwiPkFuYWx5dGljczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyIG0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5FZmZvcnQgU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWtZZWFyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFpbmVkIHRoaXMgV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlaz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgV29ya291dHMgcGVyIFdlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zY2hlZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc2NoZWR1bGU/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZWR1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zdGF0aXN0aWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zdGF0aXN0aWNzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0aXN0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+U3RyZW5ndGggU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQ/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2dyZXNzaXZlIE92ZXJsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBCZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvYW5hbHl0aWNzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjb250YWluZXIgbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRFeGVyY2lzZXNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTdWJtaXQsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQcm9ncmVzc2l2ZU92ZXJsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlT3ZlcmxvYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGxldCBleGVyY2lzZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZXhlcmNpc2VfaWRcIikgPz8gZXhlcmNpc2VzWzBdPy5pZDtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyLCBleGVyY2lzZSk7XHJcblxyXG4gIGNvbnN0IHNldHNCeUV4ZXJjaXNlID0gZ3JvdXBCeShzZXRzLCAocykgPT4gcy5leGVyY2lzZV9pZClbZXhlcmNpc2VdO1xyXG4gIHJldHVybiB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBzZXRzQnlFeGVyY2lzZSwgZXhlcmNpc2VzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzaW5nbGVFeGVyY2lzZUNoYXJ0ID0gc2V0c0J5RXhlcmNpc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+UHJvZ3Jlc3NpdmUgT3ZlcmxvYWQ8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBtYi00IFwiPlxyXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXhlcmNpc2VfaWRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VfaWQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2V4ZXJjaXNlcy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7c3RhcnRDYXNlKGUubmFtZSl9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge3NpbmdsZUV4ZXJjaXNlQ2hhcnQgPyAoXHJcbiAgICAgICAgICA8UHJvZ3Jlc3NpdmVPdmVybG9hZCBwcm9ncmVzc2l2ZU92ZXJsb2FkPXtzaW5nbGVFeGVyY2lzZUNoYXJ0fSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcIk5vdGhpbmcgdHJhaW5lZCB5ZXRcIlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzKG11c2NsZV9ncm91cCkge1xyXG4gIGlmIChtdXNjbGVfZ3JvdXApIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwibXVzY2xlX2dyb3VwXCIsIG11c2NsZV9ncm91cCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImV4ZXJjaXNlXCIpLnNlbGVjdChcIipcIik7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNdXNjbGVHcm91cHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZGlzdGluY3RfbXVzY2xlX2dyb3Vwc1wiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5vcmRlcihcIm5hbWVcIik7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXNGb3JVc2VyKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImV4ZXJjaXNlc19mb3JfdXNlclwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN1bW1hcnlTdGF0c0ZvckV4ZXJjaXNlKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxhc3Rfd29ya291dF93aXRoX2V4ZXJjaXNlXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZVwiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNldChmb3JtU2V0KSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtU2V0LmdldChcImluZGV4XCIpIH0pO1xyXG4gIC8vIGNsZWFuIHVwXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZW1wdHlfd29ya291dF9leGVyY2lzZXNcIikuc2VsZWN0KFwiKlwiKTtcclxuICBjb25zdCBpZHMgPSBkYXRhLm1hcCgod29ya291dF9leGVyY2lzZSkgPT4gd29ya291dF9leGVyY2lzZS5pZCk7XHJcbiAgYXdhaXQgc3VwYWJhc2UuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIikuZGVsZXRlKCkuaW4oXCJpZFwiLCBpZHMpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkU2V0KGZvcm1TZXQpIHtcclxuICBjb25zdCBhZGQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGZvcm1TZXQuZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSxcclxuICAgICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBhZGQ/LmRhdGE/LlswXTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2V0KGZvcm1TZXQpIHtcclxuICBsZXQgc3VibWlzc2lvblNldCA9IHtcclxuICAgIHdlaWdodDogbnVsbCxcclxuICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBjb25zdCB3ZWlnaHRGb3JTZXQgPSBmb3JtU2V0LmdldChcIndlaWdodFwiKTtcclxuICBjb25zdCByZXBzRm9yU2V0ID0gZm9ybVNldC5nZXQoXCJyZXBldGl0aW9uc1wiKTtcclxuICBjb25zdCBjb21wbGV0ZWRGb3JTZXQgPSBmb3JtU2V0LmdldChcImNvbXBsZXRlZFwiKTtcclxuXHJcbiAgaWYgKHdlaWdodEZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC53ZWlnaHQgPSBwYXJzZUZsb2F0KHdlaWdodEZvclNldCk7XHJcbiAgfVxyXG4gIGlmIChyZXBzRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LnJlcGV0aXRpb25zID0gcGFyc2VGbG9hdChyZXBzRm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKGNvbXBsZXRlZEZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC5jb21wbGV0ZWQgPSBjb21wbGV0ZWRGb3JTZXQgPT09IFwidHJ1ZVwiO1xyXG4gIH1cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLnVwZGF0ZShzdWJtaXNzaW9uU2V0KVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuLy9kZWZhdWx0IGZpbHRlcnMgZm9yIGxhdGVzdCB3ZWVrXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXRzRm9yVXNlcih1c2VySWQsIGZpbHRlcl9zdGFydCwgZmlsdGVyX2VuZCkge1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX3N0YXJ0ID0gZmlsdGVyX3N0YXJ0XHJcbiAgICA/IGRheWpzKGZpbHRlcl9zdGFydClcclxuICAgIDogZGF5anMoZGF5anMoKS53ZWVrKGRheWpzKCkud2VlaygpKS5zdGFydE9mKFwid2Vla1wiKS5zdGFydE9mKFwiZGF5XCIpKTtcclxuICBjb25zdCBmaWx0ZXJfZGF0ZV9lbmQgPSBmaWx0ZXJfZW5kID8gZGF5anMoZmlsdGVyX2VuZCkgOiBkYXlqcygpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKVxyXG4gICAgLmd0ZShcImRhdGV0aW1lX3N0YXJ0XCIsIGZpbHRlcl9kYXRlX3N0YXJ0KVxyXG4gICAgLmx0ZShcImRhdGV0aW1lX3N0YXJ0XCIsIGZpbHRlcl9kYXRlX2VuZCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQsIGV4ZXJjaXNlSWQpIHtcclxuICBpZiAoZXhlcmNpc2VJZCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAgIC5lcShcImV4ZXJjaXNlX2lkXCIsIGV4ZXJjaXNlSWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJtYXhfdm9sdW1lX2Zvcl93b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpZmV0aW1lU3RhdGlzdGljcyh1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxpZmV0aW1lX3N0YXRzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5DaGFydC5yZWdpc3RlcihbVG9vbHRpcF0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NpdmVPdmVybG9hZChwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBleGVyY2lzZVByb2dyZXNzID0gc29ydEJ5KFxyXG4gICAgcHJvcHMucHJvZ3Jlc3NpdmVPdmVybG9hZCxcclxuICAgIChlKSA9PiBlLmRhdGV0aW1lX3N0YXJ0XHJcbiAgKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNvbG9yID0gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgIH0sMC4zKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZS5kYXRldGltZV9zdGFydCkuZm9ybWF0KFwiREQvTU0vWVlcIilcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlZvbHVtZSBQcm9ncmVzcyAoV2VpZ2h0IHggUmVwcylcIixcclxuICAgICAgICAgICAgZGF0YTogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+IGUubWF4X3ZvbHVtZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgVm9sdW1lOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5tYXhfdm9sdW1lfSB8IFdlaWdodDogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ud2VpZ2h0fSB8IFJlcHM6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLnJlcGV0aXRpb25zfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgbG9kYXNoIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFdlZWtseVRyYWluaW5nU2V0cyBmcm9tIFwifi9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0c1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlT2ZJU09XZWVrIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG52YXIgY3VzdG9tUGFyc2VGb3JtYXQgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0XCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge307XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgeWVhcldlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpO1xyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgbmV3IERhdGUoXHJcbiAgICAgIHdlZWtTdGFydGluZ09uRGF5LnNldERhdGUod2Vla1N0YXJ0aW5nT25EYXkuZ2V0RGF0ZSgpICsgNylcclxuICAgICkudG9EYXRlU3RyaW5nKClcclxuICApO1xyXG5cclxuICByZXR1cm4gbG9kYXNoKHVzZXJXb3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGlzV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdlZWtseVNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB5ZWFyV2VlayA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCByZW5kZXJUcmFpbmVkVGhpc1dlZWsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+VHJhaW5lZCB0aGlzIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgd2Vla1N0YXJ0aW5nT25EYXkuc2V0RGF0ZSh3ZWVrU3RhcnRpbmdPbkRheS5nZXREYXRlKCkgKyA2KVxyXG4gICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTJcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyV2Vla31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWs6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh3ZWVrbHlTZXRzKS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPk5vIFdvcmtvdXRzPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxXZWVrbHlUcmFpbmluZ1NldHMgd2Vla2x5U2V0cz17d2Vla2x5U2V0c30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDw+e3JlbmRlclRyYWluZWRUaGlzV2VlaygpfTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5VHJhaW5pbmdTZXRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHNldHMgPSBwcm9wcy53ZWVrbHlTZXRzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3ZWVrbHlTZXRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHlTZXRzXCIpKTtcclxuICAgIGNvbnN0IHdlZWtseVNldHNDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHNldHMpLm1hcCgoZSkgPT4gc3RhcnRDYXNlKGUpKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIG9mIFNldHNcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHNldHMpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE9iamVjdC52YWx1ZXMoc2V0cykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC40KWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2Vla2x5U2V0c0NoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJ3ZWVrbHlTZXRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyB0cmFuc2Zvcm0sIHBpY2sgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFdvcmtvdXRQZXJXZWVrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vla1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlT2ZJU09XZWVrLCBnZXRXZWVrTnVtYmVyIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgd29ya291dHMgPSBsb2Rhc2god29ya291dHMpXHJcbiAgICAuZ3JvdXBCeShcclxuICAgICAgKHcpID0+XHJcbiAgICAgICAgYCR7ZGF5anMody5kYXRldGltZV9zdGFydCkueWVhcigpfSBXZWVrICR7U3RyaW5nKFxyXG4gICAgICAgICAgZ2V0V2Vla051bWJlcihuZXcgRGF0ZSh3LmRhdGV0aW1lX3N0YXJ0KSlcclxuICAgICAgICApLnBhZFN0YXJ0KDIsIFwiMFwiKX1gXHJcbiAgICApXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICBsZXQgd2Vla3NUb1Nob3cgPSBPYmplY3Qua2V5cyh3b3Jrb3V0cyk7XHJcbiAgd2Vla3NUb1Nob3cuc29ydCgpO1xyXG4gIHdlZWtzVG9TaG93ID0gd2Vla3NUb1Nob3cuc2xpY2UoMCwgMTApLm1hcChTdHJpbmcpO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtKHBpY2sod29ya291dHMsIHdlZWtzVG9TaG93KSwgKHJlcywgdmFsLCBrZXkpID0+IHtcclxuICAgIHJlc1trZXldID0gdmFsO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrUm91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+V29ya291dHMgcGVyIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8V29ya291dFBlcldlZWsgd29ya291dHNQZXJXZWVrPXt3b3Jrb3V0c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdvcmtvdXQod29ya291dCkge1xyXG4gIGxldCBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCJpZFwiKVxyXG4gICAgLm1hdGNoKHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcblxyXG4gIGxldCBsb2NhdGlvbklkO1xyXG4gIGlmIChjaGVja0xvY2F0aW9uLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgICAuaW5zZXJ0KHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcbiAgfVxyXG4gIGxvY2F0aW9uSWQgPSBjaGVja0xvY2F0aW9uLmRhdGE/LlswXS5pZDtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiB3b3Jrb3V0Lm5hbWUsXHJcbiAgICAgIGRhdGV0aW1lX3N0YXJ0OiB3b3Jrb3V0LmRhdGV0aW1lLFxyXG4gICAgICBkYXRldGltZV9lbmQ6IHVuZGVmaW5lZCxcclxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uSWQsXHJcbiAgICAgIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkLFxyXG4gICAgfSxcclxuICBdKTtcclxuICByZXR1cm4gZGF0YVswXS5pZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdvcmtvdXQod29ya291dF9pZCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGNvbnN0IGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMgPVxyXG4gICAgXCIoXCIgKyB3b3Jrb3V0LmRhdGEubWFwKChlKSA9PiBlLndvcmtvdXRfZXhlcmNpc2VfaWQpLnRvU3RyaW5nKCkgKyBcIilcIjtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5maWx0ZXIoXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIsIFwiaW5cIiwgYXNzb2NpYXRlZF93b3Jrb3V0X2V4ZXJjaXNlcyk7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgY29uc3QgX2RlbGV0ZVdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiB3b3Jrb3V0X2lkIH0pO1xyXG5cclxuICByZXR1cm4gX2RlbGV0ZVdvcmtvdXQuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhOiB3b3Jrb3V0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yV29ya291dChpZCkge1xyXG4gIGxldCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwid29ya291dF9pZFwiLCBpZClcclxuICAgIC5vcmRlcihcInNldF9pZFwiKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KGlkLCBkYXRldGltZSkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLnVwZGF0ZSh7IGRhdGV0aW1lX2VuZDogZGF0ZXRpbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBpZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICByZXR1cm4gd29ya291dHMuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGV0aW1lX3N0YXJ0KSAtIG5ldyBEYXRlKGEuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RFeGVyY2lzZXRvV29ya291dCh7IHdvcmtvdXRfaWQsIGV4ZXJjaXNlX2lkIH0pIHtcclxuICBjb25zdCB3b3Jrb3V0RXhlcmNpc2UgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuc2VsZWN0KFwiKiwgZXhlcmNpc2UhaW5uZXIoKilcIilcclxuICAgIC5lcShcImV4ZXJjaXNlXCIsIGV4ZXJjaXNlX2lkKVxyXG4gICAgLmVxKFwid29ya291dFwiLCB3b3Jrb3V0X2lkKTtcclxuXHJcbiAgaWYgKHdvcmtvdXRFeGVyY2lzZT8uZGF0YSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkRXhlcmNpc2UgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuaW5zZXJ0KFt7IGV4ZXJjaXNlOiBleGVyY2lzZV9pZCwgd29ya291dDogd29ya291dF9pZCB9XSk7XHJcblxyXG4gIGNvbnN0IGFkZFNldCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogYWRkRXhlcmNpc2U/LmRhdGE/LlswXT8uaWQsXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkU2V0Py5kYXRhPy5bMF07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0KGZvcm0pIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dF9leGVyY2lzZTogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtLmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIikgfSk7XHJcbiAgcmV0dXJuO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0c1BlcldlZWsocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIndvcmtvdXRzUGVyV2Vla1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtvdXRzUGVyV2Vla1wiKSk7XHJcbiAgICBjb25zdCB3b3Jrb3V0c1BlcldlZWtDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMocHJvcHMud29ya291dHNQZXJXZWVrKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIFdvcmtvdXRzIHBlciBXZWVrXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMocHJvcHMud29ya291dHNQZXJXZWVrKSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE9iamVjdC52YWx1ZXMocHJvcHMud29ya291dHNQZXJXZWVrKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgICAgfSwwLjMpYFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogNCAvIE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwid29ya291dHNQZXJXZWVrXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBlcnNvbmFsQmVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyKTtcclxuICBjb25zdCBiZXN0U2V0QnlFeGVyY2lzZSA9IGxvZGFzaChzZXRzKVxyXG4gICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBtYXhCeShlLCAocykgPT4gcy53ZWlnaHQgKiBzLnJlcGV0aXRpb25zKSlcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhiZXN0U2V0QnlFeGVyY2lzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbEJlc3RSb3V0ZSgpIHtcclxuICBjb25zdCBsaXN0QmVzdFNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0xXCI+UGVyc29uYWwgQmVzdHM8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8aT5XZWlnaHQgb2Ygc2V0IHdpdGggbWF4IHZvbHVtZTwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7bGlzdEJlc3RTZXRzLmxlbmd0aCA/IChcclxuICAgICAgICA8UGVyc29uYWxCZXN0cyBiZXN0U2V0cz17bGlzdEJlc3RTZXRzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiTm8gd29ya291dHMgeWV0XCJcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsUmVjb3Jkcyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwZXJzb25hbFJlY29yZHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25hbFJlY29yZHNcIikpO1xyXG4gICAgY29uc3QgcHJDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogcHJvcHMuYmVzdFNldHMubWFwKCh2YWx1ZSkgPT5cclxuICAgICAgICAgIHN0YXJ0Q2FzZShgJHt2YWx1ZS5leGVyY2lzZV9uYW1lfSAke3ZhbHVlLnZhcmlhbnQgPz8gXCJcIn1gKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+IHZhbHVlLndlaWdodCksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iZXN0U2V0cy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCAke1xyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgIH0sMC40KWA7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogNCAvIHByb3BzLmJlc3RTZXRzLmxlbmd0aCxcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGNvbnRleHQuZGF0YUluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gT2JqZWN0LnZhbHVlcyhwcm9wcy5iZXN0U2V0cyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCBXZWlnaHQ6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB8IFZvbDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHggJHtzZXRbZGF0YUluZGV4XS5yZXBldGl0aW9uc30gPSAke3NldFtkYXRhSW5kZXhdLm1heF92b2x1bWV9YDtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwckNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwZXJzb25hbFJlY29yZHNcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TGlmZXRpbWVTdGF0aXN0aWNzLCBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgcmVkdWNlLCBwaWNrLCBvbWl0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCBzdGF0cyA9IGF3YWl0IGdldExpZmV0aW1lU3RhdGlzdGljcyh1c2VyKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGNvbnN0IHRvdGFsVGltZVNwZW50ID0gd29ya291dHNcclxuICAgIC5tYXAoKHcpID0+IGRheWpzKHcuZGF0ZXRpbWVfZW5kKS5kaWZmKHcuZGF0ZXRpbWVfc3RhcnQsIFwibWludXRlXCIpKVxyXG4gICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gIHJldHVybiBbc3RhdHMsIHRvdGFsVGltZVNwZW50LCBNYXRoLnJvdW5kKHRvdGFsVGltZVNwZW50IC8gd29ya291dHMubGVuZ3RoKV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0aXN0aWNzUm91dGUoKSB7XHJcbiAgY29uc3QgW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgYXZlcmFnZVRpbWVTcGVudF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYWJidiA9IHtcclxuICAgIEFXOiBcIkF2ZXJhZ2UgV2VpZ2h0XCIsXHJcbiAgICBBUjogXCJBdmVyYWdlIFJlcGV0aXRpb25zXCIsXHJcbiAgICBSZXBzOiBcIlRvdGFsIFJlcGV0aXRpb25zXCIsXHJcbiAgICBWb2w6IFwiVG90YWwgVm9sdW1lXCIsXHJcbiAgICBOdW06IFwiVG90YWwgTnVtYmVyIG9mIFNldHNcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtLCBkaWdpdHMgPSAyKSA9PiB7XHJcbiAgICBjb25zdCBsb29rdXAgPSBbXHJcbiAgICAgIHsgdmFsdWU6IDEsIHN5bWJvbDogXCJcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTMsIHN5bWJvbDogXCJrXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWU2LCBzeW1ib2w6IFwiTVwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlOSwgc3ltYm9sOiBcIkdcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTEyLCBzeW1ib2w6IFwiVFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTUsIHN5bWJvbDogXCJQXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxOCwgc3ltYm9sOiBcIkVcIiB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJ4ID0gL1xcLjArJHwoXFwuWzAtOV0qWzEtOV0pMCskLztcclxuICAgIHZhciBpdGVtID0gbG9va3VwXHJcbiAgICAgIC5zbGljZSgpXHJcbiAgICAgIC5yZXZlcnNlKClcclxuICAgICAgLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gbnVtID49IGl0ZW0udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGl0ZW1cclxuICAgICAgPyAobnVtIC8gaXRlbS52YWx1ZSkudG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsIFwiJDFcIikgKyBpdGVtLnN5bWJvbFxyXG4gICAgICA6IFwiMFwiO1xyXG4gIH07XHJcblxyXG4gIGxldCB3b3Jrb3V0c1RhYmxlID0gc3RhdHMubWFwKCh3KSA9PiAoe1xyXG4gICAgRXhlcmNpc2U6IGAke3N0YXJ0Q2FzZSh3Lm5hbWUpfSAke1xyXG4gICAgICB3Py52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZSh3LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgfWAsXHJcbiAgICBSZXBzOiBNYXRoLnJvdW5kKHcudG90YWxfcmVwcyksXHJcbiAgICBWb2w6IE1hdGgucm91bmQody5zdW1fdm9sdW1lKSxcclxuICAgIE51bTogdy5udW1fc2V0cyxcclxuICB9KSk7XHJcbiAgY29uc3QgY29sdW1uTmFtZXMgPSBbLi4uT2JqZWN0LmtleXMoT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSlbMF1bMV0pXTtcclxuICBjb25zdCByb3dzID0gT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSkubWFwKChbaywgdl0sIGluZGV4KSA9PiBbXHJcbiAgICAuLi5PYmplY3QudmFsdWVzKHYpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG0tMlwiPlN0YXRpc3RpY3M8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+VG90YWwgbGlmZXRpbWUgbWV0cmljczo8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiXHJcbiAgICAgICAgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+VG90YWwgVGltZTogPC9iPlxyXG4gICAgICAgICAgPGk+e3RvdGFsVGltZVNwZW50fSBtaW48L2k+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+QXZlcmFnZSBUaW1lOiA8L2I+XHJcbiAgICAgICAgICA8aT57YXZlcmFnZVRpbWVTcGVudH0gbWluPC9pPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAge2NvbHVtbk5hbWVzXHJcbiAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSBcIkV4ZXJjaXNlXCIpXHJcbiAgICAgICAgICAubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDxwIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICB7YWJidltuYW1lXX0gKHtuYW1lfSk6e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgIHtuYW1lID09PSBcIlZvbFwiXHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0TnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHdvcmtvdXRzVGFibGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gYSArIGJbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1RhYmxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIChhLCBiKSA9PiBhICsgYltuYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzIGJ5IGV4ZXJjaXNlOiA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dGFibGVcclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcInNjcm9sbFwiLCBmb250U2l6ZTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGlzLXN0cmlwZWQgaXMtbmFycm93IGlzLWhvdmVyYWJsZSBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2V9PC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtyb3cubWFwKChlbGUsIGVsZUluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBlbGVJbmRleCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2VsZUluZGV4fT57Zm9ybWF0TnVtYmVyKGVsZSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtlbGVJbmRleH0+e2VsZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IGdldERhdGVPZklTT1dlZWsgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxudmFyIHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuY29uc3Qgd2Vla2RheXMgPSBbXHJcbiAgXCJNb25kYXlcIixcclxuICBcIlR1ZXNkYXlcIixcclxuICBcIldlZG5lc2RheVwiLFxyXG4gIFwiVGh1cnNkYXlcIixcclxuICBcIkZyaWRheVwiLFxyXG4gIFwiU2F0dXJkYXlcIixcclxuICBcIlN1bmRheVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgeWVhcldlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgbmV3IERhdGUoXHJcbiAgICAgIHdlZWtTdGFydGluZ09uRGF5LnNldERhdGUod2Vla1N0YXJ0aW5nT25EYXkuZ2V0RGF0ZSgpICsgNylcclxuICAgICkudG9EYXRlU3RyaW5nKClcclxuICApO1xyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVNjaGVkdWxlUm91dGUoKSB7XHJcbiAgbGV0IHdvcmtvdXREYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgeWVhcldlZWsgPSBzZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBsZXQgW3llYXIsIHdlZWtdID0geWVhcldlZWsuc3BsaXQoXCItV1wiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKGdldERhdGVPZklTT1dlZWsod2VlaywgeWVhcikpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG5cclxuICBjb25zdCB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0RGF0YSlcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcy51dGMody5kYXRldGltZV9zdGFydCkubG9jYWwoKS5mb3JtYXQoXCJkZGRkXCIpKVxyXG4gICAgLm1hcFZhbHVlcygodikgPT5cclxuICAgICAgbG9kYXNoKHYpXHJcbiAgICAgICAgLmdyb3VwQnkoKHNldCkgPT4gc2V0Lm11c2NsZV9ncm91cClcclxuICAgICAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgICAgICAudmFsdWUoKVxyXG4gICAgKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlNjaGVkdWxlPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICA8Yj57d2Vla1N0YXJ0aW5nT25EYXkuYWRkKDYsIFwiZGF5XCIpLmZvcm1hdChcIkREL01NL1lZWVlcIil9PC9iPntcIiBcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yXCI+XHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3llYXJXZWVrfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VlazogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICB7Wy4uLkFycmF5KDcpLmtleXMoKV0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW19IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19PlxyXG4gICAgICAgICAgICB7d29ya291dHM/Llt3ZWVrZGF5c1tpdGVtXV0gPyAoXHJcbiAgICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtZXNzYWdlIGlzLXNtYWxsIGlzLXNlY29uZGFyeSBtLTMgYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+e2Ake1xyXG4gICAgICAgICAgICAgICAgICB3ZWVrZGF5c1tpdGVtXVxyXG4gICAgICAgICAgICAgICAgfSAtICR7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAgICAgLmFkZChpbmRleCwgXCJkYXlcIilcclxuICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh3b3Jrb3V0cz8uW3dlZWtkYXlzW2l0ZW1dXSkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChbaywgdl0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXJ0Q2FzZShrKX0gLSB7dn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLXNtYWxsIGlzLWxpZ2h0IG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgICAgd2Vla2RheXNbaXRlbV1cclxuICAgICAgICAgICAgICAgIH0gLSAke3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5SZXN0IERheSBcdUQ4M0RcdURDQUE8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlTG9jYXRpb25zUm91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VyPXtzZXRVc2VyfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG10LTVcIj5TYXZlZCBMb2NhdGlvbnM8L2g0PlxyXG4gICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj57c3RhcnRDYXNlKGUubmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiPkFkZCBMb2NhdGlvbjwvYj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiIG5hbWU9XCJsb2NhdGlvbk5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCwgQnNDbG9ja0hpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtdC01XCI+V29ya291dHM8L2Rpdj5cclxuICAgICAgICAgIHt3b3Jrb3V0cy5sZW5ndGggPT09IDAgJiYgXCJObyB3b3Jrb3V0cyB5ZXRcIn1cclxuICAgICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBrZXk9e1wid29ya291dC5pZFwifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXHJcbiAgICAgICAgICAgICAgdG89e2Avd29ya291dC8ke3dvcmtvdXQuaWR9L2N1cnJlbnRFeGVyY2lzZXNgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXlqc1xyXG4gICAgICAgICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJkZGRkLCBNTU0gRCBZWVwiKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCkubG9jYWwoKS5mb3JtYXQoXCJoOm1tIEFcIil9XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIC0gXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3dvcmtvdXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uod29ya291dC5sb2NhdGlvbl9uYW1lKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3dvcmtvdXQuZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZUZpbGwgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJzQ2xvY2tIaXN0b3J5IHNpemU9ezQwfSBjbGFzc05hbWU9XCJtLTQgcC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIE91dGxldCwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICBmaW5pc2hXb3Jrb3V0LFxyXG4gIGdldFdvcmtvdXQsXHJcbiAgZGVsZXRlV29ya291dCxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RvcHdhdGNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmNvbnN0IHJlbGF0aXZlVGltZSA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgd29ya291dCA9IGF3YWl0IGdldFdvcmtvdXQocGFyYW1zLndvcmtvdXRJZCk7XHJcbiAgcmV0dXJuIHdvcmtvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGZpbmlzaFdvcmtvdXQoXHJcbiAgICAgIGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSxcclxuICAgICAgZm9ybS5nZXQoXCJlbmRcIilcclxuICAgICk7XHJcbiAgICByZXR1cm4gd29ya291dDtcclxuICB9XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiREVMRVRFXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZGVsZXRlV29ya291dChmb3JtLmdldChcIndvcmtvdXRfaWRcIikpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b1RpbWUodGltZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGltZSA+IDI0ICogMzYgKiA2MCAqIDEwMDAgJiZcclxuICAgICAgICAoTWF0aC5mbG9vcih0aW1lIC8gMjQgLyAzNiAvIDYwIC8gMTAwMCkgJSAyNCkgKyBcImRheShzKSBcIn1cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAzNjAwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdvcmtvdXRNZXRhRGF0YSh3b3Jrb3V0KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBpcy1saWdodCBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItM1wiPnt3b3Jrb3V0Py5uYW1lfTwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctcGluXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3N0YXJ0Q2FzZSh3b3Jrb3V0Py5sb2NhdGlvbl9uYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1hbGFybVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBpZD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHtgJHtkYXlqc1xyXG4gICAgICAgICAgICAgIC51dGMod29ya291dD8uZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgREQgTU1NIFlZLCBISDptbVwiKX1cclxuICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0TmV3V29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSB1c2VMb2FkZXJEYXRhKClbMF07XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NoYW5nZVRpbWUsIHNldFNob3dDaGFuZ2VUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VzdG9tRGF0ZSwgc2V0Q3VzdG9tRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50XHJcbiAgICAgIHNldFVzZXJJZD17c2V0VXNlcklkfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gd29ya291dC51c2VyX2lkfVxyXG4gICAgPlxyXG4gICAgICA8PlxyXG4gICAgICAgIHt3b3Jrb3V0TWV0YURhdGEod29ya291dCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keSBub3RpZmljYXRpb24gbWItM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0Py5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0xXCI+V29ya291dCBDb21wbGV0ZWQuIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dG9UaW1lKFxyXG4gICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX2VuZCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTBcIj5UaW1lIEVsYXBzZWQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1mYW1pbHktc2Vjb25kYXJ5IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3RvcHdhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpbWU9e2RheWpzKCkgLSBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICB7IXdvcmtvdXQuZGF0ZXRpbWVfZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKCkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzaG93TWVudSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2hhbmdlVGltZSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0IEZpbmlzaCBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dDaGFuZ2VUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoZS50YXJnZXQudmFsdWUpID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tRGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VzdG9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLXN1Y2Nlc3MgbS0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoY3VzdG9tRGF0ZSkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvbiBpcy1saWdodCAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3B3YXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEwMDApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3J1bm5pbmddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9wd2F0Y2hcIj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFyYW1zLFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TXVzY2xlR3JvdXBzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSBhd2FpdCBnZXRNdXNjbGVHcm91cHMoKTtcclxuICByZXR1cm4gbXVzY2xlX2dyb3VwcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc1JvdXRlSW5kZXgoKSB7XHJcbiAgbGV0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUoYC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID8/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7bXVzY2xlX2dyb3Vwcy5tYXAoKG11c2NsZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttdXNjbGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgbXVzY2xlX2dyb3VwOiBtdXNjbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA9PT0gbXVzY2xlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N0YXJ0Q2FzZShtdXNjbGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgcmVkaXJlY3QsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZ2V0RXhlcmNpc2VzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IG11c2NsZV9ncm91cCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApO1xyXG5cclxuICByZXR1cm4gZXhlcmNpc2VzO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgd29ya291dElkLCB1c2VyIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGV4ZXJjaXNlID0gZm9ybS5nZXQoXCJleGVyY2lzZVwiKTtcclxuXHJcbiAgYXdhaXQgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0KHtcclxuICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgIGV4ZXJjaXNlX2lkOiBleGVyY2lzZSxcclxuICB9KTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRFeGVyY2lzZVJvdXRlKCkge1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBleE5hbWVUb0lkTWFwID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeShcclxuICAgICAgZXhlcmNpc2VzLFxyXG4gICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgYCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgIH1gXHJcbiAgICApLFxyXG4gICAgKGUpID0+IGVbMF0uaWRcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgIGlkPVwiZXhlcmNpc2Vfb3B0aW9uc1wiXHJcbiAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgIG9wdGlvbnM9e2V4ZXJjaXNlcy5tYXAoXHJcbiAgICAgICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBFeGVyY2lzZVwiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZSBtdC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgZXhlcmNpc2U6IGV4TmFtZVRvSWRNYXBbc2VsZWN0ZWRdIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhcmsgXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkIHx8IGRpc2FibGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89e2Avd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2B9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0XCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlUGFyYW1zLCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCAqIHMucmVwZXRpdGlvbnMpKVxyXG4gICAgICAudmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4ZXJjaXNlU2V0cyA9IGdyb3VwQnkoXHJcbiAgICBzZXRzRm9yV29ya291dCxcclxuICAgIChzZXQpID0+XHJcbiAgICAgIGAke3N0YXJ0Q2FzZShzZXQuZXhlcmNpc2VfbmFtZSl9ICR7XHJcbiAgICAgICAgc2V0LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKHNldC52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgfWBcclxuICApO1xyXG4gIHJldHVybiB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwiZXhlcmNpc2VcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRFeGVyY2lzZXNSb3V0ZSgpIHtcclxuICBjb25zdCB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2hvd0RlbGV0ZSwgc2V0U2hvd0RlbGV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2NhbEV4ZXJjaXNlU3RhdGUsIHNldExvY2FsRXhlcmNpc2VTdGF0ZV0gPSB1c2VTdGF0ZShleGVyY2lzZVNldHMpO1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TG9jYWxFeGVyY2lzZVN0YXRlKGV4ZXJjaXNlU2V0cyksIFtleGVyY2lzZVNldHNdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhlcmNpc2VGb3JtID0gKGV4ZXJjaXNlX25hbWUsIHNldHMpID0+IHtcclxuICAgIGNvbnN0IGV4ZXJjaXNlSWQgPSBzZXRzWzBdPy5leGVyY2lzZV9pZDtcclxuICAgIGlmIChleGVyY2lzZUlkID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXhlcmNpc2VTZXRGb3JtID0ge1xyXG4gICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2VfaWQ6IHNldHNbMF0ud29ya291dF9leGVyY2lzZV9pZCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0U2V0Rm9ybSA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMsXHJcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVGdW5jID0gKGluZGV4KSA9PiB7XHJcbiAgICAgIHNldExvY2FsRXhlcmNpc2VTdGF0ZSgob2xkU3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4ub2xkU3RhdGUgfTtcclxuICAgICAgICBuZXdTdGF0ZVtleGVyY2lzZV9uYW1lXSA9IG5ld1N0YXRlW2V4ZXJjaXNlX25hbWVdLmZpbHRlcihcclxuICAgICAgICAgIChzKSA9PiBzLnNldF9pZCAhPT0gaW5kZXhcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGdW5jID0gKCkgPT4ge1xyXG4gICAgICBzZXRMb2NhbEV4ZXJjaXNlU3RhdGUoKG9sZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLm9sZFN0YXRlIH07XHJcbiAgICAgICAgbmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0gPSBbLi4ubmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0sIGV4ZXJjaXNlU2V0Rm9ybV07XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hlci5zdWJtaXQoZXhlcmNpc2VTZXRGb3JtLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJldmlvdXNCZXN0U2V0ID0gYmVzdFNldEJ5RXhlcmNpc2VbZXhlcmNpc2VJZF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiB7cHJldmlvdXNCZXN0U2V0LndlaWdodH0geHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0LnJlcGV0aXRpb25zfSB8IHtwcmV2aW91c0Jlc3RTZXQubWF4X3ZvbHVtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi0yIG10LTJcIiAvPlxyXG5cclxuICAgICAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICBpbmRleD17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICB3ZWlnaHQ9e3NldC53ZWlnaHR9XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkPXtzZXQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIHJlcGV0aXRpb25zPXtzZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVsZXRlRnVuYz17KCkgPT4gZGVsZXRlRnVuYyhzZXQuc2V0X2lkKX1cclxuICAgICAgICAgICAgICBzdWJtaXRGdW5jPXtzdWJtaXRTZXRGb3JtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9ucyBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0RnVuYygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1mdWxsd2lkdGggaXMtYmxhY2sgaXMtc21hbGwgdGlsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgKyBTZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIHNob3dEZWxldGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfSBkcm9wZG93biBpcy1yaWdodGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51NlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZSgoZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZXhlcmNpc2VJZF06ICEoZT8uW2V4ZXJjaXNlSWRdID8/IGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBwLTAgbS0wXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBwLTAgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcC0yIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXIgaXMtc21hbGwgaXMtZnVsbHdpZHRoIG0tMCBwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5leGVyY2lzZVNldEZvcm0sIHR5cGU6IFwiZXhlcmNpc2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBFeGVyY2lzZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYnV0dG9ucz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7T2JqZWN0LmVudHJpZXMobG9jYWxFeGVyY2lzZVN0YXRlKS5tYXAoXHJcbiAgICAgICAgKFtleGVyY2lzZV9uYW1lLCBzZXRzXSwgZXhJbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggaXMtc21hbGxcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0SW5wdXQocHJvcHMpIHtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUocHJvcHMud2VpZ2h0KTtcclxuICBjb25zdCBbcmVwZXRpdGlvbnMsIHNldFJlcGV0aXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLnJlcGV0aXRpb25zKTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUocHJvcHMuY29tcGxldGVkKTtcclxuICBjb25zdCB1cGRhdGVEYiA9IGRlYm91bmNlKFxyXG4gICAgKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpID0+XHJcbiAgICAgIHByb3BzLnN1Ym1pdEZ1bmMod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCksXHJcbiAgICAyMDAsXHJcbiAgICB7XHJcbiAgICAgIGxlYWRpbmc6IHRydWUsXHJcbiAgICAgIHRyYWlsaW5nOiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gIH0sIFt3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbWItMiBwLTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjF2aFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29tcGxldGVkID8gXCIjZWJmZmZjXCIgOiBcIiNmNWY1ZjVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiXHJcbiAgICAgICAgICB2YWx1ZT17d2VpZ2h0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFdlaWdodChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwc1wiXHJcbiAgICAgICAgICB2YWx1ZT17cmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVwZXRpdGlvbnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgZS50YXJnZXQudmFsdWUsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUZ1bmN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgY3JlYXRlV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25zIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZVRpbWUgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IHVzZXJJZCA9IGZvcm0uZ2V0KFwidXNlcklkXCIpO1xyXG4gIGxldCBuYW1lID0gZm9ybS5nZXQoXCJuYW1lXCIpO1xyXG4gIGxldCBkYXRldGltZSA9IGZvcm0uZ2V0KFwiZGF0ZXRpbWVcIik7XHJcbiAgbGV0IGxvY2F0aW9uID0gZm9ybS5nZXQoXCJsb2NhdGlvblwiKTtcclxuICBsb2NhdGlvbiA9IGxvY2F0aW9uPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKC8gL2csIFwiX1wiKSA/PyBudWxsO1xyXG4gIGNvbnN0IHdvcmtvdXRPYmplY3RJZCA9IGF3YWl0IGNyZWF0ZVdvcmtvdXQoe1xyXG4gICAgbmFtZSxcclxuICAgIGRhdGV0aW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICB1c2VySWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZWRpcmVjdChgL3dvcmtvdXQvJHt3b3Jrb3V0T2JqZWN0SWR9L2N1cnJlbnRFeGVyY2lzZXNgKTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhc0xvY2F0aW9uLCBzZXRIYXNMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtdC01XCI+Q3JlYXRlIE5ldyBXb3Jrb3V0PC9oND5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHVpZCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGV0aW1lXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGRheWpzKGAke2V2ZW50LnRhcmdldC5kYXRldGltZUxvY2FsLnZhbHVlfTowMGApLnV0YygpXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5uYW1lUGxhY2Vob2xkZXIudmFsdWUgPT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgPyBgJHtkYXlqcyhnZXRDdXJyZW50RGF0ZVRpbWUoKSkuZm9ybWF0KFwiZGRkZFwiKX0gd29ya291dGBcclxuICAgICAgICAgICAgICAgICAgOiBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZCh1c2VySWQpO1xyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQoZGF0ZXRpbWUpO1xyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQobmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgIHN1Ym1pdChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmFtZS9EZXNjPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGRkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX0gd29ya291dGB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtnZXRDdXJyZW50RGF0ZVRpbWUoKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5IFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICFlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNldEhhc0xvY2F0aW9uKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNldEhhc0xvY2F0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgc2VsZWN0IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD1cImxvY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwibG9jYXRpb25zXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLm5hbWV9IHZhbHVlPXtzdGFydENhc2UoaXRlbS5uYW1lKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhcmsgXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc0xvY2F0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIE5ld1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2hvbWVcIik7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiA8PjwvPjtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmlBZGRCb3hGaWxsLCBSaUxpbmVDaGFydEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgR2lTdHJvbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcclxuaW1wb3J0IHsgTWRMb2NhdGlvbk9uIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpblwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUm91dGUoKSB7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VySWQ9e3NldFVzZXJJZH0gc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTYgbGV2ZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdCBib3VuY2UgY29udGFpbmVyIGlzLWhpZGRlbi1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tdG91Y2hcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvYmFubmVyLnBuZ1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IFwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib3ggc29yYUZvbnQgcHJpbWFyeSBoYXMtdGV4dC13aGl0ZSB0aXRsZSBtYi0yIGlzLTRcIj5cclxuICAgICAgICAgICAgICAgICAgSGVsbG8sIHt1c2VyICYmIHVzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcmFGb250IGJveCBwLTQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG89e2AvY3JlYXRlP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzRFx1RENBQSBDcmVhdGUgV29ya291dFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtNCBtYi0yIHNvcmFGb250IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzRFx1RENDOCBBbmFseXRpY3NcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC93b3Jrb3V0cz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQzUgV29ya291dHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbG9jYXRpb25zP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzQ1x1REZFQSBMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbWVhc3VyZW1lbnRzP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzQ1x1REY1MSBNZWFzdXJlbWVudHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBjb250YWluZXIgc29yYUZvbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xIG1iLTFcIj5Xb3Jrb3V0LCBTbWFydGVyLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5QbGVhc2UgbG9nIGluIHRvIGNvbnRpbnVlLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGaXJlYmFzZUxvZ2luIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzcyZWJmNjhjJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC01WVRLTUJCNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUFBQTjNLTTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DVjI0SEk0My5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtUkhJUlNIVkQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJDRjRHWUxQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFVLVVA2Uk4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OTzJFNFgySi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdVUFRXUURULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYW5hbHl0aWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy00NUI2VjVBQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEI2UExDTkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GV0hPUVdDRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZOMllRWVJNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREpLSkNUQUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwZXJzb25hbC1iZXN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMtTVRSM0szUEkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1FWlhVUVJRLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkLVk1N1Y2Q1lVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NRVpYVVFSUS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3NjaGVkdWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZS0yV083T1A3QS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNEo3Wko0UVYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzonc3RhdGlzdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljcy1JNTVFSVM0RS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid0cmFpbmVkLXRoaXMtd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWstTTNCTTVVV1EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1FWlhVUVJRLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid3b3Jrb3V0cy1wZXItd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWstN09NWEozRUYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1FWlhVUVJRLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NyZWF0ZS1PVjdEWFhBVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNEo3Wko0UVYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GV0hPUVdDRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZOMllRWVJNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREpLSkNUQUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtRlM0UDJHTUUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFKUVRaVVNDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstREpLSkNUQUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUxSWE82Ulg3LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMtQTZPQlBMVzUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURKS0pDVEFJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUw1VllPU0guanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucy86bG9jYXRpb25JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQtRTVUUUo0R0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFMNVZZT1NILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzJzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWFzdXJlbWVudHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzLUlNUFBQR09CLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESktKQ1RBSS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZCc6eydpZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkJywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2FkZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkLU1YNlJHMk4yLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YQTdLSVRGTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZOMllRWVJNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1VQVFdRRFQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5Jzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5JywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2hpc3RvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnktRVpBQUdBQUwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1FWlhVUVJRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRldIT1FXQ0cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0Jzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeScsJ3BhdGgnOidlZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXQtQU9GVkhDSlguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC1WUFkzWFRYSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREpLSkNUQUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0JywncGF0aCc6Jzp3b3Jrb3V0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkLTJNVldDUEZCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SjdaSjRRVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURVS1VQNlJOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTk8yRTRYMkouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GV0hPUVdDRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdVUFRXUURULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUw1VllPU0guanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50LUdITFgzUVE3LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZSc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZScsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50JywncGF0aCc6J2FkZEV4ZXJjaXNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlLTdOTUk0NEgzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YQTdLSVRGTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFMNVZZT1NILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzonY3VycmVudEV4ZXJjaXNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcy1RSlA1RDQyVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUpRVFpVU0MuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0cyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0cy1LRUxHRUo0WS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNEo3Wko0UVYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GV0hPUVdDRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURKS0pDVEFJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUw1VllPU0guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTcyRUJGNjhDLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRzFDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RPbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUM1QixJQUFNLFNBQVMsUUFBUTtBQUN2QixPQUFPO0FBRVEsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbkJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFTTzs7Ozs7O0FBR1AsaUJBQThCOzs7QUNaOUI7QUFBQSxrQkFLTztBQUNQLG1CQUF5QjtBQUN6QixnQkFBNkI7QUFFZCx1QkFBdUIsT0FBTztBQUMzQyxRQUFNLENBQUMsTUFBTSxXQUFXO0FBQ3hCLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLDJCQUFTO0FBQ3JELFFBQU0sV0FBVyxJQUFJO0FBQ3JCLFFBQU0sT0FBTyx5QkFBUSxNQUFNO0FBRTNCLHlCQUF1QjtBQUNyQix3Q0FBbUIsTUFBTTtBQUFBO0FBRTNCLG9CQUFrQjtBQUNoQixTQUFLO0FBQUE7QUFHUCxzQ0FBbUIsTUFBTSxDQUFDLFdBQVc7QUFDbkMsYUFBUyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBR3JDLFNBQ0Usb0NBQUMsT0FBRCxNQUNHLENBQUMsUUFDQSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxTQUFTO0FBQUEsSUFBYSxXQUFVO0FBQUEsS0FBMkIsVUFJcEUsUUFDQywwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFXLFlBQVksaUJBQWlCLGNBQWM7QUFBQSxLQUN6RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixpQkFBYztBQUFBLElBQ2QsaUJBQWM7QUFBQSxJQUNkLFNBQVMsTUFBTTtBQUNiLHdCQUFrQixDQUFDLGdCQUFnQixDQUFDO0FBQUE7QUFBQSxLQUd0QyxvQ0FBQyxRQUFELE1BQU8sS0FBSyxjQUNaLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLHdCQUFEO0FBQUEsSUFBYyxNQUFNO0FBQUEsU0FJMUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQWdCLElBQUc7QUFBQSxJQUFnQixNQUFLO0FBQUEsS0FDckQsb0NBQUMsS0FBRDtBQUFBLElBQUcsU0FBUztBQUFBLElBQVEsV0FBVTtBQUFBLEtBQWdCO0FBQUE7OztBRHRDckQsZ0JBQWdCO0FBQ3JCLFNBQU8sRUFBRSxPQUFPO0FBQUE7QUFFWCxpQkFBaUI7QUFDdEIsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUc5QixJQUFJLFNBQVMsWUFBWTtBQUM5QixTQUFPO0FBQUEsSUFDTCxnQkFBZ0I7QUFBQSxNQUNkLFFBQVEsUUFBUSxJQUFJO0FBQUEsTUFDcEIsWUFBWSxRQUFRLElBQUk7QUFBQSxNQUN4QixXQUFXLFFBQVEsSUFBSTtBQUFBLE1BQ3ZCLGVBQWUsUUFBUSxJQUFJO0FBQUEsTUFDM0IsbUJBQW1CLFFBQVEsSUFBSTtBQUFBLE1BQy9CLE9BQU8sUUFBUSxJQUFJO0FBQUEsTUFDbkIsZUFBZSxRQUFRLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFLakMsZ0JBQWdCLEVBQUUsWUFBWTtBQUM1QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsSUFBaUMsSUFBRztBQUFBLEtBQ2xELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFzQyxVQUFXLFFBR2xFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFlO0FBQUE7QUFNdkIsZUFBZTtBQUM1QixRQUFNLE9BQU87QUFDYixRQUFNLE1BQU0sOEJBQWMsS0FBSztBQUMvQixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQWMsU0FBUTtBQUFBLE1BQ2pDLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsT0FFQSxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxLQUFJO0FBQUEsSUFDSixNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsTUFHZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBcUIsS0FBSTtBQUFBLE1BQ3BDLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFhLE1BQUs7QUFBQSxNQUM1QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBYSxNQUFLO0FBQUEsTUFDNUIsb0NBQUMsUUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsS0FBSTtBQUFBLE1BRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsS0FBSTtBQUFBLE1BRU4sb0NBQUMsUUFBRDtBQUFBLElBQU0sS0FBSTtBQUFBLElBQU8sTUFBTTtBQUFBLE1BQ3ZCLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxPQUdULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsZUFBRDtBQUFBLElBQWU7QUFBQSxPQUVqQixvQ0FBQyxzQkFBRCxPQUVBLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQywwQkFBRDtBQUFBOzs7QUVyR1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0Q7QUFDL0Qsb0JBQThDOzs7QUNEOUM7OztBQ0FBO0FBQUEseUJBQTZCO0FBRTdCLElBQUk7QUFFSixJQUFNLGNBQWMsUUFBUSxJQUFJO0FBQ2hDLElBQU0sa0JBQWtCLFFBQVEsSUFBSTtBQUNwQyxJQUFJLE9BQXVDO0FBQ3pDLGFBQVcscUNBQWEsYUFBYTtBQUFBLE9BQ2hDO0FBQ0wsTUFBSSxDQUFDLE9BQU8sVUFBVTtBQUNwQixXQUFPLFdBQVcscUNBQWEsYUFBYTtBQUFBO0FBRTlDLGFBQVcsT0FBTztBQUFBO0FBR3BCLElBQU8sbUJBQVE7OztBRGJmLDRCQUFtQyxNQUFNO0FBQ3ZDLFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVc7QUFFakIsU0FBTztBQUFBO0FBR1Qsc0NBQTZDLE1BQU07QUFDakQsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLHlCQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVc7QUFFakIsU0FBTztBQUFBO0FBR1QsOEJBQXFDLFlBQVk7QUFDL0MsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLFlBQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSTtBQUVmLFNBQU87QUFBQTtBQUVULDhCQUFxQyxZQUFZLGNBQWM7QUFDN0QsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLFlBQ0wsT0FBTyxFQUFFLE1BQU0sZ0JBQ2YsTUFBTSxFQUFFLElBQUk7QUFDZixTQUFPO0FBQUE7QUFHVCwyQkFBa0MsY0FBYyxRQUFRO0FBQ3RELFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sRUFBRSxNQUFNLGNBQWMsU0FBUztBQUN6QyxTQUFPO0FBQUE7OztBRGpDVCxvQkFBeUI7QUFFbEIsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDbEMsUUFBTSxxQkFBcUIsTUFBTSx1QkFBdUI7QUFFeEQsUUFBTSxnQkFBZ0IsNkJBQ3BCLDJCQUFRLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUNyQyxDQUFDLE1BQUc7QUFoQlI7QUFnQlcsbUJBQUUsT0FBRixtQkFBTTtBQUFBO0FBRWYsUUFBTSxzQkFBc0IsNkJBQzFCLDJCQUFRLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUNyQyxDQUFDLE1BQUc7QUFwQlI7QUFvQlcsb0JBQUUsT0FBRixtQkFBTSxVQUFTO0FBQUE7QUFFeEIsU0FBTyxDQUFDLHFCQUFxQjtBQUFBO0FBR3hCLElBQUksU0FBUyxPQUFPLEVBQUUsY0FBYztBQXpCM0M7QUEwQkUsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixNQUFJLFFBQVEsV0FBVyxPQUFPO0FBQzVCLFVBQU0sYUFBYSxLQUFLLElBQUk7QUFDNUIsVUFBTSxlQUFlLEtBQUssSUFBSTtBQUU5QixVQUFNLGVBQ0osWUFDQSxhQUFhLFFBQVEsTUFBTSxLQUFLO0FBQUEsYUFFekIsUUFBUSxXQUFXLFVBQVU7QUFFdEMsVUFBTSxVQUFVLE1BQU0sZUFBZSxLQUFLLElBQUk7QUFDOUMsUUFBSSxZQUFZLE1BQU07QUFDcEIsWUFBTSxPQUFPLHlDQUFVLE9BQVYsbUJBQWM7QUFDM0IsYUFBTyw0QkFBUyxPQUFPLG1CQUFtQixTQUFTO0FBQUE7QUFBQTtBQUd2RCxTQUFPO0FBQUE7QUFHTSx5QkFBeUI7QUFDdEMsUUFBTSxFQUFFLGVBQWU7QUFDdkIsUUFBTSxDQUFDLHFCQUFxQixpQkFBaUI7QUFDN0MsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiw0QkFBUztBQUMzQyxRQUFNLENBQUMsYUFBYSxrQkFBa0IsNEJBQ3BDLDZCQUFVLGNBQWMsS0FBSyxlQUFlO0FBRzlDLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osNkJBQVUsY0FBYyxLQUFLLGVBRWhDLG9DQUFDLEtBQUQsTUFBSSxjQUFjLGNBQ2xCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFPLHdCQUNDLG9CQUFvQixLQUFLLGVBQWUsSUFFL0Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2IsYUFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsTUFBTSxlQUFlLEVBQUUsT0FBTztBQUFBLE1BRTNDLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTTtBQUNiLGNBQVEsT0FDTixFQUFFLFlBQXdCLGNBQWMsZUFDeEMsRUFBRSxRQUFRO0FBRVosbUJBQWE7QUFBQTtBQUFBLEtBRWhCLFlBS0osQ0FBQyxhQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTSxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQUEsS0FDeEMsV0FJQSxDQUFDLG9CQUFvQixLQUFLLGVBQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFDUCxRQUFRLE9BQ04sRUFBRSxjQUNGLEVBQUUsUUFBUTtBQUFBLEtBR2Y7QUFBQTs7O0FHekdmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBd0U7QUFDeEUsb0JBQTBCOzs7QUNEMUI7QUFBQSxvQkFBNEI7QUFDNUIsbUJBQTRDO0FBQzVDLG9CQUFvQztBQUVyQixpQ0FBaUMsT0FBTztBQUNyRCxRQUFNLENBQUMsTUFBTSxXQUFXO0FBQ3hCLFFBQU0sV0FBVztBQUNqQixRQUFNLE9BQU87QUFDYix1Q0FBbUIsTUFBTSxDQUFDLFdBQVc7QUFDbkMsYUFBUyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBR3JDLCtCQUFVLE1BQU07QUFDZCxRQUFJLFNBQVMsTUFBTTtBQUNqQixlQUFTO0FBQUE7QUFFWCxRQUFJLE1BQU07QUFDUixVQUFJLElBQUksTUFBTSxVQUFVLE1BQU0sUUFBUSxRQUFRO0FBQzlDLFlBQU0sTUFBTSxLQUFLO0FBRWpCLFVBQUksTUFBTSxlQUFlLENBQUMsTUFBTSxZQUFZLE1BQU07QUFDaEQsaUJBQVM7QUFBQSxhQUNKO0FBQ0wsWUFBSSxLQUFJLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUdwRCxDQUFDO0FBRUosU0FBTywwREFBRyxNQUFNO0FBQUE7OztBRHhCSCw0QkFBNEI7QUFDekMsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sQ0FBQyxnQkFBZ0I7QUFDdkIsUUFBTSxTQUFTLGFBQWEsSUFBSTtBQUVoQyxRQUFNLFdBQVc7QUFFakIsK0JBQVUsTUFBTTtBQUNkLFFBQUksU0FBUyxhQUFhLGlCQUFpQjtBQUN6QyxlQUFTLDhCQUE4QjtBQUFBO0FBQUEsS0FFeEMsQ0FBQyxVQUFVLFVBQVU7QUFFeEIsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQXlCLGFBQWEsQ0FBQyxPQUFPLE9BQU87QUFBQSxLQUNuRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBYSxzQkFDM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLDBCQUNsQixjQUNBO0FBQUEsS0FHTixvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsSUFBSSw4QkFBOEI7QUFBQSxLQUNuQyxhQUlILG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLHNCQUFzQixjQUFjO0FBQUEsS0FHNUQsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUksMEJBQTBCO0FBQUEsS0FBVSx5QkFReEQsb0NBQUMsc0JBQUQ7QUFBQTs7O0FFbEROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFrQjtBQUNsQixxQkFBMEI7QUFDMUIsb0JBUU87OztBQ1ZQO0FBQUEsb0JBQW9DO0FBQ3BDLGtCQUFrQjtBQUVsQixtQkFBa0I7QUFDbEIscUJBQXVCO0FBRVIsNkJBQTZCLE9BQU87QUFDakQsUUFBTSxDQUFDLEtBQUssVUFBVSw0QkFBUztBQUMvQixRQUFNLHdCQUF3QiwyQkFBTyxNQUFNLFNBQVMsQ0FBQyxNQUFNLDBCQUFNLEVBQUU7QUFDbkUsK0JBQVUsTUFBTTtBQUNkLFFBQUksUUFBUSxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUN6RCxLQUFLLFdBQVc7QUFFbEIsV0FBTyxTQUFTLGVBQWU7QUFDL0IsUUFBSSxjQUFjLG9CQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUdkLFVBQU0sbUJBQW1CLElBQUksb0JBQU0sS0FBSztBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxRQUNKLFFBQVEsc0JBQXNCLElBQUksQ0FBQyxNQUNqQywwQkFBTSxFQUFFLE1BQU0sT0FBTztBQUFBLFFBRXZCLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPLE1BQU07QUFBQSxZQUNiLE1BQU0sc0JBQXNCLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFBQSxZQUN6QyxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsWUFDVCxhQUFhO0FBQUEsWUFDYixpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUl2QixTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUE7QUFBQTtBQUdiLFdBQU8sTUFBTTtBQUNYLHVCQUFpQjtBQUFBO0FBQUE7QUFHckIsU0FDRSwwREFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUE7QUFBQTs7O0FDOUNqQjtBQUVBLHFDQUE0QztBQUMxQyxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQVMsS0FBSyxnQkFBZ0IsT0FBTztBQUVuRSxTQUFPO0FBQUE7QUFHVCw4QkFBcUMsZ0JBQWdCLE9BQU8sTUFBTSxNQUFNO0FBQ3RFLFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFBUyxLQUFLLG9CQUFvQixPQUFPO0FBQUEsSUFDckUsYUFBYTtBQUFBLElBQ2I7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNUO0FBQUE7QUFFRixTQUFPO0FBQUE7QUFHVCxxQ0FBNEMsZ0JBQWdCLE1BQU07QUFDaEUsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLG9CQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVcsTUFDZCxHQUFHLGVBQWU7QUFDckIsU0FBTztBQUFBO0FBR1Qsb0NBQTJDLElBQUksTUFBTTtBQUNuRCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssb0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxNQUNkLEdBQUcsTUFBTTtBQUVaLFNBQU87QUFBQTtBQUdULCtCQUFzQyxnQkFBZ0IsZ0JBQWdCO0FBQ3BFLFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxvQkFDTCxPQUFPLGdCQUNQLE1BQU07QUFDVCxVQUFRLElBQUksT0FBTyxnQkFBZ0I7QUFFbkMsU0FBTztBQUFBO0FBR1QsaUNBQXdDLGdCQUFnQjtBQUN0RCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssb0JBQ0wsU0FDQSxNQUFNO0FBRVQsU0FBTztBQUFBOzs7QUZwQ0YsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLFFBQU0sVUFBVSxNQUFNO0FBQ3RCLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsTUFBSSxnQkFBZ0IsSUFBSSxhQUFhLElBQUk7QUFFekMsUUFBTSxVQUFVLE1BQU0sc0JBQXNCLGVBQWU7QUFDM0QsU0FBTyxDQUFDLFNBQVMsUUFBUSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsMkJBQU0sRUFBRSxRQUFRLDJCQUFNLEVBQUU7QUFBQTtBQUdwRCxtQ0FBbUM7QUEzQmxEO0FBNEJFLFFBQU0sU0FBUztBQUNmLFFBQU0sV0FBVztBQUNqQixRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sQ0FBQyxTQUFTLFdBQVc7QUFDM0IsUUFBTSxTQUFTLGFBQWEsT0FBTztBQUNuQyxRQUFNLGdCQUFnQixhQUFhLE9BQU87QUFDMUMsUUFBTSxhQUFhLDhCQUNqQixvQkFBUSxPQUNOLENBQUMsTUFBTSxFQUFFLE9BQU8sU0FBUyxhQUFhLElBQUksd0JBRDVDLG1CQUVJLE9BRkosbUJBRVE7QUFHVixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxjQUFjLGFBQWEsSUFBSSxxQkFBcUI7QUFBQSxJQUNwRCxVQUFVLENBQUMsTUFBTTtBQUNmLGFBQU87QUFBQSxRQUNMLGdCQUFnQixFQUFFLE9BQU87QUFBQSxRQUN6QixNQUFNLGFBQWEsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUk3QixRQUFRLElBQUksQ0FBQyxNQUNaLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLEtBQUssRUFBRTtBQUFBLElBQUksT0FBTyxFQUFFO0FBQUEsS0FDekIsOEJBQVUsRUFBRSxxQkFLcEIsUUFBUSxXQUFXLElBQ2xCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFNLHFCQUVyQixTQUFTLGFBQWEsZ0NBQ3BCLG9DQUFDLHFCQUFEO0FBQUEsSUFBcUI7QUFBQSxJQUFrQixNQUFNO0FBQUEsTUFHakQsb0NBQUMsc0JBQUQsT0FDQyxTQUFTLGFBQWEsZ0NBQ3JCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLFFBQVEsSUFBSSxDQUFDLE1BQ1osb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBO0FBQUEsSUFFakIsV0FBVTtBQUFBLElBQ1YsS0FBSyxFQUFFO0FBQUEsS0FFUCxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sT0FBTTtBQUFBLEtBQ1QsMkJBQU0sRUFBRSxNQUFNLE9BQU8sZ0JBRXhCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE9BQU07QUFBQSxLQUEwQixFQUFFLFNBRTFDLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFJLG1DQUFtQyx5QkFBeUIsb0JBQW9CLEVBQUU7QUFBQSxLQUV0RixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBbUM7QUFBQTs7O0FHNUZ2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF5QjtBQUN6QixvQkFNTztBQU9BLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsUUFBTSxLQUFLLElBQUksYUFBYSxJQUFJO0FBQ2hDLFFBQU0sT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNsQyxRQUFNLGNBQWMscUJBQXFCLElBQUk7QUFFN0MsU0FBTztBQUFBO0FBRUYsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxpQkFBaUIsS0FBSyxNQUFNLEtBQUssSUFBSTtBQUMzQyxRQUFNLGdCQUFnQixlQUFlO0FBQ3JDLFFBQU0sT0FBTyxlQUFlO0FBRTVCLE1BQUksUUFBUSxXQUFXLFVBQVU7QUFDL0IsVUFBTSxrQkFBa0I7QUFBQSxTQUNuQjtBQUNMLFVBQU0saUJBQWlCLGlDQUNsQixpQkFEa0I7QUFBQSxNQUVyQixPQUFPLEtBQUssSUFBSTtBQUFBLE1BQ2hCLE1BQU0sS0FBSyxJQUFJO0FBQUE7QUFFakIsVUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQUE7QUFFeEMsU0FBTyw0QkFDTCw4QkFBOEIsdUJBQXVCO0FBQUE7QUFHMUMsZ0NBQWdDO0FBQzdDLFFBQU0sY0FBYztBQUNwQixRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sQ0FBQyxrQkFBa0IsdUJBQXVCLDRCQUM5QyxZQUFZLEdBQUc7QUFFakIsUUFBTSxDQUFDLE1BQU0sV0FBVyw0QkFBUyxZQUFZLEdBQUc7QUFDaEQsUUFBTSxVQUFVO0FBQ2hCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWtCLGVBRTlCLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFJLDhCQUE4QixhQUFhLE9BQzdDLDBCQUNrQixhQUFhLE9BQU87QUFBQSxLQUV4QyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsSUFBUyxjQUFXO0FBQUEsUUFHdEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFBRyxVQUNILG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNLG9CQUFvQixFQUFFLE9BQU87QUFBQSxNQUVoRCxvQ0FBQyxLQUFELE1BQUcsU0FDSCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsTUFBTSxRQUFRLEVBQUUsT0FBTztBQUFBLE1BRXBDLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTTtBQUNiLGNBQVEsT0FDTjtBQUFBLFFBQ0UsZ0JBQWdCLEtBQUssVUFBVSxZQUFZO0FBQUEsUUFDM0M7QUFBQSxRQUNBO0FBQUEsU0FFRixFQUFFLFFBQVE7QUFBQTtBQUFBLEtBR2YsV0FHRCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixjQUFRLE9BQ04sRUFBRSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksT0FDN0M7QUFBQSxRQUNFLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FJZjtBQUFBOzs7QUMxR2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBb0U7QUFDcEUscUJBQTBCO0FBQzFCLG9CQUF5QjtBQUl6Qix1Q0FBMEI7OztBQ04xQjtBQUFBLHFCQUF5QjtBQUVsQiwwQkFBMEIsR0FBRyxHQUFHO0FBQ3JDLE1BQUksU0FBUyxJQUFJLEtBQUssR0FBRyxHQUFHLElBQUssS0FBSSxLQUFLO0FBQzFDLE1BQUksTUFBTSxPQUFPO0FBQ2pCLE1BQUksZUFBZTtBQUNuQixNQUFJLE9BQU87QUFBRyxpQkFBYSxRQUFRLE9BQU8sWUFBWSxPQUFPLFdBQVc7QUFBQTtBQUNuRSxpQkFBYSxRQUFRLE9BQU8sWUFBWSxJQUFJLE9BQU87QUFDeEQsU0FBTztBQUFBO0FBR0YsdUJBQXVCLE1BQU07QUFDbEMsTUFBSSxJQUFJLElBQUksS0FDVixLQUFLLElBQUksS0FBSyxlQUFlLEtBQUssWUFBWSxLQUFLO0FBRXJELE1BQUksU0FBUyxFQUFFLGVBQWU7QUFDOUIsSUFBRSxXQUFXLEVBQUUsZUFBZSxJQUFJO0FBQ2xDLE1BQUksWUFBWSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsa0JBQWtCLEdBQUc7QUFDekQsU0FBTyxLQUFLLEtBQU8sTUFBSSxhQUFhLFFBQVcsS0FBSztBQUFBO0FBRy9DLElBQU0scUJBQXFCLE1BQU07QUFDdEMsUUFBTSxPQUFPLElBQUk7QUFDakIsTUFBSSxPQUFPLEtBQUs7QUFDaEIsTUFBSSxRQUFRLDZCQUFTLEtBQUssYUFBYSxHQUFHLEdBQUc7QUFDN0MsTUFBSSxNQUFNLDZCQUFTLEtBQUssV0FBVyxHQUFHO0FBQ3RDLE1BQUksS0FBSyw2QkFBUyxLQUFLLFlBQVksR0FBRztBQUN0QyxNQUFJLE1BQU0sNkJBQVMsS0FBSyxjQUFjLEdBQUc7QUFDekMsU0FBTyxHQUFHLFFBQVEsU0FBUyxPQUFPLE1BQU07QUFBQTs7O0FEcEJuQyxJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsUUFBTSxVQUFVLE1BQU07QUFDdEIsU0FBTztBQUFBO0FBR0YsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxlQUNKLEtBQUssSUFBSSxXQUNULEtBQUssSUFBSSxVQUNULEtBQUssSUFBSSxTQUNULEtBQUssSUFBSTtBQUVYLFNBQU8sNEJBQ0wsNkJBQTZCLEtBQUssSUFBSSwwQkFBMEIsS0FBSyxJQUNuRTtBQUFBO0FBS1MsK0JBQStCO0FBQzVDLFFBQU0sVUFBVSxtQ0FBZ0IsSUFBSSxDQUFDLE1BQU8saUNBQ3ZDLElBRHVDO0FBQUEsSUFFMUMsbUJBQW1CLDhCQUFVLEVBQUU7QUFBQTtBQUVqQyxRQUFNLENBQUMsZ0JBQWdCLHFCQUFxQjtBQUM1QyxRQUFNLENBQUMsT0FBTyxZQUFZO0FBQzFCLFFBQU0sQ0FBQyxNQUFNLFdBQVc7QUFDeEIsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLDRCQUFTO0FBQ2pELFFBQU0sQ0FBQyxNQUFNLFdBQVcsNEJBQVM7QUFDakMsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLFNBQVM7QUFDZixTQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFBeUI7QUFBQSxLQUN2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxRQUFPO0FBQUEsSUFDUCxVQUFVLE9BQU8sVUFBVTtBQTlDdkM7QUErQ2Msc0JBQWdCO0FBQ2hCLFlBQU07QUFFTixhQUNFO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBLFFBQVEsdURBQWlCLE9BQWpCLG1CQUFxQjtBQUFBLFFBQzdCLE1BQU0sYUFBYSxPQUFPO0FBQUEsU0FFNUIsRUFBRSxRQUFRO0FBQUE7QUFBQSxLQUlkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFRLFlBRzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLDRDQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxVQUFVO0FBQUEsSUFDVixVQUFVLENBQUMsTUFBTSxrQkFBa0I7QUFBQSxJQUNuQyxTQUFTO0FBQUEsSUFDVCxhQUFZO0FBQUEsU0FLcEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsV0FFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU87QUFBQSxTQUszQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBUSxVQUUzQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsTUFBTSxRQUFRLEVBQUUsT0FBTztBQUFBLFNBTTFDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFVBQVUsZUFBZSxDQUFFLFVBQVMsa0JBQWtCO0FBQUEsSUFDdEQsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLEtBQ047QUFBQTs7O0FFcEhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBa0U7QUFFbEUsb0JBQWtCO0FBQ2xCLG9CQUEwQjtBQUUxQixJQUFJLGFBQWEsUUFBUTtBQUN6QixzQkFBTSxPQUFPO0FBRUUsMEJBQTBCO0FBQ3ZDLFFBQU0sQ0FBQyxnQkFBZ0I7QUFDdkIsUUFBTSxTQUFTLGFBQWEsSUFBSTtBQUNoQyxRQUFNLFdBQVc7QUFDakIsUUFBTSxPQUFPLGFBQWEsSUFBSTtBQUM5QixRQUFNLE9BQU8sSUFBSTtBQUNqQixRQUFNLFdBQVcsR0FBRyw2QkFBUSxXQUFXLGNBQWM7QUFFckQsUUFBTSxXQUFXO0FBRWpCLCtCQUFVLE1BQU07QUFDZCxRQUFJLFNBQVMsYUFBYSxlQUFlO0FBQ3ZDLGVBQVMscUNBQXFDLGFBQWE7QUFBQTtBQUFBLEtBRTVELENBQUMsVUFBVSxVQUFVO0FBQ3hCLFNBQ0UsMERBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QixhQUFhLENBQUMsT0FBTyxPQUFPO0FBQUEsS0FDbkQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXVCLGNBQ3RDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUNmLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFhLGlCQUMxQixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQWEsaUNBQ2xCLGNBQ0E7QUFBQSxJQUVOLE1BQU0scUNBQXFDLGFBQWE7QUFBQSxLQUN6RCx1QkFJSCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQWEsaUNBQ2xCLGNBQ0E7QUFBQSxJQUVOLE1BQU0scUNBQXFDO0FBQUEsS0FDNUMsdUJBSUgsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLHdCQUNsQixjQUNBO0FBQUEsSUFFTixNQUFNLDRCQUE0QixhQUFhO0FBQUEsS0FDaEQsY0FJSCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQWEsMEJBQ2xCLGNBQ0E7QUFBQSxJQUVOLE1BQU0sOEJBQThCO0FBQUEsS0FDckMsaUJBS0wsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWEsbUJBQzFCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUNFLFNBQVMsYUFDVCxvQ0FDSSxjQUNBO0FBQUEsSUFFTixNQUFNLHdDQUF3QztBQUFBLEtBQy9DLDBCQUlILG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUNFLFNBQVMsYUFBYSw4QkFDbEIsY0FDQTtBQUFBLElBRU4sTUFBTSxrQ0FBa0M7QUFBQSxLQUN6Qyx3QkFRWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixTQUFTLGFBQWEsZ0JBQ3JCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLHNCQUFEO0FBQUE7OztBQ3ZIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUVBLDRCQUFtQyxjQUFjO0FBQy9DLE1BQUksY0FBYztBQUNoQixVQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssWUFDTCxPQUFPLEtBQ1AsR0FBRyxnQkFBZ0I7QUFDdEIsV0FBTztBQUFBLFNBQ0Y7QUFDTCxVQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQVMsS0FBSyxZQUFZLE9BQU87QUFDL0QsV0FBTztBQUFBO0FBQUE7QUFJWCxpQ0FBd0M7QUFDdEMsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLDBCQUNMLE9BQU8sS0FDUCxNQUFNO0FBQ1QsU0FBTztBQUFBO0FBR1QsbUNBQTBDLFFBQVE7QUFDaEQsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLHNCQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVc7QUFDakIsU0FBTztBQUFBOzs7QUM1QlQ7QUFBQSxvQkFBa0I7QUFFbEIsSUFBSSxjQUFhLFFBQVE7QUFDekIsc0JBQU0sT0FBTztBQUViLHlCQUFnQyxTQUFTO0FBQ3ZDLFFBQU0saUJBQ0gsS0FBSyxPQUNMLFNBQ0EsTUFBTSxFQUFFLElBQUksUUFBUSxJQUFJO0FBRTNCLFFBQU0sRUFBRSxTQUFTLE1BQU0saUJBQVMsS0FBSywyQkFBMkIsT0FBTztBQUN2RSxRQUFNLE1BQU0sS0FBSyxJQUFJLENBQUMscUJBQXFCLGlCQUFpQjtBQUM1RCxRQUFNLGlCQUFTLEtBQUssb0JBQW9CLFNBQVMsR0FBRyxNQUFNO0FBQUE7QUFHNUQsc0JBQTZCLFNBQVM7QUFoQnRDO0FBaUJFLFFBQU0sTUFBTSxNQUFNLGlCQUFTLEtBQUssT0FBTyxPQUFPO0FBQUEsSUFDNUM7QUFBQSxNQUNFLGtCQUFrQixRQUFRLElBQUk7QUFBQSxNQUM5QixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUE7QUFBQTtBQUlmLFNBQU8saUNBQUssU0FBTCxtQkFBWTtBQUFBO0FBRXJCLHlCQUFnQyxTQUFTO0FBQ3ZDLE1BQUksZ0JBQWdCO0FBQUEsSUFDbEIsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBO0FBR2IsUUFBTSxlQUFlLFFBQVEsSUFBSTtBQUNqQyxRQUFNLGFBQWEsUUFBUSxJQUFJO0FBQy9CLFFBQU0sa0JBQWtCLFFBQVEsSUFBSTtBQUVwQyxNQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGtCQUFjLFNBQVMsV0FBVztBQUFBO0FBRXBDLE1BQUksZUFBZSxNQUFNO0FBQ3ZCLGtCQUFjLGNBQWMsV0FBVztBQUFBO0FBRXpDLE1BQUksb0JBQW9CLE1BQU07QUFDNUIsa0JBQWMsWUFBWSxvQkFBb0I7QUFBQTtBQUVoRCxRQUFNLEVBQUUsU0FBUyxNQUFNLGlCQUNwQixLQUFLLE9BQ0wsT0FBTyxlQUNQLE1BQU0sRUFBRSxJQUFJLFFBQVEsSUFBSTtBQUMzQixTQUFPO0FBQUE7QUFHVCw4QkFBcUMsUUFBUSxjQUFjLFlBQVk7QUFDckUsUUFBTSxvQkFBb0IsZUFDdEIsMkJBQU0sZ0JBQ04sMkJBQU0sNkJBQVEsS0FBSyw2QkFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRO0FBQy9ELFFBQU0sa0JBQWtCLGFBQWEsMkJBQU0sY0FBYztBQUV6RCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssa0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxRQUNkLElBQUksa0JBQWtCLG1CQUN0QixJQUFJLGtCQUFrQjtBQUV6QixTQUFPO0FBQUE7QUFHVCw0Q0FBbUQsUUFBUSxZQUFZO0FBQ3JFLE1BQUksWUFBWTtBQUNkLFVBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssbUNBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxRQUNkLEdBQUcsZUFBZTtBQUNyQixXQUFPO0FBQUEsU0FDRjtBQUNMLFVBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssbUNBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVztBQUNqQixXQUFPO0FBQUE7QUFBQTtBQUlYLHFDQUE0QyxRQUFRO0FBQ2xELFFBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssa0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVztBQUNqQixTQUFPO0FBQUE7OztBRjNGVCxxQkFBZ0U7QUFDaEUscUJBQW1DOzs7QUdIbkM7QUFBQSxvQkFBb0M7QUFDcEMsbUJBQWtCO0FBQ2xCLG1CQUF3QjtBQUN4QixvQkFBa0I7QUFDbEIscUJBQXVCO0FBQ3ZCLHFCQUFNLFNBQVMsQ0FBQztBQUVELDZCQUE2QixPQUFPO0FBQ2pELFFBQU0sQ0FBQyxLQUFLLFVBQVUsNEJBQVM7QUFDL0IsUUFBTSxtQkFBbUIsMkJBQ3ZCLE1BQU0scUJBQ04sQ0FBQyxNQUFNLEVBQUU7QUFFWCwrQkFBVSxNQUFNO0FBQ2QsUUFBSSxRQUFRLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQ3pELEtBQUssV0FBVztBQUVsQixXQUFPLFNBQVMsZUFBZTtBQUMvQixRQUFJLGNBQWMscUJBQU0sU0FBUztBQUNqQyxRQUFJLGVBQWUsUUFBVztBQUM1QixrQkFBWTtBQUFBO0FBR2QsVUFBTSwyQkFBMkIsSUFBSSxxQkFBTSxLQUFLO0FBQUEsTUFDOUMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxpQkFBaUIsSUFBSSxDQUFDLE1BQzVCLDJCQUFNLEVBQUUsZ0JBQWdCLE9BQU87QUFBQSxRQUVqQyxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTSxpQkFBaUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFBLFlBQ3BDLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWE7QUFBQSxZQUNiLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXZCLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQSxZQUNQLFdBQVc7QUFBQSxjQUNULE9BQU8sQ0FBQyxZQUFZO0FBQ2xCLG9CQUFJLFlBQVksUUFBUTtBQUN4Qix1QkFBTyxXQUFXLGlCQUFpQixXQUFXLHdCQUF3QixpQkFBaUIsV0FBVyxrQkFBa0IsaUJBQWlCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRNUosV0FBTyxNQUFNO0FBQ1gsK0JBQXlCO0FBQUE7QUFBQTtBQUc3QixTQUNFLDBEQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QUh0RFYsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBTjNDO0FBT0UsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxRQUFNLFlBQVksTUFBTSxvQkFBb0I7QUFFNUMsTUFBSSxXQUFXLElBQUksYUFBYSxJQUFJLGtCQUFrQixpQkFBVSxPQUFWLG1CQUFjO0FBQ3BFLFFBQU0sT0FBTyxNQUFNLDZCQUE2QixNQUFNO0FBRXRELFFBQU0saUJBQWlCLDRCQUFRLE1BQU0sQ0FBQyxNQUFNLEVBQUUsYUFBYTtBQUMzRCxTQUFPLEVBQUUsZ0JBQWdCO0FBQUE7QUFHWix5QkFBeUI7QUFDdEMsUUFBTSxFQUFFLGdCQUFnQixjQUFjO0FBQ3RDLFFBQU0sU0FBUztBQUNmLFFBQU0sQ0FBQyxnQkFBZ0I7QUFDdkIsUUFBTSxzQkFBc0I7QUFFNUIsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IseUJBQ2pDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNiLHVCQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxVQUFVLENBQUMsTUFBTTtBQUNmLGFBQU87QUFBQSxRQUNMLGFBQWEsRUFBRSxPQUFPO0FBQUEsUUFDdEIsTUFBTSxhQUFhLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FJN0IsVUFBVSxJQUFJLENBQUMsTUFDZCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxLQUFLLEVBQUU7QUFBQSxJQUFJLE9BQU8sRUFBRTtBQUFBLEtBQ3pCLEdBQUcsOEJBQVUsRUFBRSxTQUNkLHdCQUFHLFdBQVUsSUFBSSw4QkFBVSxFQUFFLGNBQWMsWUFVM0Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osc0JBQ0Msb0NBQUMscUJBQUQ7QUFBQSxJQUFxQixxQkFBcUI7QUFBQSxPQUUxQztBQUFBOzs7QUkzRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFBZ0U7QUFDaEUsb0JBQWtCO0FBQ2xCLHFCQUFtQjs7O0FDSG5CO0FBQUEscUJBQW9DO0FBQ3BDLG1CQUFrQjtBQUNsQixxQkFBMEI7QUFFWCw0QkFBNEIsT0FBTztBQUNoRCxRQUFNLENBQUMsS0FBSyxVQUFVLDZCQUFTO0FBQy9CLFFBQU0sT0FBTyxNQUFNO0FBRW5CLGdDQUFVLE1BQU07QUFDZCxRQUFJLGNBQWMscUJBQU0sU0FBUztBQUNqQyxRQUFJLGFBQWE7QUFDZixrQkFBWTtBQUFBO0FBR2QsV0FBTyxTQUFTLGVBQWU7QUFDL0IsVUFBTSxrQkFBa0IsSUFBSSxxQkFBTSxLQUFLO0FBQUEsTUFDckMsTUFBTTtBQUFBLE1BRU4sTUFBTTtBQUFBLFFBQ0osUUFBUSxPQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsTUFBTSw4QkFBVTtBQUFBLFFBQy9DLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxjQUFjO0FBQUEsWUFDZCxNQUFNLE9BQU8sT0FBTztBQUFBLFlBQ3BCLGlCQUFpQixPQUFPLE9BQU8sTUFBTSxJQUNuQyxDQUFDLE1BQ0MsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FDN0MsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNNUIsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFVBQ04sR0FBRztBQUFBLFlBQ0QsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3JCLFdBQU8sTUFBTTtBQUNYLHNCQUFnQjtBQUFBO0FBQUE7QUFHcEIsU0FDRSwwREFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUE7QUFBQTs7O0FEekNqQixJQUFJLGNBQWEsUUFBUTtBQUN6QixJQUFJLG9CQUFvQixRQUFRO0FBQ2hDLHNCQUFNLE9BQU87QUFDYixzQkFBTSxPQUFPO0FBRU4sSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQUE7QUFFcEMsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsTUFBSSxXQUFXLElBQUksYUFBYSxJQUFJO0FBQ3BDLE1BQUksQ0FBQyxNQUFNLFFBQVEsU0FBUyxNQUFNO0FBQ2xDLFFBQU0sb0JBQW9CLGlCQUFpQixNQUFNO0FBQ2pELFFBQU0sZUFBZSxNQUFNLGVBQ3pCLE1BQ0Esa0JBQWtCLGdCQUNsQixJQUFJLEtBQ0Ysa0JBQWtCLFFBQVEsa0JBQWtCLFlBQVksSUFDeEQ7QUFHSixTQUFPLDRCQUFPLGNBQ1gsUUFBUSxDQUFDLFFBQVEsSUFBSSxjQUNyQixVQUFVLENBQUMsTUFBTSxFQUFFO0FBQUE7QUFHVCx5QkFBeUI7QUFDdEMsUUFBTSxhQUFhO0FBQ25CLFFBQU0sQ0FBQyxnQkFBZ0I7QUFDdkIsUUFBTSxXQUFXLGFBQWEsSUFBSTtBQUNsQyxNQUFJLENBQUMsTUFBTSxRQUFRLFNBQVMsTUFBTTtBQUNsQyxRQUFNLG9CQUFvQixpQkFBaUIsTUFBTTtBQUNqRCxRQUFNLFNBQVM7QUFDZixRQUFNLHdCQUF3QixNQUFNO0FBQ2xDLFdBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUFrQixzQkFDakMsb0NBQUMsTUFBRDtBQUFBLE1BQUksV0FBVTtBQUFBLFFBQ2Qsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsS0FBRCxNQUFJLGtCQUFrQixpQkFBbUIsTUFBRyxLQUM1QyxvQ0FBQyxLQUFELE1BQ0csSUFBSSxLQUNILGtCQUFrQixRQUFRLGtCQUFrQixZQUFZLElBQ3hELGlCQUNDLEtBQ0wsb0NBQUMsTUFBRCxPQUNBLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLHFCQUFEO0FBQUEsTUFBTSxRQUFPO0FBQUEsT0FDWCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxLQUFEO0FBQUEsTUFBRyxXQUFVO0FBQUEsT0FDWCxvQ0FBQyxTQUFEO0FBQUEsTUFDRSxNQUFLO0FBQUEsTUFDTCxXQUFVO0FBQUEsTUFDVixNQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxVQUFVLENBQUMsTUFBTTtBQUNmLGVBQU87QUFBQSxVQUNMLE1BQU0sRUFBRSxPQUFPO0FBQUEsVUFDZixNQUFNLGFBQWEsT0FBTztBQUFBO0FBQUE7QUFBQSxhQVN6QyxPQUFPLEtBQUssWUFBWSxXQUFXLElBQ2xDLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUFNLGlCQUVyQixvQ0FBQyxvQkFBRDtBQUFBLE1BQW9CO0FBQUE7QUFBQTtBQU01QixTQUFPLDBEQUFHO0FBQUE7OztBRW5GWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOEI7OztBQ0E5QjtBQUNBLDZCQUFvQyxTQUFTO0FBRDdDO0FBRUUsTUFBSSxnQkFBZ0IsTUFBTSxpQkFDdkIsS0FBSyxZQUNMLE9BQU8sTUFDUCxNQUFNLEVBQUUsTUFBTSxRQUFRLFVBQVUsU0FBUyxRQUFRO0FBRXBELE1BQUk7QUFDSixNQUFJLGNBQWMsS0FBSyxXQUFXLEdBQUc7QUFDbkMsb0JBQWdCLE1BQU0saUJBQ25CLEtBQUssWUFDTCxPQUFPLEVBQUUsTUFBTSxRQUFRLFVBQVUsU0FBUyxRQUFRO0FBQUE7QUFFdkQsZUFBYSxvQkFBYyxTQUFkLG1CQUFxQixHQUFHO0FBRXJDLFFBQU0sRUFBRSxTQUFTLE1BQU0saUJBQVMsS0FBSyxXQUFXLE9BQU87QUFBQSxJQUNyRDtBQUFBLE1BQ0UsTUFBTSxRQUFRO0FBQUEsTUFDZCxnQkFBZ0IsUUFBUTtBQUFBLE1BQ3hCLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFNBQVMsUUFBUTtBQUFBO0FBQUE7QUFHckIsU0FBTyxLQUFLLEdBQUc7QUFBQTtBQUdqQiw2QkFBb0MsWUFBWTtBQUM5QyxRQUFNLFVBQVUsTUFBTSxpQkFDbkIsS0FBSyxrQkFDTCxPQUFPLEtBQ1AsR0FBRyxjQUFjO0FBRXBCLFFBQU0sK0JBQ0osTUFBTSxRQUFRLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsYUFBYTtBQUVwRSxRQUFNLGlCQUNILEtBQUssT0FDTCxTQUNBLE9BQU8sb0JBQW9CLE1BQU07QUFFcEMsUUFBTSxpQkFDSCxLQUFLLG9CQUNMLFNBQ0EsTUFBTSxFQUFFLFNBQVM7QUFFcEIsUUFBTSxpQkFBaUIsTUFBTSxpQkFDMUIsS0FBSyxXQUNMLFNBQ0EsTUFBTSxFQUFFLElBQUk7QUFFZixTQUFPLGVBQWU7QUFBQTtBQUd4QiwwQkFBaUMsSUFBSTtBQUNuQyxNQUFJLEVBQUUsTUFBTSxZQUFZLE1BQU0saUJBQzNCLEtBQUssMEJBQ0wsT0FBTyxLQUNQLEdBQUcsTUFBTTtBQUNaLFNBQU87QUFBQTtBQUdULHNDQUE2QyxJQUFJO0FBQy9DLE1BQUksRUFBRSxTQUFTLE1BQU0saUJBQ2xCLEtBQUssa0JBQ0wsT0FBTyxLQUNQLEdBQUcsY0FBYyxJQUNqQixNQUFNO0FBRVQsU0FBTztBQUFBO0FBR1QsNkJBQW9DLElBQUksVUFBVTtBQUNoRCxRQUFNLEVBQUUsU0FBUyxNQUFNLGlCQUNwQixLQUFLLFdBQ0wsT0FBTyxFQUFFLGNBQWMsWUFDdkIsTUFBTSxFQUFFO0FBQ1gsU0FBTztBQUFBO0FBR1Qsa0NBQXlDLFFBQVE7QUFDL0MsUUFBTSxFQUFFLFNBQVMsTUFBTSxpQkFDcEIsS0FBSywwQkFDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXO0FBQ2pCLFFBQU0sV0FBVztBQUVqQixTQUFPLFNBQVMsS0FDZCxDQUFDLEdBQUcsTUFBTSxJQUFJLEtBQUssRUFBRSxrQkFBa0IsSUFBSSxLQUFLLEVBQUU7QUFBQTtBQUl0RCxxQ0FBNEMsRUFBRSxZQUFZLGVBQWU7QUE1RnpFO0FBNkZFLFFBQU0sa0JBQWtCLE1BQU0saUJBQzNCLEtBQUssb0JBQ0wsT0FBTyx3QkFDUCxHQUFHLFlBQVksYUFDZixHQUFHLFdBQVc7QUFFakIsTUFBSSxtREFBaUIsTUFBTTtBQUN6QjtBQUFBO0FBR0YsUUFBTSxjQUFjLE1BQU0saUJBQ3ZCLEtBQUssb0JBQ0wsT0FBTyxDQUFDLEVBQUUsVUFBVSxhQUFhLFNBQVM7QUFFN0MsUUFBTSxVQUFTLE1BQU0saUJBQVMsS0FBSyxPQUFPLE9BQU87QUFBQSxJQUMvQztBQUFBLE1BQ0Usa0JBQWtCLHVEQUFhLFNBQWIsbUJBQW9CLE9BQXBCLG1CQUF3QjtBQUFBLE1BQzFDLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQTtBQUFBO0FBSWYsU0FBTyx5Q0FBUSxTQUFSLG1CQUFlO0FBQUE7QUFHeEIseUNBQWdELE1BQU07QUFDcEQsUUFBTSxpQkFDSCxLQUFLLE9BQ0wsU0FDQSxNQUFNLEVBQUUsa0JBQWtCLEtBQUssSUFBSTtBQUV0QyxRQUFNLGlCQUNILEtBQUssb0JBQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDeEI7QUFBQTs7O0FEL0hGLHNCQUF3QztBQUN4QyxvQkFBa0I7OztBRUhsQjtBQUFBLHFCQUFvQztBQUNwQyxtQkFBa0I7QUFDbEIsc0JBQTBCO0FBRVgseUJBQXlCLE9BQU87QUFDN0MsUUFBTSxDQUFDLEtBQUssVUFBVSw2QkFBUztBQUUvQixnQ0FBVSxNQUFNO0FBQ2QsUUFBSSxjQUFjLHFCQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUVkLFFBQUksT0FBTyxLQUFLLE1BQU0saUJBQWlCLFdBQVcsR0FBRztBQUNuRDtBQUFBO0FBRUYsV0FBTyxTQUFTLGVBQWU7QUFDL0IsVUFBTSx1QkFBdUIsSUFBSSxxQkFBTSxLQUFLO0FBQUEsTUFDMUMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxPQUFPLEtBQUssTUFBTTtBQUFBLFFBQzFCLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxNQUFNLE9BQU8sT0FBTyxNQUFNO0FBQUEsWUFDMUIsY0FBYztBQUFBLFlBQ2QsaUJBQWlCLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixJQUNwRCxDQUFDLE1BQ0MsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FDN0MsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNNUIsU0FBUztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsYUFBYSxJQUFJLE9BQU8sS0FBSyxNQUFNLGlCQUFpQjtBQUFBLFFBQ3BELFFBQVE7QUFBQSxVQUNOLEdBQUc7QUFBQSxZQUNELGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXZCLFNBQ0UsMERBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVEsSUFBRztBQUFBO0FBQUE7OztBRnhDVixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxNQUFJLFdBQVcsTUFBTSxtQkFBbUI7QUFFeEMsYUFBVyw2QkFBTyxVQUNmLFFBQ0MsQ0FBQyxNQUNDLEdBQUcsMkJBQU0sRUFBRSxnQkFBZ0IsZUFBZSxPQUN4QyxjQUFjLElBQUksS0FBSyxFQUFFLGtCQUN6QixTQUFTLEdBQUcsUUFFakIsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUNuQjtBQUVILE1BQUksY0FBYyxPQUFPLEtBQUs7QUFDOUIsY0FBWTtBQUNaLGdCQUFjLFlBQVksTUFBTSxHQUFHLElBQUksSUFBSTtBQUUzQyxTQUFPLCtCQUFVLDBCQUFLLFVBQVUsY0FBYyxDQUFDLEtBQUssS0FBSyxRQUFRO0FBQy9ELFFBQUksT0FBTztBQUFBO0FBQUE7QUFJQSxnQ0FBZ0M7QUFDN0MsUUFBTSxXQUFXO0FBRWpCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLHNCQUNqQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxpQkFBRDtBQUFBLElBQWdCLGlCQUFpQjtBQUFBO0FBQUE7OztBR3ZDekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBQThCO0FBQzlCLHNCQUE4QjtBQUM5QixxQkFBeUI7OztBQ0h6QjtBQUFBLHFCQUFvQztBQUNwQyxtQkFBa0I7QUFDbEIsc0JBQTBCO0FBRVgseUJBQXlCLE9BQU87QUFDN0MsUUFBTSxDQUFDLEtBQUssVUFBVSw2QkFBUztBQUMvQixnQ0FBVSxNQUFNO0FBQ2QsUUFBSSxjQUFjLHFCQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUdkLFdBQU8sU0FBUyxlQUFlO0FBQy9CLFVBQU0sVUFBVSxJQUFJLHFCQUFNLEtBQUs7QUFBQSxNQUM3QixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixRQUFRLE1BQU0sU0FBUyxJQUFJLENBQUMsVUFDMUIsK0JBQVUsR0FBRyxNQUFNLGlCQUFpQixNQUFNLFdBQVc7QUFBQSxRQUV2RCxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTSxNQUFNLFNBQVMsSUFBSSxDQUFDLFVBQVUsTUFBTTtBQUFBLFlBQzFDLGNBQWM7QUFBQSxZQUNkLGlCQUFpQixNQUFNLFNBQVMsSUFBSSxDQUFDLE1BQU07QUFDekMscUJBQU8sUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsUUFDcEQsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU0xQixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxhQUFhLElBQUksTUFBTSxTQUFTO0FBQUEsUUFDaEMsU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsV0FBVztBQUFBLGNBQ1QsT0FBTyxDQUFDLFlBQVk7QUFDbEIsb0JBQUksWUFBWSxRQUFRO0FBQ3hCLHNCQUFNLE1BQU0sT0FBTyxPQUFPLE1BQU07QUFDaEMsdUJBQU8sWUFBWSxJQUFJLFdBQVcsaUJBQWlCLElBQUksV0FBVyxZQUFZLElBQUksV0FBVyxpQkFBaUIsSUFBSSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT3pJLFdBQU8sTUFBTTtBQUNYLGNBQVE7QUFBQTtBQUFBO0FBR1osU0FDRSwwREFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUE7QUFBQTs7O0FEaERWLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLFFBQU0sT0FBTyxNQUFNLDZCQUE2QjtBQUNoRCxRQUFNLG9CQUFvQiw2QkFBTyxNQUM5QixRQUFRLENBQUMsTUFBTSxFQUFFLGFBQ2pCLFVBQVUsQ0FBQyxNQUFNLDJCQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGNBQzlDO0FBRUgsU0FBTyxPQUFPLE9BQU87QUFBQTtBQUdSLDZCQUE2QjtBQUMxQyxRQUFNLGVBQWU7QUFFckIsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsbUJBQ2pDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLEtBQUQsTUFBRyxtQ0FHSixhQUFhLFNBQ1osb0NBQUMsaUJBQUQ7QUFBQSxJQUFlLFVBQVU7QUFBQSxPQUV6QjtBQUFBOzs7QUVoQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQThCO0FBRTlCLHNCQUFzRDtBQUN0RCxvQkFBa0I7QUFFbEIsSUFBSSxjQUFhLFFBQVE7QUFDekIsc0JBQU0sT0FBTztBQUVOLElBQUksV0FBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLE1BQUksUUFBUSxNQUFNLHNCQUFzQjtBQUN4QyxNQUFJLFdBQVcsTUFBTSxtQkFBbUI7QUFFeEMsUUFBTSxpQkFBaUIsU0FDcEIsSUFBSSxDQUFDLE1BQU0sMkJBQU0sRUFBRSxjQUFjLEtBQUssRUFBRSxnQkFBZ0IsV0FDeEQsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJO0FBQ3hCLFNBQU8sQ0FBQyxPQUFPLGdCQUFnQixLQUFLLE1BQU0saUJBQWlCLFNBQVM7QUFBQTtBQUd2RCwyQkFBMkI7QUFDeEMsUUFBTSxDQUFDLE9BQU8sZ0JBQWdCLG9CQUFvQjtBQUNsRCxRQUFNLE9BQU87QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQTtBQUdQLFFBQU0sZUFBZSxDQUFDLEtBQUssU0FBUyxNQUFNO0FBQ3hDLFVBQU0sU0FBUztBQUFBLE1BQ2IsRUFBRSxPQUFPLEdBQUcsUUFBUTtBQUFBLE1BQ3BCLEVBQUUsT0FBTyxLQUFLLFFBQVE7QUFBQSxNQUN0QixFQUFFLE9BQU8sS0FBSyxRQUFRO0FBQUEsTUFDdEIsRUFBRSxPQUFPLEtBQUssUUFBUTtBQUFBLE1BQ3RCLEVBQUUsT0FBTyxNQUFNLFFBQVE7QUFBQSxNQUN2QixFQUFFLE9BQU8sTUFBTSxRQUFRO0FBQUEsTUFDdkIsRUFBRSxPQUFPLE1BQU0sUUFBUTtBQUFBO0FBRXpCLFVBQU0sS0FBSztBQUNYLFFBQUksT0FBTyxPQUNSLFFBQ0EsVUFDQSxLQUFLLFNBQVUsT0FBTTtBQUNwQixhQUFPLE9BQU8sTUFBSztBQUFBO0FBRXZCLFdBQU8sT0FDRixPQUFNLEtBQUssT0FBTyxRQUFRLFFBQVEsUUFBUSxJQUFJLFFBQVEsS0FBSyxTQUM1RDtBQUFBO0FBR04sTUFBSSxnQkFBZ0IsTUFBTSxJQUFJLENBQUMsTUFBTztBQUFBLElBQ3BDLFVBQVUsR0FBRywrQkFBVSxFQUFFLFNBQ3ZCLHdCQUFHLFdBQVUsSUFBSSwrQkFBVSxFQUFFLGNBQWM7QUFBQSxJQUU3QyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQUEsSUFDbkIsS0FBSyxLQUFLLE1BQU0sRUFBRTtBQUFBLElBQ2xCLEtBQUssRUFBRTtBQUFBO0FBRVQsUUFBTSxjQUFjLENBQUMsR0FBRyxPQUFPLEtBQUssT0FBTyxRQUFRLGVBQWUsR0FBRztBQUNyRSxRQUFNLE9BQU8sT0FBTyxRQUFRLGVBQWUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFVBQVU7QUFBQSxJQUNoRSxHQUFHLE9BQU8sT0FBTztBQUFBO0FBR25CLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWlCLGVBQ2hDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFNLDRCQUNyQixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPLEVBQUUsZUFBZSxVQUFVLFNBQVM7QUFBQSxLQUUzQyxvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsS0FBRCxNQUFHLGlCQUNILG9DQUFDLEtBQUQsTUFBSSxnQkFBZSxVQUVyQixvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsS0FBRCxNQUFHLG1CQUNILG9DQUFDLEtBQUQsTUFBSSxrQkFBaUIsVUFHdEIsWUFDRSxPQUFPLENBQUMsTUFBTSxNQUFNLFlBQ3BCLElBQUksQ0FBQyxTQUNKLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLEtBQUs7QUFBQSxLQUNOLG9DQUFDLEtBQUQsTUFDRyxLQUFLLE9BQU0sTUFBRyxNQUFLLE1BQUcsTUFFekIsb0NBQUMsS0FBRCxNQUNHLFNBQVMsUUFDTixhQUNFLDRCQUNFLE9BQU8sT0FBTyxnQkFDZCxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsT0FDaEIsTUFHSiw0QkFDRSxPQUFPLE9BQU8sZ0JBQ2QsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQ2hCLFFBT2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFNLHlDQUNyQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxPQUFPLEVBQUUsVUFBVSxVQUFVLFVBQVU7QUFBQSxJQUN2QyxXQUFVO0FBQUEsS0FFVixvQ0FBQyxTQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUNHLFlBQVksSUFBSSxDQUFDLEdBQUcsVUFDbkIsb0NBQUMsTUFBRDtBQUFBLElBQUksS0FBSztBQUFBLEtBQVEsT0FJdkIsb0NBQUMsU0FBRCxNQUNHLEtBQUssSUFBSSxDQUFDLEtBQUssVUFDZCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxLQUFLO0FBQUEsS0FDTixJQUFJLElBQUksQ0FBQyxLQUFLLGFBQ2IsWUFBWSxJQUNWLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLEtBQUs7QUFBQSxLQUFXLGFBQWEsUUFFakMsb0NBQUMsTUFBRDtBQUFBLElBQUksS0FBSztBQUFBLEtBQVc7QUFBQTs7O0FDakl4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0U7QUFFaEUsc0JBQWtDO0FBQ2xDLG9CQUFrQjtBQUVsQixJQUFJLGNBQWEsUUFBUTtBQUN6QixJQUFJLE1BQU0sUUFBUTtBQUNsQixzQkFBTSxPQUFPO0FBQ2Isc0JBQU0sT0FBTztBQUViLElBQU0sV0FBVztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUdLLElBQUksV0FBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLFFBQU0sV0FBVyxJQUFJLGFBQWEsSUFBSTtBQUN0QyxNQUFJLENBQUMsTUFBTSxRQUFRLFNBQVMsTUFBTTtBQUNsQyxRQUFNLG9CQUFvQixpQkFBaUIsTUFBTTtBQUNqRCxNQUFJLFdBQVcsTUFBTSxlQUNuQixNQUNBLGtCQUFrQixnQkFDbEIsSUFBSSxLQUNGLGtCQUFrQixRQUFRLGtCQUFrQixZQUFZLElBQ3hEO0FBRUosU0FBTztBQUFBO0FBR00sK0JBQStCO0FBQzVDLE1BQUksY0FBYztBQUNsQixRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sV0FBVyxhQUFhLElBQUk7QUFDbEMsTUFBSSxDQUFDLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFDbEMsUUFBTSxvQkFBb0IsMkJBQU0saUJBQWlCLE1BQU07QUFDdkQsUUFBTSxTQUFTO0FBRWYsUUFBTSxXQUFXLDZCQUFPLGFBQ3JCLFFBQVEsQ0FBQyxNQUFNLHNCQUFNLElBQUksRUFBRSxnQkFBZ0IsUUFBUSxPQUFPLFNBQzFELFVBQVUsQ0FBQyxNQUNWLDZCQUFPLEdBQ0osUUFBUSxDQUFDLFFBQVEsSUFBSSxjQUNyQixVQUFVLENBQUMsTUFBTSxFQUFFLFFBQ25CLFNBRUo7QUFFSCxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsYUFDakMsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRCxNQUFJLGtCQUFrQixPQUFPLGdCQUFrQixNQUFHLEtBQ2xELG9DQUFDLEtBQUQsTUFBSSxrQkFBa0IsSUFBSSxHQUFHLE9BQU8sT0FBTyxnQkFBbUIsTUFFaEUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsYUFBTztBQUFBLFFBQ0wsTUFBTSxFQUFFLE9BQU87QUFBQSxRQUNmLE1BQU0sYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBLFVBU3hDLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLEVBQUUsU0FBUyxRQUFRLGVBQWUsT0FBTyxVQUFVO0FBQUEsS0FDNUQsQ0FBQyxHQUFHLE1BQU0sR0FBRyxRQUFRLElBQUksQ0FBQyxNQUFNLFVBQy9CLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFNLE9BQU8sRUFBRSxPQUFPO0FBQUEsS0FDN0Isc0NBQVcsU0FBUyxVQUNuQixvQ0FBQyxXQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsS0FFWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsR0FDL0IsU0FBUyxXQUNMLGtCQUNILElBQUksT0FBTyxPQUNYLE9BQU8sa0JBQ1Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osT0FBTyxRQUFRLHFDQUFXLFNBQVMsUUFBUSxJQUMxQyxDQUFDLENBQUMsR0FBRyxJQUFJLFdBQVU7QUFDakIsV0FDRSxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxLQUFLO0FBQUEsT0FDUixvQ0FBQyxLQUFELE1BQ0csK0JBQVUsSUFBRyxPQUFJO0FBQUEsU0FTaEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLEdBQy9CLFNBQVMsV0FDTCxrQkFDSCxJQUFJLE9BQU8sT0FDWCxPQUFPLGtCQUNWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQsTUFBRztBQUFBOzs7QUN2SHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFEO0FBQ3JELHNCQUEwQjtBQUMxQixxQkFBeUI7QUFJbEIsSUFBSSxXQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDbEMsUUFBTSxZQUFZLE1BQU0sYUFBYTtBQUVyQyxTQUFPO0FBQUE7QUFHRixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixNQUFJLENBQUMsS0FBSyxJQUFJLGlCQUFpQjtBQUM3QixXQUFPO0FBQUE7QUFFVCxTQUFPLE1BQU0sWUFBWSxLQUFLLElBQUksaUJBQWlCLEtBQUssSUFBSTtBQUFBO0FBRy9DLGdDQUFnQztBQUM3QyxRQUFNLFlBQVk7QUFDbEIsUUFBTSxDQUFDLE1BQU0sV0FBVztBQUN4QixRQUFNLENBQUMsZ0JBQWdCO0FBRXZCLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUNFO0FBQUEsSUFDQSxhQUFhLENBQUMsT0FBTyxPQUFPLGFBQWEsSUFBSTtBQUFBLEtBRTdDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFrQixvQkFDL0IsVUFBVSxJQUFJLENBQUMsTUFDZCxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsSUFBSSxLQUFLLEVBQUUsWUFBWSxhQUFhLElBQUk7QUFBQSxJQUN4QyxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWMsK0JBQVUsRUFBRSxXQUkvQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFELE1BQUcsaUJBQ0gsb0NBQUMsTUFBRDtBQUFBLElBQUksT0FBTTtBQUFBLE1BQ1Ysb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzVCLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFnQixNQUFLO0FBQUEsTUFDdEMsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTyxhQUFhLElBQUk7QUFBQSxNQUUxQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsSUFBK0IsTUFBSztBQUFBLEtBQVM7QUFBQTs7O0FDeEQ3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUQ7QUFHckQsZ0JBQWtEO0FBQ2xELHNCQUEwQjtBQUMxQixxQkFBa0I7QUFDbEIsSUFBTSxPQUFNLFFBQVE7QUFDcEIsdUJBQU0sT0FBTztBQUVOLElBQUksV0FBUyxPQUFPLEVBQUUsU0FBUyxhQUFhO0FBQ2pELE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsUUFBTSxXQUFXLE1BQU0sbUJBQW1CO0FBQzFDLFNBQU87QUFBQTtBQUdNLDRCQUE0QjtBQUN6QyxRQUFNLFdBQVc7QUFDakIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLFNBQVMsYUFBYSxJQUFJO0FBQ2hDLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QixhQUFhLENBQUMsT0FBTyxPQUFPO0FBQUEsS0FDbkQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLGFBQ2hDLFNBQVMsV0FBVyxLQUFLLG1CQUN6QixTQUFTLElBQUksQ0FBQyxZQUNiLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixJQUFJLFlBQVksUUFBUTtBQUFBLEtBRXhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDVix1QkFDRSxJQUFJLFFBQVEsZ0JBQ1osUUFDQSxPQUFPLG9CQUVaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLHVCQUFNLElBQUksUUFBUSxnQkFBZ0IsUUFBUSxPQUFPLFdBQ2pELE9BQ0EsUUFBUSxPQUVWLCtCQUFVLFFBQVEsaUJBRXBCLFFBQVEsZUFDUCxvQ0FBQyw2QkFBRDtBQUFBLElBQW1CLE1BQU07QUFBQSxJQUFJLFdBQVU7QUFBQSxPQUV2QyxvQ0FBQywwQkFBRDtBQUFBLElBQWdCLE1BQU07QUFBQSxJQUFJLFdBQVU7QUFBQTtBQUFBOzs7QUNsRHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdUI7QUFFUiwyQkFBMkI7QUFDeEMsU0FDRSwwREFDRSxvQ0FBQyx5QkFBRCxNQUNFLG9DQUFDLHVCQUFEO0FBQUE7OztBQ05SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTREO0FBTTVELHNCQUEwQjtBQUUxQixxQkFBeUI7OztBQ1J6QjtBQUFBLHFCQUEyQztBQUUzQyxJQUFNLFlBQVksQ0FBQyxVQUFVO0FBQzNCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNkJBQVMsTUFBTTtBQUN2QyxRQUFNLENBQUMsU0FBUyxjQUFjLDZCQUFTLE1BQU07QUFFN0MsZ0NBQVUsTUFBTTtBQUNkLFFBQUk7QUFDSixRQUFJLFNBQVM7QUFDWCxpQkFBVyxZQUFZLE1BQU07QUFDM0IsZ0JBQVEsQ0FBQyxhQUFhLFdBQVc7QUFBQSxTQUNoQztBQUFBLGVBQ00sQ0FBQyxTQUFTO0FBQ25CLG9CQUFjO0FBQUE7QUFFaEIsV0FBTyxNQUFNLGNBQWM7QUFBQSxLQUMxQixDQUFDO0FBQ0osU0FDRSxxREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixPQUFPLEtBQUssS0FBSyxLQUFLLE9BQ3BCLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQVEsS0FBTSxXQUNsRCxxREFBQyxRQUFELE1BQVEsT0FBTyxLQUFLLE1BQU0sT0FBTyxRQUFXLElBQUssTUFBTSxLQUFJLE1BQzNELHFEQUFDLFFBQUQsTUFBUSxPQUFNLEtBQUssTUFBTyxPQUFPLE1BQVMsS0FBSyxNQUFNLEtBQUksTUFDekQscURBQUMsUUFBRCxNQUFRLE9BQU0sS0FBSyxNQUFPLE9BQU8sTUFBUSxLQUFLLE1BQU07QUFBQTtBQUkxRCxJQUFPLG9CQUFROzs7QURqQmYscUJBQWtCO0FBQ2xCLGlCQUE4QjtBQUU5QixJQUFNLE9BQU0sUUFBUTtBQUNwQixJQUFNLGVBQWUsUUFBUTtBQUM3Qix1QkFBTSxPQUFPO0FBQ2IsdUJBQU0sT0FBTztBQUVOLElBQUksV0FBUyxPQUFPLEVBQUUsYUFBYTtBQUN4QyxRQUFNLFVBQVUsTUFBTSxXQUFXLE9BQU87QUFDeEMsU0FBTztBQUFBO0FBR0YsSUFBSSxVQUFTLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDakQsTUFBSSxRQUFRLFVBQVUsUUFBUTtBQUM1QixVQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFVBQU0sVUFBVSxNQUFNLGNBQ3BCLEtBQUssSUFBSSxlQUNULEtBQUssSUFBSTtBQUVYLFdBQU87QUFBQTtBQUVULE1BQUksUUFBUSxVQUFVLFVBQVU7QUFDOUIsVUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixVQUFNLFVBQVUsTUFBTSxjQUFjLEtBQUssSUFBSTtBQUM3QyxXQUFPLDZCQUFTO0FBQUE7QUFBQTtBQUlwQixnQkFBZ0IsTUFBTTtBQUNwQixTQUNFLG9DQUFDLE9BQUQsTUFDRyxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQ3BCLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQVEsS0FBTSxXQUNsRCxvQ0FBQyxRQUFELE1BQVEsT0FBTyxLQUFLLE1BQU0sT0FBTyxRQUFXLElBQUssTUFBTSxLQUFJLE1BQzNELG9DQUFDLFFBQUQsTUFBUSxPQUFNLEtBQUssTUFBTyxPQUFPLE1BQVMsS0FBSyxNQUFNLEtBQUksTUFDekQsb0NBQUMsUUFBRCxNQUFRLE9BQU0sS0FBSyxNQUFPLE9BQU8sTUFBUSxLQUFLLE1BQU07QUFBQTtBQUsxRCx5QkFBeUIsU0FBUztBQUNoQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFjLG1DQUFTLE9BRXRDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxPQUVmLG9DQUFDLFFBQUQsTUFBTywrQkFBVSxtQ0FBUyxrQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLE9BR2Ysb0NBQUMsUUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQ04sR0FBRyx1QkFDRCxJQUFJLG1DQUFTLGdCQUNiLFFBQ0EsT0FBTztBQUFBO0FBQUE7QUFTUCxnQ0FBZ0M7QUFDN0MsUUFBTSxVQUFVLG9DQUFnQjtBQUNoQyxRQUFNLFVBQVU7QUFDaEIsUUFBTSxDQUFDLFFBQVEsYUFBYTtBQUM1QixRQUFNLENBQUMsVUFBVSxlQUFlLDZCQUFTO0FBQ3pDLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLDZCQUFTO0FBQ3JELFFBQU0sQ0FBQyxZQUFZLGlCQUFpQiw2QkFBUztBQUM3QyxTQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsYUFBYSxDQUFDLE9BQU8sT0FBTyxRQUFRO0FBQUEsS0FFcEMsMERBQ0csZ0JBQWdCLFVBQ2pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQTtBQUFBLEtBR2hCLG9DQUFTLGdCQUNSLDBEQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0Isd0JBQ2hDLE9BQ0MsdUJBQU0sSUFBSSxRQUFRLGdCQUNoQix1QkFBTSxJQUFJLFFBQVEscUJBSzFCLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLGtCQUNqQyxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixJQUFHO0FBQUEsS0FFSCxvQ0FBQyxtQkFBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsYUFBYSxnQ0FBVSx1QkFBTSxJQUFJLFFBQVE7QUFBQSxRQUkvQyxvQ0FBQyxPQUFELFFBSUosb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osQ0FBQyxRQUFRLGdCQUNSLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFDUCxRQUFRLE9BQ047QUFBQSxNQUNFLFlBQVksUUFBUTtBQUFBLE1BQ3BCLEtBQUssOEJBQVE7QUFBQSxPQUVmLEVBQUUsUUFBUTtBQUFBLEtBR2YsV0FJRixZQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQTtBQUFBLEtBR2pCLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQ1AsUUFBUSxPQUNOO0FBQUEsTUFDRSxZQUFZLFFBQVE7QUFBQSxPQUV0QixFQUFFLFFBQVE7QUFBQSxLQUdmLG9CQUtILG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFTLE1BQU0sa0JBQWtCLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDekMsV0FBVTtBQUFBLEtBQ1gscUJBS0Ysa0JBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDLE1BQU07QUFDZixVQUNFLDRCQUFNLEVBQUUsT0FBTyxTQUNmLHVCQUFNLElBQUksUUFBUSxpQkFDbEI7QUFDQSxzQkFBYyxFQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsTUFJN0Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsVUFBVSxDQUFDO0FBQUEsSUFDWCxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixjQUFRLE9BQ047QUFBQSxRQUNFLFlBQVksUUFBUTtBQUFBLFFBQ3BCLEtBQUssNEJBQU0sWUFBWTtBQUFBLFNBRXpCLEVBQUUsUUFBUTtBQUVaLGtCQUFZO0FBQUE7QUFBQSxLQUVmLGFBT1Qsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFBQSxLQUVuQyxvQ0FBQywwQkFBRCxVQUtOLG9DQUFDLHVCQUFEO0FBQUE7OztBRXRPVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBMEI7QUFDMUIscUJBTU87QUFHQSxJQUFJLFdBQVMsWUFBWTtBQUM5QixRQUFNLGdCQUFnQixNQUFNO0FBQzVCLFNBQU87QUFBQTtBQUdNLCtCQUErQjtBQUM1QyxNQUFJLENBQUMsY0FBYyxtQkFBbUI7QUFDdEMsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sRUFBRSxjQUFjO0FBRXRCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNO0FBQ2IsZUFBUyxZQUFZO0FBQUE7QUFBQSxJQUV2QixXQUFXLDRCQUNULGFBQWEsSUFBSSxtQkFBbUI7QUFBQSxLQUV2QyxRQUdBLGNBQWMsSUFBSSxDQUFDLFdBQ2xCLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFNBQVMsTUFBTTtBQUNiLHNCQUFnQixFQUFFLGNBQWMsT0FBTztBQUFBO0FBQUEsSUFFekMsV0FBVyw0QkFDVCxhQUFhLElBQUksb0JBQW9CLE9BQU8sT0FDeEMsY0FDQTtBQUFBLEtBR0wsK0JBQVUsT0FBTyxVQUl4QixvQ0FBQyx1QkFBRDtBQUFBOzs7QUNuRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUU7QUFFckUsc0JBQThDO0FBRTlDLHFCQUFvQztBQUNwQyx3Q0FBMEI7QUFFbkIsSUFBSSxXQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLGVBQWUsSUFBSSxhQUFhLElBQUk7QUFDeEMsUUFBTSxZQUFZLE1BQU0sYUFBYTtBQUVyQyxTQUFPO0FBQUE7QUFHRixJQUFJLFVBQVMsT0FBTyxFQUFFLFFBQVEsY0FBYztBQUNqRCxRQUFNLEVBQUUsV0FBVyxTQUFTO0FBRTVCLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxXQUFXLEtBQUssSUFBSTtBQUV4QixRQUFNLHNCQUFzQjtBQUFBLElBQzFCLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQTtBQUVmLFNBQU8sNkJBQVMsWUFBWTtBQUFBO0FBR2YsNEJBQTRCO0FBQ3pDLFFBQU0sRUFBRSxjQUFjO0FBQ3RCLFFBQU0sQ0FBQyxVQUFVLGVBQWUsNkJBQVM7QUFDekMsUUFBTSxDQUFDLFVBQVUsZUFBZSw2QkFBUztBQUN6QyxRQUFNLFlBQVk7QUFDbEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sZ0JBQWdCLCtCQUNwQiw2QkFDRSxXQUNBLENBQUMsYUFDQyxHQUFHLCtCQUFVLFNBQVMsU0FDcEIsc0NBQVUsV0FBVSxJQUFJLCtCQUFVLFNBQVMsY0FBYyxPQUcvRCxDQUFDLE1BQU0sRUFBRSxHQUFHO0FBR2QsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsNkNBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFVBQVU7QUFBQSxJQUNWLFNBQVMsVUFBVSxJQUNqQixDQUFDLGFBQ0MsR0FBRywrQkFBVSxTQUFTLFNBQ3BCLHNDQUFVLFdBQVUsSUFBSSwrQkFBVSxTQUFTLGNBQWM7QUFBQSxJQUcvRCxhQUFZO0FBQUEsSUFDWjtBQUFBLE1BRUYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNO0FBQ2Isa0JBQVk7QUFDWixjQUFRLE9BQ04sRUFBRSxVQUFVLGNBQWMsYUFDMUIsRUFBRSxRQUFRO0FBQUE7QUFBQSxJQUdkLFdBQVU7QUFBQSxJQUNWLFVBQVUsQ0FBQyxZQUFZO0FBQUEsS0FDeEIsU0FJSCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBSSxZQUFZO0FBQUEsS0FDcEIsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQTJCO0FBQUE7OztBQzlFM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbUU7QUFDbkUsc0JBQWtEO0FBQ2xELHFCQUFvQztBQVdwQyxpQkFBOEI7OztBQ2I5QjtBQUFBLGdCQUF3QjtBQUN4QixnQkFBNEI7QUFDNUIscUJBQW9DO0FBQ3BDLHNCQUF5QjtBQUVWLGtCQUFrQixPQUFPO0FBQ3RDLFFBQU0sQ0FBQyxRQUFRLGFBQWEsNkJBQVMsTUFBTTtBQUMzQyxRQUFNLENBQUMsYUFBYSxrQkFBa0IsNkJBQVMsTUFBTTtBQUNyRCxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsNkJBQVMsTUFBTTtBQUNqRCxRQUFNLFdBQVcsOEJBQ2YsQ0FBQyxTQUFRLGNBQWEsWUFBVyxVQUMvQixNQUFNLFdBQVcsU0FBUSxjQUFhLFlBQVcsUUFDbkQsS0FDQTtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBO0FBR2QsZ0NBQVUsTUFBTTtBQUNkLGFBQVMsUUFBUSxhQUFhLFdBQVcsTUFBTTtBQUFBLEtBQzlDLENBQUMsUUFBUSxhQUFhO0FBQ3pCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsaUJBQWlCLFlBQVksWUFBWTtBQUFBO0FBQUEsS0FHM0Msb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsZ0JBQVUsRUFBRSxPQUFPO0FBQUE7QUFBQSxPQUt6QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsTUFBTTtBQUNmLHFCQUFlLE1BQU07QUFDbkIsaUJBQVMsUUFBUSxFQUFFLE9BQU8sT0FBTyxXQUFXLE1BQU07QUFDbEQsZUFBTyxFQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsT0FLeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQUEsS0FFZixvQ0FBQyxtQkFBRDtBQUFBLElBQVMsTUFBTTtBQUFBLFFBR25CLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFNBQVMsTUFBTTtBQUNiLG1CQUFhLENBQUMsYUFBYTtBQUN6QixlQUFPLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFHWixXQUFXLDRCQUNULFlBQVksZUFBZTtBQUFBLEtBRzdCLG9DQUFDLHVCQUFEO0FBQUEsSUFBYSxNQUFNO0FBQUE7QUFBQTs7O0FEN0R0QixJQUFJLFdBQVMsT0FBTyxFQUFFLGFBQWE7QUFoQjFDO0FBaUJFLFFBQU0saUJBQWlCLE1BQU0sdUJBQXVCLE9BQU87QUFDM0QsUUFBTSxTQUFTLHVEQUFpQixPQUFqQixtQkFBcUI7QUFDcEMsTUFBSTtBQUNKLE1BQUksUUFBUTtBQUNWLFVBQU0sT0FBTyxNQUFNLDZCQUE2QjtBQUNoRCx3QkFBb0IsNkJBQU8sTUFDeEIsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUNqQixVQUFVLENBQUMsTUFBTSwyQkFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxjQUM5QztBQUFBO0FBR0wsUUFBTSxlQUFlLDZCQUNuQixnQkFDQSxDQUFDLFFBQ0MsR0FBRywrQkFBVSxJQUFJLGtCQUNmLElBQUksVUFBVSxJQUFJLCtCQUFVLElBQUksY0FBYztBQUdwRCxTQUFPLEVBQUUsY0FBYztBQUFBO0FBR2xCLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFVBQVEsUUFBUTtBQUFBLFNBQ1Q7QUFDSCxVQUFJLEtBQUssSUFBSSxZQUFZLE9BQU87QUFDOUIsY0FBTSxVQUFVO0FBQ2hCO0FBQUE7QUFBQSxTQUVDO0FBQ0gsWUFBTSxPQUFPO0FBQ2I7QUFBQSxTQUNHO0FBQ0gsVUFBSSxLQUFLLElBQUksWUFBWSxZQUFZO0FBQ25DLGNBQU0sMEJBQTBCO0FBQ2hDO0FBQUE7QUFFRixVQUFJLEtBQUssSUFBSSxZQUFZLE9BQU87QUFDOUIsY0FBTSxVQUFVO0FBQ2hCO0FBQUE7QUFBQTtBQUdOLFNBQU87QUFBQTtBQUdNLGlDQUFpQztBQUM5QyxRQUFNLEVBQUUsY0FBYyxzQkFBc0I7QUFDNUMsUUFBTSxDQUFDLFlBQVksaUJBQWlCO0FBQ3BDLFFBQU0sQ0FBQyxvQkFBb0IseUJBQXlCLDZCQUFTO0FBQzdELFFBQU0sRUFBRSxjQUFjO0FBQ3RCLFFBQU0sVUFBVTtBQUVoQixnQ0FBVSxNQUFNLHNCQUFzQixlQUFlLENBQUM7QUFFdEQsUUFBTSxxQkFBcUIsQ0FBQyxlQUFlLFNBQVM7QUF2RXREO0FBd0VJLFVBQU0sYUFBYSxXQUFLLE9BQUwsbUJBQVM7QUFDNUIsUUFBSSxjQUFjLE1BQU07QUFDdEI7QUFBQTtBQUVGLFVBQU0sa0JBQWtCO0FBQUEsTUFDdEIsWUFBWTtBQUFBLE1BQ1o7QUFBQSxNQUNBLHFCQUFxQixLQUFLLEdBQUc7QUFBQTtBQUcvQixVQUFNLGdCQUFnQixDQUFDLFFBQVEsYUFBYSxXQUFXLFVBQ3JELFFBQVEsT0FDTjtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU07QUFBQSxPQUVSLEVBQUUsUUFBUTtBQUdkLFVBQU0sYUFBYSxDQUFDLFVBQVU7QUFDNUIsNEJBQXNCLENBQUMsYUFBYTtBQUNsQyxjQUFNLFdBQVcsbUJBQUs7QUFDdEIsaUJBQVMsaUJBQWlCLFNBQVMsZUFBZSxPQUNoRCxDQUFDLE1BQU0sRUFBRSxXQUFXO0FBRXRCLGVBQU87QUFBQTtBQUVULGNBQVEsT0FDTjtBQUFBLFFBQ0UsWUFBWTtBQUFBLFFBQ1o7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOO0FBQUEsU0FFRixFQUFFLFFBQVE7QUFBQTtBQUlkLFVBQU0sYUFBYSxNQUFNO0FBQ3ZCLDRCQUFzQixDQUFDLGFBQWE7QUFDbEMsY0FBTSxXQUFXLG1CQUFLO0FBQ3RCLGlCQUFTLGlCQUFpQixDQUFDLEdBQUcsU0FBUyxnQkFBZ0I7QUFDdkQsZUFBTztBQUFBO0FBRVQsY0FBUSxPQUFPLGlCQUFpQixFQUFFLFFBQVE7QUFBQTtBQUU1QyxVQUFNLGtCQUFrQixrQkFBa0I7QUFDMUMsV0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FBbUIsZUFBYyxNQUUvQyxtQkFDQyxvQ0FBQyxLQUFELE1BQ0Usb0NBQUMsS0FBRCxNQUFHLFNBQVEsS0FBRSxnQkFBZ0IsUUFBTyxNQUFHLEtBQ3RDLGdCQUFnQixhQUFZLE9BQUksZ0JBQWdCLGFBR3JELG9DQUFDLE1BQUQ7QUFBQSxNQUFJLFdBQVU7QUFBQSxRQUViLEtBQUssSUFBSSxDQUFDLFFBQ1Qsb0NBQUMsVUFBRDtBQUFBLE1BQ0UsS0FBSyxJQUFJO0FBQUEsTUFDVCxPQUFPLElBQUk7QUFBQSxNQUNYLFFBQVEsSUFBSTtBQUFBLE1BQ1osV0FBVyxJQUFJO0FBQUEsTUFDZixhQUFhLElBQUk7QUFBQSxNQUNqQixZQUFZLE1BQU0sV0FBVyxJQUFJO0FBQUEsTUFDakMsWUFBWTtBQUFBLFNBR2hCLG9DQUFDLFdBQUQ7QUFBQSxNQUFTLFdBQVU7QUFBQSxPQUNqQixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxPQUFPLEVBQUUsT0FBTztBQUFBLE9BQ25CLG9DQUFDLFVBQUQ7QUFBQSxNQUNFLFNBQVMsTUFBTTtBQUNiO0FBQUE7QUFBQSxNQUVGLFdBQVU7QUFBQSxPQUNYLFdBS0gsb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVyxHQUNULDBDQUFhLGdCQUFlLFFBQVEsY0FBYztBQUFBLE9BR3BELG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLFVBQUQ7QUFBQSxNQUNFLFdBQVU7QUFBQSxNQUNWLGlCQUFjO0FBQUEsTUFDZCxpQkFBYztBQUFBLE1BQ2QsU0FBUyxNQUNQLGNBQWMsQ0FBQyxNQUFPLGlDQUNqQixJQURpQjtBQUFBLFNBRW5CLGFBQWEsQ0FBRSx5QkFBSSxnQkFBZTtBQUFBO0FBQUEsT0FJdkMsb0NBQUMsMEJBQUQsU0FHSixvQ0FBQyxPQUFEO0FBQUEsTUFDRSxXQUFVO0FBQUEsTUFDVixJQUFHO0FBQUEsTUFDSCxNQUFLO0FBQUEsT0FFTCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxVQUFEO0FBQUEsTUFDRSxXQUFVO0FBQUEsTUFDVixTQUFTLE1BQ1AsUUFBUSxPQUNOLGlDQUFLLGtCQUFMLEVBQXNCLE1BQU0sZUFDNUIsRUFBRSxRQUFRO0FBQUEsT0FHZjtBQUFBO0FBYW5CLFNBQ0UsMERBQ0csT0FBTyxRQUFRLG9CQUFvQixJQUNsQyxDQUFDLENBQUMsZUFBZSxPQUFPLFlBQ3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxLQUFVLG1CQUFtQixlQUFlLFNBRzFELG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMscUJBQUQ7QUFBQSxJQUFNLElBQUksWUFBWTtBQUFBLEtBQ3BCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUE2QztBQUFBOzs7QUV4TnZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWlFO0FBQ2pFLHNCQUEwQjtBQUUxQixxQkFBeUI7QUFHekIscUJBQWtCO0FBRWxCLElBQU0sT0FBTSxRQUFRO0FBQ3BCLHVCQUFNLE9BQU87QUFFTixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFYM0M7QUFZRSxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLE1BQUksU0FBUyxLQUFLLElBQUk7QUFDdEIsTUFBSSxPQUFPLEtBQUssSUFBSTtBQUNwQixNQUFJLFdBQVcsS0FBSyxJQUFJO0FBQ3hCLE1BQUksV0FBVyxLQUFLLElBQUk7QUFDeEIsYUFBVyw0Q0FBVSxrQkFBVixtQkFBeUIsUUFBUSxNQUFNLFNBQVE7QUFDMUQsUUFBTSxrQkFBa0IsTUFBTSxjQUFjO0FBQUEsSUFDMUM7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUdGLFNBQU8sNkJBQVMsWUFBWTtBQUFBO0FBR3ZCLElBQUksV0FBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsUUFBTSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2xDLFFBQU0sWUFBWSxNQUFNLGFBQWE7QUFDckMsU0FBTztBQUFBO0FBR00sOEJBQThCO0FBQzNDLFFBQU0sWUFBWTtBQUNsQixRQUFNLENBQUMsTUFBTSxXQUFXO0FBQ3hCLFFBQU0sQ0FBQyxhQUFhLGtCQUFrQjtBQUV0QyxRQUFNLFNBQVM7QUFDZixTQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFBeUI7QUFBQSxLQUN2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBa0IsdUJBQ2hDLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxRQUFPO0FBQUEsSUFDUCxVQUFVLE9BQU8sVUFBVTtBQUN6QixZQUFNO0FBQ04sWUFBTSxNQUFNLEtBQUs7QUFDakIsWUFBTSxTQUFTLFNBQVMsY0FBYztBQUN0QyxhQUFPLGFBQWEsUUFBUTtBQUM1QixhQUFPLGFBQWEsUUFBUTtBQUM1QixhQUFPLGFBQWEsU0FBUztBQUU3QixZQUFNLFdBQVcsU0FBUyxjQUFjO0FBQ3hDLGVBQVMsYUFBYSxRQUFRO0FBQzlCLGVBQVMsYUFBYSxRQUFRO0FBQzlCLGVBQVMsYUFDUCxTQUNBLDRCQUFNLEdBQUcsTUFBTSxPQUFPLGNBQWMsWUFBWTtBQUdsRCxZQUFNLE9BQU8sU0FBUyxjQUFjO0FBQ3BDLFdBQUssYUFBYSxRQUFRO0FBQzFCLFdBQUssYUFBYSxRQUFRO0FBQzFCLFdBQUssYUFDSCxTQUNBLE1BQU0sT0FBTyxnQkFBZ0IsVUFBVSxLQUNuQyxHQUFHLDRCQUFNLHNCQUFzQixPQUFPLG9CQUN0QyxNQUFNLE9BQU8sZ0JBQWdCO0FBR25DLFlBQU0sT0FBTyxPQUFPO0FBQ3BCLFlBQU0sT0FBTyxPQUFPO0FBQ3BCLFlBQU0sT0FBTyxPQUFPO0FBRXBCLGFBQU8sTUFBTTtBQUFBO0FBQUEsS0FHZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBUSxlQUUzQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFhLEdBQUcsNEJBQU0sc0JBQXNCLE9BQzFDO0FBQUEsU0FPVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBUSxVQUUzQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxjQUFjO0FBQUEsU0FLdEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsY0FFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsVUFBVSxDQUFDLE1BQU07QUFDZixPQUFDLEVBQUUsT0FBTyxRQUNOLGVBQWUsU0FDZixlQUFlO0FBQUE7QUFBQSxJQUVyQixNQUFLO0FBQUEsSUFDTCxjQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsSUFDWCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsTUFFUCxvQ0FBQyxZQUFEO0FBQUEsSUFBVSxJQUFHO0FBQUEsSUFBWSxXQUFVO0FBQUEsS0FDaEMsVUFBVSxJQUFJLENBQUMsU0FDZCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxLQUFLLEtBQUs7QUFBQSxJQUFNLE9BQU8sK0JBQVUsS0FBSztBQUFBLFdBTXhELG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxVQUFVLENBQUM7QUFBQSxLQUNaLGlCQUtMLG9DQUFDLHVCQUFEO0FBQUE7OztBQ3RKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeUI7QUFFbEIsSUFBSSxXQUFTLFlBQVk7QUFDOUIsU0FBTyw2QkFBUztBQUFBO0FBRUgsaUJBQWlCO0FBQzlCLFNBQU87QUFBQTs7O0FDTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF5QjtBQUV6QixpQkFBOEM7QUFDOUMsZ0JBQXlCO0FBQ3pCLGlCQUE2QjtBQUU3QixxQkFBcUI7QUFFTixxQkFBcUI7QUFDbEMsUUFBTSxDQUFDLFFBQVEsYUFBYTtBQUM1QixRQUFNLENBQUMsTUFBTSxXQUFXO0FBRXhCLFNBQ0UsMERBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QjtBQUFBLElBQXNCO0FBQUEsS0FDN0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLE9BRVosb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTyxFQUFFLE9BQU87QUFBQSxLQUVoQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsT0FFWCxPQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFzRCxXQUN6RCxRQUFRLEtBQUssY0FFdkIsb0NBQUMsS0FBRCxPQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixJQUFJLGdCQUFnQjtBQUFBLEtBQ3JCLDZCQUdELG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU0sb0JBQW9CO0FBQUEsS0FDM0Isd0JBR0Qsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTSxrQkFBa0I7QUFBQSxLQUN6Qix1QkFHRCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLG1CQUFtQjtBQUFBLEtBQzFCLHdCQUdELG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU0sc0JBQXNCO0FBQUEsS0FDN0IsK0JBT1Asb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQixzQkFDakMsb0NBQUMsT0FBRCxNQUFLLGlDQUNMLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxlQUFEO0FBQUE7OztBQ3hFaEI7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHVDQUFxQyxVQUFTLEVBQUMsUUFBTyxFQUFDLE1BQUssUUFBTyxZQUFXLFFBQVUsUUFBTyxJQUFHLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJCQUEwQixXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sb0JBQW1CLEVBQUMsTUFBSyxvQkFBbUIsWUFBVyxRQUFPLFFBQU8sYUFBWSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1Q0FBc0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxtQ0FBa0MsRUFBQyxNQUFLLG1DQUFrQyxZQUFXLG9CQUFtQixRQUFPLGtCQUFpQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxzREFBcUQsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHlDQUF3QyxFQUFDLE1BQUsseUNBQXdDLFlBQVcsb0JBQW1CLFFBQU8sd0JBQXVCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDREQUEyRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sNkJBQTRCLEVBQUMsTUFBSyw2QkFBNEIsWUFBVyxvQkFBbUIsUUFBTyxZQUFXLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGdEQUErQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sK0JBQThCLEVBQUMsTUFBSywrQkFBOEIsWUFBVyxvQkFBbUIsUUFBTyxjQUFhLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGtEQUFpRCxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxzQ0FBcUMsRUFBQyxNQUFLLHNDQUFxQyxZQUFXLG9CQUFtQixRQUFPLHFCQUFvQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx5REFBd0QsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHNDQUFxQyxFQUFDLE1BQUssc0NBQXFDLFlBQVcsb0JBQW1CLFFBQU8scUJBQW9CLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHlEQUF3RCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxlQUFjLEVBQUMsTUFBSyxlQUFjLFlBQVcsUUFBTyxRQUFPLFFBQU8sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0NBQWlDLFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG9CQUFtQixFQUFDLE1BQUssb0JBQW1CLFlBQVcsUUFBTyxRQUFPLGFBQVksU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsdUNBQXNDLFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0NBQStCLEVBQUMsTUFBSyxnQ0FBK0IsWUFBVyxRQUFPLFFBQU8seUJBQXdCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1EQUFrRCxXQUFVLENBQUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sdUJBQXNCLEVBQUMsTUFBSyx1QkFBc0IsWUFBVyxRQUFPLFFBQU8sZ0JBQWUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMENBQXlDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywyQkFBMEIsRUFBQyxNQUFLLDJCQUEwQixZQUFXLHVCQUFzQixRQUFPLE9BQU0sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsOENBQTZDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywrQkFBOEIsRUFBQyxNQUFLLCtCQUE4QixZQUFXLHVCQUFzQixRQUFPLFdBQVUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0RBQWlELFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG9DQUFtQyxFQUFDLE1BQUssb0NBQW1DLFlBQVcsK0JBQThCLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1REFBc0QsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0JBQWlCLEVBQUMsTUFBSyxrQkFBaUIsWUFBVyxRQUFPLFFBQU8sV0FBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxxQ0FBb0MsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDZCQUE0QixFQUFDLE1BQUssNkJBQTRCLFlBQVcsa0JBQWlCLFFBQU8sY0FBYSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxnREFBK0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saURBQWdELEVBQUMsTUFBSyxpREFBZ0QsWUFBVyw2QkFBNEIsUUFBTyxRQUFVLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG9FQUFtRSxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyw2REFBNEQsRUFBQyxNQUFLLDZEQUE0RCxZQUFXLGlEQUFnRCxRQUFPLGVBQWMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsZ0ZBQStFLFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sOENBQTZDLEVBQUMsTUFBSyw4Q0FBNkMsWUFBVyw2QkFBNEIsUUFBTyxvQkFBbUIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsaUVBQWdFLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxtQkFBa0IsRUFBQyxNQUFLLG1CQUFrQixZQUFXLFFBQU8sUUFBTyxZQUFXLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNDQUFxQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0F6QzBCeHRSLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQ0FBZ0M7QUFBQSxJQUM1QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHVCQUF1QjtBQUFBLElBQ25CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosK0JBQStCO0FBQUEsSUFDM0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixvQ0FBb0M7QUFBQSxJQUNoQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDJCQUEyQjtBQUFBLElBQ3ZCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5Q0FBeUM7QUFBQSxJQUNyQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNDQUFzQztBQUFBLElBQ2xDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0NBQXNDO0FBQUEsSUFDbEMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixtQ0FBbUM7QUFBQSxJQUMvQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLCtCQUErQjtBQUFBLElBQzNCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixvQkFBb0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpREFBaUQ7QUFBQSxJQUM3QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZEQUE2RDtBQUFBLElBQ3pELElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosOENBQThDO0FBQUEsSUFDMUMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
