import { Timer } from 'lucide-react';
import style from './Logo.module.css';



export function Logo(){
    
    return (
        <div className={style.logo}>
            <a href='#'>
                <Timer/>
                <span>Chronos</span>
            </a>
        </div>
    )
}