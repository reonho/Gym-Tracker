import { getExercisesForUser } from "~/service/exercises";
import { getBestSetPerWorkoutExercise } from "~/service/sets";
import { Form, useLoaderData, useSubmit, useSearchParams } from "remix";
import lodash, { startCase, groupBy } from "lodash";
import ProgressiveOverload from "../../components/ProgressiveOverload";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const exercises = await getExercisesForUser(user);

  let exercise = url.searchParams.get("exercise_id") ?? exercises[0]?.id;
  const sets = await getBestSetPerWorkoutExercise(user, exercise);

  const setsByExercise = groupBy(sets, (s) => s.exercise_id)[exercise];
  return { setsByExercise, exercises };
};

export default function ProgressRoute() {
  const { setsByExercise, exercises } = useLoaderData();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const singleExerciseChart = setsByExercise;

  return (
    <>
      <div className="">
        <div className="title is-4 mb-2">Progressive Overload</div>
        <hr className="mt-2 mb-3" />
        {singleExerciseChart && (
          <div className="select mb-4 is-small">
            <Form method="get">
              <select
                className="input"
                name="exercise_id"
                onChange={(e) => {
                  submit({
                    exercise_id: e.target.value,
                    user: searchParams.getAll("user"),
                  });
                }}
              >
                {exercises.map((e) => (
                  <option key={e.id} value={e.id}>
                    {`${startCase(e.name)} ${
                      e?.variant ? `(${startCase(e.variant)})` : ""
                    }`}
                  </option>
                ))}
              </select>
            </Form>
          </div>
        )}
      </div>

      <div className="container">
        {singleExerciseChart ? (
          <ProgressiveOverload progressiveOverload={singleExerciseChart} />
        ) : (
          "Nothing trained yet"
        )}
      </div>
    </>
  );
}
