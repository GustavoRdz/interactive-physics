<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
    div(style="display: flex; flex-direction: row; justify-content: space-around;")
      div(style="display: flex; flex-direction: row; justify-content: space-around;")
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" height="300" width="500" >
          <g transform="translate(0,0)">
          //- reference
          <rect x="0" y="0" width="500" height="300" fill="blue" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          //- <line x1="0" y1="0" x2="500" y2="300" stroke="#000" stroke-width="0.1"/>
          //- <line x1="0" y1="300" x2="500" y2="0" stroke="#000" stroke-width="0.1"/>
          //- <line x1="0" y1="110" x2="500" y2="110" stroke="#000" stroke-width="0.1"/>
          //- <line x1="250" y1="0" x2="250" y2="300" stroke="#000" stroke-width="0.1"/>

          //- Pendulum sorround path
          //- <circle r="300" cx="250" cy="0" fill="blue" fill-opacity="0.2"></circle>
          //- <path fill="#000" stroke="#000" stroke-opacity = "0.1" fill-opacity="0.1" :d="pendulumContourFull"></path>
          <path id="pato" fill="none" stroke="#000" stroke-opacity = "0.1" fill-opacity="0.5" :d="pendulumTrajectory"></path>
          <path id="pato" fill="none" stroke="red" stroke-opacity = "0.5" fill-opacity="0.5" :d="pendulumTrajectory"></path>
          <path id="pato" fill="none" stroke="green" stroke-opacity = "0.3" fill-opacity="0.5" :d="pendulumTrajectory1m"></path>
          <path id="pato" fill="none" stroke="green" stroke-opacity = "0.3" fill-opacity="0.5" :d="pendulumTrajectory2m"></path>
          <path id="pato" fill="none" stroke="green" stroke-opacity = "0.3" fill-opacity="0.5" :d="pendulumTrajectory3m"></path>

          //- rope
          <line x1="250" y1="0" x2="250" y2="220" stroke="brown" stroke-width="2">
            <animate attributeName="x2" :values="spherePosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="spherePosY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          //- mass
          <circle r="10" cx="250" cy="220" fill="green"  id="circle">
            <animate attributeName="cx" :values="spherePosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" :values="spherePosY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </circle>
          //- weight arrow
          <line x1="250" y1="0" x2="250" y2="-220" stroke="red" stroke-width="2">
            <animate attributeName="x1" :values="spherePosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="spherePosY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          //- weight arrow tip
          <line x1="250" y1="0" x2="250" y2="-220" stroke="red" stroke-width="2">
            <animate attributeName="x1" :values="weightX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightTipXL" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightTipYL" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          <line x1="250" y1="0" x2="250" y2="-220" stroke="red" stroke-width="2">
            <animate attributeName="x1" :values="weightX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightTipXR" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightTipYR" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          //- Cos component weight arrow ( ~ vertical)
          <line x1="250" y1="0" x2="250" y2="-220" stroke="Blue" stroke-width="2">
            <animate attributeName="x1" :values="spherePosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="spherePosY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightCosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightCosY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          //- Cos weight arrow tip
          <line x1="250" y1="0" x2="250" y2="-220" stroke="blue" stroke-width="2">
            <animate attributeName="x1" :values="weightCosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightCosY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightCosTipXL" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightCosTipYL" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          <line x1="250" y1="0" x2="250" y2="-220" stroke="blue" stroke-width="2">
            <animate attributeName="x1" :values="weightCosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightCosY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightCosTipXR" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightCosTipYR" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>

          //-Sin component weight arrow ( ~ vertical)
          <line x1="250" y1="0" x2="250" y2="-220" stroke="green" stroke-width="2">
            <animate attributeName="x1" :values="spherePosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="spherePosY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightSinX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightSinY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          //- Sin weight arrow tip
          <line x1="250" y1="0" x2="250" y2="-220" stroke="green" stroke-width="2">
            <animate attributeName="x1" :values="weightSinX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightSinY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightSinTipXL" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightSinTipYL" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          <line x1="250" y1="0" x2="250" y2="-220" stroke="green" stroke-width="2">
            <animate attributeName="x1" :values="weightSinX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightSinY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightSinTipXR" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightSinTipYR" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>
          //- componet dashed line
          <line x1="250" y1="0" x2="250" y2="-220" stroke="green" stroke-width="2" stroke-dasharray="5,5">
            <animate attributeName="x1" :values="weightX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightSinX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightSinY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>

          //- componet dashed line
          <line x1="250" y1="0" x2="250" y2="-220" stroke="blue" stroke-width="2" stroke-dasharray="5,5">
            <animate attributeName="x1" :values="weightX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y1" :values="weightY" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="x2" :values="weightCosX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y2" :values="weightCosY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </line>

          <text x="-10" y="-100" font-size="20px" fill="#000" style="italic"><tspan font-family="New Times Roman" font-style="italic">mg</tspan>
            <animate attributeName="x" :values="weightTextX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y" :values="weightTextY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </text>

          <text x="-10" y="-100" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">mg</tspan>sin(<tspan font-family="New Times Roman" font-style="italic">&theta;</tspan>)
            <animate attributeName="x" :values="weightSinTextX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y" :values="weightSinTextY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </text>

          <text x="-10" y="-100" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">mg</tspan>cos(<tspan font-family="New Times Roman" font-style="italic">&theta;</tspan>)
            <animate attributeName="x" :values="weightCosTextX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y" :values="weightCosTextY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </text>

          <text x="-10" y="-100" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&theta;</tspan>
            <animate attributeName="x" :values="thetaTextX" :dur="period" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y" :values="thetaTextY" :dur="period" repeatCount="indefinite" begin="0s"/>
          </text>

          <text x="350" y="20" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&omega; = {{ Math.round(1000 * omega / prod)/1000 }} rad/s</tspan></text>
          <text x="350" y="40" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">f = {{ Math.round(1000 * omega / prod / (2 * Math.PI)) / 1000 }} Hz</tspan></text>
          <text x="350" y="60" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">T = {{ Math.round(1000 * 2 * Math.PI *prod / omega) / 1000 }} s</tspan></text>
          //- <text x="327" :y="`${ pistonBigY + 7}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureBig*10)/10}` }} </text>

          </g>
          </svg>
      div(style="display: flex; flex-direction: column; justify-content: flex-start;")
        <span style="font-size: 20px; margin-bottom: 5px; color: blue;"> {{ planet[planetIndex].name }}</span>
        <span style="font-size: 15px; margin-bottom: 3px;">gravity</span>
        <span style="font-size: 20px; margin-bottom: 20px; color: red;">{{ planet[planetIndex].gravity }} m/s<sup>2</sup></span>
        button(@click="pendulumContourPath(0, 0, 0)" style="width: 100px;") {{ planet[0].name }}
        button(@click="pendulumContourPath(0, 1, 0)" style="width: 100px;") {{ planet[1].name }}
        button(@click="pendulumContourPath(0, 2, 0)" style="width: 100px;") {{ planet[2].name }}
        button(@click="pendulumContourPath(0, 3, 0)" style="width: 100px;") {{ planet[3].name }}
        button(@click="pendulumContourPath(0, 4, 0)" style="width: 100px;") {{ planet[4].name }}
        button(@click="pendulumContourPath(0, 5, 0)" style="width: 100px;") {{ planet[5].name }}
        button(@click="pendulumContourPath(0, 6, 0)" style="width: 100px;") {{ planet[6].name }}
        button(@click="pendulumContourPath(0, 7, 0)" style="width: 100px;") {{ planet[7].name }}
        button(@click="pendulumContourPath(0, 8, 0)" style="width: 100px;") {{ planet[8].name }}
    div(style="display: flex; flex-direction: row; justify-content: space-around;")
      div
        p L = {{ parseInt((long))/100 }} m<br>
          button(@click="pendulumContourPath(1,planetIndex, 0)") +1 cm
          button(@click="pendulumContourPath(-1,planetIndex, 0)") -1 cm
          button(@click="pendulumContourPath(5,planetIndex, 0)") +5 cm
          button(@click="pendulumContourPath(-5,planetIndex, 0)") -5 cm
      div
        p Time scale: {{ parseInt((prod * 10))/10 }}<br>
          button(@click="pendulumContourPath(0,planetIndex, 0.1)") +0.1
          button(@click="pendulumContourPath(0,planetIndex, -0.1)") -0.1
    //- <hr>
    //- p {{ fluidTankLevel }} : {{ fluidDepositLevel }}

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      planetIndex: 3,
      planet: [{'name': 'Sun', 'gravity': 274}, {'name': 'Mercury', 'gravity': 3.7}, {'name': 'Venus', 'gravity': 8.87}, {'name': 'Earth', 'gravity': 9.807}, {'name': 'Mars', 'gravity': 3.711}, {'name': 'Jupiter', 'gravity': 24.79}, {'name': 'Saturn', 'gravity': 10.44}, {'name': 'Uranus', 'gravity': 8.8}, {'name': 'Neptune', 'gravity': 11.15}],
      gravity: 9.807,
      pendulumContourFull: '',
      pendulumContour: `M${250 - 220 * Math.sin(Math.PI / 9)},${220 * Math.cos(Math.PI / 9)}  A 220 220 0 0 0 ${250 - 220 * Math.sin(-Math.PI / 9)},${220 * Math.cos(Math.PI / 9)}`,
      pendulumTrajectory: `M${250 - 220 * Math.sin(Math.PI / 9)},${220 * Math.cos(Math.PI / 9)}  A 220 220 0 0 0 ${250 - 220 * Math.sin(-Math.PI / 9)},${220 * Math.cos(Math.PI / 9)} A 220 220 0 0 1 ${250 - this.length * Math.sin(Math.PI / 9)},${this.length * Math.cos(Math.PI / 9)}`,
      pendulumTrajectory1m: `M${250 - 100 * Math.sin(2.2 * Math.PI / 9)},${100 * Math.cos(2.2 * Math.PI / 9)}  A 100 100 0 0 0 ${250 - 100 * Math.sin(-2.2 * Math.PI / 9)},${100 * Math.cos(2.2 * Math.PI / 9)} A 100 100 0 0 1 ${250 - this.length * Math.sin(2.2 * Math.PI / 9)},${this.length * Math.cos(2 * Math.PI / 9)}`,
      pendulumTrajectory2m: `M${250 - 200 * Math.sin(2.2 * Math.PI / 9)},${200 * Math.cos(2.2 * Math.PI / 9)}  A 200 200 0 0 0 ${250 - 200 * Math.sin(-2.2 * Math.PI / 9)},${200 * Math.cos(2.2 * Math.PI / 9)} A 200 200 0 0 1 ${250 - this.length * Math.sin(2.2 * Math.PI / 9)},${this.length * Math.cos(2.2 * Math.PI / 9)}`,
      pendulumTrajectory3m: `M${250 - 300 * Math.sin(2.2 * Math.PI / 9)},${300 * Math.cos(2.2 * Math.PI / 9)}  A 300 300 0 0 0 ${250 - 300 * Math.sin(-2.2 * Math.PI / 9)},${300 * Math.cos(2.2 * Math.PI / 9)} A 300 300 0 0 1 ${250 - this.length * Math.sin(2.2 * Math.PI / 9)},${this.length * Math.cos(2.2 * Math.PI / 9)}`,
      long: 100,
      period: 2.4578,
      omega: 2.557,
      prod: 1,
      ropePos: '',
      times: '',
      spherePosX: '',
      spherePosY: '',
      weightX: '',
      weightY: '',
      weightTipXL: '',
      weightTipYL: '',
      weightTipXR: '',
      weightTipYR: '',
      weightCosX: '',
      weightCosY: '',
      weightCosTipXL: '',
      weightCosTipYL: '',
      weightCosTipXR: '',
      weightCosTipYR: '',
      weightSinX: '',
      weightSinY: '',
      weightSinTipXL: '',
      weightSinTipYL: '',
      weightSinTipXR: '',
      weightSinTipYR: '',
      weightTextX: '',
      weightTextY: '',
      weightCosTextX: '',
      weightCosTextY: '',
      weightSinTextX: '',
      weightSinTextY: '',
      thetaTextX: '',
      thetaTextY: ''
    }
  },
  computed: {
  },
  methods: {
    factor (f) {
      this.prod = this.prod + f
      console.log(this.prod)
    },
    pendulumContourPath (l, planet, timeScale) {
      // this.pendulumContour = 'M250,0 -220*Math.sin(Math.PI/18),220*Math.cos(Math.PI/18) A 100 100 0 0 1 300 300'
      if (this.prod + timeScale < 0.1) {
        this.prod = 0.1
      } else {
        this.prod = this.prod + timeScale
      }
      this.planetIndex = planet
      this.gravity = this.planet[planet].gravity
      this.long = this.long + l
      let angle0 = 2 * 2 * Math.PI / 18
      this.omega = this.prod * Math.sqrt(this.gravity / (this.long / 100))
      this.period = 1 * 2 * Math.PI / this.omega
      // console.log('l: ' + this.long)
      // console.log('omega: ' + this.omega)
      // console.log('Period: ' + this.period)
      this.pendulumContourFull = `M250,0 ${250 - 300 * Math.sin(angle0)},${300 * Math.cos(angle0)}  A 300 300 0 0 0 ${250 - 300 * Math.sin(-angle0)},${300 * Math.cos(angle0)} Z`
      this.pendulumContour = `M250,0 ${250 - this.long * Math.sin(angle0)},${this.long * Math.cos(angle0)}  A 220 220 0 0 0 ${250 - this.long * Math.sin(-angle0)},${this.long * Math.cos(angle0)} Z`
      this.pendulumTrajectory = 'M'
      this.times = ''
      this.ropePos = ''
      this.spherePosX = ''
      this.spherePosY = ''

      this.weightX = ''
      this.weightY = ''
      this.weightTipXL = ''
      this.weightTipYL = ''
      this.weightTipXR = ''
      this.weightTipYR = ''
      this.weightTextX = ''
      this.weightTextY = ''

      this.weightCosX = ''
      this.weightCosY = ''
      this.weightCosTipXL = ''
      this.weightCosTipYL = ''
      this.weightCosTipXR = ''
      this.weightCosTipYR = ''
      this.weightCosTextX = ''
      this.weightCosTextY = ''

      this.weightSinX = ''
      this.weightSinY = ''
      this.weightSinTipXL = ''
      this.weightSinTipYL = ''
      this.weightSinTipXR = ''
      this.weightSinTipYR = ''
      this.weightSinTextX = ''
      this.weightSinTextY = ''

      this.thetaTextX = ''
      this.thetaTextY = ''

      let t = this.period / 30
      for (var j = 0; j <= 30; j++) {
        let angle = angle0 * (Math.cos(this.omega * j * t - Math.PI / 2))
        // console.log('angle: ' + angle)
        // console.log('time: ' + (j * t))
        // console.log('time x omega: ' + (this.omega * j * t))
        //  d1 = d1 + `${delta * j + 30},${90 + 20 * Math.sin(2 * Math.PI * delta * j / period)} `
        let massPosX = 250 - this.long * Math.sin(-angle)
        let massPosY = this.long * Math.cos(-angle)
        this.pendulumTrajectory = this.pendulumTrajectory + `${massPosX},${massPosY} `
        this.ropePos = this.ropePos + `${massPosX},${massPosY};`
        this.spherePosX = this.spherePosX + `${massPosX}; `
        this.spherePosY = this.spherePosY + `${massPosY}; `

        this.weightX = this.weightX + `${massPosX}; `
        this.weightY = this.weightY + `${massPosY + 10 * this.gravity}; `
        this.weightTipXL = this.weightTipXL + `${massPosX - 5}; `
        this.weightTipYL = this.weightTipYL + `${massPosY + 10 * this.gravity - 30}; `
        this.weightTipXR = this.weightTipXR + `${massPosX + 5}; `
        this.weightTipYR = this.weightTipYR + `${massPosY + 10 * this.gravity - 30}; `
        this.weightTextX = this.weightTextX + `${massPosX - 10}; `
        this.weightTextY = this.weightTextY + `${massPosY + 10 * this.gravity + 20}; `

        let cosTipX = massPosX + 10 * this.gravity * Math.cos(angle) * Math.sin(angle)
        let cosTipY = massPosY + 10 * this.gravity * Math.cos(angle) * Math.cos(angle)
        this.weightCosX = this.weightCosX + `${cosTipX}; `
        this.weightCosY = this.weightCosY + `${cosTipY}; `
        this.weightCosTipXL = this.weightCosTipXL + `${cosTipX - 15 * Math.sin(Math.PI - angle - Math.PI / 6)}; `
        this.weightCosTipYL = this.weightCosTipYL + `${cosTipY + 15 * Math.cos(Math.PI - angle - Math.PI / 6)}; `
        this.weightCosTipXR = this.weightCosTipXR + `${cosTipX - 15 * Math.sin(Math.PI - angle + Math.PI / 6)}; `
        this.weightCosTipYR = this.weightCosTipYR + `${cosTipY + 15 * Math.cos(Math.PI - angle + Math.PI / 6)}; `
        this.weightCosTextX = this.weightCosX + `${250 - this.long * Math.sin(-angle) * 1.5}; `
        this.weightCosTextY = this.weightCosY + `${cosTipY + 1.5}; `

        let sinTipX = massPosX - 10 * this.gravity * Math.sin(angle) * Math.cos(angle)
        let sinTipY = massPosY + 10 * this.gravity * Math.sin(angle) * Math.sin(angle)
        this.weightSinX = this.weightSinX + `${sinTipX}; `
        this.weightSinY = this.weightSinY + `${sinTipY}; `

        if (angle > 0) {
          this.weightSinTipXL = this.weightSinTipXL + `${sinTipX - 15 * Math.sin(-Math.PI / 2 - angle - Math.PI / 6)}; `
          this.weightSinTipYL = this.weightSinTipYL + `${sinTipY + 15 * Math.cos(-Math.PI / 2 - angle - Math.PI / 6)}; `
          this.weightSinTipXR = this.weightSinTipXR + `${sinTipX - 15 * Math.sin(-Math.PI / 2 - angle + Math.PI / 6)}; `
          this.weightSinTipYR = this.weightSinTipYR + `${sinTipY + 15 * Math.cos(-Math.PI / 2 - angle + Math.PI / 6)}; `
        } else {
          this.weightSinTipXL = this.weightSinTipXL + `${sinTipX + 15 * Math.sin(-Math.PI / 2 - angle - Math.PI / 6)}; `
          this.weightSinTipYL = this.weightSinTipYL + `${sinTipY - 15 * Math.cos(-Math.PI / 2 - angle - Math.PI / 6)}; `
          this.weightSinTipXR = this.weightSinTipXR + `${sinTipX + 15 * Math.sin(-Math.PI / 2 - angle + Math.PI / 6)}; `
          this.weightSinTipYR = this.weightSinTipYR + `${sinTipY - 15 * Math.cos(-Math.PI / 2 - angle + Math.PI / 6)}; `
        }
        this.weightSinTextX = this.weightSinTextX + `${sinTipX * 1.01}; `
        this.weightSinTextY = this.weightSinTextY + `${sinTipY * 1.01}; `

        this.thetaTextX = this.thetaTextX + `${(massPosX - 250) * 1.1 + 246}; ` // + (this.weightCosX + this.spherePosX) / 2 + `${cosTipX + 0}; `
        this.thetaTextY = this.thetaTextY + `${massPosY * 1.5}; ` // + (this.weightCosY + this.spherePosY) / 2 + `${cosTipY + 0}; `

        if (j < 30) {
          this.times = this.times + `${j * t}; `
        } else {
          this.times = this.times + `${j * t}`
        }
      }
      // console.log(this.pendulumTrajectory)
      // console.log('sphere: ' + this.spherePos)
      // console.log('weight: ' + this.weightX)
      // console.log('weight: ' + this.weightX[0])
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
</style>
