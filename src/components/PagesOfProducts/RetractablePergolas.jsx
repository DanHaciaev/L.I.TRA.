import React from 'react'
import { useEffect } from 'react';

export default function RetractablePergolas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ textAlign: 'left', backgroundColor: '#F0EBD8', color: '#0D1321', padding: '50px' }}>
      <p style={{ fontSize: '32px' }}>Retractable Pergolas, Pergotende</p>
      <p style={{ fontSize: '24px' }}>Enjoy the outdoors with Pergolas and Retractable Pergolas</p>
      <p>Protecting your outdoor space with retractable pergolas, pergolas and other types of pergola covers is an elegant and innovative way to make your outdoor space a unique place to enjoy in all seasons.</p>
      <img style={{ width: 'auto', height: '500px' }} src="img/2.jpg" alt="Something went wrong..." />
      <p style={{ fontSize: '24px' }}>LITRA Self-supporting Aluminum Pergola</p>
      <p>The Retractable Pergolas and other LITRA pergolas are a self-supporting pergola system in powder-coated aluminium, which can be fixed to both the wall and the ceiling or, with a load-bearing profile equipped with front legs for fixing to the ground, stainless steel brackets and powder-coated aluminum components which guarantee the structure resistance and efficiency. The material used for the cover is an extremely resistant PVC (PVC covers for pergolas).</p>
      <p style={{ fontSize: '24px' }}>Peculiarities of Retractable Pergolas</p>
      <p>LITRA Retractable Pergolas can be fully retracted (Retractable Pergolas) making them perfect for all seasons. In summer if you want to enjoy the sunlight you can retract it while in winter you just need to extend it to protect yourself from rain, wind and other weather conditions.</p>
      <p style={{ fontSize: '20px' }}>Characteristics of our pergolas</p>
      <ul>
        <li>Wind resistance up to 100 km/h</li>
        <li>Waterproof in case of rain</li>
        <li>Opening chosen by the customer between manual or motorized</li>
        <li>UV protection</li>
        <li>Snow load resistance up to over 10 cm</li>
      </ul>
      <p>It is also possible to combine motorized aluminum pergolas and other pergolas with removable side closures to obtain an isolated environment that can be used as an area to host customers or as an additional room for homes.</p>
      <p>We also offer all customers who choose LITRA sliding covers for pergolas a five-year guarantee, consultancy and a free quote before installation to help you choose the best product at the best price.</p>
      <p>Our products are sold with the formula 100% satisfaction and 100% guaranteed and are ideal for both residential and commercial applications.</p>

    </div>
  )
}
