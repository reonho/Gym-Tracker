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
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) =>
  __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])((fn = 0))), res;
  };
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (
    (module2 && typeof module2 === "object") ||
    typeof module2 === "function"
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        "default",
        module2 && module2.__esModule && "default" in module2
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  );
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  },
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    ("use strict");
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function () {
        return node.createFileSessionStorage;
      },
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function () {
        return node.unstable_createFileUploadHandler;
      },
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function () {
        return node.unstable_createMemoryUploadHandler;
      },
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function () {
        return node.unstable_parseMultipartFormData;
      },
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function () {
        return serverRuntime.createCookie;
      },
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function () {
        return serverRuntime.createCookieSessionStorage;
      },
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function () {
        return serverRuntime.createMemorySessionStorage;
      },
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function () {
        return serverRuntime.createSession;
      },
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function () {
        return serverRuntime.createSessionStorage;
      },
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function () {
        return serverRuntime.isCookie;
      },
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function () {
        return serverRuntime.isSession;
      },
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function () {
        return serverRuntime.json;
      },
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function () {
        return serverRuntime.redirect;
      },
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function () {
        return react.Form;
      },
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function () {
        return react.Link;
      },
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function () {
        return react.Links;
      },
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function () {
        return react.LiveReload;
      },
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function () {
        return react.Meta;
      },
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function () {
        return react.NavLink;
      },
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function () {
        return react.Outlet;
      },
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function () {
        return react.PrefetchPageLinks;
      },
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function () {
        return react.RemixBrowser;
      },
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function () {
        return react.RemixServer;
      },
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function () {
        return react.Scripts;
      },
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function () {
        return react.ScrollRestoration;
      },
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function () {
        return react.useActionData;
      },
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function () {
        return react.useBeforeUnload;
      },
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function () {
        return react.useCatch;
      },
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function () {
        return react.useFetcher;
      },
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function () {
        return react.useFetchers;
      },
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function () {
        return react.useFormAction;
      },
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function () {
        return react.useHref;
      },
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function () {
        return react.useLoaderData;
      },
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function () {
        return react.useLocation;
      },
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function () {
        return react.useMatches;
      },
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function () {
        return react.useNavigate;
      },
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function () {
        return react.useNavigationType;
      },
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function () {
        return react.useOutlet;
      },
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function () {
        return react.useOutletContext;
      },
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function () {
        return react.useParams;
      },
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function () {
        return react.useResolvedPath;
      },
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function () {
        return react.useSearchParams;
      },
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function () {
        return react.useSubmit;
      },
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function () {
        return react.useTransition;
      },
    });
  },
});

// assets/logo.png
var require_logo = __commonJS({
  "assets/logo.png"(exports, module2) {
    module2.exports = "/build/_assets/logo-U3Q6XKRB.png";
  },
});

// assets/banner.png
var require_banner = __commonJS({
  "assets/banner.png"(exports, module2) {
    module2.exports = "/build/_assets/banner-NAOHMWAI.png";
  },
});

// server.js
__export(exports, {
  default: () => server_default,
});
init_react();
var import_vercel = __toModule(require("@remix-run/vercel"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes,
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var dotenv = require("dotenv");
dotenv.config();
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const markup = (0, import_server.renderToString)(
    /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
      context: remixContext,
      url: request.url,
    })
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  loader: () => loader,
  meta: () => meta,
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_app = __toModule(require("firebase/app"));

// app/components/FirebaseLogin.js
init_react();
var import_auth = __toModule(require("firebase/auth"));
var import_react = __toModule(require("react"));
var import_md = __toModule(require("react-icons/md"));
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
  return /* @__PURE__ */ React.createElement(
    "div",
    null,
    !user &&
      /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: googleLogin,
          className: "button is-black",
        },
        "Login"
      ),
    user &&
      /* @__PURE__ */ React.createElement(
        React.Fragment,
        null,
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `dropdown ${dropdownActive ? "is-active" : ""}`,
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "dropdown-trigger",
            },
            /* @__PURE__ */ React.createElement(
              "button",
              {
                className: "button is-black is-fullwidth ",
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu",
                onClick: () => {
                  setDropdownActive((activeState) => !activeState);
                },
              },
              /* @__PURE__ */ React.createElement(
                "span",
                null,
                user.displayName
              ),
              /* @__PURE__ */ React.createElement(
                "span",
                {
                  className: "icon",
                },
                /* @__PURE__ */ React.createElement(import_md.MdExpandMore, {
                  size: 20,
                })
              )
            )
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "dropdown-menu",
              id: "dropdown-menu",
              role: "menu",
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "dropdown-content",
              },
              /* @__PURE__ */ React.createElement(
                "a",
                {
                  onClick: logout,
                  className: "dropdown-item",
                },
                "Logout"
              )
            )
          )
        )
      )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\root.jsx
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
      measurementId: process.env.MEASUREMENT_ID,
    },
  };
};
function NavBar({ children }) {
  return /* @__PURE__ */ React.createElement(
    "nav",
    {
      className: "navbar is-black",
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "navbar-brand",
      },
      /* @__PURE__ */ React.createElement(
        import_remix2.Link,
        {
          className: "navbar-item is-size-5 ",
          to: "/home",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "has-text-white has-text-weight-bold",
          },
          "GAINS"
        ),
        "BRO"
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "navbar-item",
        },
        children
      )
    )
  );
}
function App() {
  const data = (0, import_remix2.useLoaderData)();
  const app = (0, import_app.initializeApp)(data.firebaseConfig);
  return /* @__PURE__ */ React.createElement(
    "html",
    {
      lang: "en",
    },
    /* @__PURE__ */ React.createElement(
      "head",
      null,
      /* @__PURE__ */ React.createElement("meta", {
        charSet: "utf-8",
      }),
      /* @__PURE__ */ React.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1",
      }),
      /* @__PURE__ */ React.createElement(import_remix2.Meta, null),
      /* @__PURE__ */ React.createElement(import_remix2.Links, null),
      /* @__PURE__ */ React.createElement("link", {
        href: "https://css.gg/css",
        rel: "stylesheet",
      }),
      /* @__PURE__ */ React.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css",
      }),
      /* @__PURE__ */ React.createElement("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      }),
      /* @__PURE__ */ React.createElement("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      }),
      /* @__PURE__ */ React.createElement("link", {
        href: "https://fonts.googleapis.com/css2?family=Merriweather&display=swap",
        rel: "stylesheet",
      }),
      /* @__PURE__ */ React.createElement("link", {
        rel: "icon",
        href: require_logo(),
      }),
      /* @__PURE__ */ React.createElement("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css",
      })
    ),
    /* @__PURE__ */ React.createElement(
      "body",
      null,
      /* @__PURE__ */ React.createElement(
        NavBar,
        null,
        /* @__PURE__ */ React.createElement(FirebaseLogin, {
          app,
        })
      ),
      /* @__PURE__ */ React.createElement(import_remix2.Outlet, null),
      /* @__PURE__ */ React.createElement(
        import_remix2.ScrollRestoration,
        null
      ),
      /* @__PURE__ */ React.createElement(import_remix2.Scripts, null),
      /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\locations.$locationId.jsx
var locations_locationId_exports = {};
__export(locations_locationId_exports, {
  action: () => action,
  default: () => LocationRoute,
  loader: () => loader2,
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_lodash = __toModule(require("lodash"));

// app/service/location.js
init_react();

// app/supabase.js
init_react();
var import_supabase_js = __toModule(require("@supabase/supabase-js"));
var supabase;
var supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
var supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
if (true) {
  supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
} else {
  if (!global.supabase) {
    global.supabase = (0, import_supabase_js.createClient)(
      supabaseUrl,
      supabaseAnonKey
    );
  }
  supabase = global.supabase;
}
var supabase_default = supabase;

// app/service/location.js
async function getLocations(user) {
  const { data, error } = await supabase_default
    .from("location")
    .select("*")
    .eq("user_id", user);
  return data;
}
async function getWorkoutsPerLocation(user) {
  const { data, error } = await supabase_default
    .from("workouts_per_location")
    .select("*")
    .eq("user_id", user);
  return data;
}
async function deleteLocation(locationId) {
  const { data, error } = await supabase_default
    .from("location")
    .delete()
    .match({ id: locationId });
  return data;
}
async function renameLocation(locationId, locationName) {
  const { data, error } = await supabase_default
    .from("location")
    .update({ name: locationName })
    .match({ id: locationId });
  return data;
}
async function addLocation(locationName, userId) {
  const { data, error } = await supabase_default
    .from("location")
    .insert({ name: locationName, user_id: userId });
  return data;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\locations.$locationId.jsx
var import_react2 = __toModule(require("react"));
var loader2 = async ({ request }) => {
  let url = new URL(request.url);
  const user = url.searchParams.get("user");
  const workoutsAtLocation = await getWorkoutsPerLocation(user);
  const getNameFromId = (0, import_lodash.mapValues)(
    (0, import_lodash.groupBy)(workoutsAtLocation, (e) => e.id),
    (e) => {
      var _a;
      return (_a = e[0]) == null ? void 0 : _a.name;
    }
  );
  const workoutsPerLocation = (0, import_lodash.mapValues)(
    (0, import_lodash.groupBy)(workoutsAtLocation, (e) => e.id),
    (e) => {
      var _a;
      return ((_a = e[0]) == null ? void 0 : _a.count) ?? 0;
    }
  );
  return [workoutsPerLocation, getNameFromId];
};
var action = async ({ request }) => {
  var _a;
  const form = await request.formData();
  if (request.method === "PUT") {
    const locationId = form.get("locationId");
    const locationName = form.get("locationName");
    await renameLocation(
      locationId,
      locationName.replace(/ /g, "_").toLowerCase()
    );
  } else if (request.method === "DELETE") {
    const deleted = await deleteLocation(form.get("locationId"));
    if (deleted !== null) {
      const user =
        (_a = deleted == null ? void 0 : deleted[0]) == null
          ? void 0
          : _a.user_id;
      return (0, import_remix3.redirect)(
        user ? `/locations?user=${user}` : "/"
      );
    }
  }
  return "Success";
};
function LocationRoute() {
  const { locationId } = (0, import_remix3.useParams)();
  const [workoutsPerLocation, getNameFromId] = (0,
  import_remix3.useLoaderData)();
  const fetcher = (0, import_remix3.useFetcher)();
  const [showInput, setShowInput] = (0, import_react2.useState)(false);
  const [renameInput, setRenameInput] = (0, import_react2.useState)(
    (0, import_lodash.startCase)(getNameFromId["" + locationId] ?? null)
  );
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "m-3 container box",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-5 mb-1",
        },
        (0, import_lodash.startCase)(getNameFromId["" + locationId])
      ),
      /* @__PURE__ */ React.createElement("i", null, getNameFromId[locationId]),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "mt-2",
        },
        "Number of workouts: ",
        workoutsPerLocation["" + locationId] ?? 0
      ),
      /* @__PURE__ */ React.createElement("hr", {
        className: "mt-2",
      }),
      showInput &&
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-item",
          },
          /* @__PURE__ */ React.createElement("input", {
            className: "input is-info",
            value: renameInput,
            onChange: (e) => setRenameInput(e.target.value),
          }),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "button is-light is-info ml-1",
              onClick: () => {
                fetcher.submit(
                  { locationId, locationName: renameInput },
                  { method: "PUT" }
                );
                setShowInput(false);
              },
            },
            "Submit"
          )
        ),
      !showInput &&
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "buttons level-right",
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "button is-light is-info",
              onClick: () => setShowInput((prev) => !prev),
            },
            "Rename"
          ),
          !workoutsPerLocation["" + locationId] &&
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "button is-light is-danger",
                onClick: () =>
                  fetcher.submit({ locationId }, { method: "DELETE" }),
              },
              "Delete"
            )
        )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics.jsx
