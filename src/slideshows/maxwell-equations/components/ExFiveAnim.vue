<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
    div(style="display: flex; flex-direction: row; justify-content: space-around;")
      div(style="display: flex; flex-direction: row; justify-content: space-around;")
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" height="600" width="600" >
          <rect x="0" y="0" width="600" height="600" fill="#d4d3fe" fill-opacity="1" stroke="#000000"  stroke-width="0.1"/>
          <g transform="translate(0,0)">
            <path :d="magneticField" stroke="#2A6478"  fill="none" stroke-width="3" opacity="0.8"/>
            <path :d="ejesFlujo" stroke="black"  fill="none"/>
            <path :d="flujo" stroke="green"  stroke-width="4" opacity="0.8" fill="none">
              <animate attributeName="d" dur="15s" repeatCount="indefinite"  :values="flujo" calcMode="linear" begin="0;coil.begin"/>
            </path>
            <path :d="ejesFem" stroke="black"  fill="none"/>
            <path :d="fem" stroke="red"  stroke-width="4" opacity="0.8" fill="none" />
            <path :d="ejesForce" stroke="black"  fill="none"/>
            <path :d="force" stroke="blue"  stroke-width="4" opacity="0.8" fill="none" />
            <rect x="250" y="50" width="90" height="100" stroke="gray" fill="none" stroke-width="10" opacity="1">
              <animate attributeName="x" :values="blockPositions" :dur="15" repeatCount="indefinite" begin="0" id="coil" />
            </rect>
            <g>
              <path :d="current" stroke="red"  stroke-width="2" opacity="1" fill="none">
                <animate attributeName="d" dur="15s" repeatCount="indefinite"  :values="current" keyTimes="0; 0.2; 0.25; 0.3; 0.35; 0.55; 0.6; 0.65; 0.7; 1" />
                <animate attributeName="opacity" dur="15s" repeatCount="indefinite"  values="0; 0; 1; 1; 0; 0; 1; 1; 0; 0; " keyTimes="0; 0.2; 0.25; 0.3; 0.35; 0.55; 0.6; 0.65; 0.7; 1" />
              </path>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-119" to="718" dur="15s" repeatCount="indefinite" />
            </g>
            <rect x="250" y="350" width="600" height="300" stroke="#d4d3fe" fill="#d4d3fe" stroke-width="10" opacity="1">
              <animate attributeName="x" :values="fluxPositions" :dur="15" repeatCount="indefinite" begin="0"/>
            </rect>
            <path :d="ejesFem" stroke="black"  fill="none"/>
            <path :d="ejesForce" stroke="black"  fill="none"/>

            <text x="350" y="110" font-size="40px" fill="#f00"><tspan font-family="New Times Roman" font-style="italic">I</tspan>
              <animate attributeName="x" dur="15s" repeatCount="indefinite" values="-9; 828" />
              <animate attributeName="opacity" dur="15s" repeatCount="indefinite"  values="0; 0; 1; 1; 0; 0; 1; 1; 0; 0; " keyTimes="0; 0.2; 0.25; 0.3; 0.35; 0.55; 0.6; 0.65; 0.7; 1" />
            </text>
            <text x="350" y="110" font-size="40px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">l</tspan>
              <animate attributeName="x" dur="15s" repeatCount="indefinite" values="-139; 698" />
            </text>
            <text x="350" y="180" font-size="40px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">w</tspan>
              <animate attributeName="x" dur="15s" repeatCount="indefinite" values="-89; 748" />
            </text>
            <text x="280" y="212" font-size="30px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">3w</tspan> 
            </text>
            <text x="143" y="350" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">0</tspan>
            </text>
            <text x="245" y="355" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">w</tspan> 
            </text>
            <text x="335" y="355" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">2w</tspan> 
            </text>
            <text x="425" y="355" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">3w</tspan> 
            </text>
            <text x="515" y="355" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">4w</tspan> 
            </text>
            <text x="140" y="270" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&Phi;</tspan> 
            </text>
            <text x="140" y="380" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&epsilon;</tspan> 
            </text>
            <text x="140" y="500" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">F</tspan> 
            </text> 
          </g>
        </svg>

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
    magneticField () {
      let d = 'M220,20'
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 6; j++) {
          d = d + `M${160 + 30 * i},${20 + j * 30} ${170 + 30 * i},${0 + (j + 1) * 30} M${160 + 30 * i},${0 + (j + 1) * 30} ${170 + 30 * i},${20 + (j - 0) * 30}`
        }
      }
      return d
    },
    ejesFlujo () {
      let d = 'M160,185 160,220 M440,185 440,220 M160,205 270,205 M330,205 440,205' // cotas
      d += 'M160,240 160,350 ' // origin
      d += 'M0,330 600,330 ' // x axis
      for (var i = 0; i < 7; i++) {
        d = d + `M${-26 + i * 93.3},320 ${-26 + i * 93.3},340`
      }
      return d
    },
    flujo () {
      let block = this.fluxPositions.split(';')
      let d = ''
      let y = ''

      for (var i = 0; i < block.length - 1; i++) {
        d += 'M'
        for (let j = 0; j < block.length - 1; j++) {
          if (j <= i) {
            y = j === 3 || j === 4 || j === 5 ? ',260 ' : ',330 '
            d += block[j] + y
          } else {
            y = i === 3 || i === 4 || i === 5 ? ',260 ' : ',330 '
            d += block[i] + y
          }
        }
        d += ';'
      }
      return d
    },
    ejesFem () {
      let d = 'M160,360 160,470 ' // origin
      d += 'M0,415 600,415 ' // x axis
      for (var i = 0; i < 7; i++) {
        d = d + `M${-26 + i * 93.3},404 ${-26 + i * 93.3},424`
      }
      return d
    },
    fem () {
      let d = 'M0,415 160,415 ' // before magnetic field
      d += '160,460 253,460 253,415 ' // entering the field
      d += '440,415 ' // In the field
      d += '440,370 535,370 535,415 ' // outering the field
      d += '600,415 ' // out the field
      return d
    },
    ejesForce () {
      let d = 'M160,480 160,570 ' // origin
      d += 'M0,526 600,526 ' // x axis
      for (var i = 0; i < 7; i++) {
        d = d + `M${-26 + i * 93.3},517 ${-26 + i * 93.3},537 `
      }
      return d
    },
    force () {
      let d = 'M0,527 160,527 ' // before magnetic field
      d += '160,482 253,482 253,527 ' // entering the field
      d += '440,527 ' // In the field
      d += '440,482 535,482 535,527 ' // outering the field
      d += '600,527 ' // out the field
      return d
    },
    current () {
      let d = 'M100,70 100,70 100,70 100,130 100,130 100,130; ' // Zero
      d += 'M100,70 100,70 100,70 100,130 100,130 100,130; ' // Zero
      d += 'M100,70 95, 80 100,70 105,80 100,70 100,130; ' // Up
      d += 'M100,70 95, 80 100,70 105,80 100,70 100,130; ' // Up
      d += 'M100,70 100,70 100,70 100,130 100,130 100,130; ' // Zero
      d += 'M100,70 100,70 100,70 100,130 100,130 100,130; ' // Zero
      d += 'M100,70 100,130 95,120 100,130 105,120 100,130; ' // Down
      d += 'M100,70 100,130 95,120 100,130 105,120 100,130; ' // Down
      d += 'M100,70 100,70 100,70 100,130 100,130 100,130; ' // Zero
      d += 'M100,70 100,70 100,70 100,130 100,130 100,130 ' // Zero
      return d
    },
    blockPositions () {
      let positions = ''
      let points = 9
      for (var i = -1; i < points; i++) {
        let point = 93 * i - 26
        positions = positions + `${point};`
      }
      return positions
    },
    fluxPositions () {
      let positions = ''
      let points = 9
      for (var i = -1; i < points; i++) {
        let point = 93 * i - 26 + 95
        positions = positions + `${point};`
      }
      return positions
    }
  },
  methods: {
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
  }
}

</style>
