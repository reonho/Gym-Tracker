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
  action: () => action2,
  default: () => MeasurementRoute,
  loader: () => loader3
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_lodash2 = require("lodash");
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
var loader3 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
var action2 = async ({ request }) => {
  const form = await request.formData();
  if (!form.get("locationName")) {
    return form;
  }
  return await addLocation(form.get("locationName"), form.get("userId"));
};
function MeasurementRoute() {
  const location = (0, import_remix5.useLocation)();
  const [user, setUser] = (0, import_react4.useState)();
  const [userId, setUserId] = (0, import_react4.useState)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser,
    setUserId
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
    to: `/measurements/history?user=${userId}`
  }, "Measurement History")), /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/measurements/add" ? "is-active" : null
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/measurements/add?user=${userId}`
  }, "Add Measurements")))))), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\history.jsx
var history_exports = {};
__export(history_exports, {
  default: () => MeasurementHistoryRoute
});
init_react();
function MeasurementHistoryRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, "History");
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\add.jsx
var add_exports = {};
__export(add_exports, {
  action: () => action3,
  default: () => AddMeasurementRoute,
  loader: () => loader4
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_lodash4 = require("lodash");
var import_react5 = require("react");

// app/service/measurements.js
init_react();
async function getMeasurementTypes() {
  const { data, error } = await supabase_default.from("measurements").select("*");
  return data;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\add.jsx
var import_react_bootstrap_typeahead = require("react-bootstrap-typeahead");

// app/utils/utils.js
init_react();
var import_lodash3 = require("lodash");
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
  var month = (0, import_lodash3.padStart)(date.getMonth() + 1, 2, 0);
  var day = (0, import_lodash3.padStart)(date.getDate(), 2, 0);
  var hr = (0, import_lodash3.padStart)(date.getHours(), 2, 0);
  var min = (0, import_lodash3.padStart)(date.getMinutes(), 2, 0);
  return `${year}-${month}-${day}T${hr}:${min}`;
};

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\measurements\add.jsx
var loader4 = async ({ request }) => {
  let url = new URL(request.url);
  const metrics = await getMeasurementTypes();
  return metrics;
};
var action3 = async ({ request }) => {
  return (0, import_remix6.redirect)("/measurements/add");
};
function AddMeasurementRoute() {
  const metric = (0, import_remix6.useLoaderData)();
  const [selectedMetric, setSelectedMetric] = (0, import_react5.useState)();
  const [value, setValue] = (0, import_react5.useState)();
  const [user, setUser] = (0, import_react5.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react5.useState)(false);
  const [date, setDate] = (0, import_react5.useState)(getCurrentDateTime());
  const [searchParams] = (0, import_remix6.useSearchParams)();
  const submit = (0, import_remix6.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "POST",
    onSubmit: async (event) => {
      setIsSubmitting(true);
      event.preventDefault();
      submit({
        date,
        value,
        metric: selectedMetric,
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
    onChange: setSelectedMetric,
    options: metric.map((m) => (0, import_lodash4.startCase)(m["measurement"])),
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
    onChange: setValue
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
var import_remix7 = __toESM(require_remix());
var import_dayjs = __toESM(require("dayjs"));
var import_react6 = require("react");
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs.default.extend(weekOfYear);
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix7.useSearchParams)();
  const location = (0, import_remix7.useLocation)();
  const user = searchParams.get("user");
  const date = new Date();
  const weekYear = `${(0, import_dayjs.default)().year()}-W${getWeekNumber(date)}`;
  const navigate = (0, import_remix7.useNavigate)();
  (0, import_react6.useEffect)(() => {
    if (location.pathname === "/analytics/") {
      navigate(`/analytics/trained-this-week?user=${user}&week=${weekYear}`);
    }
  }, [location, navigate, user]);
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
  }, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var progressive_overload_exports = {};
__export(progressive_overload_exports, {
  default: () => ProgressRoute,
  loader: () => loader5
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
var import_remix8 = __toESM(require_remix());
var import_lodash6 = require("lodash");

// app/components/ProgressiveOverload.js
init_react();
var import_react7 = require("react");
var import_auto = __toESM(require("chart.js/auto"));
var import_chart = require("chart.js");
var import_dayjs3 = __toESM(require("dayjs"));
var import_lodash5 = require("lodash");
import_auto.default.register([import_chart.Tooltip]);
function ProgressiveOverload(props) {
  const [ctx, setCtx] = (0, import_react7.useState)(null);
  const exerciseProgress = (0, import_lodash5.sortBy)(props.progressiveOverload, (e) => e.datetime_start);
  (0, import_react7.useEffect)(() => {
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
var loader5 = async ({ request }) => {
  var _a;
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const exercises = await getExercisesForUser(user);
  let exercise = url.searchParams.get("exercise_id") ?? ((_a = exercises[0]) == null ? void 0 : _a.id);
  const sets = await getBestSetPerWorkoutExercise(user, exercise);
  const setsByExercise = (0, import_lodash6.groupBy)(sets, (s) => s.exercise_id)[exercise];
  return { setsByExercise, exercises };
};
function ProgressRoute() {
  const { setsByExercise, exercises } = (0, import_remix8.useLoaderData)();
  const submit = (0, import_remix8.useSubmit)();
  const [searchParams] = (0, import_remix8.useSearchParams)();
  const singleExerciseChart = setsByExercise;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Progressive Overload"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), singleExerciseChart && /* @__PURE__ */ React.createElement("div", {
    className: "select mb-4 is-small"
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
  }, `${(0, import_lodash6.startCase)(e.name)} ${(e == null ? void 0 : e.variant) ? `(${(0, import_lodash6.startCase)(e.variant)})` : ""}`)))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_dayjs4 = __toESM(require("dayjs"));
var import_lodash8 = __toESM(require("lodash"));

// app/components/WeeklyTrainingSets.js
init_react();
var import_react8 = require("react");
var import_auto2 = __toESM(require("chart.js/auto"));
var import_lodash7 = require("lodash");
function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = (0, import_react8.useState)(null);
  const sets = props.weeklySets;
  (0, import_react8.useEffect)(() => {
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
        labels: Object.keys(sets).map((e) => (0, import_lodash7.startCase)(e)),
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
var customParseFormat = require("dayjs/plugin/customParseFormat");
import_dayjs4.default.extend(weekOfYear3);
import_dayjs4.default.extend(customParseFormat);
var action4 = async ({ request }) => {
};
var loader6 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let yearWeek = url.searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const userWorkouts = await getSetsForUser(user, weekStartingOnDay.toDateString(), new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 7)).toDateString());
  return (0, import_lodash8.default)(userWorkouts).groupBy((set) => set.muscle_group).mapValues((e) => e.length);
};
function ThisWeekRoute() {
  const weeklySets = (0, import_remix9.useLoaderData)();
  const [searchParams] = (0, import_remix9.useSearchParams)();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  const submit = (0, import_remix9.useSubmit)();
  const renderTrainedThisWeek = () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "title is-4 mb-2"
    }, "Trained this Week"), /* @__PURE__ */ React.createElement("hr", {
      className: "mt-2 mb-3"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.toDateString()), " -", " ", /* @__PURE__ */ React.createElement("b", null, new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 6)).toDateString()), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
      className: "mt-2 mb-2"
    }, /* @__PURE__ */ React.createElement(import_remix9.Form, {
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
    })))))), Object.keys(weeklySets).length === 0 && "Nothing trained this week", /* @__PURE__ */ React.createElement(WeeklyTrainingSets, {
      weeklySets
    }));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, renderTrainedThisWeek());
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\workouts-per-week.jsx
var workouts_per_week_exports = {};
__export(workouts_per_week_exports, {
  default: () => WorkoutsPerWeekRoute,
  loader: () => loader7
});
init_react();
var import_remix10 = __toESM(require_remix());

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
var import_lodash10 = __toESM(require("lodash"));
var import_dayjs5 = __toESM(require("dayjs"));

// app/components/WorkoutsPerWeek.js
init_react();
var import_react9 = require("react");
var import_auto3 = __toESM(require("chart.js/auto"));
var import_lodash9 = require("lodash");
function WorkoutsPerWeek(props) {
  const [ctx, setCtx] = (0, import_react9.useState)(null);
  (0, import_react9.useEffect)(() => {
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
var loader7 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getWorkoutsForUser(user);
  workouts = (0, import_lodash10.default)(workouts).groupBy((w) => `${(0, import_dayjs5.default)(w.datetime_start).year()} Week ${String(getWeekNumber(new Date(w.datetime_start))).padStart(2, "0")}`).mapValues((e) => e.length).value();
  let weeksToShow = Object.keys(workouts);
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash10.transform)((0, import_lodash10.pick)(workouts, weeksToShow), (res, val, key) => {
    res[key] = val;
  });
};
function WorkoutsPerWeekRoute() {
  const workouts = (0, import_remix10.useLoaderData)();
  console.log(workouts);
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
  loader: () => loader8
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_lodash12 = __toESM(require("lodash"));
var import_react11 = require("react");

// app/components/PersonalBest.js
init_react();
var import_react10 = require("react");
var import_auto4 = __toESM(require("chart.js/auto"));
var import_lodash11 = require("lodash");
function PersonalRecords(props) {
  const [ctx, setCtx] = (0, import_react10.useState)(null);
  (0, import_react10.useEffect)(() => {
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
        labels: props.bestSets.map((value) => (0, import_lodash11.startCase)(`${value.exercise_name} ${value.variant ?? ""}`)),
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
var loader8 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const sets = await getBestSetPerWorkoutExercise(user);
  const bestSetByExercise = (0, import_lodash12.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash12.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  return Object.values(bestSetByExercise);
};
function PersonalBestRoute() {
  const listBestSets = (0, import_remix11.useLoaderData)();
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
  loader: () => loader9
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_lodash13 = __toESM(require("lodash"));
var import_dayjs6 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs6.default.extend(weekOfYear4);
var loader9 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let stats = await getLifetimeStatistics(user);
  let workouts = await getWorkoutsForUser(user);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs6.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
  return [stats, totalTimeSpent, Math.round(totalTimeSpent / workouts.length)];
};
function StatisticsRoute() {
  const [stats, totalTimeSpent, averageTimeSpent] = (0, import_remix12.useLoaderData)();
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
    Exercise: `${(0, import_lodash13.startCase)(w.name)} ${(w == null ? void 0 : w.variant) ? `(${(0, import_lodash13.startCase)(w.variant)})` : ""}`,
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
  }, /* @__PURE__ */ React.createElement("b", null, abbv[name], " (", name, "):", " "), /* @__PURE__ */ React.createElement("i", null, name === "Vol" ? formatNumber((0, import_lodash13.reduce)(Object.values(workoutsTable), (a, b) => a + b[name], 0)) : (0, import_lodash13.reduce)(Object.values(workoutsTable), (a, b) => a + b[name], 0))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader10
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_lodash14 = __toESM(require("lodash"));
var import_dayjs7 = __toESM(require("dayjs"));
var weekOfYear5 = require("dayjs/plugin/weekOfYear");
var utc = require("dayjs/plugin/utc");
import_dayjs7.default.extend(weekOfYear5);
import_dayjs7.default.extend(utc);
var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var loader10 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const yearWeek = url.searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = getDateOfISOWeek(week, year);
  let workouts = await getSetsForUser(user, weekStartingOnDay.toDateString(), new Date(weekStartingOnDay.setDate(weekStartingOnDay.getDate() + 7)).toDateString());
  return workouts;
};
function WeeklyScheduleRoute() {
  let workoutData = (0, import_remix13.useLoaderData)();
  const [searchParams] = (0, import_remix13.useSearchParams)();
  const yearWeek = searchParams.get("week");
  let [year, week] = yearWeek.split("-W");
  const weekStartingOnDay = (0, import_dayjs7.default)(getDateOfISOWeek(week, year));
  const submit = (0, import_remix13.useSubmit)();
  const workouts = (0, import_lodash14.default)(workoutData).groupBy((w) => import_dayjs7.default.utc(w.datetime_start).local().format("dddd")).mapValues((v) => (0, import_lodash14.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length).value()).value();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(6, "day").format("DD/MM/YYYY")), " "), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 mb-2"
  }, /* @__PURE__ */ React.createElement(import_remix13.Form, {
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
    }, /* @__PURE__ */ React.createElement("b", null, (0, import_lodash14.startCase)(k), " - ", v));
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
  loader: () => loader11
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_lodash15 = require("lodash");
var import_react12 = require("react");
var loader11 = async ({ request }) => {
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
  const locations = (0, import_remix14.useLoaderData)();
  const [user, setUser] = (0, import_react12.useState)();
  const [searchParams] = (0, import_remix14.useSearchParams)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-1 mt-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix14.Link, {
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash15.startCase)(e.name))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader12
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_lodash16 = require("lodash");
var import_dayjs8 = __toESM(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs8.default.extend(utc2);
var loader12 = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};
function ViewWorkoutRoute() {
  const workouts = (0, import_remix15.useLoaderData)();
  const [searchParams] = (0, import_remix15.useSearchParams)();
  const userId = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mb-3"
  }, "Workouts"), workouts.length === 0 && "No workouts yet", workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix15.Link, {
    key: "workout.id",
    className: "box",
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs8.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs8.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash16.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_remix16 = __toESM(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_remix16.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action6,
  default: () => StartNewWorkoutRoute,
  loader: () => loader13
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_lodash17 = require("lodash");
var import_react14 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react13 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react13.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react13.useState)(props.running);
  (0, import_react13.useEffect)(() => {
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
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react13.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react13.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react13.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var import_dayjs9 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc3 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs9.default.extend(utc3);
import_dayjs9.default.extend(relativeTime);
var loader13 = async ({ params }) => {
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
    return (0, import_remix17.redirect)("/");
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
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash17.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
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
  const workout = (0, import_remix17.useLoaderData)()[0];
  const fetcher = (0, import_remix17.useFetcher)();
  const [userId, setUserId] = (0, import_react14.useState)();
  const [showMenu, setShowMenu] = (0, import_react14.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react14.useState)(false);
  const [customDate, setCustomDate] = (0, import_react14.useState)(null);
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
  }, /* @__PURE__ */ React.createElement(import_md2.MdOutlineMenu, null)))), /* @__PURE__ */ React.createElement(import_remix17.Outlet, null))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader14
});
init_react();
var import_lodash18 = require("lodash");
var import_remix18 = __toESM(require_remix());
var loader14 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix18.useSearchParams)();
  const muscle_groups = (0, import_remix18.useLoaderData)();
  const navigate = (0, import_remix18.useNavigate)();
  const { workoutId } = (0, import_remix18.useParams)();
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
  }, (0, import_lodash18.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix18.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action7,
  default: () => AddExerciseRoute,
  loader: () => loader15
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_lodash19 = require("lodash");
var import_react15 = require("react");
var import_react_bootstrap_typeahead2 = require("react-bootstrap-typeahead");
var loader15 = async ({ request }) => {
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
  return (0, import_remix19.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix19.useParams)();
  const [selected, setSelected] = (0, import_react15.useState)([]);
  const [disabled, setDisabled] = (0, import_react15.useState)(false);
  const exercises = (0, import_remix19.useLoaderData)();
  const fetcher = (0, import_remix19.useFetcher)();
  const exNameToIdMap = (0, import_lodash19.mapValues)((0, import_lodash19.groupBy)(exercises, (exercise) => `${(0, import_lodash19.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash19.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_bootstrap_typeahead2.Typeahead, {
    id: "exercise_options",
    onChange: setSelected,
    options: exercises.map((exercise) => `${(0, import_lodash19.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash19.startCase)(exercise.variant)})` : ""}`),
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
  }, /* @__PURE__ */ React.createElement(import_remix19.Link, {
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
  loader: () => loader16
});
init_react();
var import_remix20 = __toESM(require_remix());
var import_lodash21 = __toESM(require("lodash"));
var import_react17 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react16 = require("react");
var import_lodash20 = require("lodash");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react16.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react16.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react16.useState)(props.completed);
  const updateDb = (0, import_lodash20.debounce)((weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index), 200, {
    leading: true,
    trailing: true
  });
  (0, import_react16.useEffect)(() => {
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
var loader16 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash21.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash21.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash21.groupBy)(setsForWorkout, (set) => `${(0, import_lodash21.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash21.startCase)(set.variant)})` : ""}`);
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
  const { exerciseSets, bestSetByExercise } = (0, import_remix20.useLoaderData)();
  const [showDelete, setShowDelete] = (0, import_react17.useState)();
  const [localExerciseState, setLocalExerciseState] = (0, import_react17.useState)(exerciseSets);
  const { workoutId } = (0, import_remix20.useParams)();
  const fetcher = (0, import_remix20.useFetcher)();
  (0, import_react17.useEffect)(() => setLocalExerciseState(exerciseSets), [exerciseSets]);
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
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix20.Outlet, null), /* @__PURE__ */ React.createElement(import_remix20.Link, {
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
  loader: () => loader17
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_lodash22 = require("lodash");
var import_react18 = require("react");
var import_dayjs10 = __toESM(require("dayjs"));
var utc4 = require("dayjs/plugin/utc");
import_dayjs10.default.extend(utc4);
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
  return (0, import_remix21.redirect)(`/workout/${workoutObjectId}/currentExercises`);
};
var loader17 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
function CreateWorkoutRoute() {
  const locations = (0, import_remix21.useLoaderData)();
  const [user, setUser] = (0, import_react18.useState)();
  const [hasLocation, setHasLocation] = (0, import_react18.useState)();
  const submit = (0, import_remix21.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Create New Workout"), /* @__PURE__ */ React.createElement(import_remix21.Form, {
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
    value: (0, import_lodash22.startCase)(item.name)
  })))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("button", {
    className: "button is-dark ",
    type: "submit",
    disabled: !hasLocation
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix21.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader18
});
init_react();
var import_remix22 = __toESM(require_remix());
var loader18 = async () => {
  return (0, import_remix22.redirect)("/home");
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
var import_react19 = require("react");
var import_ri2 = require("react-icons/ri");
var import_gi = require("react-icons/gi");
var import_md4 = require("react-icons/md");
var import_remix23 = __toESM(require_remix());
function HomeRoute() {
  const [userId, setUserId] = (0, import_react19.useState)();
  const [user, setUser] = (0, import_react19.useState)();
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
  }, /* @__PURE__ */ React.createElement(import_remix23.Link, {
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
  }, "\u{1F4D0} Measurements")))) : /* @__PURE__ */ React.createElement("div", {
    className: "level-right container soraFont"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-1 mb-1"
  }, "Workout, Smarter."), /* @__PURE__ */ React.createElement("div", null, "Please log in to continue..."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(FirebaseLogin, null))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3e1d1616", "entry": { "module": "/build/entry.client-KWXEEGBH.js", "imports": ["/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-IJNQQZBD.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XOHOZQTC.js", "imports": ["/build/_shared/chunk-64LUTL5V.js", "/build/_shared/chunk-Q26ZBBJM.js", "/build/_shared/chunk-VBXVBJZG.js", "/build/_shared/chunk-DVGEG56B.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-WF5GBRGG.js", "imports": ["/build/_shared/chunk-LU2EMVWA.js", "/build/_shared/chunk-CAES5YAW.js", "/build/_shared/chunk-FQYQUUJB.js", "/build/_shared/chunk-63EZLUN2.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-WPX6RUQO.js", "imports": ["/build/_shared/chunk-2ALVQA5M.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-W3CBT2CT.js", "imports": ["/build/_shared/chunk-2ALVQA5M.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-NS2J2Y5B.js", "imports": ["/build/_shared/chunk-CSUDAYY5.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-7ZWRO26O.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-MHLKZH5M.js", "imports": ["/build/_shared/chunk-2ALVQA5M.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-G2UUGRPK.js", "imports": ["/build/_shared/chunk-2ALVQA5M.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-JJJ7BFJT.js", "imports": ["/build/_shared/chunk-CSUDAYY5.js", "/build/_shared/chunk-CAES5YAW.js", "/build/_shared/chunk-FQYQUUJB.js", "/build/_shared/chunk-63EZLUN2.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-V35ELNPU.js", "imports": ["/build/_shared/chunk-OWPE5CPN.js", "/build/_shared/chunk-FQYQUUJB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HZZQ35P4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-LRWWLG4H.js", "imports": ["/build/_shared/chunk-FQYQUUJB.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-URSPQ5HS.js", "imports": ["/build/_shared/chunk-WHYO2SPG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements": { "id": "routes/measurements", "parentId": "root", "path": "measurements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements-B6ET3KXY.js", "imports": ["/build/_shared/chunk-FQYQUUJB.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/add": { "id": "routes/measurements/add", "parentId": "routes/measurements", "path": "add", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/add-ANYX3P5J.js", "imports": ["/build/_shared/chunk-7UEEJRSY.js", "/build/_shared/chunk-CAES5YAW.js", "/build/_shared/chunk-DVGEG56B.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/measurements/history": { "id": "routes/measurements/history", "parentId": "routes/measurements", "path": "history", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/measurements/history-RQVW5LNU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-U5UF5QJC.js", "imports": ["/build/_shared/chunk-FQYQUUJB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-WJU2U3HJ.js", "imports": ["/build/_shared/chunk-CSUDAYY5.js", "/build/_shared/chunk-Q26ZBBJM.js", "/build/_shared/chunk-VBXVBJZG.js", "/build/_shared/chunk-DVGEG56B.js", "/build/_shared/chunk-63EZLUN2.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-7I4QF7E3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-B2Z2NVTC.js", "imports": ["/build/_shared/chunk-7UEEJRSY.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-2KHI2KCZ.js", "imports": ["/build/_shared/chunk-OWPE5CPN.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-7Q5DUOTL.js", "imports": ["/build/_shared/chunk-CSUDAYY5.js", "/build/_shared/chunk-FQYQUUJB.js", "/build/_shared/chunk-63EZLUN2.js", "/build/_shared/chunk-WHYO2SPG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3E1D1616.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXG1lYXN1cmVtZW50cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxtZWFzdXJlbWVudHNcXGhpc3RvcnkuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbWVhc3VyZW1lbnRzXFxhZGQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL21lYXN1cmVtZW50cy5qcyIsICIuLi9hcHAvdXRpbHMvdXRpbHMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3MuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3giLCAiLi4vYXBwL3NlcnZpY2UvZXhlcmNpc2VzLmpzIiwgIi4uL2FwcC9zZXJ2aWNlL3NldHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcdHJhaW5lZC10aGlzLXdlZWsuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0cy5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcd29ya291dHMtcGVyLXdlZWsuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL3dvcmtvdXRzLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vlay5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xccGVyc29uYWwtYmVzdHMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BlcnNvbmFsQmVzdC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc3RhdGlzdGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHNjaGVkdWxlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGxvY2F0aW9ucy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0cy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudFxcYWRkRXhlcmNpc2UuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcY3VycmVudEV4ZXJjaXNlcy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2V0SW5wdXQuanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxjcmVhdGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcaG9tZS5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWFzdXJlbWVudHNcXFxcaGlzdG9yeS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXG1lYXN1cmVtZW50c1xcXFxhZGQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3MuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxccHJvZ3Jlc3NpdmUtb3ZlcmxvYWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcdHJhaW5lZC10aGlzLXdlZWsuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxcd29ya291dHMtcGVyLXdlZWsuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxhbmFseXRpY3NcXFxccGVyc29uYWwtYmVzdHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHN0YXRpc3RpY3MuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHNjaGVkdWxlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0XFxcXCR3b3Jrb3V0SWRcXFxcX19hZGRFeGVyY2lzZVBhcmVudC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0XFxcXCR3b3Jrb3V0SWRcXFxcX19hZGRFeGVyY2lzZVBhcmVudFxcXFxhZGRFeGVyY2lzZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0XFxcXCR3b3Jrb3V0SWRcXFxcY3VycmVudEV4ZXJjaXNlcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTkgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxjcmVhdGUuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaG9tZS5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9ucy86bG9jYXRpb25JZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhc3VyZW1lbnRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWFzdXJlbWVudHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVhc3VyZW1lbnRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2hpc3RvcnlcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9tZWFzdXJlbWVudHNcIixcbiAgICAgIHBhdGg6IFwiaGlzdG9yeVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL21lYXN1cmVtZW50c1wiLFxuICAgICAgcGF0aDogXCJhZGRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJzdGF0aXN0aWNzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic2NoZWR1bGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9uc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwid29ya291dHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTRcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXRcIixcbiAgICAgIHBhdGg6IFwiOndvcmtvdXRJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50XCIsXG4gICAgICBwYXRoOiBcImFkZEV4ZXJjaXNlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCIsXG4gICAgICBwYXRoOiBcImN1cnJlbnRFeGVyY2lzZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMThcbiAgICB9LFxuICBcInJvdXRlcy9jcmVhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NyZWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjcmVhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvaG9tZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIxXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKTtcbmRvdGVudi5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XHJcbiAgTGluayxcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbiAgdXNlTG9hZGVyRGF0YSxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpbi5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcclxuICByZXR1cm4geyB0aXRsZTogXCJHYWluc0Jyb1wiIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmaXJlYmFzZUNvbmZpZzoge1xyXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkFVVEhfRE9NQUlOLFxyXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlBST0pFQ1RfSUQsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlNUT1JBR0VfQlVDS0VULFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTVNHX1NFTkRFUl9JRCxcclxuICAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LkFQUF9JRCxcclxuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTUVBU1VSRU1FTlRfSUQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWJsYWNrIHAtMCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBpcy1zaXplLTUgc29yYUZvbnRcIiB0bz1cIi9ob21lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+R0FJTlM8L2Rpdj5cclxuICAgICAgICAgIEJST1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZGF0YS5maXJlYmFzZUNvbmZpZyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiYmxhY2tcIj48L21ldGE+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuXHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jc3MuZ2cvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9jc3MvVHlwZWFoZWFkLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcmVhY3QtZGF0ZXBpY2tlci8yLjE0LjEvcmVhY3QtZGF0ZXBpY2tlci5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3JhOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiKX0+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICA8RmlyZWJhc2VMb2dpbiBhcHA9e2FwcH0gLz5cclxuICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcblxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKHByb3BzLmFwcCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvb2dsZUxvZ2luKCkge1xyXG4gICAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshdXNlciAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrIHNvcmFGb250XCI+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHtkcm9wZG93bkFjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgaXMtZnVsbHdpZHRoIHNvcmFGb250IFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duQWN0aXZlKChhY3RpdmVTdGF0ZSkgPT4gIWFjdGl2ZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWRFeHBhbmRNb3JlIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVBhcmFtcywgdXNlTG9hZGVyRGF0YSwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0V29ya291dHNQZXJMb2NhdGlvbixcclxuICBkZWxldGVMb2NhdGlvbixcclxuICByZW5hbWVMb2NhdGlvbixcclxufSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzQXRMb2NhdGlvbiA9IGF3YWl0IGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcik7XHJcblxyXG4gIGNvbnN0IGdldE5hbWVGcm9tSWQgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/Lm5hbWVcclxuICApO1xyXG4gIGNvbnN0IHdvcmtvdXRzUGVyTG9jYXRpb24gPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/LmNvdW50ID8/IDBcclxuICApO1xyXG4gIHJldHVybiBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbklkID0gZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIik7XHJcblxyXG4gICAgYXdhaXQgcmVuYW1lTG9jYXRpb24oXHJcbiAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgIGxvY2F0aW9uTmFtZS5yZXBsYWNlKC8gL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIC8vIERFTEVURVxyXG4gICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGRlbGV0ZUxvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKSk7XHJcbiAgICBpZiAoZGVsZXRlZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZGVsZXRlZD8uWzBdPy51c2VyX2lkO1xyXG4gICAgICByZXR1cm4gcmVkaXJlY3QodXNlciA/IGAvbG9jYXRpb25zP3VzZXI9JHt1c2VyfWAgOiBcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBcIlN1Y2Nlc3NcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uUm91dGUoKSB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbklkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbc2hvd0lucHV0LCBzZXRTaG93SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZW5hbWVJbnB1dCwgc2V0UmVuYW1lSW5wdXRdID0gdXNlU3RhdGUoXHJcbiAgICBzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0gPz8gbnVsbClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTMgY29udGFpbmVyIGJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+XHJcbiAgICAgICAgICB7c3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aT57Z2V0TmFtZUZyb21JZFtsb2NhdGlvbklkXX08L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICBOdW1iZXIgb2Ygd29ya291dHM6IHt3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSA/PyAwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICB7c2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW5hbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCwgbG9jYXRpb25OYW1lOiByZW5hbWVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQVVRcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IXNob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgbGV2ZWwtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5wdXQoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlbmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHshd29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9ucyh1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3Blcl9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTG9jYXRpb24obG9jYXRpb25JZCwgbG9jYXRpb25OYW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC51cGRhdGUoeyBuYW1lOiBsb2NhdGlvbk5hbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTG9jYXRpb24obG9jYXRpb25OYW1lLCB1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmluc2VydCh7IG5hbWU6IGxvY2F0aW9uTmFtZSwgdXNlcl9pZDogdXNlcklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5sZXQgc3VwYWJhc2U7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XHJcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9BTk9OX0tFWTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnN1cGFiYXNlKSB7XHJcbiAgICBnbG9iYWwuc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbiAgfVxyXG4gIHN1cGFiYXNlID0gZ2xvYmFsLnN1cGFiYXNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTtcclxuIiwgImltcG9ydCB7XHJcbiAgdXNlU3VibWl0LFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbiAgTGluayxcclxuICB1c2VTZWFyY2hQYXJhbXMsXHJcbiAgT3V0bGV0LFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIHVzZUxvY2F0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVhc3VyZW1lbnRSb3V0ZSgpIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfSBzZXRVc2VySWQ9e3NldFVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIgbXQtNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5Cb2R5IE1lYXN1cmVtZW50czwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL21lYXN1cmVtZW50cy9oaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC9tZWFzdXJlbWVudHMvaGlzdG9yeT91c2VyPSR7dXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICBNZWFzdXJlbWVudCBIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9tZWFzdXJlbWVudHMvYWRkXCIgPyBcImlzLWFjdGl2ZVwiIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21lYXN1cmVtZW50cy9hZGQ/dXNlcj0ke3VzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgQWRkIE1lYXN1cmVtZW50c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckF1dGhvcmlzZWRDb21wb25lbnQocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAocmVzdWx0KSA9PiB7XHJcbiAgICByZXN1bHQgPyBzZXRVc2VyKHJlc3VsdCkgOiBzZXRVc2VyKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgICAgbmF2aWdhdGUoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgbGV0IF8gPSBwcm9wcy5zZXRVc2VyID8gcHJvcHMuc2V0VXNlcih1c2VyKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICAgaWYgKHByb3BzLmlkUHJlZGljYXRlICYmICFwcm9wcy5pZFByZWRpY2F0ZSh1aWQpKSB7XHJcbiAgICAgICAgbmF2aWdhdGUoXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgXyA9IHByb3BzLnNldFVzZXJJZCA/IHByb3BzLnNldFVzZXJJZCh1aWQpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8Pntwcm9wcy5jaGlsZHJlbn08Lz47XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lYXN1cmVtZW50SGlzdG9yeVJvdXRlKCkge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPkhpc3Rvcnk8L2Rpdj47XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVN1Ym1pdCwgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGdldE1lYXN1cmVtZW50VHlwZXMgfSBmcm9tIFwifi9zZXJ2aWNlL21lYXN1cmVtZW50cy5qc1wiO1xyXG5cclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFR5cGVhaGVhZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnREYXRlVGltZSB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IG1ldHJpY3MgPSBhd2FpdCBnZXRNZWFzdXJlbWVudFR5cGVzKCk7XHJcbiAgcmV0dXJuIG1ldHJpY3M7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIHJldHVybiByZWRpcmVjdChcIi9tZWFzdXJlbWVudHMvYWRkXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkTWVhc3VyZW1lbnRSb3V0ZSgpIHtcclxuICBjb25zdCBtZXRyaWMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTWV0cmljLCBzZXRTZWxlY3RlZE1ldHJpY10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZ2V0Q3VycmVudERhdGVUaW1lKCkpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzdWJtaXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgbWV0cmljOiBzZWxlY3RlZE1ldHJpYyxcclxuICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TWV0cmljPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWV0cmljXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VsZWN0ZWRNZXRyaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWV0cmljLm1hcCgobSkgPT4gc3RhcnRDYXNlKG1bXCJtZWFzdXJlbWVudFwiXSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIE1lYXN1cmVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlZhbHVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXRyaWNWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nIHwgISh2YWx1ZSAmJiBzZWxlY3RlZE1ldHJpYyAmJiBkYXRlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBNZWFzdXJlbWVudFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50VHlwZXMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIm1lYXN1cmVtZW50c1wiKS5zZWxlY3QoXCIqXCIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcGFkU3RhcnQgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZU9mSVNPV2Vlayh3LCB5KSB7XHJcbiAgdmFyIHNpbXBsZSA9IG5ldyBEYXRlKHksIDAsIDEgKyAodyAtIDEpICogNyk7XHJcbiAgdmFyIGRvdyA9IHNpbXBsZS5nZXREYXkoKTtcclxuICB2YXIgSVNPd2Vla1N0YXJ0ID0gc2ltcGxlO1xyXG4gIGlmIChkb3cgPD0gNCkgSVNPd2Vla1N0YXJ0LnNldERhdGUoc2ltcGxlLmdldERhdGUoKSAtIHNpbXBsZS5nZXREYXkoKSArIDEpO1xyXG4gIGVsc2UgSVNPd2Vla1N0YXJ0LnNldERhdGUoc2ltcGxlLmdldERhdGUoKSArIDggLSBzaW1wbGUuZ2V0RGF5KCkpO1xyXG4gIHJldHVybiBJU093ZWVrU3RhcnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrTnVtYmVyKGRhdGUpIHtcclxuICB2YXIgZCA9IG5ldyBEYXRlKFxyXG4gICAgRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKVxyXG4gICk7XHJcbiAgdmFyIGRheU51bSA9IGQuZ2V0VVRDRGF5KCkgfHwgNztcclxuICBkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCkgKyA0IC0gZGF5TnVtKTtcclxuICB2YXIgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoZC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSk7XHJcbiAgcmV0dXJuIE1hdGguY2VpbCgoKGQgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDAgKyAxKSAvIDcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudERhdGVUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIHZhciBtb250aCA9IHBhZFN0YXJ0KGRhdGUuZ2V0TW9udGgoKSArIDEsIDIsIDApO1xyXG4gIHZhciBkYXkgPSBwYWRTdGFydChkYXRlLmdldERhdGUoKSwgMiwgMCk7XHJcbiAgdmFyIGhyID0gcGFkU3RhcnQoZGF0ZS5nZXRIb3VycygpLCAyLCAwKTtcclxuICB2YXIgbWluID0gcGFkU3RhcnQoZGF0ZS5nZXRNaW51dGVzKCksIDIsIDApO1xyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtocn06JHttaW59YDtcclxufTtcclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0V2Vla051bWJlciB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NSb3V0ZSgpIHtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB1c2VyID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgd2Vla1llYXIgPSBgJHtkYXlqcygpLnllYXIoKX0tVyR7Z2V0V2Vla051bWJlcihkYXRlKX1gO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9cIikge1xyXG4gICAgICBuYXZpZ2F0ZShgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWtZZWFyfWApO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHVzZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbS01XCI+QW5hbHl0aWNzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5FZmZvcnQgU3RhdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcn0md2Vlaz0ke3dlZWtZZWFyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRyYWluZWQgdGhpcyBXZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlaz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3Jrb3V0cyBwZXIgV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3NjaGVkdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3Mvc2NoZWR1bGU/dXNlcj0ke3VzZXJ9JndlZWs9JHt3ZWVrWWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zdGF0aXN0aWNzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRpc3RpY3NcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlN0cmVuZ3RoIFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZD91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc2l2ZSBPdmVybG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHM/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQmVzdHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvYW5hbHl0aWNzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRFeGVyY2lzZXNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTdWJtaXQsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQcm9ncmVzc2l2ZU92ZXJsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlT3ZlcmxvYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGxldCBleGVyY2lzZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZXhlcmNpc2VfaWRcIikgPz8gZXhlcmNpc2VzWzBdPy5pZDtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyLCBleGVyY2lzZSk7XHJcblxyXG4gIGNvbnN0IHNldHNCeUV4ZXJjaXNlID0gZ3JvdXBCeShzZXRzLCAocykgPT4gcy5leGVyY2lzZV9pZClbZXhlcmNpc2VdO1xyXG4gIHJldHVybiB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBzZXRzQnlFeGVyY2lzZSwgZXhlcmNpc2VzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzaW5nbGVFeGVyY2lzZUNoYXJ0ID0gc2V0c0J5RXhlcmNpc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+UHJvZ3Jlc3NpdmUgT3ZlcmxvYWQ8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBtYi00IGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJleGVyY2lzZV9pZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZV9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZXhlcmNpc2VzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZS5pZH0gdmFsdWU9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtzdGFydENhc2UoZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGU/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGUudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCA/IChcclxuICAgICAgICAgIDxQcm9ncmVzc2l2ZU92ZXJsb2FkIHByb2dyZXNzaXZlT3ZlcmxvYWQ9e3NpbmdsZUV4ZXJjaXNlQ2hhcnR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiTm90aGluZyB0cmFpbmVkIHlldFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKSB7XHJcbiAgaWYgKG11c2NsZV9ncm91cCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJleGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJtdXNjbGVfZ3JvdXBcIiwgbXVzY2xlX2dyb3VwKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZXhlcmNpc2VcIikuc2VsZWN0KFwiKlwiKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUdyb3VwcygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJkaXN0aW5jdF9tdXNjbGVfZ3JvdXBzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLm9yZGVyKFwibmFtZVwiKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZXhlcmNpc2VzX2Zvcl91c2VyXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeVN0YXRzRm9yRXhlcmNpc2UodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGFzdF93b3Jrb3V0X3dpdGhfZXhlcmNpc2VcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2V0KGZvcm1TZXQpIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbiAgLy8gY2xlYW4gdXBcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJlbXB0eV93b3Jrb3V0X2V4ZXJjaXNlc1wiKS5zZWxlY3QoXCIqXCIpO1xyXG4gIGNvbnN0IGlkcyA9IGRhdGEubWFwKCh3b3Jrb3V0X2V4ZXJjaXNlKSA9PiB3b3Jrb3V0X2V4ZXJjaXNlLmlkKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKS5kZWxldGUoKS5pbihcImlkXCIsIGlkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRTZXQoZm9ybVNldCkge1xyXG4gIGNvbnN0IGFkZCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogZm9ybVNldC5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZD8uZGF0YT8uWzBdO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXQoZm9ybVNldCkge1xyXG4gIGxldCBzdWJtaXNzaW9uU2V0ID0ge1xyXG4gICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdlaWdodEZvclNldCA9IGZvcm1TZXQuZ2V0KFwid2VpZ2h0XCIpO1xyXG4gIGNvbnN0IHJlcHNGb3JTZXQgPSBmb3JtU2V0LmdldChcInJlcGV0aXRpb25zXCIpO1xyXG4gIGNvbnN0IGNvbXBsZXRlZEZvclNldCA9IGZvcm1TZXQuZ2V0KFwiY29tcGxldGVkXCIpO1xyXG5cclxuICBpZiAod2VpZ2h0Rm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LndlaWdodCA9IHBhcnNlRmxvYXQod2VpZ2h0Rm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKHJlcHNGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQucmVwZXRpdGlvbnMgPSBwYXJzZUZsb2F0KHJlcHNGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAoY29tcGxldGVkRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZEZvclNldCA9PT0gXCJ0cnVlXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAudXBkYXRlKHN1Ym1pc3Npb25TZXQpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4vL2RlZmF1bHQgZmlsdGVycyBmb3IgbGF0ZXN0IHdlZWtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNldHNGb3JVc2VyKHVzZXJJZCwgZmlsdGVyX3N0YXJ0LCBmaWx0ZXJfZW5kKSB7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfc3RhcnQgPSBmaWx0ZXJfc3RhcnRcclxuICAgID8gZGF5anMoZmlsdGVyX3N0YXJ0KVxyXG4gICAgOiBkYXlqcyhkYXlqcygpLndlZWsoZGF5anMoKS53ZWVrKCkpLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpO1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX2VuZCA9IGZpbHRlcl9lbmQgPyBkYXlqcyhmaWx0ZXJfZW5kKSA6IGRheWpzKCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAuZ3RlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfc3RhcnQpXHJcbiAgICAubHRlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfZW5kKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCwgZXhlcmNpc2VJZCkge1xyXG4gIGlmIChleGVyY2lzZUlkKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlmZXRpbWVTdGF0aXN0aWNzKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGlmZXRpbWVfc3RhdHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBzb3J0QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbkNoYXJ0LnJlZ2lzdGVyKFtUb29sdGlwXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc2l2ZU92ZXJsb2FkKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlUHJvZ3Jlc3MgPSBzb3J0QnkoXHJcbiAgICBwcm9wcy5wcm9ncmVzc2l2ZU92ZXJsb2FkLFxyXG4gICAgKGUpID0+IGUuZGF0ZXRpbWVfc3RhcnRcclxuICApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY29sb3IgPSBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgfSwwLjMpYDtcclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzaXZlT3ZlcmxvYWRcIikpO1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXhlcmNpc2VQcm9ncmVzcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZS5kYXRldGltZV9zdGFydCkuZm9ybWF0KFwiREQvTU0vWVlcIilcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlZvbHVtZSBQcm9ncmVzcyAoV2VpZ2h0IHggUmVwcylcIixcclxuICAgICAgICAgICAgZGF0YTogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+IGUubWF4X3ZvbHVtZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgVm9sdW1lOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5tYXhfdm9sdW1lfSB8IFdlaWdodDogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ud2VpZ2h0fSB8IFJlcHM6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLnJlcGV0aXRpb25zfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiPjwvY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgbG9kYXNoIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFdlZWtseVRyYWluaW5nU2V0cyBmcm9tIFwifi9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0c1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlT2ZJU09XZWVrIH0gZnJvbSBcIn4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG52YXIgY3VzdG9tUGFyc2VGb3JtYXQgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL2N1c3RvbVBhcnNlRm9ybWF0XCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge307XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgeWVhcldlZWsgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIndlZWtcIik7XHJcbiAgbGV0IFt5ZWFyLCB3ZWVrXSA9IHllYXJXZWVrLnNwbGl0KFwiLVdcIik7XHJcbiAgY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBnZXREYXRlT2ZJU09XZWVrKHdlZWssIHllYXIpO1xyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKFxyXG4gICAgdXNlcixcclxuICAgIHdlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgbmV3IERhdGUoXHJcbiAgICAgIHdlZWtTdGFydGluZ09uRGF5LnNldERhdGUod2Vla1N0YXJ0aW5nT25EYXkuZ2V0RGF0ZSgpICsgNylcclxuICAgICkudG9EYXRlU3RyaW5nKClcclxuICApO1xyXG5cclxuICByZXR1cm4gbG9kYXNoKHVzZXJXb3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGlzV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdlZWtseVNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB5ZWFyV2VlayA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCByZW5kZXJUcmFpbmVkVGhpc1dlZWsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+VHJhaW5lZCB0aGlzIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LnRvRGF0ZVN0cmluZygpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgd2Vla1N0YXJ0aW5nT25EYXkuc2V0RGF0ZSh3ZWVrU3RhcnRpbmdPbkRheS5nZXREYXRlKCkgKyA2KVxyXG4gICAgICAgICAgICApLnRvRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTJcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyV2Vla31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWs6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh3ZWVrbHlTZXRzKS5sZW5ndGggPT09IDAgJiYgXCJOb3RoaW5nIHRyYWluZWQgdGhpcyB3ZWVrXCJ9XHJcbiAgICAgICAgPFdlZWtseVRyYWluaW5nU2V0cyB3ZWVrbHlTZXRzPXt3ZWVrbHlTZXRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDw+e3JlbmRlclRyYWluZWRUaGlzV2VlaygpfTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5VHJhaW5pbmdTZXRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHNldHMgPSBwcm9wcy53ZWVrbHlTZXRzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3ZWVrbHlTZXRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhzZXRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5U2V0c1wiKSk7XHJcbiAgICBjb25zdCB3ZWVrbHlTZXRzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcblxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhzZXRzKS5tYXAoKGUpID0+IHN0YXJ0Q2FzZShlKSksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBTZXRzXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhzZXRzKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHNldHMpLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke1xyXG4gICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgICB9LDAuNClgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGNhbnZhcyBpZD1cIndlZWtseVNldHNcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHRyYW5zZm9ybSwgcGljayB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgV29ya291dFBlcldlZWsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrXCI7XHJcbmltcG9ydCB7IGdldERhdGVPZklTT1dlZWssIGdldFdlZWtOdW1iZXIgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KFxyXG4gICAgICAodykgPT5cclxuICAgICAgICBgJHtkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS55ZWFyKCl9IFdlZWsgJHtTdHJpbmcoXHJcbiAgICAgICAgICBnZXRXZWVrTnVtYmVyKG5ldyBEYXRlKHcuZGF0ZXRpbWVfc3RhcnQpKVxyXG4gICAgICAgICkucGFkU3RhcnQoMiwgXCIwXCIpfWBcclxuICAgIClcclxuICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIGxldCB3ZWVrc1RvU2hvdyA9IE9iamVjdC5rZXlzKHdvcmtvdXRzKTtcclxuICB3ZWVrc1RvU2hvdy5zb3J0KCk7XHJcbiAgd2Vla3NUb1Nob3cgPSB3ZWVrc1RvU2hvdy5zbGljZSgwLCAxMCkubWFwKFN0cmluZyk7XHJcblxyXG4gIHJldHVybiB0cmFuc2Zvcm0ocGljayh3b3Jrb3V0cywgd2Vla3NUb1Nob3cpLCAocmVzLCB2YWwsIGtleSkgPT4ge1xyXG4gICAgcmVzW2tleV0gPSB2YWw7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0c1BlcldlZWtSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zb2xlLmxvZyh3b3Jrb3V0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+V29ya291dHMgcGVyIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8V29ya291dFBlcldlZWsgd29ya291dHNQZXJXZWVrPXt3b3Jrb3V0c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdvcmtvdXQod29ya291dCkge1xyXG4gIGxldCBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCJpZFwiKVxyXG4gICAgLm1hdGNoKHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcblxyXG4gIGxldCBsb2NhdGlvbklkO1xyXG4gIGlmIChjaGVja0xvY2F0aW9uLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgICAuaW5zZXJ0KHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcbiAgfVxyXG4gIGxvY2F0aW9uSWQgPSBjaGVja0xvY2F0aW9uLmRhdGE/LlswXS5pZDtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiB3b3Jrb3V0Lm5hbWUsXHJcbiAgICAgIGRhdGV0aW1lX3N0YXJ0OiB3b3Jrb3V0LmRhdGV0aW1lLFxyXG4gICAgICBkYXRldGltZV9lbmQ6IHVuZGVmaW5lZCxcclxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uSWQsXHJcbiAgICAgIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkLFxyXG4gICAgfSxcclxuICBdKTtcclxuICByZXR1cm4gZGF0YVswXS5pZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdvcmtvdXQod29ya291dF9pZCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGNvbnN0IGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMgPVxyXG4gICAgXCIoXCIgKyB3b3Jrb3V0LmRhdGEubWFwKChlKSA9PiBlLndvcmtvdXRfZXhlcmNpc2VfaWQpLnRvU3RyaW5nKCkgKyBcIilcIjtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5maWx0ZXIoXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIsIFwiaW5cIiwgYXNzb2NpYXRlZF93b3Jrb3V0X2V4ZXJjaXNlcyk7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgY29uc3QgX2RlbGV0ZVdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiB3b3Jrb3V0X2lkIH0pO1xyXG5cclxuICByZXR1cm4gX2RlbGV0ZVdvcmtvdXQuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhOiB3b3Jrb3V0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yV29ya291dChpZCkge1xyXG4gIGxldCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwid29ya291dF9pZFwiLCBpZClcclxuICAgIC5vcmRlcihcInNldF9pZFwiKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KGlkLCBkYXRldGltZSkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLnVwZGF0ZSh7IGRhdGV0aW1lX2VuZDogZGF0ZXRpbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBpZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICByZXR1cm4gd29ya291dHMuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGV0aW1lX3N0YXJ0KSAtIG5ldyBEYXRlKGEuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RFeGVyY2lzZXRvV29ya291dCh7IHdvcmtvdXRfaWQsIGV4ZXJjaXNlX2lkIH0pIHtcclxuICBjb25zdCB3b3Jrb3V0RXhlcmNpc2UgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuc2VsZWN0KFwiKiwgZXhlcmNpc2UhaW5uZXIoKilcIilcclxuICAgIC5lcShcImV4ZXJjaXNlXCIsIGV4ZXJjaXNlX2lkKVxyXG4gICAgLmVxKFwid29ya291dFwiLCB3b3Jrb3V0X2lkKTtcclxuXHJcbiAgaWYgKHdvcmtvdXRFeGVyY2lzZT8uZGF0YSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkRXhlcmNpc2UgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuaW5zZXJ0KFt7IGV4ZXJjaXNlOiBleGVyY2lzZV9pZCwgd29ya291dDogd29ya291dF9pZCB9XSk7XHJcblxyXG4gIGNvbnN0IGFkZFNldCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogYWRkRXhlcmNpc2U/LmRhdGE/LlswXT8uaWQsXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkU2V0Py5kYXRhPy5bMF07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0KGZvcm0pIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dF9leGVyY2lzZTogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtLmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIikgfSk7XHJcbiAgcmV0dXJuO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0c1BlcldlZWsocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIndvcmtvdXRzUGVyV2Vla1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtvdXRzUGVyV2Vla1wiKSk7XHJcbiAgICBjb25zdCB3b3Jrb3V0c1BlcldlZWtDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMocHJvcHMud29ya291dHNQZXJXZWVrKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIFdvcmtvdXRzIHBlciBXZWVrXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMocHJvcHMud29ya291dHNQZXJXZWVrKSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE9iamVjdC52YWx1ZXMocHJvcHMud29ya291dHNQZXJXZWVrKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtcclxuICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgICAgfSwwLjMpYFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogNCAvIE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Y2FudmFzIGlkPVwid29ya291dHNQZXJXZWVrXCI+PC9jYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBlcnNvbmFsQmVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyKTtcclxuICBjb25zdCBiZXN0U2V0QnlFeGVyY2lzZSA9IGxvZGFzaChzZXRzKVxyXG4gICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBtYXhCeShlLCAocykgPT4gcy53ZWlnaHQgKiBzLnJlcGV0aXRpb25zKSlcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhiZXN0U2V0QnlFeGVyY2lzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbEJlc3RSb3V0ZSgpIHtcclxuICBjb25zdCBsaXN0QmVzdFNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0xXCI+UGVyc29uYWwgQmVzdHM8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8aT5XZWlnaHQgb2Ygc2V0IHdpdGggbWF4IHZvbHVtZTwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7bGlzdEJlc3RTZXRzLmxlbmd0aCA/IChcclxuICAgICAgICA8UGVyc29uYWxCZXN0cyBiZXN0U2V0cz17bGlzdEJlc3RTZXRzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiTm8gd29ya291dHMgeWV0XCJcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsUmVjb3Jkcyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwZXJzb25hbFJlY29yZHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuYmVzdFNldHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25hbFJlY29yZHNcIikpO1xyXG4gICAgY29uc3QgcHJDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogcHJvcHMuYmVzdFNldHMubWFwKCh2YWx1ZSkgPT5cclxuICAgICAgICAgIHN0YXJ0Q2FzZShgJHt2YWx1ZS5leGVyY2lzZV9uYW1lfSAke3ZhbHVlLnZhcmlhbnQgPz8gXCJcIn1gKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+IHZhbHVlLndlaWdodCksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iZXN0U2V0cy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCAke1xyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgIH0sMC40KWA7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogNCAvIHByb3BzLmJlc3RTZXRzLmxlbmd0aCxcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGNvbnRleHQuZGF0YUluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gT2JqZWN0LnZhbHVlcyhwcm9wcy5iZXN0U2V0cyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCBXZWlnaHQ6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB8IFZvbDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHggJHtzZXRbZGF0YUluZGV4XS5yZXBldGl0aW9uc30gPSAke3NldFtkYXRhSW5kZXhdLm1heF92b2x1bWV9YDtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwZXJzb25hbFJlY29yZHNcIj48L2NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TGlmZXRpbWVTdGF0aXN0aWNzLCBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgcmVkdWNlLCBwaWNrLCBvbWl0IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCBzdGF0cyA9IGF3YWl0IGdldExpZmV0aW1lU3RhdGlzdGljcyh1c2VyKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGNvbnN0IHRvdGFsVGltZVNwZW50ID0gd29ya291dHNcclxuICAgIC5tYXAoKHcpID0+IGRheWpzKHcuZGF0ZXRpbWVfZW5kKS5kaWZmKHcuZGF0ZXRpbWVfc3RhcnQsIFwibWludXRlXCIpKVxyXG4gICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG4gIHJldHVybiBbc3RhdHMsIHRvdGFsVGltZVNwZW50LCBNYXRoLnJvdW5kKHRvdGFsVGltZVNwZW50IC8gd29ya291dHMubGVuZ3RoKV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0aXN0aWNzUm91dGUoKSB7XHJcbiAgY29uc3QgW3N0YXRzLCB0b3RhbFRpbWVTcGVudCwgYXZlcmFnZVRpbWVTcGVudF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYWJidiA9IHtcclxuICAgIEFXOiBcIkF2ZXJhZ2UgV2VpZ2h0XCIsXHJcbiAgICBBUjogXCJBdmVyYWdlIFJlcGV0aXRpb25zXCIsXHJcbiAgICBSZXBzOiBcIlRvdGFsIFJlcGV0aXRpb25zXCIsXHJcbiAgICBWb2w6IFwiVG90YWwgVm9sdW1lXCIsXHJcbiAgICBOdW06IFwiVG90YWwgTnVtYmVyIG9mIFNldHNcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtLCBkaWdpdHMgPSAyKSA9PiB7XHJcbiAgICBjb25zdCBsb29rdXAgPSBbXHJcbiAgICAgIHsgdmFsdWU6IDEsIHN5bWJvbDogXCJcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTMsIHN5bWJvbDogXCJrXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWU2LCBzeW1ib2w6IFwiTVwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlOSwgc3ltYm9sOiBcIkdcIiB9LFxyXG4gICAgICB7IHZhbHVlOiAxZTEyLCBzeW1ib2w6IFwiVFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IDFlMTUsIHN5bWJvbDogXCJQXCIgfSxcclxuICAgICAgeyB2YWx1ZTogMWUxOCwgc3ltYm9sOiBcIkVcIiB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJ4ID0gL1xcLjArJHwoXFwuWzAtOV0qWzEtOV0pMCskLztcclxuICAgIHZhciBpdGVtID0gbG9va3VwXHJcbiAgICAgIC5zbGljZSgpXHJcbiAgICAgIC5yZXZlcnNlKClcclxuICAgICAgLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gbnVtID49IGl0ZW0udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGl0ZW1cclxuICAgICAgPyAobnVtIC8gaXRlbS52YWx1ZSkudG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsIFwiJDFcIikgKyBpdGVtLnN5bWJvbFxyXG4gICAgICA6IFwiMFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGZvcm1hdE51bWJlcig5MDAwMDApKTtcclxuXHJcbiAgbGV0IHdvcmtvdXRzVGFibGUgPSBzdGF0cy5tYXAoKHcpID0+ICh7XHJcbiAgICBFeGVyY2lzZTogYCR7c3RhcnRDYXNlKHcubmFtZSl9ICR7XHJcbiAgICAgIHc/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKHcudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICB9YCxcclxuICAgIFJlcHM6IE1hdGgucm91bmQody50b3RhbF9yZXBzKSxcclxuICAgIFZvbDogTWF0aC5yb3VuZCh3LnN1bV92b2x1bWUpLFxyXG4gICAgTnVtOiB3Lm51bV9zZXRzLFxyXG4gIH0pKTtcclxuICBjb25zdCBjb2x1bW5OYW1lcyA9IFsuLi5PYmplY3Qua2V5cyhPYmplY3QuZW50cmllcyh3b3Jrb3V0c1RhYmxlKVswXVsxXSldO1xyXG4gIGNvbnN0IHJvd3MgPSBPYmplY3QuZW50cmllcyh3b3Jrb3V0c1RhYmxlKS5tYXAoKFtrLCB2XSwgaW5kZXgpID0+IFtcclxuICAgIC4uLk9iamVjdC52YWx1ZXModiksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbS0yXCI+U3RhdGlzdGljczwvZGl2PlxyXG4gICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzOjwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCJcclxuICAgICAgICBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8Yj5Ub3RhbCBUaW1lOiA8L2I+XHJcbiAgICAgICAgICA8aT57dG90YWxUaW1lU3BlbnR9IG1pbjwvaT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8Yj5BdmVyYWdlIFRpbWU6IDwvYj5cclxuICAgICAgICAgIDxpPnthdmVyYWdlVGltZVNwZW50fSBtaW48L2k+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICB7Y29sdW1uTmFtZXNcclxuICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMgIT09IFwiRXhlcmNpc2VcIilcclxuICAgICAgICAgIC5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgPHAga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgIHthYmJ2W25hbWVdfSAoe25hbWV9KTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAge25hbWUgPT09IFwiVm9sXCJcclxuICAgICAgICAgICAgICAgICAgPyBmb3JtYXROdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMod29ya291dHNUYWJsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhLCBiKSA9PiBhICsgYltuYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgOiByZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHdvcmtvdXRzVGFibGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGEsIGIpID0+IGEgKyBiW25hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlRvdGFsIGxpZmV0aW1lIG1ldHJpY3MgYnkgZXhlcmNpc2U6IDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsIGZvbnRTaXplOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgaXMtc3RyaXBlZCBpcy1uYXJyb3cgaXMtaG92ZXJhYmxlIGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAge2NvbHVtbk5hbWVzLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57ZX08L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3Jvd3MubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5tYXAoKGVsZSwgZWxlSW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgIGVsZUluZGV4ID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZWxlSW5kZXh9Pntmb3JtYXROdW1iZXIoZWxlKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2VsZUluZGV4fT57ZWxlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZU9mSVNPV2VlayB9IGZyb20gXCJ+L3V0aWxzL3V0aWxzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG52YXIgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5jb25zdCB3ZWVrZGF5cyA9IFtcclxuICBcIk1vbmRheVwiLFxyXG4gIFwiVHVlc2RheVwiLFxyXG4gIFwiV2VkbmVzZGF5XCIsXHJcbiAgXCJUaHVyc2RheVwiLFxyXG4gIFwiRnJpZGF5XCIsXHJcbiAgXCJTYXR1cmRheVwiLFxyXG4gIFwiU3VuZGF5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB5ZWFyV2VlayA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwid2Vla1wiKTtcclxuICBsZXQgW3llYXIsIHdlZWtdID0geWVhcldlZWsuc3BsaXQoXCItV1wiKTtcclxuICBjb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGdldERhdGVPZklTT1dlZWsod2VlaywgeWVhcik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0U2V0c0ZvclVzZXIoXHJcbiAgICB1c2VyLFxyXG4gICAgd2Vla1N0YXJ0aW5nT25EYXkudG9EYXRlU3RyaW5nKCksXHJcbiAgICBuZXcgRGF0ZShcclxuICAgICAgd2Vla1N0YXJ0aW5nT25EYXkuc2V0RGF0ZSh3ZWVrU3RhcnRpbmdPbkRheS5nZXREYXRlKCkgKyA3KVxyXG4gICAgKS50b0RhdGVTdHJpbmcoKVxyXG4gICk7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5U2NoZWR1bGVSb3V0ZSgpIHtcclxuICBsZXQgd29ya291dERhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB5ZWFyV2VlayA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3ZWVrXCIpO1xyXG4gIGxldCBbeWVhciwgd2Vla10gPSB5ZWFyV2Vlay5zcGxpdChcIi1XXCIpO1xyXG4gIGNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZGF5anMoZ2V0RGF0ZU9mSVNPV2Vlayh3ZWVrLCB5ZWFyKSk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcblxyXG4gIGNvbnN0IHdvcmtvdXRzID0gbG9kYXNoKHdvcmtvdXREYXRhKVxyXG4gICAgLmdyb3VwQnkoKHcpID0+IGRheWpzLnV0Yyh3LmRhdGV0aW1lX3N0YXJ0KS5sb2NhbCgpLmZvcm1hdChcImRkZGRcIikpXHJcbiAgICAubWFwVmFsdWVzKCh2KSA9PlxyXG4gICAgICBsb2Rhc2godilcclxuICAgICAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKVxyXG4gICAgICAgIC52YWx1ZSgpXHJcbiAgICApXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+U2NoZWR1bGU8L2Rpdj5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LmZvcm1hdChcIkREL01NL1lZWVlcIil9PC9iPiAte1wiIFwifVxyXG4gICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5hZGQoNiwgXCJkYXlcIikuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX08L2I+e1wiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTJcIj5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwid2Vla1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17eWVhcldlZWt9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgIHtbLi4uQXJyYXkoNykua2V5cygpXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbX0gc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIgfX0+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0cz8uW3dlZWtkYXlzW2l0ZW1dXSA/IChcclxuICAgICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UgaXMtc21hbGwgaXMtc2Vjb25kYXJ5IG0tMyBgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgICB9IC0gJHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHdvcmtvdXRzPy5bd2Vla2RheXNbaXRlbV1dKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKFtrLCB2XSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKGspfSAtIHt2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtc21hbGwgaXMtbGlnaHQgbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+e2Ake1xyXG4gICAgICAgICAgICAgICAgICB3ZWVrZGF5c1tpdGVtXVxyXG4gICAgICAgICAgICAgICAgfSAtICR7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAgICAgLmFkZChpbmRleCwgXCJkYXlcIilcclxuICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlJlc3QgRGF5IFx1RDgzRFx1RENBQTwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3VibWl0LCB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbnMsIGFkZExvY2F0aW9uIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG5cclxuICByZXR1cm4gbG9jYXRpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmICghZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIikpIHtcclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgYWRkTG9jYXRpb24oZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIiksIGZvcm0uZ2V0KFwidXNlcklkXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZUxvY2F0aW9uc1JvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEgbXQtNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TYXZlZCBMb2NhdGlvbnM8L2g0PlxyXG4gICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj57c3RhcnRDYXNlKGUubmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiPkFkZCBMb2NhdGlvbjwvYj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiIG5hbWU9XCJsb2NhdGlvbk5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCwgQnNDbG9ja0hpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtYi0zXCI+V29ya291dHM8L2Rpdj5cclxuICAgICAgICB7d29ya291dHMubGVuZ3RoID09PSAwICYmIFwiTm8gd29ya291dHMgeWV0XCJ9XHJcbiAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtcIndvcmtvdXQuaWRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgdG89e2Avd29ya291dC8ke3dvcmtvdXQuaWR9L2N1cnJlbnRFeGVyY2lzZXNgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yIGlzLTVcIj5cclxuICAgICAgICAgICAgICAgICAge2RheWpzXHJcbiAgICAgICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIE1NTSBEIFlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yIGlzLTZcIj5cclxuICAgICAgICAgICAgICAgICAge2RheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KS5sb2NhbCgpLmZvcm1hdChcImg6bW0gQVwiKX1cclxuICAgICAgICAgICAgICAgICAge1wiIC0gXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHt3b3Jrb3V0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzdGFydENhc2Uod29ya291dC5sb2NhdGlvbl9uYW1lKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7d29ya291dC5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZUZpbGwgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8QnNDbG9ja0hpc3Rvcnkgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIE91dGxldCwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICBmaW5pc2hXb3Jrb3V0LFxyXG4gIGdldFdvcmtvdXQsXHJcbiAgZGVsZXRlV29ya291dCxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RvcHdhdGNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmNvbnN0IHJlbGF0aXZlVGltZSA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgd29ya291dCA9IGF3YWl0IGdldFdvcmtvdXQocGFyYW1zLndvcmtvdXRJZCk7XHJcbiAgcmV0dXJuIHdvcmtvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGZpbmlzaFdvcmtvdXQoXHJcbiAgICAgIGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSxcclxuICAgICAgZm9ybS5nZXQoXCJlbmRcIilcclxuICAgICk7XHJcbiAgICByZXR1cm4gd29ya291dDtcclxuICB9XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiREVMRVRFXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZGVsZXRlV29ya291dChmb3JtLmdldChcIndvcmtvdXRfaWRcIikpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b1RpbWUodGltZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGltZSA+IDI0ICogMzYgKiA2MCAqIDEwMDAgJiZcclxuICAgICAgICAoTWF0aC5mbG9vcih0aW1lIC8gMjQgLyAzNiAvIDYwIC8gMTAwMCkgJSAyNCkgKyBcImRheShzKSBcIn1cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAzNjAwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdvcmtvdXRNZXRhRGF0YSh3b3Jrb3V0KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBpcy1saWdodCBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItM1wiPnt3b3Jrb3V0Py5uYW1lfTwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctcGluXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3N0YXJ0Q2FzZSh3b3Jrb3V0Py5sb2NhdGlvbl9uYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1hbGFybVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBpZD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHtgJHtkYXlqc1xyXG4gICAgICAgICAgICAgIC51dGMod29ya291dD8uZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgREQgTU1NIFlZLCBISDptbVwiKX1cclxuICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0TmV3V29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSB1c2VMb2FkZXJEYXRhKClbMF07XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NoYW5nZVRpbWUsIHNldFNob3dDaGFuZ2VUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VzdG9tRGF0ZSwgc2V0Q3VzdG9tRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50XHJcbiAgICAgIHNldFVzZXJJZD17c2V0VXNlcklkfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gd29ya291dC51c2VyX2lkfVxyXG4gICAgPlxyXG4gICAgICA8PlxyXG4gICAgICAgIHt3b3Jrb3V0TWV0YURhdGEod29ya291dCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keSBub3RpZmljYXRpb24gbWItM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0Py5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0xXCI+V29ya291dCBDb21wbGV0ZWQuIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dG9UaW1lKFxyXG4gICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX2VuZCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTBcIj5UaW1lIEVsYXBzZWQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1mYW1pbHktc2Vjb25kYXJ5IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3RvcHdhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpbWU9e2RheWpzKCkgLSBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICB7IXdvcmtvdXQuZGF0ZXRpbWVfZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKCkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzaG93TWVudSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2hhbmdlVGltZSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0IEZpbmlzaCBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dDaGFuZ2VUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoZS50YXJnZXQudmFsdWUpID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tRGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VzdG9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLXN1Y2Nlc3MgbS0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoY3VzdG9tRGF0ZSkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvbiBpcy1saWdodCAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3B3YXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEwMDApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3J1bm5pbmddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9wd2F0Y2hcIj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFyYW1zLFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TXVzY2xlR3JvdXBzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSBhd2FpdCBnZXRNdXNjbGVHcm91cHMoKTtcclxuICByZXR1cm4gbXVzY2xlX2dyb3VwcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc1JvdXRlSW5kZXgoKSB7XHJcbiAgbGV0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUoYC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID8/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7bXVzY2xlX2dyb3Vwcy5tYXAoKG11c2NsZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttdXNjbGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgbXVzY2xlX2dyb3VwOiBtdXNjbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA9PT0gbXVzY2xlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N0YXJ0Q2FzZShtdXNjbGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgcmVkaXJlY3QsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZ2V0RXhlcmNpc2VzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IG11c2NsZV9ncm91cCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApO1xyXG5cclxuICByZXR1cm4gZXhlcmNpc2VzO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgd29ya291dElkLCB1c2VyIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGV4ZXJjaXNlID0gZm9ybS5nZXQoXCJleGVyY2lzZVwiKTtcclxuXHJcbiAgYXdhaXQgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0KHtcclxuICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgIGV4ZXJjaXNlX2lkOiBleGVyY2lzZSxcclxuICB9KTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRFeGVyY2lzZVJvdXRlKCkge1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBleE5hbWVUb0lkTWFwID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeShcclxuICAgICAgZXhlcmNpc2VzLFxyXG4gICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgYCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgIH1gXHJcbiAgICApLFxyXG4gICAgKGUpID0+IGVbMF0uaWRcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFR5cGVhaGVhZFxyXG4gICAgICAgIGlkPVwiZXhlcmNpc2Vfb3B0aW9uc1wiXHJcbiAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgIG9wdGlvbnM9e2V4ZXJjaXNlcy5tYXAoXHJcbiAgICAgICAgICAoZXhlcmNpc2UpID0+XHJcbiAgICAgICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBFeGVyY2lzZVwiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZSBtdC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgZXhlcmNpc2U6IGV4TmFtZVRvSWRNYXBbc2VsZWN0ZWRdIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIlBPU1RcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhcmsgXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkIHx8IGRpc2FibGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgdG89e2Avd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2B9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0XCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlUGFyYW1zLCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCAqIHMucmVwZXRpdGlvbnMpKVxyXG4gICAgICAudmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4ZXJjaXNlU2V0cyA9IGdyb3VwQnkoXHJcbiAgICBzZXRzRm9yV29ya291dCxcclxuICAgIChzZXQpID0+XHJcbiAgICAgIGAke3N0YXJ0Q2FzZShzZXQuZXhlcmNpc2VfbmFtZSl9ICR7XHJcbiAgICAgICAgc2V0LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKHNldC52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgfWBcclxuICApO1xyXG4gIHJldHVybiB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwiZXhlcmNpc2VcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRFeGVyY2lzZXNSb3V0ZSgpIHtcclxuICBjb25zdCB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2hvd0RlbGV0ZSwgc2V0U2hvd0RlbGV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2NhbEV4ZXJjaXNlU3RhdGUsIHNldExvY2FsRXhlcmNpc2VTdGF0ZV0gPSB1c2VTdGF0ZShleGVyY2lzZVNldHMpO1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TG9jYWxFeGVyY2lzZVN0YXRlKGV4ZXJjaXNlU2V0cyksIFtleGVyY2lzZVNldHNdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhlcmNpc2VGb3JtID0gKGV4ZXJjaXNlX25hbWUsIHNldHMpID0+IHtcclxuICAgIGNvbnN0IGV4ZXJjaXNlSWQgPSBzZXRzWzBdPy5leGVyY2lzZV9pZDtcclxuICAgIGlmIChleGVyY2lzZUlkID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXhlcmNpc2VTZXRGb3JtID0ge1xyXG4gICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2VfaWQ6IHNldHNbMF0ud29ya291dF9leGVyY2lzZV9pZCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0U2V0Rm9ybSA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMsXHJcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVGdW5jID0gKGluZGV4KSA9PiB7XHJcbiAgICAgIHNldExvY2FsRXhlcmNpc2VTdGF0ZSgob2xkU3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4ub2xkU3RhdGUgfTtcclxuICAgICAgICBuZXdTdGF0ZVtleGVyY2lzZV9uYW1lXSA9IG5ld1N0YXRlW2V4ZXJjaXNlX25hbWVdLmZpbHRlcihcclxuICAgICAgICAgIChzKSA9PiBzLnNldF9pZCAhPT0gaW5kZXhcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGdW5jID0gKCkgPT4ge1xyXG4gICAgICBzZXRMb2NhbEV4ZXJjaXNlU3RhdGUoKG9sZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLm9sZFN0YXRlIH07XHJcbiAgICAgICAgbmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0gPSBbLi4ubmV3U3RhdGVbZXhlcmNpc2VfbmFtZV0sIGV4ZXJjaXNlU2V0Rm9ybV07XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hlci5zdWJtaXQoZXhlcmNpc2VTZXRGb3JtLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJldmlvdXNCZXN0U2V0ID0gYmVzdFNldEJ5RXhlcmNpc2VbZXhlcmNpc2VJZF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiB7cHJldmlvdXNCZXN0U2V0LndlaWdodH0geHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0LnJlcGV0aXRpb25zfSB8IHtwcmV2aW91c0Jlc3RTZXQubWF4X3ZvbHVtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi0yIG10LTJcIiAvPlxyXG5cclxuICAgICAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICBpbmRleD17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICB3ZWlnaHQ9e3NldC53ZWlnaHR9XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkPXtzZXQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIHJlcGV0aXRpb25zPXtzZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVsZXRlRnVuYz17KCkgPT4gZGVsZXRlRnVuYyhzZXQuc2V0X2lkKX1cclxuICAgICAgICAgICAgICBzdWJtaXRGdW5jPXtzdWJtaXRTZXRGb3JtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9ucyBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0RnVuYygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1mdWxsd2lkdGggaXMtYmxhY2sgaXMtc21hbGwgdGlsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgKyBTZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIHNob3dEZWxldGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfSBkcm9wZG93biBpcy1yaWdodGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51NlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZSgoZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZXhlcmNpc2VJZF06ICEoZT8uW2V4ZXJjaXNlSWRdID8/IGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBwLTAgbS0wXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBwLTAgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcC0yIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXIgaXMtc21hbGwgaXMtZnVsbHdpZHRoIG0tMCBwLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5leGVyY2lzZVNldEZvcm0sIHR5cGU6IFwiZXhlcmNpc2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBFeGVyY2lzZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYnV0dG9ucz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7T2JqZWN0LmVudHJpZXMobG9jYWxFeGVyY2lzZVN0YXRlKS5tYXAoXHJcbiAgICAgICAgKFtleGVyY2lzZV9uYW1lLCBzZXRzXSwgZXhJbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggaXMtc21hbGxcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0SW5wdXQocHJvcHMpIHtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUocHJvcHMud2VpZ2h0KTtcclxuICBjb25zdCBbcmVwZXRpdGlvbnMsIHNldFJlcGV0aXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLnJlcGV0aXRpb25zKTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUocHJvcHMuY29tcGxldGVkKTtcclxuICBjb25zdCB1cGRhdGVEYiA9IGRlYm91bmNlKFxyXG4gICAgKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpID0+XHJcbiAgICAgIHByb3BzLnN1Ym1pdEZ1bmMod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCksXHJcbiAgICAyMDAsXHJcbiAgICB7XHJcbiAgICAgIGxlYWRpbmc6IHRydWUsXHJcbiAgICAgIHRyYWlsaW5nOiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gIH0sIFt3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbWItMiBwLTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjF2aFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29tcGxldGVkID8gXCIjZWJmZmZjXCIgOiBcIiNmNWY1ZjVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiXHJcbiAgICAgICAgICB2YWx1ZT17d2VpZ2h0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFdlaWdodChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwc1wiXHJcbiAgICAgICAgICB2YWx1ZT17cmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVwZXRpdGlvbnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgZS50YXJnZXQudmFsdWUsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUZ1bmN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgY3JlYXRlV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25zIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZVRpbWUgfSBmcm9tIFwifi91dGlscy91dGlsc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IHVzZXJJZCA9IGZvcm0uZ2V0KFwidXNlcklkXCIpO1xyXG4gIGxldCBuYW1lID0gZm9ybS5nZXQoXCJuYW1lXCIpO1xyXG4gIGxldCBkYXRldGltZSA9IGZvcm0uZ2V0KFwiZGF0ZXRpbWVcIik7XHJcbiAgbGV0IGxvY2F0aW9uID0gZm9ybS5nZXQoXCJsb2NhdGlvblwiKTtcclxuICBsb2NhdGlvbiA9IGxvY2F0aW9uPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKC8gL2csIFwiX1wiKSA/PyBudWxsO1xyXG4gIGNvbnN0IHdvcmtvdXRPYmplY3RJZCA9IGF3YWl0IGNyZWF0ZVdvcmtvdXQoe1xyXG4gICAgbmFtZSxcclxuICAgIGRhdGV0aW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICB1c2VySWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZWRpcmVjdChgL3dvcmtvdXQvJHt3b3Jrb3V0T2JqZWN0SWR9L2N1cnJlbnRFeGVyY2lzZXNgKTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhc0xvY2F0aW9uLCBzZXRIYXNMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkNyZWF0ZSBOZXcgV29ya291dDwvaDQ+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB1aWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRldGltZVwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXlqcyhgJHtldmVudC50YXJnZXQuZGF0ZXRpbWVMb2NhbC52YWx1ZX06MDBgKS51dGMoKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcImRkZGRcIil9IHdvcmtvdXRgXHJcbiAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQodXNlcklkKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRhdGV0aW1lKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hbWUvRGVzYzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRkZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9IHdvcmtvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGV0aW1lTG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2V0Q3VycmVudERhdGVUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXRIYXNMb2NhdGlvbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXRIYXNMb2NhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHNlbGVjdCBgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImxvY2F0aW9uc1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17c3RhcnRDYXNlKGl0ZW0ubmFtZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb2NhdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9ob21lXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPD48Lz47XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpQWRkQm94RmlsbCwgUmlMaW5lQ2hhcnRGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEdpU3Ryb25nIH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XHJcbmltcG9ydCB7IE1kTG9jYXRpb25PbiB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tIFwifi9jb21wb25lbnRzL0ZpcmViYXNlTG9naW5cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVJvdXRlKCkge1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcklkPXtzZXRVc2VySWR9IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLXRvdWNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBcIj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm94IHNvcmFGb250IHByaW1hcnkgaGFzLXRleHQtd2hpdGUgdGl0bGUgbWItMiBpcy00XCI+XHJcbiAgICAgICAgICAgICAgICAgIEhlbGxvLCB7dXNlciAmJiB1c2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGE+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb3JhRm9udCBib3ggcC00IG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL2NyZWF0ZT91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQUEgQ3JlYXRlIFdvcmtvdXRcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTQgbWItMiBzb3JhRm9udCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzLz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDQzggQW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avd29ya291dHM/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0M1IFdvcmtvdXRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2xvY2F0aW9ucz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0NcdURGRUEgTG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3ggcC00IG1iLTIgc29yYUZvbnQgXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL21lYXN1cmVtZW50cz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcdUQ4M0RcdURDRDAgTWVhc3VyZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgY29udGFpbmVyIHNvcmFGb250XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBtYi0xXCI+V29ya291dCwgU21hcnRlci48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+UGxlYXNlIGxvZyBpbiB0byBjb250aW51ZS4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8RmlyZWJhc2VMb2dpbiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOiczZTFkMTYxNicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtS1dYRUVHQkguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtST1pPR1NRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUpOUVFaQkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWE9IT1pRVEMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTY0TFVUTDVWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUTI2WkJCSk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WQlhWQkpaRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLURWR0VHNTZCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYW5hbHl0aWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy1XRjVHQlJHRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTFUyRU1WV0EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DQUVTNVlBVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZRWVFVVUpCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNjNFWkxVTjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XSFlPMlNQRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwZXJzb25hbC1iZXN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMtV1BYNlJVUU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJBTFZRQTVNLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkLVczQ0JUMkNULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yQUxWUUE1TS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3NjaGVkdWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZS1OUzJKMlk1Qi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1NVREFZWTUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzonc3RhdGlzdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljcy03WldSTzI2Ty5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid0cmFpbmVkLXRoaXMtd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWstTUhMS1pINU0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJBTFZRQTVNLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2VlaycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOid3b3Jrb3V0cy1wZXItd2VlaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWstRzJVVUdSUEsuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJBTFZRQTVNLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NyZWF0ZS1KSko3QkZKVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1NVREFZWTUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1DQUVTNVlBVy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZRWVFVVUpCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNjNFWkxVTjIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XSFlPMlNQRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtVjM1RUxOUFUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9XUEU1Q1BOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRlFZUVVVSkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUhaWlEzNVA0LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMtTFJXV0xHNEguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZRWVFVVUpCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0hZTzJTUEcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucy86bG9jYXRpb25JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQtVVJTUFE1SFMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdIWU8yU1BHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzJzp7J2lkJzoncm91dGVzL21lYXN1cmVtZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWFzdXJlbWVudHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVhc3VyZW1lbnRzLUI2RVQzS1hZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GUVlRVVVKQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdIWU8yU1BHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVhc3VyZW1lbnRzL2FkZCc6eydpZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkJywncGFyZW50SWQnOidyb3V0ZXMvbWVhc3VyZW1lbnRzJywncGF0aCc6J2FkZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWFzdXJlbWVudHMvYWRkLUFOWVgzUDVKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VUVFSlJTWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNBRVM1WUFXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFZHRUc1NkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeSc6eydpZCc6J3JvdXRlcy9tZWFzdXJlbWVudHMvaGlzdG9yeScsJ3BhcmVudElkJzoncm91dGVzL21lYXN1cmVtZW50cycsJ3BhdGgnOidoaXN0b3J5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lYXN1cmVtZW50cy9oaXN0b3J5LVJRVlc1TE5VLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC1VNVVGNVFKQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRlFZUVVVSkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0JywncGF0aCc6Jzp3b3Jrb3V0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkLVdKVTJVM0hKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DU1VEQVlZNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVEyNlpCQkpNLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVkJYVkJKWkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1EVkdFRzU2Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTYzRVpMVU4yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0hZTzJTUEcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50LTdJNFFGN0UzLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZSc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZScsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50JywncGF0aCc6J2FkZEV4ZXJjaXNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlLUIyWjJOVlRDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03VUVFSlJTWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdIWU8yU1BHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzonY3VycmVudEV4ZXJjaXNlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcy0yS0hJMktDWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT1dQRTVDUE4uanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0cyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0cy03UTVEVU9UTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1NVREFZWTUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GUVlRVVVKQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTYzRVpMVU4yLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV0hZTzJTUEcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTNFMUQxNjE2LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FB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
