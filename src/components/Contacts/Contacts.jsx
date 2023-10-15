import React from 'react'
import style from './Contacts.module.css'


export default function Contacts() {
  return (
    <div className={style.all}>
      <p className={style.upcase}>Contacts</p>
      <p className={style.upcase}>How can we help you?</p>
      <div className={style.text}>
        <div > 
          <span className="material-symbols-outlined">location_on</span>
          <p>Come and visit us</p>
          <p>Via Cesare Battisti 64 - 22070 Locate Varesino (CO)</p>
          <p>Via Tempio 13 07100 Sassari, Italy</p>
          <p>Rome</p>
          <p>Campania</p>
        </div>
        <div>
          <span className="material-symbols-outlined">smartphone</span>
          <p>Call us</p>
          <p>02 87187736</p>
          <p>079 0976300</p>
          <p>06 92948233</p>
          <p>330 628693</p>
        </div>
        <div>
          <span className="material-symbols-outlined">mail</span>
          <p>Email</p>
          <p><a href="mailto:info@litrainternational.com">info@litrainternational.com</a></p>
        </div>
      </div>
      
    </div>
  )
}
