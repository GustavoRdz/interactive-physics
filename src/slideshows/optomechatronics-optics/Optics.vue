<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        h4 Fundamentals of optics
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -20px;")
        | Fundamentals of optics
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -30px 0 0 0;")
            <b>Reflection and Refraction</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Lenses:</b><span style="font-size: 0.7em;"> Refraction at a Spherical Surface</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Multiple Lenses and System Matrices:</b><span style="font-size: 0.7em;"> The System Matrices, Computer Ray Tracing</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Aperture Stops and Pupils</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Aberrations:</b><span style="font-size: 0.7em;"> Spherical Aberration, Coma Aberration, Field Curvature, Astigmatism, Distortion</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Polarization</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Coherence</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Interference:</b><span style="font-size: 0.8em;"> Young's Experiment, Fabry-Perot Interferometer, Michelson Interferometer</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Diffraction:</b><span style="font-size: 0.8em;"> Double Slits, Multiple Slits, Circular Aperture, Diffraction Grating</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Optical Fiber Transmission</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Gaussian Beam Optics</b>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Spectrum
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Optics concerns with the radiation within this range visible to the human eye but often extends to the region of spectrum near visible region.<br> Visible radiation ranges from 0.35 to 0.75 μm, depending upon types of color of the light their wave length varies. The ultraviolet region extends from 0.01 to 0.35 μm, while infrared radiation extends from the lower end of the visible spectrum to nearly 300 μm.
      .center
        img(src='./assets/fig2-1.png' height="400px")
        img(src='./assets/fig2-2.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Reflection and Refraction
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") A light wave transmitting through a lens or a prism is typical of wave refraction. A light wave reflecting from the surface of a mirror or a coated reflective surface is typical of wave reflection. To understand these phenomena we will review the laws of reflection and refraction.
      .center
        img(src='./assets/fig2-3.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h6(style="margin: 0px 0 0 0; ").center Reflection and Refraction
      h6(style="margin: 30px 0 0 0; ").center Wavefront and Rays
      .center
        img(src='./assets/fig2-4.png' height="500px")
      p Reflection: &emsp;&emsp;
        img(src='./assets/eq2-1.png' height="70px" style="margin: 0px 0 -30px 0px;")
      p Refraction: &emsp;&emsp;
        img(src='./assets/eq2-2.png' height="70px" style="margin: 0px 0 -30px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: 50px;").center Reflection and Refraction
      p(style="padding: 15px; margin: 1px 1px -0px 1px; line-height: 1.5em;")  Total internal reflection
      .center
        img(src='./assets/fig2-5.png' height="300px" style="margin: -0px 0 0 0;")
      p Critical angle: 
        img(src='./assets/eq2-3.png' height="70px" style="margin: 0px 0 -30px 0;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Refraction
      p(style="padding: 1px; margin: -20px 0 0px 0px; line-height: 1.5em;") Refractive index
      p.center 
        img(src='./assets/table2-1.png' height="500px" style="margin: 0px 0 -30px 0;")
  
    

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Lenses
      h6.center image formation
      p.center 
        img(src='./assets/fig2-6.png' height="300px" style="margin: 0px 0 -30px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
      .center
        img(src='./assets/fig2-7.png' height="500px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") 

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
    //-   h6(style="margin-top: -0px;").center Integration type
    //-   .center
    //-     img(src='./assets/fig1-9.png' height="500px" style="margin: -0px 0 0 0;")

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
    //-   h6(style="margin-top: -0px;").center Interaction between three different dimensional worlds
    //-   .center
    //-     img(src='./assets/fig1-10.png' height="300px" style="margin: -0px 0 0 0;")
    //-   p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") One important factor we need to consider in dealing with micro-systems is the so-called “size or scale effect” due to which the influence of the same physical phenomena becomes variable with the length scale of a system.
    //-   //- p To take some examples: (1) Inertial (volume) force that influences a macro-scale system becomes less significant in micro-systems. Instead, surface effects (force) become rather dominant. This is because in general the inertial force is proportional to volume (L<sup>3</sup>), whereas the surface force is in proportion to surface area (L 2). (2) In optical and mechatronic interaction, deflections on the order of wavelengths of light do matter in a microsystem but not in a macrosystem. (3) Atomic attractive and repulsive forces become significant in microsystems. (4) The smaller geometrical size material gets stronger.

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Fundamental Functions of Optomechatronic Systems
    //-   .center
    //-     img(src='./assets/fig1-11.png' height="400px" style="margin: -0px 0 0 0;")
    //-   p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") These enabling technologies are integrated to form five engines that drive the technology.<br> These include: (1) actuator module, (2) sensor module, (3) control module, (4) signal/information processing module, and (5) decision making module.<br> It is noted that the integration of these gives a specified functionality with certain characteristics.

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Fundamental Functions
    //-   p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") A number of fundamental functions can be generated by the fusion of optical mechatronic elements.
    //-   p These include <br>(1) illumination control,&emsp;&emsp;&emsp;(2) sensing,&emsp;&emsp;&emsp;(3) actuating,<br> (4) optical scanning,&emsp;&emsp;&emsp;&emsp;(5) visual/optical information feedback control,<br> (6) data storage,&emsp;&emsp;&emsp;&emsp;&emsp;(7) data transmission/switching,<br> (8) data display,&emsp;&emsp;&emsp;&emsp;&emsp;(9) optical property variation,<br> (10) sensory feedback based optical system control,<br> (11) optical pattern recognition,&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(12) remote monitoring/control,<br> and (13) material processing
    
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center  Fundamental Functions
    //-   .center
    //-     img(src='./assets/fig1-12.png' height="1000px" style="margin: -200px 0 0 0;").rotateimg90
    
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center  Fundamental Functions
    //-   .center
    //-     img(src='./assets/fig1-12b.png' height="1000px" style="margin: -200px 0 0 0;").rotateimg90


    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Taylor and Francis
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, gustavo@gusbits.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optomechatronics',
    description: 'Optics',
    path: 'optomechatronics-optics/Optics'
  },
  components: {
    // 'example-one': require('./components/ExampleOne'),
    // 'example-two': require('./components/ExampleTwo'),
    // 'example-three': require('./components/ExampleThree'),
    // 'example-four': require('./components/ExampleFour'),
    // 'example-five': require('./components/ExampleFive'),
    // 'example-six': require('./components/ExampleSix'),
    // 'example-seven': require('./components/ExampleSeven'),
    // 'example-eight': require('./components/ExampleEight'),
    // 'example-nine': require('./components/ExampleNine'),
    // 'example-ten': require('./components/ExampleTen'),
    // 'example-eleven': require('./components/ExampleEleven'),
    // 'example-twelve': require('./components/ExampleTwelve'),
    // 'example-thirteen': require('./components/ExampleThirteen'),
    // 'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      theme: 'Optics'
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
@import 'node_modules/eagle.js/dist/themes/gourmet/gourmet';
#TemperatureHeat {
  .frontpage {
    img {
      height: 7em;
    }
    img.control-schema {
      width: 8em;
      height: 3em;
    }
  }
  .heart {
    width: 1em;
    height: 0.8em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-image: url('./assets/logo.svg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: contain;
  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  .boredYet {
    p {
      margin-bottom: 0.3em;
      margin-top: 1.3em;
    }
    .button {
      border: none;
    }
    .button.prev {
      float: left;
    }
    .button.next {
      float: right;
    }
  }
  img.computerkid {
    height: 6.5em;
  }

  a {
    color: black;
  }

  .parentWindow {
    border: solide 1px red;
  }
}
#table-wrapper {
  display: flex;
  padding-left:0px;
  align-content: center;

}
#desc {
  width: 18em;
  border-collapse: collapse;
  border-bottom: 1px solid black;
  margin: 0 auto;

  & th {
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: .5em 0em .5em -3em;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }

  & td {
    text-align: center;
    padding-left: 0em;
    margin: 0 auto;
    font-size: 14px;
    height: 10px;
  }

  & caption {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    background-color:slateblue;
    color: white;
  }
}

.rotateimg90 {
  -webkit-transform:rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
