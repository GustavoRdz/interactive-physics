<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 300 450" height="600" width="600" >
        <line x1="0" y1="395" x2="300" y2="395" stroke="black" stroke-width="2" opacity="0.5"/>
        //- <line x1="150" y1="280" x2="150" y2="395" stroke="black" stroke-width="2" opacity="0.5"/>
        <path d="M150,395 L150,280 145,290 M150,280 155,290"  stroke="gray" fill="none" stroke-width="2" opacity="1"/>
        <path d="M0,395 L300,395 290,390 M300,395 290,400"  stroke="gray" fill="none" stroke-width="2" opacity="1"/>
        <path :d="lorentzian()"  stroke="orange" fill="none" stroke-width="2" opacity="1" transform="translate(150,395) "/>
        <line x1="100" y1="350" x2="100" y2="395" stroke="red" stroke-width="3" opacity="1"/>
        //- <line x1="200" y1="350" x2="200" y2="395" stroke="blue" stroke-width="3" opacity="1"/>
        <line x1="150" y1="350" x2="150" y2="395" stroke="green" stroke-width="3" opacity="1"/>
        <text x="130" y="275" font-size="20px" fill="blue">Fuerza</text>
        <text x="305" y="400" font-size="20px" fill="blue">ω</text>

        <g transform="translate(0,0) ">
          <rect x="-100" y="63" width="600" height="70" fill="red" stroke="#000000"  stroke-width="0.1" opacity=".5"/>
          <g transform="translate(200,60) scale(0.5)">
            <circle cx="60" cy="75" r="50" stroke="black" opacity=".2"/>
            <rect x="35" y="50" width="50" height="5" fill="black" stroke="#000000"  stroke-width="0.1" opacity="1"/>
            <text x="25" y="50" font-size="12px" fill="blue">E<tspan font-family="arial" font-size="8px" baseline-shift="sub">1</tspan></text>
            <rect x="35" y="100" width="50" height="5" fill="black" stroke="#000000"  stroke-width="0.1" opacity="1"/>
            <text x="25" y="100" font-size="12px" fill="blue">E<tspan font-family="arial" font-size="8px" baseline-shift="sub">0</tspan></text>
            <path d="M60,100 L60,70 55,80 M60,70 L65,80"  stroke="red" fill="none" stroke-width="3" opacity="1"/>
          </g>
          <path d="M0,100 L60,100 40,90 M60,100 L40,110"  stroke="red" fill="none" stroke-width="3" opacity="1"/>
          <text x="-20" y="120" font-size="15px" fill="green" stroke-width="2">Direccion de propagación</text>
          <path d="M260,100 L290,100 280,95 M290,100 L280,105"  stroke="orange" fill="none" stroke-width="3" opacity="1"/>
          <text x="270" y="120" font-size="18px" fill="black" stroke-width="2">Fuerza</text>
        </g>

        <g transform="translate(0,80) ">
          <rect x="-100" y="63" width="600" height="70" fill="red" stroke="#000000"  stroke-width="0.1" opacity=".5"/>
          <g transform="translate(200,60) scale(0.5)">
            <circle cx="60" cy="75" r="50" stroke="black" opacity=".2"/>
            <text x="20" y="30" font-size="20px" fill="green" stroke-width="2">En resonancia</text>
            <rect x="35" y="50" width="50" height="5" fill="black" stroke="#000000"  stroke-width="0.1" opacity="1"/>
            <text x="25" y="50" font-size="12px" fill="blue">E<tspan font-family="arial" font-size="8px" baseline-shift="sub">1</tspan></text>
            <rect x="35" y="100" width="50" height="5" fill="black" stroke="#000000"  stroke-width="0.1" opacity="1"/>
            <text x="25" y="100" font-size="12px" fill="blue">E<tspan font-family="arial" font-size="8px" baseline-shift="sub">0</tspan></text>
            <path d="M60,100 L60,55 55,65 M60,55 L65,65"  stroke="green" fill="none" stroke-width="3" opacity="1"/>
          </g>
          <path d="M0,100 L60,100 40,90 M60,100 L40,110"  stroke="red" fill="none" stroke-width="3" opacity="1"/>
          <path d="M200,100 L150,100 170,90 M150,100 L170,110"  stroke="black" fill="none" stroke-width="3" opacity="1"/>
          <text x="120" y="120" font-size="15px" fill="black" stroke-width="2">Movimiento del átomo</text>
          <path d="M260,100 L350,100 340,95 M350,100 L340,105"  stroke="orange" fill="none" stroke-width="3" opacity="1"/>
          <text x="330" y="120" font-size="18px" fill="black" stroke-width="2">Fuerza</text>
        </g>
       

        

        //- <g transform="translate(220,200) ">
        //-  <rect x="35" y="50" width="50" height="5" fill="black" stroke="#000000"  stroke-width="0.1" opacity="1"/>
        //-  <text x="25" y="50" font-size="12px" fill="blue">E<tspan font-family="arial" font-size="8px" baseline-shift="sub">1</tspan></tspan></text>
        //-  <rect x="35" y="100" width="50" height="5" fill="black" stroke="#000000"  stroke-width="0.1" opacity="1"/>
        //-  <text x="25" y="100" font-size="12px" fill="blue">E<tspan font-family="arial" font-size="8px" baseline-shift="sub">0</tspan></tspan></text>
        //-  <path d="M60,100 L60,30 55,40 M60,30 L65,40"  stroke="blue" fill="none" stroke-width="3" opacity="1"/>
        //- </g>

        <g style="text-transform: none;">

          //- // material 1
          //- <rect :x="`${ 50 - 5 * position }`" y="50" width="100" height="100" :fill="`${materials[mat1].color}`" stroke="#000000"  stroke-width="0.1" opacity="1"/>
          //- <text class="svg-display" :x="`${ 50 - 5 * position }`" y="35" font-size="20px" fill="red">T={{ `${parseFloat(Math.round(10*temperature1)/10)}` }}&#x00B0;C</text>
          //- <text class="svg-display" :x="`${ 70 - 5 * position }`" y="65" font-size="12px" fill="blue">{{ `${ materials[mat1].name}` }} </text>
          //- <text :x="`${ 70 - 5 * position }`"y="90" font-size="12px" fill="blue">{{  `${ materials[mat1].density}` }} <tspan font-weight="bold">kg/m<tspan font-family="arial" font-size="8px" baseline-shift="super">3</tspan></tspan></text>
          //- <text :x="`${ 70 - 5 * position }`"y="110" font-size="12px" fill="blue">{{ `${ materials[mat1].calorific}` }} <tspan font-weight="bold">J/kg·K</tspan></text>
          //- <text :x="`${ 70 - 5 * position }`"y="130" font-size="12px" fill="blue">{{ `${ materials[mat1].conductivity - 1 }` }} <tspan font-weight="bold">W/s</tspan></text>
          //- <rect :x="`${ 50 - 5 * position }`" y="50" width="100" height="100" fill="#ff000f" stroke="#000000"  stroke-width="0.1" :opacity="`${opacity}`"/>

          //- // material 2
          //- <rect :x="`${ 150 + 5 * position }`" y="50" width="100" height="100" :fill="`${materials[mat2].color}`" stroke="#000000"  stroke-width="0.1"/>
          //- <text class="svg-display" :x="`${ 170 + 5 * position }`" y="65" font-size="12px" fill="blue">{{ `${ materials[mat2].name}` }} </text>
          //- <text :x="`${ 170 + 5 * position }`" y="90" font-size="12px" fill="blue">{{  `${ materials[mat2].density}` }} <tspan font-weight="bold">kg/m<tspan font-family="arial" font-size="8px" baseline-shift="super">3</tspan></tspan></text>
          //- <text :x="`${ 170 + 5 * position }`" y="110" font-size="12px" fill="blue">{{ `${materials[mat2].calorific}` }} <tspan font-weight="bold">J/kg·K</tspan></text>
          //- <text :x="`${ 170 + 5 * position }`"y="130" font-size="12px" fill="blue">{{ `${ materials[mat2].conductivity - 1 }` }} <tspan font-weight="bold">W/s</tspan></text>
          //- <rect :x="`${ 150 + 5 * position }`" y="50" width="100" height="100" fill="#B2c3ff" stroke="#000000"  stroke-width="0.1" :opacity="`${ opacity }`"/>
          //- <text class="svg-display" :x="`${160 + 5 * position}`" y="35" font-size="20px" fill="blue">T={{ `${parseFloat(Math.round(10*temperature2))/10}` }}&#x00B0;C</text>

          //- <text v-if="blink" class="svg-display" x="25" y="180" font-size="18px" fill="red"><animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/><tspan font-weight="bold">Thermal contact engaged</tspan></text>
          //- <text v-if="blink2" class="svg-display"  x="2" y="180" font-size="18px" fill="green"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/><tspan font-weight="bold">Thermal equilibrium reached</tspan></text>

        </g>
      </svg>
      //- <hr>
      //- p.small {{ lorentzian() }} 
      //- div(class="dropdown" style="float: left; font-size: 10px;")
      //-   button(class="dropbtn") Material 1 : {{materials[mat1].name}}
      //-   div(class="dropdown-content")
      //-     a(v-for="(material, index) in materials" v-on:click="material1(index)") {{ material.name }}

      //- div(class="dropdown" style="float: right; font-size: 10px;")
      //-   button(class="dropbtn") Material 2 : {{materials[mat2].name}}
      //-   div(class="dropdown-content")
      //-     a(v-for="(material, index) in materials" v-on:click="material2(index)") {{ material.name }}


      //- button(v-if="stopped" @click="start") Start
      //- button(v-if="!stopped" @click="stop") ReStart
      


