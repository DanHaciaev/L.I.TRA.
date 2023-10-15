import React from 'react'
import { useEffect } from 'react';

export default function MobileShade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ textAlign: 'left', backgroundColor: '#F0EBD8', color: '#0D1321', padding: '50px' }}>
      <p style={{ fontSize: '32px' }}>LITRA Outdoor Shelters and Mobile Shades</p>
      <p style={{ fontSize: '24px' }}>Let yourself be enchanted by our Mobile Shades and LITRA outdoor shelters</p>
      <p>LITRA outdoor shelters and Mobile Shades are products designed to provide maximum shelter with minimal space occupation.</p>
      <img style={{ width: 'auto', height: '500px' }} src="img/11.jpg" alt="Something went wrong..." />
      <p>Both the outdoor shelters and the mobile shades we produce are built with an extremely resistant aluminum structure capable of guaranteeing durability even in particularly adverse weather conditions.</p>
      <p style={{ fontSize: '24px' }}>LITRA outdoor shelters</p>
      <p>In outdoor shelters, in addition to the antioxidant aluminum structure (aluminum shelters) designed to resist winds of up to 150 km/h, PVC, Polycarbonate (aluminum and polycarbonate shelters) or Plexiglas (Plexiglas shelters) are used as roofing materials. All our outdoor shelters are truly tailor-made shelters as our shelters are made upon express request of the customer who can choose the dimensions and curvature of the same.</p>
      <p style={{ fontSize: '24px' }}>The LITRA Mobile Shades</p>
      <p>Mobile shades are a mobile covering system capable of offering protection from the wind and, as the word itself suggests, capable of providing "mobile" shade, which can be used wherever we need it. Thanks to their aluminum structure they are particularly light while maintaining the resistance of a fixed structure and, unlike normal awnings, thanks to the wheels with which it is equipped it is possible to use it for multiple applications such as:</p>
      <ul>
        <li>Protect yourself from the wind</li>
        <li>Widely used especially on terraces to maintain privacy</li>
        <li>They constitute an ideal technical application for sports facilities (country clubs, golf clubs, five-a-side football pitches, multi-purpose centres)</li>
        <li>Outdoor catering and tourist facilities (bars, restaurants, hotels, campsites, etc.)</li>
        <li>They are also used as shelters</li>
      </ul>
      <p>LITRA mobile shades are the ideal product for those who want to cover a space temporarily or permanently without having to install fixed structures (especially due to space problems). Our mobile shades are waterproof and this guarantees maximum usability, in fact, they can be used to protect not only from the wind but also from the rain</p>
    </div>
  )
}
