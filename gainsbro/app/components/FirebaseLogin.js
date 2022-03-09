import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

export default function FirebaseLogin(props) {
  const [user, setUser] = useState();
  const [dropdownActive, setDropdownActive] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(props.app);

  function googleLogin() {
    signInWithRedirect(auth, provider);
  }
  function logout() {
    auth.signOut();
  }

  onAuthStateChanged(auth, (result) => {
    result ? setUser(result) : setUser(null);
  });

  return (
    <div>
      {!user && (
        <button onClick={googleLogin} className="button is-black">
          Login
        </button>
      )}
      {user && (
        <>
          <div className={`dropdown ${dropdownActive ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
              <button
                className="button is-black is-fullwidth "
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={() => {
                  setDropdownActive((activeState) => !activeState);
                }}
              >
                <span>{user.displayName}</span>
                <span className="icon">
                  <MdExpandMore size={20} />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a onClick={logout} className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
