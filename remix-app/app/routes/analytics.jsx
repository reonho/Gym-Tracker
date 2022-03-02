import { Outlet, useSearchParams, useLocation, Link } from "remix";
export default function AnalyticsRoute() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const user = searchParams.get("user");

  return (
    <>
      <div className="m-5">
        <div className="title is-3 ml-2">Analytics</div>
        <div className="level">
          <div className="level-item m-3">
            <div className="box container">
              <aside class="menu">
                <p class="menu-label">Routine Stats</p>
                <ul class="menu-list">
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
                </ul>
                <ul class="menu-list"></ul>
                <p class="menu-label">Strength Stats</p>
                <ul class="menu-list">
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
                    <a>Personal Records</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="level-item m-3">
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
