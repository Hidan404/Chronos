import style from "./Form.module.css";


type FormularioProps = {
  labeltext: string;
  type?: "text" | "number" | "search"; 
  placeholder?: string;
  onAddTask?: (task: string) => void; 
};

export function Formulario({
  labeltext,
  type = "text", // valor padrão
  placeholder = "Digite aqui...",
  onAddTask, 
  ...rest
}: FormularioProps) {
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
    const task = input.value.trim();

    
    if (task && onAddTask) {
      onAddTask(task);
      input.value = "";
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formRow}>
        <label htmlFor="entry">{labeltext}</label>
        <input id="entry" type={type} placeholder={placeholder} />
      </div>
      <div className={style.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={style.formRow}>
        <p>ciclos</p>
        <p>0 0 0 0 0 0</p>
      </div>
      <div className={style.formRow}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
