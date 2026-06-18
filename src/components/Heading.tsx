import type React from 'react';
import style from './Heading.module.css';

type HeadingProps = {children: React.ReactNode;};

export function Heading(props: HeadingProps){
    const children =props.children
    return (
        <h1 className={style.titulo}>{children}</h1>
    )
}