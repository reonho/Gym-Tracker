import { Link, Outlet, useLocation, useNavigate, useSearchParams } from "remix";
import { useEffect } from "react";
import UserAuthorisedComponent from "../components/UserAuthorisedComponent";

export default function MeasurementRoute() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user");

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/measurements") {
      navigate(`/measurements/history?user=${userId}&measurement_id=1`);
    }
  }, [location, navigate, userId]);

  return (
    <UserAuthorisedComponent idPredicate={(id) => id === userId}>
      <div className="container">
        <div className="m-2 mt-5">
          <h4 className="title is-3">Body Measurements</h4>
          <div className="tabs">
            <ul>
              <li
                className={
                  location.pathname === "/measurements/history"
                    ? "is-active"
                    : null
                }
              >
                <Link
                  to={`/measurements/history?user=${userId}&measurement_id=1`}
                >
                  Records
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/measurements/add" ? "is-active" : null
                }
              >
                <Link to={`/measurements/add?user=${userId}`}>
                  Log Measurement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </UserAuthorisedComponent>
  );
}