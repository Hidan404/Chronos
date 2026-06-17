import style from './Heading.module.css'


export function Heading(props){
    return (
        <h1 className={style.titulo}>{props.children}</h1>
    )
}