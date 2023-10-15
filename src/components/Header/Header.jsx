import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

export default function Header() {
    return (
        <div >
            <div className={style.all}>
                <div className={style.links}>
                    <Link className={style.link} to="/">Home</Link>
                    <Link className={style.link} to="/about">About</Link>
                    <Link className={style.link} to="/contacts">Contacts</Link>
                </div>
            </div>
        </div>
    )
}
