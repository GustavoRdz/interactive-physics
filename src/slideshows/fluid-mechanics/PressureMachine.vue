<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
      p increase/decrease h = {{ parseInt((fluidTankLevel)) }}<br>
        button(@click="pathFluid(1)") +1 cm
        button(@click="pathFluid(-1)") -1 cm
        button(@click="pathFluid(5)") +5 cm
        button(@click="pathFluid(-5)") -5 cm
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" height="220" width="500" >
        <g transform="translate(0,0)">
        //- reference 
        //- <rect x="0" y="0" width="500" height="220" fill="none" stroke="#000000"  stroke-width="0.1"/>
        //- <line x1="0" y1="0" x2="500" y2="220" stroke="#000" stroke-width="0.1"/>
        //- <line x1="0" y1="220" x2="500" y2="0" stroke="#000" stroke-width="0.1"/>
        //- <line x1="0" y1="110" x2="500" y2="110" stroke="#000" stroke-width="0.1"/>
        //- <line x1="250" y1="0" x2="250" y2="220" stroke="#000" stroke-width="0.1"/>
        //- <circle r="100" cx="100" cy="100" fill="gray"></circle>
        //- <circle r="90" cx="100" cy="100" fill="lightgray"></circle>
        //- <path id="sector" fill="darkgray" opacity="0.6" :d="d"></path>
        <path fill="#1895e0" stroke="#1895e0" stroke-opacity = "0.1" fill-opacity="0.2" :d="fluidTank"></path>
        //- <path fill="#1895e0" stroke="#1895e0" stroke-opacity = "0.1" fill-opacity="0.2" :d="fluidDeposit"></path>
        //- experimental tank
        //- <path fill="#1895e0" fill-opacity="0.1" stroke="#000" d="M300,30 L300,150 L305,150 L305,200 L375,200 L375,150 L385,150 L385,200 L435,200 L435,150 L445,150 L445,200 L475,200 L475,150 L480,150 L480,30 z"></path>
        <path fill="#1895e0" fill-opacity="0.1" stroke="#000" d="M100,30 L100,150 L110,150 L110,200 L230,200 L230,150 L250,150 L250,200 L330,200 L330,150 L350,150 L350,200 L390,200 L390,150 L400,150 L400,30 z"></path>
        //- //- deposit
        //- <path fill="#1895e0" fill-opacity="0.1" stroke="#000" d="M50,150 L50,258 L250,258 L250,150 z"></path>
        //- spring A
        <path fill="none" stroke="#000" :d="springA"></path>
        <rect x="110" :y="pistonBigY" width="120" height="7" fill="#cdcdcd" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
        <rect x="110" y="150" width="120" :height="`${ pistonBigY - 150}`" fill="#1895e0" fill-opacity="0.2" stroke="#1895e0"  stroke-width="0.1"/>

        //- spring B
        <path fill="none" stroke="#000" :d="springB"></path>
        <rect x="250" :y="pistonMediumY" width="80" height="7" fill="#cdcdcd" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
        <rect x="250" y="150" width="80" :height="`${ pistonMediumY - 150}`" fill="#1895e0" fill-opacity="0.2" stroke="#1895e0"  stroke-width="0.1"/>

        //- spring C
        <path fill="none" stroke="#000" :d="springC"></path>
        <rect x="350" :y="pistonSmallY" width="40" height="7" fill="#cdcdcd" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
        <rect x="350" y="150" width="40" :height="`${ pistonSmallY - 149.7}`" fill="#1895e0" fill-opacity="0.2" stroke="#1895e0"  stroke-width="0.1"/>

        //- //- tube in
        //- <path fill="#1895e0" stroke="#000" stroke-opacity = "1" fill-opacity="0" d="M250,255 L255 255 A10 10 0 0 0 265 245 L265 40 A10 10 0 0 1 275 29 L310 29 L310 20 L270 20 A15 15 0 0 0 258 30 L258 240 A10 10 10 0 1 250 245 Z"></path>
        
        //- measurement points
        <circle cx="250" :cy="`${ 150 - fluidTankLevel }`" r="3" fill="red"/>
        <circle cx="170" :cy="`${ pistonBigY}`" r="3" fill="red"/>
        <circle cx="265" :cy="`${ pistonMediumY }`" r="3" fill="red"/>
        <circle cx="360" :cy="`${ pistonSmallY}`" r="3" fill="red"/>
        <text x="260" :y="`${ 135 - fluidTankLevel }`" font-size="10px">p<tspan baseline-shift="sub">0</tspan> = 1.013 x 10<tspan baseline-shift="super">5</tspan> Pa</text>
        <text x="175" :y="`${ 0.95*(pistonBigY + 7)}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureBig)}` }} Pa</text>
        <text x="270" :y="`${ 0.95*(pistonMediumY + 5)}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureMedium)}` }} Pa</text>
        <text x="365" :y="`${ 0.95*(pistonSmallY + 5)}`" font-size="10px" fill="blue">p = {{ `${parseInt(pressureSmall)}` }} Pa</text>
        //- <text x="140" :y="`${ -0.9 + (pistonBigY + 140 - fluidTankLevel)/2}`" font-size="10px" transform="rotate(-90,140,150)">h = {{ `${parseInt((pistonBigY - 150 + fluidTankLevel))}` }} cm</text>
        <text x="162" :y="145" font-size="10px" transform="rotate(-90,162,145)">h<tspan baseline-shift="sub">A</tspan> = {{ `${parseInt((pistonBigY - 150 + fluidTankLevel)*100)/100}` }} cm</text>
        <text x="257" :y="145" font-size="10px" transform="rotate(-90,257,145)">h<tspan baseline-shift="sub">B</tspan> = {{ `${parseInt((pistonMediumY - 150 + fluidTankLevel)*100)/100}` }} cm</text>
        <text x="352" :y="145" font-size="10px" transform="rotate(-90,352,145)">h<tspan baseline-shift="sub">C</tspan> = {{ `${parseInt((pistonSmallY - 150 + fluidTankLevel)*100)/100}` }} cm</text>

        //- <text x="389" :y="`${ -2 + (pistonBigY + 130 - fluidTankLevel)/2}`" font-size="10px">h = {{ `${parseInt((pistonMediumY - 150 + fluidTankLevel))}` }} cm</text>
        //- <text x="440" :y="`${ -2 + (pistonBigY + 120 - fluidTankLevel)/2}`" font-size="10px">h = {{ `${parseInt((pistonSmallY - 150 + fluidTankLevel))}` }} cm</text>

        <line x1="170" :y1="`${ 150 - fluidTankLevel }`" x2="170" :y2="`${ pistonBigY }`" stroke="#000" stroke-opacity="0.5"/>
        <line x1="265" :y1="`${ 150 - fluidTankLevel }`" x2="265" :y2="`${ pistonMediumY }`" stroke="#000" stroke-opacity="0.5"/>
        <line x1="360" :y1="`${ 150 - fluidTankLevel }`" x2="360" :y2="`${ pistonSmallY }`" stroke="#000" stroke-opacity="0.5"/>

        <text x="120" :y="145" font-size="10px" transform="rotate(-90,120,145)">h = {{ `${parseInt((fluidTankLevel)*100)/100}` }} cm</text>
        <line x1="110" :y1="`${ 150 - fluidTankLevel }`" x2="110" :y2="`${ pistonBigY }`" stroke="#000" stroke-opacity="0.5"/>
        //- force text
        <text x="150" :y="210" font-size="10px">F<tspan baseline-shift="sub">A</tspan> = {{ `${parseInt(pressureBig)}` }} N</text>
        <text x="260" :y="210" font-size="10px">F<tspan baseline-shift="sub">B</tspan> = {{ `${parseInt(pressureMedium*4/9)}` }} N</text>
        <text x="355" :y="210" font-size="10px">F<tspan baseline-shift="sub">C</tspan> = {{ `${parseInt(pressureSmall/9)}` }} N</text>

        </g>
        </svg>
    //- <hr>
    //- p {{ fluidTankLevel }} : {{ fluidDepositLevel }}

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
      springA: 'M180,155 A10 6 -20 0 0 160 160 A10 6 10 0 0 180 165 A10 6 -20 0 0 160 170 A10 6 10 0 0 180 175 A10 6 -20 0 0 160 180 A10 6 10 0 0 180 185 A10 5 -20 0 0 160 190 A10 5 10 0 0 180 195 A10 5 -20 0 0 160 200',
      springB: 'M300,155 A10 6 -20 0 0 280 160 A10 6 10 0 0 300 165 A10 6 -20 0 0 280 170 A10 6 10 0 0 300 175 A10 6 -20 0 0 280 180 A10 6 10 0 0 300 185 A10 5 -20 0 0 280 190 A10 5 10 0 0 300 195 A10 5 -20 0 0 280 200',
      springC: 'M380,155 A10 6 -20 0 0 360 160 A10 6 10 0 0 380 165 A10 6 -20 0 0 360 170 A10 6 10 0 0 380 175 A10 6 -20 0 0 360 180 A10 6 10 0 0 380 185 A10 5 -20 0 0 360 190 A10 5 10 0 0 380 195 A10 5 -20 0 0 360 200',
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
    // path (inc) {
    //   this.angle += inc
    //   console.log(this.angle)

    //   let {x, y} = calcEndPoint(this.angle)
    //   if (this.angle <= 180) {
    //     this.d = `M100,100 L100, 0 A100,100 0 0,0 ${x}, ${y} z`
    //   } else {
    //     this.d = `M100,100 L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 ${x}, ${y} z`
    //   }
    //   console.log(this.d)
    //   return this.d
    //   // return calcPath(this.angle)
    // },
    pathFluid (inc) {
      this.fluidTankLevel += inc
      this.fluidDepositLevel += 0.9 * inc

      console.log(this.fluidTankLevel)
      if (this.fluidTankLevel > 0 && this.fluidTankLevel < 120) {
        this.fluidTank = `M100,${150 - this.fluidTankLevel} L100,150 L400,150 L400,${150 - this.fluidTankLevel} z`
        this.fluidDeposit = `M50,${this.fluidDepositLevel} L50,258 L250,258 L250,${this.fluidDepositLevel} z`
      } else {
        if (this.fluidTankLevel <= 0) {
          this.fluidTank = `M300,150 L300,150 L480,150 L480,150 z`
          this.fluidDeposit = `M50,150 L50,258 L250,258 L250,150 z`
          this.fluidTankLevel = 0
          this.fluidDepositLevel = 150
        } else {
          this.fluidTank = `M100,30 L100,150 L400,150 L400,30 z`
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
      let deltaYB = 5 - (y * 4 / 120) * 4 / 9
      let deltaYC = 5 - (y * 4 / 120) * 1 / 9
      // console.log(deltaYA)
      // console.log(200 - 9 * deltaYA)
      // console.log(200 - 8 * deltaYA)
      // console.log(200 - 7 * deltaYA)
      this.springA = `M180,${202 - 9 * deltaYA} A10 5 -20 0 0 160 ${200 - 8 * deltaYA} A10 6 10 0 0 180 ${200 - 7 * deltaYA} A10 6 -20 0 0 160 ${200 - 6 * deltaYA} A10 6 10 0 0 180 ${200 - 5 * deltaYA} A10 6 -20 0 0 160 ${200 - 4 * deltaYA} A10 6 10 0 0 180 ${200 - 3 * deltaYA} A10 5 -20 0 0 160 ${200 - 2 * deltaYA} A10 5 10 0 0 180 ${200 - deltaYA} A10 5 -20 0 0 160 200`

      this.springB = `M300,${201 - 9 * deltaYB} A10 4 -20 0 0 280 ${200 - 8 * deltaYB} A10 6 10 0 0 300 ${200 - 7 * deltaYB} A10 6 -20 0 0 280 ${200 - 6 * deltaYB} A10 6 10 0 0 300 ${200 - 5 * deltaYB} A10 6 -20 0 0 280 ${200 - 4 * deltaYB} A10 6 10 0 0 300 ${200 - 3 * deltaYB} A10 5 -20 0 0 280 ${200 - 2 * deltaYB} A10 5 10 0 0 300 ${200 - deltaYB} A10 5 -20 0 0 280 200`

      this.springC = `M380,${201 - 9 * deltaYC} A10 4 -20 0 0 360 ${200 - 8 * deltaYC} A10 6 10 0 0 380 ${200 - 7 * deltaYC} A10 6 -20 0 0 360 ${200 - 6 * deltaYC} A10 6 10 0 0 380 ${200 - 5 * deltaYC} A10 6 -20 0 0 360 ${200 - 4 * deltaYC} A10 6 10 0 0 380 ${200 - 3 * deltaYC} A10 5 -20 0 0 360 ${200 - 2 * deltaYC} A10 5 10 0 0 380 ${200 - deltaYC} A10 5 -20 0 0 360 200`

      this.pistonBigY = 150 + y * 35 / 120
      this.pistonMediumY = 150 + (4 / 9) * y * 35 / 120
      this.pistonSmallY = 150 + (1 / 9) * y * 35 / 120

      this.pressureBig = 1000 * 9.81 * (this.pistonBigY - 150 + this.fluidTankLevel) * 1 / 100
      this.pressureMedium = 1000 * 9.81 * (this.pistonMediumY - 150 + this.fluidTankLevel) * 1 / 100
      this.pressureSmall = 1000 * 9.81 * (this.pistonSmallY - 150 + this.fluidTankLevel) * 1 / 100

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
// function calcEndPoint (angle) {
//   let x, y
//   x = 100 - 100 * Math.sin(Math.PI * angle / 180)
//   y = 100 - 100 * Math.cos(Math.PI * angle / 180)
//   console.log(x)
//   console.log(y)
//   return {x, y}
// }

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
