<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
    div(style="display: flex; flex-direction: row; justify-content: space-around;")
      div(style="display: flex; flex-direction: row; justify-content: space-around;")
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" height="500" width="1000" >
          <rect x="0" y="0" width="1000" height="500" fill="blue" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          // turning table
          <g>
            <circle cx="500" cy="250" r="170" fill="#000000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
            <circle cx="500" cy="250" r="150" fill="#ffffff" fill-opacity="0.8" stroke="#000000"  stroke-width="0.1"/>
            // axis
            //- <line x1="350" y1="250" x2="650" y2="250" stroke="#000000" opacity="1"/>
            <path :d="angleScale" stroke="black"  fill="none"/>

          </g>
          <rect x="10" y="150" width="90" height="200" fill="#000000" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="170" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="210" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="250" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="290" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="330" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          //- reference lines
          <line x1="100" y1="170" x2="1000" y2="170" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="210" x2="1000" y2="210" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="250" x2="1000" y2="250" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="290" x2="1000" y2="290" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="330" x2="1000" y2="330" stroke="#000000" opacity="0.1"/>
          //- laser rays
          <path :d="laserCenter" stroke="#ff0000"  stroke-width="3" fill="none"/>
          
          // old project
          <rect x="0" y="0" width="600" height="300" fill="blue" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          <g transform="translate(150,0)">
          
          //- reference
          <text x="350" y="20" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&omega; = {{ Math.round(1000 * omega / prod)/1000 }} rad/s</tspan></text>
          <text x="350" y="40" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">f = {{ Math.round(1000 * omega / prod / (2 * Math.PI)) / 1000 }} Hz</tspan></text>
          <text x="350" y="60" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">T = {{ Math.round(1000 * 2 * Math.PI *prod / omega) / 1000 }} s</tspan></text>
          </g>
          <g transform="translate(50,100)">
          <defs>
            <path id="r1" fill="none" stroke="black">
              <animate id="p1" attributeName="d" :values="resorte" :dur="period" repeatCount="indefinite"/>
              <animate attributeName="stroke" values="red;red;black;red;red;black;red;red;" :dur="period" repeatCount="indefinite" begin="p1.begin"/>
            </path>
          </defs>
          <use xlink:href="#r1"/>

          <rect x="250" y="40" width="100" height="100" stroke="black" fill="lightskyblue" opacity="0.8">
            <animate attributeName="x" :values="blockPositions" :dur="period" repeatCount="indefinite" begin="p1.begin"/>
          </rect>
          <line x1="300" y1="130" x2="300" y2="170" stroke="red" opacity="1"/>
          <line x1="450" y1="130" x2="450" y2="170" stroke="red" opacity="1"/>
          <line x1="150" y1="130" x2="150" y2="170" stroke="red" opacity="1"/>
          <line v-if="showVectors" x1="300" y1="-30" x2="300" y2="170" stroke="red" opacity="0.2"/>
          <line v-if="showVectors" x1="450" y1="-30" x2="450" y2="170" stroke="red" opacity="0.2"/>
          <line v-if="showVectors" x1="150" y1="-30" x2="150" y2="170" stroke="red" opacity="0.2"/>
          <line v-if="showVectors" x1="300" y1="-50" x2="300" y2="170" stroke="red" opacity="0.5">
            <animate attributeName="x1" :values="displacement" :dur="period" repeatCount="indefinite" begin="p1.begin"/>
            <animate attributeName="x2" :values="displacement" :dur="period" repeatCount="indefinite" begin="p1.begin"/>
          </line>

          <text x="120" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = -A</tspan></text>
          <text x="275" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = 0</tspan></text>
          <text x="420" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = +A</tspan></text>
          <g transform="translate(0,-90)" v-if="showVectors">
            <text x="250" y="117" font-size="20px" fill="#00f"><tspan font-family="New Times Roman" font-style="italic" font-weight="bold">Displacement</tspan></text>
            //- displacement arrow
            <line x1="300" y1="100" x2="300" y2="100" stroke="#00f" stroke-width="2">
              <animate attributeName="x2" :values="displacement" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
            //- displacement tip
            <line x1="300" y1="100" x2="300" y2="97" stroke="#00f" stroke-width="2">
              <animate attributeName="x1" :values="displacement" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="displacementUp" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
            <line x1="250" y1="100" x2="250" y2="103" stroke="#00f" stroke-width="2">
              <animate attributeName="x1" :values="displacement" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="displacementUp" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
          </g>
          <g transform="translate(0,-70)" v-if="showVectors">
          <text x="270" y="70" font-size="20px" fill="#070"><tspan font-family="New Times Roman" font-style="italic" font-weight="bold">Velocity</tspan>
            <animate attributeName="x" :values="textVelocity" :dur="period" repeatCount="indefinite" begin="0s"/>
          </text>
            //- velocity arrow
            <line x1="300" y1="50" x2="300" y2="50" stroke="#070" stroke-width="2">
              <animate attributeName="x1" :values="velocityTip" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="velocityTail" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
            //- velocity tip
            <line x1="300" y1="50" x2="300" y2="47" stroke="#070" stroke-width="2">
              <animate attributeName="x1" :values="velocityTail" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="velocityUp" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
            <line x1="250" y1="50" x2="250" y2="53" stroke="#070" stroke-width="2">
              <animate attributeName="x1" :values="velocityTail" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="velocityUp" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
          </g>
          <g transform="translate(0,-70)" v-if="showVectors">
            <text x="250" y="40" font-size="20px" fill="#f00"><tspan font-family="New Times Roman" font-style="italic" font-weight="bold">Acceleration</tspan>
              <animate attributeName="x" :values="textAcceleration" :dur="period" repeatCount="indefinite" begin="0s"/>
            </text>
            //- acceleration arrow
            <line x1="300" y1="20" x2="300" y2="20" stroke="red" stroke-width="2">
              <animate attributeName="x1" :values="accelerationTip" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="accelerationTail" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
            //- acceleration tip
            <line x1="300" y1="20" x2="300" y2="17" stroke="red" stroke-width="2">
              <animate attributeName="x1" :values="accelerationTail" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="accelerationUp" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
            <line x1="250" y1="20" x2="250" y2="23" stroke="red" stroke-width="2">
              <animate attributeName="x1" :values="accelerationTail" :dur="period" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="x2" :values="accelerationUp" :dur="period" repeatCount="indefinite" begin="0s"/>
            </line>
          </g>

          </g>
            //- <text x="100" y="30">
            //- <tspan style="font-style:normal; font-family: Times New Roman; font-size:1em;">Amplitude (<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">A</tspan>)</tspan>
            //- </text>

            //- <line x1="0" y1="0" x2="500" y2="200" stroke="red" stroke-width="0.5"/>
            //- <line x1="0" y1="200" x2="500" y2="0" stroke="red" stroke-width="0.5"/>
        </svg>

      div(style="display: flex; flex-direction: column; justify-content: flex-start;")
        div(style="border: solid 1px; border-radius: 5%; height: 80px;")
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center K = <span style="font-style: normal;">{{ elasticK }}</span> N/m<br>
            button(@click="increaseK(1, 0)") +1
            button(@click="increaseK(-1, 0)") -1
            <br>
            button(@click="increaseK(5, 0)") +5
            button(@click="increaseK(-5, 0)") -5
        div(style="border: solid 1px; border-radius: 5%; height: 80px;")
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center m = <span style="font-style: normal;">{{ parseFloat(mass).toPrecision(2) }}</span> kg
            button(@click="increaseMass(0.1, 0)") +0.1
            button(@click="increaseMass(-0.1, 0)") -0.1
            <br>
            button(@click="increaseMass(1, 0)") +1.0
            button(@click="increaseMass(-1, 0)") -1.0
        div(style="border: solid 1px; border-radius: 5%; height: 70px;")
          p(style="font-family: Times; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center <span style="font-style: normal;">Vectors</span>
            <!-- Rounded switch -->
            <label class="switch">
              <input type="checkbox" v-model="showVectors">
              <span class="slider round"></span>
            </label>
        div(style="border: solid 1px; border-radius: 5%; height: 62px;")
          p(style="font-family: Times; font-size:13px; font-weight: bold;color: black; margin: 10px 0 10px 0;").center Time scale:<br> {{ parseInt((prod * 10))/10 }} <br>
            button(@click="increaseMass(0, 0.1)") +0.1
            button(@click="increaseMass(0, -0.1)") -0.1

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      period: 3,
      omega: 2.557,
      prod: 1,
      elasticK: 1,
      mass: 1,
      showVectors: ''
    }
  },
  computed: {
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
    angleScale () {
      let d = 'M350,250 650,250 M500,100 500,400'
      for (let i = 0; i < 36; i++) {
        d = d + `M${500 + 150 * Math.cos(i * 10 * Math.PI / 180)},${250 + 150 * Math.sin(i * 10 * Math.PI / 180)} ${500 + 120 * Math.cos(i * 10 * Math.PI / 180)},${250 + 120 * Math.sin(i * 10 * Math.PI / 180)}`
      }
      for (let i = 0; i < 72; i++) {
        d = d + `M${500 + 150 * Math.cos(i * 5 * Math.PI / 180)},${250 + 150 * Math.sin(i * 5 * Math.PI / 180)} ${500 + 130 * Math.cos(i * 5 * Math.PI / 180)},${250 + 130 * Math.sin(i * 5 * Math.PI / 180)}`
      }
      for (let i = 0; i < 360; i++) {
        d = d + `M${500 + 150 * Math.cos(i * 1 * Math.PI / 180)},${250 + 150 * Math.sin(i * 1 * Math.PI / 180)} ${500 + 140 * Math.cos(i * 1 * Math.PI / 180)},${250 + 140 * Math.sin(i * 1 * Math.PI / 180)}`
      }
      return d
    },
    laserCenter () {
      let angle = 5 * Math.PI / 180
      let m = Math.tan(2 * angle)
      let mE = Math.tan(angle)
      console.log(m)
      console.log(mE)
      let y = angle >= 0 ? 0 : 500
      let d = `M100,250 500,250 ${500 + (y - 250) / m} ${y}`
      d = d + `M100,210 ${500 - mE * (210 - 250)},210 ${500 - mE * (210 - 250) + (y - 210) / m} ${y}`
      d = d + `M100,170 ${500 - mE * (170 - 250)},170 ${500 - mE * (170 - 250) + (y - 170) / m} ${y}`
      d = d + `M100,290 ${500 - mE * (290 - 250)},290 ${500 - mE * (290 - 250) + (y - 290) / m} ${y}`
      d = d + `M100,330 ${500 - mE * (330 - 250)},330 ${500 - mE * (330 - 250) + (y - 330) / m} ${y}`
      // mirror surface just a reference
      d = d + `M500,250 ${500 + (y - 250) / (-1 / mE)} ${y}`
      d = d + `M500,250 ${500 - (y - 250) / (-1 / mE)} ${500 - y}`
      return d
    },
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
        d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
        d = d + d1
      }
      return d
    },
    blockPositions () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(250 + 150 * Math.cos(angle))};`
      }
      return positions
    },
    displacement () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(300 + 150 * Math.cos(angle))};`
      }
      return positions
    },
    displacementUp () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(300 + 130 * Math.cos(angle))};`
      }
      return positions
    },
    velocityTip () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(300 + 150 * Math.cos(angle))};`
      }
      return positions
    },
    velocityTail () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = (2 * i * Math.PI / (points - 1))
        positions = positions + `${Math.round(300 - 100 * Math.sin(angle) + 150 * Math.cos(angle))};`
      }
      return positions
    },
    velocityUp () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(300 - 80 * Math.sin(angle) + 150 * Math.cos(angle))};`
      }
      return positions
    },
    accelerationTip () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(300 + 150 * Math.cos(angle))};`
      }
      return positions
    },
    accelerationTail () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = (2 * i * Math.PI / (points - 1))
        positions = positions + `${Math.round(300 - 150 * Math.cos(angle))};`
      }
      return positions
    },
    accelerationUp () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(300 - 130 * Math.cos(angle))};`
      }
      return positions
    },
    textVelocity () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(270 + 150 * Math.cos(angle))};`
      }
      return positions
    },
    textAcceleration () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(250 + 150 * Math.cos(angle))};`
      }
      return positions
    }
  },
  methods: {
    factor (f) {
      this.prod = this.prod + f
    },
    increaseMass (l, timeScale) {
      if (this.prod + timeScale < 0.1) {
        this.prod = 0.1
      } else {
        this.prod = this.prod + timeScale
      }
      if (this.mass + l < 0.1) {
        this.mass = 0.1
      } else {
        this.mass = this.mass + l
      }
      this.omega = this.prod * Math.sqrt(this.elasticK / this.mass)
      this.period = 1 * 2 * Math.PI / this.omega
    },
    increaseK (l, timeScale) {
      if (this.prod + timeScale < 0.1) {
        this.prod = 0.1
      } else {
        this.prod = this.prod + timeScale
      }
      if (this.elasticK + l < 1) {
        this.elasticK = 1
      } else {
        this.elasticK = this.elasticK + l
      }
      this.omega = this.prod * Math.sqrt(this.elasticK / this.mass)
      this.period = 1 * 2 * Math.PI / this.omega
    }
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
    // SVG ANIMATIONS
    .included-svg {
      width: 80%;
      margin-left: 10%;
      g path {
        transform-origin: center bottom;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
      }
      .svg-bounce path {
        -webkit-animation-name: bounce;
        transform-origin: center bottom;
      }
      .svg-pulse path {
        -webkit-animation-name: pulse;
        -moz-animation-name: bounce;
        transform-origin: center center;
      }
      .svg-swing path {
        -webkit-animation-name: swing;
        -moz-animation-name: bounce;
        transform-origin: center center;
      }
    }

  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 14px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #80f321;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border: green solid 4px;
  border-radius: 50% 50% 50% 50%;
}
</style>
