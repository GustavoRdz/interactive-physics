<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="300" width="600" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 600 300">
      //- <rect x="0" y="0" width="600" height="300" stroke="red" fill="none" stroke-width="0.2"/>
      <!-- <rect x="0" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/>
      <rect x="267" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/>
      <rect x="534" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/> -->

      <path :d="wave1" stroke="black" fill="none" stroke-width="1" opacity="1"/>
      <path :d="wave2" stroke="red" fill="none" stroke-width="1" opacity="0.5"/>
      <path :d="wave3" stroke="black" fill="none" stroke-width="1" opacity="1"/>
      <path :d="wave4" stroke="red" fill="none" stroke-width="1" opacity="0.5"/>
      <path :d="wave5" stroke="black" fill="none" stroke-width="1" opacity="1"/>
      <path :d="wave6" stroke="red" fill="none" stroke-width="1" opacity="0.5"/>

      <!-- fuente -->
      <circle cx="400" cy="250" r="5" fill="white" stroke="red" stroke-width="5" opacity="1"/>
      <circle cx="400" cy="250" r="33.9" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="67.7" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="101" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="135" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="169" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="202.5" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="236" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="270" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="304" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="337" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="371" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="405" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="438" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="400" cy="250" r="5" fill="none" stroke="red" stroke-width="5" opacity="0.2">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="0s" fill="freeze" repeatCount="indefinite" />
      </circle>

      <circle cx="200" cy="250" r="5" fill="white" stroke="black" stroke-width="5" opacity="1"/>
      <circle cx="200" cy="250" r="33.9" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="67.7" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="101" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="135" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="169" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="202.5" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="236" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="270" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="304" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="337" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="371" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="405" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="438" fill="none" stroke="gray" stroke-width="1" opacity="0.4"/>
      <circle cx="200" cy="250" r="5" fill="none" stroke="black" stroke-width="5" opacity="0.2">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="0s" fill="freeze" repeatCount="indefinite" />
      </circle>

      <text x="320" y="18" font-size="12" fill="black"> &Delta;r = 0 &lambda;'s</text>
      <path d="M320,15 C 310 10, 320 10, 305 2 L310,8 M305,2 L313,4" stroke="blue" fill="none"/>

      <text x="430" y="20" font-size="13" fill="red">&Delta;r = 2.1 &lambda;'s</text>
      <path d="M430,15 C 410 10, 420 10, 405 2 L410,8 M405,2 L413,4" stroke="blue" fill="none"/>

      <text x="90" y="20" font-size="13" fill="red">&Delta;r = 2.5 &lambda;'s</text>
      <path d="M130,10 C 140 -5, 140 10, 170 2 L165,8 M170,2 L163,1" stroke="blue" fill="none"/>

  </svg>


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterT1: '',
      enterT2: '',
      enterV: ''
    }
  },
  computed: {
    wave1: function () {
      return wave(200, 250, 300, 0)
    },
    wave2: function () {
      return wave(400, 250, 300, 0)
    },
    wave3: function () {
      return wave(200, 250, 175, 0)
    },
    wave4: function () {
      return wave(400, 250, 175, 0)
    },
    wave5: function () {
      return wave(200, 250, 400, 0)
    },
    wave6: function () {
      return wave(400, 250, 400, 0)
    }
  },
  methods: {
    message: function (name) {
      return
    }
  },
  mixins: [eagle.slide]
}

function wave (x1, y1, x2, y2) {
  console.log(x1)
  let d = `M${x2},${y2} ${x1},${y1} `
  // let m = (y2 - y1) / (x2 - x1)
  let theta = Math.atan2(y2 - y1, x2 - x1)
  let kx1 = x2 - x1
  let ky1 = y2 - y1
  let km = Math.sqrt(Math.pow(kx1, 2) + Math.pow(ky1, 2))
  let kxu = kx1 / km
  let kyu = ky1 / km
  let lambda = 33.7
  let k = 2 * Math.PI / lambda
  let kx = 2 * Math.PI * kxu / lambda
  let ky = 2 * Math.PI * kyu / lambda
  console.log('k: ' + km)

  // let rx1 = 300 + i * Math.cos(theta)
  // let ry1 = i * Math.sin(theta)
  // let phi = Math.atan2(ry1, rx1)

  console.log('theta: ' + theta)
  console.log('theta: ' + theta * 180 / Math.PI)
  // console.log(kx1)
  // console.log(ky1)
  // console.log(kxu)
  // console.log(kyu)
  console.log('kx: ' + kx)
  console.log('ky: ' + ky)
  // d += `M${x1},${y1}`
  for (var i = 0; i <= 470; i++) {
    // let x = 20 * Math.sin(kx * (i * Math.cos(theta)) + ky * (i * Math.sin(theta)))
    let x = i * Math.cos(theta) - 10 * Math.sin(k * i) * Math.sin(theta)
    let y = i * Math.sin(theta) + 10 * Math.sin(k * i) * Math.cos(theta)
    d += `${x1 + x},${y1 + y} `
  }
  console.log(d)
  return d
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

.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
  font-size: 30px;
  color: blue;
  width: 95%;
}

.solution {
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
