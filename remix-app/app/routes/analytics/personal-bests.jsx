import { getBestSetPerWorkoutExercise } from "~/service/sets";
import { useLoaderData } from "remix";
import lodash, { maxBy } from "lodash";
import { useState } from "react";
import PersonalBests from "../../components/PersonalBest";

export let loader = async ({ request }) => {
  let url = new URL(request.url);
  let user = url.searchParams.get("user");
  const sets = await getBestSetPerWorkoutExercise(user);
  const bestSetByExercise = lodash(sets)
    .groupBy((s) => s.exercise_id)
    .mapValues((e) => maxBy(e, (s) => s.weight))
    .value();

  return Object.values(bestSetByExercise);
};

export default function PersonalBestRoute() {
  const listBestSets = useLoaderData();

  const [singleExerciseChart, setSingleExerciseChart] = useState(listBestSets);

  return (
    <>
      <div className="">
        <div className="title is-4 mb-1">Personal Bests</div>
        <hr className="mt-2 mb-3" />
        <i>Weight of set with max volume</i>
      </div>

      {listBestSets.length ? (
        <PersonalBests bestSets={listBestSets} />
      ) : (
        "No workouts yet"
      )}
    </>
  );
}
