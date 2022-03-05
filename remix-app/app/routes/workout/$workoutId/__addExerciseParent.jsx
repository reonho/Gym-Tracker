import { startCase } from "lodash";
import {
  useParams,
  useNavigate,
  Outlet,
  useLoaderData,
  useSearchParams,
} from "remix";
import { getMuscleGroups } from "~/service/exercises";

export let loader = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};

export default function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = useSearchParams();
  const muscle_groups = useLoaderData();
  const navigate = useNavigate();
  const { workoutId } = useParams();

  return (
    <>
      <div className="m-5">
        <div className="buttons">
          <button
            onClick={() => {
              navigate(`/workout/${workoutId}/addExercise`);
            }}
            className={`button is-light is-small ${
              searchParams.get("muscle_group") ?? "is-active"
            }`}
          >
            All
          </button>
          {muscle_groups.map((muscle) => (
            <button
              key={muscle}
              onClick={() => {
                setSearchParams({ muscle_group: muscle.name });
              }}
              className={`button is-light is-small ${
                searchParams.get("muscle_group") === muscle.name
                  ? "is-active"
                  : ""
              }`}
            >
              {startCase(muscle.name)}
            </button>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}