</template>
<script>
import eagle from 'eagle.js'

const SECOND = 10

export default {
  data: function () {
    return {
      timestamp: 10,
      isStarted: false,
      startTime: null,
      interval: null,
      text: '0',
      position: 5,
      temperature1: 100,
      temperature2: 0,
      opacity: 1,
      mat1: 0,
      mat2: 0,
      blink: false,
      blink2: false,
      stopped: true,
      materials: [
        {
          name: 'Aluminium',
          density: 2700,
          calorific: 910,
          fusion: 660,
          vapor: 2450,
          conductivity: 238,
          color: '#D7D7D9'
        },
        {
          name: 'Cooper',
          density: 8920,
          calorific: 390,
          fusion: 1083,
          vapor: 1187,
          conductivity: 397,
          color: '#B87333'
        },
        {
          name: 'Iron',
          density: 7800,
          calorific: 470,
          fusion: 1538,
          vapor: 2750,
          conductivity: 79.5,
          color: '#cBcDcD'
        },
        {
          name: 'Steel',
          density: 7800,
          calorific: 448,
          fusion: 1375,
          vapor: 2320,
          conductivity: 50.2,
          color: '#43464B'
        },
        {
          name: 'Brass',
          density: 8600,
          calorific: 380,
          fusion: 910,
          vapor: 2300,
          conductivity: 150,
          color: '#B5A642'
        },
        {
          name: 'Silver',
          density: 10500,
          calorific: 234,
          fusion: 960,
          vapor: 2193,
          conductivity: 406,
          color: '#c0c0c0'
        },
        {
          name: 'Lead',
          density: 11300,
          calorific: 128,
          fusion: 327,
          vapor: 1750,
          conductivity: 34.7,
          color: '#485048'
        },
        {
          name: 'Gold',
          density: 19300,
          calorific: 129,
          fusion: 1063,
          vapor: 2660,
          conductivity: 314,
          color: '#FFD700'
        },
        {
          name: 'Wood',
          density: 700,
          calorific: 1700,
          fusion: 0,
          vapor: 0,
          conductivity: 0.8 + 1,
          color: '#855E42'
        },
        {
          name: 'Glass',
          density: 2800,
          calorific: 837,
          fusion: 1040,
          vapor: 1300,
          conductivity: 0.8 + 1,
          color: '#c6e2e3'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    lorentzian: function () {
      const x1 = -130
      const x2 = 130
      const delta = (x2 - x1) / 200
      var y = []

      var d = `M${x1},0 L`

      for (let i = x1; i <= x2; i += delta) {
        let lor = -1 / (Math.pow(i, 2) + 100)
        y.push(lor)
        d = d + ` ${i},${10000 * lor} `
      }
      // d = d + 'z'
      console.log(d)
      return d
    },

    material1: function (index) {
      this.mat1 = index
      if (this.isStarted === false) {
        this.stop()
      } else {
        this.stop()
        this.start()
      }
    },
    material2: function (index) {
      this.mat2 = index
      if (this.isStarted === false) {
        this.stop()
      } else {
        this.stop()
        this.start()
      }
    },
    _reset () {
      this.isStarted = true
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    start () {
      if (this.isStarted === false) {
        this.timestamp = 4
        this.startTime = Date.now()
      }
      let V = 1e-6
      let rho1 = this.materials[this.mat1].density
      let rho2 = this.materials[this.mat2].density
      let c1 = this.materials[this.mat1].calorific
      let c2 = this.materials[this.mat2].calorific
      let m1 = rho1 * V
      let m2 = rho2 * V
      let Ti1 = 100
      let Ti2 = 0
      let Tf = (m1 * c1 * Ti1 + m2 * c2 * Ti2) / (m1 * c1 + m2 * c2)
      let DTf1 = Tf - Ti1
      let DTf2 = Tf - Ti2
      this.temperature1 = Ti1
      this.temperature2 = Ti2

      this.interval = setInterval(() => {
        let secondsFromStart = numberOfSecondsFromNow(this.startTime)
        this.stopped = false
        if (this.position >= 0) {
          this.position = this.timestamp - secondsFromStart
        } else {
          this.blink = true
          this.blink2 = false
          if (this.temperature1 > Tf && this.temperature2 < Tf) {
            let alpha = this.materials[this.mat1].conductivity > this.materials[this.mat2].conductivity ? this.materials[this.mat2].conductivity : this.materials[this.mat2].conductivity
            this.temperature1 += DTf1 * Math.log10(alpha) / 10000
            this.temperature2 += DTf2 * Math.log10(alpha) / 10000
            this.opacity -= 1 / 3000
          } else {
            this.blink = false
            this.blink2 = true
          }
        }
      }, 1)
    },
    stop () {
      this.position = 5
      this.opacity = 1
      this.blink = false
      this.blink2 = false
      this.stopped = true
      this.temperature1 = 100
      this.temperature2 = 0
      clearTimeout(this.interval)
    }
  },
  watch: {
    time () {
      this.isStarted = false
      this.start()
    }
  },
  mixins: [eagle.slide]
}

function numberOfSecondsFromNow (startTime) {
  if (!startTime) {
    return 0
  }
  return Math.floor((Date.now() - startTime) / SECOND) / 100
}
</script>

<style lang='scss' scoped>
// @import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
// @import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
// @import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        // font-family:'Space Mono', monospace;
        font-family: Times;
        text-transform: "none";
      }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3f3;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

button {
  width: 200px;
  height:40px;
}
</style>