var analytics_exports = {};
__export(analytics_exports, {
  default: () => AnalyticsRoute,
});
init_react();
var import_remix4 = __toModule(require_remix());
function AnalyticsRoute() {
  const [searchParams] = (0, import_remix4.useSearchParams)();
  const location = (0, import_remix4.useLocation)();
  const user = searchParams.get("user");
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "m-2",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-3 m-5",
        },
        "Analytics"
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "level",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-item ",
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "box container",
            },
            /* @__PURE__ */ React.createElement(
              "aside",
              {
                className: "menu",
              },
              /* @__PURE__ */ React.createElement(
                "p",
                {
                  className: "menu-label",
                },
                "Effort Stats"
              ),
              /* @__PURE__ */ React.createElement(
                "ul",
                {
                  className: "menu-list",
                },
                /* @__PURE__ */ React.createElement(
                  "li",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "a",
                    {
                      className:
                        location.pathname === "/analytics/trained-this-week"
                          ? "is-active"
                          : null,
                      href: `/analytics/trained-this-week?user=${user}`,
                    },
                    "Trained this week"
                  )
                ),
                /* @__PURE__ */ React.createElement(
                  "li",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "a",
                    {
                      className:
                        location.pathname === "/analytics/workouts-per-week"
                          ? "is-active"
                          : null,
                      href: `/analytics/workouts-per-week?user=${user}`,
                    },
                    "Workouts per Week"
                  )
                )
              ),
              /* @__PURE__ */ React.createElement("ul", {
                className: "menu-list",
              }),
              /* @__PURE__ */ React.createElement(
                "p",
                {
                  className: "menu-label",
                },
                "Strength Stats"
              ),
              /* @__PURE__ */ React.createElement(
                "ul",
                {
                  className: "menu-list",
                },
                /* @__PURE__ */ React.createElement(
                  "li",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "a",
                    {
                      className:
                        location.pathname === "/analytics/progressive-overload"
                          ? "is-active"
                          : null,
                      href: `/analytics/progressive-overload?user=${user}`,
                    },
                    "Progressive Overload"
                  )
                ),
                /* @__PURE__ */ React.createElement(
                  "li",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "a",
                    {
                      className:
                        location.pathname === "/analytics/personal-bests"
                          ? "is-active"
                          : null,
                      href: `/analytics/personal-bests?user=${user}`,
                    },
                    "Personal Bests"
                  )
                )
              )
            )
          )
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-item",
          },
          location.pathname !== "/analytics" &&
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "box container",
              },
              /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)
            )
        )
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\progressive-overload.jsx
var progressive_overload_exports = {};
__export(progressive_overload_exports, {
  default: () => ProgressRoute,
  loader: () => loader3,
});
init_react();

// app/service/exercises.js
init_react();
async function getExercises(muscle_group) {
  if (muscle_group) {
    const { data, error } = await supabase_default
      .from("exercise")
      .select("*")
      .eq("muscle_group", muscle_group);
    return data;
  } else {
    const { data, error } = await supabase_default.from("exercise").select("*");
    return data;
  }
}
async function getMuscleGroups() {
  const { data, error } = await supabase_default
    .from("distinct_muscle_groups")
    .select("*")
    .order("name");
  return data;
}
async function getExercisesForUser(userId) {
  const { data, error } = await supabase_default
    .from("exercises_for_user")
    .select("*")
    .eq("user_id", userId);
  return data;
}

