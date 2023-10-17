<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    div(style="width: 100%; display: flex; flex-wrap: wrap; align-items: center;").container.center
      button(v-for="(topic, index) in topics" @click="currentSlideIndex = page[index]").themes {{ topic }}
    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;")
      .center.frontpage
        h1 Wave Motion
        img(src='./assets/U.svg')
        p Propagation of oscillations
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Propagation of a Disturbance</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Traveling Wave</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Speed of Waves on Strings</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Reflection and Transmission</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Waves in interference, Resonance</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Sound, Speed, Intensity and the Doppler Effect</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h3 Waves
      p Ripples on a pond, musical sounds, seismic tremors triggered by an earthquake—all these are wave phenomena. Waves can occur whenever a system is disturbed from equilibrium and when the disturbance can travel, or propagate, from one region of the system to another. As a wave propagates, it carries energy. The energy in light waves from the sun warms the surface of our planet; the energy in seismic waves can crack our planet’s crust.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Types of waves
      .center
        img(src='./assets/waveTypes.png' height="400px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Mathematical description of a wave
      .center
        img(src='./assets/oscillationWave.png' height="200px")
      p Oscillatory motion
      .center
        img(src='./assets/oscillatoryX0.png')
      p changing <b>t</b> by <b>t - x/v</b>
      .center
        img(src='./assets/oscillatoryVariable.png')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Mathematical description of a wave
      p Traveling wave
      .center
        img(src='./assets/travelingWaveR.png')
      p
      .center
        img(src='./assets/travelingWaveR2.png' height="100px")
      p  with
        img(src='./assets/waveNumber.png' height="50px" style="margin: -20px 0 -20px 20px")
        | &emsp;and&emsp;
        img(src='./assets/periodFW.png' height="30px" style="margin: -20px 0 -10px 0px")
      .center
        img(src='./assets/travelingWaveR3.png')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Mathematical description of a wave
      p Traveling waves
      .center
        img(src='./assets/travelingWaveR3.png' style="margin-bottom: -30px;")
        | &emsp;&emsp;<span>traveling to +x</span>
        img(src='./assets/travelingWaveR4.png' style="margin:30px 0 -30px -10px; ")
        | &emsp;&emsp;traveling to -x
      p with
      .center
        img(src='./assets/waveNumber.png' height="100px" style="margin: -30px 20px -10px 20px")
        img(src='./assets/speedLF.png' height="80px" style="margin: -30px 20px 0px 20px")
        img(src='./assets/omegaVK.png' height="80px" style="margin: -30px 20px 0px 20px")
      .center
        img(src='./assets/wavelength.png' height="200px" style="margin: 30px 20px -20px 20px")
        img(src='./assets/period.png'  height="200px"  style="margin: 30px 20px -20px 20px")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 1
      example-one
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 2
      example-two
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Waves on a string
      p Waves speed in materials depends on the material characteristics, that is
      .center
        img(src='./assets/waveSpeedMaterial.png')
      p Considering a perfectly flexible string. In the equilibrium position the tension is F and the linear mass density (mass per unit length) is <span style="font-style: italic;">&#x03BC;</span>
      .center
        img(src='./assets/waveStringSpeed.png')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 3
      example-three
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 4
      .center
      example-four
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4(style="margin: 10px 0 0 0;").center Wave interference:  superposition principle
      p(style="margin: -10px 0 0px 0;").center
        img(src='./assets/superposition.png' height="50px" style="margin: 30px 0 0 20px;")
        h5(style="margin:30px 0 0 0;").center Waves in the same direction
      p(style="margin: -20px 0 0px 0;") Two sinusoidal waves
      .center
        img(src='./assets/sinWaves.png' style="margin: 20px 0px -15px 15px;")
      p Applying the superposition principle
      .center
        img(src='./assets/sinWaveSuperposition.png' style="margin: 0px 0px 25px 0px;")
      p(style="margin: -20px 0 0px 0;") using 
        |
        img(src='./assets/sinWaveIdentity.png' width="300px" style="margin: 20px 0px -15px 15px;")
      .center
        img(src='./assets/sinWavesInterference.png' width="500px" style="margin: 30px 0px 15px 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4(style="margin: 10px 0 0 0;").center Wave interference
      wave-interference
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h4(style="margin: 10px 0 0 0;").center Wave interference
    //-     h5(style="margin:20px 0 0 0;").center Two pulses
    //-     .center
    //-       img(src='./assets/twoPulsesDifferentSign.png' style="margin: 20px 0 0 20px;")
    //-       img(src='./assets/twoPulsesEqualSign.png' height="440px" style="margin: 0px 0 50px 10px;")

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4(style="margin: 10px 0 0 0;").center Wave interference
        h5(style="margin:20px 0 0 0;").center Boundary conditions
        .center
          img(src='./assets/boundaryCond.png')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h5(style="margin:0px 0 0 0;").center Two traveling waves
    //-     .center
    //-       img(src='./assets/waveInterferenceCases.png' style="margin: 20px 0 0 20px;")

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4(style="margin: 10px 0 0 0;").center Superposition principle
        .center
          img(src='./assets/superposition.png' height="50px" style="margin: 20px 0 0 20px;")
      h5(style="margin:20px 0 0 0; color: blue;").center Standing waves on a string
      p two counterpropagating waves
      .center
        img(src='./assets/towwavesEqn.png' height="100px" style="margin: -20px 0 0 20px;")
      p Its superposition
      .center
        img(src='./assets/twoWavesSum.png'  style="margin: 20px 0 0 20px;")
      p using
          img(src='./assets/identity.png' height="30px" style="margin: 20px 0 0 20px;")
      .center
          img(src='./assets/twoWavesInterference.png' style="margin: 20px 0 0 20px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
    
    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4(style="margin: 10px 0 30px 0;").center Standing waves
      spring-mass
      //- standing-waves
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4.center Standing waves
        .center
          img(src='./assets/standingWavesFig.png' height="500px" style="margin: 30px 0 0 0;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h4.center Normal modes on a string
        .center
          img(src='./assets/normalModesInterference.png' height="50px" style="margin: 30px 0 0 0;")
        .center
          img(src='./assets/normalModesFig.png' height="400px" style="margin: auto")
        .center
          img(src='./assets/nodesNormalModesL.png' height="50px" style="margin-right: 40px;")
          img(src='./assets/nodesNormalModesW.png' height="50px" style="margin: auto;")
        .center
          img(src='./assets/normalModesFrequency.png' height="50px" style="margin: auto;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 5
      example-five
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 6
      example-six
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h2.center Sound waves
      ul
        li Mechanical wave
        li Longitudinal wave
        li Frequency range: 20 to 20000Hz (Audible range)
      p other ranges
      ul
        li infrasound: <20Hz
        li ultrasound: >20000Hz
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h5(style="margin-top: -0px").center Sound waves
      .center
        img(src='./assets/ondaSonora.png' style="margin-top: -20px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h5(style="margin-top: -0px").center Sound waves
      .center
          img(src='./assets/waveSpeedMaterial.png' style="margin-top: -20px;")
      p In a liquid, <b>B</b>: Volumetric module, <span style="font-family: Times New Roman;"><b>&rho;</b></span> density
      .center
          img(src='./assets/velocidadFluido.png' style="margin-top: -20px;")
          img(src='./assets/moduloVolumetrico.png' style="margin-top: -20px; margin-left: 50px;")
      p(style="margin-bottom: 50px;") En un solido, <b>Y</b>: modulo de Young
      img(src='./assets/velocidadSonidoSolido.png' style="margin-bottom: -0px; margin-left: 150px; margin-top: -20px;" )
      p(style="margin-bottom: 50px; margin-top: 0px;" ) En un gas, &gamma; the ratio of heat capacities, <b>T</b> temperature (K), <b>M</b> the molar mass
      .center
          img(src='./assets/velocidadSonidoGas.png' height="90px" style="margin-top: -40px; margin-left: -40px;")
          img(src='./assets/R.png' height="40px" style="margin-bottom: 20px; margin-left: 50px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 7
      example-seven
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3(style="margin-top: -0px").center Doppler effect
      p Is a change in perceived frequency due to relative motion
      .center
        doppler-simulator
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3(style="margin-top: -0px").center Doppler effect
      p Is a change in perceived frequency due to relative motion
      .center
        img(src='./assets/dopplerFig.png' style="margin-top: -20px;")
      .center
        img(src='./assets/dopplerFormula.png' style="margin-top: 40px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 8
      example-eight
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 9
      example-nine
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3(style="margin-top: -0px").center Shock waves
      p
      .center
        img(src='./assets/shockWavesFig.png' height="300px" style="margin-top: -20px;")
      .center
        img(src='./assets/shockAngle.png' style="margin-top: 40px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      h3 Exercise 10
      example-ten
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    
    //- slide.boredYet(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h1 Additional exercices
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
    
    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 1
    //-   example-six
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 2
    //-   example-ten
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 3
    //-   example-fourteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 4
    //-   example-fifteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 5
    //-   example-sixteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 6
    //-   example-seventeen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 7
    //-   example-eighteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 8
    //-   example-nineteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3 Problem 9
    //-   example-twentyteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
      .center
        h3 References
        p University Physics 13th Edition. Searzs and Zemanzky
        p Physics for scientist and engineers 8th Edition. Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Problems
      div.pcontainer
        .center
          img(src='./assets/p1.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
       .center
          img(src='./assets/p2.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p3.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p4.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p5.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p6.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p7.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p8.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer  
        .center
          img(src='./assets/p9.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer  
        .center
          img(src='./assets/p10.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p11.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer
        .center
          img(src='./assets/p12.png' width="100%" style="margin: 0px 0px 0px 0px;")
      div.pcontainer 
        .center
          img(src='./assets/p13.png' width="100%" style="margin: 0px 0px 0px 0px;")      
      div.pcontainer
        .center
          img(src='./assets/p14.png' width="100%" style="margin: 0px 0px 0px 0px;")      
      div.pcontainer   
        .center
          img(src='./assets/p15.png' width="100%" style="margin: 0px 0px 0px 0px;")      
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Wave Motion',
    description: 'Wave Propagation',
    path: 'wave-motion',
    course: 'Physics II',
    part: 2
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
    'wave-interference': require('./components/waveInterference'),
    'standing-waves': require('./components/standingWaves'),
    'doppler-simulator': require('./components/dopplerSimulator'),
    'spring-mass': require('./components/SpringMass')
  },
  data: function () {
    return {
      theme: 'Wave motion',
      isSpanish: true,
      languages: ['Inglés', 'Español'],
      topics: ['Inicio', 'Temas', 'Definiciones', 'Funcion de onda', 'Ondas en una cuerda', 'Interferencia', 'Condiciones de frontera', 'Ondas estacionarias', 'Ondas sonoras', 'Efecto Doppler', 'Ondas de choque', 'Bibliografía', 'Problemario'],
      page: [1, 2, 3, 5, 10, 13, 15, 16, 22, 26, 30, 32, 33]
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#OscillatoryMotion {
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
    font-size: 10px;
    height: 15px;
  }

  & caption {
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
    font-style: italic;
  }
}

.pcontainer {
  padding: 0px;
  margin: 0px 0px 0px 0px;
  border: 1px solid black;
}

.themes {
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  font-family: arial;
  font-weight: bold;
  font-size: 10px;
  min-width: 70px;
  border-radius: 0 0 0px 10px;
  height: 30px;
}
</style>
