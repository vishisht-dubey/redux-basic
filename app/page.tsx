"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, currentCount } from "@/store/slice/counterSlice";
import { User } from "../store/slice/formSlice";
import {
  currentFormData,
  updateFirstName,
  updateLastName,
} from "@/store/slice/formSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

// const data = {};

export default function Home() {
  const value = useAppSelector<number>((state) => {
    return state.counter.value;
  });
  const dispatch = useAppDispatch();
  const form = useAppSelector<User>((state) => {
    return state.form;
  });
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
          <span>{value}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <input
          type="text"
          placeholder={form.firstName}
          onChange={(event) => {
            dispatch(updateFirstName(event.target.value));
          }}
        />
        <br />
        <input
          type="text"
          placeholder={form.lastName}
          onChange={(event) => {
            dispatch(updateLastName(event.target.value));
          }}
        />
        <span>
          {form.firstName} {form.lastName}
        </span>
      </div>
    </main>
  );
}
