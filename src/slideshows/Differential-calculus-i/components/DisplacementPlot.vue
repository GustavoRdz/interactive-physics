<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
    div(style="display: flex; flex-direction: row; justify-content: space-around;")
      div(style="display: flex; flex-direction: row; justify-content: space-around;")
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" height="300" width="600" >
          <rect x="0" y="0" width="600" height="300" fill="blue" fill-opacity="0.1" stroke="#000000"  stroke-width="0.1"/>
          //- <rect x="0" y="0" width="800" height="400" stroke="black" fill="gray" stroke-width="0.2" opacity="0.1"/>
          //- <lines v-for="x in gridX"  :x1="x" y1="0" :x2="x" y2="400" stroke="red" stroke-width="1" opacity="0.3"/>
          //- <line v-for="y in gridY"  x1="0" :y1="y" x2="800" :y2="y" stroke="red" stroke-width="1" opacity="0.3"/>
          //- <rect x="0" y="0" width="700" height="400" stroke="red" fill="blue" stroke-width="1" opacity="0.1"/>
          //- <rect x="0" y="0" width="600" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
          //- <rect x="0" y="0" width="500" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
          //- <rect x="0" y="0" width="400" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
          //- <rect x="0" y="0" width="300" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
          //- <rect x="0" y="0" width="200" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
          //- <rect x="0" y="0" width="100" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>

          <line x1="100" y1="45" x2="100" y2="255" stroke="black" stroke-width="2" opacity="1"/>
          <line x1="95" y1="150" x2="555" y2="150" stroke="black" stroke-width="2" opacity="1"/>
          <line v-for="x in range(100, 550, 25)"  :x1="x" y1="45" :x2="x" y2="255" stroke="black" stroke-width="0.8" opacity="0.1"/>
          <line v-for="x in range(100, 550, 50)"  :x1="x" y1="140" :x2="x" y2="160" stroke="black" stroke-width="1" opacity="1"/>
          <line v-for="y in range(50, 250, 25)"  x1="95" :y1="y" x2="555" :y2="y" stroke="black" stroke-width="0.8" opacity="0.1"/>
          <line v-for="y in range(50, 250, 25)"  x1="90" :y1="y" x2="110" :y2="y" stroke="black" stroke-width="1" opacity="1"/>
          <text v-for="x in range(150, 550, 50)" :x="x - 5" y="175" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic" font-size="0.7em">{{ x / 50 - 2 }}</tspan></text>
          <text x="560" y="150" font-size="1em" fill="#000"><tspan font-family="New Times Roman" font-style="italic" font-size="0.7em">t(s)</tspan></text>
          <text v-for="y in range(50, 250, 25)" x="70" :y="y" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic" font-size="0.7em">{{ - (y / 25 - 6) }}</tspan></text>
          <text x="90" y="40" font-size="1em" fill="#000"><tspan font-family="New Times Roman" font-style="italic" font-size="0.7em">x(cm)</tspan></text>
          
          //- <text x="90" y="40" font-size="1em" fill="#000"><tspan font-family="New Times Roman" font-style="italic" font-size="0.7em">x = {{ dispY }} (cm)</tspan></text>

          //- graph
          <path :d="displacement" stroke="blue"  stroke-width="2" fill="none"/>

          <line x1="60" :y1="150 - 25 * amplitude" x2="555" :y2="150 - 25 * amplitude" stroke="green" stroke-width="0.8" opacity="1"/>
          <line x1="60" :y1="150 + 25 * amplitude" x2="555" :y2="150 + 25 * amplitude" stroke="green" stroke-width="0.8" opacity="1"/>
          <text x="5" :y="150 - 25 * amplitude + 5" stroke="green" fill="green">
            <tspan style="font-style:italic; font-family: Times New Roman; font-size:0.7em;">x<tspan style="font-style:italic; font-family: Times New Roman; font-size:0.45em;">max</tspan><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.7em;">=A</tspan></tspan>
          </text>
          <line :x1="100 + 50 * 2 * Math.PI / omega" y1="50" :x2="100 + 50 * 2 * Math.PI / omega" y2="250" stroke="red" stroke-width="1" opacity="0.5"/>
          <line :x1="100 + 2 * 50 * 2 * Math.PI / (3 * omega)" y1="240" :x2="95 + 50 * 2 * Math.PI / omega" y2="240" stroke="red" stroke-width="1" opacity="0.5"/>
          <line x1="105" y1="240" :x2="100 + 50 * 2 * Math.PI / (3 * omega)" y2="240" stroke="red" stroke-width="1" opacity="0.5"/>
          <text :x="100 + 4 * 50 * 2 * Math.PI / (9 * omega)" y="245" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">T</tspan></text>

          <g transform="translate(150,0)">
          //- reference
          <text x="350" y="20" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&omega; = {{ Math.round(1000 * omega / prod)/1000 }} rad/s</tspan></text>
          <text x="350" y="40" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">f = {{ Math.round(1000 * omega / prod / (2 * Math.PI)) / 1000 }} Hz</tspan></text>
          <text x="350" y="60" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">T = {{ Math.round(1000 * 2 * Math.PI *prod / omega) / 1000 }} s</tspan></text>
          </g>

          //- <g >
          //-   <defs>
          //-     <path id="r2" fill="none" stroke="black">
          //-       <animate id="p1" attributeName="d" :values="resorteA" :dur="period" repeatCount="indefinite"/>
          //-       <animate attributeName="stroke" values="red;red;black;red;red;black;red;red;" :dur="period" repeatCount="indefinite" begin="p1.begin"/>
          //-       //- <animate attributeName="x" :values="displacementsX" :dur="9" repeatCount="indefinite" begin="0s"/>
          //-       //- <animateMotion :dur="9" repeatCount="indefinite" :path="pathRecorrido" />
          //-       <animateMotion :dur="9" repeatCount="indefinite" :path="pathRecorrido" />
          //-     </path>
          //-   </defs>
          //-   <use xlink:href="#r2"/>
          //- </g>
          <rect x="0" y="0" width="20" height="20" stroke="black" fill="lightskyblue" opacity="0.8">
            <animate attributeName="x" :values="displacementsX" :dur="9" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="y" :values="displacementsY" :dur="9" repeatCount="indefinite" begin="0s"/>
          </rect>
          //- <path :d="resorteA" fill="none" stroke="black" />
          //- <path :d="displacement" fill="none" stroke="black" />
          //- <g transform="translate(0,-90)" v-if="showVectors">
          //-   <text x="250" y="117" font-size="20px" fill="#00f"><tspan font-family="New Times Roman" font-style="italic" font-weight="bold">Displacement</tspan></text>
          //-   //- displacement arrow
          //-   <line x1="300" y1="100" x2="300" y2="100" stroke="#00f" stroke-width="2">
          //-     <animate attributeName="x2" :values="displacement" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //-   //- displacement tip
          //-   <line x1="300" y1="100" x2="300" y2="97" stroke="#00f" stroke-width="2">
          //-     <animate attributeName="x1" :values="displacement" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="displacementUp" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //-   <line x1="250" y1="100" x2="250" y2="103" stroke="#00f" stroke-width="2">
          //-     <animate attributeName="x1" :values="displacement" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="displacementUp" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //- </g>
          //- <g transform="translate(0,-70)" v-if="showVectors">
          //- <text x="270" y="70" font-size="20px" fill="#070"><tspan font-family="New Times Roman" font-style="italic" font-weight="bold">Velocity</tspan>
          //-   <animate attributeName="x" :values="textVelocity" :dur="period" repeatCount="indefinite" begin="0s"/>
          //- </text>
          //-   //- velocity arrow
          //-   <line x1="300" y1="50" x2="300" y2="50" stroke="#070" stroke-width="2">
          //-     <animate attributeName="x1" :values="velocityTip" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="velocityTail" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //-   //- velocity tip
          //-   <line x1="300" y1="50" x2="300" y2="47" stroke="#070" stroke-width="2">
          //-     <animate attributeName="x1" :values="velocityTail" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="velocityUp" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //-   <line x1="250" y1="50" x2="250" y2="53" stroke="#070" stroke-width="2">
          //-     <animate attributeName="x1" :values="velocityTail" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="velocityUp" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //- </g>
          //- <g transform="translate(0,-70)" v-if="showVectors">
          //-   <text x="250" y="40" font-size="20px" fill="#f00"><tspan font-family="New Times Roman" font-style="italic" font-weight="bold">Acceleration</tspan>
          //-     <animate attributeName="x" :values="textAcceleration" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </text>
          //-   //- acceleration arrow
          //-   <line x1="300" y1="20" x2="300" y2="20" stroke="red" stroke-width="2">
          //-     <animate attributeName="x1" :values="accelerationTip" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="accelerationTail" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //-   //- acceleration tip
          //-   <line x1="300" y1="20" x2="300" y2="17" stroke="red" stroke-width="2">
          //-     <animate attributeName="x1" :values="accelerationTail" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="accelerationUp" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //-   <line x1="250" y1="20" x2="250" y2="23" stroke="red" stroke-width="2">
          //-     <animate attributeName="x1" :values="accelerationTail" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-     <animate attributeName="x2" :values="accelerationUp" :dur="period" repeatCount="indefinite" begin="0s"/>
          //-   </line>
          //- </g>

          //- </g>
        </svg>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
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
