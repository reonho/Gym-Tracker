import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { initializeApp } from "firebase/app";

hydrate(<RemixBrowser />, document);

require("dotenv").config();

export const app = initializeApp(firebaseConfig);
