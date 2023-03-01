import { useState } from "react";
import { useDispatch } from "react-redux";
import { edit } from "../features/todos";
import FeatherIcon from "feather-icons-react";
export default function ListTodos({ title, id, deleteTodo }) {
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const dispatch = useDispatch();
  function editTodo() {
    dispatch(edit({ id: id, title: editValue }));
    setIsEdit(!isEdit);
  }
  return (
    <div className="flex justify-between items-center py-3 border-b">
      {isEdit ? (
        <div className="flex gap-10 items-center">
          <input
            type="text"
            onChange={(e) => setEditValue(e.target.value)}
            className="border-2 border-gray-500 pt-1 pb-2 px-3 rounded-md"
            defaultValue={editValue}
            autoFocus
          />
          <button className="bg-gray-300 p-2 rounded-full" onClick={editTodo}>
            <FeatherIcon icon="save" fill="white" />
          </button>
        </div>
      ) : (
        <div className="flex gap-10 items-center">
          <input type="checkbox" onClick={() => setIsCheck(!isCheck)} />
          {isCheck ? <p className="line-through">{title}</p> : <p>{title}</p>}
        </div>
      )}
      <div className="flex gap-2">
        <button className="text-red-600" onClick={() => deleteTodo(id)}>
          <FeatherIcon icon="trash-2" />
        </button>
        <button
          className="text-green-600 cursor-pointer"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? (
            <FeatherIcon icon="save" onClick={editTodo} />
          ) : (
            <FeatherIcon icon="edit-2" />
          )}
        </button>
      </div>
    </div>
  );
}
