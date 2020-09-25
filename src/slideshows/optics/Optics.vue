<template lang="pug">
#Relativity.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Optics
        img(src='./assets/microres4.jpg')
        h4 Nature of light, geometrical optics, interference, diffraction and polarization
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=4, enter='bounceInRight' leave='bounceOutDown')
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        h6(v-if="step >= 2" style="color: #aa0000; margin: -10px;")
          <b>Nature of light</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 2" style="margin-bottom: -30px;")
            <b>Ray optics, Reflection, Refraction, Dispersion</b>

        h6(v-if="step>=3"  style="color: #aa0000; margin-bottom: -20px;")
          <b>Geometrical optics</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3" style="margin-bottom: -30px;")
            <b>Flat mirrors, Spherical mirrors, Thin lenses, Optical instruments</b>

        h6(v-if="step>=4"  style="color: #aa0000; margin-bottom: -20px;")
          <b>Wave optics</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 4" style="margin-bottom: -30px;")
            <b>Interference, Difraction, Polarization</b>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Light
      p Light or visible light is the <b>electromagnetic radiation</b> that the <b>human eye can perceive</b>.
      p Wavelengths in the range of: &#x03BB; =  <b>400–700 nm</b>.
      p Frequency range of roughly: f = <b>430–750 THz</b>.
      p Speed in vacuum, <b>c = 299,792,458 m/s</b> ~ <b>3x10<sup>8</sup> m/s</b>, is a fundamental constants of nature.
      p The <b>study of light nature</b>, known as <b>optics</b>, is an important research area in modern physics.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top:-20px;") Electromagnetic spectrum
      .center
        img(src='./assets/espectro.png' width="600px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Ray optics
      .center
        img(src='./assets/rays.png' width="200px")
      .center
        img(src='./assets/rayApproximation.png' width="700px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Types of reflection
      .center
        img(src='./assets/typeReflection.png' width="700px")
      p
        p.center Specular reflection &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Difusse reflection

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Law of reflection
      .center
        p &theta;<sup>'</sup> = &theta;
        img(src='./assets/lawReflection.png' width="300px")
        p &theta;: incident ray; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &theta;<sup>'</sup>: reflected ray

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 1
      example-one
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Reflection applications
      .center
        img(src='./assets/reflectionApplications.png' width="500px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Refraction
      .center
        img(src='./assets/refractiveIndex.png' width="400px")
      .center
        img(src='./assets/refraction.png' width="200px" style="margin-right:50px;")
        img(src='./assets/tableIndex.png' width="600px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Law of refraction
      .center
        img(src='./assets/snellLaw.png' width="400px" style="margin-bottom:30px;")
      .center
        img(src='./assets/refractionLaw.png' width="300px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 2
      example-two
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 3
      example-three
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Dispersion
      p For a given material, the refractive index varies with the wavelength of the light passing through the material.
      .center
        img(v-if="step >= 1" src='./assets/dispersionGraph.png' width="300px")
        img(v-if="step >= 2" src='./assets/dispersionExample.png' width="300px")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Dispersion
      .center
        img(v-if="step >= 1" src='./assets/dispersionDrop.png' width="300px")
        img(v-if="step >= 2" src='./assets/dispersionBow.png' width="300px")
        img(v-if="step >= 3" src='./assets/dispersionRainbow.png', width="400px")

    slide(:steps=4, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Total Internal Reflection
      .center
        div(style="display: flex; justify-content: rigth;")
          div
            img(v-if="step >= 1" src='./assets/totalInternaEjemplos.png' width="700px")
          div
            img(v-if="step >= 2" src='./assets/snellLaw.png' width="500px" style="margin-bottom: 30px;")
            img(v-if="step >= 3" src='./assets/snellInterna1.png' width="500px" style="margin-bottom: 30px;")
            img(v-if="step >= 4" src='./assets/snellInterna2.png' width="500px")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Total internal reflection
      .center
        img(v-if="step >= 1" src='./assets/piscinaOlimpica.jpg' width="334px" style="margin-right: 30px;")
        img(v-if="step >= 2" src='./assets/espejismoBarco.jpg' width="400px")
        img(v-if="step >= 3" src='./assets/espejismoCarretera.jpg' width="500px")


    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Total internal reflection application
      p(style="margin-top:-50px;").center Optical fiber
      .center
        img(v-if="step >= 1" src='./assets/internaFibra.png' width="310px")
        img(v-if="step >= 2" src='./assets/esquemaFibra.png' width="240px" style="margin-left: 10px;")
        img(v-if="step >= 3" src='./assets/ejemplosFibras.png' width="500px" style="margin-left: 10px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1(style="margin-top: -10px;") Image formation
      .center
        img(src='./assets/imageFormationFront.png' width="450px" style="margin-top: -10px;")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -40px;") Image formation
      h4(style="margin-top: -40px;").center Flat Mirror
      .center
        img(v-if="step >= 1" src='./assets/espejoPlano1.png' width="300px" style="margin-right: 30px;")
        img(v-if="step >= 2" src='./assets/espejoPlano2.png' width="300px" style="margin-left: 30px;")
      .center
        img(v-if="step >= 3" src='./assets/magnification.png' width="300px" style="margin-top: 50px;")

    slide(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -40px;") Image formation
      h4(style="margin-top: -40px;").center Spherical mirrors
      .center
        img(v-if="step >= 1" src='./assets/concaveMirror.png' width="300px" style="margin-right: 30px;")
      .center
        img(v-if="step >= 2" src='./assets/concaveSphericalMirror.png' width="400px" style="margin-right: 30px;")

    slide(:steps=4, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Spherical mirrors
      .center
        img(v-if="step >= 1" src='./assets/parallelConcave1.png' width="300px;")
        img(v-if="step >= 2" src='./assets/parallelConcave2.png' width="325px;")
      .center
        img(v-if="step >= 3" src='./assets/parallelConvex1.png' width="300px;")
        img(v-if="step >= 4" src='./assets/parallelConvex2.png' width="270px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Sign conventions for mirrors
      .center
        img(src='./assets/signMirrors.png' width="300px;" style="margin-bottom:50px;")
        #table-wrapper
          table(style="width:90%;")#desc
            caption Sign convection
            tr
              th Quantity
              th Positive when ...
              th Negative when ...
            tr
              td Object location (<b>p</b>)
              td object is in front of mirror (<b>real object</b>).
              td object is in back of mirror (<b>virtual object</b>).
            tr
              td Image location (<b>q</b>)
              td image is in front of mirror (<b>real image</b>).
              td image is in back of mirror (<b>virtual image</b>).
            tr
              td Image height (<b>h'</b>)
              td image is <b>upright</b>.
              td image is <b>inverted</b>.
            tr
              td Focal length (<b>f</b>) and radius (<b>R</b>)
              td mirror is <b>concave</b>.
              td mirror is <b>convex</b>.
            tr
              td Magnification (<b>M</b>)
              td image is <b>upright</b>.
              td image is <b>inverted</b>.

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Sign conventions for mirrors
      .center
        img(v-if="step >= 1"  src='./assets/trazoRayosA.png' width="400px;" style="margin-bottom:50px;")
        img(v-if="step >= 2"  src='./assets/trazoRayosB.png' width="400px;" style="margin-bottom:50px;")
        img(v-if="step >= 3"  src='./assets/trazoRayosC.png' width="400px;" style="margin-bottom:50px;")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Spherical mirrors equation
      .center
        img(v-if="step >= 1"  src='./assets/eqMirror1.png' width="300px;" style="margin-bottom:50px;")
      .center
        img(v-if="step >= 2"  src='./assets/eqFR.png' width="150px;" style="margin-bottom:50px;")
      .center
        img(v-if="step >= 3"  src='./assets/eqMirror2.png' width="300px;" style="margin-bottom:50px;")

    slide.boredYet(:steps=1 enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 4
      example-four
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=4, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Thin lenses
      .center
        p(style="margin-top: -40px; color: blue;") Convergent
        img(v-if="step >= 1"  src='./assets/lensConvergent.png' width="300px;" style="margin-bottom:50px;")
        img(v-if="step >= 3"  src='./assets/lensConvergent2.png' width="360px;" style="margin-bottom:50px; margin-left:40px;")
      .center
        p(v-if="step >= 2" style="margin-top: -40px; color: blue;") Divergent
        img(v-if="step >= 2"  src='./assets/lensDivergent.png' width="300px;" style="margin-bottom:50px;")
        img(v-if="step >= 4"  src='./assets/lensDivergent2.png' width="350px;" style="margin-bottom:50px; margin-left:40px;")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Ray tracing
      .center
        img(v-if="step >= 1"  src='./assets/lensRays2.png' width="400px;" style="margin-bottom:50px;")
        img(v-if="step >= 2"  src='./assets/lensRays3.png' width="280px;" style="margin-bottom:50px; margin-left:40px;")
      .center
        img(v-if="step >= 3"  src='./assets/lensRays4.png' width="300px;" style="margin-bottom:50px;")

    slide(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Thin lens equation
      .center
        img(v-if="step >= 1"  src='./assets/eqMirror1.png' width="300px;" style="margin-bottom:50px;")
      .center
        img(v-if="step >= 2"  src='./assets/lensMagnification.png' width="300px;" style="margin-bottom:50px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Sign conventions for mirrors
      .center
        img(src='./assets/lensSigns.png' width="300px;" style="margin-bottom:50px;")
        #table-wrapper
          table(style="width:90%;")#desc
            caption Sign convection
            tr
              th Quantity
              th Positive when ...
              th Negative when ...
            tr
              td Object location (<b>p</b>)
              td object is in front of mirror (<b>real object</b>).
              td object is in back of mirror (<b>virtual object</b>).
            tr
              td Image location (<b>q</b>)
              td image is in back of mirror (<b>real image</b>).
              td image is in front of mirror (<b>virtual image</b>).
            tr
              td Image height (<b>h'</b>)
              td image is <b>upright</b>.
              td image is <b>inverted</b>.
            tr
              td Focal length (<b>f</b>) and radius (<b>R</b>)
              td lens is <b>convergent</b>.
              td lens is <b>Divergent</b>.
            tr
              td Magnification (<b>M</b>)
              td image is <b>upright</b>.
              td image is <b>inverted</b>.

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -10px;") Exercise 5
      example-five
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 6
      example-six
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1.center Physical Optics
      h3 Wave Optics
      h6.center Interference
      h6.center Difraction
      h6.center Polarization


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3.center Interference
      p When two or more waves overlap, the resultant displacement at any point and at any instant is found by adding the instantaneous displacements that would be produced at the point by the individual waves if each were present alone.
      .center
        interference

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3.center Interference
      p When two or more waves overlap, the resultant displacement at any point and at any instant is found by adding the instantaneous displacements that would be produced at the point by the individual waves if each were present alone.
      .center
        interference2

    slide(:steps=5, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top:-30px;").center Young experiment
      .center
        img(v-if="step >= 1" src='./assets/youngA.png' width="400px")
        img(v-if="step >= 2" src='./assets/youngB.png' width="235px" style="margin-left:30px;")
      .center
        img(v-if="step >= 3" src='./assets/fringeBright.png' width="600px" style="margin-top:30px;")
      .center
        img(v-if="step >= 4" src='./assets/fringeDark.png' width="600px" style="margin-top:30px;")
      .center
        img(v-if="step >= 5" src='./assets/yTan.png' width="150px" style="margin-top:30px;")

    slide(:steps=6, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h5.center Young experiment
      .center
        img(v-if="step >= 1" src='./assets/fringeBright.png' width="600px" style="margin-top:30px;")
      .center
        img(v-if="step >= 2" src='./assets/fringeDark.png' width="600px" style="margin-top:30px;")
      .center
        img(v-if="step >= 3" src='./assets/yTan.png' width="200px" style="margin-top:30px;")
      .center
        img(v-if="step >= 4" src='./assets/yBright0.png' width="400px" style="margin-top:20px;")
        img(v-if="step >= 5" src='./assets/yDark0.png' width="370px" style="margin-top:20px; margin-left: 30px;")
      .center
        img(v-if="step >= 6" src='./assets/yBright.png' width="500px" style="margin-top:30px;")
      .center
        img(v-if="step >= 6" src='./assets/yDark.png' width="500px" style="margin-top:30px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -20px;") Exercise 7
      .center
        img(src='./assets/youngA.png' width="200px" style="margin-top:-30px; object-fit: cover; width: 300px; height: 210px; object-position: -40% 0;")
      example-seven(style="margin-top: -30px;")
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(:steps=6, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h5(style="margin-top: -20px;").center Intensity Distribution of the Double-Slit Interference
      .center
        img(v-if="step >= 1" src='./assets/interf1.png' width="240px" style="margin-right: 15px;")
        img(v-if="step >= 1" src='./assets/interf2.png' width="300px" style="margin-left: 15px;")
        p(v-if="step >= 2" style="color: blue; margin-top: -5px; margin-bottom: -0px") then
      .center
        img(v-if="step >= 2" src='./assets/interf5.png' width="600px")
        p(v-if="step >= 3" style="color: blue; margin-top: -5px; margin-bottom: -0px") with
        img(v-if="step >= 3" src='./assets/interf6.png' width="300px")
        p(v-if="step >= 4" style="color: blue; margin-top: -5px; margin-bottom: -0px") and
      .center
        img(v-if="step >= 4" src='./assets/interf7.png' width="100px" style="margin-right: 15px;")
        | <span v-if="step >= 4" style="color: blue; font-size: 20px;">and</span>
        img(v-if="step >= 4" src='./assets/interf8.png' width="60px" style="margin-left: 15px;")
        p(v-if="step >= 5" style="color: blue; margin-top: -5px; margin-bottom: 10px") we have
      .center
        img(v-if="step >= 5" src='./assets/interf9.png' width="500px" style="margin-bottom: 25px;")
      .center
        p(v-if="step >= 6" style="color: blue; margin-top: -5px; margin-bottom: 10px") and the intensity
        img(v-if="step >= 6" src='./assets/interf10.png' width="500px" style="margin-right: 15px;")

    slide.boredYet(:steps=5, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h5(style="margin-top: -20px;").center Intensity Distribution of the Double-Slit Interference
      .center
        img(v-if="step >= 1" src='./assets/interf11.png' width="240px" style="margin-right: 30px;")
      p.center
        | <span v-if="step >= 2" style="color: blue; margin-rigth: 0px;">as</span>
        img(v-if="step >= 2" src='./assets/interf3.png' width="80px" style="margin-left: 30px; margin-right: 20px;")
        | <span v-if="step >= 3" style="color: blue;"> or</span>
        img(v-if="step >= 3" src='./assets/interf4.png' width="200px" style="margin-right: 30px; margin-left: 30px;")
      p(v-if="step >= 4" style="color: blue; margin-top: -5px; margin-bottom: 10px").center then
      .center
        img(v-if="step >= 4" src='./assets/interf12.png' width="300px" style="margin-left: 0px;")
      .center
        img(v-if="step >= 5" src='./assets/interf13.png' width="400px" style="margin-right: 0px;")
      .center
        img(v-if="step >= 5" src='./assets/interf14.png' width="250px" style="margin-top: 40px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 8
      example-eight
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: 20px;").center Diffraction
      .center
        img(src='./assets/diffraction1.jpg' width="600px")

    slide.boredYet(:steps=3 enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: 20px;").center Diffraction
      .center
        img(v-if="step >= 1" src='./assets/difraccion1.png' width="255px" style="margin-right: 30px;")
        img(v-if="step >= 2" src='./assets/difraccion3.png' width="200px" style="margin-top: 30px;")
      .center
        img(v-if="step >= 3" src='./assets/difraccion2.png' width="600px" style="margin-top: 30px;")

    slide.boredYet(:steps=7, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h5(style="margin-top: -20px;").center Diffraction: Single slit
      .center
        img(v-if="step >= 1" src='./assets/difraccion4.png' width="300px" style="margin-top: -30px; margin-right: 20px;")
        img(v-if="step >= 2" src='./assets/difraccion5.png' width="166px" style="margin-top: -30px; margin-left: 30px;")
      .center
        img(v-if="step >= 3" src='./assets/difraccion6.png' width="200px" style="margin-right: 20px;")
        | <span v-if="step >= 4" style="color: blue;"> then</span>
        img(v-if="step >= 4" src='./assets/difraccion7.png' width="200px" style="margin-left: 30px;")
      .center
        img(v-if="step >= 5" src='./assets/difraccion8.png' width="250px" style="margin-top: 40px; margin-right: 30px;")
        img(v-if="step >= 6" src='./assets/difraccion9.png' width="250px" style="margin-top: 40px; margin-left: 30px;")
      .center
        img(v-if="step >= 7" src='./assets/difraccion10.png' width="700px" style="margin-top: 40px;")

    slide.boredYet(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Diffraction: Single slit
      .center
        img(v-if="step >= 1" src='./assets/difraccion11.png' width="400px" style="margin-top: -40px;")
      .center
        img(v-if="step >= 2" src='./assets/difraccion16.png' width="500px" style="margin-top: 40px;")

    slide.boredYet(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Diffraction: Double slit
      .center
        img(v-if="step >= 1" src='./assets/difraccion15.png' width="500px" style="margin-top: -40px;")
      .center
        img(v-if="step >= 2" src='./assets/difraccion17.png' width="600px" style="margin-top: 40px;")

    slide.boredYet(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Multiple slits: diffraction grating
      .center
        img(v-if="step >= 1" src='./assets/difraccion19.png' width="300px" style="margin-top: -40px;")
      .center
        img(v-if="step >= 2" src='./assets/difraccion18.png' width="600px" style="margin-top: 50px;")
      .center
        img(v-if="step >= 3" src='./assets/difraccion20.png' width="400px" style="margin-top: 50px;")

    slide.boredYet(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Diffraction applications
      .center
        img(v-if="step >= 1" src='./assets/difraccion21.png' width="300px" style="margin-top: -40px;")
      .center
        img(v-if="step >= 2" src='./assets/difraccion22.png' width="600px" style="margin-top: 10px;")

    slide.boredYet(:steps=4, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Diffraction applications
      .center
        img(v-if="step >= 1" src='./assets/difraccion23.png' width="446px" style="margin-top: -40px; margin-right: 40px;")
        img(v-if="step >= 2" src='./assets/difraccion24.png' width="400px" style="margin-top: -40px;")
      .center
        img(v-if="step >= 3" src='./assets/difraccion25.png' width="200px" style="margin-top: 40px; margin-right: 40px;")
        img(v-if="step >= 4" src='./assets/difraccion26.png' width="400px" style="margin-top: 40px; margin-left: 40px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 9
      example-nine
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown', :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 10
      example-ten
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -40px;") Polarization
      .center
        img(src='./assets/polarizacion1.png' width="500px" style="margin-top: 40px; margin-right: 20px;")
        img(src='./assets/polarizacion2.png' width="255px" style="margin-top: 40px; margin-left: 20px;")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center(style="margin-top: -20px;") Polarization: Malus Law
      .center
        img(src='./assets/polarizacion3.png' width="400px" style="margin-top: -40px;")
      .center
        img(src='./assets/polarizacion4.png' width="600px")
      .center
        img(src='./assets/polarizacion5.png' width="300px" style="margin-top: 40px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 11
      example-eleven
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p.center Física Moderna<br> Edición revisada<br> Norma Esthela Flores, Jorge Enrique Figueroa.<br>Pearsons-Prentice Hall
        p.center Physics for Scientist and Engineers with Modern Physics <br>9th Edition<br> Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com



</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optics',
    description: 'Geometrical and wave optics',
    path: 'optics'
  },
  components: {
    'example-one': require('./components/ExampleOne'),
    'example-two': require('./components/ExampleTwo'),
    'example-three': require('./components/ExampleThree'),
    'example-four': require('./components/ExampleFour'),
    'example-five': require('./components/ExampleFive'),
    'example-six': require('./components/ExampleSix'),
    'example-seven': require('./components/ExampleSeven'),
    'example-eight': require('./components/ExampleEight'),
    'example-nine': require('./components/ExampleNine'),
    'example-ten': require('./components/ExampleTen'),
    'example-eleven': require('./components/ExampleEleven'),
    'interference': require('./components/interference'),
    'interference2': require('./components/interference2'),
    'sodoku': require('./components/Sodoku')
  },

  data: function () {
    return {
      theme: 'Optics'
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#Relativity {
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

  #table-wrapper {
    display: flex;
    padding-left:0px;
    align-content: center;

  }
  #desc {
    width: 30em;
    border-collapse: collapse;
    border-bottom: 1px solid black;

    & th {
      background-color: whitesmoke;
      border-bottom: 1px solid black;
      padding: 1em;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
    }

    & td {
      text-align:left;
      padding-left: 4em;
      font-size: 15px;
      height: 15px;
    }

    & caption {
      font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      font-style: italic;
    }
  }

  .eg-slide-content {
    width: 30em;
    max-width: 95%;
    margin: 0 100 0 50;
  }

  .pressureFormula{
      height: 5em;
  }
}
</style>
