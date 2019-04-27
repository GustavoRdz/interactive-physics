<template lang="pug">
.eg-transition-group(:enter='enter', :leave='leave')
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" height="300" width="500" >
    <g transform="translate(0,0)">
      <rect x="0" y="0" width="500" height="300" fill="none" stroke="#000000"  stroke-width="0.1"/>
      <line x1="0" y1="0" x2="500" y2="300" stroke="#000" stroke-width="0.1"/>
      <line x1="0" y1="300" x2="500" y2="0" stroke="#000" stroke-width="0.1"/>
      <line x1="0" y1="150" x2="500" y2="150" stroke="#000" stroke-width="0.1"/>
      <line x1="250" y1="0" x2="250" y2="300" stroke="#000" stroke-width="0.1"/>
      //- <circle r="100" cx="100" cy="100" fill="gray"></circle>
      //- <circle r="90" cx="100" cy="100" fill="lightgray"></circle>
      //- <path id="sector" fill="darkgray" opacity="0.6" :d="d"></path>
      <path fill="#1895e0" stroke="#1895e0" stroke-opacity = "0.1" fill-opacity="0.2" :d="fluidTank"></path>
      <path fill="#1895e0" stroke="#1895e0" stroke-opacity = "0.1" fill-opacity="0.2" :d="fluidDeposit"></path>
      //- experimental tank
      <path fill="#1895e0" fill-opacity="0.1" stroke="#000" d="M300,30 L300,150 L305,150 L305,200 L375,200 L375,150 L385,150 L385,200 L435,200 L435,150 L445,150 L445,200 L475,200 L475,150 L480,150 L480,30 z"></path>
      //- deposit
      <path fill="#1895e0" fill-opacity="0.1" stroke="#000" d="M50,150 L50,258 L250,258 L250,150 z"></path>
      //- spring A
      <path fill="none" stroke="#000" :d="springA"></path>
      <rect x="305" :y="pistonBigY" width="70" height="7" fill="#cdcdcd" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
      <rect x="305" y="150" width="70" :height="`${ pistonBigY - 150}`" fill="#1895e0" fill-opacity="0.2" stroke="#1895e0"  stroke-width="0.1"/>

      //- spring B
      <path fill="none" stroke="#000" :d="springB"></path>
      <rect x="385" :y="pistonMediumY" width="50" height="7" fill="#cdcdcd" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
      <rect x="385" y="150" width="50" :height="`${ pistonMediumY - 150}`" fill="#1895e0" fill-opacity="0.2" stroke="#1895e0"  stroke-width="0.1"/>

      //- spring C
      <path fill="none" stroke="#000" :d="springC"></path>
      <rect x="445" :y="pistonSmallY" width="30" height="7" fill="#cdcdcd" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
      <rect x="445" y="150" width="30" :height="`${ pistonSmallY - 149.7}`" fill="#1895e0" fill-opacity="0.2" stroke="#1895e0"  stroke-width="0.1"/>

      //- tube in
      <path fill="#1895e0" stroke="#000" stroke-opacity = "1" fill-opacity="0" d="M250,255 L255 255 A10 10 0 0 0 265 245 L265 40 A10 10 0 0 1 275 29 L310 29 L310 20 L270 20 A15 15 0 0 0 258 30 L258 240 A10 10 10 0 1 250 245 Z"></path>

      //- measurement points
      <circle cx="390" :cy="`${ 150 - fluidTankLevel }`" r="3" fill="red"/>
      <circle cx="340" :cy="`${ pistonBigY}`" r="3" fill="red"/>
      <circle cx="410" :cy="`${ pistonMediumY }`" r="3" fill="red"/>
      <circle cx="460" :cy="`${ pistonSmallY}`" r="3" fill="red"/>
      <text x="380" :y="`${ 140 - fluidTankLevel }`" font-size="10px">p<tspan baseline-shift="sub">0</tspan> = 1.013 x 10<tspan baseline-shift="super">5</tspan> Pa</text>
      <text x="327" :y="`${ pistonBigY + 7}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureBig*10)/10}` }} </text>
      <text x="390" :y="`${ pistonMediumY + 5}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureBig*0.67*10)/10}` }} </text>
      <text x="440" :y="`${ pistonSmallY + 5}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureBig*0.35*10)/10}` }} </text>
      <text x="320" :y="`${ 0 + (pistonBigY + 150 - fluidTankLevel)/2}`" font-size="10px">h = {{ `${parseInt((pistonBigY - 150 + fluidTankLevel)*10)/10}` }} </text>

      <line x1="340" :y1="`${ 150 - fluidTankLevel }`" x2="340" :y2="`${ pistonBigY }`" stroke="#000" stroke-opacity="0.5"/>

    </g>
  </svg>
  <hr>
  button(@click="pathFluid(1)") +&#x03c1;= {{ angle }}
  button(@click="pathFluid(-1)") -&#x03c1;= {{ angle }}
  button(@click="pathFluid(5)") +5&#x03c1;= {{ angle }}
  button(@click="pathFluid(-5)") -5&#x03c1;= {{ angle }}
  p {{ fluidTankLevel }} : {{ fluidDepositLevel }}

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      angle: 0,
      text: '0',
      d: '',
      fluidTank: '',
      fluidTankLevel: 0,
      fluidDeposit: 'M50,150 L50,258 L250,258 L250,150 z',
      fluidDepositLevel: 150,
      springA: 'M350,155 A10 6 -20 0 0 330 160 A10 6 10 0 0 350 165 A10 6 -20 0 0 330 170 A10 6 10 0 0 350 175 A10 6 -20 0 0 330 180 A10 6 10 0 0 350 185 A10 5 -20 0 0 330 190 A10 5 10 0 0 350 195 A10 5 -20 0 0 330 200',
      springB: 'M420,155 A10 6 -20 0 0 400 160 A10 6 10 0 0 420 165 A10 6 -20 0 0 400 170 A10 6 10 0 0 420 175 A10 6 -20 0 0 400 180 A10 6 10 0 0 420 185 A10 5 -20 0 0 400 190 A10 5 10 0 0 420 195 A10 5 -20 0 0 400 200',
      springC: 'M470,155 A10 6 -20 0 0 450 160 A10 6 10 0 0 470 165 A10 6 -20 0 0 450 170 A10 6 10 0 0 470 175 A10 6 -20 0 0 450 180 A10 6 10 0 0 470 185 A10 5 -20 0 0 450 190 A10 5 10 0 0 470 195 A10 5 -20 0 0 450 200',
      pistonBigY: 150,
      pistonMediumY: 150,
      pistonSmallY: 150,
      pressureBig: 0,
      pressureMedium: 0,
      pressureSmall: 0
    }
  },
  computed: {
  },
  methods: {
    path (inc) {
      this.angle += inc
      console.log(this.angle)

      let {x, y} = calcEndPoint(this.angle)
      if (this.angle <= 180) {
        this.d = `M100,100 L100, 0 A100,100 0 0,0 ${x}, ${y} z`
      } else {
        this.d = `M100,100 L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 ${x}, ${y} z`
      }
      console.log(this.d)
      return this.d
      // return calcPath(this.angle)
    },
    pathFluid (inc) {
      this.fluidTankLevel += inc
      this.fluidDepositLevel += 0.9 * inc

      console.log(this.fluidTankLevel)
      if (this.fluidTankLevel > 0 && this.fluidTankLevel < 120) {
        this.fluidTank = `M300,${150 - this.fluidTankLevel} L300,150 L480,150 L480,${150 - this.fluidTankLevel} z`
        this.fluidDeposit = `M50,${this.fluidDepositLevel} L50,258 L250,258 L250,${this.fluidDepositLevel} z`
      } else {
        if (this.fluidTankLevel <= 0) {
          this.fluidTank = `M300,150 L300,150 L480,150 L480,150 z`
          this.fluidDeposit = `M50,150 L50,258 L250,258 L250,150 z`
          this.fluidTankLevel = 0
          this.fluidDepositLevel = 150
        } else {
          this.fluidTank = `M300,30 L300,150 L480,150 L480,30 z`
          this.fluidDeposit = `M50,258 L50,258 L250,258 L250,258 z`
          this.fluidTankLevel = 120
          this.fluidDepositLevel = 258
        }
      }

      // let y = this.fluidTankLevel > 0 ? this.fluidTankLevel : 0
      let y = this.fluidTankLevel
      // let x = y <= 0 ? 150 : this.fluidDepositLevel
      // let x = this.fluidDepositLevel  // > 150 ? this.fluidDepositLevel : 150
      // spring
      // M345,155 A10 4 -20 0 0 330 160 A10 6 10 0 0 350 165 A10 6 -20 0 0 330 170 A10 6 10 0 0 350 175 A10 6 -20 0 0 330 180 A10 6 10 0 0 350 185 A10 5 -20 0 0 330 190 A10 5 10 0 0 350 195 A10 5 -20 0 0 330 200
      let deltaYA = 5 - y * 4 / 120
      let deltaYB = 5 - (y * 4 / 120) * 0.67
      let deltaYC = 5 - (y * 4 / 120) * 0.35
      // console.log(deltaYA)
      // console.log(200 - 9 * deltaYA)
      // console.log(200 - 8 * deltaYA)
      // console.log(200 - 7 * deltaYA)
      this.springA = `M350,${202 - 9 * deltaYA} A10 5 -20 0 0 330 ${200 - 8 * deltaYA} A10 6 10 0 0 350 ${200 - 7 * deltaYA} A10 6 -20 0 0 330 ${200 - 6 * deltaYA} A10 6 10 0 0 350 ${200 - 5 * deltaYA} A10 6 -20 0 0 330 ${200 - 4 * deltaYA} A10 6 10 0 0 350 ${200 - 3 * deltaYA} A10 5 -20 0 0 330 ${200 - 2 * deltaYA} A10 5 10 0 0 350 ${200 - deltaYA} A10 5 -20 0 0 330 200`
      this.springB = `M420,${201 - 9 * deltaYB} A10 4 -20 0 0 400 ${200 - 8 * deltaYB} A10 6 10 0 0 420 ${200 - 7 * deltaYB} A10 6 -20 0 0 400 ${200 - 6 * deltaYB} A10 6 10 0 0 420 ${200 - 5 * deltaYB} A10 6 -20 0 0 400 ${200 - 4 * deltaYB} A10 6 10 0 0 420 ${200 - 3 * deltaYB} A10 5 -20 0 0 400 ${200 - 2 * deltaYB} A10 5 10 0 0 420 ${200 - deltaYB} A10 5 -20 0 0 400 200`
      this.springC = `M470,${201 - 9 * deltaYC} A10 4 -20 0 0 450 ${200 - 8 * deltaYC} A10 6 10 0 0 470 ${200 - 7 * deltaYC} A10 6 -20 0 0 450 ${200 - 6 * deltaYC} A10 6 10 0 0 470 ${200 - 5 * deltaYC} A10 6 -20 0 0 450 ${200 - 4 * deltaYC} A10 6 10 0 0 470 ${200 - 3 * deltaYC} A10 5 -20 0 0 450 ${200 - 2 * deltaYC} A10 5 10 0 0 470 ${200 - deltaYC} A10 5 -20 0 0 450 200`
      this.pistonBigY = 150 + y * 35 / 120
      this.pistonMediumY = 150 + 0.67 * y * 35 / 120
      this.pistonSmallY = 150 + 0.35 * y * 35 / 120

      this.pressureBig = 1000 * 9.81 * (this.pistonBigY - 150 + this.fluidTankLevel) * 1 / 100

      console.log('y = ' + y)
      console.log(this.fluidTankLevel)
      console.log(this.fluidTank)
      return this.fluidThank
      // return calcPath(this.angle)
    }
  },
  mixins: [eagle.slide]
}
// function calcPath (angle) {
//   let d
//   let {x, y} = calcEndPoint(angle)
//   if (angle <= 180) {
//     d = `M100,100 L100, 0 A100,100 0 0,0 ${x}, ${y} z`
//   } else {
//     d = `M100,100 L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 ${x}, ${y} z`
//   }
//   console.log(d)
//   return d
// }
function calcEndPoint (angle) {
  let x, y
  x = 100 - 100 * Math.sin(Math.PI * angle / 180)
  y = 100 - 100 * Math.cos(Math.PI * angle / 180)
  console.log(x)
  console.log(y)
  return {x, y}
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
