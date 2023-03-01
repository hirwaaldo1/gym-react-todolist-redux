import React, { useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useDispatch, useSelector } from "react-redux";
import ListTodos from "./components/ListTodos";
import { add, clear, remove } from "./features/toDoList";

export default function Todos() {
  const toDoList = useSelector((state) => state.toDolist);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  return (
    <div className="flex justify-center items-center font-bold text-2xl">
      <div className="w-[40%] text-center">
        <h1 className="text-6xl">Todos</h1>
        <form
          className="flex items-center text-lg w-full  shadow-xl border p-3 rounded-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={inputValue || ""}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="add Todos"
            className="w-full outline-none"
          />
          <button
            type="submit"
            onClick={() => {
              if (inputValue) {
                dispatch(add({ title: inputValue }));
                setInputValue("");
              }
            }}
          >
            <FeatherIcon
              icon="plus-circle"
              fill="blue"
              stroke="white"
              size={40}
            />
          </button>
        </form>
        {toDoList?.length === 0 && <p className="text-2xl">No Todos</p>}
        {toDoList?.map((item, i) => {
          return (
            <ListTodos
              key={item.id}
              {...item}
              deleteTodo={() => dispatch(remove({ id: item.id }))}
            />
          );
        })}
        {toDoList?.length !== 0 && (
          <button
            onClick={() => dispatch(clear())}
            className="text-base p-1.5 mt-10 rounded-full bg-red-600"
          >
            <FeatherIcon icon="x" stroke="white" />
          </button>
        )}
      </div>
    </div>
  );
}
