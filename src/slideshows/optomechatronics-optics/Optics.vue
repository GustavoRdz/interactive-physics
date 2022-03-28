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
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

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

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Aperture stops and pupils
      p(style="padding: 15px; margin: -60px 1px -0px 1px; line-height: 1.2em;") The aperture stop is defined to be the aperture, which limits the maximum amount of light that can be collected.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.2em;") In other words, it provides a measure of the light collecting ability. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.2em;") The pupil that determines whether a given particular ray will pass through the entire optical system.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.2em;") The entrance pupil is the image of the aperture stop as seen from object space. In other words, it is the image of the stop through which we look into the entire optical system from the object. 
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") The location and size of these three openings, the aperture stop, the entrance, and exit pupils have significant effect on the light collecting and also on certain types of aberrations. Therefore, it is often necessary to shift the stop along the optical axis in order to improve performance of optical systems.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Aperture stops and pupils
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") 
      .center
        img(src='./assets/fig2-19A.png' height="220px" style="margin: 40px 20px -30px 20px;")
        img(src='./assets/fig2-19B.png' height="250px" style="margin: 40px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Aperture stops and pupils
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") The amount of light admitted through the aperture is very useful in defining two useful parameters, <strong>f-number f/#</strong>, and numerical aperture, <strong>NA</strong>. If aperture diameter is denoted by D and focal length of an imaging lens is denoted by f, then the light power per unit area (irradiance) at the image plane is proportional to
      .center
        img(src='./assets/eq2-36B.png' height="80px" style="margin: 0px 20px -0px 20px;")
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") since the image area is proportional to f. The quantity f/D is called focal ratio or relative aperture and defined by f-number and thus
      .center
        img(src='./assets/eq2-36C.png' height="80px" style="margin: 0px 20px -0px 20px;")
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") The numerical aperture (NA) is defined by
      .center
        img(src='./assets/eq2-36D.png' height="50px" style="margin: 0px 20px -0px 20px;")
      .center
        img(src='./assets/eq2-36E.png' height="80px" style="margin: 40px 20px -30px 20px;")
        img(src='./assets/eq2-36F.png' height="80px" style="margin: 40px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Aberration
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") An exact ray tracing in actual case would cause departures from the predictions with the paraxial description. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.2em;") For example, it will no longer be generally true that all the rays leaving a point object will meet an image, as we shall see later. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.2em;") Such deviations from ideal Gaussian behavior are referred to as aberrations.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.2em;") For monochromatic aberrations, there are
      ul(style="padding: 10px; margin: -10px 1px 10px 100px; line-height: 1.0em;")
        li spherical aberration,
        li coma, 
        li curvature of field,
        li astigmatism,
        li and distortion
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") that deteriorate the image quality.
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") Spherical aberration, astigmatism, and coma make the image unclear, while field curvature and distortion deform the image. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Spherical Aberration
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Spherical aberration is one of the most common aberrations in lenses. If all rays emanating from a point source S, not exclusive of rays reflected by a larger lens aperture are assumed to impinge on a convex lens, the image formed can be represented as the point P due to paraxial rays and the point P' due to nonparaxial rays.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") The axial distance between points P and P', is known as the longitudinal spherical aberration. 
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") The height above the axis PT is called the transverse spherical aberration.
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") The amount of spherical aberration for fixed focal length and aperture is influenced by both the object distance and the lens shape. 
      .center
        img(src='./assets/fig2-20.png' height="250px" style="margin: 30px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Coma Aberration
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Coma refers to the variation of magnification with aperture. When a bundle of rays is incident obliquely on a lens.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") The rays passing through the outer zones of the lens form a larger image than the rays through the center portion. The coma of the lens, h<sub>com</sub>, is defined by 
      .center
        img(src='./assets/eq2-36G.png' height="50px" style="margin: -20px 20px 10px 0px;")
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") where h<sub>p</sub> The image has a form which is something like the shape of a comet with its tail, therefore this aberration is named comet. 
      .center
        img(src='./assets/fig2-21.png' height="300px" style="margin: 0px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Field curvature
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Curvature of field is the aberration of a lens that cannot transform a plane object into a precisely plane image.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") In other words, object points lying in a plane are imaged onto a curved surface when field curvature is present. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") This curvature of field is known as Petzval field curvature. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") This surface depends on the focal length of the individual lens components and on their refractive indices, as we might expect. 
      .center
        img(src='./assets/fig2-22.png' height="250px" style="margin: 20px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Astigmatism
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Astigmatism occurs when an object point lies far distant from the optical axis and, therefore, the incident cone of rays strikes the lens asymmetrically. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") This aberration occurs mainly because off-axis object rays are in different axial sections of the lens, resulting in two slightly different focuses; tangential (meridional) and sagittal (radial). 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") When an incident cone of rays strikes obliquely, there occur two distinct focal lengths: one in the meridional plane and the other in the sagittial plane. 
      .center
        img(src='./assets/fig2-23.png' height="300px" style="margin: 20px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Distortion
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Distortion occurs because focal length and lateral magnification more or less vary with different distance from the optical axis. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") Te lateral magnification M<sub>t</sub> may be a function of the distance from the optical axis. 
      .center
        img(src='./assets/eq2-37.png' height="60px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-24.png' height="200px" style="margin: 20px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-25.png' height="200px" style="margin: 20px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Distortion
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Distortion with a stop
      .center
        img(src='./assets/fig2-26.png' height="206px" style="margin: 10px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-26B.png' height="200px" style="margin: 10px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Polarization
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") A light wave is oscillating as a transverse electromagnetic wave.
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") Polarization of the wave is a process of characterizing the orientation of such wave oscillation in both time and space. 
      .center
        img(src='./assets/fig2-27.png' height="300px" style="margin: -0px 20px -0px 0px;")
      p Maximum amount of polarization at
      .center
        img(src='./assets/eq2-38.png' height="80px" style="margin: -20px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Polarization
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Different states of polarization
      .center
        img(src='./assets/fig2-28A.png' height="250px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-28B.png' height="238px" style="margin: -20px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Polarization
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Different states of polarization
      .center
        img(src='./assets/fig2-29A.png' height="250px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/fig2-29B.png' height="250px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-29C.png' height="250px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-40.png' height="50px" style="margin: 0px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Interference occurs when two or more monochromatic light sources are superimposed. 
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") To consider a more general case of interference, let us consider two point sources S1 and S2 emitting monochromatic waves E1 and E2 in a homogeneous medium. Let the two waves be represented by
      .center
        img(src='./assets/fig2-30A.png' height="200px" style="margin: 30px 20px -50px 0px;")
        img(src='./assets/eq2-41.png' height="100px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 40px 1px -40px 200px; line-height: 1.3em;") the superposition
      .center
        img(src='./assets/eq2-41B.png' height="50px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: -10px 1px -40px 200px; line-height: 1.3em;") the irradiance
      .center
        img(src='./assets/eq2-42.png' height="60px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-43.png' height="50px" style="margin: 0px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Taking the time average of the quantity in the bracket, we have
      .center
        img(src='./assets/eq2-44.png' height="50px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -40px 200px; line-height: 1.3em;") with
      .center
        img(src='./assets/eq2-44B.png' height="30px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-44C.png' height="30px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-44D.png' height="30px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -40px 200px; line-height: 1.3em;") we have
      .center
        img(src='./assets/eq2-44E.png' height="70px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -10px 200px; line-height: 1.3em;") where
      .center
        img(src='./assets/eq2-45.png' height="50px" style="margin: 0px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -10px 200px; line-height: 1.3em;") then
      .center
        img(src='./assets/eq2-46.png' height="50px" style="margin: 0px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The above equation implies that the irradiance at an arbitrary point P in space is characterized by the path difference term, and the initial phase difference &phi;<sub>1</sub> - &phi;<sub>2</sub>.
      .center
        img(src='./assets/eq2-46B.png' height="50px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-46C.png' height="50px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-30A.png' height="220px" style="margin: 0px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-30B.png' height="220px" style="margin: -10px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Young's experiment
      .center
        img(src='./assets/fig2-31.png' height="300px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-47.png' height="50px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-47B.png' height="90px" style="margin: 0px 20px -20px 0px;")
      .center
        img(src='./assets/eq2-48.png' height="60px" style="margin: 50px 20px -0px 0px;")
        img(src='./assets/eq2-48B.png' height="60px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-49.png' height="80px" style="margin: 30px 20px -10px 30px;")
      .center
        img(src='./assets/eq2-50.png' height="60px" style="margin: 20px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Fabry-Perot interferometer
      .center
        img(src='./assets/fig2-32.png' height="500px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-51.png' height="50px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-52.png' height="90px" style="margin: 0px 20px -20px 0px;")
      .center
        img(src='./assets/eq2-54.png' height="80px" style="margin: 30px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Fabry-Perot interferometer
      .center
        img(src='./assets/eq2-55.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-55B.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-56.png' height="90px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-57.png' height="100px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-58.png' height="100px" style="margin: 30px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Fabry-Perot interferometer
      .center
        img(src='./assets/eq2-58.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-33.png' height="350px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-59.png' height="90px" style="margin: 30px 50px -0px 0px;")
        img(src='./assets/eq2-59B.png' height="90px" style="margin: 30px 0px -0px 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Michelson interferometer
      .center
        img(src='./assets/fig2-34.png' height="350px" style="margin: 0px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-59C.png' height="40px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-60.png' height="90px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-60B.png' height="30px" style="margin: 0px 100px -0px 0px;")
        | bright fringes
      .center
        img(src='./assets/eq2-60C.png' height="30px" style="margin: 0px 80px -0px 0px;")
        | dark fringes

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig2-35.png' height="500px" style="margin: 0px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig2-36.png' height="300px" style="margin: 0px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-61.png' height="80px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-61B.png' height="40px" style="margin: 30px 50px -0px 0px;")
        img(src='./assets/eq2-62.png' height="40px" style="margin: 0px 0px -0px 50px;")
      .center
        img(src='./assets/eq2-63.png' height="130px" style="margin: 30px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/eq2-63.png' height="130px" style="margin: 0px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-63B.png' height="40px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-63C.png' height="70px" style="margin: 0px 0px -15px 20px;")
      .center
        img(src='./assets/eq2-64.png' height="130px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-65F.png' height="50px" style="margin: 50px 50px -10px 0px;")
        | dark fringes
      .center
        img(src='./assets/eq2-66.png' height="40px" style="margin: 30px 30px -10px 0px;")
        | in terms of wavelength

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig2-38.png' height="350px" style="margin: 0px 0px -0px 0px;")
      .center
        img(src='./assets/table2-3.png' height="200px" style="margin: 30px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Double Slits
      .center
        img(src='./assets/eq2-68.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-69.png' height="80px" style="margin: 30px 40px -0px 0px;")
        img(src='./assets/eq2-69B.png' height="80px" style="margin: 30px 0px -0px 40px;")
      .center
        img(src='./assets/fig2-39.png' height="300px" style="margin: 0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Double Slits
      .center
        img(src='./assets/fig2-39.png' height="300px" style="margin: -20px 0px -0px 0px;")
      .center
        img(src='./assets/fig2-40.png' height="360px" style="margin: 0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Multiple Slits
      .center
        img(src='./assets/eq2-73.png' height="130px" style="margin: -10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-74.png' height="70px" style="margin: 10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-75.png' height="30px" style="margin: 40px 0px -0px 0px;")
      .center
        img(src='./assets/fig2-41A.png' height="300px" style="margin: -0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Multiple Slits
      .center
        img(src='./assets/fig2-41A.png' height="300px" style="margin: -0px 0px -0px 0px;")
      .center
        img(src='./assets/fig2-41B.png' height="277px" style="margin: 0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Circular Aperture
      .center
        img(src='./assets/fig2-42.png' height="300px" style="margin: -50px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-78.png' height="80px" style="margin: -0px 0px -25px 0px;")
        | &rArr;
        img(src='./assets/eq2-80B.png' height="80px" style="margin: 20px 0px -25px 0px;")
      .center
        img(src='./assets/eq2-81.png' height="150px" style="margin: 50px 50px -60px 0px;")
        | with
        img(src='./assets/eq2-81B.png' height="80px" style="margin: 20px 0px -30px 50px;")
      .center
        img(src='./assets/eq2-82.png' height="80px" style="margin: 100px 50px -25px 0px;")
        | first dark ring
      .center
        img(src='./assets/eq2-83.png' height="80px" style="margin: 30px 50px -25px 0px;")
        | if the aperture is a lens

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Resolution
      .center
        img(src='./assets/fig2-43.png' height="600px" style="margin: -70px 0px -70px 0px;").rotateimg90
      .center
        img(src='./assets/eq2-82.png' height="80px" style="margin: 0px 50px -25px 0px;")
        | first dark ring
      .center
        img(src='./assets/eq2-83.png' height="80px" style="margin: 30px 50px -25px 0px;")
        | if the aperture is a lens

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Lens
      .center
        img(src='./assets/fig2-44.png' height="800px" style="margin: -180px 0px -70px 0px;").rotateimg90
      .center
        img(src='./assets/eq2-83.png' height="80px" style="margin: -30px 50px -25px 0px;")
        | if the aperture is a lens

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Resolution
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") The resolution can be interpreted as the smallest resolvable separation between the central maximums (Airy disks) created by two equal-irradiance, distant point sources separated apart by an angle &theta;
      .center
        img(src='./assets/fig2-45.png' height="300px" style="margin: -0px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-84.png' height="60px" style="margin: -0px 0px -0px 0px;")
      p(style="padding: 15px; margin: -10px 10px 0px 1px; line-height: 1.3em;") The limit condition is just resolvable and known as <strong>Rayleigh criterion</strong>.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Resolution
      p(style="padding: 15px; margin: -10px 10px 0px 1px; line-height: 1.3em;") The limit condition is just resolvable and known as <strong>Rayleigh criterion</strong>.
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The limit of the resolvable angular separation of two point sources can be expressed as
      .center
        img(src='./assets/eq2-85.png' height="60px" style="margin: -0px 30px -0px 0px;")
        img(src='./assets/eq2-86.png' height="60px" style="margin: -0px 0px -0px 30px;")
      .center
        img(src='./assets/fig2-46.png' height="300px" style="margin: 20px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Diffraction grating
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") Diffraction by a large number of diffraction elements such as multiple slits, apertures, or obstacles. A periodic array of such elements is called a diffraction grating.
      .center
        img(src='./assets/fig2-47.png' height="300px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-87.png' height="70px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-88.png' height="70px" style="margin: 20px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Diffraction grating
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") Spectra produced by white light
      .center
        img(src='./assets/fig2-48.png' height="300px" style="margin: 20px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Optical Fiber Transmission
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Total internal reflection
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") Snell law
      .center
        img(src='./assets/eq2-89.png' height="50px" style="margin: -40px 0px 0px 0px;")
      .center
        img(src='./assets/fig2-50.png' height="400px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-89B.png' height="80px" style="margin: 0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Optical Fiber Transmission
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Total internal reflection
      .center
        img(src='./assets/eq2-90.png' height="50px" style="margin: -40px 0px 0px 0px;")
      .center
        img(src='./assets/eq2-91.png' height="80px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-91B.png' height="100px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-92.png' height="70px" style="margin: 20px 0px -0px 0px;")
      //- .center
      //-   img(src='./assets/eq2-92B.png' height="80px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-92C.png' height="70px" style="margin: 20px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Optical Fiber Transmission
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Major refraction index configurations of optical fibers
      .center
        img(src='./assets/fig2-51.png' height="500px" style="margin: 40px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Gaussian Beam Optics
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Laser Sources
      .center
        img(src='./assets/table2-4.png' height="300px" style="margin: 100px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Gaussian Beam Optics
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Gaussian beam
      .center
        img(src='./assets/fig2-52.png' height="300px" style="margin: 10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-94.png' height="100px" style="margin: 10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-95.png' height="100px" style="margin: 10px 0px -0px 0px;")

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
