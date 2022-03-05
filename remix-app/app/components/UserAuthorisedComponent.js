import { useNavigate } from "remix";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function UserAuthorisedComponent(props) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const auth = getAuth();
  onAuthStateChanged(auth, (result) => {
    result ? setUser(result) : setUser(null);
  });

  useEffect(async () => {
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

  return <>{props.children}</>;
}
