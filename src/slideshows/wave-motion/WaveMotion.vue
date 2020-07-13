<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Wave Motion
        img(src='./assets/microres4.jpg')
        h4 Propagation of oscillations
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=9, enter='bounceInRight' leave='bounceOutDown')
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Propagation of a Disturbance</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Traveling Wave</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Speed of Waves on Stings</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 5")
            <b>Reflection and Transmission</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Rate of Energy Transfer of a Sinusoidal Wave in a String</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>The Linear Wave Equation</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 8")
            <b>Waves in interference, Resonance</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 9")
            <b>Sound, Speed, Intensity and the Doppler Effect</b>

    slide(:steps=0, enter='bounceInDown')
      h3 Waves
      p Ripples on a pond, musical sounds, seismic tremors triggered by an earthquake—all these are wave phenomena. Waves can occur whenever a system is disturbed from equilibrium and when the disturbance can travel, or propagate, from one region of the system to another. As a wave propagates, it carries energy. The energy in light waves from the sun warms the surface of our planet; the energy in seismic waves can crack our planet’s crust.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Types of waves
      .center
        img(src='./assets/waveTypes.png' height="400px")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Mathematical description of a wave
      .center
        img(src='./assets/oscillationWave.png' height="200px")
      p Oscillatory motion
      .center
        img(src='./assets/oscillatoryX0.png')
      p changing <b>t</b> by <b>t - x/v</b>
      .center
        img(src='./assets/oscillatoryVariable.png')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Waves</sup>
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

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Waves</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 2
      example-nine
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Waves</sup>
      h5.center(style="margin-top: 0px;") Waves on a string
      p Waves speed in materials depends on the material characteristics, that is
      .center
        img(src='./assets/waveSpeedMaterial.png')
      p Considering a perfectly flexible string. In the equilibrium position the tension is F and the linear mass density (mass per unit length) is <span style="font-style: italic;">&#x03BC;</span>
      .center
        img(src='./assets/waveStringSpeed.png')


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 3
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 4
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 5
      example-ten
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4(style="margin: 10px 0 0 0;").center Wave interference
        h5(style="margin:20px 0 0 0;").center Boundary conditions
        .center
          img(src='./assets/boundaryCond.png')

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4(style="margin: 10px 0 0 0;").center Wave interference
        h5(style="margin:20px 0 0 0;").center Two pulses
        .center
          img(src='./assets/twoPulsesDifferentSign.png' style="margin: 20px 0 0 20px;")
          img(src='./assets/twoPulsesEqualSign.png' height="440px" style="margin: 0px 0 50px 10px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h5(style="margin:0px 0 0 0;").center Two traveling waves
        .center
          img(src='./assets/waveInterferenceCases.png' style="margin: 20px 0 0 20px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Standing waves
        .center
          img(src='./assets/standingWavesFig.png' height="500px" style="margin: 30px 0 0 0;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 7
      example-twelve
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 8
      example-thirteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h2.center Sound waves
      ul
        li Mechanical wave
        li Longitudinal wave
        li Frequency range: 20 to 20000Hz (Audible range)
      p other ranges
      ul
        li infrasound: <20Hz
        li ultrasound: >20000Hz

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise not this theme
      example-fourteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 15
      example-fifteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 16
      example-sixteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 17
      example-seventeen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 18
      example-eighteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 19
      example-nineteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 20
      example-twenty
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 6
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 7
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 9
      example-seven
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 10
      example-eight
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      .center
        h3 References
        p University Physics 13th Edition. Searzs and Zemanzky
        p Physics for scientist and engineers 8th Edition. Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com

    slide(enter='bounceInDown')
      h3 Fun soon!
      p If

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Wave Motion',
    description: 'Waves an its Propagation (pending)',
    path: 'wave-motion'
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
    'example-twelve': require('./components/ExampleTwelve'),
    'example-thirteen': require('./components/ExampleThirteen'),
    'example-fourteen': require('./components/ExampleFourteen'),
    'example-fifteen': require('./components/ExampleFifteen'),
    'example-sixteen': require('./components/ExampleSixteen'),
    'example-seventeen': require('./components/ExampleSeventeen'),
    'example-eighteen': require('./components/ExampleEighteen'),
    'example-nineteen': require('./components/ExampleNineteen'),
    'example-twenty': require('./components/ExampleTwenty')
  },
  data: function () {
    return {
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
</style>
