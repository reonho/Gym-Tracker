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
  }, "Workouts per Week"))), /* @__PURE__ */ React.createElement("ul", {
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
  const exerciseList = await getExercises();
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
  default: () => PersonalBestRoute,
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
function PersonalBestRoute() {
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
  default: () => PersonalBestRoute2,
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
function PersonalBestRoute2() {
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

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\locations.jsx
var locations_exports = {};
__export(locations_exports, {
  action: () => action3,
  default: () => ManageLocationsRoute,
  loader: () => loader7
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_lodash10 = require("lodash");
var import_react9 = require("react");

// app/components/UserAuthorisedComponent.js
init_react();
var import_remix9 = __toESM(require_remix());
var import_auth2 = require("firebase/auth");
var import_react8 = require("react");
function UserAuthorisedComponent(props) {
  const [user, setUser] = (0, import_react8.useState)();
  const navigate = (0, import_remix9.useNavigate)();
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
var loader7 = async ({ request }) => {
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
  const locations = (0, import_remix10.useLoaderData)();
  const [user, setUser] = (0, import_react9.useState)();
  const [searchParams] = (0, import_remix10.useSearchParams)();
  const submit = (0, import_remix10.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "Saved Locations"), locations.map((e) => /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: `./${e.id}/?user=${searchParams.get("user")}`,
    className: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6"
  }, (0, import_lodash10.startCase)(e.name))))), /* @__PURE__ */ React.createElement("div", {
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
  loader: () => loader8
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_bs = require("react-icons/bs");
var import_lodash11 = require("lodash");
var import_dayjs5 = __toESM(require("dayjs"));
var utc = require("dayjs/plugin/utc");
import_dayjs5.default.extend(utc);
var loader8 = async ({ request, params }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const workouts = await getWorkoutsForUser(user);
  return workouts;
};
function ViewWorkoutRoute() {
  const workouts = (0, import_remix11.useLoaderData)();
  const [searchParams] = (0, import_remix11.useSearchParams)();
  const userId = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    idPredicate: (id) => id === userId
  }, /* @__PURE__ */ React.createElement("div", {
    className: " m-5 container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title is-3 mb-3"
  }, "Workouts"), workouts.length === 0 && "No workouts yet", workouts.map((workout) => /* @__PURE__ */ React.createElement(import_remix11.Link, {
    key: "workout.id",
    className: "box",
    to: `/workout/${workout.id}/currentExercises`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "title mb-2 is-5"
  }, import_dayjs5.default.utc(workout.datetime_start).local().format("dddd, MMM D YY")), /* @__PURE__ */ React.createElement("div", {
    className: "title mb-2 is-6"
  }, import_dayjs5.default.utc(workout.datetime_start).local().format("h:mm A"), " - ", workout.name), (0, import_lodash11.startCase)(workout.location_name)), workout.datetime_end ? /* @__PURE__ */ React.createElement(import_bs.BsCheckCircleFill, {
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
var import_remix12 = __toESM(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UserAuthorisedComponent, null, /* @__PURE__ */ React.createElement(import_remix12.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action4,
  default: () => StartNewWorkoutRoute,
  loader: () => loader9
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_lodash12 = require("lodash");
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
var import_dayjs6 = __toESM(require("dayjs"));
var import_md2 = require("react-icons/md");
var utc2 = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");
import_dayjs6.default.extend(utc2);
import_dayjs6.default.extend(relativeTime);
var loader9 = async ({ params }) => {
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
    return (0, import_remix13.redirect)("/");
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
  })), /* @__PURE__ */ React.createElement("span", null, (0, import_lodash12.startCase)(workout == null ? void 0 : workout.location_name))), /* @__PURE__ */ React.createElement("div", {
    className: "icon-text m-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "gg-alarm"
  })), /* @__PURE__ */ React.createElement("span", {
    id: "start"
  }, `${import_dayjs6.default.utc(workout == null ? void 0 : workout.datetime_start).local().format("dddd, DD MMM YY, HH:mm")}
           `))));
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix13.useLoaderData)()[0];
  const fetcher = (0, import_remix13.useFetcher)();
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
  }, "Workout Completed. "), toTime(import_dayjs6.default.utc(workout.datetime_end) - import_dayjs6.default.utc(workout.datetime_start)))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title is-6 mb-0"
  }, "Time Elapsed:"), /* @__PURE__ */ React.createElement("div", {
    className: "is-family-secondary has-text-weight-medium",
    id: "time"
  }, /* @__PURE__ */ React.createElement(Stopwatch_default, {
    running: true,
    initialTime: (0, import_dayjs6.default)() - import_dayjs6.default.utc(workout.datetime_start)
  }))), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, !workout.datetime_end && /* @__PURE__ */ React.createElement("button", {
    className: "button is-light is-success",
    onClick: () => fetcher.submit({
      workout_id: workout.id,
      end: (0, import_dayjs6.default)().utc()
    }, { method: "POST" })
  }, "Finish"), /* @__PURE__ */ React.createElement("button", {
    className: " button is-light  mb-2",
    onClick: () => setShowMenu((e) => !e)
  }, /* @__PURE__ */ React.createElement(import_md2.MdOutlineMenu, null)), showMenu && /* @__PURE__ */ React.createElement("div", {
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
    className: "button is-light is-danger  is-fullwidth",
    onClick: () => fetcher.submit({
      workout_id: workout.id
    }, { method: "DELETE" })
  }, "Delete Workout")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setShowChangeTime((e) => !e),
    className: "button is-light is-fullwidth"
  }, "Set Finish Time")), showChangeTime && /* @__PURE__ */ React.createElement("div", {
    className: "level is-mobile"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input",
    type: "datetime-local",
    onSelect: (e) => {
      if ((0, import_dayjs6.default)(e.target.value) > import_dayjs6.default.utc(workout.datetime_start)) {
        setCustomDate(e.target.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("button", {
    disabled: !customDate,
    className: "button is-light is-success m-0 ml-1",
    onClick: () => {
      fetcher.submit({
        workout_id: workout.id,
        end: (0, import_dayjs6.default)(customDate).utc()
      }, { method: "POST" });
      setShowMenu(false);
    }
  }, "Finish"))))), /* @__PURE__ */ React.createElement(import_remix13.Outlet, null))));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader10
});
init_react();
var import_lodash13 = require("lodash");
var import_remix14 = __toESM(require_remix());
var loader10 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix14.useSearchParams)();
  const muscle_groups = (0, import_remix14.useLoaderData)();
  const navigate = (0, import_remix14.useNavigate)();
  const { workoutId } = (0, import_remix14.useParams)();
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
  }, (0, import_lodash13.startCase)(muscle.name)))), /* @__PURE__ */ React.createElement(import_remix14.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action5,
  default: () => AddExerciseRoute,
  loader: () => loader11
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_lodash14 = require("lodash");
var import_react12 = require("react");
var loader11 = async ({ request }) => {
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
  return (0, import_remix15.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix15.useParams)();
  const [selected, setSelected] = (0, import_react12.useState)();
  const exercises = (0, import_remix15.useLoaderData)();
  const fetcher = (0, import_remix15.useFetcher)();
  const exNameToIdMap = (0, import_lodash14.mapValues)((0, import_lodash14.groupBy)(exercises, (exercise) => `${(0, import_lodash14.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash14.startCase)(exercise.variant)})` : ""}`), (e) => e[0].id);
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
    value: `${(0, import_lodash14.startCase)(exercise.name)} ${(exercise == null ? void 0 : exercise.variant) ? `(${(0, import_lodash14.startCase)(exercise.variant)})` : ""}`
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
  }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
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
  loader: () => loader12
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_lodash15 = __toESM(require("lodash"));
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
    disabled: !(props.weight && props.repetitions),
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
var loader12 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId = (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null ? void 0 : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash15.default)(sets).groupBy((s) => s.exercise_id).mapValues((e) => (0, import_lodash15.maxBy)(e, (s) => s.weight)).value();
  }
  const exerciseSets = (0, import_lodash15.groupBy)(setsForWorkout, (set) => `${(0, import_lodash15.startCase)(set.exercise_name)} ${set.variant ? `(${(0, import_lodash15.startCase)(set.variant)})` : ""}`);
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
  const { exerciseSets, bestSetByExercise } = (0, import_remix16.useLoaderData)();
  const { workoutId } = (0, import_remix16.useParams)();
  const fetcher = (0, import_remix16.useFetcher)();
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
    }, "+ Set")), /* @__PURE__ */ React.createElement("button", {
      onClick: () => fetcher.submit(__spreadProps(__spreadValues({}, exerciseSetForm), { type: "exercise" }), { method: "DELETE" }),
      className: "button is-light is-danger is-small ml-1"
    }, "Delete"))));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Object.entries(exerciseSets).map(([exercise_name, sets], exIndex) => /* @__PURE__ */ React.createElement("div", {
    key: exIndex
  }, renderExerciseForm(exercise_name, sets))), /* @__PURE__ */ React.createElement(import_remix16.Outlet, null), /* @__PURE__ */ React.createElement(import_remix16.Link, {
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
  loader: () => loader13
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_lodash16 = require("lodash");
var import_react14 = require("react");
var import_dayjs7 = __toESM(require("dayjs"));
var utc3 = require("dayjs/plugin/utc");
import_dayjs7.default.extend(utc3);
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
  return (0, import_remix17.redirect)(`/workout/${workoutObjectId}/currentExercises`);
};
var loader13 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const locations = await getLocations(user);
  return locations;
};
function CreateWorkoutRoute() {
  const locations = (0, import_remix17.useLoaderData)();
  const [user, setUser] = (0, import_react14.useState)();
  const [hasLocation, setHasLocation] = (0, import_react14.useState)();
  const getCurrentDateTime = () => {
    const date = new Date();
    var year = date.getFullYear();
    var month = (0, import_lodash16.padStart)(date.getMonth() + 1, 2, 0);
    var day = (0, import_lodash16.padStart)(date.getDate(), 2, 0);
    var hr = (0, import_lodash16.padStart)(date.getHours(), 2, 0);
    var min = (0, import_lodash16.padStart)(date.getMinutes(), 2, 0);
    return `${year}-${month}-${day}T${hr}:${min}`;
  };
  const submit = (0, import_remix17.useSubmit)();
  return /* @__PURE__ */ React.createElement(UserAuthorisedComponent, {
    setUser
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title is-3"
  }, "New Workout"), /* @__PURE__ */ React.createElement(import_remix17.Form, {
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
      datetime.setAttribute("value", (0, import_dayjs7.default)(`${event.target.datetimeLocal.value}:00`).utc());
      const name = document.createElement("input");
      name.setAttribute("type", "hidden");
      name.setAttribute("name", "name");
      name.setAttribute("value", event.target.namePlaceholder.value === "" ? `${(0, import_dayjs7.default)(getCurrentDateTime()).format("dddd")} workout` : event.target.namePlaceholder.value);
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
    placeholder: `${(0, import_dayjs7.default)(getCurrentDateTime()).format("dddd")} workout`
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
    value: (0, import_lodash16.startCase)(item.name)
  })))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("button", {
    className: "button is-dark ",
    type: "submit",
    disabled: !hasLocation
  }, "Create New"))), /* @__PURE__ */ React.createElement(import_remix17.Outlet, null)));
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\Gym-Tracker\gainsbro\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader14
});
init_react();
var import_remix18 = __toESM(require_remix());
var loader14 = async () => {
  return (0, import_remix18.redirect)("/home");
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
var import_react15 = require("react");
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
  const [userId, setUserId] = (0, import_react15.useState)();
  const [user, setUser] = (0, import_react15.useState)();
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
var assets_manifest_default = { "version": "74e25d07", "entry": { "module": "/build/entry.client-DFMW2537.js", "imports": ["/build/_shared/chunk-HNEAWUC3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6VYQTWZI.js", "imports": ["/build/_shared/chunk-AA5UNAWZ.js", "/build/_shared/chunk-WWHHKPSU.js", "/build/_shared/chunk-GLSJ223L.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics": { "id": "routes/analytics", "parentId": "root", "path": "analytics", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics-IOJ6D2CL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/personal-bests": { "id": "routes/analytics/personal-bests", "parentId": "routes/analytics", "path": "personal-bests", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/personal-bests-W4PEUYJK.js", "imports": ["/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/progressive-overload": { "id": "routes/analytics/progressive-overload", "parentId": "routes/analytics", "path": "progressive-overload", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/progressive-overload-TWXEHRQG.js", "imports": ["/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/trained-this-week": { "id": "routes/analytics/trained-this-week", "parentId": "routes/analytics", "path": "trained-this-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/trained-this-week-35MHJQ5C.js", "imports": ["/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/analytics/workouts-per-week": { "id": "routes/analytics/workouts-per-week", "parentId": "routes/analytics", "path": "workouts-per-week", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/analytics/workouts-per-week-2MPINGY3.js", "imports": ["/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-JDSY5M6D.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/create": { "id": "routes/create", "parentId": "root", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/create-MP7XJSHW.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-QKIIQLHL.js", "imports": ["/build/_shared/chunk-USFFHJBN.js", "/build/_shared/chunk-VSSDBM6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-W47DPTJB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations-WA5XHOOA.js", "imports": ["/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations.$locationId": { "id": "routes/locations.$locationId", "parentId": "root", "path": "locations/:locationId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/locations.$locationId-KRTTE675.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout": { "id": "routes/workout", "parentId": "root", "path": "workout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout-D52PYG5G.js", "imports": ["/build/_shared/chunk-VSSDBM6R.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId": { "id": "routes/workout/$workoutId", "parentId": "routes/workout", "path": ":workoutId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId-XORZWTXA.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-AA5UNAWZ.js", "/build/_shared/chunk-WWHHKPSU.js", "/build/_shared/chunk-GLSJ223L.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent": { "id": "routes/workout/$workoutId/__addExerciseParent", "parentId": "routes/workout/$workoutId", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent-QC3AH35X.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/__addExerciseParent/addExercise": { "id": "routes/workout/$workoutId/__addExerciseParent/addExercise", "parentId": "routes/workout/$workoutId/__addExerciseParent", "path": "addExercise", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-LG5DYCOZ.js", "imports": ["/build/_shared/chunk-TXTTDZMG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workout/$workoutId/currentExercises": { "id": "routes/workout/$workoutId/currentExercises", "parentId": "routes/workout/$workoutId", "path": "currentExercises", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workout/$workoutId/currentExercises-VXY7OYMR.js", "imports": ["/build/_shared/chunk-USFFHJBN.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/workouts": { "id": "routes/workouts", "parentId": "root", "path": "workouts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/workouts-HJRKLCY6.js", "imports": ["/build/_shared/chunk-O4HOE6Z4.js", "/build/_shared/chunk-VSSDBM6R.js", "/build/_shared/chunk-MSNYDQZQ.js", "/build/_shared/chunk-TXTTDZMG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-74E25D07.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvb3QuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanMiLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxsb2NhdGlvbnMuJGxvY2F0aW9uSWQuanN4IiwgIi4uL2FwcC9zZXJ2aWNlL2xvY2F0aW9uLmpzIiwgIi4uL2FwcC9zdXBhYmFzZS5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGFuYWx5dGljcy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxhbmFseXRpY3NcXHByb2dyZXNzaXZlLW92ZXJsb2FkLmpzeCIsICIuLi9hcHAvc2VydmljZS9leGVyY2lzZXMuanMiLCAiLi4vYXBwL3NlcnZpY2Uvc2V0cy5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc2l2ZU92ZXJsb2FkLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvV2Vla2x5VHJhaW5pbmdTZXRzLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3giLCAiLi4vYXBwL3NlcnZpY2Uvd29ya291dHMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvV29ya291dHNQZXJXZWVrLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcYW5hbHl0aWNzXFxwZXJzb25hbC1iZXN0cy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGVyc29uYWxCZXN0LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcbG9jYXRpb25zLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXRzLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXHdvcmtvdXQuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3RvcHdhdGNoLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xccmVvbmhcXERvY3VtZW50c1xcR2l0aHViXFxHeW0gVHJhY2tlclxcR3ltLVRyYWNrZXJcXGdhaW5zYnJvXFxhcHBcXHJvdXRlc1xcd29ya291dFxcJHdvcmtvdXRJZFxcX19hZGRFeGVyY2lzZVBhcmVudC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxfX2FkZEV4ZXJjaXNlUGFyZW50XFxhZGRFeGVyY2lzZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFx3b3Jrb3V0XFwkd29ya291dElkXFxjdXJyZW50RXhlcmNpc2VzLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TZXRJbnB1dC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHJlb25oXFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltIFRyYWNrZXJcXEd5bS1UcmFja2VyXFxnYWluc2Jyb1xcYXBwXFxyb3V0ZXNcXGNyZWF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyZW9uaFxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bSBUcmFja2VyXFxHeW0tVHJhY2tlclxcZ2FpbnNicm9cXGFwcFxccm91dGVzXFxob21lLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXGVudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy4kbG9jYXRpb25JZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljcy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwcm9ncmVzc2l2ZS1vdmVybG9hZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx0cmFpbmVkLXRoaXMtd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFx3b3Jrb3V0cy1wZXItd2Vlay5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGFuYWx5dGljc1xcXFxwZXJzb25hbC1iZXN0cy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGxvY2F0aW9ucy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXHdvcmtvdXRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlb25oXFxcXERvY3VtZW50c1xcXFxHaXRodWJcXFxcR3ltIFRyYWNrZXJcXFxcR3ltLVRyYWNrZXJcXFxcZ2FpbnNicm9cXFxcYXBwXFxcXHJvdXRlc1xcXFx3b3Jrb3V0XFxcXCR3b3Jrb3V0SWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXF9fYWRkRXhlcmNpc2VQYXJlbnQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXF9fYWRkRXhlcmNpc2VQYXJlbnRcXFxcYWRkRXhlcmNpc2UuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcd29ya291dFxcXFwkd29ya291dElkXFxcXGN1cnJlbnRFeGVyY2lzZXMuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyZW9uaFxcXFxEb2N1bWVudHNcXFxcR2l0aHViXFxcXEd5bSBUcmFja2VyXFxcXEd5bS1UcmFja2VyXFxcXGdhaW5zYnJvXFxcXGFwcFxcXFxyb3V0ZXNcXFxcY3JlYXRlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmVvbmhcXFxcRG9jdW1lbnRzXFxcXEdpdGh1YlxcXFxHeW0gVHJhY2tlclxcXFxHeW0tVHJhY2tlclxcXFxnYWluc2Jyb1xcXFxhcHBcXFxccm91dGVzXFxcXGhvbWUuanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnMuJGxvY2F0aW9uSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnMvOmxvY2F0aW9uSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFuYWx5dGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vla1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYW5hbHl0aWNzXCIsXG4gICAgICBwYXRoOiBcInRyYWluZWQtdGhpcy13ZWVrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWtcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2FuYWx5dGljc1wiLFxuICAgICAgcGF0aDogXCJ3b3Jrb3V0cy1wZXItd2Vla1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hbmFseXRpY3NcIixcbiAgICAgIHBhdGg6IFwicGVyc29uYWwtYmVzdHNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9uc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy93b3Jrb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIndvcmtvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dFwiLFxuICAgICAgcGF0aDogXCI6d29ya291dElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9fX2FkZEV4ZXJjaXNlUGFyZW50L2FkZEV4ZXJjaXNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnRcIixcbiAgICAgIHBhdGg6IFwiYWRkRXhlcmNpc2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvd29ya291dC8kd29ya291dElkL2N1cnJlbnRFeGVyY2lzZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWRcIixcbiAgICAgIHBhdGg6IFwiY3VycmVudEV4ZXJjaXNlc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL2NyZWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY3JlYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNyZWF0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTVcbiAgICB9LFxuICBcInJvdXRlcy9ob21lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob21lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKFwiZG90ZW52XCIpO1xuZG90ZW52LmNvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcclxuICBMaW5rLFxyXG4gIExpbmtzLFxyXG4gIExpdmVSZWxvYWQsXHJcbiAgTWV0YSxcclxuICBPdXRsZXQsXHJcbiAgU2NyaXB0cyxcclxuICBTY3JvbGxSZXN0b3JhdGlvbixcclxuICB1c2VMb2FkZXJEYXRhLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VMb2dpbiBmcm9tIFwifi9jb21wb25lbnRzL0ZpcmViYXNlTG9naW4uanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiR2FpbnNCcm9cIiB9O1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZmlyZWJhc2VDb25maWc6IHtcclxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxyXG4gICAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0RPTUFJTixcclxuICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxyXG4gICAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5TVE9SQUdFX0JVQ0tFVCxcclxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk1TR19TRU5ERVJfSUQsXHJcbiAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5BUFBfSUQsXHJcbiAgICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk1FQVNVUkVNRU5UX0lELFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1ibGFja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGlzLXNpemUtNSBcIiB0bz1cIi9ob21lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LXdoaXRlIGhhcy10ZXh0LXdlaWdodC1ib2xkXCI+R0FJTlM8L2Rpdj5cclxuICAgICAgICAgIEJST1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZGF0YS5maXJlYmFzZUNvbmZpZyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiYmxhY2tcIj48L21ldGE+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuXHJcbiAgICAgICAgey8qIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2Nzcy5nZy9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kYXRlcGlja2VyLzIuMTQuMS9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3JlcXVpcmUoXCIuLi9hc3NldHMvbG9nby5wbmdcIil9PjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzc1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8TmF2QmFyPlxyXG4gICAgICAgICAgPEZpcmViYXNlTG9naW4gYXBwPXthcHB9IC8+XHJcbiAgICAgICAgPC9OYXZCYXI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG5cclxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbkluV2l0aFJlZGlyZWN0LFxyXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWRFeHBhbmRNb3JlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlYmFzZUxvZ2luKHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZHJvcGRvd25BY3RpdmUsIHNldERyb3Bkb3duQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChwcm9wcy5hcHApO1xyXG5cclxuICBmdW5jdGlvbiBnb29nbGVMb2dpbigpIHtcclxuICAgIHNpZ25JbldpdGhSZWRpcmVjdChhdXRoLCBwcm92aWRlcik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gIH1cclxuXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChyZXN1bHQpID0+IHtcclxuICAgIHJlc3VsdCA/IHNldFVzZXIocmVzdWx0KSA6IHNldFVzZXIobnVsbCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29vZ2xlTG9naW59IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1ibGFja1wiPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRyb3Bkb3duICR7ZHJvcGRvd25BY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWJsYWNrIGlzLWZ1bGx3aWR0aCBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXREcm9wZG93bkFjdGl2ZSgoYWN0aXZlU3RhdGUpID0+ICFhY3RpdmVTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPE1kRXhwYW5kTW9yZSBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VQYXJhbXMsIHVzZUxvYWRlckRhdGEsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSwgbWFwVmFsdWVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFdvcmtvdXRzUGVyTG9jYXRpb24sXHJcbiAgZGVsZXRlTG9jYXRpb24sXHJcbiAgcmVuYW1lTG9jYXRpb24sXHJcbn0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgdXNlciA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXNlclwiKTtcclxuICBjb25zdCB3b3Jrb3V0c0F0TG9jYXRpb24gPSBhd2FpdCBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpO1xyXG5cclxuICBjb25zdCBnZXROYW1lRnJvbUlkID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5uYW1lXHJcbiAgKTtcclxuICBjb25zdCB3b3Jrb3V0c1BlckxvY2F0aW9uID0gbWFwVmFsdWVzKFxyXG4gICAgZ3JvdXBCeSh3b3Jrb3V0c0F0TG9jYXRpb24sIChlKSA9PiBlLmlkKSxcclxuICAgIChlKSA9PiBlWzBdPy5jb3VudCA/PyAwXHJcbiAgKTtcclxuICByZXR1cm4gW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgY29uc3QgbG9jYXRpb25JZCA9IGZvcm0uZ2V0KFwibG9jYXRpb25JZFwiKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpO1xyXG5cclxuICAgIGF3YWl0IHJlbmFtZUxvY2F0aW9uKFxyXG4gICAgICBsb2NhdGlvbklkLFxyXG4gICAgICBsb2NhdGlvbk5hbWUucmVwbGFjZSgvIC9nLCBcIl9cIikudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAvLyBERUxFVEVcclxuICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBkZWxldGVMb2NhdGlvbihmb3JtLmdldChcImxvY2F0aW9uSWRcIikpO1xyXG4gICAgaWYgKGRlbGV0ZWQgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGRlbGV0ZWQ/LlswXT8udXNlcl9pZDtcclxuICAgICAgcmV0dXJuIHJlZGlyZWN0KHVzZXIgPyBgL2xvY2F0aW9ucz91c2VyPSR7dXNlcn1gIDogXCIvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gXCJTdWNjZXNzXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvblJvdXRlKCkge1xyXG4gIGNvbnN0IHsgbG9jYXRpb25JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3dvcmtvdXRzUGVyTG9jYXRpb24sIGdldE5hbWVGcm9tSWRdID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XHJcbiAgY29uc3QgW3Nob3dJbnB1dCwgc2V0U2hvd0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuYW1lSW5wdXQsIHNldFJlbmFtZUlucHV0XSA9IHVzZVN0YXRlKFxyXG4gICAgc3RhcnRDYXNlKGdldE5hbWVGcm9tSWRbXCJcIiArIGxvY2F0aW9uSWRdID8/IG51bGwpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIGNvbnRhaW5lciBib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPlxyXG4gICAgICAgICAge3N0YXJ0Q2FzZShnZXROYW1lRnJvbUlkW1wiXCIgKyBsb2NhdGlvbklkXSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGk+e2dldE5hbWVGcm9tSWRbbG9jYXRpb25JZF19PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgTnVtYmVyIG9mIHdvcmtvdXRzOiB7d29ya291dHNQZXJMb2NhdGlvbltcIlwiICsgbG9jYXRpb25JZF0gPz8gMH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMlwiIC8+XHJcbiAgICAgICAge3Nob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlbmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVuYW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saWdodCBpcy1pbmZvIG1sLTFcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICB7IGxvY2F0aW9uSWQ6IGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZTogcmVuYW1lSW5wdXQgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUFVUXCIgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNldFNob3dJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGxldmVsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0lucHV0KChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZW5hbWVcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7IXdvcmtvdXRzUGVyTG9jYXRpb25bXCJcIiArIGxvY2F0aW9uSWRdICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIuc3VibWl0KFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbG9jYXRpb25JZDogbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2UuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbnModXNlcikge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c1BlckxvY2F0aW9uKHVzZXIpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c19wZXJfbG9jYXRpb25cIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUxvY2F0aW9uKGxvY2F0aW9uSWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsb2NhdGlvblwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUxvY2F0aW9uKGxvY2F0aW9uSWQsIGxvY2F0aW9uTmFtZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAudXBkYXRlKHsgbmFtZTogbG9jYXRpb25OYW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogbG9jYXRpb25JZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZExvY2F0aW9uKGxvY2F0aW9uTmFtZSwgdXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgIC5pbnNlcnQoeyBuYW1lOiBsb2NhdGlvbk5hbWUsIHVzZXJfaWQ6IHVzZXJJZCB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxubGV0IHN1cGFiYXNlO1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1VQQUJBU0VfQU5PTl9LRVk7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5zdXBhYmFzZSkge1xyXG4gICAgZ2xvYmFsLnN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG4gIH1cclxuICBzdXBhYmFzZSA9IGdsb2JhbC5zdXBhYmFzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZVNlYXJjaFBhcmFtcywgdXNlTG9jYXRpb24sIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzUm91dGUoKSB7XHJcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgdXNlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbS01XCI+QW5hbHl0aWNzPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPkVmZm9ydCBTdGF0czwvcD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVHJhaW5lZCB0aGlzIHdlZWtcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlaz91c2VyPSR7dXNlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFdvcmtvdXRzIHBlciBXZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj48L3VsPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlN0cmVuZ3RoIFN0YXRzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQ/dXNlcj0ke3VzZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc2l2ZSBPdmVybG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzP3VzZXI9JHt1c2VyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWwgQmVzdHNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuICAgICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9hbmFseXRpY3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRFeGVyY2lzZXNGb3JVc2VyIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VTdWJtaXQsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgbG9kYXNoLCB7IHN0YXJ0Q2FzZSwgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFByb2dyZXNzaXZlT3ZlcmxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVPdmVybG9hZFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgZXhlcmNpc2VzID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VyKTtcclxuXHJcbiAgbGV0IGV4ZXJjaXNlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJleGVyY2lzZV9pZFwiKSA/PyBleGVyY2lzZXNbMF0/LmlkO1xyXG4gIGNvbnN0IHNldHMgPSBhd2FpdCBnZXRCZXN0U2V0UGVyV29ya291dEV4ZXJjaXNlKHVzZXIsIGV4ZXJjaXNlKTtcclxuXHJcbiAgY29uc3Qgc2V0c0J5RXhlcmNpc2UgPSBncm91cEJ5KHNldHMsIChzKSA9PiBzLmV4ZXJjaXNlX2lkKVtleGVyY2lzZV07XHJcbiAgcmV0dXJuIHsgc2V0c0J5RXhlcmNpc2UsIGV4ZXJjaXNlcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NSb3V0ZSgpIHtcclxuICBjb25zdCB7IHNldHNCeUV4ZXJjaXNlLCBleGVyY2lzZXMgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHNpbmdsZUV4ZXJjaXNlQ2hhcnQgPSBzZXRzQnlFeGVyY2lzZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy00IG1iLTJcIj5Qcm9ncmVzc2l2ZSBPdmVybG9hZDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJtdC0yIG1iLTNcIiAvPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0IG1iLTQgaXMtc21hbGxcIj5cclxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImV4ZXJjaXNlX2lkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlX2lkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKFwidXNlclwiKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtleGVyY2lzZXMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtlLmlkfSB2YWx1ZT17ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3N0YXJ0Q2FzZShlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZS52YXJpYW50KX0pYCA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtzaW5nbGVFeGVyY2lzZUNoYXJ0ID8gKFxyXG4gICAgICAgICAgPFByb2dyZXNzaXZlT3ZlcmxvYWQgcHJvZ3Jlc3NpdmVPdmVybG9hZD17c2luZ2xlRXhlcmNpc2VDaGFydH0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0XCJcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBzdXBhYmFzZSBmcm9tIFwifi9zdXBhYmFzZS5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlcyhtdXNjbGVfZ3JvdXApIHtcclxuICBpZiAobXVzY2xlX2dyb3VwKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcImV4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcIm11c2NsZV9ncm91cFwiLCBtdXNjbGVfZ3JvdXApO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJleGVyY2lzZVwiKS5zZWxlY3QoXCIqXCIpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TXVzY2xlR3JvdXBzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImRpc3RpbmN0X211c2NsZV9ncm91cHNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAub3JkZXIoXCJuYW1lXCIpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VzRm9yVXNlcih1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJleGVyY2lzZXNfZm9yX3VzZXJcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5U3RhdHNGb3JFeGVyY2lzZSh1c2VySWQpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJsYXN0X3dvcmtvdXRfd2l0aF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCAiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgc3VwYWJhc2UgZnJvbSBcIn4vc3VwYWJhc2VcIjtcclxudmFyIHdlZWtPZlllYXIgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3dlZWtPZlllYXJcIik7XHJcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXQoZm9ybVNldCkge1xyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybVNldC5nZXQoXCJpbmRleFwiKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFNldChmb3JtU2V0KSB7XHJcbiAgY29uc3QgYWRkID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInNldFwiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICB3b3Jrb3V0X2V4ZXJjaXNlOiBmb3JtU2V0LmdldChcIndvcmtvdXRfZXhlcmNpc2VfaWRcIiksXHJcbiAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgcmVwZXRpdGlvbnM6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gYWRkPy5kYXRhPy5bMF07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNldChmb3JtU2V0KSB7XHJcbiAgbGV0IHN1Ym1pc3Npb25TZXQgPSB7XHJcbiAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICByZXBldGl0aW9uczogbnVsbCxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2VpZ2h0Rm9yU2V0ID0gZm9ybVNldC5nZXQoXCJ3ZWlnaHRcIik7XHJcbiAgY29uc3QgcmVwc0ZvclNldCA9IGZvcm1TZXQuZ2V0KFwicmVwZXRpdGlvbnNcIik7XHJcbiAgY29uc3QgY29tcGxldGVkRm9yU2V0ID0gZm9ybVNldC5nZXQoXCJjb21wbGV0ZWRcIik7XHJcblxyXG4gIGlmICh3ZWlnaHRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQud2VpZ2h0ID0gcGFyc2VGbG9hdCh3ZWlnaHRGb3JTZXQpO1xyXG4gIH1cclxuICBpZiAocmVwc0ZvclNldCAhPT0gbnVsbCkge1xyXG4gICAgc3VibWlzc2lvblNldC5yZXBldGl0aW9ucyA9IHBhcnNlRmxvYXQocmVwc0ZvclNldCk7XHJcbiAgfVxyXG4gIGlmIChjb21wbGV0ZWRGb3JTZXQgIT09IG51bGwpIHtcclxuICAgIHN1Ym1pc3Npb25TZXQuY29tcGxldGVkID0gY29tcGxldGVkRm9yU2V0ID09PSBcInRydWVcIjtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRcIilcclxuICAgIC51cGRhdGUoc3VibWlzc2lvblNldClcclxuICAgIC5tYXRjaCh7IGlkOiBmb3JtU2V0LmdldChcImluZGV4XCIpIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbi8vZGVmYXVsdCBmaWx0ZXJzIGZvciBsYXRlc3Qgd2Vla1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0c0ZvclVzZXIodXNlcklkLCBmaWx0ZXJfc3RhcnQsIGZpbHRlcl9lbmQpIHtcclxuICBjb25zdCBmaWx0ZXJfZGF0ZV9zdGFydCA9IGZpbHRlcl9zdGFydFxyXG4gICAgPyBkYXlqcyhmaWx0ZXJfc3RhcnQpXHJcbiAgICA6IGRheWpzKGRheWpzKCkud2VlayhkYXlqcygpLndlZWsoKSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSk7XHJcbiAgY29uc3QgZmlsdGVyX2RhdGVfZW5kID0gZmlsdGVyX2VuZCA/IGRheWpzKGZpbHRlcl9lbmQpIDogZGF5anMoKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgIC5ndGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9zdGFydClcclxuICAgIC5sdGUoXCJkYXRldGltZV9zdGFydFwiLCBmaWx0ZXJfZGF0ZV9lbmQpO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcklkLCBleGVyY2lzZUlkKSB7XHJcbiAgaWYgKGV4ZXJjaXNlSWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibWF4X3ZvbHVtZV9mb3Jfd29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXJJZClcclxuICAgICAgLmVxKFwiZXhlcmNpc2VfaWRcIiwgZXhlcmNpc2VJZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJtYXhfdm9sdW1lX2Zvcl93b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgIC5lcShcInVzZXJfaWRcIiwgdXNlcklkKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJjaGFydC5qc1wiO1xyXG5DaGFydC5yZWdpc3RlcihbVG9vbHRpcF0pO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlT3ZlcmxvYWQocHJvcHMpIHtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhlcmNpc2VQcm9ncmVzcyA9IHNvcnRCeShcclxuICAgIHByb3BzLnByb2dyZXNzaXZlT3ZlcmxvYWQsXHJcbiAgICAoZSkgPT4gZS5kYXRldGltZV9zdGFydFxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb2xvciA9IGByZ2JhKDE1NSwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4yKWA7XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCIpKTtcclxuICAgIGxldCBjaGFydFN0YXR1cyA9IENoYXJ0LmdldENoYXJ0KFwicHJvZ3Jlc3NpdmVPdmVybG9hZFwiKTsgLy8gPGNhbnZhcz4gaWRcclxuICAgIGlmIChjaGFydFN0YXR1cyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hhcnRTdGF0dXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4ZXJjaXNlUHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc2l2ZU92ZXJsb2FkQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBleGVyY2lzZVByb2dyZXNzLm1hcCgoZSkgPT5cclxuICAgICAgICAgIGRheWpzKGUuZGF0ZXRpbWVfc3RhcnQpLmZvcm1hdChcIkREL01NL1lZXCIpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJWb2x1bWUgUHJvZ3Jlc3MgKFdlaWdodCB4IFJlcHMpXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4ZXJjaXNlUHJvZ3Jlc3MubWFwKChlKSA9PiBlLm1heF92b2x1bWUpLFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFZvbHVtZTogJHtleGVyY2lzZVByb2dyZXNzW2RhdGFJbmRleF0ubWF4X3ZvbHVtZX0gfCBXZWlnaHQ6ICR7ZXhlcmNpc2VQcm9ncmVzc1tkYXRhSW5kZXhdLndlaWdodH0gfCBSZXBzOiAke2V4ZXJjaXNlUHJvZ3Jlc3NbZGF0YUluZGV4XS5yZXBldGl0aW9uc31gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5rZXlzKGV4ZXJjaXNlUHJvZ3Jlc3MpLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxjYW52YXMgaWQ9XCJwcm9ncmVzc2l2ZU92ZXJsb2FkXCI+PC9jYW52YXM+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBnZXRTZXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0cy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRFeGVyY2lzZXMgfSBmcm9tIFwifi9zZXJ2aWNlL2V4ZXJjaXNlc1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhLCBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IGxvZGFzaCBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBXZWVrbHlUcmFpbmluZ1NldHMgZnJvbSBcIn4vY29tcG9uZW50cy9XZWVrbHlUcmFpbmluZ1NldHNcIjtcclxuXHJcbnZhciB3ZWVrT2ZZZWFyID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi93ZWVrT2ZZZWFyXCIpO1xyXG5kYXlqcy5leHRlbmQod2Vla09mWWVhcik7XHJcblxyXG5jb25zdCB3ZWVrU3RhcnRpbmdPbkRheSA9IGRheWpzKClcclxuICAud2VlayhkYXlqcygpLndlZWsoKSlcclxuICAuc3RhcnRPZihcIndlZWtcIilcclxuICAuc3RhcnRPZihcImRheVwiKTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7fTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IHVzZXJXb3Jrb3V0cyA9IGF3YWl0IGdldFNldHNGb3JVc2VyKHVzZXIsIHdlZWtTdGFydGluZ09uRGF5KTtcclxuICBjb25zdCBleGVyY2lzZUxpc3QgPSBhd2FpdCBnZXRFeGVyY2lzZXMoKTtcclxuXHJcbiAgcmV0dXJuIGxvZGFzaCh1c2VyV29ya291dHMpXHJcbiAgICAuZ3JvdXBCeSgoc2V0KSA9PiBzZXQubXVzY2xlX2dyb3VwKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gZS5sZW5ndGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzUm91dGUoKSB7XHJcbiAgY29uc3Qgd2Vla2x5U2V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVHJhaW5lZFRoaXNXZWVrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPlRyYWluZWQgdGhpcyBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxiPnt3ZWVrU3RhcnRpbmdPbkRheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfTwvYj4gLXtcIiBcIn1cclxuICAgICAgICAgIDxiPlxyXG4gICAgICAgICAgICB7d2Vla1N0YXJ0aW5nT25EYXlcclxuICAgICAgICAgICAgICAuYWRkKDEsIFwid2Vla1wiKVxyXG4gICAgICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcImRheVwiKVxyXG4gICAgICAgICAgICAgIC5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpfVxyXG4gICAgICAgICAgPC9iPntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgIFdlZWsge2RheWpzKCkud2VlaygpfSBvZiB7d2Vla1N0YXJ0aW5nT25EYXkuZm9ybWF0KFwiWVlZWVwiKX1cclxuICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8V2Vla2x5VHJhaW5pbmdTZXRzIHdlZWtseVNldHM9e3dlZWtseVNldHN9IC8+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHdlZWtseVNldHMpLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgXCJOb3RoaW5nIHRyYWluZWQgeWV0IHRoaXMgd2Vla1wifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDw+e3JlbmRlclRyYWluZWRUaGlzV2VlaygpfTwvPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2Vla2x5VHJhaW5pbmdTZXRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHNldHMgPSBwcm9wcy53ZWVrbHlTZXRzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3ZWVrbHlTZXRzXCIpOyAvLyA8Y2FudmFzPiBpZFxyXG4gICAgaWYgKGNoYXJ0U3RhdHVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBjaGFydFN0YXR1cy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEN0eChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWtseVNldHNcIikpO1xyXG4gICAgY29uc3Qgd2Vla2x5U2V0c0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhzZXRzKS5tYXAoKGUpID0+IHN0YXJ0Q2FzZShlKSksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBvZiBTZXRzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXMoc2V0cyksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhzZXRzKS5tYXAoXHJcbiAgICAgICAgICAgICAgKGUpID0+XHJcbiAgICAgICAgICAgICAgICBgcmdiYSgxMDAsJHtNYXRoLnJhbmRvbSgpICogMjU1fSwke01hdGgucmFuZG9tKCkgKiAyNTV9LDAuMylgXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD57T2JqZWN0LmtleXMoc2V0cykubGVuZ3RoID4gMCAmJiA8Y2FudmFzIGlkPVwid2Vla2x5U2V0c1wiPjwvY2FudmFzPn08Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldFdvcmtvdXRzRm9yVXNlciB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHNcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyB0cmFuc2Zvcm0sIHBpY2sgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IFdvcmtvdXRQZXJXZWVrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtvdXRzUGVyV2Vla1wiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgbGV0IHdvcmtvdXRzID0gYXdhaXQgZ2V0V29ya291dHNGb3JVc2VyKHVzZXIpO1xyXG5cclxuICB3b3Jrb3V0cyA9IGxvZGFzaCh3b3Jrb3V0cylcclxuICAgIC5ncm91cEJ5KCh3KSA9PiBkYXlqcyh3LmRhdGV0aW1lX3N0YXJ0KS53ZWVrKCkpXHJcbiAgICAubWFwVmFsdWVzKChlKSA9PiBlLmxlbmd0aClcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICBsZXQgd2Vla3NUb1Nob3cgPSBPYmplY3Qua2V5cyh3b3Jrb3V0cykubWFwKChlKSA9PiBwYXJzZUludChlKSk7XHJcbiAgd2Vla3NUb1Nob3cuc29ydCgpO1xyXG4gIHdlZWtzVG9TaG93ID0gd2Vla3NUb1Nob3cuc2xpY2UoMCwgMTApLm1hcChTdHJpbmcpO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtKFxyXG4gICAgcGljayh3b3Jrb3V0cywgd2Vla3NUb1Nob3cpLFxyXG4gICAgKHJlcywgdmFsLCBrZXkpID0+XHJcbiAgICAgIChyZXNbXHJcbiAgICAgICAgYCR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuc3RhcnRPZihcIndlZWtcIikuc3RhcnRPZihcImRheVwiKSkuZm9ybWF0KFxyXG4gICAgICAgICAgXCJERC9NL1lZXCJcclxuICAgICAgICApfSAtICR7ZGF5anMoZGF5anMoKS53ZWVrKGtleSkuZW5kT2YoXCJ3ZWVrXCIpLnN0YXJ0T2YoXCJkYXlcIikpLmZvcm1hdChcclxuICAgICAgICAgIFwiREQvTS9ZWVwiXHJcbiAgICAgICAgKX1gXHJcbiAgICAgIF0gPSB2YWwpXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsQmVzdFJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItMlwiPldvcmtvdXRzIHBlciBXZWVrPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTIgbWItM1wiIC8+XHJcbiAgICAgICAgPFdvcmtvdXRQZXJXZWVrIHdvcmtvdXRzUGVyV2Vlaz17d29ya291dHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHN1cGFiYXNlIGZyb20gXCJ+L3N1cGFiYXNlLmpzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXb3Jrb3V0KHdvcmtvdXQpIHtcclxuICBsZXQgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcImxvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiaWRcIilcclxuICAgIC5tYXRjaCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG5cclxuICBsZXQgbG9jYXRpb25JZDtcclxuICBpZiAoY2hlY2tMb2NhdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2hlY2tMb2NhdGlvbiA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwibG9jYXRpb25cIilcclxuICAgICAgLmluc2VydCh7IG5hbWU6IHdvcmtvdXQubG9jYXRpb24sIHVzZXJfaWQ6IHdvcmtvdXQudXNlcklkIH0pO1xyXG4gIH1cclxuICBsb2NhdGlvbklkID0gY2hlY2tMb2NhdGlvbi5kYXRhPy5bMF0uaWQ7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcIndvcmtvdXRcIikuaW5zZXJ0KFtcclxuICAgIHtcclxuICAgICAgbmFtZTogd29ya291dC5uYW1lLFxyXG4gICAgICBkYXRldGltZV9zdGFydDogd29ya291dC5kYXRldGltZSxcclxuICAgICAgZGF0ZXRpbWVfZW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbklkLFxyXG4gICAgICB1c2VyX2lkOiB3b3Jrb3V0LnVzZXJJZCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgcmV0dXJuIGRhdGFbMF0uaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVXb3Jrb3V0KHdvcmtvdXRfaWQpIHtcclxuICBjb25zdCB3b3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0c2ZvcndvcmtvdXRcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJ3b3Jrb3V0X2lkXCIsIHdvcmtvdXRfaWQpO1xyXG5cclxuICBjb25zdCBhc3NvY2lhdGVkX3dvcmtvdXRfZXhlcmNpc2VzID1cclxuICAgIFwiKFwiICsgd29ya291dC5kYXRhLm1hcCgoZSkgPT4gZS53b3Jrb3V0X2V4ZXJjaXNlX2lkKS50b1N0cmluZygpICsgXCIpXCI7XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInNldFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZmlsdGVyKFwid29ya291dF9leGVyY2lzZVwiLCBcImluXCIsIGFzc29jaWF0ZWRfd29ya291dF9leGVyY2lzZXMpO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0X2V4ZXJjaXNlXCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXQ6IHdvcmtvdXRfaWQgfSk7XHJcblxyXG4gIGNvbnN0IF9kZWxldGVXb3Jrb3V0ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dFwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogd29ya291dF9pZCB9KTtcclxuXHJcbiAgcmV0dXJuIF9kZWxldGVXb3Jrb3V0LmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0KGlkKSB7XHJcbiAgbGV0IHsgZGF0YTogd29ya291dCB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dHNfd2l0aF9sb2NhdGlvblwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcImlkXCIsIGlkKTtcclxuICByZXR1cm4gd29ya291dDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlc0ZvcldvcmtvdXQoaWQpIHtcclxuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJzZXRzZm9yd29ya291dFwiKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5lcShcIndvcmtvdXRfaWRcIiwgaWQpXHJcbiAgICAub3JkZXIoXCJzZXRfaWRcIik7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluaXNoV29ya291dChpZCwgZGF0ZXRpbWUpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcIndvcmtvdXRcIilcclxuICAgIC51cGRhdGUoeyBkYXRldGltZV9lbmQ6IGRhdGV0aW1lIH0pXHJcbiAgICAubWF0Y2goeyBpZDogaWQgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJ3b3Jrb3V0c193aXRoX2xvY2F0aW9uXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VySWQpO1xyXG4gIGNvbnN0IHdvcmtvdXRzID0gZGF0YTtcclxuXHJcbiAgcmV0dXJuIHdvcmtvdXRzLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRldGltZV9zdGFydCkgLSBuZXcgRGF0ZShhLmRhdGV0aW1lX3N0YXJ0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RXhlcmNpc2V0b1dvcmtvdXQoeyB3b3Jrb3V0X2lkLCBleGVyY2lzZV9pZCB9KSB7XHJcbiAgY29uc3Qgd29ya291dEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLnNlbGVjdChcIiosIGV4ZXJjaXNlIWlubmVyKCopXCIpXHJcbiAgICAuZXEoXCJleGVyY2lzZVwiLCBleGVyY2lzZV9pZClcclxuICAgIC5lcShcIndvcmtvdXRcIiwgd29ya291dF9pZCk7XHJcblxyXG4gIGlmICh3b3Jrb3V0RXhlcmNpc2U/LmRhdGEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEV4ZXJjaXNlID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmluc2VydChbeyBleGVyY2lzZTogZXhlcmNpc2VfaWQsIHdvcmtvdXQ6IHdvcmtvdXRfaWQgfV0pO1xyXG5cclxuICBjb25zdCBhZGRTZXQgPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic2V0XCIpLmluc2VydChbXHJcbiAgICB7XHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2U6IGFkZEV4ZXJjaXNlPy5kYXRhPy5bMF0/LmlkLFxyXG4gICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgIHJlcGV0aXRpb25zOiBudWxsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGFkZFNldD8uZGF0YT8uWzBdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dChmb3JtKSB7XHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic2V0XCIpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5tYXRjaCh7IHdvcmtvdXRfZXhlcmNpc2U6IGZvcm0uZ2V0KFwid29ya291dF9leGVyY2lzZV9pZFwiKSB9KTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwid29ya291dF9leGVyY2lzZVwiKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAubWF0Y2goeyBpZDogZm9ybS5nZXQoXCJ3b3Jrb3V0X2V4ZXJjaXNlX2lkXCIpIH0pO1xyXG4gIHJldHVybjtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dHNQZXJXZWVrKHByb3BzKSB7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJ3b3Jrb3V0c1BlcldlZWtcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0c1BlcldlZWtcIikpO1xyXG4gICAgY29uc3Qgd29ya291dHNQZXJXZWVrQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiIyBXb3Jrb3V0cyBwZXIgV2Vla1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHByb3BzLndvcmtvdXRzUGVyV2VlayksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogT2JqZWN0LnZhbHVlcyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLm1hcChcclxuICAgICAgICAgICAgICAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGByZ2JhKDEwMCwke01hdGgucmFuZG9tKCkgKiAyNTV9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sMC4zKWBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGluZGV4QXhpczogXCJ5XCIsXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IDQgLyBPYmplY3Qua2V5cyhwcm9wcy53b3Jrb3V0c1BlcldlZWspLmxlbmd0aCxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge09iamVjdC5rZXlzKHByb3BzLndvcmtvdXRzUGVyV2VlaykubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGNhbnZhcyBpZD1cIndvcmtvdXRzUGVyV2Vla1wiPjwvY2FudmFzPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSB9IGZyb20gXCJ+L3NlcnZpY2Uvc2V0c1wiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBsb2Rhc2gsIHsgbWF4QnkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQZXJzb25hbEJlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BlcnNvbmFsQmVzdFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgc2V0cyA9IGF3YWl0IGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UodXNlcik7XHJcbiAgY29uc3QgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgIC5ncm91cEJ5KChzKSA9PiBzLmV4ZXJjaXNlX2lkKVxyXG4gICAgLm1hcFZhbHVlcygoZSkgPT4gbWF4QnkoZSwgKHMpID0+IHMud2VpZ2h0KSlcclxuICAgIC52YWx1ZSgpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhiZXN0U2V0QnlFeGVyY2lzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hbEJlc3RSb3V0ZSgpIHtcclxuICBjb25zdCBsaXN0QmVzdFNldHMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IFtzaW5nbGVFeGVyY2lzZUNoYXJ0LCBzZXRTaW5nbGVFeGVyY2lzZUNoYXJ0XSA9IHVzZVN0YXRlKGxpc3RCZXN0U2V0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNCBtYi0xXCI+UGVyc29uYWwgQmVzdHM8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXQtMiBtYi0zXCIgLz5cclxuICAgICAgICA8aT5XZWlnaHQgb2Ygc2V0IHdpdGggbWF4IHZvbHVtZTwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7bGlzdEJlc3RTZXRzLmxlbmd0aCA/IChcclxuICAgICAgICA8UGVyc29uYWxCZXN0cyBiZXN0U2V0cz17bGlzdEJlc3RTZXRzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiTm8gd29ya291dHMgeWV0XCJcclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsUmVjb3Jkcyhwcm9wcykge1xyXG4gIGNvbnN0IFtjdHgsIHNldEN0eF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNoYXJ0U3RhdHVzID0gQ2hhcnQuZ2V0Q2hhcnQoXCJwZXJzb25hbFJlY29yZHNcIik7IC8vIDxjYW52YXM+IGlkXHJcbiAgICBpZiAoY2hhcnRTdGF0dXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNoYXJ0U3RhdHVzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuYmVzdFNldHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRDdHgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25hbFJlY29yZHNcIikpO1xyXG4gICAgY29uc3QgcHJDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgdHlwZTogXCJiYXJcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogcHJvcHMuYmVzdFNldHMubWFwKCh2YWx1ZSkgPT5cclxuICAgICAgICAgIHN0YXJ0Q2FzZShgJHt2YWx1ZS5leGVyY2lzZV9uYW1lfSAke3ZhbHVlLnZhcmlhbnQgPz8gXCJcIn1gKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BzLmJlc3RTZXRzLm1hcCgodmFsdWUpID0+IHZhbHVlLndlaWdodCksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5iZXN0U2V0cy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMDB9LCR7TWF0aC5yYW5kb20oKSAqIDI1NX0sICR7XHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU1XHJcbiAgICAgICAgICAgICAgfSwwLjQpYDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBpbmRleEF4aXM6IFwieVwiLFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOiA0IC8gcHJvcHMuYmVzdFNldHMubGVuZ3RoLFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IChjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gY29udGV4dC5kYXRhSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBPYmplY3QudmFsdWVzKHByb3BzLmJlc3RTZXRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgIFdlaWdodDogJHtzZXRbZGF0YUluZGV4XS53ZWlnaHR9IHwgVm9sOiAke3NldFtkYXRhSW5kZXhdLndlaWdodH0geCAke3NldFtkYXRhSW5kZXhdLnJlcGV0aXRpb25zfSA9ICR7c2V0W2RhdGFJbmRleF0ubWF4X3ZvbHVtZX1gO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD57cHJvcHMuYmVzdFNldHMubGVuZ3RoID4gMCAmJiA8Y2FudmFzIGlkPVwicGVyc29uYWxSZWNvcmRzXCI+PC9jYW52YXM+fTwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVN1Ym1pdCwgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25zLCBhZGRMb2NhdGlvbiB9IGZyb20gXCJ+L3NlcnZpY2UvbG9jYXRpb24uanNcIjtcclxuaW1wb3J0IFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcclxuICBjb25zdCB1c2VyID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGdldExvY2F0aW9ucyh1c2VyKTtcclxuXHJcbiAgcmV0dXJuIGxvY2F0aW9ucztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBpZiAoIWZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpKSB7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IGFkZExvY2F0aW9uKGZvcm0uZ2V0KFwibG9jYXRpb25OYW1lXCIpLCBmb3JtLmdldChcInVzZXJJZFwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5hZ2VMb2NhdGlvbnNSb3V0ZSgpIHtcclxuICBjb25zdCBsb2NhdGlvbnMgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG5cclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPlNhdmVkIExvY2F0aW9uczwvaDQ+XHJcbiAgICAgICAgICB7bG9jYXRpb25zLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIHRvPXtgLi8ke2UuaWR9Lz91c2VyPSR7c2VhcmNoUGFyYW1zLmdldChcInVzZXJcIil9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNlwiPntzdGFydENhc2UoZS5uYW1lKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgPGI+QWRkIExvY2F0aW9uPC9iPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCIgLz5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZSBmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiIG5hbWU9XCJsb2NhdGlvbk5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtaW5mb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWluZm8gbWwtMVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50KHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHJlc3VsdCkgPT4ge1xyXG4gICAgcmVzdWx0ID8gc2V0VXNlcihyZXN1bHQpIDogc2V0VXNlcihudWxsKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGlmICh1c2VyID09PSBudWxsKSB7XHJcbiAgICAgIG5hdmlnYXRlKFwiL1wiKTtcclxuICAgIH1cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHByb3BzLnNldFVzZXIgPyBwcm9wcy5zZXRVc2VyKHVzZXIpIDogbnVsbDtcclxuICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcblxyXG4gICAgICBpZiAocHJvcHMuaWRQcmVkaWNhdGUgJiYgIXByb3BzLmlkUHJlZGljYXRlKHVpZCkpIHtcclxuICAgICAgICBuYXZpZ2F0ZShcIi9ob21lXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb3BzLnNldFVzZXJJZCA/IHByb3BzLnNldFVzZXJJZCh1aWQpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiA8Pntwcm9wcy5jaGlsZHJlbn08Lz47XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZVNlYXJjaFBhcmFtcywgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRXb3Jrb3V0c0ZvclVzZXIgfSBmcm9tIFwifi9zZXJ2aWNlL3dvcmtvdXRzLmpzXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCwgQnNDbG9ja0hpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5kYXlqcy5leHRlbmQodXRjKTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgbGV0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3Qgd29ya291dHMgPSBhd2FpdCBnZXRXb3Jrb3V0c0ZvclVzZXIodXNlcik7XHJcbiAgcmV0dXJuIHdvcmtvdXRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dvcmtvdXRSb3V0ZSgpIHtcclxuICBjb25zdCB3b3Jrb3V0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VyXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckF1dGhvcmlzZWRDb21wb25lbnQgaWRQcmVkaWNhdGU9eyhpZCkgPT4gaWQgPT09IHVzZXJJZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG0tNSBjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTMgbWItM1wiPldvcmtvdXRzPC9kaXY+XHJcbiAgICAgICAge3dvcmtvdXRzLmxlbmd0aCA9PT0gMCAmJiBcIk5vIHdvcmtvdXRzIHlldFwifVxyXG4gICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGtleT17XCJ3b3Jrb3V0LmlkXCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXHJcbiAgICAgICAgICAgIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0LmlkfS9jdXJyZW50RXhlcmNpc2VzYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUgbWItMiBpcy01XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXlqc1xyXG4gICAgICAgICAgICAgICAgICAgIC51dGMod29ya291dC5kYXRldGltZV9zdGFydClcclxuICAgICAgICAgICAgICAgICAgICAubG9jYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJkZGRkLCBNTU0gRCBZWVwiKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWItMiBpcy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCkubG9jYWwoKS5mb3JtYXQoXCJoOm1tIEFcIil9XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAtIFwifVxyXG4gICAgICAgICAgICAgICAgICB7d29ya291dC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhcnRDYXNlKHdvcmtvdXQubG9jYXRpb25fbmFtZSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3dvcmtvdXQuZGF0ZXRpbWVfZW5kID8gKFxyXG4gICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGVGaWxsIHNpemU9ezQwfSBjbGFzc05hbWU9XCJtLTQgcC0xXCIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJzQ2xvY2tIaXN0b3J5IHNpemU9ezQwfSBjbGFzc05hbWU9XCJtLTQgcC0xXCIgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdXb3Jrb3V0Um91dGUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBPdXRsZXQsIHVzZUZldGNoZXIsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7XHJcbiAgZmluaXNoV29ya291dCxcclxuICBnZXRXb3Jrb3V0LFxyXG4gIGRlbGV0ZVdvcmtvdXQsXHJcbn0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N0b3B3YXRjaFwiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IE1kT3V0bGluZU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmNvbnN0IHV0YyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpO1xyXG5jb25zdCByZWxhdGl2ZVRpbWUgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBnZXRXb3Jrb3V0KHBhcmFtcy53b3Jrb3V0SWQpO1xyXG4gIHJldHVybiB3b3Jrb3V0O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IHdvcmtvdXQgPSBhd2FpdCBmaW5pc2hXb3Jrb3V0KFxyXG4gICAgICBmb3JtLmdldChcIndvcmtvdXRfaWRcIiksXHJcbiAgICAgIGZvcm0uZ2V0KFwiZW5kXCIpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHdvcmtvdXQ7XHJcbiAgfVxyXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSBcIkRFTEVURVwiKSB7XHJcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgY29uc3Qgd29ya291dCA9IGF3YWl0IGRlbGV0ZVdvcmtvdXQoZm9ybS5nZXQoXCJ3b3Jrb3V0X2lkXCIpKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdG9UaW1lKHRpbWUpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3b3Jrb3V0TWV0YURhdGEod29ya291dCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gaXMtbGlnaHQgbXQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keSBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTQgbWItM1wiPnt3b3Jrb3V0Py5uYW1lfTwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGV4dCBtLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2ctcGluXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3N0YXJ0Q2FzZSh3b3Jrb3V0Py5sb2NhdGlvbl9uYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0IG0tMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnZy1hbGFybVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBpZD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHtgJHtkYXlqc1xyXG4gICAgICAgICAgICAgIC51dGMod29ya291dD8uZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgLmxvY2FsKClcclxuICAgICAgICAgICAgICAuZm9ybWF0KFwiZGRkZCwgREQgTU1NIFlZLCBISDptbVwiKX1cclxuICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0TmV3V29ya291dFJvdXRlKCkge1xyXG4gIGNvbnN0IHdvcmtvdXQgPSB1c2VMb2FkZXJEYXRhKClbMF07XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NoYW5nZVRpbWUsIHNldFNob3dDaGFuZ2VUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VzdG9tRGF0ZSwgc2V0Q3VzdG9tRGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50XHJcbiAgICAgIHNldFVzZXJJZD17c2V0VXNlcklkfVxyXG4gICAgICBpZFByZWRpY2F0ZT17KGlkKSA9PiBpZCA9PT0gd29ya291dC51c2VyX2lkfVxyXG4gICAgPlxyXG4gICAgICA8PlxyXG4gICAgICAgIHt3b3Jrb3V0TWV0YURhdGEod29ya291dCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keSBub3RpZmljYXRpb24gbWItM1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt3b3Jrb3V0Py5kYXRldGltZV9lbmQgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaXMtNiBtYi0xXCI+V29ya291dCBDb21wbGV0ZWQuIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dG9UaW1lKFxyXG4gICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX2VuZCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF5anMudXRjKHdvcmtvdXQuZGF0ZXRpbWVfc3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBpcy02IG1iLTBcIj5UaW1lIEVsYXBzZWQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpcy1mYW1pbHktc2Vjb25kYXJ5IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U3RvcHdhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRpbWU9e2RheWpzKCkgLSBkYXlqcy51dGMod29ya291dC5kYXRldGltZV9zdGFydCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHshd29ya291dC5kYXRldGltZV9lbmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoKS51dGMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IG1ldGhvZDogXCJQT1NUXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvbiBpcy1saWdodCAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TWVudSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAge3Nob3dNZW51ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94IHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMyVcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyICBpcy1mdWxsd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dF9pZDogd29ya291dC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBXb3Jrb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2hhbmdlVGltZSgoZSkgPT4gIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLWZ1bGx3aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0IEZpbmlzaCBUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dDaGFuZ2VUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsIGlzLW1vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoZS50YXJnZXQudmFsdWUpID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheWpzLnV0Yyh3b3Jrb3V0LmRhdGV0aW1lX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tRGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY3VzdG9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0IGlzLXN1Y2Nlc3MgbS0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRfaWQ6IHdvcmtvdXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZGF5anMoY3VzdG9tRGF0ZSkudXRjKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiUE9TVFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIDwvVXNlckF1dGhvcmlzZWRDb21wb25lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0b3B3YXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLmluaXRpYWxUaW1lKTtcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5ydW5uaW5nKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEwMDApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSBpZiAoIXJ1bm5pbmcpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW3J1bm5pbmddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9wd2F0Y2hcIj5cclxuICAgICAge3RpbWUgPiAyNCAqIDM2ICogNjAgKiAxMDAwICYmXHJcbiAgICAgICAgKE1hdGguZmxvb3IodGltZSAvIDI0IC8gMzYgLyA2MCAvIDEwMDApICUgMjQpICsgXCJkYXkocykgXCJ9XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyAoTWF0aC5mbG9vcih0aW1lIC8gMzYwMDAwMCkgJSA2MCkpLnNsaWNlKC0yKX06PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDYwMDAwKSAlIDYwKSkuc2xpY2UoLTIpfTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7XHJcbiIsICJpbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFyYW1zLFxyXG4gIHVzZU5hdmlnYXRlLFxyXG4gIE91dGxldCxcclxuICB1c2VMb2FkZXJEYXRhLFxyXG4gIHVzZVNlYXJjaFBhcmFtcyxcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0TXVzY2xlR3JvdXBzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG11c2NsZV9ncm91cHMgPSBhd2FpdCBnZXRNdXNjbGVHcm91cHMoKTtcclxuICByZXR1cm4gbXVzY2xlX2dyb3VwcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc1JvdXRlSW5kZXgoKSB7XHJcbiAgbGV0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBtdXNjbGVfZ3JvdXBzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbmF2aWdhdGUoYC93b3Jrb3V0LyR7d29ya291dElkfS9hZGRFeGVyY2lzZWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gaXMtbGlnaHQgaXMtc21hbGwgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuZ2V0KFwibXVzY2xlX2dyb3VwXCIpID8/IFwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7bXVzY2xlX2dyb3Vwcy5tYXAoKG11c2NsZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttdXNjbGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgbXVzY2xlX2dyb3VwOiBtdXNjbGUubmFtZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1saWdodCBpcy1zbWFsbCAke1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKSA9PT0gbXVzY2xlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N0YXJ0Q2FzZShtdXNjbGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmssIHVzZVBhcmFtcywgcmVkaXJlY3QsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcG9zdEV4ZXJjaXNldG9Xb3Jrb3V0IH0gZnJvbSBcIn4vc2VydmljZS93b3Jrb3V0cy5qc1wiO1xyXG5pbXBvcnQgeyBzdGFydENhc2UsIGdyb3VwQnksIG1hcFZhbHVlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgZ2V0RXhlcmNpc2VzIH0gZnJvbSBcIn4vc2VydmljZS9leGVyY2lzZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGxldCBtdXNjbGVfZ3JvdXAgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIm11c2NsZV9ncm91cFwiKTtcclxuICBjb25zdCBleGVyY2lzZXMgPSBhd2FpdCBnZXRFeGVyY2lzZXMobXVzY2xlX2dyb3VwKTtcclxuXHJcbiAgcmV0dXJuIGV4ZXJjaXNlcztcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcGFyYW1zLCByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCwgdXNlciB9ID0gcGFyYW1zO1xyXG5cclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBleGVyY2lzZSA9IGZvcm0uZ2V0KFwiZXhlcmNpc2VcIik7XHJcblxyXG4gIGF3YWl0IHBvc3RFeGVyY2lzZXRvV29ya291dCh7XHJcbiAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICBleGVyY2lzZV9pZDogZXhlcmNpc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZGlyZWN0KGAvd29ya291dC8ke3dvcmtvdXRJZH0vY3VycmVudEV4ZXJjaXNlc2ApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkRXhlcmNpc2VSb3V0ZSgpIHtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGV4ZXJjaXNlcyA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xyXG4gIGNvbnN0IGV4TmFtZVRvSWRNYXAgPSBtYXBWYWx1ZXMoXHJcbiAgICBncm91cEJ5KFxyXG4gICAgICBleGVyY2lzZXMsXHJcbiAgICAgIChleGVyY2lzZSkgPT5cclxuICAgICAgICBgJHtzdGFydENhc2UoZXhlcmNpc2UubmFtZSl9ICR7XHJcbiAgICAgICAgICBleGVyY2lzZT8udmFyaWFudCA/IGAoJHtzdGFydENhc2UoZXhlcmNpc2UudmFyaWFudCl9KWAgOiBcIlwiXHJcbiAgICAgICAgfWBcclxuICAgICksXHJcbiAgICAoZSkgPT4gZVswXS5pZFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgaXMtc21hbGwgJHtzZWxlY3RlZCA9PT0gbnVsbCAmJiBcImlzLWRhbmdlclwifWB9XHJcbiAgICAgICAgICBsaXN0PVwiZXhlcmNpc2VzXCJcclxuICAgICAgICAgIG5hbWU9XCJleGVyY2lzZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKGV4TmFtZVRvSWRNYXBbc2VsZWN0ZWQudGFyZ2V0LnZhbHVlXSA/PyBudWxsKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJleGVyY2lzZXNcIj5cclxuICAgICAgICAgIHtleGVyY2lzZXMubWFwKChleGVyY2lzZSkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAga2V5PXtleGVyY2lzZS5pZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17YCR7c3RhcnRDYXNlKGV4ZXJjaXNlLm5hbWUpfSAke1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2U/LnZhcmlhbnQgPyBgKCR7c3RhcnRDYXNlKGV4ZXJjaXNlLnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbCBpcy1tb2JpbGUgbXQtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdCh7IGV4ZXJjaXNlOiBzZWxlY3RlZCB9LCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtZGFyayBcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz17YC93b3Jrb3V0LyR7d29ya291dElkfS9jdXJyZW50RXhlcmNpc2VzYH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc21hbGwgaXMtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2FkZXJEYXRhLCBMaW5rLCB1c2VQYXJhbXMsIHVzZUZldGNoZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGxvZGFzaCwgeyBzdGFydENhc2UsIGdyb3VwQnksIG1heEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1xyXG4gIHVwZGF0ZVNldCxcclxuICBhZGRTZXQsXHJcbiAgZGVsZXRlU2V0LFxyXG4gIGdldEJlc3RTZXRQZXJXb3Jrb3V0RXhlcmNpc2UsXHJcbn0gZnJvbSBcIn4vc2VydmljZS9zZXRzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlRXhlcmNpc2VGcm9tV29ya291dCxcclxuICBnZXRFeGVyY2lzZXNGb3JXb3Jrb3V0LFxyXG59IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgU2V0SW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy9TZXRJbnB1dFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHNGb3JXb3Jrb3V0ID0gYXdhaXQgZ2V0RXhlcmNpc2VzRm9yV29ya291dChwYXJhbXMud29ya291dElkKTtcclxuICBjb25zdCB1c2VySWQgPSBzZXRzRm9yV29ya291dD8uWzBdPy51c2VyX2lkO1xyXG4gIGxldCBiZXN0U2V0QnlFeGVyY2lzZTtcclxuICBpZiAodXNlcklkKSB7XHJcbiAgICBjb25zdCBzZXRzID0gYXdhaXQgZ2V0QmVzdFNldFBlcldvcmtvdXRFeGVyY2lzZSh1c2VySWQpO1xyXG4gICAgYmVzdFNldEJ5RXhlcmNpc2UgPSBsb2Rhc2goc2V0cylcclxuICAgICAgLmdyb3VwQnkoKHMpID0+IHMuZXhlcmNpc2VfaWQpXHJcbiAgICAgIC5tYXBWYWx1ZXMoKGUpID0+IG1heEJ5KGUsIChzKSA9PiBzLndlaWdodCkpXHJcbiAgICAgIC52YWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhlcmNpc2VTZXRzID0gZ3JvdXBCeShcclxuICAgIHNldHNGb3JXb3Jrb3V0LFxyXG4gICAgKHNldCkgPT5cclxuICAgICAgYCR7c3RhcnRDYXNlKHNldC5leGVyY2lzZV9uYW1lKX0gJHtcclxuICAgICAgICBzZXQudmFyaWFudCA/IGAoJHtzdGFydENhc2Uoc2V0LnZhcmlhbnQpfSlgIDogXCJcIlxyXG4gICAgICB9YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwic2V0XCIpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTZXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IGFkZFNldChmb3JtKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGlmIChmb3JtLmdldChcInR5cGVcIikgPT09IFwiZXhlcmNpc2VcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUV4ZXJjaXNlRnJvbVdvcmtvdXQoZm9ybSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm0uZ2V0KFwidHlwZVwiKSA9PT0gXCJzZXRcIikge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVNldChmb3JtKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRFeGVyY2lzZXNSb3V0ZSgpIHtcclxuICBjb25zdCB7IGV4ZXJjaXNlU2V0cywgYmVzdFNldEJ5RXhlcmNpc2UgfSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICBjb25zdCB7IHdvcmtvdXRJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRXhlcmNpc2VGb3JtID0gKGV4ZXJjaXNlX25hbWUsIHNldHMpID0+IHtcclxuICAgIGNvbnN0IGV4ZXJjaXNlSWQgPSBzZXRzWzBdLmV4ZXJjaXNlX2lkO1xyXG4gICAgY29uc3QgZXhlcmNpc2VTZXRGb3JtID0ge1xyXG4gICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgIGV4ZXJjaXNlX25hbWU6IGV4ZXJjaXNlX25hbWUsXHJcbiAgICAgIHdvcmtvdXRfZXhlcmNpc2VfaWQ6IHNldHNbMF0ud29ya291dF9leGVyY2lzZV9pZCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0U2V0Rm9ybSA9ICh3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICByZXBldGl0aW9uczogcmVwZXRpdGlvbnMsXHJcbiAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIlBVVFwiIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVTZXRGb3JtID0gKGluZGV4KSA9PlxyXG4gICAgICBmZXRjaGVyLnN1Ym1pdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3b3Jrb3V0X2lkOiB3b3Jrb3V0SWQsXHJcbiAgICAgICAgICBleGVyY2lzZV9uYW1lOiBleGVyY2lzZV9uYW1lLFxyXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcclxuICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgKTtcclxuICAgIGNvbnN0IHByZXZpb3VzQmVzdFNldCA9IGJlc3RTZXRCeUV4ZXJjaXNlW2V4ZXJjaXNlSWRdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBtYi0zXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGlzLTUgbWItMVwiPntleGVyY2lzZV9uYW1lfSA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7cHJldmlvdXNCZXN0U2V0ICYmIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGk+IFBCOjwvaT4ge3ByZXZpb3VzQmVzdFNldC53ZWlnaHR9IHh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3ByZXZpb3VzQmVzdFNldC5yZXBldGl0aW9uc30gfCB7cHJldmlvdXNCZXN0U2V0Lm1heF92b2x1bWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibWItNCBtdC0zXCIgLz5cclxuXHJcbiAgICAgICAgICB7c2V0cy5tYXAoKHNldCkgPT4gKFxyXG4gICAgICAgICAgICA8U2V0SW5wdXRcclxuICAgICAgICAgICAgICBrZXk9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3NldC5zZXRfaWR9XHJcbiAgICAgICAgICAgICAgd2VpZ2h0PXtzZXQud2VpZ2h0fVxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZD17c2V0LmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICByZXBldGl0aW9ucz17c2V0LnJlcGV0aXRpb25zfVxyXG4gICAgICAgICAgICAgIGRlbGV0ZUZ1bmM9eygpID0+IGRlbGV0ZVNldEZvcm0oc2V0LnNldF9pZCl9XHJcbiAgICAgICAgICAgICAgc3VibWl0RnVuYz17c3VibWl0U2V0Rm9ybX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGJ1dHRvbnMgY2xhc3NOYW1lPVwibGV2ZWwgaXMtbW9iaWxlIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI4NSVcIiB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnN1Ym1pdChleGVyY2lzZVNldEZvcm0sIHsgbWV0aG9kOiBcIlBPU1RcIiB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWZ1bGx3aWR0aCBpcy1ibGFjayBpcy1zbWFsbCB0aWxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArIFNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgZmV0Y2hlci5zdWJtaXQoXHJcbiAgICAgICAgICAgICAgICAgIHsgLi4uZXhlcmNpc2VTZXRGb3JtLCB0eXBlOiBcImV4ZXJjaXNlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyBtZXRob2Q6IFwiREVMRVRFXCIgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHQgaXMtZGFuZ2VyIGlzLXNtYWxsIG1sLTFcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9idXR0b25zPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtPYmplY3QuZW50cmllcyhleGVyY2lzZVNldHMpLm1hcCgoW2V4ZXJjaXNlX25hbWUsIHNldHNdLCBleEluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2V4SW5kZXh9PntyZW5kZXJFeGVyY2lzZUZvcm0oZXhlcmNpc2VfbmFtZSwgc2V0cyl9PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDxMaW5rIHRvPXtgL3dvcmtvdXQvJHt3b3Jrb3V0SWR9L2FkZEV4ZXJjaXNlYH0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC01IGJ1dHRvbiBpcy1ibGFjayBpcy1mdWxsd2lkdGggaXMtc21hbGxcIj5cclxuICAgICAgICAgICsgRXhlcmNpc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQ2dDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBSaUNoZWNrRmlsbCwgUmlTZXBhcmF0b3IgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldElucHV0KHByb3BzKSB7XHJcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKHByb3BzLndlaWdodCk7XHJcbiAgY29uc3QgW3JlcGV0aXRpb25zLCBzZXRSZXBldGl0aW9uc10gPSB1c2VTdGF0ZShwcm9wcy5yZXBldGl0aW9ucyk7XHJcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKHByb3BzLmNvbXBsZXRlZCk7XHJcbiAgY29uc3QgdXBkYXRlRGIgPSAod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCkgPT5cclxuICAgIHByb3BzLnN1Ym1pdEZ1bmMod2VpZ2h0LCByZXBldGl0aW9ucywgY29tcGxldGVkLCBpbmRleCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLTIgcC0yXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxdmhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbXBsZXRlZCA/IFwiI2ViZmZmY1wiIDogXCIjZjVmNWY1XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2VpZ2h0IChrZylcIlxyXG4gICAgICAgICAgdmFsdWU9e3dlaWdodH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2VpZ2h0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVEYih3ZWlnaHQsIHJlcGV0aXRpb25zLCBjb21wbGV0ZWQsIHByb3BzLmluZGV4KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBzXCJcclxuICAgICAgICAgIHZhbHVlPXtyZXBldGl0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwZXRpdGlvbnMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsIGNvbXBsZXRlZCwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1saWdodCBpcy1zbWFsbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5kZWxldGVGdW5jfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDZ0Nsb3NlIHNpemU9ezE1fSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyEocHJvcHMud2VpZ2h0ICYmIHByb3BzLnJlcGV0aXRpb25zKX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tcGxldGVkKChjb21wbGV0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZURiKHdlaWdodCwgcmVwZXRpdGlvbnMsICFjb21wbGV0ZSwgcHJvcHMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAhY29tcGxldGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1zbWFsbCBpcy1saWdodCAke1xyXG4gICAgICAgICAgICBwcm9wcy5jb21wbGV0ZWQgPyBcImlzLXByaW1hcnlcIiA6IFwiXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxSaUNoZWNrRmlsbCBzaXplPXsxNX0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBPdXRsZXQsIEZvcm0sIHVzZVN1Ym1pdCwgdXNlTG9hZGVyRGF0YSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgcGFkU3RhcnQsIHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgY3JlYXRlV29ya291dCB9IGZyb20gXCJ+L3NlcnZpY2Uvd29ya291dHMuanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb25zIH0gZnJvbSBcIn4vc2VydmljZS9sb2NhdGlvbi5qc1wiO1xyXG5pbXBvcnQgVXNlckF1dGhvcmlzZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckF1dGhvcmlzZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTtcclxuZGF5anMuZXh0ZW5kKHV0Yyk7XHJcblxyXG5leHBvcnQgbGV0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IHVzZXJJZCA9IGZvcm0uZ2V0KFwidXNlcklkXCIpO1xyXG4gIGxldCBuYW1lID0gZm9ybS5nZXQoXCJuYW1lXCIpO1xyXG4gIGxldCBkYXRldGltZSA9IGZvcm0uZ2V0KFwiZGF0ZXRpbWVcIik7XHJcbiAgbGV0IGxvY2F0aW9uID0gZm9ybS5nZXQoXCJsb2NhdGlvblwiKTtcclxuICBsb2NhdGlvbiA9IGxvY2F0aW9uPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKC8gL2csIFwiX1wiKSA/PyBudWxsO1xyXG4gIGNvbnN0IHdvcmtvdXRPYmplY3RJZCA9IGF3YWl0IGNyZWF0ZVdvcmtvdXQoe1xyXG4gICAgbmFtZSxcclxuICAgIGRhdGV0aW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICB1c2VySWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZWRpcmVjdChgL3dvcmtvdXQvJHt3b3Jrb3V0T2JqZWN0SWR9L2N1cnJlbnRFeGVyY2lzZXNgKTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IHVzZXIgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInVzZXJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKHVzZXIpO1xyXG4gIHJldHVybiBsb2NhdGlvbnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVXb3Jrb3V0Um91dGUoKSB7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhc0xvY2F0aW9uLCBzZXRIYXNMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBnZXRDdXJyZW50RGF0ZVRpbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgdmFyIG1vbnRoID0gcGFkU3RhcnQoZGF0ZS5nZXRNb250aCgpICsgMSwgMiwgMCk7XHJcbiAgICB2YXIgZGF5ID0gcGFkU3RhcnQoZGF0ZS5nZXREYXRlKCksIDIsIDApO1xyXG4gICAgdmFyIGhyID0gcGFkU3RhcnQoZGF0ZS5nZXRIb3VycygpLCAyLCAwKTtcclxuICAgIHZhciBtaW4gPSBwYWRTdGFydChkYXRlLmdldE1pbnV0ZXMoKSwgMiwgMCk7XHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aHJ9OiR7bWlufWA7XHJcbiAgfTtcclxuICBjb25zdCBzdWJtaXQgPSB1c2VTdWJtaXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJBdXRob3Jpc2VkQ29tcG9uZW50IHNldFVzZXI9e3NldFVzZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPk5ldyBXb3Jrb3V0PC9oND5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICAgdXNlcklkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHVpZCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGV0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGV0aW1lXCIpO1xyXG4gICAgICAgICAgICAgIGRhdGV0aW1lLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGRheWpzKGAke2V2ZW50LnRhcmdldC5kYXRldGltZUxvY2FsLnZhbHVlfTowMGApLnV0YygpXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5uYW1lUGxhY2Vob2xkZXIudmFsdWUgPT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgPyBgJHtkYXlqcyhnZXRDdXJyZW50RGF0ZVRpbWUoKSkuZm9ybWF0KFwiZGRkZFwiKX0gd29ya291dGBcclxuICAgICAgICAgICAgICAgICAgOiBldmVudC50YXJnZXQubmFtZVBsYWNlaG9sZGVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZCh1c2VySWQpO1xyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQoZGF0ZXRpbWUpO1xyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmQobmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgIHN1Ym1pdChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxhYmVsIGlzLW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmFtZS9EZXNjPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7ZGF5anMoZ2V0Q3VycmVudERhdGVUaW1lKCkpLmZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZGRkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX0gd29ya291dGB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbCBpcy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPkRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZXRpbWVMb2NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtnZXRDdXJyZW50RGF0ZVRpbWUoKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGFiZWwgaXMtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5Mb2NhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ib2R5IFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICFlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNldEhhc0xvY2F0aW9uKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNldEhhc0xvY2F0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgc2VsZWN0IGB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD1cImxvY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwibG9jYXRpb25zXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLm5hbWV9IHZhbHVlPXtzdGFydENhc2UoaXRlbS5uYW1lKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhcmsgXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc0xvY2F0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIE5ld1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgbGV0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2hvbWVcIik7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiA8PjwvPjtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQXV0aG9yaXNlZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaUFkZEJveEZpbGwsIFJpTGluZUNoYXJ0RmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyBHaVN0cm9uZyB9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xyXG5pbXBvcnQgeyBNZExvY2F0aW9uT24gfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUm91dGUoKSB7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxVc2VyQXV0aG9yaXNlZENvbXBvbmVudCBzZXRVc2VySWQ9e3NldFVzZXJJZH0gc2V0VXNlcj17c2V0VXNlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTYgbGV2ZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdCBib3VuY2UgY29udGFpbmVyIGlzLWhpZGRlbi1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIil9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxldmVsLWxlZnQgYm91bmNlIGNvbnRhaW5lciBpcy1oaWRkZW4tdG91Y2hcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvYmFubmVyLnBuZ1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicGFuZWwgaXMtYmxhY2sgbS01IFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPkhpLCB7dXNlciAmJiB1c2VyLmRpc3BsYXlOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxhPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrIGlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvY3JlYXRlP3VzZXI9JHt1c2VySWR9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSaUFkZEJveEZpbGwgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIFdvcmtvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWs/dXNlcj0ke3VzZXJJZH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpTGluZUNoYXJ0RmlsbCBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBBbmFseXRpY3NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCIgaHJlZj17YC93b3Jrb3V0cz91c2VyPSR7dXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdpU3Ryb25nIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFdvcmtvdXRzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1ibG9jayBpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2xvY2F0aW9ucz91c2VyPSR7dXNlcklkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWRMb2NhdGlvbk9uIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIExvY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtcmlnaHQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUgaXMtMSBtYi0xXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBXb3Jrb3V0LCBTbWFydGVyLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlBsZWFzZSBsb2cgaW4gdG8gY29udGludWUuLi48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1VzZXJBdXRob3Jpc2VkQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNzRlMjVkMDcnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LURGTVcyNTM3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkVBV1VDMy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNlZZUVRXWkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFBNVVOQVdaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstV1dISEtQU1UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HTFNKMjIzTC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FuYWx5dGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hbmFseXRpY3MtSU9KNkQyQ0wuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MvcGVyc29uYWwtYmVzdHMnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3BlcnNvbmFsLWJlc3RzJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3BlcnNvbmFsLWJlc3RzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9wZXJzb25hbC1iZXN0cy1XNFBFVVlKSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSkRTWTVNNkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3MvcHJvZ3Jlc3NpdmUtb3ZlcmxvYWQnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3Byb2dyZXNzaXZlLW92ZXJsb2FkJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3Byb2dyZXNzaXZlLW92ZXJsb2FkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy9wcm9ncmVzc2l2ZS1vdmVybG9hZC1UV1hFSFJRRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KRFNZNU02RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FuYWx5dGljcy90cmFpbmVkLXRoaXMtd2Vlayc6eydpZCc6J3JvdXRlcy9hbmFseXRpY3MvdHJhaW5lZC10aGlzLXdlZWsnLCdwYXJlbnRJZCc6J3JvdXRlcy9hbmFseXRpY3MnLCdwYXRoJzondHJhaW5lZC10aGlzLXdlZWsnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYW5hbHl0aWNzL3RyYWluZWQtdGhpcy13ZWVrLTM1TUhKUTVDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpEU1k1TTZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hbmFseXRpY3Mvd29ya291dHMtcGVyLXdlZWsnOnsnaWQnOidyb3V0ZXMvYW5hbHl0aWNzL3dvcmtvdXRzLXBlci13ZWVrJywncGFyZW50SWQnOidyb3V0ZXMvYW5hbHl0aWNzJywncGF0aCc6J3dvcmtvdXRzLXBlci13ZWVrJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FuYWx5dGljcy93b3Jrb3V0cy1wZXItd2Vlay0yTVBJTkdZMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KRFNZNU02RC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9jcmVhdGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY3JlYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NyZWF0ZS1NUDdYSlNIVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTzRIT0U2WjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WU1NEQk02Ui5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1TTllEUVpRLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ob21lJzp7J2lkJzoncm91dGVzL2hvbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21lLVFLSUlRTEhMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VU0ZGSEpCTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZTU0RCTTZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1XNDdEUFRKQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLVdBNVhIT09BLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1WU1NEQk02Ui5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkJzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucy4kbG9jYXRpb25JZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMvOmxvY2F0aW9uSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zLiRsb2NhdGlvbklkLUtSVFRFNjc1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXQnOnsnaWQnOidyb3V0ZXMvd29ya291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid3b3Jrb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQtRDUyUFlHNUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZTU0RCTTZSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkJywncGFyZW50SWQnOidyb3V0ZXMvd29ya291dCcsJ3BhdGgnOic6d29ya291dElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC1YT1JaV1RYQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTzRIT0U2WjQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1BQTVVTkFXWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdXSEhLUFNVLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstR0xTSjIyM0wuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NU05ZRFFaUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVRYVFREWk1HLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC1RQzNBSDM1WC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnOnsnaWQnOidyb3V0ZXMvd29ya291dC8kd29ya291dElkL19fYWRkRXhlcmNpc2VQYXJlbnQvYWRkRXhlcmNpc2UnLCdwYXJlbnRJZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudCcsJ3BhdGgnOidhZGRFeGVyY2lzZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvX19hZGRFeGVyY2lzZVBhcmVudC9hZGRFeGVyY2lzZS1MRzVEWUNPWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVFhUVERaTUcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcyc6eydpZCc6J3JvdXRlcy93b3Jrb3V0LyR3b3Jrb3V0SWQvY3VycmVudEV4ZXJjaXNlcycsJ3BhcmVudElkJzoncm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZCcsJ3BhdGgnOidjdXJyZW50RXhlcmNpc2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXQvJHdvcmtvdXRJZC9jdXJyZW50RXhlcmNpc2VzLVZYWTdPWU1SLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VU0ZGSEpCTi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3dvcmtvdXRzJzp7J2lkJzoncm91dGVzL3dvcmtvdXRzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3dvcmtvdXRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3dvcmtvdXRzLUhKUktMQ1k2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PNEhPRTZaNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZTU0RCTTZSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTVNOWURRWlEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UWFRURFpNRy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNzRFMjVEMDcuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtB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
