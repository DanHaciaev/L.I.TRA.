import React from 'react'
import style from './Home.module.css'
import Maen from '../Main/Maen'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div >
      <Maen />
      <div className={style.content}>
        <p className={style.one}>Roofing, Awnings Milan, Verandas Milan</p>
        <p className={style.two}>LITRA offers telescopic covers, Milan verandas, Milan awnings and other Made in Italy products</p>
        <p className={style.three}>Thanks to the Telescopic Coverings, Milan Verandas and the LITRA Milan Awnings, you will finally experience your terrace in a unique and innovative way.
          From today you will have a new way of living that will allow you to host your customers all year round, adding value to your business, developing and increasing style, comfort, design and your turnover, with the return of guaranteed investment. LITRA manufactures and installs roofing for residential and commercial uses in Italy. Thanks to the long experience and professionalism of our experts, we are able to offer a complete service and a great touch of Style and Elegance.</p>
        <Link className={style.link} to="/about">Continue...</Link>
        <div className={style.alone}>

          <Link to="/telescopic_covers">
            <div className={style.text}>
              <img className={style.photo} src="img/3.jpg" alt="Something went wrong..." />
              Motorized Telescopic Covers
            </div></Link>

          <Link to="/retractable_pergolas">
            <div className={style.text}>
              <img className={style.photo} src="img/2.jpg" alt="Something went wrong..." />
              Retractable Pergolas
            </div>
          </Link>

          <Link to="/bioclimatic_pergolas">
            <div className={style.text}>
              <img className={style.photo} src="img/1.jpg" alt="Something went wrong..." />
              Bioclimatic Pergolas
            </div>
          </Link>

          <Link to="/pool_covers">
            <div className={style.text}>
              <img className={style.photo} src="img/4.jpg" alt="Something went wrong..." />
              Telescopic Pool Covers
            </div>
          </Link>

          <Link to="/garden_coverings">
            <div className={style.text}>
              <img className={style.photo} src="img/5.jpg" alt="Something went wrong..." />
              Winter Garden Coverings
            </div>
          </Link>

          <Link to="/awning_for_terrace">
            <div className={style.text}>
              <img className={style.photo} src="img/6.jpg" alt="Something went wrong..." />
              Awnings for Terraces
            </div>
          </Link>

          <Link to="/sliding_verandas">
            <div className={style.text}>
              <img className={style.photo} src="img/7.jpg" alt="Something went wrong..." />
              Sliding Verandas
            </div>
          </Link>

          <Link to="/side_closures"> 
            <div className={style.text}>
              <img className={style.photo} src="img/8.jpg" alt="Something went wrong..." />
              Side Closures
            </div>
          </Link>

          <Link to="/transparent_covers">
            <div className={style.text}>
              <img className={style.photo} src="img/9.jpg" alt="Something went wrong..." />
              Transparent Covers
            </div>
          </Link>

          <Link to="/sports_facilities">
            <div className={style.text}>
              <img className={style.photo} src="img/10.jpg" alt="Something went wrong..." />
              Roofing for Sports Facilities
            </div>
          </Link>

          <Link to="/mobile_shade">
            <div className={style.text}>
              <img className={style.photo} src="img/11.jpg" alt="Something went wrong..." />
              Mobile Shade
            </div>
          </Link>

          <Link to="/tensile_structures">
            <div className={style.text}>
              <img className={style.photo} src="img/12.jpg" alt="Something went wrong..." />
              Tensile Structures
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
