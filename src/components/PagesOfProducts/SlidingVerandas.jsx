import React from 'react'
import { useEffect } from 'react';

export default function SlidingVerandas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ textAlign: 'left', backgroundColor: '#F0EBD8', color: '#0D1321', padding: '50px' }}>
      <p style={{ fontSize: '32px' }}>Sliding Verandas</p>
      <p style={{ fontSize: '24px' }}>Let yourself be enchanted by the retractable canopies made by LITRA for your sliding aluminum verandas.</p>
      <p>The sliding aluminum verandas made by LITRA are a telescopic covering system ideal for covering any type of surface and capable of adding a touch of elegance and style to your outdoor space.</p>
      <img style={{ width: 'auto', height: '500px' }} src="img/7.jpg" alt="Something went wrong..." />
      <p>Thanks to the uniqueness of our retractable canopies, LITRA aluminum verandas are among the most popular in Italy but also abroad. We create our sliding verandas tailor-made for our customer because we understand the uniqueness of the place where they will be positioned and the tastes of each customer.</p>
      <p>LITRA aluminum outdoor covers are considered 4-season verandas, this is because their use is guaranteed in all seasons. In summer for example where on hot days thanks to the sliding cover system with which our retractable sliding verandas are equipped, we can retract the veranda and let our space cool down. In winter, however, by closing our sliding verandas you can create a covered or isolated environment (by adding our innovative removable side closures or using walls and walls).</p>
      <p>Main features of our Sliding Verandas:</p>
      <ul>
        <li>Our sliding awnings are telescopic covers</li>
        <li>They are not considered permanent restrictions and can therefore be removed</li>
        <li>Thanks to their telescopic shape and the special gutters installed, water collection will not be a problem.</li>
      </ul>
      <p>Our sliding awnings are 100% waterproof.</p>
      <p>They offer thermal insulation.</p>
      <p>LITRA aluminum verandas are built with painted aluminum that never rusts, as do bolts and other structural components, which makes our product even more long-lasting and resistant.</p>
      <p>This type of veranda requires very little maintenance. They are functional and elegant as well as being useful, they can be combined with our side closures to create a new room. LITRA aluminum verandas (also known as opening verandas) have manual operation, this allows them to be opened or closed according to to climatic conditions for 66% of their total length.</p>
      <p>Our sliding awnings are available for commercial applications and residential applications. Make your home special or attract new customers to your business, now it is possible to do so at a truly advantageous price without sacrificing quality.</p>
    </div>
  )
}
