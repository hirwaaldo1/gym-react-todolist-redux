import React from "react";
export default function ListTodos({ title, id, deleteTodo }) {
  const [isCheck, setIsCheck] = React.useState(false);
  return (
    <div className="flex justify-between items-center py-3 border-b">
      <div className="flex gap-10 items-center">
        <input type="checkbox" onClick={() => setIsCheck(!isCheck)} />
        {isCheck ? <p className="line-through">{title}</p> : <p>{title}</p>}
      </div>
      <button className="text-red-600" onClick={() => deleteTodo(id)}>
        D
      </button>
    </div>
  );
}
