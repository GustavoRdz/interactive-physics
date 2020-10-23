<template lang="pug">
#Relativity.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Quantum physics
        img(src='./assets/microres4.jpg')
        h4 Introduction:<br>Black body radiation<br> Photoelectric effect<br> Compton scattering
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }} </sup>

    slide(:steps=4, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 1")
            <b>Black body radiation</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 2")
            <b>Planck hypotesis</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=3")
            <b>Photoelectric effect</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=4")
            <b>Compton scattering</b>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1 Black body radiation
      h3(style="margin-top:0px;") Thermal radiation
      .center
        img(src='./assets/filament.png' width="300px")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Thermal radiation
      .center
        p Object emits radiation due its temperature.
        p Objects at room themperature emits infrared radiation.
        p As objects increase its temperature begins to glow in red.
        p At very high temperatures that glow appeart to be white.
        p How this happens?
      .center
        img(src='./assets/filament.png' width="150px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Black body radiation
      .center
        img(src='./assets/blackbody.png' width="300px" style="margin-right:20px;")
        img(src='./assets/blackbodyGraph.png' width="300px" style="margin-left:20px;")
      .center
        img(src='./assets/charcoal.png' width="250px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center  Black body radiation
      h6.center Stefan law
      .center(style="margin-top: -40px;")
        img(src='./assets/stefanLaw.png' width="200px" style="margin-top: -40px;")
      h6(style="margin-top: 0px;").center Wien displacement law
      .center(style="margin-top: -40px;")
        img(src='./assets/wienShift.png' width="500px" style="margin-top: -40px;")
      h6(style="margin-top: 0px;").center Rayleigh-Jeans
      .center(style="margin-top: -40px;")
        img(src='./assets/rayleighJeans.png' width="300px" style="margin-top: -10px;")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Ultraviolet Catastrophe
      .center
        p Rayleigh Jeans Law
        img(src='./assets/rayleighJeans.png' width="200px" )
      .center
        img(src='./assets/ultravioletCat.png' width="250px")


    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Question
      p.center
        img(src='./assets/blackbodyGraph.png' width="250px" style="margin-right: 40px;")
        img(src='./assets/stars.png' width="300px" style="margin-left: 40px;")
      h6(style="margin-top: 0px;").center Wien displacement law
      .center(style="margin-top: -40px;")
        img(src='./assets/wienShift.png' width="500px" style="margin-top: -40px;")

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
      h4(style="margin-top:-20px;").center Max Planck theory of black body
      p 1. Physical components:<br> Planck assumed the cavity radiation came from atomic oscillators in the cavity walls
      .center
        img(src='./assets/blackbody.png' width="200px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Max Planck theory of black body
      p 2. Behavior of the components:<br> (a) The energy of an oscillator can have only certain discrete values <b>E<sub>n</sub></b>:
      p.center   <b>E<sub>n</sub> = nhf</b>
      p where <b>n</b> is a positive integer called a quantum number, <b>f</b> is the oscillator’s frequency, and <b>h</b> is a parameter Planck introduced that is now called <b>Planck’s constant</b>.
      p Because the energy of each oscillator can have only discrete values, we say <b>the energy is quantized</b>.
      p When <b>n = 1</b>, its energy is <b>hf</b>; in <b>n = 2</b>, its energy is <b>2hf</b> ; and so on.


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Max Planck theory of black body

      p(style="margin-top:-20px;") (b) The oscillators <b>emit</b> or <b>absorb</b> energy when making a transition from one quantum state to another.
      p The entire energy difference between the initial and final states in the transition is emitted or absorbed as a single <b>quantum of radiation</b>.
      p If the transition is from one state to a lower adjacent state—say, from the <b>n = 3</b> state to the <b>n = 2</b> the amount of energy emitted by the oscillator and carried by the quantum of radiation is
      p.center <b>E = hf</b>
      .center
        img(src='./assets/energyLevels.png' width="200px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Planck's distribution
      .center
        img(src='./assets/planckDist.png' width="300px" )
      .center
        p(style="margin-top: 0px; margin-bottom: -5px;") Planck constant
        img(src='./assets/planckConst.png' width="300px" style="margin-bottom:30px;")
      .center
        img(src='./assets/distLevels.png' width="500px")


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

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Photoelectric effect
      .center
        img(src='./assets/photoelectricDevice.png' width="300px")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 1. <span style="color: red;"><b>Classical prediction</b></span>: Electrons should absorb energy continuously from electromagnetic waves.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: The maximum kinetic energy of photoelectrons is independent of light intensity as shown in figure both curves fall to zero at the same negative voltage.
      .center
        img(src='./assets/photoelectricDevice.png' width="180px" v-if="step >=3" style="margin-right: 100px;")
        img(src='./assets/currentVsV.png' width="400px" v-if="step >= 3" style="margin-left: 100px;")

    slide(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 2. <span style="color: red;"><b>Classical prediction</b></span>: At low light intensities, a measurable time interval should pass between the instant the light is turned on and the time an electron is ejected from the metal.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: Electrons are emitted from the surface of the metal almost instantaneously (less than 10<sup>-9</sup> s after the surface is illuminated), even at very low light intensities.

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 3. <span style="color: red;"><b>Classical prediction</b></span>: Electrons should be ejected from the metal at any incident light frequency, as long as the light intensity is high enough, because energy is transferred to the metal regardless of the incident light frequency.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: No electrons are emitted if the incident light frequency falls below some cutoff frequency <b>f<sub>c</sub></b>, whose value is characteristic of the material being illuminated. No electrons are ejected below this cutoff frequency regardless of the light intensity.
      .center
        img(src='./assets/energyGraph.png' width="300px" v-if="step >= 3" style="margin-left: 100px;")

    slide(:steps=3, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 4. <span style="color: red;"><b>Classical prediction</b></span>: There should be no relationship between the frequency of the light and the electron kinetic energy. The kinetic energy should be related to the intensity of the light.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: The maximum kinetic energy of the photoelectrons increases with increasing light frequency.
      .center
        img(src='./assets/energyGraph.png' width="330px" v-if="step >= 3")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -10px;") Photoelectric effect
      h4.center Equation
      .center
        img(src='./assets/photoelectricEq.png' width="300px" style="margin-top: -10px;")
      .left
        p(style="padding-left:160px;") <b><span style="font-style: italic; font-family: times;">K</span><sub>max</sub></b>: photoelectron's maximum kinetic energy
        p(style="padding-left: 200px;") <span style="font-style: italic; font-family: times;"><b>h</b></span>: planck constant
        p(style="padding-left: 200px;") <span style="font-style: italic; font-family: times;"><b>f</b></span>: frequency of the photon
        p(style="padding-left: 200px;") <span style="font-style: italic; font-family: times;"><b>φ</b></span>: work function

    slide(:steps=2, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Photoelectric effect
      h5(style="margin-top: -40px;").center Quantum features
      .center
        img(src='./assets/photoelectricEq.png' width="300px" style="margin-top: -10px;")
      p 1. Dependence of photoelectron kinetic energy on light intensity equation shows that Kmax is independent of the light intensity.
      p 2. Time interval between incidence of light and ejection of photoelectrons, near-instantaneous emission of electrons is consistent with the photon model of light.
      p 3. Dependence of ejection of electrons on light frequency. Because the photon must have energy greater than the work function f to eject an electron, the photoelectric effect cannot be observed below a certain cutoff frequency.
      p 4. Dependence of photoelectron kinetic energy on light frequency. A photon of higher frequency carries more energy and therefore ejects a photoelectron with more kinetic energy than does a photon of lower frequency.

    slide.boredYet(:steps=1 enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
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


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -10px;") Exercise 4
      example-four
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
      h3 Exercise 5
      example-five
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
      h4(style="margin-top: -20px;").center Photoelectric effect application
      .center
        img(v-if="step >= 1" src='./assets/photomultiplier.png' width="350px" style="margin-top: -30px;")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1 Compoton scattering
      p When two or more waves overlap, the resultant displacement at any point and at any instant is found by adding the instantaneous displacements that would be produced at the point by the individual waves if each were present alone.
      .center
        interference

    //- slide(:steps=1, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3.center Interference
    //-   p When two or more waves overlap, the resultant displacement at any point and at any instant is found by adding the instantaneous displacements that would be produced at the point by the individual waves if each were present alone.
    //-   .center
    //-     interference2

    //- slide(:steps=5, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3(style="margin-top:-30px;").center Young experiment
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/youngA.png' width="400px")
    //-     img(v-if="step >= 2" src='./assets/youngB.png' width="235px" style="margin-left:30px;")
    //-   .center
    //-     img(v-if="step >= 3" src='./assets/fringeBright.png' width="600px" style="margin-top:30px;")
    //-   .center
    //-     img(v-if="step >= 4" src='./assets/fringeDark.png' width="600px" style="margin-top:30px;")
    //-   .center
    //-     img(v-if="step >= 5" src='./assets/yTan.png' width="150px" style="margin-top:30px;")

    //- slide(:steps=6, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h5.center Young experiment
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/fringeBright.png' width="600px" style="margin-top:30px;")
    //-   .center
    //-     img(v-if="step >= 2" src='./assets/fringeDark.png' width="600px" style="margin-top:30px;")
    //-   .center
    //-     img(v-if="step >= 3" src='./assets/yTan.png' width="200px" style="margin-top:30px;")
    //-   .center
    //-     img(v-if="step >= 4" src='./assets/yBright0.png' width="400px" style="margin-top:20px;")
    //-     img(v-if="step >= 5" src='./assets/yDark0.png' width="370px" style="margin-top:20px; margin-left: 30px;")
    //-   .center
    //-     img(v-if="step >= 6" src='./assets/yBright.png' width="500px" style="margin-top:30px;")
    //-   .center
    //-     img(v-if="step >= 6" src='./assets/yDark.png' width="500px" style="margin-top:30px;")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3(style="margin-top: -20px;") Exercise 7
    //-   .center
    //-     img(src='./assets/youngA.png' width="200px" style="margin-top:-30px; object-fit: cover; width: 300px; height: 210px; object-position: -40% 0;")
    //-   example-seven(style="margin-top: -30px;")
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(:steps=6, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h5(style="margin-top: -20px;").center Intensity Distribution of the Double-Slit Interference
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/interf1.png' width="240px" style="margin-right: 15px;")
    //-     img(v-if="step >= 1" src='./assets/interf2.png' width="300px" style="margin-left: 15px;")
    //-     p(v-if="step >= 2" style="color: blue; margin-top: -5px; margin-bottom: -0px") then
    //-   .center
    //-     img(v-if="step >= 2" src='./assets/interf5.png' width="600px")
    //-     p(v-if="step >= 3" style="color: blue; margin-top: -5px; margin-bottom: -0px") with
    //-     img(v-if="step >= 3" src='./assets/interf6.png' width="300px")
    //-     p(v-if="step >= 4" style="color: blue; margin-top: -5px; margin-bottom: -0px") and
    //-   .center
    //-     img(v-if="step >= 4" src='./assets/interf7.png' width="100px" style="margin-right: 15px;")
    //-     | <span v-if="step >= 4" style="color: blue; font-size: 20px;">and</span>
    //-     img(v-if="step >= 4" src='./assets/interf8.png' width="60px" style="margin-left: 15px;")
    //-     p(v-if="step >= 5" style="color: blue; margin-top: -5px; margin-bottom: 10px") we have
    //-   .center
    //-     img(v-if="step >= 5" src='./assets/interf9.png' width="500px" style="margin-bottom: 25px;")
    //-   .center
    //-     p(v-if="step >= 6" style="color: blue; margin-top: -5px; margin-bottom: 10px") and the intensity
    //-     img(v-if="step >= 6" src='./assets/interf10.png' width="500px" style="margin-right: 15px;")

    //- slide.boredYet(:steps=5, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h5(style="margin-top: -20px;").center Intensity Distribution of the Double-Slit Interference
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/interf11.png' width="240px" style="margin-right: 30px;")
    //-   p.center
    //-     | <span v-if="step >= 2" style="color: blue; margin-rigth: 0px;">as</span>
    //-     img(v-if="step >= 2" src='./assets/interf3.png' width="80px" style="margin-left: 30px; margin-right: 20px;")
    //-     | <span v-if="step >= 3" style="color: blue;"> or</span>
    //-     img(v-if="step >= 3" src='./assets/interf4.png' width="200px" style="margin-right: 30px; margin-left: 30px;")
    //-   p(v-if="step >= 4" style="color: blue; margin-top: -5px; margin-bottom: 10px").center then
    //-   .center
    //-     img(v-if="step >= 4" src='./assets/interf12.png' width="300px" style="margin-left: 0px;")
    //-   .center
    //-     img(v-if="step >= 5" src='./assets/interf13.png' width="400px" style="margin-right: 0px;")
    //-   .center
    //-     img(v-if="step >= 5" src='./assets/interf14.png' width="250px" style="margin-top: 40px;")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3 Exercise 8
    //-   example-eight
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3(style="margin-top: 20px;").center Diffraction
    //-   .center
    //-     img(src='./assets/diffraction1.jpg' width="600px")

    //- slide.boredYet(:steps=3 enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3(style="margin-top: 20px;").center Diffraction
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion1.png' width="255px" style="margin-right: 30px;")
    //-     img(v-if="step >= 2" src='./assets/difraccion3.png' width="200px" style="margin-top: 30px;")
    //-   .center
    //-     img(v-if="step >= 3" src='./assets/difraccion2.png' width="600px" style="margin-top: 30px;")

    //- slide.boredYet(:steps=7, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h5(style="margin-top: -20px;").center Diffraction: Single slit
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion4.png' width="300px" style="margin-top: -30px; margin-right: 20px;")
    //-     img(v-if="step >= 2" src='./assets/difraccion5.png' width="166px" style="margin-top: -30px; margin-left: 30px;")
    //-   .center
    //-     img(v-if="step >= 3" src='./assets/difraccion6.png' width="200px" style="margin-right: 20px;")
    //-     | <span v-if="step >= 4" style="color: blue;"> then</span>
    //-     img(v-if="step >= 4" src='./assets/difraccion7.png' width="200px" style="margin-left: 30px;")
    //-   .center
    //-     img(v-if="step >= 5" src='./assets/difraccion8.png' width="250px" style="margin-top: 40px; margin-right: 30px;")
    //-     img(v-if="step >= 6" src='./assets/difraccion9.png' width="250px" style="margin-top: 40px; margin-left: 30px;")
    //-   .center
    //-     img(v-if="step >= 7" src='./assets/difraccion10.png' width="700px" style="margin-top: 40px;")

    //- slide.boredYet(:steps=2, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h4(style="margin-top: -20px;").center Diffraction: Single slit
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion11.png' width="400px" style="margin-top: -40px;")
    //-   .center
    //-     img(v-if="step >= 2" src='./assets/difraccion16.png' width="500px" style="margin-top: 40px;")

    //- slide.boredYet(:steps=2, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h4(style="margin-top: -20px;").center Diffraction: Double slit
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion15.png' width="500px" style="margin-top: -40px;")
    //-   .center
    //-     img(v-if="step >= 2" src='./assets/difraccion17.png' width="600px" style="margin-top: 40px;")

    //- slide.boredYet(:steps=3, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h4(style="margin-top: -20px;").center Multiple slits: diffraction grating
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion19.png' width="300px" style="margin-top: -40px;")
    //-   .center
    //-     img(v-if="step >= 2" src='./assets/difraccion18.png' width="600px" style="margin-top: 50px;")
    //-   .center
    //-     img(v-if="step >= 3" src='./assets/difraccion20.png' width="400px" style="margin-top: 50px;")

    //- slide.boredYet(:steps=2, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h4(style="margin-top: -20px;").center Diffraction applications
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion21.png' width="300px" style="margin-top: -40px;")
    //-   .center
    //-     img(v-if="step >= 2" src='./assets/difraccion22.png' width="600px" style="margin-top: 10px;")

    //- slide.boredYet(:steps=4, enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h4(style="margin-top: -20px;").center Diffraction applications
    //-   .center
    //-     img(v-if="step >= 1" src='./assets/difraccion23.png' width="446px" style="margin-top: -40px; margin-right: 40px;")
    //-     img(v-if="step >= 2" src='./assets/difraccion24.png' width="400px" style="margin-top: -40px;")
    //-   .center
    //-     img(v-if="step >= 3" src='./assets/difraccion25.png' width="200px" style="margin-top: 40px; margin-right: 40px;")
    //-     img(v-if="step >= 4" src='./assets/difraccion26.png' width="400px" style="margin-top: 40px; margin-left: 40px;")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3 Exercise 9
    //-   example-nine
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown', :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3 Exercise 10
    //-   example-ten
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3(style="margin-top: -40px;") Polarization
    //-   .center
    //-     img(src='./assets/polarizacion1.png' width="500px" style="margin-top: 40px; margin-right: 20px;")
    //-     img(src='./assets/polarizacion2.png' width="255px" style="margin-top: 40px; margin-left: 20px;")

    //- slide.boredYet(enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h4.center(style="margin-top: -20px;") Polarization: Malus Law
    //-   .center
    //-     img(src='./assets/polarizacion3.png' width="400px" style="margin-top: -40px;")
    //-   .center
    //-     img(src='./assets/polarizacion4.png' width="600px")
    //-   .center
    //-     img(src='./assets/polarizacion5.png' width="300px" style="margin-top: 40px;")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
    //-   h3 Exercise 11
    //-   example-eleven
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

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
    title: 'Photoelectric',
    description: 'Black body radiation and the Photoelectric effect',
    path: 'photoelectric'
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
