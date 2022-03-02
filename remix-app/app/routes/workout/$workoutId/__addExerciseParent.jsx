import { startCase } from "lodash";
import { useParams, Outlet, useLoaderData, useSearchParams } from "remix";
import { getMuscleGroups } from "~/service/exercises";

export let loader = async () => {
  const muscle_groups = await getMuscleGroups();
  return muscle_groups;
};

export default function ExercisesRouteIndex() {
  let [searchParams, setSearchParams] = useSearchParams();
  const muscle_groups = useLoaderData();

  return (
    <>
      <div class="m-5">
        <div class="buttons">
          {muscle_groups.map((muscle) => (
            <button
              onClick={() => {
                setSearchParams({ muscle_group: muscle.muscle_group });
              }}
              class={`button is-light ${
                searchParams.get("muscle_group") === muscle.muscle_group
                  ? "is-active"
                  : ""
              }`}
            >
              {startCase(muscle.muscle_group)}
            </button>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}
