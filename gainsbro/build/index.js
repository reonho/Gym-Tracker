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
    crossorigin: "anonymous"
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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics.jsx
var analytics_exports = {};
__export(analytics_exports, {
  default: () => AnalyticsRoute
});
init_react();
var import_remix5 = __toESM(require_remix());

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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics.jsx
var import_dayjs = __toESM(require("dayjs"));
var import_react4 = require("react");
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs.default.extend(weekOfYear);
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix5.useSearchParams)();
  const location = (0, import_remix5.useLocation)();
  const user = searchParams.get("user");
  const week = (0, import_dayjs.default)().week();
  const navigate = (0, import_remix5.useNavigate)();
  (0, import_react4.useEffect)(() => {
    if (location.pathname === "/analytics/") {
      navigate(`/analytics/trained-this-week?user=${user}&week=${week}`);
    }
  }, [location, navigate, user, week]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 m-5"
  }, "Analytics"), /* @__PURE__ */ React.createElement("div", {
    className: "level"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-item "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box container"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "menu"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "menu-label"
  }, "Effort Stats"), /* @__PURE__ */ React.createElement("ul", {
    className: "menu-list"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/trained-this-week" ? "is-active" : null,
    href: `/analytics/trained-this-week?user=${user}&week=${week}`
  }, "Trained this week")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/workouts-per-week" ? "is-active" : null,
    href: `/analytics/workouts-per-week?user=${user}`
  }, "Workouts per Week")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/schedule" ? "is-active" : null,
    href: `/analytics/schedule?user=${user}&week=${week}`
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
    className: "box container"
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var progressive_overload_exports = {};
__export(progressive_overload_exports, {
  default: () => ProgressRoute,
  loader: () => loader3
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
var import_dayjs2 = __toESM(require("dayjs"));
var weekOfYear2 = require("dayjs/plugin/weekOfYear");
import_dayjs2.default.extend(weekOfYear2);
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
  const filter_date_start = filter_start ? (0, import_dayjs2.default)(filter_start) : (0, import_dayjs2.default)((0, import_dayjs2.default)().week((0, import_dayjs2.default)().week()).startOf("week").startOf("day"));
  const filter_date_end = filter_end ? (0, import_dayjs2.default)(filter_end) : (0, import_dayjs2.default)();
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
var import_remix6 = __toESM(require_remix());
var import_lodash3 = require("lodash");

// app/components/ProgressiveOverload.js
init_react();
var import_react5 = require("react");
var import_auto = __toESM(require("chart.js/auto"));
var import_chart = require("chart.js");
var import_dayjs3 = __toESM(require("dayjs"));
var import_lodash2 = require("lodash");
import_auto.default.register([import_chart.Tooltip]);
function ProgressiveOverload(props) {
  const [ctx, setCtx] = (0, import_react5.useState)(null);
  const exerciseProgress = (0, import_lodash2.sortBy)(props.progressiveOverload, (e) => e.datetime_start);
  (0, import_react5.useEffect)(() => {
    let color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`;
    setCtx(document.getElementById("progressiveOverload"));
    let chartStatus = import_auto.default.getChart("progressiveOverload");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    if (exerciseProgress.length === 0) {
      return;
    }
    const progressiveOverloadChart = new import_auto.default(ctx, {
      type: "line",
      data: {
        labels: exerciseProgress.map((e) => (0, import_dayjs3.default)(e.datetime_start).format("DD/MM/YY")),
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
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "progressiveOverload"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var loader3 = async ({ request }) => {
  var _a;
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const exercises = await getExercisesForUser(user);
  let exercise = url.searchParams.get("exercise_id") ?? ((_a = exercises[0]) == null ? void 0 : _a.id);
  const sets = await getBestSetPerWorkoutExercise(user, exercise);
  const setsByExercise = (0, import_lodash3.groupBy)(sets, (s) => s.exercise_id)[exercise];
  return { setsByExercise, exercises };
};
function ProgressRoute() {
  const { setsByExercise, exercises } = (0, import_remix6.useLoaderData)();
  const submit = (0, import_remix6.useSubmit)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
  const singleExerciseChart = setsByExercise;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Progressive Overload"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), singleExerciseChart && /* @__PURE__ */ React.createElement("div", {
    className: "select mb-4 is-small"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
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
  }, `${(0, import_lodash3.startCase)(e.name)} ${(e == null ? void 0 : e.variant) ? `(${(0, import_lodash3.startCase)(e.variant)})` : ""}`)))))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, singleExerciseChart ? /* @__PURE__ */ React.createElement(ProgressiveOverload, {
    progressiveOverload: singleExerciseChart
  }) : "Nothing trained yet"));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\trained-this-week.jsx
var trained_this_week_exports = {};
__export(trained_this_week_exports, {
  action: () => action2,
  default: () => ThisWeekRoute,
  loader: () => loader4
});
init_react();
var import_remix7 = __toESM(require_remix());
var import_dayjs4 = __toESM(require("dayjs"));
var import_lodash5 = __toESM(require("lodash"));

// app/components/WeeklyTrainingSets.js
init_react();
var import_react6 = require("react");
var import_auto2 = __toESM(require("chart.js/auto"));
var import_lodash4 = require("lodash");
function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = (0, import_react6.useState)(null);
  const sets = props.weeklySets;
  (0, import_react6.useEffect)(() => {
    let chartStatus = import_auto2.default.getChart("weeklySets");
    if (chartStatus) {
      chartStatus.destroy();
    }
    if (Object.keys(sets).length === 0) {
      return;
    }
    setCtx(document.getElementById("weeklySets"));
    const weeklySetsChart = new import_auto2.default(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(sets).map((e) => (0, import_lodash4.startCase)(e)),
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
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "weeklySets"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\trained-this-week.jsx
var weekOfYear3 = require("dayjs/plugin/weekOfYear");
import_dayjs4.default.extend(weekOfYear3);
var action2 = async ({ request }) => {
};
var loader4 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let week = url.searchParams.get("week");
  const weekStartingOnDay = (0, import_dayjs4.default)().week(week).startOf("week").startOf("day");
  const userWorkouts = await getSetsForUser(user, weekStartingOnDay, weekStartingOnDay.add(1, "week"));
  return (0, import_lodash5.default)(userWorkouts).groupBy((set) => set.muscle_group).mapValues((e) => e.length);
};
function ThisWeekRoute() {
  const weeklySets = (0, import_remix7.useLoaderData)();
  const [searchParams] = (0, import_remix7.useSearchParams)();
  const week = searchParams.get("week");
  const weekStartingOnDay = (0, import_dayjs4.default)().week(week).startOf("week").startOf("day");
  const currentWeek = (0, import_dayjs4.default)().week();
  const submit = (0, import_remix7.useSubmit)();
  const renderTrainedThisWeek = () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "title is-4 mb-2"
    }, "Trained this Week"), /* @__PURE__ */ React.createElement("hr", {
      className: "mt-2 mb-3"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(1, "week").subtract(1, "day").format("DD/MM/YYYY")), " ", "-", " ", /* @__PURE__ */ React.createElement("i", null, "Week ", week, " of ", weekStartingOnDay.format("YYYY")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
      className: "select mt-2 mb-2"
    }, /* @__PURE__ */ React.createElement(import_remix7.Form, {
      method: "get"
    }, /* @__PURE__ */ React.createElement("select", {
      className: "input",
      value: week,
      onChange: (e) => {
        submit({
          week: e.target.value,
          user: searchParams.getAll("user")
        });
      }
    }, Array(parseInt(currentWeek)).fill(0).map((item, index) => {
      return /* @__PURE__ */ React.createElement("option", {
        value: index + 1,
        key: index + 1
      }, "Week ", index + 1);
    }))))), Object.keys(weeklySets).length === 0 && "Nothing trained this week", /* @__PURE__ */ React.createElement(WeeklyTrainingSets, {
      weeklySets
    }));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, renderTrainedThisWeek());
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\workouts-per-week.jsx
var workouts_per_week_exports = {};
__export(workouts_per_week_exports, {
  default: () => WorkoutsPerWeekRoute,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());

// app/service/workouts.js
init_react();
var import_dayjs5 = __toESM(require("dayjs"));
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
    const { data } = await supabase_default.from("workouts_with_location").select("*").eq("user_id", userId).gte("datetime_start", (0, import_dayjs5.default)(startDate)).lte("datetime_start", (0, import_dayjs5.default)(endDate));
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
var import_lodash7 = __toESM(require("lodash"));
var import_dayjs6 = __toESM(require("dayjs"));

// app/components/WorkoutsPerWeek.js
init_react();
var import_react7 = require("react");
var import_auto3 = __toESM(require("chart.js/auto"));
var import_lodash6 = require("lodash");
function WorkoutsPerWeek(props) {
  const [ctx, setCtx] = (0, import_react7.useState)(null);
  (0, import_react7.useEffect)(() => {
    let chartStatus = import_auto3.default.getChart("workoutsPerWeek");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    if (Object.keys(props.workoutsPerWeek).length === 0) {
      return;
    }
    setCtx(document.getElementById("workoutsPerWeek"));
    const workoutsPerWeekChart = new import_auto3.default(ctx, {
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
var loader5 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getWorkoutsForUser(user);
  workouts = (0, import_lodash7.default)(workouts).groupBy((w) => (0, import_dayjs6.default)(w.datetime_start).week()).mapValues((e) => e.length).value();
  let weeksToShow = Object.keys(workouts).map((e) => parseInt(e));
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash7.transform)((0, import_lodash7.pick)(workouts, weeksToShow), (res, val, key) => res[`${(0, import_dayjs6.default)((0, import_dayjs6.default)().week(key).startOf("week").startOf("day")).format("DD/M/YY")} - ${(0, import_dayjs6.default)((0, import_dayjs6.default)().week(key).endOf("week").startOf("day")).format("DD/M/YY")}`] = val);
};
function WorkoutsPerWeekRoute() {
  const workouts = (0, import_remix8.useLoaderData)();
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
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_lodash9 = __toESM(require("lodash"));
var import_react9 = require("react");

// app/components/PersonalBest.js
init_react();
var import_react8 = require("react");
var import_auto4 = __toESM(require("chart.js/auto"));
var import_lodash8 = require("lodash");
function PersonalRecords(props) {
  const [ctx, setCtx] = (0, import_react8.useState)(null);
  (0, import_react8.useEffect)(() => {
    let chartStatus = import_auto4.default.getChart("personalRecords");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    if (Object.keys(props.bestSets).length === 0) {
      return;
    }
    setCtx(document.getElementById("personalRecords"));
    const prChart = new import_auto4.default(ctx, {
      type: "bar",
      data: {
        labels: props.bestSets.map((value) => (0, import_lodash8.startCase)(`${value.exercise_name} ${value.variant ?? ""}`)),
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
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "personalRecords"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\personal-bests.jsx
var loader6 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const sets = await getBestSetPerWorkoutExercise(user);
  const bestSetByExercise = (0, import_lodash9.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash9.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  return Object.values(bestSetByExercise);
};
function PersonalBestRoute() {
  const listBestSets = (0, import_remix9.useLoaderData)();
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
  loader: () => loader7
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_lodash10 = __toESM(require("lodash"));
var import_dayjs7 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs7.default.extend(weekOfYear4);
var loader7 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs7.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
  return [stats, totalTimeSpent, Math.round(totalTimeSpent / workouts.length)];
};
function StatisticsRoute() {
  const [stats, totalTimeSpent, averageTimeSpent] = (0, import_remix10.useLoaderData)();
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
  console.log(formatNumber(9e5));
  let workoutsTable = stats.map((w) => ({
    Exercise: `${(0, import_lodash10.startCase)(w.name)} ${(w == null ? void 0 : w.variant) ? `(${(0, import_lodash10.startCase)(w.variant)})` : ""}`,
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
  }, /* @__PURE__ */ React.createElement("b", null, abbv[name], " (", name, "):", " "), /* @__PURE__ */ React.createElement("i", null, name === "Vol" ? formatNumber((0, import_lodash10.reduce)(Object.values(workoutsTable), (a, b) => a + b[name], 0)) : (0, import_lodash10.reduce)(Object.values(workoutsTable), (a, b) => a + b[name], 0))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader8
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_lodash11 = __toESM(require("lodash"));
var import_dayjs8 = __toESM(require("dayjs"));
var weekOfYear5 = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
import_dayjs8.default.extend(weekOfYear5);
import_dayjs8.default.extend(utc);
var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var loader8 = async ({ request }) => {
  let url = new URL(request.url);
  let week = url.searchParams.get("week");
  let user = url.searchParams.get("user");
  const weekStartingOnDay = (0, import_dayjs8.default)().week(week).startOf("week").startOf("day");
  let workouts = await getSetsForUser(user, weekStartingOnDay, weekStartingOnDay.add(1, "week"));
  return workouts;
};
function WeeklyScheduleRoute() {
  let workoutData = (0, import_remix11.useLoaderData)();
  const [searchParams] = (0, import_remix11.useSearchParams)();
  const week = searchParams.get("week");
  const weekStartingOnDay = (0, import_dayjs8.default)().week(week).startOf("week").startOf("day");
  const submit = (0, import_remix11.useSubmit)();
  const currentWeek = (0, import_dayjs8.default)().week();
  const workouts = (0, import_lodash11.default)(workoutData).groupBy((w) => import_dayjs8.default.utc(w.datetime_start).local().format("dddd")).mapValues((v) => (0, import_lodash11.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length).value()).value();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(1, "week").subtract(1, "day").format("DD/MM/YYYY")), " ", "-", " ", /* @__PURE__ */ React.createElement("i", null, "Week ", (0, import_dayjs8.default)().week(), " of ", weekStartingOnDay.format("YYYY"))), /* @__PURE__ */ React.createElement("div", {
    className: "select mt-2 mb-2"
  }, /* @__PURE__ */ React.createElement(import_remix11.Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("select", {
    className: "input",
    value: week,
    onChange: (e) => {
      submit({
        week: e.target.value,
        user: searchParams.getAll("user")
      });
    }
  }, Array(parseInt(currentWeek)).fill(0).map((item, index) => {
    return /* @__PURE__ */ React.createElement("option", {
      value: index + 1,
      key: index + 1
    }, "Week ", index + 1);
  })))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
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
    }, /* @__PURE__ */ React.createElement("b", null, (0, import_lodash11.startCase)(k), " - ", v));
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
  action: () => action3,
  default: () => ManageLocationsRoute,
  loader: () => loader9
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_lodash13 = require("lodash");
var import_react11 = require("react");

// app/components/LocationPie.js
init_react();
var import_react10 = require("react");
var import_auto5 = __toESM(require("chart.js/auto"));
var import_lodash12 = require("lodash");
function LocationPie(props) {
  const [ctx, setCtx] = (0, import_react10.useState)(null);
  (0, import_react10.useEffect)(() => {
    let chartStatus = import_auto5.default.getChart("locationPie");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    console.log(props.locations);
    if (Object.keys(props.locations).length === 0) {
      return;
    }
    setCtx(document.getElementById("locationPie"));
    const locationPie = new import_auto5.default(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(props.locations).map((value) => (0, import_lodash12.startCase)(value)),
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
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    id: "locationPie"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.jsx
var import_dayjs9 = __toESM(require("dayjs"));
var loader9 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const lastMonthStart = (0, import_dayjs9.default)().month((0, import_dayjs9.default)().month()).startOf("month").startOf("day");
  const lastMonthEnd = (0, import_dayjs9.default)().month((0, import_dayjs9.default)().month()).endOf("month").endOf("day");
  const locations = await getLocations(user);
  const workoutsForUser = await getWorkoutsForUser(user, lastMonthStart, lastMonthEnd);
  return [
    locations,
    (0, import_lodash13.mapValues)((0, import_lodash13.groupBy)(workoutsForUser, "location_name"), (e) => e.length)
  ];
};
var action3 = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};
function ManageLocationsRoute() {
  const [locations, workoutsForUser] = (0, import_remix12.useLoaderData)();
  const [user, setUser] = (0, import_react11.useState)();
  const [searchParams] = (0, import_remix12.useSearchParams)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Saved Locations"), /* @__PURE__ */ React.createElement("div", {
    className: "m-5 p-3"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-5"
  }, "Locations Breakdown in ", (0, import_dayjs9.default)().format("MMMM")), /* @__PURE__ */ React.createElement(LocationPie, {
    locations: workoutsForUser
  })), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix12.Link, {
    key: e.id,
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash13.startCase)(e.name))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader10
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_lodash14 = require("lodash");
var import_dayjs10 = __toESM(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs10.default.extend(utc2);
var loader10 = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};
function ViewWorkoutRoute() {
  const workouts = (0, import_remix13.useLoaderData)();
  const [searchParams] = (0, import_remix13.useSearchParams)();
  const userId = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: " m-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mb-3"
  }, "Workouts"), workouts.length === 0 && "No workouts yet", workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix13.Link, {
    key: "workout.id",
    className: "box",
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs10.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs10.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash14.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
    size: 40,
    className: "m-4 p-1"
  }) : /* @__PURE__ */ React.createElement(import_bs.BsClockHistory, {
    size: 40,
    className: "m-4 p-1"
  }))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout.jsx
var workout_exports = {};
__export(workout_exports, {
  default: () => NewWorkoutRoute
});
init_react();
var import_remix14 = __toESM(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_remix14.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action4,
  default: () => StartNewWorkoutRoute,
  loader: () => loader11
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_lodash15 = require("lodash");
var import_react13 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react12 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react12.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react12.useState)(props.running);
  (0, import_react12.useEffect)(() => {
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
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react12.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react12.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react12.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var import_dayjs11 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc3 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs11.default.extend(utc3);
import_dayjs11.default.extend(relativeTime);
var loader11 = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};
var action4 = async ({ request, params }) => {
  if (request.method == "POST") {
    const form = await request.formData();
    const workout = await finishWorkout(form.get("workout_id"), form.get("end"));
    return workout;
  }
  if (request.method == "DELETE") {
    const form = await request.formData();
    const workout = await deleteWorkout(form.get("workout_id"));
    return (0, import_remix15.redirect)("/");
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
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash15.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
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
  const workout = (0, import_remix15.useLoaderData)()[0];
  const fetcher = (0, import_remix15.useFetcher)();
  const [userId, setUserId] = (0, import_react13.useState)();
  const [showMenu, setShowMenu] = (0, import_react13.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react13.useState)(false);
  const [customDate, setCustomDate] = (0, import_react13.useState)(null);
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
  }, /* @__PURE__ */ React.createElement(import_md2.MdOutlineMenu, null)))), /* @__PURE__ */ React.createElement(import_remix15.Outlet, null))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader12
});
init_react();
var import_lodash16 = require("lodash");
var import_remix16 = __toESM(require_remix());
var loader12 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix16.useSearchParams)();
  const muscle_groups = (0, import_remix16.useLoaderData)();
  const navigate = (0, import_remix16.useNavigate)();
  const { workoutId } = (0, import_remix16.useParams)();
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
  }, (0, import_lodash16.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix16.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action5,
  default: () => AddExerciseRoute,
  loader: () => loader13
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_lodash17 = require("lodash");
var import_react14 = require("react");
var import_react_bootstrap_typeahead = require("react-bootstrap-typeahead");
var loader13 = async ({ request }) => {
  let url = new URL(request.url);
  let muscle_group = url.searchParams.get("muscle_group");
  const exercises = await getExercises(muscle_group);
  return exercises;
};
var action5 = async ({ params, request }) => {
  const { workoutId, user } = params;
  const form = await request.formData();
  let exercise = form.get("exercise");
  await postExercisetoWorkout({
    workout_id: workoutId,
    exercise_id: exercise
  });
  return (0, import_remix17.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix17.useParams)();
  const [selected, setSelected] = (0, import_react14.useState)([]);
  const [disabled, setDisabled] = (0, import_react14.useState)(false);
  const exercises = (0, import_remix17.useLoaderData)();
  const fetcher = (0, import_remix17.useFetcher)();
  const exNameToIdMap = (0, import_lodash17.mapValues)((0, import_lodash17.groupBy)(exercises, (exercise) => `${(0, import_lodash17.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash17.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_bootstrap_typeahead.Typeahead, {
    id: "exercise_options",
    onChange: setSelected,
    options: exercises.map((exercise) => `${(0, import_lodash17.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash17.startCase)(exercise.variant)})` : ""}`),
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
  }, /* @__PURE__ */ React.createElement(import_remix17.Link, {
    to: `/workout/${workoutId}/currentExercises`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-small is-light"
  }, "Cancel"))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\currentExercises.jsx
var currentExercises_exports = {};
__export(currentExercises_exports, {
  action: () => action6,
  default: () => CurrentExercisesRoute,
  loader: () => loader14
});
init_react();
var import_remix18 = __toESM(require_remix());
var import_lodash19 = __toESM(require("lodash"));
var import_react16 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react15 = require("react");
var import_lodash18 = require("lodash");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react15.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react15.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react15.useState)(props.completed);
  const updateDb = (0, import_lodash18.debounce)((weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index), 200, {
    leading: true,
    trailing: true
  });
  (0, import_react15.useEffect)(() => {
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
var loader14 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash19.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash19.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash19.groupBy)(setsForWorkout, (set) => `${(0, import_lodash19.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash19.startCase)(set.variant)})` : ""}`);
  return { exerciseSets, bestSetByExercise };
};
var action6 = async ({ request }) => {
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
  const { exerciseSets, bestSetByExercise } = (0, import_remix18.useLoaderData)();
  const [showDelete, setShowDelete] = (0, import_react16.useState)();
  const [localExerciseState, setLocalExerciseState] = (0, import_react16.useState)(exerciseSets);
  const { workoutId } = (0, import_remix18.useParams)();
  const fetcher = (0, import_remix18.useFetcher)();
  (0, import_react16.useEffect)(() => setLocalExerciseState(exerciseSets), [exerciseSets]);
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
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix18.Outlet, null), /* @__PURE__ */ React.createElement(import_remix18.Link, {
    to: `/workout/${workoutId}/addExercise`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mt-5 button is-black is-fullwidth is-small"
  }, "+ Exercise")));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\create.jsx
var create_exports = {};
__export(create_exports, {
  action: () => action7,
  default: () => CreateWorkoutRoute,
  loader: () => loader15
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_lodash20 = require("lodash");
var import_react17 = require("react");
var import_dayjs12 = __toESM(require("dayjs"));
var utc4 = require("dayjs/plugin/utc");
import_dayjs12.default.extend(utc4);
var action7 = async ({ request }) => {
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
  return (0, import_remix19.redirect)(`/workout/${workoutObjectId}/currentExercises`);
};
var loader15 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
function CreateWorkoutRoute() {
  const locations = (0, import_remix19.useLoaderData)();
  const [user, setUser] = (0, import_react17.useState)();
  const [hasLocation, setHasLocation] = (0, import_react17.useState)();
  const getCurrentDateTime = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = (0, import_lodash20.padStart)(date.getMonth() + 1, 2, 0);
    var day = (0, import_lodash20.padStart)(date.getDate(), 2, 0);
    var hr = (0, import_lodash20.padStart)(date.getHours(), 2, 0);
    var min = (0, import_lodash20.padStart)(date.getMinutes(), 2, 0);
    return `${year}-${month}-${day}T${hr}:${min}`;
  };
  const submit = (0, import_remix19.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "New Workout"), /* @__PURE__ */ React.createElement(import_remix19.Form, {
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
    value: (0, import_lodash20.startCase)(item.name)
  })))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("button", {
    className: "button is-dark ",
    type: "submit",
    disabled: !hasLocation
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix19.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader16
});
init_react();
var import_remix20 = __toESM(require_remix());
var loader16 = async () => {
  return (0, import_remix20.redirect)("/home");
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
var import_react18 = require("react");
var import_ri2 = require("react-icons/ri");
var import_gi = require("react-icons/gi");
var import_md4 = require("react-icons/md");
var import_remix21 = __toESM(require_remix());
function HomeRoute() {
  const [userId, setUserId] = (0, import_react18.useState)();
  const [user, setUser] = (0, import_react18.useState)();
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
  }, /* @__PURE__ */ React.createElement(import_remix21.Link, {
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
  }, "\u{1F3EA} Locations")))) : /* @__PURE__ */ React.createElement("div", {
    className: "level-right container soraFont"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-1 mb-1"
  }, "Workout, Smarter."), /* @__PURE__ */ React.createElement("div", null, "Please log in to continue..."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(FirebaseLogin, null))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9cad9f70", "entry": { "module": "/build/entry.client-MSGMKPDM.js", "imports": ["/build/_shared/chunk-RVPMI5BL.js", "/build/_shared/chunk-SDHWB2KU.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QVDR5VPP.js", "imports": ["/build/_shared/chunk-US5BUFC6.js", "/build/_shared/chunk-MNBORRNT.js", "/build/_shared/chunk-VWEDQQ4Q.js", "/build/_shared/chunk-LIW6JX3G.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-MUHQSHH5.js", "imports": ["/build/_shared/chunk-SIKGI77Z.js", "/build/_shared/chunk-ZE6VQCGF.js", "/build/_shared/chunk-Z6MOTCAI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-3VZO7JMK.js", "imports": ["/build/_shared/chunk-LXNFETPX.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-VIXP63N7.js", "imports": ["/build/_shared/chunk-LXNFETPX.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-AOJSC7ZD.js", "imports": ["/build/_shared/chunk-3JSBL6VH.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-Y22KIM7H.js", "imports": ["/build/_shared/chunk-FJYYMQTG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-YPO6KG4F.js", "imports": ["/build/_shared/chunk-LXNFETPX.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-BGEAEAII.js", "imports": ["/build/_shared/chunk-LXNFETPX.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-23KQUACE.js", "imports": ["/build/_shared/chunk-3JSBL6VH.js", "/build/_shared/chunk-SIKGI77Z.js", "/build/_shared/chunk-Z6MOTCAI.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-H73XIHVD.js", "imports": ["/build/_shared/chunk-3Z7RTX46.js", "/build/_shared/chunk-SIKGI77Z.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LNPKWB5R.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-4LSOA5GJ.js", "imports": ["/build/_shared/chunk-SIKGI77Z.js", "/build/_shared/chunk-Z6MOTCAI.js", "/build/_shared/chunk-LXNFETPX.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-FTYH5WUX.js", "imports": ["/build/_shared/chunk-FJYYMQTG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-FZXRPM5L.js", "imports": ["/build/_shared/chunk-SIKGI77Z.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-5UGSMRYX.js", "imports": ["/build/_shared/chunk-3JSBL6VH.js", "/build/_shared/chunk-MNBORRNT.js", "/build/_shared/chunk-VWEDQQ4Q.js", "/build/_shared/chunk-LIW6JX3G.js", "/build/_shared/chunk-Z6MOTCAI.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-2ODAOFIW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-GSGNJ4A5.js", "imports": ["/build/_shared/chunk-FJYYMQTG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-2CU54VGM.js", "imports": ["/build/_shared/chunk-3Z7RTX46.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-GREQTZFM.js", "imports": ["/build/_shared/chunk-3JSBL6VH.js", "/build/_shared/chunk-SIKGI77Z.js", "/build/_shared/chunk-Z6MOTCAI.js", "/build/_shared/chunk-FJYYMQTG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9CAD9F70.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxzdGF0aXN0aWNzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc2NoZWR1bGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbG9jYXRpb25zLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Mb2NhdGlvblBpZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3RvcHdhdGNoLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxhZGRFeGVyY2lzZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxjdXJyZW50RXhlcmNpc2VzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXRJbnB1dC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGNyZWF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxob21lLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXGVudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy4kbG9jYXRpb25JZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxzdGF0aXN0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHNjaGVkdWxlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhbmFseXRpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInByb2dyZXNzaXZlLW92ZXJsb2FkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ0cmFpbmVkLXRoaXMtd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwid29ya291dHMtcGVyLXdlZWtcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInBlcnNvbmFsLWJlc3RzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic3RhdGlzdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic2NoZWR1bGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9uc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tIFwifi9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiR2FpbnNCcm9cIiB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZmlyZWJhc2VDb25maWc6IHtcclxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gICAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0RPTUFJTixcclxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxyXG4gICAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5TVE9SQUdFX0JVQ0tFVCxcclxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk1TR19TRU5ERVJfSUQsXHJcbiAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5BUFBfSUQsXHJcbiAgICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk1FQVNVUkVNRU5UX0lELFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1ibGFjayBwLTAgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaXMtc2l6ZS01IHNvcmFGb250XCIgdG89XCIvaG9tZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC13aGl0ZSBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPkdBSU5TPC9kaXY+XHJcbiAgICAgICAgICBCUk9cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGRhdGEuZmlyZWJhc2VDb25maWcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cImJsYWNrXCI+PC9tZXRhPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcblxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY3NzLmdnL2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvY3NzL1R5cGVhaGVhZC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMi4xNC4xL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29yYTp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3JlcXVpcmUoXCIuLi9hc3NldHMvbG9nby5wbmdcIil9PjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzc1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8TmF2QmFyPlxyXG4gICAgICAgICAgPEZpcmViYXNlTG9naW4gYXBwPXthcHB9IC8+XHJcbiAgICAgICAgPC9OYXZCYXI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWRFeHBhbmRNb3JlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUxvZ2luKHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChwcm9wcy5hcHApO1xyXG5cclxuICBmdW5jdGlvbiBnb29nbGVMb2dpbigpIHtcclxuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gIH1cclxuXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29vZ2xlTG9naW59IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1ibGFjayBzb3JhRm9udFwiPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRyb3Bkb3duICR7ZHJvcGRvd25BY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wZG93bkFjdGl2ZSgoYWN0aXZlU3RhdGUpID0+ICFhY3RpdmVTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPE1kRXhwYW5kTW9yZSBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VQYXJhbXMsIHVzZUxvYWRlckRhdGEsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWFwVmFsdWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFdvcmtvdXRzUGVyTG9jYXRpb24sXHJcbiAgZGVsZXRlTG9jYXRpb24sXHJcbiAgcmVuYW1lTG9jYXRpb24sXHJcbn0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3b3Jrb3V0c0F0TG9jYXRpb24gPSBhd2FpdCBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpO1xyXG5cclxuICBjb25zdCBnZXROYW1lRnJvbUlkID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5uYW1lXHJcbiAgKTtcclxuICBjb25zdCB3b3Jrb3V0c1BlckxvY2F0aW9uID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5jb3VudCA/PyAwXHJcbiAgKTtcclxuICByZXR1cm4gW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgY29uc3QgbG9jYXRpb25JZCA9IGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpO1xyXG5cclxuICAgIGF3YWl0IHJlbmFtZUxvY2F0aW9uKFxyXG4gICAgICBsb2NhdGlvbklkLFxyXG4gICAgICBsb2NhdGlvbk5hbWUucmVwbGFjZSgvIC9nLCBcIl9cIikudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAvLyBERUxFVEVcclxuICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBkZWxldGVMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uSWRcIikpO1xyXG4gICAgaWYgKGRlbGV0ZWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGRlbGV0ZWQ/LlswXT8udXNlcl9pZDtcclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KHVzZXIgPyBgL2xvY2F0aW9ucz91c2VyPSR7dXNlcn1gIDogXCIvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gXCJTdWNjZXNzXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvblJvdXRlKCkge1xyXG4gIGNvbnN0IHsgbG9jYXRpb25JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3Nob3dJbnB1dCwgc2V0U2hvd0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuYW1lSW5wdXQsIHNldFJlbmFtZUlucHV0XSA9IHVzZVN0YXRlKFxyXG4gICAgc3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdID8/IG51bGwpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIGNvbnRhaW5lciBib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPlxyXG4gICAgICAgICAge3N0YXJ0Q2FzZShnZXROYW1lRnJvbUlkW1wiXCIgKyBsb2NhdGlvbklkXSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGk+e2dldE5hbWVGcm9tSWRbbG9jYXRpb25JZF19PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgTnVtYmVyIG9mIHdvcmtvdXRzOiB7d29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gPz8gMH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAge3Nob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlbmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVuYW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGxvY2F0aW9uSWQ6IGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZTogcmVuYW1lSW5wdXQgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFNob3dJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGxldmVsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0lucHV0KChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZW5hbWVcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7IXdvcmtvdXRzUGVyTG9jYXRpb25bXCJcIiArIGxvY2F0aW9uSWRdICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbnModXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c19wZXJfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGxvY2F0aW9uSWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUxvY2F0aW9uKGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAudXBkYXRlKHsgbmFtZTogbG9jYXRpb25OYW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZExvY2F0aW9uKGxvY2F0aW9uTmFtZSwgdXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5pbnNlcnQoeyBuYW1lOiBsb2NhdGlvbk5hbWUsIHVzZXJfaWQ6IHVzZXJJZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxubGV0IHN1cGFiYXNlO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5zdXBhYmFzZSkge1xyXG4gICAgZ2xvYmFsLnN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG4gIH1cclxuICBzdXBhYmFzZSA9IGdsb2JhbC5zdXBhYmFzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZVNlYXJjaFBhcmFtcywgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NSb3V0ZSgpIHtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB1c2VyID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd2VlayA9IGRheWpzKCkud2VlaygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL1wiKSB7XHJcbiAgICAgIG5hdmlnYXRlKGAvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrP3VzZXI9JHt1c2VyfSZ3ZWVrPSR7d2Vla31gKTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb24sIG5hdmlnYXRlLCB1c2VyLCB3ZWVrXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG0tNVwiPkFuYWx5dGljczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+RWZmb3J0IFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYWluZWQgdGhpcyB3ZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlaz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3Jrb3V0cyBwZXIgV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3NjaGVkdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc2NoZWR1bGU/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvc3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3N0YXRpc3RpY3M/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGlzdGljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj48L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+U3RyZW5ndGggU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2dyZXNzaXZlIE92ZXJsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBCZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9hbmFseXRpY3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50KHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyID09PSBudWxsKSB7XHJcbiAgICAgIG5hdmlnYXRlKFwiL1wiKTtcclxuICAgIH1cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGxldCBfID0gcHJvcHMuc2V0VXNlciA/IHByb3BzLnNldFVzZXIodXNlcikgOiBudWxsO1xyXG4gICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuXHJcbiAgICAgIGlmIChwcm9wcy5pZFByZWRpY2F0ZSAmJiAhcHJvcHMuaWRQcmVkaWNhdGUodWlkKSkge1xyXG4gICAgICAgIG5hdmlnYXRlKFwiL2hvbWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IF8gPSBwcm9wcy5zZXRVc2VySWQgPyBwcm9wcy5zZXRVc2VySWQodWlkKSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gPD57cHJvcHMuY2hpbGRyZW59PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRFeGVyY2lzZXNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTdWJtaXQsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQcm9ncmVzc2l2ZU92ZXJsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlT3ZlcmxvYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGxldCBleGVyY2lzZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZXhlcmNpc2VfaWRcIikgPz8gZXhlcmNpc2VzWzBdPy5pZDtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyLCBleGVyY2lzZSk7XHJcblxyXG4gIGNvbnN0IHNldHNCeUV4ZXJjaXNlID0gZ3JvdXBCeShzZXRzLCAocykgPT4gcy5leGVyY2lzZV9pZClbZXhlcmNpc2VdO1xyXG4gIHJldHVybiB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBzZXRzQnlFeGVyY2lzZSwgZXhlcmNpc2VzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzaW5nbGVFeGVyY2lzZUNoYXJ0ID0gc2V0c0J5RXhlcmNpc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+UHJvZ3Jlc3NpdmUgT3ZlcmxvYWQ8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBtYi00IGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJleGVyY2lzZV9pZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZV9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZXhlcmNpc2VzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZS5pZH0gdmFsdWU9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtzdGFydENhc2UoZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGU/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGUudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCA/IChcclxuICAgICAgICAgIDxQcm9ncmVzc2l2ZU92ZXJsb2FkIHByb2dyZXNzaXZlT3ZlcmxvYWQ9e3NpbmdsZUV4ZXJjaXNlQ2hhcnR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiTm90aGluZyB0cmFpbmVkIHlldFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKSB7XHJcbiAgaWYgKG11c2NsZV9ncm91cCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJleGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJtdXNjbGVfZ3JvdXBcIiwgbXVzY2xlX2dyb3VwKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZXhlcmNpc2VcIikuc2VsZWN0KFwiKlwiKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUdyb3VwcygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJkaXN0aW5jdF9tdXNjbGVfZ3JvdXBzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLm9yZGVyKFwibmFtZVwiKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZXhlcmNpc2VzX2Zvcl91c2VyXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeVN0YXRzRm9yRXhlcmNpc2UodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGFzdF93b3Jrb3V0X3dpdGhfZXhlcmNpc2VcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2V0KGZvcm1TZXQpIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbiAgLy8gY2xlYW4gdXBcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJlbXB0eV93b3Jrb3V0X2V4ZXJjaXNlc1wiKS5zZWxlY3QoXCIqXCIpO1xyXG4gIGNvbnN0IGlkcyA9IGRhdGEubWFwKCh3b3Jrb3V0X2V4ZXJjaXNlKSA9PiB3b3Jrb3V0X2V4ZXJjaXNlLmlkKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKS5kZWxldGUoKS5pbihcImlkXCIsIGlkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRTZXQoZm9ybVNldCkge1xyXG4gIGNvbnN0IGFkZCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogZm9ybVNldC5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZD8uZGF0YT8uWzBdO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXQoZm9ybVNldCkge1xyXG4gIGxldCBzdWJtaXNzaW9uU2V0ID0ge1xyXG4gICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdlaWdodEZvclNldCA9IGZvcm1TZXQuZ2V0KFwid2VpZ2h0XCIpO1xyXG4gIGNvbnN0IHJlcHNGb3JTZXQgPSBmb3JtU2V0LmdldChcInJlcGV0aXRpb25zXCIpO1xyXG4gIGNvbnN0IGNvbXBsZXRlZEZvclNldCA9IGZvcm1TZXQuZ2V0KFwiY29tcGxldGVkXCIpO1xyXG5cclxuICBpZiAod2VpZ2h0Rm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LndlaWdodCA9IHBhcnNlRmxvYXQod2VpZ2h0Rm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKHJlcHNGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQucmVwZXRpdGlvbnMgPSBwYXJzZUZsb2F0KHJlcHNGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAoY29tcGxldGVkRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZEZvclNldCA9PT0gXCJ0cnVlXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAudXBkYXRlKHN1Ym1pc3Npb25TZXQpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4vL2RlZmF1bHQgZmlsdGVycyBmb3IgbGF0ZXN0IHdlZWtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNldHNGb3JVc2VyKHVzZXJJZCwgZmlsdGVyX3N0YXJ0LCBmaWx0ZXJfZW5kKSB7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfc3RhcnQgPSBmaWx0ZXJfc3RhcnRcclxuICAgID8gZGF5anMoZmlsdGVyX3N0YXJ0KVxyXG4gICAgOiBkYXlqcyhkYXlqcygpLndlZWsoZGF5anMoKS53ZWVrKCkpLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpO1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX2VuZCA9IGZpbHRlcl9lbmQgPyBkYXlqcyhmaWx0ZXJfZW5kKSA6IGRheWpzKCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAuZ3RlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfc3RhcnQpXHJcbiAgICAubHRlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfZW5kKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCwgZXhlcmNpc2VJZCkge1xyXG4gIGlmIChleGVyY2lzZUlkKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlmZXRpbWVTdGF0aXN0aWNzKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGlmZXRpbWVfc3RhdHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbkNoYXJ0LnJlZ2lzdGVyKFtUb29sdGlwXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc2l2ZU92ZXJsb2FkKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlUHJvZ3Jlc3MgPSBzb3J0QnkoXHJcbiAgICBwcm9wcy5wcm9ncmVzc2l2ZU92ZXJsb2FkLFxyXG4gICAgKGUpID0+IGUuZGF0ZXRpbWVfc3RhcnRcclxuICApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY29sb3IgPSBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgfSwwLjMpYDtcclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzaXZlT3ZlcmxvYWRcIikpO1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXhlcmNpc2VQcm9ncmVzcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZS5kYXRldGltZV9zdGFydCkuZm9ybWF0KFwiREQvTU0vWVlcIilcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlZvbHVtZSBQcm9ncmVzcyAoV2VpZ2h0IHggUmVwcylcIixcclxuICAgICAgICAgICAgZGF0YTogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+IGUubWF4X3ZvbHVtZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgVm9sdW1lOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5tYXhfdm9sdW1lfSB8IFdlaWdodDogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ud2VpZ2h0fSB8IFJlcHM6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLnJlcGV0aXRpb25zfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgbG9kYXNoIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFdlZWtseVRyYWluaW5nU2V0cyBmcm9tIFwifi9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0c1wiO1xyXG5cclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7fTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB3ZWVrID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZGF5anMoKS53ZWVrKHdlZWspLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIik7XHJcblxyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LFxyXG4gICAgd2Vla1N0YXJ0aW5nT25EYXkuYWRkKDEsIFwid2Vla1wiKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBsb2Rhc2godXNlcldvcmtvdXRzKVxyXG4gICAgLmdyb3VwQnkoKHNldCkgPT4gc2V0Lm11c2NsZV9ncm91cClcclxuICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoaXNXZWVrUm91dGUoKSB7XHJcbiAgY29uc3Qgd2Vla2x5U2V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHdlZWsgPSBzZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKCkud2Vlayh3ZWVrKS5zdGFydE9mKFwid2Vla1wiKS5zdGFydE9mKFwiZGF5XCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRXZWVrID0gZGF5anMoKS53ZWVrKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclRyYWluZWRUaGlzV2VlayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5UcmFpbmVkIHRoaXMgV2VlazwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Yj57d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX08L2I+IC17XCIgXCJ9XHJcbiAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAge3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgLmFkZCgxLCBcIndlZWtcIilcclxuICAgICAgICAgICAgICAuc3VidHJhY3QoMSwgXCJkYXlcIilcclxuICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1cclxuICAgICAgICAgIDwvYj57XCIgXCJ9XHJcbiAgICAgICAgICAte1wiIFwifVxyXG4gICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgIFdlZWsge3dlZWt9IG9mIHt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJZWVlZXCIpfVxyXG4gICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBtdC0yIG1iLTJcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3dlZWt9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtBcnJheShwYXJzZUludChjdXJyZW50V2VlaykpXHJcbiAgICAgICAgICAgICAgICAgIC5maWxsKDApXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4ICsgMX0ga2V5PXtpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWVrIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHdlZWtseVNldHMpLmxlbmd0aCA9PT0gMCAmJiBcIk5vdGhpbmcgdHJhaW5lZCB0aGlzIHdlZWtcIn1cclxuICAgICAgICA8V2Vla2x5VHJhaW5pbmdTZXRzIHdlZWtseVNldHM9e3dlZWtseVNldHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPD57cmVuZGVyVHJhaW5lZFRoaXNXZWVrKCl9PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrbHlUcmFpbmluZ1NldHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgc2V0cyA9IHByb3BzLndlZWtseVNldHM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIndlZWtseVNldHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHNldHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHlTZXRzXCIpKTtcclxuICAgIGNvbnN0IHdlZWtseVNldHNDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHNldHMpLm1hcCgoZSkgPT4gc3RhcnRDYXNlKGUpKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIG9mIFNldHNcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHNldHMpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE9iamVjdC52YWx1ZXMoc2V0cykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC40KWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwid2Vla2x5U2V0c1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgdHJhbnNmb3JtLCBwaWNrIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBXb3Jrb3V0UGVyV2VlayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Xb3Jrb3V0c1BlcldlZWtcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgd29ya291dHMgPSBsb2Rhc2god29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgodykgPT4gZGF5anMody5kYXRldGltZV9zdGFydCkud2VlaygpKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgbGV0IHdlZWtzVG9TaG93ID0gT2JqZWN0LmtleXMod29ya291dHMpLm1hcCgoZSkgPT4gcGFyc2VJbnQoZSkpO1xyXG4gIHdlZWtzVG9TaG93LnNvcnQoKTtcclxuICB3ZWVrc1RvU2hvdyA9IHdlZWtzVG9TaG93LnNsaWNlKDAsIDEwKS5tYXAoU3RyaW5nKTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZm9ybShcclxuICAgIHBpY2sod29ya291dHMsIHdlZWtzVG9TaG93KSxcclxuICAgIChyZXMsIHZhbCwga2V5KSA9PlxyXG4gICAgICAocmVzW1xyXG4gICAgICAgIGAke2RheWpzKGRheWpzKCkud2VlayhrZXkpLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpLmZvcm1hdChcclxuICAgICAgICAgIFwiREQvTS9ZWVwiXHJcbiAgICAgICAgKX0gLSAke2RheWpzKGRheWpzKCkud2VlayhrZXkpLmVuZE9mKFwid2Vla1wiKS5zdGFydE9mKFwiZGF5XCIpKS5mb3JtYXQoXHJcbiAgICAgICAgICBcIkREL00vWVlcIlxyXG4gICAgICAgICl9YFxyXG4gICAgICBdID0gdmFsKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0c1BlcldlZWtSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Xb3Jrb3V0cyBwZXIgV2VlazwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIDxXb3Jrb3V0UGVyV2VlayB3b3Jrb3V0c1BlcldlZWs9e3dvcmtvdXRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlV29ya291dCh3b3Jrb3V0KSB7XHJcbiAgbGV0IGNoZWNrTG9jYXRpb24gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAubWF0Y2goeyBuYW1lOiB3b3Jrb3V0LmxvY2F0aW9uLCB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCB9KTtcclxuXHJcbiAgbGV0IGxvY2F0aW9uSWQ7XHJcbiAgaWYgKGNoZWNrTG9jYXRpb24uZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgIGNoZWNrTG9jYXRpb24gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAgIC5pbnNlcnQoeyBuYW1lOiB3b3Jrb3V0LmxvY2F0aW9uLCB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCB9KTtcclxuICB9XHJcbiAgbG9jYXRpb25JZCA9IGNoZWNrTG9jYXRpb24uZGF0YT8uWzBdLmlkO1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ3b3Jrb3V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IHdvcmtvdXQubmFtZSxcclxuICAgICAgZGF0ZXRpbWVfc3RhcnQ6IHdvcmtvdXQuZGF0ZXRpbWUsXHJcbiAgICAgIGRhdGV0aW1lX2VuZDogdW5kZWZpbmVkLFxyXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb25JZCxcclxuICAgICAgdXNlcl9pZDogd29ya291dC51c2VySWQsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIHJldHVybiBkYXRhWzBdLmlkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlV29ya291dCh3b3Jrb3V0X2lkKSB7XHJcbiAgY29uc3Qgd29ya291dCA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwid29ya291dF9pZFwiLCB3b3Jrb3V0X2lkKTtcclxuXHJcbiAgY29uc3QgYXNzb2NpYXRlZF93b3Jrb3V0X2V4ZXJjaXNlcyA9XHJcbiAgICBcIihcIiArIHdvcmtvdXQuZGF0YS5tYXAoKGUpID0+IGUud29ya291dF9leGVyY2lzZV9pZCkudG9TdHJpbmcoKSArIFwiKVwiO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLmZpbHRlcihcIndvcmtvdXRfZXhlcmNpc2VcIiwgXCJpblwiLCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzKTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyB3b3Jrb3V0OiB3b3Jrb3V0X2lkIH0pO1xyXG5cclxuICBjb25zdCBfZGVsZXRlV29ya291dCA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIHJldHVybiBfZGVsZXRlV29ya291dC5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V29ya291dChpZCkge1xyXG4gIGxldCB7IGRhdGE6IHdvcmtvdXQgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJpZFwiLCBpZCk7XHJcbiAgcmV0dXJuIHdvcmtvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIGlkKVxyXG4gICAgLm9yZGVyKFwic2V0X2lkXCIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmlzaFdvcmtvdXQoaWQsIGRhdGV0aW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0XCIpXHJcbiAgICAudXBkYXRlKHsgZGF0ZXRpbWVfZW5kOiBkYXRldGltZSB9KVxyXG4gICAgLm1hdGNoKHsgaWQ6IGlkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V29ya291dHNGb3JVc2VyKHVzZXJJZCwgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmd0ZShcImRhdGV0aW1lX3N0YXJ0XCIsIGRheWpzKHN0YXJ0RGF0ZSkpXHJcbiAgICAgIC5sdGUoXCJkYXRldGltZV9zdGFydFwiLCBkYXlqcyhlbmREYXRlKSk7XHJcblxyXG4gICAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiB3b3Jrb3V0cy5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gICAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiB3b3Jrb3V0cy5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYmVzdFNldEJ5RXhlcmNpc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxCZXN0Um91dGUoKSB7XHJcbiAgY29uc3QgbGlzdEJlc3RTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMVwiPlBlcnNvbmFsIEJlc3RzPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGk+V2VpZ2h0IG9mIHNldCB3aXRoIG1heCB2b2x1bWU8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2xpc3RCZXN0U2V0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPFBlcnNvbmFsQmVzdHMgYmVzdFNldHM9e2xpc3RCZXN0U2V0c30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIk5vIHdvcmtvdXRzIHlldFwiXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbFJlY29yZHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicGVyc29uYWxSZWNvcmRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLmJlc3RTZXRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxSZWNvcmRzXCIpKTtcclxuICAgIGNvbnN0IHByQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+XHJcbiAgICAgICAgICBzdGFydENhc2UoYCR7dmFsdWUuZXhlcmNpc2VfbmFtZX0gJHt2YWx1ZS52YXJpYW50ID8/IFwiXCJ9YClcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9wcy5iZXN0U2V0cy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS53ZWlnaHQpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmVzdFNldHMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwgJHtcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICB9LDAuNClgO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBwcm9wcy5iZXN0U2V0cy5sZW5ndGgsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IE9iamVjdC52YWx1ZXMocHJvcHMuYmVzdFNldHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAgV2VpZ2h0OiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0gfCBWb2w6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB4ICR7c2V0W2RhdGFJbmRleF0ucmVwZXRpdGlvbnN9ID0gJHtzZXRbZGF0YUluZGV4XS5tYXhfdm9sdW1lfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldExpZmV0aW1lU3RhdGlzdGljcywgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIHJlZHVjZSwgcGljaywgb21pdCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgc3RhdHMgPSBhd2FpdCBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICBjb25zdCB0b3RhbFRpbWVTcGVudCA9IHdvcmtvdXRzXHJcbiAgICAubWFwKCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX2VuZCkuZGlmZih3LmRhdGV0aW1lX3N0YXJ0LCBcIm1pbnV0ZVwiKSlcclxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICByZXR1cm4gW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgTWF0aC5yb3VuZCh0b3RhbFRpbWVTcGVudCAvIHdvcmtvdXRzLmxlbmd0aCldO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGlzdGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzdGF0cywgdG90YWxUaW1lU3BlbnQsIGF2ZXJhZ2VUaW1lU3BlbnRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGFiYnYgPSB7XHJcbiAgICBBVzogXCJBdmVyYWdlIFdlaWdodFwiLFxyXG4gICAgQVI6IFwiQXZlcmFnZSBSZXBldGl0aW9uc1wiLFxyXG4gICAgUmVwczogXCJUb3RhbCBSZXBldGl0aW9uc1wiLFxyXG4gICAgVm9sOiBcIlRvdGFsIFZvbHVtZVwiLFxyXG4gICAgTnVtOiBcIlRvdGFsIE51bWJlciBvZiBTZXRzXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSwgZGlnaXRzID0gMikgPT4ge1xyXG4gICAgY29uc3QgbG9va3VwID0gW1xyXG4gICAgICB7IHZhbHVlOiAxLCBzeW1ib2w6IFwiXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUzLCBzeW1ib2w6IFwia1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlNiwgc3ltYm9sOiBcIk1cIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTksIHN5bWJvbDogXCJHXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxMiwgc3ltYm9sOiBcIlRcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTE1LCBzeW1ib2w6IFwiUFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTgsIHN5bWJvbDogXCJFXCIgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCByeCA9IC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC87XHJcbiAgICB2YXIgaXRlbSA9IGxvb2t1cFxyXG4gICAgICAuc2xpY2UoKVxyXG4gICAgICAucmV2ZXJzZSgpXHJcbiAgICAgIC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSA+PSBpdGVtLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBpdGVtXHJcbiAgICAgID8gKG51bSAvIGl0ZW0udmFsdWUpLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCBcIiQxXCIpICsgaXRlbS5zeW1ib2xcclxuICAgICAgOiBcIjBcIjtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtYXROdW1iZXIoOTAwMDAwKSk7XHJcblxyXG4gIGxldCB3b3Jrb3V0c1RhYmxlID0gc3RhdHMubWFwKCh3KSA9PiAoe1xyXG4gICAgRXhlcmNpc2U6IGAke3N0YXJ0Q2FzZSh3Lm5hbWUpfSAke1xyXG4gICAgICB3Py52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZSh3LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgfWAsXHJcbiAgICBSZXBzOiBNYXRoLnJvdW5kKHcudG90YWxfcmVwcyksXHJcbiAgICBWb2w6IE1hdGgucm91bmQody5zdW1fdm9sdW1lKSxcclxuICAgIE51bTogdy5udW1fc2V0cyxcclxuICB9KSk7XHJcbiAgY29uc3QgY29sdW1uTmFtZXMgPSBbLi4uT2JqZWN0LmtleXMoT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSlbMF1bMV0pXTtcclxuICBjb25zdCByb3dzID0gT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSkubWFwKChbaywgdl0sIGluZGV4KSA9PiBbXHJcbiAgICAuLi5PYmplY3QudmFsdWVzKHYpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG0tMlwiPlN0YXRpc3RpY3M8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+VG90YWwgbGlmZXRpbWUgbWV0cmljczo8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiXHJcbiAgICAgICAgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+VG90YWwgVGltZTogPC9iPlxyXG4gICAgICAgICAgPGk+e3RvdGFsVGltZVNwZW50fSBtaW48L2k+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+QXZlcmFnZSBUaW1lOiA8L2I+XHJcbiAgICAgICAgICA8aT57YXZlcmFnZVRpbWVTcGVudH0gbWluPC9pPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAge2NvbHVtbk5hbWVzXHJcbiAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSBcIkV4ZXJjaXNlXCIpXHJcbiAgICAgICAgICAubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDxwIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICB7YWJidltuYW1lXX0gKHtuYW1lfSk6e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgIHtuYW1lID09PSBcIlZvbFwiXHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0TnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHdvcmtvdXRzVGFibGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gYSArIGJbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1RhYmxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIChhLCBiKSA9PiBhICsgYltuYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzIGJ5IGV4ZXJjaXNlOiA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dGFibGVcclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcInNjcm9sbFwiLCBmb250U2l6ZTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGlzLXN0cmlwZWQgaXMtbmFycm93IGlzLWhvdmVyYWJsZSBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2V9PC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtyb3cubWFwKChlbGUsIGVsZUluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBlbGVJbmRleCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2VsZUluZGV4fT57Zm9ybWF0TnVtYmVyKGVsZSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtlbGVJbmRleH0+e2VsZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG52YXIgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5jb25zdCB3ZWVrZGF5cyA9IFtcclxuICBcIlN1bmRheVwiLFxyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgd2VlayA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKCkud2Vlayh3ZWVrKS5zdGFydE9mKFwid2Vla1wiKS5zdGFydE9mKFwiZGF5XCIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LFxyXG4gICAgd2Vla1N0YXJ0aW5nT25EYXkuYWRkKDEsIFwid2Vla1wiKVxyXG4gICk7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5U2NoZWR1bGVSb3V0ZSgpIHtcclxuICBsZXQgd29ya291dERhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB3ZWVrID0gc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBkYXlqcygpLndlZWsod2Vlaykuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBjdXJyZW50V2VlayA9IGRheWpzKCkud2VlaygpO1xyXG5cclxuICBjb25zdCB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0RGF0YSlcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcy51dGMody5kYXRldGltZV9zdGFydCkubG9jYWwoKS5mb3JtYXQoXCJkZGRkXCIpKVxyXG4gICAgLm1hcFZhbHVlcygodikgPT5cclxuICAgICAgbG9kYXNoKHYpXHJcbiAgICAgICAgLmdyb3VwQnkoKHNldCkgPT4gc2V0Lm11c2NsZV9ncm91cClcclxuICAgICAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgICAgICAudmFsdWUoKVxyXG4gICAgKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlNjaGVkdWxlPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgIHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QoMSwgXCJkYXlcIilcclxuICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9XHJcbiAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAte1wiIFwifVxyXG4gICAgICAgIDxpPlxyXG4gICAgICAgICAgV2VlayB7ZGF5anMoKS53ZWVrKCl9IG9mIHt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJZWVlZXCIpfVxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG10LTIgbWItMlwiPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3ZWVrfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgd2VlazogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge0FycmF5KHBhcnNlSW50KGN1cnJlbnRXZWVrKSlcclxuICAgICAgICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleCArIDF9IGtleT17aW5kZXggKyAxfT5cclxuICAgICAgICAgICAgICAgICAgICBXZWVrIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAge1suLi5BcnJheSg3KS5rZXlzKCldLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtfSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAge3dvcmtvdXRzPy5bd2Vla2RheXNbaXRlbV1dID8gKFxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZSBpcy1zbWFsbCBpcy1zZWNvbmRhcnkgbS0zIGB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgICAgd2Vla2RheXNbaXRlbV1cclxuICAgICAgICAgICAgICAgIH0gLSAke3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMod29ya291dHM/Llt3ZWVrZGF5c1tpdGVtXV0pLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoW2ssIHZdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uoayl9IC0ge3Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1zbWFsbCBpcy1saWdodCBtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgICB9IC0gJHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+UmVzdCBEYXkgXHVEODNEXHVEQ0FBPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgTG9jYXRpb25QaWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9jYXRpb25QaWVcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIi4uL3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuXHJcbiAgY29uc3QgbGFzdE1vbnRoU3RhcnQgPSBkYXlqcygpXHJcbiAgICAubW9udGgoZGF5anMoKS5tb250aCgpKVxyXG4gICAgLnN0YXJ0T2YoXCJtb250aFwiKVxyXG4gICAgLnN0YXJ0T2YoXCJkYXlcIik7XHJcbiAgY29uc3QgbGFzdE1vbnRoRW5kID0gZGF5anMoKVxyXG4gICAgLm1vbnRoKGRheWpzKCkubW9udGgoKSlcclxuICAgIC5lbmRPZihcIm1vbnRoXCIpXHJcbiAgICAuZW5kT2YoXCJkYXlcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzRm9yVXNlciA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcihcclxuICAgIHVzZXIsXHJcbiAgICBsYXN0TW9udGhTdGFydCxcclxuICAgIGxhc3RNb250aEVuZFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICBsb2NhdGlvbnMsXHJcbiAgICBtYXBWYWx1ZXMoZ3JvdXBCeSh3b3Jrb3V0c0ZvclVzZXIsIFwibG9jYXRpb25fbmFtZVwiKSwgKGUpID0+IGUubGVuZ3RoKSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmICghZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIikpIHtcclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgYWRkTG9jYXRpb24oZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIiksIGZvcm0uZ2V0KFwidXNlcklkXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZUxvY2F0aW9uc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtsb2NhdGlvbnMsIHdvcmtvdXRzRm9yVXNlcl0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlNhdmVkIExvY2F0aW9uczwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNSBwLTNcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTVcIj5cclxuICAgICAgICAgICAgICBMb2NhdGlvbnMgQnJlYWtkb3duIGluIHtkYXlqcygpLmZvcm1hdChcIk1NTU1cIil9XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxMb2NhdGlvblBpZSBsb2NhdGlvbnM9e3dvcmtvdXRzRm9yVXNlcn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAga2V5PXtlLmlkfVxyXG4gICAgICAgICAgICAgIHRvPXtgLi8ke2UuaWR9Lz91c2VyPSR7c2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPntzdGFydENhc2UoZS5uYW1lKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgPGI+QWRkIExvY2F0aW9uPC9iPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCIgLz5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCIgbmFtZT1cImxvY2F0aW9uTmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25QaWUocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwibG9jYXRpb25QaWVcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5sb2NhdGlvbnMpO1xyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy5sb2NhdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblBpZVwiKSk7XHJcbiAgICBjb25zdCBsb2NhdGlvblBpZSA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJwaWVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMocHJvcHMubG9jYXRpb25zKS5tYXAoKHZhbHVlKSA9PiBzdGFydENhc2UodmFsdWUpKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJXZWlnaHRcIixcclxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhwcm9wcy5sb2NhdGlvbnMpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LmtleXMocHJvcHMubG9jYXRpb25zKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCAke1xyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgIH0sMC40KWA7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwibG9jYXRpb25QaWVcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCwgQnNDbG9ja0hpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG0tNSBjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbWItM1wiPldvcmtvdXRzPC9kaXY+XHJcbiAgICAgICAge3dvcmtvdXRzLmxlbmd0aCA9PT0gMCAmJiBcIk5vIHdvcmtvdXRzIHlldFwifVxyXG4gICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGtleT17XCJ3b3Jrb3V0LmlkXCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXHJcbiAgICAgICAgICAgIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0LmlkfS9jdXJyZW50RXhlcmNpc2VzYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgbWItMiBpcy01XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXlqc1xyXG4gICAgICAgICAgICAgICAgICAgIC51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAubG9jYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJkZGRkLCBNTU0gRCBZWVwiKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItMiBpcy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCkubG9jYWwoKS5mb3JtYXQoXCJoOm1tIEFcIil9XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAtIFwifVxyXG4gICAgICAgICAgICAgICAgICB7d29ya291dC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKHdvcmtvdXQubG9jYXRpb25fbmFtZSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3dvcmtvdXQuZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGVGaWxsIHNpemU9ezQwfSBjbGFzc05hbWU9XCJtLTQgcC0xXCIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJzQ2xvY2tIaXN0b3J5IHNpemU9ezQwfSBjbGFzc05hbWU9XCJtLTQgcC0xXCIgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBPdXRsZXQsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7XHJcbiAgZmluaXNoV29ya291dCxcclxuICBnZXRXb3Jrb3V0LFxyXG4gIGRlbGV0ZVdvcmtvdXQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N0b3B3YXRjaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IE1kT3V0bGluZU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5jb25zdCByZWxhdGl2ZVRpbWUgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBnZXRXb3Jrb3V0KHBhcmFtcy53b3Jrb3V0SWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBmaW5pc2hXb3Jrb3V0KFxyXG4gICAgICBmb3JtLmdldChcIndvcmtvdXRfaWRcIiksXHJcbiAgICAgIGZvcm0uZ2V0KFwiZW5kXCIpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHdvcmtvdXQ7XHJcbiAgfVxyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSBcIkRFTEVURVwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGRlbGV0ZVdvcmtvdXQoZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdG9UaW1lKHRpbWUpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3b3Jrb3V0TWV0YURhdGEod29ya291dCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gaXMtbGlnaHQgbXQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keSBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTNcIj57d29ya291dD8ubmFtZX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdnLXBpblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntzdGFydENhc2Uod29ya291dD8ubG9jYXRpb25fbmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctYWxhcm1cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICB7YCR7ZGF5anNcclxuICAgICAgICAgICAgICAudXRjKHdvcmtvdXQ/LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIEREIE1NTSBZWSwgSEg6bW1cIil9XHJcbiAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gdXNlTG9hZGVyRGF0YSgpWzBdO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDaGFuZ2VUaW1lLCBzZXRTaG93Q2hhbmdlVGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1c3RvbURhdGUsIHNldEN1c3RvbURhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VySWQ9e3NldFVzZXJJZH1cclxuICAgICAgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHdvcmtvdXQudXNlcl9pZH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7d29ya291dE1ldGFEYXRhKHdvcmtvdXQpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHkgbm90aWZpY2F0aW9uIG1iLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7d29ya291dD8uZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMVwiPldvcmtvdXQgQ29tcGxldGVkLiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3RvVGltZShcclxuICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9lbmQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0wXCI+VGltZSBFbGFwc2VkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXMtZmFtaWx5LXNlY29uZGFyeSBoYXMtdGV4dC13ZWlnaHQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0b3B3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgcnVubmluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lPXtkYXlqcygpIC0gZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgeyF3b3Jrb3V0LmRhdGV0aW1lX2VuZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBkYXlqcygpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7c2hvd01lbnUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MCVcIixcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIzJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXIgaXMtc21hbGwgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgV29ya291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NoYW5nZVRpbWUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNldCBGaW5pc2ggVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtzaG93Q2hhbmdlVGltZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzKGUudGFyZ2V0LnZhbHVlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbURhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWN1c3RvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1zdWNjZXNzIG0tMCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKGN1c3RvbURhdGUpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidXR0b24gaXMtbGlnaHQgIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdG9wd2F0Y2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShwcm9wcy5pbml0aWFsVGltZSk7XHJcbiAgY29uc3QgW3J1bm5pbmcsIHNldFJ1bm5pbmddID0gdXNlU3RhdGUocHJvcHMucnVubmluZyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW50ZXJ2YWw7XHJcbiAgICBpZiAocnVubmluZykge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyAxMDAwKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2UgaWYgKCFydW5uaW5nKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtydW5uaW5nXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcHdhdGNoXCI+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoO1xyXG4iLCAiaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVBhcmFtcyxcclxuICB1c2VOYXZpZ2F0ZSxcclxuICBPdXRsZXQsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldE11c2NsZUdyb3VwcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gYXdhaXQgZ2V0TXVzY2xlR3JvdXBzKCk7XHJcbiAgcmV0dXJuIG11c2NsZV9ncm91cHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVyY2lzZXNSb3V0ZUluZGV4KCkge1xyXG4gIGxldCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgbXVzY2xlX2dyb3VwcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRlKGAvd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsICR7XHJcbiAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA/PyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbGxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge211c2NsZV9ncm91cHMubWFwKChtdXNjbGUpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17bXVzY2xlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyh7IG11c2NsZV9ncm91cDogbXVzY2xlLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5nZXQoXCJtdXNjbGVfZ3JvdXBcIikgPT09IG11c2NsZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdGFydENhc2UobXVzY2xlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHJlZGlyZWN0LCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBvc3RFeGVyY2lzZXRvV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGdldEV4ZXJjaXNlcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHlwZWFoZWFkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBtdXNjbGVfZ3JvdXAgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKTtcclxuXHJcbiAgcmV0dXJuIGV4ZXJjaXNlcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCwgdXNlciB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBleGVyY2lzZSA9IGZvcm0uZ2V0KFwiZXhlcmNpc2VcIik7XHJcblxyXG4gIGF3YWl0IHBvc3RFeGVyY2lzZXRvV29ya291dCh7XHJcbiAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICBleGVyY2lzZV9pZDogZXhlcmNpc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRXhlcmNpc2VSb3V0ZSgpIHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgZXhOYW1lVG9JZE1hcCA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkoXHJcbiAgICAgIGV4ZXJjaXNlcyxcclxuICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgIGV4ZXJjaXNlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShleGVyY2lzZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICB9YFxyXG4gICAgKSxcclxuICAgIChlKSA9PiBlWzBdLmlkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUeXBlYWhlYWRcclxuICAgICAgICBpZD1cImV4ZXJjaXNlX29wdGlvbnNcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICBvcHRpb25zPXtleGVyY2lzZXMubWFwKFxyXG4gICAgICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgICAgICBgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICB9YFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRXhlcmNpc2VcIlxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGV4ZXJjaXNlOiBleE5hbWVUb0lkTWFwW3NlbGVjdGVkXSB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZCB8fCBkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2N1cnJlbnRFeGVyY2lzZXNgfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgdXNlRmV0Y2hlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB1cGRhdGVTZXQsXHJcbiAgYWRkU2V0LFxyXG4gIGRlbGV0ZVNldCxcclxuICBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlLFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvc2V0cy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQsXHJcbiAgZ2V0RXhlcmNpc2VzRm9yV29ya291dCxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IE1kT3V0bGluZU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IFNldElucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvU2V0SW5wdXRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBzZXRzRm9yV29ya291dCA9IGF3YWl0IGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQocGFyYW1zLndvcmtvdXRJZCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2V0c0ZvcldvcmtvdXQ/LlswXT8udXNlcl9pZDtcclxuICBsZXQgYmVzdFNldEJ5RXhlcmNpc2U7XHJcbiAgaWYgKHVzZXJJZCkge1xyXG4gICAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcklkKTtcclxuICAgIGJlc3RTZXRCeUV4ZXJjaXNlID0gbG9kYXNoKHNldHMpXHJcbiAgICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgICAubWFwVmFsdWVzKChlKSA9PiBtYXhCeShlLCAocykgPT4gcy53ZWlnaHQgKiBzLnJlcGV0aXRpb25zKSlcclxuICAgICAgLnZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBleGVyY2lzZVNldHMgPSBncm91cEJ5KFxyXG4gICAgc2V0c0ZvcldvcmtvdXQsXHJcbiAgICAoc2V0KSA9PlxyXG4gICAgICBgJHtzdGFydENhc2Uoc2V0LmV4ZXJjaXNlX25hbWUpfSAke1xyXG4gICAgICAgIHNldC52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShzZXQudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgIH1gXHJcbiAgKTtcclxuICByZXR1cm4geyBleGVyY2lzZVNldHMsIGJlc3RTZXRCeUV4ZXJjaXNlIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcInNldFwiKSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlU2V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICBhd2FpdCBhZGRTZXQoZm9ybSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcImV4ZXJjaXNlXCIpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZvcm07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW50RXhlcmNpc2VzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBleGVyY2lzZVNldHMsIGJlc3RTZXRCeUV4ZXJjaXNlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3Nob3dEZWxldGUsIHNldFNob3dEZWxldGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9jYWxFeGVyY2lzZVN0YXRlLCBzZXRMb2NhbEV4ZXJjaXNlU3RhdGVdID0gdXNlU3RhdGUoZXhlcmNpc2VTZXRzKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldExvY2FsRXhlcmNpc2VTdGF0ZShleGVyY2lzZVNldHMpLCBbZXhlcmNpc2VTZXRzXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4ZXJjaXNlRm9ybSA9IChleGVyY2lzZV9uYW1lLCBzZXRzKSA9PiB7XHJcbiAgICBjb25zdCBleGVyY2lzZUlkID0gc2V0c1swXT8uZXhlcmNpc2VfaWQ7XHJcbiAgICBpZiAoZXhlcmNpc2VJZCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4ZXJjaXNlU2V0Rm9ybSA9IHtcclxuICAgICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlX2lkOiBzZXRzWzBdLndvcmtvdXRfZXhlcmNpc2VfaWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFNldEZvcm0gPSAod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCkgPT5cclxuICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgICAgICAgcmVwZXRpdGlvbnM6IHJlcGV0aXRpb25zLFxyXG4gICAgICAgICAgd2VpZ2h0OiB3ZWlnaHQsXHJcbiAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcclxuICAgICAgICAgIHR5cGU6IFwic2V0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1ldGhvZDogXCJQVVRcIiB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlRnVuYyA9IChpbmRleCkgPT4ge1xyXG4gICAgICBzZXRMb2NhbEV4ZXJjaXNlU3RhdGUoKG9sZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLm9sZFN0YXRlIH07XHJcbiAgICAgICAgbmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0gPSBuZXdTdGF0ZVtleGVyY2lzZV9uYW1lXS5maWx0ZXIoXHJcbiAgICAgICAgICAocykgPT4gcy5zZXRfaWQgIT09IGluZGV4XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0RnVuYyA9ICgpID0+IHtcclxuICAgICAgc2V0TG9jYWxFeGVyY2lzZVN0YXRlKChvbGRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5vbGRTdGF0ZSB9O1xyXG4gICAgICAgIG5ld1N0YXRlW2V4ZXJjaXNlX25hbWVdID0gWy4uLm5ld1N0YXRlW2V4ZXJjaXNlX25hbWVdLCBleGVyY2lzZVNldEZvcm1dO1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KGV4ZXJjaXNlU2V0Rm9ybSwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByZXZpb3VzQmVzdFNldCA9IGJlc3RTZXRCeUV4ZXJjaXNlW2V4ZXJjaXNlSWRdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBtYi0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPntleGVyY2lzZV9uYW1lfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0ICYmIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGk+IFBCOjwvaT4ge3ByZXZpb3VzQmVzdFNldC53ZWlnaHR9IHh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3ByZXZpb3VzQmVzdFNldC5yZXBldGl0aW9uc30gfCB7cHJldmlvdXNCZXN0U2V0Lm1heF92b2x1bWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItMiBtdC0yXCIgLz5cclxuXHJcbiAgICAgICAgICB7c2V0cy5tYXAoKHNldCkgPT4gKFxyXG4gICAgICAgICAgICA8U2V0SW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgd2VpZ2h0PXtzZXQud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZD17c2V0LmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICByZXBldGl0aW9ucz17c2V0LnJlcGV0aXRpb25zfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUZ1bmM9eygpID0+IGRlbGV0ZUZ1bmMoc2V0LnNldF9pZCl9XHJcbiAgICAgICAgICAgICAgc3VibWl0RnVuYz17c3VibWl0U2V0Rm9ybX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGJ1dHRvbnMgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI4NSVcIiB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZnVsbHdpZHRoIGlzLWJsYWNrIGlzLXNtYWxsIHRpbGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICsgU2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBzaG93RGVsZXRlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH0gZHJvcGRvd24gaXMtcmlnaHRgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGUoKGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2V4ZXJjaXNlSWRdOiAhKGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZU1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcC0wIG0tMFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgcC0wIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHAtMiBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIGlzLWZ1bGx3aWR0aCBtLTAgcC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uZXhlcmNpc2VTZXRGb3JtLCB0eXBlOiBcImV4ZXJjaXNlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2J1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5lbnRyaWVzKGxvY2FsRXhlcmNpc2VTdGF0ZSkubWFwKFxyXG4gICAgICAgIChbZXhlcmNpc2VfbmFtZSwgc2V0c10sIGV4SW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtleEluZGV4fT57cmVuZGVyRXhlcmNpc2VGb3JtKGV4ZXJjaXNlX25hbWUsIHNldHMpfTwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8TGluayB0bz17YC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWB9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNSBidXR0b24gaXMtYmxhY2sgaXMtZnVsbHdpZHRoIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICArIEV4ZXJjaXNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IENnQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IHsgUmlDaGVja0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldElucHV0KHByb3BzKSB7XHJcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKHByb3BzLndlaWdodCk7XHJcbiAgY29uc3QgW3JlcGV0aXRpb25zLCBzZXRSZXBldGl0aW9uc10gPSB1c2VTdGF0ZShwcm9wcy5yZXBldGl0aW9ucyk7XHJcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBsZXRlZCk7XHJcbiAgY29uc3QgdXBkYXRlRGIgPSBkZWJvdW5jZShcclxuICAgICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBwcm9wcy5zdWJtaXRGdW5jKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpLFxyXG4gICAgMjAwLFxyXG4gICAge1xyXG4gICAgICBsZWFkaW5nOiB0cnVlLFxyXG4gICAgICB0cmFpbGluZzogdHJ1ZSxcclxuICAgIH1cclxuICApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIHByb3BzLmluZGV4KTtcclxuICB9LCBbd2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLTIgcC0yXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxdmhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbXBsZXRlZCA/IFwiI2ViZmZmY1wiIDogXCIjZjVmNWY1XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2VpZ2h0IChrZylcIlxyXG4gICAgICAgICAgdmFsdWU9e3dlaWdodH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRXZWlnaHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcHNcIlxyXG4gICAgICAgICAgdmFsdWU9e3JlcGV0aXRpb25zfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlcGV0aXRpb25zKCgpID0+IHtcclxuICAgICAgICAgICAgICB1cGRhdGVEYih3ZWlnaHQsIGUudGFyZ2V0LnZhbHVlLCBjb21wbGV0ZWQsIHByb3BzLmluZGV4KTtcclxuICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1saWdodCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5kZWxldGVGdW5jfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDZ0Nsb3NlIHNpemU9ezE1fSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb21wbGV0ZWQoKGNvbXBsZXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICFjb21wbGV0ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0ICR7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZCA/IFwiaXMtcHJpbWFyeVwiIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJpQ2hlY2tGaWxsIHNpemU9ezE1fSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgRm9ybSwgdXNlU3VibWl0LCB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBwYWRTdGFydCwgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbnMgfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgdXNlcklkID0gZm9ybS5nZXQoXCJ1c2VySWRcIik7XHJcbiAgbGV0IG5hbWUgPSBmb3JtLmdldChcIm5hbWVcIik7XHJcbiAgbGV0IGRhdGV0aW1lID0gZm9ybS5nZXQoXCJkYXRldGltZVwiKTtcclxuICBsZXQgbG9jYXRpb24gPSBmb3JtLmdldChcImxvY2F0aW9uXCIpO1xyXG4gIGxvY2F0aW9uID0gbG9jYXRpb24/LnRvTG93ZXJDYXNlKCk/LnJlcGxhY2UoLyAvZywgXCJfXCIpID8/IG51bGw7XHJcbiAgY29uc3Qgd29ya291dE9iamVjdElkID0gYXdhaXQgY3JlYXRlV29ya291dCh7XHJcbiAgICBuYW1lLFxyXG4gICAgZGF0ZXRpbWUsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIHVzZXJJZCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRPYmplY3RJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcbiAgcmV0dXJuIGxvY2F0aW9ucztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVdvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCBsb2NhdGlvbnMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaGFzTG9jYXRpb24sIHNldEhhc0xvY2F0aW9uXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnREYXRlVGltZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB2YXIgbW9udGggPSBwYWRTdGFydChkYXRlLmdldE1vbnRoKCkgKyAxLCAyLCAwKTtcclxuICAgIHZhciBkYXkgPSBwYWRTdGFydChkYXRlLmdldERhdGUoKSwgMiwgMCk7XHJcbiAgICB2YXIgaHIgPSBwYWRTdGFydChkYXRlLmdldEhvdXJzKCksIDIsIDApO1xyXG4gICAgdmFyIG1pbiA9IHBhZFN0YXJ0KGRhdGUuZ2V0TWludXRlcygpLCAyLCAwKTtcclxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtocn06JHttaW59YDtcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+TmV3IFdvcmtvdXQ8L2g0PlxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInVzZXJJZFwiKTtcclxuICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdWlkKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZXRpbWVcIik7XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF5anMoYCR7ZXZlbnQudGFyZ2V0LmRhdGV0aW1lTG9jYWwudmFsdWV9OjAwYCkudXRjKClcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICA/IGAke2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXCJkZGRkXCIpfSB3b3Jrb3V0YFxyXG4gICAgICAgICAgICAgICAgICA6IGV2ZW50LnRhcmdldC5uYW1lUGxhY2Vob2xkZXIudmFsdWVcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZChkYXRldGltZSk7XHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgc3VibWl0KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYW1lL0Rlc2M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtkYXlqcyhnZXRDdXJyZW50RGF0ZVRpbWUoKSkuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZGRkXCJcclxuICAgICAgICAgICAgICAgICAgICApfSB3b3Jrb3V0YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+RGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRldGltZUxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dldEN1cnJlbnREYXRlVGltZSgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkxvY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIWUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0SGFzTG9jYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2V0SGFzTG9jYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dCBzZWxlY3QgYH1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PVwibG9jYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJsb2NhdGlvbnNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0ubmFtZX0gdmFsdWU9e3N0YXJ0Q2FzZShpdGVtLm5hbWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG9jYXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhdGUgTmV3XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvaG9tZVwiKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIDw+PC8+O1xufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaUFkZEJveEZpbGwsIFJpTGluZUNoYXJ0RmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyBHaVN0cm9uZyB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xyXG5pbXBvcnQgeyBNZExvY2F0aW9uT24gfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSBcIn4vY29tcG9uZW50cy9GaXJlYmFzZUxvZ2luXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVSb3V0ZSgpIHtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXJJZD17c2V0VXNlcklkfSBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNiBsZXZlbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvYmFubmVyLnBuZ1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdCBib3VuY2UgY29udGFpbmVyIGlzLWhpZGRlbi10b3VjaFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgXCI+XHJcbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJveCBzb3JhRm9udCBwcmltYXJ5IGhhcy10ZXh0LXdoaXRlIHRpdGxlIG1iLTIgaXMtNFwiPlxyXG4gICAgICAgICAgICAgICAgICBIZWxsbywge3VzZXIgJiYgdXNlci5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxhPjwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29yYUZvbnQgYm94IHAtNCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICB0bz17YC9jcmVhdGU/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0FBIENyZWF0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy8/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0M4IEFuYWx5dGljc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtNCBtYi0yIHNvcmFGb250XCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3dvcmtvdXRzP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFx1RDgzRFx1RENDNSBXb3Jrb3V0c1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtNCBtYi0yIHNvcmFGb250IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9sb2NhdGlvbnM/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHVEODNDXHVERkVBIExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IGNvbnRhaW5lciBzb3JhRm9udFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgbWItMVwiPldvcmtvdXQsIFNtYXJ0ZXIuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlBsZWFzZSBsb2cgaW4gdG8gY29udGludWUuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEZpcmViYXNlTG9naW4gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOWNhZDlmNzAnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LU1TR01LUERNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SVlBNSTVCTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNESFdCMktVLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1RVkRSNVZQUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVVM1QlVGQzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NTkJPUlJOVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZXRURRUTRRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTElXNkpYM0cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhbmFseXRpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzLU1VSFFTSEg1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TSUtHSTc3Wi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpFNlZRQ0dGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjZNT1RDQUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncGVyc29uYWwtYmVzdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzLTNWWk83Sk1LLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MWE5GRVRQWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkLVZJWFA2M043LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MWE5GRVRQWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZSc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzonc2NoZWR1bGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlLUFPSlNDN1pELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zSlNCTDZWSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3N0YXRpc3RpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MtWTIyS0lNN0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzondHJhaW5lZC10aGlzLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrLVlQTzZLRzRGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MWE5GRVRQWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid3b3Jrb3V0cy1wZXItd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWstQkdFQUVBSUkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxYTkZFVFBYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRkpZWU1RVEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY3JlYXRlJzp7J2lkJzoncm91dGVzL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY3JlYXRlLTIzS1FVQUNFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zSlNCTDZWSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNJS0dJNzdaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjZNT1RDQUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSllZTVFURy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtSDczWElIVkQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNaN1JUWDQ2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0lLR0k3N1ouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUxOUEtXQjVSLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMtNExTT0E1R0ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNJS0dJNzdaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjZNT1RDQUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MWE5GRVRQWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMvOmxvY2F0aW9uSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkLUZUWUg1V1VYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GSllZTVFURy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQnOnsnaWQnOidyb3V0ZXMvd29ya291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQtRlpYUlBNNUwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNJS0dJNzdaLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dCcsJ3BhdGgnOic6d29ya291dElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC01VUdTTVJZWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM0pTQkw2VkguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NTkJPUlJOVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZXRURRUTRRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTElXNkpYM0cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aNk1PVENBSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZKWVlNUVRHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC0yT0RBT0ZJVy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhdGgnOidhZGRFeGVyY2lzZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZS1HU0dOSjRBNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRkpZWU1RVEcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcycsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOidjdXJyZW50RXhlcmNpc2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzLTJDVTU0VkdNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWjdSVFg0Ni5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXRzJzp7J2lkJzoncm91dGVzL3dvcmtvdXRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXRzLUdSRVFUWkZNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zSlNCTDZWSC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNJS0dJNzdaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWjZNT1RDQUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSllZTVFURy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOUNBRDlGNzAuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FB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
