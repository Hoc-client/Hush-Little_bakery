import React, {useEffect} from 'react'
import Glide, { Images, Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'


import './styles.scss'


// Picture imports
import biscoff from '../social/pictures/Biscoff Drip Cake 1.jpg'
import biscoffdrip from '../social/pictures/Biscoff Drip Cake.jpg'
import bueno from '../social/pictures/Bueno Cheesecake.jpg'
import smash from '../social/pictures/Cake Smash Boy 1.jpg'
import jaffa from '../social/pictures/Jaffa Drip.jpg'
import kinder from '../social/pictures/Kinder Nutella 1.jpg'
import kinder2 from '../social/pictures/Kinder Nutella.jpg'
import lemon from '../social/pictures/Lemon Drip 1.jpg'
import lion from '../social/pictures/Lion King Cake.jpg'
import pastel from '../social/pictures/Pastel Rainbow.jpg'
import pink from '../social/pictures/Pink Baby Shower 1.jpg'
import pinkd from '../social/pictures/Pink Dinosaur 1.jpg'
import pinkd2 from '../social/pictures/Pink Dinosaur.jpg'
import rainbow from '../social/pictures/Rainbow Cake.jpg'
import rose from '../social/pictures/Rose Gold Drip.jpg'
import sparkly from '../social/pictures/Sparkly Drip Cake 1.jpg'
import sparklyd from '../social/pictures/Sparkly Drip Cake.jpg'
import bueno2 from '../social/pictures/White Bueno Drip.jpg'



const sliderConfiguration= {
    type: 'carousel',
    gap: 20,
    perView: 3,
    focusAt: 'center',
    startAt: 2,
    length: 3,
    width: 1,
  };


const Glider = () => {
    

    const slider = new Glide('.glide', sliderConfiguration)
    // const slider = new Glide('.glide', sliderConfiguration).mount({ Images });

    useEffect(() => {
        return () => slider.mount({ Images, Controls, Breakpoints })
    }, [slider])

    return (
        <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        <img src={biscoff} alt="biscoff cake" className="glide__slide"/>
                        <img src={biscoffdrip} alt="biscoff cake" className="glide__slide"/>
                        <img src={bueno} alt="bueno cake" className="glide__slide"/>
                        <img src={smash} alt="Smash boy cake" className="glide__slide"/>
                        <img src={jaffa} alt="jaffa cake cake" className="glide__slide"/>
                        <img src={kinder} alt="kinder cake" className="glide__slide"/>
                        <img src={kinder2} alt="kinder cake" className="glide__slide"/>
                        <img src={lemon} alt="lemon cake" className="glide__slide"/>
                        <img src={lion} alt="lion king cake" className="glide__slide"/>
                        <img src={pastel} alt="pastel cake" className="glide__slide"/>
                        <img src={pink} alt="pink cake" className="glide__slide"/>
                        <img src={pinkd} alt="pink cake" className="glide__slide"/>
                        <img src={pinkd2} alt="pink cake" className="glide__slide"/>
                        <img src={rainbow} alt="rainbow cake" className="glide__slide"/>
                        <img src={rose} alt="rose cake" className="glide__slide"/>
                        <img src={sparkly} alt="sparkly cake" className="glide__slide"/>
                        <img src={sparklyd} alt="sparkly cake" className="glide__slide"/>
                        <img src={bueno2} alt="bueno cake" className="glide__slide"/>
                    </div>
                </div>
        

                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                    </div>
        </div>
    )
}

export default Glider