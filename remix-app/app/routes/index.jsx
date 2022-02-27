import FirebaseLogin from "~/components/FirebaseLogin.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Index() {
  const auth = getAuth();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {/* <FirebaseLogin /> */}
    </div>
  );
}
