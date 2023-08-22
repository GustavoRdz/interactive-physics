<template lang="pug">
#Relativity.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h1 Quantum physics
        img(src='./assets/microres4.jpg')
        p Black body radiation<br> Photoelectric effect<br> X Rays
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }} </sup>
      //- .prev(@click.stop='previousSlide' style="float: left;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 1")
            <b>Black body radiation</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 1")
            <b>Planck hypotesis</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=1")
            <b>Photoelectric effect</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=1")
            <b>X Rays</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1 Black body radiation
      h3(style="margin-top:0px;") Thermal radiation
      .center
        img(src='./assets/filament.png' width="300px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;



    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
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
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Black body radiation
      .center
        img(src='./assets/blackbody.png' width="300px" style="margin-right:20px;")
        img(src='./assets/blackbodyGraph.png' width="300px" style="margin-left:20px;")
      .center
        img(src='./assets/charcoal.png' width="250px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
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
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Ultraviolet Catastrophe
      .center
        p Rayleigh Jeans Law
        img(src='./assets/rayleighJeans.png' width="200px" )
      .center
        img(src='./assets/ultravioletCat.png' width="250px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Question
      p.center
        img(src='./assets/blackbodyGraph.png' width="250px" style="margin-right: 40px;")
        img(src='./assets/stars.png' width="300px" style="margin-left: 40px;")
      h6(style="margin-top: 0px;").center Wien displacement law
      .center(style="margin-top: -40px;")
        img(src='./assets/wienShift.png' width="500px" style="margin-top: -40px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 1
      example-one
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Max Planck theory of black body
      p 1. Physical components:<br> Planck assumed the cavity radiation came from atomic oscillators in the cavity walls
      .center
        img(src='./assets/blackbody.png' width="200px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Max Planck theory of black body
        p 2. Behavior of the components:<br> (a) The energy of an oscillator can have only certain discrete values <b>E<sub>n</sub></b>:
        p.center   <b>E<sub>n</sub> = nhf</b>
        p where <b>n</b> is a positive integer called a quantum number, <b>f</b> is the oscillator’s frequency, and <b>h</b> is a parameter Planck introduced that is now called <b>Planck’s constant</b>.
        p Because the energy of each oscillator can have only discrete values, we say <b>the energy is quantized</b>.
        p When <b>n = 1</b>, its energy is <b>hf</b>; in <b>n = 2</b>, its energy is <b>2hf</b> ; and so on.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Max Planck theory of black body
      p(style="margin-top:-20px;") (b) The oscillators <b>emit</b> or <b>absorb</b> energy when making a transition from one quantum state to another.
      p The entire energy difference between the initial and final states in the transition is emitted or absorbed as a single <b>quantum of radiation</b>.
      p If the transition is from one state to a lower adjacent state—say, from the <b>n = 3</b> state to the <b>n = 2</b> the amount of energy emitted by the oscillator and carried by the quantum of radiation is
      p.center <b>E = hf</b>
      .center
        img(src='./assets/energyLevels.png' width="200px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Planck's distribution
      .center
        img(src='./assets/planckDist.png' width="300px" )
      .center
        p(style="margin-top: 0px; margin-bottom: -5px;") Planck constant
        img(src='./assets/planckConst.png' width="300px" style="margin-bottom:30px;")
      .center
        img(src='./assets/distLevels.png' width="500px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 2
      example-two
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Photoelectric effect
      .center
        img(src='./assets/photoelectricDevice.png' width="300px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=3, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 1. <span style="color: red;"><b>Classical prediction</b></span>: Electrons should absorb energy continuously from electromagnetic waves.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: The maximum kinetic energy of photoelectrons is independent of light intensity as shown in figure both curves fall to zero at the same negative voltage.
      .center
        img(src='./assets/photoelectricDevice.png' width="180px" v-if="step >=3" style="margin-right: 100px;")
        img(src='./assets/currentVsV.png' width="400px" v-if="step >= 3" style="margin-left: 100px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=2, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 2. <span style="color: red;"><b>Classical prediction</b></span>: At low light intensities, a measurable time interval should pass between the instant the light is turned on and the time an electron is ejected from the metal.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: Electrons are emitted from the surface of the metal almost instantaneously (less than 10<sup>-9</sup> s after the surface is illuminated), even at very low light intensities.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=3, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 3. <span style="color: red;"><b>Classical prediction</b></span>: Electrons should be ejected from the metal at any incident light frequency, as long as the light intensity is high enough, because energy is transferred to the metal regardless of the incident light frequency.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: No electrons are emitted if the incident light frequency falls below some cutoff frequency <b>f<sub>c</sub></b>, whose value is characteristic of the material being illuminated. No electrons are ejected below this cutoff frequency regardless of the light intensity.
      .center
        img(src='./assets/energyGraph.png' width="300px" v-if="step >= 3" style="margin-left: 100px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=3, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Photoelectric effect
      p(style="color: blue;").center Features of the photoelectric effect
      p(v-if="step >= 1") 4. <span style="color: red;"><b>Classical prediction</b></span>: There should be no relationship between the frequency of the light and the electron kinetic energy. The kinetic energy should be related to the intensity of the light.
      p(v-if="step >= 2") <span style="color: green;"><b>Experimental result</b></span>: The maximum kinetic energy of the photoelectrons increases with increasing light frequency.
      .center
        img(src='./assets/energyGraph.png' width="330px" v-if="step >= 3")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
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
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=2, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -40px;").center Photoelectric effect
      h5(style="margin-top: -40px;").center Quantum features
      .center
        img(src='./assets/photoelectricEq.png' width="300px" style="margin-top: -10px;")
      p 1. Dependence of photoelectron kinetic energy on light intensity equation shows that Kmax is independent of the light intensity.
      p 2. Time interval between incidence of light and ejection of photoelectrons, near-instantaneous emission of electrons is consistent with the photon model of light.
      p 3. Dependence of ejection of electrons on light frequency. Because the photon must have energy greater than the work function f to eject an electron, the photoelectric effect cannot be observed below a certain cutoff frequency.
      p 4. Dependence of photoelectron kinetic energy on light frequency. A photon of higher frequency carries more energy and therefore ejects a photoelectron with more kinetic energy than does a photon of lower frequency.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(:steps=1 enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 3
      example-three
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -10px;") Exercise 4
      example-four
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 5
      example-five
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Photoelectric effect application
      .center
        img(src='./assets/photomultiplier.png' width="350px" style="margin-top: -30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1(style="margin-top:-20px") X Rays
      .center
        img(src='./assets/firstXrayImage.jpg' width="500px" style="margin-top: -0px;")
      p.center X-rays were first discovered in 1895<br>German physicist Wilhelm Conrad Röntgen (1845 – 1923).
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h1(style="margin-top:-20px") X Rays
      h6.center themes
      p.center Bremsstrahlung, X-rays origins
      p.center Compton scattering
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3.center X-Rays
      h6.center Characteristics
      ul(style="padding-left:150px;")
        li It is electromagnetic radiation
        li Wavelength range: λ = 0.01 - 10 nanometers (1nm = 1x10<sup>-9</sup>)
        li Frequency range: f = 30 petaHertz - 30 exaHertz (30x10<sup>15</sup> - 30x10<sup>18</sup>Hz)
        li Energy: E = 100eV - 100keV
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: 40px;").center Crookes Tube
      .center
        img(src="./assets/crookesTube.jpg" width="418px")
        img(src="./assets/crookesTubeTwo.jpg" width="300px")
        //- p(style="font-size: 20px;") By Daniel Frost Comstock - Downloaded from Daniel Frost Comstock &amp; Leonard T. Troland (1917)<br> The Nature of Matter and Electricity: An Outline of Modern Views, D. Van Nostrand Co., New York, p.190, Plate 5 on Google Books, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3270127
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top:40px;").center X-ray tube
      .center
        img(src="./assets/coolidge_xray_tube.jpg")
        p(style="font-size: 20px;") By Daniel Frost Comstock - Downloaded from Daniel Frost Comstock &amp; Leonard T. Troland (1917)<br> The Nature of Matter and Electricity: An Outline of Modern Views, D. Van Nostrand Co., New York, p.190, Plate 5 on Google Books, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3270127
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top:-30px;").center X-ray tube
      h6.center Modern X-ray tube
      p(style="margin-top: -50px;").center
        img(src="./assets/modernXrayTube.png" width="800px;")
        p.center <span style="font-size: 20px;">Taken without permision from: Handbook of X-ray imaging.  PAolo Russo, editor. Fig 2.2</span>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3.center X-Ray Spectrum
      .center
        img(src='./assets/xRaySpectrum.jpg' width="500px" style="margin-top:30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Bremsstrahlung: Breaking radiation
      radiacion-frenado
      .center
        img(src='./assets/bremsstrahlungChar.png' width="600px" style="margin-top:30px;")
        p(style="font-size: 20px;") Image from: X-ray imaging using 100 μm thick Gas Electron Multipliers operating in Kr-CO2 mixtures. Rita Roque, 2018
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Energy in breaking radiation
      p <span style="color: blue;"><b>Cases 1, 2</b></span>: The resulting photon has the diference of energy that the electron has after and before the interaction
      p(style="font-size: 50px; margin-top: -20px;").center <span style="font-size: 20px;">½</span>m<sub style="font-size: 25px;">e</sub>v<sub style="font-size: 15px;">0</sub><sup style="font-size: 20px;">2</sup> - <span style="font-size: 20px;">½</span>m<sub style="font-size: 25px;">e</sub>v<sub style="font-size: 15px;">f</sub><sup style="font-size: 20px;">2</sup> = hf
      p <span style="color: blue;"><b>Case 3</b></span>: The energy tranfer from electron to photos is the maximum:
      p(style="font-size: 50px; margin-top: -20px;").center <span style="font-size: 20px;">½</span>m<sub style="font-size: 25px;">e</sub>v<sup style="font-size: 20px;">2</sup> = hf
      p <span style="color: blue;"><b>Case 4</b></span>: The photon energy is detemined by the electronic transition
      p The electron speed is determined by the electric potential that is applied between electrodes.
      p(style="font-size: 50px; margin-top: -20px;").center <span style="font-size: 20px;">½</span>m<sub style="font-size: 25px;">e</sub>v<sup style="font-size: 20px;">2</sup> = eV
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -20px;") Compton scattering
      h5.center Scattering experiment
      .center
        img(src='./assets/comptonExperiment.png' width="700px" style="margin-top:-30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(:steps=4, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -20px;") Compton experiment
      h5(style="margin-top: -40px;").center Results
      .center
        img(src='./assets/comptonExperiment.png' width="300px" style="margin-top:-30px;")
      .center
        img(v-if="step >= 1" src='./assets/comptonResult0.png' width="300px" style="margin-right: 30px;")
        img(v-if="step >= 2" src='./assets/comptonResult45.png' width="260px" style="margin-left: 30px;")
      .center
        img(v-if="step >= 3" src='./assets/comptonResult90.png' width="270px" style="margin-right: 0px; margin-left: 30px;")
        img(v-if="step >= 4" src='./assets/comptonResult135.png' width="300px" style="margin-left: 90px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -20px;") Compton scattering
      h5.center Compton effect
      .center
        img(src='./assets/comptonFig.png' width="500px" style="margin-top:-30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(:steps=4, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/comptonScattering.png' width="400px" style=" position: absolute; left: 50px; top: 30px;")
      h5(style="margin-top: 130px;").center Compton equation
      p Photon has linear momentum, for the incident and scattered photons  given by
      .center
        img(v-if="step >= 1" src='./assets/comptonEq01.png' width="240px" style="margin-right: 30px;")
        img(v-if="step >= 1" src='./assets/comptonEq02.png' width="240px" style="margin-left: 30px;")
      p(v-if="step >= 2" ) conservation of momentum gives
      .center
        img(v-if="step >= 3" src='./assets/comptonEq03.png' width="220px" style="margin-top: -60px;")
      p(v-if="step >= 4") or
      .center
        img(v-if="step >= 4" src='./assets/comptonEq04.png' width="400px" style="margin-top: -30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide.boredYet(:steps=4, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/comptonScattering.png' width="300px" style=" position: absolute; left: 100px; top: 70px;")
      h5(style="margin-top: 130px;").center Compton equation
      p(v-if="step >= 1") with electron energies
        |
        img(v-if="step >= 1" src='./assets/comptonEq05.png' width="100px" style="margin: 0px 10px -10px 10px;")
        | and
        |
        img(v-if="step >= 1" src='./assets/comptonEnergye.png' width="120px" style="margin: 0px 10px  -5px 10px;")
        | before and after collision respectively, conservation of energy gives
      .center
        img(v-if="step >= 2" src='./assets/comptonEq07.png' width="600px" style="margin-right: 30px;")
      p(v-if="step >= 3") squaring to remove the square root
      .center
        img(v-if="step >= 3" src='./assets/comptonEq08.png' width="600px" style="margin-right: 30px;")
      p(v-if="step >= 4") for the electron momentum
      .center
        img(v-if="step >= 4" src='./assets/comptonEq09.png' width="600px" style="margin-right: 30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(:steps=3, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/comptonScattering.png' width="300px" style=" position: absolute; left: 100px; top: 70px;")
      h5(style="margin-top: 130px;").center Compton equation
      p then from the <b>momentum conservation</b> we have
      .center
        img(v-if="step >= 1" src='./assets/electronMomentum1.png' width="40px")
        img(v-if="step >= 1" src='./assets/electronMomentum2.png' width="400px")
      p(v-if="step >= 2") and from the <b>energy conservation</b> we have
      .center
        img(v-if="step >= 2" src='./assets/comptonEq09.png' width="700px" style="margin-right: 30px;")
      p(v-if="step >= 3") equating these expression we have
      .center
        img(v-if="step >= 3" src='./assets/comptonEq10.png' width="500px" style="margin-right: 30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide.boredYet(:steps=3, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/comptonScattering.png' width="300px" style=" position: absolute; left: 100px; top: 70px;")
      h5(style="margin-top: 130px;").center Compton equation
      p Then multiplying
      .center
        img(v-if="step >= 1" src='./assets/comptonEq10.png' width="400px" style="margin-top: -30px;")
      p by
        |
        img(v-if="step >= 1" src='./assets/comptonEq11.png' width="150px" style="margin: 0 10px -15px 10px;")
        | and using
        img(v-if="step >= 1" src='./assets/comptonEq12.png' width="150px" style="margin: 0 10px -20px 10px;")
      p(v-if="step >= 2") we have
      .center
        img(v-if="step >= 2" src='./assets/comptonEq13.png' width="600px" style="margin-top: -50px;")
      p(v-if="step >= 3" style="margin-top: -0px;") then the photon change of wavelength after scattering is given by
      .center
        img(v-if="step >= 3" src='./assets/comptonEq14.png' width="600px" style="margin-top: -20px; border: orange solid;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(:steps=4, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/comptonScattering.png' width="300px" style=" position: absolute; left: 100px; top: 70px;")
      h5(style="margin-top: 40px;").center Compton equations
      h6.center Electron scattering
      p Conservation of momentum by components
      .center
        img(v-if="step >= 1" src='./assets/pComponents.png' width="400px" style="margin-top: -30px;")
      p(v-if="step >= 2" style="margin-top: -0px;") solving for the electron moment components
      .center
        img(v-if="step >= 2" src='./assets/pComponents2.png' width="300px" style="margin-top: -30px;")
      p(v-if="step >= 3" style="margin-top: 10px;") then dividing the <b>y</b>-component by the <b>x</b>-component we have
      .center
        img(v-if="step >= 3" src='./assets/pComponents3.png' width="300px" style="margin-top: -30px;")
      p(v-if="step >= 4" style="margin-top: 10px;") or
      .center
        img(v-if="step >= 4" src='./assets/pComponents4.png' width="300px" style="margin-top: -30px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(:steps=2, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/comptonScattering.png' width="300px" style=" position: absolute; left: 100px; top: 70px;")
      h5(style="margin-top: 130px;").center Compton equations
      h6.center Electron scattering
      .center
        img(v-if="step >= 1" src='./assets/pComponents4.png' width="300px" style="margin-top: -30px;")
      p(style="margin-top: -20px;") using
        img(v-if="step >= 1" src='./assets/pComponents5.png' width="120px" style="margin: 0 10px -5px 10px;")
        | we have
      .center
        img(v-if="step >= 1" src='./assets/pComponents7.png' width="300px" style="margin-top: -40px;")
      p(style="margin-top: -20px;") then
      .center
        img(v-if="step >= 1" src='./assets/pComponents8.png' width="270px" style="margin-top: -40px;")
      p(style="margin-top: -40px;") thus
      .center
        img(v-if="step >= 1" src='./assets/pComponents9.png' width="300px" style="margin-top: -0px; border: orange solid;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: 20px;").center Compton effect equations
      .center
        img(src='./assets/comptonScattering.png' width="500px" style="margin-bottom: 50px;")
      p Photon scattering
      .center
        img(src='./assets/comptonEq14.png' width="530px" style="margin: -150px 0 50px 0; border: 2px solid rgba(255, 0, 0, .3);")
      p(style="margin-top: -10px;") Electron scattering
      .center
        img(src='./assets/pComponents9.png' width="500px" style="margin: -120px 0 50px 0; border: 2px solid rgba(255, 0, 0, .3);")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 6
      example-six
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide.boredYet(enter='bounceInDown', :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 7
      example-seven
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;")
      .center.frontpage
        h1 Atomic physics
        img(src='./assets/microres4.jpg')
        p Atomic spectra of gases<br> Models of the atom<br> Bohr's model of the hydogen atom
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }} </sup>
      //- .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=3, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 1")
            <b>Atomic spectra of gases</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 2")
            <b>Models of the atom</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=3")
            <b>Bohr's model of the hydogen atom</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h2 Atomic spectra of gases
      .center
        img(src='./assets/atomo01.png' width="400px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Atomic spectra of gases
      .center
        p(style="margin-bottom: -0px; color: blue;") a) Emission spectroscopy
      .center
        img(src='./assets/atomo02.png' width="700px")
        p(style="margin-top:-20px; color: blue;") b) Absorption spectroscoy
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Emission series
      .center
        img(src='./assets/atomo03.png' width="300px" style="margin-top: -30px;")
      p.center Balmer series
      .center
        img(src='./assets/atomo04.png' width="400px" style="margin-top:-20px;")
      p.center Rydberg constant: R<sub>H</sub> = 1.0973732x10<sup>7</sup> m<sup>-1</sup>
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center  Emission series
      h6.center Other series
      div(class="container" style="display: flex; flex-direction: row;")
        div
          .center
            img(src='./assets/atomo05.png' width="540px")
        div
          p Lyman series (fall down to n = 1)
          p Paschen series (fall down to n = 3)
          p Brackett series (fall down to n = 4)
          p Pfund series (fall down to n = 5)
          p Humphreys series (fall down to n = 6)
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  



    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Early models of the atom
      h5.center Thomson's model
      .center
        img(src='./assets/atomo06.png' width="250px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Rutherford's model
      .center
        img(src='./assets/atomo07.png' width="700px")
      p “It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch [artillery] shell at a piece of tissue paper and it came back and hit you.” <br>-- E. Rutherford
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Rutherford's model
      p Drawback of the Rutherford model: accelerated electric carges emits EM energy
      .center
        img(src='./assets/atomo09.png' width="300px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p Bohr applied Planck’s ideas of quantized energy levels to Rutherford’s orbiting atomic electrons
      .center
        img(src='./assets/atomo10.png' width="400px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-bottom: 60px;").center Bohr's model of the Hydrogen atom
      p(style="margin-top:20px;") 1. Physical components: The electron moves in circular orbits around the proton under the influence of the electric force of attraction.
      p 2. Behavior of the components: <br>(a) Only certain electron orbits are stable.<br>(b) The atom emits radiation when the electron makes a transition from a more energetic initial stationary state to a lower-energy stationary state.<br>(c) The allowed orbits are those for which the electron’s orbital angular momentum about the nucleus is quantized and equal to an integral multiple of
      .center
        img(src='./assets/atomo14.png' width="350px")
      p where <span style="font-family: Times; font-style: italic; font-weight: bold;">m<sub>e</sub></span> is the electron mass, <span style="font-family: Times; font-style: italic; font-weight: bold;">v</span> is the electron’s speed in its orbit, <span style="font-family: Times; font-style: italic; font-weight: bold;">r</span> is the orbital radius, and
          |
          img(src='./assets/atomo13.png' width="120px" style="margin: 0px 0 -3px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:0px;").center Bohr's model of the Hydrogen atom
      p(style="margin-top:20px;")
      p With potential energy given by
        |
        img(src='./assets/atomo15.png' width="300px" style="margin: 0px 10px -11px 10px;")
        | total energy is
      .center
        img(src='./assets/atomo16.png' width="400px")
      p electrical force on electron must equal it's mass times the centripetal acceleration
        |
        img(src='./assets/atomo18.png' width="130px"  style="margin: 0px 10px -11px 10px;")
        | that is
      .center
        img(src='./assets/atomo19.png' width="200px"  style="margin: 0px 100px -40px 10px;")
        | then
        |
        img(src='./assets/atomo20.png' width="200px" style="margin: 0px 10px -40px 100px;")
      p and kinetic energy becomes
      .center
        img(src='./assets/atomo21.png' width="300px" style="margin: -20px 10px 0px 10px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p And total energy becomes
      .center
        img(src='./assets/atomo22.png' width="200px" style="margin-top: -30px;")
      p(style="margin-top: -10px;") Now solving <span style="font-family: Times; font-style: italic;">v</span> from
      .center(style="margin-top: -30px;")
        img(src='./assets/atomo14.png' width="350px" style="margin: 0px 100px -20px 10px;")
        | with
        |
        img(src='./assets/atomo20.png' width="100px" style="margin: 0px 10px -20px 100px;")
      p(style="margin-top: 20px;") we have
      .center
        img(src='./assets/atomo24.png' width="250px" style="margin-top: -30px;")
      p(style="margin-top: -0px;") and the orbital radius is given by
      .center
        img(src='./assets/atomo25.png' width="300px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p From the orbilat radius
      .center
        img(src='./assets/atomo25.png' width="350px")
      p we can join all constant in a new one, called the <b>Bohr radius</b> (<span style="font-family: Times; font-style: italic;">a<sub style="font-size: 20px;">0</sub></span>)
      .center
        img(src='./assets/atomo26.png' width="350px")
      p and revisiting the orbital radius we have
      .center
        img(src='./assets/atomo27.png' width="600px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top: -20px;").center Bohr's model of the Hydrogen atom
      p Using the Bohr radius
        |
        img(src='./assets/atomo27.png' width="450px" style="margin: 0 10px -5px 10px;")
        | in the relation
        img(src='./assets/atomo22.png' width="100px" style="margin: 0 10px -20px 10px;" )
        | energy becomes
      .center
        img(src='./assets/atomo28.png' width="500px" style="margin-top: -10px;" )
      p(style="margin-top: -10px;") evaluating constans we have
      .center
        img(src='./assets/atomo29.png' width="500px" style="margin-top: -10px;" )
      p For emision frequency we have
      .center
        img(src='./assets/atomo31.png' width="500px" style="margin-top: -10px;" )
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Bohr's model of the Hydrogen atom
      p(style="margin: -20px 100px 10px 10px;") Changing for wavelength
      .center
        img(src='./assets/atomo32.png' width="300px" style="margin: 0px 100px -30px 10px;")
        | or
        img(src='./assets/atomo33.png' width="250px" style="margin: 0px 10px -30px 100px;")
      p(style=" position: absolute; top: 280px; right: 100px;").center Rydberg constant:<br> R<sub>H</sub> = 1.0973732x10<sup>7</sup> m<sup>-1</sup>
      .center
        img(src='./assets/atomo30.png' width="300px" style="margin: 50px 10px 0px 50px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Ionized atoms
      p Some ionized atoms can be modeled with the model for the hydrogen atom
      p Z is the atomic number, and is added to the equations as
      .center
        img(src='./assets/atomo34.png' width="250px")
      .center
        img(src='./assets/atomo35.png' width="500px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 1
      example-one
      //- .button.prev(@click.stop='previousSlide')
      //-   span &lt; Prev. slide
      //-   br
      //-   span.small  Ctrl + left
      //- .button.next(@click.stop='nextSlide')
      //-   span Next slide &gt;
      //-   br
      //-   span.small Ctrl + right
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 2
      example-two
      //- .button.prev(@click.stop='previousSlide')
      //-   span &lt; Prev. slide
      //-   br
      //-   span.small  Ctrl + left
      //- .button.next(@click.stop='nextSlide')
      //-   span Next slide &gt;
      //-   br
      //-   span.small Ctrl + right
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide.boredYet(:steps=1 enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 3
      example-three
      //- .button.prev(@click.stop='previousSlide')
      //-   span &lt; Prev. slide
      //-   br
      //-   span.small  Ctrl + left
      //- .button.next(@click.stop='nextSlide')
      //-   span Next slide &gt;
      //-   br
      //-   span.small Ctrl + right
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -10px;") Exercise 4
      example-four
      //- .button.prev(@click.stop='previousSlide')
      //-   span &lt; Prev. slide
      //-   br
      //-   span.small  Ctrl + left
      //- .button.next(@click.stop='nextSlide')
      //-   span Next slide &gt;
      //-   br
      //-   span.small Ctrl + right
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 5
      example-five
      //- .button.prev(@click.stop='previousSlide')
      //-   span &lt; Prev. slide
      //-   br
      //-   span.small  Ctrl + left
      //- .button.next(@click.stop='nextSlide')
      //-   span Next slide &gt;
      //-   br
      //-   span.small Ctrl + right
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=3 enter='bounceInDown' :mouseNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -0px; margin-bottom: 40px").center Spontaneous and stimulated emission
      div(class="container" style="display: flex; flex-direction: row; margin-top: 20px;")
        div(style= "display: flex; flex-direction: row; height: 100%;  width: 100%; justify-content: center;")
          div(v-if="step >= 1" style= "width: 485px;")
            h5(style="margin: 0;").center Absorption
            .center
              img(src='./assets/lasers1.png' width="100%")
          div(v-if="step >= 2" style= "width: 400px;")
            h5(style="margin: 0;").center Spontaneous emission
            .center
              img(src='./assets/lasers2.png' width="100%")
      div(v-if="step >= 3" style= "display: flex; flex-direction: row; justify-content: center; width: 100%; margin-top: 20px;")
        div(style= "width: 500px;")
          h5(style="margin: 0;").center Stimulated emission
          .center
            img(src='./assets/lasers3.png' width="100%")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous and stimulated emission
      h5.center Laser
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">L</span>igth
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">A</span>mplification by
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">S</span>timulated
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">E</span>mission of
      p(style="margin: 0 0 -0PX 400px;") <span style="font-size: 60px; color: blue;">R</span>adiation
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(enter='bounceInDown' :mouseNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous and stimulated emission
      h5.center Lasers
      .center
        img(src='./assets/lasers4.png' width="700px" style="margin-top: -30px; margin-right: 0px;")
        img(src='./assets/lasers5.png' width="250px" style="margin-top: -30px; margin-left: 50px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(enter='bounceInDown' :mouseNavigation='false'  style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous and stimulated emission
      h5.center Laser cooling
      .center
        img(src='./assets/lasers7.png' width="400px" style="margin-top: -30px;")
        img(src='./assets/lasers6.png' width="400px" style="margin-top: -30px; margin-left: 100px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  



    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
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
    description: 'Introduction to quantum physics',
    path: 'photoelectric',
    course: 'Physics IV',
    part: '3-I'
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
    'radiacion-frenado': require('./components/radiacionFrenado'),
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
