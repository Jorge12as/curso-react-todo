import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="text-white bg-slate-700 px-4 py-2 rounded-md font-medium"
        onClick={() => {
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

AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;

// import { useState } from "react";
// import Input from "./Input";
// import PropTypes from "prop-types";

// function AddTask({ onAddTaskSubmit }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   AddTask.propTypes = {
//     onAddTaskSubmit: PropTypes.func.isRequired,
//   };

//   return (
//     <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
//       <Input>
//         type="text" placeholder="Digite o titulo da tarefa" value={title}
//         onChange={(Event) => setTitle(Event.target.value)}
//       </Input>

//       <Input>
//         type="text" placeholder="Digite a descrição da tarefa" value=
//         {description}
//         onChange={(Event) => setDescription(Event.target.value)}
//       </Input>

//       <button
//         className="text-white bg-slate-700 px-4 py-2 rounded-md font-medium"
//         onClick={() => {
//           // verificar se o título e a descrição estão preenchidas
//           if (!title.trim() || !description.trim()) {
//             return alert("Preencha o título e a descrição da tarefa");
//           }
//           onAddTaskSubmit(title, description);
//           setTitle("");
//           setDescription("");
//         }}
//       >
//         Adicionar
//       </button>
//     </div>
//   );
// }

// export default AddTask;
