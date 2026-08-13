import { useState } from "react";
import { v4 } from "uuid";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
      <Input>
        type="text" placeholder="Digite o titulo da tarefa" value={title}
        onChange={(Event) => setTitle(Event.target.value)}
      </Input>

      <Input>
        type="text" placeholder="Digite a descrição da tarefa" value=
        {description}
        onChange={(Event) => setDescription(Event.target.value)}
      </Input>

      <button
        className="text-white bg-slate-700 px-4 py-2 rounded-md font-medium"
        onClick={() => {
          // verificar se o título e a descrição estão preenchidas
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
