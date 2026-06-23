import style from "./Form.module.css"

export function Formulario(){
    return (
        <form className="form" action="">
            <div className="formRow">
                <label htmlFor="entry">task</label>
            <input id="entry" type="text" />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="formRow">
                <p>ciclos</p>
                <p>0 0 0 0 0 0</p>
            </div>
            <div className="formRow">
                <button>Enviar</button>
            </div>
        </form>
    )
}