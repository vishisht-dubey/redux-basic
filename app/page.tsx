"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, currentCount } from "@/store/slice/counterSlice";
import { change, currentName } from "../store/slice/counterName";
import {
  currentFormData,
  updateFirstName,
  updateLastName,
} from "@/store/slice/formSlice";

const data = {};

export default function Home() {
  const count = useSelector(currentCount);
  const current = useSelector(currentName);
  const formData = useSelector(currentFormData);
  const dispatch = useDispatch();
  console.log(formData);
  return (
    <main>
      <div>Hello World</div>
      <br />
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <input
          type="text"
          placeholder={formData.firstName}
          onChange={(event) => {
            dispatch(updateFirstName(event.target.value));
          }}
        />
        <br />
        <input
          type="text"
          placeholder={formData.lastName}
          onChange={(event) => {
            dispatch(updateLastName(event.target.value));
          }}
        />
        <span>
          {formData.firstName} {formData.lastName}
        </span>
      </div>
    </main>
  );
}