// app/service/sets.js
init_react();
var import_dayjs = __toModule(require("dayjs"));
var weekOfYear = require("dayjs/plugin/weekOfYear");
import_dayjs.default.extend(weekOfYear);
async function deleteSet(formSet) {
  const delSet = await supabase_default
    .from("set")
    .delete()
    .match({ id: formSet.get("index") });
}
async function addSet(formSet) {
  var _a;
  const add = await supabase_default.from("set").insert([
    {
      workout_exercise: formSet.get("workout_exercise_id"),
      weight: null,
      repetitions: null,
      completed: false,
    },
  ]);
  return (_a = add == null ? void 0 : add.data) == null ? void 0 : _a[0];
}
async function updateSet(formSet) {
  let submissionSet = {
    weight: null,
    repetitions: null,
    completed: false,
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
  const { data, error } = await supabase_default
    .from("set")
    .update(submissionSet)
    .match({ id: formSet.get("index") });
}
async function getSetsForUser(userId, filter_start, filter_end) {
  const filter_date_start = filter_start
    ? (0, import_dayjs.default)(filter_start)
    : (0, import_dayjs.default)(
        (0, import_dayjs.default)()
          .week((0, import_dayjs.default)().week())
          .startOf("week")
          .startOf("day")
      );
  const filter_date_end = filter_end
    ? (0, import_dayjs.default)(filter_end)
    : (0, import_dayjs.default)();
  const { data, error } = await supabase_default
    .from("setsforworkout")
    .select("*")
    .eq("user_id", userId)
    .gte("datetime_start", filter_date_start)
    .lte("datetime_start", filter_date_end);
  return data;
}
async function getBestSetPerWorkoutExercise(userId, exerciseId) {
  if (exerciseId) {
    const { data, error } = await supabase_default
      .from("max_volume_for_workout_exercise")
      .select("*")
      .eq("user_id", userId)
      .eq("exercise_id", exerciseId);
    return data;
  } else {
    const { data, error } = await supabase_default
      .from("max_volume_for_workout_exercise")
      .select("*")
      .eq("user_id", userId);
    return data;
  }
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\progressive-overload.jsx
var import_remix5 = __toModule(require_remix());
var import_lodash3 = __toModule(require("lodash"));

// app/components/ProgressiveOverload.js
init_react();
var import_react3 = __toModule(require("react"));
var import_auto = __toModule(require("chart.js/auto"));
var import_chart = __toModule(require("chart.js"));
var import_dayjs2 = __toModule(require("dayjs"));
var import_lodash2 = __toModule(require("lodash"));
import_auto.default.register([import_chart.Tooltip]);
function ProgressiveOverload(props) {
  const [ctx, setCtx] = (0, import_react3.useState)(null);
  const exerciseProgress = (0, import_lodash2.sortBy)(
    props.progressiveOverload,
    (e) => e.datetime_start
  );
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
        labels: exerciseProgress.map((e) =>
          (0, import_dayjs2.default)(e.datetime_start).format("DD/MM/YY")
        ),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => e.max_volume),
            fill: true,
            tension: 0.1,
            borderColor: color,
            backgroundColor: color,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                return `Volume: ${exerciseProgress[dataIndex].max_volume} | Weight: ${exerciseProgress[dataIndex].weight} | Reps: ${exerciseProgress[dataIndex].repetitions}`;
              },
            },
          },
        },
      },
    });
  });
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    Object.keys(exerciseProgress).length > 0 &&
      /* @__PURE__ */ React.createElement("canvas", {
        id: "progressiveOverload",
      })
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\progressive-overload.jsx
var loader3 = async ({ request }) => {
  var _a;
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const exercises = await getExercisesForUser(user);
  let exercise =
    url.searchParams.get("exercise_id") ??
    ((_a = exercises[0]) == null ? void 0 : _a.id);
  const sets = await getBestSetPerWorkoutExercise(user, exercise);
  const setsByExercise = (0, import_lodash3.groupBy)(
    sets,
    (s) => s.exercise_id
  )[exercise];
  return { setsByExercise, exercises };
};
function ProgressRoute() {
  const { setsByExercise, exercises } = (0, import_remix5.useLoaderData)();
  const submit = (0, import_remix5.useSubmit)();
  const [searchParams] = (0, import_remix5.useSearchParams)();
  const singleExerciseChart = setsByExercise;
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-4 mb-2",
        },
        "Progressive Overload"
      ),
      /* @__PURE__ */ React.createElement("hr", {
        className: "mt-2 mb-3",
      }),
      singleExerciseChart &&
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "select mb-4 is-small",
          },
          /* @__PURE__ */ React.createElement(
            import_remix5.Form,
            {
              method: "get",
            },
            /* @__PURE__ */ React.createElement(
              "select",
              {
                className: "input",
                name: "exercise_id",
                onChange: (e) => {
                  submit({
                    exercise_id: e.target.value,
                    user: searchParams.getAll("user"),
                  });
                },
              },
              exercises.map((e) =>
                /* @__PURE__ */ React.createElement(
                  "option",
                  {
                    key: e.id,
                    value: e.id,
                  },
                  `${(0, import_lodash3.startCase)(e.name)} ${
                    (e == null ? void 0 : e.variant)
                      ? `(${(0, import_lodash3.startCase)(e.variant)})`
                      : ""
                  }`
                )
              )
            )
          )
        )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "container",
      },
      singleExerciseChart
        ? /* @__PURE__ */ React.createElement(ProgressiveOverload, {
            progressiveOverload: singleExerciseChart,
          })
        : "Nothing trained yet"
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\trained-this-week.jsx
var trained_this_week_exports = {};
__export(trained_this_week_exports, {
  action: () => action2,
  default: () => AnalyticsRoute2,
  loader: () => loader4,
});
init_react();
var import_remix6 = __toModule(require_remix());
var import_dayjs3 = __toModule(require("dayjs"));
var import_lodash5 = __toModule(require("lodash"));

// app/components/WeeklyTrainingSets.js
init_react();
var import_react4 = __toModule(require("react"));
var import_auto2 = __toModule(require("chart.js/auto"));
var import_lodash4 = __toModule(require("lodash"));
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
            backgroundColor: Object.values(sets).map(
              (e) =>
                `rgba(100,${Math.random() * 255},${Math.random() * 255},0.3)`
            ),
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    Object.keys(sets).length > 0 &&
      /* @__PURE__ */ React.createElement("canvas", {
        id: "weeklySets",
      })
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\trained-this-week.jsx
var weekOfYear2 = require("dayjs/plugin/weekOfYear");
import_dayjs3.default.extend(weekOfYear2);
var weekStartingOnDay = (0, import_dayjs3.default)()
  .week((0, import_dayjs3.default)().week())
  .startOf("week")
  .startOf("day");
var action2 = async ({ request }) => {};
var loader4 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const userWorkouts = await getSetsForUser(user, weekStartingOnDay);
  const exerciseList = await getExercises();
  return (0, import_lodash5.default)(userWorkouts)
    .groupBy((set) => set.muscle_group)
    .mapValues((e) => e.length);
};
function AnalyticsRoute2() {
  const weeklySets = (0, import_remix6.useLoaderData)();
  const renderTrainedThisWeek = () => {
    return /* @__PURE__ */ React.createElement(
      "div",
      null,
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-4 mb-2",
        },
        "Trained this Week"
      ),
      /* @__PURE__ */ React.createElement("hr", {
        className: "mt-2 mb-3",
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "container",
        },
        /* @__PURE__ */ React.createElement(
          "b",
          null,
          weekStartingOnDay.format("DD/MM/YYYY")
        ),
        " -",
        " ",
        /* @__PURE__ */ React.createElement(
          "b",
          null,
          weekStartingOnDay
            .add(1, "week")
            .subtract(1, "day")
            .format("DD/MM/YYYY")
        ),
        " ",
        /* @__PURE__ */ React.createElement("br", null),
        /* @__PURE__ */ React.createElement(
          "i",
          null,
          "Week ",
          (0, import_dayjs3.default)().week(),
          " of ",
          weekStartingOnDay.format("YYYY")
        )
      ),
      /* @__PURE__ */ React.createElement(WeeklyTrainingSets, {
        weeklySets,
      }),
      Object.keys(weeklySets).length === 0 && "Nothing trained yet this week"
    );
  };
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    renderTrainedThisWeek()
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\workouts-per-week.jsx
var workouts_per_week_exports = {};
__export(workouts_per_week_exports, {
  default: () => PersonalBestRoute,
  loader: () => loader5,
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/service/workouts.js
init_react();
async function createWorkout(workout) {
  var _a;
  let checkLocation = await supabase_default
    .from("location")
    .select("id")
    .match({ name: workout.location, user_id: workout.userId });
  let locationId;
  if (checkLocation.data.length === 0) {
    checkLocation = await supabase_default
      .from("location")
      .insert({ name: workout.location, user_id: workout.userId });
  }
  locationId = (_a = checkLocation.data) == null ? void 0 : _a[0].id;
  const { data, error } = await supabase_default.from("workout").insert([
    {
      name: workout.name,
      datetime_start: workout.datetime,
      datetime_end: void 0,
      location: locationId,
      user_id: workout.userId,
    },
  ]);
  return data[0].id;
}
async function deleteWorkout(workout_id) {
  const workout = await supabase_default
    .from("setsforworkout")
    .select("*")
    .eq("workout_id", workout_id);
  const associated_workout_exercises =
    "(" + workout.data.map((e) => e.workout_exercise_id).toString() + ")";
  const _deleteSets = await supabase_default
    .from("set")
    .delete()
    .filter("workout_exercise", "in", associated_workout_exercises);
  const _deleteWorkoutExercise = await supabase_default
    .from("workout_exercise")
    .delete()
    .match({ workout: workout_id });
  const _deleteWorkout = await supabase_default
    .from("workout")
    .delete()
    .match({ id: workout_id });
  return _deleteWorkout.data;
}
async function getWorkout(id) {
  let { data: workout, error } = await supabase_default
    .from("workouts_with_location")
    .select("*")
    .eq("id", id);
  return workout;
}
async function getExercisesForWorkout(id) {
  let { data, error } = await supabase_default
    .from("setsforworkout")
    .select("*")
    .eq("workout_id", id)
    .order("set_id");
  return data;
}
async function finishWorkout(id, datetime) {
  const { data, error } = await supabase_default
    .from("workout")
    .update({ datetime_end: datetime })
    .match({ id });
  return data;
}
async function getWorkoutsForUser(userId) {
  const { data, error } = await supabase_default
    .from("workouts_with_location")
    .select("*")
    .eq("user_id", userId);
  const workouts = data;
  return workouts.sort(
    (a, b) => new Date(b.datetime_start) - new Date(a.datetime_start)
  );
}
async function postExercisetoWorkout({ workout_id, exercise_id }) {
  var _a, _b, _c;
  const workoutExercise = await supabase_default
    .from("workout_exercise")
    .select("*, exercise!inner(*)")
    .eq("exercise", exercise_id)
    .eq("workout", workout_id);
  if (workoutExercise == null ? void 0 : workoutExercise.data) {
    return;
  }
  const addExercise = await supabase_default
    .from("workout_exercise")
    .insert([{ exercise: exercise_id, workout: workout_id }]);
  const addSet2 = await supabase_default.from("set").insert([
    {
      workout_exercise:
        (_b =
          (_a = addExercise == null ? void 0 : addExercise.data) == null
            ? void 0
            : _a[0]) == null
          ? void 0
          : _b.id,
      weight: null,
      repetitions: null,
      completed: false,
    },
  ]);
  return (_c = addSet2 == null ? void 0 : addSet2.data) == null
    ? void 0
    : _c[0];
}
async function deleteExerciseFromWorkout(form) {
  const deleteSets = await supabase_default
    .from("set")
    .delete()
    .match({ workout_exercise: form.get("workout_exercise_id") });
  const deleteWorkoutExercise = await supabase_default
    .from("workout_exercise")
    .delete()
    .match({ id: form.get("workout_exercise_id") });
  return;
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\workouts-per-week.jsx
var import_lodash7 = __toModule(require("lodash"));
var import_dayjs4 = __toModule(require("dayjs"));

// app/components/WorkoutsPerWeek.js
init_react();
var import_react5 = __toModule(require("react"));
var import_auto3 = __toModule(require("chart.js/auto"));
var import_lodash6 = __toModule(require("lodash"));
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
            backgroundColor: Object.values(props.workoutsPerWeek).map(
              (e) =>
                `rgba(100,${Math.random() * 255},${Math.random() * 255},0.3)`
            ),
          },
        ],
      },
      options: {
        indexAxis: "y",
        aspectRatio: 4 / Object.keys(props.workoutsPerWeek).length,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    Object.keys(props.workoutsPerWeek).length > 0 &&
      /* @__PURE__ */ React.createElement("canvas", {
        id: "workoutsPerWeek",
      })
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\workouts-per-week.jsx
var loader5 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  let workouts = await getWorkoutsForUser(user);
  workouts = (0, import_lodash7.default)(workouts)
    .groupBy((w) => (0, import_dayjs4.default)(w.datetime_start).week())
    .mapValues((e) => e.length)
    .value();
  let weeksToShow = Object.keys(workouts).map((e) => parseInt(e));
  weeksToShow.sort();
  weeksToShow = weeksToShow.slice(0, 10).map(String);
  return (0, import_lodash7.transform)(
    (0, import_lodash7.pick)(workouts, weeksToShow),
    (res, val, key) =>
      (res[
        `${(0, import_dayjs4.default)(
          (0, import_dayjs4.default)().week(key).startOf("week").startOf("day")
        ).format("DD/M/YY")} - ${(0, import_dayjs4.default)(
          (0, import_dayjs4.default)().week(key).endOf("week").startOf("day")
        ).format("DD/M/YY")}`
      ] = val)
  );
};
function PersonalBestRoute() {
  const workouts = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-4 mb-2",
        },
        "Workouts per Week"
      ),
      /* @__PURE__ */ React.createElement("hr", {
        className: "mt-2 mb-3",
      }),
      /* @__PURE__ */ React.createElement(WorkoutsPerWeek, {
        workoutsPerWeek: workouts,
      })
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\personal-bests.jsx
var personal_bests_exports = {};
__export(personal_bests_exports, {
  default: () => PersonalBestRoute2,
  loader: () => loader6,
});
init_react();
var import_remix8 = __toModule(require_remix());
var import_lodash9 = __toModule(require("lodash"));
var import_react7 = __toModule(require("react"));

