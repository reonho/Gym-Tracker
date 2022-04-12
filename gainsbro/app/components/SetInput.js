import { CgClose } from "react-icons/cg";
import { RiCheckFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function SetInput(props) {
  const [weight, setWeight] = useState(props.weight);
  const [repetitions, setRepetitions] = useState(props.repetitions);
  const [completed, setCompleted] = useState(props.completed);
  const [deleting, setDeleting] = useState(false);
  const updateDb = debounce(
    (weight, repetitions, completed, index) =>
      props.submitFunc(weight, repetitions, completed, index),
    200,
    {
      leading: true,
      trailing: true,
    }
  );
  useEffect(() => {
    weight && repetitions && completed
      ? updateDb(weight, repetitions, completed, props.index)
      : null;
  }, [weight, repetitions, completed]);

  return !deleting ? (
    <div
      className="container mb-2 p-2"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "1vh",
        backgroundColor: completed ? "#ebfffc" : "#f5f5f5",
      }}
    >
      <div>
        <input
          className="input is-small"
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </div>

      <div className="ml-1">
        <input
          className="input is-small"
          type="number"
          placeholder="Reps"
          value={repetitions}
          onChange={(e) => {
            setRepetitions(e.target.value);
          }}
        />
      </div>
      <div className="ml-1">
        <button
          className="button is-danger is-light is-small"
          onClick={() => {
            setDeleting(true);
            props.deleteFunc();
          }}
        >
          <CgClose size={15} />
        </button>
      </div>
      <div className="ml-1">
        <button
          onClick={() => {
            setCompleted((complete) => {
              return !complete;
            });
          }}
          className={`button is-small is-light ${
            completed ? "is-primary" : ""
          }`}
        >
          <RiCheckFill size={15} />
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}
