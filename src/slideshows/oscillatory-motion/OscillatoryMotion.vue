<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Oscillatory Motion
        img(src='./assets/microres4.jpg')
        h4 Simple Harmonic Motion Systems
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=8, enter='bounceInRight' leave='bounceOutDown')
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Motion of an Object Attached to a Spring</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Particle Model in Simple Harmonic Motion</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Energy of the Simple Harmonic Oscillator</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 5")
            <b>Simple Harmonic Motion vs Circular Motion</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>The pendulum and other systems</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>Damped oscillations</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 8")
            <b>Forced oscillations and resonance</b>

    slide(:steps=0, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Periodic motion
      p In our daily life we treat with a many devices that describe <b><em>periodic motion</em></b> or <b><em>oscillations</em></b>; the vibration that produce sound, the back-and-fort motion of the pistons in a car engine, the motion described by a pendulum in a clock.
      .center
        img(height="400px" src='./assets/motor vocho.gif')

    slide(:steps=0, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Oscillations
      p.center Mass-spring system
      p.center
        <svg height="200" width="500" viewbox="0 0 500 200">
          <defs>
            <path id="r1" fill="none" stroke="black">
              <animate id="p1" attributeName="d" :values="resorte" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="stroke" values="red;red;black;red;red;black;red;red;" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
            </path>

          </defs>
          <use xlink:href="#r1"/>

          <path :d="base" stroke="black"  fill="none"/>
          <rect x="250" y="40" width="100" height="100" stroke="black" fill="lightskyblue" opacity="0.8">
            <animate attributeName="x" :values="blockPositions" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
          </rect>
          <line x1="300" y1="138" x2="300" y2="170" stroke="red" />
          <line x1="450" y1="138" x2="450" y2="170" stroke="red" />
          <line x1="150" y1="138" x2="150" y2="170" stroke="red" />

          <text x="120" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = -A</tspan></text>
          <text x="275" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = 0</tspan></text>
          <text x="420" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = +A</tspan></text>

            <text x="200" y="25">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size:1em;">Amplitude (<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">A</tspan>)</tspan></text>

            //- <line x1="0" y1="0" x2="500" y2="200" stroke="red" stroke-width="0.5"/>
            //- <line x1="0" y1="200" x2="500" y2="0" stroke="red" stroke-width="0.5"/>
        </svg>
      p <span style="font-size: 1.2em;"><b>Amplitude</b></span>, is the maximun displacement of the mass with respect the equilibrium position
      p <span style="font-size: 1.5em; font-family: Times New Roman;"><em>x</em></span> is the position of the mass with respect to the equilibrium position at <span style="font-size: 1.5em; font-family: Times New Roman;"><em>x</em></span> = 0.
    slide(:steps=0, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Oscillations
      p.center Mass-spring system
      p.center
        <svg height="200" width="500" viewbox="0 0 500 200">
          <defs>
            <path id="r1" fill="none" stroke="black">
              <animate id="p1" attributeName="d" :values="resorte" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="stroke" values="red;red;black;red;red;black;red;red;" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
            </path>

          </defs>
          <use xlink:href="#r1"/>

          <path :d="base" stroke="black"  fill="none"/>
          <rect x="250" y="40" width="100" height="100" stroke="black" fill="lightskyblue" opacity="0.8">
            <animate attributeName="x" :values="blockPositions" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
          </rect>
          <line x1="300" y1="138" x2="300" y2="170" stroke="red" />
          <line x1="450" y1="138" x2="450" y2="170" stroke="red" />
          <line x1="150" y1="138" x2="150" y2="170" stroke="red" />

          <text x="120" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = -A</tspan></text>
          <text x="275" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = 0</tspan></text>
          <text x="420" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = +A</tspan></text>

          <text x="435" y="20">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size:0.4em;">Period</tspan>
            <animate attributeName="visibility" values="visible;hidden" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
          </text>
          <circle cx="450px" cy="30" r="10px">
            <animate attributeName="fill" values="green;green;red" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
            <animate attributeName="visibility" values="visible;hidden;hidden;hidden" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
          </circle>

          <text x="285" y="120">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size:0.4em;">Period</tspan>
            <animate attributeName="visibility" values="visible;hidden" dur="2s" repeatCount="indefinite" begin="p1.begin+0.5"/>
          </text>
          <circle cx="300px" cy="130" r="10px">
            <animate attributeName="fill" values="green;green;red" dur="2s" repeatCount="indefinite" begin="p1.begin+0.5"/>
            <animate attributeName="visibility" values="visible;hidden;hidden;hidden" dur="2s" repeatCount="indefinite" begin="p1.begin+0.5"/>
          </circle>


            <text x="200" y="25">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size:1em;">Period (<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">T</tspan>)</tspan></text>

            //- <line x1="0" y1="0" x2="500" y2="200" stroke="red" stroke-width="0.5"/>
            //- <line x1="0" y1="200" x2="500" y2="0" stroke="red" stroke-width="0.5"/>
        </svg>
      p {{ tiempo }}
      p <span style="font-size: 1.2em;"><b>Period</b></span>, is the time interval in which the sistem completes an entire oscillation with respect any position

    slide(:steps=0, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Oscillations
      p If <em><span style="font-family: times;">F</span></em> is the magnitude of the force excerted normal to a surface of area <em><span style="font-family: times;">A</span></em>, the pressure in the surface is
      .center

    slide(:steps=0, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Oscillations
      p If <em><span style="font-family: times;">F</span></em> is the magnitude of the force excerted normal to a surface of area <em><span style="font-family: times;">A</span></em>, the pressure in the surface is
      .center

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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 7
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 12
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
      h3 Exercise 13
      example-thirteen
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
      h3 Exercise 14
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
      p.center
        <svg xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" width="400px" height="200px" viewBox="0 0 400 200">
          <title>SVG navigation Links</title>
          <defs>
            <path id="p" d="M30,220 C50,40 350,40 380,220" />
          </defs>
          <text x="200" y="30" role="heading" aria-level="1">Welcome!<tspan x="200" y="180">to my website! </tspan></text>
          <text role="navigation">
            <textPath xlink:href="#p" startOffset="50%">
              <a aria-current="#">Home</a>
              <a xlink:href="#">Archives</a>
              <a xlink:href="#">About me</a>
            </textPath>
          </text>
        </svg>

    slide(enter='bounceInDown')
      h3 Fun soon!
      p.center
        <svg version="1.1" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#000" stroke-linecap="round"      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="r1">
              <animate id="p1" attributeName="d" :values="resorte" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="stroke-width" values="1;2;2;2;1" dur="6s" repeatCount="indefinite" begin="p1.begin"/>
            </path>

          </defs>
          <use xlink:href="#r1"/>
        </svg>



</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Oscillatory Motion',
    description: 'Simple Harmonic Motion Systems (In early progress)',
    path: 'oscillatory-motion'
  },
  components: {
    'pressure-machine': require('./PressureMachine'),
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
      tiempo: ''
    }
  },
  computed: {
    time () {
      setInterval(this.updateTime, 100)
    },
    base () {
      let d = 'M10,0 10,140 500,140'
      for (var i = 1; i < 16; i++) {
        d = d + `M0,${i * 10} 10,${(i - 1) * 10}`
      }
      for (i = 1; i < 50; i++) {
        d = d + `M${i * 10},150 ${(i + 1) * 10},140`
      }
      return d
    },
    // var timer = setTimeInterval(resorte),
    resorte () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let points = 102
      for (var i = 0; i < ranges.length; i++) {
        let d1 = 'M10,90 30,90 '
        let delta = ranges[i] / (points + 0)
        let period = ranges[i] / 7
        for (var j = 0; j < points - 1; j++) {
          d1 = d1 + `${delta * j + 30},${90 + 20 * Math.sin(2 * Math.PI * delta * j / period)} `
        }
        // console.log('d1', d1)
        d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
        d = d + d1
      }
     // console.log('d: ', d)

      return d
    },
    blockPositions () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(250 + 150 * Math.cos(angle))};`
      }
      console.log(positions)
      return positions
    }
  },
  methods: {
    updateTime () {
      var cd = new Date()
      this.tiempo = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      console.log('tiempoo', this.tiempo)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
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