// app/components/PersonalBest.js
init_react();
var import_react6 = __toModule(require("react"));
var import_auto4 = __toModule(require("chart.js/auto"));
var import_lodash8 = __toModule(require("lodash"));
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
        labels: props.bestSets.map((value) =>
          (0, import_lodash8.startCase)(
            `${value.exercise_name} ${value.variant ?? ""}`
          )
        ),
        datasets: [
          {
            label: "Weight",
            data: props.bestSets.map((value) => value.weight),
            borderRadius: 5,
            backgroundColor: props.bestSets.map((e) => {
              return `rgba(${100},${Math.random() * 255}, ${
                Math.random() * 255
              },0.4)`;
            }),
          },
        ],
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
              },
            },
          },
        },
      },
    });
  });
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    props.bestSets.length > 0 &&
      /* @__PURE__ */ React.createElement("canvas", {
        id: "personalRecords",
      })
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\analytics\personal-bests.jsx
var loader6 = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const sets = await getBestSetPerWorkoutExercise(user);
  const bestSetByExercise = (0, import_lodash9.default)(sets)
    .groupBy((s) => s.exercise_id)
    .mapValues((e) => (0, import_lodash9.maxBy)(e, (s) => s.weight))
    .value();
  return Object.values(bestSetByExercise);
};
function PersonalBestRoute2() {
  const listBestSets = (0, import_remix8.useLoaderData)();
  const [singleExerciseChart, setSingleExerciseChart] = (0,
  import_react7.useState)(listBestSets);
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-4 mb-1",
        },
        "Personal Bests"
      ),
      /* @__PURE__ */ React.createElement("hr", {
        className: "mt-2 mb-3",
      }),
      /* @__PURE__ */ React.createElement(
        "i",
        null,
        "Weight of set with max volume"
      )
    ),
    listBestSets.length
      ? /* @__PURE__ */ React.createElement(PersonalRecords, {
          bestSets: listBestSets,
        })
      : "No workouts yet"
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\locations.jsx
var locations_exports = {};
__export(locations_exports, {
  action: () => action3,
  default: () => ManageLocationsRoute,
  loader: () => loader7,
});
init_react();
var import_remix10 = __toModule(require_remix());
var import_lodash10 = __toModule(require("lodash"));
var import_react9 = __toModule(require("react"));

