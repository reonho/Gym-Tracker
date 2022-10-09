import { Outlet, useSearchParams, useLocation, useNavigate } from "remix";
import UserAuthorisedComponent from "~/components/UserAuthorisedComponent";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getWeekNumber } from "~/utils/utils";
import { motion } from "framer-motion";

var weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

export default function AnalyticsRoute() {
  const [searchParams] = useSearchParams();
  const [minimised, setMinimised] = useState(true);
  const userId = searchParams.get("user");
  const location = useLocation();
  const user = searchParams.get("user");
  const date = new Date();
  const weekYear = `${dayjs().year()}-W${getWeekNumber(date)}`;

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/analytics/") {
      navigate(`/analytics/trained-this-week?user=${user}&week=${weekYear}`);
    }
  }, [location, navigate, user]);
  return (
    <>
      <UserAuthorisedComponent idPredicate={(id) => id === userId}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="m-1">
              <div className="title is-3 mt-5 mb-3">Analytics</div>

              <div className="level">
                <div className="level-item">
                  <div className="box container">
                    {minimised ? (
                      <aside className="menu mb-3">
                        <p className="menu-label">Effort Stats</p>
                        <ul className="menu-list">
                          <li>
                            <a
                              className={
                                location.pathname ===
                                "/analytics/trained-this-week"
                                  ? "is-active"
                                  : null
                              }
                              href={`/analytics/trained-this-week?user=${user}&week=${weekYear}`}
                            >
                              Trained this Week
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                location.pathname ===
                                "/analytics/workouts-per-week"
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
                              href={`/analytics/schedule?user=${user}&week=${weekYear}`}
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
                                location.pathname ===
                                "/analytics/progressive-overload"
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
                                location.pathname ===
                                "/analytics/personal-bests"
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
                    ) : null}
                    <button
                      className="button is-fullwidth is-small"
                      onClick={() => setMinimised((e) => !e)}
                    >
                      {minimised ? "Minimise Menu" : "Show Full Menu"}
                    </button>
                  </div>
                </div>
                <div className="level-item">
                  {location.pathname !== "/analytics" && (
                    <div className="box container m-2">
                      <Outlet />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </UserAuthorisedComponent>
    </>
  );
}
