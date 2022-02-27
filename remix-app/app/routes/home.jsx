import { useEffect, useState } from "react";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";
import { RiAddBoxFill, RiLineChartFill } from "react-icons/ri";
import { GiStrong } from "react-icons/gi";

export default function HomeRoute() {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  return (
    <>
      <UserAuthorisedComponent setUserId={setUserId} setUser={setUser}>
        <div className="container m-5">
          <nav class="panel is-black">
            <p class="panel-heading">Welcome, {user && user.displayName}</p>
            <a></a>
            <a class="panel-block is-active" href={`/create`}>
              <span class="panel-icon">
                <RiAddBoxFill size={15} />
              </span>
              Create Workout
            </a>
            <a class="panel-block">
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
      </UserAuthorisedComponent>
    </>
  );
}
