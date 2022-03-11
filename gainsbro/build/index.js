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
var import_remix4 = __toESM(require_remix());
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix4.useSearchParams)();
  const location = (0, import_remix4.useLocation)();
  const user = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
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
    href: `/analytics/trained-this-week?user=${user}`
  }, "Trained this week")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/workouts-per-week" ? "is-active" : null,
    href: `/analytics/workouts-per-week?user=${user}`
  }, "Workouts per Week")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: location.pathname === "/analytics/schedule" ? "is-active" : null,
    href: `/analytics/schedule?user=${user}`
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
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null))))));
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
var import_dayjs = __toESM(require("dayjs"));
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs.default.extend(weekOfYear);
async function deleteSet(formSet) {
  await supabase_default.from("set").delete().match({ id: formSet.get("index") });
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
  const filter_date_start = filter_start ? (0, import_dayjs.default)(filter_start) : (0, import_dayjs.default)((0, import_dayjs.default)().week((0, import_dayjs.default)().week()).startOf("week").startOf("day"));
  const filter_date_end = filter_end ? (0, import_dayjs.default)(filter_end) : (0, import_dayjs.default)();
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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var import_remix5 = __toESM(require_remix());
var import_lodash3 = require("lodash");

// app/components/ProgressiveOverload.js
init_react();
var import_react3 = require("react");
var import_auto = __toESM(require("chart.js/auto"));
var import_chart = require("chart.js");
var import_dayjs2 = __toESM(require("dayjs"));
var import_lodash2 = require("lodash");
import_auto.default.register([import_chart.Tooltip]);
function ProgressiveOverload(props) {
  const [ctx, setCtx] = (0, import_react3.useState)(null);
  const exerciseProgress = (0, import_lodash2.sortBy)(props.progressiveOverload, (e) => e.datetime_start);
  (0, import_react3.useEffect)(() => {
    let color = `rgba(155,${Math.random() * 255},${Math.random() * 255},0.2)`;
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
        labels: exerciseProgress.map((e) => (0, import_dayjs2.default)(e.datetime_start).format("DD/MM/YY")),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => e.max_volume),
            fill: true,
            tension: 0.1,
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.keys(exerciseProgress).length > 0 && /* @__PURE__ */ React.createElement("canvas", {
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
  const { setsByExercise, exercises } = (0, import_remix5.useLoaderData)();
  const submit = (0, import_remix5.useSubmit)();
  const [searchParams] = (0, import_remix5.useSearchParams)();
  const singleExerciseChart = setsByExercise;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Progressive Overload"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), singleExerciseChart && /* @__PURE__ */ React.createElement("div", {
    className: "select mb-4 is-small"
  }, /* @__PURE__ */ React.createElement(import_remix5.Form, {
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
  default: () => AnalyticsRoute2,
  loader: () => loader4
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_dayjs3 = __toESM(require("dayjs"));
var import_lodash5 = __toESM(require("lodash"));

// app/components/WeeklyTrainingSets.js
init_react();
var import_react4 = require("react");
var import_auto2 = __toESM(require("chart.js/auto"));
var import_lodash4 = require("lodash");
function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = (0, import_react4.useState)(null);
  const sets = props.weeklySets;
  (0, import_react4.useEffect)(() => {
    let chartStatus = import_auto2.default.getChart("weeklySets");
    if (chartStatus != void 0) {
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
            data: Object.values(sets),
            backgroundColor: Object.values(sets).map((e) => `rgba(100,${Math.random() * 255},${Math.random() * 255},0.3)`)
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.keys(sets).length > 0 && /* @__PURE__ */ React.createElement("canvas", {
    id: "weeklySets"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\trained-this-week.jsx
var weekOfYear2 = require("dayjs/plugin/weekOfYear");
import_dayjs3.default.extend(weekOfYear2);
var weekStartingOnDay = (0, import_dayjs3.default)().week((0, import_dayjs3.default)().week()).startOf("week").startOf("day");
var action2 = async ({ request }) => {
};
var loader4 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const userWorkouts = await getSetsForUser(user, weekStartingOnDay);
  return (0, import_lodash5.default)(userWorkouts).groupBy((set) => set.muscle_group).mapValues((e) => e.length);
};
function AnalyticsRoute2() {
  const weeklySets = (0, import_remix6.useLoaderData)();
  const renderTrainedThisWeek = () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "title is-4 mb-2"
    }, "Trained this Week"), /* @__PURE__ */ React.createElement("hr", {
      className: "mt-2 mb-3"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay.add(1, "week").subtract(1, "day").format("DD/MM/YYYY")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "Week ", (0, import_dayjs3.default)().week(), " of ", weekStartingOnDay.format("YYYY"))), /* @__PURE__ */ React.createElement(WeeklyTrainingSets, {
      weeklySets
    }), Object.keys(weeklySets).length === 0 && "Nothing trained yet this week");
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
var import_remix7 = __toESM(require_remix());

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
var import_dayjs4 = __toESM(require("dayjs"));

// app/components/WorkoutsPerWeek.js
init_react();
var import_react5 = require("react");
var import_auto3 = __toESM(require("chart.js/auto"));
var import_lodash6 = require("lodash");
function WorkoutsPerWeek(props) {
  const [ctx, setCtx] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
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
            backgroundColor: Object.values(props.workoutsPerWeek).map((e) => `rgba(100,${Math.random() * 255},${Math.random() * 255},0.3)`)
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.keys(props.workoutsPerWeek).length > 0 && /* @__PURE__ */ React.createElement("canvas", {
    id: "workoutsPerWeek"
  }));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\workouts-per-week.jsx
var loader5 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getWorkoutsForUser(user);
  workouts = (0, import_lodash7.default)(workouts).groupBy((w) => (0, import_dayjs4.default)(w.datetime_start).week()).mapValues((e) => e.length).value();
  let weeksToShow = Object.keys(workouts).map((e) => parseInt(e));
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash7.transform)((0, import_lodash7.pick)(workouts, weeksToShow), (res, val, key) => res[`${(0, import_dayjs4.default)((0, import_dayjs4.default)().week(key).startOf("week").startOf("day")).format("DD/M/YY")} - ${(0, import_dayjs4.default)((0, import_dayjs4.default)().week(key).endOf("week").startOf("day")).format("DD/M/YY")}`] = val);
};
function WorkoutsPerWeekRoute() {
  const workouts = (0, import_remix7.useLoaderData)();
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
var import_remix8 = __toESM(require_remix());
var import_lodash9 = __toESM(require("lodash"));
var import_react7 = require("react");

// app/components/PersonalBest.js
init_react();
var import_react6 = require("react");
var import_auto4 = __toESM(require("chart.js/auto"));
var import_lodash8 = require("lodash");
function PersonalRecords(props) {
  const [ctx, setCtx] = (0, import_react6.useState)(null);
  (0, import_react6.useEffect)(() => {
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
              return `rgba(${100},${Math.random() * 255}, ${Math.random() * 255},0.4)`;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.bestSets.length > 0 && /* @__PURE__ */ React.createElement("canvas", {
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
  const listBestSets = (0, import_remix8.useLoaderData)();
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
var import_remix9 = __toESM(require_remix());
var import_lodash10 = __toESM(require("lodash"));
var import_dayjs5 = __toESM(require("dayjs"));
var weekOfYear3 = require("dayjs/plugin/weekOfYear");
import_dayjs5.default.extend(weekOfYear3);
var loader7 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let sets = await getSetsForUser(user);
  let workouts = await getWorkoutsForUser(user);
  const computeStats = (sets2) => {
    const stat = (0, import_lodash10.reduce)(sets2, (a, b) => ({
      weight: a.weight + b.weight,
      reps: a.reps + b.repetitions,
      sets: a.sets + 1
    }), { weight: 0, reps: 0, sets: 0 });
    stat.volume = stat.weight * stat.reps;
    return stat;
  };
  const groupedSets = (0, import_lodash10.default)(sets).groupBy((s) => `${(0, import_lodash10.startCase)(s.exercise_name)}${(s == null ? void 0 : s.variant) ? ` (${(0, import_lodash10.startCase)(s.variant)})` : ""}`).mapValues(computeStats);
  const totalTimeSpent = workouts.map((w) => (0, import_dayjs5.default)(w.datetime_end).diff(w.datetime_start, "minute")).reduce((a, b) => a + b);
  return [groupedSets, totalTimeSpent];
};
function StatisticsRoute() {
  const [workouts, totalTimeSpent] = (0, import_remix9.useLoaderData)();
  const columnNames = [
    "exercise",
    ...Object.keys(Object.entries(workouts)[0][1])
  ];
  const rows = Object.entries(workouts).map(([k, v], index) => [
    k,
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
  }, "Total lifetime metrics"), /* @__PURE__ */ React.createElement("div", {
    className: "notification",
    style: { flexDirection: "column", display: "flex" }
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Total Time Spent"), " : ", /* @__PURE__ */ React.createElement("i", null, totalTimeSpent, " min")), columnNames.filter((c) => c !== "exercise").map((name) => /* @__PURE__ */ React.createElement("p", {
    key: name
  }, /* @__PURE__ */ React.createElement("b", null, "Total ", (0, import_lodash10.startCase)(name)), " :", " ", /* @__PURE__ */ React.createElement("i", null, (0, import_lodash10.reduce)(Object.values(workouts), (a, b) => a + b[name], 0))))), /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, "Total lifetime metrics by exercise "), /* @__PURE__ */ React.createElement("table", {
    className: "table is-striped"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, columnNames.map((e, index) => /* @__PURE__ */ React.createElement("th", {
    key: index
  }, (0, import_lodash10.startCase)(e))))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((row, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, row.map((ele, eleIndex) => eleIndex >= 1 ? /* @__PURE__ */ React.createElement("td", {
    key: eleIndex
  }, ele) : /* @__PURE__ */ React.createElement("th", {
    key: eleIndex
  }, ele)))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\schedule.jsx
var schedule_exports = {};
__export(schedule_exports, {
  default: () => WeeklyScheduleRoute,
  loader: () => loader8
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_lodash11 = __toESM(require("lodash"));
var import_dayjs6 = __toESM(require("dayjs"));
var weekOfYear4 = require("dayjs/plugin/weekOfYear");
import_dayjs6.default.extend(weekOfYear4);
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
  let user = url.searchParams.get("user");
  let workouts = await getSetsForUser(user);
  workouts = (0, import_lodash11.default)(workouts).groupBy((w) => (0, import_dayjs6.default)(w.datetime_start).day()).mapValues((v) => (0, import_lodash11.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length));
  return workouts;
};
var weekStartingOnDay2 = (0, import_dayjs6.default)().week((0, import_dayjs6.default)().week()).startOf("week").startOf("day");
function WeeklyScheduleRoute() {
  const workouts = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay2.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay2.add(1, "week").subtract(1, "day").format("DD/MM/YYYY")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "Week ", (0, import_dayjs6.default)().week(), " of ", weekStartingOnDay2.format("YYYY"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexDirection: "row", flexWrap: "wrap" }
  }, [...Array(7).keys()].map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    style: { width: "50%" }
  }, /* @__PURE__ */ React.createElement("article", {
    className: `message is-small ${(workouts == null ? void 0 : workouts[String(item)]) ? "is-secondary" : "is-light"} m-3 `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "message-header"
  }, `${weekdays[item]} - ${weekStartingOnDay2.add(index, "day").format("DD/MM/YYYY")}`), /* @__PURE__ */ React.createElement("div", {
    className: "message-body"
  }, Object.entries((workouts == null ? void 0 : workouts[String(item)]) ?? { REST: null }).map(([k, v], index2) => {
    return k !== "REST" ? /* @__PURE__ */ React.createElement("div", {
      key: index2
    }, /* @__PURE__ */ React.createElement("b", null, (0, import_lodash11.startCase)(k), " - ", v)) : /* @__PURE__ */ React.createElement("b", null, "Rest Day \u{1F4AA}");
  })))))));
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
var import_react9 = require("react");

// app/components/UserAuthorisedComponent.js
init_react();
var import_remix11 = __toESM(require_remix());
var import_auth2 = require("firebase/auth");
var import_react8 = require("react");
function UserAuthorisedComponent(props) {
  const [user, setUser] = (0, import_react8.useState)();
  const navigate = (0, import_remix11.useNavigate)();
  const auth = (0, import_auth2.getAuth)();
  (0, import_auth2.onAuthStateChanged)(auth, (result) => {
    result ? setUser(result) : setUser(null);
  });
  (0, import_react8.useEffect)(async () => {
    if (user === null) {
      navigate("/");
    }
    if (user) {
      props.setUser ? props.setUser(user) : null;
      const uid = user.uid;
      if (props.idPredicate && !props.idPredicate(uid)) {
        navigate("/home");
      } else {
        props.setUserId ? props.setUserId(uid) : null;
      }
    }
  }, [user]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.children);
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.jsx
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
  const [user, setUser] = (0, import_react9.useState)();
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
var import_dayjs7 = __toESM(require("dayjs"));
var utc = require("dayjs/plugin/utc");
import_dayjs7.default.extend(utc);
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
  }, import_dayjs7.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs7.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash13.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_react11 = require("react");

// app/components/Stopwatch.js
init_react();
var import_react10 = __toESM(require("react"));
var Stopwatch = (props) => {
  const [time, setTime] = (0, import_react10.useState)(props.initialTime);
  const [running, setRunning] = (0, import_react10.useState)(props.running);
  (0, import_react10.useEffect)(() => {
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
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "stopwatch"
  }, time > 24 * 36 * 60 * 1e3 && Math.floor(time / 24 / 36 / 60 / 1e3) % 24 + "day(s) ", /* @__PURE__ */ import_react10.default.createElement("span", null, ("0" + Math.floor(time / 36e5) % 60).slice(-2), ":"), /* @__PURE__ */ import_react10.default.createElement("span", null, ("0" + Math.floor(time / 6e4 % 60)).slice(-2), ":"), /* @__PURE__ */ import_react10.default.createElement("span", null, ("0" + Math.floor(time / 1e3 % 60)).slice(-2)));
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var import_dayjs8 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc2 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs8.default.extend(utc2);
import_dayjs8.default.extend(relativeTime);
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
  }, `${import_dayjs8.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix15.useLoaderData)()[0];
  const fetcher = (0, import_remix15.useFetcher)();
  const [userId, setUserId] = (0, import_react11.useState)();
  const [showMenu, setShowMenu] = (0, import_react11.useState)(false);
  const [showChangeTime, setShowChangeTime] = (0, import_react11.useState)(false);
  const [customDate, setCustomDate] = (0, import_react11.useState)(null);
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
  }, "Workout Completed. "), toTime(import_dayjs8.default.utc(workout.datetime_end) - import_dayjs8.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: (0, import_dayjs8.default)() - import_dayjs8.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs8.default)().utc()
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
      if ((0, import_dayjs8.default)(e.target.value) > import_dayjs8.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-small is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs8.default)(customDate).utc()
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
var import_react12 = require("react");
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
  const [selected, setSelected] = (0, import_react12.useState)();
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
      fetcher.submit({ exercise: selected }, { method: "POST" });
    },
    className: "button is-small is-dark ",
    disabled: !selected
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
var import_lodash17 = __toESM(require("lodash"));
var import_react14 = require("react");
var import_md3 = require("react-icons/md");

// app/components/SetInput.js
init_react();
var import_cg = require("react-icons/cg");
var import_ri = require("react-icons/ri");
var import_react13 = require("react");
function SetInput(props) {
  const [weight, setWeight] = (0, import_react13.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react13.useState)(props.repetitions);
  const [completed, setCompleted] = (0, import_react13.useState)(props.completed);
  const updateDb = (weight2, repetitions2, completed2, index) => props.submitFunc(weight2, repetitions2, completed2, index);
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
    onChange: (e) => setWeight(e.target.value),
    onBlur: () => {
      updateDb(weight, repetitions, completed, props.index);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-1"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "number",
    placeholder: "Reps",
    value: repetitions,
    onChange: (e) => setRepetitions(e.target.value),
    onBlur: () => {
      updateDb(weight, repetitions, completed, props.index);
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
    bestSetByExercise = (0, import_lodash17.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash17.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash17.groupBy)(setsForWorkout, (set) => `${(0, import_lodash17.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash17.startCase)(set.variant)})` : ""}`);
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
  const [showDelete, setShowDelete] = (0, import_react14.useState)();
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
var import_lodash18 = require("lodash");
var import_react15 = require("react");
var import_dayjs9 = __toESM(require("dayjs"));
var utc3 = require("dayjs/plugin/utc");
import_dayjs9.default.extend(utc3);
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
  const [user, setUser] = (0, import_react15.useState)();
  const [hasLocation, setHasLocation] = (0, import_react15.useState)();
  const getCurrentDateTime = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = (0, import_lodash18.padStart)(date.getMonth() + 1, 2, 0);
    var day = (0, import_lodash18.padStart)(date.getDate(), 2, 0);
    var hr = (0, import_lodash18.padStart)(date.getHours(), 2, 0);
    var min = (0, import_lodash18.padStart)(date.getMinutes(), 2, 0);
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
      datetime.setAttribute("value", (0, import_dayjs9.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs9.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
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
    placeholder: `${(0, import_dayjs9.default)(getCurrentDateTime()).format("dddd")} workout`
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
    value: (0, import_lodash18.startCase)(item.name)
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
var import_react16 = require("react");
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
  const [userId, setUserId] = (0, import_react16.useState)();
  const [user, setUser] = (0, import_react16.useState)();
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
    href: `/analytics/trained-this-week?user=${userId}`
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
var assets_manifest_default = { "version": "89123a1c", "entry": { "module": "/build/entry.client-NG727AF2.js", "imports": ["/build/_shared/chunk-IHUREVJE.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6USK55K3.js", "imports": ["/build/_shared/chunk-MUCEJFHX.js", "/build/_shared/chunk-5FR4ZAFI.js", "/build/_shared/chunk-B44THQX7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-3UVZFDQJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-ODYBAZMT.js", "imports": ["/build/_shared/chunk-SWDIB6KE.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-GCUEFMYZ.js", "imports": ["/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-SWDIB6KE.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-WI43MBWA.js", "imports": ["/build/_shared/chunk-KROBC4B5.js", "/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/statistics": { "id": "routes/analytics/statistics", "parentId": "routes/analytics", "path": "statistics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/statistics-QD5FRT6F.js", "imports": ["/build/_shared/chunk-KROBC4B5.js", "/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-RSTWPXQX.js", "imports": ["/build/_shared/chunk-KROBC4B5.js", "/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-SWDIB6KE.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-HPBDDCN6.js", "imports": ["/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-SWDIB6KE.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-G7NOE2QB.js", "imports": ["/build/_shared/chunk-4PPTNXGB.js", "/build/_shared/chunk-3LRST7F7.js", "/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-UP2NOL2A.js", "imports": ["/build/_shared/chunk-GH4PLNO5.js", "/build/_shared/chunk-3LRST7F7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DYHQDJNP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-KCMBSHYI.js", "imports": ["/build/_shared/chunk-3LRST7F7.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-CYJPH4MG.js", "imports": ["/build/_shared/chunk-QELYNL54.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-4VGAKJ2C.js", "imports": ["/build/_shared/chunk-3LRST7F7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-5A6VZUCJ.js", "imports": ["/build/_shared/chunk-4PPTNXGB.js", "/build/_shared/chunk-MUCEJFHX.js", "/build/_shared/chunk-5FR4ZAFI.js", "/build/_shared/chunk-B44THQX7.js", "/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-VHFHZLUN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-2Y5I7GFD.js", "imports": ["/build/_shared/chunk-QELYNL54.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-TMXLLUAG.js", "imports": ["/build/_shared/chunk-GH4PLNO5.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-HFJMGQGZ.js", "imports": ["/build/_shared/chunk-4PPTNXGB.js", "/build/_shared/chunk-3LRST7F7.js", "/build/_shared/chunk-3WD4X3SV.js", "/build/_shared/chunk-QELYNL54.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-89123A1C.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxzdGF0aXN0aWNzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljc1xcc2NoZWR1bGUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbG9jYXRpb25zLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3RvcHdhdGNoLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxhZGRFeGVyY2lzZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxjdXJyZW50RXhlcmNpc2VzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXRJbnB1dC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGNyZWF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxob21lLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXGVudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy4kbG9jYXRpb25JZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxzdGF0aXN0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHNjaGVkdWxlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxcXGFkZEV4ZXJjaXNlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRcXFxcJHdvcmtvdXRJZFxcXFxjdXJyZW50RXhlcmNpc2VzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGNyZWF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFxob21lLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhbmFseXRpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInByb2dyZXNzaXZlLW92ZXJsb2FkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ0cmFpbmVkLXRoaXMtd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwid29ya291dHMtcGVyLXdlZWtcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInBlcnNvbmFsLWJlc3RzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvc3RhdGlzdGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic3RhdGlzdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwic2NoZWR1bGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9uc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE2XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpbi5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcclxuICByZXR1cm4geyB0aXRsZTogXCJHYWluc0Jyb1wiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmaXJlYmFzZUNvbmZpZzoge1xyXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkFVVEhfRE9NQUlOLFxyXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlBST0pFQ1RfSUQsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlNUT1JBR0VfQlVDS0VULFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTVNHX1NFTkRFUl9JRCxcclxuICAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LkFQUF9JRCxcclxuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTUVBU1VSRU1FTlRfSUQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWJsYWNrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaXMtc2l6ZS01IFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICB7LyogPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY3NzLmdnL2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMi4xNC4xL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiKX0+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICA8RmlyZWJhc2VMb2dpbiBhcHA9e2FwcH0gLz5cclxuICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcblxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKHByb3BzLmFwcCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvb2dsZUxvZ2luKCkge1xyXG4gICAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshdXNlciAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrXCI+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHtkcm9wZG93bkFjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgaXMtZnVsbHdpZHRoIFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duQWN0aXZlKChhY3RpdmVTdGF0ZSkgPT4gIWFjdGl2ZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWRFeHBhbmRNb3JlIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVBhcmFtcywgdXNlTG9hZGVyRGF0YSwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0V29ya291dHNQZXJMb2NhdGlvbixcclxuICBkZWxldGVMb2NhdGlvbixcclxuICByZW5hbWVMb2NhdGlvbixcclxufSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzQXRMb2NhdGlvbiA9IGF3YWl0IGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcik7XHJcblxyXG4gIGNvbnN0IGdldE5hbWVGcm9tSWQgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/Lm5hbWVcclxuICApO1xyXG4gIGNvbnN0IHdvcmtvdXRzUGVyTG9jYXRpb24gPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/LmNvdW50ID8/IDBcclxuICApO1xyXG4gIHJldHVybiBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbklkID0gZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIik7XHJcblxyXG4gICAgYXdhaXQgcmVuYW1lTG9jYXRpb24oXHJcbiAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgIGxvY2F0aW9uTmFtZS5yZXBsYWNlKC8gL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIC8vIERFTEVURVxyXG4gICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGRlbGV0ZUxvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKSk7XHJcbiAgICBpZiAoZGVsZXRlZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZGVsZXRlZD8uWzBdPy51c2VyX2lkO1xyXG4gICAgICByZXR1cm4gcmVkaXJlY3QodXNlciA/IGAvbG9jYXRpb25zP3VzZXI9JHt1c2VyfWAgOiBcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBcIlN1Y2Nlc3NcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uUm91dGUoKSB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbklkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbc2hvd0lucHV0LCBzZXRTaG93SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZW5hbWVJbnB1dCwgc2V0UmVuYW1lSW5wdXRdID0gdXNlU3RhdGUoXHJcbiAgICBzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0gPz8gbnVsbClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTMgY29udGFpbmVyIGJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+XHJcbiAgICAgICAgICB7c3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aT57Z2V0TmFtZUZyb21JZFtsb2NhdGlvbklkXX08L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICBOdW1iZXIgb2Ygd29ya291dHM6IHt3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSA/PyAwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICB7c2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW5hbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCwgbG9jYXRpb25OYW1lOiByZW5hbWVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQVVRcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IXNob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgbGV2ZWwtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5wdXQoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlbmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHshd29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9ucyh1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3Blcl9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTG9jYXRpb24obG9jYXRpb25JZCwgbG9jYXRpb25OYW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC51cGRhdGUoeyBuYW1lOiBsb2NhdGlvbk5hbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTG9jYXRpb24obG9jYXRpb25OYW1lLCB1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmluc2VydCh7IG5hbWU6IGxvY2F0aW9uTmFtZSwgdXNlcl9pZDogdXNlcklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5sZXQgc3VwYWJhc2U7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XHJcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9BTk9OX0tFWTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnN1cGFiYXNlKSB7XHJcbiAgICBnbG9iYWwuc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbiAgfVxyXG4gIHN1cGFiYXNlID0gZ2xvYmFsLnN1cGFiYXNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTtcclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VMb2NhdGlvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NSb3V0ZSgpIHtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB1c2VyID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtLTVcIj5BbmFseXRpY3M8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+RWZmb3J0IFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUcmFpbmVkIHRoaXMgd2Vla1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV29ya291dHMgcGVyIFdlZWtcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zY2hlZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zY2hlZHVsZT91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3Mvc3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zdGF0aXN0aWNzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3RhdGlzdGljc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+PC91bD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbnUtbGFiZWxcIj5TdHJlbmd0aCBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3NpdmUgT3ZlcmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEJlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvYW5hbHl0aWNzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0RXhlcmNpc2VzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlU3VibWl0LCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NpdmVPdmVybG9hZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICBsZXQgZXhlcmNpc2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImV4ZXJjaXNlX2lkXCIpID8/IGV4ZXJjaXNlc1swXT8uaWQ7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlciwgZXhlcmNpc2UpO1xyXG5cclxuICBjb25zdCBzZXRzQnlFeGVyY2lzZSA9IGdyb3VwQnkoc2V0cywgKHMpID0+IHMuZXhlcmNpc2VfaWQpW2V4ZXJjaXNlXTtcclxuICByZXR1cm4geyBzZXRzQnlFeGVyY2lzZSwgZXhlcmNpc2VzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc1JvdXRlKCkge1xyXG4gIGNvbnN0IHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3Qgc2luZ2xlRXhlcmNpc2VDaGFydCA9IHNldHNCeUV4ZXJjaXNlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlByb2dyZXNzaXZlIE92ZXJsb2FkPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAge3NpbmdsZUV4ZXJjaXNlQ2hhcnQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QgbWItNCBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJnZXRcIj5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZXhlcmNpc2VfaWRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VfaWQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlYXJjaFBhcmFtcy5nZXRBbGwoXCJ1c2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2V4ZXJjaXNlcy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2UuaWR9IHZhbHVlPXtlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7c3RhcnRDYXNlKGUubmFtZSl9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge3NpbmdsZUV4ZXJjaXNlQ2hhcnQgPyAoXHJcbiAgICAgICAgICA8UHJvZ3Jlc3NpdmVPdmVybG9hZCBwcm9ncmVzc2l2ZU92ZXJsb2FkPXtzaW5nbGVFeGVyY2lzZUNoYXJ0fSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcIk5vdGhpbmcgdHJhaW5lZCB5ZXRcIlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzKG11c2NsZV9ncm91cCkge1xyXG4gIGlmIChtdXNjbGVfZ3JvdXApIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwibXVzY2xlX2dyb3VwXCIsIG11c2NsZV9ncm91cCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImV4ZXJjaXNlXCIpLnNlbGVjdChcIipcIik7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNdXNjbGVHcm91cHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZGlzdGluY3RfbXVzY2xlX2dyb3Vwc1wiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5vcmRlcihcIm5hbWVcIik7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXNGb3JVc2VyKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImV4ZXJjaXNlc19mb3JfdXNlclwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN1bW1hcnlTdGF0c0ZvckV4ZXJjaXNlKHVzZXJJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxhc3Rfd29ya291dF93aXRoX2V4ZXJjaXNlXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZVwiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNldChmb3JtU2V0KSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtU2V0LmdldChcImluZGV4XCIpIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkU2V0KGZvcm1TZXQpIHtcclxuICBjb25zdCBhZGQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGZvcm1TZXQuZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSxcclxuICAgICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiBhZGQ/LmRhdGE/LlswXTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2V0KGZvcm1TZXQpIHtcclxuICBsZXQgc3VibWlzc2lvblNldCA9IHtcclxuICAgIHdlaWdodDogbnVsbCxcclxuICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBjb25zdCB3ZWlnaHRGb3JTZXQgPSBmb3JtU2V0LmdldChcIndlaWdodFwiKTtcclxuICBjb25zdCByZXBzRm9yU2V0ID0gZm9ybVNldC5nZXQoXCJyZXBldGl0aW9uc1wiKTtcclxuICBjb25zdCBjb21wbGV0ZWRGb3JTZXQgPSBmb3JtU2V0LmdldChcImNvbXBsZXRlZFwiKTtcclxuXHJcbiAgaWYgKHdlaWdodEZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC53ZWlnaHQgPSBwYXJzZUZsb2F0KHdlaWdodEZvclNldCk7XHJcbiAgfVxyXG4gIGlmIChyZXBzRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LnJlcGV0aXRpb25zID0gcGFyc2VGbG9hdChyZXBzRm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKGNvbXBsZXRlZEZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC5jb21wbGV0ZWQgPSBjb21wbGV0ZWRGb3JTZXQgPT09IFwidHJ1ZVwiO1xyXG4gIH1cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLnVwZGF0ZShzdWJtaXNzaW9uU2V0KVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuLy9kZWZhdWx0IGZpbHRlcnMgZm9yIGxhdGVzdCB3ZWVrXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXRzRm9yVXNlcih1c2VySWQsIGZpbHRlcl9zdGFydCwgZmlsdGVyX2VuZCkge1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX3N0YXJ0ID0gZmlsdGVyX3N0YXJ0XHJcbiAgICA/IGRheWpzKGZpbHRlcl9zdGFydClcclxuICAgIDogZGF5anMoZGF5anMoKS53ZWVrKGRheWpzKCkud2VlaygpKS5zdGFydE9mKFwid2Vla1wiKS5zdGFydE9mKFwiZGF5XCIpKTtcclxuICBjb25zdCBmaWx0ZXJfZGF0ZV9lbmQgPSBmaWx0ZXJfZW5kID8gZGF5anMoZmlsdGVyX2VuZCkgOiBkYXlqcygpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKVxyXG4gICAgLmd0ZShcImRhdGV0aW1lX3N0YXJ0XCIsIGZpbHRlcl9kYXRlX3N0YXJ0KVxyXG4gICAgLmx0ZShcImRhdGV0aW1lX3N0YXJ0XCIsIGZpbHRlcl9kYXRlX2VuZCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQsIGV4ZXJjaXNlSWQpIHtcclxuICBpZiAoZXhlcmNpc2VJZCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAgIC5lcShcImV4ZXJjaXNlX2lkXCIsIGV4ZXJjaXNlSWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJtYXhfdm9sdW1lX2Zvcl93b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuQ2hhcnQucmVnaXN0ZXIoW1Rvb2x0aXBdKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlT3ZlcmxvYWQocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhlcmNpc2VQcm9ncmVzcyA9IHNvcnRCeShcclxuICAgIHByb3BzLnByb2dyZXNzaXZlT3ZlcmxvYWQsXHJcbiAgICAoZSkgPT4gZS5kYXRldGltZV9zdGFydFxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb2xvciA9IGByZ2JhKDE1NSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4yKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4ZXJjaXNlUHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc2l2ZU92ZXJsb2FkQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBleGVyY2lzZVByb2dyZXNzLm1hcCgoZSkgPT5cclxuICAgICAgICAgIGRheWpzKGUuZGF0ZXRpbWVfc3RhcnQpLmZvcm1hdChcIkREL01NL1lZXCIpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJWb2x1bWUgUHJvZ3Jlc3MgKFdlaWdodCB4IFJlcHMpXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PiBlLm1heF92b2x1bWUpLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFZvbHVtZTogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ubWF4X3ZvbHVtZX0gfCBXZWlnaHQ6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLndlaWdodH0gfCBSZXBzOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5yZXBldGl0aW9uc31gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5rZXlzKGV4ZXJjaXNlUHJvZ3Jlc3MpLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxjYW52YXMgaWQ9XCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCI+PC9jYW52YXM+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRFeGVyY2lzZXMgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IGxvZGFzaCBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBXZWVrbHlUcmFpbmluZ1NldHMgZnJvbSBcIn4vY29tcG9uZW50cy9XZWVrbHlUcmFpbmluZ1NldHNcIjtcclxuXHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5jb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKClcclxuICAud2VlayhkYXlqcygpLndlZWsoKSlcclxuICAuc3RhcnRPZihcIndlZWtcIilcclxuICAuc3RhcnRPZihcImRheVwiKTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7fTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKHVzZXIsIHdlZWtTdGFydGluZ09uRGF5KTtcclxuXHJcbiAgcmV0dXJuIGxvZGFzaCh1c2VyV29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzUm91dGUoKSB7XHJcbiAgY29uc3Qgd2Vla2x5U2V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVHJhaW5lZFRoaXNXZWVrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlRyYWluZWQgdGhpcyBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcImRheVwiKVxyXG4gICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgIFdlZWsge2RheWpzKCkud2VlaygpfSBvZiB7d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiWVlZWVwiKX1cclxuICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8V2Vla2x5VHJhaW5pbmdTZXRzIHdlZWtseVNldHM9e3dlZWtseVNldHN9IC8+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHdlZWtseVNldHMpLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0IHRoaXMgd2Vla1wifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDw+e3JlbmRlclRyYWluZWRUaGlzV2VlaygpfTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5VHJhaW5pbmdTZXRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHNldHMgPSBwcm9wcy53ZWVrbHlTZXRzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3ZWVrbHlTZXRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseVNldHNcIikpO1xyXG4gICAgY29uc3Qgd2Vla2x5U2V0c0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhzZXRzKS5tYXAoKGUpID0+IHN0YXJ0Q2FzZShlKSksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBTZXRzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMoc2V0cyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhzZXRzKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgxMDAsJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LDAuMylgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD57T2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID4gMCAmJiA8Y2FudmFzIGlkPVwid2Vla2x5U2V0c1wiPjwvY2FudmFzPn08Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyB0cmFuc2Zvcm0sIHBpY2sgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFdvcmtvdXRQZXJXZWVrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vla1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS53ZWVrKCkpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICBsZXQgd2Vla3NUb1Nob3cgPSBPYmplY3Qua2V5cyh3b3Jrb3V0cykubWFwKChlKSA9PiBwYXJzZUludChlKSk7XHJcbiAgd2Vla3NUb1Nob3cuc29ydCgpO1xyXG4gIHdlZWtzVG9TaG93ID0gd2Vla3NUb1Nob3cuc2xpY2UoMCwgMTApLm1hcChTdHJpbmcpO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtKFxyXG4gICAgcGljayh3b3Jrb3V0cywgd2Vla3NUb1Nob3cpLFxyXG4gICAgKHJlcywgdmFsLCBrZXkpID0+XHJcbiAgICAgIChyZXNbXHJcbiAgICAgICAgYCR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSkuZm9ybWF0KFxyXG4gICAgICAgICAgXCJERC9NL1lZXCJcclxuICAgICAgICApfSAtICR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuZW5kT2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpLmZvcm1hdChcclxuICAgICAgICAgIFwiREQvTS9ZWVwiXHJcbiAgICAgICAgKX1gXHJcbiAgICAgIF0gPSB2YWwpXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRzUGVyV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPldvcmtvdXRzIHBlciBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPFdvcmtvdXRQZXJXZWVrIHdvcmtvdXRzUGVyV2Vlaz17d29ya291dHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXb3Jrb3V0KHdvcmtvdXQpIHtcclxuICBsZXQgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiaWRcIilcclxuICAgIC5tYXRjaCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG5cclxuICBsZXQgbG9jYXRpb25JZDtcclxuICBpZiAoY2hlY2tMb2NhdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgICAgLmluc2VydCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG4gIH1cclxuICBsb2NhdGlvbklkID0gY2hlY2tMb2NhdGlvbi5kYXRhPy5bMF0uaWQ7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIndvcmtvdXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgbmFtZTogd29ya291dC5uYW1lLFxyXG4gICAgICBkYXRldGltZV9zdGFydDogd29ya291dC5kYXRldGltZSxcclxuICAgICAgZGF0ZXRpbWVfZW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbklkLFxyXG4gICAgICB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgcmV0dXJuIGRhdGFbMF0uaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXb3Jrb3V0KHdvcmtvdXRfaWQpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIHdvcmtvdXRfaWQpO1xyXG5cclxuICBjb25zdCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzID1cclxuICAgIFwiKFwiICsgd29ya291dC5kYXRhLm1hcCgoZSkgPT4gZS53b3Jrb3V0X2V4ZXJjaXNlX2lkKS50b1N0cmluZygpICsgXCIpXCI7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZmlsdGVyKFwid29ya291dF9leGVyY2lzZVwiLCBcImluXCIsIGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMpO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIGNvbnN0IF9kZWxldGVXb3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgcmV0dXJuIF9kZWxldGVXb3Jrb3V0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YTogd29ya291dCB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcImlkXCIsIGlkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgaWQpXHJcbiAgICAub3JkZXIoXCJzZXRfaWRcIik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoV29ya291dChpZCwgZGF0ZXRpbWUpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC51cGRhdGUoeyBkYXRldGltZV9lbmQ6IGRhdGV0aW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogaWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIHdvcmtvdXRzLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKDEwMCwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAudmFsdWUoKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYmVzdFNldEJ5RXhlcmNpc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxCZXN0Um91dGUoKSB7XHJcbiAgY29uc3QgbGlzdEJlc3RTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMVwiPlBlcnNvbmFsIEJlc3RzPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGk+V2VpZ2h0IG9mIHNldCB3aXRoIG1heCB2b2x1bWU8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2xpc3RCZXN0U2V0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPFBlcnNvbmFsQmVzdHMgYmVzdFNldHM9e2xpc3RCZXN0U2V0c30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIk5vIHdvcmtvdXRzIHlldFwiXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbFJlY29yZHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicGVyc29uYWxSZWNvcmRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLmJlc3RTZXRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uYWxSZWNvcmRzXCIpKTtcclxuICAgIGNvbnN0IHByQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+XHJcbiAgICAgICAgICBzdGFydENhc2UoYCR7dmFsdWUuZXhlcmNpc2VfbmFtZX0gJHt2YWx1ZS52YXJpYW50ID8/IFwiXCJ9YClcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9wcy5iZXN0U2V0cy5tYXAoKHZhbHVlKSA9PiB2YWx1ZS53ZWlnaHQpLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmVzdFNldHMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MTAwfSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCAke1xyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxyXG4gICAgICAgICAgICAgIH0sMC40KWA7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogNCAvIHByb3BzLmJlc3RTZXRzLmxlbmd0aCxcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGNvbnRleHQuZGF0YUluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0ID0gT2JqZWN0LnZhbHVlcyhwcm9wcy5iZXN0U2V0cyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCBXZWlnaHQ6ICR7c2V0W2RhdGFJbmRleF0ud2VpZ2h0fSB8IFZvbDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHggJHtzZXRbZGF0YUluZGV4XS5yZXBldGl0aW9uc30gPSAke3NldFtkYXRhSW5kZXhdLm1heF92b2x1bWV9YDtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+e3Byb3BzLmJlc3RTZXRzLmxlbmd0aCA+IDAgJiYgPGNhbnZhcyBpZD1cInBlcnNvbmFsUmVjb3Jkc1wiPjwvY2FudmFzPn08Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlLCByZWR1Y2UsIHBpY2ssIG9taXQgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0c1wiO1xyXG52YXIgd2Vla09mWWVhciA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiKTtcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHNldHMgPSBhd2FpdCBnZXRTZXRzRm9yVXNlcih1c2VyKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVTdGF0cyA9IChzZXRzKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ID0gcmVkdWNlKFxyXG4gICAgICBzZXRzLFxyXG4gICAgICAoYSwgYikgPT4gKHtcclxuICAgICAgICB3ZWlnaHQ6IGEud2VpZ2h0ICsgYi53ZWlnaHQsXHJcbiAgICAgICAgcmVwczogYS5yZXBzICsgYi5yZXBldGl0aW9ucyxcclxuICAgICAgICBzZXRzOiBhLnNldHMgKyAxLFxyXG4gICAgICB9KSxcclxuICAgICAgeyB3ZWlnaHQ6IDAsIHJlcHM6IDAsIHNldHM6IDAgfVxyXG4gICAgKTtcclxuICAgIHN0YXQudm9sdW1lID0gc3RhdC53ZWlnaHQgKiBzdGF0LnJlcHM7XHJcblxyXG4gICAgcmV0dXJuIHN0YXQ7XHJcbiAgfTtcclxuICBjb25zdCBncm91cGVkU2V0cyA9IGxvZGFzaChzZXRzKVxyXG4gICAgLmdyb3VwQnkoXHJcbiAgICAgIChzKSA9PlxyXG4gICAgICAgIGAke3N0YXJ0Q2FzZShzLmV4ZXJjaXNlX25hbWUpfSR7XHJcbiAgICAgICAgICBzPy52YXJpYW50ID8gYCAoJHtzdGFydENhc2Uocy52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICB9YFxyXG4gICAgKVxyXG4gICAgLm1hcFZhbHVlcyhjb21wdXRlU3RhdHMpO1xyXG5cclxuICBjb25zdCB0b3RhbFRpbWVTcGVudCA9IHdvcmtvdXRzXHJcbiAgICAubWFwKCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX2VuZCkuZGlmZih3LmRhdGV0aW1lX3N0YXJ0LCBcIm1pbnV0ZVwiKSlcclxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICByZXR1cm4gW2dyb3VwZWRTZXRzLCB0b3RhbFRpbWVTcGVudF07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRpc3RpY3NSb3V0ZSgpIHtcclxuICBjb25zdCBbd29ya291dHMsIHRvdGFsVGltZVNwZW50XSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcclxuICAgIFwiZXhlcmNpc2VcIixcclxuICAgIC4uLk9iamVjdC5rZXlzKE9iamVjdC5lbnRyaWVzKHdvcmtvdXRzKVswXVsxXSksXHJcbiAgXTtcclxuICBjb25zdCByb3dzID0gT2JqZWN0LmVudHJpZXMod29ya291dHMpLm1hcCgoW2ssIHZdLCBpbmRleCkgPT4gW1xyXG4gICAgayxcclxuICAgIC4uLk9iamVjdC52YWx1ZXModiksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbS0yXCI+U3RhdGlzdGljczwvZGl2PlxyXG4gICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIlxyXG4gICAgICAgIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxiPlRvdGFsIFRpbWUgU3BlbnQ8L2I+IDogPGk+e3RvdGFsVGltZVNwZW50fSBtaW48L2k+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICB7Y29sdW1uTmFtZXNcclxuICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMgIT09IFwiZXhlcmNpc2VcIilcclxuICAgICAgICAgIC5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgPHAga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgICA8Yj5Ub3RhbCB7c3RhcnRDYXNlKG5hbWUpfTwvYj4gOntcIiBcIn1cclxuICAgICAgICAgICAgICA8aT57cmVkdWNlKE9iamVjdC52YWx1ZXMod29ya291dHMpLCAoYSwgYikgPT4gYSArIGJbbmFtZV0sIDApfTwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5Ub3RhbCBsaWZldGltZSBtZXRyaWNzIGJ5IGV4ZXJjaXNlIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgaXMtc3RyaXBlZFwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAge2NvbHVtbk5hbWVzLm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e3N0YXJ0Q2FzZShlKX08L3RoPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtyb3cubWFwKChlbGUsIGVsZUluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgZWxlSW5kZXggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZWxlSW5kZXh9PntlbGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2VsZUluZGV4fT57ZWxlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5jb25zdCB3ZWVrZGF5cyA9IFtcclxuICBcIlN1bmRheVwiLFxyXG4gIFwiTW9uZGF5XCIsXHJcbiAgXCJUdWVzZGF5XCIsXHJcbiAgXCJXZWRuZXNkYXlcIixcclxuICBcIlRodXJzZGF5XCIsXHJcbiAgXCJGcmlkYXlcIixcclxuICBcIlNhdHVyZGF5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRTZXRzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgd29ya291dHMgPSBsb2Rhc2god29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgodykgPT4gZGF5anMody5kYXRldGltZV9zdGFydCkuZGF5KCkpXHJcbiAgICAubWFwVmFsdWVzKCh2KSA9PlxyXG4gICAgICBsb2Rhc2godilcclxuICAgICAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKVxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuY29uc3Qgd2Vla1N0YXJ0aW5nT25EYXkgPSBkYXlqcygpXHJcbiAgLndlZWsoZGF5anMoKS53ZWVrKCkpXHJcbiAgLnN0YXJ0T2YoXCJ3ZWVrXCIpXHJcbiAgLnN0YXJ0T2YoXCJkYXlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrbHlTY2hlZHVsZVJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5TY2hlZHVsZTwvZGl2PlxyXG4gICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8Yj57d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX08L2I+IC17XCIgXCJ9XHJcbiAgICAgICAgPGI+XHJcbiAgICAgICAgICB7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgLmFkZCgxLCBcIndlZWtcIilcclxuICAgICAgICAgICAgLnN1YnRyYWN0KDEsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgIDwvYj57XCIgXCJ9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGk+XHJcbiAgICAgICAgICBXZWVrIHtkYXlqcygpLndlZWsoKX0gb2Yge3dlZWtTdGFydGluZ09uRGF5LmZvcm1hdChcIllZWVlcIil9XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICB7Wy4uLkFycmF5KDcpLmtleXMoKV0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cclxuICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtZXNzYWdlIGlzLXNtYWxsICR7XHJcbiAgICAgICAgICAgICAgICB3b3Jrb3V0cz8uW1N0cmluZyhpdGVtKV0gPyBcImlzLXNlY29uZGFyeVwiIDogXCJpcy1saWdodFwiXHJcbiAgICAgICAgICAgICAgfSBtLTMgYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj57YCR7XHJcbiAgICAgICAgICAgICAgICB3ZWVrZGF5c1tpdGVtXVxyXG4gICAgICAgICAgICAgIH0gLSAke3dlZWtTdGFydGluZ09uRGF5XHJcbiAgICAgICAgICAgICAgICAuYWRkKGluZGV4LCBcImRheVwiKVxyXG4gICAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9YH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHdvcmtvdXRzPy5bU3RyaW5nKGl0ZW0pXSA/PyB7IFJFU1Q6IG51bGwgfSkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAoW2ssIHZdLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrICE9PSBcIlJFU1RcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFydENhc2Uoayl9IC0ge3Z9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj5SZXN0IERheSBcdUQ4M0RcdURDQUE8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3VibWl0LCB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbnMsIGFkZExvY2F0aW9uIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG5cclxuICByZXR1cm4gbG9jYXRpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmICghZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIikpIHtcclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgYWRkTG9jYXRpb24oZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIiksIGZvcm0uZ2V0KFwidXNlcklkXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZUxvY2F0aW9uc1JvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+U2F2ZWQgTG9jYXRpb25zPC9oND5cclxuICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgdG89e2AuLyR7ZS5pZH0vP3VzZXI9JHtzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKX1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02XCI+e3N0YXJ0Q2FzZShlLm5hbWUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICA8Yj5BZGQgTG9jYXRpb248L2I+XHJcbiAgICAgICAgICAgIDxociBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIGZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCIgbmFtZT1cImxvY2F0aW9uTmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VySWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mbyBtbC0xXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckF1dGhvcmlzZWRDb21wb25lbnQocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAocmVzdWx0KSA9PiB7XHJcbiAgICByZXN1bHQgPyBzZXRVc2VyKHJlc3VsdCkgOiBzZXRVc2VyKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgPT09IG51bGwpIHtcclxuICAgICAgbmF2aWdhdGUoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcHJvcHMuc2V0VXNlciA/IHByb3BzLnNldFVzZXIodXNlcikgOiBudWxsO1xyXG4gICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuXHJcbiAgICAgIGlmIChwcm9wcy5pZFByZWRpY2F0ZSAmJiAhcHJvcHMuaWRQcmVkaWNhdGUodWlkKSkge1xyXG4gICAgICAgIG5hdmlnYXRlKFwiL2hvbWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvcHMuc2V0VXNlcklkID8gcHJvcHMuc2V0VXNlcklkKHVpZCkgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIDw+e3Byb3BzLmNoaWxkcmVufTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJzQ2hlY2tDaXJjbGVGaWxsLCBCc0Nsb2NrSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3b3Jrb3V0cyA9IGF3YWl0IGdldFdvcmtvdXRzRm9yVXNlcih1c2VyKTtcclxuICByZXR1cm4gd29ya291dHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3V29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gdXNlcklkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbS01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtYi0zXCI+V29ya291dHM8L2Rpdj5cclxuICAgICAgICB7d29ya291dHMubGVuZ3RoID09PSAwICYmIFwiTm8gd29ya291dHMgeWV0XCJ9XHJcbiAgICAgICAge3dvcmtvdXRzLm1hcCgod29ya291dCkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtcIndvcmtvdXQuaWRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgdG89e2Avd29ya291dC8ke3dvcmtvdXQuaWR9L2N1cnJlbnRFeGVyY2lzZXNgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yIGlzLTVcIj5cclxuICAgICAgICAgICAgICAgICAge2RheWpzXHJcbiAgICAgICAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIE1NTSBEIFlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yIGlzLTZcIj5cclxuICAgICAgICAgICAgICAgICAge2RheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KS5sb2NhbCgpLmZvcm1hdChcImg6bW0gQVwiKX1cclxuICAgICAgICAgICAgICAgICAge1wiIC0gXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHt3b3Jrb3V0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzdGFydENhc2Uod29ya291dC5sb2NhdGlvbl9uYW1lKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7d29ya291dC5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZUZpbGwgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8QnNDbG9ja0hpc3Rvcnkgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm0tNCBwLTFcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIE91dGxldCwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHtcclxuICBmaW5pc2hXb3Jrb3V0LFxyXG4gIGdldFdvcmtvdXQsXHJcbiAgZGVsZXRlV29ya291dCxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RvcHdhdGNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmNvbnN0IHJlbGF0aXZlVGltZSA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgd29ya291dCA9IGF3YWl0IGdldFdvcmtvdXQocGFyYW1zLndvcmtvdXRJZCk7XHJcbiAgcmV0dXJuIHdvcmtvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGZpbmlzaFdvcmtvdXQoXHJcbiAgICAgIGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSxcclxuICAgICAgZm9ybS5nZXQoXCJlbmRcIilcclxuICAgICk7XHJcbiAgICByZXR1cm4gd29ya291dDtcclxuICB9XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09IFwiREVMRVRFXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZGVsZXRlV29ya291dChmb3JtLmdldChcIndvcmtvdXRfaWRcIikpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b1RpbWUodGltZSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGltZSA+IDI0ICogMzYgKiA2MCAqIDEwMDAgJiZcclxuICAgICAgICAoTWF0aC5mbG9vcih0aW1lIC8gMjQgLyAzNiAvIDYwIC8gMTAwMCkgJSAyNCkgKyBcImRheShzKSBcIn1cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAzNjAwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdvcmtvdXRNZXRhRGF0YSh3b3Jrb3V0KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBpcy1saWdodCBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0zXCI+e3dvcmtvdXQ/Lm5hbWV9PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1waW5cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57c3RhcnRDYXNlKHdvcmtvdXQ/LmxvY2F0aW9uX25hbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdnLWFsYXJtXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGlkPVwic3RhcnRcIj5cclxuICAgICAgICAgICAge2Ake2RheWpzXHJcbiAgICAgICAgICAgICAgLnV0Yyh3b3Jrb3V0Py5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAubG9jYWwoKVxyXG4gICAgICAgICAgICAgIC5mb3JtYXQoXCJkZGRkLCBERCBNTU0gWVksIEhIOm1tXCIpfVxyXG4gICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcnROZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dCA9IHVzZUxvYWRlckRhdGEoKVswXTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q2hhbmdlVGltZSwgc2V0U2hvd0NoYW5nZVRpbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXN0b21EYXRlLCBzZXRDdXN0b21EYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnRcclxuICAgICAgc2V0VXNlcklkPXtzZXRVc2VySWR9XHJcbiAgICAgIGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB3b3Jrb3V0LnVzZXJfaWR9XHJcbiAgICA+XHJcbiAgICAgIDw+XHJcbiAgICAgICAge3dvcmtvdXRNZXRhRGF0YSh3b3Jrb3V0KX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5IG5vdGlmaWNhdGlvbiBtYi0zXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3dvcmtvdXQ/LmRhdGV0aW1lX2VuZCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTFcIj5Xb3Jrb3V0IENvbXBsZXRlZC4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0b1RpbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfZW5kKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMFwiPlRpbWUgRWxhcHNlZDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzLWZhbWlseS1zZWNvbmRhcnkgaGFzLXRleHQtd2VpZ2h0LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdG9wd2F0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVGltZT17ZGF5anMoKSAtIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHshd29ya291dC5kYXRldGltZV9lbmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoKS51dGMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Nob3dNZW51ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMyVcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFdvcmtvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDaGFuZ2VUaW1lKChlKSA9PiAhZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgaXMtZnVsbHdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXQgRmluaXNoIFRpbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7c2hvd0NoYW5nZVRpbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcyhlLnRhcmdldC52YWx1ZSkgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21EYXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjdXN0b21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgaXMtc3VjY2VzcyBtLTAgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBkYXlqcyhjdXN0b21EYXRlKS51dGMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYnV0dG9uIGlzLWxpZ2h0ICBtYi0yXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZW51KChlKSA9PiAhZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1kT3V0bGluZU1lbnUgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3RvcHdhdGNoID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUocHJvcHMuaW5pdGlhbFRpbWUpO1xyXG4gIGNvbnN0IFtydW5uaW5nLCBzZXRSdW5uaW5nXSA9IHVzZVN0YXRlKHByb3BzLnJ1bm5pbmcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGludGVydmFsO1xyXG4gICAgaWYgKHJ1bm5pbmcpIHtcclxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgMTAwMCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIGlmICghcnVubmluZykge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbcnVubmluZ10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3B3YXRjaFwiPlxyXG4gICAgICB7dGltZSA+IDI0ICogMzYgKiA2MCAqIDEwMDAgJiZcclxuICAgICAgICAoTWF0aC5mbG9vcih0aW1lIC8gMjQgLyAzNiAvIDYwIC8gMTAwMCkgJSAyNCkgKyBcImRheShzKSBcIn1cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIChNYXRoLmZsb29yKHRpbWUgLyAzNjAwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDtcclxuIiwgImltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtcclxuICB1c2VQYXJhbXMsXHJcbiAgdXNlTmF2aWdhdGUsXHJcbiAgT3V0bGV0LFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbiAgdXNlU2VhcmNoUGFyYW1zLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRNdXNjbGVHcm91cHMgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbXVzY2xlX2dyb3VwcyA9IGF3YWl0IGdldE11c2NsZUdyb3VwcygpO1xyXG4gIHJldHVybiBtdXNjbGVfZ3JvdXBzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpc2VzUm91dGVJbmRleCgpIHtcclxuICBsZXQgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZShgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5nZXQoXCJtdXNjbGVfZ3JvdXBcIikgPz8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWxsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHttdXNjbGVfZ3JvdXBzLm1hcCgobXVzY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e211c2NsZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hQYXJhbXMoeyBtdXNjbGVfZ3JvdXA6IG11c2NsZS5uYW1lIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLWxpZ2h0IGlzLXNtYWxsICR7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID09PSBtdXNjbGUubmFtZVxyXG4gICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c3RhcnRDYXNlKG11c2NsZS5uYW1lKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlUGFyYW1zLCByZWRpcmVjdCwgdXNlRmV0Y2hlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBwb3N0RXhlcmNpc2V0b1dvcmtvdXQgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWFwVmFsdWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBnZXRFeGVyY2lzZXMgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IG11c2NsZV9ncm91cCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApO1xyXG5cclxuICByZXR1cm4gZXhlcmNpc2VzO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMsIHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgd29ya291dElkLCB1c2VyIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGV4ZXJjaXNlID0gZm9ybS5nZXQoXCJleGVyY2lzZVwiKTtcclxuXHJcbiAgYXdhaXQgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0KHtcclxuICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgIGV4ZXJjaXNlX2lkOiBleGVyY2lzZSxcclxuICB9KTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRFeGVyY2lzZVJvdXRlKCkge1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgZXhOYW1lVG9JZE1hcCA9IG1hcFZhbHVlcyhcclxuICAgIGdyb3VwQnkoXHJcbiAgICAgIGV4ZXJjaXNlcyxcclxuICAgICAgKGV4ZXJjaXNlKSA9PlxyXG4gICAgICAgIGAke3N0YXJ0Q2FzZShleGVyY2lzZS5uYW1lKX0gJHtcclxuICAgICAgICAgIGV4ZXJjaXNlPy52YXJpYW50ID8gYCgke3N0YXJ0Q2FzZShleGVyY2lzZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICB9YFxyXG4gICAgKSxcclxuICAgIChlKSA9PiBlWzBdLmlkXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dCBpcy1zbWFsbCAke3NlbGVjdGVkID09PSBudWxsICYmIFwiaXMtZGFuZ2VyXCJ9YH1cclxuICAgICAgICAgIGxpc3Q9XCJleGVyY2lzZXNcIlxyXG4gICAgICAgICAgbmFtZT1cImV4ZXJjaXNlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQpID0+IHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoZXhOYW1lVG9JZE1hcFtzZWxlY3RlZC50YXJnZXQudmFsdWVdID8/IG51bGwpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cImV4ZXJjaXNlc1wiPlxyXG4gICAgICAgICAge2V4ZXJjaXNlcy5tYXAoKGV4ZXJjaXNlKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBrZXk9e2V4ZXJjaXNlLmlkfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZSBtdC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KHsgZXhlcmNpc2U6IHNlbGVjdGVkIH0sIHsgbWV0aG9kOiBcIlBPU1RcIiB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2N1cnJlbnRFeGVyY2lzZXNgfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgdXNlRmV0Y2hlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgdXBkYXRlU2V0LFxyXG4gIGFkZFNldCxcclxuICBkZWxldGVTZXQsXHJcbiAgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSxcclxufSBmcm9tIFwifi9zZXJ2aWNlL3NldHMuanNcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0LFxyXG4gIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBTZXRJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL1NldElucHV0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3Qgc2V0c0ZvcldvcmtvdXQgPSBhd2FpdCBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0KHBhcmFtcy53b3Jrb3V0SWQpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNldHNGb3JXb3Jrb3V0Py5bMF0/LnVzZXJfaWQ7XHJcbiAgbGV0IGJlc3RTZXRCeUV4ZXJjaXNlO1xyXG4gIGlmICh1c2VySWQpIHtcclxuICAgIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCk7XHJcbiAgICBiZXN0U2V0QnlFeGVyY2lzZSA9IGxvZGFzaChzZXRzKVxyXG4gICAgICAuZ3JvdXBCeSgocykgPT4gcy5leGVyY2lzZV9pZClcclxuICAgICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0ICogcy5yZXBldGl0aW9ucykpXHJcbiAgICAgIC52YWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhlcmNpc2VTZXRzID0gZ3JvdXBCeShcclxuICAgIHNldHNGb3JXb3Jrb3V0LFxyXG4gICAgKHNldCkgPT5cclxuICAgICAgYCR7c3RhcnRDYXNlKHNldC5leGVyY2lzZV9uYW1lKX0gJHtcclxuICAgICAgICBzZXQudmFyaWFudCA/IGAoJHtzdGFydENhc2Uoc2V0LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICB9YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwiZXhlcmNpc2VcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRFeGVyY2lzZXNSb3V0ZSgpIHtcclxuICBjb25zdCB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2hvd0RlbGV0ZSwgc2V0U2hvd0RlbGV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICBjb25zdCByZW5kZXJFeGVyY2lzZUZvcm0gPSAoZXhlcmNpc2VfbmFtZSwgc2V0cykgPT4ge1xyXG4gICAgY29uc3QgZXhlcmNpc2VJZCA9IHNldHNbMF0uZXhlcmNpc2VfaWQ7XHJcbiAgICBjb25zdCBleGVyY2lzZVNldEZvcm0gPSB7XHJcbiAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgZXhlcmNpc2VfbmFtZTogZXhlcmNpc2VfbmFtZSxcclxuICAgICAgd29ya291dF9leGVyY2lzZV9pZDogc2V0c1swXS53b3Jrb3V0X2V4ZXJjaXNlX2lkLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRTZXRGb3JtID0gKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpID0+XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIHJlcGV0aXRpb25zOiByZXBldGl0aW9ucyxcclxuICAgICAgICAgIHdlaWdodDogd2VpZ2h0LFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVNldEZvcm0gPSAoaW5kZXgpID0+XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICApO1xyXG4gICAgY29uc3QgcHJldmlvdXNCZXN0U2V0ID0gYmVzdFNldEJ5RXhlcmNpc2VbZXhlcmNpc2VJZF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiB7cHJldmlvdXNCZXN0U2V0LndlaWdodH0geHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0LnJlcGV0aXRpb25zfSB8IHtwcmV2aW91c0Jlc3RTZXQubWF4X3ZvbHVtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi00IG10LTNcIiAvPlxyXG5cclxuICAgICAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICBpbmRleD17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICB3ZWlnaHQ9e3NldC53ZWlnaHR9XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkPXtzZXQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIHJlcGV0aXRpb25zPXtzZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVsZXRlRnVuYz17KCkgPT4gZGVsZXRlU2V0Rm9ybShzZXQuc2V0X2lkKX1cclxuICAgICAgICAgICAgICBzdWJtaXRGdW5jPXtzdWJtaXRTZXRGb3JtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9ucyBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KGV4ZXJjaXNlU2V0Rm9ybSwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZnVsbHdpZHRoIGlzLWJsYWNrIGlzLXNtYWxsIHRpbGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICsgU2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBzaG93RGVsZXRlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH0gZHJvcGRvd24gaXMtcmlnaHRgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGUoKGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2V4ZXJjaXNlSWRdOiAhKGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZU1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcC0wIG0tMFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgcC0wIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHAtMiBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIGlzLWZ1bGx3aWR0aCBtLTAgcC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uZXhlcmNpc2VTZXRGb3JtLCB0eXBlOiBcImV4ZXJjaXNlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2J1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5lbnRyaWVzKGV4ZXJjaXNlU2V0cykubWFwKChbZXhlcmNpc2VfbmFtZSwgc2V0c10sIGV4SW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17ZXhJbmRleH0+e3JlbmRlckV4ZXJjaXNlRm9ybShleGVyY2lzZV9uYW1lLCBzZXRzKX08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPExpbmsgdG89e2Avd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgfT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTUgYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgKyBFeGVyY2lzZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBDZ0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XHJcbmltcG9ydCB7IFJpQ2hlY2tGaWxsLCBSaVNlcGFyYXRvciB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0SW5wdXQocHJvcHMpIHtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUocHJvcHMud2VpZ2h0KTtcclxuICBjb25zdCBbcmVwZXRpdGlvbnMsIHNldFJlcGV0aXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLnJlcGV0aXRpb25zKTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUocHJvcHMuY29tcGxldGVkKTtcclxuICBjb25zdCB1cGRhdGVEYiA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgcHJvcHMuc3VibWl0RnVuYyh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbWItMiBwLTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjF2aFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuY29tcGxldGVkID8gXCIjZWJmZmZjXCIgOiBcIiNmNWY1ZjVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiXHJcbiAgICAgICAgICB2YWx1ZT17d2VpZ2h0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXZWlnaHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcHNcIlxyXG4gICAgICAgICAgdmFsdWU9e3JlcGV0aXRpb25zfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBldGl0aW9ucyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlRGIod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBwcm9wcy5pbmRleCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUZ1bmN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCAhY29tcGxldGUsIHByb3BzLmluZGV4KTtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgcHJvcHMuY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBhZFN0YXJ0LCBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdvcmtvdXQgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucyB9IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb24uanNcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCB1c2VySWQgPSBmb3JtLmdldChcInVzZXJJZFwiKTtcclxuICBsZXQgbmFtZSA9IGZvcm0uZ2V0KFwibmFtZVwiKTtcclxuICBsZXQgZGF0ZXRpbWUgPSBmb3JtLmdldChcImRhdGV0aW1lXCIpO1xyXG4gIGxldCBsb2NhdGlvbiA9IGZvcm0uZ2V0KFwibG9jYXRpb25cIik7XHJcbiAgbG9jYXRpb24gPSBsb2NhdGlvbj8udG9Mb3dlckNhc2UoKT8ucmVwbGFjZSgvIC9nLCBcIl9cIikgPz8gbnVsbDtcclxuICBjb25zdCB3b3Jrb3V0T2JqZWN0SWQgPSBhd2FpdCBjcmVhdGVXb3Jrb3V0KHtcclxuICAgIG5hbWUsXHJcbiAgICBkYXRldGltZSxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgdXNlcklkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dE9iamVjdElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGdldExvY2F0aW9ucyh1c2VyKTtcclxuICByZXR1cm4gbG9jYXRpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlV29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtoYXNMb2NhdGlvbiwgc2V0SGFzTG9jYXRpb25dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudERhdGVUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIHZhciBtb250aCA9IHBhZFN0YXJ0KGRhdGUuZ2V0TW9udGgoKSArIDEsIDIsIDApO1xyXG4gICAgdmFyIGRheSA9IHBhZFN0YXJ0KGRhdGUuZ2V0RGF0ZSgpLCAyLCAwKTtcclxuICAgIHZhciBociA9IHBhZFN0YXJ0KGRhdGUuZ2V0SG91cnMoKSwgMiwgMCk7XHJcbiAgICB2YXIgbWluID0gcGFkU3RhcnQoZGF0ZS5nZXRNaW51dGVzKCksIDIsIDApO1xyXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fVQke2hyfToke21pbn1gO1xyXG4gIH07XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OZXcgV29ya291dDwvaDQ+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB1aWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRldGltZVwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXlqcyhgJHtldmVudC50YXJnZXQuZGF0ZXRpbWVMb2NhbC52YWx1ZX06MDBgKS51dGMoKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcImRkZGRcIil9IHdvcmtvdXRgXHJcbiAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQodXNlcklkKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRhdGV0aW1lKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hbWUvRGVzYzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRkZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9IHdvcmtvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGV0aW1lTG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2V0Q3VycmVudERhdGVUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXRIYXNMb2NhdGlvbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXRIYXNMb2NhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHNlbGVjdCBgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImxvY2F0aW9uc1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17c3RhcnRDYXNlKGl0ZW0ubmFtZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb2NhdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9ob21lXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPD48Lz47XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmlBZGRCb3hGaWxsLCBSaUxpbmVDaGFydEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgR2lTdHJvbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcclxuaW1wb3J0IHsgTWRMb2NhdGlvbk9uIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVJvdXRlKCkge1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcklkPXtzZXRVc2VySWR9IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLXRvdWNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBhbmVsIGlzLWJsYWNrIG0tNSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5IaSwge3VzZXIgJiYgdXNlci5kaXNwbGF5TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9jayBpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2NyZWF0ZT91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmlBZGRCb3hGaWxsIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaUxpbmVDaGFydEZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgQW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiIGhyZWY9e2Avd29ya291dHM/dXNlcj0ke3VzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHaVN0cm9uZyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBXb3Jrb3V0c1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2sgaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9sb2NhdGlvbnM/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1kTG9jYXRpb25PbiBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgbWItMVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgV29ya291dCwgU21hcnRlci5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5QbGVhc2UgbG9nIGluIHRvIGNvbnRpbnVlLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6Jzg5MTIzYTFjJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1ORzcyN0FGMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSUhVUkVWSkUuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTZVU0s1NUszLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NVUNFSkZIWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVGUjRaQUZJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQjQ0VEhRWDcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhbmFseXRpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzLTNVVlpGRFFKLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwZXJzb25hbC1iZXN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMtT0RZQkFaTVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNXRElCNktFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUVMWU5MNTQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCcsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwcm9ncmVzc2l2ZS1vdmVybG9hZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQtR0NVRUZNWVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNXRDRYM1NWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU1dESUI2S0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RRUxZTkw1NC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3NjaGVkdWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZS1XSTQzTUJXQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPQkM0QjUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zV0Q0WDNTVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFFTFlOTDU0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zdGF0aXN0aWNzJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3N0YXRpc3RpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3N0YXRpc3RpY3MtUUQ1RlJUNkYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtST0JDNEI1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1dENFgzU1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RRUxZTkw1NC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3RyYWluZWQtdGhpcy13ZWVrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlay1SU1RXUFhRWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPQkM0QjUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zV0Q0WDNTVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNXRElCNktFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUVMWU5MNTQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3dvcmtvdXRzLXBlci13ZWVrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlay1IUEJERENONi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1dENFgzU1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TV0RJQjZLRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFFTFlOTDU0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NyZWF0ZS1HN05PRTJRQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFBQVE5YR0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zTFJTVDdGNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNXRDRYM1NWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUVMWU5MNTQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLVVQMk5PTDJBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSDRQTE5PNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNMUlNUN0Y3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1EWUhRREpOUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLUtDTUJTSFlJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zTFJTVDdGNy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFFTFlOTDU0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMvOmxvY2F0aW9uSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkLUNZSlBINE1HLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RRUxZTkw1NC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQnOnsnaWQnOidyb3V0ZXMvd29ya291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQtNFZHQUtKMkMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNMUlNUN0Y3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dCcsJ3BhdGgnOic6d29ya291dElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC01QTZWWlVDSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFBQVE5YR0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NVUNFSkZIWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVGUjRaQUZJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQjQ0VEhRWDcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zV0Q0WDNTVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFFTFlOTDU0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC1WSEZIWkxVTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhdGgnOidhZGRFeGVyY2lzZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZS0yWTVJN0dGRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUVMWU5MNTQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcycsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOidjdXJyZW50RXhlcmNpc2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzLVRNWExMVUFHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HSDRQTE5PNS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXRzJzp7J2lkJzoncm91dGVzL3dvcmtvdXRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXRzLUhGSk1HUUdaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00UFBUTlhHQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTNMUlNUN0Y3LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstM1dENFgzU1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1RRUxZTkw1NC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtODkxMjNBMUMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMs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
