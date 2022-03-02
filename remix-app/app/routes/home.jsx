import { useEffect, useState } from "react";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { RiAddBoxFill, RiLineChartFill } from "react-icons/ri";
import { GiStrong } from "react-icons/gi";
import styles from "../styles/styles.module.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function HomeRoute() {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  return (
    <>
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
            <div className="level-right container">
              <nav class="panel is-black m-5 ">
                <p class="panel-heading">Hi, {user && user.displayName}</p>
                <a></a>
                <a class="panel-block is-active" href={`/create`}>
                  <span class="panel-icon">
                    <RiAddBoxFill size={15} />
                  </span>
                  Create Workout
                </a>
                <a
                  class="panel-block"
                  href={`/analytics/trained-this-week?user=${userId}`}
                >
                  <span class="panel-icon">
                    <RiLineChartFill size={15} />
                  </span>
                  Analytics
                </a>
                <a class="panel-block" href={`/workouts?user=${userId}`}>
                  <span class="panel-icon">
                    <GiStrong size={15} />
                  </span>
                  Workouts
                </a>
              </nav>
            </div>
          ) : (
            <div className="level-right container">
              <div>
                <div
                  className="title is-1 mb-1"
                  style={{ fontFamily: "Merriweather" }}
                >
                  Workout, Smarter.
                </div>
                <div>Please log in to continue...</div>
              </div>
            </div>
          )}
        </div>
      </UserAuthorisedComponent>
    </>
  );
}
