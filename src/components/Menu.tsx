import style from './Menu.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';



export function Menu(){
    
    return (
        <nav className={style.menu}>
            <a href="" className={style.menuLinks}><HouseIcon/></a>
            <a href="" className={style.menuLinks}><HistoryIcon/></a>
            <a href="" className={style.menuLinks}><SettingsIcon/></a>
            <a href="" className={style.menuLinks}><SunIcon/></a>
        </nav>
    )
}