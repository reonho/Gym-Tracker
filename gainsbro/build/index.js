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
  }, "Schedule"))), /* @__PURE__ */ React.createElement("ul", {
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
  const [singleExerciseChart, setSingleExerciseChart] = (0, import_react7.useState)(listBestSets);
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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\schedule.jsx
var schedule_exports = {};
__export(schedule_exports, {
  default: () => WeeklyScheduleRoute,
  loader: () => loader7
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_lodash10 = __toESM(require("lodash"));
var import_dayjs5 = __toESM(require("dayjs"));
var weekOfYear3 = require("dayjs/plugin/weekOfYear");
import_dayjs5.default.extend(weekOfYear3);
var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var loader7 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getSetsForUser(user);
  workouts = (0, import_lodash10.default)(workouts).groupBy((w) => (0, import_dayjs5.default)(w.datetime_start).day()).mapValues((v) => (0, import_lodash10.default)(v).groupBy((set) => set.muscle_group).mapValues((e) => e.length));
  return workouts;
};
var weekStartingOnDay2 = (0, import_dayjs5.default)().week((0, import_dayjs5.default)().week()).startOf("week").startOf("day");
function WeeklyScheduleRoute() {
  const workouts = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-4 mb-2"
  }, "Schedule"), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-2 mb-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay2.format("DD/MM/YYYY")), " -", " ", /* @__PURE__ */ React.createElement("b", null, weekStartingOnDay2.add(1, "week").subtract(1, "day").format("DD/MM/YYYY")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "Week ", (0, import_dayjs5.default)().week(), " of ", weekStartingOnDay2.format("YYYY"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
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
    }, /* @__PURE__ */ React.createElement("b", null, (0, import_lodash10.startCase)(k), " - ", v)) : /* @__PURE__ */ React.createElement("b", null, "Rest Day \u{1F4AA}");
  })))))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.jsx