// app/components/UserAuthorisedComponent.js
init_react();
var import_remix9 = __toModule(require_remix());
var import_auth2 = __toModule(require("firebase/auth"));
var import_react8 = __toModule(require("react"));
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
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    props.children
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\locations.jsx
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
  return /* @__PURE__ */ React.createElement(
    UserAuthorisedComponent,
    {
      setUser,
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "container",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "m-5",
        },
        /* @__PURE__ */ React.createElement(
          "h4",
          {
            className: "title is-3",
          },
          "Saved Locations"
        ),
        locations.map((e) =>
          /* @__PURE__ */ React.createElement(
            import_remix10.Link,
            {
              to: `./${e.id}/?user=${searchParams.get("user")}`,
              className: "box",
            },
            /* @__PURE__ */ React.createElement(
              "div",
              null,
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: "title is-6",
                },
                (0, import_lodash10.startCase)(e.name)
              )
            )
          )
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "mt-5",
          },
          /* @__PURE__ */ React.createElement("b", null, "Add Location"),
          /* @__PURE__ */ React.createElement("hr", {
            class: "dropdown-divider",
          }),
          /* @__PURE__ */ React.createElement(
            "form",
            {
              method: "post",
              className: "level is-mobile form-control",
            },
            /* @__PURE__ */ React.createElement("input", {
              className: "input is-info",
              name: "locationName",
            }),
            /* @__PURE__ */ React.createElement("input", {
              className: "input is-info",
              name: "userId",
              type: "hidden",
              value: searchParams.get("user"),
            }),
            /* @__PURE__ */ React.createElement(
              "button",
              {
                className: "button is-light is-info ml-1",
                type: "submit",
              },
              "Submit"
            )
          )
        )
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workouts.jsx
var workouts_exports = {};
__export(workouts_exports, {
  default: () => ViewWorkoutRoute,
  loader: () => loader8,
});
init_react();
var import_remix11 = __toModule(require_remix());
var import_bs = __toModule(require("react-icons/bs"));
var import_lodash11 = __toModule(require("lodash"));
var import_dayjs5 = __toModule(require("dayjs"));
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
  return /* @__PURE__ */ React.createElement(
    UserAuthorisedComponent,
    {
      idPredicate: (id) => id === userId,
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: " m-5 container",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-3 mb-3",
        },
        "Workouts"
      ),
      workouts.length === 0 && "No workouts yet",
      workouts.map((workout) =>
        /* @__PURE__ */ React.createElement(
          import_remix11.Link,
          {
            className: "box",
            to: `/workout/${workout.id}/currentExercises`,
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "level is-mobile",
            },
            /* @__PURE__ */ React.createElement(
              "div",
              null,
              /* @__PURE__ */ React.createElement(
                "p",
                {
                  className: "title mb-2 is-5",
                },
                import_dayjs5.default.utc(workout.datetime_start).toDateString()
              ),
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: "title mb-2 is-6",
                },
                import_dayjs5.default
                  .utc(workout.datetime_start)
                  .toLocaleTimeString(),
                " - ",
                workout.name
              ),
              (0, import_lodash11.startCase)(workout.location_name)
            ),
            workout.datetime_end
              ? /* @__PURE__ */ React.createElement(
                  import_bs.BsCheckCircleFill,
                  {
                    size: 40,
                    className: "m-4 p-1",
                  }
                )
              : /* @__PURE__ */ React.createElement(import_bs.BsClockHistory, {
                  size: 40,
                  className: "m-4 p-1",
                })
          )
        )
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout.jsx
var workout_exports = {};
__export(workout_exports, {
  default: () => NewWorkoutRoute,
});
init_react();
var import_remix12 = __toModule(require_remix());
function NewWorkoutRoute() {
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      UserAuthorisedComponent,
      null,
      /* @__PURE__ */ React.createElement(import_remix12.Outlet, null)
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout\$workoutId.jsx
var workoutId_exports = {};
__export(workoutId_exports, {
  action: () => action4,
  default: () => StartNewWorkoutRoute,
  loader: () => loader9,
});
init_react();
var import_remix13 = __toModule(require_remix());
var import_lodash12 = __toModule(require("lodash"));
var import_react11 = __toModule(require("react"));

// app/components/Stopwatch.js
init_react();
var import_react10 = __toModule(require("react"));
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
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      className: "stopwatch",
    },
    time > 24 * 36 * 60 * 1e3 &&
      (Math.floor(time / 24 / 36 / 60 / 1e3) % 24) + "day(s) ",
    /* @__PURE__ */ import_react10.default.createElement(
      "span",
      null,
      ("0" + (Math.floor(time / 36e5) % 60)).slice(-2),
      ":"
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "span",
      null,
      ("0" + Math.floor((time / 6e4) % 60)).slice(-2),
      ":"
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      "span",
      null,
      ("0" + Math.floor((time / 1e3) % 60)).slice(-2)
    )
  );
};
var Stopwatch_default = Stopwatch;

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout\$workoutId.jsx
var import_dayjs6 = __toModule(require("dayjs"));
var utc2 = require("dayjs/plugin/utc");
import_dayjs6.default.extend(utc2);
var loader9 = async ({ params }) => {
  const workout = await getWorkout(params.workoutId);
  return workout;
};
var action4 = async ({ request, params }) => {
  if (request.method == "POST") {
    const form = await request.formData();
    const workout = await finishWorkout(
      form.get("workout_id"),
      form.get("end")
    );
    return workout;
  }
  if (request.method == "DELETE") {
    const form = await request.formData();
    const workout = await deleteWorkout(form.get("workout_id"));
    return (0, import_remix13.redirect)("/");
  }
};
function toTime(seconds) {
  var date = new Date(null);
  date.setMilliseconds(seconds);
  return date.toISOString().split("T")[1].split(".")[0];
}
function workoutMetaData(workout) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "hero is-light mt-3",
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "hero-body ",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "title is-4 mb-3",
        },
        workout == null ? void 0 : workout.name
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "icon-text m-1",
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            className: "icon",
          },
          /* @__PURE__ */ React.createElement("i", {
            className: "gg-pin",
          })
        ),
        /* @__PURE__ */ React.createElement(
          "span",
          null,
          (0, import_lodash12.startCase)(
            workout == null ? void 0 : workout.location_name
          )
        )
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "icon-text m-1",
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            className: "icon",
          },
          /* @__PURE__ */ React.createElement("i", {
            className: "gg-alarm",
          })
        ),
        /* @__PURE__ */ React.createElement(
          "span",
          {
            id: "start",
          },
          `${import_dayjs6.default
            .utc(workout == null ? void 0 : workout.datetime_start)
            .local()
            .format("dddd, DD MMM YY, HH:mm")}
           `
        )
      )
    )
  );
}
function StartNewWorkoutRoute() {
  const workout = (0, import_remix13.useLoaderData)()[0];
  const fetcher = (0, import_remix13.useFetcher)();
  const [userId, setUserId] = (0, import_react11.useState)();
  return /* @__PURE__ */ React.createElement(
    UserAuthorisedComponent,
    {
      setUserId,
      idPredicate: (id) => id === workout.user_id,
    },
    /* @__PURE__ */ React.createElement(
      React.Fragment,
      null,
      workoutMetaData(workout),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "p-5 container",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "message-body notification mb-3",
            style: {
              display: "flex",
              justifyContent: "space-between",
              verticalAlign: "middle",
            },
          },
          (workout == null ? void 0 : workout.datetime_end)
            ? /* @__PURE__ */ React.createElement(
                React.Fragment,
                null,
                /* @__PURE__ */ React.createElement(
                  "div",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "div",
                    {
                      className: "title is-6",
                    },
                    "Workout Completed. "
                  ),
                  toTime(
                    (0, import_dayjs6.default)(
                      workout == null ? void 0 : workout.datetime_end
                    ) -
                      (0, import_dayjs6.default)(
                        workout == null ? void 0 : workout.datetime_start
                      )
                  )
                )
              )
            : /* @__PURE__ */ React.createElement(
                "div",
                null,
                /* @__PURE__ */ React.createElement(
                  "div",
                  null,
                  /* @__PURE__ */ React.createElement(
                    "div",
                    {
                      className: "title is-6 mb-0",
                    },
                    "Time Elapsed:"
                  ),
                  /* @__PURE__ */ React.createElement(
                    "div",
                    {
                      className: "is-family-secondary has-text-weight-medium",
                      id: "time",
                    },
                    /* @__PURE__ */ React.createElement(Stopwatch_default, {
                      running: true,
                      initialTime:
                        (0, import_dayjs6.default)() -
                        import_dayjs6.default.utc(workout.datetime_start),
                    })
                  )
                ),
                /* @__PURE__ */ React.createElement("div", null)
              ),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "buttons",
            },
            !workout.datetime_end &&
              /* @__PURE__ */ React.createElement(
                "button",
                {
                  className: "button is-light is-success is-small",
                  onClick: () =>
                    fetcher.submit(
                      {
                        workout_id: workout.id,
                        end: (0, import_dayjs6.default)().utc(),
                      },
                      { method: "POST" }
                    ),
                },
                "Finish"
              ),
            /* @__PURE__ */ React.createElement(
              "button",
              {
                className: "button is-light is-danger is-small",
                onClick: () =>
                  fetcher.submit(
                    {
                      workout_id: workout.id,
                    },
                    { method: "DELETE" }
                  ),
              },
              "Delete"
            )
          )
        ),
        /* @__PURE__ */ React.createElement(import_remix13.Outlet, null)
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout\$workoutId\__addExerciseParent.jsx
var addExerciseParent_exports = {};
__export(addExerciseParent_exports, {
  default: () => ExercisesRouteIndex,
  loader: () => loader10,
});
init_react();
var import_lodash13 = __toModule(require("lodash"));
var import_remix14 = __toModule(require_remix());
var loader10 = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};
function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = (0, import_remix14.useSearchParams)();
  const muscle_groups = (0, import_remix14.useLoaderData)();
  const navigate = (0, import_remix14.useNavigate)();
  const { workoutId } = (0, import_remix14.useParams)();
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "m-5",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "buttons",
        },
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => {
              navigate(`/workout/${workoutId}/addExercise`);
            },
            className: `button is-light is-small ${
              searchParams.get("muscle_group") ?? "is-active"
            }`,
          },
          "All"
        ),
        muscle_groups.map((muscle) =>
          /* @__PURE__ */ React.createElement(
            "button",
            {
              key: muscle,
              onClick: () => {
                setSearchParams({ muscle_group: muscle.name });
              },
              className: `button is-light is-small ${
                searchParams.get("muscle_group") === muscle.name
                  ? "is-active"
                  : ""
              }`,
            },
            (0, import_lodash13.startCase)(muscle.name)
          )
        )
      ),
      /* @__PURE__ */ React.createElement(import_remix14.Outlet, null)
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout\$workoutId\__addExerciseParent\addExercise.jsx
var addExercise_exports = {};
__export(addExercise_exports, {
  action: () => action5,
  default: () => AddExerciseRoute,
  loader: () => loader11,
});
init_react();
var import_remix15 = __toModule(require_remix());
var import_lodash14 = __toModule(require("lodash"));
var import_react12 = __toModule(require("react"));
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
    exercise_id: exercise,
  });
  return (0, import_remix15.redirect)(`/workout/${workoutId}/currentExercises`);
};
function AddExerciseRoute() {
  const { workoutId } = (0, import_remix15.useParams)();
  const [selected, setSelected] = (0, import_react12.useState)();
  const exercises = (0, import_remix15.useLoaderData)();
  const fetcher = (0, import_remix15.useFetcher)();
  const exNameToIdMap = (0, import_lodash14.mapValues)(
    (0, import_lodash14.groupBy)(
      exercises,
      (exercise) =>
        `${(0, import_lodash14.startCase)(exercise.name)} ${
          (exercise == null ? void 0 : exercise.variant)
            ? `(${(0, import_lodash14.startCase)(exercise.variant)})`
            : ""
        }`
    ),
    (e) => e[0].id
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    null,
    /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "control",
      },
      /* @__PURE__ */ React.createElement("input", {
        type: "text",
        autoComplete: "off",
        className: `input is-small ${selected === null && "is-danger"}`,
        list: "exercises",
        name: "exercise",
        onChange: (selected2) => {
          setSelected(exNameToIdMap[selected2.target.value] ?? null);
        },
      }),
      /* @__PURE__ */ React.createElement(
        "datalist",
        {
          id: "exercises",
        },
        exercises.map((exercise) =>
          /* @__PURE__ */ React.createElement("option", {
            key: exercise.id,
            value: `${(0, import_lodash14.startCase)(exercise.name)} ${
              (exercise == null ? void 0 : exercise.variant)
                ? `(${(0, import_lodash14.startCase)(exercise.variant)})`
                : ""
            }`,
          })
        )
      )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "level is-mobile mt-3",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "level-left",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-item",
          },
          /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () => {
                fetcher.submit({ exercise: selected }, { method: "POST" });
              },
              className: "button is-small is-dark ",
              disabled: !selected,
            },
            "Add"
          )
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-item",
          },
          /* @__PURE__ */ React.createElement(
            import_remix15.Link,
            {
              to: `/workout/${workoutId}/currentExercises`,
            },
            /* @__PURE__ */ React.createElement(
              "button",
              {
                className: "button is-small is-light",
              },
              "Cancel"
            )
          )
        )
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout\$workoutId\currentExercises.jsx
var currentExercises_exports = {};
__export(currentExercises_exports, {
  action: () => action6,
  default: () => CurrentExercisesRoute,
  loader: () => loader12,
});
init_react();
var import_remix16 = __toModule(require_remix());
var import_lodash15 = __toModule(require("lodash"));

