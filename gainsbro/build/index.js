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
  default: () => MeasurementRoute,
  loader: () => loader3
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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements.jsx
var loader3 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
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
  }, "Measurement History")), /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/measurements/add" ? "is-active" : null
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/measurements/add?user=${userId}`
  }, "Log Measurements")))))), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\history.jsx
var history_exports = {};
__export(history_exports, {
  default: () => MeasurementHistoryRoute,
  loader: () => loader4
});
init_react();
var import_lodash3 = require("lodash");
var import_react6 = require("react");
var import_remix6 = __toESM(require_remix());

// app/components/MeasurementProgress.js
init_react();
var import_react5 = require("react");
var import_auto = __toESM(require("chart.js/auto"));
var import_dayjs = __toESM(require("dayjs"));
var import_lodash2 = require("lodash");
function MeasurementProgress(props) {
  const [ctx, setCtx] = (0, import_react5.useState)(null);
  const exerciseProgress = (0, import_lodash2.sortBy)(props.history, (e) => e.date);
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
        labels: props.history.map((e) => (0, import_dayjs.default)(e.date).format("YYYY-MM-DD")),
        datasets: [
          {
            label: props.name,
            data: props.history.map((e) => e.value),
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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\history.jsx
var loader4 = async ({ request }) => {
  const metrics = await getMeasurementTypes();
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let measurementId = url.searchParams.get("measurement_id");
  const history = await getMeasurementHistory(measurementId, user);
  return [metrics, history];
};
function MeasurementHistoryRoute() {
  var _a, _b;
  const submit = (0, import_remix6.useSubmit)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
  const [metrics, history] = (0, import_remix6.useLoaderData)();
  const userId = searchParams.getAll("user");
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
  }, "No Measurements") : /* @__PURE__ */ React.createElement(MeasurementProgress, {
    history,
    name: metricName
  })));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\add.jsx
var add_exports = {};
__export(add_exports, {
  action: () => action2,
  default: () => AddMeasurementRoute,
  loader: () => loader5
});
init_react();
var import_remix7 = __toESM(require_remix());
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
var action2 = async ({ request }) => {
  const form = await request.formData();
  return await addMeasurement(form.get("metric"), form.get("value"), form.get("user"), form.get("date"));
};
function AddMeasurementRoute() {
  const metrics = (0, import_remix7.useLoaderData)().map((m) => __spreadProps(__spreadValues({}, m), {
    measurement_label: (0, import_lodash5.startCase)(m.measurement)
  }));
  const [selectedMetric, setSelectedMetric] = (0, import_react7.useState)();
  const [value, setValue] = (0, import_react7.useState)();
  const [user, setUser] = (0, import_react7.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react7.useState)(false);
  const [date, setDate] = (0, import_react7.useState)(getCurrentDateTime());
  const [searchParams] = (0, import_remix7.useSearchParams)();
  const submit = (0, import_remix7.useSubmit)();
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
var import_remix8 = __toESM(require_remix());
var import_dayjs2 = __toESM(require("dayjs"));
var import_react8 = require("react");
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs2.default.extend(weekOfYear);
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix8.useSearchParams)();
  const userId = searchParams.get("user");
  const location = (0, import_remix8.useLocation)();
  const user = searchParams.get("user");
  const date = new Date();
  const weekYear = `${(0, import_dayjs2.default)().year()}-W${getWeekNumber(date)}`;
  const navigate = (0, import_remix8.useNavigate)();
  (0, import_react8.useEffect)(() => {
    if (location.pathname === "/analytics/") {
      navigate(`/analytics/trained-this-week?user=${user}&week=${weekYear}`);
    }
  }, [location, navigate, user]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
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
    className: "box container"
  }, /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)))))));
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
var import_dayjs3 = __toESM(require("dayjs"));
var weekOfYear2 = require("dayjs/plugin/weekOfYear");
import_dayjs3.default.extend(weekOfYear2);
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
  const filter_date_start = filter_start ? (0, import_dayjs3.default)(filter_start) : (0, import_dayjs3.default)((0, import_dayjs3.default)().week((0, import_dayjs3.default)().week()).startOf("week").startOf("day"));
  const filter_date_end = filter_end ? (0, import_dayjs3.default)(filter_end) : (0, import_dayjs3.default)();
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
var import_remix9 = __toESM(require_remix());
var import_lodash7 = require("lodash");

// app/components/ProgressiveOverload.js
init_react();
var import_react9 = require("react");
var import_auto2 = __toESM(require("chart.js/auto"));
var import_chart = require("chart.js");
var import_dayjs4 = __toESM(require("dayjs"));
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
        labels: exerciseProgress.map((e) => (0, import_dayjs4.default)(e.datetime_start).format("DD/MM/YY")),
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
  const { setsByExercise, exercises } = (0, import_remix9.useLoaderData)();
  const submit = (0, import_remix9.useSubmit)();
  const [searchParams] = (0, import_remix9.useSearchParams)();
  const singleExerciseChart = setsByExercise;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Progressive Overload"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), singleExerciseChart && /* @__PURE__ */ React.createElement("div", {
    className: "select mb-4 "
  }, /* @__PURE__ */ React.createElement(import_remix9.Form, {
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
  action: () => action3,
  default: () => ThisWeekRoute,
  loader: () => loader7
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_dayjs5 = __toESM(require("dayjs"));
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
import_dayjs5.default.extend(weekOfYear3);
import_dayjs5.default.extend(customParseFormat);
var action3 = async ({ request }) => {
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
  const weeklySets = (0, import_remix10.useLoaderData)();
  const [searchParams] = (0, import_remix10.useSearchParams)();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const submit = (0, import_remix10.useSubmit)();
  const renderTrainedThisWeek = () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "title is-4 mb-2"
    }, "Trained this Week"), /* @__PURE__ */ React.createElement("hr", {
      className: "mt-2 mb-3"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.toDateString()), " -", " ", /* @__PURE__ */ React.createElement("b", null, new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 6)).toDateString()), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
      className: "mt-2 mb-2"
    }, /* @__PURE__ */ React.createElement(import_remix10.Form, {
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
var import_remix11 = __toESM(require_remix());

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
var import_dayjs6 = __toESM(require("dayjs"));

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
  workouts = (0, import_lodash11.default)(workouts).groupBy((w) => `${(0, import_dayjs6.default)(w.datetime_start).year()} Week ${String(getWeekNumber(new Date(w.datetime_start))).padStart(2, "0")}`).mapValues((e) => e.length).value();
  let weeksToShow = Object.keys(workouts);
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash11.transform)((0, import_lodash11.pick)(workouts, weeksToShow), (res, val, key) => {
    res[key] = val;
  });
};
function WorkoutsPerWeekRoute() {
  const workouts = (0, import_remix11.useLoaderData)();
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
var import_remix12 = __toESM(require_remix());
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
  const listBestSets = (0, import_remix12.useLoaderData)();
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
var import_remix13 = __toESM(require_remix());
var import_lodash14 = __toESM(require("lodash"));
var import_dayjs7 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs7.default.extend(weekOfYear4);
var loader10 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs7.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
  return [stats, totalTimeSpent, Math.round(totalTimeSpent / workouts.length)];
};
function StatisticsRoute() {
  const [stats, totalTimeSpent, averageTimeSpent] = (0, import_remix13.useLoaderData)();
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
var import_remix14 = __toESM(require_remix());
var import_lodash15 = __toESM(require("lodash"));
var import_dayjs8 = __toESM(require("dayjs"));
var weekOfYear5 = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
import_dayjs8.default.extend(weekOfYear5);
import_dayjs8.default.extend(utc);
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
  let workoutData = (0, import_remix14.useLoaderData)();
  const [searchParams] = (0, import_remix14.useSearchParams)();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = (0, import_dayjs8.default)(getDateOfISOWeek(week, year));
  const submit = (0, import_remix14.useSubmit)();
  const workouts = (0, import_lodash15.default)(workoutData).groupBy((w) => import_dayjs8.default.utc(w.datetime_start).local().format("dddd")).mapValues((v) => (0, import_lodash15.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length).value()).value();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(6, "day").format("DD/MM/YYYY")), " "), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 mb-2"
  }, /* @__PURE__ */ React.createElement(import_remix14.Form, {
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
  action: () => action4,
  default: () => ManageLocationsRoute,
  loader: () => loader12
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_lodash16 = require("lodash");
var import_react14 = require("react");
var loader12 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
var action4 = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};
function ManageLocationsRoute() {
  const locations = (0, import_remix15.useLoaderData)();
  const [user, setUser] = (0, import_react14.useState)();
  const [searchParams] = (0, import_remix15.useSearchParams)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser,
    idPredicate: (id) => id === searchParams.get("user")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-1 mt-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix15.Link, {
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
var import_remix16 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_lodash17 = require("lodash");
var import_dayjs9 = __toESM(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs9.default.extend(utc2);
var loader13 = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};
function ViewWorkoutRoute() {
  const workouts = (0, import_remix16.useLoaderData)();
  const [searchParams] = (0, import_remix16.useSearchParams)();
  const userId = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mb-3"
  }, "Workouts"), workouts.length === 0 && "No workouts yet", workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix16.Link, {
    key: "workout.id",
    className: "box",
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs9.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs9.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash17.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_remix17 = __toESM(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_remix17.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action5,
  default: () => StartNewWorkoutRoute,
  loader: () => loader14
});
init_react();
var import_remix18 = __toESM(require_remix());
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
var import_dayjs10 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc3 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs10.default.extend(utc3);
import_dayjs10.default.extend(relativeTime);
var loader14 = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};
var action5 = async ({ request, params }) => {
  if (request.method == "POST") {
    const form = await request.formData();
    const workout = await finishWorkout(form.get("workout_id"), form.get("end"));
    return workout;
  }
  if (request.method == "DELETE") {
    const form = await request.formData();
    const workout = await deleteWorkout(form.get("workout_id"));
    return (0, import_remix18.redirect)("/");
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
  }, `${import_dayjs10.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix18.useLoaderData)()[0];
  const fetcher = (0, import_remix18.useFetcher)();
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
  }, "Workout Completed. "), toTime(import_dayjs10.default.utc(workout.datetime_end) - import_dayjs10.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: (0, import_dayjs10.default)() - import_dayjs10.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs10.default)().utc()
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
      if ((0, import_dayjs10.default)(e.target.value) > import_dayjs10.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-small is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs10.default)(customDate).utc()
      }, { method: "POST" });
      setShowMenu(false);
    }
  }, "Finish"))), /* @__PURE__ */ React.createElement("button", {
    className: " button is-light  mb-2",
    onClick: () => setShowMenu((e) => !e)
  }, /* @__PURE__ */ React.createElement(import_md2.MdOutlineMenu, null)))), /* @__PURE__ */ React.createElement(import_remix18.Outlet, null))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader15
});
init_react();
var import_lodash19 = require("lodash");
var import_remix19 = __toESM(require_remix());
var loader15 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix19.useSearchParams)();
  const muscle_groups = (0, import_remix19.useLoaderData)();
  const navigate = (0, import_remix19.useNavigate)();
  const { workoutId } = (0, import_remix19.useParams)();
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
  }, (0, import_lodash19.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix19.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action6,
  default: () => AddExerciseRoute,
  loader: () => loader16
});
init_react();
var import_remix20 = __toESM(require_remix());
var import_lodash20 = require("lodash");
var import_react17 = require("react");
var import_react_bootstrap_typeahead2 = require("react-bootstrap-typeahead");
var loader16 = async ({ request }) => {
  let url = new URL(request.url);
  let muscle_group = url.searchParams.get("muscle_group");
  const exercises = await getExercises(muscle_group);
  return exercises;
};
var action6 = async ({ params, request }) => {
  const { workoutId, user } = params;
  const form = await request.formData();
  let exercise = form.get("exercise");
  await postExercisetoWorkout({
    workout_id: workoutId,
    exercise_id: exercise
  });
  return (0, import_remix20.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix20.useParams)();
  const [selected, setSelected] = (0, import_react17.useState)([]);
  const [disabled, setDisabled] = (0, import_react17.useState)(false);
  const exercises = (0, import_remix20.useLoaderData)();
  const fetcher = (0, import_remix20.useFetcher)();
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
  }, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: `/workout/${workoutId}/currentExercises`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-small is-light"
  }, "Cancel"))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\currentExercises.jsx
