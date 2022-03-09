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
    const { data, error } = await supabase_default.from("max_volume_for_workout_exercise").select("*").eq("user_id", userId).eq("exercise_id", exerciseId);
    return data;
  } else {
    const { data, error } = await supabase_default.from("max_volume_for_workout_exercise").select("*").eq("user_id", userId);
    return data;
  }
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\analytics\progressive-overload.jsx
var import_remix5 = __toESM(require_remix());
var import_lodash3 = __toESM(require("lodash"));

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
  const bestSetByExercise = (0, import_lodash9.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash9.maxBy)(e, (s) => s.weight)).value();
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
    bestSetByExercise = (0, import_lodash16.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash16.maxBy)(e, (s) => s.weight)).value();
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
var assets_manifest_default = { "version": "2f38c602", "entry": { "module": "/build/entry.client-SRFLXF3V.js", "imports": ["/build/_shared/chunk-DVKDPGSK.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VAJEYHVZ.js", "imports": ["/build/_shared/chunk-K7HZYQXL.js", "/build/_shared/chunk-PB3FE65F.js", "/build/_shared/chunk-OYVCBLY3.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-UTRN3CIC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-5ISX56BA.js", "imports": ["/build/_shared/chunk-5LMHD3JW.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-YD2SARZR.js", "imports": ["/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-5LMHD3JW.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/schedule": { "id": "routes/analytics/schedule", "parentId": "routes/analytics", "path": "schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/schedule-VCJ5EMTG.js", "imports": ["/build/_shared/chunk-KSMCDPPO.js", "/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-SE6TNGFD.js", "imports": ["/build/_shared/chunk-KSMCDPPO.js", "/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-5LMHD3JW.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-7UTUBNMO.js", "imports": ["/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-5LMHD3JW.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-X45262MC.js", "imports": ["/build/_shared/chunk-TIATF7WL.js", "/build/_shared/chunk-5A6XHM26.js", "/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-HO3UILZY.js", "imports": ["/build/_shared/chunk-5A6XHM26.js", "/build/_shared/chunk-6WPLRABQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-RUFTQLAE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-4K4PEXTJ.js", "imports": ["/build/_shared/chunk-5A6XHM26.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-DC66Y6J2.js", "imports": ["/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-2I5YT7UY.js", "imports": ["/build/_shared/chunk-5A6XHM26.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-PROIUB5G.js", "imports": ["/build/_shared/chunk-TIATF7WL.js", "/build/_shared/chunk-K7HZYQXL.js", "/build/_shared/chunk-PB3FE65F.js", "/build/_shared/chunk-OYVCBLY3.js", "/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-XRQCRNQ2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-HYTLAQEG.js", "imports": ["/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-3P7QE64T.js", "imports": ["/build/_shared/chunk-6WPLRABQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-KS56SGAF.js", "imports": ["/build/_shared/chunk-TIATF7WL.js", "/build/_shared/chunk-5A6XHM26.js", "/build/_shared/chunk-J6ILXN65.js", "/build/_shared/chunk-W2UJCQ2A.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-2F38C602.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxzY2hlZHVsZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dHMuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TdG9wd2F0Y2guanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXF9fYWRkRXhlcmNpc2VQYXJlbnRcXGFkZEV4ZXJjaXNlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRcXCR3b3Jrb3V0SWRcXGN1cnJlbnRFeGVyY2lzZXMuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NldElucHV0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcY3JlYXRlLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGhvbWUuanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxcZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLiRsb2NhdGlvbklkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHRyYWluZWQtdGhpcy13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHdvcmtvdXRzLXBlci13ZWVrLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHBlcnNvbmFsLWJlc3RzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYW5hbHl0aWNzXFxcXHNjaGVkdWxlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dHMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0XFxcXCR3b3Jrb3V0SWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXF9fYWRkRXhlcmNpc2VQYXJlbnRcXFxcYWRkRXhlcmNpc2UuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXGN1cnJlbnRFeGVyY2lzZXMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcY3JlYXRlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGhvbWUuanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnMvOmxvY2F0aW9uSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInNjaGVkdWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9uc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXRoOiBcIjp3b3Jrb3V0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudFwiLFxuICAgICAgcGF0aDogXCJhZGRFeGVyY2lzZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiLFxuICAgICAgcGF0aDogXCJjdXJyZW50RXhlcmNpc2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY3JlYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY3JlYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL2hvbWVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvbWVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xyXG4gIExpbmssXHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUxvYWRlckRhdGEsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBGaXJlYmFzZUxvZ2luIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlyZWJhc2VMb2dpbi5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcclxuICByZXR1cm4geyB0aXRsZTogXCJHYWluc0Jyb1wiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmaXJlYmFzZUNvbmZpZzoge1xyXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXHJcbiAgICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkFVVEhfRE9NQUlOLFxyXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlBST0pFQ1RfSUQsXHJcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LlNUT1JBR0VfQlVDS0VULFxyXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTVNHX1NFTkRFUl9JRCxcclxuICAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LkFQUF9JRCxcclxuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTUVBU1VSRU1FTlRfSUQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWJsYWNrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaXMtc2l6ZS01IFwiIHRvPVwiL2hvbWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtd2hpdGUgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj5HQUlOUzwvZGl2PlxyXG4gICAgICAgICAgQlJPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChkYXRhLmZpcmViYXNlQ29uZmlnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCJibGFja1wiPjwvbWV0YT5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG5cclxuICAgICAgICB7LyogPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY3NzLmdnL2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LWRhdGVwaWNrZXIvMi4xNC4xL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiKX0+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS4zL2Nzcy9idWxtYS5taW4uY3NzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICA8RmlyZWJhc2VMb2dpbiBhcHA9e2FwcH0gLz5cclxuICAgICAgICA8L05hdkJhcj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcblxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUmVkaXJlY3QsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEV4cGFuZE1vcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkFjdGl2ZSwgc2V0RHJvcGRvd25BY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKHByb3BzLmFwcCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdvb2dsZUxvZ2luKCkge1xyXG4gICAgc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshdXNlciAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrXCI+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHtkcm9wZG93bkFjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxhY2sgaXMtZnVsbHdpZHRoIFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldERyb3Bkb3duQWN0aXZlKChhY3RpdmVTdGF0ZSkgPT4gIWFjdGl2ZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWRFeHBhbmRNb3JlIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVBhcmFtcywgdXNlTG9hZGVyRGF0YSwgdXNlRmV0Y2hlciwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlLCBncm91cEJ5LCBtYXBWYWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0V29ya291dHNQZXJMb2NhdGlvbixcclxuICBkZWxldGVMb2NhdGlvbixcclxuICByZW5hbWVMb2NhdGlvbixcclxufSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzQXRMb2NhdGlvbiA9IGF3YWl0IGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcik7XHJcblxyXG4gIGNvbnN0IGdldE5hbWVGcm9tSWQgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/Lm5hbWVcclxuICApO1xyXG4gIGNvbnN0IHdvcmtvdXRzUGVyTG9jYXRpb24gPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KHdvcmtvdXRzQXRMb2NhdGlvbiwgKGUpID0+IGUuaWQpLFxyXG4gICAgKGUpID0+IGVbMF0/LmNvdW50ID8/IDBcclxuICApO1xyXG4gIHJldHVybiBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbklkID0gZm9ybS5nZXQoXCJsb2NhdGlvbklkXCIpO1xyXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZm9ybS5nZXQoXCJsb2NhdGlvbk5hbWVcIik7XHJcblxyXG4gICAgYXdhaXQgcmVuYW1lTG9jYXRpb24oXHJcbiAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgIGxvY2F0aW9uTmFtZS5yZXBsYWNlKC8gL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgIC8vIERFTEVURVxyXG4gICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGRlbGV0ZUxvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKSk7XHJcbiAgICBpZiAoZGVsZXRlZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZGVsZXRlZD8uWzBdPy51c2VyX2lkO1xyXG4gICAgICByZXR1cm4gcmVkaXJlY3QodXNlciA/IGAvbG9jYXRpb25zP3VzZXI9JHt1c2VyfWAgOiBcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBcIlN1Y2Nlc3NcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uUm91dGUoKSB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbklkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbd29ya291dHNQZXJMb2NhdGlvbiwgZ2V0TmFtZUZyb21JZF0gPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbc2hvd0lucHV0LCBzZXRTaG93SW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZW5hbWVJbnB1dCwgc2V0UmVuYW1lSW5wdXRdID0gdXNlU3RhdGUoXHJcbiAgICBzdGFydENhc2UoZ2V0TmFtZUZyb21JZFtcIlwiICsgbG9jYXRpb25JZF0gPz8gbnVsbClcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTMgY29udGFpbmVyIGJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+XHJcbiAgICAgICAgICB7c3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aT57Z2V0TmFtZUZyb21JZFtsb2NhdGlvbklkXX08L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICBOdW1iZXIgb2Ygd29ya291dHM6IHt3b3Jrb3V0c1BlckxvY2F0aW9uW1wiXCIgKyBsb2NhdGlvbklkXSA/PyAwfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yXCIgLz5cclxuICAgICAgICB7c2hvd0lucHV0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVuYW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW5hbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCwgbG9jYXRpb25OYW1lOiByZW5hbWVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQVVRcIiB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0lucHV0KGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IXNob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgbGV2ZWwtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SW5wdXQoKHByZXYpID0+ICFwcmV2KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlbmFtZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHshd29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsb2NhdGlvbklkOiBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9ucyh1c2VyKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtvdXRzUGVyTG9jYXRpb24odXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRzX3Blcl9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYXRpb24obG9jYXRpb25JZCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuYW1lTG9jYXRpb24obG9jYXRpb25JZCwgbG9jYXRpb25OYW1lKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC51cGRhdGUoeyBuYW1lOiBsb2NhdGlvbk5hbWUgfSlcclxuICAgIC5tYXRjaCh7IGlkOiBsb2NhdGlvbklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTG9jYXRpb24obG9jYXRpb25OYW1lLCB1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmluc2VydCh7IG5hbWU6IGxvY2F0aW9uTmFtZSwgdXNlcl9pZDogdXNlcklkIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsICJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5sZXQgc3VwYWJhc2U7XHJcblxyXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9VUkw7XHJcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVVBBQkFTRV9BTk9OX0tFWTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnN1cGFiYXNlKSB7XHJcbiAgICBnbG9iYWwuc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XHJcbiAgfVxyXG4gIHN1cGFiYXNlID0gZ2xvYmFsLnN1cGFiYXNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTtcclxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlU2VhcmNoUGFyYW1zLCB1c2VMb2NhdGlvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3NSb3V0ZSgpIHtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB1c2VyID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtMyBtLTVcIj5BbmFseXRpY3M8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+RWZmb3J0IFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUcmFpbmVkIHRoaXMgd2Vla1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV29ya291dHMgcGVyIFdlZWtcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy9zY2hlZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy9zY2hlZHVsZT91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj48L3VsPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlN0cmVuZ3RoIFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQ/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc2l2ZSBPdmVybG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQmVzdHNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9hbmFseXRpY3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRFeGVyY2lzZXNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTdWJtaXQsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFByb2dyZXNzaXZlT3ZlcmxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgbGV0IGV4ZXJjaXNlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJleGVyY2lzZV9pZFwiKSA/PyBleGVyY2lzZXNbMF0/LmlkO1xyXG4gIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXIsIGV4ZXJjaXNlKTtcclxuXHJcbiAgY29uc3Qgc2V0c0J5RXhlcmNpc2UgPSBncm91cEJ5KHNldHMsIChzKSA9PiBzLmV4ZXJjaXNlX2lkKVtleGVyY2lzZV07XHJcbiAgcmV0dXJuIHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NSb3V0ZSgpIHtcclxuICBjb25zdCB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHNpbmdsZUV4ZXJjaXNlQ2hhcnQgPSBzZXRzQnlFeGVyY2lzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Qcm9ncmVzc2l2ZSBPdmVybG9hZDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG1iLTQgaXMtc21hbGxcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImV4ZXJjaXNlX2lkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlX2lkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtleGVyY2lzZXMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3N0YXJ0Q2FzZShlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ID8gKFxyXG4gICAgICAgICAgPFByb2dyZXNzaXZlT3ZlcmxvYWQgcHJvZ3Jlc3NpdmVPdmVybG9hZD17c2luZ2xlRXhlcmNpc2VDaGFydH0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0XCJcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApIHtcclxuICBpZiAobXVzY2xlX2dyb3VwKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImV4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcIm11c2NsZV9ncm91cFwiLCBtdXNjbGVfZ3JvdXApO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJleGVyY2lzZVwiKS5zZWxlY3QoXCIqXCIpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXVzY2xlR3JvdXBzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImRpc3RpbmN0X211c2NsZV9ncm91cHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAub3JkZXIoXCJuYW1lXCIpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJleGVyY2lzZXNfZm9yX3VzZXJcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5U3RhdHNGb3JFeGVyY2lzZSh1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsYXN0X3dvcmtvdXRfd2l0aF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2VcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXQoZm9ybVNldCkge1xyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFNldChmb3JtU2V0KSB7XHJcbiAgY29uc3QgYWRkID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInNldFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlOiBmb3JtU2V0LmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIiksXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkPy5kYXRhPy5bMF07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNldChmb3JtU2V0KSB7XHJcbiAgbGV0IHN1Ym1pc3Npb25TZXQgPSB7XHJcbiAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2VpZ2h0Rm9yU2V0ID0gZm9ybVNldC5nZXQoXCJ3ZWlnaHRcIik7XHJcbiAgY29uc3QgcmVwc0ZvclNldCA9IGZvcm1TZXQuZ2V0KFwicmVwZXRpdGlvbnNcIik7XHJcbiAgY29uc3QgY29tcGxldGVkRm9yU2V0ID0gZm9ybVNldC5nZXQoXCJjb21wbGV0ZWRcIik7XHJcblxyXG4gIGlmICh3ZWlnaHRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQud2VpZ2h0ID0gcGFyc2VGbG9hdCh3ZWlnaHRGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAocmVwc0ZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC5yZXBldGl0aW9ucyA9IHBhcnNlRmxvYXQocmVwc0ZvclNldCk7XHJcbiAgfVxyXG4gIGlmIChjb21wbGV0ZWRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQuY29tcGxldGVkID0gY29tcGxldGVkRm9yU2V0ID09PSBcInRydWVcIjtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC51cGRhdGUoc3VibWlzc2lvblNldClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtU2V0LmdldChcImluZGV4XCIpIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbi8vZGVmYXVsdCBmaWx0ZXJzIGZvciBsYXRlc3Qgd2Vla1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0c0ZvclVzZXIodXNlcklkLCBmaWx0ZXJfc3RhcnQsIGZpbHRlcl9lbmQpIHtcclxuICBjb25zdCBmaWx0ZXJfZGF0ZV9zdGFydCA9IGZpbHRlcl9zdGFydFxyXG4gICAgPyBkYXlqcyhmaWx0ZXJfc3RhcnQpXHJcbiAgICA6IGRheWpzKGRheWpzKCkud2VlayhkYXlqcygpLndlZWsoKSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSk7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfZW5kID0gZmlsdGVyX2VuZCA/IGRheWpzKGZpbHRlcl9lbmQpIDogZGF5anMoKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgIC5ndGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9zdGFydClcclxuICAgIC5sdGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9lbmQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcklkLCBleGVyY2lzZUlkKSB7XHJcbiAgaWYgKGV4ZXJjaXNlSWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJtYXhfdm9sdW1lX2Zvcl93b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuQ2hhcnQucmVnaXN0ZXIoW1Rvb2x0aXBdKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlT3ZlcmxvYWQocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhlcmNpc2VQcm9ncmVzcyA9IHNvcnRCeShcclxuICAgIHByb3BzLnByb2dyZXNzaXZlT3ZlcmxvYWQsXHJcbiAgICAoZSkgPT4gZS5kYXRldGltZV9zdGFydFxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb2xvciA9IGByZ2JhKDE1NSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4yKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4ZXJjaXNlUHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc2l2ZU92ZXJsb2FkQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBleGVyY2lzZVByb2dyZXNzLm1hcCgoZSkgPT5cclxuICAgICAgICAgIGRheWpzKGUuZGF0ZXRpbWVfc3RhcnQpLmZvcm1hdChcIkREL01NL1lZXCIpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJWb2x1bWUgUHJvZ3Jlc3MgKFdlaWdodCB4IFJlcHMpXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PiBlLm1heF92b2x1bWUpLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFZvbHVtZTogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ubWF4X3ZvbHVtZX0gfCBXZWlnaHQ6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLndlaWdodH0gfCBSZXBzOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5yZXBldGl0aW9uc31gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5rZXlzKGV4ZXJjaXNlUHJvZ3Jlc3MpLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxjYW52YXMgaWQ9XCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCI+PC9jYW52YXM+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRFeGVyY2lzZXMgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IGxvZGFzaCBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBXZWVrbHlUcmFpbmluZ1NldHMgZnJvbSBcIn4vY29tcG9uZW50cy9XZWVrbHlUcmFpbmluZ1NldHNcIjtcclxuXHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5jb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKClcclxuICAud2VlayhkYXlqcygpLndlZWsoKSlcclxuICAuc3RhcnRPZihcIndlZWtcIilcclxuICAuc3RhcnRPZihcImRheVwiKTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7fTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKHVzZXIsIHdlZWtTdGFydGluZ09uRGF5KTtcclxuXHJcbiAgcmV0dXJuIGxvZGFzaCh1c2VyV29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzUm91dGUoKSB7XHJcbiAgY29uc3Qgd2Vla2x5U2V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVHJhaW5lZFRoaXNXZWVrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlRyYWluZWQgdGhpcyBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcImRheVwiKVxyXG4gICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgIFdlZWsge2RheWpzKCkud2VlaygpfSBvZiB7d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiWVlZWVwiKX1cclxuICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8V2Vla2x5VHJhaW5pbmdTZXRzIHdlZWtseVNldHM9e3dlZWtseVNldHN9IC8+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHdlZWtseVNldHMpLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0IHRoaXMgd2Vla1wifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDw+e3JlbmRlclRyYWluZWRUaGlzV2VlaygpfTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5VHJhaW5pbmdTZXRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHNldHMgPSBwcm9wcy53ZWVrbHlTZXRzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3ZWVrbHlTZXRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseVNldHNcIikpO1xyXG4gICAgY29uc3Qgd2Vla2x5U2V0c0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhzZXRzKS5tYXAoKGUpID0+IHN0YXJ0Q2FzZShlKSksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBTZXRzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMoc2V0cyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhzZXRzKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgxMDAsJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LDAuMylgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD57T2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID4gMCAmJiA8Y2FudmFzIGlkPVwid2Vla2x5U2V0c1wiPjwvY2FudmFzPn08Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyB0cmFuc2Zvcm0sIHBpY2sgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFdvcmtvdXRQZXJXZWVrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vla1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS53ZWVrKCkpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICBsZXQgd2Vla3NUb1Nob3cgPSBPYmplY3Qua2V5cyh3b3Jrb3V0cykubWFwKChlKSA9PiBwYXJzZUludChlKSk7XHJcbiAgd2Vla3NUb1Nob3cuc29ydCgpO1xyXG4gIHdlZWtzVG9TaG93ID0gd2Vla3NUb1Nob3cuc2xpY2UoMCwgMTApLm1hcChTdHJpbmcpO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtKFxyXG4gICAgcGljayh3b3Jrb3V0cywgd2Vla3NUb1Nob3cpLFxyXG4gICAgKHJlcywgdmFsLCBrZXkpID0+XHJcbiAgICAgIChyZXNbXHJcbiAgICAgICAgYCR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSkuZm9ybWF0KFxyXG4gICAgICAgICAgXCJERC9NL1lZXCJcclxuICAgICAgICApfSAtICR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuZW5kT2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpLmZvcm1hdChcclxuICAgICAgICAgIFwiREQvTS9ZWVwiXHJcbiAgICAgICAgKX1gXHJcbiAgICAgIF0gPSB2YWwpXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRzUGVyV2Vla1JvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPldvcmtvdXRzIHBlciBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPFdvcmtvdXRQZXJXZWVrIHdvcmtvdXRzUGVyV2Vlaz17d29ya291dHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXb3Jrb3V0KHdvcmtvdXQpIHtcclxuICBsZXQgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiaWRcIilcclxuICAgIC5tYXRjaCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG5cclxuICBsZXQgbG9jYXRpb25JZDtcclxuICBpZiAoY2hlY2tMb2NhdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgICAgLmluc2VydCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG4gIH1cclxuICBsb2NhdGlvbklkID0gY2hlY2tMb2NhdGlvbi5kYXRhPy5bMF0uaWQ7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIndvcmtvdXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgbmFtZTogd29ya291dC5uYW1lLFxyXG4gICAgICBkYXRldGltZV9zdGFydDogd29ya291dC5kYXRldGltZSxcclxuICAgICAgZGF0ZXRpbWVfZW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbklkLFxyXG4gICAgICB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgcmV0dXJuIGRhdGFbMF0uaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXb3Jrb3V0KHdvcmtvdXRfaWQpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIHdvcmtvdXRfaWQpO1xyXG5cclxuICBjb25zdCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzID1cclxuICAgIFwiKFwiICsgd29ya291dC5kYXRhLm1hcCgoZSkgPT4gZS53b3Jrb3V0X2V4ZXJjaXNlX2lkKS50b1N0cmluZygpICsgXCIpXCI7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZmlsdGVyKFwid29ya291dF9leGVyY2lzZVwiLCBcImluXCIsIGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMpO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIGNvbnN0IF9kZWxldGVXb3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgcmV0dXJuIF9kZWxldGVXb3Jrb3V0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YTogd29ya291dCB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcImlkXCIsIGlkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgaWQpXHJcbiAgICAub3JkZXIoXCJzZXRfaWRcIik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoV29ya291dChpZCwgZGF0ZXRpbWUpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC51cGRhdGUoeyBkYXRldGltZV9lbmQ6IGRhdGV0aW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogaWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIHdvcmtvdXRzLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKDEwMCwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0KSlcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhiZXN0U2V0QnlFeGVyY2lzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbEJlc3RSb3V0ZSgpIHtcclxuICBjb25zdCBsaXN0QmVzdFNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IFtzaW5nbGVFeGVyY2lzZUNoYXJ0LCBzZXRTaW5nbGVFeGVyY2lzZUNoYXJ0XSA9IHVzZVN0YXRlKGxpc3RCZXN0U2V0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0xXCI+UGVyc29uYWwgQmVzdHM8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8aT5XZWlnaHQgb2Ygc2V0IHdpdGggbWF4IHZvbHVtZTwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7bGlzdEJlc3RTZXRzLmxlbmd0aCA/IChcclxuICAgICAgICA8UGVyc29uYWxCZXN0cyBiZXN0U2V0cz17bGlzdEJlc3RTZXRzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiTm8gd29ya291dHMgeWV0XCJcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsUmVjb3Jkcyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwZXJzb25hbFJlY29yZHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuYmVzdFNldHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25hbFJlY29yZHNcIikpO1xyXG4gICAgY29uc3QgcHJDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogcHJvcHMuYmVzdFNldHMubWFwKCh2YWx1ZSkgPT5cclxuICAgICAgICAgIHN0YXJ0Q2FzZShgJHt2YWx1ZS5leGVyY2lzZV9uYW1lfSAke3ZhbHVlLnZhcmlhbnQgPz8gXCJcIn1gKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+IHZhbHVlLndlaWdodCksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iZXN0U2V0cy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMDB9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sICR7XHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgfSwwLjQpYDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmRleEF4aXM6IFwieVwiLFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOiA0IC8gcHJvcHMuYmVzdFNldHMubGVuZ3RoLFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBPYmplY3QudmFsdWVzKHByb3BzLmJlc3RTZXRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgIFdlaWdodDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHwgVm9sOiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0geCAke3NldFtkYXRhSW5kZXhdLnJlcGV0aXRpb25zfSA9ICR7c2V0W2RhdGFJbmRleF0ubWF4X3ZvbHVtZX1gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD57cHJvcHMuYmVzdFNldHMubGVuZ3RoID4gMCAmJiA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+fTwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0U2V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3NldHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmNvbnN0IHdlZWtkYXlzID0gW1xyXG4gIFwiU3VuZGF5XCIsXHJcbiAgXCJNb25kYXlcIixcclxuICBcIlR1ZXNkYXlcIixcclxuICBcIldlZG5lc2RheVwiLFxyXG4gIFwiVGh1cnNkYXlcIixcclxuICBcIkZyaWRheVwiLFxyXG4gIFwiU2F0dXJkYXlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGxldCB3b3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS5kYXkoKSlcclxuICAgIC5tYXBWYWx1ZXMoKHYpID0+XHJcbiAgICAgIGxvZGFzaCh2KVxyXG4gICAgICAgIC5ncm91cEJ5KChzZXQpID0+IHNldC5tdXNjbGVfZ3JvdXApXHJcbiAgICAgICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpXHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gd29ya291dHM7XHJcbn07XHJcblxyXG5jb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKClcclxuICAud2VlayhkYXlqcygpLndlZWsoKSlcclxuICAuc3RhcnRPZihcIndlZWtcIilcclxuICAuc3RhcnRPZihcImRheVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlZWtseVNjaGVkdWxlUm91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlNjaGVkdWxlPC9kaXY+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgIHt3ZWVrU3RhcnRpbmdPbkRheVxyXG4gICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAuc3VidHJhY3QoMSwgXCJkYXlcIilcclxuICAgICAgICAgICAgLmZvcm1hdChcIkREL01NL1lZWVlcIil9XHJcbiAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aT5cclxuICAgICAgICAgIFdlZWsge2RheWpzKCkud2VlaygpfSBvZiB7d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiWVlZWVwiKX1cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgIHtbLi4uQXJyYXkoNykua2V5cygpXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lc3NhZ2UgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICAgIHdvcmtvdXRzPy5bU3RyaW5nKGl0ZW0pXSA/IFwiaXMtc2Vjb25kYXJ5XCIgOiBcImlzLWxpZ2h0XCJcclxuICAgICAgICAgICAgICB9IG0tMyBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPntgJHtcclxuICAgICAgICAgICAgICAgIHdlZWtkYXlzW2l0ZW1dXHJcbiAgICAgICAgICAgICAgfSAtICR7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAgIC5hZGQoaW5kZXgsIFwiZGF5XCIpXHJcbiAgICAgICAgICAgICAgICAuZm9ybWF0KFwiREQvTU0vWVlZWVwiKX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMod29ya291dHM/LltTdHJpbmcoaXRlbSldID8/IHsgUkVTVDogbnVsbCB9KS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgIChbaywgdl0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGsgIT09IFwiUkVTVFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXJ0Q2FzZShrKX0gLSB7dn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxiPlJlc3QgRGF5IFx1RDgzRFx1RENBQTwvYj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucywgYWRkTG9jYXRpb24gfSBmcm9tIFwifi9zZXJ2aWNlL2xvY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBnZXRMb2NhdGlvbnModXNlcik7XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKCFmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSkge1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG4gIHJldHVybiBhd2FpdCBhZGRMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uTmFtZVwiKSwgZm9ybS5nZXQoXCJ1c2VySWRcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlTG9jYXRpb25zUm91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5TYXZlZCBMb2NhdGlvbnM8L2g0PlxyXG4gICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC4vJHtlLmlkfS8/dXNlcj0ke3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTZcIj57c3RhcnRDYXNlKGUubmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiPkFkZCBMb2NhdGlvbjwvYj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIiBuYW1lPVwibG9jYXRpb25OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQXV0aG9yaXNlZENvbXBvbmVudChwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlciA9PT0gbnVsbCkge1xyXG4gICAgICBuYXZpZ2F0ZShcIi9cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBwcm9wcy5zZXRVc2VyID8gcHJvcHMuc2V0VXNlcih1c2VyKSA6IG51bGw7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICAgaWYgKHByb3BzLmlkUHJlZGljYXRlICYmICFwcm9wcy5pZFByZWRpY2F0ZSh1aWQpKSB7XHJcbiAgICAgICAgbmF2aWdhdGUoXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9wcy5zZXRVc2VySWQgPyBwcm9wcy5zZXRVc2VySWQodWlkKSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gPD57cHJvcHMuY2hpbGRyZW59PC8+O1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0V29ya291dHNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnNDaGVja0NpcmNsZUZpbGwsIEJzQ2xvY2tIaXN0b3J5IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG4gIHJldHVybiB3b3Jrb3V0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3Qgd29ya291dHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGlkUHJlZGljYXRlPXsoaWQpID0+IGlkID09PSB1c2VySWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zIG1iLTNcIj5Xb3Jrb3V0czwvZGl2PlxyXG4gICAgICAgIHt3b3Jrb3V0cy5sZW5ndGggPT09IDAgJiYgXCJObyB3b3Jrb3V0cyB5ZXRcIn1cclxuICAgICAgICB7d29ya291dHMubWFwKCh3b3Jrb3V0KSA9PiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBrZXk9e1wid29ya291dC5pZFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgICB0bz17YC93b3Jrb3V0LyR7d29ya291dC5pZH0vY3VycmVudEV4ZXJjaXNlc2B9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF5anNcclxuICAgICAgICAgICAgICAgICAgICAudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgTU1NIEQgWVlcIil9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1iLTIgaXMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpLmxvY2FsKCkuZm9ybWF0KFwiaDptbSBBXCIpfVxyXG4gICAgICAgICAgICAgICAgICB7XCIgLSBcIn1cclxuICAgICAgICAgICAgICAgICAge3dvcmtvdXQubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3N0YXJ0Q2FzZSh3b3Jrb3V0LmxvY2F0aW9uX25hbWUpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt3b3Jrb3V0LmRhdGV0aW1lX2VuZCA/IChcclxuICAgICAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlRmlsbCBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCc0Nsb2NrSGlzdG9yeSBzaXplPXs0MH0gY2xhc3NOYW1lPVwibS00IHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3V29ya291dFJvdXRlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgT3V0bGV0LCB1c2VGZXRjaGVyLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQge1xyXG4gIGZpbmlzaFdvcmtvdXQsXHJcbiAgZ2V0V29ya291dCxcclxuICBkZWxldGVXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdG9wd2F0Y2hcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuY29uc3QgcmVsYXRpdmVUaW1lID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZ2V0V29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgZmluaXNoV29ya291dChcclxuICAgICAgZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpLFxyXG4gICAgICBmb3JtLmdldChcImVuZFwiKVxyXG4gICAgKTtcclxuICAgIHJldHVybiB3b3Jrb3V0O1xyXG4gIH1cclxuICBpZiAocmVxdWVzdC5tZXRob2QgPT0gXCJERUxFVEVcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBkZWxldGVXb3Jrb3V0KGZvcm0uZ2V0KFwid29ya291dF9pZFwiKSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHRvVGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aW1lID4gMjQgKiAzNiAqIDYwICogMTAwMCAmJlxyXG4gICAgICAgIChNYXRoLmZsb29yKHRpbWUgLyAyNCAvIDM2IC8gNjAgLyAxMDAwKSAlIDI0KSArIFwiZGF5KHMpIFwifVxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgKE1hdGguZmxvb3IodGltZSAvIDM2MDAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4+eyhcIjBcIiArIE1hdGguZmxvb3IoKHRpbWUgLyA2MDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd29ya291dE1ldGFEYXRhKHdvcmtvdXQpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIGlzLWxpZ2h0IG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHkgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTNcIj57d29ya291dD8ubmFtZX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHQgbS0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdnLXBpblwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntzdGFydENhc2Uod29ya291dD8ubG9jYXRpb25fbmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctYWxhcm1cIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHNwYW4gaWQ9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICB7YCR7ZGF5anNcclxuICAgICAgICAgICAgICAudXRjKHdvcmtvdXQ/LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgIC5sb2NhbCgpXHJcbiAgICAgICAgICAgICAgLmZvcm1hdChcImRkZGQsIEREIE1NTSBZWSwgSEg6bW1cIil9XHJcbiAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydE5ld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gdXNlTG9hZGVyRGF0YSgpWzBdO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDaGFuZ2VUaW1lLCBzZXRTaG93Q2hhbmdlVGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1c3RvbURhdGUsIHNldEN1c3RvbURhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudFxyXG4gICAgICBzZXRVc2VySWQ9e3NldFVzZXJJZH1cclxuICAgICAgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHdvcmtvdXQudXNlcl9pZH1cclxuICAgID5cclxuICAgICAgPD5cclxuICAgICAgICB7d29ya291dE1ldGFEYXRhKHdvcmtvdXQpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHkgbm90aWZpY2F0aW9uIG1iLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7d29ya291dD8uZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTYgbWItMVwiPldvcmtvdXQgQ29tcGxldGVkLiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3RvVGltZShcclxuICAgICAgICAgICAgICAgICAgICBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9lbmQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0wXCI+VGltZSBFbGFwc2VkOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXMtZmFtaWx5LXNlY29uZGFyeSBoYXMtdGV4dC13ZWlnaHQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0b3B3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgcnVubmluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lPXtkYXlqcygpIC0gZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICB7IXdvcmtvdXQuZGF0ZXRpbWVfZW5kICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGRheWpzKCkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzaG93TWVudSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjMlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWRhbmdlciBpcy1zbWFsbCBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2hhbmdlVGltZSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0IEZpbmlzaCBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dDaGFuZ2VUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoZS50YXJnZXQudmFsdWUpID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tRGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VzdG9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWxpZ2h0IGlzLXN1Y2Nlc3MgbS0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoY3VzdG9tRGF0ZSkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvbiBpcy1saWdodCAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3B3YXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEwMDApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3J1bm5pbmddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9wd2F0Y2hcIj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFyYW1zLFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TXVzY2xlR3JvdXBzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSBhd2FpdCBnZXRNdXNjbGVHcm91cHMoKTtcclxuICByZXR1cm4gbXVzY2xlX2dyb3VwcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc1JvdXRlSW5kZXgoKSB7XHJcbiAgbGV0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUoYC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID8/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7bXVzY2xlX2dyb3Vwcy5tYXAoKG11c2NsZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttdXNjbGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgbXVzY2xlX2dyb3VwOiBtdXNjbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA9PT0gbXVzY2xlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N0YXJ0Q2FzZShtdXNjbGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgcmVkaXJlY3QsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZ2V0RXhlcmNpc2VzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBtdXNjbGVfZ3JvdXAgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKTtcclxuXHJcbiAgcmV0dXJuIGV4ZXJjaXNlcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCwgdXNlciB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBleGVyY2lzZSA9IGZvcm0uZ2V0KFwiZXhlcmNpc2VcIik7XHJcblxyXG4gIGF3YWl0IHBvc3RFeGVyY2lzZXRvV29ya291dCh7XHJcbiAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICBleGVyY2lzZV9pZDogZXhlcmNpc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRXhlcmNpc2VSb3V0ZSgpIHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IGV4TmFtZVRvSWRNYXAgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KFxyXG4gICAgICBleGVyY2lzZXMsXHJcbiAgICAgIChleGVyY2lzZSkgPT5cclxuICAgICAgICBgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgfWBcclxuICAgICksXHJcbiAgICAoZSkgPT4gZVswXS5pZFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgaXMtc21hbGwgJHtzZWxlY3RlZCA9PT0gbnVsbCAmJiBcImlzLWRhbmdlclwifWB9XHJcbiAgICAgICAgICBsaXN0PVwiZXhlcmNpc2VzXCJcclxuICAgICAgICAgIG5hbWU9XCJleGVyY2lzZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKGV4TmFtZVRvSWRNYXBbc2VsZWN0ZWQudGFyZ2V0LnZhbHVlXSA/PyBudWxsKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJleGVyY2lzZXNcIj5cclxuICAgICAgICAgIHtleGVyY2lzZXMubWFwKChleGVyY2lzZSkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAga2V5PXtleGVyY2lzZS5pZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17YCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdCh7IGV4ZXJjaXNlOiBzZWxlY3RlZCB9LCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz17YC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIGdyb3VwQnksIG1heEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCkpXHJcbiAgICAgIC52YWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhlcmNpc2VTZXRzID0gZ3JvdXBCeShcclxuICAgIHNldHNGb3JXb3Jrb3V0LFxyXG4gICAgKHNldCkgPT5cclxuICAgICAgYCR7c3RhcnRDYXNlKHNldC5leGVyY2lzZV9uYW1lKX0gJHtcclxuICAgICAgICBzZXQudmFyaWFudCA/IGAoJHtzdGFydENhc2Uoc2V0LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICB9YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwiZXhlcmNpc2VcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRFeGVyY2lzZXNSb3V0ZSgpIHtcclxuICBjb25zdCB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2hvd0RlbGV0ZSwgc2V0U2hvd0RlbGV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgd29ya291dElkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG5cclxuICBjb25zdCByZW5kZXJFeGVyY2lzZUZvcm0gPSAoZXhlcmNpc2VfbmFtZSwgc2V0cykgPT4ge1xyXG4gICAgY29uc3QgZXhlcmNpc2VJZCA9IHNldHNbMF0uZXhlcmNpc2VfaWQ7XHJcbiAgICBjb25zdCBleGVyY2lzZVNldEZvcm0gPSB7XHJcbiAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgZXhlcmNpc2VfbmFtZTogZXhlcmNpc2VfbmFtZSxcclxuICAgICAgd29ya291dF9leGVyY2lzZV9pZDogc2V0c1swXS53b3Jrb3V0X2V4ZXJjaXNlX2lkLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRTZXRGb3JtID0gKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgaW5kZXgpID0+XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIHJlcGV0aXRpb25zOiByZXBldGl0aW9ucyxcclxuICAgICAgICAgIHdlaWdodDogd2VpZ2h0LFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVNldEZvcm0gPSAoaW5kZXgpID0+XHJcbiAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXRJZCxcclxuICAgICAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxyXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICApO1xyXG4gICAgY29uc3QgcHJldmlvdXNCZXN0U2V0ID0gYmVzdFNldEJ5RXhlcmNpc2VbZXhlcmNpc2VJZF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG1iLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNSBtYi0xXCI+e2V4ZXJjaXNlX25hbWV9IDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtwcmV2aW91c0Jlc3RTZXQgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aT4gUEI6PC9pPiB7cHJldmlvdXNCZXN0U2V0LndlaWdodH0geHtcIiBcIn1cclxuICAgICAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0LnJlcGV0aXRpb25zfSB8IHtwcmV2aW91c0Jlc3RTZXQubWF4X3ZvbHVtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtYi00IG10LTNcIiAvPlxyXG5cclxuICAgICAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZXRJbnB1dFxyXG4gICAgICAgICAgICAgIGtleT17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICBpbmRleD17c2V0LnNldF9pZH1cclxuICAgICAgICAgICAgICB3ZWlnaHQ9e3NldC53ZWlnaHR9XHJcbiAgICAgICAgICAgICAgY29tcGxldGVkPXtzZXQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgIHJlcGV0aXRpb25zPXtzZXQucmVwZXRpdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVsZXRlRnVuYz17KCkgPT4gZGVsZXRlU2V0Rm9ybShzZXQuc2V0X2lkKX1cclxuICAgICAgICAgICAgICBzdWJtaXRGdW5jPXtzdWJtaXRTZXRGb3JtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9ucyBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjg1JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KGV4ZXJjaXNlU2V0Rm9ybSwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZnVsbHdpZHRoIGlzLWJsYWNrIGlzLXNtYWxsIHRpbGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICsgU2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBzaG93RGVsZXRlPy5bZXhlcmNpc2VJZF0gPz8gZmFsc2UgPyBcImlzLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH0gZHJvcGRvd24gaXMtcmlnaHRgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCBtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudTZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dEZWxldGUoKGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW2V4ZXJjaXNlSWRdOiAhKGU/LltleGVyY2lzZUlkXSA/PyBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZU1lbnUgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcC0wIG0tMFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duLW1lbnU2XCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgcC0wIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHAtMiBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIGlzLWZ1bGx3aWR0aCBtLTAgcC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uZXhlcmNpc2VTZXRGb3JtLCB0eXBlOiBcImV4ZXJjaXNlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJERUxFVEVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2J1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5lbnRyaWVzKGV4ZXJjaXNlU2V0cykubWFwKChbZXhlcmNpc2VfbmFtZSwgc2V0c10sIGV4SW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17ZXhJbmRleH0+e3JlbmRlckV4ZXJjaXNlRm9ybShleGVyY2lzZV9uYW1lLCBzZXRzKX08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPExpbmsgdG89e2Avd29ya291dC8ke3dvcmtvdXRJZH0vYWRkRXhlcmNpc2VgfT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTUgYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBpcy1zbWFsbFwiPlxyXG4gICAgICAgICAgKyBFeGVyY2lzZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBDZ0Nsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XHJcbmltcG9ydCB7IFJpQ2hlY2tGaWxsLCBSaVNlcGFyYXRvciB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0SW5wdXQocHJvcHMpIHtcclxuICBjb25zdCBbd2VpZ2h0LCBzZXRXZWlnaHRdID0gdXNlU3RhdGUocHJvcHMud2VpZ2h0KTtcclxuICBjb25zdCBbcmVwZXRpdGlvbnMsIHNldFJlcGV0aXRpb25zXSA9IHVzZVN0YXRlKHByb3BzLnJlcGV0aXRpb25zKTtcclxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUocHJvcHMuY29tcGxldGVkKTtcclxuICBjb25zdCB1cGRhdGVEYiA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgcHJvcHMuc3VibWl0RnVuYyh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbWItMiBwLTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjF2aFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuY29tcGxldGVkID8gXCIjZWJmZmZjXCIgOiBcIiNmNWY1ZjVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiXHJcbiAgICAgICAgICB2YWx1ZT17d2VpZ2h0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXZWlnaHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcHNcIlxyXG4gICAgICAgICAgdmFsdWU9e3JlcGV0aXRpb25zfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBldGl0aW9ucyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlRGIod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBwcm9wcy5pbmRleCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxpZ2h0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUZ1bmN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENnQ2xvc2Ugc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbXBsZXRlZCgoY29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCAhY29tcGxldGUsIHByb3BzLmluZGV4KTtcclxuICAgICAgICAgICAgICByZXR1cm4gIWNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtc21hbGwgaXMtbGlnaHQgJHtcclxuICAgICAgICAgICAgcHJvcHMuY29tcGxldGVkID8gXCJpcy1wcmltYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmlDaGVja0ZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCBGb3JtLCB1c2VTdWJtaXQsIHVzZUxvYWRlckRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHBhZFN0YXJ0LCBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdvcmtvdXQgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9ucyB9IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb24uanNcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuY29uc3QgdXRjID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCB1c2VySWQgPSBmb3JtLmdldChcInVzZXJJZFwiKTtcclxuICBsZXQgbmFtZSA9IGZvcm0uZ2V0KFwibmFtZVwiKTtcclxuICBsZXQgZGF0ZXRpbWUgPSBmb3JtLmdldChcImRhdGV0aW1lXCIpO1xyXG4gIGxldCBsb2NhdGlvbiA9IGZvcm0uZ2V0KFwibG9jYXRpb25cIik7XHJcbiAgbG9jYXRpb24gPSBsb2NhdGlvbj8udG9Mb3dlckNhc2UoKT8ucmVwbGFjZSgvIC9nLCBcIl9cIikgPz8gbnVsbDtcclxuICBjb25zdCB3b3Jrb3V0T2JqZWN0SWQgPSBhd2FpdCBjcmVhdGVXb3Jrb3V0KHtcclxuICAgIG5hbWUsXHJcbiAgICBkYXRldGltZSxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgdXNlcklkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVkaXJlY3QoYC93b3Jrb3V0LyR7d29ya291dE9iamVjdElkfS9jdXJyZW50RXhlcmNpc2VzYCk7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGdldExvY2F0aW9ucyh1c2VyKTtcclxuICByZXR1cm4gbG9jYXRpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlV29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtoYXNMb2NhdGlvbiwgc2V0SGFzTG9jYXRpb25dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudERhdGVUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIHZhciBtb250aCA9IHBhZFN0YXJ0KGRhdGUuZ2V0TW9udGgoKSArIDEsIDIsIDApO1xyXG4gICAgdmFyIGRheSA9IHBhZFN0YXJ0KGRhdGUuZ2V0RGF0ZSgpLCAyLCAwKTtcclxuICAgIHZhciBociA9IHBhZFN0YXJ0KGRhdGUuZ2V0SG91cnMoKSwgMiwgMCk7XHJcbiAgICB2YXIgbWluID0gcGFkU3RhcnQoZGF0ZS5nZXRNaW51dGVzKCksIDIsIDApO1xyXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fVQke2hyfToke21pbn1gO1xyXG4gIH07XHJcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VyPXtzZXRVc2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTNcIj5OZXcgV29ya291dDwvaDQ+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgIHVzZXJJZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB1aWQpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkYXRldGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRldGltZVwiKTtcclxuICAgICAgICAgICAgICBkYXRldGltZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXlqcyhgJHtldmVudC50YXJnZXQuZGF0ZXRpbWVMb2NhbC52YWx1ZX06MDBgKS51dGMoKVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcImRkZGRcIil9IHdvcmtvdXRgXHJcbiAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0Lm5hbWVQbGFjZWhvbGRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQodXNlcklkKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKGRhdGV0aW1lKTtcclxuICAgICAgICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICBzdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hbWUvRGVzYzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RheWpzKGdldEN1cnJlbnREYXRlVGltZSgpKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImRkZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9IHdvcmtvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGV0aW1lTG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2V0Q3VycmVudERhdGVUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXRIYXNMb2NhdGlvbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXRIYXNMb2NhdGlvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHNlbGVjdCBgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9XCJsb2NhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImxvY2F0aW9uc1wiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17c3RhcnRDYXNlKGl0ZW0ubmFtZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYXJrIFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb2NhdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBOZXdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9ob21lXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gPD48Lz47XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmlBZGRCb3hGaWxsLCBSaUxpbmVDaGFydEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgR2lTdHJvbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcclxuaW1wb3J0IHsgTWRMb2NhdGlvbk9uIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVJvdXRlKCkge1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgc2V0VXNlcklkPXtzZXRVc2VySWR9IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02IGxldmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9iYW5uZXIucG5nXCIpfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0IGJvdW5jZSBjb250YWluZXIgaXMtaGlkZGVuLXRvdWNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1yaWdodCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInBhbmVsIGlzLWJsYWNrIG0tNSBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5IaSwge3VzZXIgJiYgdXNlci5kaXNwbGF5TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8YT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9jayBpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2NyZWF0ZT91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmlBZGRCb3hGaWxsIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaUxpbmVDaGFydEZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgQW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiIGhyZWY9e2Avd29ya291dHM/dXNlcj0ke3VzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHaVN0cm9uZyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBXb3Jrb3V0c1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2sgaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9sb2NhdGlvbnM/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1kTG9jYXRpb25PbiBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBMb2NhdGlvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlIGlzLTEgbWItMVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgV29ya291dCwgU21hcnRlci5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5QbGVhc2UgbG9nIGluIHRvIGNvbnRpbnVlLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzJmMzhjNjAyJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1TUkZMWEYzVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRFZLRFBHU0suanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVZBSkVZSFZaLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LN0haWVFYTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVBCM0ZFNjVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1lWQ0JMWTMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhbmFseXRpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzLVVUUk4zQ0lDLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cycsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwZXJzb25hbC1iZXN0cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMtNUlTWDU2QkEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVMTUhEM0pXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzJVSkNRMkEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkJzp7J2lkJzoncm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZCcsJ3BhcmVudElkJzoncm91dGVzL2FuYWx5dGljcycsJ3BhdGgnOidwcm9ncmVzc2l2ZS1vdmVybG9hZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQtWUQyU0FSWlIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUo2SUxYTjY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUxNSEQzSlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XMlVKQ1EyQS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvc2NoZWR1bGUnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3NjaGVkdWxlJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3NjaGVkdWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9zY2hlZHVsZS1WQ0o1RU1URy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NNQ0RQUE8uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KNklMWE42NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVcyVUpDUTJBLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzondHJhaW5lZC10aGlzLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrLVNFNlROR0ZELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LU01DRFBQTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUo2SUxYTjY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUxNSEQzSlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XMlVKQ1EyQS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzond29ya291dHMtcGVyLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrLTdVVFVCTk1PLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1KNklMWE42NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVMTUhEM0pXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzJVSkNRMkEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY3JlYXRlJzp7J2lkJzoncm91dGVzL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjcmVhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY3JlYXRlLVg0NTI2Mk1DLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1USUFURjdXTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBNlhITTI2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSjZJTFhONjUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1XMlVKQ1EyQS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hvbWUnOnsnaWQnOidyb3V0ZXMvaG9tZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidob21lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWUtSE8zVUlMWlkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBNlhITTI2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNldQTFJBQlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVJVRlRRTEFFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMtNEs0UEVYVEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVBNlhITTI2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzJVSkNRMkEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucy86bG9jYXRpb25JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWQtREM2Nlk2SjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVcyVUpDUTJBLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC0ySTVZVDdVWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUE2WEhNMjYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0JywncGF0aCc6Jzp3b3Jrb3V0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkLVBST0lVQjVHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1USUFURjdXTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUs3SFpZUVhMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEIzRkU2NUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PWVZDQkxZMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUo2SUxYTjY1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVzJVSkNRMkEuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50LVhSUUNSTlEyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZSc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZScsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50JywncGF0aCc6J2FkZEV4ZXJjaXNlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlLUhZVExBUUVHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XMlVKQ1EyQS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzJzp7J2lkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGF0aCc6J2N1cnJlbnRFeGVyY2lzZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXMtM1A3UUU2NFQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTZXUExSQUJRLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dHMnOnsnaWQnOidyb3V0ZXMvd29ya291dHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzond29ya291dHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvd29ya291dHMtS1M1NlNHQUYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRJQVRGN1dMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUE2WEhNMjYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KNklMWE42NS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVcyVUpDUTJBLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0yRjM4QzYwMi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8s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