// app/components/SetInput.js
init_react();
var import_cg = __toModule(require("react-icons/cg"));
var import_ri = __toModule(require("react-icons/ri"));
var import_react13 = __toModule(require("react"));
function SetInput(props) {
  const [weight, setWeight] = (0, import_react13.useState)(props.weight);
  const [repetitions, setRepetitions] = (0, import_react13.useState)(
    props.repetitions
  );
  const [completed, setCompleted] = (0, import_react13.useState)(
    props.completed
  );
  const updateDb = (weight2, repetitions2, completed2, index) =>
    props.submitFunc(weight2, repetitions2, completed2, index);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "container mb-2 p-2",
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "1vh",
        backgroundColor: props.completed ? "#ebfffc" : "#f5f5f5",
      },
    },
    /* @__PURE__ */ React.createElement(
      "div",
      null,
      /* @__PURE__ */ React.createElement("input", {
        className: "input is-small",
        type: "number",
        placeholder: "Weight (kg)",
        value: weight,
        onChange: (e) => setWeight(e.target.value),
        onBlur: () => {
          updateDb(weight, repetitions, completed, props.index);
        },
      })
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "ml-1",
      },
      /* @__PURE__ */ React.createElement("input", {
        className: "input is-small",
        type: "number",
        placeholder: "Reps",
        value: repetitions,
        onChange: (e) => setRepetitions(e.target.value),
        onBlur: () => {
          updateDb(weight, repetitions, completed, props.index);
        },
      })
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "ml-1",
      },
      /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "button is-danger is-light is-small",
          onClick: props.deleteFunc,
        },
        /* @__PURE__ */ React.createElement(import_cg.CgClose, {
          size: 15,
        })
      )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "ml-1",
      },
      /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => {
            setCompleted((complete) => {
              updateDb(weight, repetitions, !complete, props.index);
              return !complete;
            });
          },
          className: `button is-small is-light ${
            props.completed ? "is-primary" : ""
          }`,
        },
        /* @__PURE__ */ React.createElement(import_ri.RiCheckFill, {
          size: 15,
        })
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\workout\$workoutId\currentExercises.jsx
var loader12 = async ({ params }) => {
  var _a;
  const setsForWorkout = await getExercisesForWorkout(params.workoutId);
  const userId =
    (_a = setsForWorkout == null ? void 0 : setsForWorkout[0]) == null
      ? void 0
      : _a.user_id;
  let bestSetByExercise;
  if (userId) {
    const sets = await getBestSetPerWorkoutExercise(userId);
    bestSetByExercise = (0, import_lodash15.default)(sets)
      .groupBy((s) => s.exercise_id)
      .mapValues((e) => (0, import_lodash15.maxBy)(e, (s) => s.weight))
      .value();
  }
  const exerciseSets = (0, import_lodash15.groupBy)(
    setsForWorkout,
    (set) =>
      `${(0, import_lodash15.startCase)(set.exercise_name)} ${
        set.variant ? `(${(0, import_lodash15.startCase)(set.variant)})` : ""
      }`
  );
  return { exerciseSets, bestSetByExercise };
};
var action6 = async ({ request }) => {
  const form = await request.formData();
  switch (request.method) {
    case "PUT":
      await updateSet(form);
      break;
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
  const { exerciseSets, bestSetByExercise } = (0,
  import_remix16.useLoaderData)();
  const { workoutId } = (0, import_remix16.useParams)();
  const fetcher = (0, import_remix16.useFetcher)();
  const renderExerciseForm = (exercise_name, sets) => {
    const exerciseId = sets[0].exercise_id;
    const exerciseSetForm = {
      workout_id: workoutId,
      exercise_name,
      workout_exercise_id: sets[0].workout_exercise_id,
    };
    const submitSetForm = (weight, repetitions, completed, index) =>
      fetcher.submit(
        {
          workout_id: workoutId,
          exercise_name,
          repetitions,
          weight,
          index,
          completed,
        },
        { method: "PUT" }
      );
    const deleteSetForm = (index) =>
      fetcher.submit(
        {
          workout_id: workoutId,
          exercise_name,
          type: "set",
          index,
        },
        { method: "DELETE" }
      );
    const previousBestSet = bestSetByExercise[exerciseId];
    return /* @__PURE__ */ React.createElement(
      React.Fragment,
      null,
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "box mb-3",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "title is-5 mb-1",
          },
          exercise_name
        ),
        previousBestSet &&
          /* @__PURE__ */ React.createElement(
            "p",
            null,
            /* @__PURE__ */ React.createElement("i", null, " PB:"),
            " ",
            previousBestSet.weight,
            " x",
            " ",
            previousBestSet.repetitions,
            " | ",
            previousBestSet.max_volume
          ),
        /* @__PURE__ */ React.createElement("hr", {
          className: "mb-4 mt-3",
        }),
        sets.map((set) =>
          /* @__PURE__ */ React.createElement(SetInput, {
            key: set.set_id,
            index: set.set_id,
            weight: set.weight,
            completed: set.completed,
            repetitions: set.repetitions,
            deleteFunc: () => deleteSetForm(set.set_id),
            submitFunc: submitSetForm,
          })
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level is-mobile mt-5",
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              style: { width: "85%" },
            },
            /* @__PURE__ */ React.createElement(
              "button",
              {
                onClick: () =>
                  fetcher.submit(exerciseSetForm, { method: "POST" }),
                className: "button is-fullwidth is-black is-small tile",
              },
              "+ Set"
            )
          ),
          /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () =>
                fetcher.submit(
                  __spreadProps(__spreadValues({}, exerciseSetForm), {
                    type: "exercise",
                  }),
                  { method: "DELETE" }
                ),
              className: "button is-light is-small ml-2",
            },
            "Delete"
          )
        )
      )
    );
  };
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    Object.entries(exerciseSets).map(([exercise_name, sets], exIndex) =>
      /* @__PURE__ */ React.createElement(
        "div",
        {
          key: exIndex,
        },
        renderExerciseForm(exercise_name, sets)
      )
    ),
    /* @__PURE__ */ React.createElement(import_remix16.Outlet, null),
    /* @__PURE__ */ React.createElement(
      import_remix16.Link,
      {
        to: `/workout/${workoutId}/addExercise`,
      },
      /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "mt-5 button is-black is-fullwidth is-small",
        },
        "+ Exercise"
      )
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\create.jsx
var create_exports = {};
__export(create_exports, {
  action: () => action7,
  default: () => CreateWorkoutRoute,
  loader: () => loader13,
});
init_react();
var import_remix17 = __toModule(require_remix());
var import_lodash16 = __toModule(require("lodash"));
var import_react14 = __toModule(require("react"));
var import_dayjs7 = __toModule(require("dayjs"));
var utc3 = require("dayjs/plugin/utc");
import_dayjs7.default.extend(utc3);
var action7 = async ({ request }) => {
  var _a;
  const form = await request.formData();
  let userId = form.get("userId");
  let name = form.get("name");
  let datetime = form.get("datetime");
  let location = form.get("location");
  location =
    ((_a = location == null ? void 0 : location.toLowerCase()) == null
      ? void 0
      : _a.replace(/ /g, "_")) ?? null;
  const workoutObjectId = await createWorkout({
    name,
    datetime,
    location,
    userId,
  });
  return (0, import_remix17.redirect)(
    `/workout/${workoutObjectId}/currentExercises`
  );
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
  return /* @__PURE__ */ React.createElement(
    UserAuthorisedComponent,
    {
      setUser,
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "container",
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "m-5",
        },
        /* @__PURE__ */ React.createElement(
          "h4",
          {
            className: "title is-3",
          },
          "New Workout"
        ),
        /* @__PURE__ */ React.createElement(
          import_remix17.Form,
          {
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
              datetime.setAttribute(
                "value",
                (0, import_dayjs7.default)(
                  `${event.target.datetimeLocal.value}:00`
                ).utc()
              );
              const name = document.createElement("input");
              name.setAttribute("type", "hidden");
              name.setAttribute("name", "name");
              name.setAttribute(
                "value",
                event.target.namePlaceholder.value === ""
                  ? event.target.namePlaceholder.placeholder
                  : event.target.namePlaceholder
              );
              event.target.append(userId);
              event.target.append(datetime);
              event.target.append(name);
              submit(event.target);
            },
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "field is-horizontal",
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "field-label is-normal",
              },
              /* @__PURE__ */ React.createElement(
                "label",
                {
                  className: "label",
                },
                "Name/Desc"
              )
            ),
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "field-body",
              },
              /* @__PURE__ */ React.createElement(
                "p",
                {
                  className: "control",
                },
                /* @__PURE__ */ React.createElement("input", {
                  className: "input",
                  name: "namePlaceholder",
                  type: "text",
                  placeholder: `${(0, import_dayjs7.default)().format(
                    "dddd"
                  )} workout`,
                })
              )
            )
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "field is-horizontal",
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "field-label is-normal",
              },
              /* @__PURE__ */ React.createElement(
                "label",
                {
                  className: "label",
                },
                "Date"
              )
            ),
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "field-body",
              },
              /* @__PURE__ */ React.createElement(
                "p",
                {
                  className: "control",
                },
                /* @__PURE__ */ React.createElement("input", {
                  type: "datetime-local",
                  className: "input",
                  name: "datetimeLocal",
                  defaultValue: getCurrentDateTime(),
                })
              )
            )
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "field is-horizontal",
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "field-label is-normal",
              },
              /* @__PURE__ */ React.createElement(
                "label",
                {
                  className: "label",
                },
                "Location"
              )
            ),
            /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "field-body ",
              },
              /* @__PURE__ */ React.createElement(
                "p",
                {
                  className: "control",
                },
                /* @__PURE__ */ React.createElement("input", {
                  onChange: (e) => {
                    !e.target.value
                      ? setHasLocation(false)
                      : setHasLocation(true);
                  },
                  type: "text",
                  autoComplete: "off",
                  className: `input select `,
                  list: "locations",
                  name: "location",
                }),
                /* @__PURE__ */ React.createElement(
                  "datalist",
                  {
                    id: "locations",
                    className: "",
                  },
                  locations.map((item) =>
                    /* @__PURE__ */ React.createElement("option", {
                      key: item.name,
                      value: (0, import_lodash16.startCase)(item.name),
                    })
                  )
                )
              )
            )
          ),
          /* @__PURE__ */ React.createElement("hr", null),
          /* @__PURE__ */ React.createElement(
            "button",
            {
              className: "button is-dark ",
              type: "submit",
              disabled: !hasLocation,
            },
            "Create New"
          )
        )
      ),
      /* @__PURE__ */ React.createElement(import_remix17.Outlet, null)
    )
  );
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader14,
});
init_react();
var import_remix18 = __toModule(require_remix());
var loader14 = async () => {
  return (0, import_remix18.redirect)("/home");
};
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
}

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeRoute,
  links: () => links,
});
init_react();
var import_react15 = __toModule(require("react"));
var import_ri2 = __toModule(require("react-icons/ri"));
var import_gi = __toModule(require("react-icons/gi"));
var import_md2 = __toModule(require("react-icons/md"));

