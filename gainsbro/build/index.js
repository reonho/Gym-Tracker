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
var import_framer_motion = require("framer-motion");
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
  })), /* @__PURE__ */ React.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
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
var import_framer_motion2 = require("framer-motion");

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
  }, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
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
  }, "Log Measurement")))))), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
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
var import_framer_motion3 = require("framer-motion");
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
  }, /* @__PURE__ */ React.createElement(import_framer_motion3.motion.div, {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
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
  }, /* @__PURE__ */ React.createElement(import_remix9.Outlet, null)))))))));
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
var import_dayjs7 = __toESM(require("dayjs"));
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
async function getWorkoutsForUser(userId, startDate, endDate) {
  if (startDate && endDate) {
    const { data } = await supabase_default.from("workouts_with_location").select("*").eq("user_id", userId).gte("datetime_start", (0, import_dayjs7.default)(startDate)).lte("datetime_start", (0, import_dayjs7.default)(endDate));
    const workouts = data;
    return workouts.sort((a, b) => new Date(b.datetime_start) - new Date(a.datetime_start));
  } else {
    const { data } = await supabase_default.from("workouts_with_location").select("*").eq("user_id", userId);
    const workouts = data;
    return workouts.sort((a, b) => new Date(b.datetime_start) - new Date(a.datetime_start));
  }
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
var import_dayjs8 = __toESM(require("dayjs"));

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
  workouts = (0, import_lodash11.default)(workouts).groupBy((w) => `${(0, import_dayjs8.default)(w.datetime_start).year()} Week ${String(getWeekNumber(new Date(w.datetime_start))).padStart(2, "0")}`).mapValues((e) => e.length).value();
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
var import_dayjs9 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs9.default.extend(weekOfYear4);
var loader10 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs9.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
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
var import_dayjs10 = __toESM(require("dayjs"));
var weekOfYear5 = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
import_dayjs10.default.extend(weekOfYear5);
import_dayjs10.default.extend(utc);
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
  const weekStartingOnDay = (0, import_dayjs10.default)(getDateOfISOWeek(week, year));
  const submit = (0, import_remix15.useSubmit)();
  const workouts = (0, import_lodash15.default)(workoutData).groupBy((w) => import_dayjs10.default.utc(w.datetime_start).local().format("dddd")).mapValues((v) => (0, import_lodash15.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length).value()).value();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, new Date(weekStartingOnDay).toDateString()), " -", " ", /* @__PURE__ */ React.createElement("b", null, new Date(weekStartingOnDay.add(6, "day")).toDateString()), " "), /* @__PURE__ */ React.createElement("div", {
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
var import_lodash17 = require("lodash");
var import_react15 = require("react");

// app/components/LocationPie.js
init_react();
var import_react14 = require("react");
var import_auto6 = __toESM(require("chart.js/auto"));
var import_lodash16 = require("lodash");
function LocationPie(props) {
  const [ctx, setCtx] = (0, import_react14.useState)(null);
  (0, import_react14.useEffect)(() => {
    let chartStatus = import_auto6.default.getChart("locationPie");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    if (Object.keys(props.locations).length === 0) {
      return;
    }
    setCtx(document.getElementById("locationPie"));
    const locationPie = new import_auto6.default(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(props.locations).map((value) => (0, import_lodash16.startCase)(value)),
        datasets: [
          {
            label: "Weight",
            data: Object.values(props.locations),
            borderRadius: 5,
            backgroundColor: Object.keys(props.locations).map((e) => {
              return `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},0.4)`;
            })
          }
        ]
      },
      options: {
        indexAxis: "y"
      }
    });
    return () => {
      locationPie.destroy();
    };
  }, [props]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "locationPie"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.jsx
var import_dayjs11 = __toESM(require("dayjs"));
var import_framer_motion4 = require("framer-motion");
var loader12 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const twoMonthsAgo = (0, import_dayjs11.default)().add(-60, "day").startOf("day");
  const today = (0, import_dayjs11.default)().endOf("day");
  const locations = await getLocations(user);
  const workoutsForUser = await getWorkoutsForUser(user, twoMonthsAgo, today);
  return [
    locations,
    (0, import_lodash17.mapValues)((0, import_lodash17.groupBy)(workoutsForUser, "location_name"), (e) => e.length)
  ];
};
var action5 = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};
function ManageLocationsRoute() {
  const [locations, workoutsForUser] = (0, import_remix16.useLoaderData)();
  const [user, setUser] = (0, import_react15.useState)();
  const [searchParams] = (0, import_remix16.useSearchParams)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser,
    idPredicate: (id) => id === searchParams.get("user")
  }, /* @__PURE__ */ React.createElement(import_framer_motion4.motion.div, {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Locations"), workoutsForUser && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-5"
  }, "Breakdown last 60 days"), /* @__PURE__ */ React.createElement("div", {
    className: "container",
    style: { width: "20rem" }
  }, /* @__PURE__ */ React.createElement(LocationPie, {
    locations: workoutsForUser
  }))), /* @__PURE__ */ React.createElement("hr", {
    className: "dropdown-divider"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "title is-5"
  }, "Add Location"), /* @__PURE__ */ React.createElement("form", {
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
  }, "Add")), /* @__PURE__ */ React.createElement("div", {
    className: "title is-5 "
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix16.Link, {
    key: e.id,
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box mb-3"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash17.startCase)(e.name)))))))));
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
var import_lodash18 = require("lodash");
var import_framer_motion5 = require("framer-motion");
var import_dayjs12 = __toESM(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs12.default.extend(utc2);
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
  }, /* @__PURE__ */ React.createElement(import_framer_motion5.motion.div, {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
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
  }, import_dayjs12.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs12.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash18.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
    size: 40,
    className: "m-4 p-1"
  }) : /* @__PURE__ */ React.createElement(import_bs.BsClockHistory, {
    size: 40,
    className: "m-4 p-1"
  }))))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout.jsx
var workout_exports = {};
__export(workout_exports, {
  default: () => NewWorkoutRoute
});
init_react();
var import_remix18 = __toESM(require_remix());
var import_framer_motion6 = require("framer-motion");
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_framer_motion6.motion.div, {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, rotate: 10 },
    transition: { duration: 0.2 }
  }, /* @__PURE__ */ React.createElement(import_remix18.Outlet, null))));
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
var import_lodash19 = require("lodash");
var import_react17 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react16 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react16.useState)(0);
  const [start, setStart] = (0, import_react16.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react16.useState)(props.running);
  (0, import_react16.useEffect)(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(new Date() - start);
      }, 1e3);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react16.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react16.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react16.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var import_dayjs13 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc3 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs13.default.extend(utc3);
