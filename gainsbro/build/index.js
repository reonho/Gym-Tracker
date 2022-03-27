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
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
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
    className: "button is-black"
  }, "Login"), user && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `dropdown ${dropdownActive ? "is-active" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-trigger"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-black is-fullwidth ",
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
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-content"
  }, /* @__PURE__ */ React.createElement("a", {
    onClick: logout,
    className: "dropdown-item"
  }, "Logout"))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\root.jsx
function meta() {
  return { title: "GainsBro" };
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
    className: "navbar is-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-brand"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "navbar-item is-size-5 ",
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
    href: "https://css.gg/css",
    rel: "stylesheet"
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
var import_lodash7 = __toESM(require("lodash"));
var import_dayjs5 = __toESM(require("dayjs"));

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
  workouts = (0, import_lodash7.default)(workouts).groupBy((w) => (0, import_dayjs5.default)(w.datetime_start).week()).mapValues((e) => e.length).value();
  let weeksToShow = Object.keys(workouts).map((e) => parseInt(e));
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash7.transform)((0, import_lodash7.pick)(workouts, weeksToShow), (res, val, key) => res[`${(0, import_dayjs5.default)((0, import_dayjs5.default)().week(key).startOf("week").startOf("day")).format("DD/M/YY")} - ${(0, import_dayjs5.default)((0, import_dayjs5.default)().week(key).endOf("week").startOf("day")).format("DD/M/YY")}`] = val);
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
var import_dayjs6 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs6.default.extend(weekOfYear4);
var loader7 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs6.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
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
var import_dayjs7 = __toESM(require("dayjs"));
var weekOfYear5 = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
import_dayjs7.default.extend(weekOfYear5);
import_dayjs7.default.extend(utc);
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
  const weekStartingOnDay = (0, import_dayjs7.default)().week(week).startOf("week").startOf("day");
  let workouts = await getSetsForUser(user, weekStartingOnDay);
  return workouts;
};
function WeeklyScheduleRoute() {
  let workoutData = (0, import_remix11.useLoaderData)();
  const [searchParams] = (0, import_remix11.useSearchParams)();
  const week = searchParams.get("week");
  const weekStartingOnDay = (0, import_dayjs7.default)().week(week).startOf("week").startOf("day");
  const workouts = (0, import_lodash11.default)(workoutData).groupBy((w) => import_dayjs7.default.utc(w.datetime_start).local().format("dddd")).mapValues((v) => (0, import_lodash11.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length).value()).value();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(1, "week").subtract(1, "day").format("DD/MM/YYYY")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "Week ", (0, import_dayjs7.default)().week(), " of ", weekStartingOnDay.format("YYYY"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
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
var import_lodash12 = require("lodash");
var import_react10 = require("react");
var loader9 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
var action3 = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};
function ManageLocationsRoute() {
  const locations = (0, import_remix12.useLoaderData)();
  const [user, setUser] = (0, import_react10.useState)();
  const [searchParams] = (0, import_remix12.useSearchParams)();
  const submit = (0, import_remix12.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash12.startCase)(e.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement("b", null, "Add Location"), /* @__PURE__ */ React.createElement("hr", {
    class: "dropdown-divider"
  }), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "level is-mobile form-control"
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
var import_lodash13 = require("lodash");
var import_dayjs8 = __toESM(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs8.default.extend(utc2);
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
  }, import_dayjs8.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs8.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash13.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_lodash14 = require("lodash");
var import_react12 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react11 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react11.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react11.useState)(props.running);
  (0, import_react11.useEffect)(() => {
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
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react11.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react11.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react11.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var import_dayjs9 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc3 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs9.default.extend(utc3);
import_dayjs9.default.extend(relativeTime);
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
    className: "title is-4 mb-3"
  }, workout == null ? void 0 : workout.name), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-pin"
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash14.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-alarm"
  })), /* @__PURE__ */ React.createElement("span", {
    id: "start"
  }, `${import_dayjs9.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix15.useLoaderData)()[0];
  const fetcher = (0, import_remix15.useFetcher)();
  const [userId, setUserId] = (0, import_react12.useState)();
  const [showMenu, setShowMenu] = (0, import_react12.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react12.useState)(false);
  const [customDate, setCustomDate] = (0, import_react12.useState)(null);
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
  }, "Workout Completed. "), toTime(import_dayjs9.default.utc(workout.datetime_end) - import_dayjs9.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: (0, import_dayjs9.default)() - import_dayjs9.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs9.default)().utc()
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
      if ((0, import_dayjs9.default)(e.target.value) > import_dayjs9.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-small is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs9.default)(customDate).utc()
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
var import_lodash15 = require("lodash");
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
  }, (0, import_lodash15.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix16.Outlet, null)));
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
var import_lodash16 = require("lodash");
var import_react13 = require("react");
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
  const [selected, setSelected] = (0, import_react13.useState)();
  const [disabled, setDisabled] = (0, import_react13.useState)(false);
  const exercises = (0, import_remix17.useLoaderData)();
  const fetcher = (0, import_remix17.useFetcher)();
  const exNameToIdMap = (0, import_lodash16.mapValues)((0, import_lodash16.groupBy)(exercises, (exercise) => `${(0, import_lodash16.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash16.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "control"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    autoComplete: "off",
    className: `input is-small ${selected === null && "is-danger"}`,
    list: "exercises",
    name: "exercise",
    onChange: (selected2) => {
      setSelected(exNameToIdMap[selected2.target.value] ?? null);
    }
  }), /* @__PURE__ */ React.createElement("datalist", {
    id: "exercises"
  }, exercises.map((exercise) => /* @__PURE__ */ React.createElement("option", {
    key: exercise.id,
    value: `${(0, import_lodash16.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash16.startCase)(exercise.variant)})` : ""}`
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-item"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setDisabled(true);
      fetcher.submit({ exercise: selected }, { method: "POST" });
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
var import_lodash18 = __toESM(require("lodash"));
var import_react15 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react14 = require("react");
var import_lodash17 = require("lodash");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react14.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react14.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react14.useState)(props.completed);
  const updateDb = (0, import_lodash17.debounce)((weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index), 200, {
    leading: true,
    trailing: true
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mb-2 p-2",
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: "1vh",
      backgroundColor: props.completed ? "#ebfffc" : "#f5f5f5"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "number",
    placeholder: "Weight (kg)",
    value: weight,
    onChange: (e) => {
      setWeight(() => {
        updateDb(e.target.value, repetitions, completed, props.index);
        return e.target.value;
      });
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
        updateDb(weight, repetitions, !complete, props.index);
        return !complete;
      });
    },
    className: `button is-small is-light ${props.completed ? "is-primary" : ""}`
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
    bestSetByExercise = (0, import_lodash18.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash18.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash18.groupBy)(setsForWorkout, (set) => `${(0, import_lodash18.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash18.startCase)(set.variant)})` : ""}`);
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
  const [showDelete, setShowDelete] = (0, import_react15.useState)();
  const { workoutId } = (0, import_remix18.useParams)();
  const fetcher = (0, import_remix18.useFetcher)();
  const renderExerciseForm = (exercise_name, sets) => {
    const exerciseId = sets[0].exercise_id;
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
    const deleteSetForm = (index) => fetcher.submit({
      workout_id: workoutId,
      exercise_name,
      type: "set",
      index
    }, { method: "DELETE" });
    const previousBestSet = bestSetByExercise[exerciseId];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "box mb-3"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "title is-5 mb-1"
    }, exercise_name, " "), previousBestSet && /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, " PB:"), " ", previousBestSet.weight, " x", " ", previousBestSet.repetitions, " | ", previousBestSet.max_volume), /* @__PURE__ */ React.createElement("hr", {
      className: "mb-4 mt-3"
    }), sets.map((set) => /* @__PURE__ */ React.createElement(SetInput, {
      key: set.set_id,
      index: set.set_id,
      weight: set.weight,
      completed: set.completed,
      repetitions: set.repetitions,
      deleteFunc: () => deleteSetForm(set.set_id),
      submitFunc: submitSetForm
    })), /* @__PURE__ */ React.createElement("buttons", {
      className: "level is-mobile mt-5"
    }, /* @__PURE__ */ React.createElement("div", {
      style: { width: "85%" }
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => fetcher.submit(exerciseSetForm, { method: "POST" }),
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
var import_lodash19 = require("lodash");
var import_react16 = require("react");
var import_dayjs10 = __toESM(require("dayjs"));
var utc4 = require("dayjs/plugin/utc");
import_dayjs10.default.extend(utc4);
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
  const [user, setUser] = (0, import_react16.useState)();
  const [hasLocation, setHasLocation] = (0, import_react16.useState)();
  const getCurrentDateTime = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = (0, import_lodash19.padStart)(date.getMonth() + 1, 2, 0);
    var day = (0, import_lodash19.padStart)(date.getDate(), 2, 0);
    var hr = (0, import_lodash19.padStart)(date.getHours(), 2, 0);
    var min = (0, import_lodash19.padStart)(date.getMinutes(), 2, 0);
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
      datetime.setAttribute("value", (0, import_dayjs10.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs10.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
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
    placeholder: `${(0, import_dayjs10.default)(getCurrentDateTime()).format("dddd")} workout`
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
    value: (0, import_lodash19.startCase)(item.name)
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
  default: () => HomeRoute,
  links: () => links
});
init_react();
var import_react17 = require("react");
var import_ri2 = require("react-icons/ri");
var import_gi = require("react-icons/gi");
var import_md4 = require("react-icons/md");

// app/styles/styles.module.css
var styles_module_default = "/build/_assets/styles.module-PNDMMM4N.css";

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\home.jsx
function links() {
  return [{ rel: "stylesheet", href: styles_module_default }];
}
function HomeRoute() {
  const [userId, setUserId] = (0, import_react17.useState)();
  const [user, setUser] = (0, import_react17.useState)();
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
    className: "level-right container"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "panel is-black m-5 "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "panel-heading"
  }, "Hi, ", user && user.displayName), /* @__PURE__ */ React.createElement("a", null), /* @__PURE__ */ React.createElement("a", {
    className: "panel-block is-active",
    href: `/create?user=${userId}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "panel-icon"
  }, /* @__PURE__ */ React.createElement(import_ri2.RiAddBoxFill, {
    size: 15
  })), "Create Workout"), /* @__PURE__ */ React.createElement("a", {
    className: "panel-block",
    href: `/analytics/?user=${userId}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "panel-icon"
  }, /* @__PURE__ */ React.createElement(import_ri2.RiLineChartFill, {
    size: 15
  })), "Analytics"), /* @__PURE__ */ React.createElement("a", {
    className: "panel-block",
    href: `/workouts?user=${userId}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "panel-icon"
  }, /* @__PURE__ */ React.createElement(import_gi.GiStrong, {
    size: 15
  })), "Workouts"), /* @__PURE__ */ React.createElement("a", {
    className: "panel-block is-active",
    href: `/locations?user=${userId}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "panel-icon"
  }, /* @__PURE__ */ React.createElement(import_md4.MdLocationOn, {
    size: 15
  })), "Locations"))) : /* @__PURE__ */ React.createElement("div", {
    className: "level-right container"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-1 mb-1",
    style: { fontFamily: "Merriweather" }
  }, "Workout, Smarter."), /* @__PURE__ */ React.createElement("div", null, "Please log in to continue..."))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ea1f6947", "entry": { "module": "/build/entry.client-DFMW2537.js", "imports": ["/build/_shared/chunk-HNEAWUC3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6VYQTWZI.js", "imports": ["/build/_shared/chunk-AA5UNAWZ.js", "/build/_shared/chunk-WWHHKPSU.js", "/build/_shared/chunk-GLSJ223L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-QCTURB2V.js", "imports": ["/build/_shared/chunk-RMJOJGCE.js", "/build/_shared/chunk-MXJ5L25Q.js", "/build/_shared/chunk-MSNYDQZQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-4HS5V4LD.js", "imports": ["/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-VZYXBZ6P.js", "imports": ["/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-S4VPT44N.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-DMWBABUW.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-6IRFH6FW.js", "imports": ["/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-IFTGOCQV.js", "imports": ["/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-6KYTSUJ2.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-RMJOJGCE.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-A25PLLJU.js", "imports": ["/build/_shared/chunk-USFFHJBN.js", "/build/_shared/chunk-RMJOJGCE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-W47DPTJB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-JHTVG3P6.js", "imports": ["/build/_shared/chunk-RMJOJGCE.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-KRTTE675.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-LL5STCNJ.js", "imports": ["/build/_shared/chunk-RMJOJGCE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-ILTREY3S.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-AA5UNAWZ.js", "/build/_shared/chunk-WWHHKPSU.js", "/build/_shared/chunk-GLSJ223L.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-QC3AH35X.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-4UKFADM4.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-AJM24S4A.js", "imports": ["/build/_shared/chunk-USFFHJBN.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-L2X7AENY.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-RMJOJGCE.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-EA1F6947.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxzdGF0aXN0aWNzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc2NoZWR1bGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbG9jYXRpb25zLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3RvcHdhdGNoLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxhZGRFeGVyY2lzZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxjdXJyZW50RXhlcmNpc2VzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXRJbnB1dC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGNyZWF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxob21lLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXGVudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy4kbG9jYXRpb25JZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxzdGF0aXN0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHNjaGVkdWxlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhbmFseXRpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInByb2dyZXNzaXZlLW92ZXJsb2FkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ0cmFpbmVkLXRoaXMtd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwid29ya291dHMtcGVyLXdlZWtcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInBlcnNvbmFsLWJlc3RzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic3RhdGlzdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic2NoZWR1bGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9uc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpbi5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcclxuICByZXR1cm4geyB0aXRsZTogXCJHYWluc0Jyb1wiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmaXJlYmFzZUNvbmZpZzoge1xyXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkFVVEhfRE9NQUlOLFxyXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlBST0pFQ1RfSUQsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlNUT1JBR0VfQlVDS0VULFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTVNHX1NFTkRFUl9JRCxcclxuICAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LkFQUF9JRCxcclxuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTUVBU1VSRU1FTlRfSUQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWJsYWNrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaXMtc2l6ZS01IFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICB7LyogPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY3NzLmdnL2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMi4xNC4xL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiKX0+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICA8RmlyZWJhc2VMb2dpbiBhcHA9e2FwcH0gLz5cclxuICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcblxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKHByb3BzLmFwcCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvb2dsZUxvZ2luKCkge1xyXG4gICAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshdXNlciAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrXCI+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHtkcm9wZG93bkFjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgaXMtZnVsbHdpZHRoIFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duQWN0aXZlKChhY3RpdmVTdGF0ZSkgPT4gIWFjdGl2ZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWRFeHBhbmRNb3JlIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVBhcmFtcywgdXNlTG9hZGVyRGF0YSwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0V29ya291dHNQZXJMb2NhdGlvbixcclxuICBkZWxldGVMb2NhdGlvbixcclxuICByZW5hbWVMb2NhdGlvbixcclxufSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzQXRMb2NhdGlvbiA9IGF3YWl0IGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcik7XHJcblxyXG4gIGNvbnN0IGdldE5hbWVGcm9tSWQgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/Lm5hbWVcclxuICApO1xyXG4gIGNvbnN0IHdvcmtvdXRzUGVyTG9jYXRpb24gPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/LmNvdW50ID8/IDBcclxuICApO1xyXG4gIHJldHVybiBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbklkID0gZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIik7XHJcblxyXG4gICAgYXdhaXQgcmVuYW1lTG9jYXRpb24oXHJcbiAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgIGxvY2F0aW9uTmFtZS5yZXBsYWNlKC8gL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIC8vIERFTEVURVxyXG4gICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGRlbGV0ZUxvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKSk7XHJcbiAgICBpZiAoZGVsZXRlZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZGVsZXRlZD8uWzBdPy51c2VyX2lkO1xyXG4gICAgICByZXR1cm4gcmVkaXJlY3QodXNlciA/IGAvbG9jYXRpb25zP3VzZXI9JHt1c2VyfWAgOiBcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBcIlN1Y2Nlc3NcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uUm91dGUoKSB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbklkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbc2hvd0lucHV0LCBzZXRTaG93SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZW5hbWVJbnB1dCwgc2V0UmVuYW1lSW5wdXRdID0gdXNlU3RhdGUoXHJcbiAgICBzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0gPz8gbnVsbClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTMgY29udGFpbmVyIGJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+XHJcbiAgICAgICAgICB7c3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aT57Z2V0TmFtZUZyb21JZFtsb2NhdGlvbklkXX08L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICBOdW1iZXIgb2Ygd29ya291dHM6IHt3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSA/PyAwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICB7c2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW5hbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCwgbG9jYXRpb25OYW1lOiByZW5hbWVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQVVRcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IXNob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgbGV2ZWwtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5wdXQoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlbmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHshd29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9ucyh1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3Blcl9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTG9jYXRpb24obG9jYXRpb25JZCwgbG9jYXRpb25OYW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC51cGRhdGUoeyBuYW1lOiBsb2NhdGlvbk5hbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTG9jYXRpb24obG9jYXRpb25OYW1lLCB1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmluc2VydCh7IG5hbWU6IGxvY2F0aW9uTmFtZSwgdXNlcl9pZDogdXNlcklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5sZXQgc3VwYWJhc2U7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XHJcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9BTk9OX0tFWTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnN1cGFiYXNlKSB7XHJcbiAgICBnbG9iYWwuc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbiAgfVxyXG4gIHN1cGFiYXNlID0gZ2xvYmFsLnN1cGFiYXNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTtcclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHVzZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3ZWVrID0gZGF5anMoKS53ZWVrKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvXCIpIHtcclxuICAgICAgbmF2aWdhdGUoYC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrfWApO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHVzZXIsIHdlZWtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbS01XCI+QW5hbHl0aWNzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5FZmZvcnQgU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWt9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhaW5lZCB0aGlzIHdlZWtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmtvdXRzIHBlciBXZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvc2NoZWR1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zY2hlZHVsZT91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWt9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2NoZWR1bGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zdGF0aXN0aWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc3RhdGlzdGljcz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0aXN0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5TdHJlbmd0aCBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQ/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3NpdmUgT3ZlcmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2FuYWx5dGljc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckF1dGhvcmlzZWRDb21wb25lbnQocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAocmVzdWx0KSA9PiB7XHJcbiAgICByZXN1bHQgPyBzZXRVc2VyKHJlc3VsdCkgOiBzZXRVc2VyKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgICAgbmF2aWdhdGUoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgbGV0IF8gPSBwcm9wcy5zZXRVc2VyID8gcHJvcHMuc2V0VXNlcih1c2VyKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICAgaWYgKHByb3BzLmlkUHJlZGljYXRlICYmICFwcm9wcy5pZFByZWRpY2F0ZSh1aWQpKSB7XHJcbiAgICAgICAgbmF2aWdhdGUoXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgXyA9IHByb3BzLnNldFVzZXJJZCA/IHByb3BzLnNldFVzZXJJZCh1aWQpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8Pntwcm9wcy5jaGlsZHJlbn08Lz47XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEV4ZXJjaXNlc0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVN1Ym1pdCwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFByb2dyZXNzaXZlT3ZlcmxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgbGV0IGV4ZXJjaXNlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJleGVyY2lzZV9pZFwiKSA/PyBleGVyY2lzZXNbMF0/LmlkO1xyXG4gIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXIsIGV4ZXJjaXNlKTtcclxuXHJcbiAgY29uc3Qgc2V0c0J5RXhlcmNpc2UgPSBncm91cEJ5KHNldHMsIChzKSA9PiBzLmV4ZXJjaXNlX2lkKVtleGVyY2lzZV07XHJcbiAgcmV0dXJuIHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NSb3V0ZSgpIHtcclxuICBjb25zdCB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHNpbmdsZUV4ZXJjaXNlQ2hhcnQgPSBzZXRzQnlFeGVyY2lzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Qcm9ncmVzc2l2ZSBPdmVybG9hZDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG1iLTQgaXMtc21hbGxcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImV4ZXJjaXNlX2lkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlX2lkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtleGVyY2lzZXMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3N0YXJ0Q2FzZShlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ID8gKFxyXG4gICAgICAgICAgPFByb2dyZXNzaXZlT3ZlcmxvYWQgcHJvZ3Jlc3NpdmVPdmVybG9hZD17c2luZ2xlRXhlcmNpc2VDaGFydH0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0XCJcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApIHtcclxuICBpZiAobXVzY2xlX2dyb3VwKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImV4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcIm11c2NsZV9ncm91cFwiLCBtdXNjbGVfZ3JvdXApO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJleGVyY2lzZVwiKS5zZWxlY3QoXCIqXCIpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXVzY2xlR3JvdXBzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImRpc3RpbmN0X211c2NsZV9ncm91cHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAub3JkZXIoXCJuYW1lXCIpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJleGVyY2lzZXNfZm9yX3VzZXJcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5U3RhdHNGb3JFeGVyY2lzZSh1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsYXN0X3dvcmtvdXRfd2l0aF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2VcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXQoZm9ybVNldCkge1xyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICAvLyBjbGVhbiB1cFxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImVtcHR5X3dvcmtvdXRfZXhlcmNpc2VzXCIpLnNlbGVjdChcIipcIik7XHJcbiAgY29uc3QgaWRzID0gZGF0YS5tYXAoKHdvcmtvdXRfZXhlcmNpc2UpID0+IHdvcmtvdXRfZXhlcmNpc2UuaWQpO1xyXG4gIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpLmRlbGV0ZSgpLmluKFwiaWRcIiwgaWRzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFNldChmb3JtU2V0KSB7XHJcbiAgY29uc3QgYWRkID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInNldFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlOiBmb3JtU2V0LmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIiksXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkPy5kYXRhPy5bMF07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNldChmb3JtU2V0KSB7XHJcbiAgbGV0IHN1Ym1pc3Npb25TZXQgPSB7XHJcbiAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2VpZ2h0Rm9yU2V0ID0gZm9ybVNldC5nZXQoXCJ3ZWlnaHRcIik7XHJcbiAgY29uc3QgcmVwc0ZvclNldCA9IGZvcm1TZXQuZ2V0KFwicmVwZXRpdGlvbnNcIik7XHJcbiAgY29uc3QgY29tcGxldGVkRm9yU2V0ID0gZm9ybVNldC5nZXQoXCJjb21wbGV0ZWRcIik7XHJcblxyXG4gIGlmICh3ZWlnaHRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQud2VpZ2h0ID0gcGFyc2VGbG9hdCh3ZWlnaHRGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAocmVwc0ZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC5yZXBldGl0aW9ucyA9IHBhcnNlRmxvYXQocmVwc0ZvclNldCk7XHJcbiAgfVxyXG4gIGlmIChjb21wbGV0ZWRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQuY29tcGxldGVkID0gY29tcGxldGVkRm9yU2V0ID09PSBcInRydWVcIjtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC51cGRhdGUoc3VibWlzc2lvblNldClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtU2V0LmdldChcImluZGV4XCIpIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbi8vZGVmYXVsdCBmaWx0ZXJzIGZvciBsYXRlc3Qgd2Vla1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0c0ZvclVzZXIodXNlcklkLCBmaWx0ZXJfc3RhcnQsIGZpbHRlcl9lbmQpIHtcclxuICBjb25zdCBmaWx0ZXJfZGF0ZV9zdGFydCA9IGZpbHRlcl9zdGFydFxyXG4gICAgPyBkYXlqcyhmaWx0ZXJfc3RhcnQpXHJcbiAgICA6IGRheWpzKGRheWpzKCkud2VlayhkYXlqcygpLndlZWsoKSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSk7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfZW5kID0gZmlsdGVyX2VuZCA/IGRheWpzKGZpbHRlcl9lbmQpIDogZGF5anMoKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgIC5ndGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9zdGFydClcclxuICAgIC5sdGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9lbmQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcklkLCBleGVyY2lzZUlkKSB7XHJcbiAgaWYgKGV4ZXJjaXNlSWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJtYXhfdm9sdW1lX2Zvcl93b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKVxyXG4gICAgICAuZXEoXCJleGVyY2lzZV9pZFwiLCBleGVyY2lzZUlkKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsaWZldGltZV9zdGF0c1wiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuQ2hhcnQucmVnaXN0ZXIoW1Rvb2x0aXBdKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlT3ZlcmxvYWQocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhlcmNpc2VQcm9ncmVzcyA9IHNvcnRCeShcclxuICAgIHByb3BzLnByb2dyZXNzaXZlT3ZlcmxvYWQsXHJcbiAgICAoZSkgPT4gZS5kYXRldGltZV9zdGFydFxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb2xvciA9IGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke1xyXG4gICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICB9LDAuMylgO1xyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKSk7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcInByb2dyZXNzaXZlT3ZlcmxvYWRcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChleGVyY2lzZVByb2dyZXNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3NpdmVPdmVybG9hZENoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+XHJcbiAgICAgICAgICBkYXlqcyhlLmRhdGV0aW1lX3N0YXJ0KS5mb3JtYXQoXCJERC9NTS9ZWVwiKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiVm9sdW1lIFByb2dyZXNzIChXZWlnaHQgeCBSZXBzKVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBleGVyY2lzZVByb2dyZXNzLm1hcCgoZSkgPT4gZS5tYXhfdm9sdW1lKSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGNvbnRleHQuZGF0YUluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBWb2x1bWU6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLm1heF92b2x1bWV9IHwgV2VpZ2h0OiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS53ZWlnaHR9IHwgUmVwczogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ucmVwZXRpdGlvbnN9YDtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0cy5qc1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVN1Ym1pdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBsb2Rhc2ggZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgV2Vla2x5VHJhaW5pbmdTZXRzIGZyb20gXCJ+L2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzXCI7XHJcblxyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHt9O1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBkYXlqcygpLndlZWsod2Vlaykuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKTtcclxuXHJcbiAgY29uc3QgdXNlcldvcmtvdXRzID0gYXdhaXQgZ2V0U2V0c0ZvclVzZXIoXHJcbiAgICB1c2VyLFxyXG4gICAgd2Vla1N0YXJ0aW5nT25EYXksXHJcbiAgICB3ZWVrU3RhcnRpbmdPbkRheS5hZGQoMSwgXCJ3ZWVrXCIpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGxvZGFzaCh1c2VyV29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhpc1dlZWtSb3V0ZSgpIHtcclxuICBjb25zdCB3ZWVrbHlTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3Qgd2VlayA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZGF5anMoKS53ZWVrKHdlZWspLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIik7XHJcbiAgY29uc3QgY3VycmVudFdlZWsgPSBkYXlqcygpLndlZWsoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVHJhaW5lZFRoaXNXZWVrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlRyYWluZWQgdGhpcyBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcImRheVwiKVxyXG4gICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIC17XCIgXCJ9XHJcbiAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgV2VlayB7d2Vla30gb2Yge3dlZWtTdGFydGluZ09uRGF5LmZvcm1hdChcIllZWVlcIil9XHJcbiAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG10LTIgbWItMlwiPlxyXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWs6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge0FycmF5KHBhcnNlSW50KGN1cnJlbnRXZWVrKSlcclxuICAgICAgICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXggKyAxfSBrZXk9e2luZGV4ICsgMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlZWsge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7T2JqZWN0LmtleXMod2Vla2x5U2V0cykubGVuZ3RoID09PSAwICYmIFwiTm90aGluZyB0cmFpbmVkIHRoaXMgd2Vla1wifVxyXG4gICAgICAgIDxXZWVrbHlUcmFpbmluZ1NldHMgd2Vla2x5U2V0cz17d2Vla2x5U2V0c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8PntyZW5kZXJUcmFpbmVkVGhpc1dlZWsoKX08Lz47XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVRyYWluaW5nU2V0cyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBzZXRzID0gcHJvcHMud2Vla2x5U2V0cztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwid2Vla2x5U2V0c1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cykge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseVNldHNcIikpO1xyXG4gICAgY29uc3Qgd2Vla2x5U2V0c0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG5cclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMoc2V0cykubWFwKChlKSA9PiBzdGFydENhc2UoZSkpLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIiMgb2YgU2V0c1wiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMoc2V0cyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhzZXRzKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgICAgfSwwLjQpYFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJ3ZWVrbHlTZXRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyB0cmFuc2Zvcm0sIHBpY2sgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFdvcmtvdXRQZXJXZWVrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vla1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS53ZWVrKCkpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICBsZXQgd2Vla3NUb1Nob3cgPSBPYmplY3Qua2V5cyh3b3Jrb3V0cykubWFwKChlKSA9PiBwYXJzZUludChlKSk7XHJcbiAgd2Vla3NUb1Nob3cuc29ydCgpO1xyXG4gIHdlZWtzVG9TaG93ID0gd2Vla3NUb1Nob3cuc2xpY2UoMCwgMTApLm1hcChTdHJpbmcpO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtKFxyXG4gICAgcGljayh3b3Jrb3V0cywgd2Vla3NUb1Nob3cpLFxyXG4gICAgKHJlcywgdmFsLCBrZXkpID0+XHJcbiAgICAgIChyZXNbXHJcbiAgICAgICAgYCR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSkuZm9ybWF0KFxyXG4gICAgICAgICAgXCJERC9NL1lZXCJcclxuICAgICAgICApfSAtICR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuZW5kT2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpLmZvcm1hdChcclxuICAgICAgICAgIFwiREQvTS9ZWVwiXHJcbiAgICAgICAgKX1gXHJcbiAgICAgIF0gPSB2YWwpXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRzUGVyV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPldvcmtvdXRzIHBlciBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPFdvcmtvdXRQZXJXZWVrIHdvcmtvdXRzUGVyV2Vlaz17d29ya291dHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXb3Jrb3V0KHdvcmtvdXQpIHtcclxuICBsZXQgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiaWRcIilcclxuICAgIC5tYXRjaCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG5cclxuICBsZXQgbG9jYXRpb25JZDtcclxuICBpZiAoY2hlY2tMb2NhdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgICAgLmluc2VydCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG4gIH1cclxuICBsb2NhdGlvbklkID0gY2hlY2tMb2NhdGlvbi5kYXRhPy5bMF0uaWQ7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIndvcmtvdXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgbmFtZTogd29ya291dC5uYW1lLFxyXG4gICAgICBkYXRldGltZV9zdGFydDogd29ya291dC5kYXRldGltZSxcclxuICAgICAgZGF0ZXRpbWVfZW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbklkLFxyXG4gICAgICB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgcmV0dXJuIGRhdGFbMF0uaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXb3Jrb3V0KHdvcmtvdXRfaWQpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIHdvcmtvdXRfaWQpO1xyXG5cclxuICBjb25zdCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzID1cclxuICAgIFwiKFwiICsgd29ya291dC5kYXRhLm1hcCgoZSkgPT4gZS53b3Jrb3V0X2V4ZXJjaXNlX2lkKS50b1N0cmluZygpICsgXCIpXCI7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZmlsdGVyKFwid29ya291dF9leGVyY2lzZVwiLCBcImluXCIsIGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMpO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIGNvbnN0IF9kZWxldGVXb3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgcmV0dXJuIF9kZWxldGVXb3Jrb3V0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YTogd29ya291dCB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcImlkXCIsIGlkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgaWQpXHJcbiAgICAub3JkZXIoXCJzZXRfaWRcIik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoV29ya291dChpZCwgZGF0ZXRpbWUpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC51cGRhdGUoeyBkYXRldGltZV9lbmQ6IGRhdGV0aW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogaWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIHdvcmtvdXRzLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYmVzdFNldEJ5RXhlcmNpc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxCZXN0Um91dGUoKSB7XHJcbiAgY29uc3QgbGlzdEJlc3RTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMVwiPlBlcnNvbmFsIEJlc3RzPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGk+V2VpZ2h0IG9mIHNldCB3aXRoIG1heCB2b2x1bWU8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2xpc3RCZXN0U2V0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPFBlcnNvbmFsQmVzdHMgYmVzdFNldHM9e2xpc3RCZXN0U2V0c30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIk5vIHdvcmtvdXRzIHlldFwiXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbFJlY29yZHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicGVyc29uYWxSZWNvcmRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLmJlc3RTZXRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxSZWNvcmRzXCIpKTtcclxuICAgIGNvbnN0IHByQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+XHJcbiAgICAgICAgICBzdGFydENhc2UoYCR7dmFsdWUuZXhlcmNpc2VfbmFtZX0gJHt2YWx1ZS52YXJpYW50ID8/IFwiXCJ9YClcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9wcy5iZXN0U2V0cy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS53ZWlnaHQpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmVzdFNldHMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwgJHtcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICB9LDAuNClgO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBwcm9wcy5iZXN0U2V0cy5sZW5ndGgsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IE9iamVjdC52YWx1ZXMocHJvcHMuYmVzdFNldHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAgV2VpZ2h0OiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0gfCBWb2w6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB4ICR7c2V0W2RhdGFJbmRleF0ucmVwZXRpdGlvbnN9ID0gJHtzZXRbZGF0YUluZGV4XS5tYXhfdm9sdW1lfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldExpZmV0aW1lU3RhdGlzdGljcywgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIHJlZHVjZSwgcGljaywgb21pdCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgc3RhdHMgPSBhd2FpdCBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICBjb25zdCB0b3RhbFRpbWVTcGVudCA9IHdvcmtvdXRzXHJcbiAgICAubWFwKCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX2VuZCkuZGlmZih3LmRhdGV0aW1lX3N0YXJ0LCBcIm1pbnV0ZVwiKSlcclxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICByZXR1cm4gW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgTWF0aC5yb3VuZCh0b3RhbFRpbWVTcGVudCAvIHdvcmtvdXRzLmxlbmd0aCldO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGlzdGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzdGF0cywgdG90YWxUaW1lU3BlbnQsIGF2ZXJhZ2VUaW1lU3BlbnRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGFiYnYgPSB7XHJcbiAgICBBVzogXCJBdmVyYWdlIFdlaWdodFwiLFxyXG4gICAgQVI6IFwiQXZlcmFnZSBSZXBldGl0aW9uc1wiLFxyXG4gICAgUmVwczogXCJUb3RhbCBSZXBldGl0aW9uc1wiLFxyXG4gICAgVm9sOiBcIlRvdGFsIFZvbHVtZVwiLFxyXG4gICAgTnVtOiBcIlRvdGFsIE51bWJlciBvZiBTZXRzXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSwgZGlnaXRzID0gMikgPT4ge1xyXG4gICAgY29uc3QgbG9va3VwID0gW1xyXG4gICAgICB7IHZhbHVlOiAxLCBzeW1ib2w6IFwiXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUzLCBzeW1ib2w6IFwia1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlNiwgc3ltYm9sOiBcIk1cIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTksIHN5bWJvbDogXCJHXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxMiwgc3ltYm9sOiBcIlRcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTE1LCBzeW1ib2w6IFwiUFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTgsIHN5bWJvbDogXCJFXCIgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCByeCA9IC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC87XHJcbiAgICB2YXIgaXRlbSA9IGxvb2t1cFxyXG4gICAgICAuc2xpY2UoKVxyXG4gICAgICAucmV2ZXJzZSgpXHJcbiAgICAgIC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSA+PSBpdGVtLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBpdGVtXHJcbiAgICAgID8gKG51bSAvIGl0ZW0udmFsdWUpLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCBcIiQxXCIpICsgaXRlbS5zeW1ib2xcclxuICAgICAgOiBcIjBcIjtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmb3JtYXROdW1iZXIoOTAwMDAwKSk7XHJcblxyXG4gIGxldCB3b3Jrb3V0c1RhYmxlID0gc3RhdHMubWFwKCh3KSA9PiAoe1xyXG4gICAgRXhlcmNpc2U6IGAke3N0YXJ0Q2FzZSh3Lm5hbWUpfSAke1xyXG4gICAgICB3Py52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZSh3LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgfWAsXHJcbiAgICBSZXBzOiBNYXRoLnJvdW5kKHcudG90YWxfcmVwcyksXHJcbiAgICBWb2w6IE1hdGgucm91bmQody5zdW1fdm9sdW1lKSxcclxuICAgIE51bTogdy5udW1fc2V0cyxcclxuICB9KSk7XHJcbiAgY29uc3QgY29sdW1uTmFtZXMgPSBbLi4uT2JqZWN0LmtleXMoT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSlbMF1bMV0pXTtcclxuICBjb25zdCByb3dzID0gT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSkubWFwKChbaywgdl0sIGluZGV4KSA9PiBbXHJcbiAgICAuLi5PYmplY3QudmFsdWVzKHYpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG0tMlwiPlN0YXRpc3RpY3M8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+VG90YWwgbGlmZXRpbWUgbWV0cmljczo8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiXHJcbiAgICAgICAgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+VG90YWwgVGltZTogPC9iPlxyXG4gICAgICAgICAgPGk+e3RvdGFsVGltZVNwZW50fSBtaW48L2k+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+QXZlcmFnZSBUaW1lOiA8L2I+XHJcbiAgICAgICAgICA8aT57YXZlcmFnZVRpbWVTcGVudH0gbWluPC9pPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAge2NvbHVtbk5hbWVzXHJcbiAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSBcIkV4ZXJjaXNlXCIpXHJcbiAgICAgICAgICAubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDxwIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICB7YWJidltuYW1lXX0gKHtuYW1lfSk6e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgIHtuYW1lID09PSBcIlZvbFwiXHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0TnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHdvcmtvdXRzVGFibGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gYSArIGJbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1RhYmxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIChhLCBiKSA9PiBhICsgYltuYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzIGJ5IGV4ZXJjaXNlOiA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dGFibGVcclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcInNjcm9sbFwiLCBmb250U2l6ZTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGlzLXN0cmlwZWQgaXMtbmFycm93IGlzLWhvdmVyYWJsZSBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2V9PC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtyb3cubWFwKChlbGUsIGVsZUluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBlbGVJbmRleCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2VsZUluZGV4fT57Zm9ybWF0TnVtYmVyKGVsZSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtlbGVJbmRleH0+e2VsZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxudmFyIHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuY29uc3Qgd2Vla2RheXMgPSBbXHJcbiAgXCJTdW5kYXlcIixcclxuICBcIk1vbmRheVwiLFxyXG4gIFwiVHVlc2RheVwiLFxyXG4gIFwiV2VkbmVzZGF5XCIsXHJcbiAgXCJUaHVyc2RheVwiLFxyXG4gIFwiRnJpZGF5XCIsXHJcbiAgXCJTYXR1cmRheVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHdlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBkYXlqcygpLndlZWsod2Vlaykuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRTZXRzRm9yVXNlcih1c2VyLCB3ZWVrU3RhcnRpbmdPbkRheSk7XHJcblxyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVNjaGVkdWxlUm91dGUoKSB7XHJcbiAgbGV0IHdvcmtvdXREYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3Qgd2VlayA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZGF5anMoKS53ZWVrKHdlZWspLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIik7XHJcblxyXG4gIGNvbnN0IHdvcmtvdXRzID0gbG9kYXNoKHdvcmtvdXREYXRhKVxyXG4gICAgLmdyb3VwQnkoKHcpID0+IGRheWpzLnV0Yyh3LmRhdGV0aW1lX3N0YXJ0KS5sb2NhbCgpLmZvcm1hdChcImRkZGRcIikpXHJcbiAgICAubWFwVmFsdWVzKCh2KSA9PlxyXG4gICAgICBsb2Rhc2godilcclxuICAgICAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKVxyXG4gICAgICAgIC52YWx1ZSgpXHJcbiAgICApXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+U2NoZWR1bGU8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LmZvcm1hdChcIkREL01NL1lZWVlcIil9PC9iPiAte1wiIFwifVxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAge3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgIC5hZGQoMSwgXCJ3ZWVrXCIpXHJcbiAgICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcImRheVwiKVxyXG4gICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1cclxuICAgICAgICA8L2I+e1wiIFwifVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxpPlxyXG4gICAgICAgICAgV2VlayB7ZGF5anMoKS53ZWVrKCl9IG9mIHt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJZWVlZXCIpfVxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAge1suLi5BcnJheSg3KS5rZXlzKCldLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtfSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAge3dvcmtvdXRzPy5bd2Vla2RheXNbaXRlbV1dID8gKFxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZSBpcy1zbWFsbCBpcy1zZWNvbmRhcnkgbS0zIGB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgICAgd2Vla2RheXNbaXRlbV1cclxuICAgICAgICAgICAgICAgIH0gLSAke3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMod29ya291dHM/Llt3ZWVrZGF5c1tpdGVtXV0pLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoW2ssIHZdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uoayl9IC0ge3Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1zbWFsbCBpcy1saWdodCBtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgICB9IC0gJHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+UmVzdCBEYXkgXHVEODNEXHVEQ0FBPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlTG9jYXRpb25zUm91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TYXZlZCBMb2NhdGlvbnM8L2g0PlxyXG4gICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj57c3RhcnRDYXNlKGUubmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiPkFkZCBMb2NhdGlvbjwvYj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIiBuYW1lPVwibG9jYXRpb25OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnNDaGVja0NpcmNsZUZpbGwsIEJzQ2xvY2tIaXN0b3J5IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG1iLTNcIj5Xb3Jrb3V0czwvZGl2PlxyXG4gICAgICAgIHt3b3Jrb3V0cy5sZW5ndGggPT09IDAgJiYgXCJObyB3b3Jrb3V0cyB5ZXRcIn1cclxuICAgICAgICB7d29ya291dHMubWFwKCh3b3Jrb3V0KSA9PiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBrZXk9e1wid29ya291dC5pZFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgICB0bz17YC93b3Jrb3V0LyR7d29ya291dC5pZH0vY3VycmVudEV4ZXJjaXNlc2B9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF5anNcclxuICAgICAgICAgICAgICAgICAgICAudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgTU1NIEQgWVlcIil9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpLmxvY2FsKCkuZm9ybWF0KFwiaDptbSBBXCIpfVxyXG4gICAgICAgICAgICAgICAgICB7XCIgLSBcIn1cclxuICAgICAgICAgICAgICAgICAge3dvcmtvdXQubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3N0YXJ0Q2FzZSh3b3Jrb3V0LmxvY2F0aW9uX25hbWUpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt3b3Jrb3V0LmRhdGV0aW1lX2VuZCA/IChcclxuICAgICAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlRmlsbCBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCc0Nsb2NrSGlzdG9yeSBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3V29ya291dFJvdXRlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgT3V0bGV0LCB1c2VGZXRjaGVyLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQge1xyXG4gIGZpbmlzaFdvcmtvdXQsXHJcbiAgZ2V0V29ya291dCxcclxuICBkZWxldGVXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdG9wd2F0Y2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuY29uc3QgcmVsYXRpdmVUaW1lID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZ2V0V29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZmluaXNoV29ya291dChcclxuICAgICAgZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpLFxyXG4gICAgICBmb3JtLmdldChcImVuZFwiKVxyXG4gICAgKTtcclxuICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gIH1cclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJERUxFVEVcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBkZWxldGVXb3Jrb3V0KGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHRvVGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd29ya291dE1ldGFEYXRhKHdvcmtvdXQpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIGlzLWxpZ2h0IG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHkgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTNcIj57d29ya291dD8ubmFtZX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdnLXBpblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntzdGFydENhc2Uod29ya291dD8ubG9jYXRpb25fbmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctYWxhcm1cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICB7YCR7ZGF5anNcclxuICAgICAgICAgICAgICAudXRjKHdvcmtvdXQ/LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIEREIE1NTSBZWSwgSEg6bW1cIil9XHJcbiAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gdXNlTG9hZGVyRGF0YSgpWzBdO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDaGFuZ2VUaW1lLCBzZXRTaG93Q2hhbmdlVGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1c3RvbURhdGUsIHNldEN1c3RvbURhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VySWQ9e3NldFVzZXJJZH1cclxuICAgICAgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHdvcmtvdXQudXNlcl9pZH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7d29ya291dE1ldGFEYXRhKHdvcmtvdXQpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHkgbm90aWZpY2F0aW9uIG1iLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7d29ya291dD8uZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMVwiPldvcmtvdXQgQ29tcGxldGVkLiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3RvVGltZShcclxuICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9lbmQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0wXCI+VGltZSBFbGFwc2VkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXMtZmFtaWx5LXNlY29uZGFyeSBoYXMtdGV4dC13ZWlnaHQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0b3B3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgcnVubmluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lPXtkYXlqcygpIC0gZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgeyF3b3Jrb3V0LmRhdGV0aW1lX2VuZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBkYXlqcygpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7c2hvd01lbnUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC0yXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MCVcIixcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIzJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXIgaXMtc21hbGwgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgV29ya291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NoYW5nZVRpbWUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNldCBGaW5pc2ggVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtzaG93Q2hhbmdlVGltZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzKGUudGFyZ2V0LnZhbHVlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbURhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWN1c3RvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1zdWNjZXNzIG0tMCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKGN1c3RvbURhdGUpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidXR0b24gaXMtbGlnaHQgIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdG9wd2F0Y2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShwcm9wcy5pbml0aWFsVGltZSk7XHJcbiAgY29uc3QgW3J1bm5pbmcsIHNldFJ1bm5pbmddID0gdXNlU3RhdGUocHJvcHMucnVubmluZyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW50ZXJ2YWw7XHJcbiAgICBpZiAocnVubmluZykge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyAxMDAwKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2UgaWYgKCFydW5uaW5nKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtydW5uaW5nXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcHdhdGNoXCI+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoO1xyXG4iLCAiaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVBhcmFtcyxcclxuICB1c2VOYXZpZ2F0ZSxcclxuICBPdXRsZXQsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldE11c2NsZUdyb3VwcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gYXdhaXQgZ2V0TXVzY2xlR3JvdXBzKCk7XHJcbiAgcmV0dXJuIG11c2NsZV9ncm91cHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVyY2lzZXNSb3V0ZUluZGV4KCkge1xyXG4gIGxldCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgbXVzY2xlX2dyb3VwcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRlKGAvd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsICR7XHJcbiAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA/PyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbGxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge211c2NsZV9ncm91cHMubWFwKChtdXNjbGUpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17bXVzY2xlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyh7IG11c2NsZV9ncm91cDogbXVzY2xlLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5nZXQoXCJtdXNjbGVfZ3JvdXBcIikgPT09IG11c2NsZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdGFydENhc2UobXVzY2xlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHJlZGlyZWN0LCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBvc3RFeGVyY2lzZXRvV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGdldEV4ZXJjaXNlcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgbXVzY2xlX2dyb3VwID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJtdXNjbGVfZ3JvdXBcIik7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gYXdhaXQgZ2V0RXhlcmNpc2VzKG11c2NsZV9ncm91cCk7XHJcblxyXG4gIHJldHVybiBleGVyY2lzZXM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHBhcmFtcywgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQsIHVzZXIgfSA9IHBhcmFtcztcclxuXHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZXhlcmNpc2UgPSBmb3JtLmdldChcImV4ZXJjaXNlXCIpO1xyXG5cclxuICBhd2FpdCBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoe1xyXG4gICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgZXhlcmNpc2VfaWQ6IGV4ZXJjaXNlLFxyXG4gIH0pO1xyXG4gIHJldHVybiByZWRpcmVjdChgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2N1cnJlbnRFeGVyY2lzZXNgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEV4ZXJjaXNlUm91dGUoKSB7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBleE5hbWVUb0lkTWFwID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeShcclxuICAgICAgZXhlcmNpc2VzLFxyXG4gICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgYCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgIH1gXHJcbiAgICApLFxyXG4gICAgKGUpID0+IGVbMF0uaWRcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IGlzLXNtYWxsICR7c2VsZWN0ZWQgPT09IG51bGwgJiYgXCJpcy1kYW5nZXJcIn1gfVxyXG4gICAgICAgICAgbGlzdD1cImV4ZXJjaXNlc1wiXHJcbiAgICAgICAgICBuYW1lPVwiZXhlcmNpc2VcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZChleE5hbWVUb0lkTWFwW3NlbGVjdGVkLnRhcmdldC52YWx1ZV0gPz8gbnVsbCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwiZXhlcmNpc2VzXCI+XHJcbiAgICAgICAgICB7ZXhlcmNpc2VzLm1hcCgoZXhlcmNpc2UpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIGtleT17ZXhlcmNpc2UuaWR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Ake3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShleGVyY2lzZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIG10LTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdCh7IGV4ZXJjaXNlOiBzZWxlY3RlZCB9LCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWQgfHwgZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz17YC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIGdyb3VwQnksIG1heEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCAqIHMucmVwZXRpdGlvbnMpKVxyXG4gICAgICAudmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4ZXJjaXNlU2V0cyA9IGdyb3VwQnkoXHJcbiAgICBzZXRzRm9yV29ya291dCxcclxuICAgIChzZXQpID0+XHJcbiAgICAgIGAke3N0YXJ0Q2FzZShzZXQuZXhlcmNpc2VfbmFtZSl9ICR7XHJcbiAgICAgICAgc2V0LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKHNldC52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgfWBcclxuICApO1xyXG5cclxuICByZXR1cm4geyBleGVyY2lzZVNldHMsIGJlc3RTZXRCeUV4ZXJjaXNlIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcInNldFwiKSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlU2V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICBhd2FpdCBhZGRTZXQoZm9ybSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcImV4ZXJjaXNlXCIpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZvcm07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW50RXhlcmNpc2VzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBleGVyY2lzZVNldHMsIGJlc3RTZXRCeUV4ZXJjaXNlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3Nob3dEZWxldGUsIHNldFNob3dEZWxldGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhlcmNpc2VGb3JtID0gKGV4ZXJjaXNlX25hbWUsIHNldHMpID0+IHtcclxuICAgIGNvbnN0IGV4ZXJjaXNlSWQgPSBzZXRzWzBdLmV4ZXJjaXNlX2lkO1xyXG4gICAgY29uc3QgZXhlcmNpc2VTZXRGb3JtID0ge1xyXG4gICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2VfaWQ6IHNldHNbMF0ud29ya291dF9leGVyY2lzZV9pZCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0U2V0Rm9ybSA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMsXHJcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVTZXRGb3JtID0gKGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgKTtcclxuICAgIGNvbnN0IHByZXZpb3VzQmVzdFNldCA9IGJlc3RTZXRCeUV4ZXJjaXNlW2V4ZXJjaXNlSWRdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBtYi0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPntleGVyY2lzZV9uYW1lfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0ICYmIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGk+IFBCOjwvaT4ge3ByZXZpb3VzQmVzdFNldC53ZWlnaHR9IHh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3ByZXZpb3VzQmVzdFNldC5yZXBldGl0aW9uc30gfCB7cHJldmlvdXNCZXN0U2V0Lm1heF92b2x1bWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItNCBtdC0zXCIgLz5cclxuXHJcbiAgICAgICAgICB7c2V0cy5tYXAoKHNldCkgPT4gKFxyXG4gICAgICAgICAgICA8U2V0SW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgd2VpZ2h0PXtzZXQud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZD17c2V0LmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICByZXBldGl0aW9ucz17c2V0LnJlcGV0aXRpb25zfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUZ1bmM9eygpID0+IGRlbGV0ZVNldEZvcm0oc2V0LnNldF9pZCl9XHJcbiAgICAgICAgICAgICAgc3VibWl0RnVuYz17c3VibWl0U2V0Rm9ybX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGJ1dHRvbnMgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI4NSVcIiB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChleGVyY2lzZVNldEZvcm0sIHsgbWV0aG9kOiBcIlBPU1RcIiB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWZ1bGx3aWR0aCBpcy1ibGFjayBpcy1zbWFsbCB0aWxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArIFNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZT8uW2V4ZXJjaXNlSWRdID8/IGZhbHNlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9IGRyb3Bkb3duIGlzLXJpZ2h0YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlKChlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtleGVyY2lzZUlkXTogIShlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHAtMCBtLTBcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkcm9wZG93bi1tZW51NlwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IHAtMCBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwLTIgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGggbS0wIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmV4ZXJjaXNlU2V0Rm9ybSwgdHlwZTogXCJleGVyY2lzZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIEV4ZXJjaXNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9idXR0b25zPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtPYmplY3QuZW50cmllcyhleGVyY2lzZVNldHMpLm1hcCgoW2V4ZXJjaXNlX25hbWUsIHNldHNdLCBleEluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggaXMtc21hbGxcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldElucHV0KHByb3BzKSB7XHJcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKHByb3BzLndlaWdodCk7XHJcbiAgY29uc3QgW3JlcGV0aXRpb25zLCBzZXRSZXBldGl0aW9uc10gPSB1c2VTdGF0ZShwcm9wcy5yZXBldGl0aW9ucyk7XHJcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBsZXRlZCk7XHJcbiAgY29uc3QgdXBkYXRlRGIgPSBkZWJvdW5jZShcclxuICAgICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBwcm9wcy5zdWJtaXRGdW5jKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpLFxyXG4gICAgMjAwLFxyXG4gICAge1xyXG4gICAgICBsZWFkaW5nOiB0cnVlLFxyXG4gICAgICB0cmFpbGluZzogdHJ1ZSxcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi0yIHAtMlwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXZoXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5jb21wbGV0ZWQgPyBcIiNlYmZmZmNcIiA6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldlaWdodCAoa2cpXCJcclxuICAgICAgICAgIHZhbHVlPXt3ZWlnaHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0V2VpZ2h0KCgpID0+IHtcclxuICAgICAgICAgICAgICB1cGRhdGVEYihlLnRhcmdldC52YWx1ZSwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwc1wiXHJcbiAgICAgICAgICB2YWx1ZT17cmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVwZXRpdGlvbnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgZS50YXJnZXQudmFsdWUsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUZ1bmN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCAhY29tcGxldGUsIHByb3BzLmluZGV4KTtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgcHJvcHMuY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBhZFN0YXJ0LCBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdvcmtvdXQgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucyB9IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb24uanNcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCB1c2VySWQgPSBmb3JtLmdldChcInVzZXJJZFwiKTtcclxuICBsZXQgbmFtZSA9IGZvcm0uZ2V0KFwibmFtZVwiKTtcclxuICBsZXQgZGF0ZXRpbWUgPSBmb3JtLmdldChcImRhdGV0aW1lXCIpO1xyXG4gIGxldCBsb2NhdGlvbiA9IGZvcm0uZ2V0KFwibG9jYXRpb25cIik7XHJcbiAgbG9jYXRpb24gPSBsb2NhdGlvbj8udG9Mb3dlckNhc2UoKT8ucmVwbGFjZSgvIC9nLCBcIl9cIikgPz8gbnVsbDtcclxuICBjb25zdCB3b3Jrb3V0T2JqZWN0SWQgPSBhd2FpdCBjcmVhdGVXb3Jrb3V0KHtcclxuICAgIG5hbWUsXHJcbiAgICBkYXRldGltZSxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgdXNlcklkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dE9iamVjdElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGdldExvY2F0aW9ucyh1c2VyKTtcclxuICByZXR1cm4gbG9jYXRpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlV29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtoYXNMb2NhdGlvbiwgc2V0SGFzTG9jYXRpb25dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudERhdGVUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIHZhciBtb250aCA9IHBhZFN0YXJ0KGRhdGUuZ2V0TW9udGgoKSArIDEsIDIsIDApO1xyXG4gICAgdmFyIGRheSA9IHBhZFN0YXJ0KGRhdGUuZ2V0RGF0ZSgpLCAyLCAwKTtcclxuICAgIHZhciBociA9IHBhZFN0YXJ0KGRhdGUuZ2V0SG91cnMoKSwgMiwgMCk7XHJcbiAgICB2YXIgbWluID0gcGFkU3RhcnQoZGF0ZS5nZXRNaW51dGVzKCksIDIsIDApO1xyXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fVQke2hyfToke21pbn1gO1xyXG4gIH07XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OZXcgV29ya291dDwvaDQ+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB1aWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRldGltZVwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXlqcyhgJHtldmVudC50YXJnZXQuZGF0ZXRpbWVMb2NhbC52YWx1ZX06MDBgKS51dGMoKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcImRkZGRcIil9IHdvcmtvdXRgXHJcbiAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQodXNlcklkKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRhdGV0aW1lKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hbWUvRGVzYzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRkZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9IHdvcmtvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGV0aW1lTG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2V0Q3VycmVudERhdGVUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXRIYXNMb2NhdGlvbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXRIYXNMb2NhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHNlbGVjdCBgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImxvY2F0aW9uc1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17c3RhcnRDYXNlKGl0ZW0ubmFtZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb2NhdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9ob21lXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPD48Lz47XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmlBZGRCb3hGaWxsLCBSaUxpbmVDaGFydEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgR2lTdHJvbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcclxuaW1wb3J0IHsgTWRMb2NhdGlvbk9uIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVJvdXRlKCkge1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcklkPXtzZXRVc2VySWR9IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLXRvdWNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBhbmVsIGlzLWJsYWNrIG0tNSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5IaSwge3VzZXIgJiYgdXNlci5kaXNwbGF5TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9jayBpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2NyZWF0ZT91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmlBZGRCb3hGaWxsIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiIGhyZWY9e2AvYW5hbHl0aWNzLz91c2VyPSR7dXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpTGluZUNoYXJ0RmlsbCBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBBbmFseXRpY3NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCIgaHJlZj17YC93b3Jrb3V0cz91c2VyPSR7dXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdpU3Ryb25nIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFdvcmtvdXRzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9jayBpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2xvY2F0aW9ucz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWRMb2NhdGlvbk9uIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBtYi0xXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBXb3Jrb3V0LCBTbWFydGVyLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlBsZWFzZSBsb2cgaW4gdG8gY29udGludWUuLi48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZWExZjY5NDcnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LURGTVcyNTM3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkVBV1VDMy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNlZZUVRXWkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFBNVVOQVdaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1dISEtQU1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HTFNKMjIzTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FuYWx5dGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MtUUNUVVJCMlYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJNSk9KR0NFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVhKNUwyNVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwZXJzb25hbC1iZXN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMtNEhTNVY0TEQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEU1k1TTZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCcsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwcm9ncmVzc2l2ZS1vdmVybG9hZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQtVlpZWEJaNlAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEU1k1TTZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZScsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidzY2hlZHVsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUtUzRWUFQ0NE4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU80SE9FNlo0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzonc3RhdGlzdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljcy1ETVdCQUJVVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid0cmFpbmVkLXRoaXMtd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWstNklSRkg2RlcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEU1k1TTZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3dvcmtvdXRzLXBlci13ZWVrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlay1JRlRHT0NRVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSkRTWTVNNkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jcmVhdGUtNktZVFNVSjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU80SE9FNlo0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUk1KT0pHQ0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaG9tZSc6eydpZCc6J3JvdXRlcy9ob21lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG9tZS1BMjVQTExKVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVVNGRkhKQk4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1STUpPSkdDRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtVzQ3RFBUSkIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvY2F0aW9ucyc6eydpZCc6J3JvdXRlcy9sb2NhdGlvbnMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9jYXRpb25zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvY2F0aW9ucy1KSFRWRzNQNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUk1KT0pHQ0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCc6eydpZCc6J3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9jYXRpb25zLzpsb2NhdGlvbklkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZC1LUlRURTY3NS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0Jzp7J2lkJzoncm91dGVzL3dvcmtvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzond29ya291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LUxMNVNUQ05KLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1STUpPSkdDRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQnLCdwYXRoJzonOndvcmtvdXRJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQtSUxUUkVZM1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU80SE9FNlo0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQUE1VU5BV1ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XV0hIS1BTVS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdMU0oyMjNMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50Jzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50JywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQtUUMzQUgzNVguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXRoJzonYWRkRXhlcmNpc2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UtNFVLRkFETTQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzonY3VycmVudEV4ZXJjaXNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcy1BSk0yNFM0QS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVVNGRkhKQk4uanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0cyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0cy1MMlg3QUVOWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTzRIT0U2WjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1STUpPSkdDRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1TTllEUVpRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUVBMUY2OTQ3LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7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