var locations_exports = {};
__export(locations_exports, {
  action: () => action3,
  default: () => ManageLocationsRoute,
  loader: () => loader8
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_lodash11 = require("lodash");
var import_react9 = require("react");

// app/components/UserAuthorisedComponent.js
init_react();
var import_remix10 = __toESM(require_remix());
var import_auth2 = require("firebase/auth");
var import_react8 = require("react");
function UserAuthorisedComponent(props) {
  const [user, setUser] = (0, import_react8.useState)();
  const navigate = (0, import_remix10.useNavigate)();
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
var loader8 = async ({ request }) => {
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
  const locations = (0, import_remix11.useLoaderData)();
  const [user, setUser] = (0, import_react9.useState)();
  const [searchParams] = (0, import_remix11.useSearchParams)();
  const submit = (0, import_remix11.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash11.startCase)(e.name))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader9
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_lodash12 = require("lodash");
var import_dayjs6 = __toESM(require("dayjs"));
var utc = require("dayjs/plugin/utc");
import_dayjs6.default.extend(utc);
var loader9 = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};
function ViewWorkoutRoute() {
  const workouts = (0, import_remix12.useLoaderData)();
  const [searchParams] = (0, import_remix12.useSearchParams)();
  const userId = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: " m-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mb-3"
  }, "Workouts"), workouts.length === 0 && "No workouts yet", workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix12.Link, {
    key: "workout.id",
    className: "box",
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs6.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs6.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash12.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_remix13 = __toESM(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_remix13.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action4,
  default: () => StartNewWorkoutRoute,
  loader: () => loader10
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_lodash13 = require("lodash");
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
var import_dayjs7 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc2 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs7.default.extend(utc2);
import_dayjs7.default.extend(relativeTime);
var loader10 = async ({ params }) => {
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
    return (0, import_remix14.redirect)("/");
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
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash13.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-alarm"
  })), /* @__PURE__ */ React.createElement("span", {
    id: "start"
  }, `${import_dayjs7.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix14.useLoaderData)()[0];
  const fetcher = (0, import_remix14.useFetcher)();
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
  }, "Workout Completed. "), toTime(import_dayjs7.default.utc(workout.datetime_end) - import_dayjs7.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: (0, import_dayjs7.default)() - import_dayjs7.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs7.default)().utc()
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
      if ((0, import_dayjs7.default)(e.target.value) > import_dayjs7.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-small is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs7.default)(customDate).utc()
      }, { method: "POST" });
      setShowMenu(false);
    }
  }, "Finish"))), /* @__PURE__ */ React.createElement("button", {
    className: " button is-light  mb-2",
    onClick: () => setShowMenu((e) => !e)
  }, /* @__PURE__ */ React.createElement(import_md2.MdOutlineMenu, null)))), /* @__PURE__ */ React.createElement(import_remix14.Outlet, null))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader11
});
init_react();
var import_lodash14 = require("lodash");
var import_remix15 = __toESM(require_remix());
var loader11 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix15.useSearchParams)();
  const muscle_groups = (0, import_remix15.useLoaderData)();
  const navigate = (0, import_remix15.useNavigate)();
  const { workoutId } = (0, import_remix15.useParams)();
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
  }, (0, import_lodash14.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix15.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action5,
  default: () => AddExerciseRoute,
  loader: () => loader12
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_lodash15 = require("lodash");
var import_react12 = require("react");
var loader12 = async ({ request }) => {
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
  return (0, import_remix16.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix16.useParams)();
  const [selected, setSelected] = (0, import_react12.useState)();
  const exercises = (0, import_remix16.useLoaderData)();
  const fetcher = (0, import_remix16.useFetcher)();
  const exNameToIdMap = (0, import_lodash15.mapValues)((0, import_lodash15.groupBy)(exercises, (exercise) => `${(0, import_lodash15.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash15.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
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
    value: `${(0, import_lodash15.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash15.startCase)(exercise.variant)})` : ""}`
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
  }, /* @__PURE__ */ React.createElement(import_remix16.Link, {
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
  loader: () => loader13
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_lodash16 = __toESM(require("lodash"));
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
var loader13 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash16.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash16.maxBy)(e, (s) => s.weight * s.repetitions)).value();
  }
  const exerciseSets = (0, import_lodash16.groupBy)(setsForWorkout, (set) => `${(0, import_lodash16.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash16.startCase)(set.variant)})` : ""}`);
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
  const { exerciseSets, bestSetByExercise } = (0, import_remix17.useLoaderData)();
  const [showDelete, setShowDelete] = (0, import_react14.useState)();
  const { workoutId } = (0, import_remix17.useParams)();
  const fetcher = (0, import_remix17.useFetcher)();
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
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix17.Outlet, null), /* @__PURE__ */ React.createElement(import_remix17.Link, {
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
  loader: () => loader14
});
init_react();
var import_remix18 = __toESM(require_remix());
var import_lodash17 = require("lodash");
var import_react15 = require("react");
var import_dayjs8 = __toESM(require("dayjs"));
var utc3 = require("dayjs/plugin/utc");
import_dayjs8.default.extend(utc3);
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
  return (0, import_remix18.redirect)(`/workout/${workoutObjectId}/currentExercises`);
};
var loader14 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
function CreateWorkoutRoute() {
  const locations = (0, import_remix18.useLoaderData)();
  const [user, setUser] = (0, import_react15.useState)();
  const [hasLocation, setHasLocation] = (0, import_react15.useState)();
  const getCurrentDateTime = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = (0, import_lodash17.padStart)(date.getMonth() + 1, 2, 0);
    var day = (0, import_lodash17.padStart)(date.getDate(), 2, 0);
    var hr = (0, import_lodash17.padStart)(date.getHours(), 2, 0);
    var min = (0, import_lodash17.padStart)(date.getMinutes(), 2, 0);
    return `${year}-${month}-${day}T${hr}:${min}`;
  };
  const submit = (0, import_remix18.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "New Workout"), /* @__PURE__ */ React.createElement(import_remix18.Form, {
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
      datetime.setAttribute("value", (0, import_dayjs8.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs8.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
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
    placeholder: `${(0, import_dayjs8.default)(getCurrentDateTime()).format("dddd")} workout`
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
    value: (0, import_lodash17.startCase)(item.name)
  })))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("button", {
    className: "button is-dark ",
    type: "submit",
    disabled: !hasLocation
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix18.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader15
});
init_react();
var import_remix19 = __toESM(require_remix());
var loader15 = async () => {
  return (0, import_remix19.redirect)("/home");
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
var assets_manifest_default = { "version": "f5465705", "entry": { "module": "/build/entry.client-DFMW2537.js", "imports": ["/build/_shared/chunk-HNEAWUC3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-J2ZDNU4X.js", "imports": ["/build/_shared/chunk-GLSJ223L.js", "/build/_shared/chunk-AA5UNAWZ.js", "/build/_shared/chunk-WWHHKPSU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-QZHQT7RK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-AEK4ZJWZ.js", "imports": ["/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-H6OCZB6M.js", "imports": ["/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-GJHQGRSS.js", "imports": ["/build/_shared/chunk-MXJ5L25Q.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-JE4IXCJ3.js", "imports": ["/build/_shared/chunk-MXJ5L25Q.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-K5N2NYRF.js", "imports": ["/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-MP7XJSHW.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-QFGOKXBR.js", "imports": ["/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-USFFHJBN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-W47DPTJB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-WA5XHOOA.js", "imports": ["/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-KRTTE675.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-D52PYG5G.js", "imports": ["/build/_shared/chunk-VSSDBM6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-C3WF75CU.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-GLSJ223L.js", "/build/_shared/chunk-AA5UNAWZ.js", "/build/_shared/chunk-WWHHKPSU.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-QC3AH35X.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-LG5DYCOZ.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-F7FQXBJR.js", "imports": ["/build/_shared/chunk-USFFHJBN.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-KMCKHWSE.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F5465705.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxzY2hlZHVsZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dHMuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TdG9wd2F0Y2guanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXF9fYWRkRXhlcmNpc2VQYXJlbnRcXGFkZEV4ZXJjaXNlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXGN1cnJlbnRFeGVyY2lzZXMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NldElucHV0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcY3JlYXRlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGhvbWUuanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxcZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLiRsb2NhdGlvbklkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHRyYWluZWQtdGhpcy13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHdvcmtvdXRzLXBlci13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHBlcnNvbmFsLWJlc3RzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHNjaGVkdWxlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0XFxcXCR3b3Jrb3V0SWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXF9fYWRkRXhlcmNpc2VQYXJlbnRcXFxcYWRkRXhlcmNpc2UuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXGN1cnJlbnRFeGVyY2lzZXMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcY3JlYXRlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGhvbWUuanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnMvOmxvY2F0aW9uSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInNjaGVkdWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9uc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpbi5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcclxuICByZXR1cm4geyB0aXRsZTogXCJHYWluc0Jyb1wiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmaXJlYmFzZUNvbmZpZzoge1xyXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkFVVEhfRE9NQUlOLFxyXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlBST0pFQ1RfSUQsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlNUT1JBR0VfQlVDS0VULFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTVNHX1NFTkRFUl9JRCxcclxuICAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LkFQUF9JRCxcclxuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTUVBU1VSRU1FTlRfSUQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWJsYWNrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaXMtc2l6ZS01IFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICB7LyogPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY3NzLmdnL2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMi4xNC4xL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiKX0+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICA8RmlyZWJhc2VMb2dpbiBhcHA9e2FwcH0gLz5cclxuICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcblxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKHByb3BzLmFwcCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvb2dsZUxvZ2luKCkge1xyXG4gICAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshdXNlciAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrXCI+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHtkcm9wZG93bkFjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgaXMtZnVsbHdpZHRoIFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duQWN0aXZlKChhY3RpdmVTdGF0ZSkgPT4gIWFjdGl2ZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWRFeHBhbmRNb3JlIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVBhcmFtcywgdXNlTG9hZGVyRGF0YSwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0V29ya291dHNQZXJMb2NhdGlvbixcclxuICBkZWxldGVMb2NhdGlvbixcclxuICByZW5hbWVMb2NhdGlvbixcclxufSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzQXRMb2NhdGlvbiA9IGF3YWl0IGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcik7XHJcblxyXG4gIGNvbnN0IGdldE5hbWVGcm9tSWQgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/Lm5hbWVcclxuICApO1xyXG4gIGNvbnN0IHdvcmtvdXRzUGVyTG9jYXRpb24gPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/LmNvdW50ID8/IDBcclxuICApO1xyXG4gIHJldHVybiBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbklkID0gZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIik7XHJcblxyXG4gICAgYXdhaXQgcmVuYW1lTG9jYXRpb24oXHJcbiAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgIGxvY2F0aW9uTmFtZS5yZXBsYWNlKC8gL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIC8vIERFTEVURVxyXG4gICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGRlbGV0ZUxvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKSk7XHJcbiAgICBpZiAoZGVsZXRlZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZGVsZXRlZD8uWzBdPy51c2VyX2lkO1xyXG4gICAgICByZXR1cm4gcmVkaXJlY3QodXNlciA/IGAvbG9jYXRpb25zP3VzZXI9JHt1c2VyfWAgOiBcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBcIlN1Y2Nlc3NcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uUm91dGUoKSB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbklkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbc2hvd0lucHV0LCBzZXRTaG93SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZW5hbWVJbnB1dCwgc2V0UmVuYW1lSW5wdXRdID0gdXNlU3RhdGUoXHJcbiAgICBzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0gPz8gbnVsbClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTMgY29udGFpbmVyIGJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+XHJcbiAgICAgICAgICB7c3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aT57Z2V0TmFtZUZyb21JZFtsb2NhdGlvbklkXX08L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICBOdW1iZXIgb2Ygd29ya291dHM6IHt3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSA/PyAwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICB7c2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW5hbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCwgbG9jYXRpb25OYW1lOiByZW5hbWVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQVVRcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IXNob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgbGV2ZWwtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5wdXQoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlbmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHshd29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9ucyh1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3Blcl9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTG9jYXRpb24obG9jYXRpb25JZCwgbG9jYXRpb25OYW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC51cGRhdGUoeyBuYW1lOiBsb2NhdGlvbk5hbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTG9jYXRpb24obG9jYXRpb25OYW1lLCB1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmluc2VydCh7IG5hbWU6IGxvY2F0aW9uTmFtZSwgdXNlcl9pZDogdXNlcklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5sZXQgc3VwYWJhc2U7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XHJcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9BTk9OX0tFWTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnN1cGFiYXNlKSB7XHJcbiAgICBnbG9iYWwuc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbiAgfVxyXG4gIHN1cGFiYXNlID0gZ2xvYmFsLnN1cGFiYXNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTtcclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VMb2NhdGlvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NSb3V0ZSgpIHtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB1c2VyID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtLTVcIj5BbmFseXRpY3M8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+RWZmb3J0IFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUcmFpbmVkIHRoaXMgd2Vla1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV29ya291dHMgcGVyIFdlZWtcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zY2hlZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zY2hlZHVsZT91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj48L3VsPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlN0cmVuZ3RoIFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQ/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc2l2ZSBPdmVybG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQmVzdHNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9hbmFseXRpY3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRFeGVyY2lzZXNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTdWJtaXQsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQcm9ncmVzc2l2ZU92ZXJsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzaXZlT3ZlcmxvYWRcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IGF3YWl0IGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcik7XHJcblxyXG4gIGxldCBleGVyY2lzZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZXhlcmNpc2VfaWRcIikgPz8gZXhlcmNpc2VzWzBdPy5pZDtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyLCBleGVyY2lzZSk7XHJcblxyXG4gIGNvbnN0IHNldHNCeUV4ZXJjaXNlID0gZ3JvdXBCeShzZXRzLCAocykgPT4gcy5leGVyY2lzZV9pZClbZXhlcmNpc2VdO1xyXG4gIHJldHVybiB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBzZXRzQnlFeGVyY2lzZSwgZXhlcmNpc2VzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBzaW5nbGVFeGVyY2lzZUNoYXJ0ID0gc2V0c0J5RXhlcmNpc2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+UHJvZ3Jlc3NpdmUgT3ZlcmxvYWQ8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBtYi00IGlzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cImdldFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJleGVyY2lzZV9pZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZV9pZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VhcmNoUGFyYW1zLmdldEFsbChcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZXhlcmNpc2VzLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZS5pZH0gdmFsdWU9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtzdGFydENhc2UoZS5uYW1lKX0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGU/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGUudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7c2luZ2xlRXhlcmNpc2VDaGFydCA/IChcclxuICAgICAgICAgIDxQcm9ncmVzc2l2ZU92ZXJsb2FkIHByb2dyZXNzaXZlT3ZlcmxvYWQ9e3NpbmdsZUV4ZXJjaXNlQ2hhcnR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiTm90aGluZyB0cmFpbmVkIHlldFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKSB7XHJcbiAgaWYgKG11c2NsZV9ncm91cCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJleGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJtdXNjbGVfZ3JvdXBcIiwgbXVzY2xlX2dyb3VwKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiZXhlcmNpc2VcIikuc2VsZWN0KFwiKlwiKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUdyb3VwcygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJkaXN0aW5jdF9tdXNjbGVfZ3JvdXBzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLm9yZGVyKFwibmFtZVwiKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiZXhlcmNpc2VzX2Zvcl91c2VyXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeVN0YXRzRm9yRXhlcmNpc2UodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibGFzdF93b3Jrb3V0X3dpdGhfZXhlcmNpc2VcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwgImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlXCI7XHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2V0KGZvcm1TZXQpIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgaWQ6IGZvcm1TZXQuZ2V0KFwiaW5kZXhcIikgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRTZXQoZm9ybVNldCkge1xyXG4gIGNvbnN0IGFkZCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogZm9ybVNldC5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZD8uZGF0YT8uWzBdO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXQoZm9ybVNldCkge1xyXG4gIGxldCBzdWJtaXNzaW9uU2V0ID0ge1xyXG4gICAgd2VpZ2h0OiBudWxsLFxyXG4gICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdlaWdodEZvclNldCA9IGZvcm1TZXQuZ2V0KFwid2VpZ2h0XCIpO1xyXG4gIGNvbnN0IHJlcHNGb3JTZXQgPSBmb3JtU2V0LmdldChcInJlcGV0aXRpb25zXCIpO1xyXG4gIGNvbnN0IGNvbXBsZXRlZEZvclNldCA9IGZvcm1TZXQuZ2V0KFwiY29tcGxldGVkXCIpO1xyXG5cclxuICBpZiAod2VpZ2h0Rm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LndlaWdodCA9IHBhcnNlRmxvYXQod2VpZ2h0Rm9yU2V0KTtcclxuICB9XHJcbiAgaWYgKHJlcHNGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQucmVwZXRpdGlvbnMgPSBwYXJzZUZsb2F0KHJlcHNGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAoY29tcGxldGVkRm9yU2V0ICE9PSBudWxsKSB7XHJcbiAgICBzdWJtaXNzaW9uU2V0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZEZvclNldCA9PT0gXCJ0cnVlXCI7XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAudXBkYXRlKHN1Ym1pc3Npb25TZXQpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4vL2RlZmF1bHQgZmlsdGVycyBmb3IgbGF0ZXN0IHdlZWtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNldHNGb3JVc2VyKHVzZXJJZCwgZmlsdGVyX3N0YXJ0LCBmaWx0ZXJfZW5kKSB7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfc3RhcnQgPSBmaWx0ZXJfc3RhcnRcclxuICAgID8gZGF5anMoZmlsdGVyX3N0YXJ0KVxyXG4gICAgOiBkYXlqcyhkYXlqcygpLndlZWsoZGF5anMoKS53ZWVrKCkpLnN0YXJ0T2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpO1xyXG4gIGNvbnN0IGZpbHRlcl9kYXRlX2VuZCA9IGZpbHRlcl9lbmQgPyBkYXlqcyhmaWx0ZXJfZW5kKSA6IGRheWpzKCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpXHJcbiAgICAuZ3RlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfc3RhcnQpXHJcbiAgICAubHRlKFwiZGF0ZXRpbWVfc3RhcnRcIiwgZmlsdGVyX2RhdGVfZW5kKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXJJZCwgZXhlcmNpc2VJZCkge1xyXG4gIGlmIChleGVyY2lzZUlkKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1heF92b2x1bWVfZm9yX3dvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgICAgLnNlbGVjdChcIipcIilcclxuICAgICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgc29ydEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5DaGFydC5yZWdpc3RlcihbVG9vbHRpcF0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NpdmVPdmVybG9hZChwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBleGVyY2lzZVByb2dyZXNzID0gc29ydEJ5KFxyXG4gICAgcHJvcHMucHJvZ3Jlc3NpdmVPdmVybG9hZCxcclxuICAgIChlKSA9PiBlLmRhdGV0aW1lX3N0YXJ0XHJcbiAgKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNvbG9yID0gYHJnYmEoMTU1LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwwLjIpYDtcclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzaXZlT3ZlcmxvYWRcIikpO1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXhlcmNpc2VQcm9ncmVzcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyZXNzaXZlT3ZlcmxvYWRDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PlxyXG4gICAgICAgICAgZGF5anMoZS5kYXRldGltZV9zdGFydCkuZm9ybWF0KFwiREQvTU0vWVlcIilcclxuICAgICAgICApLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlZvbHVtZSBQcm9ncmVzcyAoV2VpZ2h0IHggUmVwcylcIixcclxuICAgICAgICAgICAgZGF0YTogZXhlcmNpc2VQcm9ncmVzcy5tYXAoKGUpID0+IGUubWF4X3ZvbHVtZSksXHJcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbnNpb246IDAuMSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICBsYWJlbDogKGNvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBjb250ZXh0LmRhdGFJbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgVm9sdW1lOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5tYXhfdm9sdW1lfSB8IFdlaWdodDogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ud2VpZ2h0fSB8IFJlcHM6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLnJlcGV0aXRpb25zfWA7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7T2JqZWN0LmtleXMoZXhlcmNpc2VQcm9ncmVzcykubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGNhbnZhcyBpZD1cInByb2dyZXNzaXZlT3ZlcmxvYWRcIj48L2NhbnZhcz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IGdldFNldHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7IGdldEV4ZXJjaXNlcyB9IGZyb20gXCJ+L3NlcnZpY2UvZXhlcmNpc2VzXCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZUFjdGlvbkRhdGEsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgbG9kYXNoIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFdlZWtseVRyYWluaW5nU2V0cyBmcm9tIFwifi9jb21wb25lbnRzL1dlZWtseVRyYWluaW5nU2V0c1wiO1xyXG5cclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmNvbnN0IHdlZWtTdGFydGluZ09uRGF5ID0gZGF5anMoKVxyXG4gIC53ZWVrKGRheWpzKCkud2VlaygpKVxyXG4gIC5zdGFydE9mKFwid2Vla1wiKVxyXG4gIC5zdGFydE9mKFwiZGF5XCIpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHt9O1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgdXNlcldvcmtvdXRzID0gYXdhaXQgZ2V0U2V0c0ZvclVzZXIodXNlciwgd2Vla1N0YXJ0aW5nT25EYXkpO1xyXG5cclxuICByZXR1cm4gbG9kYXNoKHVzZXJXb3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NSb3V0ZSgpIHtcclxuICBjb25zdCB3ZWVrbHlTZXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCByZW5kZXJUcmFpbmVkVGhpc1dlZWsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+VHJhaW5lZCB0aGlzIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGI+e3dlZWtTdGFydGluZ09uRGF5LmZvcm1hdChcIkREL01NL1lZWVlcIil9PC9iPiAte1wiIFwifVxyXG4gICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAgIC5hZGQoMSwgXCJ3ZWVrXCIpXHJcbiAgICAgICAgICAgICAgLnN1YnRyYWN0KDEsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9XHJcbiAgICAgICAgICA8L2I+e1wiIFwifVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgV2VlayB7ZGF5anMoKS53ZWVrKCl9IG9mIHt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJZWVlZXCIpfVxyXG4gICAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxXZWVrbHlUcmFpbmluZ1NldHMgd2Vla2x5U2V0cz17d2Vla2x5U2V0c30gLz5cclxuICAgICAgICB7T2JqZWN0LmtleXMod2Vla2x5U2V0cykubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICBcIk5vdGhpbmcgdHJhaW5lZCB5ZXQgdGhpcyB3ZWVrXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPD57cmVuZGVyVHJhaW5lZFRoaXNXZWVrKCl9PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWVrbHlUcmFpbmluZ1NldHMocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgc2V0cyA9IHByb3BzLndlZWtseVNldHM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIndlZWtseVNldHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhzZXRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q3R4KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla2x5U2V0c1wiKSk7XHJcbiAgICBjb25zdCB3ZWVrbHlTZXRzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHNldHMpLm1hcCgoZSkgPT4gc3RhcnRDYXNlKGUpKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIG9mIFNldHNcIixcclxuICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhzZXRzKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHNldHMpLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKDEwMCwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PntPYmplY3Qua2V5cyhzZXRzKS5sZW5ndGggPiAwICYmIDxjYW52YXMgaWQ9XCJ3ZWVrbHlTZXRzXCI+PC9jYW52YXM+fTwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0c1wiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHRyYW5zZm9ybSwgcGljayB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgV29ya291dFBlcldlZWsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrXCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBsZXQgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcblxyXG4gIHdvcmtvdXRzID0gbG9kYXNoKHdvcmtvdXRzKVxyXG4gICAgLmdyb3VwQnkoKHcpID0+IGRheWpzKHcuZGF0ZXRpbWVfc3RhcnQpLndlZWsoKSlcclxuICAgIC5tYXBWYWx1ZXMoKGUpID0+IGUubGVuZ3RoKVxyXG4gICAgLnZhbHVlKCk7XHJcblxyXG4gIGxldCB3ZWVrc1RvU2hvdyA9IE9iamVjdC5rZXlzKHdvcmtvdXRzKS5tYXAoKGUpID0+IHBhcnNlSW50KGUpKTtcclxuICB3ZWVrc1RvU2hvdy5zb3J0KCk7XHJcbiAgd2Vla3NUb1Nob3cgPSB3ZWVrc1RvU2hvdy5zbGljZSgwLCAxMCkubWFwKFN0cmluZyk7XHJcblxyXG4gIHJldHVybiB0cmFuc2Zvcm0oXHJcbiAgICBwaWNrKHdvcmtvdXRzLCB3ZWVrc1RvU2hvdyksXHJcbiAgICAocmVzLCB2YWwsIGtleSkgPT5cclxuICAgICAgKHJlc1tcclxuICAgICAgICBgJHtkYXlqcyhkYXlqcygpLndlZWsoa2V5KS5zdGFydE9mKFwid2Vla1wiKS5zdGFydE9mKFwiZGF5XCIpKS5mb3JtYXQoXHJcbiAgICAgICAgICBcIkREL00vWVlcIlxyXG4gICAgICAgICl9IC0gJHtkYXlqcyhkYXlqcygpLndlZWsoa2V5KS5lbmRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSkuZm9ybWF0KFxyXG4gICAgICAgICAgXCJERC9NL1lZXCJcclxuICAgICAgICApfWBcclxuICAgICAgXSA9IHZhbClcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrUm91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0yXCI+V29ya291dHMgcGVyIFdlZWs8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8V29ya291dFBlcldlZWsgd29ya291dHNQZXJXZWVrPXt3b3Jrb3V0c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVdvcmtvdXQod29ya291dCkge1xyXG4gIGxldCBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCJpZFwiKVxyXG4gICAgLm1hdGNoKHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcblxyXG4gIGxldCBsb2NhdGlvbklkO1xyXG4gIGlmIChjaGVja0xvY2F0aW9uLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjaGVja0xvY2F0aW9uID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgICAuaW5zZXJ0KHsgbmFtZTogd29ya291dC5sb2NhdGlvbiwgdXNlcl9pZDogd29ya291dC51c2VySWQgfSk7XHJcbiAgfVxyXG4gIGxvY2F0aW9uSWQgPSBjaGVja0xvY2F0aW9uLmRhdGE/LlswXS5pZDtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwid29ya291dFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiB3b3Jrb3V0Lm5hbWUsXHJcbiAgICAgIGRhdGV0aW1lX3N0YXJ0OiB3b3Jrb3V0LmRhdGV0aW1lLFxyXG4gICAgICBkYXRldGltZV9lbmQ6IHVuZGVmaW5lZCxcclxuICAgICAgbG9jYXRpb246IGxvY2F0aW9uSWQsXHJcbiAgICAgIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkLFxyXG4gICAgfSxcclxuICBdKTtcclxuICByZXR1cm4gZGF0YVswXS5pZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVdvcmtvdXQod29ya291dF9pZCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGNvbnN0IGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMgPVxyXG4gICAgXCIoXCIgKyB3b3Jrb3V0LmRhdGEubWFwKChlKSA9PiBlLndvcmtvdXRfZXhlcmNpc2VfaWQpLnRvU3RyaW5nKCkgKyBcIilcIjtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5maWx0ZXIoXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIsIFwiaW5cIiwgYXNzb2NpYXRlZF93b3Jrb3V0X2V4ZXJjaXNlcyk7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRfZXhlcmNpc2VcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgY29uc3QgX2RlbGV0ZVdvcmtvdXQgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiB3b3Jrb3V0X2lkIH0pO1xyXG5cclxuICByZXR1cm4gX2RlbGV0ZVdvcmtvdXQuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhOiB3b3Jrb3V0IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yV29ya291dChpZCkge1xyXG4gIGxldCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldHNmb3J3b3Jrb3V0XCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwid29ya291dF9pZFwiLCBpZClcclxuICAgIC5vcmRlcihcInNldF9pZFwiKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KGlkLCBkYXRldGltZSkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLnVwZGF0ZSh7IGRhdGV0aW1lX2VuZDogZGF0ZXRpbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBpZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3dpdGhfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgY29uc3Qgd29ya291dHMgPSBkYXRhO1xyXG5cclxuICByZXR1cm4gd29ya291dHMuc29ydChcclxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGV0aW1lX3N0YXJ0KSAtIG5ldyBEYXRlKGEuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RFeGVyY2lzZXRvV29ya291dCh7IHdvcmtvdXRfaWQsIGV4ZXJjaXNlX2lkIH0pIHtcclxuICBjb25zdCB3b3Jrb3V0RXhlcmNpc2UgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuc2VsZWN0KFwiKiwgZXhlcmNpc2UhaW5uZXIoKilcIilcclxuICAgIC5lcShcImV4ZXJjaXNlXCIsIGV4ZXJjaXNlX2lkKVxyXG4gICAgLmVxKFwid29ya291dFwiLCB3b3Jrb3V0X2lkKTtcclxuXHJcbiAgaWYgKHdvcmtvdXRFeGVyY2lzZT8uZGF0YSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkRXhlcmNpc2UgPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuaW5zZXJ0KFt7IGV4ZXJjaXNlOiBleGVyY2lzZV9pZCwgd29ya291dDogd29ya291dF9pZCB9XSk7XHJcblxyXG4gIGNvbnN0IGFkZFNldCA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzZXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgd29ya291dF9leGVyY2lzZTogYWRkRXhlcmNpc2U/LmRhdGE/LlswXT8uaWQsXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkU2V0Py5kYXRhPy5bMF07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0KGZvcm0pIHtcclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLm1hdGNoKHsgd29ya291dF9leGVyY2lzZTogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtLmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIikgfSk7XHJcbiAgcmV0dXJuO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0c1BlcldlZWsocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2hhcnRTdGF0dXMgPSBDaGFydC5nZXRDaGFydChcIndvcmtvdXRzUGVyV2Vla1wiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtvdXRzUGVyV2Vla1wiKSk7XHJcbiAgICBjb25zdCB3b3Jrb3V0c1BlcldlZWtDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogT2JqZWN0LmtleXMocHJvcHMud29ya291dHNQZXJXZWVrKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCIjIFdvcmtvdXRzIHBlciBXZWVrXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMocHJvcHMud29ya291dHNQZXJXZWVrKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubWFwKFxyXG4gICAgICAgICAgICAgIChlKSA9PlxyXG4gICAgICAgICAgICAgICAgYHJnYmEoMTAwLCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sJHtNYXRoLnJhbmRvbSgpICogMjU1fSwwLjMpYFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaW5kZXhBeGlzOiBcInlcIixcclxuICAgICAgICBhc3BlY3RSYXRpbzogNCAvIE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7T2JqZWN0LmtleXMocHJvcHMud29ya291dHNQZXJXZWVrKS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8Y2FudmFzIGlkPVwid29ya291dHNQZXJXZWVrXCI+PC9jYW52YXM+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlIH0gZnJvbSBcIn4vc2VydmljZS9zZXRzXCI7XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBtYXhCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBlcnNvbmFsQmVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBsZXQgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VyKTtcclxuICBjb25zdCBiZXN0U2V0QnlFeGVyY2lzZSA9IGxvZGFzaChzZXRzKVxyXG4gICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBtYXhCeShlLCAocykgPT4gcy53ZWlnaHQgKiBzLnJlcGV0aXRpb25zKSlcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhiZXN0U2V0QnlFeGVyY2lzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbEJlc3RSb3V0ZSgpIHtcclxuICBjb25zdCBsaXN0QmVzdFNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IFtzaW5nbGVFeGVyY2lzZUNoYXJ0LCBzZXRTaW5nbGVFeGVyY2lzZUNoYXJ0XSA9IHVzZVN0YXRlKGxpc3RCZXN0U2V0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0xXCI+UGVyc29uYWwgQmVzdHM8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8aT5XZWlnaHQgb2Ygc2V0IHdpdGggbWF4IHZvbHVtZTwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7bGlzdEJlc3RTZXRzLmxlbmd0aCA/IChcclxuICAgICAgICA8UGVyc29uYWxCZXN0cyBiZXN0U2V0cz17bGlzdEJlc3RTZXRzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiTm8gd29ya291dHMgeWV0XCJcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsUmVjb3Jkcyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwZXJzb25hbFJlY29yZHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuYmVzdFNldHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25hbFJlY29yZHNcIikpO1xyXG4gICAgY29uc3QgcHJDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogcHJvcHMuYmVzdFNldHMubWFwKCh2YWx1ZSkgPT5cclxuICAgICAgICAgIHN0YXJ0Q2FzZShgJHt2YWx1ZS5leGVyY2lzZV9uYW1lfSAke3ZhbHVlLnZhcmlhbnQgPz8gXCJcIn1gKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+IHZhbHVlLndlaWdodCksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iZXN0U2V0cy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMDB9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sICR7XHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgfSwwLjQpYDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmRleEF4aXM6IFwieVwiLFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOiA0IC8gcHJvcHMuYmVzdFNldHMubGVuZ3RoLFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBPYmplY3QudmFsdWVzKHByb3BzLmJlc3RTZXRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgIFdlaWdodDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHwgVm9sOiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0geCAke3NldFtkYXRhSW5kZXhdLnJlcGV0aXRpb25zfSA9ICR7c2V0W2RhdGFJbmRleF0ubWF4X3ZvbHVtZX1gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD57cHJvcHMuYmVzdFNldHMubGVuZ3RoID4gMCAmJiA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+fTwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmNvbnN0IHdlZWtkYXlzID0gW1xyXG4gIFwiU3VuZGF5XCIsXHJcbiAgXCJNb25kYXlcIixcclxuICBcIlR1ZXNkYXlcIixcclxuICBcIldlZG5lc2RheVwiLFxyXG4gIFwiVGh1cnNkYXlcIixcclxuICBcIkZyaWRheVwiLFxyXG4gIFwiU2F0dXJkYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS5kYXkoKSlcclxuICAgIC5tYXBWYWx1ZXMoKHYpID0+XHJcbiAgICAgIGxvZGFzaCh2KVxyXG4gICAgICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAgICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpXHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gd29ya291dHM7XHJcbn07XHJcblxyXG5jb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKClcclxuICAud2VlayhkYXlqcygpLndlZWsoKSlcclxuICAuc3RhcnRPZihcIndlZWtcIilcclxuICAuc3RhcnRPZihcImRheVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVNjaGVkdWxlUm91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlNjaGVkdWxlPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgIHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QoMSwgXCJkYXlcIilcclxuICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9XHJcbiAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aT5cclxuICAgICAgICAgIFdlZWsge2RheWpzKCkud2VlaygpfSBvZiB7d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiWVlZWVwiKX1cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgIHtbLi4uQXJyYXkoNykua2V5cygpXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICAgIHdvcmtvdXRzPy5bU3RyaW5nKGl0ZW0pXSA/IFwiaXMtc2Vjb25kYXJ5XCIgOiBcImlzLWxpZ2h0XCJcclxuICAgICAgICAgICAgICB9IG0tMyBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgfSAtICR7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMod29ya291dHM/LltTdHJpbmcoaXRlbSldID8/IHsgUkVTVDogbnVsbCB9KS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgIChbaywgdl0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGsgIT09IFwiUkVTVFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXJ0Q2FzZShrKX0gLSB7dn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxiPlJlc3QgRGF5IFx1RDgzRFx1RENBQTwvYj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlTG9jYXRpb25zUm91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TYXZlZCBMb2NhdGlvbnM8L2g0PlxyXG4gICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj57c3RhcnRDYXNlKGUubmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiPkFkZCBMb2NhdGlvbjwvYj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIiBuYW1lPVwibG9jYXRpb25OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQXV0aG9yaXNlZENvbXBvbmVudChwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlciA9PT0gbnVsbCkge1xyXG4gICAgICBuYXZpZ2F0ZShcIi9cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBwcm9wcy5zZXRVc2VyID8gcHJvcHMuc2V0VXNlcih1c2VyKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICAgaWYgKHByb3BzLmlkUHJlZGljYXRlICYmICFwcm9wcy5pZFByZWRpY2F0ZSh1aWQpKSB7XHJcbiAgICAgICAgbmF2aWdhdGUoXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9wcy5zZXRVc2VySWQgPyBwcm9wcy5zZXRVc2VySWQodWlkKSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gPD57cHJvcHMuY2hpbGRyZW59PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnNDaGVja0NpcmNsZUZpbGwsIEJzQ2xvY2tIaXN0b3J5IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG1iLTNcIj5Xb3Jrb3V0czwvZGl2PlxyXG4gICAgICAgIHt3b3Jrb3V0cy5sZW5ndGggPT09IDAgJiYgXCJObyB3b3Jrb3V0cyB5ZXRcIn1cclxuICAgICAgICB7d29ya291dHMubWFwKCh3b3Jrb3V0KSA9PiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBrZXk9e1wid29ya291dC5pZFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgICB0bz17YC93b3Jrb3V0LyR7d29ya291dC5pZH0vY3VycmVudEV4ZXJjaXNlc2B9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF5anNcclxuICAgICAgICAgICAgICAgICAgICAudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgTU1NIEQgWVlcIil9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpLmxvY2FsKCkuZm9ybWF0KFwiaDptbSBBXCIpfVxyXG4gICAgICAgICAgICAgICAgICB7XCIgLSBcIn1cclxuICAgICAgICAgICAgICAgICAge3dvcmtvdXQubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3N0YXJ0Q2FzZSh3b3Jrb3V0LmxvY2F0aW9uX25hbWUpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt3b3Jrb3V0LmRhdGV0aW1lX2VuZCA/IChcclxuICAgICAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlRmlsbCBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCc0Nsb2NrSGlzdG9yeSBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3V29ya291dFJvdXRlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgT3V0bGV0LCB1c2VGZXRjaGVyLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQge1xyXG4gIGZpbmlzaFdvcmtvdXQsXHJcbiAgZ2V0V29ya291dCxcclxuICBkZWxldGVXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdG9wd2F0Y2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuY29uc3QgcmVsYXRpdmVUaW1lID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZ2V0V29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZmluaXNoV29ya291dChcclxuICAgICAgZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpLFxyXG4gICAgICBmb3JtLmdldChcImVuZFwiKVxyXG4gICAgKTtcclxuICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gIH1cclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJERUxFVEVcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBkZWxldGVXb3Jrb3V0KGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHRvVGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd29ya291dE1ldGFEYXRhKHdvcmtvdXQpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIGlzLWxpZ2h0IG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHkgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTNcIj57d29ya291dD8ubmFtZX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdnLXBpblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntzdGFydENhc2Uod29ya291dD8ubG9jYXRpb25fbmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctYWxhcm1cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICB7YCR7ZGF5anNcclxuICAgICAgICAgICAgICAudXRjKHdvcmtvdXQ/LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIEREIE1NTSBZWSwgSEg6bW1cIil9XHJcbiAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gdXNlTG9hZGVyRGF0YSgpWzBdO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDaGFuZ2VUaW1lLCBzZXRTaG93Q2hhbmdlVGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1c3RvbURhdGUsIHNldEN1c3RvbURhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VySWQ9e3NldFVzZXJJZH1cclxuICAgICAgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHdvcmtvdXQudXNlcl9pZH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7d29ya291dE1ldGFEYXRhKHdvcmtvdXQpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHkgbm90aWZpY2F0aW9uIG1iLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7d29ya291dD8uZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMVwiPldvcmtvdXQgQ29tcGxldGVkLiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3RvVGltZShcclxuICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9lbmQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0wXCI+VGltZSBFbGFwc2VkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXMtZmFtaWx5LXNlY29uZGFyeSBoYXMtdGV4dC13ZWlnaHQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0b3B3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgcnVubmluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lPXtkYXlqcygpIC0gZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICB7IXdvcmtvdXQuZGF0ZXRpbWVfZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKCkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzaG93TWVudSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2hhbmdlVGltZSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0IEZpbmlzaCBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dDaGFuZ2VUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoZS50YXJnZXQudmFsdWUpID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tRGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VzdG9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLXN1Y2Nlc3MgbS0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoY3VzdG9tRGF0ZSkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvbiBpcy1saWdodCAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3B3YXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEwMDApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3J1bm5pbmddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9wd2F0Y2hcIj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFyYW1zLFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TXVzY2xlR3JvdXBzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSBhd2FpdCBnZXRNdXNjbGVHcm91cHMoKTtcclxuICByZXR1cm4gbXVzY2xlX2dyb3VwcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc1JvdXRlSW5kZXgoKSB7XHJcbiAgbGV0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUoYC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID8/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7bXVzY2xlX2dyb3Vwcy5tYXAoKG11c2NsZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttdXNjbGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgbXVzY2xlX2dyb3VwOiBtdXNjbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA9PT0gbXVzY2xlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N0YXJ0Q2FzZShtdXNjbGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgcmVkaXJlY3QsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZ2V0RXhlcmNpc2VzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBtdXNjbGVfZ3JvdXAgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKTtcclxuXHJcbiAgcmV0dXJuIGV4ZXJjaXNlcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCwgdXNlciB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBleGVyY2lzZSA9IGZvcm0uZ2V0KFwiZXhlcmNpc2VcIik7XHJcblxyXG4gIGF3YWl0IHBvc3RFeGVyY2lzZXRvV29ya291dCh7XHJcbiAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICBleGVyY2lzZV9pZDogZXhlcmNpc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRXhlcmNpc2VSb3V0ZSgpIHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IGV4TmFtZVRvSWRNYXAgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KFxyXG4gICAgICBleGVyY2lzZXMsXHJcbiAgICAgIChleGVyY2lzZSkgPT5cclxuICAgICAgICBgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgfWBcclxuICAgICksXHJcbiAgICAoZSkgPT4gZVswXS5pZFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgaXMtc21hbGwgJHtzZWxlY3RlZCA9PT0gbnVsbCAmJiBcImlzLWRhbmdlclwifWB9XHJcbiAgICAgICAgICBsaXN0PVwiZXhlcmNpc2VzXCJcclxuICAgICAgICAgIG5hbWU9XCJleGVyY2lzZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKGV4TmFtZVRvSWRNYXBbc2VsZWN0ZWQudGFyZ2V0LnZhbHVlXSA/PyBudWxsKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJleGVyY2lzZXNcIj5cclxuICAgICAgICAgIHtleGVyY2lzZXMubWFwKChleGVyY2lzZSkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAga2V5PXtleGVyY2lzZS5pZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17YCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdCh7IGV4ZXJjaXNlOiBzZWxlY3RlZCB9LCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz17YC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIGdyb3VwQnksIG1heEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCAqIHMucmVwZXRpdGlvbnMpKVxyXG4gICAgICAudmFsdWUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV4ZXJjaXNlU2V0cyA9IGdyb3VwQnkoXHJcbiAgICBzZXRzRm9yV29ya291dCxcclxuICAgIChzZXQpID0+XHJcbiAgICAgIGAke3N0YXJ0Q2FzZShzZXQuZXhlcmNpc2VfbmFtZSl9ICR7XHJcbiAgICAgICAgc2V0LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKHNldC52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgfWBcclxuICApO1xyXG5cclxuICByZXR1cm4geyBleGVyY2lzZVNldHMsIGJlc3RTZXRCeUV4ZXJjaXNlIH07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgc3dpdGNoIChyZXF1ZXN0Lm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcInNldFwiKSB7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlU2V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICBhd2FpdCBhZGRTZXQoZm9ybSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICBpZiAoZm9ybS5nZXQoXCJ0eXBlXCIpID09PSBcImV4ZXJjaXNlXCIpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVFeGVyY2lzZUZyb21Xb3Jrb3V0KGZvcm0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCBkZWxldGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZvcm07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJyZW50RXhlcmNpc2VzUm91dGUoKSB7XHJcbiAgY29uc3QgeyBleGVyY2lzZVNldHMsIGJlc3RTZXRCeUV4ZXJjaXNlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3Nob3dEZWxldGUsIHNldFNob3dEZWxldGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhlcmNpc2VGb3JtID0gKGV4ZXJjaXNlX25hbWUsIHNldHMpID0+IHtcclxuICAgIGNvbnN0IGV4ZXJjaXNlSWQgPSBzZXRzWzBdLmV4ZXJjaXNlX2lkO1xyXG4gICAgY29uc3QgZXhlcmNpc2VTZXRGb3JtID0ge1xyXG4gICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2VfaWQ6IHNldHNbMF0ud29ya291dF9leGVyY2lzZV9pZCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0U2V0Rm9ybSA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMsXHJcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVTZXRGb3JtID0gKGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgKTtcclxuICAgIGNvbnN0IHByZXZpb3VzQmVzdFNldCA9IGJlc3RTZXRCeUV4ZXJjaXNlW2V4ZXJjaXNlSWRdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBtYi0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPntleGVyY2lzZV9uYW1lfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0ICYmIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGk+IFBCOjwvaT4ge3ByZXZpb3VzQmVzdFNldC53ZWlnaHR9IHh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3ByZXZpb3VzQmVzdFNldC5yZXBldGl0aW9uc30gfCB7cHJldmlvdXNCZXN0U2V0Lm1heF92b2x1bWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItNCBtdC0zXCIgLz5cclxuXHJcbiAgICAgICAgICB7c2V0cy5tYXAoKHNldCkgPT4gKFxyXG4gICAgICAgICAgICA8U2V0SW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgd2VpZ2h0PXtzZXQud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZD17c2V0LmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICByZXBldGl0aW9ucz17c2V0LnJlcGV0aXRpb25zfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUZ1bmM9eygpID0+IGRlbGV0ZVNldEZvcm0oc2V0LnNldF9pZCl9XHJcbiAgICAgICAgICAgICAgc3VibWl0RnVuYz17c3VibWl0U2V0Rm9ybX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGJ1dHRvbnMgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI4NSVcIiB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChleGVyY2lzZVNldEZvcm0sIHsgbWV0aG9kOiBcIlBPU1RcIiB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWZ1bGx3aWR0aCBpcy1ibGFjayBpcy1zbWFsbCB0aWxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArIFNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZT8uW2V4ZXJjaXNlSWRdID8/IGZhbHNlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9IGRyb3Bkb3duIGlzLXJpZ2h0YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgbWwtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlKChlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtleGVyY2lzZUlkXTogIShlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHAtMCBtLTBcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkcm9wZG93bi1tZW51NlwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IHAtMCBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBwLTIgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGggbS0wIHAtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmV4ZXJjaXNlU2V0Rm9ybSwgdHlwZTogXCJleGVyY2lzZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIEV4ZXJjaXNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9idXR0b25zPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtPYmplY3QuZW50cmllcyhleGVyY2lzZVNldHMpLm1hcCgoW2V4ZXJjaXNlX25hbWUsIHNldHNdLCBleEluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggaXMtc21hbGxcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCwgUmlTZXBhcmF0b3IgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldElucHV0KHByb3BzKSB7XHJcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKHByb3BzLndlaWdodCk7XHJcbiAgY29uc3QgW3JlcGV0aXRpb25zLCBzZXRSZXBldGl0aW9uc10gPSB1c2VTdGF0ZShwcm9wcy5yZXBldGl0aW9ucyk7XHJcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBsZXRlZCk7XHJcbiAgY29uc3QgdXBkYXRlRGIgPSAod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCkgPT5cclxuICAgIHByb3BzLnN1Ym1pdEZ1bmMod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLTIgcC0yXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxdmhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbXBsZXRlZCA/IFwiI2ViZmZmY1wiIDogXCIjZjVmNWY1XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2VpZ2h0IChrZylcIlxyXG4gICAgICAgICAgdmFsdWU9e3dlaWdodH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2VpZ2h0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIHByb3BzLmluZGV4KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBzXCJcclxuICAgICAgICAgIHZhbHVlPXtyZXBldGl0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwZXRpdGlvbnMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1saWdodCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5kZWxldGVGdW5jfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDZ0Nsb3NlIHNpemU9ezE1fSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb21wbGV0ZWQoKGNvbXBsZXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgdXBkYXRlRGIod2VpZ2h0LCByZXBldGl0aW9ucywgIWNvbXBsZXRlLCBwcm9wcy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICFjb21wbGV0ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0ICR7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbXBsZXRlZCA/IFwiaXMtcHJpbWFyeVwiIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJpQ2hlY2tGaWxsIHNpemU9ezE1fSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCwgRm9ybSwgdXNlU3VibWl0LCB1c2VMb2FkZXJEYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBwYWRTdGFydCwgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbnMgfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgdXNlcklkID0gZm9ybS5nZXQoXCJ1c2VySWRcIik7XHJcbiAgbGV0IG5hbWUgPSBmb3JtLmdldChcIm5hbWVcIik7XHJcbiAgbGV0IGRhdGV0aW1lID0gZm9ybS5nZXQoXCJkYXRldGltZVwiKTtcclxuICBsZXQgbG9jYXRpb24gPSBmb3JtLmdldChcImxvY2F0aW9uXCIpO1xyXG4gIGxvY2F0aW9uID0gbG9jYXRpb24/LnRvTG93ZXJDYXNlKCk/LnJlcGxhY2UoLyAvZywgXCJfXCIpID8/IG51bGw7XHJcbiAgY29uc3Qgd29ya291dE9iamVjdElkID0gYXdhaXQgY3JlYXRlV29ya291dCh7XHJcbiAgICBuYW1lLFxyXG4gICAgZGF0ZXRpbWUsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIHVzZXJJZCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRPYmplY3RJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcbiAgcmV0dXJuIGxvY2F0aW9ucztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVdvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCBsb2NhdGlvbnMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaGFzTG9jYXRpb24sIHNldEhhc0xvY2F0aW9uXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnREYXRlVGltZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB2YXIgbW9udGggPSBwYWRTdGFydChkYXRlLmdldE1vbnRoKCkgKyAxLCAyLCAwKTtcclxuICAgIHZhciBkYXkgPSBwYWRTdGFydChkYXRlLmdldERhdGUoKSwgMiwgMCk7XHJcbiAgICB2YXIgaHIgPSBwYWRTdGFydChkYXRlLmdldEhvdXJzKCksIDIsIDApO1xyXG4gICAgdmFyIG1pbiA9IHBhZFN0YXJ0KGRhdGUuZ2V0TWludXRlcygpLCAyLCAwKTtcclxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1UJHtocn06JHttaW59YDtcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+TmV3IFdvcmtvdXQ8L2g0PlxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInVzZXJJZFwiKTtcclxuICAgICAgICAgICAgICB1c2VySWQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdWlkKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZXRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZXRpbWVcIik7XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF5anMoYCR7ZXZlbnQudGFyZ2V0LmRhdGV0aW1lTG9jYWwudmFsdWV9OjAwYCkudXRjKClcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICA/IGAke2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXCJkZGRkXCIpfSB3b3Jrb3V0YFxyXG4gICAgICAgICAgICAgICAgICA6IGV2ZW50LnRhcmdldC5uYW1lUGxhY2Vob2xkZXIudmFsdWVcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZChkYXRldGltZSk7XHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgc3VibWl0KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5OYW1lL0Rlc2M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtkYXlqcyhnZXRDdXJyZW50RGF0ZVRpbWUoKSkuZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJkZGRkXCJcclxuICAgICAgICAgICAgICAgICAgICApfSB3b3Jrb3V0YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+RGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRldGltZUxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dldEN1cnJlbnREYXRlVGltZSgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkxvY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIWUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0SGFzTG9jYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2V0SGFzTG9jYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dCBzZWxlY3QgYH1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PVwibG9jYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJsb2NhdGlvbnNcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0ubmFtZX0gdmFsdWU9e3N0YXJ0Q2FzZShpdGVtLm5hbWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG9jYXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhdGUgTmV3XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvaG9tZVwiKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIDw+PC8+O1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpQWRkQm94RmlsbCwgUmlMaW5lQ2hhcnRGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEdpU3Ryb25nIH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XHJcbmltcG9ydCB7IE1kTG9jYXRpb25PbiB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVSb3V0ZSgpIHtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXJJZD17c2V0VXNlcklkfSBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNiBsZXZlbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvYmFubmVyLnBuZ1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdCBib3VuY2UgY29udGFpbmVyIGlzLWhpZGRlbi10b3VjaFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwYW5lbCBpcy1ibGFjayBtLTUgXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+SGksIHt1c2VyICYmIHVzZXIuZGlzcGxheU5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGE+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2sgaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9jcmVhdGU/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpQWRkQm94RmlsbCBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhdGUgV29ya291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlaz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmlMaW5lQ2hhcnRGaWxsIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIEFuYWx5dGljc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIiBocmVmPXtgL3dvcmtvdXRzP3VzZXI9JHt1c2VySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8R2lTdHJvbmcgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgV29ya291dHNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrIGlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvbG9jYXRpb25zP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZExvY2F0aW9uT24gc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgTG9jYXRpb25zXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFdvcmtvdXQsIFNtYXJ0ZXIuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+UGxlYXNlIGxvZyBpbiB0byBjb250aW51ZS4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidmNTQ2NTcwNScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtREZNVzI1MzcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhORUFXVUMzLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1KMlpETlU0WC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR0xTSjIyM0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BQTVVTkFXWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdXSEhLUFNVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYW5hbHl0aWNzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy1RWkhRVDdSSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cyc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncGVyc29uYWwtYmVzdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzLUFFSzRaSldaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1KRFNZNU02RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzoncHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkLUg2T0NaQjZNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEU1k1TTZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZScsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidzY2hlZHVsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUtR0pIUUdSU1MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1YSjVMMjVRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3RyYWluZWQtdGhpcy13ZWVrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlay1KRTRJWENKMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTVhKNUwyNVEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEU1k1TTZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3dvcmtvdXRzLXBlci13ZWVrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlay1LNU4yTllSRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KRFNZNU02RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NyZWF0ZS1NUDdYSlNIVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTzRIT0U2WjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WU1NEQk02Ui5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1TTllEUVpRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLVFGR09LWEJSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WU1NEQk02Ui5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVTRkZISkJOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1XNDdEUFRKQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLVdBNVhIT09BLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WU1NEQk02Ui5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMvOmxvY2F0aW9uSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkLUtSVFRFNjc1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQnOnsnaWQnOidyb3V0ZXMvd29ya291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQtRDUyUFlHNUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZTU0RCTTZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dCcsJ3BhdGgnOic6d29ya291dElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC1DM1dGNzVDVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTzRIT0U2WjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HTFNKMjIzTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFBNVVOQVdaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1dISEtQU1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC1RQzNBSDM1WC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhdGgnOidhZGRFeGVyY2lzZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZS1MRzVEWUNPWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcycsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOidjdXJyZW50RXhlcmNpc2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzLUY3RlFYQkpSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VU0ZGSEpCTi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXRzJzp7J2lkJzoncm91dGVzL3dvcmtvdXRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXRzLUtNQ0tIV1NFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PNEhPRTZaNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZTU0RCTTZSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRjU0NjU3MDUuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE9sQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBQzVCLElBQU0sU0FBUyxRQUFRO0FBQ3ZCLE9BQU87QUFFUSx1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxRQUFNLFNBQVMsa0NBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNuQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFTTztBQUNQLGlCQUE4Qjs7O0FDVjlCO0FBQUEsa0JBS087QUFDUCxtQkFBeUI7QUFDekIsZ0JBQTZCO0FBRWQsdUJBQXVCLE9BQU87QUFDM0MsUUFBTSxDQUFDLE1BQU0sV0FBVztBQUN4QixRQUFNLENBQUMsZ0JBQWdCLHFCQUFxQiwyQkFBUztBQUNyRCxRQUFNLFdBQVcsSUFBSTtBQUNyQixRQUFNLE9BQU8seUJBQVEsTUFBTTtBQUUzQix5QkFBdUI7QUFDckIsd0NBQW1CLE1BQU07QUFBQTtBQUUzQixvQkFBa0I7QUFDaEIsU0FBSztBQUFBO0FBR1Asc0NBQW1CLE1BQU0sQ0FBQyxXQUFXO0FBQ25DLGFBQVMsUUFBUSxVQUFVLFFBQVE7QUFBQTtBQUdyQyxTQUNFLG9DQUFDLE9BQUQsTUFDRyxDQUFDLFFBQ0Esb0NBQUMsVUFBRDtBQUFBLElBQVEsU0FBUztBQUFBLElBQWEsV0FBVTtBQUFBLEtBQWtCLFVBSTNELFFBQ0MsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVyxZQUFZLGlCQUFpQixjQUFjO0FBQUEsS0FDekQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsaUJBQWM7QUFBQSxJQUNkLGlCQUFjO0FBQUEsSUFDZCxTQUFTLE1BQU07QUFDYix3QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBO0FBQUEsS0FHdEMsb0NBQUMsUUFBRCxNQUFPLEtBQUssY0FDWixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyx3QkFBRDtBQUFBLElBQWMsTUFBTTtBQUFBLFNBSTFCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFnQixJQUFHO0FBQUEsSUFBZ0IsTUFBSztBQUFBLEtBQ3JELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFNBQVM7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUFnQjtBQUFBOzs7QUR6Q3ZELGdCQUFnQjtBQUNyQixTQUFPLEVBQUUsT0FBTztBQUFBO0FBR1gsSUFBSSxTQUFTLFlBQVk7QUFDOUIsU0FBTztBQUFBLElBQ0wsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRLFFBQVEsSUFBSTtBQUFBLE1BQ3BCLFlBQVksUUFBUSxJQUFJO0FBQUEsTUFDeEIsV0FBVyxRQUFRLElBQUk7QUFBQSxNQUN2QixlQUFlLFFBQVEsSUFBSTtBQUFBLE1BQzNCLG1CQUFtQixRQUFRLElBQUk7QUFBQSxNQUMvQixPQUFPLFFBQVEsSUFBSTtBQUFBLE1BQ25CLGVBQWUsUUFBUSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBS2pDLGdCQUFnQixFQUFFLFlBQVk7QUFDNUIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQXlCLElBQUc7QUFBQSxLQUMxQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBc0MsVUFBVyxRQUdsRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBZTtBQUFBO0FBTXZCLGVBQWU7QUFDNUIsUUFBTSxPQUFPO0FBQ2IsUUFBTSxNQUFNLDhCQUFjLEtBQUs7QUFDL0IsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFjLFNBQVE7QUFBQSxNQUNqQyxvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELE9BU0Esb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQXFCLEtBQUk7QUFBQSxNQUNwQyxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxLQUFJO0FBQUEsSUFDSixNQUFLO0FBQUEsTUFFUCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBYSxNQUFLO0FBQUEsTUFDNUIsb0NBQUMsUUFBRDtBQUFBLElBQU0sS0FBSTtBQUFBLElBQWEsTUFBSztBQUFBLE1BQzVCLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLEtBQUk7QUFBQSxNQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFPLE1BQU07QUFBQSxNQUN2QixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxLQUFJO0FBQUEsSUFDSixNQUFLO0FBQUEsT0FHVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRCxNQUNFLG9DQUFDLGVBQUQ7QUFBQSxJQUFlO0FBQUEsT0FFakIsb0NBQUMsc0JBQUQsT0FFQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FFeEZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStEO0FBQy9ELG9CQUE4Qzs7O0FDRDlDOzs7QUNBQTtBQUFBLHlCQUE2QjtBQUU3QixJQUFJO0FBRUosSUFBTSxjQUFjLFFBQVEsSUFBSTtBQUNoQyxJQUFNLGtCQUFrQixRQUFRLElBQUk7QUFDcEMsSUFBSSxPQUF1QztBQUN6QyxhQUFXLHFDQUFhLGFBQWE7QUFBQSxPQUNoQztBQUNMLE1BQUksQ0FBQyxPQUFPLFVBQVU7QUFDcEIsV0FBTyxXQUFXLHFDQUFhLGFBQWE7QUFBQTtBQUU5QyxhQUFXLE9BQU87QUFBQTtBQUdwQixJQUFPLG1CQUFROzs7QURiZiw0QkFBbUMsTUFBTTtBQUN2QyxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssWUFDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXO0FBRWpCLFNBQU87QUFBQTtBQUdULHNDQUE2QyxNQUFNO0FBQ2pELFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyx5QkFDTCxPQUFPLEtBQ1AsR0FBRyxXQUFXO0FBRWpCLFNBQU87QUFBQTtBQUdULDhCQUFxQyxZQUFZO0FBQy9DLFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLFNBQ0EsTUFBTSxFQUFFLElBQUk7QUFFZixTQUFPO0FBQUE7QUFFVCw4QkFBcUMsWUFBWSxjQUFjO0FBQzdELFFBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sRUFBRSxNQUFNLGdCQUNmLE1BQU0sRUFBRSxJQUFJO0FBQ2YsU0FBTztBQUFBO0FBR1QsMkJBQWtDLGNBQWMsUUFBUTtBQUN0RCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssWUFDTCxPQUFPLEVBQUUsTUFBTSxjQUFjLFNBQVM7QUFDekMsU0FBTztBQUFBOzs7QURqQ1Qsb0JBQXlCO0FBRWxCLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsUUFBTSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2xDLFFBQU0scUJBQXFCLE1BQU0sdUJBQXVCO0FBRXhELFFBQU0sZ0JBQWdCLDZCQUNwQiwyQkFBUSxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FDckMsQ0FBQyxNQUFHO0FBaEJSO0FBZ0JXLG1CQUFFLE9BQUYsbUJBQU07QUFBQTtBQUVmLFFBQU0sc0JBQXNCLDZCQUMxQiwyQkFBUSxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FDckMsQ0FBQyxNQUFHO0FBcEJSO0FBb0JXLG9CQUFFLE9BQUYsbUJBQU0sVUFBUztBQUFBO0FBRXhCLFNBQU8sQ0FBQyxxQkFBcUI7QUFBQTtBQUd4QixJQUFJLFNBQVMsT0FBTyxFQUFFLGNBQWM7QUF6QjNDO0FBMEJFLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxRQUFRLFdBQVcsT0FBTztBQUM1QixVQUFNLGFBQWEsS0FBSyxJQUFJO0FBQzVCLFVBQU0sZUFBZSxLQUFLLElBQUk7QUFFOUIsVUFBTSxlQUNKLFlBQ0EsYUFBYSxRQUFRLE1BQU0sS0FBSztBQUFBLGFBRXpCLFFBQVEsV0FBVyxVQUFVO0FBRXRDLFVBQU0sVUFBVSxNQUFNLGVBQWUsS0FBSyxJQUFJO0FBQzlDLFFBQUksWUFBWSxNQUFNO0FBQ3BCLFlBQU0sT0FBTyx5Q0FBVSxPQUFWLG1CQUFjO0FBQzNCLGFBQU8sNEJBQVMsT0FBTyxtQkFBbUIsU0FBUztBQUFBO0FBQUE7QUFHdkQsU0FBTztBQUFBO0FBR00seUJBQXlCO0FBQ3RDLFFBQU0sRUFBRSxlQUFlO0FBQ3ZCLFFBQU0sQ0FBQyxxQkFBcUIsaUJBQWlCO0FBQzdDLFFBQU0sVUFBVTtBQUNoQixRQUFNLENBQUMsV0FBVyxnQkFBZ0IsNEJBQVM7QUFDM0MsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLDRCQUNwQyw2QkFBVSxjQUFjLEtBQUssZUFBZTtBQUc5QyxTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLDZCQUFVLGNBQWMsS0FBSyxlQUVoQyxvQ0FBQyxLQUFELE1BQUksY0FBYyxjQUNsQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBTyx3QkFDQyxvQkFBb0IsS0FBSyxlQUFlLElBRS9ELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNiLGFBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLE1BQU0sZUFBZSxFQUFFLE9BQU87QUFBQSxNQUUzQyxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFDYixjQUFRLE9BQ04sRUFBRSxZQUF3QixjQUFjLGVBQ3hDLEVBQUUsUUFBUTtBQUVaLG1CQUFhO0FBQUE7QUFBQSxLQUVoQixZQUtKLENBQUMsYUFDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU0sYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUFBLEtBQ3hDLFdBSUEsQ0FBQyxvQkFBb0IsS0FBSyxlQUN6QixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQ1AsUUFBUSxPQUNOLEVBQUUsY0FDRixFQUFFLFFBQVE7QUFBQSxLQUdmO0FBQUE7OztBR3pHZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTJEO0FBQzVDLDBCQUEwQjtBQUN2QyxRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sV0FBVztBQUNqQixRQUFNLE9BQU8sYUFBYSxJQUFJO0FBRTlCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWlCLGNBQ2hDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUNmLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFhLGlCQUMxQixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQWEsaUNBQ2xCLGNBQ0E7QUFBQSxJQUVOLE1BQU0scUNBQXFDO0FBQUEsS0FDNUMsdUJBSUgsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLGlDQUNsQixjQUNBO0FBQUEsSUFFTixNQUFNLHFDQUFxQztBQUFBLEtBQzVDLHVCQUlILG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUNFLFNBQVMsYUFBYSx3QkFDbEIsY0FDQTtBQUFBLElBRU4sTUFBTSw0QkFBNEI7QUFBQSxLQUNuQyxlQUtMLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFhLG1CQUMxQixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FDRSxTQUFTLGFBQWEsb0NBQ2xCLGNBQ0E7QUFBQSxJQUVOLE1BQU0sd0NBQXdDO0FBQUEsS0FDL0MsMEJBSUgsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQ0UsU0FBUyxhQUFhLDhCQUNsQixjQUNBO0FBQUEsSUFFTixNQUFNLGtDQUFrQztBQUFBLEtBQ3pDLHdCQVFYLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLFNBQVMsYUFBYSxnQkFDckIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsc0JBQUQ7QUFBQTs7O0FDdkZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBRUEsNEJBQW1DLGNBQWM7QUFDL0MsTUFBSSxjQUFjO0FBQ2hCLFVBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFDM0IsS0FBSyxZQUNMLE9BQU8sS0FDUCxHQUFHLGdCQUFnQjtBQUN0QixXQUFPO0FBQUEsU0FDRjtBQUNMLFVBQU0sRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFBUyxLQUFLLFlBQVksT0FBTztBQUMvRCxXQUFPO0FBQUE7QUFBQTtBQUlYLGlDQUF3QztBQUN0QyxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssMEJBQ0wsT0FBTyxLQUNQLE1BQU07QUFDVCxTQUFPO0FBQUE7QUFHVCxtQ0FBMEMsUUFBUTtBQUNoRCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssc0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVztBQUNqQixTQUFPO0FBQUE7OztBQzVCVDtBQUFBLG1CQUFrQjtBQUVsQixJQUFJLGFBQWEsUUFBUTtBQUN6QixxQkFBTSxPQUFPO0FBRWIseUJBQWdDLFNBQVM7QUFDdkMsUUFBTSxpQkFDSCxLQUFLLE9BQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSSxRQUFRLElBQUk7QUFBQTtBQUc3QixzQkFBNkIsU0FBUztBQVp0QztBQWFFLFFBQU0sTUFBTSxNQUFNLGlCQUFTLEtBQUssT0FBTyxPQUFPO0FBQUEsSUFDNUM7QUFBQSxNQUNFLGtCQUFrQixRQUFRLElBQUk7QUFBQSxNQUM5QixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUE7QUFBQTtBQUlmLFNBQU8saUNBQUssU0FBTCxtQkFBWTtBQUFBO0FBRXJCLHlCQUFnQyxTQUFTO0FBQ3ZDLE1BQUksZ0JBQWdCO0FBQUEsSUFDbEIsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBO0FBR2IsUUFBTSxlQUFlLFFBQVEsSUFBSTtBQUNqQyxRQUFNLGFBQWEsUUFBUSxJQUFJO0FBQy9CLFFBQU0sa0JBQWtCLFFBQVEsSUFBSTtBQUVwQyxNQUFJLGlCQUFpQixNQUFNO0FBQ3pCLGtCQUFjLFNBQVMsV0FBVztBQUFBO0FBRXBDLE1BQUksZUFBZSxNQUFNO0FBQ3ZCLGtCQUFjLGNBQWMsV0FBVztBQUFBO0FBRXpDLE1BQUksb0JBQW9CLE1BQU07QUFDNUIsa0JBQWMsWUFBWSxvQkFBb0I7QUFBQTtBQUVoRCxRQUFNLEVBQUUsU0FBUyxNQUFNLGlCQUNwQixLQUFLLE9BQ0wsT0FBTyxlQUNQLE1BQU0sRUFBRSxJQUFJLFFBQVEsSUFBSTtBQUMzQixTQUFPO0FBQUE7QUFHVCw4QkFBcUMsUUFBUSxjQUFjLFlBQVk7QUFDckUsUUFBTSxvQkFBb0IsZUFDdEIsMEJBQU0sZ0JBQ04sMEJBQU0sNEJBQVEsS0FBSyw0QkFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRO0FBQy9ELFFBQU0sa0JBQWtCLGFBQWEsMEJBQU0sY0FBYztBQUV6RCxRQUFNLEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQzNCLEtBQUssa0JBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxRQUNkLElBQUksa0JBQWtCLG1CQUN0QixJQUFJLGtCQUFrQjtBQUV6QixTQUFPO0FBQUE7QUFHVCw0Q0FBbUQsUUFBUSxZQUFZO0FBQ3JFLE1BQUksWUFBWTtBQUNkLFVBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssbUNBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVyxRQUNkLEdBQUcsZUFBZTtBQUNyQixXQUFPO0FBQUEsU0FDRjtBQUNMLFVBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssbUNBQ0wsT0FBTyxLQUNQLEdBQUcsV0FBVztBQUNqQixXQUFPO0FBQUE7QUFBQTs7O0FGOUVYLG9CQUFnRTtBQUNoRSxxQkFBbUM7OztBR0huQztBQUFBLG9CQUFvQztBQUNwQyxrQkFBa0I7QUFDbEIsbUJBQXdCO0FBQ3hCLG9CQUFrQjtBQUNsQixxQkFBdUI7QUFDdkIsb0JBQU0sU0FBUyxDQUFDO0FBRUQsNkJBQTZCLE9BQU87QUFDakQsUUFBTSxDQUFDLEtBQUssVUFBVSw0QkFBUztBQUMvQixRQUFNLG1CQUFtQiwyQkFDdkIsTUFBTSxxQkFDTixDQUFDLE1BQU0sRUFBRTtBQUVYLCtCQUFVLE1BQU07QUFDZCxRQUFJLFFBQVEsWUFBWSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVc7QUFDL0QsV0FBTyxTQUFTLGVBQWU7QUFDL0IsUUFBSSxjQUFjLG9CQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUVkLFFBQUksaUJBQWlCLFdBQVcsR0FBRztBQUNqQztBQUFBO0FBR0YsVUFBTSwyQkFBMkIsSUFBSSxvQkFBTSxLQUFLO0FBQUEsTUFDOUMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxpQkFBaUIsSUFBSSxDQUFDLE1BQzVCLDJCQUFNLEVBQUUsZ0JBQWdCLE9BQU87QUFBQSxRQUVqQyxVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsTUFBTSxpQkFBaUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFBLFlBQ3BDLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWE7QUFBQSxZQUNiLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXZCLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQSxZQUNQLFdBQVc7QUFBQSxjQUNULE9BQU8sQ0FBQyxZQUFZO0FBQ2xCLG9CQUFJLFlBQVksUUFBUTtBQUN4Qix1QkFBTyxXQUFXLGlCQUFpQixXQUFXLHdCQUF3QixpQkFBaUIsV0FBVyxrQkFBa0IsaUJBQWlCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVE5SixTQUNFLDBEQUNHLE9BQU8sS0FBSyxrQkFBa0IsU0FBUyxLQUN0QyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUE7QUFBQTs7O0FIcERaLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQU4zQztBQU9FLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsUUFBTSxZQUFZLE1BQU0sb0JBQW9CO0FBRTVDLE1BQUksV0FBVyxJQUFJLGFBQWEsSUFBSSxrQkFBa0IsaUJBQVUsT0FBVixtQkFBYztBQUNwRSxRQUFNLE9BQU8sTUFBTSw2QkFBNkIsTUFBTTtBQUV0RCxRQUFNLGlCQUFpQiw0QkFBUSxNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWE7QUFDM0QsU0FBTyxFQUFFLGdCQUFnQjtBQUFBO0FBR1oseUJBQXlCO0FBQ3RDLFFBQU0sRUFBRSxnQkFBZ0IsY0FBYztBQUN0QyxRQUFNLFNBQVM7QUFDZixRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sc0JBQXNCO0FBRTVCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLHlCQUNqQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDYix1QkFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1gsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDLE1BQU07QUFDZixhQUFPO0FBQUEsUUFDTCxhQUFhLEVBQUUsT0FBTztBQUFBLFFBQ3RCLE1BQU0sYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBSTdCLFVBQVUsSUFBSSxDQUFDLE1BQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQVEsS0FBSyxFQUFFO0FBQUEsSUFBSSxPQUFPLEVBQUU7QUFBQSxLQUN6QixHQUFHLDhCQUFVLEVBQUUsU0FDZCx3QkFBRyxXQUFVLElBQUksOEJBQVUsRUFBRSxjQUFjLFlBVTNELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLHNCQUNDLG9DQUFDLHFCQUFEO0FBQUEsSUFBcUIscUJBQXFCO0FBQUEsT0FFMUM7QUFBQTs7O0FJM0RWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsb0JBQW1EO0FBQ25ELG9CQUFrQjtBQUNsQixxQkFBbUI7OztBQ0puQjtBQUFBLG9CQUFvQztBQUNwQyxtQkFBa0I7QUFDbEIscUJBQTBCO0FBRVgsNEJBQTRCLE9BQU87QUFDaEQsUUFBTSxDQUFDLEtBQUssVUFBVSw0QkFBUztBQUMvQixRQUFNLE9BQU8sTUFBTTtBQUVuQiwrQkFBVSxNQUFNO0FBQ2QsUUFBSSxjQUFjLHFCQUFNLFNBQVM7QUFDakMsUUFBSSxlQUFlLFFBQVc7QUFDNUIsa0JBQVk7QUFBQTtBQUVkLFFBQUksT0FBTyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBQ2xDO0FBQUE7QUFFRixXQUFPLFNBQVMsZUFBZTtBQUMvQixVQUFNLGtCQUFrQixJQUFJLHFCQUFNLEtBQUs7QUFBQSxNQUNyQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixRQUFRLE9BQU8sS0FBSyxNQUFNLElBQUksQ0FBQyxNQUFNLDhCQUFVO0FBQUEsUUFDL0MsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU0sT0FBTyxPQUFPO0FBQUEsWUFDcEIsaUJBQWlCLE9BQU8sT0FBTyxNQUFNLElBQ25DLENBQUMsTUFDQyxZQUFZLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzdELFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxVQUNOLEdBQUc7QUFBQSxZQUNELGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXZCLFNBQ0UsMERBQUcsT0FBTyxLQUFLLE1BQU0sU0FBUyxLQUFLLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QURuQ2xELElBQUksY0FBYSxRQUFRO0FBQ3pCLHNCQUFNLE9BQU87QUFFYixJQUFNLG9CQUFvQiw2QkFDdkIsS0FBSyw2QkFBUSxRQUNiLFFBQVEsUUFDUixRQUFRO0FBRUosSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQUE7QUFFcEMsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsUUFBTSxlQUFlLE1BQU0sZUFBZSxNQUFNO0FBRWhELFNBQU8sNEJBQU8sY0FDWCxRQUFRLENBQUMsUUFBUSxJQUFJLGNBQ3JCLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFBQTtBQUdULDJCQUEwQjtBQUN2QyxRQUFNLGFBQWE7QUFFbkIsUUFBTSx3QkFBd0IsTUFBTTtBQUNsQyxXQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FBa0Isc0JBQ2pDLG9DQUFDLE1BQUQ7QUFBQSxNQUFJLFdBQVU7QUFBQSxRQUNkLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLEtBQUQsTUFBSSxrQkFBa0IsT0FBTyxnQkFBa0IsTUFBRyxLQUNsRCxvQ0FBQyxLQUFELE1BQ0csa0JBQ0UsSUFBSSxHQUFHLFFBQ1AsU0FBUyxHQUFHLE9BQ1osT0FBTyxnQkFDUCxLQUNMLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxLQUFELE1BQUcsU0FDSyw2QkFBUSxRQUFPLFFBQUssa0JBQWtCLE9BQU8sV0FHdkQsb0NBQUMsb0JBQUQ7QUFBQSxNQUFvQjtBQUFBLFFBQ25CLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FDbEM7QUFBQTtBQUtSLFNBQU8sMERBQUc7QUFBQTs7O0FFdkRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE4Qjs7O0FDQTlCO0FBQ0EsNkJBQW9DLFNBQVM7QUFEN0M7QUFFRSxNQUFJLGdCQUFnQixNQUFNLGlCQUN2QixLQUFLLFlBQ0wsT0FBTyxNQUNQLE1BQU0sRUFBRSxNQUFNLFFBQVEsVUFBVSxTQUFTLFFBQVE7QUFFcEQsTUFBSTtBQUNKLE1BQUksY0FBYyxLQUFLLFdBQVcsR0FBRztBQUNuQyxvQkFBZ0IsTUFBTSxpQkFDbkIsS0FBSyxZQUNMLE9BQU8sRUFBRSxNQUFNLFFBQVEsVUFBVSxTQUFTLFFBQVE7QUFBQTtBQUV2RCxlQUFhLG9CQUFjLFNBQWQsbUJBQXFCLEdBQUc7QUFFckMsUUFBTSxFQUFFLFNBQVMsTUFBTSxpQkFBUyxLQUFLLFdBQVcsT0FBTztBQUFBLElBQ3JEO0FBQUEsTUFDRSxNQUFNLFFBQVE7QUFBQSxNQUNkLGdCQUFnQixRQUFRO0FBQUEsTUFDeEIsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLE1BQ1YsU0FBUyxRQUFRO0FBQUE7QUFBQTtBQUdyQixTQUFPLEtBQUssR0FBRztBQUFBO0FBR2pCLDZCQUFvQyxZQUFZO0FBQzlDLFFBQU0sVUFBVSxNQUFNLGlCQUNuQixLQUFLLGtCQUNMLE9BQU8sS0FDUCxHQUFHLGNBQWM7QUFFcEIsUUFBTSwrQkFDSixNQUFNLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLHFCQUFxQixhQUFhO0FBRXBFLFFBQU0saUJBQ0gsS0FBSyxPQUNMLFNBQ0EsT0FBTyxvQkFBb0IsTUFBTTtBQUVwQyxRQUFNLGlCQUNILEtBQUssb0JBQ0wsU0FDQSxNQUFNLEVBQUUsU0FBUztBQUVwQixRQUFNLGlCQUFpQixNQUFNLGlCQUMxQixLQUFLLFdBQ0wsU0FDQSxNQUFNLEVBQUUsSUFBSTtBQUVmLFNBQU8sZUFBZTtBQUFBO0FBR3hCLDBCQUFpQyxJQUFJO0FBQ25DLE1BQUksRUFBRSxNQUFNLFlBQVksTUFBTSxpQkFDM0IsS0FBSywwQkFDTCxPQUFPLEtBQ1AsR0FBRyxNQUFNO0FBQ1osU0FBTztBQUFBO0FBR1Qsc0NBQTZDLElBQUk7QUFDL0MsTUFBSSxFQUFFLFNBQVMsTUFBTSxpQkFDbEIsS0FBSyxrQkFDTCxPQUFPLEtBQ1AsR0FBRyxjQUFjLElBQ2pCLE1BQU07QUFFVCxTQUFPO0FBQUE7QUFHVCw2QkFBb0MsSUFBSSxVQUFVO0FBQ2hELFFBQU0sRUFBRSxTQUFTLE1BQU0saUJBQ3BCLEtBQUssV0FDTCxPQUFPLEVBQUUsY0FBYyxZQUN2QixNQUFNLEVBQUU7QUFDWCxTQUFPO0FBQUE7QUFHVCxrQ0FBeUMsUUFBUTtBQUMvQyxRQUFNLEVBQUUsU0FBUyxNQUFNLGlCQUNwQixLQUFLLDBCQUNMLE9BQU8sS0FDUCxHQUFHLFdBQVc7QUFDakIsUUFBTSxXQUFXO0FBRWpCLFNBQU8sU0FBUyxLQUNkLENBQUMsR0FBRyxNQUFNLElBQUksS0FBSyxFQUFFLGtCQUFrQixJQUFJLEtBQUssRUFBRTtBQUFBO0FBSXRELHFDQUE0QyxFQUFFLFlBQVksZUFBZTtBQTVGekU7QUE2RkUsUUFBTSxrQkFBa0IsTUFBTSxpQkFDM0IsS0FBSyxvQkFDTCxPQUFPLHdCQUNQLEdBQUcsWUFBWSxhQUNmLEdBQUcsV0FBVztBQUVqQixNQUFJLG1EQUFpQixNQUFNO0FBQ3pCO0FBQUE7QUFHRixRQUFNLGNBQWMsTUFBTSxpQkFDdkIsS0FBSyxvQkFDTCxPQUFPLENBQUMsRUFBRSxVQUFVLGFBQWEsU0FBUztBQUU3QyxRQUFNLFVBQVMsTUFBTSxpQkFBUyxLQUFLLE9BQU8sT0FBTztBQUFBLElBQy9DO0FBQUEsTUFDRSxrQkFBa0IsdURBQWEsU0FBYixtQkFBb0IsT0FBcEIsbUJBQXdCO0FBQUEsTUFDMUMsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBO0FBQUE7QUFJZixTQUFPLHlDQUFRLFNBQVIsbUJBQWU7QUFBQTtBQUd4Qix5Q0FBZ0QsTUFBTTtBQUNwRCxRQUFNLGlCQUNILEtBQUssT0FDTCxTQUNBLE1BQU0sRUFBRSxrQkFBa0IsS0FBSyxJQUFJO0FBRXRDLFFBQU0saUJBQ0gsS0FBSyxvQkFDTCxTQUNBLE1BQU0sRUFBRSxJQUFJLEtBQUssSUFBSTtBQUN4QjtBQUFBOzs7QUQvSEYscUJBQXdDO0FBQ3hDLG9CQUFrQjs7O0FFSGxCO0FBQUEsb0JBQW9DO0FBQ3BDLG1CQUFrQjtBQUNsQixxQkFBMEI7QUFFWCx5QkFBeUIsT0FBTztBQUM3QyxRQUFNLENBQUMsS0FBSyxVQUFVLDRCQUFTO0FBRS9CLCtCQUFVLE1BQU07QUFDZCxRQUFJLGNBQWMscUJBQU0sU0FBUztBQUNqQyxRQUFJLGVBQWUsUUFBVztBQUM1QixrQkFBWTtBQUFBO0FBRWQsUUFBSSxPQUFPLEtBQUssTUFBTSxpQkFBaUIsV0FBVyxHQUFHO0FBQ25EO0FBQUE7QUFFRixXQUFPLFNBQVMsZUFBZTtBQUMvQixVQUFNLHVCQUF1QixJQUFJLHFCQUFNLEtBQUs7QUFBQSxNQUMxQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixRQUFRLE9BQU8sS0FBSyxNQUFNO0FBQUEsUUFDMUIsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU0sT0FBTyxPQUFPLE1BQU07QUFBQSxZQUMxQixpQkFBaUIsT0FBTyxPQUFPLE1BQU0saUJBQWlCLElBQ3BELENBQUMsTUFDQyxZQUFZLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzdELFNBQVM7QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLGFBQWEsSUFBSSxPQUFPLEtBQUssTUFBTSxpQkFBaUI7QUFBQSxRQUNwRCxRQUFRO0FBQUEsVUFDTixHQUFHO0FBQUEsWUFDRCxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU12QixTQUNFLDBEQUNHLE9BQU8sS0FBSyxNQUFNLGlCQUFpQixTQUFTLEtBQzNDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QUZ2Q1osSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsTUFBSSxXQUFXLE1BQU0sbUJBQW1CO0FBRXhDLGFBQVcsNEJBQU8sVUFDZixRQUFRLENBQUMsTUFBTSwyQkFBTSxFQUFFLGdCQUFnQixRQUN2QyxVQUFVLENBQUMsTUFBTSxFQUFFLFFBQ25CO0FBRUgsTUFBSSxjQUFjLE9BQU8sS0FBSyxVQUFVLElBQUksQ0FBQyxNQUFNLFNBQVM7QUFDNUQsY0FBWTtBQUNaLGdCQUFjLFlBQVksTUFBTSxHQUFHLElBQUksSUFBSTtBQUUzQyxTQUFPLDhCQUNMLHlCQUFLLFVBQVUsY0FDZixDQUFDLEtBQUssS0FBSyxRQUNSLElBQ0MsR0FBRywyQkFBTSw2QkFBUSxLQUFLLEtBQUssUUFBUSxRQUFRLFFBQVEsUUFBUSxPQUN6RCxnQkFDSywyQkFBTSw2QkFBUSxLQUFLLEtBQUssTUFBTSxRQUFRLFFBQVEsUUFBUSxPQUMzRCxnQkFFQTtBQUFBO0FBSUssZ0NBQWdDO0FBQzdDLFFBQU0sV0FBVztBQUVqQixTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQixzQkFDakMsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2Qsb0NBQUMsaUJBQUQ7QUFBQSxJQUFnQixpQkFBaUI7QUFBQTtBQUFBOzs7QUd6Q3pDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUE4QjtBQUM5QixxQkFBOEI7QUFDOUIsb0JBQXlCOzs7QUNIekI7QUFBQSxvQkFBb0M7QUFDcEMsbUJBQWtCO0FBQ2xCLHFCQUEwQjtBQUVYLHlCQUF5QixPQUFPO0FBQzdDLFFBQU0sQ0FBQyxLQUFLLFVBQVUsNEJBQVM7QUFDL0IsK0JBQVUsTUFBTTtBQUNkLFFBQUksY0FBYyxxQkFBTSxTQUFTO0FBQ2pDLFFBQUksZUFBZSxRQUFXO0FBQzVCLGtCQUFZO0FBQUE7QUFHZCxRQUFJLE9BQU8sS0FBSyxNQUFNLFVBQVUsV0FBVyxHQUFHO0FBQzVDO0FBQUE7QUFFRixXQUFPLFNBQVMsZUFBZTtBQUMvQixVQUFNLFVBQVUsSUFBSSxxQkFBTSxLQUFLO0FBQUEsTUFDN0IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxNQUFNLFNBQVMsSUFBSSxDQUFDLFVBQzFCLDhCQUFVLEdBQUcsTUFBTSxpQkFBaUIsTUFBTSxXQUFXO0FBQUEsUUFFdkQsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLE1BQU0sTUFBTSxTQUFTLElBQUksQ0FBQyxVQUFVLE1BQU07QUFBQSxZQUMxQyxjQUFjO0FBQUEsWUFDZCxpQkFBaUIsTUFBTSxTQUFTLElBQUksQ0FBQyxNQUFNO0FBQ3pDLHFCQUFPLFFBQVEsT0FBTyxLQUFLLFdBQVcsUUFDcEMsS0FBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU0xQixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxhQUFhLElBQUksTUFBTSxTQUFTO0FBQUEsUUFDaEMsU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsV0FBVztBQUFBLGNBQ1QsT0FBTyxDQUFDLFlBQVk7QUFDbEIsb0JBQUksWUFBWSxRQUFRO0FBQ3hCLHNCQUFNLE1BQU0sT0FBTyxPQUFPLE1BQU07QUFDaEMsdUJBQU8sWUFBWSxJQUFJLFdBQVcsaUJBQWlCLElBQUksV0FBVyxZQUFZLElBQUksV0FBVyxpQkFBaUIsSUFBSSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRM0ksU0FDRSwwREFBRyxNQUFNLFNBQVMsU0FBUyxLQUFLLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQTtBQUFBOzs7QUQvQ3hDLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLFFBQU0sT0FBTyxNQUFNLDZCQUE2QjtBQUNoRCxRQUFNLG9CQUFvQiw0QkFBTyxNQUM5QixRQUFRLENBQUMsTUFBTSxFQUFFLGFBQ2pCLFVBQVUsQ0FBQyxNQUFNLDBCQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGNBQzlDO0FBRUgsU0FBTyxPQUFPLE9BQU87QUFBQTtBQUdSLDZCQUE2QjtBQUMxQyxRQUFNLGVBQWU7QUFFckIsUUFBTSxDQUFDLHFCQUFxQiwwQkFBMEIsNEJBQVM7QUFFL0QsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBa0IsbUJBQ2pDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxNQUNkLG9DQUFDLEtBQUQsTUFBRyxtQ0FHSixhQUFhLFNBQ1osb0NBQUMsaUJBQUQ7QUFBQSxJQUFlLFVBQVU7QUFBQSxPQUV6QjtBQUFBOzs7QUVsQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQThCO0FBRTlCLHNCQUFrQztBQUNsQyxvQkFBa0I7QUFDbEIsSUFBSSxjQUFhLFFBQVE7QUFDekIsc0JBQU0sT0FBTztBQUViLElBQU0sV0FBVztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUdLLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsTUFBSSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2hDLE1BQUksV0FBVyxNQUFNLGVBQWU7QUFFcEMsYUFBVyw2QkFBTyxVQUNmLFFBQVEsQ0FBQyxNQUFNLDJCQUFNLEVBQUUsZ0JBQWdCLE9BQ3ZDLFVBQVUsQ0FBQyxNQUNWLDZCQUFPLEdBQ0osUUFBUSxDQUFDLFFBQVEsSUFBSSxjQUNyQixVQUFVLENBQUMsTUFBTSxFQUFFO0FBRzFCLFNBQU87QUFBQTtBQUdULElBQU0scUJBQW9CLDZCQUN2QixLQUFLLDZCQUFRLFFBQ2IsUUFBUSxRQUNSLFFBQVE7QUFFSSwrQkFBK0I7QUFDNUMsUUFBTSxXQUFXO0FBRWpCLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQixhQUNqQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsTUFDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFELE1BQUksbUJBQWtCLE9BQU8sZ0JBQWtCLE1BQUcsS0FDbEQsb0NBQUMsS0FBRCxNQUNHLG1CQUNFLElBQUksR0FBRyxRQUNQLFNBQVMsR0FBRyxPQUNaLE9BQU8sZ0JBQ1AsS0FDTCxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsS0FBRCxNQUFHLFNBQ0ssNkJBQVEsUUFBTyxRQUFLLG1CQUFrQixPQUFPLFdBR3ZELG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLEVBQUUsU0FBUyxRQUFRLGVBQWUsT0FBTyxVQUFVO0FBQUEsS0FDNUQsQ0FBQyxHQUFHLE1BQU0sR0FBRyxRQUFRLElBQUksQ0FBQyxNQUFNLFVBQy9CLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFPLE9BQU8sRUFBRSxPQUFPO0FBQUEsS0FDL0Isb0NBQUMsV0FBRDtBQUFBLElBQ0UsV0FBVyxvQkFDVCxzQ0FBVyxPQUFPLFVBQVMsaUJBQWlCO0FBQUEsS0FHOUMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLEdBQy9CLFNBQVMsV0FDTCxtQkFDSCxJQUFJLE9BQU8sT0FDWCxPQUFPLGtCQUNWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLE9BQU8sUUFBUSxzQ0FBVyxPQUFPLFdBQVUsRUFBRSxNQUFNLFFBQVEsSUFDMUQsQ0FBQyxDQUFDLEdBQUcsSUFBSSxXQUFVO0FBQ2pCLFdBQU8sTUFBTSxTQUNYLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLEtBQUs7QUFBQSxPQUNSLG9DQUFDLEtBQUQsTUFDRywrQkFBVSxJQUFHLE9BQUksTUFJdEIsb0NBQUMsS0FBRCxNQUFHO0FBQUE7QUFBQTs7O0FDbEZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnRTtBQUNoRSxzQkFBMEI7QUFDMUIsb0JBQXlCOzs7QUNGekI7QUFBQSxxQkFBNEI7QUFDNUIsbUJBQTRDO0FBQzVDLG9CQUFvQztBQUVyQixpQ0FBaUMsT0FBTztBQUNyRCxRQUFNLENBQUMsTUFBTSxXQUFXO0FBQ3hCLFFBQU0sV0FBVztBQUNqQixRQUFNLE9BQU87QUFDYix1Q0FBbUIsTUFBTSxDQUFDLFdBQVc7QUFDbkMsYUFBUyxRQUFRLFVBQVUsUUFBUTtBQUFBO0FBR3JDLCtCQUFVLFlBQVk7QUFDcEIsUUFBSSxTQUFTLE1BQU07QUFDakIsZUFBUztBQUFBO0FBRVgsUUFBSSxNQUFNO0FBQ1IsWUFBTSxVQUFVLE1BQU0sUUFBUSxRQUFRO0FBQ3RDLFlBQU0sTUFBTSxLQUFLO0FBRWpCLFVBQUksTUFBTSxlQUFlLENBQUMsTUFBTSxZQUFZLE1BQU07QUFDaEQsaUJBQVM7QUFBQSxhQUNKO0FBQ0wsY0FBTSxZQUFZLE1BQU0sVUFBVSxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBRzVDLENBQUM7QUFFSixTQUFPLDBEQUFHLE1BQU07QUFBQTs7O0FEdEJYLElBQUksVUFBUyxPQUFPLEVBQUUsY0FBYztBQUN6QyxNQUFJLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUIsUUFBTSxPQUFPLElBQUksYUFBYSxJQUFJO0FBQ2xDLFFBQU0sWUFBWSxNQUFNLGFBQWE7QUFFckMsU0FBTztBQUFBO0FBR0YsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxDQUFDLEtBQUssSUFBSSxpQkFBaUI7QUFDN0IsV0FBTztBQUFBO0FBRVQsU0FBTyxNQUFNLFlBQVksS0FBSyxJQUFJLGlCQUFpQixLQUFLLElBQUk7QUFBQTtBQUcvQyxnQ0FBZ0M7QUFDN0MsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sQ0FBQyxNQUFNLFdBQVc7QUFDeEIsUUFBTSxDQUFDLGdCQUFnQjtBQUV2QixRQUFNLFNBQVM7QUFDZixTQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFBeUI7QUFBQSxLQUN2QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBYSxvQkFDMUIsVUFBVSxJQUFJLENBQUMsTUFDZCxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsSUFBSSxLQUFLLEVBQUUsWUFBWSxhQUFhLElBQUk7QUFBQSxJQUN4QyxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWMsK0JBQVUsRUFBRSxXQUkvQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFELE1BQUcsaUJBQ0gsb0NBQUMsTUFBRDtBQUFBLElBQUksT0FBTTtBQUFBLE1BQ1Ysb0NBQUMsUUFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzVCLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFnQixNQUFLO0FBQUEsTUFDdEMsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTyxhQUFhLElBQUk7QUFBQSxNQUUxQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsSUFBK0IsTUFBSztBQUFBLEtBQVM7QUFBQTs7O0FFdEQ3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUQ7QUFHckQsZ0JBQWtEO0FBQ2xELHNCQUEwQjtBQUMxQixvQkFBa0I7QUFDbEIsSUFBTSxNQUFNLFFBQVE7QUFDcEIsc0JBQU0sT0FBTztBQUVOLElBQUksVUFBUyxPQUFPLEVBQUUsU0FBUyxhQUFhO0FBQ2pELE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDaEMsUUFBTSxXQUFXLE1BQU0sbUJBQW1CO0FBQzFDLFNBQU87QUFBQTtBQUdNLDRCQUE0QjtBQUN6QyxRQUFNLFdBQVc7QUFDakIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLFNBQVMsYUFBYSxJQUFJO0FBQ2hDLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QixhQUFhLENBQUMsT0FBTyxPQUFPO0FBQUEsS0FDbkQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLGFBQ2hDLFNBQVMsV0FBVyxLQUFLLG1CQUN6QixTQUFTLElBQUksQ0FBQyxZQUNiLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixJQUFJLFlBQVksUUFBUTtBQUFBLEtBRXhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDVixzQkFDRSxJQUFJLFFBQVEsZ0JBQ1osUUFDQSxPQUFPLG9CQUVaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLHNCQUFNLElBQUksUUFBUSxnQkFBZ0IsUUFBUSxPQUFPLFdBQ2pELE9BQ0EsUUFBUSxPQUVWLCtCQUFVLFFBQVEsaUJBRXBCLFFBQVEsZUFDUCxvQ0FBQyw2QkFBRDtBQUFBLElBQW1CLE1BQU07QUFBQSxJQUFJLFdBQVU7QUFBQSxPQUV2QyxvQ0FBQywwQkFBRDtBQUFBLElBQWdCLE1BQU07QUFBQSxJQUFJLFdBQVU7QUFBQTtBQUFBOzs7QUNqRHBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdUI7QUFFUiwyQkFBMkI7QUFDeEMsU0FDRSwwREFDRSxvQ0FBQyx5QkFBRCxNQUNFLG9DQUFDLHVCQUFEO0FBQUE7OztBQ05SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTREO0FBTTVELHNCQUEwQjtBQUUxQixxQkFBeUI7OztBQ1J6QjtBQUFBLHFCQUEyQztBQUUzQyxJQUFNLFlBQVksQ0FBQyxVQUFVO0FBQzNCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNkJBQVMsTUFBTTtBQUN2QyxRQUFNLENBQUMsU0FBUyxjQUFjLDZCQUFTLE1BQU07QUFFN0MsZ0NBQVUsTUFBTTtBQUNkLFFBQUk7QUFDSixRQUFJLFNBQVM7QUFDWCxpQkFBVyxZQUFZLE1BQU07QUFDM0IsZ0JBQVEsQ0FBQyxhQUFhLFdBQVc7QUFBQSxTQUNoQztBQUFBLGVBQ00sQ0FBQyxTQUFTO0FBQ25CLG9CQUFjO0FBQUE7QUFFaEIsV0FBTyxNQUFNLGNBQWM7QUFBQSxLQUMxQixDQUFDO0FBQ0osU0FDRSxxREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixPQUFPLEtBQUssS0FBSyxLQUFLLE9BQ3BCLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQVEsS0FBTSxXQUNsRCxxREFBQyxRQUFELE1BQVEsT0FBTyxLQUFLLE1BQU0sT0FBTyxRQUFXLElBQUssTUFBTSxLQUFJLE1BQzNELHFEQUFDLFFBQUQsTUFBUSxPQUFNLEtBQUssTUFBTyxPQUFPLE1BQVMsS0FBSyxNQUFNLEtBQUksTUFDekQscURBQUMsUUFBRCxNQUFRLE9BQU0sS0FBSyxNQUFPLE9BQU8sTUFBUSxLQUFLLE1BQU07QUFBQTtBQUkxRCxJQUFPLG9CQUFROzs7QURqQmYsb0JBQWtCO0FBQ2xCLGlCQUE4QjtBQUU5QixJQUFNLE9BQU0sUUFBUTtBQUNwQixJQUFNLGVBQWUsUUFBUTtBQUM3QixzQkFBTSxPQUFPO0FBQ2Isc0JBQU0sT0FBTztBQUVOLElBQUksV0FBUyxPQUFPLEVBQUUsYUFBYTtBQUN4QyxRQUFNLFVBQVUsTUFBTSxXQUFXLE9BQU87QUFDeEMsU0FBTztBQUFBO0FBR0YsSUFBSSxVQUFTLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDakQsTUFBSSxRQUFRLFVBQVUsUUFBUTtBQUM1QixVQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFVBQU0sVUFBVSxNQUFNLGNBQ3BCLEtBQUssSUFBSSxlQUNULEtBQUssSUFBSTtBQUVYLFdBQU87QUFBQTtBQUVULE1BQUksUUFBUSxVQUFVLFVBQVU7QUFDOUIsVUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixVQUFNLFVBQVUsTUFBTSxjQUFjLEtBQUssSUFBSTtBQUM3QyxXQUFPLDZCQUFTO0FBQUE7QUFBQTtBQUlwQixnQkFBZ0IsTUFBTTtBQUNwQixTQUNFLG9DQUFDLE9BQUQsTUFDRyxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQ3BCLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQVEsS0FBTSxXQUNsRCxvQ0FBQyxRQUFELE1BQVEsT0FBTyxLQUFLLE1BQU0sT0FBTyxRQUFXLElBQUssTUFBTSxLQUFJLE1BQzNELG9DQUFDLFFBQUQsTUFBUSxPQUFNLEtBQUssTUFBTyxPQUFPLE1BQVMsS0FBSyxNQUFNLEtBQUksTUFDekQsb0NBQUMsUUFBRCxNQUFRLE9BQU0sS0FBSyxNQUFPLE9BQU8sTUFBUSxLQUFLLE1BQU07QUFBQTtBQUsxRCx5QkFBeUIsU0FBUztBQUNoQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFtQixtQ0FBUyxPQUUzQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsT0FFZixvQ0FBQyxRQUFELE1BQU8sK0JBQVUsbUNBQVMsa0JBRzVCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxPQUdmLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUNOLEdBQUcsc0JBQ0QsSUFBSSxtQ0FBUyxnQkFDYixRQUNBLE9BQU87QUFBQTtBQUFBO0FBU1AsZ0NBQWdDO0FBQzdDLFFBQU0sVUFBVSxvQ0FBZ0I7QUFDaEMsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sQ0FBQyxRQUFRLGFBQWE7QUFDNUIsUUFBTSxDQUFDLFVBQVUsZUFBZSw2QkFBUztBQUN6QyxRQUFNLENBQUMsZ0JBQWdCLHFCQUFxQiw2QkFBUztBQUNyRCxRQUFNLENBQUMsWUFBWSxpQkFBaUIsNkJBQVM7QUFDN0MsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLGFBQWEsQ0FBQyxPQUFPLE9BQU8sUUFBUTtBQUFBLEtBRXBDLDBEQUNHLGdCQUFnQixVQUNqQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxnQkFBZ0I7QUFBQSxNQUNoQixlQUFlO0FBQUE7QUFBQSxLQUdoQixvQ0FBUyxnQkFDUiwwREFDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLHdCQUNoQyxPQUNDLHNCQUFNLElBQUksUUFBUSxnQkFDaEIsc0JBQU0sSUFBSSxRQUFRLHFCQUsxQixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrQixrQkFDakMsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBRztBQUFBLEtBRUgsb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLFNBQVM7QUFBQSxJQUNULGFBQWEsK0JBQVUsc0JBQU0sSUFBSSxRQUFRO0FBQUEsUUFJL0Msb0NBQUMsT0FBRCxRQUdKLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLENBQUMsUUFBUSxnQkFDUixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQ1AsUUFBUSxPQUNOO0FBQUEsTUFDRSxZQUFZLFFBQVE7QUFBQSxNQUNwQixLQUFLLDZCQUFRO0FBQUEsT0FFZixFQUFFLFFBQVE7QUFBQSxLQUdmLFdBSUYsWUFDQyxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUE7QUFBQSxLQUdqQixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUNQLFFBQVEsT0FDTjtBQUFBLE1BQ0UsWUFBWSxRQUFRO0FBQUEsT0FFdEIsRUFBRSxRQUFRO0FBQUEsS0FHZixvQkFLSCxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ3pDLFdBQVU7QUFBQSxLQUNYLHFCQUtGLGtCQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsVUFDRSwyQkFBTSxFQUFFLE9BQU8sU0FDZixzQkFBTSxJQUFJLFFBQVEsaUJBQ2xCO0FBQ0Esc0JBQWMsRUFBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLE1BSTdCLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQztBQUFBLElBQ1gsV0FBVTtBQUFBLElBQ1YsU0FBUyxNQUFNO0FBQ2IsY0FBUSxPQUNOO0FBQUEsUUFDRSxZQUFZLFFBQVE7QUFBQSxRQUNwQixLQUFLLDJCQUFNLFlBQVk7QUFBQSxTQUV6QixFQUFFLFFBQVE7QUFFWixrQkFBWTtBQUFBO0FBQUEsS0FFZixhQU9ULG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQUEsS0FFbkMsb0NBQUMsMEJBQUQsVUFLTixvQ0FBQyx1QkFBRDtBQUFBOzs7QUVyT1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTBCO0FBQzFCLHFCQU1PO0FBR0EsSUFBSSxXQUFTLFlBQVk7QUFDOUIsUUFBTSxnQkFBZ0IsTUFBTTtBQUM1QixTQUFPO0FBQUE7QUFHTSwrQkFBK0I7QUFDNUMsTUFBSSxDQUFDLGNBQWMsbUJBQW1CO0FBQ3RDLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0sV0FBVztBQUNqQixRQUFNLEVBQUUsY0FBYztBQUV0QixTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFNBQVMsTUFBTTtBQUNiLGVBQVMsWUFBWTtBQUFBO0FBQUEsSUFFdkIsV0FBVyw0QkFDVCxhQUFhLElBQUksbUJBQW1CO0FBQUEsS0FFdkMsUUFHQSxjQUFjLElBQUksQ0FBQyxXQUNsQixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxTQUFTLE1BQU07QUFDYixzQkFBZ0IsRUFBRSxjQUFjLE9BQU87QUFBQTtBQUFBLElBRXpDLFdBQVcsNEJBQ1QsYUFBYSxJQUFJLG9CQUFvQixPQUFPLE9BQ3hDLGNBQ0E7QUFBQSxLQUdMLCtCQUFVLE9BQU8sVUFJeEIsb0NBQUMsdUJBQUQ7QUFBQTs7O0FDbkRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFFO0FBRXJFLHNCQUE4QztBQUU5QyxxQkFBeUI7QUFFbEIsSUFBSSxXQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLE1BQUksTUFBTSxJQUFJLElBQUksUUFBUTtBQUMxQixNQUFJLGVBQWUsSUFBSSxhQUFhLElBQUk7QUFDeEMsUUFBTSxZQUFZLE1BQU0sYUFBYTtBQUVyQyxTQUFPO0FBQUE7QUFHRixJQUFJLFVBQVMsT0FBTyxFQUFFLFFBQVEsY0FBYztBQUNqRCxRQUFNLEVBQUUsV0FBVyxTQUFTO0FBRTVCLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxXQUFXLEtBQUssSUFBSTtBQUV4QixRQUFNLHNCQUFzQjtBQUFBLElBQzFCLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQTtBQUVmLFNBQU8sNkJBQVMsWUFBWTtBQUFBO0FBR2YsNEJBQTRCO0FBQ3pDLFFBQU0sRUFBRSxjQUFjO0FBQ3RCLFFBQU0sQ0FBQyxVQUFVLGVBQWU7QUFDaEMsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sVUFBVTtBQUNoQixRQUFNLGdCQUFnQiwrQkFDcEIsNkJBQ0UsV0FDQSxDQUFDLGFBQ0MsR0FBRywrQkFBVSxTQUFTLFNBQ3BCLHNDQUFVLFdBQVUsSUFBSSwrQkFBVSxTQUFTLGNBQWMsT0FHL0QsQ0FBQyxNQUFNLEVBQUUsR0FBRztBQUdkLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLGNBQWE7QUFBQSxJQUNiLFdBQVcsa0JBQWtCLGFBQWEsUUFBUTtBQUFBLElBQ2xELE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxjQUFhO0FBQ3RCLGtCQUFZLGNBQWMsVUFBUyxPQUFPLFVBQVU7QUFBQTtBQUFBLE1BR3hELG9DQUFDLFlBQUQ7QUFBQSxJQUFVLElBQUc7QUFBQSxLQUNWLFVBQVUsSUFBSSxDQUFDLGFBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQ0UsS0FBSyxTQUFTO0FBQUEsSUFDZCxPQUFPLEdBQUcsK0JBQVUsU0FBUyxTQUMzQixzQ0FBVSxXQUFVLElBQUksK0JBQVUsU0FBUyxjQUFjO0FBQUEsU0FPbkUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNO0FBQ2IsY0FBUSxPQUFPLEVBQUUsVUFBVSxZQUFZLEVBQUUsUUFBUTtBQUFBO0FBQUEsSUFFbkQsV0FBVTtBQUFBLElBQ1YsVUFBVSxDQUFDO0FBQUEsS0FDWixTQUlILG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFJLFlBQVk7QUFBQSxLQUNwQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBMkI7QUFBQTs7O0FDbkYzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtRTtBQUNuRSxzQkFBa0Q7QUFDbEQscUJBQXlCO0FBV3pCLGlCQUE4Qjs7O0FDYjlCO0FBQUEsZ0JBQXdCO0FBQ3hCLGdCQUF5QztBQUN6QyxxQkFBeUI7QUFFVixrQkFBa0IsT0FBTztBQUN0QyxRQUFNLENBQUMsUUFBUSxhQUFhLDZCQUFTLE1BQU07QUFDM0MsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLDZCQUFTLE1BQU07QUFDckQsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLDZCQUFTLE1BQU07QUFDakQsUUFBTSxXQUFXLENBQUMsU0FBUSxjQUFhLFlBQVcsVUFDaEQsTUFBTSxXQUFXLFNBQVEsY0FBYSxZQUFXO0FBQ25ELFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsaUJBQWlCLE1BQU0sWUFBWSxZQUFZO0FBQUE7QUFBQSxLQUdqRCxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsYUFBWTtBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLE1BQU0sVUFBVSxFQUFFLE9BQU87QUFBQSxJQUNwQyxRQUFRLE1BQU07QUFDWixlQUFTLFFBQVEsYUFBYSxXQUFXLE1BQU07QUFBQTtBQUFBLE9BS3JELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLGFBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxNQUFNLGVBQWUsRUFBRSxPQUFPO0FBQUEsSUFDekMsUUFBUSxNQUFNO0FBQ1osZUFBUyxRQUFRLGFBQWEsV0FBVyxNQUFNO0FBQUE7QUFBQSxPQUlyRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLE1BQU07QUFBQSxLQUVmLG9DQUFDLG1CQUFEO0FBQUEsSUFBUyxNQUFNO0FBQUEsUUFHbkIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxNQUFNO0FBQ2IsbUJBQWEsQ0FBQyxhQUFhO0FBQ3pCLGlCQUFTLFFBQVEsYUFBYSxDQUFDLFVBQVUsTUFBTTtBQUMvQyxlQUFPLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFHWixXQUFXLDRCQUNULE1BQU0sWUFBWSxlQUFlO0FBQUEsS0FHbkMsb0NBQUMsdUJBQUQ7QUFBQSxJQUFhLE1BQU07QUFBQTtBQUFBOzs7QURsRHRCLElBQUksV0FBUyxPQUFPLEVBQUUsYUFBYTtBQWhCMUM7QUFpQkUsUUFBTSxpQkFBaUIsTUFBTSx1QkFBdUIsT0FBTztBQUMzRCxRQUFNLFNBQVMsdURBQWlCLE9BQWpCLG1CQUFxQjtBQUNwQyxNQUFJO0FBQ0osTUFBSSxRQUFRO0FBQ1YsVUFBTSxPQUFPLE1BQU0sNkJBQTZCO0FBQ2hELHdCQUFvQiw2QkFBTyxNQUN4QixRQUFRLENBQUMsTUFBTSxFQUFFLGFBQ2pCLFVBQVUsQ0FBQyxNQUFNLDJCQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLGNBQzlDO0FBQUE7QUFHTCxRQUFNLGVBQWUsNkJBQ25CLGdCQUNBLENBQUMsUUFDQyxHQUFHLCtCQUFVLElBQUksa0JBQ2YsSUFBSSxVQUFVLElBQUksK0JBQVUsSUFBSSxjQUFjO0FBSXBELFNBQU8sRUFBRSxjQUFjO0FBQUE7QUFHbEIsSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBQ3pDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsVUFBUSxRQUFRO0FBQUEsU0FDVDtBQUNILFVBQUksS0FBSyxJQUFJLFlBQVksT0FBTztBQUM5QixjQUFNLFVBQVU7QUFDaEI7QUFBQTtBQUFBLFNBRUM7QUFDSCxZQUFNLE9BQU87QUFDYjtBQUFBLFNBQ0c7QUFDSCxVQUFJLEtBQUssSUFBSSxZQUFZLFlBQVk7QUFDbkMsY0FBTSwwQkFBMEI7QUFDaEM7QUFBQTtBQUVGLFVBQUksS0FBSyxJQUFJLFlBQVksT0FBTztBQUM5QixjQUFNLFVBQVU7QUFDaEI7QUFBQTtBQUFBO0FBR04sU0FBTztBQUFBO0FBR00saUNBQWlDO0FBQzlDLFFBQU0sRUFBRSxjQUFjLHNCQUFzQjtBQUM1QyxRQUFNLENBQUMsWUFBWSxpQkFBaUI7QUFDcEMsUUFBTSxFQUFFLGNBQWM7QUFDdEIsUUFBTSxVQUFVO0FBRWhCLFFBQU0scUJBQXFCLENBQUMsZUFBZSxTQUFTO0FBQ2xELFVBQU0sYUFBYSxLQUFLLEdBQUc7QUFDM0IsVUFBTSxrQkFBa0I7QUFBQSxNQUN0QixZQUFZO0FBQUEsTUFDWjtBQUFBLE1BQ0EscUJBQXFCLEtBQUssR0FBRztBQUFBO0FBRy9CLFVBQU0sZ0JBQWdCLENBQUMsUUFBUSxhQUFhLFdBQVcsVUFDckQsUUFBUSxPQUNOO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsTUFBTTtBQUFBLE9BRVIsRUFBRSxRQUFRO0FBR2QsVUFBTSxnQkFBZ0IsQ0FBQyxVQUNyQixRQUFRLE9BQ047QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTjtBQUFBLE9BRUYsRUFBRSxRQUFRO0FBRWQsVUFBTSxrQkFBa0Isa0JBQWtCO0FBQzFDLFdBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQW1CLGVBQWMsTUFFL0MsbUJBQ0Msb0NBQUMsS0FBRCxNQUNFLG9DQUFDLEtBQUQsTUFBRyxTQUFRLEtBQUUsZ0JBQWdCLFFBQU8sTUFBRyxLQUN0QyxnQkFBZ0IsYUFBWSxPQUFJLGdCQUFnQixhQUdyRCxvQ0FBQyxNQUFEO0FBQUEsTUFBSSxXQUFVO0FBQUEsUUFFYixLQUFLLElBQUksQ0FBQyxRQUNULG9DQUFDLFVBQUQ7QUFBQSxNQUNFLEtBQUssSUFBSTtBQUFBLE1BQ1QsT0FBTyxJQUFJO0FBQUEsTUFDWCxRQUFRLElBQUk7QUFBQSxNQUNaLFdBQVcsSUFBSTtBQUFBLE1BQ2YsYUFBYSxJQUFJO0FBQUEsTUFDakIsWUFBWSxNQUFNLGNBQWMsSUFBSTtBQUFBLE1BQ3BDLFlBQVk7QUFBQSxTQUdoQixvQ0FBQyxXQUFEO0FBQUEsTUFBUyxXQUFVO0FBQUEsT0FDakIsb0NBQUMsT0FBRDtBQUFBLE1BQUssT0FBTyxFQUFFLE9BQU87QUFBQSxPQUNuQixvQ0FBQyxVQUFEO0FBQUEsTUFDRSxTQUFTLE1BQ1AsUUFBUSxPQUFPLGlCQUFpQixFQUFFLFFBQVE7QUFBQSxNQUU1QyxXQUFVO0FBQUEsT0FDWCxXQUtILG9DQUFDLE9BQUQ7QUFBQSxNQUNFLFdBQVcsR0FDVCwwQ0FBYSxnQkFBZSxRQUFRLGNBQWM7QUFBQSxPQUdwRCxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFVO0FBQUEsT0FDYixvQ0FBQyxVQUFEO0FBQUEsTUFDRSxXQUFVO0FBQUEsTUFDVixpQkFBYztBQUFBLE1BQ2QsaUJBQWM7QUFBQSxNQUNkLFNBQVMsTUFDUCxjQUFjLENBQUMsTUFBTyxpQ0FDakIsSUFEaUI7QUFBQSxTQUVuQixhQUFhLENBQUUseUJBQUksZ0JBQWU7QUFBQTtBQUFBLE9BSXZDLG9DQUFDLDBCQUFELFNBR0osb0NBQUMsT0FBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE1BQ1YsSUFBRztBQUFBLE1BQ0gsTUFBSztBQUFBLE9BRUwsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMsVUFBRDtBQUFBLE1BQ0UsV0FBVTtBQUFBLE1BQ1YsU0FBUyxNQUNQLFFBQVEsT0FDTixpQ0FBSyxrQkFBTCxFQUFzQixNQUFNLGVBQzVCLEVBQUUsUUFBUTtBQUFBLE9BR2Y7QUFBQTtBQWFuQixTQUNFLDBEQUNHLE9BQU8sUUFBUSxjQUFjLElBQUksQ0FBQyxDQUFDLGVBQWUsT0FBTyxZQUN4RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsS0FBVSxtQkFBbUIsZUFBZSxTQUV4RCxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFJLFlBQVk7QUFBQSxLQUNwQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBNkM7QUFBQTs7O0FFaE12RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpRTtBQUNqRSxzQkFBb0M7QUFFcEMscUJBQXlCO0FBR3pCLG9CQUFrQjtBQUNsQixJQUFNLE9BQU0sUUFBUTtBQUNwQixzQkFBTSxPQUFPO0FBRU4sSUFBSSxVQUFTLE9BQU8sRUFBRSxjQUFjO0FBVjNDO0FBV0UsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixNQUFJLFNBQVMsS0FBSyxJQUFJO0FBQ3RCLE1BQUksT0FBTyxLQUFLLElBQUk7QUFDcEIsTUFBSSxXQUFXLEtBQUssSUFBSTtBQUN4QixNQUFJLFdBQVcsS0FBSyxJQUFJO0FBQ3hCLGFBQVcsNENBQVUsa0JBQVYsbUJBQXlCLFFBQVEsTUFBTSxTQUFRO0FBQzFELFFBQU0sa0JBQWtCLE1BQU0sY0FBYztBQUFBLElBQzFDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFHRixTQUFPLDZCQUFTLFlBQVk7QUFBQTtBQUd2QixJQUFJLFdBQVMsT0FBTyxFQUFFLGNBQWM7QUFDekMsTUFBSSxNQUFNLElBQUksSUFBSSxRQUFRO0FBQzFCLFFBQU0sT0FBTyxJQUFJLGFBQWEsSUFBSTtBQUNsQyxRQUFNLFlBQVksTUFBTSxhQUFhO0FBQ3JDLFNBQU87QUFBQTtBQUdNLDhCQUE4QjtBQUMzQyxRQUFNLFlBQVk7QUFDbEIsUUFBTSxDQUFDLE1BQU0sV0FBVztBQUN4QixRQUFNLENBQUMsYUFBYSxrQkFBa0I7QUFFdEMsUUFBTSxxQkFBcUIsTUFBTTtBQUMvQixVQUFNLE9BQU8sSUFBSTtBQUNqQixRQUFJLE9BQU8sS0FBSztBQUNoQixRQUFJLFFBQVEsOEJBQVMsS0FBSyxhQUFhLEdBQUcsR0FBRztBQUM3QyxRQUFJLE1BQU0sOEJBQVMsS0FBSyxXQUFXLEdBQUc7QUFDdEMsUUFBSSxLQUFLLDhCQUFTLEtBQUssWUFBWSxHQUFHO0FBQ3RDLFFBQUksTUFBTSw4QkFBUyxLQUFLLGNBQWMsR0FBRztBQUN6QyxXQUFPLEdBQUcsUUFBUSxTQUFTLE9BQU8sTUFBTTtBQUFBO0FBRTFDLFFBQU0sU0FBUztBQUNmLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUF5QjtBQUFBLEtBQ3ZCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFhLGdCQUMzQixvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsVUFBVSxPQUFPLFVBQVU7QUFDekIsWUFBTTtBQUNOLFlBQU0sTUFBTSxLQUFLO0FBQ2pCLFlBQU0sU0FBUyxTQUFTLGNBQWM7QUFDdEMsYUFBTyxhQUFhLFFBQVE7QUFDNUIsYUFBTyxhQUFhLFFBQVE7QUFDNUIsYUFBTyxhQUFhLFNBQVM7QUFFN0IsWUFBTSxXQUFXLFNBQVMsY0FBYztBQUN4QyxlQUFTLGFBQWEsUUFBUTtBQUM5QixlQUFTLGFBQWEsUUFBUTtBQUM5QixlQUFTLGFBQ1AsU0FDQSwyQkFBTSxHQUFHLE1BQU0sT0FBTyxjQUFjLFlBQVk7QUFHbEQsWUFBTSxPQUFPLFNBQVMsY0FBYztBQUNwQyxXQUFLLGFBQWEsUUFBUTtBQUMxQixXQUFLLGFBQWEsUUFBUTtBQUMxQixXQUFLLGFBQ0gsU0FDQSxNQUFNLE9BQU8sZ0JBQWdCLFVBQVUsS0FDbkMsR0FBRywyQkFBTSxzQkFBc0IsT0FBTyxvQkFDdEMsTUFBTSxPQUFPLGdCQUFnQjtBQUduQyxZQUFNLE9BQU8sT0FBTztBQUNwQixZQUFNLE9BQU8sT0FBTztBQUNwQixZQUFNLE9BQU8sT0FBTztBQUVwQixhQUFPLE1BQU07QUFBQTtBQUFBLEtBR2Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsZUFFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsYUFBYSxHQUFHLDJCQUFNLHNCQUFzQixPQUMxQztBQUFBLFNBT1Ysb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQVEsVUFFM0Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsY0FBYztBQUFBLFNBS3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFRLGNBRTNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsT0FBQyxFQUFFLE9BQU8sUUFDTixlQUFlLFNBQ2YsZUFBZTtBQUFBO0FBQUEsSUFFckIsTUFBSztBQUFBLElBQ0wsY0FBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLE1BRVAsb0NBQUMsWUFBRDtBQUFBLElBQVUsSUFBRztBQUFBLElBQVksV0FBVTtBQUFBLEtBQ2hDLFVBQVUsSUFBSSxDQUFDLFNBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQVEsS0FBSyxLQUFLO0FBQUEsSUFBTSxPQUFPLCtCQUFVLEtBQUs7QUFBQSxXQU14RCxvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDO0FBQUEsS0FDWixpQkFLTCxvQ0FBQyx1QkFBRDtBQUFBOzs7QUM5SlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXlCO0FBRWxCLElBQUksV0FBUyxZQUFZO0FBQzlCLFNBQU8sNkJBQVM7QUFBQTtBQUVILGlCQUFpQjtBQUM5QixTQUFPO0FBQUE7OztBQ05UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFvQztBQUVwQyxpQkFBOEM7QUFDOUMsZ0JBQXlCO0FBQ3pCLGlCQUE2Qjs7Ozs7O0FBRXRCLGlCQUFpQjtBQUN0QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3RCLHFCQUFxQjtBQUNsQyxRQUFNLENBQUMsUUFBUSxhQUFhO0FBQzVCLFFBQU0sQ0FBQyxNQUFNLFdBQVc7QUFFeEIsU0FDRSwwREFDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQXlCO0FBQUEsSUFBc0I7QUFBQSxLQUM3QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLO0FBQUEsT0FFWixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixPQUFPLEVBQUUsT0FBTztBQUFBLEtBRWhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxPQUVYLE9BQ0Msb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWdCLFFBQUssUUFBUSxLQUFLLGNBQy9DLG9DQUFDLEtBQUQsT0FDQSxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLGdCQUFnQjtBQUFBLEtBRXRCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLHlCQUFEO0FBQUEsSUFBYyxNQUFNO0FBQUEsT0FDZixtQkFHVCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLHFDQUFxQztBQUFBLEtBRTNDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLDRCQUFEO0FBQUEsSUFBaUIsTUFBTTtBQUFBLE9BQ2xCLGNBR1Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLElBQWMsTUFBTSxrQkFBa0I7QUFBQSxLQUNqRCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxvQkFBRDtBQUFBLElBQVUsTUFBTTtBQUFBLE9BQ1gsYUFHVCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLG1CQUFtQjtBQUFBLEtBRXpCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLHlCQUFEO0FBQUEsSUFBYyxNQUFNO0FBQUEsT0FDZixpQkFNYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsT0FBTyxFQUFFLFlBQVk7QUFBQSxLQUN0QixzQkFHRCxvQ0FBQyxPQUFELE1BQUs7QUFBQTs7O0FDNUVyQjtBQUFBLElBQU8sMEJBQVEsRUFBQyxXQUFVLFlBQVcsU0FBUSxFQUFDLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sb0JBQW1CLEVBQUMsTUFBSyxvQkFBbUIsWUFBVyxRQUFPLFFBQU8sYUFBWSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1Q0FBc0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUNBQWtDLEVBQUMsTUFBSyxtQ0FBa0MsWUFBVyxvQkFBbUIsUUFBTyxrQkFBaUIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsc0RBQXFELFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8seUNBQXdDLEVBQUMsTUFBSyx5Q0FBd0MsWUFBVyxvQkFBbUIsUUFBTyx3QkFBdUIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsNERBQTJELFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDZCQUE0QixFQUFDLE1BQUssNkJBQTRCLFlBQVcsb0JBQW1CLFFBQU8sWUFBVyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxnREFBK0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sc0NBQXFDLEVBQUMsTUFBSyxzQ0FBcUMsWUFBVyxvQkFBbUIsUUFBTyxxQkFBb0IsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMseURBQXdELFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxzQ0FBcUMsRUFBQyxNQUFLLHNDQUFxQyxZQUFXLG9CQUFtQixRQUFPLHFCQUFvQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx5REFBd0QsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sb0JBQW1CLEVBQUMsTUFBSyxvQkFBbUIsWUFBVyxRQUFPLFFBQU8sYUFBWSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1Q0FBc0MsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQ0FBK0IsRUFBQyxNQUFLLGdDQUErQixZQUFXLFFBQU8sUUFBTyx5QkFBd0IsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbURBQWtELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxrQkFBaUIsRUFBQyxNQUFLLGtCQUFpQixZQUFXLFFBQU8sUUFBTyxXQUFVLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHFDQUFvQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sNkJBQTRCLEVBQUMsTUFBSyw2QkFBNEIsWUFBVyxrQkFBaUIsUUFBTyxjQUFhLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGdEQUErQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxpREFBZ0QsRUFBQyxNQUFLLGlEQUFnRCxZQUFXLDZCQUE0QixRQUFPLFFBQVUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsb0VBQW1FLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDZEQUE0RCxFQUFDLE1BQUssNkRBQTRELFlBQVcsaURBQWdELFFBQU8sZUFBYyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxnRkFBK0UsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDhDQUE2QyxFQUFDLE1BQUssOENBQTZDLFlBQVcsNkJBQTRCLFFBQU8sb0JBQW1CLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGlFQUFnRSxXQUFVLENBQUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUJBQWtCLEVBQUMsTUFBSyxtQkFBa0IsWUFBVyxRQUFPLFFBQU8sWUFBVyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxzQ0FBcUMsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBakNxQjk4TixJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0NBQWdDO0FBQUEsSUFDNUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixvQkFBb0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHlDQUF5QztBQUFBLElBQ3JDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0NBQXNDO0FBQUEsSUFDbEMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixzQ0FBc0M7QUFBQSxJQUNsQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1DQUFtQztBQUFBLElBQy9CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixvQkFBb0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpREFBaUQ7QUFBQSxJQUM3QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZEQUE2RDtBQUFBLElBQ3pELElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosOENBQThDO0FBQUEsSUFDMUMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
