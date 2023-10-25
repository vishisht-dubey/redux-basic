"use client";
import { increment, decrement, currentCount } from "@/store/slice/counterSlice";
import {
  currentFormData,
  updateFirstName,
  updateLastName,
} from "@/store/slice/formSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useFetchAllProductsQuery,useFetchParticularProductQuery } from "@/fetchApi/counterApi";
// import { isGeneratorFunction } from "util/types";
// const data = {};

export default function Home() {
  const value = useAppSelector(currentCount);
  const dispatch = useAppDispatch();
  const form = useAppSelector(currentFormData);
  // const { data, isError } = useFetchParticularProductQuery(3);
  // console.log(isError);
  // console.log(data);
  const x = useFetchAllProductsQuery();
  console.log(x)
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
