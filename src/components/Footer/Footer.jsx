import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={style.all}>
      <div className={style.name}>
        <p>LITRA</p>
        <p>LITRA is a company specialized in the design and production of motorized telescopic covers for any type of outdoor space. Our roofs can be fixed or retractable, with manual or motorized movement, in aluminium, PVC, polycarbonate or Plexiglas.</p>
      </div>
      <div>
        <p>Contacts</p>
        <ul>
          <li>Lombardy: 02/87187736</li>
          <li>Sardinia: 079 0976300</li>
          <li ><a className={style.link} href="mailto:info@litrainternational.com">info@litrainternational.com</a></li>
        </ul>

      </div>
      
    </div>
  )
}
