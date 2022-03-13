import { CgClose } from "react-icons/cg";
import { RiCheckFill } from "react-icons/ri";
import { useState } from "react";
import { debounce } from "lodash";

export default function SetInput(props) {
  const [weight, setWeight] = useState(props.weight);
  const [repetitions, setRepetitions] = useState(props.repetitions);
  const [completed, setCompleted] = useState(props.completed);
  const updateDb = debounce(
    (weight, repetitions, completed, index) =>
      props.submitFunc(weight, repetitions, completed, index),
    200,
    {
      leading: true,
      trailing: true,
    }
  );
  return (
    <div
      className="container mb-2 p-2"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "1vh",
        backgroundColor: props.completed ? "#ebfffc" : "#f5f5f5",
      }}
    >
      <div>
        <input
          className="input is-small"
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => {
            setWeight(() => {
              updateDb(e.target.value, repetitions, completed, props.index);
              return e.target.value;
            });
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
            setRepetitions(() => {
              updateDb(weight, e.target.value, completed, props.index);
              return e.target.value;
            });
          }}
        />
      </div>
      <div className="ml-1">
        <button
          className="button is-danger is-light is-small"
          onClick={props.deleteFunc}
        >
          <CgClose size={15} />
        </button>
      </div>
      <div className="ml-1">
        <button
          onClick={() => {
            setCompleted((complete) => {
              updateDb(weight, repetitions, !complete, props.index);
              return !complete;
            });
          }}
          className={`button is-small is-light ${
            props.completed ? "is-primary" : ""
          }`}
        >
          <RiCheckFill size={15} />
        </button>
      </div>
    </div>
  );
}
