<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
    div(style="display: flex; flex-direction: row; justify-content: space-around; width=100%")
      div(style="display: flex; flex-direction: column; justify-content: flex-start;")
        div(style="border: solid 1px; border-radius: 0%; width: 150px; background: lightgray;")
          div(style="border: solid 1px; border-radius: 5%; height: 97px; width: 150px;")
            p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center F = <span style="font-style: normal;">{{ Math.round(10000 * F) / 10000 }}</span>N<br>
              button(@click="increaseF(-0.1)") -0.1
              button(@click="increaseF(0.1)") +0.1
              <br>
              button(@click="increaseF(-1)") - 1
              button(@click="increaseF(1)") + 1
          div(style="border: solid 1px; border-radius: 5%; height:97px;")
            p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center &mu; = <span style="font-style: normal;">{{ Math.round(10000 * mu) / 10 }}</span> g<br>
              button(@click="increaseMass(-0.1)") - 0.1
              button(@click="increaseMass(0.1)") + 0.1
              <br>
              button(@click="increaseMass(-1)") - 1
              button(@click="increaseMass(1)") + 1
          div(style="border: solid 1px; border-radius: 5%; height: 97px;")
            p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center L = <span style="font-style: normal;">{{  Math.round(10000 * l) / 10000 }}</span> m<br>
              button(@click="increaseL(-0.01)") - 0.01
              button(@click="increaseL(0.01)") + 0.01
              <br>
              button(@click="increaseL(-0.1)") - 0.1
              button(@click="increaseL(0.1)") + 0.1
      div(style="display: flex; flex-direction: row; justify-content: space-around; margin: 0 0 50px 0;")
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" height="300" width="460" >
          <rect x="0" y="0" width="460" height="300" fill="blue" fill-opacity="0.1" stroke="#000000"  stroke-width="0.1"/>
          <g transform="translate(0,0)">
            <text x="50" y="20" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">f = {{ Math.round(10000 * f) / 10000 }} Hz</tspan></text>
            <text x="50" y="45" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">T = {{ Math.round(10000 * T) / 10000 }} s</tspan></text>
            <text x="50" y="70" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&omega; = {{ Math.round(10000 * omega) / 10000 }} rad/s</tspan></text>
            <text x="250" y="20" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">v = {{ Math.round(10000 * v) / 10000 }} m/s</tspan></text>
            <text x="250" y="45" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">&lambda; = {{ Math.round(10000 * lambda) / 10000 }} m</tspan></text>
            <text x="250" y="70" font-size="20px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">k = {{ Math.round(10000 * k) / 10000 }} 1/m</tspan></text>
            <defs>
              <path id="r1" fill="none" stroke="black">
                <animate id="p1" attributeName="d" :values="resorte" :dur="period" repeatCount="indefinite"/>
                <animate attributeName="stroke" values="black;black;red;black;black;red;black;black;" :dur="period" repeatCount="indefinite" begin="p1.begin"/>
              </path>
            </defs>
            <use xlink:href="#r1"/>

            <path :d="base" stroke="black"  fill="none"/>
            <line x1="30" y1="145" x2="430" y2="145" stroke="#000" stroke-width="0.5" opacity="0.5"/>
            <rect x="90" y="187" width="273" height="65" fill="none" fill-opacity="0.1" stroke="#000000"  stroke-width="1"/>
            <path :d="escala" stroke="black"  fill="none"/>
            <line :x1="100 + (f - notes().freqLow) * 250 / (notes().freqHigh - notes().freqLow)" y1="210" :x2="100 + (f - notes().freqLow) * 250 / (notes().freqHigh - notes().freqLow)" y2="245" stroke="#FF5F1F" stroke-width="10" stroke-linecap="round" opacity="0.8"/>
            <text :x="75 + (f - notes().freqLow) * 250 / (notes().freqHigh - notes().freqLow)" y="200" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ Math.round(100 * f) / 100 }} Hz</tspan></text>
            <line x1="80" y1="253" x2="370" y2="253" stroke="black" stroke-width="1" opacity="1"/>
            <text x="20" y="265" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">Freq. (Hz)</tspan></text>
            <line x1="80" y1="268" x2="370" y2="268" stroke="black" stroke-width="1" opacity="1"/>
            <text x="50" y="280" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">Note</tspan></text>
            <line x1="80" y1="283" x2="370" y2="283" stroke="black" stroke-width="1" opacity="1"/>
            <text x="35" y="295" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">Octave</tspan></text>
            <line x1="80" y1="298" x2="370" y2="298" stroke="black" stroke-width="1" opacity="1"/>
            <text x="95" y="265" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().freqLow }} </tspan></text>
            <text x="95" y="280" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().noteLow }}</tspan></text>
            <text x="95" y="295" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().octaveLow }}</tspan></text>
            <text x="220" y="265" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().freqMed }}</tspan></text>
            <text x="220" y="280" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().noteMed }}</tspan></text>
            <text x="220" y="295" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().octaveMed }}</tspan></text>
            <text x="345" y="265" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().freqHigh }}</tspan></text>
            <text x="340" y="280" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().noteHigh }}</tspan></text>
            <text x="340" y="295" font-size="15px" fill="#000"><tspan font-family="New Times Roman" font-style="italic">{{ notes().octaveHigh }}</tspan></text>
          </g>
        </svg>

        div(style="border: solid 1px; border-radius: 0%; width: 150px; background: lightgray;")
          div(style="display: flex; flex-direction: column; justify-content: flex-start;")
            div(style="border: solid 1px; border-radius: 5%; height: 80px; width: 150px;")
              p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center n = <span style="font-style: normal;">{{ n }}</span><br>
                button(@click="increaseN(-1)") -1
                button(@click="increaseN(1)") +1
            div(style="border: solid 1px; border-radius: 5%; height: 80px; width: 150px;")
              p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center Simulation<br>period = <span style="font-style: normal;">{{  Math.round(10000 * period) / 10000 }}</span><br>
                button(@click="increasePeriod(-0.1)") -0.1
                button(@click="increasePeriod(0.1)") +0.1
    .center
      //- p {{ notes() }}

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      period: 1,
      omega: 303.5067,
      prod: 1,
      elasticK: 1,
      mass: 1,
      showVectors: '',
      n: 1,
      l: 1,
      A: 1,
      F: 70,
      mu: 0.0075,
      lambda: 2,
      f: 48.3046,
      T: 0.0207,
      k: 12.5664,
      v: 96.6092
    }
  },
  computed: {
    base () {
      let d = 'M30,100 30,191 '
      for (var i = 0; i < 10; i++) {
        d = d + `M30,${100 + i * 10} 20,${100 + (i - 1) * 10}`
      }
      d = d + ' M430,100 430,190'
      for (i = 0; i < 10; i++) {
        d = d + `M430,${100 + i * 10} 440,${100 + (i + 1) * 10}`
      }
      return d
    },
    escala () {
      let d = 'M100,210 100,245 '
      for (var i = 0; i < 10; i++) {
        d = d + `M${100 + i * 12.5},220 ${100 + i * 12.5},240`
      }
      d = d + ' M222,210 222,245'
      for (i = 0; i < 11; i++) {
        d = d + `M${222 + i * 13},220 ${222 + i * 13},240`
      }
      d = d + ' M352,210 352,245'
      return d
    },
    resorte () {
      let d = ''
      // let amplitud = [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25, 0, -0.25, -0.5, -0.75, -1, -0.75, -0.5, -0.25, 0]
      let amplitud = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9, -1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0]
      let points = 100
      let l = 1 * 400
      for (var i = 0; i < amplitud.length; i++) {
        let d1 = 'M30,145 '
        let delta = 400 / (points + 0)
        let lambda = 2 * l / this.n
        for (var j = 0; j < points - 1; j++) {
          d1 = d1 + `${delta * j + 30},${145 + 30 * amplitud[i] * Math.sin(2 * Math.PI * delta * j / lambda)} `
        }
        d1 = d1 + ` ${430},145;`
        d = d + d1
      }
      return d
    }
  },
  methods: {
    increaseN (l) {
      this.n = this.n + l
      if (this.n < 1) {
        this.n = 1
      }
      if (this.n > 20) {
        this.n = 20
      }
      this.lambda = 2 * this.l / this.n
      this.f = this.v / this.lambda
      this.T = 1 / this.f
      this.k = 2 * Math.PI / this.lambda
      this.omega = 2 * Math.PI * this.f
    },
    increaseF (l) {
      this.F = this.F + l
      if (this.F < 0) {
        this.F = 0
      }
      if (this.F > 200) {
        this.F = 200
      }
      this.v = Math.sqrt(this.F / this.mu)
      this.f = this.v / this.lambda
      this.T = 1 / this.f
      this.omega = 2 * Math.PI * this.f
    },
    increaseMass (l) {
      this.mu = this.mu + l / 1000
      console.log(this.mu)
      if (this.mu < 0.0001) {
        this.mu = 0.0001
      }
      if (this.mu > 0.1) {
        this.mu = 0.1
      }
      this.v = Math.sqrt(this.F / this.mu)
      this.f = this.v / this.lambda

      this.omega = this.prod * Math.sqrt(this.elasticK / this.mass)
      this.T = 1 * 2 * Math.PI / this.omega
    },
    increaseL (l) {
      this.l = this.l + l
      if (this.l < 0.01) {
        this.l = 0.01
      }
      if (this.l > 2) {
        this.l = 2
      }
      this.lambda = 2 * this.l / this.n
      this.k = 2 * Math.PI / this.lambda
      this.f = this.v / this.lambda
      // this.v = Math.sqrt(this.F / this.mu)

      this.omega = this.prod * Math.sqrt(this.elasticK / this.mass)
      this.T = 1 * 2 * Math.PI / this.omega
    },
    increasePeriod (l) {
      this.period = this.period + l
      if (this.period < 0.1) {
        this.period = 0.1
      }
      if (this.period > 5) {
        this.period = 5
      }
    },
    notes () {
      let values = [{note: 'C', f: [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50, 2093.00, 4186.01]},
                {note: 'C#/Db', f: [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92]},
                {note: 'D', f: [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.63]},
                {note: 'D#/Eb', f: [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03]},
                {note: 'E', f: [20.60, 41.20, 82.41, 164.81, 329.63, 659.25, 1318.51, 2637.02, 5274.04]},
                {note: 'F', f: [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83, 5587.65]},
                {note: 'F#/Gb', f: [23.12, 46.25, 92.50, 185.00, 369.99, 739.99, 1479.98, 2959.96, 5919.91]},
                {note: 'G', f: [24.50, 49.00, 98.00, 196.00, 392.00, 783.99, 1567.98, 3135.96, 6271.93]},
                {note: 'G#/Ab', f: [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22, 3322.44, 6644.88]},
                {note: 'A', f: [27.50, 55.00, 110.00, 220.00, 440.00, 880.00, 1760.00, 3520.00, 7040.00]},
                {note: 'A#/Bb', f: [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31, 7458.62]},
                {note: 'B', f: [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07, 7902.13]}]

      let fmin = values[0].f[0]
      let fmed = values[0].f[0]
      let fmax = values[1].f[0]
      let noteBelow = 'C'
      let noteMed = 'C'
      let noteAbove = 'B'
      let octaveBelow = 0
      let octaveMed = 0
      let octaveAbove = 0
      for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].f.length; j++) {
          let diff = Math.abs(values[i].f[j] - this.f)
          if (diff < Math.abs(fmed - this.f)) {
            // console.log('fmed: ', fmed)
            fmed = values[i].f[j]
            noteMed = values[i].note
            octaveMed = j
            if (i < values.length - 1) {
              fmax = values[i + 1].f[j]
              noteAbove = values[i + 1].note
              octaveAbove = j
            } else {
              fmax = values[0].f[j + 1]
              noteAbove = values[0].note
              octaveAbove = j + 1
            }
            if (i > 0) {
              fmin = values[i - 1].f[j]
              noteBelow = values[i - 1].note
              octaveBelow = j
            } else {
              fmin = values[11].f[j - 1]
              noteBelow = values[10].note
              octaveBelow = j - 1
            }
          }
        }
      }
      let range = {
        noteLow: noteBelow,
        octaveLow: octaveBelow,
        freqLow: fmin,
        noteMed: noteMed,
        octaveMed: octaveMed,
        freqMed: fmed,
        noteHigh: noteAbove,
        octaveHigh: octaveAbove,
        freqHigh: fmax}
      return range
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
      width: 100%;
      margin-left: 10%;
    }
    // SVG ANIMATIONS
    .included-svg {
      width: 100%;
      margin-left: 0%;
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
