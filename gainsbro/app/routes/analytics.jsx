import { Outlet, useSearchParams, useLocation, Link } from "remix";
export default function AnalyticsRoute() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const user = searchParams.get("user");

  return (
    <>
      <div className="m-2">
        <div className="title is-3 m-5">Analytics</div>
        <div className="level">
          <div className="level-item ">
            <div className="box container">
              <aside className="menu">
                <p className="menu-label">Effort Stats</p>
                <ul className="menu-list">
                  <li>
                    <a
                      className={
                        location.pathname === "/analytics/trained-this-week"
                          ? "is-active"
                          : null
                      }
                      href={`/analytics/trained-this-week?user=${user}`}
                    >
                      Trained this week
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        location.pathname === "/analytics/workouts-per-week"
                          ? "is-active"
                          : null
                      }
                      href={`/analytics/workouts-per-week?user=${user}`}
                    >
                      Workouts per Week
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        location.pathname === "/analytics/schedule"
                          ? "is-active"
                          : null
                      }
                      href={`/analytics/schedule?user=${user}`}
                    >
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        location.pathname === "/analytics/statistics"
                          ? "is-active"
                          : null
                      }
                      href={`/analytics/statistics?user=${user}`}
                    >
                      Statistics
                    </a>
                  </li>
                </ul>
                <ul className="menu-list"></ul>
                <p className="menu-label">Strength Stats</p>
                <ul className="menu-list">
                  <li>
                    <a
                      className={
                        location.pathname === "/analytics/progressive-overload"
                          ? "is-active"
                          : null
                      }
                      href={`/analytics/progressive-overload?user=${user}`}
                    >
                      Progressive Overload
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        location.pathname === "/analytics/personal-bests"
                          ? "is-active"
                          : null
                      }
                      href={`/analytics/personal-bests?user=${user}`}
                    >
                      Personal Bests
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="level-item">
            {location.pathname !== "/analytics" && (
              <div className="box container">
                <Outlet />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
