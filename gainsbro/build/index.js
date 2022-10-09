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
var styles_module_default = "/build/_assets/styles.module-TVRKQ3LW.css";

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\root.jsx
var import_framer_motion = require("framer-motion");
var import_app = require("firebase/app");

// app/components/FirebaseLogin.js
init_react();
var import_auth = require("firebase/auth");
var import_react = require("react");
var import_react2 = require("react");
var import_md = require("react-icons/md");
function FirebaseLogin(props) {
  const [user, setUser] = (0, import_react2.useState)({});
  const [dropdownActive, setDropdownActive] = (0, import_react2.useState)(false);
  const provider = new import_auth.GoogleAuthProvider();
  const auth = (0, import_auth.getAuth)(props.app);
  function googleLogin() {
    (0, import_auth.signInWithRedirect)(auth, provider);
  }
  function logout() {
    auth.signOut();
  }
  (0, import_auth.onAuthStateChanged)(auth, (result) => {
    result ? setUser(result) : setUser();
  });
  (0, import_react.useEffect)(() => {
    if (user == null) {
      localStorage.removeItem("user");
    } else if (Object.keys(user).length !== 0) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
  (0, import_react.useEffect)(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, (user == null ? void 0 : user.displayName) === void 0 && /* @__PURE__ */ React.createElement("button", {
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
var import_react3 = require("react");
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
  const [showInput, setShowInput] = (0, import_react3.useState)(false);
  const [renameInput, setRenameInput] = (0, import_react3.useState)((0, import_lodash.startCase)(getNameFromId["" + locationId] ?? null));
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
var import_react5 = require("react");
var import_framer_motion2 = require("framer-motion");

// app/components/UserAuthorisedComponent.js
init_react();
var import_remix4 = __toESM(require_remix());
var import_auth2 = require("firebase/auth");
var import_react4 = require("react");
function UserAuthorisedComponent(props) {
  const [user, setUser] = (0, import_react4.useState)();
  const navigate = (0, import_remix4.useNavigate)();
  const auth = (0, import_auth2.getAuth)();
  (0, import_auth2.onAuthStateChanged)(auth, (result) => {
    result ? setUser(result) : setUser(null);
  });
  (0, import_react4.useEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
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
var import_react6 = require("react");
var import_auto = __toESM(require("chart.js/auto"));
var import_dayjs = __toESM(require("dayjs"));
var import_lodash2 = require("lodash");
function MeasurementProgress(props) {
  const [ctx, setCtx] = (0, import_react6.useState)(null);
  const chronologicalProgress = (0, import_lodash2.sortBy)(props.history, (e) => (0, import_dayjs.default)(e.date));
  (0, import_react6.useEffect)(() => {
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
var import_react7 = require("react");
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
  const [measurementValue, setMeasurementValue] = (0, import_react7.useState)(measurement[0].value);
  const [date, setDate] = (0, import_react7.useState)(measurement[0].date);
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
var import_react8 = require("react");
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
var getGradientFromWorkout = (id, date) => {
  const idRGB = hexToRGB(`#${random(id)}`, 0.3);
  const dateRGB = hexToRGB(`#${random(date)}`, 0.5);
  return `linear-gradient(to left, ${idRGB}, ${dateRGB})`;
};
var random = (seed) => {
  return Math.floor(Math.abs(Math.sin(seed) * 16777215)).toString(16);
};
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
function toTime(time) {
  return /* @__PURE__ */ React.createElement("div", null, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ React.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ React.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ React.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
}
function distributedCopy(items, n) {
  if ((items == null ? void 0 : items.length) <= n) {
    return items;
  }
  var elements = [items[0]];
  var totalItems = items.length - 2;
  var interval = Math.floor(totalItems / (n - 2));
  for (var i = 1; i < n - 1; i++) {
    elements.push(items[i * interval]);
  }
  elements.push(items[items.length - 1]);
  return elements;
}

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
  const [selectedMetric, setSelectedMetric] = (0, import_react8.useState)();
  const [value, setValue] = (0, import_react8.useState)();
  const [user, setUser] = (0, import_react8.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react8.useState)(false);
  const [date, setDate] = (0, import_react8.useState)(getCurrentDateTime());
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
var import_react9 = require("react");
var import_framer_motion3 = require("framer-motion");
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs3.default.extend(weekOfYear);
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix9.useSearchParams)();
  const [minimised, setMinimised] = (0, import_react9.useState)(true);
  const userId = searchParams.get("user");
  const location = (0, import_remix9.useLocation)();
  const user = searchParams.get("user");
  const date = new Date();
  const weekYear = `${(0, import_dayjs3.default)().year()}-W${getWeekNumber(date)}`;
  const navigate = (0, import_remix9.useNavigate)();
  (0, import_react9.useEffect)(() => {
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
    className: "title is-3 mt-5 mb-3"
  }, "Analytics"), /* @__PURE__ */ React.createElement("div", {
    className: "level"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box container"
  }, minimised ? /* @__PURE__ */ React.createElement("aside", {
    className: "menu mb-3"
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
  }, "Personal Bests")))) : null, /* @__PURE__ */ React.createElement("button", {
    className: "button is-fullwidth is-small",
    onClick: () => setMinimised((e) => !e)
  }, minimised ? "Minimise Menu" : "Show Full Menu"))), /* @__PURE__ */ React.createElement("div", {
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
async function getBestSetPerWorkoutExercise(userId, exerciseId, use_max_weight) {
  const view = use_max_weight ? "max_weight_for_workout_exercise" : "max_volume_for_workout_exercise";
  if (exerciseId) {
    const { data } = await supabase_default.from(view).select("*").eq("user_id", userId).eq("exercise_id", exerciseId);
    return data;
  } else {
    const { data } = await supabase_default.from(view).select("*").eq("user_id", userId);
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
var import_react10 = require("react");
var import_auto2 = __toESM(require("chart.js/auto"));
var import_chart = require("chart.js");
var import_dayjs5 = __toESM(require("dayjs"));
var import_lodash6 = require("lodash");
import_auto2.default.register([import_chart.Tooltip]);
function ProgressiveOverload(props) {
  const [ctx, setCtx] = (0, import_react10.useState)(null);
  const exerciseProgress = distributedCopy((0, import_lodash6.sortBy)(props.progressiveOverload, (e) => e.datetime_start), 10);
  (0, import_react10.useEffect)(() => {
    let color1 = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`;
    let color2 = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`;
    setCtx(document.getElementById("progressiveOverload"));
    let chartStatus = import_auto2.default.getChart("progressiveOverload");
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    const progressiveOverloadChart = new import_auto2.default(ctx, {
      type: "line",
      data: {
        labels: exerciseProgress.map((e) => (0, import_dayjs5.default)(e[0].datetime_start).format("DD/MM/YY")),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => e[0].max_volume),
            fill: true,
            tension: 0.3,
            borderColor: color1,
            backgroundColor: color1,
            yAxisID: "y_left"
          },
          {
            label: "Weight Progress (Heaviest Set)",
            data: exerciseProgress.map((e) => e[1].weight),
            fill: true,
            tension: 0.4,
            borderColor: color2,
            backgroundColor: color2,
            yAxisID: "y_right"
          }
        ]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                let datasetIndex = context.datasetIndex;
                let label = datasetIndex > 0 ? "Max Weight" : "Max Vol";
                return `${label}: Volume: ${exerciseProgress[dataIndex][datasetIndex].repetitions * exerciseProgress[dataIndex][datasetIndex].weight} | Weight: ${exerciseProgress[dataIndex][datasetIndex].weight} | Reps: ${exerciseProgress[dataIndex][datasetIndex].repetitions}`;
              }
            }
          }
        },
        scales: {
          y_left: {
            type: "linear",
            display: true,
            position: "left"
          },
          y_right: {
            type: "linear",
            display: true,
            position: "right",
            grid: {
              drawOnChartArea: false
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
  const volSets = await getBestSetPerWorkoutExercise(user, exercise);
  const weightSets = await getBestSetPerWorkoutExercise(user, exercise, true);
  const setsByExercise = Object.values((0, import_lodash7.groupBy)([...volSets, ...weightSets], (s) => [s.workout_id]));
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
  }, (0, import_lodash7.sortBy)(exercises, (ex) => (0, import_lodash7.lowerCase)(ex.name)).map((e) => /* @__PURE__ */ React.createElement("option", {
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
var import_react11 = require("react");
var import_auto3 = __toESM(require("chart.js/auto"));
var import_lodash8 = require("lodash");
function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = (0, import_react11.useState)(null);
  const sets = props.weeklySets;
  (0, import_react11.useEffect)(() => {
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
var import_react12 = require("react");
var import_auto4 = __toESM(require("chart.js/auto"));
var import_lodash10 = require("lodash");
function WorkoutsPerWeek(props) {
  const [ctx, setCtx] = (0, import_react12.useState)(null);
  (0, import_react12.useEffect)(() => {
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
  weeksToShow.sort((a, b) => b - a);
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
var import_react14 = require("react");

// app/components/PersonalBest.js
init_react();
var import_react13 = require("react");
var import_auto5 = __toESM(require("chart.js/auto"));
var import_lodash12 = require("lodash");
function PersonalRecords(props) {
  const [ctx, setCtx] = (0, import_react13.useState)(null);
  (0, import_react13.useEffect)(() => {
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
                return ` Weight: ${set[dataIndex].weight} | Vol: ${set[dataIndex].weight} x ${set[dataIndex].repetitions} = ${set[dataIndex].weight * set[dataIndex].repetitions}`;
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
  const sets = await getBestSetPerWorkoutExercise(user, null, true);
  const bestSetByExercise = (0, import_lodash13.default)(sets).sortBy((s) => -s.repetitions).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash13.maxBy)(e, (s) => s.weight)).value();
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
  }), /* @__PURE__ */ React.createElement("i", null, "Heaviest set of more than 6 reps")), listBestSets.length ? /* @__PURE__ */ React.createElement(PersonalRecords, {
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
  return [
    stats,
    totalTimeSpent,
    Math.round(totalTimeSpent / workouts.length),
    workouts.length
  ];
};
function StatisticsRoute() {
  const [stats, totalTimeSpent, averageTimeSpent, numWorkouts] = (0, import_remix14.useLoaderData)();
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
  let workoutsTable = (0, import_lodash14.sortBy)(stats, (s) => (0, import_lodash14.lowerCase)(s.name)).map((w) => ({
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
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Total Workouts: "), /* @__PURE__ */ React.createElement("i", null, numWorkouts)), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Total Time: "), /* @__PURE__ */ React.createElement("i", null, totalTimeSpent, " min")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Average Time: "), /* @__PURE__ */ React.createElement("i", null, averageTimeSpent, " min")), columnNames.filter((c) => c !== "Exercise").map((name) => /* @__PURE__ */ React.createElement("p", {
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
var import_react16 = require("react");

// app/components/LocationPie.js
init_react();
var import_react15 = require("react");
var import_auto6 = __toESM(require("chart.js/auto"));
var import_lodash16 = require("lodash");
function LocationPie(props) {
  const [ctx, setCtx] = (0, import_react15.useState)(null);
  (0, import_react15.useEffect)(() => {
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
  let workoutsPerLocation = (0, import_lodash17.mapValues)((0, import_lodash17.groupBy)(workoutsForUser, "location_name"), (e) => e.length);
  if (Object.values(workoutsPerLocation).length > 5) {
    const cutOff = (0, import_lodash17.sortBy)(Object.values(workoutsPerLocation)).reverse()[5];
    const sumEntriesBelowCutoff = (0, import_lodash17.sum)(Object.values(workoutsPerLocation).filter((times) => times <= cutOff));
    workoutsPerLocation = __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(workoutsPerLocation).filter(([loc, times]) => times > cutOff))), {
      Others: sumEntriesBelowCutoff
    });
  }
  return [locations, workoutsPerLocation];
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
  const [user, setUser] = (0, import_react16.useState)();
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
    className: "title is-3 mt-5 mb-3"
  }, "Workouts"), /* @__PURE__ */ React.createElement("div", {
    className: "title is-5"
  }, `${workouts.length} workouts`), workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix17.Link, {
    key: workout.id,
    className: "box",
    style: {
      background: getGradientFromWorkout(workout.id, workout.datetime_start.replace(/\D+/g, ""))
    },
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { mixBlendMode: "hard-light" }
  }, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs12.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs12.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), /* @__PURE__ */ React.createElement("div", null, workout.duration), /* @__PURE__ */ React.createElement("div", null, workout.datetime_end ? toTime((0, import_dayjs12.default)(import_dayjs12.default.utc(workout.datetime_end) - import_dayjs12.default.utc(workout.datetime_start))) : "In Progress..."), (0, import_lodash18.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_react18 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react17 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react17.useState)(0);
  const [start, setStart] = (0, import_react17.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react17.useState)(props.running);
  (0, import_react17.useEffect)(() => {
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
  return /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react17.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react17.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react17.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
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
function workoutMetaData(workout) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box m-3 soraFont",
    style: {
      borderRadius: "1rem",
      background: getGradientFromWorkout(workout.id, workout.datetime_start.replace(/\D+/g, ""))
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: " mb-3 title soraFont",
    style: {
      mixBlendMode: "hard-light"
    }
  }, workout == null ? void 0 : workout.name), /* @__PURE__ */ React.createElement("div", {
    style: { mixBlendMode: "hard-light" }
  }, /* @__PURE__ */ React.createElement("div", {
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
              `)))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix19.useLoaderData)()[0];
  const fetcher = (0, import_remix19.useFetcher)();
  const [userId, setUserId] = (0, import_react18.useState)();
  const [showMenu, setShowMenu] = (0, import_react18.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react18.useState)(false);
  const [customDate, setCustomDate] = (0, import_react18.useState)(null);
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUserId,
    idPredicate: (id) => id === workout.user_id
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, workoutMetaData(workout), /* @__PURE__ */ React.createElement("div", {
    className: "p-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message-body notification mb-3 is-white",
    style: {
      display: "flex",
      justifyContent: "space-between",
      verticalAlign: "middle"
    }
  }, (workout == null ? void 0 : workout.datetime_end) ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-1 has-text-success"
  }, "Workout Completed.", " ", toTime(import_dayjs13.default.utc(workout.datetime_end) - import_dayjs13.default.utc(workout.datetime_start))))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0 has-text-dark"
  }, "Time Elapsed:", /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: import_dayjs13.default.utc(workout.datetime_start)
  })))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-success is-small",
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
      setCustomDate(e.target.value);
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
    className: " button is-light is-small  mb-2",
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
var import_react19 = require("react");
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
  const [selected, setSelected] = (0, import_react19.useState)([]);
  const [disabled, setDisabled] = (0, import_react19.useState)(false);
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
var import_react21 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react20 = require("react");
var import_lodash22 = require("lodash");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react20.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react20.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react20.useState)(props.completed);
  const [deleting, setDeleting] = (0, import_react20.useState)(false);
  const updateDb = (0, import_lodash22.debounce)((weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index), 200, {
    leading: true,
    trailing: true
  });
  (0, import_react20.useEffect)(() => {
    !(weight == null & repetitions == null && completed == null) ? updateDb(weight, repetitions, completed, props.index) : null;
  }, [weight, repetitions, completed]);
  return !deleting ? /* @__PURE__ */ React.createElement("div", {
    className: `message ${completed ? "is-success" : ""} mb-2`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message-body p-2",
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
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
    className: `is-small button ${completed ? "is-success is-light" : "is-light"}`
  }, /* @__PURE__ */ React.createElement(import_ri.RiCheckFill, {
    size: 15
  }))))) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\currentExercises.jsx
var import_framer_motion7 = require("framer-motion");
var loader17 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId, null, true);
    bestSetByExercise = (0, import_lodash23.default)(sets).sortBy((s) => -s.repetitions).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash23.maxBy)(e, (s) => s.weight)).value();
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
  const [showDelete, setShowDelete] = (0, import_react21.useState)();
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
    }, exercise_name, " "), previousBestSet && /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, " PB:"), " ", /* @__PURE__ */ React.createElement("b", null, previousBestSet.weight, " "), " x", " ", previousBestSet.repetitions), /* @__PURE__ */ React.createElement("hr", {
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
      disabled: fetcher.submission && fetcher.submission.formData.get("exercise_name") === exercise_name,
      onClick: () => {
        submitFunc();
      },
      className: "button is-fullwidth is-small is-black tile"
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
      className: "button is-light is-danger is-fullwidth m-0 p-0",
      onClick: () => fetcher.submit(__spreadProps(__spreadValues({}, exerciseSetForm), { type: "exercise" }), { method: "DELETE" })
    }, "Delete Exercise"))))))));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.entries(exerciseSets).map(([exercise_name, sets], exIndex) => /* @__PURE__ */ React.createElement("div", {
    key: exIndex
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix22.Outlet, null), /* @__PURE__ */ React.createElement(import_remix22.Link, {
    to: `/workout/${workoutId}/addExercise`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mt-5 button is-fullwidth is-black"
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
var import_react22 = require("react");
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
  const [user, setUser] = (0, import_react22.useState)();
  const [hasLocation, setHasLocation] = (0, import_react22.useState)();
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
var import_react23 = require("react");
var import_framer_motion9 = require("framer-motion");
var import_remix25 = __toESM(require_remix());
function HomeRoute() {
  const [userId, setUserId] = (0, import_react23.useState)();
  const [user, setUser] = (0, import_react23.useState)();
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
var assets_manifest_default = { "version": "cd6ae9d2", "entry": { "module": "/build/entry.client-OMPFFD2P.js", "imports": ["/build/_shared/chunk-KQEDD3AW.js", "/build/_shared/chunk-CFWPAYJG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DISPGEXK.js", "imports": ["/build/_shared/chunk-HJN7ZJBY.js", "/build/_shared/chunk-KI6TQ5CA.js", "/build/_shared/chunk-PRTN2AQO.js", "/build/_shared/chunk-7DB4L3ZX.js", "/build/_shared/chunk-WKBQYEIC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-YMB37B7V.js", "imports": ["/build/_shared/chunk-FUUY7UL6.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-YV5334SE.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-MXWOFT35.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-FBNEKFQL.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-XD4BBT2Y.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-K2S5XIQW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-TMK3I724.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-3W52FY2X.js", "imports": ["/build/_shared/chunk-IR65SEW6.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-GSSTHDT2.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-YV5334SE.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-ATZJ4KVI.js", "imports": ["/build/_shared/chunk-ELIQRMYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-6HNEJ6AL.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-WUGFHELA.js", "imports": ["/build/_shared/chunk-IR65SEW6.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-MIBONZQO.js", "imports": ["/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements": { "id": "routes/measurements", "parentId": "root", "path": "measurements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements-3QYBLNHH.js", "imports": ["/build/_shared/chunk-ELIQRMYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/add": { "id": "routes/measurements/add", "parentId": "routes/measurements", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/add-722KLTP2.js", "imports": ["/build/_shared/chunk-7ZURM6ML.js", "/build/_shared/chunk-YV5334SE.js", "/build/_shared/chunk-WKBQYEIC.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history": { "id": "routes/measurements/history", "parentId": "routes/measurements", "path": "history", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history-A632RG6B.js", "imports": ["/build/_shared/chunk-IR65SEW6.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history/edit": { "id": "routes/measurements/history/edit", "parentId": "routes/measurements/history", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history/edit-EPUQYGDX.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-DCHCXPZ3.js", "imports": ["/build/_shared/chunk-ELIQRMYE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-7KO66TAD.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js", "/build/_shared/chunk-KI6TQ5CA.js", "/build/_shared/chunk-PRTN2AQO.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-YV5334SE.js", "/build/_shared/chunk-WKBQYEIC.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-6RRRHDZQ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-5EYRWVZ4.js", "imports": ["/build/_shared/chunk-7ZURM6ML.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-SUISGG72.js", "imports": ["/build/_shared/chunk-7DB4L3ZX.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-JXAH22IR.js", "imports": ["/build/_shared/chunk-QPIZZKLK.js", "/build/_shared/chunk-QDC2PE57.js", "/build/_shared/chunk-YV5334SE.js", "/build/_shared/chunk-ELIQRMYE.js", "/build/_shared/chunk-NZUG3FHV.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-CD6AE9D2.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxtZWFzdXJlbWVudHNcXGhpc3RvcnkuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL01lYXN1cmVtZW50UHJvZ3Jlc3MuanMiLCAiLi4vYXBwL3NlcnZpY2UvbWVhc3VyZW1lbnRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbWVhc3VyZW1lbnRzXFxoaXN0b3J5XFxlZGl0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50c1xcYWRkLmpzeCIsICIuLi9hcHAvdXRpbHMvdXRpbHMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3MuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3giLCAiLi4vYXBwL3NlcnZpY2UvZXhlcmNpc2VzLmpzIiwgIi4uL2FwcC9zZXJ2aWNlL3NldHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcdHJhaW5lZC10aGlzLXdlZWsuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0cy5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcd29ya291dHMtcGVyLXdlZWsuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL3dvcmtvdXRzLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vlay5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xccGVyc29uYWwtYmVzdHMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvbmFsQmVzdC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc3RhdGlzdGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHNjaGVkdWxlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGxvY2F0aW9ucy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTG9jYXRpb25QaWUuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0cy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudFxcYWRkRXhlcmNpc2UuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcY3VycmVudEV4ZXJjaXNlcy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2V0SW5wdXQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxjcmVhdGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaG9tZS5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcaGlzdG9yeS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXG1lYXN1cmVtZW50c1xcXFxoaXN0b3J5XFxcXGVkaXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcYWRkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHRyYWluZWQtdGhpcy13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHdvcmtvdXRzLXBlci13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc3RhdGlzdGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcc2NoZWR1bGUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWFzdXJlbWVudHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJoaXN0b3J5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnlcIixcbiAgICAgIHBhdGg6IFwiZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJhZGRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic3RhdGlzdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInNjaGVkdWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE5XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMVxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IEZpcmViYXNlTG9naW4gZnJvbSBcIn4vY29tcG9uZW50cy9GaXJlYmFzZUxvZ2luLmpzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIkdhaW5zQnJvXCIgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpcmViYXNlQ29uZmlnOiB7XHJcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBJX0tFWSxcclxuICAgICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSF9ET01BSU4sXHJcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUFJPSkVDVF9JRCxcclxuICAgICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuU1RPUkFHRV9CVUNLRVQsXHJcbiAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5NU0dfU0VOREVSX0lELFxyXG4gICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lELFxyXG4gICAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5NRUFTVVJFTUVOVF9JRCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcih7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtYmxhY2sgcC0wIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGlzLXNpemUtNSBzb3JhRm9udFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nzcy5nZy9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2Nzcy9UeXBlYWhlYWQuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kYXRlcGlja2VyLzIuMTQuMS9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvcmE6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtyZXF1aXJlKFwiLi4vYXNzZXRzL2xvZ28ucG5nXCIpfT48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3NcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE5hdkJhcj5cclxuICAgICAgICAgIDxGaXJlYmFzZUxvZ2luIGFwcD17YXBwfSAvPlxyXG4gICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZWJhc2VMb2dpbihwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChwcm9wcy5hcHApO1xyXG5cclxuICBmdW5jdGlvbiBnb29nbGVMb2dpbigpIHtcclxuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gIH1cclxuXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIoKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyID09IG51bGwpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt1c2VyPy5kaXNwbGF5TmFtZSA9PT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvb2dsZUxvZ2lufSBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgc29yYUZvbnRcIj5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bkcm9wZG93biAke2Ryb3Bkb3duQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RHJvcGRvd25BY3RpdmUoKGFjdGl2ZVN0YXRlKSA9PiAhYWN0aXZlU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dXNlci5kaXNwbGF5TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZEV4cGFuZE1vcmUgc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBpZD1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VMb2FkZXJEYXRhLCB1c2VGZXRjaGVyLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtcclxuICBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uLFxyXG4gIGRlbGV0ZUxvY2F0aW9uLFxyXG4gIHJlbmFtZUxvY2F0aW9uLFxyXG59IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHNBdExvY2F0aW9uID0gYXdhaXQgZ2V0V29ya291dHNQZXJMb2NhdGlvbih1c2VyKTtcclxuXHJcbiAgY29uc3QgZ2V0TmFtZUZyb21JZCA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkod29ya291dHNBdExvY2F0aW9uLCAoZSkgPT4gZS5pZCksXHJcbiAgICAoZSkgPT4gZVswXT8ubmFtZVxyXG4gICk7XHJcbiAgY29uc3Qgd29ya291dHNQZXJMb2NhdGlvbiA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkod29ya291dHNBdExvY2F0aW9uLCAoZSkgPT4gZS5pZCksXHJcbiAgICAoZSkgPT4gZVswXT8uY291bnQgPz8gMFxyXG4gICk7XHJcbiAgcmV0dXJuIFt3b3Jrb3V0c1BlckxvY2F0aW9uLCBnZXROYW1lRnJvbUlkXTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uSWQgPSBmb3JtLmdldChcImxvY2F0aW9uSWRcIik7XHJcbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKTtcclxuXHJcbiAgICBhd2FpdCByZW5hbWVMb2NhdGlvbihcclxuICAgICAgbG9jYXRpb25JZCxcclxuICAgICAgbG9jYXRpb25OYW1lLnJlcGxhY2UoLyAvZywgXCJfXCIpLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xyXG4gICAgLy8gREVMRVRFXHJcbiAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZGVsZXRlTG9jYXRpb24oZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpKTtcclxuICAgIGlmIChkZWxldGVkICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBkZWxldGVkPy5bMF0/LnVzZXJfaWQ7XHJcbiAgICAgIHJldHVybiByZWRpcmVjdCh1c2VyID8gYC9sb2NhdGlvbnM/dXNlcj0ke3VzZXJ9YCA6IFwiL1wiKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25Sb3V0ZSgpIHtcclxuICBjb25zdCB7IGxvY2F0aW9uSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IFt3b3Jrb3V0c1BlckxvY2F0aW9uLCBnZXROYW1lRnJvbUlkXSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IFtzaG93SW5wdXQsIHNldFNob3dJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlbmFtZUlucHV0LCBzZXRSZW5hbWVJbnB1dF0gPSB1c2VTdGF0ZShcclxuICAgIHN0YXJ0Q2FzZShnZXROYW1lRnJvbUlkW1wiXCIgKyBsb2NhdGlvbklkXSA/PyBudWxsKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMyBjb250YWluZXIgYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy01IG1iLTFcIj5cclxuICAgICAgICAgIHtzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpPntnZXROYW1lRnJvbUlkW2xvY2F0aW9uSWRdfTwvaT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgIE51bWJlciBvZiB3b3Jrb3V0czoge3dvcmtvdXRzUGVyTG9jYXRpb25bXCJcIiArIGxvY2F0aW9uSWRdID8/IDB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTJcIiAvPlxyXG4gICAgICAgIHtzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZW5hbWVJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlbmFtZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkLCBsb2NhdGlvbk5hbWU6IHJlbmFtZUlucHV0IH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93SW5wdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshc2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBsZXZlbC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dJbnB1dCgocHJldikgPT4gIXByZXYpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVuYW1lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgeyF3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICB7IGxvY2F0aW9uSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25zKHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V29ya291dHNQZXJMb2NhdGlvbih1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfcGVyX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhdGlvbihsb2NhdGlvbklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGxvY2F0aW9uSWQgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVMb2NhdGlvbihsb2NhdGlvbklkLCBsb2NhdGlvbk5hbWUpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLnVwZGF0ZSh7IG5hbWU6IGxvY2F0aW9uTmFtZSB9KVxyXG4gICAgLm1hdGNoKHsgaWQ6IGxvY2F0aW9uSWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRMb2NhdGlvbihsb2NhdGlvbk5hbWUsIHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuaW5zZXJ0KHsgbmFtZTogbG9jYXRpb25OYW1lLCB1c2VyX2lkOiB1c2VySWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmxldCBzdXBhYmFzZTtcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX1VSTDtcclxuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NVUEFCQVNFX0FOT05fS0VZO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwuc3VwYWJhc2UpIHtcclxuICAgIGdsb2JhbC5zdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxuICB9XHJcbiAgc3VwYWJhc2UgPSBnbG9iYWwuc3VwYWJhc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xyXG4iLCAiaW1wb3J0IHsgTGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWFzdXJlbWVudFJvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL21lYXN1cmVtZW50c1wiKSB7XHJcbiAgICAgIG5hdmlnYXRlKGAvbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke3VzZXJJZH0mbWVhc3VyZW1lbnRfaWQ9MWApO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHVzZXJJZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMiBtdC01XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+Qm9keSBNZWFzdXJlbWVudHM8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbWVhc3VyZW1lbnRzL2hpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL21lYXN1cmVtZW50cy9oaXN0b3J5P3VzZXI9JHt1c2VySWR9Jm1lYXN1cmVtZW50X2lkPTFgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVjb3Jkc1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL21lYXN1cmVtZW50cy9hZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tZWFzdXJlbWVudHMvYWRkP3VzZXI9JHt1c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nIE1lYXN1cmVtZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckF1dGhvcmlzZWRDb21wb25lbnQocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAocmVzdWx0KSA9PiB7XHJcbiAgICByZXN1bHQgPyBzZXRVc2VyKHJlc3VsdCkgOiBzZXRVc2VyKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgICAgbmF2aWdhdGUoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgbGV0IF8gPSBwcm9wcy5zZXRVc2VyID8gcHJvcHMuc2V0VXNlcih1c2VyKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICAgaWYgKHByb3BzLmlkUHJlZGljYXRlICYmICFwcm9wcy5pZFByZWRpY2F0ZSh1aWQpKSB7XHJcbiAgICAgICAgbmF2aWdhdGUoXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgXyA9IHByb3BzLnNldFVzZXJJZCA/IHByb3BzLnNldFVzZXJJZCh1aWQpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8Pntwcm9wcy5jaGlsZHJlbn08Lz47XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgTGluayxcclxuICBPdXRsZXQsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VMb2NhdGlvbixcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbiAgdXNlU3VibWl0LFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgTWVhc3VyZW1lbnRQcm9ncmVzcyBmcm9tIFwifi9jb21wb25lbnRzL01lYXN1cmVtZW50UHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRNZWFzdXJlbWVudFR5cGVzLFxyXG4gIGdldE1lYXN1cmVtZW50SGlzdG9yeSxcclxufSBmcm9tIFwifi9zZXJ2aWNlL21lYXN1cmVtZW50c1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBtZXRyaWNzID0gYXdhaXQgZ2V0TWVhc3VyZW1lbnRUeXBlcygpO1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgbWVhc3VyZW1lbnRJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibWVhc3VyZW1lbnRfaWRcIik7XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBnZXRNZWFzdXJlbWVudEhpc3RvcnkobWVhc3VyZW1lbnRJZCwgdXNlcik7XHJcbiAgcmV0dXJuIFttZXRyaWNzLCBoaXN0b3J5LnNvcnQoKGEsIGIpID0+IC1kYXlqcyhhLmRhdGUpICsgZGF5anMoYi5kYXRlKSldO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVhc3VyZW1lbnRIaXN0b3J5Um91dGUoKSB7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgW21ldHJpY3MsIGhpc3RvcnldID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50SWQgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwibWVhc3VyZW1lbnRfaWRcIik7XHJcbiAgY29uc3QgbWV0cmljTmFtZSA9IHN0YXJ0Q2FzZShcclxuICAgIG1ldHJpY3MuZmlsdGVyKFxyXG4gICAgICAoZSkgPT4gZS5pZCA9PT0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLmdldChcIm1lYXN1cmVtZW50X2lkXCIpKVxyXG4gICAgKT8uWzBdPy5tZWFzdXJlbWVudFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWFzdXJlbWVudF9pZFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoUGFyYW1zLmdldChcIm1lYXN1cmVtZW50X2lkXCIpID8/IDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlbWVudF9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21ldHJpY3MubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT5cclxuICAgICAgICAgICAgICAgIHtzdGFydENhc2UoZVtcIm1lYXN1cmVtZW50XCJdKX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAge2hpc3RvcnkubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5ObyBNZWFzdXJlbWVudHM8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxNZWFzdXJlbWVudFByb2dyZXNzIGhpc3Rvcnk9e2hpc3Rvcnl9IG5hbWU9e21ldHJpY05hbWV9IC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0XCIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge2hpc3RvcnkubWFwKChoKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgbS0xIGJveFwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2guaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLWxpZ2h0IG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF5anMoaC5kYXRlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLWxpZ2h0IGlzLW1lZGl1bVwiPntoLnZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgdG89e2AvbWVhc3VyZW1lbnRzL2hpc3RvcnkvZWRpdD91c2VyPSR7dXNlcklkfSZtZWFzdXJlbWVudF9pZD0ke21lYXN1cmVtZW50SWR9JmlkPSR7aC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcblxyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50UHJvZ3Jlc3MocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgY2hyb25vbG9naWNhbFByb2dyZXNzID0gc29ydEJ5KHByb3BzLmhpc3RvcnksIChlKSA9PiBkYXlqcyhlLmRhdGUpKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNvbG9yID0gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgIH0sMC4zKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZWFzdXJlbWVudFByb2dyZXNzXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwibWVhc3VyZW1lbnRQcm9ncmVzc1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lYXN1cmVtZW50Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBjaHJvbm9sb2dpY2FsUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZS5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgZGF0YTogY2hyb25vbG9naWNhbFByb2dyZXNzLm1hcCgoZSkgPT4gZS52YWx1ZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczoge30sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG1lYXN1cmVtZW50Q2hhcnQuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIm1lYXN1cmVtZW50UHJvZ3Jlc3NcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50VHlwZXMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIm1lYXN1cmVtZW50c1wiKS5zZWxlY3QoXCIqXCIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lYXN1cmVtZW50KG1lYXN1cmVtZW50X2lkLCB2YWx1ZSwgdXNlciwgZGF0ZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ1c2VyX21lYXN1cmVtZW50XCIpLmluc2VydCh7XHJcbiAgICBtZWFzdXJlbWVudDogbWVhc3VyZW1lbnRfaWQsXHJcbiAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB1c2VyX2lkOiB1c2VyLFxyXG4gICAgZGF0ZTogZGF0ZSxcclxuICB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50SGlzdG9yeShtZWFzdXJlbWVudF9pZCwgdXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpXHJcbiAgICAuZXEoXCJtZWFzdXJlbWVudFwiLCBtZWFzdXJlbWVudF9pZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZWFzdXJlbWVudEZyb21JZChpZCwgdXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpXHJcbiAgICAuZXEoXCJpZFwiLCBpZCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdE1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50LCBuZXdNZWFzdXJlbWVudCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInVzZXJfbWVhc3VyZW1lbnRcIilcclxuICAgIC51cGRhdGUobmV3TWVhc3VyZW1lbnQpXHJcbiAgICAubWF0Y2gob2xkTWVhc3VyZW1lbnQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1lYXN1cmVtZW50KG9sZE1lYXN1cmVtZW50KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwidXNlcl9tZWFzdXJlbWVudFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2gob2xkTWVhc3VyZW1lbnQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBMaW5rLFxyXG4gIHJlZGlyZWN0LFxyXG4gIHVzZUZldGNoZXIsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0TWVhc3VyZW1lbnRGcm9tSWQsXHJcbiAgZWRpdE1lYXN1cmVtZW50LFxyXG4gIGRlbGV0ZU1lYXN1cmVtZW50LFxyXG59IGZyb20gXCJ+L3NlcnZpY2UvbWVhc3VyZW1lbnRzLmpzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCBpZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBtZWFzdXJlbWVudCA9IGdldE1lYXN1cmVtZW50RnJvbUlkKGlkLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIG1lYXN1cmVtZW50O1xyXG59O1xyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3Qgb2xkTWVhc3VyZW1lbnQgPSBKU09OLnBhcnNlKGZvcm0uZ2V0KFwib2xkTWVhc3VyZW1lbnRcIikpO1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50SWQgPSBvbGRNZWFzdXJlbWVudC5tZWFzdXJlbWVudDtcclxuICBjb25zdCB1c2VyID0gb2xkTWVhc3VyZW1lbnQudXNlcl9pZDtcclxuXHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBhd2FpdCBkZWxldGVNZWFzdXJlbWVudChvbGRNZWFzdXJlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG5ld01lYXN1cmVtZW50ID0ge1xyXG4gICAgICAuLi5vbGRNZWFzdXJlbWVudCxcclxuICAgICAgdmFsdWU6IGZvcm0uZ2V0KFwibWVhc3VyZW1lbnRWYWx1ZVwiKSxcclxuICAgICAgZGF0ZTogZm9ybS5nZXQoXCJkYXRlXCIpLFxyXG4gICAgfTtcclxuICAgIGF3YWl0IGVkaXRNZWFzdXJlbWVudChvbGRNZWFzdXJlbWVudCwgbmV3TWVhc3VyZW1lbnQpO1xyXG4gIH1cclxuICByZXR1cm4gcmVkaXJlY3QoXHJcbiAgICBgL21lYXN1cmVtZW50cy9oaXN0b3J5P3VzZXI9JHt1c2VyfSZtZWFzdXJlbWVudF9pZD0ke21lYXN1cmVtZW50SWR9YFxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRNZWFzdXJlbWVudFJvdXRlKCkge1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgW21lYXN1cmVtZW50VmFsdWUsIHNldE1lYXN1cmVtZW50VmFsdWVdID0gdXNlU3RhdGUoXHJcbiAgICBtZWFzdXJlbWVudFswXS52YWx1ZVxyXG4gICk7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobWVhc3VyZW1lbnRbMF0uZGF0ZSk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyIFwiPlxyXG4gICAgICAgICAgRWRpdCBSZWNvcmRcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRvPXtgL21lYXN1cmVtZW50cy9oaXN0b3J5P3VzZXI9JHtzZWFyY2hQYXJhbXMuZ2V0QWxsKFxyXG4gICAgICAgICAgICAgIFwidXNlclwiXHJcbiAgICAgICAgICAgICl9Jm1lYXN1cmVtZW50X2lkPSR7c2VhcmNoUGFyYW1zLmdldEFsbChcIm1lYXN1cmVtZW50X2lkXCIpfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIiBhcmlhLWxhYmVsPVwiZGVsZXRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGI+VmFsdWU8L2I+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IG1iLTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZWFzdXJlbWVudFZhbHVlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVhc3VyZW1lbnRWYWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lYXN1cmVtZW50VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Yj5EYXRlPC9iPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IG1iLTVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1yLTEgaXMtbGlnaHQgaXMtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRNZWFzdXJlbWVudDogSlNPTi5zdHJpbmdpZnkobWVhc3VyZW1lbnRbMF0pLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50VmFsdWU6IG1lYXN1cmVtZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBtci0xIGlzLWxpZ2h0IGlzLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgb2xkTWVhc3VyZW1lbnQ6IEpTT04uc3RyaW5naWZ5KG1lYXN1cmVtZW50WzBdKSB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0LCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRNZWFzdXJlbWVudFR5cGVzLCBhZGRNZWFzdXJlbWVudCB9IGZyb20gXCJ+L3NlcnZpY2UvbWVhc3VyZW1lbnRzLmpzXCI7XHJcblxyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHlwZWFoZWFkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWRcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudERhdGVUaW1lIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBtZXRyaWNzID0gYXdhaXQgZ2V0TWVhc3VyZW1lbnRUeXBlcygpO1xyXG4gIHJldHVybiBtZXRyaWNzO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGF3YWl0IGFkZE1lYXN1cmVtZW50KFxyXG4gICAgZm9ybS5nZXQoXCJtZXRyaWNcIiksXHJcbiAgICBmb3JtLmdldChcInZhbHVlXCIpLFxyXG4gICAgZm9ybS5nZXQoXCJ1c2VyXCIpLFxyXG4gICAgZm9ybS5nZXQoXCJkYXRlXCIpXHJcbiAgKTtcclxuICByZXR1cm4gcmVkaXJlY3QoXHJcbiAgICBgbWVhc3VyZW1lbnRzL2hpc3Rvcnk/dXNlcj0ke2Zvcm0uZ2V0KFwidXNlclwiKX0mbWVhc3VyZW1lbnRfaWQ9JHtmb3JtLmdldChcclxuICAgICAgXCJtZXRyaWNcIlxyXG4gICAgKX1gXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZE1lYXN1cmVtZW50Um91dGUoKSB7XHJcbiAgY29uc3QgbWV0cmljcyA9IHVzZUxvYWRlckRhdGEoKS5tYXAoKG0pID0+ICh7XHJcbiAgICAuLi5tLFxyXG4gICAgbWVhc3VyZW1lbnRfbGFiZWw6IHN0YXJ0Q2FzZShtLm1lYXN1cmVtZW50KSxcclxuICB9KSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTWV0cmljLCBzZXRTZWxlY3RlZE1ldHJpY10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZ2V0Q3VycmVudERhdGVUaW1lKCkpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgc3VibWl0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIG1ldHJpYzogc2VsZWN0ZWRNZXRyaWM/LlswXT8uaWQsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk1ldHJpYzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBlYWhlYWRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1ldHJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9e1wibWVhc3VyZW1lbnRfbGFiZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG0pID0+IHNldFNlbGVjdGVkTWV0cmljKG0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e21ldHJpY3N9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgTWVhc3VyZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+VmFsdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ldHJpY1ZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGV0aW1lTG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZyB8ICEodmFsdWUgJiYgc2VsZWN0ZWRNZXRyaWMgJiYgZGF0ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgTWVhc3VyZW1lbnRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBwYWRTdGFydCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlT2ZJU09XZWVrKHcsIHkpIHtcclxuICB2YXIgc2ltcGxlID0gbmV3IERhdGUoeSwgMCwgMSArICh3IC0gMSkgKiA3KTtcclxuICB2YXIgZG93ID0gc2ltcGxlLmdldERheSgpO1xyXG4gIHZhciBJU093ZWVrU3RhcnQgPSBzaW1wbGU7XHJcbiAgaWYgKGRvdyA8PSA0KSBJU093ZWVrU3RhcnQuc2V0RGF0ZShzaW1wbGUuZ2V0RGF0ZSgpIC0gc2ltcGxlLmdldERheSgpICsgMSk7XHJcbiAgZWxzZSBJU093ZWVrU3RhcnQuc2V0RGF0ZShzaW1wbGUuZ2V0RGF0ZSgpICsgOCAtIHNpbXBsZS5nZXREYXkoKSk7XHJcbiAgcmV0dXJuIElTT3dlZWtTdGFydDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtOdW1iZXIoZGF0ZSkge1xyXG4gIHZhciBkID0gbmV3IERhdGUoXHJcbiAgICBEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpXHJcbiAgKTtcclxuICB2YXIgZGF5TnVtID0gZC5nZXRVVENEYXkoKSB8fCA3O1xyXG4gIGQuc2V0VVRDRGF0ZShkLmdldFVUQ0RhdGUoKSArIDQgLSBkYXlOdW0pO1xyXG4gIHZhciB5ZWFyU3RhcnQgPSBuZXcgRGF0ZShEYXRlLlVUQyhkLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcclxuICByZXR1cm4gTWF0aC5jZWlsKCgoZCAtIHllYXJTdGFydCkgLyA4NjQwMDAwMCArIDEpIC8gNyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50RGF0ZVRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgdmFyIG1vbnRoID0gcGFkU3RhcnQoZGF0ZS5nZXRNb250aCgpICsgMSwgMiwgMCk7XHJcbiAgdmFyIGRheSA9IHBhZFN0YXJ0KGRhdGUuZ2V0RGF0ZSgpLCAyLCAwKTtcclxuICB2YXIgaHIgPSBwYWRTdGFydChkYXRlLmdldEhvdXJzKCksIDIsIDApO1xyXG4gIHZhciBtaW4gPSBwYWRTdGFydChkYXRlLmdldE1pbnV0ZXMoKSwgMiwgMCk7XHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fVQke2hyfToke21pbn1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyYWRpZW50RnJvbVdvcmtvdXQgPSAoaWQsIGRhdGUpID0+IHtcclxuICBjb25zdCBpZFJHQiA9IGhleFRvUkdCKGAjJHtyYW5kb20oaWQpfWAsIDAuMyk7XHJcbiAgY29uc3QgZGF0ZVJHQiA9IGhleFRvUkdCKGAjJHtyYW5kb20oZGF0ZSl9YCwgMC41KTtcclxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAke2lkUkdCfSwgJHtkYXRlUkdCfSlgO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tID0gKHNlZWQpID0+IHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmFicyhNYXRoLnNpbihzZWVkKSAqIDE2Nzc3MjE1KSkudG9TdHJpbmcoMTYpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4LCBhbHBoYSkge1xyXG4gIHZhciByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksXHJcbiAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksXHJcbiAgICBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XHJcblxyXG4gIGlmIChhbHBoYSkge1xyXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiKVwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlIGEgZml4ZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gYW4gYXJyYXksIGV2ZW5seSBkaXN0cmlidXRlZCBidXRcclxuICogYWx3YXlzIGluY2x1ZGluZyB0aGUgZmlyc3QgYW5kIGxhc3QgZWxlbWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSAgIHtBcnJheX0gaXRlbXMgLSBUaGUgYXJyYXkgdG8gb3BlcmF0ZSBvbi5cclxuICogQHBhcmFtICAge251bWJlcn0gbiAtIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gZXh0cmFjdC5cclxuICogQHJldHVybnMge0FycmF5fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RyaWJ1dGVkQ29weShpdGVtcywgbikge1xyXG4gIGlmIChpdGVtcz8ubGVuZ3RoIDw9IG4pIHtcclxuICAgIHJldHVybiBpdGVtcztcclxuICB9XHJcbiAgdmFyIGVsZW1lbnRzID0gW2l0ZW1zWzBdXTtcclxuICB2YXIgdG90YWxJdGVtcyA9IGl0ZW1zLmxlbmd0aCAtIDI7XHJcbiAgdmFyIGludGVydmFsID0gTWF0aC5mbG9vcih0b3RhbEl0ZW1zIC8gKG4gLSAyKSk7XHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XHJcbiAgICBlbGVtZW50cy5wdXNoKGl0ZW1zW2kgKiBpbnRlcnZhbF0pO1xyXG4gIH1cclxuICBlbGVtZW50cy5wdXNoKGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdKTtcclxuICByZXR1cm4gZWxlbWVudHM7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFdlZWtOdW1iZXIgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljc1JvdXRlKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgW21pbmltaXNlZCwgc2V0TWluaW1pc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB1c2VyID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgd2Vla1llYXIgPSBgJHtkYXlqcygpLnllYXIoKX0tVyR7Z2V0V2Vla051bWJlcihkYXRlKX1gO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9cIikge1xyXG4gICAgICBuYXZpZ2F0ZShgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWtZZWFyfWApO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHVzZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjggfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG10LTUgbWItM1wiPkFuYWx5dGljczwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21pbmltaXNlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPkVmZm9ydCBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFpbmVkIHRoaXMgV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlaz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXb3Jrb3V0cyBwZXIgV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3NjaGVkdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc2NoZWR1bGU/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zdGF0aXN0aWNzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRpc3RpY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlN0cmVuZ3RoIFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZD91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc2l2ZSBPdmVybG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJzb25hbCBCZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1mdWxsd2lkdGggaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWluaW1pc2VkKChlKSA9PiAhZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21pbmltaXNlZCA/IFwiTWluaW1pc2UgTWVudVwiIDogXCJTaG93IEZ1bGwgTWVudVwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvYW5hbHl0aWNzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lciBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEV4ZXJjaXNlc0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVN1Ym1pdCwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgc29ydEJ5LCBsb3dlckNhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQcm9ncmVzc2l2ZU92ZXJsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlT3ZlcmxvYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGxldCBleGVyY2lzZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZXhlcmNpc2VfaWRcIikgPz8gZXhlcmNpc2VzWzBdPy5pZDtcclxuICBjb25zdCB2b2xTZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyLCBleGVyY2lzZSk7XHJcbiAgY29uc3Qgd2VpZ2h0U2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlciwgZXhlcmNpc2UsIHRydWUpO1xyXG5cclxuICAvLyBjb25zdCBzZXRzQnlFeGVyY2lzZSA9IGdyb3VwQnkodm9sU2V0cywgKHMpID0+IHMuZXhlcmNpc2VfaWQpW2V4ZXJjaXNlXTtcclxuICBjb25zdCBzZXRzQnlFeGVyY2lzZSA9IE9iamVjdC52YWx1ZXMoXHJcbiAgICBncm91cEJ5KFsuLi52b2xTZXRzLCAuLi53ZWlnaHRTZXRzXSwgKHMpID0+IFtzLndvcmtvdXRfaWRdKVxyXG4gICk7XHJcbiAgcmV0dXJuIHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NSb3V0ZSgpIHtcclxuICBjb25zdCB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHNpbmdsZUV4ZXJjaXNlQ2hhcnQgPSBzZXRzQnlFeGVyY2lzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Qcm9ncmVzc2l2ZSBPdmVybG9hZDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG1iLTQgXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJleGVyY2lzZV9pZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZV9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c29ydEJ5KGV4ZXJjaXNlcywgKGV4KSA9PiBsb3dlckNhc2UoZXgubmFtZSkpLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZS5pZH0gdmFsdWU9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtzdGFydENhc2UoZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGU/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGUudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCA/IChcclxuICAgICAgICAgIDxQcm9ncmVzc2l2ZU92ZXJsb2FkIHByb2dyZXNzaXZlT3ZlcmxvYWQ9e3NpbmdsZUV4ZXJjaXNlQ2hhcnR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiTm90aGluZyB0cmFpbmVkIHlldFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKSB7XHJcbiAgaWYgKG11c2NsZV9ncm91cCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJleGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJtdXNjbGVfZ3JvdXBcIiwgbXVzY2xlX2dyb3VwKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZXhlcmNpc2VcIikuc2VsZWN0KFwiKlwiKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUdyb3VwcygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJkaXN0aW5jdF9tdXNjbGVfZ3JvdXBzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLm9yZGVyKFwibmFtZVwiKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZXhlcmNpc2VzX2Zvcl91c2VyXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeVN0YXRzRm9yRXhlcmNpc2UodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGFzdF93b3Jrb3V0X3dpdGhfZXhlcmNpc2VcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2V0KGZvcm1TZXQpIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbiAgLy8gY2xlYW4gdXBcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJlbXB0eV93b3Jrb3V0X2V4ZXJjaXNlc1wiKS5zZWxlY3QoXCIqXCIpO1xyXG4gIGNvbnN0IGlkcyA9IGRhdGEubWFwKCh3b3Jrb3V0X2V4ZXJjaXNlKSA9PiB3b3Jrb3V0X2V4ZXJjaXNlLmlkKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKS5kZWxldGUoKS5pbihcImlkXCIsIGlkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRTZXQoZm9ybVNldCkge1xyXG4gIGNvbnN0IGFkZCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogZm9ybVNldC5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZD8uZGF0YT8uWzBdO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXQoZm9ybVNldCkge1xyXG4gIGxldCBzdWJtaXNzaW9uU2V0ID0ge1xyXG4gICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdlaWdodEZvclNldCA9IGZvcm1TZXQuZ2V0KFwid2VpZ2h0XCIpO1xyXG4gIGNvbnN0IHJlcHNGb3JTZXQgPSBmb3JtU2V0LmdldChcInJlcGV0aXRpb25zXCIpO1xyXG4gIGNvbnN0IGNvbXBsZXRlZEZvclNldCA9IGZvcm1TZXQuZ2V0KFwiY29tcGxldGVkXCIpO1xyXG5cclxuICBpZiAod2VpZ2h0Rm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LndlaWdodCA9IHBhcnNlRmxvYXQod2VpZ2h0Rm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKHJlcHNGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQucmVwZXRpdGlvbnMgPSBwYXJzZUZsb2F0KHJlcHNGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAoY29tcGxldGVkRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZEZvclNldCA9PT0gXCJ0cnVlXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAudXBkYXRlKHN1Ym1pc3Npb25TZXQpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4vL2RlZmF1bHQgZmlsdGVycyBmb3IgbGF0ZXN0IHdlZWtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNldHNGb3JVc2VyKHVzZXJJZCwgZmlsdGVyX3N0YXJ0LCBmaWx0ZXJfZW5kKSB7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfc3RhcnQgPSBmaWx0ZXJfc3RhcnRcclxuICAgID8gZGF5anMoZmlsdGVyX3N0YXJ0KVxyXG4gICAgOiBkYXlqcyhkYXlqcygpLndlZWsoZGF5anMoKS53ZWVrKCkpLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpO1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX2VuZCA9IGZpbHRlcl9lbmQgPyBkYXlqcyhmaWx0ZXJfZW5kKSA6IGRheWpzKCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAuZ3RlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfc3RhcnQpXHJcbiAgICAubHRlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfZW5kKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKFxyXG4gIHVzZXJJZCxcclxuICBleGVyY2lzZUlkLFxyXG4gIHVzZV9tYXhfd2VpZ2h0XHJcbikge1xyXG4gIGNvbnN0IHZpZXcgPSB1c2VfbWF4X3dlaWdodFxyXG4gICAgPyBcIm1heF93ZWlnaHRfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIlxyXG4gICAgOiBcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIjtcclxuICBpZiAoZXhlcmNpc2VJZCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSh2aWV3KVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSh2aWV3KVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMaWZldGltZVN0YXRpc3RpY3ModXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsaWZldGltZV9zdGF0c1wiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZGlzdHJpYnV0ZWRDb3B5IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcbkNoYXJ0LnJlZ2lzdGVyKFtUb29sdGlwXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc2l2ZU92ZXJsb2FkKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlUHJvZ3Jlc3MgPSBkaXN0cmlidXRlZENvcHkoXHJcbiAgICBzb3J0QnkocHJvcHMucHJvZ3Jlc3NpdmVPdmVybG9hZCwgKGUpID0+IGUuZGF0ZXRpbWVfc3RhcnQpLFxyXG4gICAgMTBcclxuICApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY29sb3IxID0gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgIH0sMC4zKWA7XHJcbiAgICBsZXQgY29sb3IyID0gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgIH0sMC4zKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZVswXS5kYXRldGltZV9zdGFydCkuZm9ybWF0KFwiREQvTU0vWVlcIilcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlZvbHVtZSBQcm9ncmVzcyAoV2VpZ2h0IHggUmVwcylcIixcclxuICAgICAgICAgICAgZGF0YTogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+IGVbMF0ubWF4X3ZvbHVtZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuMyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yMSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcjEsXHJcbiAgICAgICAgICAgIHlBeGlzSUQ6IFwieV9sZWZ0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJXZWlnaHQgUHJvZ3Jlc3MgKEhlYXZpZXN0IFNldClcIixcclxuICAgICAgICAgICAgZGF0YTogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+IGVbMV0ud2VpZ2h0KSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IyLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yMixcclxuICAgICAgICAgICAgeUF4aXNJRDogXCJ5X3JpZ2h0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGNvbnRleHQuZGF0YUluZGV4O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzZXRJbmRleCA9IGNvbnRleHQuZGF0YXNldEluZGV4O1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZGF0YXNldEluZGV4ID4gMCA/IFwiTWF4IFdlaWdodFwiIDogXCJNYXggVm9sXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7bGFiZWx9OiBWb2x1bWU6ICR7XHJcbiAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XVtkYXRhc2V0SW5kZXhdLnJlcGV0aXRpb25zICpcclxuICAgICAgICAgICAgICAgICAgZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdW2RhdGFzZXRJbmRleF0ud2VpZ2h0XHJcbiAgICAgICAgICAgICAgICB9IHwgV2VpZ2h0OiAke1xyXG4gICAgICAgICAgICAgICAgICBleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF1bZGF0YXNldEluZGV4XS53ZWlnaHRcclxuICAgICAgICAgICAgICAgIH0gfCBSZXBzOiAke1xyXG4gICAgICAgICAgICAgICAgICBleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF1bZGF0YXNldEluZGV4XS5yZXBldGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHlfbGVmdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeV9yaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiLFxyXG5cclxuICAgICAgICAgICAgLy8gZ3JpZCBsaW5lIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICBkcmF3T25DaGFydEFyZWE6IGZhbHNlLCAvLyBvbmx5IHdhbnQgdGhlIGdyaWQgbGluZXMgZm9yIG9uZSBheGlzIHRvIHNob3cgdXBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgbG9kYXNoIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFdlZWtseVRyYWluaW5nU2V0cyBmcm9tIFwifi9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0c1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlT2ZJU09XZWVrIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG52YXIgY3VzdG9tUGFyc2VGb3JtYXQgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0XCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge307XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgeWVhcldlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpO1xyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgbmV3IERhdGUoXHJcbiAgICAgIHdlZWtTdGFydGluZ09uRGF5LnNldERhdGUod2Vla1N0YXJ0aW5nT25EYXkuZ2V0RGF0ZSgpICsgNylcclxuICAgICkudG9EYXRlU3RyaW5nKClcclxuICApO1xyXG5cclxuICByZXR1cm4gbG9kYXNoKHVzZXJXb3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGlzV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdlZWtseVNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB5ZWFyV2VlayA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCByZW5kZXJUcmFpbmVkVGhpc1dlZWsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+VHJhaW5lZCB0aGlzIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgd2Vla1N0YXJ0aW5nT25EYXkuc2V0RGF0ZSh3ZWVrU3RhcnRpbmdPbkRheS5nZXREYXRlKCkgKyA2KVxyXG4gICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTJcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyV2Vla31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWs6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh3ZWVrbHlTZXRzKS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPk5vIFdvcmtvdXRzPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxXZWVrbHlUcmFpbmluZ1NldHMgd2Vla2x5U2V0cz17d2Vla2x5U2V0c30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDw+e3JlbmRlclRyYWluZWRUaGlzV2VlaygpfTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5VHJhaW5pbmdTZXRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHNldHMgPSBwcm9wcy53ZWVrbHlTZXRzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3ZWVrbHlTZXRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrbHlTZXRzXCIpKTtcclxuICAgIGNvbnN0IHdlZWtseVNldHNDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHNldHMpLm1hcCgoZSkgPT4gc3RhcnRDYXNlKGUpKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIG9mIFNldHNcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHNldHMpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE9iamVjdC52YWx1ZXMoc2V0cykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICAgICAgICAgICAgIH0sMC40KWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2Vla2x5U2V0c0NoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJ3ZWVrbHlTZXRzXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyB0cmFuc2Zvcm0sIHBpY2sgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFdvcmtvdXRQZXJXZWVrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vla1wiO1xyXG5pbXBvcnQgeyBnZXRXZWVrTnVtYmVyIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgd29ya291dHMgPSBsb2Rhc2god29ya291dHMpXHJcbiAgICAuZ3JvdXBCeShcclxuICAgICAgKHcpID0+XHJcbiAgICAgICAgYCR7ZGF5anMody5kYXRldGltZV9zdGFydCkueWVhcigpfSBXZWVrICR7U3RyaW5nKFxyXG4gICAgICAgICAgZ2V0V2Vla051bWJlcihuZXcgRGF0ZSh3LmRhdGV0aW1lX3N0YXJ0KSlcclxuICAgICAgICApLnBhZFN0YXJ0KDIsIFwiMFwiKX1gXHJcbiAgICApXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICBsZXQgd2Vla3NUb1Nob3cgPSBPYmplY3Qua2V5cyh3b3Jrb3V0cyk7XHJcbiAgd2Vla3NUb1Nob3cuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xyXG4gIHdlZWtzVG9TaG93ID0gd2Vla3NUb1Nob3cuc2xpY2UoMCwgMTApLm1hcChTdHJpbmcpO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtKHBpY2sod29ya291dHMsIHdlZWtzVG9TaG93KSwgKHJlcywgdmFsLCBrZXkpID0+IHtcclxuICAgIHJlc1trZXldID0gdmFsO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrUm91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+V29ya291dHMgcGVyIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8V29ya291dFBlcldlZWsgd29ya291dHNQZXJXZWVrPXt3b3Jrb3V0c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdvcmtvdXQod29ya291dCkge1xyXG4gIGxldCBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCJpZFwiKVxyXG4gICAgLm1hdGNoKHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcblxyXG4gIGxldCBsb2NhdGlvbklkO1xyXG4gIGlmIChjaGVja0xvY2F0aW9uLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgICAuaW5zZXJ0KHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcbiAgfVxyXG4gIGxvY2F0aW9uSWQgPSBjaGVja0xvY2F0aW9uLmRhdGE/LlswXS5pZDtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiB3b3Jrb3V0Lm5hbWUsXHJcbiAgICAgIGRhdGV0aW1lX3N0YXJ0OiB3b3Jrb3V0LmRhdGV0aW1lLFxyXG4gICAgICBkYXRldGltZV9lbmQ6IHVuZGVmaW5lZCxcclxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uSWQsXHJcbiAgICAgIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkLFxyXG4gICAgfSxcclxuICBdKTtcclxuICByZXR1cm4gZGF0YVswXS5pZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdvcmtvdXQod29ya291dF9pZCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGNvbnN0IGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMgPVxyXG4gICAgXCIoXCIgKyB3b3Jrb3V0LmRhdGEubWFwKChlKSA9PiBlLndvcmtvdXRfZXhlcmNpc2VfaWQpLnRvU3RyaW5nKCkgKyBcIilcIjtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5maWx0ZXIoXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIsIFwiaW5cIiwgYXNzb2NpYXRlZF93b3Jrb3V0X2V4ZXJjaXNlcyk7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgY29uc3QgX2RlbGV0ZVdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiB3b3Jrb3V0X2lkIH0pO1xyXG5cclxuICByZXR1cm4gX2RlbGV0ZVdvcmtvdXQuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhOiB3b3Jrb3V0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yV29ya291dChpZCkge1xyXG4gIGxldCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwid29ya291dF9pZFwiLCBpZClcclxuICAgIC5vcmRlcihcInNldF9pZFwiKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KGlkLCBkYXRldGltZSkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLnVwZGF0ZSh7IGRhdGV0aW1lX2VuZDogZGF0ZXRpbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBpZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzRm9yVXNlcih1c2VySWQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAgIC5ndGUoXCJkYXRldGltZV9zdGFydFwiLCBkYXlqcyhzdGFydERhdGUpKVxyXG4gICAgICAubHRlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZGF5anMoZW5kRGF0ZSkpO1xyXG5cclxuICAgIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgICByZXR1cm4gd29ya291dHMuc29ydChcclxuICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZXRpbWVfc3RhcnQpIC0gbmV3IERhdGUoYS5kYXRldGltZV9zdGFydClcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICAgIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgICByZXR1cm4gd29ya291dHMuc29ydChcclxuICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZXRpbWVfc3RhcnQpIC0gbmV3IERhdGUoYS5kYXRldGltZV9zdGFydClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0KHsgd29ya291dF9pZCwgZXhlcmNpc2VfaWQgfSkge1xyXG4gIGNvbnN0IHdvcmtvdXRFeGVyY2lzZSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5zZWxlY3QoXCIqLCBleGVyY2lzZSFpbm5lcigqKVwiKVxyXG4gICAgLmVxKFwiZXhlcmNpc2VcIiwgZXhlcmNpc2VfaWQpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0XCIsIHdvcmtvdXRfaWQpO1xyXG5cclxuICBpZiAod29ya291dEV4ZXJjaXNlPy5kYXRhKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRFeGVyY2lzZSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5pbnNlcnQoW3sgZXhlcmNpc2U6IGV4ZXJjaXNlX2lkLCB3b3Jrb3V0OiB3b3Jrb3V0X2lkIH1dKTtcclxuXHJcbiAgY29uc3QgYWRkU2V0ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInNldFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlOiBhZGRFeGVyY2lzZT8uZGF0YT8uWzBdPy5pZCxcclxuICAgICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBhZGRTZXQ/LmRhdGE/LlswXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSkge1xyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyB3b3Jrb3V0X2V4ZXJjaXNlOiBmb3JtLmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIikgfSk7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuICByZXR1cm47XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRzUGVyV2Vlayhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwid29ya291dHNQZXJXZWVrXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMud29ya291dHNQZXJXZWVrKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya291dHNQZXJXZWVrXCIpKTtcclxuICAgIGNvbnN0IHdvcmtvdXRzUGVyV2Vla0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIiMgV29ya291dHMgcGVyIFdlZWtcIixcclxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke1xyXG4gICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgICB9LDAuMylgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmRleEF4aXM6IFwieVwiLFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOiA0IC8gT2JqZWN0LmtleXMocHJvcHMud29ya291dHNQZXJXZWVrKS5sZW5ndGgsXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJ3b3Jrb3V0c1BlcldlZWtcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IG1heCwgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlciwgbnVsbCwgdHJ1ZSk7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5zb3J0QnkoKHMpID0+IC1zLnJlcGV0aXRpb25zKVxyXG4gICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBtYXhCeShlLCAocykgPT4gcy53ZWlnaHQpKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIHJldHVybiBPYmplY3QudmFsdWVzKGJlc3RTZXRCeUV4ZXJjaXNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsQmVzdFJvdXRlKCkge1xyXG4gIGNvbnN0IGxpc3RCZXN0U2V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTFcIj5QZXJzb25hbCBCZXN0czwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIDxpPkhlYXZpZXN0IHNldCBvZiBtb3JlIHRoYW4gNiByZXBzPC9pPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtsaXN0QmVzdFNldHMubGVuZ3RoID8gKFxyXG4gICAgICAgIDxQZXJzb25hbEJlc3RzIGJlc3RTZXRzPXtsaXN0QmVzdFNldHN9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJObyB3b3Jrb3V0cyB5ZXRcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxSZWNvcmRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcInBlcnNvbmFsUmVjb3Jkc1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNvbmFsUmVjb3Jkc1wiKSk7XHJcbiAgICBjb25zdCBwckNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBwcm9wcy5iZXN0U2V0cy5tYXAoKHZhbHVlKSA9PlxyXG4gICAgICAgICAgc3RhcnRDYXNlKGAke3ZhbHVlLmV4ZXJjaXNlX25hbWV9ICR7dmFsdWUudmFyaWFudCA/PyBcIlwifWApXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJXZWlnaHRcIixcclxuICAgICAgICAgICAgZGF0YTogcHJvcHMuYmVzdFNldHMubWFwKCh2YWx1ZSkgPT4gdmFsdWUud2VpZ2h0KSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJlc3RTZXRzLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sICR7XHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgfSwwLjQpYDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmRleEF4aXM6IFwieVwiLFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOiA0IC8gcHJvcHMuYmVzdFNldHMubGVuZ3RoLFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBPYmplY3QudmFsdWVzKHByb3BzLmJlc3RTZXRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgIFdlaWdodDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHwgVm9sOiAke1xyXG4gICAgICAgICAgICAgICAgICBzZXRbZGF0YUluZGV4XS53ZWlnaHRcclxuICAgICAgICAgICAgICAgIH0geCAke3NldFtkYXRhSW5kZXhdLnJlcGV0aXRpb25zfSA9ICR7XHJcbiAgICAgICAgICAgICAgICAgIHNldFtkYXRhSW5kZXhdLndlaWdodCAqIHNldFtkYXRhSW5kZXhdLnJlcGV0aXRpb25zXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwckNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwZXJzb25hbFJlY29yZHNcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TGlmZXRpbWVTdGF0aXN0aWNzLCBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7XHJcbiAgc3RhcnRDYXNlLFxyXG4gIHJlZHVjZSxcclxuICBwaWNrLFxyXG4gIG9taXQsXHJcbiAgbG93ZXJDYXNlLFxyXG4gIHNvcnRCeSxcclxufSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0c1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHN0YXRzID0gYXdhaXQgZ2V0TGlmZXRpbWVTdGF0aXN0aWNzKHVzZXIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyKTtcclxuICBjb25zdCB0b3RhbFRpbWVTcGVudCA9IHdvcmtvdXRzXHJcbiAgICAubWFwKCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX2VuZCkuZGlmZih3LmRhdGV0aW1lX3N0YXJ0LCBcIm1pbnV0ZVwiKSlcclxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICByZXR1cm4gW1xyXG4gICAgc3RhdHMsXHJcbiAgICB0b3RhbFRpbWVTcGVudCxcclxuICAgIE1hdGgucm91bmQodG90YWxUaW1lU3BlbnQgLyB3b3Jrb3V0cy5sZW5ndGgpLFxyXG4gICAgd29ya291dHMubGVuZ3RoLFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0aXN0aWNzUm91dGUoKSB7XHJcbiAgY29uc3QgW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgYXZlcmFnZVRpbWVTcGVudCwgbnVtV29ya291dHNdID1cclxuICAgIHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBhYmJ2ID0ge1xyXG4gICAgQVc6IFwiQXZlcmFnZSBXZWlnaHRcIixcclxuICAgIEFSOiBcIkF2ZXJhZ2UgUmVwZXRpdGlvbnNcIixcclxuICAgIFJlcHM6IFwiVG90YWwgUmVwZXRpdGlvbnNcIixcclxuICAgIFZvbDogXCJUb3RhbCBWb2x1bWVcIixcclxuICAgIE51bTogXCJUb3RhbCBOdW1iZXIgb2YgU2V0c1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdE51bWJlciA9IChudW0sIGRpZ2l0cyA9IDIpID0+IHtcclxuICAgIGNvbnN0IGxvb2t1cCA9IFtcclxuICAgICAgeyB2YWx1ZTogMSwgc3ltYm9sOiBcIlwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMywgc3ltYm9sOiBcImtcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTYsIHN5bWJvbDogXCJNXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWU5LCBzeW1ib2w6IFwiR1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTIsIHN5bWJvbDogXCJUXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxNSwgc3ltYm9sOiBcIlBcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTE4LCBzeW1ib2w6IFwiRVwiIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcnggPSAvXFwuMCskfChcXC5bMC05XSpbMS05XSkwKyQvO1xyXG4gICAgdmFyIGl0ZW0gPSBsb29rdXBcclxuICAgICAgLnNsaWNlKClcclxuICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAuZmluZChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBudW0gPj0gaXRlbS52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gaXRlbVxyXG4gICAgICA/IChudW0gLyBpdGVtLnZhbHVlKS50b0ZpeGVkKGRpZ2l0cykucmVwbGFjZShyeCwgXCIkMVwiKSArIGl0ZW0uc3ltYm9sXHJcbiAgICAgIDogXCIwXCI7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHdvcmtvdXRzVGFibGUgPSBzb3J0Qnkoc3RhdHMsIChzKSA9PiBsb3dlckNhc2Uocy5uYW1lKSkubWFwKCh3KSA9PiAoe1xyXG4gICAgRXhlcmNpc2U6IGAke3N0YXJ0Q2FzZSh3Lm5hbWUpfSAke1xyXG4gICAgICB3Py52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZSh3LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgfWAsXHJcbiAgICBSZXBzOiBNYXRoLnJvdW5kKHcudG90YWxfcmVwcyksXHJcbiAgICBWb2w6IE1hdGgucm91bmQody5zdW1fdm9sdW1lKSxcclxuICAgIE51bTogdy5udW1fc2V0cyxcclxuICB9KSk7XHJcbiAgY29uc3QgY29sdW1uTmFtZXMgPSBbLi4uT2JqZWN0LmtleXMoT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSlbMF1bMV0pXTtcclxuICBjb25zdCByb3dzID0gT2JqZWN0LmVudHJpZXMod29ya291dHNUYWJsZSkubWFwKChbaywgdl0sIGluZGV4KSA9PiBbXHJcbiAgICAuLi5PYmplY3QudmFsdWVzKHYpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG0tMlwiPlN0YXRpc3RpY3M8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+VG90YWwgbGlmZXRpbWUgbWV0cmljczo8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiXHJcbiAgICAgICAgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+VG90YWwgV29ya291dHM6IDwvYj5cclxuICAgICAgICAgIDxpPntudW1Xb3Jrb3V0c308L2k+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+VG90YWwgVGltZTogPC9iPlxyXG4gICAgICAgICAgPGk+e3RvdGFsVGltZVNwZW50fSBtaW48L2k+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGI+QXZlcmFnZSBUaW1lOiA8L2I+XHJcbiAgICAgICAgICA8aT57YXZlcmFnZVRpbWVTcGVudH0gbWluPC9pPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAge2NvbHVtbk5hbWVzXHJcbiAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSBcIkV4ZXJjaXNlXCIpXHJcbiAgICAgICAgICAubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgIDxwIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICB7YWJidltuYW1lXX0gKHtuYW1lfSk6e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgIHtuYW1lID09PSBcIlZvbFwiXHJcbiAgICAgICAgICAgICAgICAgID8gZm9ybWF0TnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHdvcmtvdXRzVGFibGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT4gYSArIGJbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogcmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1RhYmxlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIChhLCBiKSA9PiBhICsgYltuYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzIGJ5IGV4ZXJjaXNlOiA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dGFibGVcclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcInNjcm9sbFwiLCBmb250U2l6ZTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGlzLXN0cmlwZWQgaXMtbmFycm93IGlzLWhvdmVyYWJsZSBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2V9PC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHtyb3cubWFwKChlbGUsIGVsZUluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBlbGVJbmRleCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2VsZUluZGV4fT57Zm9ybWF0TnVtYmVyKGVsZSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtlbGVJbmRleH0+e2VsZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IGdldERhdGVPZklTT1dlZWsgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxudmFyIHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuY29uc3Qgd2Vla2RheXMgPSBbXHJcbiAgXCJNb25kYXlcIixcclxuICBcIlR1ZXNkYXlcIixcclxuICBcIldlZG5lc2RheVwiLFxyXG4gIFwiVGh1cnNkYXlcIixcclxuICBcIkZyaWRheVwiLFxyXG4gIFwiU2F0dXJkYXlcIixcclxuICBcIlN1bmRheVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgeWVhcldlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgbmV3IERhdGUoXHJcbiAgICAgIHdlZWtTdGFydGluZ09uRGF5LnNldERhdGUod2Vla1N0YXJ0aW5nT25EYXkuZ2V0RGF0ZSgpICsgNylcclxuICAgICkudG9EYXRlU3RyaW5nKClcclxuICApO1xyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVNjaGVkdWxlUm91dGUoKSB7XHJcbiAgbGV0IHdvcmtvdXREYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgeWVhcldlZWsgPSBzZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBsZXQgW3llYXIsIHdlZWtdID0geWVhcldlZWsuc3BsaXQoXCItV1wiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKGdldERhdGVPZklTT1dlZWsod2VlaywgeWVhcikpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG5cclxuICBjb25zdCB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0RGF0YSlcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcy51dGMody5kYXRldGltZV9zdGFydCkubG9jYWwoKS5mb3JtYXQoXCJkZGRkXCIpKVxyXG4gICAgLm1hcFZhbHVlcygodikgPT5cclxuICAgICAgbG9kYXNoKHYpXHJcbiAgICAgICAgLmdyb3VwQnkoKHNldCkgPT4gc2V0Lm11c2NsZV9ncm91cClcclxuICAgICAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgICAgICAudmFsdWUoKVxyXG4gICAgKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlNjaGVkdWxlPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxiPntuZXcgRGF0ZSh3ZWVrU3RhcnRpbmdPbkRheSkudG9EYXRlU3RyaW5nKCl9PC9iPiAte1wiIFwifVxyXG4gICAgICAgIDxiPntuZXcgRGF0ZSh3ZWVrU3RhcnRpbmdPbkRheS5hZGQoNiwgXCJkYXlcIikpLnRvRGF0ZVN0cmluZygpfTwvYj57XCIgXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMlwiPlxyXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyV2Vla31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWs6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAge1suLi5BcnJheSg3KS5rZXlzKCldLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtfSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAge3dvcmtvdXRzPy5bd2Vla2RheXNbaXRlbV1dID8gKFxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVzc2FnZSBpcy1zbWFsbCBpcy1zZWNvbmRhcnkgbS0zIGB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgICAgd2Vla2RheXNbaXRlbV1cclxuICAgICAgICAgICAgICAgIH0gLSAke3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMod29ya291dHM/Llt3ZWVrZGF5c1tpdGVtXV0pLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoW2ssIHZdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uoayl9IC0ge3Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1zbWFsbCBpcy1saWdodCBtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgICB9IC0gJHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+UmVzdCBEYXkgXHVEODNEXHVEQ0FBPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMsIHNvcnRCeSwgc3VtIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbnMsIGFkZExvY2F0aW9uIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IExvY2F0aW9uUGllIGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uUGllXCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCIuLi9zZXJ2aWNlL3dvcmtvdXRzXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIGNvbnN0IHR3b01vbnRoc0FnbyA9IGRheWpzKCkuYWRkKC02MCwgXCJkYXlcIikuc3RhcnRPZihcImRheVwiKTtcclxuICBjb25zdCB0b2RheSA9IGRheWpzKCkuZW5kT2YoXCJkYXlcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzRm9yVXNlciA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyLCB0d29Nb250aHNBZ28sIHRvZGF5KTtcclxuICBsZXQgd29ya291dHNQZXJMb2NhdGlvbiA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkod29ya291dHNGb3JVc2VyLCBcImxvY2F0aW9uX25hbWVcIiksXHJcbiAgICAoZSkgPT4gZS5sZW5ndGhcclxuICApO1xyXG5cclxuICBpZiAoT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1BlckxvY2F0aW9uKS5sZW5ndGggPiA1KSB7XHJcbiAgICBjb25zdCBjdXRPZmYgPSBzb3J0QnkoT2JqZWN0LnZhbHVlcyh3b3Jrb3V0c1BlckxvY2F0aW9uKSkucmV2ZXJzZSgpWzVdO1xyXG4gICAgY29uc3Qgc3VtRW50cmllc0JlbG93Q3V0b2ZmID0gc3VtKFxyXG4gICAgICBPYmplY3QudmFsdWVzKHdvcmtvdXRzUGVyTG9jYXRpb24pLmZpbHRlcigodGltZXMpID0+IHRpbWVzIDw9IGN1dE9mZilcclxuICAgICk7XHJcbiAgICB3b3Jrb3V0c1BlckxvY2F0aW9uID0ge1xyXG4gICAgICAuLi5PYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMod29ya291dHNQZXJMb2NhdGlvbikuZmlsdGVyKFxyXG4gICAgICAgICAgKFtsb2MsIHRpbWVzXSkgPT4gdGltZXMgPiBjdXRPZmZcclxuICAgICAgICApXHJcbiAgICAgICksXHJcbiAgICAgIE90aGVyczogc3VtRW50cmllc0JlbG93Q3V0b2ZmLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbbG9jYXRpb25zLCB3b3Jrb3V0c1BlckxvY2F0aW9uXTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBpZiAoIWZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpKSB7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IGFkZExvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpLCBmb3JtLmdldChcInVzZXJJZFwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VMb2NhdGlvbnNSb3V0ZSgpIHtcclxuICBjb25zdCBbbG9jYXRpb25zLCB3b3Jrb3V0c0ZvclVzZXJdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VyPXtzZXRVc2VyfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+TG9jYXRpb25zPC9oND5cclxuICAgICAgICAgICAge3dvcmtvdXRzRm9yVXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+QnJlYWtkb3duIGxhc3QgNjAgZGF5czwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblBpZSBsb2NhdGlvbnM9e3dvcmtvdXRzRm9yVXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNVwiPkFkZCBMb2NhdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIiBuYW1lPVwibG9jYXRpb25OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy01IFwiPlNhdmVkIExvY2F0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICB7bG9jYXRpb25zLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBrZXk9e2UuaWR9XHJcbiAgICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggbWItM1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02XCI+e3N0YXJ0Q2FzZShlLm5hbWUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uUGllKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcImxvY2F0aW9uUGllXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLmxvY2F0aW9ucykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uUGllXCIpKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uUGllID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcInBpZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhwcm9wcy5sb2NhdGlvbnMpLm1hcCgodmFsdWUpID0+IHN0YXJ0Q2FzZSh2YWx1ZSkpLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLmxvY2F0aW9ucyksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3Qua2V5cyhwcm9wcy5sb2NhdGlvbnMpLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sICR7XHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgfSwwLjQpYDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmRleEF4aXM6IFwieVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBsb2NhdGlvblBpZS5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtwcm9wc10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwibG9jYXRpb25QaWVcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCwgQnNDbG9ja0hpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IGdldEdyYWRpZW50RnJvbVdvcmtvdXQsIHRvVGltZSB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcblxyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZWFzZTogXCJlYXNlT3V0XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbXQtNSBtYi0zXCI+V29ya291dHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy01XCI+e2Ake3dvcmtvdXRzLmxlbmd0aH0gd29ya291dHNgfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBrZXk9e3dvcmtvdXQuaWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ2V0R3JhZGllbnRGcm9tV29ya291dChcclxuICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQucmVwbGFjZSgvXFxEKy9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0LmlkfS9jdXJyZW50RXhlcmNpc2VzYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1peEJsZW5kTW9kZTogXCJoYXJkLWxpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgbWItMiBpcy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF5anNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9jYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgTU1NIEQgWVlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItMiBpcy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF5anNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9jYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiaDptbSBBXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIC0gXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d29ya291dC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3dvcmtvdXQuZHVyYXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3b3Jrb3V0LmRhdGV0aW1lX2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRvVGltZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9lbmQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJJbiBQcm9ncmVzcy4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uod29ya291dC5sb2NhdGlvbl9uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt3b3Jrb3V0LmRhdGV0aW1lX2VuZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZUZpbGwgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCc0Nsb2NrSGlzdG9yeSBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XHJcbiAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHJvdGF0ZTogMTAgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBPdXRsZXQsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7XHJcbiAgZmluaXNoV29ya291dCxcclxuICBnZXRXb3Jrb3V0LFxyXG4gIGRlbGV0ZVdvcmtvdXQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N0b3B3YXRjaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IE1kT3V0bGluZU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgZ2V0R3JhZGllbnRGcm9tV29ya291dCwgdG9UaW1lIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5jb25zdCByZWxhdGl2ZVRpbWUgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBnZXRXb3Jrb3V0KHBhcmFtcy53b3Jrb3V0SWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBmaW5pc2hXb3Jrb3V0KFxyXG4gICAgICBmb3JtLmdldChcIndvcmtvdXRfaWRcIiksXHJcbiAgICAgIGZvcm0uZ2V0KFwiZW5kXCIpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHdvcmtvdXQ7XHJcbiAgfVxyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSBcIkRFTEVURVwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGRlbGV0ZVdvcmtvdXQoZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gd29ya291dE1ldGFEYXRhKHdvcmtvdXQpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm94IG0tMyBzb3JhRm9udFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBnZXRHcmFkaWVudEZyb21Xb3Jrb3V0KFxyXG4gICAgICAgICAgICB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICB3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0LnJlcGxhY2UoL1xcRCsvZywgXCJcIilcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBtYi0zIHRpdGxlIHNvcmFGb250XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1peEJsZW5kTW9kZTogXCJoYXJkLWxpZ2h0XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt3b3Jrb3V0Py5uYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctcGluXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntzdGFydENhc2Uod29ya291dD8ubG9jYXRpb25fbmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1hbGFybVwiPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgIHtgJHtkYXlqc1xyXG4gICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0Py5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgREQgTU1NIFlZLCBISDptbVwiKX1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gdXNlTG9hZGVyRGF0YSgpWzBdO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDaGFuZ2VUaW1lLCBzZXRTaG93Q2hhbmdlVGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1c3RvbURhdGUsIHNldEN1c3RvbURhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VySWQ9e3NldFVzZXJJZH1cclxuICAgICAgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHdvcmtvdXQudXNlcl9pZH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7d29ya291dE1ldGFEYXRhKHdvcmtvdXQpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHkgbm90aWZpY2F0aW9uIG1iLTMgaXMtd2hpdGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7d29ya291dD8uZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMSBoYXMtdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgV29ya291dCBDb21wbGV0ZWQue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHt0b1RpbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9lbmQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTAgaGFzLXRleHQtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRpbWUgRWxhcHNlZDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1mYW1pbHktc2Vjb25kYXJ5IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RvcHdhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lPXtkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHshd29ya291dC5kYXRldGltZV9lbmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc3VjY2VzcyBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoKS51dGMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Nob3dNZW51ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMyVcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFdvcmtvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDaGFuZ2VUaW1lKChlKSA9PiAhZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXQgRmluaXNoIFRpbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7c2hvd0NoYW5nZVRpbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21EYXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWN1c3RvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCBpcy1zdWNjZXNzIG0tMCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKGN1c3RvbURhdGUpLnV0YygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoKGUpID0+ICFlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnREYXRlVGltZSB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcblxyXG5jb25zdCBTdG9wd2F0Y2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUobmV3IERhdGUoKSAtIHN0YXJ0KTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2UgaWYgKCFydW5uaW5nKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtydW5uaW5nXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcHdhdGNoXCI+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoO1xyXG4iLCAiaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVBhcmFtcyxcclxuICB1c2VOYXZpZ2F0ZSxcclxuICBPdXRsZXQsXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldE11c2NsZUdyb3VwcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gYXdhaXQgZ2V0TXVzY2xlR3JvdXBzKCk7XHJcbiAgcmV0dXJuIG11c2NsZV9ncm91cHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVyY2lzZXNSb3V0ZUluZGV4KCkge1xyXG4gIGxldCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgbXVzY2xlX2dyb3VwcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRlKGAvd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsICR7XHJcbiAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA/PyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbGxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAge211c2NsZV9ncm91cHMubWFwKChtdXNjbGUpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17bXVzY2xlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyh7IG11c2NsZV9ncm91cDogbXVzY2xlLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5nZXQoXCJtdXNjbGVfZ3JvdXBcIikgPT09IG11c2NsZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdGFydENhc2UobXVzY2xlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHJlZGlyZWN0LCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBvc3RFeGVyY2lzZXRvV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGdldEV4ZXJjaXNlcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHlwZWFoZWFkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBtdXNjbGVfZ3JvdXAgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKTtcclxuXHJcbiAgcmV0dXJuIGV4ZXJjaXNlcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCwgdXNlciB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBleGVyY2lzZSA9IGZvcm0uZ2V0KFwiZXhlcmNpc2VcIik7XHJcblxyXG4gIGF3YWl0IHBvc3RFeGVyY2lzZXRvV29ya291dCh7XHJcbiAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICBleGVyY2lzZV9pZDogZXhlcmNpc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRXhlcmNpc2VSb3V0ZSgpIHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgZXhOYW1lVG9JZE1hcCA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkoXHJcbiAgICAgIGV4ZXJjaXNlcyxcclxuICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgIGV4ZXJjaXNlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShleGVyY2lzZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICB9YFxyXG4gICAgKSxcclxuICAgIChlKSA9PiBlWzBdLmlkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUeXBlYWhlYWRcclxuICAgICAgICBpZD1cImV4ZXJjaXNlX29wdGlvbnNcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICBvcHRpb25zPXtleGVyY2lzZXMubWFwKFxyXG4gICAgICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgICAgICBgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICB9YFxyXG4gICAgICAgICl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgRXhlcmNpc2VcIlxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGV4ZXJjaXNlOiBleE5hbWVUb0lkTWFwW3NlbGVjdGVkXSB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZCB8fCBkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2N1cnJlbnRFeGVyY2lzZXNgfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgdXNlRmV0Y2hlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlU2V0LFxyXG4gIGFkZFNldCxcclxuICBkZWxldGVTZXQsXHJcbiAgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0LFxyXG4gIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBTZXRJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL1NldElucHV0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgc2V0c0ZvcldvcmtvdXQgPSBhd2FpdCBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0KHBhcmFtcy53b3Jrb3V0SWQpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNldHNGb3JXb3Jrb3V0Py5bMF0/LnVzZXJfaWQ7XHJcbiAgbGV0IGJlc3RTZXRCeUV4ZXJjaXNlO1xyXG4gIGlmICh1c2VySWQpIHtcclxuICAgIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICBiZXN0U2V0QnlFeGVyY2lzZSA9IGxvZGFzaChzZXRzKVxyXG4gICAgICAuc29ydEJ5KChzKSA9PiAtcy5yZXBldGl0aW9ucylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCkpXHJcbiAgICAgIC52YWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhlcmNpc2VTZXRzID0gZ3JvdXBCeShcclxuICAgIHNldHNGb3JXb3Jrb3V0LFxyXG4gICAgKHNldCkgPT5cclxuICAgICAgYCR7c3RhcnRDYXNlKHNldC5leGVyY2lzZV9uYW1lKX0gJHtcclxuICAgICAgICBzZXQudmFyaWFudCA/IGAoJHtzdGFydENhc2Uoc2V0LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICB9YFxyXG4gICk7XHJcbiAgcmV0dXJuIHsgZXhlcmNpc2VTZXRzLCBiZXN0U2V0QnlFeGVyY2lzZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IHVwZGF0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgcmV0dXJuIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJleGVyY2lzZVwiKSB7XHJcbiAgICAgICAgYXdhaXQgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcInNldFwiKSB7XHJcbiAgICAgICAgYXdhaXQgZGVsZXRlU2V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmb3JtO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VycmVudEV4ZXJjaXNlc1JvdXRlKCkge1xyXG4gIGNvbnN0IHsgZXhlcmNpc2VTZXRzLCBiZXN0U2V0QnlFeGVyY2lzZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzaG93RGVsZXRlLCBzZXRTaG93RGVsZXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgeyB3b3Jrb3V0SWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckV4ZXJjaXNlRm9ybSA9IChleGVyY2lzZV9uYW1lLCBzZXRzKSA9PiB7XHJcbiAgICBjb25zdCBleGVyY2lzZUlkID0gc2V0c1swXT8uZXhlcmNpc2VfaWQ7XHJcbiAgICBpZiAoZXhlcmNpc2VJZCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4ZXJjaXNlU2V0Rm9ybSA9IHtcclxuICAgICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlX2lkOiBzZXRzWzBdLndvcmtvdXRfZXhlcmNpc2VfaWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdFNldEZvcm0gPSAod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCkgPT5cclxuICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXhlcmNpc2VfbmFtZTogZXhlcmNpc2VfbmFtZSxcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIHJlcGV0aXRpb25zOiByZXBldGl0aW9ucyxcclxuICAgICAgICAgIHdlaWdodDogd2VpZ2h0LFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUZ1bmMgPSAoaW5kZXgpID0+IHtcclxuICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgd29ya291dF9pZDogd29ya291dElkLFxyXG4gICAgICAgICAgZXhlcmNpc2VfbmFtZTogZXhlcmNpc2VfbmFtZSxcclxuICAgICAgICAgIHR5cGU6IFwic2V0XCIsXHJcbiAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KGV4ZXJjaXNlU2V0Rm9ybSwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0Jlc3RTZXQgPSBiZXN0U2V0QnlFeGVyY2lzZVtleGVyY2lzZUlkXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiA8Yj57cHJldmlvdXNCZXN0U2V0LndlaWdodH0gPC9iPiB4e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItMiBtdC0yXCIgLz5cclxuXHJcbiAgICAgICAgICB7c2V0cy5tYXAoKHNldCkgPT4gKFxyXG4gICAgICAgICAgICA8U2V0SW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgd2VpZ2h0PXtzZXQud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZD17c2V0LmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICByZXBldGl0aW9ucz17c2V0LnJlcGV0aXRpb25zfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUZ1bmM9eygpID0+IGRlbGV0ZUZ1bmMoc2V0LnNldF9pZCl9XHJcbiAgICAgICAgICAgICAgc3VibWl0RnVuYz17c3VibWl0U2V0Rm9ybX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge2ZldGNoZXIuc3VibWlzc2lvbiAmJlxyXG4gICAgICAgICAgZmV0Y2hlci5zdWJtaXNzaW9uLmZvcm1EYXRhLmdldChcImV4ZXJjaXNlX25hbWVcIikgPT09IGV4ZXJjaXNlX25hbWUgJiZcclxuICAgICAgICAgIGZldGNoZXIuc3VibWlzc2lvbi5tZXRob2QgPT09IFwiUE9TVFwiID8gKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0PXtmZXRjaGVyLnN1Ym1pc3Npb24uZm9ybURhdGEuZ2V0KFwid2VpZ2h0XCIpfVxyXG4gICAgICAgICAgICAgICAgcmVwZXRpdGlvbnM9e2ZldGNoZXIuc3VibWlzc2lvbi5mb3JtRGF0YS5nZXQoXCJyZXBldGl0aW9uc1wiKX1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtmZXRjaGVyLnN1Ym1pc3Npb24uZm9ybURhdGEuZ2V0KFwiaW5kZXhcIil9XHJcbiAgICAgICAgICAgICAgICBkZWxldGVGdW5jPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBkZWxldGVGdW5jKGZldGNoZXIuc3VibWlzc2lvbi5mb3JtRGF0YS5nZXQoXCJpbmRleFwiKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZ1bmM9e3N1Ym1pdFNldEZvcm19XHJcbiAgICAgICAgICAgICAgPjwvU2V0SW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxidXR0b25zIGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZSBtdC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiODUlXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXNzaW9uLmZvcm1EYXRhLmdldChcImV4ZXJjaXNlX25hbWVcIikgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VfbmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXRGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWZ1bGx3aWR0aCBpcy1zbWFsbCBpcy1ibGFjayB0aWxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArIFNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZT8uW2V4ZXJjaXNlSWRdID8/IGZhbHNlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9IGRyb3Bkb3duIGlzLXJpZ2h0YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlKChlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtleGVyY2lzZUlkXTogIShlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHAtMCBtLTBcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkcm9wZG93bi1tZW51NlwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IHAtMCBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwLTIgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1mdWxsd2lkdGggbS0wIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmV4ZXJjaXNlU2V0Rm9ybSwgdHlwZTogXCJleGVyY2lzZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIEV4ZXJjaXNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9idXR0b25zPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtPYmplY3QuZW50cmllcyhleGVyY2lzZVNldHMpLm1hcCgoW2V4ZXJjaXNlX25hbWUsIHNldHNdLCBleEluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1mdWxsd2lkdGggaXMtYmxhY2tcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0SW5wdXQocHJvcHMpIHtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUocHJvcHMud2VpZ2h0KTtcclxuICBjb25zdCBbcmVwZXRpdGlvbnMsIHNldFJlcGV0aXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLnJlcGV0aXRpb25zKTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUocHJvcHMuY29tcGxldGVkKTtcclxuICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1cGRhdGVEYiA9IGRlYm91bmNlKFxyXG4gICAgKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpID0+XHJcbiAgICAgIHByb3BzLnN1Ym1pdEZ1bmMod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCksXHJcbiAgICAyMDAsXHJcbiAgICB7XHJcbiAgICAgIGxlYWRpbmc6IHRydWUsXHJcbiAgICAgIHRyYWlsaW5nOiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICEoKHdlaWdodCA9PSBudWxsKSAmIChyZXBldGl0aW9ucyA9PSBudWxsKSAmJiBjb21wbGV0ZWQgPT0gbnVsbClcclxuICAgICAgPyB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIHByb3BzLmluZGV4KVxyXG4gICAgICA6IG51bGw7XHJcbiAgfSwgW3dlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZF0pO1xyXG5cclxuICByZXR1cm4gIWRlbGV0aW5nID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlICR7Y29tcGxldGVkID8gXCJpcy1zdWNjZXNzXCIgOiBcIlwifSBtYi0yYH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHkgcC0yXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt3ZWlnaHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFdlaWdodChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcHNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFJlcGV0aXRpb25zKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtbGlnaHQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RGVsZXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgcHJvcHMuZGVsZXRlRnVuYygpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2dDbG9zZSBzaXplPXsxNX0gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29tcGxldGVkKChjb21wbGV0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFjb21wbGV0ZTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXMtc21hbGwgYnV0dG9uICR7XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkID8gXCJpcy1zdWNjZXNzIGlzLWxpZ2h0XCIgOiBcImlzLWxpZ2h0XCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxSaUNoZWNrRmlsbCBzaXplPXsxNX0gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8PjwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgRm9ybSwgdXNlU3VibWl0LCB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdvcmtvdXQgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucyB9IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb24uanNcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudERhdGVUaW1lIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHNcIjtcclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCB1c2VySWQgPSBmb3JtLmdldChcInVzZXJJZFwiKTtcclxuICBsZXQgbmFtZSA9IGZvcm0uZ2V0KFwibmFtZVwiKTtcclxuICBsZXQgZGF0ZXRpbWUgPSBmb3JtLmdldChcImRhdGV0aW1lXCIpO1xyXG4gIGxldCBsb2NhdGlvbiA9IGZvcm0uZ2V0KFwibG9jYXRpb25cIik7XHJcbiAgbG9jYXRpb24gPSBsb2NhdGlvbj8udG9Mb3dlckNhc2UoKT8ucmVwbGFjZSgvIC9nLCBcIl9cIikgPz8gbnVsbDtcclxuICBjb25zdCB3b3Jrb3V0T2JqZWN0SWQgPSBhd2FpdCBjcmVhdGVXb3Jrb3V0KHtcclxuICAgIG5hbWUsXHJcbiAgICBkYXRldGltZSxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgdXNlcklkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dE9iamVjdElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGdldExvY2F0aW9ucyh1c2VyKTtcclxuICByZXR1cm4gbG9jYXRpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlV29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtoYXNMb2NhdGlvbiwgc2V0SGFzTG9jYXRpb25dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAuMiwgeTogLTUwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiA1MCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgbWQ6Y29sLXNwYW4tMyBzbTpvdmVyZmxvdy1hdXRvIHJlbGF0aXZlIHotMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbXQtNVwiPkNyZWF0ZSBOZXcgV29ya291dDwvaDQ+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInVzZXJJZFwiKTtcclxuICAgICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB1aWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRldGltZVwiKTtcclxuICAgICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBkYXlqcyhgJHtldmVudC50YXJnZXQuZGF0ZXRpbWVMb2NhbC52YWx1ZX06MDBgKS51dGMoKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5uYW1lUGxhY2Vob2xkZXIudmFsdWUgPT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGAke2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXCJkZGRkXCIpfSB3b3Jrb3V0YFxyXG4gICAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRhdGV0aW1lKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQobmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3VibWl0KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmFtZS9EZXNjPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGRkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfSB3b3Jrb3V0YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dldEN1cnJlbnREYXRlVGltZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNldEhhc0xvY2F0aW9uKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogc2V0SGFzTG9jYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHNlbGVjdCBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdD1cImxvY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwibG9jYXRpb25zXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17c3RhcnRDYXNlKGl0ZW0ubmFtZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc0xvY2F0aW9ufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9ob21lXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPD48Lz47XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpblwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUm91dGUoKSB7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgPlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcklkPXtzZXRVc2VySWR9IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLXRvdWNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBcIj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm94IHNvcmFGb250IHByaW1hcnkgaGFzLXRleHQtd2hpdGUgdGl0bGUgbWItMiBpcy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIEhlbGxvLCB7dXNlciAmJiB1c2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGE+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb3JhRm9udCBib3ggcC00IG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL2NyZWF0ZT91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQUEgQ3JlYXRlIFdvcmtvdXRcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzLz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQzggQW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avd29ya291dHM/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0M1IFdvcmtvdXRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2xvY2F0aW9ucz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0NcdURGRUEgTG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL21lYXN1cmVtZW50cz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0NcdURGNTEgTWVhc3VyZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgY29udGFpbmVyIHNvcmFGb250XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBtYi0xXCI+V29ya291dCwgU21hcnRlci48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+UGxlYXNlIGxvZyBpbiB0byBjb250aW51ZS4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VMb2dpbiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonY2Q2YWU5ZDInLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LU9NUEZGRDJQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LUUVERDNBVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNGV1BBWUpHLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1ESVNQR0VYSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSEpON1pKQlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LSTZUUTVDQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBSVE4yQVFPLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstN0RCNEwzWlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XS0JRWUVJQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FuYWx5dGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MtWU1CMzdCN1YuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZVVVk3VUw2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUURDMlBFNTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZVjUzMzRTRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVMSVFSTVlFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlpVRzNGSFYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncGVyc29uYWwtYmVzdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzLU1YV09GVDM1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JUjY1U0VXNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3Byb2dyZXNzaXZlLW92ZXJsb2FkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZC1GQk5FS0ZRTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVI2NVNFVzYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZScsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidzY2hlZHVsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUtWEQ0QkJUMlkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQSVpaS0xLLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3N0YXRpc3RpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MtSzJTNVhJUVcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzondHJhaW5lZC10aGlzLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrLVRNSzNJNzI0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JUjY1U0VXNi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzond29ya291dHMtcGVyLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrLTNXNTJGWTJYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JUjY1U0VXNi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jcmVhdGUtR1NTVEhEVDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFQSVpaS0xLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUURDMlBFNTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZVjUzMzRTRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVMSVFSTVlFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlpVRzNGSFYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLUFUWko0S1ZJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FTElRUk1ZRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNkhORUo2QUwuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvY2F0aW9ucyc6eydpZCc6J3JvdXRlcy9sb2NhdGlvbnMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9jYXRpb25zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvY2F0aW9ucy1XVUdGSEVMQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVI2NVNFVzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RREMyUEU1Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVMSVFSTVlFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlpVRzNGSFYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucy86bG9jYXRpb25JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQtTUlCT05aUU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5aVUczRkhWLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzJzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWFzdXJlbWVudHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzLTNRWUJMTkhILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FTElRUk1ZRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZCc6eydpZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkJywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2FkZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkLTcyMktMVFAyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03WlVSTTZNTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlWNTMzNFNFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0tCUVlFSUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5Jzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5JywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2hpc3RvcnknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnktQTYzMlJHNkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlSNjVTRVc2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUURDMlBFNTcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeS9lZGl0Jzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeScsJ3BhdGgnOidlZGl0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5L2VkaXQtRVBVUVlHRFguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC1EQ0hDWFBaMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRUxJUVJNWUUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0JywncGF0aCc6Jzp3b3Jrb3V0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkLTdLTzY2VEFELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RUElaWktMSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUtJNlRRNUNBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUFJUTjJBUU8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RREMyUEU1Ny5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVlWNTMzNFNFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0tCUVlFSUMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWlVHM0ZIVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50Jzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50JywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQtNlJSUkhEWlEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXRoJzonYWRkRXhlcmNpc2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UtNUVZUldWWjQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdaVVJNNk1MLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTlpVRzNGSFYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcycsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOidjdXJyZW50RXhlcmNpc2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzLVNVSVNHRzcyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03REI0TDNaWC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXRzJzp7J2lkJzoncm91dGVzL3dvcmtvdXRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXRzLUpYQUgyMklSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RUElaWktMSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFEQzJQRTU3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVY1MzM0U0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FTElRUk1ZRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU5aVUczRkhWLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1DRDZBRTlEMi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVC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
