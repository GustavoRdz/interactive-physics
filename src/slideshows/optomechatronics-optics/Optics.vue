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
      h5(style="margin-top: -0px;").center Refraction at a spherical surface 
      .center
        img(src='./assets/fig2-7.png' height="500px" style="margin: -0px 0 0 0;")
      .center
        img(src='./assets/eq2-8.png' height="80px" style="margin: -0px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Spherical lens
      .center
        img(src='./assets/fig2-8.png' height="500px" style="margin: -0px 0 0 0;")
      .center
        img(src='./assets/eq2-9.png' height="70px" style="margin: -0px 0 0 0;")
      .center
        img(src='./assets/eq2-10.png' height="70px" style="margin: -0px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Spherical lens
      p Combinig the former equations we have
      .center
        img(src='./assets/eq2-12.png' height="70px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") When a source is located at infinity, we can see that the image distance becomes the focal length f. In this case, we have
      .center
        img(src='./assets/eq2-13B.png' height="70px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") This equation is referred to as the <strong>lens maker’s formula</strong>. When a surrounding medium is air, n<sub>1</sub> &approx; 1, the lens formula becomes &rArr;
      .center
        img(src='./assets/eq2-13.png' height="90px" style="margin: 0 50px -35px 0;")
        | &rArr;
        img(src='./assets/eq2-14.png' height="90px" style="margin: 0 0 -35px 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Thin lenses - Spherical lenses
      h6.center Gauss lens formula
      .center
        img(src='./assets/eq2-14.png' height="90px" style="margin: -50px 0 50px 0px;")
      h6.center Focal point F
      .center
        img(src='./assets/fig2-9.png' height="280px" style="margin: -50px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Thin lenses - Spherical lenses
      .center
        img(src='./assets/eq2-14.png' height="90px" style="margin: -0px 0 0px 0px;")
      p The effect of location of point light source.
      .center
        img(src='./assets/fig2-10.png' height="400px" style="margin: -10px 0 0 0;")
        img(src='./assets/gaussGraph2.png' height="320px" style="margin: -10px 0 50px 10px;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Ray trace image formation
      p 
      .center
        img(src='./assets/fig2-12A.png' height="200px" style="margin: -20px 0 10px 0;")
      .center
        img(src='./assets/fig2-12B.png' height="195px" style="margin: -10px 0 0 0;")
      h6.center Magnification
      .center
        img(src='./assets/eq2-16.png' height="80px" style="margin: -40px 0 0 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Example
      p Let us take some examples for thin lenses. When an object is located 6 cm in front of a convex lens having focal length 10 cm, the location and magnitude of the image to be formed can be calculated by using
      .center
        img(src='./assets/eq2-14.png' height="70px" style="margin: -20px 30px 0 0;")
        img(src='./assets/eq2-16.png' height="70px" style="margin: -20px 0px 0 30px;")
      p The image  location is obtained by (convex lens)
      .center
        img(src='./assets/eq2-16B.png' height="70px" style="margin: -20px 0 0 0;")
        img(src='./assets/eq2-16C.png' height="70px" style="margin: -20px 0 0 30px;")
      p (concave lens)
      .center
        img(src='./assets/eq2-16D.png' height="70px" style="margin: -20px 0 0 0;")
        img(src='./assets/eq2-16E.png' height="70px" style="margin: -20px 0 0 30px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Image characteristics
      p 
      .center
        img(src='./assets/table2-2.png' height="250px" style="margin: -30px 0px 0 0;")
      .center
        img(src='./assets/fig2-13A.png' height="150px" style="margin: 30px 0px 0 40px;")
        img(src='./assets/eq2-16F.png' height="50px" style="margin: 0px 0px 70px 10px;")
        img(src='./assets/fig2-13B.png' height="170px" style="margin: -30px 160px 0 0;")
        img(src='./assets/fig2-13C.png' height="145px" style="margin: -30px 0px 0 20px;")
        img(src='./assets/eq2-16G.png' height="50px" style="margin: 0px 0px 50px 10px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple lenses
      p 
      .center
        img(src='./assets/fig2-14.png' height="250px" style="margin: -30px 0px 0 0;")
      .center
        img(src='./assets/eq2-17.png' height="80px" style="margin: 30px 20px -30px 0px;")
        | &rArr;
        img(src='./assets/eq2-18.png' height="60px" style="margin: 0px 20px -20px 20px;")
        | &rArr;
        img(src='./assets/eq2-19.png' height="80px" style="margin: 0px 0px -30px 20px;")
      .center
        img(src='./assets/eq2-20.png' height="80px" style="margin: 100px 30px -30px 0px;")
        | &rArr;
        img(src='./assets/eq2-21.png' height="80px" style="margin: 100px 0px -30px 30px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple lenses
      p 
      .center
        img(src='./assets/fig2-14.png' height="250px" style="margin: -30px 0px 0 0;")
      h6 Consider a two convex lens compound system has f1 = 20 cm, f2 = 20 cm, and their separation d = 30 cm. We wish to compute the image of an object located 30 cm from the first lens L1. Applying the lens formula L1
      .center
        img(src='./assets/eq2-21B.png' height="80px" style="margin: -30px 20px -30px 0px;")
        | &rArr;
        img(src='./assets/eq2-21C.png' height="80px" style="margin: -30px 20px -30px 20px;")
        | &rArr;
      .center
        img(src='./assets/eq2-21D.png' height="70px" style="margin: 20px 20px -30px 20px;")
        | &rArr;
        img(src='./assets/eq2-21E.png' height="80px" style="margin: 20px 0px -30px 20px;")
      .center
        img(src='./assets/eq2-21F.png' height="50px" style="margin: 40px 30px -30px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple Lenses and System Matrices
      p 
      .center
        img(src='./assets/fig2-15A.png' height="250px" style="margin: 30px 0px 0 0;")
        img(src='./assets/fig2-15B.png' height="250px" style="margin: 30px 0px 0 0;")
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple Lenses and System Matrices
      p 
      .center
        img(src='./assets/fig2-16A.png' height="200px" style="margin: -30px 0px 0 0;")
        img(src='./assets/fig2-16B.png' height="200px" style="margin: -30px 0px 0 0;")
        img(src='./assets/fig2-16C.png' height="200px" style="margin: -30px 0px 0 0;")
      .center
        img(src='./assets/eq2-22.png' height="80px" style="margin: 50px 20px -30px 0;")
        | and
        img(src='./assets/eq2-23.png' height="80px" style="margin: 50px 20px -30px 20px;")
        | then
        img(src='./assets/eq2-23B.png' height="50px" style="margin: 50px 0px -20px 20px;")
      .center
        img(src='./assets/eq2-24.png' height="50px" style="margin: 70px 20px -20px 0;")
        | and
        img(src='./assets/eq2-25.png' height="80px" style="margin: 70px 20px -30px 20px;")
        | and
        img(src='./assets/eq2-26.png' height="80px" style="margin: 70px 0px -30px 20px;")
      .center
        img(src='./assets/eq2-27.png' height="50px" style="margin: 70px 20px -20px 0;")
        | or
        img(src='./assets/eq2-28.png' height="80px" style="margin: 70px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple Lenses and System Matrices
      h6 Example
      p(style="padding: 15px; margin: 1px 1px -0px 1px; line-height: 1.2em;")  Let us take an example of determining the equivalent focal length of a two lens system. The front convex lens has focal length of 50 mm, and the rear concave lens a focal length of 25 mm. The lenses are separated in distance by 30 mm and then moved to another position, 40 mm. To determine the equivalent focal length, we use Equation 2.28,
      .center
        img(src='./assets/eq2-29B.png' height="70px" style="margin: 30px 0px 0 0;")
      p for d = 40 mm the equivalent focal length becomes 83.3333

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple Lenses and System Matrices
      h6 Example
      p(style="padding: 15px; margin: -60px 1px -0px 1px; line-height: 1.2em;") We consider another case when two positive lenses, L1 and L2, having an identical focal length, f are separated from each other with distance case (1) f/4 and pulled away from each other with distance case (2) f/2: We compute the feq, or the approximate power of the two cases and determine which one is the wider-angle lens.
      .center
        | if
        img(src='./assets/eq2-29C.png' height="70px" style="margin: 50px 20px -30px 20px;")
        | then
        img(src='./assets/eq2-29D.png' height="80px" style="margin: 50px 20px -30px 20px;")
      .center
        | if
        img(src='./assets/eq2-29E.png' height="70px" style="margin: 70px 20px -20px 20px;")
        | then
        img(src='./assets/eq2-29F.png' height="80px" style="margin: 70px 20px -20px 20px;")
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.2em;") Because case (1) has shorter focal length, the system separated f/4 apart is the wider-angle lens.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  The system matrices
      h6 Translation matrix
      p(style="padding: 15px; margin: -60px 1px -0px 1px; line-height: 1.2em;")
      .center
        img(src='./assets/fig2-17A.png' height="300px" style="margin: 50px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-30.png' height="100px" style="margin: 100px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  The system matrices
      h6 Refraction matrix: Convex surface 
      .center
        img(src='./assets/fig2-17B.png' height="300px" style="margin: -30px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-31.png' height="70px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-32.png' height="70px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-33.png' height="70px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-34.png' height="100px" style="margin: 50px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-35.png' height="100px" style="margin: 50px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  The system matrices
      h6 Refraction matrix: Concave surface 
      .center
        img(src='./assets/fig2-17C.png' height="300px" style="margin: -30px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-31.png' height="70px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-35B.png' height="70px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-35C.png' height="70px" style="margin: 50px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-36.png' height="100px" style="margin: 50px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Computer ray tracing
      p Beam expanding via three-lens configuration
      .center
        img(src='./assets/fig2-18.png' height="400px" style="margin: 40px 20px -30px 20px;")

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
