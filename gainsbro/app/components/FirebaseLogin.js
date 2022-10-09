import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

export default function FirebaseLogin(props) {
  const [user, setUser] = useState({});
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
    result ? setUser(result) : setUser();
  });

  useEffect(() => {
    if (user == null) {
      localStorage.removeItem("user");
    } else if (Object.keys(user).length !== 0) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      {user?.displayName === undefined && (
        <button onClick={googleLogin} className="button is-black soraFont">
          Login
        </button>
      )}
      {user && (
        <>
          <div className={`dropdown ${dropdownActive ? "is-active" : ""}`}>
            <div className="dropdown-trigger">
              <button
                className="button is-black is-fullwidth soraFont "
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
              <a onClick={logout} className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