var currentExercises_exports = {};
__export(currentExercises_exports, {
  action: () => action7,
  default: () => CurrentExercisesRoute,
  loader: () => loader17
});
init_react();
var import_remix21 = __toESM(require_remix());
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
var action7 = async ({ request }) => {
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
  const { exerciseSets, bestSetByExercise } = (0, import_remix21.useLoaderData)();
  const [showDelete, setShowDelete] = (0, import_react19.useState)();
  const [localExerciseState, setLocalExerciseState] = (0, import_react19.useState)(exerciseSets);
  const { workoutId } = (0, import_remix21.useParams)();
  const fetcher = (0, import_remix21.useFetcher)();
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
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix21.Outlet, null), /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/workout/${workoutId}/addExercise`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mt-5 button is-black is-fullwidth is-small"
  }, "+ Exercise")));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\create.jsx
var create_exports = {};
__export(create_exports, {
  action: () => action8,
  default: () => CreateWorkoutRoute,
  loader: () => loader18
});
init_react();
var import_remix22 = __toESM(require_remix());
var import_lodash23 = require("lodash");
var import_react20 = require("react");
var import_dayjs11 = __toESM(require("dayjs"));
var utc4 = require("dayjs/plugin/utc");
import_dayjs11.default.extend(utc4);
var action8 = async ({ request }) => {
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
  return (0, import_remix22.redirect)(`/workout/${workoutObjectId}/currentExercises`);
};
var loader18 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
function CreateWorkoutRoute() {
  const locations = (0, import_remix22.useLoaderData)();
  const [user, setUser] = (0, import_react20.useState)();
  const [hasLocation, setHasLocation] = (0, import_react20.useState)();
  const submit = (0, import_remix22.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Create New Workout"), /* @__PURE__ */ React.createElement(import_remix22.Form, {
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
      datetime.setAttribute("value", (0, import_dayjs11.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs11.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
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
    placeholder: `${(0, import_dayjs11.default)(getCurrentDateTime()).format("dddd")} workout`
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
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix22.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader19
});
init_react();
var import_remix23 = __toESM(require_remix());
var loader19 = async () => {
  return (0, import_remix23.redirect)("/home");
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
var import_remix24 = __toESM(require_remix());
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
  }, /* @__PURE__ */ React.createElement(import_remix24.Link, {
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
var assets_manifest_default = { "version": "779dc553", "entry": { "module": "/build/entry.client-5YTKMBB4.js", "imports": ["/build/_shared/chunk-PPPN3KM7.js", "/build/_shared/chunk-CV24HI43.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-RHIRSHVD.js", "imports": ["/build/_shared/chunk-RCF4GYLP.js", "/build/_shared/chunk-DUKUP6RN.js", "/build/_shared/chunk-NO2E4X2J.js", "/build/_shared/chunk-WUPTWQDT.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-BVQXZOBO.js", "imports": ["/build/_shared/chunk-XB6PLCNL.js", "/build/_shared/chunk-FN2YQYRM.js", "/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-MTR3K3PI.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-Y57V6CYU.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-MMRYO5WP.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-I55EIS4E.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-HYZ2VHDA.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-F3OM2FGT.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-GWUBPGJW.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js", "/build/_shared/chunk-FN2YQYRM.js", "/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-FS4P2GME.js", "imports": ["/build/_shared/chunk-QJQTZUSC.js", "/build/_shared/chunk-DJKJCTAI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LRXO6RX7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-TREF3VCN.js", "imports": ["/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-E5TQJ4GH.js", "imports": ["/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements": { "id": "routes/measurements", "parentId": "root", "path": "measurements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements-FBDUCGE6.js", "imports": ["/build/_shared/chunk-DJKJCTAI.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/add": { "id": "routes/measurements/add", "parentId": "routes/measurements", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/add-EZUN6PZH.js", "imports": ["/build/_shared/chunk-XA7KITFM.js", "/build/_shared/chunk-FN2YQYRM.js", "/build/_shared/chunk-WUPTWQDT.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history": { "id": "routes/measurements/history", "parentId": "routes/measurements", "path": "history", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history-UBTEALVI.js", "imports": ["/build/_shared/chunk-MEZXUQRQ.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-VPY3XTXJ.js", "imports": ["/build/_shared/chunk-DJKJCTAI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-NN6CXU3X.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js", "/build/_shared/chunk-DUKUP6RN.js", "/build/_shared/chunk-NO2E4X2J.js", "/build/_shared/chunk-WUPTWQDT.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-GHLX3QQ7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-7NMI44H3.js", "imports": ["/build/_shared/chunk-XA7KITFM.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-QJP5D42U.js", "imports": ["/build/_shared/chunk-QJQTZUSC.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-LIWAJ7HP.js", "imports": ["/build/_shared/chunk-4J7ZJ4QV.js", "/build/_shared/chunk-DJKJCTAI.js", "/build/_shared/chunk-FWHOQWCG.js", "/build/_shared/chunk-QL5VYOSH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-779DC553.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAiLi4vYXBwL3NlcnZpY2UvbWVhc3VyZW1lbnRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbWVhc3VyZW1lbnRzXFxoaXN0b3J5LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9NZWFzdXJlbWVudFByb2dyZXNzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbWVhc3VyZW1lbnRzXFxhZGQuanN4IiwgIi4uL2FwcC91dGlscy91dGlscy5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxzdGF0aXN0aWNzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc2NoZWR1bGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbG9jYXRpb25zLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3RvcHdhdGNoLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxhZGRFeGVyY2lzZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxjdXJyZW50RXhlcmNpc2VzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXRJbnB1dC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGNyZWF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxob21lLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXGVudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy4kbG9jYXRpb25JZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXG1lYXN1cmVtZW50cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXG1lYXN1cmVtZW50c1xcXFxoaXN0b3J5LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVhc3VyZW1lbnRzXFxcXGFkZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc3RhdGlzdGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc2NoZWR1bGUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWFzdXJlbWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJoaXN0b3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHMvYWRkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvYWRkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzXCIsXG4gICAgICBwYXRoOiBcImFkZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYW5hbHl0aWNzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJwcm9ncmVzc2l2ZS1vdmVybG9hZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwidHJhaW5lZC10aGlzLXdlZWtcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzLXBlci13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJwZXJzb25hbC1iZXN0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInN0YXRpc3RpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJzY2hlZHVsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9uc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwid29ya291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGF0aDogXCI6d29ya291dElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhdGg6IFwiYWRkRXhlcmNpc2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IFwiY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL2NyZWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY3JlYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNyZWF0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjBcbiAgICB9LFxuICBcInJvdXRlcy9ob21lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob21lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjFcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKFwiZG90ZW52XCIpO1xuZG90ZW52LmNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcclxuICBMaW5rLFxyXG4gIExpbmtzLFxyXG4gIExpdmVSZWxvYWQsXHJcbiAgTWV0YSxcclxuICBPdXRsZXQsXHJcbiAgU2NyaXB0cyxcclxuICBTY3JvbGxSZXN0b3JhdGlvbixcclxuICB1c2VMb2FkZXJEYXRhLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSBcIn4vY29tcG9uZW50cy9GaXJlYmFzZUxvZ2luLmpzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIkdhaW5zQnJvXCIgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpcmViYXNlQ29uZmlnOiB7XHJcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSF9ET01BSU4sXHJcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUFJPSkVDVF9JRCxcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuU1RPUkFHRV9CVUNLRVQsXHJcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5NU0dfU0VOREVSX0lELFxyXG4gICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lELFxyXG4gICAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5NRUFTVVJFTUVOVF9JRCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcih7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtYmxhY2sgcC0wIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGlzLXNpemUtNSBzb3JhRm9udFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nzcy5nZy9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2Nzcy9UeXBlYWhlYWQuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kYXRlcGlja2VyLzIuMTQuMS9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvcmE6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtyZXF1aXJlKFwiLi4vYXNzZXRzL2xvZ28ucG5nXCIpfT48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3NcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE5hdkJhcj5cclxuICAgICAgICAgIDxGaXJlYmFzZUxvZ2luIGFwcD17YXBwfSAvPlxyXG4gICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuXHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHtcclxuICBnZXRBdXRoLFxyXG4gIHNpZ25JbldpdGhSZWRpcmVjdCxcclxuICBHb29nbGVBdXRoUHJvdmlkZXIsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZWJhc2VMb2dpbihwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQWN0aXZlLCBzZXREcm9wZG93bkFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgocHJvcHMuYXBwKTtcclxuXHJcbiAgZnVuY3Rpb24gZ29vZ2xlTG9naW4oKSB7XHJcbiAgICBzaWduSW5XaXRoUmVkaXJlY3QoYXV0aCwgcHJvdmlkZXIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBhdXRoLnNpZ25PdXQoKTtcclxuICB9XHJcblxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAocmVzdWx0KSA9PiB7XHJcbiAgICByZXN1bHQgPyBzZXRVc2VyKHJlc3VsdCkgOiBzZXRVc2VyKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgeyF1c2VyICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvb2dsZUxvZ2lufSBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgc29yYUZvbnRcIj5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bkcm9wZG93biAke2Ryb3Bkb3duQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJvcGRvd25BY3RpdmUoKGFjdGl2ZVN0YXRlKSA9PiAhYWN0aXZlU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dXNlci5kaXNwbGF5TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZEV4cGFuZE1vcmUgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBpZD1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VMb2FkZXJEYXRhLCB1c2VGZXRjaGVyLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtcclxuICBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uLFxyXG4gIGRlbGV0ZUxvY2F0aW9uLFxyXG4gIHJlbmFtZUxvY2F0aW9uLFxyXG59IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHNBdExvY2F0aW9uID0gYXdhaXQgZ2V0V29ya291dHNQZXJMb2NhdGlvbih1c2VyKTtcclxuXHJcbiAgY29uc3QgZ2V0TmFtZUZyb21JZCA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkod29ya291dHNBdExvY2F0aW9uLCAoZSkgPT4gZS5pZCksXHJcbiAgICAoZSkgPT4gZVswXT8ubmFtZVxyXG4gICk7XHJcbiAgY29uc3Qgd29ya291dHNQZXJMb2NhdGlvbiA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkod29ya291dHNBdExvY2F0aW9uLCAoZSkgPT4gZS5pZCksXHJcbiAgICAoZSkgPT4gZVswXT8uY291bnQgPz8gMFxyXG4gICk7XHJcbiAgcmV0dXJuIFt3b3Jrb3V0c1BlckxvY2F0aW9uLCBnZXROYW1lRnJvbUlkXTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uSWQgPSBmb3JtLmdldChcImxvY2F0aW9uSWRcIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKTtcclxuXHJcbiAgICBhd2FpdCByZW5hbWVMb2NhdGlvbihcclxuICAgICAgbG9jYXRpb25JZCxcclxuICAgICAgbG9jYXRpb25OYW1lLnJlcGxhY2UoLyAvZywgXCJfXCIpLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xyXG4gICAgLy8gREVMRVRFXHJcbiAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZGVsZXRlTG9jYXRpb24oZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpKTtcclxuICAgIGlmIChkZWxldGVkICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBkZWxldGVkPy5bMF0/LnVzZXJfaWQ7XHJcbiAgICAgIHJldHVybiByZWRpcmVjdCh1c2VyID8gYC9sb2NhdGlvbnM/dXNlcj0ke3VzZXJ9YCA6IFwiL1wiKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25Sb3V0ZSgpIHtcclxuICBjb25zdCB7IGxvY2F0aW9uSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IFt3b3Jrb3V0c1BlckxvY2F0aW9uLCBnZXROYW1lRnJvbUlkXSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IFtzaG93SW5wdXQsIHNldFNob3dJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlbmFtZUlucHV0LCBzZXRSZW5hbWVJbnB1dF0gPSB1c2VTdGF0ZShcclxuICAgIHN0YXJ0Q2FzZShnZXROYW1lRnJvbUlkW1wiXCIgKyBsb2NhdGlvbklkXSA/PyBudWxsKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMyBjb250YWluZXIgYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy01IG1iLTFcIj5cclxuICAgICAgICAgIHtzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpPntnZXROYW1lRnJvbUlkW2xvY2F0aW9uSWRdfTwvaT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgIE51bWJlciBvZiB3b3Jrb3V0czoge3dvcmtvdXRzUGVyTG9jYXRpb25bXCJcIiArIGxvY2F0aW9uSWRdID8/IDB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTJcIiAvPlxyXG4gICAgICAgIHtzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZW5hbWVJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlbmFtZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkLCBsb2NhdGlvbk5hbWU6IHJlbmFtZUlucHV0IH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93SW5wdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshc2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBsZXZlbC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJbnB1dCgocHJldikgPT4gIXByZXYpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVuYW1lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgeyF3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICB7IGxvY2F0aW9uSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25zKHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V29ya291dHNQZXJMb2NhdGlvbih1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfcGVyX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihsb2NhdGlvbklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGxvY2F0aW9uSWQgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVMb2NhdGlvbihsb2NhdGlvbklkLCBsb2NhdGlvbk5hbWUpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLnVwZGF0ZSh7IG5hbWU6IGxvY2F0aW9uTmFtZSB9KVxyXG4gICAgLm1hdGNoKHsgaWQ6IGxvY2F0aW9uSWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRMb2NhdGlvbihsb2NhdGlvbk5hbWUsIHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuaW5zZXJ0KHsgbmFtZTogbG9jYXRpb25OYW1lLCB1c2VyX2lkOiB1c2VySWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmxldCBzdXBhYmFzZTtcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX0FOT05fS0VZO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwuc3VwYWJhc2UpIHtcclxuICAgIGdsb2JhbC5zdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxuICB9XHJcbiAgc3VwYWJhc2UgPSBnbG9iYWwuc3VwYWJhc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xyXG4iLCAiaW1wb3J0IHsgTGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBhZGRNZWFzdXJlbWVudCB9IGZyb20gXCJ+L3NlcnZpY2UvbWVhc3VyZW1lbnRzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGdldExvY2F0aW9ucyh1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGxvY2F0aW9ucztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzXCIpIHtcclxuICAgICAgbmF2aWdhdGUoYC9tZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0xYCk7XHJcbiAgICB9XHJcbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgdXNlcklkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIgbXQtNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Cb2R5IE1lYXN1cmVtZW50czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL21lYXN1cmVtZW50cy9oaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICB0bz17YC9tZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0xYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTWVhc3VyZW1lbnQgSGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzL2FkZFwiID8gXCJpcy1hY3RpdmVcIiA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tZWFzdXJlbWVudHMvYWRkP3VzZXI9JHt1c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBNZWFzdXJlbWVudHNcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50KHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyID09PSBudWxsKSB7XHJcbiAgICAgIG5hdmlnYXRlKFwiL1wiKTtcclxuICAgIH1cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGxldCBfID0gcHJvcHMuc2V0VXNlciA/IHByb3BzLnNldFVzZXIodXNlcikgOiBudWxsO1xyXG4gICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuXHJcbiAgICAgIGlmIChwcm9wcy5pZFByZWRpY2F0ZSAmJiAhcHJvcHMuaWRQcmVkaWNhdGUodWlkKSkge1xyXG4gICAgICAgIG5hdmlnYXRlKFwiL2hvbWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IF8gPSBwcm9wcy5zZXRVc2VySWQgPyBwcm9wcy5zZXRVc2VySWQodWlkKSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gPD57cHJvcHMuY2hpbGRyZW59PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2VcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFzdXJlbWVudFR5cGVzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJtZWFzdXJlbWVudHNcIikuc2VsZWN0KFwiKlwiKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRNZWFzdXJlbWVudChtZWFzdXJlbWVudF9pZCwgdmFsdWUsIHVzZXIsIGRhdGUpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwidXNlcl9tZWFzdXJlbWVudFwiKS5pbnNlcnQoe1xyXG4gICAgbWVhc3VyZW1lbnQ6IG1lYXN1cmVtZW50X2lkLFxyXG4gICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgdXNlcl9pZDogdXNlcixcclxuICAgIGRhdGU6IGRhdGUsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFzdXJlbWVudEhpc3RvcnkobWVhc3VyZW1lbnRfaWQsIHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ1c2VyX21lYXN1cmVtZW50XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKVxyXG4gICAgLmVxKFwibWVhc3VyZW1lbnRcIiwgbWVhc3VyZW1lbnRfaWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VMb2NhdGlvbixcclxuICB1c2VOYXZpZ2F0ZSxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbiAgdXNlU3VibWl0LFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgTWVhc3VyZW1lbnRQcm9ncmVzcyBmcm9tIFwifi9jb21wb25lbnRzL01lYXN1cmVtZW50UHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRNZWFzdXJlbWVudFR5cGVzLFxyXG4gIGdldE1lYXN1cmVtZW50SGlzdG9yeSxcclxufSBmcm9tIFwifi9zZXJ2aWNlL21lYXN1cmVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBtZXRyaWNzID0gYXdhaXQgZ2V0TWVhc3VyZW1lbnRUeXBlcygpO1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgbWVhc3VyZW1lbnRJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibWVhc3VyZW1lbnRfaWRcIik7XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBnZXRNZWFzdXJlbWVudEhpc3RvcnkobWVhc3VyZW1lbnRJZCwgdXNlcik7XHJcbiAgcmV0dXJuIFttZXRyaWNzLCBoaXN0b3J5XTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50SGlzdG9yeVJvdXRlKCkge1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgW21ldHJpY3MsIGhpc3RvcnldID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IG1ldHJpY05hbWUgPSBzdGFydENhc2UoXHJcbiAgICBtZXRyaWNzLmZpbHRlcihcclxuICAgICAgKGUpID0+IGUuaWQgPT09IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5nZXQoXCJtZWFzdXJlbWVudF9pZFwiKSlcclxuICAgICk/LlswXT8ubWVhc3VyZW1lbnRcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibWVhc3VyZW1lbnRfaWRcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJtZWFzdXJlbWVudF9pZFwiKSA/PyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRfaWQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttZXRyaWNzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKGVbXCJtZWFzdXJlbWVudFwiXSl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIHtoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+Tm8gTWVhc3VyZW1lbnRzPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxNZWFzdXJlbWVudFByb2dyZXNzIGhpc3Rvcnk9e2hpc3Rvcnl9IG5hbWU9e21ldHJpY05hbWV9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5cclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFzdXJlbWVudFByb2dyZXNzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlUHJvZ3Jlc3MgPSBzb3J0QnkocHJvcHMuaGlzdG9yeSwgKGUpID0+IGUuZGF0ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb2xvciA9IGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke1xyXG4gICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICB9LDAuMylgO1xyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVhc3VyZW1lbnRQcm9ncmVzc1wiKSk7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIm1lYXN1cmVtZW50UHJvZ3Jlc3NcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZWFzdXJlbWVudENoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogcHJvcHMuaGlzdG9yeS5tYXAoKGUpID0+IGRheWpzKGUuZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmhpc3RvcnkubWFwKChlKSA9PiBlLnZhbHVlKSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBwbHVnaW5zOiB7fSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbWVhc3VyZW1lbnRDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwibWVhc3VyZW1lbnRQcm9ncmVzc1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3VibWl0LCB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TWVhc3VyZW1lbnRUeXBlcywgYWRkTWVhc3VyZW1lbnQgfSBmcm9tIFwifi9zZXJ2aWNlL21lYXN1cmVtZW50cy5qc1wiO1xyXG5cclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFR5cGVhaGVhZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnREYXRlVGltZSB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgbWV0cmljcyA9IGF3YWl0IGdldE1lYXN1cmVtZW50VHlwZXMoKTtcclxuICByZXR1cm4gbWV0cmljcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICByZXR1cm4gYXdhaXQgYWRkTWVhc3VyZW1lbnQoXHJcbiAgICBmb3JtLmdldChcIm1ldHJpY1wiKSxcclxuICAgIGZvcm0uZ2V0KFwidmFsdWVcIiksXHJcbiAgICBmb3JtLmdldChcInVzZXJcIiksXHJcbiAgICBmb3JtLmdldChcImRhdGVcIilcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTWVhc3VyZW1lbnRSb3V0ZSgpIHtcclxuICBjb25zdCBtZXRyaWNzID0gdXNlTG9hZGVyRGF0YSgpLm1hcCgobSkgPT4gKHtcclxuICAgIC4uLm0sXHJcbiAgICBtZWFzdXJlbWVudF9sYWJlbDogc3RhcnRDYXNlKG0ubWVhc3VyZW1lbnQpLFxyXG4gIH0pKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNZXRyaWMsIHNldFNlbGVjdGVkTWV0cmljXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShnZXRDdXJyZW50RGF0ZVRpbWUoKSk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgbWV0cmljOiBzZWxlY3RlZE1ldHJpYz8uWzBdPy5pZCxcclxuICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TWV0cmljPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWV0cmljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT17XCJtZWFzdXJlbWVudF9sYWJlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobSkgPT4gc2V0U2VsZWN0ZWRNZXRyaWMobSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWV0cmljc31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBNZWFzdXJlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5WYWx1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWV0cmljVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nIHwgISh2YWx1ZSAmJiBzZWxlY3RlZE1ldHJpYyAmJiBkYXRlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBNZWFzdXJlbWVudFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVPZklTT1dlZWsodywgeSkge1xyXG4gIHZhciBzaW1wbGUgPSBuZXcgRGF0ZSh5LCAwLCAxICsgKHcgLSAxKSAqIDcpO1xyXG4gIHZhciBkb3cgPSBzaW1wbGUuZ2V0RGF5KCk7XHJcbiAgdmFyIElTT3dlZWtTdGFydCA9IHNpbXBsZTtcclxuICBpZiAoZG93IDw9IDQpIElTT3dlZWtTdGFydC5zZXREYXRlKHNpbXBsZS5nZXREYXRlKCkgLSBzaW1wbGUuZ2V0RGF5KCkgKyAxKTtcclxuICBlbHNlIElTT3dlZWtTdGFydC5zZXREYXRlKHNpbXBsZS5nZXREYXRlKCkgKyA4IC0gc2ltcGxlLmdldERheSgpKTtcclxuICByZXR1cm4gSVNPd2Vla1N0YXJ0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla051bWJlcihkYXRlKSB7XHJcbiAgdmFyIGQgPSBuZXcgRGF0ZShcclxuICAgIERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSlcclxuICApO1xyXG4gIHZhciBkYXlOdW0gPSBkLmdldFVUQ0RheSgpIHx8IDc7XHJcbiAgZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpICsgNCAtIGRheU51bSk7XHJcbiAgdmFyIHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xyXG4gIHJldHVybiBNYXRoLmNlaWwoKChkIC0geWVhclN0YXJ0KSAvIDg2NDAwMDAwICsgMSkgLyA3KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnREYXRlVGltZSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB2YXIgbW9udGggPSBwYWRTdGFydChkYXRlLmdldE1vbnRoKCkgKyAxLCAyLCAwKTtcclxuICB2YXIgZGF5ID0gcGFkU3RhcnQoZGF0ZS5nZXREYXRlKCksIDIsIDApO1xyXG4gIHZhciBociA9IHBhZFN0YXJ0KGRhdGUuZ2V0SG91cnMoKSwgMiwgMCk7XHJcbiAgdmFyIG1pbiA9IHBhZFN0YXJ0KGRhdGUuZ2V0TWludXRlcygpLCAyLCAwKTtcclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aHJ9OiR7bWlufWA7XHJcbn07XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZVNlYXJjaFBhcmFtcywgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFdlZWtOdW1iZXIgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzUm91dGUoKSB7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgdXNlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHdlZWtZZWFyID0gYCR7ZGF5anMoKS55ZWFyKCl9LVcke2dldFdlZWtOdW1iZXIoZGF0ZSl9YDtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvXCIpIHtcclxuICAgICAgbmF2aWdhdGUoYC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gKTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb24sIG5hdmlnYXRlLCB1c2VyXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gdXNlcklkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG0tNVwiPkFuYWx5dGljczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+RWZmb3J0IFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFpbmVkIHRoaXMgV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWs/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV29ya291dHMgcGVyIFdlZWtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zY2hlZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3NjaGVkdWxlP3VzZXI9JHt1c2VyfSZ3ZWVrPSR7d2Vla1llYXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2NoZWR1bGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zdGF0aXN0aWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc3RhdGlzdGljcz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0aXN0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5TdHJlbmd0aCBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQ/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3NpdmUgT3ZlcmxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2FuYWx5dGljc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0RXhlcmNpc2VzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU3VibWl0LCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NpdmVPdmVybG9hZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICBsZXQgZXhlcmNpc2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImV4ZXJjaXNlX2lkXCIpID8/IGV4ZXJjaXNlc1swXT8uaWQ7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlciwgZXhlcmNpc2UpO1xyXG5cclxuICBjb25zdCBzZXRzQnlFeGVyY2lzZSA9IGdyb3VwQnkoc2V0cywgKHMpID0+IHMuZXhlcmNpc2VfaWQpW2V4ZXJjaXNlXTtcclxuICByZXR1cm4geyBzZXRzQnlFeGVyY2lzZSwgZXhlcmNpc2VzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc1JvdXRlKCkge1xyXG4gIGNvbnN0IHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3Qgc2luZ2xlRXhlcmNpc2VDaGFydCA9IHNldHNCeUV4ZXJjaXNlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlByb2dyZXNzaXZlIE92ZXJsb2FkPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAge3NpbmdsZUV4ZXJjaXNlQ2hhcnQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QgbWItNCBcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImV4ZXJjaXNlX2lkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlX2lkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtleGVyY2lzZXMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3N0YXJ0Q2FzZShlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ID8gKFxyXG4gICAgICAgICAgPFByb2dyZXNzaXZlT3ZlcmxvYWQgcHJvZ3Jlc3NpdmVPdmVybG9hZD17c2luZ2xlRXhlcmNpc2VDaGFydH0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0XCJcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApIHtcclxuICBpZiAobXVzY2xlX2dyb3VwKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImV4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcIm11c2NsZV9ncm91cFwiLCBtdXNjbGVfZ3JvdXApO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJleGVyY2lzZVwiKS5zZWxlY3QoXCIqXCIpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXVzY2xlR3JvdXBzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImRpc3RpbmN0X211c2NsZV9ncm91cHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAub3JkZXIoXCJuYW1lXCIpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJleGVyY2lzZXNfZm9yX3VzZXJcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5U3RhdHNGb3JFeGVyY2lzZSh1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsYXN0X3dvcmtvdXRfd2l0aF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2VcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXQoZm9ybVNldCkge1xyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICAvLyBjbGVhbiB1cFxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImVtcHR5X3dvcmtvdXRfZXhlcmNpc2VzXCIpLnNlbGVjdChcIipcIik7XHJcbiAgY29uc3QgaWRzID0gZGF0YS5tYXAoKHdvcmtvdXRfZXhlcmNpc2UpID0+IHdvcmtvdXRfZXhlcmNpc2UuaWQpO1xyXG4gIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpLmRlbGV0ZSgpLmluKFwiaWRcIiwgaWRzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFNldChmb3JtU2V0KSB7XHJcbiAgY29uc3QgYWRkID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInNldFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlOiBmb3JtU2V0LmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIiksXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkPy5kYXRhPy5bMF07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNldChmb3JtU2V0KSB7XHJcbiAgbGV0IHN1Ym1pc3Npb25TZXQgPSB7XHJcbiAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2VpZ2h0Rm9yU2V0ID0gZm9ybVNldC5nZXQoXCJ3ZWlnaHRcIik7XHJcbiAgY29uc3QgcmVwc0ZvclNldCA9IGZvcm1TZXQuZ2V0KFwicmVwZXRpdGlvbnNcIik7XHJcbiAgY29uc3QgY29tcGxldGVkRm9yU2V0ID0gZm9ybVNldC5nZXQoXCJjb21wbGV0ZWRcIik7XHJcblxyXG4gIGlmICh3ZWlnaHRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQud2VpZ2h0ID0gcGFyc2VGbG9hdCh3ZWlnaHRGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAocmVwc0ZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC5yZXBldGl0aW9ucyA9IHBhcnNlRmxvYXQocmVwc0ZvclNldCk7XHJcbiAgfVxyXG4gIGlmIChjb21wbGV0ZWRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQuY29tcGxldGVkID0gY29tcGxldGVkRm9yU2V0ID09PSBcInRydWVcIjtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC51cGRhdGUoc3VibWlzc2lvblNldClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtU2V0LmdldChcImluZGV4XCIpIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbi8vZGVmYXVsdCBmaWx0ZXJzIGZvciBsYXRlc3Qgd2Vla1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0c0ZvclVzZXIodXNlcklkLCBmaWx0ZXJfc3RhcnQsIGZpbHRlcl9lbmQpIHtcclxuICBjb25zdCBmaWx0ZXJfZGF0ZV9zdGFydCA9IGZpbHRlcl9zdGFydFxyXG4gICAgPyBkYXlqcyhmaWx0ZXJfc3RhcnQpXHJcbiAgICA6IGRheWpzKGRheWpzKCkud2VlayhkYXlqcygpLndlZWsoKSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSk7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfZW5kID0gZmlsdGVyX2VuZCA/IGRheWpzKGZpbHRlcl9lbmQpIDogZGF5anMoKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgIC5ndGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9zdGFydClcclxuICAgIC5sdGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9lbmQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcklkLCBleGVyY2lzZUlkKSB7XHJcbiAgaWYgKGV4ZXJjaXNlSWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJtYXhfdm9sdW1lX2Zvcl93b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKVxyXG4gICAgICAuZXEoXCJleGVyY2lzZV9pZFwiLCBleGVyY2lzZUlkKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsaWZldGltZV9zdGF0c1wiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuQ2hhcnQucmVnaXN0ZXIoW1Rvb2x0aXBdKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlT3ZlcmxvYWQocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhlcmNpc2VQcm9ncmVzcyA9IHNvcnRCeShcclxuICAgIHByb3BzLnByb2dyZXNzaXZlT3ZlcmxvYWQsXHJcbiAgICAoZSkgPT4gZS5kYXRldGltZV9zdGFydFxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb2xvciA9IGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke1xyXG4gICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICB9LDAuMylgO1xyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKSk7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcInByb2dyZXNzaXZlT3ZlcmxvYWRcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc2l2ZU92ZXJsb2FkQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBleGVyY2lzZVByb2dyZXNzLm1hcCgoZSkgPT5cclxuICAgICAgICAgIGRheWpzKGUuZGF0ZXRpbWVfc3RhcnQpLmZvcm1hdChcIkREL01NL1lZXCIpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJWb2x1bWUgUHJvZ3Jlc3MgKFdlaWdodCB4IFJlcHMpXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PiBlLm1heF92b2x1bWUpLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjQsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFZvbHVtZTogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ubWF4X3ZvbHVtZX0gfCBXZWlnaHQ6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLndlaWdodH0gfCBSZXBzOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5yZXBldGl0aW9uc31gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwcm9ncmVzc2l2ZU92ZXJsb2FkQ2hhcnQuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cInByb2dyZXNzaXZlT3ZlcmxvYWRcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IGxvZGFzaCBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBXZWVrbHlUcmFpbmluZ1NldHMgZnJvbSBcIn4vY29tcG9uZW50cy9XZWVrbHlUcmFpbmluZ1NldHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZU9mSVNPV2VlayB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxudmFyIGN1c3RvbVBhcnNlRm9ybWF0ID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdFwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5kYXlqcy5leHRlbmQoY3VzdG9tUGFyc2VGb3JtYXQpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHt9O1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHllYXJXZWVrID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKTtcclxuICBjb25zdCB1c2VyV29ya291dHMgPSBhd2FpdCBnZXRTZXRzRm9yVXNlcihcclxuICAgIHVzZXIsXHJcbiAgICB3ZWVrU3RhcnRpbmdPbkRheS50b0RhdGVTdHJpbmcoKSxcclxuICAgIG5ldyBEYXRlKFxyXG4gICAgICB3ZWVrU3RhcnRpbmdPbkRheS5zZXREYXRlKHdlZWtTdGFydGluZ09uRGF5LmdldERhdGUoKSArIDcpXHJcbiAgICApLnRvRGF0ZVN0cmluZygpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGxvZGFzaCh1c2VyV29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhpc1dlZWtSb3V0ZSgpIHtcclxuICBjb25zdCB3ZWVrbHlTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgeWVhcldlZWsgPSBzZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBsZXQgW3llYXIsIHdlZWtdID0geWVhcldlZWsuc3BsaXQoXCItV1wiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGdldERhdGVPZklTT1dlZWsod2VlaywgeWVhcik7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgcmVuZGVyVHJhaW5lZFRoaXNXZWVrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlRyYWluZWQgdGhpcyBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS50b0RhdGVTdHJpbmcoKX08L2I+IC17XCIgXCJ9XHJcbiAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAge25ldyBEYXRlKFxyXG4gICAgICAgICAgICAgIHdlZWtTdGFydGluZ09uRGF5LnNldERhdGUod2Vla1N0YXJ0aW5nT25EYXkuZ2V0RGF0ZSgpICsgNilcclxuICAgICAgICAgICAgKS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgIDwvYj57XCIgXCJ9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eWVhcldlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7T2JqZWN0LmtleXMod2Vla2x5U2V0cykubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5ObyBXb3Jrb3V0czwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8V2Vla2x5VHJhaW5pbmdTZXRzIHdlZWtseVNldHM9e3dlZWtseVNldHN9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8PntyZW5kZXJUcmFpbmVkVGhpc1dlZWsoKX08Lz47XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVRyYWluaW5nU2V0cyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBzZXRzID0gcHJvcHMud2Vla2x5U2V0cztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwid2Vla2x5U2V0c1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cykge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5U2V0c1wiKSk7XHJcbiAgICBjb25zdCB3ZWVrbHlTZXRzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcblxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhzZXRzKS5tYXAoKGUpID0+IHN0YXJ0Q2FzZShlKSksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBTZXRzXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhzZXRzKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHNldHMpLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke1xyXG4gICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgICB9LDAuNClgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdlZWtseVNldHNDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwid2Vla2x5U2V0c1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgdHJhbnNmb3JtLCBwaWNrIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBXb3Jrb3V0UGVyV2VlayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Xb3Jrb3V0c1BlcldlZWtcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZU9mSVNPV2VlaywgZ2V0V2Vla051bWJlciB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcblxyXG4gIHdvcmtvdXRzID0gbG9kYXNoKHdvcmtvdXRzKVxyXG4gICAgLmdyb3VwQnkoXHJcbiAgICAgICh3KSA9PlxyXG4gICAgICAgIGAke2RheWpzKHcuZGF0ZXRpbWVfc3RhcnQpLnllYXIoKX0gV2VlayAke1N0cmluZyhcclxuICAgICAgICAgIGdldFdlZWtOdW1iZXIobmV3IERhdGUody5kYXRldGltZV9zdGFydCkpXHJcbiAgICAgICAgKS5wYWRTdGFydCgyLCBcIjBcIil9YFxyXG4gICAgKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgbGV0IHdlZWtzVG9TaG93ID0gT2JqZWN0LmtleXMod29ya291dHMpO1xyXG4gIHdlZWtzVG9TaG93LnNvcnQoKTtcclxuICB3ZWVrc1RvU2hvdyA9IHdlZWtzVG9TaG93LnNsaWNlKDAsIDEwKS5tYXAoU3RyaW5nKTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZm9ybShwaWNrKHdvcmtvdXRzLCB3ZWVrc1RvU2hvdyksIChyZXMsIHZhbCwga2V5KSA9PiB7XHJcbiAgICByZXNba2V5XSA9IHZhbDtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRzUGVyV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPldvcmtvdXRzIHBlciBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPFdvcmtvdXRQZXJXZWVrIHdvcmtvdXRzUGVyV2Vlaz17d29ya291dHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXb3Jrb3V0KHdvcmtvdXQpIHtcclxuICBsZXQgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiaWRcIilcclxuICAgIC5tYXRjaCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG5cclxuICBsZXQgbG9jYXRpb25JZDtcclxuICBpZiAoY2hlY2tMb2NhdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgICAgLmluc2VydCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG4gIH1cclxuICBsb2NhdGlvbklkID0gY2hlY2tMb2NhdGlvbi5kYXRhPy5bMF0uaWQ7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIndvcmtvdXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgbmFtZTogd29ya291dC5uYW1lLFxyXG4gICAgICBkYXRldGltZV9zdGFydDogd29ya291dC5kYXRldGltZSxcclxuICAgICAgZGF0ZXRpbWVfZW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbklkLFxyXG4gICAgICB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgcmV0dXJuIGRhdGFbMF0uaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXb3Jrb3V0KHdvcmtvdXRfaWQpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIHdvcmtvdXRfaWQpO1xyXG5cclxuICBjb25zdCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzID1cclxuICAgIFwiKFwiICsgd29ya291dC5kYXRhLm1hcCgoZSkgPT4gZS53b3Jrb3V0X2V4ZXJjaXNlX2lkKS50b1N0cmluZygpICsgXCIpXCI7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZmlsdGVyKFwid29ya291dF9leGVyY2lzZVwiLCBcImluXCIsIGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMpO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIGNvbnN0IF9kZWxldGVXb3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgcmV0dXJuIF9kZWxldGVXb3Jrb3V0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YTogd29ya291dCB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcImlkXCIsIGlkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgaWQpXHJcbiAgICAub3JkZXIoXCJzZXRfaWRcIik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoV29ya291dChpZCwgZGF0ZXRpbWUpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC51cGRhdGUoeyBkYXRldGltZV9lbmQ6IGRhdGV0aW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogaWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIHdvcmtvdXRzLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYmVzdFNldEJ5RXhlcmNpc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxCZXN0Um91dGUoKSB7XHJcbiAgY29uc3QgbGlzdEJlc3RTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMVwiPlBlcnNvbmFsIEJlc3RzPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGk+V2VpZ2h0IG9mIHNldCB3aXRoIG1heCB2b2x1bWU8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2xpc3RCZXN0U2V0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPFBlcnNvbmFsQmVzdHMgYmVzdFNldHM9e2xpc3RCZXN0U2V0c30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIk5vIHdvcmtvdXRzIHlldFwiXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbFJlY29yZHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicGVyc29uYWxSZWNvcmRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxSZWNvcmRzXCIpKTtcclxuICAgIGNvbnN0IHByQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+XHJcbiAgICAgICAgICBzdGFydENhc2UoYCR7dmFsdWUuZXhlcmNpc2VfbmFtZX0gJHt2YWx1ZS52YXJpYW50ID8/IFwiXCJ9YClcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9wcy5iZXN0U2V0cy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS53ZWlnaHQpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmVzdFNldHMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwgJHtcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICB9LDAuNClgO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBwcm9wcy5iZXN0U2V0cy5sZW5ndGgsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IE9iamVjdC52YWx1ZXMocHJvcHMuYmVzdFNldHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAgV2VpZ2h0OiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0gfCBWb2w6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB4ICR7c2V0W2RhdGFJbmRleF0ucmVwZXRpdGlvbnN9ID0gJHtzZXRbZGF0YUluZGV4XS5tYXhfdm9sdW1lfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldExpZmV0aW1lU3RhdGlzdGljcywgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIHJlZHVjZSwgcGljaywgb21pdCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgc3RhdHMgPSBhd2FpdCBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICBjb25zdCB0b3RhbFRpbWVTcGVudCA9IHdvcmtvdXRzXHJcbiAgICAubWFwKCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX2VuZCkuZGlmZih3LmRhdGV0aW1lX3N0YXJ0LCBcIm1pbnV0ZVwiKSlcclxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICByZXR1cm4gW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgTWF0aC5yb3VuZCh0b3RhbFRpbWVTcGVudCAvIHdvcmtvdXRzLmxlbmd0aCldO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGlzdGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzdGF0cywgdG90YWxUaW1lU3BlbnQsIGF2ZXJhZ2VUaW1lU3BlbnRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGFiYnYgPSB7XHJcbiAgICBBVzogXCJBdmVyYWdlIFdlaWdodFwiLFxyXG4gICAgQVI6IFwiQXZlcmFnZSBSZXBldGl0aW9uc1wiLFxyXG4gICAgUmVwczogXCJUb3RhbCBSZXBldGl0aW9uc1wiLFxyXG4gICAgVm9sOiBcIlRvdGFsIFZvbHVtZVwiLFxyXG4gICAgTnVtOiBcIlRvdGFsIE51bWJlciBvZiBTZXRzXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSwgZGlnaXRzID0gMikgPT4ge1xyXG4gICAgY29uc3QgbG9va3VwID0gW1xyXG4gICAgICB7IHZhbHVlOiAxLCBzeW1ib2w6IFwiXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUzLCBzeW1ib2w6IFwia1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlNiwgc3ltYm9sOiBcIk1cIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTksIHN5bWJvbDogXCJHXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxMiwgc3ltYm9sOiBcIlRcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTE1LCBzeW1ib2w6IFwiUFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTgsIHN5bWJvbDogXCJFXCIgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCByeCA9IC9cXC4wKyR8KFxcLlswLTldKlsxLTldKTArJC87XHJcbiAgICB2YXIgaXRlbSA9IGxvb2t1cFxyXG4gICAgICAuc2xpY2UoKVxyXG4gICAgICAucmV2ZXJzZSgpXHJcbiAgICAgIC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSA+PSBpdGVtLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBpdGVtXHJcbiAgICAgID8gKG51bSAvIGl0ZW0udmFsdWUpLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCBcIiQxXCIpICsgaXRlbS5zeW1ib2xcclxuICAgICAgOiBcIjBcIjtcclxuICB9O1xyXG5cclxuICBsZXQgd29ya291dHNUYWJsZSA9IHN0YXRzLm1hcCgodykgPT4gKHtcclxuICAgIEV4ZXJjaXNlOiBgJHtzdGFydENhc2Uody5uYW1lKX0gJHtcclxuICAgICAgdz8udmFyaWFudCA/IGAoJHtzdGFydENhc2Uody52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgIH1gLFxyXG4gICAgUmVwczogTWF0aC5yb3VuZCh3LnRvdGFsX3JlcHMpLFxyXG4gICAgVm9sOiBNYXRoLnJvdW5kKHcuc3VtX3ZvbHVtZSksXHJcbiAgICBOdW06IHcubnVtX3NldHMsXHJcbiAgfSkpO1xyXG4gIGNvbnN0IGNvbHVtbk5hbWVzID0gWy4uLk9iamVjdC5rZXlzKE9iamVjdC5lbnRyaWVzKHdvcmtvdXRzVGFibGUpWzBdWzFdKV07XHJcbiAgY29uc3Qgcm93cyA9IE9iamVjdC5lbnRyaWVzKHdvcmtvdXRzVGFibGUpLm1hcCgoW2ssIHZdLCBpbmRleCkgPT4gW1xyXG4gICAgLi4uT2JqZWN0LnZhbHVlcyh2KSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtLTJcIj5TdGF0aXN0aWNzPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlRvdGFsIGxpZmV0aW1lIG1ldHJpY3M6PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIlxyXG4gICAgICAgIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxiPlRvdGFsIFRpbWU6IDwvYj5cclxuICAgICAgICAgIDxpPnt0b3RhbFRpbWVTcGVudH0gbWluPC9pPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxiPkF2ZXJhZ2UgVGltZTogPC9iPlxyXG4gICAgICAgICAgPGk+e2F2ZXJhZ2VUaW1lU3BlbnR9IG1pbjwvaT5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIHtjb2x1bW5OYW1lc1xyXG4gICAgICAgICAgLmZpbHRlcigoYykgPT4gYyAhPT0gXCJFeGVyY2lzZVwiKVxyXG4gICAgICAgICAgLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e25hbWV9PlxyXG4gICAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgICAge2FiYnZbbmFtZV19ICh7bmFtZX0pOntcIiBcIn1cclxuICAgICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICB7bmFtZSA9PT0gXCJWb2xcIlxyXG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdE51bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1RhYmxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGEsIGIpID0+IGEgKyBiW25hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICA6IHJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMod29ya291dHNUYWJsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gYSArIGJbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+VG90YWwgbGlmZXRpbWUgbWV0cmljcyBieSBleGVyY2lzZTogPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiwgZm9udFNpemU6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBpcy1zdHJpcGVkIGlzLW5hcnJvdyBpcy1ob3ZlcmFibGUgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICB7Y29sdW1uTmFtZXMubWFwKChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9PntlfTwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm1hcCgoZWxlLCBlbGVJbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgZWxlSW5kZXggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtlbGVJbmRleH0+e2Zvcm1hdE51bWJlcihlbGUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17ZWxlSW5kZXh9PntlbGV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVN1Ym1pdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlT2ZJU09XZWVrIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbnZhciB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmNvbnN0IHdlZWtkYXlzID0gW1xyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbiAgXCJTdW5kYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHllYXJXZWVrID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRTZXRzRm9yVXNlcihcclxuICAgIHVzZXIsXHJcbiAgICB3ZWVrU3RhcnRpbmdPbkRheS50b0RhdGVTdHJpbmcoKSxcclxuICAgIG5ldyBEYXRlKFxyXG4gICAgICB3ZWVrU3RhcnRpbmdPbkRheS5zZXREYXRlKHdlZWtTdGFydGluZ09uRGF5LmdldERhdGUoKSArIDcpXHJcbiAgICApLnRvRGF0ZVN0cmluZygpXHJcbiAgKTtcclxuICByZXR1cm4gd29ya291dHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrbHlTY2hlZHVsZVJvdXRlKCkge1xyXG4gIGxldCB3b3Jrb3V0RGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHllYXJXZWVrID0gc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBkYXlqcyhnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuXHJcbiAgY29uc3Qgd29ya291dHMgPSBsb2Rhc2god29ya291dERhdGEpXHJcbiAgICAuZ3JvdXBCeSgodykgPT4gZGF5anMudXRjKHcuZGF0ZXRpbWVfc3RhcnQpLmxvY2FsKCkuZm9ybWF0KFwiZGRkZFwiKSlcclxuICAgIC5tYXBWYWx1ZXMoKHYpID0+XHJcbiAgICAgIGxvZGFzaCh2KVxyXG4gICAgICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAgICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpXHJcbiAgICAgICAgLnZhbHVlKClcclxuICAgIClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5TY2hlZHVsZTwvZGl2PlxyXG4gICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8Yj57d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX08L2I+IC17XCIgXCJ9XHJcbiAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LmFkZCg2LCBcImRheVwiKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj57XCIgXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMlwiPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyV2Vla31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWs6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAge1suLi5BcnJheSg3KS5rZXlzKCldLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtfSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAge3dvcmtvdXRzPy5bd2Vla2RheXNbaXRlbV1dID8gKFxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZSBpcy1zbWFsbCBpcy1zZWNvbmRhcnkgbS0zIGB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgICAgd2Vla2RheXNbaXRlbV1cclxuICAgICAgICAgICAgICAgIH0gLSAke3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMod29ya291dHM/Llt3ZWVrZGF5c1tpdGVtXV0pLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoW2ssIHZdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uoayl9IC0ge3Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1zbWFsbCBpcy1saWdodCBtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgICB9IC0gJHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+UmVzdCBEYXkgXHVEODNEXHVEQ0FBPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlTG9jYXRpb25zUm91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VyPXtzZXRVc2VyfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEgbXQtNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TYXZlZCBMb2NhdGlvbnM8L2g0PlxyXG4gICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj57c3RhcnRDYXNlKGUubmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiPkFkZCBMb2NhdGlvbjwvYj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiIG5hbWU9XCJsb2NhdGlvbk5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCwgQnNDbG9ja0hpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtYi0zXCI+V29ya291dHM8L2Rpdj5cclxuICAgICAgICB7d29ya291dHMubGVuZ3RoID09PSAwICYmIFwiTm8gd29ya291dHMgeWV0XCJ9XHJcbiAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtcIndvcmtvdXQuaWRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgdG89e2Avd29ya291dC8ke3dvcmtvdXQuaWR9L2N1cnJlbnRFeGVyY2lzZXNgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yIGlzLTVcIj5cclxuICAgICAgICAgICAgICAgICAge2RheWpzXHJcbiAgICAgICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIE1NTSBEIFlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yIGlzLTZcIj5cclxuICAgICAgICAgICAgICAgICAge2RheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KS5sb2NhbCgpLmZvcm1hdChcImg6bW0gQVwiKX1cclxuICAgICAgICAgICAgICAgICAge1wiIC0gXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHt3b3Jrb3V0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzdGFydENhc2Uod29ya291dC5sb2NhdGlvbl9uYW1lKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7d29ya291dC5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZUZpbGwgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8QnNDbG9ja0hpc3Rvcnkgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIE91dGxldCwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICBmaW5pc2hXb3Jrb3V0LFxyXG4gIGdldFdvcmtvdXQsXHJcbiAgZGVsZXRlV29ya291dCxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RvcHdhdGNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmNvbnN0IHJlbGF0aXZlVGltZSA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgd29ya291dCA9IGF3YWl0IGdldFdvcmtvdXQocGFyYW1zLndvcmtvdXRJZCk7XHJcbiAgcmV0dXJuIHdvcmtvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGZpbmlzaFdvcmtvdXQoXHJcbiAgICAgIGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSxcclxuICAgICAgZm9ybS5nZXQoXCJlbmRcIilcclxuICAgICk7XHJcbiAgICByZXR1cm4gd29ya291dDtcclxuICB9XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiREVMRVRFXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZGVsZXRlV29ya291dChmb3JtLmdldChcIndvcmtvdXRfaWRcIikpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b1RpbWUodGltZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGltZSA+IDI0ICogMzYgKiA2MCAqIDEwMDAgJiZcclxuICAgICAgICAoTWF0aC5mbG9vcih0aW1lIC8gMjQgLyAzNiAvIDYwIC8gMTAwMCkgJSAyNCkgKyBcImRheShzKSBcIn1cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAzNjAwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdvcmtvdXRNZXRhRGF0YSh3b3Jrb3V0KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBpcy1saWdodCBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItM1wiPnt3b3Jrb3V0Py5uYW1lfTwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctcGluXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3N0YXJ0Q2FzZSh3b3Jrb3V0Py5sb2NhdGlvbl9uYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1hbGFybVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBpZD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHtgJHtkYXlqc1xyXG4gICAgICAgICAgICAgIC51dGMod29ya291dD8uZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgREQgTU1NIFlZLCBISDptbVwiKX1cclxuICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0TmV3V29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSB1c2VMb2FkZXJEYXRhKClbMF07XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NoYW5nZVRpbWUsIHNldFNob3dDaGFuZ2VUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VzdG9tRGF0ZSwgc2V0Q3VzdG9tRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50XHJcbiAgICAgIHNldFVzZXJJZD17c2V0VXNlcklkfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gd29ya291dC51c2VyX2lkfVxyXG4gICAgPlxyXG4gICAgICA8PlxyXG4gICAgICAgIHt3b3Jrb3V0TWV0YURhdGEod29ya291dCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keSBub3RpZmljYXRpb24gbWItM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0Py5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0xXCI+V29ya291dCBDb21wbGV0ZWQuIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dG9UaW1lKFxyXG4gICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX2VuZCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTBcIj5UaW1lIEVsYXBzZWQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1mYW1pbHktc2Vjb25kYXJ5IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3RvcHdhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpbWU9e2RheWpzKCkgLSBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICB7IXdvcmtvdXQuZGF0ZXRpbWVfZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKCkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzaG93TWVudSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2hhbmdlVGltZSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0IEZpbmlzaCBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dDaGFuZ2VUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoZS50YXJnZXQudmFsdWUpID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tRGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VzdG9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLXN1Y2Nlc3MgbS0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoY3VzdG9tRGF0ZSkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvbiBpcy1saWdodCAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3B3YXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEwMDApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3J1bm5pbmddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9wd2F0Y2hcIj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFyYW1zLFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TXVzY2xlR3JvdXBzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSBhd2FpdCBnZXRNdXNjbGVHcm91cHMoKTtcclxuICByZXR1cm4gbXVzY2xlX2dyb3VwcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc1JvdXRlSW5kZXgoKSB7XHJcbiAgbGV0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUoYC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID8/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7bXVzY2xlX2dyb3Vwcy5tYXAoKG11c2NsZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttdXNjbGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgbXVzY2xlX2dyb3VwOiBtdXNjbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA9PT0gbXVzY2xlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N0YXJ0Q2FzZShtdXNjbGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgcmVkaXJlY3QsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZ2V0RXhlcmNpc2VzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IG11c2NsZV9ncm91cCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApO1xyXG5cclxuICByZXR1cm4gZXhlcmNpc2VzO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgd29ya291dElkLCB1c2VyIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGV4ZXJjaXNlID0gZm9ybS5nZXQoXCJleGVyY2lzZVwiKTtcclxuXHJcbiAgYXdhaXQgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0KHtcclxuICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgIGV4ZXJjaXNlX2lkOiBleGVyY2lzZSxcclxuICB9KTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRFeGVyY2lzZVJvdXRlKCkge1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBleE5hbWVUb0lkTWFwID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeShcclxuICAgICAgZXhlcmNpc2VzLFxyXG4gICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgYCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgIH1gXHJcbiAgICApLFxyXG4gICAgKGUpID0+IGVbMF0uaWRcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgIGlkPVwiZXhlcmNpc2Vfb3B0aW9uc1wiXHJcbiAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgIG9wdGlvbnM9e2V4ZXJjaXNlcy5tYXAoXHJcbiAgICAgICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBFeGVyY2lzZVwiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZSBtdC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgZXhlcmNpc2U6IGV4TmFtZVRvSWRNYXBbc2VsZWN0ZWRdIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhcmsgXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkIHx8IGRpc2FibGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89e2Avd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2B9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0XCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlUGFyYW1zLCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCAqIHMucmVwZXRpdGlvbnMpKVxyXG4gICAgICAudmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4ZXJjaXNlU2V0cyA9IGdyb3VwQnkoXHJcbiAgICBzZXRzRm9yV29ya291dCxcclxuICAgIChzZXQpID0+XHJcbiAgICAgIGAke3N0YXJ0Q2FzZShzZXQuZXhlcmNpc2VfbmFtZSl9ICR7XHJcbiAgICAgICAgc2V0LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKHNldC52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgfWBcclxuICApO1xyXG4gIHJldHVybiB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwiZXhlcmNpc2VcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRFeGVyY2lzZXNSb3V0ZSgpIHtcclxuICBjb25zdCB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2hvd0RlbGV0ZSwgc2V0U2hvd0RlbGV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2NhbEV4ZXJjaXNlU3RhdGUsIHNldExvY2FsRXhlcmNpc2VTdGF0ZV0gPSB1c2VTdGF0ZShleGVyY2lzZVNldHMpO1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TG9jYWxFeGVyY2lzZVN0YXRlKGV4ZXJjaXNlU2V0cyksIFtleGVyY2lzZVNldHNdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhlcmNpc2VGb3JtID0gKGV4ZXJjaXNlX25hbWUsIHNldHMpID0+IHtcclxuICAgIGNvbnN0IGV4ZXJjaXNlSWQgPSBzZXRzWzBdPy5leGVyY2lzZV9pZDtcclxuICAgIGlmIChleGVyY2lzZUlkID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXhlcmNpc2VTZXRGb3JtID0ge1xyXG4gICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2VfaWQ6IHNldHNbMF0ud29ya291dF9leGVyY2lzZV9pZCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0U2V0Rm9ybSA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMsXHJcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVGdW5jID0gKGluZGV4KSA9PiB7XHJcbiAgICAgIHNldExvY2FsRXhlcmNpc2VTdGF0ZSgob2xkU3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4ub2xkU3RhdGUgfTtcclxuICAgICAgICBuZXdTdGF0ZVtleGVyY2lzZV9uYW1lXSA9IG5ld1N0YXRlW2V4ZXJjaXNlX25hbWVdLmZpbHRlcihcclxuICAgICAgICAgIChzKSA9PiBzLnNldF9pZCAhPT0gaW5kZXhcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGdW5jID0gKCkgPT4ge1xyXG4gICAgICBzZXRMb2NhbEV4ZXJjaXNlU3RhdGUoKG9sZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLm9sZFN0YXRlIH07XHJcbiAgICAgICAgbmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0gPSBbLi4ubmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0sIGV4ZXJjaXNlU2V0Rm9ybV07XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hlci5zdWJtaXQoZXhlcmNpc2VTZXRGb3JtLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJldmlvdXNCZXN0U2V0ID0gYmVzdFNldEJ5RXhlcmNpc2VbZXhlcmNpc2VJZF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiB7cHJldmlvdXNCZXN0U2V0LndlaWdodH0geHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0LnJlcGV0aXRpb25zfSB8IHtwcmV2aW91c0Jlc3RTZXQubWF4X3ZvbHVtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi0yIG10LTJcIiAvPlxyXG5cclxuICAgICAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICBpbmRleD17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICB3ZWlnaHQ9e3NldC53ZWlnaHR9XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkPXtzZXQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIHJlcGV0aXRpb25zPXtzZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVsZXRlRnVuYz17KCkgPT4gZGVsZXRlRnVuYyhzZXQuc2V0X2lkKX1cclxuICAgICAgICAgICAgICBzdWJtaXRGdW5jPXtzdWJtaXRTZXRGb3JtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9ucyBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0RnVuYygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1mdWxsd2lkdGggaXMtYmxhY2sgaXMtc21hbGwgdGlsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgKyBTZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIHNob3dEZWxldGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfSBkcm9wZG93biBpcy1yaWdodGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51NlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZSgoZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZXhlcmNpc2VJZF06ICEoZT8uW2V4ZXJjaXNlSWRdID8/IGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBwLTAgbS0wXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBwLTAgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcC0yIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXIgaXMtc21hbGwgaXMtZnVsbHdpZHRoIG0tMCBwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5leGVyY2lzZVNldEZvcm0sIHR5cGU6IFwiZXhlcmNpc2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBFeGVyY2lzZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYnV0dG9ucz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7T2JqZWN0LmVudHJpZXMobG9jYWxFeGVyY2lzZVN0YXRlKS5tYXAoXHJcbiAgICAgICAgKFtleGVyY2lzZV9uYW1lLCBzZXRzXSwgZXhJbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggaXMtc21hbGxcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0SW5wdXQocHJvcHMpIHtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUocHJvcHMud2VpZ2h0KTtcclxuICBjb25zdCBbcmVwZXRpdGlvbnMsIHNldFJlcGV0aXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLnJlcGV0aXRpb25zKTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUocHJvcHMuY29tcGxldGVkKTtcclxuICBjb25zdCB1cGRhdGVEYiA9IGRlYm91bmNlKFxyXG4gICAgKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpID0+XHJcbiAgICAgIHByb3BzLnN1Ym1pdEZ1bmMod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCksXHJcbiAgICAyMDAsXHJcbiAgICB7XHJcbiAgICAgIGxlYWRpbmc6IHRydWUsXHJcbiAgICAgIHRyYWlsaW5nOiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gIH0sIFt3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbWItMiBwLTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjF2aFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29tcGxldGVkID8gXCIjZWJmZmZjXCIgOiBcIiNmNWY1ZjVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiXHJcbiAgICAgICAgICB2YWx1ZT17d2VpZ2h0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFdlaWdodChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwc1wiXHJcbiAgICAgICAgICB2YWx1ZT17cmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVwZXRpdGlvbnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgZS50YXJnZXQudmFsdWUsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUZ1bmN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgY3JlYXRlV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25zIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZVRpbWUgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IHVzZXJJZCA9IGZvcm0uZ2V0KFwidXNlcklkXCIpO1xyXG4gIGxldCBuYW1lID0gZm9ybS5nZXQoXCJuYW1lXCIpO1xyXG4gIGxldCBkYXRldGltZSA9IGZvcm0uZ2V0KFwiZGF0ZXRpbWVcIik7XHJcbiAgbGV0IGxvY2F0aW9uID0gZm9ybS5nZXQoXCJsb2NhdGlvblwiKTtcclxuICBsb2NhdGlvbiA9IGxvY2F0aW9uPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKC8gL2csIFwiX1wiKSA/PyBudWxsO1xyXG4gIGNvbnN0IHdvcmtvdXRPYmplY3RJZCA9IGF3YWl0IGNyZWF0ZVdvcmtvdXQoe1xyXG4gICAgbmFtZSxcclxuICAgIGRhdGV0aW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICB1c2VySWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZWRpcmVjdChgL3dvcmtvdXQvJHt3b3Jrb3V0T2JqZWN0SWR9L2N1cnJlbnRFeGVyY2lzZXNgKTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhc0xvY2F0aW9uLCBzZXRIYXNMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkNyZWF0ZSBOZXcgV29ya291dDwvaDQ+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB1aWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRldGltZVwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXlqcyhgJHtldmVudC50YXJnZXQuZGF0ZXRpbWVMb2NhbC52YWx1ZX06MDBgKS51dGMoKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcImRkZGRcIil9IHdvcmtvdXRgXHJcbiAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQodXNlcklkKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRhdGV0aW1lKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hbWUvRGVzYzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRkZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9IHdvcmtvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGV0aW1lTG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2V0Q3VycmVudERhdGVUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXRIYXNMb2NhdGlvbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXRIYXNMb2NhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHNlbGVjdCBgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImxvY2F0aW9uc1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17c3RhcnRDYXNlKGl0ZW0ubmFtZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb2NhdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9ob21lXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPD48Lz47XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpQWRkQm94RmlsbCwgUmlMaW5lQ2hhcnRGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEdpU3Ryb25nIH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XHJcbmltcG9ydCB7IE1kTG9jYXRpb25PbiB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tIFwifi9jb21wb25lbnRzL0ZpcmViYXNlTG9naW5cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVJvdXRlKCkge1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcklkPXtzZXRVc2VySWR9IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLXRvdWNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBcIj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm94IHNvcmFGb250IHByaW1hcnkgaGFzLXRleHQtd2hpdGUgdGl0bGUgbWItMiBpcy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIEhlbGxvLCB7dXNlciAmJiB1c2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGE+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb3JhRm9udCBib3ggcC00IG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL2NyZWF0ZT91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQUEgQ3JlYXRlIFdvcmtvdXRcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzLz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQzggQW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avd29ya291dHM/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0M1IFdvcmtvdXRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2xvY2F0aW9ucz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0NcdURGRUEgTG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL21lYXN1cmVtZW50cz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0NcdURGNTEgTWVhc3VyZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgY29udGFpbmVyIHNvcmFGb250XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBtYi0xXCI+V29ya291dCwgU21hcnRlci48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+UGxlYXNlIGxvZyBpbiB0byBjb250aW51ZS4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VMb2dpbiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic3NzlkYzU1MycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtNVlUS01CQjQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBQUE4zS003LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1YyNEhJNDMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVJISVJTSFZELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SQ0Y0R1lMUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURVS1VQNlJOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTk8yRTRYMkouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XVVBUV1FEVC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FuYWx5dGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MtQlZRWFpPQk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhCNlBMQ05MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRk4yWVFZUk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ESktKQ1RBSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZXSE9RV0NHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUw1VllPU0guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncGVyc29uYWwtYmVzdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzLU1UUjNLM1BJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NRVpYVVFSUS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3Byb2dyZXNzaXZlLW92ZXJsb2FkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZC1ZNTdWNkNZVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTUVaWFVRUlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZScsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidzY2hlZHVsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUtTU1SWU81V1AuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRKN1pKNFFWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3N0YXRpc3RpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MtSTU1RUlTNEUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzondHJhaW5lZC10aGlzLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrLUhZWjJWSERBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NRVpYVVFSUS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzond29ya291dHMtcGVyLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrLUYzT00yRkdULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NRVpYVVFSUS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jcmVhdGUtR1dVQlBHSlcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRKN1pKNFFWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRk4yWVFZUk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ESktKQ1RBSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZXSE9RV0NHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUw1VllPU0guanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLUZTNFAyR01FLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RSlFUWlVTQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURKS0pDVEFJLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1MUlhPNlJYNy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLVRSRUYzVkNOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESktKQ1RBSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFMNVZZT1NILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMvOmxvY2F0aW9uSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkLUU1VFFKNEdILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYXN1cmVtZW50cyc6eydpZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVhc3VyZW1lbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYXN1cmVtZW50cy1GQkRVQ0dFNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREpLSkNUQUkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZCc6eydpZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkJywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2FkZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkLUVaVU42UFpILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1YQTdLSVRGTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZOMllRWVJNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1VQVFdRRFQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5Jzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5JywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2hpc3RvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnktVUJURUFMVkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1FWlhVUVJRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRldIT1FXQ0cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0Jzp7J2lkJzoncm91dGVzL3dvcmtvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzond29ya291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LVZQWTNYVFhKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ESktKQ1RBSS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQnLCdwYXRoJzonOndvcmtvdXRJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQtTk42Q1hVM1guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRKN1pKNFFWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFVLVVA2Uk4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OTzJFNFgySi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdVUFRXUURULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRldIT1FXQ0cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50Jzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50JywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQtR0hMWDNRUTcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXRoJzonYWRkRXhlcmNpc2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UtN05NSTQ0SDMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhBN0tJVEZNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUw1VllPU0guanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcycsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOidjdXJyZW50RXhlcmNpc2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzLVFKUDVENDJVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RSlFUWlVTQy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXRzJzp7J2lkJzoncm91dGVzL3dvcmtvdXRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXRzLUxJV0FKN0hQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00SjdaSjRRVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURKS0pDVEFJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRldIT1FXQ0cuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RTDVWWU9TSC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNzc5REM1NTMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFF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