// app/styles/styles.module.css
var styles_module_default = "/build/_assets/styles.module-PNDMMM4N.css";

// route:C:\Users\reonh\Documents\Github\Gym Tracker\gym-tracker\remix-app\app\routes\home.jsx
function links() {
  return [{ rel: "stylesheet", href: styles_module_default }];
}
function HomeRoute() {
  const [userId, setUserId] = (0, import_react15.useState)();
  const [user, setUser] = (0, import_react15.useState)();
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      UserAuthorisedComponent,
      {
        setUserId,
        setUser,
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "m-6 level",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-left bounce container is-hidden-desktop",
          },
          /* @__PURE__ */ React.createElement("img", {
            src: require_banner(),
          })
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "level-left bounce container is-hidden-touch",
            style: { width: "60vw" },
          },
          /* @__PURE__ */ React.createElement("img", {
            src: require_banner(),
          })
        ),
        user
          ? /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "level-right container",
              },
              /* @__PURE__ */ React.createElement(
                "nav",
                {
                  className: "panel is-black m-5 ",
                },
                /* @__PURE__ */ React.createElement(
                  "p",
                  {
                    className: "panel-heading",
                  },
                  "Hi, ",
                  user && user.displayName
                ),
                /* @__PURE__ */ React.createElement("a", null),
                /* @__PURE__ */ React.createElement(
                  "a",
                  {
                    className: "panel-block is-active",
                    href: `/create?user=${userId}`,
                  },
                  /* @__PURE__ */ React.createElement(
                    "span",
                    {
                      className: "panel-icon",
                    },
                    /* @__PURE__ */ React.createElement(
                      import_ri2.RiAddBoxFill,
                      {
                        size: 15,
                      }
                    )
                  ),
                  "Create Workout"
                ),
                /* @__PURE__ */ React.createElement(
                  "a",
                  {
                    className: "panel-block",
                    href: `/analytics/trained-this-week?user=${userId}`,
                  },
                  /* @__PURE__ */ React.createElement(
                    "span",
                    {
                      className: "panel-icon",
                    },
                    /* @__PURE__ */ React.createElement(
                      import_ri2.RiLineChartFill,
                      {
                        size: 15,
                      }
                    )
                  ),
                  "Analytics"
                ),
                /* @__PURE__ */ React.createElement(
                  "a",
                  {
                    className: "panel-block",
                    href: `/workouts?user=${userId}`,
                  },
                  /* @__PURE__ */ React.createElement(
                    "span",
                    {
                      className: "panel-icon",
                    },
                    /* @__PURE__ */ React.createElement(import_gi.GiStrong, {
                      size: 15,
                    })
                  ),
                  "Workouts"
                ),
                /* @__PURE__ */ React.createElement(
                  "a",
                  {
                    className: "panel-block is-active",
                    href: `/locations?user=${userId}`,
                  },
                  /* @__PURE__ */ React.createElement(
                    "span",
                    {
                      className: "panel-icon",
                    },
                    /* @__PURE__ */ React.createElement(
                      import_md2.MdLocationOn,
                      {
                        size: 15,
                      }
                    )
                  ),
                  "Locations"
                )
              )
            )
          : /* @__PURE__ */ React.createElement(
              "div",
              {
                className: "level-right container",
              },
              /* @__PURE__ */ React.createElement(
                "div",
                null,
                /* @__PURE__ */ React.createElement(
                  "div",
                  {
                    className: "title is-1 mb-1",
                    style: { fontFamily: "Merriweather" },
                  },
                  "Workout, Smarter."
                ),
                /* @__PURE__ */ React.createElement(
                  "div",
                  null,
                  "Please log in to continue..."
                )
              )
            )
      )
    )
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = {
  version: "eb186dfe",
  entry: {
    module: "/build/entry.client-JGEBBYP3.js",
    imports: ["/build/_shared/chunk-FQXDGX3B.js"],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/root-W6NODNEF.js",
      imports: [
        "/build/_shared/chunk-PPWNMPJE.js",
        "/build/_shared/chunk-54PQCP5E.js",
        "/build/_shared/chunk-PWOSZ5HQ.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/analytics": {
      id: "routes/analytics",
      parentId: "root",
      path: "analytics",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/analytics-ZFZZ6VJ7.js",
      imports: void 0,
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/analytics/personal-bests": {
      id: "routes/analytics/personal-bests",
      parentId: "routes/analytics",
      path: "personal-bests",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/analytics/personal-bests-VIK2JEYI.js",
      imports: [
        "/build/_shared/chunk-HZLR3UFU.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/analytics/progressive-overload": {
      id: "routes/analytics/progressive-overload",
      parentId: "routes/analytics",
      path: "progressive-overload",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/analytics/progressive-overload-GBEGUEPS.js",
      imports: [
        "/build/_shared/chunk-4Y6ULEPK.js",
        "/build/_shared/chunk-HZLR3UFU.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/analytics/trained-this-week": {
      id: "routes/analytics/trained-this-week",
      parentId: "routes/analytics",
      path: "trained-this-week",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/analytics/trained-this-week-N74HRG4J.js",
      imports: [
        "/build/_shared/chunk-4Y6ULEPK.js",
        "/build/_shared/chunk-HZLR3UFU.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/analytics/workouts-per-week": {
      id: "routes/analytics/workouts-per-week",
      parentId: "routes/analytics",
      path: "workouts-per-week",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/analytics/workouts-per-week-I3VKW7ZW.js",
      imports: [
        "/build/_shared/chunk-4Y6ULEPK.js",
        "/build/_shared/chunk-HZLR3UFU.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/create": {
      id: "routes/create",
      parentId: "root",
      path: "create",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/create-YAOORXEQ.js",
      imports: [
        "/build/_shared/chunk-JE3C3F3Y.js",
        "/build/_shared/chunk-ZZ5DGN3H.js",
        "/build/_shared/chunk-4Y6ULEPK.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/home": {
      id: "routes/home",
      parentId: "root",
      path: "home",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/home-K3A5WHD4.js",
      imports: [
        "/build/_shared/chunk-KPULZDJM.js",
        "/build/_shared/chunk-ZZ5DGN3H.js",
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: true,
      caseSensitive: void 0,
      module: "/build/routes/index-2ULCPPPT.js",
      imports: void 0,
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/locations": {
      id: "routes/locations",
      parentId: "root",
      path: "locations",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/locations-TEPBARUF.js",
      imports: [
        "/build/_shared/chunk-ZZ5DGN3H.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/locations.$locationId": {
      id: "routes/locations.$locationId",
      parentId: "root",
      path: "locations/:locationId",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/locations.$locationId-G75LXA7A.js",
      imports: ["/build/_shared/chunk-RDC6QFFT.js"],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/workout": {
      id: "routes/workout",
      parentId: "root",
      path: "workout",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/workout-EU6OPAR7.js",
      imports: ["/build/_shared/chunk-ZZ5DGN3H.js"],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/workout/$workoutId": {
      id: "routes/workout/$workoutId",
      parentId: "routes/workout",
      path: ":workoutId",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/workout/$workoutId-VHXYETDO.js",
      imports: [
        "/build/_shared/chunk-JE3C3F3Y.js",
        "/build/_shared/chunk-PWOSZ5HQ.js",
        "/build/_shared/chunk-4Y6ULEPK.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/workout/$workoutId/__addExerciseParent": {
      id: "routes/workout/$workoutId/__addExerciseParent",
      parentId: "routes/workout/$workoutId",
      path: void 0,
      index: void 0,
      caseSensitive: void 0,
      module:
        "/build/routes/workout/$workoutId/__addExerciseParent-VTBATKMG.js",
      imports: void 0,
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/workout/$workoutId/__addExerciseParent/addExercise": {
      id: "routes/workout/$workoutId/__addExerciseParent/addExercise",
      parentId: "routes/workout/$workoutId/__addExerciseParent",
      path: "addExercise",
      index: void 0,
      caseSensitive: void 0,
      module:
        "/build/routes/workout/$workoutId/__addExerciseParent/addExercise-65VXAZLY.js",
      imports: ["/build/_shared/chunk-RDC6QFFT.js"],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/workout/$workoutId/currentExercises": {
      id: "routes/workout/$workoutId/currentExercises",
      parentId: "routes/workout/$workoutId",
      path: "currentExercises",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/workout/$workoutId/currentExercises-TLXV46PR.js",
      imports: [
        "/build/_shared/chunk-KPULZDJM.js",
        "/build/_shared/chunk-54PQCP5E.js",
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/workouts": {
      id: "routes/workouts",
      parentId: "root",
      path: "workouts",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/workouts-IHUFVZWJ.js",
      imports: [
        "/build/_shared/chunk-JE3C3F3Y.js",
        "/build/_shared/chunk-ZZ5DGN3H.js",
        "/build/_shared/chunk-4Y6ULEPK.js",
        "/build/_shared/chunk-RDC6QFFT.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
  },
  url: "/build/manifest-EB186DFE.js",
};

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports,
  },
  "routes/locations.$locationId": {
    id: "routes/locations.$locationId",
    parentId: "root",
    path: "locations/:locationId",
    index: void 0,
    caseSensitive: void 0,
    module: locations_locationId_exports,
  },
  "routes/analytics": {
    id: "routes/analytics",
    parentId: "root",
    path: "analytics",
    index: void 0,
    caseSensitive: void 0,
    module: analytics_exports,
  },
  "routes/analytics/progressive-overload": {
    id: "routes/analytics/progressive-overload",
    parentId: "routes/analytics",
    path: "progressive-overload",
    index: void 0,
    caseSensitive: void 0,
    module: progressive_overload_exports,
  },
  "routes/analytics/trained-this-week": {
    id: "routes/analytics/trained-this-week",
    parentId: "routes/analytics",
    path: "trained-this-week",
    index: void 0,
    caseSensitive: void 0,
    module: trained_this_week_exports,
  },
  "routes/analytics/workouts-per-week": {
    id: "routes/analytics/workouts-per-week",
    parentId: "routes/analytics",
    path: "workouts-per-week",
    index: void 0,
    caseSensitive: void 0,
    module: workouts_per_week_exports,
  },
  "routes/analytics/personal-bests": {
    id: "routes/analytics/personal-bests",
    parentId: "routes/analytics",
    path: "personal-bests",
    index: void 0,
    caseSensitive: void 0,
    module: personal_bests_exports,
  },
  "routes/locations": {
    id: "routes/locations",
    parentId: "root",
    path: "locations",
    index: void 0,
    caseSensitive: void 0,
    module: locations_exports,
  },
  "routes/workouts": {
    id: "routes/workouts",
    parentId: "root",
    path: "workouts",
    index: void 0,
    caseSensitive: void 0,
    module: workouts_exports,
  },
  "routes/workout": {
    id: "routes/workout",
    parentId: "root",
    path: "workout",
    index: void 0,
    caseSensitive: void 0,
    module: workout_exports,
  },
  "routes/workout/$workoutId": {
    id: "routes/workout/$workoutId",
    parentId: "routes/workout",
    path: ":workoutId",
    index: void 0,
    caseSensitive: void 0,
    module: workoutId_exports,
  },
  "routes/workout/$workoutId/__addExerciseParent": {
    id: "routes/workout/$workoutId/__addExerciseParent",
    parentId: "routes/workout/$workoutId",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: addExerciseParent_exports,
  },
  "routes/workout/$workoutId/__addExerciseParent/addExercise": {
    id: "routes/workout/$workoutId/__addExerciseParent/addExercise",
    parentId: "routes/workout/$workoutId/__addExerciseParent",
    path: "addExercise",
    index: void 0,
    caseSensitive: void 0,
    module: addExercise_exports,
  },
  "routes/workout/$workoutId/currentExercises": {
    id: "routes/workout/$workoutId/currentExercises",
    parentId: "routes/workout/$workoutId",
    path: "currentExercises",
    index: void 0,
    caseSensitive: void 0,
    module: currentExercises_exports,
  },
  "routes/create": {
    id: "routes/create",
    parentId: "root",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports,
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports,
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports,
  },
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({
  build: server_build_exports,
  mode: "production",
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
