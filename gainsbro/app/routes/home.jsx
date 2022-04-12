import { useState } from "react";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { motion } from "framer-motion";
import FirebaseLogin from "~/components/FirebaseLogin";
import { Link } from "remix";

export default function HomeRoute() {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <UserAuthorisedComponent setUserId={setUserId} setUser={setUser}>
        <div className="m-6 level">
          <div className="level-left bounce container is-hidden-desktop">
            <img src={require("../../assets/banner.png")}></img>
          </div>
          <div
            className="level-left bounce container is-hidden-touch"
            style={{ width: "60vw" }}
          >
            <img src={require("../../assets/banner.png")}></img>
          </div>
          {user ? (
            <div className="level-right ">
              <nav className="">
                <p className="box soraFont primary has-text-white title mb-2 is-4">
                  Hello, {user && user.displayName}
                </p>
                <a></a>
                <div className="p-1">
                  <Link
                    className="soraFont box p-4 mb-2"
                    to={`/create?user=${userId}`}
                  >
                    💪 Create Workout
                  </Link>
                  <a
                    className="box p-4 mb-2 soraFont "
                    href={`/analytics/?user=${userId}`}
                  >
                    📈 Analytics
                  </a>
                  <a
                    className="box p-4 mb-2 soraFont"
                    href={`/workouts?user=${userId}`}
                  >
                    📅 Workouts
                  </a>
                  <a
                    className="box p-4 mb-2 soraFont "
                    href={`/locations?user=${userId}`}
                  >
                    🏪 Locations
                  </a>
                  <a
                    className="box p-4 mb-2 soraFont "
                    href={`/measurements?user=${userId}`}
                  >
                    🍑 Measurements
                  </a>
                </div>
              </nav>
            </div>
          ) : (
            <div className="level-right container soraFont">
              <div>
                <div className="title is-1 mb-1">Workout, Smarter.</div>
                <div>Please log in to continue...</div>
                <br />
                <FirebaseLogin />
              </div>
            </div>
          )}
        </div>
      </UserAuthorisedComponent>
    </motion.div>
  );
}