import_dayjs13.default.extend(relativeTime);
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
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash19.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-alarm"
  })), /* @__PURE__ */ React.createElement("span", {
    id: "start"
  }, `${import_dayjs13.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix19.useLoaderData)()[0];
  const fetcher = (0, import_remix19.useFetcher)();
  const [userId, setUserId] = (0, import_react17.useState)();
  const [showMenu, setShowMenu] = (0, import_react17.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react17.useState)(false);
  const [customDate, setCustomDate] = (0, import_react17.useState)(null);
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
  }, "Workout Completed. "), toTime(import_dayjs13.default.utc(workout.datetime_end) - import_dayjs13.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: import_dayjs13.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs13.default)().utc()
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
      if ((0, import_dayjs13.default)(e.target.value) > import_dayjs13.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-small is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs13.default)(customDate).utc()
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
var import_lodash20 = require("lodash");
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
  }, (0, import_lodash20.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix20.Outlet, null)));
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
var import_lodash21 = require("lodash");
var import_react18 = require("react");
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
  const [selected, setSelected] = (0, import_react18.useState)([]);
  const [disabled, setDisabled] = (0, import_react18.useState)(false);
  const exercises = (0, import_remix21.useLoaderData)();
  const fetcher = (0, import_remix21.useFetcher)();
  const exNameToIdMap = (0, import_lodash21.mapValues)((0, import_lodash21.groupBy)(exercises, (exercise) => `${(0, import_lodash21.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash21.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_bootstrap_typeahead2.Typeahead, {
    id: "exercise_options",
    onChange: setSelected,
    options: exercises.map((exercise) => `${(0, import_lodash21.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash21.startCase)(exercise.variant)})` : ""}`),
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
var import_lodash23 = __toESM(require("lodash"));
var import_react20 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react19 = require("react");
var import_lodash22 = require("lodash");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react19.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react19.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react19.useState)(props.completed);
  const [deleting, setDeleting] = (0, import_react19.useState)(false);
  const updateDb = (0, import_lodash22.debounce)((weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index), 200, {
    leading: true,
    trailing: true
  });
  (0, import_react19.useEffect)(() => {
    !(!weight && !repetitions && !completed) ? updateDb(weight, repetitions, completed, props.index) : null;
  }, [weight, repetitions, completed]);
  return !deleting ? /* @__PURE__ */ React.createElement("div", {
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
      setRepetitions(e.target.value);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-1"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-danger is-light is-small",
    onClick: () => {
      setDeleting(true);
      props.deleteFunc();
    }
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
  })))) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\currentExercises.jsx
var import_framer_motion7 = require("framer-motion");
var loader17 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash23.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash23.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash23.groupBy)(setsForWorkout, (set) => `${(0, import_lodash23.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash23.startCase)(set.variant)})` : ""}`);
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
      return await addSet(form);
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
  const [showDelete, setShowDelete] = (0, import_react20.useState)();
  const { workoutId } = (0, import_remix22.useParams)();
  const fetcher = (0, import_remix22.useFetcher)();
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
      exercise_name,
      workout_id: workoutId,
      repetitions,
      weight,
      index,
      completed,
      type: "set"
    }, { method: "PUT" });
    const deleteFunc = (index) => {
      fetcher.submit({
        workout_id: workoutId,
        exercise_name,
        type: "set",
        index
      }, { method: "DELETE" });
    };
    const submitFunc = () => {
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
    })), fetcher.submission && fetcher.submission.formData.get("exercise_name") === exercise_name && fetcher.submission.method === "POST" ? /* @__PURE__ */ React.createElement(import_framer_motion7.motion.div, {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 }
    }, /* @__PURE__ */ React.createElement(SetInput, {
      weight: fetcher.submission.formData.get("weight"),
      repetitions: fetcher.submission.formData.get("repetitions"),
      index: fetcher.submission.formData.get("index"),
      deleteFunc: () => deleteFunc(fetcher.submission.formData.get("index")),
      submitFunc: submitSetForm
    })) : null, /* @__PURE__ */ React.createElement("buttons", {
      className: "level is-mobile mt-5"
    }, /* @__PURE__ */ React.createElement("div", {
      style: { width: "85%" }
    }, /* @__PURE__ */ React.createElement("button", {
      disabled: fetcher.submission && fetcher.submission.formData.get("exercise_name") === exercise_name && fetcher.submission.method === "POST",
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.entries(exerciseSets).map(([exercise_name, sets], exIndex) => /* @__PURE__ */ React.createElement("div", {
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
var import_lodash24 = require("lodash");
var import_react21 = require("react");
var import_dayjs14 = __toESM(require("dayjs"));
var import_framer_motion8 = require("framer-motion");
var utc4 = require("dayjs/plugin/utc");
import_dayjs14.default.extend(utc4);
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
  const [user, setUser] = (0, import_react21.useState)();
  const [hasLocation, setHasLocation] = (0, import_react21.useState)();
  const submit = (0, import_remix23.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement(import_framer_motion8.motion.div, {
    initial: { opacity: 0.2, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.5 },
    className: "w-full h-full md:col-span-3 sm:overflow-auto relative z-0"
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
      datetime.setAttribute("value", (0, import_dayjs14.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs14.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
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
    placeholder: `${(0, import_dayjs14.default)(getCurrentDateTime()).format("dddd")} workout`
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
    value: (0, import_lodash24.startCase)(item.name)
  })))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("button", {
    className: "button is-dark ",
    type: "submit",
    disabled: !hasLocation
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix23.Outlet, null))));
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
var import_react22 = require("react");
var import_framer_motion9 = require("framer-motion");
var import_remix25 = __toESM(require_remix());
function HomeRoute() {
  const [userId, setUserId] = (0, import_react22.useState)();
  const [user, setUser] = (0, import_react22.useState)();
  return /* @__PURE__ */ React.createElement(import_framer_motion9.motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  }, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
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
var assets_manifest_default = { "version": "c79faef7", "entry": { "module": "/build/entry.client-OMPFFD2P.js", "imports": ["/build/_shared/chunk-KQEDD3AW.js", "/build/_shared/chunk-CFWPAYJG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DJO4MUGD.js", "imports": ["/build/_shared/chunk-TSFWPY4U.js", "/build/_shared/chunk-KI6TQ5CA.js", "/build/_shared/chunk-PRTN2AQO.js", "/build/_shared/chunk-7DB4L3ZX.js", "/build/_shared/chunk-WKBQYEIC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-MNJVC6DE.js", "imports": ["/build/_shared/chunk-FUUY7UL6.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-37SN5KT3.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-TIRFUG3W.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-5FNJCNPP.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-6X2DTFL3.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-ROIHQYLV.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-YQBMPS4D.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-HE4337IM.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-JPQSTLHP.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-37SN5KT3.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-QW3SNOE6.js", "imports": ["/build/_shared/chunk-ELIQRMYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-6HNEJ6AL.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-2DFJ7UFC.js", "imports": ["/build/_shared/chunk-IR65SEW6.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-MIBONZQO.js", "imports": ["/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements": { "id": "routes/measurements", "parentId": "root", "path": "measurements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements-3QYBLNHH.js", "imports": ["/build/_shared/chunk-ELIQRMYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/add": { "id": "routes/measurements/add", "parentId": "routes/measurements", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/add-UFIGINPW.js", "imports": ["/build/_shared/chunk-7ZURM6ML.js", "/build/_shared/chunk-37SN5KT3.js", "/build/_shared/chunk-WKBQYEIC.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history": { "id": "routes/measurements/history", "parentId": "routes/measurements", "path": "history", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history-A632RG6B.js", "imports": ["/build/_shared/chunk-IR65SEW6.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history/edit": { "id": "routes/measurements/history/edit", "parentId": "routes/measurements/history", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history/edit-EPUQYGDX.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-DCHCXPZ3.js", "imports": ["/build/_shared/chunk-ELIQRMYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-MHV2KMPY.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js", "/build/_shared/chunk-KI6TQ5CA.js", "/build/_shared/chunk-PRTN2AQO.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-37SN5KT3.js", "/build/_shared/chunk-WKBQYEIC.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-6RRRHDZQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-5EYRWVZ4.js", "imports": ["/build/_shared/chunk-7ZURM6ML.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-ELIBRD77.js", "imports": ["/build/_shared/chunk-7DB4L3ZX.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-VYC7MFIV.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C79FAEF7.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxtZWFzdXJlbWVudHNcXGhpc3RvcnkuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL01lYXN1cmVtZW50UHJvZ3Jlc3MuanMiLCAiLi4vYXBwL3NlcnZpY2UvbWVhc3VyZW1lbnRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbWVhc3VyZW1lbnRzXFxoaXN0b3J5XFxlZGl0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50c1xcYWRkLmpzeCIsICIuLi9hcHAvdXRpbHMvdXRpbHMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3MuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3giLCAiLi4vYXBwL3NlcnZpY2UvZXhlcmNpc2VzLmpzIiwgIi4uL2FwcC9zZXJ2aWNlL3NldHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcdHJhaW5lZC10aGlzLXdlZWsuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0cy5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcd29ya291dHMtcGVyLXdlZWsuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL3dvcmtvdXRzLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vlay5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xccGVyc29uYWwtYmVzdHMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvbmFsQmVzdC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc3RhdGlzdGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHNjaGVkdWxlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGxvY2F0aW9ucy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTG9jYXRpb25QaWUuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0cy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudFxcYWRkRXhlcmNpc2UuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcY3VycmVudEV4ZXJjaXNlcy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2V0SW5wdXQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxjcmVhdGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaG9tZS5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcaGlzdG9yeS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXG1lYXN1cmVtZW50c1xcXFxoaXN0b3J5XFxcXGVkaXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcYWRkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHRyYWluZWQtdGhpcy13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHdvcmtvdXRzLXBlci13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc3RhdGlzdGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc2NoZWR1bGUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWFzdXJlbWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJoaXN0b3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnlcIixcbiAgICAgIHBhdGg6IFwiZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJhZGRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic3RhdGlzdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInNjaGVkdWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMVxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSBcIn4vY29tcG9uZW50cy9GaXJlYmFzZUxvZ2luLmpzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIkdhaW5zQnJvXCIgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpcmViYXNlQ29uZmlnOiB7XHJcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSF9ET01BSU4sXHJcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUFJPSkVDVF9JRCxcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuU1RPUkFHRV9CVUNLRVQsXHJcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5NU0dfU0VOREVSX0lELFxyXG4gICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lELFxyXG4gICAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5NRUFTVVJFTUVOVF9JRCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcih7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtYmxhY2sgcC0wIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGlzLXNpemUtNSBzb3JhRm9udFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nzcy5nZy9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2Nzcy9UeXBlYWhlYWQuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kYXRlcGlja2VyLzIuMTQuMS9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvcmE6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtyZXF1aXJlKFwiLi4vYXNzZXRzL2xvZ28ucG5nXCIpfT48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3NcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE5hdkJhcj5cclxuICAgICAgICAgIDxGaXJlYmFzZUxvZ2luIGFwcD17YXBwfSAvPlxyXG4gICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWRFeHBhbmRNb3JlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUxvZ2luKHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChwcm9wcy5hcHApO1xyXG5cclxuICBmdW5jdGlvbiBnb29nbGVMb2dpbigpIHtcclxuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gIH1cclxuXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29vZ2xlTG9naW59IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1ibGFjayBzb3JhRm9udFwiPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRyb3Bkb3duICR7ZHJvcGRvd25BY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wZG93bkFjdGl2ZSgoYWN0aXZlU3RhdGUpID0+ICFhY3RpdmVTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPE1kRXhwYW5kTW9yZSBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VQYXJhbXMsIHVzZUxvYWRlckRhdGEsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWFwVmFsdWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFdvcmtvdXRzUGVyTG9jYXRpb24sXHJcbiAgZGVsZXRlTG9jYXRpb24sXHJcbiAgcmVuYW1lTG9jYXRpb24sXHJcbn0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3b3Jrb3V0c0F0TG9jYXRpb24gPSBhd2FpdCBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpO1xyXG5cclxuICBjb25zdCBnZXROYW1lRnJvbUlkID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5uYW1lXHJcbiAgKTtcclxuICBjb25zdCB3b3Jrb3V0c1BlckxvY2F0aW9uID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5jb3VudCA/PyAwXHJcbiAgKTtcclxuICByZXR1cm4gW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgY29uc3QgbG9jYXRpb25JZCA9IGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpO1xyXG5cclxuICAgIGF3YWl0IHJlbmFtZUxvY2F0aW9uKFxyXG4gICAgICBsb2NhdGlvbklkLFxyXG4gICAgICBsb2NhdGlvbk5hbWUucmVwbGFjZSgvIC9nLCBcIl9cIikudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAvLyBERUxFVEVcclxuICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBkZWxldGVMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uSWRcIikpO1xyXG4gICAgaWYgKGRlbGV0ZWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGRlbGV0ZWQ/LlswXT8udXNlcl9pZDtcclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KHVzZXIgPyBgL2xvY2F0aW9ucz91c2VyPSR7dXNlcn1gIDogXCIvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gXCJTdWNjZXNzXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvblJvdXRlKCkge1xyXG4gIGNvbnN0IHsgbG9jYXRpb25JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3Nob3dJbnB1dCwgc2V0U2hvd0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuYW1lSW5wdXQsIHNldFJlbmFtZUlucHV0XSA9IHVzZVN0YXRlKFxyXG4gICAgc3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdID8/IG51bGwpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIGNvbnRhaW5lciBib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPlxyXG4gICAgICAgICAge3N0YXJ0Q2FzZShnZXROYW1lRnJvbUlkW1wiXCIgKyBsb2NhdGlvbklkXSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGk+e2dldE5hbWVGcm9tSWRbbG9jYXRpb25JZF19PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgTnVtYmVyIG9mIHdvcmtvdXRzOiB7d29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gPz8gMH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAge3Nob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlbmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVuYW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGxvY2F0aW9uSWQ6IGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZTogcmVuYW1lSW5wdXQgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFNob3dJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGxldmVsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0lucHV0KChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZW5hbWVcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7IXdvcmtvdXRzUGVyTG9jYXRpb25bXCJcIiArIGxvY2F0aW9uSWRdICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbnModXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c19wZXJfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGxvY2F0aW9uSWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUxvY2F0aW9uKGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAudXBkYXRlKHsgbmFtZTogbG9jYXRpb25OYW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZExvY2F0aW9uKGxvY2F0aW9uTmFtZSwgdXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5pbnNlcnQoeyBuYW1lOiBsb2NhdGlvbk5hbWUsIHVzZXJfaWQ6IHVzZXJJZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxubGV0IHN1cGFiYXNlO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5zdXBhYmFzZSkge1xyXG4gICAgZ2xvYmFsLnN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG4gIH1cclxuICBzdXBhYmFzZSA9IGdsb2JhbC5zdXBhYmFzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XHJcbiIsICJpbXBvcnQgeyBMaW5rLCBPdXRsZXQsIHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzXCIpIHtcclxuICAgICAgbmF2aWdhdGUoYC9tZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0xYCk7XHJcbiAgICB9XHJcbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgdXNlcklkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yIG10LTVcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Cb2R5IE1lYXN1cmVtZW50czwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9tZWFzdXJlbWVudHMvaGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89e2AvbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke3VzZXJJZH0mbWVhc3VyZW1lbnRfaWQ9MWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZWNvcmRzXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzL2FkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21lYXN1cmVtZW50cy9hZGQ/dXNlcj0ke3VzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICBMb2cgTWVhc3VyZW1lbnRcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQXV0aG9yaXNlZENvbXBvbmVudChwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlciA9PT0gbnVsbCkge1xyXG4gICAgICBuYXZpZ2F0ZShcIi9cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBsZXQgXyA9IHByb3BzLnNldFVzZXIgPyBwcm9wcy5zZXRVc2VyKHVzZXIpIDogbnVsbDtcclxuICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcblxyXG4gICAgICBpZiAocHJvcHMuaWRQcmVkaWNhdGUgJiYgIXByb3BzLmlkUHJlZGljYXRlKHVpZCkpIHtcclxuICAgICAgICBuYXZpZ2F0ZShcIi9ob21lXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBfID0gcHJvcHMuc2V0VXNlcklkID8gcHJvcHMuc2V0VXNlcklkKHVpZCkgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIDw+e3Byb3BzLmNoaWxkcmVufTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBMaW5rLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZUxvY2F0aW9uLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxuICB1c2VTdWJtaXQsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBNZWFzdXJlbWVudFByb2dyZXNzIGZyb20gXCJ+L2NvbXBvbmVudHMvTWVhc3VyZW1lbnRQcm9ncmVzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldE1lYXN1cmVtZW50VHlwZXMsXHJcbiAgZ2V0TWVhc3VyZW1lbnRIaXN0b3J5LFxyXG59IGZyb20gXCJ+L3NlcnZpY2UvbWVhc3VyZW1lbnRzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBnZXRNZWFzdXJlbWVudFR5cGVzKCk7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCBtZWFzdXJlbWVudElkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJtZWFzdXJlbWVudF9pZFwiKTtcclxuXHJcbiAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IGdldE1lYXN1cmVtZW50SGlzdG9yeShtZWFzdXJlbWVudElkLCB1c2VyKTtcclxuICByZXR1cm4gW21ldHJpY3MsIGhpc3Rvcnkuc29ydCgoYSwgYikgPT4gLWRheWpzKGEuZGF0ZSkgKyBkYXlqcyhiLmRhdGUpKV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFzdXJlbWVudEhpc3RvcnlSb3V0ZSgpIHtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBbbWV0cmljcywgaGlzdG9yeV0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIik7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJtZWFzdXJlbWVudF9pZFwiKTtcclxuICBjb25zdCBtZXRyaWNOYW1lID0gc3RhcnRDYXNlKFxyXG4gICAgbWV0cmljcy5maWx0ZXIoXHJcbiAgICAgIChlKSA9PiBlLmlkID09PSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KFwibWVhc3VyZW1lbnRfaWRcIikpXHJcbiAgICApPy5bMF0/Lm1lYXN1cmVtZW50XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm1lYXN1cmVtZW50X2lkXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwibWVhc3VyZW1lbnRfaWRcIikgPz8gMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50X2lkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWV0cmljcy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZS5pZH0gdmFsdWU9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAge3N0YXJ0Q2FzZShlW1wibWVhc3VyZW1lbnRcIl0pfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICB7aGlzdG9yeS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPk5vIE1lYXN1cmVtZW50czwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvbWVhc3VyZW1lbnRzL2hpc3RvcnkvZWRpdFwiICYmIChcclxuICAgICAgICAgICAgPE1lYXN1cmVtZW50UHJvZ3Jlc3MgaGlzdG9yeT17aGlzdG9yeX0gbmFtZT17bWV0cmljTmFtZX0gLz5cclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXRcIiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7aGlzdG9yeS5tYXAoKGgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBtLTEgYm94XCJcclxuICAgICAgICAgICAgICAgIGtleT17aC5pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1tZWRpdW0gaXMtbGlnaHQgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXlqcyhoLmRhdGUpLmZvcm1hdChcIkREL01NL1lZWVlcIil9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbGlnaHQgaXMtbWVkaXVtXCI+e2gudmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICB0bz17YC9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0P3VzZXI9JHt1c2VySWR9Jm1lYXN1cmVtZW50X2lkPSR7bWVhc3VyZW1lbnRJZH0maWQ9JHtoLmlkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gaXMtc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuXHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVhc3VyZW1lbnRQcm9ncmVzcyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjaHJvbm9sb2dpY2FsUHJvZ3Jlc3MgPSBzb3J0QnkocHJvcHMuaGlzdG9yeSwgKGUpID0+IGRheWpzKGUuZGF0ZSkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY29sb3IgPSBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgfSwwLjMpYDtcclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVtZW50UHJvZ3Jlc3NcIikpO1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJtZWFzdXJlbWVudFByb2dyZXNzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGNocm9ub2xvZ2ljYWxQcm9ncmVzcy5tYXAoKGUpID0+XHJcbiAgICAgICAgICBkYXlqcyhlLmRhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIilcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBwcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICBkYXRhOiBjaHJvbm9sb2dpY2FsUHJvZ3Jlc3MubWFwKChlKSA9PiBlLnZhbHVlKSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBwbHVnaW5zOiB7fSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbWVhc3VyZW1lbnRDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwibWVhc3VyZW1lbnRQcm9ncmVzc1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhc3VyZW1lbnRUeXBlcygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwibWVhc3VyZW1lbnRzXCIpLnNlbGVjdChcIipcIik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTWVhc3VyZW1lbnQobWVhc3VyZW1lbnRfaWQsIHZhbHVlLCB1c2VyLCBkYXRlKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIikuaW5zZXJ0KHtcclxuICAgIG1lYXN1cmVtZW50OiBtZWFzdXJlbWVudF9pZCxcclxuICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgIHVzZXJfaWQ6IHVzZXIsXHJcbiAgICBkYXRlOiBkYXRlLFxyXG4gIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVhc3VyZW1lbnRIaXN0b3J5KG1lYXN1cmVtZW50X2lkLCB1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwidXNlcl9tZWFzdXJlbWVudFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcilcclxuICAgIC5lcShcIm1lYXN1cmVtZW50XCIsIG1lYXN1cmVtZW50X2lkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50RnJvbUlkKGlkLCB1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwidXNlcl9tZWFzdXJlbWVudFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcilcclxuICAgIC5lcShcImlkXCIsIGlkKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlZGl0TWVhc3VyZW1lbnQob2xkTWVhc3VyZW1lbnQsIG5ld01lYXN1cmVtZW50KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwidXNlcl9tZWFzdXJlbWVudFwiKVxyXG4gICAgLnVwZGF0ZShuZXdNZWFzdXJlbWVudClcclxuICAgIC5tYXRjaChvbGRNZWFzdXJlbWVudCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVhc3VyZW1lbnQob2xkTWVhc3VyZW1lbnQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ1c2VyX21lYXN1cmVtZW50XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaChvbGRNZWFzdXJlbWVudCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIExpbmssXHJcbiAgcmVkaXJlY3QsXHJcbiAgdXNlRmV0Y2hlcixcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICBnZXRNZWFzdXJlbWVudEZyb21JZCxcclxuICBlZGl0TWVhc3VyZW1lbnQsXHJcbiAgZGVsZXRlTWVhc3VyZW1lbnQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9tZWFzdXJlbWVudHMuanNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IGlkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gZ2V0TWVhc3VyZW1lbnRGcm9tSWQoaWQsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gbWVhc3VyZW1lbnQ7XHJcbn07XHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBvbGRNZWFzdXJlbWVudCA9IEpTT04ucGFyc2UoZm9ybS5nZXQoXCJvbGRNZWFzdXJlbWVudFwiKSk7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IG9sZE1lYXN1cmVtZW50Lm1lYXN1cmVtZW50O1xyXG4gIGNvbnN0IHVzZXIgPSBvbGRNZWFzdXJlbWVudC51c2VyX2lkO1xyXG5cclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIGF3YWl0IGRlbGV0ZU1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbmV3TWVhc3VyZW1lbnQgPSB7XHJcbiAgICAgIC4uLm9sZE1lYXN1cmVtZW50LFxyXG4gICAgICB2YWx1ZTogZm9ybS5nZXQoXCJtZWFzdXJlbWVudFZhbHVlXCIpLFxyXG4gICAgICBkYXRlOiBmb3JtLmdldChcImRhdGVcIiksXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgZWRpdE1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50LCBuZXdNZWFzdXJlbWVudCk7XHJcbiAgfVxyXG4gIHJldHVybiByZWRpcmVjdChcclxuICAgIGAvbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke3VzZXJ9Jm1lYXN1cmVtZW50X2lkPSR7bWVhc3VyZW1lbnRJZH1gXHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdE1lYXN1cmVtZW50Um91dGUoKSB7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBbbWVhc3VyZW1lbnRWYWx1ZSwgc2V0TWVhc3VyZW1lbnRWYWx1ZV0gPSB1c2VTdGF0ZShcclxuICAgIG1lYXN1cmVtZW50WzBdLnZhbHVlXHJcbiAgKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShtZWFzdXJlbWVudFswXS5kYXRlKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXIgXCI+XHJcbiAgICAgICAgICBFZGl0IFJlY29yZFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgdG89e2AvbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXRBbGwoXHJcbiAgICAgICAgICAgICAgXCJ1c2VyXCJcclxuICAgICAgICAgICAgKX0mbWVhc3VyZW1lbnRfaWQ9JHtzZWFyY2hQYXJhbXMuZ2V0QWxsKFwibWVhc3VyZW1lbnRfaWRcIil9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiIGFyaWEtbGFiZWw9XCJkZWxldGVcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Yj5WYWx1ZTwvYj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgbWItMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lYXN1cmVtZW50VmFsdWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZWFzdXJlbWVudFZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVhc3VyZW1lbnRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxiPkRhdGU8L2I+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgbWItNVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbXItMSBpcy1saWdodCBpcy1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZE1lYXN1cmVtZW50OiBKU09OLnN0cmluZ2lmeShtZWFzdXJlbWVudFswXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRWYWx1ZTogbWVhc3VyZW1lbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1yLTEgaXMtbGlnaHQgaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgeyBvbGRNZWFzdXJlbWVudDogSlNPTi5zdHJpbmdpZnkobWVhc3VyZW1lbnRbMF0pIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVN1Ym1pdCwgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldE1lYXN1cmVtZW50VHlwZXMsIGFkZE1lYXN1cmVtZW50IH0gZnJvbSBcIn4vc2VydmljZS9tZWFzdXJlbWVudHMuanNcIjtcclxuXHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZFwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZVRpbWUgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBnZXRNZWFzdXJlbWVudFR5cGVzKCk7XHJcbiAgcmV0dXJuIG1ldHJpY3M7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgYXdhaXQgYWRkTWVhc3VyZW1lbnQoXHJcbiAgICBmb3JtLmdldChcIm1ldHJpY1wiKSxcclxuICAgIGZvcm0uZ2V0KFwidmFsdWVcIiksXHJcbiAgICBmb3JtLmdldChcInVzZXJcIiksXHJcbiAgICBmb3JtLmdldChcImRhdGVcIilcclxuICApO1xyXG4gIHJldHVybiByZWRpcmVjdChcclxuICAgIGBtZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7Zm9ybS5nZXQoXCJ1c2VyXCIpfSZtZWFzdXJlbWVudF9pZD0ke2Zvcm0uZ2V0KFxyXG4gICAgICBcIm1ldHJpY1wiXHJcbiAgICApfWBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTWVhc3VyZW1lbnRSb3V0ZSgpIHtcclxuICBjb25zdCBtZXRyaWNzID0gdXNlTG9hZGVyRGF0YSgpLm1hcCgobSkgPT4gKHtcclxuICAgIC4uLm0sXHJcbiAgICBtZWFzdXJlbWVudF9sYWJlbDogc3RhcnRDYXNlKG0ubWVhc3VyZW1lbnQpLFxyXG4gIH0pKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNZXRyaWMsIHNldFNlbGVjdGVkTWV0cmljXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShnZXRDdXJyZW50RGF0ZVRpbWUoKSk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgbWV0cmljOiBzZWxlY3RlZE1ldHJpYz8uWzBdPy5pZCxcclxuICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TWV0cmljPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWV0cmljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT17XCJtZWFzdXJlbWVudF9sYWJlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobSkgPT4gc2V0U2VsZWN0ZWRNZXRyaWMobSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWV0cmljc31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBNZWFzdXJlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5WYWx1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWV0cmljVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nIHwgISh2YWx1ZSAmJiBzZWxlY3RlZE1ldHJpYyAmJiBkYXRlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBNZWFzdXJlbWVudFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVPZklTT1dlZWsodywgeSkge1xyXG4gIHZhciBzaW1wbGUgPSBuZXcgRGF0ZSh5LCAwLCAxICsgKHcgLSAxKSAqIDcpO1xyXG4gIHZhciBkb3cgPSBzaW1wbGUuZ2V0RGF5KCk7XHJcbiAgdmFyIElTT3dlZWtTdGFydCA9IHNpbXBsZTtcclxuICBpZiAoZG93IDw9IDQpIElTT3dlZWtTdGFydC5zZXREYXRlKHNpbXBsZS5nZXREYXRlKCkgLSBzaW1wbGUuZ2V0RGF5KCkgKyAxKTtcclxuICBlbHNlIElTT3dlZWtTdGFydC5zZXREYXRlKHNpbXBsZS5nZXREYXRlKCkgKyA4IC0gc2ltcGxlLmdldERheSgpKTtcclxuICByZXR1cm4gSVNPd2Vla1N0YXJ0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla051bWJlcihkYXRlKSB7XHJcbiAgdmFyIGQgPSBuZXcgRGF0ZShcclxuICAgIERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSlcclxuICApO1xyXG4gIHZhciBkYXlOdW0gPSBkLmdldFVUQ0RheSgpIHx8IDc7XHJcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIGRheU51bSk7XHJcbiAgdmFyIHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xyXG4gIHJldHVybiBNYXRoLmNlaWwoKChkIC0geWVhclN0YXJ0KSAvIDg2NDAwMDAwICsgMSkgLyA3KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnREYXRlVGltZSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB2YXIgbW9udGggPSBwYWRTdGFydChkYXRlLmdldE1vbnRoKCkgKyAxLCAyLCAwKTtcclxuICB2YXIgZGF5ID0gcGFkU3RhcnQoZGF0ZS5nZXREYXRlKCksIDIsIDApO1xyXG4gIHZhciBociA9IHBhZFN0YXJ0KGRhdGUuZ2V0SG91cnMoKSwgMiwgMCk7XHJcbiAgdmFyIG1pbiA9IHBhZFN0YXJ0KGRhdGUuZ2V0TWludXRlcygpLCAyLCAwKTtcclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aHJ9OiR7bWlufWA7XHJcbn07XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZVNlYXJjaFBhcmFtcywgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFdlZWtOdW1iZXIgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHVzZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB3ZWVrWWVhciA9IGAke2RheWpzKCkueWVhcigpfS1XJHtnZXRXZWVrTnVtYmVyKGRhdGUpfWA7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL1wiKSB7XHJcbiAgICAgIG5hdmlnYXRlKGAvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrP3VzZXI9JHt1c2VyfSZ3ZWVrPSR7d2Vla1llYXJ9YCk7XHJcbiAgICB9XHJcbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgdXNlcl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbXQtNSBtYi0xXCI+QW5hbHl0aWNzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjb250YWluZXIgbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5FZmZvcnQgU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWtZZWFyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhaW5lZCB0aGlzIFdlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlaz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdvcmtvdXRzIHBlciBXZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvc2NoZWR1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc2NoZWR1bGU/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvc3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zdGF0aXN0aWNzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGlzdGljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5TdHJlbmd0aCBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3NpdmUgT3ZlcmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvYW5hbHl0aWNzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lciBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEV4ZXJjaXNlc0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVN1Ym1pdCwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFByb2dyZXNzaXZlT3ZlcmxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgbGV0IGV4ZXJjaXNlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJleGVyY2lzZV9pZFwiKSA/PyBleGVyY2lzZXNbMF0/LmlkO1xyXG4gIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXIsIGV4ZXJjaXNlKTtcclxuXHJcbiAgY29uc3Qgc2V0c0J5RXhlcmNpc2UgPSBncm91cEJ5KHNldHMsIChzKSA9PiBzLmV4ZXJjaXNlX2lkKVtleGVyY2lzZV07XHJcbiAgcmV0dXJuIHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NSb3V0ZSgpIHtcclxuICBjb25zdCB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHNpbmdsZUV4ZXJjaXNlQ2hhcnQgPSBzZXRzQnlFeGVyY2lzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Qcm9ncmVzc2l2ZSBPdmVybG9hZDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG1iLTQgXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJleGVyY2lzZV9pZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZV9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZXhlcmNpc2VzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZS5pZH0gdmFsdWU9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtzdGFydENhc2UoZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGU/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGUudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCA/IChcclxuICAgICAgICAgIDxQcm9ncmVzc2l2ZU92ZXJsb2FkIHByb2dyZXNzaXZlT3ZlcmxvYWQ9e3NpbmdsZUV4ZXJjaXNlQ2hhcnR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiTm90aGluZyB0cmFpbmVkIHlldFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKSB7XHJcbiAgaWYgKG11c2NsZV9ncm91cCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJleGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJtdXNjbGVfZ3JvdXBcIiwgbXVzY2xlX2dyb3VwKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZXhlcmNpc2VcIikuc2VsZWN0KFwiKlwiKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUdyb3VwcygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJkaXN0aW5jdF9tdXNjbGVfZ3JvdXBzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLm9yZGVyKFwibmFtZVwiKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZXhlcmNpc2VzX2Zvcl91c2VyXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeVN0YXRzRm9yRXhlcmNpc2UodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGFzdF93b3Jrb3V0X3dpdGhfZXhlcmNpc2VcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2V0KGZvcm1TZXQpIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbiAgLy8gY2xlYW4gdXBcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJlbXB0eV93b3Jrb3V0X2V4ZXJjaXNlc1wiKS5zZWxlY3QoXCIqXCIpO1xyXG4gIGNvbnN0IGlkcyA9IGRhdGEubWFwKCh3b3Jrb3V0X2V4ZXJjaXNlKSA9PiB3b3Jrb3V0X2V4ZXJjaXNlLmlkKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKS5kZWxldGUoKS5pbihcImlkXCIsIGlkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRTZXQoZm9ybVNldCkge1xyXG4gIGNvbnN0IGFkZCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogZm9ybVNldC5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZD8uZGF0YT8uWzBdO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXQoZm9ybVNldCkge1xyXG4gIGxldCBzdWJtaXNzaW9uU2V0ID0ge1xyXG4gICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdlaWdodEZvclNldCA9IGZvcm1TZXQuZ2V0KFwid2VpZ2h0XCIpO1xyXG4gIGNvbnN0IHJlcHNGb3JTZXQgPSBmb3JtU2V0LmdldChcInJlcGV0aXRpb25zXCIpO1xyXG4gIGNvbnN0IGNvbXBsZXRlZEZvclNldCA9IGZvcm1TZXQuZ2V0KFwiY29tcGxldGVkXCIpO1xyXG5cclxuICBpZiAod2VpZ2h0Rm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LndlaWdodCA9IHBhcnNlRmxvYXQod2VpZ2h0Rm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKHJlcHNGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQucmVwZXRpdGlvbnMgPSBwYXJzZUZsb2F0KHJlcHNGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAoY29tcGxldGVkRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZEZvclNldCA9PT0gXCJ0cnVlXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAudXBkYXRlKHN1Ym1pc3Npb25TZXQpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4vL2RlZmF1bHQgZmlsdGVycyBmb3IgbGF0ZXN0IHdlZWtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNldHNGb3JVc2VyKHVzZXJJZCwgZmlsdGVyX3N0YXJ0LCBmaWx0ZXJfZW5kKSB7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfc3RhcnQgPSBmaWx0ZXJfc3RhcnRcclxuICAgID8gZGF5anMoZmlsdGVyX3N0YXJ0KVxyXG4gICAgOiBkYXlqcyhkYXlqcygpLndlZWsoZGF5anMoKS53ZWVrKCkpLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpO1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX2VuZCA9IGZpbHRlcl9lbmQgPyBkYXlqcyhmaWx0ZXJfZW5kKSA6IGRheWpzKCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAuZ3RlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfc3RhcnQpXHJcbiAgICAubHRlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfZW5kKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCwgZXhlcmNpc2VJZCkge1xyXG4gIGlmIChleGVyY2lzZUlkKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlmZXRpbWVTdGF0aXN0aWNzKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGlmZXRpbWVfc3RhdHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbkNoYXJ0LnJlZ2lzdGVyKFtUb29sdGlwXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc2l2ZU92ZXJsb2FkKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlUHJvZ3Jlc3MgPSBzb3J0QnkoXHJcbiAgICBwcm9wcy5wcm9ncmVzc2l2ZU92ZXJsb2FkLFxyXG4gICAgKGUpID0+IGUuZGF0ZXRpbWVfc3RhcnRcclxuICApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY29sb3IgPSBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgfSwwLjMpYDtcclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzaXZlT3ZlcmxvYWRcIikpO1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3NpdmVPdmVybG9hZENoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+XHJcbiAgICAgICAgICBkYXlqcyhlLmRhdGV0aW1lX3N0YXJ0KS5mb3JtYXQoXCJERC9NTS9ZWVwiKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiVm9sdW1lIFByb2dyZXNzIChXZWlnaHQgeCBSZXBzKVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBleGVyY2lzZVByb2dyZXNzLm1hcCgoZSkgPT4gZS5tYXhfdm9sdW1lKSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGNvbnRleHQuZGF0YUluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBWb2x1bWU6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLm1heF92b2x1bWV9IHwgV2VpZ2h0OiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS53ZWlnaHR9IHwgUmVwczogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ucmVwZXRpdGlvbnN9YDtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJvZ3Jlc3NpdmVPdmVybG9hZENoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0cy5qc1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVN1Ym1pdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBsb2Rhc2ggZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgV2Vla2x5VHJhaW5pbmdTZXRzIGZyb20gXCJ+L2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzXCI7XHJcbmltcG9ydCB7IGdldERhdGVPZklTT1dlZWsgfSBmcm9tIFwifi91dGlscy91dGlscy5qc1wiO1xyXG5cclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbnZhciBjdXN0b21QYXJzZUZvcm1hdCA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXRcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuZGF5anMuZXh0ZW5kKGN1c3RvbVBhcnNlRm9ybWF0KTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7fTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB5ZWFyV2VlayA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBsZXQgW3llYXIsIHdlZWtdID0geWVhcldlZWsuc3BsaXQoXCItV1wiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGdldERhdGVPZklTT1dlZWsod2VlaywgeWVhcik7XHJcbiAgY29uc3QgdXNlcldvcmtvdXRzID0gYXdhaXQgZ2V0U2V0c0ZvclVzZXIoXHJcbiAgICB1c2VyLFxyXG4gICAgd2Vla1N0YXJ0aW5nT25EYXkudG9EYXRlU3RyaW5nKCksXHJcbiAgICBuZXcgRGF0ZShcclxuICAgICAgd2Vla1N0YXJ0aW5nT25EYXkuc2V0RGF0ZSh3ZWVrU3RhcnRpbmdPbkRheS5nZXREYXRlKCkgKyA3KVxyXG4gICAgKS50b0RhdGVTdHJpbmcoKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBsb2Rhc2godXNlcldvcmtvdXRzKVxyXG4gICAgLmdyb3VwQnkoKHNldCkgPT4gc2V0Lm11c2NsZV9ncm91cClcclxuICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoaXNXZWVrUm91dGUoKSB7XHJcbiAgY29uc3Qgd2Vla2x5U2V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHllYXJXZWVrID0gc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIGNvbnN0IHJlbmRlclRyYWluZWRUaGlzV2VlayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5UcmFpbmVkIHRoaXMgV2VlazwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Yj57d2Vla1N0YXJ0aW5nT25EYXkudG9EYXRlU3RyaW5nKCl9PC9iPiAte1wiIFwifVxyXG4gICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIHtuZXcgRGF0ZShcclxuICAgICAgICAgICAgICB3ZWVrU3RhcnRpbmdPbkRheS5zZXREYXRlKHdlZWtTdGFydGluZ09uRGF5LmdldERhdGUoKSArIDYpXHJcbiAgICAgICAgICAgICkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICA8L2I+e1wiIFwifVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMlwiPlxyXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3llYXJXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VlazogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHdlZWtseVNldHMpLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+Tm8gV29ya291dHM8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFdlZWtseVRyYWluaW5nU2V0cyB3ZWVrbHlTZXRzPXt3ZWVrbHlTZXRzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPD57cmVuZGVyVHJhaW5lZFRoaXNXZWVrKCl9PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrbHlUcmFpbmluZ1NldHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgc2V0cyA9IHByb3BzLndlZWtseVNldHM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIndlZWtseVNldHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseVNldHNcIikpO1xyXG4gICAgY29uc3Qgd2Vla2x5U2V0c0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG5cclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMoc2V0cykubWFwKChlKSA9PiBzdGFydENhc2UoZSkpLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIiMgb2YgU2V0c1wiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMoc2V0cyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhzZXRzKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgICAgfSwwLjQpYFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3ZWVrbHlTZXRzQ2hhcnQuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIndlZWtseVNldHNcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHRyYW5zZm9ybSwgcGljayB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgV29ya291dFBlcldlZWsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrXCI7XHJcbmltcG9ydCB7IGdldERhdGVPZklTT1dlZWssIGdldFdlZWtOdW1iZXIgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KFxyXG4gICAgICAodykgPT5cclxuICAgICAgICBgJHtkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS55ZWFyKCl9IFdlZWsgJHtTdHJpbmcoXHJcbiAgICAgICAgICBnZXRXZWVrTnVtYmVyKG5ldyBEYXRlKHcuZGF0ZXRpbWVfc3RhcnQpKVxyXG4gICAgICAgICkucGFkU3RhcnQoMiwgXCIwXCIpfWBcclxuICAgIClcclxuICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIGxldCB3ZWVrc1RvU2hvdyA9IE9iamVjdC5rZXlzKHdvcmtvdXRzKTtcclxuICB3ZWVrc1RvU2hvdy5zb3J0KCk7XHJcbiAgd2Vla3NUb1Nob3cgPSB3ZWVrc1RvU2hvdy5zbGljZSgwLCAxMCkubWFwKFN0cmluZyk7XHJcblxyXG4gIHJldHVybiB0cmFuc2Zvcm0ocGljayh3b3Jrb3V0cywgd2Vla3NUb1Nob3cpLCAocmVzLCB2YWwsIGtleSkgPT4ge1xyXG4gICAgcmVzW2tleV0gPSB2YWw7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0c1BlcldlZWtSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Xb3Jrb3V0cyBwZXIgV2VlazwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIDxXb3Jrb3V0UGVyV2VlayB3b3Jrb3V0c1BlcldlZWs9e3dvcmtvdXRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV29ya291dCh3b3Jrb3V0KSB7XHJcbiAgbGV0IGNoZWNrTG9jYXRpb24gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAubWF0Y2goeyBuYW1lOiB3b3Jrb3V0LmxvY2F0aW9uLCB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCB9KTtcclxuXHJcbiAgbGV0IGxvY2F0aW9uSWQ7XHJcbiAgaWYgKGNoZWNrTG9jYXRpb24uZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgIGNoZWNrTG9jYXRpb24gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAgIC5pbnNlcnQoeyBuYW1lOiB3b3Jrb3V0LmxvY2F0aW9uLCB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCB9KTtcclxuICB9XHJcbiAgbG9jYXRpb25JZCA9IGNoZWNrTG9jYXRpb24uZGF0YT8uWzBdLmlkO1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ3b3Jrb3V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IHdvcmtvdXQubmFtZSxcclxuICAgICAgZGF0ZXRpbWVfc3RhcnQ6IHdvcmtvdXQuZGF0ZXRpbWUsXHJcbiAgICAgIGRhdGV0aW1lX2VuZDogdW5kZWZpbmVkLFxyXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb25JZCxcclxuICAgICAgdXNlcl9pZDogd29ya291dC51c2VySWQsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIHJldHVybiBkYXRhWzBdLmlkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV29ya291dCh3b3Jrb3V0X2lkKSB7XHJcbiAgY29uc3Qgd29ya291dCA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwid29ya291dF9pZFwiLCB3b3Jrb3V0X2lkKTtcclxuXHJcbiAgY29uc3QgYXNzb2NpYXRlZF93b3Jrb3V0X2V4ZXJjaXNlcyA9XHJcbiAgICBcIihcIiArIHdvcmtvdXQuZGF0YS5tYXAoKGUpID0+IGUud29ya291dF9leGVyY2lzZV9pZCkudG9TdHJpbmcoKSArIFwiKVwiO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLmZpbHRlcihcIndvcmtvdXRfZXhlcmNpc2VcIiwgXCJpblwiLCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzKTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyB3b3Jrb3V0OiB3b3Jrb3V0X2lkIH0pO1xyXG5cclxuICBjb25zdCBfZGVsZXRlV29ya291dCA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIHJldHVybiBfZGVsZXRlV29ya291dC5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V29ya291dChpZCkge1xyXG4gIGxldCB7IGRhdGE6IHdvcmtvdXQgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJpZFwiLCBpZCk7XHJcbiAgcmV0dXJuIHdvcmtvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIGlkKVxyXG4gICAgLm9yZGVyKFwic2V0X2lkXCIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmlzaFdvcmtvdXQoaWQsIGRhdGV0aW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0XCIpXHJcbiAgICAudXBkYXRlKHsgZGF0ZXRpbWVfZW5kOiBkYXRldGltZSB9KVxyXG4gICAgLm1hdGNoKHsgaWQ6IGlkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V29ya291dHNGb3JVc2VyKHVzZXJJZCwgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmd0ZShcImRhdGV0aW1lX3N0YXJ0XCIsIGRheWpzKHN0YXJ0RGF0ZSkpXHJcbiAgICAgIC5sdGUoXCJkYXRldGltZV9zdGFydFwiLCBkYXlqcyhlbmREYXRlKSk7XHJcblxyXG4gICAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiB3b3Jrb3V0cy5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gICAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiB3b3Jrb3V0cy5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYmVzdFNldEJ5RXhlcmNpc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxCZXN0Um91dGUoKSB7XHJcbiAgY29uc3QgbGlzdEJlc3RTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMVwiPlBlcnNvbmFsIEJlc3RzPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGk+V2VpZ2h0IG9mIHNldCB3aXRoIG1heCB2b2x1bWU8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2xpc3RCZXN0U2V0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPFBlcnNvbmFsQmVzdHMgYmVzdFNldHM9e2xpc3RCZXN0U2V0c30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIk5vIHdvcmtvdXRzIHlldFwiXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbFJlY29yZHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicGVyc29uYWxSZWNvcmRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxSZWNvcmRzXCIpKTtcclxuICAgIGNvbnN0IHByQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+XHJcbiAgICAgICAgICBzdGFydENhc2UoYCR7dmFsdWUuZXhlcmNpc2VfbmFtZX0gJHt2YWx1ZS52YXJpYW50ID8/IFwiXCJ9YClcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9wcy5iZXN0U2V0cy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS53ZWlnaHQpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmVzdFNldHMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwgJHtcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICB9LDAuNClgO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBwcm9wcy5iZXN0U2V0cy5sZW5ndGgsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IE9iamVjdC52YWx1ZXMocHJvcHMuYmVzdFNldHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAgV2VpZ2h0OiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0gfCBWb2w6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB4ICR7c2V0W2RhdGFJbmRleF0ucmVwZXRpdGlvbnN9ID0gJHtzZXRbZGF0YUluZGV4XS5tYXhfdm9sdW1lfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldExpZmV0aW1lU3RhdGlzdGljcywgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIHJlZHVjZSwgcGljaywgb21pdCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgc3RhdHMgPSBhd2FpdCBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICBjb25zdCB0b3RhbFRpbWVTcGVudCA9IHdvcmtvdXRzXHJcbiAgICAubWFwKCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX2VuZCkuZGlmZih3LmRhdGV0aW1lX3N0YXJ0LCBcIm1pbnV0ZVwiKSlcclxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICByZXR1cm4gW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgTWF0aC5yb3VuZCh0b3RhbFRpbWVTcGVudCAvIHdvcmtvdXRzLmxlbmd0aCldO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGlzdGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzdGF0cywgdG90YWxUaW1lU3BlbnQsIGF2ZXJhZ2VUaW1lU3BlbnRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGFiYnYgPSB7XHJcbiAgICBBVzogXCJBdmVyYWdlIFdlaWdodFwiLFxyXG4gICAgQVI6IFwiQXZlcmFnZSBSZXBldGl0aW9uc1wiLFxyXG4gICAgUmVwczogXCJUb3RhbCBSZXBldGl0aW9uc1wiLFxyXG4gICAgVm9sOiBcIlRvdGFsIFZvbHVtZVwiLFxyXG4gICAgTnVtOiBcIlRvdGFsIE51bWJlciBvZiBTZXRzXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSwgZGlnaXRzID0gMikgPT4ge1xyXG4gICAgY29uc3QgbG9va3VwID0gW1xyXG4gICAgICB7IHZhbHVlOiAxLCBzeW1ib2w6IFwiXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUzLCBzeW1ib2w6IFwia1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlNiwgc3ltYm9sOiBcIk1cIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTksIHN5bWJvbDogXCJHXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxMiwgc3ltYm9sOiBcIlRcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTE1LCBzeW1ib2w6IFwiUFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTgsIHN5bWJvbDogXCJFXCIgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCByeCA9IC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC87XHJcbiAgICB2YXIgaXRlbSA9IGxvb2t1cFxyXG4gICAgICAuc2xpY2UoKVxyXG4gICAgICAucmV2ZXJzZSgpXHJcbiAgICAgIC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSA+PSBpdGVtLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBpdGVtXHJcbiAgICAgID8gKG51bSAvIGl0ZW0udmFsdWUpLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCBcIiQxXCIpICsgaXRlbS5zeW1ib2xcclxuICAgICAgOiBcIjBcIjtcclxuICB9O1xyXG5cclxuICBsZXQgd29ya291dHNUYWJsZSA9IHN0YXRzLm1hcCgodykgPT4gKHtcclxuICAgIEV4ZXJjaXNlOiBgJHtzdGFydENhc2Uody5uYW1lKX0gJHtcclxuICAgICAgdz8udmFyaWFudCA/IGAoJHtzdGFydENhc2Uody52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgIH1gLFxyXG4gICAgUmVwczogTWF0aC5yb3VuZCh3LnRvdGFsX3JlcHMpLFxyXG4gICAgVm9sOiBNYXRoLnJvdW5kKHcuc3VtX3ZvbHVtZSksXHJcbiAgICBOdW06IHcubnVtX3NldHMsXHJcbiAgfSkpO1xyXG4gIGNvbnN0IGNvbHVtbk5hbWVzID0gWy4uLk9iamVjdC5rZXlzKE9iamVjdC5lbnRyaWVzKHdvcmtvdXRzVGFibGUpWzBdWzFdKV07XHJcbiAgY29uc3Qgcm93cyA9IE9iamVjdC5lbnRyaWVzKHdvcmtvdXRzVGFibGUpLm1hcCgoW2ssIHZdLCBpbmRleCkgPT4gW1xyXG4gICAgLi4uT2JqZWN0LnZhbHVlcyh2KSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtLTJcIj5TdGF0aXN0aWNzPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlRvdGFsIGxpZmV0aW1lIG1ldHJpY3M6PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIlxyXG4gICAgICAgIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxiPlRvdGFsIFRpbWU6IDwvYj5cclxuICAgICAgICAgIDxpPnt0b3RhbFRpbWVTcGVudH0gbWluPC9pPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxiPkF2ZXJhZ2UgVGltZTogPC9iPlxyXG4gICAgICAgICAgPGk+e2F2ZXJhZ2VUaW1lU3BlbnR9IG1pbjwvaT5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIHtjb2x1bW5OYW1lc1xyXG4gICAgICAgICAgLmZpbHRlcigoYykgPT4gYyAhPT0gXCJFeGVyY2lzZVwiKVxyXG4gICAgICAgICAgLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e25hbWV9PlxyXG4gICAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgICAge2FiYnZbbmFtZV19ICh7bmFtZX0pOntcIiBcIn1cclxuICAgICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICB7bmFtZSA9PT0gXCJWb2xcIlxyXG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdE51bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1RhYmxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGEsIGIpID0+IGEgKyBiW25hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICA6IHJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMod29ya291dHNUYWJsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gYSArIGJbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+VG90YWwgbGlmZXRpbWUgbWV0cmljcyBieSBleGVyY2lzZTogPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiwgZm9udFNpemU6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBpcy1zdHJpcGVkIGlzLW5hcnJvdyBpcy1ob3ZlcmFibGUgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICB7Y29sdW1uTmFtZXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9PntlfTwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm1hcCgoZWxlLCBlbGVJbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgZWxlSW5kZXggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtlbGVJbmRleH0+e2Zvcm1hdE51bWJlcihlbGUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17ZWxlSW5kZXh9PntlbGV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVN1Ym1pdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlT2ZJU09XZWVrIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbnZhciB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmNvbnN0IHdlZWtkYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHllYXJXZWVrID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRTZXRzRm9yVXNlcihcclxuICAgIHVzZXIsXHJcbiAgICB3ZWVrU3RhcnRpbmdPbkRheS50b0RhdGVTdHJpbmcoKSxcclxuICAgIG5ldyBEYXRlKFxyXG4gICAgICB3ZWVrU3RhcnRpbmdPbkRheS5zZXREYXRlKHdlZWtTdGFydGluZ09uRGF5LmdldERhdGUoKSArIDcpXHJcbiAgICApLnRvRGF0ZVN0cmluZygpXHJcbiAgKTtcclxuICByZXR1cm4gd29ya291dHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrbHlTY2hlZHVsZVJvdXRlKCkge1xyXG4gIGxldCB3b3Jrb3V0RGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHllYXJXZWVrID0gc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBkYXlqcyhnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuXHJcbiAgY29uc3Qgd29ya291dHMgPSBsb2Rhc2god29ya291dERhdGEpXHJcbiAgICAuZ3JvdXBCeSgodykgPT4gZGF5anMudXRjKHcuZGF0ZXRpbWVfc3RhcnQpLmxvY2FsKCkuZm9ybWF0KFwiZGRkZFwiKSlcclxuICAgIC5tYXBWYWx1ZXMoKHYpID0+XHJcbiAgICAgIGxvZGFzaCh2KVxyXG4gICAgICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAgICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpXHJcbiAgICAgICAgLnZhbHVlKClcclxuICAgIClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5TY2hlZHVsZTwvZGl2PlxyXG4gICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8Yj57bmV3IERhdGUod2Vla1N0YXJ0aW5nT25EYXkpLnRvRGF0ZVN0cmluZygpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICA8Yj57bmV3IERhdGUod2Vla1N0YXJ0aW5nT25EYXkuYWRkKDYsIFwiZGF5XCIpKS50b0RhdGVTdHJpbmcoKX08L2I+e1wiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTJcIj5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17eWVhcldlZWt9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgIHtbLi4uQXJyYXkoNykua2V5cygpXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbX0gc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX0+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0cz8uW3dlZWtkYXlzW2l0ZW1dXSA/IChcclxuICAgICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UgaXMtc21hbGwgaXMtc2Vjb25kYXJ5IG0tMyBgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgICB9IC0gJHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHdvcmtvdXRzPy5bd2Vla2RheXNbaXRlbV1dKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKFtrLCB2XSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKGspfSAtIHt2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtc21hbGwgaXMtbGlnaHQgbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+e2Ake1xyXG4gICAgICAgICAgICAgICAgICB3ZWVrZGF5c1tpdGVtXVxyXG4gICAgICAgICAgICAgICAgfSAtICR7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAgICAgLmFkZChpbmRleCwgXCJkYXlcIilcclxuICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlJlc3QgRGF5IFx1RDgzRFx1RENBQTwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWFwVmFsdWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbnMsIGFkZExvY2F0aW9uIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IExvY2F0aW9uUGllIGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uUGllXCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCIuLi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIGNvbnN0IHR3b01vbnRoc0FnbyA9IGRheWpzKCkuYWRkKC02MCwgXCJkYXlcIikuc3RhcnRPZihcImRheVwiKTtcclxuICBjb25zdCB0b2RheSA9IGRheWpzKCkuZW5kT2YoXCJkYXlcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzRm9yVXNlciA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyLCB0d29Nb250aHNBZ28sIHRvZGF5KTtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIGxvY2F0aW9ucyxcclxuICAgIG1hcFZhbHVlcyhncm91cEJ5KHdvcmtvdXRzRm9yVXNlciwgXCJsb2NhdGlvbl9uYW1lXCIpLCAoZSkgPT4gZS5sZW5ndGgpLFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlTG9jYXRpb25zUm91dGUoKSB7XHJcbiAgY29uc3QgW2xvY2F0aW9ucywgd29ya291dHNGb3JVc2VyXSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnRcclxuICAgICAgc2V0VXNlcj17c2V0VXNlcn1cclxuICAgICAgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfVxyXG4gICAgPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkxvY2F0aW9uczwvaDQ+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0c0ZvclVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNVwiPkJyZWFrZG93biBsYXN0IDYwIGRheXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyB3aWR0aDogXCIyMHJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9jYXRpb25QaWUgbG9jYXRpb25zPXt3b3Jrb3V0c0ZvclVzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5BZGQgTG9jYXRpb248L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCIgbmFtZT1cImxvY2F0aW9uTmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBcIj5TYXZlZCBMb2NhdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtlLmlkfVxyXG4gICAgICAgICAgICAgICAgdG89e2AuLyR7ZS5pZH0vP3VzZXI9JHtzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKX1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IG1iLTNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPntzdGFydENhc2UoZS5uYW1lKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvblBpZShwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJsb2NhdGlvblBpZVwiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy5sb2NhdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblBpZVwiKSk7XHJcbiAgICBjb25zdCBsb2NhdGlvblBpZSA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJwaWVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMocHJvcHMubG9jYXRpb25zKS5tYXAoKHZhbHVlKSA9PiBzdGFydENhc2UodmFsdWUpKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJXZWlnaHRcIixcclxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhwcm9wcy5sb2NhdGlvbnMpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LmtleXMocHJvcHMubG9jYXRpb25zKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCAke1xyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgIH0sMC40KWA7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbG9jYXRpb25QaWUuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9LCBbcHJvcHNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cImxvY2F0aW9uUGllXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnNDaGVja0NpcmNsZUZpbGwsIEJzQ2xvY2tIaXN0b3J5IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZWFzZTogXCJlYXNlT3V0XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbXQtNVwiPldvcmtvdXRzPC9kaXY+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0cy5sZW5ndGggPT09IDAgJiYgXCJObyB3b3Jrb3V0cyB5ZXRcIn1cclxuICAgICAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBrZXk9e1wid29ya291dC5pZFwifVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgICAgIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0LmlkfS9jdXJyZW50RXhlcmNpc2VzYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RheWpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIE1NTSBEIFlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RheWpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcImg6bW0gQVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAtIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3dvcmtvdXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKHdvcmtvdXQubG9jYXRpb25fbmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7d29ya291dC5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGVGaWxsIHNpemU9ezQwfSBjbGFzc05hbWU9XCJtLTQgcC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8QnNDbG9ja0hpc3Rvcnkgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NSB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCByb3RhdGU6IDEwIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgT3V0bGV0LCB1c2VGZXRjaGVyLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQge1xyXG4gIGZpbmlzaFdvcmtvdXQsXHJcbiAgZ2V0V29ya291dCxcclxuICBkZWxldGVXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdG9wd2F0Y2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuY29uc3QgcmVsYXRpdmVUaW1lID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZ2V0V29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZmluaXNoV29ya291dChcclxuICAgICAgZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpLFxyXG4gICAgICBmb3JtLmdldChcImVuZFwiKVxyXG4gICAgKTtcclxuICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gIH1cclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJERUxFVEVcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBkZWxldGVXb3Jrb3V0KGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHRvVGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd29ya291dE1ldGFEYXRhKHdvcmtvdXQpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIGlzLWxpZ2h0IG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHkgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBtYi0zXCI+e3dvcmtvdXQ/Lm5hbWV9PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1waW5cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57c3RhcnRDYXNlKHdvcmtvdXQ/LmxvY2F0aW9uX25hbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdnLWFsYXJtXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGlkPVwic3RhcnRcIj5cclxuICAgICAgICAgICAge2Ake2RheWpzXHJcbiAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0Py5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAubG9jYWwoKVxyXG4gICAgICAgICAgICAgIC5mb3JtYXQoXCJkZGRkLCBERCBNTU0gWVksIEhIOm1tXCIpfVxyXG4gICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnROZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dCA9IHVzZUxvYWRlckRhdGEoKVswXTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q2hhbmdlVGltZSwgc2V0U2hvd0NoYW5nZVRpbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXN0b21EYXRlLCBzZXRDdXN0b21EYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnRcclxuICAgICAgc2V0VXNlcklkPXtzZXRVc2VySWR9XHJcbiAgICAgIGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB3b3Jrb3V0LnVzZXJfaWR9XHJcbiAgICA+XHJcbiAgICAgIDw+XHJcbiAgICAgICAge3dvcmtvdXRNZXRhRGF0YSh3b3Jrb3V0KX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5IG5vdGlmaWNhdGlvbiBtYi0zXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3dvcmtvdXQ/LmRhdGV0aW1lX2VuZCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTFcIj5Xb3Jrb3V0IENvbXBsZXRlZC4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0b1RpbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfZW5kKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMFwiPlRpbWUgRWxhcHNlZDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzLWZhbWlseS1zZWNvbmRhcnkgaGFzLXRleHQtd2VpZ2h0LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdG9wd2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVGltZT17ZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgeyF3b3Jrb3V0LmRhdGV0aW1lX2VuZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBkYXlqcygpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7c2hvd01lbnUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MCVcIixcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIzJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXIgaXMtc21hbGwgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgV29ya291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NoYW5nZVRpbWUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNldCBGaW5pc2ggVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtzaG93Q2hhbmdlVGltZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzKGUudGFyZ2V0LnZhbHVlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbURhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWN1c3RvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1zdWNjZXNzIG0tMCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKGN1c3RvbURhdGUpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidXR0b24gaXMtbGlnaHQgIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnREYXRlVGltZSB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcblxyXG5jb25zdCBTdG9wd2F0Y2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUobmV3IERhdGUoKSAtIHN0YXJ0KTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2UgaWYgKCFydW5uaW5nKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtydW5uaW5nXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcHdhdGNoXCI+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoO1xyXG4iLCAiaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVBhcmFtcyxcclxuICB1c2VOYXZpZ2F0ZSxcclxuICBPdXRsZXQsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldE11c2NsZUdyb3VwcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gYXdhaXQgZ2V0TXVzY2xlR3JvdXBzKCk7XHJcbiAgcmV0dXJuIG11c2NsZV9ncm91cHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVyY2lzZXNSb3V0ZUluZGV4KCkge1xyXG4gIGxldCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgbXVzY2xlX2dyb3VwcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRlKGAvd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsICR7XHJcbiAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA/PyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbGxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge211c2NsZV9ncm91cHMubWFwKChtdXNjbGUpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17bXVzY2xlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyh7IG11c2NsZV9ncm91cDogbXVzY2xlLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5nZXQoXCJtdXNjbGVfZ3JvdXBcIikgPT09IG11c2NsZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdGFydENhc2UobXVzY2xlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHJlZGlyZWN0LCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBvc3RFeGVyY2lzZXRvV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGdldEV4ZXJjaXNlcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHlwZWFoZWFkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBtdXNjbGVfZ3JvdXAgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKTtcclxuXHJcbiAgcmV0dXJuIGV4ZXJjaXNlcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCwgdXNlciB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBleGVyY2lzZSA9IGZvcm0uZ2V0KFwiZXhlcmNpc2VcIik7XHJcblxyXG4gIGF3YWl0IHBvc3RFeGVyY2lzZXRvV29ya291dCh7XHJcbiAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICBleGVyY2lzZV9pZDogZXhlcmNpc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRXhlcmNpc2VSb3V0ZSgpIHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgZXhOYW1lVG9JZE1hcCA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkoXHJcbiAgICAgIGV4ZXJjaXNlcyxcclxuICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgIGV4ZXJjaXNlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShleGVyY2lzZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICB9YFxyXG4gICAgKSxcclxuICAgIChlKSA9PiBlWzBdLmlkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUeXBlYWhlYWRcclxuICAgICAgICBpZD1cImV4ZXJjaXNlX29wdGlvbnNcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICBvcHRpb25zPXtleGVyY2lzZXMubWFwKFxyXG4gICAgICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgICAgICBgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICB9YFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRXhlcmNpc2VcIlxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGV4ZXJjaXNlOiBleE5hbWVUb0lkTWFwW3NlbGVjdGVkXSB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZCB8fCBkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2N1cnJlbnRFeGVyY2lzZXNgfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgdXNlRmV0Y2hlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlU2V0LFxyXG4gIGFkZFNldCxcclxuICBkZWxldGVTZXQsXHJcbiAgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0LFxyXG4gIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBTZXRJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL1NldElucHV0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgc2V0c0ZvcldvcmtvdXQgPSBhd2FpdCBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0KHBhcmFtcy53b3Jrb3V0SWQpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNldHNGb3JXb3Jrb3V0Py5bMF0/LnVzZXJfaWQ7XHJcbiAgbGV0IGJlc3RTZXRCeUV4ZXJjaXNlO1xyXG4gIGlmICh1c2VySWQpIHtcclxuICAgIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCk7XHJcbiAgICBiZXN0U2V0QnlFeGVyY2lzZSA9IGxvZGFzaChzZXRzKVxyXG4gICAgICAuZ3JvdXBCeSgocykgPT4gcy5leGVyY2lzZV9pZClcclxuICAgICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAgIC52YWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhlcmNpc2VTZXRzID0gZ3JvdXBCeShcclxuICAgIHNldHNGb3JXb3Jrb3V0LFxyXG4gICAgKHNldCkgPT5cclxuICAgICAgYCR7c3RhcnRDYXNlKHNldC5leGVyY2lzZV9uYW1lKX0gJHtcclxuICAgICAgICBzZXQudmFyaWFudCA/IGAoJHtzdGFydENhc2Uoc2V0LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICB9YFxyXG4gICk7XHJcbiAgcmV0dXJuIHsgZXhlcmNpc2VTZXRzLCBiZXN0U2V0QnlFeGVyY2lzZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IHVwZGF0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgcmV0dXJuIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJleGVyY2lzZVwiKSB7XHJcbiAgICAgICAgYXdhaXQgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcInNldFwiKSB7XHJcbiAgICAgICAgYXdhaXQgZGVsZXRlU2V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmb3JtO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VycmVudEV4ZXJjaXNlc1JvdXRlKCkge1xyXG4gIGNvbnN0IHsgZXhlcmNpc2VTZXRzLCBiZXN0U2V0QnlFeGVyY2lzZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzaG93RGVsZXRlLCBzZXRTaG93RGVsZXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4ZXJjaXNlRm9ybSA9IChleGVyY2lzZV9uYW1lLCBzZXRzKSA9PiB7XHJcbiAgICBjb25zdCBleGVyY2lzZUlkID0gc2V0c1swXT8uZXhlcmNpc2VfaWQ7XHJcbiAgICBpZiAoZXhlcmNpc2VJZCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4ZXJjaXNlU2V0Rm9ybSA9IHtcclxuICAgICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlX2lkOiBzZXRzWzBdLndvcmtvdXRfZXhlcmNpc2VfaWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFNldEZvcm0gPSAod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCkgPT5cclxuICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXhlcmNpc2VfbmFtZTogZXhlcmNpc2VfbmFtZSxcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIHJlcGV0aXRpb25zOiByZXBldGl0aW9ucyxcclxuICAgICAgICAgIHdlaWdodDogd2VpZ2h0LFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmMgPSAoaW5kZXgpID0+IHtcclxuICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgICAgICAgZXhlcmNpc2VfbmFtZTogZXhlcmNpc2VfbmFtZSxcclxuICAgICAgICAgIHR5cGU6IFwic2V0XCIsXHJcbiAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KGV4ZXJjaXNlU2V0Rm9ybSwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0Jlc3RTZXQgPSBiZXN0U2V0QnlFeGVyY2lzZVtleGVyY2lzZUlkXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiB7cHJldmlvdXNCZXN0U2V0LndlaWdodH0geHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0LnJlcGV0aXRpb25zfSB8IHtwcmV2aW91c0Jlc3RTZXQubWF4X3ZvbHVtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi0yIG10LTJcIiAvPlxyXG5cclxuICAgICAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICBpbmRleD17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICB3ZWlnaHQ9e3NldC53ZWlnaHR9XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkPXtzZXQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIHJlcGV0aXRpb25zPXtzZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVsZXRlRnVuYz17KCkgPT4gZGVsZXRlRnVuYyhzZXQuc2V0X2lkKX1cclxuICAgICAgICAgICAgICBzdWJtaXRGdW5jPXtzdWJtaXRTZXRGb3JtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7ZmV0Y2hlci5zdWJtaXNzaW9uICYmXHJcbiAgICAgICAgICBmZXRjaGVyLnN1Ym1pc3Npb24uZm9ybURhdGEuZ2V0KFwiZXhlcmNpc2VfbmFtZVwiKSA9PT0gZXhlcmNpc2VfbmFtZSAmJlxyXG4gICAgICAgICAgZmV0Y2hlci5zdWJtaXNzaW9uLm1ldGhvZCA9PT0gXCJQT1NUXCIgPyAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNldElucHV0XHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ9e2ZldGNoZXIuc3VibWlzc2lvbi5mb3JtRGF0YS5nZXQoXCJ3ZWlnaHRcIil9XHJcbiAgICAgICAgICAgICAgICByZXBldGl0aW9ucz17ZmV0Y2hlci5zdWJtaXNzaW9uLmZvcm1EYXRhLmdldChcInJlcGV0aXRpb25zXCIpfVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2ZldGNoZXIuc3VibWlzc2lvbi5mb3JtRGF0YS5nZXQoXCJpbmRleFwiKX1cclxuICAgICAgICAgICAgICAgIGRlbGV0ZUZ1bmM9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUZ1bmMoZmV0Y2hlci5zdWJtaXNzaW9uLmZvcm1EYXRhLmdldChcImluZGV4XCIpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3VibWl0RnVuYz17c3VibWl0U2V0Rm9ybX1cclxuICAgICAgICAgICAgICA+PC9TZXRJbnB1dD5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbnMgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI4NSVcIiB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWlzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pc3Npb24uZm9ybURhdGEuZ2V0KFwiZXhlcmNpc2VfbmFtZVwiKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZV9uYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWlzc2lvbi5tZXRob2QgPT09IFwiUE9TVFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZnVsbHdpZHRoIGlzLWJsYWNrIGlzLXNtYWxsIHRpbGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICsgU2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBzaG93RGVsZXRlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH0gZHJvcGRvd24gaXMtcmlnaHRgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGUoKGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2V4ZXJjaXNlSWRdOiAhKGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZU1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcC0wIG0tMFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgcC0wIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHAtMiBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIGlzLWZ1bGx3aWR0aCBtLTAgcC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uZXhlcmNpc2VTZXRGb3JtLCB0eXBlOiBcImV4ZXJjaXNlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2J1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5lbnRyaWVzKGV4ZXJjaXNlU2V0cykubWFwKChbZXhlcmNpc2VfbmFtZSwgc2V0c10sIGV4SW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17ZXhJbmRleH0+e3JlbmRlckV4ZXJjaXNlRm9ybShleGVyY2lzZV9uYW1lLCBzZXRzKX08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPExpbmsgdG89e2Avd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgfT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTUgYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgKyBFeGVyY2lzZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBDZ0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XHJcbmltcG9ydCB7IFJpQ2hlY2tGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXRJbnB1dChwcm9wcykge1xyXG4gIGNvbnN0IFt3ZWlnaHQsIHNldFdlaWdodF0gPSB1c2VTdGF0ZShwcm9wcy53ZWlnaHQpO1xyXG4gIGNvbnN0IFtyZXBldGl0aW9ucywgc2V0UmVwZXRpdGlvbnNdID0gdXNlU3RhdGUocHJvcHMucmVwZXRpdGlvbnMpO1xyXG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShwcm9wcy5jb21wbGV0ZWQpO1xyXG4gIGNvbnN0IFtkZWxldGluZywgc2V0RGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVwZGF0ZURiID0gZGVib3VuY2UoXHJcbiAgICAod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCkgPT5cclxuICAgICAgcHJvcHMuc3VibWl0RnVuYyh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSxcclxuICAgIDIwMCxcclxuICAgIHtcclxuICAgICAgbGVhZGluZzogdHJ1ZSxcclxuICAgICAgdHJhaWxpbmc6IHRydWUsXHJcbiAgICB9XHJcbiAgKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgISghd2VpZ2h0ICYmICFyZXBldGl0aW9ucyAmJiAhY29tcGxldGVkKVxyXG4gICAgICA/IHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpXHJcbiAgICAgIDogbnVsbDtcclxuICB9LCBbd2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkXSk7XHJcblxyXG4gIHJldHVybiAhZGVsZXRpbmcgPyAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi0yIHAtMlwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXZoXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb21wbGV0ZWQgPyBcIiNlYmZmZmNcIiA6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldlaWdodCAoa2cpXCJcclxuICAgICAgICAgIHZhbHVlPXt3ZWlnaHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0V2VpZ2h0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBzXCJcclxuICAgICAgICAgIHZhbHVlPXtyZXBldGl0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZXBldGl0aW9ucyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0RGVsZXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb3BzLmRlbGV0ZUZ1bmMoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDw+PC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgY3JlYXRlV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25zIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZVRpbWUgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IHVzZXJJZCA9IGZvcm0uZ2V0KFwidXNlcklkXCIpO1xyXG4gIGxldCBuYW1lID0gZm9ybS5nZXQoXCJuYW1lXCIpO1xyXG4gIGxldCBkYXRldGltZSA9IGZvcm0uZ2V0KFwiZGF0ZXRpbWVcIik7XHJcbiAgbGV0IGxvY2F0aW9uID0gZm9ybS5nZXQoXCJsb2NhdGlvblwiKTtcclxuICBsb2NhdGlvbiA9IGxvY2F0aW9uPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKC8gL2csIFwiX1wiKSA/PyBudWxsO1xyXG4gIGNvbnN0IHdvcmtvdXRPYmplY3RJZCA9IGF3YWl0IGNyZWF0ZVdvcmtvdXQoe1xyXG4gICAgbmFtZSxcclxuICAgIGRhdGV0aW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICB1c2VySWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZWRpcmVjdChgL3dvcmtvdXQvJHt3b3Jrb3V0T2JqZWN0SWR9L2N1cnJlbnRFeGVyY2lzZXNgKTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhc0xvY2F0aW9uLCBzZXRIYXNMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMC4yLCB5OiAtNTAgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBtZDpjb2wtc3Bhbi0zIHNtOm92ZXJmbG93LWF1dG8gcmVsYXRpdmUgei0wXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtdC01XCI+Q3JlYXRlIE5ldyBXb3Jrb3V0PC9oND5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHVpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGV0aW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRheWpzKGAke2V2ZW50LnRhcmdldC5kYXRldGltZUxvY2FsLnZhbHVlfTowMGApLnV0YygpXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcImRkZGRcIil9IHdvcmtvdXRgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQodXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQoZGF0ZXRpbWUpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYW1lL0Rlc2M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZGRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9IHdvcmtvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRldGltZUxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2V0Q3VycmVudERhdGVUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0SGFzTG9jYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXRIYXNMb2NhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgc2VsZWN0IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0PVwibG9jYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJsb2NhdGlvbnNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLm5hbWV9IHZhbHVlPXtzdGFydENhc2UoaXRlbS5uYW1lKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIE5ld1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2hvbWVcIik7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiA8PjwvPjtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSBcIn4vY29tcG9uZW50cy9GaXJlYmFzZUxvZ2luXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVSb3V0ZSgpIHtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcbiAgICA+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VySWQ9e3NldFVzZXJJZH0gc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTYgbGV2ZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdCBib3VuY2UgY29udGFpbmVyIGlzLWhpZGRlbi1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tdG91Y2hcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvYmFubmVyLnBuZ1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IFwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib3ggc29yYUZvbnQgcHJpbWFyeSBoYXMtdGV4dC13aGl0ZSB0aXRsZSBtYi0yIGlzLTRcIj5cclxuICAgICAgICAgICAgICAgICAgSGVsbG8sIHt1c2VyICYmIHVzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcmFGb250IGJveCBwLTQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG89e2AvY3JlYXRlP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzRFx1RENBQSBDcmVhdGUgV29ya291dFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtNCBtYi0yIHNvcmFGb250IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzRFx1RENDOCBBbmFseXRpY3NcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC93b3Jrb3V0cz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQzUgV29ya291dHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbG9jYXRpb25zP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzQ1x1REZFQSBMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbWVhc3VyZW1lbnRzP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzQ1x1REY1MSBNZWFzdXJlbWVudHNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBjb250YWluZXIgc29yYUZvbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xIG1iLTFcIj5Xb3Jrb3V0LCBTbWFydGVyLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5QbGVhc2UgbG9nIGluIHRvIGNvbnRpbnVlLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGaXJlYmFzZUxvZ2luIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidjNzlmYWVmNycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtT01QRkZEMlAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtRRUREM0FXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ0ZXUEFZSkcuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LURKTzRNVUdELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UU0ZXUFk0VS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtJNlRRNUNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFJUTjJBUU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03REI0TDNaWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdLQlFZRUlDLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYW5hbHl0aWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy1NTkpWQzZERS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRlVVWTdVTDYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RREMyUEU1Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTM3U041S1QzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUxJUVJNWUUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwZXJzb25hbC1iZXN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMtVElSRlVHM1cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlSNjVTRVc2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkLTVGTkpDTlBQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JUjY1U0VXNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3NjaGVkdWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZS02WDJEVEZMMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVBJWlpLTEsuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzonc3RhdGlzdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljcy1ST0lIUVlMVi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid0cmFpbmVkLXRoaXMtd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWstWVFCTVBTNEQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlSNjVTRVc2LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid3b3Jrb3V0cy1wZXItd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWstSEU0MzM3SU0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlSNjVTRVc2LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NyZWF0ZS1KUFFTVExIUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVBJWlpLTEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RREMyUEU1Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTM3U041S1QzLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUxJUVJNWUUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtUVczU05PRTYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVMSVFSTVlFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC02SE5FSjZBTC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLTJERko3VUZDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JUjY1U0VXNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFEQzJQRTU3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUxJUVJNWUUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCc6eydpZCc6J3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9jYXRpb25zLzpsb2NhdGlvbklkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZC1NSUJPTlpRTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTlpVRzNGSFYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWFzdXJlbWVudHMnOnsnaWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lYXN1cmVtZW50cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFzdXJlbWVudHMtM1FZQkxOSEguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVMSVFSTVlFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkJzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cy9hZGQnLCdwYXJlbnRJZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMnLCdwYXRoJzonYWRkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYXN1cmVtZW50cy9hZGQtVUZJR0lOUFcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdaVVJNNk1MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzdTTjVLVDMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XS0JRWUVJQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5aVUczRkhWLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnknOnsnaWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnknLCdwYXJlbnRJZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMnLCdwYXRoJzonaGlzdG9yeScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS1BNjMyUkc2Qi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVI2NVNFVzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RREMyUEU1Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5aVUczRkhWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXQnOnsnaWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnkvZWRpdCcsJ3BhcmVudElkJzoncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5JywncGF0aCc6J2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnkvZWRpdC1FUFVRWUdEWC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0Jzp7J2lkJzoncm91dGVzL3dvcmtvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzond29ya291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LURDSENYUFozLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FTElRUk1ZRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQnLCdwYXRoJzonOndvcmtvdXRJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQtTUhWMktNUFkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQSVpaS0xLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS0k2VFE1Q0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QUlROMkFRTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFEQzJQRTU3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzdTTjVLVDMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XS0JRWUVJQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5aVUczRkhWLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC02UlJSSERaUS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhdGgnOidhZGRFeGVyY2lzZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZS01RVlSV1ZaNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1pVUk02TUwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGF0aCc6J2N1cnJlbnRFeGVyY2lzZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMtRUxJQlJENzcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdEQjRMM1pYLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dHMnOnsnaWQnOidyb3V0ZXMvd29ya291dHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzond29ya291dHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dHMtVllDN01GSVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQSVpaS0xLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUURDMlBFNTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FTElRUk1ZRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5aVUczRkhWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1DNzlGQUVGNy5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0T2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFDNUIsSUFBTSxTQUFTLFFBQVE7QUFDdkIsT0FBTztBQUVRLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ25CYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBU087Ozs7OztBQUdQLDJCQUFnQztBQUVoQyxpQkFBOEI7OztBQ2Q5QjtBQUFBLGtCQUtPO0FBQ1AsbUJBQXlCO0FBQ3pCLGdCQUE2QjtBQUVkLHVCQUF1QixPQUFPO0FBQzNDLFFBQU0sQ0FBQyxNQUFNLFdBQVc7QUFDeEIsUUFBTSxDQUFDLGdCQUFnQixxQkFBcUIsMkJBQVM7QUFDckQsUUFBTSxXQUFXLElBQUk7QUFDckIsUUFBTSxPQUFPLHlCQUFRLE1BQU07QUFFM0IseUJBQXVCO0FBQ3JCLHdDQUFtQixNQUFNO0FBQUE7QUFFM0Isb0JBQWtCO0FBQ2hCLFNBQUs7QUFBQTtBQUdQLHNDQUFtQixNQUFNLENBQUMsV0FBVztBQUNuQyxhQUFTLFFBQVEsVUFBVSxRQUFRO0FBQUE7QUFHckMsU0FDRSxvQ0FBQyxPQUFELE1BQ0csQ0FBQyxRQUNBLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFNBQVM7QUFBQSxJQUFhLFdBQVU7QUFBQSxLQUEyQixVQUlwRSxRQUNDLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVcsWUFBWSxpQkFBaUIsY0FBYztBQUFBLEtBQ3pELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLGlCQUFjO0FBQUEsSUFDZCxpQkFBYztBQUFBLElBQ2QsU0FBUyxNQUFNO0FBQ2Isd0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7QUFBQTtBQUFBLEtBR3RDLG9DQUFDLFFBQUQsTUFBTyxLQUFLLGNBQ1osb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsd0JBQUQ7QUFBQSxJQUFjLE1BQU07QUFBQSxTQUkxQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBZ0IsSUFBRztBQUFBLElBQWdCLE1BQUs7QUFBQSxLQUNyRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxTQUFTO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBZ0I7QUFBQTs7O0FEcENyRCxnQkFBZ0I7QUFDckIsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUVYLGlCQUFpQjtBQUN0QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBRzlCLElBQUksU0FBUyxZQUFZO0FBQzlCLFNBQU87QUFBQSxJQUNMLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUSxRQUFRLElBQUk7QUFBQSxNQUNwQixZQUFZLFFBQVEsSUFBSTtBQUFBLE1BQ3hCLFdBQVcsUUFBUSxJQUFJO0FBQUEsTUFDdkIsZUFBZSxRQUFRLElBQUk7QUFBQSxNQUMzQixtQkFBbUIsUUFBUSxJQUFJO0FBQUEsTUFDL0IsT0FBTyxRQUFRLElBQUk7QUFBQSxNQUNuQixlQUFlLFFBQVEsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUtqQyxnQkFBZ0IsRUFBRSxZQUFZO0FBQzVCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFpQyxJQUFHO0FBQUEsS0FDbEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQXNDLFVBQVcsUUFHbEUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWU7QUFBQTtBQU12QixlQUFlO0FBQzVCLFFBQU0sT0FBTztBQUNiLFFBQU0sTUFBTSw4QkFBYyxLQUFLO0FBQy9CLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBYyxTQUFRO0FBQUEsTUFDakMsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxPQUVBLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxNQUdkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFxQixLQUFJO0FBQUEsTUFDcEMsb0NBQUMsUUFBRDtBQUFBLElBQ0UsS0FBSTtBQUFBLElBQ0osTUFBSztBQUFBLE1BRVAsb0NBQUMsUUFBRDtBQUFBLElBQ0UsS0FBSTtBQUFBLElBQ0osTUFBSztBQUFBLE1BRVAsb0NBQUMsUUFBRDtBQUFBLElBQU0sS0FBSTtBQUFBLElBQWEsTUFBSztBQUFBLE1BQzVCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFhLE1BQUs7QUFBQSxNQUM1QixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxLQUFJO0FBQUEsTUFFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxLQUFJO0FBQUEsTUFFTixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBTyxNQUFNO0FBQUEsTUFDdkIsb0NBQUMsUUFBRDtBQUFBLElBQ0UsS0FBSTtBQUFBLElBQ0osTUFBSztBQUFBLE9BR1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxlQUFEO0FBQUEsSUFBZTtBQUFBLE9BRWpCLG9DQUFDLHNDQUFEO0FBQUEsSUFBaUIsaUJBQWU7QUFBQSxLQUM5QixvQ0FBQyxzQkFBRCxRQUdGLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQywwQkFBRDtBQUFBOzs7QUV6R1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0Q7QUFDL0Qsb0JBQThDOzs7QUNEOUM7OztBQ0FBO0FBQUEseUJBQTZCO0FBRTdCLElBQUk7QUFFSixJQUFNLGNBQWMsUUFBUSxJQUFJO0FBQ2hDLElBQU0sa0JBQWtCLFFBQVEsSUFBSTtBQUNwQyxJQUFJLE9BQXVDO0FBQ3pDLGFBQVcscUNBQWEsYUFBYTtBQUFBLE9BQ2hDO0FBQ0wsTUFBSSxDQUFDLE9BQU8sVUFBVTtBQUNwQixXQUFPLFdBQVcscUNBQWEsYUFBYTtBQUFBO0FBRTlDLGFBQVcsT0FBTztBQUFBO0FBR3BCLElBQU8sbUJBQVE7OztBRGJmLDRCQUFtQyxNQUFNO0FBQ3ZDLFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVc7QUFFakIsU0FBTztBQUFBO0FBR1Qsc0NBQTZDLE1BQU07QUFDakQsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLHlCQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVc7QUFFakIsU0FBTztBQUFBO0FBR1QsOEJBQXFDLFlBQVk7QUFDL0MsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLFlBQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSTtBQUVmLFNBQU87QUFBQTtBQUVULDhCQUFxQyxZQUFZLGNBQWM7QUFDN0QsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLFlBQ0wsT0FBTyxFQUFFLE1BQU0sZ0JBQ2YsTUFBTSxFQUFFLElBQUk7QUFDZixTQUFPO0FBQUE7QUFHVCwyQkFBa0MsY0FBYyxRQUFRO0FBQ3RELFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sRUFBRSxNQUFNLGNBQWMsU0FBUztBQUN6QyxTQUFPO0FBQUE7OztBRGpDVCxvQkFBeUI7QUFFbEIsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDbEMsUUFBTSxxQkFBcUIsTUFBTSx1QkFBdUI7QUFFeEQsUUFBTSxnQkFBZ0IsNkJBQ3BCLDJCQUFRLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUNyQyxDQUFDLE1BQUc7QUFoQlI7QUFnQlcsbUJBQUUsT0FBRixtQkFBTTtBQUFBO0FBRWYsUUFBTSxzQkFBc0IsNkJBQzFCLDJCQUFRLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUNyQyxDQUFDLE1BQUc7QUFwQlI7QUFvQlcsb0JBQUUsT0FBRixtQkFBTSxVQUFTO0FBQUE7QUFFeEIsU0FBTyxDQUFDLHFCQUFxQjtBQUFBO0FBR3hCLElBQUksU0FBUyxPQUFPLEVBQUUsY0FBYztBQXpCM0M7QUEwQkUsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixNQUFJLFFBQVEsV0FBVyxPQUFPO0FBQzVCLFVBQU0sYUFBYSxLQUFLLElBQUk7QUFDNUIsVUFBTSxlQUFlLEtBQUssSUFBSTtBQUU5QixVQUFNLGVBQ0osWUFDQSxhQUFhLFFBQVEsTUFBTSxLQUFLO0FBQUEsYUFFekIsUUFBUSxXQUFXLFVBQVU7QUFFdEMsVUFBTSxVQUFVLE1BQU0sZUFBZSxLQUFLLElBQUk7QUFDOUMsUUFBSSxZQUFZLE1BQU07QUFDcEIsWUFBTSxPQUFPLHlDQUFVLE9BQVYsbUJBQWM7QUFDM0IsYUFBTyw0QkFBUyxPQUFPLG1CQUFtQixTQUFTO0FBQUE7QUFBQTtBQUd2RCxTQUFPO0FBQUE7QUFHTSx5QkFBeUI7QUFDdEMsUUFBTSxFQUFFLGVBQWU7QUFDdkIsUUFBTSxDQUFDLHFCQUFxQixpQkFBaUI7QUFDN0MsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiw0QkFBUztBQUMzQyxRQUFNLENBQUMsYUFBYSxrQkFBa0IsNEJBQ3BDLDZCQUFVLGNBQWMsS0FBSyxlQUFlO0FBRzlDLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osNkJBQVUsY0FBYyxLQUFLLGVBRWhDLG9DQUFDLEtBQUQsTUFBSSxjQUFjLGNBQ2xCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFPLHdCQUNDLG9CQUFvQixLQUFLLGVBQWUsSUFFL0Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2IsYUFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsTUFBTSxlQUFlLEVBQUUsT0FBTztBQUFBLE1BRTNDLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTTtBQUNiLGNBQVEsT0FDTixFQUFFLFlBQXdCLGNBQWMsZUFDeEMsRUFBRSxRQUFRO0FBRVosbUJBQWE7QUFBQTtBQUFBLEtBRWhCLFlBS0osQ0FBQyxhQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTSxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQUEsS0FDeEMsV0FJQSxDQUFDLG9CQUFvQixLQUFLLGVBQ3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFDUCxRQUFRLE9BQ04sRUFBRSxjQUNGLEVBQUUsUUFBUTtBQUFBLEtBR2Y7QUFBQTs7O0FHekdmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBd0U7QUFDeEUsb0JBQTBCO0FBQzFCLDRCQUF1Qjs7O0FDRnZCO0FBQUEsb0JBQTRCO0FBQzVCLG1CQUE0QztBQUM1QyxvQkFBb0M7QUFFckIsaUNBQWlDLE9BQU87QUFDckQsUUFBTSxDQUFDLE1BQU0sV0FBVztBQUN4QixRQUFNLFdBQVc7QUFDakIsUUFBTSxPQUFPO0FBQ2IsdUNBQW1CLE1BQU0sQ0FBQyxXQUFXO0FBQ25DLGFBQVMsUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUdyQywrQkFBVSxNQUFNO0FBQ2QsUUFBSSxTQUFTLE1BQU07QUFDakIsZUFBUztBQUFBO0FBRVgsUUFBSSxNQUFNO0FBQ1IsVUFBSSxJQUFJLE1BQU0sVUFBVSxNQUFNLFFBQVEsUUFBUTtBQUM5QyxZQUFNLE1BQU0sS0FBSztBQUVqQixVQUFJLE1BQU0sZUFBZSxDQUFDLE1BQU0sWUFBWSxNQUFNO0FBQ2hELGlCQUFTO0FBQUEsYUFDSjtBQUNMLFlBQUksS0FBSSxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FHcEQsQ0FBQztBQUVKLFNBQU8sMERBQUcsTUFBTTtBQUFBOzs7QUR2QkgsNEJBQTRCO0FBQ3pDLFFBQU0sV0FBVztBQUNqQixRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sU0FBUyxhQUFhLElBQUk7QUFFaEMsUUFBTSxXQUFXO0FBRWpCLCtCQUFVLE1BQU07QUFDZCxRQUFJLFNBQVMsYUFBYSxpQkFBaUI7QUFDekMsZUFBUyw4QkFBOEI7QUFBQTtBQUFBLEtBRXhDLENBQUMsVUFBVSxVQUFVO0FBRXhCLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QixhQUFhLENBQUMsT0FBTyxPQUFPO0FBQUEsS0FDbkQsb0NBQUMsNkJBQU8sS0FBUjtBQUFBLElBQ0UsU0FBUyxFQUFFLFNBQVMsR0FBRyxPQUFPO0FBQUEsSUFDOUIsU0FBUyxFQUFFLFNBQVMsR0FBRyxPQUFPO0FBQUEsSUFDOUIsWUFBWSxFQUFFLFVBQVU7QUFBQSxLQUV4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBYSxzQkFDM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLDBCQUNsQixjQUNBO0FBQUEsS0FHTixvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsSUFBSSw4QkFBOEI7QUFBQSxLQUNuQyxhQUlILG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLHNCQUNsQixjQUNBO0FBQUEsS0FHTixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBSSwwQkFBMEI7QUFBQSxLQUFVLHlCQVF4RCxvQ0FBQyxzQkFBRDtBQUFBOzs7QUUxRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWtCO0FBQ2xCLHFCQUEwQjtBQUMxQixvQkFRTzs7O0FDVlA7QUFBQSxvQkFBb0M7QUFDcEMsa0JBQWtCO0FBRWxCLG1CQUFrQjtBQUNsQixxQkFBdUI7QUFFUiw2QkFBNkIsT0FBTztBQUNqRCxRQUFNLENBQUMsS0FBSyxVQUFVLDRCQUFTO0FBQy9CLFFBQU0sd0JBQXdCLDJCQUFPLE1BQU0sU0FBUyxDQUFDLE1BQU0sMEJBQU0sRUFBRTtBQUNuRSwrQkFBVSxNQUFNO0FBQ2QsUUFBSSxRQUFRLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQ3pELEtBQUssV0FBVztBQUVsQixXQUFPLFNBQVMsZUFBZTtBQUMvQixRQUFJLGNBQWMsb0JBQU0sU0FBUztBQUNqQyxRQUFJLGVBQWUsUUFBVztBQUM1QixrQkFBWTtBQUFBO0FBR2QsVUFBTSxtQkFBbUIsSUFBSSxvQkFBTSxLQUFLO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxzQkFBc0IsSUFBSSxDQUFDLE1BQ2pDLDBCQUFNLEVBQUUsTUFBTSxPQUFPO0FBQUEsUUFFdkIsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU8sTUFBTTtBQUFBLFlBQ2IsTUFBTSxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFBLFlBQ3pDLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWE7QUFBQSxZQUNiLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXZCLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQTtBQUFBO0FBR2IsV0FBTyxNQUFNO0FBQ1gsdUJBQWlCO0FBQUE7QUFBQTtBQUdyQixTQUNFLDBEQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QUM5Q2pCO0FBRUEscUNBQTRDO0FBQzFDLFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFBUyxLQUFLLGdCQUFnQixPQUFPO0FBRW5FLFNBQU87QUFBQTtBQUdULDhCQUFxQyxnQkFBZ0IsT0FBTyxNQUFNLE1BQU07QUFDdEUsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUFTLEtBQUssb0JBQW9CLE9BQU87QUFBQSxJQUNyRSxhQUFhO0FBQUEsSUFDYjtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1Q7QUFBQTtBQUVGLFNBQU87QUFBQTtBQUdULHFDQUE0QyxnQkFBZ0IsTUFBTTtBQUNoRSxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssb0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxNQUNkLEdBQUcsZUFBZTtBQUNyQixTQUFPO0FBQUE7QUFHVCxvQ0FBMkMsSUFBSSxNQUFNO0FBQ25ELFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxvQkFDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXLE1BQ2QsR0FBRyxNQUFNO0FBRVosU0FBTztBQUFBO0FBR1QsK0JBQXNDLGdCQUFnQixnQkFBZ0I7QUFDcEUsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLG9CQUNMLE9BQU8sZ0JBQ1AsTUFBTTtBQUVULFNBQU87QUFBQTtBQUdULGlDQUF3QyxnQkFBZ0I7QUFDdEQsUUFBTSxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUMzQixLQUFLLG9CQUNMLFNBQ0EsTUFBTTtBQUVULFNBQU87QUFBQTs7O0FGbkNGLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxRQUFNLFVBQVUsTUFBTTtBQUN0QixNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLE1BQUksZ0JBQWdCLElBQUksYUFBYSxJQUFJO0FBRXpDLFFBQU0sVUFBVSxNQUFNLHNCQUFzQixlQUFlO0FBQzNELFNBQU8sQ0FBQyxTQUFTLFFBQVEsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLDJCQUFNLEVBQUUsUUFBUSwyQkFBTSxFQUFFO0FBQUE7QUFHcEQsbUNBQW1DO0FBM0JsRDtBQTRCRSxRQUFNLFNBQVM7QUFDZixRQUFNLFdBQVc7QUFDakIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLENBQUMsU0FBUyxXQUFXO0FBQzNCLFFBQU0sU0FBUyxhQUFhLE9BQU87QUFDbkMsUUFBTSxnQkFBZ0IsYUFBYSxPQUFPO0FBQzFDLFFBQU0sYUFBYSw4QkFDakIsb0JBQVEsT0FDTixDQUFDLE1BQU0sRUFBRSxPQUFPLFNBQVMsYUFBYSxJQUFJLHdCQUQ1QyxtQkFFSSxPQUZKLG1CQUVRO0FBR1YsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1gsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsY0FBYyxhQUFhLElBQUkscUJBQXFCO0FBQUEsSUFDcEQsVUFBVSxDQUFDLE1BQU07QUFDZixhQUFPO0FBQUEsUUFDTCxnQkFBZ0IsRUFBRSxPQUFPO0FBQUEsUUFDekIsTUFBTSxhQUFhLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FJN0IsUUFBUSxJQUFJLENBQUMsTUFDWixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxLQUFLLEVBQUU7QUFBQSxJQUFJLE9BQU8sRUFBRTtBQUFBLEtBQ3pCLDhCQUFVLEVBQUUscUJBS3BCLFFBQVEsV0FBVyxJQUNsQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBTSxxQkFFckIsU0FBUyxhQUFhLGdDQUNwQixvQ0FBQyxxQkFBRDtBQUFBLElBQXFCO0FBQUEsSUFBa0IsTUFBTTtBQUFBLE1BR2pELG9DQUFDLHNCQUFELE9BQ0MsU0FBUyxhQUFhLGdDQUNyQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixRQUFRLElBQUksQ0FBQyxNQUNaLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQTtBQUFBLElBRWpCLFdBQVU7QUFBQSxJQUNWLEtBQUssRUFBRTtBQUFBLEtBRVAsb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE9BQU07QUFBQSxLQUNULDJCQUFNLEVBQUUsTUFBTSxPQUFPLGdCQUV4QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxPQUFNO0FBQUEsS0FBMEIsRUFBRSxTQUUxQyxvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsSUFBSSxtQ0FBbUMseUJBQXlCLG9CQUFvQixFQUFFO0FBQUEsS0FFdEYsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQW1DO0FBQUE7OztBRzVGdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBeUI7QUFDekIsb0JBTU87QUFPQSxJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLFFBQU0sS0FBSyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDbEMsUUFBTSxjQUFjLHFCQUFxQixJQUFJO0FBRTdDLFNBQU87QUFBQTtBQUVGLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0saUJBQWlCLEtBQUssTUFBTSxLQUFLLElBQUk7QUFDM0MsUUFBTSxnQkFBZ0IsZUFBZTtBQUNyQyxRQUFNLE9BQU8sZUFBZTtBQUU1QixNQUFJLFFBQVEsV0FBVyxVQUFVO0FBQy9CLFVBQU0sa0JBQWtCO0FBQUEsU0FDbkI7QUFDTCxVQUFNLGlCQUFpQixpQ0FDbEIsaUJBRGtCO0FBQUEsTUFFckIsT0FBTyxLQUFLLElBQUk7QUFBQSxNQUNoQixNQUFNLEtBQUssSUFBSTtBQUFBO0FBRWpCLFVBQU0sZ0JBQWdCLGdCQUFnQjtBQUFBO0FBRXhDLFNBQU8sNEJBQ0wsOEJBQThCLHVCQUF1QjtBQUFBO0FBRzFDLGdDQUFnQztBQUM3QyxRQUFNLGNBQWM7QUFDcEIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLENBQUMsa0JBQWtCLHVCQUF1Qiw0QkFDOUMsWUFBWSxHQUFHO0FBRWpCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNEJBQVMsWUFBWSxHQUFHO0FBQ2hELFFBQU0sVUFBVTtBQUNoQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFrQixlQUU5QixvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsSUFBSSw4QkFBOEIsYUFBYSxPQUM3QywwQkFDa0IsYUFBYSxPQUFPO0FBQUEsS0FFeEMsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLElBQVMsY0FBVztBQUFBLFFBR3RDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxLQUFELE1BQUcsVUFDSCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxVQUFVLENBQUMsTUFBTSxvQkFBb0IsRUFBRSxPQUFPO0FBQUEsTUFFaEQsb0NBQUMsS0FBRCxNQUFHLFNBQ0gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLE1BQU0sUUFBUSxFQUFFLE9BQU87QUFBQSxNQUVwQyxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixjQUFRLE9BQ047QUFBQSxRQUNFLGdCQUFnQixLQUFLLFVBQVUsWUFBWTtBQUFBLFFBQzNDO0FBQUEsUUFDQTtBQUFBLFNBRUYsRUFBRSxRQUFRO0FBQUE7QUFBQSxLQUdmLFdBR0Qsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQ2IsY0FBUSxPQUNOLEVBQUUsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLE9BQzdDO0FBQUEsUUFDRSxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBSWY7QUFBQTs7O0FDMUdiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW9FO0FBQ3BFLHFCQUEwQjtBQUMxQixvQkFBeUI7QUFJekIsdUNBQTBCOzs7QUNOMUI7QUFBQSxxQkFBeUI7QUFFbEIsMEJBQTBCLEdBQUcsR0FBRztBQUNyQyxNQUFJLFNBQVMsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFLLEtBQUksS0FBSztBQUMxQyxNQUFJLE1BQU0sT0FBTztBQUNqQixNQUFJLGVBQWU7QUFDbkIsTUFBSSxPQUFPO0FBQUcsaUJBQWEsUUFBUSxPQUFPLFlBQVksT0FBTyxXQUFXO0FBQUE7QUFDbkUsaUJBQWEsUUFBUSxPQUFPLFlBQVksSUFBSSxPQUFPO0FBQ3hELFNBQU87QUFBQTtBQUdGLHVCQUF1QixNQUFNO0FBQ2xDLE1BQUksSUFBSSxJQUFJLEtBQ1YsS0FBSyxJQUFJLEtBQUssZUFBZSxLQUFLLFlBQVksS0FBSztBQUVyRCxNQUFJLFNBQVMsRUFBRSxlQUFlO0FBQzlCLElBQUUsV0FBVyxFQUFFLGVBQWUsSUFBSTtBQUNsQyxNQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFHO0FBQ3pELFNBQU8sS0FBSyxLQUFPLE1BQUksYUFBYSxRQUFXLEtBQUs7QUFBQTtBQUcvQyxJQUFNLHFCQUFxQixNQUFNO0FBQ3RDLFFBQU0sT0FBTyxJQUFJO0FBQ2pCLE1BQUksT0FBTyxLQUFLO0FBQ2hCLE1BQUksUUFBUSw2QkFBUyxLQUFLLGFBQWEsR0FBRyxHQUFHO0FBQzdDLE1BQUksTUFBTSw2QkFBUyxLQUFLLFdBQVcsR0FBRztBQUN0QyxNQUFJLEtBQUssNkJBQVMsS0FBSyxZQUFZLEdBQUc7QUFDdEMsTUFBSSxNQUFNLDZCQUFTLEtBQUssY0FBYyxHQUFHO0FBQ3pDLFNBQU8sR0FBRyxRQUFRLFNBQVMsT0FBTyxNQUFNO0FBQUE7OztBRHBCbkMsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLFFBQU0sVUFBVSxNQUFNO0FBQ3RCLFNBQU87QUFBQTtBQUdGLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sZUFDSixLQUFLLElBQUksV0FDVCxLQUFLLElBQUksVUFDVCxLQUFLLElBQUksU0FDVCxLQUFLLElBQUk7QUFFWCxTQUFPLDRCQUNMLDZCQUE2QixLQUFLLElBQUksMEJBQTBCLEtBQUssSUFDbkU7QUFBQTtBQUtTLCtCQUErQjtBQUM1QyxRQUFNLFVBQVUsbUNBQWdCLElBQUksQ0FBQyxNQUFPLGlDQUN2QyxJQUR1QztBQUFBLElBRTFDLG1CQUFtQiw4QkFBVSxFQUFFO0FBQUE7QUFFakMsUUFBTSxDQUFDLGdCQUFnQixxQkFBcUI7QUFDNUMsUUFBTSxDQUFDLE9BQU8sWUFBWTtBQUMxQixRQUFNLENBQUMsTUFBTSxXQUFXO0FBQ3hCLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQiw0QkFBUztBQUNqRCxRQUFNLENBQUMsTUFBTSxXQUFXLDRCQUFTO0FBQ2pDLFFBQU0sQ0FBQyxnQkFBZ0I7QUFDdkIsUUFBTSxTQUFTO0FBQ2YsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQXlCO0FBQUEsS0FDdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsVUFBVSxPQUFPLFVBQVU7QUE5Q3ZDO0FBK0NjLHNCQUFnQjtBQUNoQixZQUFNO0FBRU4sYUFDRTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQSxRQUFRLHVEQUFpQixPQUFqQixtQkFBcUI7QUFBQSxRQUM3QixNQUFNLGFBQWEsT0FBTztBQUFBLFNBRTVCLEVBQUUsUUFBUTtBQUFBO0FBQUEsS0FJZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBUSxZQUczQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyw0Q0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsVUFBVTtBQUFBLElBQ1YsVUFBVSxDQUFDLE1BQU0sa0JBQWtCO0FBQUEsSUFDbkMsU0FBUztBQUFBLElBQ1QsYUFBWTtBQUFBLFNBS3BCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFRLFdBRTNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPO0FBQUEsU0FLM0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsVUFFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLE1BQU0sUUFBUSxFQUFFLE9BQU87QUFBQSxTQU0xQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxVQUFVLGVBQWUsQ0FBRSxVQUFTLGtCQUFrQjtBQUFBLElBQ3RELFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxLQUNOO0FBQUE7OztBRXBIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWtFO0FBRWxFLG9CQUFrQjtBQUNsQixvQkFBMEI7QUFFMUIsNEJBQXVCO0FBRXZCLElBQUksYUFBYSxRQUFRO0FBQ3pCLHNCQUFNLE9BQU87QUFFRSwwQkFBMEI7QUFDdkMsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLFNBQVMsYUFBYSxJQUFJO0FBQ2hDLFFBQU0sV0FBVztBQUNqQixRQUFNLE9BQU8sYUFBYSxJQUFJO0FBQzlCLFFBQU0sT0FBTyxJQUFJO0FBQ2pCLFFBQU0sV0FBVyxHQUFHLDZCQUFRLFdBQVcsY0FBYztBQUVyRCxRQUFNLFdBQVc7QUFFakIsK0JBQVUsTUFBTTtBQUNkLFFBQUksU0FBUyxhQUFhLGVBQWU7QUFDdkMsZUFBUyxxQ0FBcUMsYUFBYTtBQUFBO0FBQUEsS0FFNUQsQ0FBQyxVQUFVLFVBQVU7QUFDeEIsU0FDRSwwREFDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQXlCLGFBQWEsQ0FBQyxPQUFPLE9BQU87QUFBQSxLQUNuRCxvQ0FBQyw2QkFBTyxLQUFSO0FBQUEsSUFDRSxTQUFTLEVBQUUsU0FBUyxHQUFHLE9BQU87QUFBQSxJQUM5QixTQUFTLEVBQUUsU0FBUyxHQUFHLE9BQU87QUFBQSxJQUM5QixZQUFZLEVBQUUsVUFBVTtBQUFBLEtBRXhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF1QixjQUN0QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBYSxpQkFDMUIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUNULGlDQUNJLGNBQ0E7QUFBQSxJQUVOLE1BQU0scUNBQXFDLGFBQWE7QUFBQSxLQUN6RCx1QkFJSCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQ1QsaUNBQ0ksY0FDQTtBQUFBLElBRU4sTUFBTSxxQ0FBcUM7QUFBQSxLQUM1Qyx1QkFJSCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQWEsd0JBQ2xCLGNBQ0E7QUFBQSxJQUVOLE1BQU0sNEJBQTRCLGFBQWE7QUFBQSxLQUNoRCxjQUlILG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUNFLFNBQVMsYUFBYSwwQkFDbEIsY0FDQTtBQUFBLElBRU4sTUFBTSw4QkFBOEI7QUFBQSxLQUNyQyxpQkFLTCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBYSxtQkFDMUIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUNULG9DQUNJLGNBQ0E7QUFBQSxJQUVOLE1BQU0sd0NBQXdDO0FBQUEsS0FDL0MsMEJBSUgsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLDhCQUNsQixjQUNBO0FBQUEsSUFFTixNQUFNLGtDQUFrQztBQUFBLEtBQ3pDLHdCQVFYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLFNBQVMsYUFBYSxnQkFDckIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsc0JBQUQ7QUFBQTs7O0FDaEl0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBRUEsNEJBQW1DLGNBQWM7QUFDL0MsTUFBSSxjQUFjO0FBQ2hCLFVBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sS0FDUCxHQUFHLGdCQUFnQjtBQUN0QixXQUFPO0FBQUEsU0FDRjtBQUNMLFVBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFBUyxLQUFLLFlBQVksT0FBTztBQUMvRCxXQUFPO0FBQUE7QUFBQTtBQUlYLGlDQUF3QztBQUN0QyxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssMEJBQ0wsT0FBTyxLQUNQLE1BQU07QUFDVCxTQUFPO0FBQUE7QUFHVCxtQ0FBMEMsUUFBUTtBQUNoRCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssc0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVztBQUNqQixTQUFPO0FBQUE7OztBQzVCVDtBQUFBLG9CQUFrQjtBQUVsQixJQUFJLGNBQWEsUUFBUTtBQUN6QixzQkFBTSxPQUFPO0FBRWIseUJBQWdDLFNBQVM7QUFDdkMsUUFBTSxpQkFDSCxLQUFLLE9BQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSSxRQUFRLElBQUk7QUFFM0IsUUFBTSxFQUFFLFNBQVMsTUFBTSxpQkFBUyxLQUFLLDJCQUEyQixPQUFPO0FBQ3ZFLFFBQU0sTUFBTSxLQUFLLElBQUksQ0FBQyxxQkFBcUIsaUJBQWlCO0FBQzVELFFBQU0saUJBQVMsS0FBSyxvQkFBb0IsU0FBUyxHQUFHLE1BQU07QUFBQTtBQUc1RCxzQkFBNkIsU0FBUztBQWhCdEM7QUFpQkUsUUFBTSxNQUFNLE1BQU0saUJBQVMsS0FBSyxPQUFPLE9BQU87QUFBQSxJQUM1QztBQUFBLE1BQ0Usa0JBQWtCLFFBQVEsSUFBSTtBQUFBLE1BQzlCLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQTtBQUFBO0FBSWYsU0FBTyxpQ0FBSyxTQUFMLG1CQUFZO0FBQUE7QUFFckIseUJBQWdDLFNBQVM7QUFDdkMsTUFBSSxnQkFBZ0I7QUFBQSxJQUNsQixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUE7QUFHYixRQUFNLGVBQWUsUUFBUSxJQUFJO0FBQ2pDLFFBQU0sYUFBYSxRQUFRLElBQUk7QUFDL0IsUUFBTSxrQkFBa0IsUUFBUSxJQUFJO0FBRXBDLE1BQUksaUJBQWlCLE1BQU07QUFDekIsa0JBQWMsU0FBUyxXQUFXO0FBQUE7QUFFcEMsTUFBSSxlQUFlLE1BQU07QUFDdkIsa0JBQWMsY0FBYyxXQUFXO0FBQUE7QUFFekMsTUFBSSxvQkFBb0IsTUFBTTtBQUM1QixrQkFBYyxZQUFZLG9CQUFvQjtBQUFBO0FBRWhELFFBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssT0FDTCxPQUFPLGVBQ1AsTUFBTSxFQUFFLElBQUksUUFBUSxJQUFJO0FBQzNCLFNBQU87QUFBQTtBQUdULDhCQUFxQyxRQUFRLGNBQWMsWUFBWTtBQUNyRSxRQUFNLG9CQUFvQixlQUN0QiwyQkFBTSxnQkFDTiwyQkFBTSw2QkFBUSxLQUFLLDZCQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVE7QUFDL0QsUUFBTSxrQkFBa0IsYUFBYSwyQkFBTSxjQUFjO0FBRXpELFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxrQkFDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXLFFBQ2QsSUFBSSxrQkFBa0IsbUJBQ3RCLElBQUksa0JBQWtCO0FBRXpCLFNBQU87QUFBQTtBQUdULDRDQUFtRCxRQUFRLFlBQVk7QUFDckUsTUFBSSxZQUFZO0FBQ2QsVUFBTSxFQUFFLFNBQVMsTUFBTSxpQkFDcEIsS0FBSyxtQ0FDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXLFFBQ2QsR0FBRyxlQUFlO0FBQ3JCLFdBQU87QUFBQSxTQUNGO0FBQ0wsVUFBTSxFQUFFLFNBQVMsTUFBTSxpQkFDcEIsS0FBSyxtQ0FDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXO0FBQ2pCLFdBQU87QUFBQTtBQUFBO0FBSVgscUNBQTRDLFFBQVE7QUFDbEQsUUFBTSxFQUFFLFNBQVMsTUFBTSxpQkFDcEIsS0FBSyxrQkFDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXO0FBQ2pCLFNBQU87QUFBQTs7O0FGM0ZULHFCQUFnRTtBQUNoRSxxQkFBbUM7OztBR0huQztBQUFBLG9CQUFvQztBQUNwQyxtQkFBa0I7QUFDbEIsbUJBQXdCO0FBQ3hCLG9CQUFrQjtBQUNsQixxQkFBdUI7QUFDdkIscUJBQU0sU0FBUyxDQUFDO0FBRUQsNkJBQTZCLE9BQU87QUFDakQsUUFBTSxDQUFDLEtBQUssVUFBVSw0QkFBUztBQUMvQixRQUFNLG1CQUFtQiwyQkFDdkIsTUFBTSxxQkFDTixDQUFDLE1BQU0sRUFBRTtBQUVYLCtCQUFVLE1BQU07QUFDZCxRQUFJLFFBQVEsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FDekQsS0FBSyxXQUFXO0FBRWxCLFdBQU8sU0FBUyxlQUFlO0FBQy9CLFFBQUksY0FBYyxxQkFBTSxTQUFTO0FBQ2pDLFFBQUksZUFBZSxRQUFXO0FBQzVCLGtCQUFZO0FBQUE7QUFHZCxVQUFNLDJCQUEyQixJQUFJLHFCQUFNLEtBQUs7QUFBQSxNQUM5QyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixRQUFRLGlCQUFpQixJQUFJLENBQUMsTUFDNUIsMkJBQU0sRUFBRSxnQkFBZ0IsT0FBTztBQUFBLFFBRWpDLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxNQUFNLGlCQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFO0FBQUEsWUFDcEMsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsYUFBYTtBQUFBLFlBQ2IsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJdkIsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsV0FBVztBQUFBLGNBQ1QsT0FBTyxDQUFDLFlBQVk7QUFDbEIsb0JBQUksWUFBWSxRQUFRO0FBQ3hCLHVCQUFPLFdBQVcsaUJBQWlCLFdBQVcsd0JBQXdCLGlCQUFpQixXQUFXLGtCQUFrQixpQkFBaUIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVE1SixXQUFPLE1BQU07QUFDWCwrQkFBeUI7QUFBQTtBQUFBO0FBRzdCLFNBQ0UsMERBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVEsSUFBRztBQUFBO0FBQUE7OztBSHREVixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFOM0M7QUFPRSxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLFFBQU0sWUFBWSxNQUFNLG9CQUFvQjtBQUU1QyxNQUFJLFdBQVcsSUFBSSxhQUFhLElBQUksa0JBQWtCLGlCQUFVLE9BQVYsbUJBQWM7QUFDcEUsUUFBTSxPQUFPLE1BQU0sNkJBQTZCLE1BQU07QUFFdEQsUUFBTSxpQkFBaUIsNEJBQVEsTUFBTSxDQUFDLE1BQU0sRUFBRSxhQUFhO0FBQzNELFNBQU8sRUFBRSxnQkFBZ0I7QUFBQTtBQUdaLHlCQUF5QjtBQUN0QyxRQUFNLEVBQUUsZ0JBQWdCLGNBQWM7QUFDdEMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLHNCQUFzQjtBQUU1QixTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQix5QkFDakMsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2IsdUJBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsYUFBTztBQUFBLFFBQ0wsYUFBYSxFQUFFLE9BQU87QUFBQSxRQUN0QixNQUFNLGFBQWEsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUk3QixVQUFVLElBQUksQ0FBQyxNQUNkLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLEtBQUssRUFBRTtBQUFBLElBQUksT0FBTyxFQUFFO0FBQUEsS0FDekIsR0FBRyw4QkFBVSxFQUFFLFNBQ2Qsd0JBQUcsV0FBVSxJQUFJLDhCQUFVLEVBQUUsY0FBYyxZQVUzRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixzQkFDQyxvQ0FBQyxxQkFBRDtBQUFBLElBQXFCLHFCQUFxQjtBQUFBLE9BRTFDO0FBQUE7OztBSTNEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQUFnRTtBQUNoRSxvQkFBa0I7QUFDbEIscUJBQW1COzs7QUNIbkI7QUFBQSxxQkFBb0M7QUFDcEMsbUJBQWtCO0FBQ2xCLHFCQUEwQjtBQUVYLDRCQUE0QixPQUFPO0FBQ2hELFFBQU0sQ0FBQyxLQUFLLFVBQVUsNkJBQVM7QUFDL0IsUUFBTSxPQUFPLE1BQU07QUFFbkIsZ0NBQVUsTUFBTTtBQUNkLFFBQUksY0FBYyxxQkFBTSxTQUFTO0FBQ2pDLFFBQUksYUFBYTtBQUNmLGtCQUFZO0FBQUE7QUFHZCxXQUFPLFNBQVMsZUFBZTtBQUMvQixVQUFNLGtCQUFrQixJQUFJLHFCQUFNLEtBQUs7QUFBQSxNQUNyQyxNQUFNO0FBQUEsTUFFTixNQUFNO0FBQUEsUUFDSixRQUFRLE9BQU8sS0FBSyxNQUFNLElBQUksQ0FBQyxNQUFNLDhCQUFVO0FBQUEsUUFDL0MsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLGNBQWM7QUFBQSxZQUNkLE1BQU0sT0FBTyxPQUFPO0FBQUEsWUFDcEIsaUJBQWlCLE9BQU8sT0FBTyxNQUFNLElBQ25DLENBQUMsTUFDQyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUM3QyxLQUFLLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU01QixTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsVUFDTixHQUFHO0FBQUEsWUFDRCxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLckIsV0FBTyxNQUFNO0FBQ1gsc0JBQWdCO0FBQUE7QUFBQTtBQUdwQixTQUNFLDBEQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QUR6Q2pCLElBQUksY0FBYSxRQUFRO0FBQ3pCLElBQUksb0JBQW9CLFFBQVE7QUFDaEMsc0JBQU0sT0FBTztBQUNiLHNCQUFNLE9BQU87QUFFTixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFBQTtBQUVwQyxJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxNQUFJLFdBQVcsSUFBSSxhQUFhLElBQUk7QUFDcEMsTUFBSSxDQUFDLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFDbEMsUUFBTSxvQkFBb0IsaUJBQWlCLE1BQU07QUFDakQsUUFBTSxlQUFlLE1BQU0sZUFDekIsTUFDQSxrQkFBa0IsZ0JBQ2xCLElBQUksS0FDRixrQkFBa0IsUUFBUSxrQkFBa0IsWUFBWSxJQUN4RDtBQUdKLFNBQU8sNEJBQU8sY0FDWCxRQUFRLENBQUMsUUFBUSxJQUFJLGNBQ3JCLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFBQTtBQUdULHlCQUF5QjtBQUN0QyxRQUFNLGFBQWE7QUFDbkIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLFdBQVcsYUFBYSxJQUFJO0FBQ2xDLE1BQUksQ0FBQyxNQUFNLFFBQVEsU0FBUyxNQUFNO0FBQ2xDLFFBQU0sb0JBQW9CLGlCQUFpQixNQUFNO0FBQ2pELFFBQU0sU0FBUztBQUNmLFFBQU0sd0JBQXdCLE1BQU07QUFDbEMsV0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQWtCLHNCQUNqQyxvQ0FBQyxNQUFEO0FBQUEsTUFBSSxXQUFVO0FBQUEsUUFDZCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxLQUFELE1BQUksa0JBQWtCLGlCQUFtQixNQUFHLEtBQzVDLG9DQUFDLEtBQUQsTUFDRyxJQUFJLEtBQ0gsa0JBQWtCLFFBQVEsa0JBQWtCLFlBQVksSUFDeEQsaUJBQ0MsS0FDTCxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMscUJBQUQ7QUFBQSxNQUFNLFFBQU87QUFBQSxPQUNYLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLEtBQUQ7QUFBQSxNQUFHLFdBQVU7QUFBQSxPQUNYLG9DQUFDLFNBQUQ7QUFBQSxNQUNFLE1BQUs7QUFBQSxNQUNMLFdBQVU7QUFBQSxNQUNWLE1BQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsZUFBTztBQUFBLFVBQ0wsTUFBTSxFQUFFLE9BQU87QUFBQSxVQUNmLE1BQU0sYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBLGFBU3pDLE9BQU8sS0FBSyxZQUFZLFdBQVcsSUFDbEMsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQU0saUJBRXJCLG9DQUFDLG9CQUFEO0FBQUEsTUFBb0I7QUFBQTtBQUFBO0FBTTVCLFNBQU8sMERBQUc7QUFBQTs7O0FFbkZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE4Qjs7O0FDQTlCO0FBQ0Esb0JBQWtCO0FBRWxCLDZCQUFvQyxTQUFTO0FBSDdDO0FBSUUsTUFBSSxnQkFBZ0IsTUFBTSxpQkFDdkIsS0FBSyxZQUNMLE9BQU8sTUFDUCxNQUFNLEVBQUUsTUFBTSxRQUFRLFVBQVUsU0FBUyxRQUFRO0FBRXBELE1BQUk7QUFDSixNQUFJLGNBQWMsS0FBSyxXQUFXLEdBQUc7QUFDbkMsb0JBQWdCLE1BQU0saUJBQ25CLEtBQUssWUFDTCxPQUFPLEVBQUUsTUFBTSxRQUFRLFVBQVUsU0FBUyxRQUFRO0FBQUE7QUFFdkQsZUFBYSxvQkFBYyxTQUFkLG1CQUFxQixHQUFHO0FBRXJDLFFBQU0sRUFBRSxTQUFTLE1BQU0saUJBQVMsS0FBSyxXQUFXLE9BQU87QUFBQSxJQUNyRDtBQUFBLE1BQ0UsTUFBTSxRQUFRO0FBQUEsTUFDZCxnQkFBZ0IsUUFBUTtBQUFBLE1BQ3hCLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFNBQVMsUUFBUTtBQUFBO0FBQUE7QUFHckIsU0FBTyxLQUFLLEdBQUc7QUFBQTtBQUdqQiw2QkFBb0MsWUFBWTtBQUM5QyxRQUFNLFVBQVUsTUFBTSxpQkFDbkIsS0FBSyxrQkFDTCxPQUFPLEtBQ1AsR0FBRyxjQUFjO0FBRXBCLFFBQU0sK0JBQ0osTUFBTSxRQUFRLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsYUFBYTtBQUVwRSxRQUFNLGlCQUNILEtBQUssT0FDTCxTQUNBLE9BQU8sb0JBQW9CLE1BQU07QUFFcEMsUUFBTSxpQkFDSCxLQUFLLG9CQUNMLFNBQ0EsTUFBTSxFQUFFLFNBQVM7QUFFcEIsUUFBTSxpQkFBaUIsTUFBTSxpQkFDMUIsS0FBSyxXQUNMLFNBQ0EsTUFBTSxFQUFFLElBQUk7QUFFZixTQUFPLGVBQWU7QUFBQTtBQUd4QiwwQkFBaUMsSUFBSTtBQUNuQyxNQUFJLEVBQUUsTUFBTSxZQUFZLE1BQU0saUJBQzNCLEtBQUssMEJBQ0wsT0FBTyxLQUNQLEdBQUcsTUFBTTtBQUNaLFNBQU87QUFBQTtBQUdULHNDQUE2QyxJQUFJO0FBQy9DLE1BQUksRUFBRSxTQUFTLE1BQU0saUJBQ2xCLEtBQUssa0JBQ0wsT0FBTyxLQUNQLEdBQUcsY0FBYyxJQUNqQixNQUFNO0FBRVQsU0FBTztBQUFBO0FBR1QsNkJBQW9DLElBQUksVUFBVTtBQUNoRCxRQUFNLEVBQUUsU0FBUyxNQUFNLGlCQUNwQixLQUFLLFdBQ0wsT0FBTyxFQUFFLGNBQWMsWUFDdkIsTUFBTSxFQUFFO0FBQ1gsU0FBTztBQUFBO0FBR1Qsa0NBQXlDLFFBQVEsV0FBVyxTQUFTO0FBQ25FLE1BQUksYUFBYSxTQUFTO0FBQ3hCLFVBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssMEJBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxRQUNkLElBQUksa0JBQWtCLDJCQUFNLFlBQzVCLElBQUksa0JBQWtCLDJCQUFNO0FBRS9CLFVBQU0sV0FBVztBQUVqQixXQUFPLFNBQVMsS0FDZCxDQUFDLEdBQUcsTUFBTSxJQUFJLEtBQUssRUFBRSxrQkFBa0IsSUFBSSxLQUFLLEVBQUU7QUFBQSxTQUUvQztBQUNMLFVBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssMEJBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVztBQUNqQixVQUFNLFdBQVc7QUFFakIsV0FBTyxTQUFTLEtBQ2QsQ0FBQyxHQUFHLE1BQU0sSUFBSSxLQUFLLEVBQUUsa0JBQWtCLElBQUksS0FBSyxFQUFFO0FBQUE7QUFBQTtBQUt4RCxxQ0FBNEMsRUFBRSxZQUFZLGVBQWU7QUE3R3pFO0FBOEdFLFFBQU0sa0JBQWtCLE1BQU0saUJBQzNCLEtBQUssb0JBQ0wsT0FBTyx3QkFDUCxHQUFHLFlBQVksYUFDZixHQUFHLFdBQVc7QUFFakIsTUFBSSxtREFBaUIsTUFBTTtBQUN6QjtBQUFBO0FBR0YsUUFBTSxjQUFjLE1BQU0saUJBQ3ZCLEtBQUssb0JBQ0wsT0FBTyxDQUFDLEVBQUUsVUFBVSxhQUFhLFNBQVM7QUFFN0MsUUFBTSxVQUFTLE1BQU0saUJBQVMsS0FBSyxPQUFPLE9BQU87QUFBQSxJQUMvQztBQUFBLE1BQ0Usa0JBQWtCLHVEQUFhLFNBQWIsbUJBQW9CLE9BQXBCLG1CQUF3QjtBQUFBLE1BQzFDLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQTtBQUFBO0FBSWYsU0FBTyx5Q0FBUSxTQUFSLG1CQUFlO0FBQUE7QUFHeEIseUNBQWdELE1BQU07QUFDcEQsUUFBTSxpQkFDSCxLQUFLLE9BQ0wsU0FDQSxNQUFNLEVBQUUsa0JBQWtCLEtBQUssSUFBSTtBQUV0QyxRQUFNLGlCQUNILEtBQUssb0JBQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDeEI7QUFBQTs7O0FEaEpGLHNCQUF3QztBQUN4QyxvQkFBa0I7OztBRUhsQjtBQUFBLHFCQUFvQztBQUNwQyxtQkFBa0I7QUFDbEIsc0JBQTBCO0FBRVgseUJBQXlCLE9BQU87QUFDN0MsUUFBTSxDQUFDLEtBQUssVUFBVSw2QkFBUztBQUUvQixnQ0FBVSxNQUFNO0FBQ2QsUUFBSSxjQUFjLHFCQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUVkLFFBQUksT0FBTyxLQUFLLE1BQU0saUJBQWlCLFdBQVcsR0FBRztBQUNuRDtBQUFBO0FBRUYsV0FBTyxTQUFTLGVBQWU7QUFDL0IsVUFBTSx1QkFBdUIsSUFBSSxxQkFBTSxLQUFLO0FBQUEsTUFDMUMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxPQUFPLEtBQUssTUFBTTtBQUFBLFFBQzFCLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxNQUFNLE9BQU8sT0FBTyxNQUFNO0FBQUEsWUFDMUIsY0FBYztBQUFBLFlBQ2QsaUJBQWlCLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixJQUNwRCxDQUFDLE1BQ0MsUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FDN0MsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNNUIsU0FBUztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsYUFBYSxJQUFJLE9BQU8sS0FBSyxNQUFNLGlCQUFpQjtBQUFBLFFBQ3BELFFBQVE7QUFBQSxVQUNOLEdBQUc7QUFBQSxZQUNELGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXZCLFNBQ0UsMERBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVEsSUFBRztBQUFBO0FBQUE7OztBRnhDVixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxNQUFJLFdBQVcsTUFBTSxtQkFBbUI7QUFFeEMsYUFBVyw2QkFBTyxVQUNmLFFBQ0MsQ0FBQyxNQUNDLEdBQUcsMkJBQU0sRUFBRSxnQkFBZ0IsZUFBZSxPQUN4QyxjQUFjLElBQUksS0FBSyxFQUFFLGtCQUN6QixTQUFTLEdBQUcsUUFFakIsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUNuQjtBQUVILE1BQUksY0FBYyxPQUFPLEtBQUs7QUFDOUIsY0FBWTtBQUNaLGdCQUFjLFlBQVksTUFBTSxHQUFHLElBQUksSUFBSTtBQUUzQyxTQUFPLCtCQUFVLDBCQUFLLFVBQVUsY0FBYyxDQUFDLEtBQUssS0FBSyxRQUFRO0FBQy9ELFFBQUksT0FBTztBQUFBO0FBQUE7QUFJQSxnQ0FBZ0M7QUFDN0MsUUFBTSxXQUFXO0FBRWpCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLHNCQUNqQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxpQkFBRDtBQUFBLElBQWdCLGlCQUFpQjtBQUFBO0FBQUE7OztBR3ZDekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBQThCO0FBQzlCLHNCQUE4QjtBQUM5QixxQkFBeUI7OztBQ0h6QjtBQUFBLHFCQUFvQztBQUNwQyxtQkFBa0I7QUFDbEIsc0JBQTBCO0FBRVgseUJBQXlCLE9BQU87QUFDN0MsUUFBTSxDQUFDLEtBQUssVUFBVSw2QkFBUztBQUMvQixnQ0FBVSxNQUFNO0FBQ2QsUUFBSSxjQUFjLHFCQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUdkLFdBQU8sU0FBUyxlQUFlO0FBQy9CLFVBQU0sVUFBVSxJQUFJLHFCQUFNLEtBQUs7QUFBQSxNQUM3QixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixRQUFRLE1BQU0sU0FBUyxJQUFJLENBQUMsVUFDMUIsK0JBQVUsR0FBRyxNQUFNLGlCQUFpQixNQUFNLFdBQVc7QUFBQSxRQUV2RCxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTSxNQUFNLFNBQVMsSUFBSSxDQUFDLFVBQVUsTUFBTTtBQUFBLFlBQzFDLGNBQWM7QUFBQSxZQUNkLGlCQUFpQixNQUFNLFNBQVMsSUFBSSxDQUFDLE1BQU07QUFDekMscUJBQU8sUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsUUFDcEQsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU0xQixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxhQUFhLElBQUksTUFBTSxTQUFTO0FBQUEsUUFDaEMsU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsV0FBVztBQUFBLGNBQ1QsT0FBTyxDQUFDLFlBQVk7QUFDbEIsb0JBQUksWUFBWSxRQUFRO0FBQ3hCLHNCQUFNLE1BQU0sT0FBTyxPQUFPLE1BQU07QUFDaEMsdUJBQU8sWUFBWSxJQUFJLFdBQVcsaUJBQWlCLElBQUksV0FBVyxZQUFZLElBQUksV0FBVyxpQkFBaUIsSUFBSSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT3pJLFdBQU8sTUFBTTtBQUNYLGNBQVE7QUFBQTtBQUFBO0FBR1osU0FDRSwwREFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUE7QUFBQTs7O0FEaERWLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLFFBQU0sT0FBTyxNQUFNLDZCQUE2QjtBQUNoRCxRQUFNLG9CQUFvQiw2QkFBTyxNQUM5QixRQUFRLENBQUMsTUFBTSxFQUFFLGFBQ2pCLFVBQVUsQ0FBQyxNQUFNLDJCQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGNBQzlDO0FBRUgsU0FBTyxPQUFPLE9BQU87QUFBQTtBQUdSLDZCQUE2QjtBQUMxQyxRQUFNLGVBQWU7QUFFckIsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsbUJBQ2pDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLEtBQUQsTUFBRyxtQ0FHSixhQUFhLFNBQ1osb0NBQUMsaUJBQUQ7QUFBQSxJQUFlLFVBQVU7QUFBQSxPQUV6QjtBQUFBOzs7QUVoQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQThCO0FBRTlCLHNCQUFzRDtBQUN0RCxvQkFBa0I7QUFFbEIsSUFBSSxjQUFhLFFBQVE7QUFDekIsc0JBQU0sT0FBTztBQUVOLElBQUksV0FBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLE1BQUksUUFBUSxNQUFNLHNCQUFzQjtBQUN4QyxNQUFJLFdBQVcsTUFBTSxtQkFBbUI7QUFFeEMsUUFBTSxpQkFBaUIsU0FDcEIsSUFBSSxDQUFDLE1BQU0sMkJBQU0sRUFBRSxjQUFjLEtBQUssRUFBRSxnQkFBZ0IsV0FDeEQsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJO0FBQ3hCLFNBQU8sQ0FBQyxPQUFPLGdCQUFnQixLQUFLLE1BQU0saUJBQWlCLFNBQVM7QUFBQTtBQUd2RCwyQkFBMkI7QUFDeEMsUUFBTSxDQUFDLE9BQU8sZ0JBQWdCLG9CQUFvQjtBQUNsRCxRQUFNLE9BQU87QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQTtBQUdQLFFBQU0sZUFBZSxDQUFDLEtBQUssU0FBUyxNQUFNO0FBQ3hDLFVBQU0sU0FBUztBQUFBLE1BQ2IsRUFBRSxPQUFPLEdBQUcsUUFBUTtBQUFBLE1BQ3BCLEVBQUUsT0FBTyxLQUFLLFFBQVE7QUFBQSxNQUN0QixFQUFFLE9BQU8sS0FBSyxRQUFRO0FBQUEsTUFDdEIsRUFBRSxPQUFPLEtBQUssUUFBUTtBQUFBLE1BQ3RCLEVBQUUsT0FBTyxNQUFNLFFBQVE7QUFBQSxNQUN2QixFQUFFLE9BQU8sTUFBTSxRQUFRO0FBQUEsTUFDdkIsRUFBRSxPQUFPLE1BQU0sUUFBUTtBQUFBO0FBRXpCLFVBQU0sS0FBSztBQUNYLFFBQUksT0FBTyxPQUNSLFFBQ0EsVUFDQSxLQUFLLFNBQVUsT0FBTTtBQUNwQixhQUFPLE9BQU8sTUFBSztBQUFBO0FBRXZCLFdBQU8sT0FDRixPQUFNLEtBQUssT0FBTyxRQUFRLFFBQVEsUUFBUSxJQUFJLFFBQVEsS0FBSyxTQUM1RDtBQUFBO0FBR04sTUFBSSxnQkFBZ0IsTUFBTSxJQUFJLENBQUMsTUFBTztBQUFBLElBQ3BDLFVBQVUsR0FBRywrQkFBVSxFQUFFLFNBQ3ZCLHdCQUFHLFdBQVUsSUFBSSwrQkFBVSxFQUFFLGNBQWM7QUFBQSxJQUU3QyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQUEsSUFDbkIsS0FBSyxLQUFLLE1BQU0sRUFBRTtBQUFBLElBQ2xCLEtBQUssRUFBRTtBQUFBO0FBRVQsUUFBTSxjQUFjLENBQUMsR0FBRyxPQUFPLEtBQUssT0FBTyxRQUFRLGVBQWUsR0FBRztBQUNyRSxRQUFNLE9BQU8sT0FBTyxRQUFRLGVBQWUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFVBQVU7QUFBQSxJQUNoRSxHQUFHLE9BQU8sT0FBTztBQUFBO0FBR25CLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFpQixlQUNoQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBTSw0QkFDckIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTyxFQUFFLGVBQWUsVUFBVSxTQUFTO0FBQUEsS0FFM0Msb0NBQUMsS0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFBRyxpQkFDSCxvQ0FBQyxLQUFELE1BQUksZ0JBQWUsVUFFckIsb0NBQUMsS0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFBRyxtQkFDSCxvQ0FBQyxLQUFELE1BQUksa0JBQWlCLFVBR3RCLFlBQ0UsT0FBTyxDQUFDLE1BQU0sTUFBTSxZQUNwQixJQUFJLENBQUMsU0FDSixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxLQUFLO0FBQUEsS0FDTixvQ0FBQyxLQUFELE1BQ0csS0FBSyxPQUFNLE1BQUcsTUFBSyxNQUFHLE1BRXpCLG9DQUFDLEtBQUQsTUFDRyxTQUFTLFFBQ04sYUFDRSw0QkFDRSxPQUFPLE9BQU8sZ0JBQ2QsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQ2hCLE1BR0osNEJBQ0UsT0FBTyxPQUFPLGdCQUNkLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxPQUNoQixRQU9oQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBTSx5Q0FDckIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsT0FBTyxFQUFFLFVBQVUsVUFBVSxVQUFVO0FBQUEsSUFDdkMsV0FBVTtBQUFBLEtBRVYsb0NBQUMsU0FBRCxNQUNFLG9DQUFDLE1BQUQsTUFDRyxZQUFZLElBQUksQ0FBQyxHQUFHLFVBQ25CLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLEtBQUs7QUFBQSxLQUFRLE9BSXZCLG9DQUFDLFNBQUQsTUFDRyxLQUFLLElBQUksQ0FBQyxLQUFLLFVBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksS0FBSztBQUFBLEtBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxhQUNiLFlBQVksSUFDVixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxLQUFLO0FBQUEsS0FBVyxhQUFhLFFBRWpDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLEtBQUs7QUFBQSxLQUFXO0FBQUE7OztBQ2pJeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdFO0FBRWhFLHNCQUFrQztBQUNsQyxxQkFBa0I7QUFFbEIsSUFBSSxjQUFhLFFBQVE7QUFDekIsSUFBSSxNQUFNLFFBQVE7QUFDbEIsdUJBQU0sT0FBTztBQUNiLHVCQUFNLE9BQU87QUFFYixJQUFNLFdBQVc7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7QUFHSyxJQUFJLFdBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxRQUFNLFdBQVcsSUFBSSxhQUFhLElBQUk7QUFDdEMsTUFBSSxDQUFDLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFDbEMsUUFBTSxvQkFBb0IsaUJBQWlCLE1BQU07QUFDakQsTUFBSSxXQUFXLE1BQU0sZUFDbkIsTUFDQSxrQkFBa0IsZ0JBQ2xCLElBQUksS0FDRixrQkFBa0IsUUFBUSxrQkFBa0IsWUFBWSxJQUN4RDtBQUVKLFNBQU87QUFBQTtBQUdNLCtCQUErQjtBQUM1QyxNQUFJLGNBQWM7QUFDbEIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLFdBQVcsYUFBYSxJQUFJO0FBQ2xDLE1BQUksQ0FBQyxNQUFNLFFBQVEsU0FBUyxNQUFNO0FBQ2xDLFFBQU0sb0JBQW9CLDRCQUFNLGlCQUFpQixNQUFNO0FBQ3ZELFFBQU0sU0FBUztBQUVmLFFBQU0sV0FBVyw2QkFBTyxhQUNyQixRQUFRLENBQUMsTUFBTSx1QkFBTSxJQUFJLEVBQUUsZ0JBQWdCLFFBQVEsT0FBTyxTQUMxRCxVQUFVLENBQUMsTUFDViw2QkFBTyxHQUNKLFFBQVEsQ0FBQyxRQUFRLElBQUksY0FDckIsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUNuQixTQUVKO0FBRUgsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLGFBQ2pDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQsTUFBSSxJQUFJLEtBQUssbUJBQW1CLGlCQUFtQixNQUFHLEtBQ3RELG9DQUFDLEtBQUQsTUFBSSxJQUFJLEtBQUssa0JBQWtCLElBQUksR0FBRyxRQUFRLGlCQUFvQixNQUVwRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1gsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLE1BQU07QUFDZixhQUFPO0FBQUEsUUFDTCxNQUFNLEVBQUUsT0FBTztBQUFBLFFBQ2YsTUFBTSxhQUFhLE9BQU87QUFBQTtBQUFBO0FBQUEsVUFTeEMsb0NBQUMsTUFBRCxPQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxTQUFTLFFBQVEsZUFBZSxPQUFPLFVBQVU7QUFBQSxLQUM1RCxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVEsSUFBSSxDQUFDLE1BQU0sVUFDL0Isb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQU0sT0FBTyxFQUFFLE9BQU87QUFBQSxLQUM3QixzQ0FBVyxTQUFTLFVBQ25CLG9DQUFDLFdBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxLQUVYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQixHQUMvQixTQUFTLFdBQ0wsa0JBQ0gsSUFBSSxPQUFPLE9BQ1gsT0FBTyxrQkFDVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixPQUFPLFFBQVEscUNBQVcsU0FBUyxRQUFRLElBQzFDLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVTtBQUNqQixXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLEtBQUs7QUFBQSxPQUNSLG9DQUFDLEtBQUQsTUFDRywrQkFBVSxJQUFHLE9BQUk7QUFBQSxTQVNoQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsR0FDL0IsU0FBUyxXQUNMLGtCQUNILElBQUksT0FBTyxPQUNYLE9BQU8sa0JBQ1Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRCxNQUFHO0FBQUE7OztBQ3ZIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUQ7QUFDckQsc0JBQThDO0FBQzlDLHFCQUF5Qjs7O0FDRnpCO0FBQUEscUJBQW9DO0FBQ3BDLG1CQUFrQjtBQUNsQixzQkFBMEI7QUFFWCxxQkFBcUIsT0FBTztBQUN6QyxRQUFNLENBQUMsS0FBSyxVQUFVLDZCQUFTO0FBQy9CLGdDQUFVLE1BQU07QUFDZCxRQUFJLGNBQWMscUJBQU0sU0FBUztBQUNqQyxRQUFJLGVBQWUsUUFBVztBQUM1QixrQkFBWTtBQUFBO0FBR2QsUUFBSSxPQUFPLEtBQUssTUFBTSxXQUFXLFdBQVcsR0FBRztBQUM3QztBQUFBO0FBRUYsV0FBTyxTQUFTLGVBQWU7QUFDL0IsVUFBTSxjQUFjLElBQUkscUJBQU0sS0FBSztBQUFBLE1BQ2pDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxRQUNKLFFBQVEsT0FBTyxLQUFLLE1BQU0sV0FBVyxJQUFJLENBQUMsVUFBVSwrQkFBVTtBQUFBLFFBQzlELFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxNQUFNLE9BQU8sT0FBTyxNQUFNO0FBQUEsWUFDMUIsY0FBYztBQUFBLFlBQ2QsaUJBQWlCLE9BQU8sS0FBSyxNQUFNLFdBQVcsSUFBSSxDQUFDLE1BQU07QUFDdkQscUJBQU8sUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsUUFDcEQsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU0xQixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUE7QUFBQTtBQUdmLFdBQU8sTUFBTTtBQUNYLGtCQUFZO0FBQUE7QUFBQSxLQUViLENBQUM7QUFDSixTQUNFLDBEQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QURwQ2pCLHFCQUFrQjtBQUNsQiw0QkFBdUI7QUFFaEIsSUFBSSxXQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFFbEMsUUFBTSxlQUFlLDhCQUFRLElBQUksS0FBSyxPQUFPLFFBQVE7QUFDckQsUUFBTSxRQUFRLDhCQUFRLE1BQU07QUFDNUIsUUFBTSxZQUFZLE1BQU0sYUFBYTtBQUNyQyxRQUFNLGtCQUFrQixNQUFNLG1CQUFtQixNQUFNLGNBQWM7QUFFckUsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLCtCQUFVLDZCQUFRLGlCQUFpQixrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7QUFBQTtBQUFBO0FBSTNELElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLE1BQUksQ0FBQyxLQUFLLElBQUksaUJBQWlCO0FBQzdCLFdBQU87QUFBQTtBQUVULFNBQU8sTUFBTSxZQUFZLEtBQUssSUFBSSxpQkFBaUIsS0FBSyxJQUFJO0FBQUE7QUFHL0MsZ0NBQWdDO0FBQzdDLFFBQU0sQ0FBQyxXQUFXLG1CQUFtQjtBQUNyQyxRQUFNLENBQUMsTUFBTSxXQUFXO0FBQ3hCLFFBQU0sQ0FBQyxnQkFBZ0I7QUFFdkIsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLGFBQWEsQ0FBQyxPQUFPLE9BQU8sYUFBYSxJQUFJO0FBQUEsS0FFN0Msb0NBQUMsNkJBQU8sS0FBUjtBQUFBLElBQ0UsU0FBUyxFQUFFLFNBQVMsR0FBRyxPQUFPO0FBQUEsSUFDOUIsU0FBUyxFQUFFLFNBQVMsR0FBRyxPQUFPO0FBQUEsSUFDOUIsWUFBWSxFQUFFLFVBQVU7QUFBQSxLQUV4QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBYSxjQUMxQixtQkFDQyxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWEsMkJBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFZLE9BQU8sRUFBRSxPQUFPO0FBQUEsS0FDekMsb0NBQUMsYUFBRDtBQUFBLElBQWEsV0FBVztBQUFBLFFBSTlCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFhLGlCQUM1QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDNUIsb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLElBQWdCLE1BQUs7QUFBQSxNQUN0QyxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLGFBQWEsSUFBSTtBQUFBLE1BRTFCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUErQixNQUFLO0FBQUEsS0FBUyxTQUtqRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBYyxvQkFDNUIsVUFBVSxJQUFJLENBQUMsTUFDZCxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsS0FBSyxFQUFFO0FBQUEsSUFDUCxJQUFJLEtBQUssRUFBRSxZQUFZLGFBQWEsSUFBSTtBQUFBLElBQ3hDLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBYywrQkFBVSxFQUFFO0FBQUE7OztBRWxGM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFEO0FBR3JELGdCQUFrRDtBQUNsRCxzQkFBMEI7QUFDMUIsNEJBQXVCO0FBQ3ZCLHFCQUFrQjtBQUNsQixJQUFNLE9BQU0sUUFBUTtBQUNwQix1QkFBTSxPQUFPO0FBRU4sSUFBSSxXQUFTLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDakQsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLE1BQUksT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNoQyxRQUFNLFdBQVcsTUFBTSxtQkFBbUI7QUFDMUMsU0FBTztBQUFBO0FBR00sNEJBQTRCO0FBQ3pDLFFBQU0sV0FBVztBQUNqQixRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sU0FBUyxhQUFhLElBQUk7QUFDaEMsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQXlCLGFBQWEsQ0FBQyxPQUFPLE9BQU87QUFBQSxLQUNuRCxvQ0FBQyw2QkFBTyxLQUFSO0FBQUEsSUFDRSxTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFBQSxJQUMxQixTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFBQSxJQUMxQixZQUFZLEVBQUUsVUFBVSxLQUFLLE1BQU07QUFBQSxLQUVuQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsYUFDaEMsU0FBUyxXQUFXLEtBQUssbUJBQ3pCLFNBQVMsSUFBSSxDQUFDLFlBQ2Isb0NBQUMscUJBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLElBQUksWUFBWSxRQUFRO0FBQUEsS0FFeEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLHVCQUNFLElBQUksUUFBUSxnQkFDWixRQUNBLE9BQU8sb0JBRVosb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osdUJBQ0UsSUFBSSxRQUFRLGdCQUNaLFFBQ0EsT0FBTyxXQUNULE9BQ0EsUUFBUSxPQUVWLCtCQUFVLFFBQVEsaUJBRXBCLFFBQVEsZUFDUCxvQ0FBQyw2QkFBRDtBQUFBLElBQW1CLE1BQU07QUFBQSxJQUFJLFdBQVU7QUFBQSxPQUV2QyxvQ0FBQywwQkFBRDtBQUFBLElBQWdCLE1BQU07QUFBQSxJQUFJLFdBQVU7QUFBQTtBQUFBOzs7QUMzRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdUI7QUFFdkIsNEJBQXVCO0FBQ1IsMkJBQTJCO0FBQ3hDLFNBQ0UsMERBQ0Usb0NBQUMseUJBQUQsTUFDRSxvQ0FBQyw2QkFBTyxLQUFSO0FBQUEsSUFDRSxTQUFTLEVBQUUsU0FBUyxHQUFHLE9BQU87QUFBQSxJQUM5QixTQUFTLEVBQUUsU0FBUyxHQUFHLE9BQU87QUFBQSxJQUM5QixNQUFNLEVBQUUsU0FBUyxHQUFHLFFBQVE7QUFBQSxJQUM1QixZQUFZLEVBQUUsVUFBVTtBQUFBLEtBRXhCLG9DQUFDLHVCQUFEO0FBQUE7OztBQ2JWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTREO0FBTTVELHNCQUEwQjtBQUUxQixxQkFBeUI7OztBQ1J6QjtBQUFBLHFCQUEyQztBQUczQyxJQUFNLFlBQVksQ0FBQyxVQUFVO0FBQzNCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNkJBQVM7QUFDakMsUUFBTSxDQUFDLE9BQU8sWUFBWSw2QkFBUyxNQUFNO0FBQ3pDLFFBQU0sQ0FBQyxTQUFTLGNBQWMsNkJBQVMsTUFBTTtBQUU3QyxnQ0FBVSxNQUFNO0FBQ2QsUUFBSTtBQUNKLFFBQUksU0FBUztBQUNYLGlCQUFXLFlBQVksTUFBTTtBQUMzQixnQkFBUSxJQUFJLFNBQVM7QUFBQSxTQUNwQjtBQUFBLGVBQ00sQ0FBQyxTQUFTO0FBQ25CLG9CQUFjO0FBQUE7QUFFaEIsV0FBTyxNQUFNLGNBQWM7QUFBQSxLQUMxQixDQUFDO0FBQ0osU0FDRSxxREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixPQUFPLEtBQUssS0FBSyxLQUFLLE9BQ3BCLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQVEsS0FBTSxXQUNsRCxxREFBQyxRQUFELE1BQVEsT0FBTyxLQUFLLE1BQU0sT0FBTyxRQUFXLElBQUssTUFBTSxLQUFJLE1BQzNELHFEQUFDLFFBQUQsTUFBUSxPQUFNLEtBQUssTUFBTyxPQUFPLE1BQVMsS0FBSyxNQUFNLEtBQUksTUFDekQscURBQUMsUUFBRCxNQUFRLE9BQU0sS0FBSyxNQUFPLE9BQU8sTUFBUSxLQUFLLE1BQU07QUFBQTtBQUkxRCxJQUFPLG9CQUFROzs7QURuQmYscUJBQWtCO0FBQ2xCLGlCQUE4QjtBQUU5QixJQUFNLE9BQU0sUUFBUTtBQUNwQixJQUFNLGVBQWUsUUFBUTtBQUM3Qix1QkFBTSxPQUFPO0FBQ2IsdUJBQU0sT0FBTztBQUVOLElBQUksV0FBUyxPQUFPLEVBQUUsYUFBYTtBQUN4QyxRQUFNLFVBQVUsTUFBTSxXQUFXLE9BQU87QUFDeEMsU0FBTztBQUFBO0FBR0YsSUFBSSxVQUFTLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDakQsTUFBSSxRQUFRLFVBQVUsUUFBUTtBQUM1QixVQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFVBQU0sVUFBVSxNQUFNLGNBQ3BCLEtBQUssSUFBSSxlQUNULEtBQUssSUFBSTtBQUVYLFdBQU87QUFBQTtBQUVULE1BQUksUUFBUSxVQUFVLFVBQVU7QUFDOUIsVUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixVQUFNLFVBQVUsTUFBTSxjQUFjLEtBQUssSUFBSTtBQUM3QyxXQUFPLDZCQUFTO0FBQUE7QUFBQTtBQUlwQixnQkFBZ0IsTUFBTTtBQUNwQixTQUNFLG9DQUFDLE9BQUQsTUFDRyxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQ3BCLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQVEsS0FBTSxXQUNsRCxvQ0FBQyxRQUFELE1BQVEsT0FBTyxLQUFLLE1BQU0sT0FBTyxRQUFXLElBQUssTUFBTSxLQUFJLE1BQzNELG9DQUFDLFFBQUQsTUFBUSxPQUFNLEtBQUssTUFBTyxPQUFPLE1BQVMsS0FBSyxNQUFNLEtBQUksTUFDekQsb0NBQUMsUUFBRCxNQUFRLE9BQU0sS0FBSyxNQUFPLE9BQU8sTUFBUSxLQUFLLE1BQU07QUFBQTtBQUsxRCx5QkFBeUIsU0FBUztBQUNoQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFjLG1DQUFTLE9BRXRDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxPQUVmLG9DQUFDLFFBQUQsTUFBTywrQkFBVSxtQ0FBUyxrQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLE9BR2Ysb0NBQUMsUUFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQ04sR0FBRyx1QkFDRCxJQUFJLG1DQUFTLGdCQUNiLFFBQ0EsT0FBTztBQUFBO0FBQUE7QUFTUCxnQ0FBZ0M7QUFDN0MsUUFBTSxVQUFVLG9DQUFnQjtBQUNoQyxRQUFNLFVBQVU7QUFDaEIsUUFBTSxDQUFDLFFBQVEsYUFBYTtBQUM1QixRQUFNLENBQUMsVUFBVSxlQUFlLDZCQUFTO0FBQ3pDLFFBQU0sQ0FBQyxnQkFBZ0IscUJBQXFCLDZCQUFTO0FBQ3JELFFBQU0sQ0FBQyxZQUFZLGlCQUFpQiw2QkFBUztBQUM3QyxTQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsYUFBYSxDQUFDLE9BQU8sT0FBTyxRQUFRO0FBQUEsS0FFcEMsMERBQ0csZ0JBQWdCLFVBQ2pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQTtBQUFBLEtBR2hCLG9DQUFTLGdCQUNSLDBEQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0Isd0JBQ2hDLE9BQ0MsdUJBQU0sSUFBSSxRQUFRLGdCQUNoQix1QkFBTSxJQUFJLFFBQVEscUJBSzFCLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLGtCQUNqQyxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixJQUFHO0FBQUEsS0FFSCxvQ0FBQyxtQkFBRDtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsYUFBYSx1QkFBTSxJQUFJLFFBQVE7QUFBQSxRQUlyQyxvQ0FBQyxPQUFELFFBSUosb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osQ0FBQyxRQUFRLGdCQUNSLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFDUCxRQUFRLE9BQ047QUFBQSxNQUNFLFlBQVksUUFBUTtBQUFBLE1BQ3BCLEtBQUssOEJBQVE7QUFBQSxPQUVmLEVBQUUsUUFBUTtBQUFBLEtBR2YsV0FJRixZQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQTtBQUFBLEtBR2pCLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQ1AsUUFBUSxPQUNOO0FBQUEsTUFDRSxZQUFZLFFBQVE7QUFBQSxPQUV0QixFQUFFLFFBQVE7QUFBQSxLQUdmLG9CQUtILG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFTLE1BQU0sa0JBQWtCLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDekMsV0FBVTtBQUFBLEtBQ1gscUJBS0Ysa0JBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDLE1BQU07QUFDZixVQUNFLDRCQUFNLEVBQUUsT0FBTyxTQUNmLHVCQUFNLElBQUksUUFBUSxpQkFDbEI7QUFDQSxzQkFBYyxFQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsTUFJN0Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsVUFBVSxDQUFDO0FBQUEsSUFDWCxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixjQUFRLE9BQ047QUFBQSxRQUNFLFlBQVksUUFBUTtBQUFBLFFBQ3BCLEtBQUssNEJBQU0sWUFBWTtBQUFBLFNBRXpCLEVBQUUsUUFBUTtBQUVaLGtCQUFZO0FBQUE7QUFBQSxLQUVmLGFBT1Qsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFBQSxLQUVuQyxvQ0FBQywwQkFBRCxVQUtOLG9DQUFDLHVCQUFEO0FBQUE7OztBRXRPVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBMEI7QUFDMUIscUJBTU87QUFHQSxJQUFJLFdBQVMsWUFBWTtBQUM5QixRQUFNLGdCQUFnQixNQUFNO0FBQzVCLFNBQU87QUFBQTtBQUdNLCtCQUErQjtBQUM1QyxNQUFJLENBQUMsY0FBYyxtQkFBbUI7QUFDdEMsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sRUFBRSxjQUFjO0FBRXRCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNO0FBQ2IsZUFBUyxZQUFZO0FBQUE7QUFBQSxJQUV2QixXQUFXLDRCQUNULGFBQWEsSUFBSSxtQkFBbUI7QUFBQSxLQUV2QyxRQUdBLGNBQWMsSUFBSSxDQUFDLFdBQ2xCLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFNBQVMsTUFBTTtBQUNiLHNCQUFnQixFQUFFLGNBQWMsT0FBTztBQUFBO0FBQUEsSUFFekMsV0FBVyw0QkFDVCxhQUFhLElBQUksb0JBQW9CLE9BQU8sT0FDeEMsY0FDQTtBQUFBLEtBR0wsK0JBQVUsT0FBTyxVQUl4QixvQ0FBQyx1QkFBRDtBQUFBOzs7QUNuRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUU7QUFFckUsc0JBQThDO0FBRTlDLHFCQUFvQztBQUNwQyx3Q0FBMEI7QUFFbkIsSUFBSSxXQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLGVBQWUsSUFBSSxhQUFhLElBQUk7QUFDeEMsUUFBTSxZQUFZLE1BQU0sYUFBYTtBQUVyQyxTQUFPO0FBQUE7QUFHRixJQUFJLFVBQVMsT0FBTyxFQUFFLFFBQVEsY0FBYztBQUNqRCxRQUFNLEVBQUUsV0FBVyxTQUFTO0FBRTVCLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxXQUFXLEtBQUssSUFBSTtBQUV4QixRQUFNLHNCQUFzQjtBQUFBLElBQzFCLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQTtBQUVmLFNBQU8sNkJBQVMsWUFBWTtBQUFBO0FBR2YsNEJBQTRCO0FBQ3pDLFFBQU0sRUFBRSxjQUFjO0FBQ3RCLFFBQU0sQ0FBQyxVQUFVLGVBQWUsNkJBQVM7QUFDekMsUUFBTSxDQUFDLFVBQVUsZUFBZSw2QkFBUztBQUN6QyxRQUFNLFlBQVk7QUFDbEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sZ0JBQWdCLCtCQUNwQiw2QkFDRSxXQUNBLENBQUMsYUFDQyxHQUFHLCtCQUFVLFNBQVMsU0FDcEIsc0NBQVUsV0FBVSxJQUFJLCtCQUFVLFNBQVMsY0FBYyxPQUcvRCxDQUFDLE1BQU0sRUFBRSxHQUFHO0FBR2QsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsNkNBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFVBQVU7QUFBQSxJQUNWLFNBQVMsVUFBVSxJQUNqQixDQUFDLGFBQ0MsR0FBRywrQkFBVSxTQUFTLFNBQ3BCLHNDQUFVLFdBQVUsSUFBSSwrQkFBVSxTQUFTLGNBQWM7QUFBQSxJQUcvRCxhQUFZO0FBQUEsSUFDWjtBQUFBLE1BRUYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNO0FBQ2Isa0JBQVk7QUFDWixjQUFRLE9BQ04sRUFBRSxVQUFVLGNBQWMsYUFDMUIsRUFBRSxRQUFRO0FBQUE7QUFBQSxJQUdkLFdBQVU7QUFBQSxJQUNWLFVBQVUsQ0FBQyxZQUFZO0FBQUEsS0FDeEIsU0FJSCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBSSxZQUFZO0FBQUEsS0FDcEIsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQTJCO0FBQUE7OztBQzlFM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbUU7QUFDbkUsc0JBQWtEO0FBQ2xELHFCQUF5QjtBQVd6QixpQkFBOEI7OztBQ2I5QjtBQUFBLGdCQUF3QjtBQUN4QixnQkFBNEI7QUFDNUIscUJBQW9DO0FBQ3BDLHNCQUF5QjtBQUVWLGtCQUFrQixPQUFPO0FBQ3RDLFFBQU0sQ0FBQyxRQUFRLGFBQWEsNkJBQVMsTUFBTTtBQUMzQyxRQUFNLENBQUMsYUFBYSxrQkFBa0IsNkJBQVMsTUFBTTtBQUNyRCxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsNkJBQVMsTUFBTTtBQUNqRCxRQUFNLENBQUMsVUFBVSxlQUFlLDZCQUFTO0FBQ3pDLFFBQU0sV0FBVyw4QkFDZixDQUFDLFNBQVEsY0FBYSxZQUFXLFVBQy9CLE1BQU0sV0FBVyxTQUFRLGNBQWEsWUFBVyxRQUNuRCxLQUNBO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUE7QUFHZCxnQ0FBVSxNQUFNO0FBQ2QsS0FBRSxFQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFDMUIsU0FBUyxRQUFRLGFBQWEsV0FBVyxNQUFNLFNBQy9DO0FBQUEsS0FDSCxDQUFDLFFBQVEsYUFBYTtBQUV6QixTQUFPLENBQUMsV0FDTixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxpQkFBaUIsWUFBWSxZQUFZO0FBQUE7QUFBQSxLQUczQyxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLE1BQU07QUFDZixnQkFBVSxFQUFFLE9BQU87QUFBQTtBQUFBLE9BS3pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2YscUJBQWUsRUFBRSxPQUFPO0FBQUE7QUFBQSxPQUk5QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixrQkFBWTtBQUNaLFlBQU07QUFBQTtBQUFBLEtBR1Isb0NBQUMsbUJBQUQ7QUFBQSxJQUFTLE1BQU07QUFBQSxRQUduQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFTLE1BQU07QUFDYixtQkFBYSxDQUFDLGFBQWE7QUFDekIsZUFBTyxDQUFDO0FBQUE7QUFBQTtBQUFBLElBR1osV0FBVyw0QkFDVCxZQUFZLGVBQWU7QUFBQSxLQUc3QixvQ0FBQyx1QkFBRDtBQUFBLElBQWEsTUFBTTtBQUFBLFVBS3pCO0FBQUE7OztBRHZFSiw0QkFBdUI7QUFFaEIsSUFBSSxXQUFTLE9BQU8sRUFBRSxhQUFhO0FBakIxQztBQWtCRSxRQUFNLGlCQUFpQixNQUFNLHVCQUF1QixPQUFPO0FBQzNELFFBQU0sU0FBUyx1REFBaUIsT0FBakIsbUJBQXFCO0FBQ3BDLE1BQUk7QUFDSixNQUFJLFFBQVE7QUFDVixVQUFNLE9BQU8sTUFBTSw2QkFBNkI7QUFDaEQsd0JBQW9CLDZCQUFPLE1BQ3hCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsYUFDakIsVUFBVSxDQUFDLE1BQU0sMkJBQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FDOUM7QUFBQTtBQUdMLFFBQU0sZUFBZSw2QkFDbkIsZ0JBQ0EsQ0FBQyxRQUNDLEdBQUcsK0JBQVUsSUFBSSxrQkFDZixJQUFJLFVBQVUsSUFBSSwrQkFBVSxJQUFJLGNBQWM7QUFHcEQsU0FBTyxFQUFFLGNBQWM7QUFBQTtBQUdsQixJQUFJLFVBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixVQUFRLFFBQVE7QUFBQSxTQUNUO0FBQ0gsVUFBSSxLQUFLLElBQUksWUFBWSxPQUFPO0FBQzlCLGNBQU0sVUFBVTtBQUNoQjtBQUFBO0FBQUEsU0FFQztBQUNILGFBQU8sTUFBTSxPQUFPO0FBQUEsU0FDakI7QUFDSCxVQUFJLEtBQUssSUFBSSxZQUFZLFlBQVk7QUFDbkMsY0FBTSwwQkFBMEI7QUFDaEM7QUFBQTtBQUVGLFVBQUksS0FBSyxJQUFJLFlBQVksT0FBTztBQUM5QixjQUFNLFVBQVU7QUFDaEI7QUFBQTtBQUFBO0FBR04sU0FBTztBQUFBO0FBR00saUNBQWlDO0FBQzlDLFFBQU0sRUFBRSxjQUFjLHNCQUFzQjtBQUM1QyxRQUFNLENBQUMsWUFBWSxpQkFBaUI7QUFDcEMsUUFBTSxFQUFFLGNBQWM7QUFDdEIsUUFBTSxVQUFVO0FBRWhCLFFBQU0scUJBQXFCLENBQUMsZUFBZSxTQUFTO0FBcEV0RDtBQXFFSSxVQUFNLGFBQWEsV0FBSyxPQUFMLG1CQUFTO0FBQzVCLFFBQUksY0FBYyxNQUFNO0FBQ3RCO0FBQUE7QUFFRixVQUFNLGtCQUFrQjtBQUFBLE1BQ3RCLFlBQVk7QUFBQSxNQUNaO0FBQUEsTUFDQSxxQkFBcUIsS0FBSyxHQUFHO0FBQUE7QUFHL0IsVUFBTSxnQkFBZ0IsQ0FBQyxRQUFRLGFBQWEsV0FBVyxVQUNyRCxRQUFRLE9BQ047QUFBQSxNQUNFO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsTUFBTTtBQUFBLE9BRVIsRUFBRSxRQUFRO0FBR2QsVUFBTSxhQUFhLENBQUMsVUFBVTtBQUM1QixjQUFRLE9BQ047QUFBQSxRQUNFLFlBQVk7QUFBQSxRQUNaO0FBQUEsUUFDQSxNQUFNO0FBQUEsUUFDTjtBQUFBLFNBRUYsRUFBRSxRQUFRO0FBQUE7QUFJZCxVQUFNLGFBQWEsTUFBTTtBQUN2QixjQUFRLE9BQU8saUJBQWlCLEVBQUUsUUFBUTtBQUFBO0FBRzVDLFVBQU0sa0JBQWtCLGtCQUFrQjtBQUUxQyxXQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUFtQixlQUFjLE1BRS9DLG1CQUNDLG9DQUFDLEtBQUQsTUFDRSxvQ0FBQyxLQUFELE1BQUcsU0FBUSxLQUFFLGdCQUFnQixRQUFPLE1BQUcsS0FDdEMsZ0JBQWdCLGFBQVksT0FBSSxnQkFBZ0IsYUFHckQsb0NBQUMsTUFBRDtBQUFBLE1BQUksV0FBVTtBQUFBLFFBRWIsS0FBSyxJQUFJLENBQUMsUUFDVCxvQ0FBQyxVQUFEO0FBQUEsTUFDRSxLQUFLLElBQUk7QUFBQSxNQUNULE9BQU8sSUFBSTtBQUFBLE1BQ1gsUUFBUSxJQUFJO0FBQUEsTUFDWixXQUFXLElBQUk7QUFBQSxNQUNmLGFBQWEsSUFBSTtBQUFBLE1BQ2pCLFlBQVksTUFBTSxXQUFXLElBQUk7QUFBQSxNQUNqQyxZQUFZO0FBQUEsU0FHZixRQUFRLGNBQ1QsUUFBUSxXQUFXLFNBQVMsSUFBSSxxQkFBcUIsaUJBQ3JELFFBQVEsV0FBVyxXQUFXLFNBQzVCLG9DQUFDLDZCQUFPLEtBQVI7QUFBQSxNQUNFLFNBQVMsRUFBRSxTQUFTLEdBQUcsT0FBTztBQUFBLE1BQzlCLFNBQVMsRUFBRSxTQUFTLEdBQUcsT0FBTztBQUFBLE1BQzlCLFlBQVksRUFBRSxVQUFVO0FBQUEsT0FFeEIsb0NBQUMsVUFBRDtBQUFBLE1BQ0UsUUFBUSxRQUFRLFdBQVcsU0FBUyxJQUFJO0FBQUEsTUFDeEMsYUFBYSxRQUFRLFdBQVcsU0FBUyxJQUFJO0FBQUEsTUFDN0MsT0FBTyxRQUFRLFdBQVcsU0FBUyxJQUFJO0FBQUEsTUFDdkMsWUFBWSxNQUNWLFdBQVcsUUFBUSxXQUFXLFNBQVMsSUFBSTtBQUFBLE1BRTdDLFlBQVk7QUFBQSxVQUdkLE1BRUosb0NBQUMsV0FBRDtBQUFBLE1BQVMsV0FBVTtBQUFBLE9BQ2pCLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLE9BQU8sRUFBRSxPQUFPO0FBQUEsT0FDbkIsb0NBQUMsVUFBRDtBQUFBLE1BQ0UsVUFDRSxRQUFRLGNBQ1IsUUFBUSxXQUFXLFNBQVMsSUFBSSxxQkFDOUIsaUJBQ0YsUUFBUSxXQUFXLFdBQVc7QUFBQSxNQUVoQyxTQUFTLE1BQU07QUFDYjtBQUFBO0FBQUEsTUFFRixXQUFVO0FBQUEsT0FDWCxXQUtILG9DQUFDLE9BQUQ7QUFBQSxNQUNFLFdBQVcsR0FDVCwwQ0FBYSxnQkFBZSxRQUFRLGNBQWM7QUFBQSxPQUdwRCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxVQUFEO0FBQUEsTUFDRSxXQUFVO0FBQUEsTUFDVixpQkFBYztBQUFBLE1BQ2QsaUJBQWM7QUFBQSxNQUNkLFNBQVMsTUFDUCxjQUFjLENBQUMsTUFBTyxpQ0FDakIsSUFEaUI7QUFBQSxTQUVuQixhQUFhLENBQUUseUJBQUksZ0JBQWU7QUFBQTtBQUFBLE9BSXZDLG9DQUFDLDBCQUFELFNBR0osb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE1BQ1YsSUFBRztBQUFBLE1BQ0gsTUFBSztBQUFBLE9BRUwsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsVUFBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE1BQ1YsU0FBUyxNQUNQLFFBQVEsT0FDTixpQ0FBSyxrQkFBTCxFQUFzQixNQUFNLGVBQzVCLEVBQUUsUUFBUTtBQUFBLE9BR2Y7QUFBQTtBQWFuQixTQUNFLDBEQUNHLE9BQU8sUUFBUSxjQUFjLElBQUksQ0FBQyxDQUFDLGVBQWUsT0FBTyxZQUN4RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsS0FBVSxtQkFBbUIsZUFBZSxTQUV4RCxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFJLFlBQVk7QUFBQSxLQUNwQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBNkM7QUFBQTs7O0FFcE92RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpRTtBQUNqRSxzQkFBMEI7QUFFMUIscUJBQXlCO0FBR3pCLHFCQUFrQjtBQUNsQiw0QkFBdUI7QUFFdkIsSUFBTSxPQUFNLFFBQVE7QUFDcEIsdUJBQU0sT0FBTztBQUVOLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQVozQztBQWFFLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxTQUFTLEtBQUssSUFBSTtBQUN0QixNQUFJLE9BQU8sS0FBSyxJQUFJO0FBQ3BCLE1BQUksV0FBVyxLQUFLLElBQUk7QUFDeEIsTUFBSSxXQUFXLEtBQUssSUFBSTtBQUN4QixhQUFXLDRDQUFVLGtCQUFWLG1CQUF5QixRQUFRLE1BQU0sU0FBUTtBQUMxRCxRQUFNLGtCQUFrQixNQUFNLGNBQWM7QUFBQSxJQUMxQztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBR0YsU0FBTyw2QkFBUyxZQUFZO0FBQUE7QUFHdkIsSUFBSSxXQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixRQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDbEMsUUFBTSxZQUFZLE1BQU0sYUFBYTtBQUNyQyxTQUFPO0FBQUE7QUFHTSw4QkFBOEI7QUFDM0MsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sQ0FBQyxNQUFNLFdBQVc7QUFDeEIsUUFBTSxDQUFDLGFBQWEsa0JBQWtCO0FBRXRDLFFBQU0sU0FBUztBQUNmLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QjtBQUFBLEtBQ3ZCLG9DQUFDLDZCQUFPLEtBQVI7QUFBQSxJQUNFLFNBQVMsRUFBRSxTQUFTLEtBQUssR0FBRztBQUFBLElBQzVCLFNBQVMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUFBLElBQzFCLE1BQU0sRUFBRSxTQUFTLEdBQUcsR0FBRztBQUFBLElBQ3ZCLFlBQVksRUFBRSxVQUFVO0FBQUEsSUFDeEIsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWtCLHVCQUNoQyxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsVUFBVSxPQUFPLFVBQVU7QUFDekIsWUFBTTtBQUNOLFlBQU0sTUFBTSxLQUFLO0FBQ2pCLFlBQU0sU0FBUyxTQUFTLGNBQWM7QUFDdEMsYUFBTyxhQUFhLFFBQVE7QUFDNUIsYUFBTyxhQUFhLFFBQVE7QUFDNUIsYUFBTyxhQUFhLFNBQVM7QUFFN0IsWUFBTSxXQUFXLFNBQVMsY0FBYztBQUN4QyxlQUFTLGFBQWEsUUFBUTtBQUM5QixlQUFTLGFBQWEsUUFBUTtBQUM5QixlQUFTLGFBQ1AsU0FDQSw0QkFBTSxHQUFHLE1BQU0sT0FBTyxjQUFjLFlBQVk7QUFHbEQsWUFBTSxPQUFPLFNBQVMsY0FBYztBQUNwQyxXQUFLLGFBQWEsUUFBUTtBQUMxQixXQUFLLGFBQWEsUUFBUTtBQUMxQixXQUFLLGFBQ0gsU0FDQSxNQUFNLE9BQU8sZ0JBQWdCLFVBQVUsS0FDbkMsR0FBRyw0QkFBTSxzQkFBc0IsT0FBTyxvQkFDdEMsTUFBTSxPQUFPLGdCQUFnQjtBQUduQyxZQUFNLE9BQU8sT0FBTztBQUNwQixZQUFNLE9BQU8sT0FBTztBQUNwQixZQUFNLE9BQU8sT0FBTztBQUVwQixhQUFPLE1BQU07QUFBQTtBQUFBLEtBR2Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsZUFFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBYSxHQUFHLDRCQUFNLHNCQUFzQixPQUMxQztBQUFBLFNBT1Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsVUFFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsY0FBYztBQUFBLFNBS3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFRLGNBRTNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsT0FBQyxFQUFFLE9BQU8sUUFDTixlQUFlLFNBQ2YsZUFBZTtBQUFBO0FBQUEsSUFFckIsTUFBSztBQUFBLElBQ0wsY0FBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BRVAsb0NBQUMsWUFBRDtBQUFBLElBQVUsSUFBRztBQUFBLElBQVksV0FBVTtBQUFBLEtBQ2hDLFVBQVUsSUFBSSxDQUFDLFNBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQVEsS0FBSyxLQUFLO0FBQUEsSUFBTSxPQUFPLCtCQUFVLEtBQUs7QUFBQSxXQU14RCxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDO0FBQUEsS0FDWixpQkFLTCxvQ0FBQyx1QkFBRDtBQUFBOzs7QUM5SlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXlCO0FBRWxCLElBQUksV0FBUyxZQUFZO0FBQzlCLFNBQU8sNkJBQVM7QUFBQTtBQUVILGlCQUFpQjtBQUM5QixTQUFPO0FBQUE7OztBQ05UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeUI7QUFFekIsNEJBQXVCO0FBRXZCLHFCQUFxQjtBQUVOLHFCQUFxQjtBQUNsQyxRQUFNLENBQUMsUUFBUSxhQUFhO0FBQzVCLFFBQU0sQ0FBQyxNQUFNLFdBQVc7QUFFeEIsU0FDRSxvQ0FBQyw2QkFBTyxLQUFSO0FBQUEsSUFDRSxTQUFTLEVBQUUsU0FBUztBQUFBLElBQ3BCLFNBQVMsRUFBRSxTQUFTO0FBQUEsSUFDcEIsTUFBTSxFQUFFLFNBQVM7QUFBQSxJQUNqQixZQUFZLEVBQUUsVUFBVTtBQUFBLEtBRXhCLG9DQUFDLHlCQUFEO0FBQUEsSUFBeUI7QUFBQSxJQUFzQjtBQUFBLEtBQzdDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxPQUVaLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU8sRUFBRSxPQUFPO0FBQUEsS0FFaEIsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLE9BRVgsT0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBc0QsV0FDekQsUUFBUSxLQUFLLGNBRXZCLG9DQUFDLEtBQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBSSxnQkFBZ0I7QUFBQSxLQUNyQiw2QkFHRCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLG9CQUFvQjtBQUFBLEtBQzNCLHdCQUdELG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU0sa0JBQWtCO0FBQUEsS0FDekIsdUJBR0Qsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTSxtQkFBbUI7QUFBQSxLQUMxQix3QkFHRCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLHNCQUFzQjtBQUFBLEtBQzdCLCtCQU9QLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0Isc0JBQ2pDLG9DQUFDLE9BQUQsTUFBSyxpQ0FDTCxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsZUFBRDtBQUFBOzs7QUMzRWhCO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxvQkFBbUIsRUFBQyxNQUFLLG9CQUFtQixZQUFXLFFBQU8sUUFBTyxhQUFZLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHVDQUFzQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG1DQUFrQyxFQUFDLE1BQUssbUNBQWtDLFlBQVcsb0JBQW1CLFFBQU8sa0JBQWlCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNEQUFxRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8seUNBQXdDLEVBQUMsTUFBSyx5Q0FBd0MsWUFBVyxvQkFBbUIsUUFBTyx3QkFBdUIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsNERBQTJELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyw2QkFBNEIsRUFBQyxNQUFLLDZCQUE0QixZQUFXLG9CQUFtQixRQUFPLFlBQVcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsZ0RBQStDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywrQkFBOEIsRUFBQyxNQUFLLCtCQUE4QixZQUFXLG9CQUFtQixRQUFPLGNBQWEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0RBQWlELFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHNDQUFxQyxFQUFDLE1BQUssc0NBQXFDLFlBQVcsb0JBQW1CLFFBQU8scUJBQW9CLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHlEQUF3RCxXQUFVLENBQUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0NBQXFDLEVBQUMsTUFBSyxzQ0FBcUMsWUFBVyxvQkFBbUIsUUFBTyxxQkFBb0IsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMseURBQXdELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxpQkFBZ0IsRUFBQyxNQUFLLGlCQUFnQixZQUFXLFFBQU8sUUFBTyxVQUFTLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG9DQUFtQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxvQkFBbUIsRUFBQyxNQUFLLG9CQUFtQixZQUFXLFFBQU8sUUFBTyxhQUFZLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHVDQUFzQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0NBQStCLEVBQUMsTUFBSyxnQ0FBK0IsWUFBVyxRQUFPLFFBQU8seUJBQXdCLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1EQUFrRCxXQUFVLENBQUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sdUJBQXNCLEVBQUMsTUFBSyx1QkFBc0IsWUFBVyxRQUFPLFFBQU8sZ0JBQWUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMENBQXlDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywyQkFBMEIsRUFBQyxNQUFLLDJCQUEwQixZQUFXLHVCQUFzQixRQUFPLE9BQU0sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsOENBQTZDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywrQkFBOEIsRUFBQyxNQUFLLCtCQUE4QixZQUFXLHVCQUFzQixRQUFPLFdBQVUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0RBQWlELFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG9DQUFtQyxFQUFDLE1BQUssb0NBQW1DLFlBQVcsK0JBQThCLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1REFBc0QsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0JBQWlCLEVBQUMsTUFBSyxrQkFBaUIsWUFBVyxRQUFPLFFBQU8sV0FBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxxQ0FBb0MsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDZCQUE0QixFQUFDLE1BQUssNkJBQTRCLFlBQVcsa0JBQWlCLFFBQU8sY0FBYSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxnREFBK0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlEQUFnRCxFQUFDLE1BQUssaURBQWdELFlBQVcsNkJBQTRCLFFBQU8sUUFBVSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvRUFBbUUsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sNkRBQTRELEVBQUMsTUFBSyw2REFBNEQsWUFBVyxpREFBZ0QsUUFBTyxlQUFjLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGdGQUErRSxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDhDQUE2QyxFQUFDLE1BQUssOENBQTZDLFlBQVcsNkJBQTRCLFFBQU8sb0JBQW1CLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGlFQUFnRSxXQUFVLENBQUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUJBQWtCLEVBQUMsTUFBSyxtQkFBa0IsWUFBVyxRQUFPLFFBQU8sWUFBVyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxzQ0FBcUMsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBMUMwQmowUixJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0NBQWdDO0FBQUEsSUFDNUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLCtCQUErQjtBQUFBLElBQzNCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0NBQW9DO0FBQUEsSUFDaEMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwyQkFBMkI7QUFBQSxJQUN2QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG9CQUFvQjtBQUFBLElBQ2hCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUNBQXlDO0FBQUEsSUFDckMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQ0FBc0M7QUFBQSxJQUNsQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNDQUFzQztBQUFBLElBQ2xDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosbUNBQW1DO0FBQUEsSUFDL0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwrQkFBK0I7QUFBQSxJQUMzQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZCQUE2QjtBQUFBLElBQ3pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixtQkFBbUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0JBQWtCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZCQUE2QjtBQUFBLElBQ3pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaURBQWlEO0FBQUEsSUFDN0MsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiw2REFBNkQ7QUFBQSxJQUN6RCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDhDQUE4QztBQUFBLElBQzFDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
