<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="300" width="600" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 600 300">
      <rect x="0" y="0" width="600" height="300" stroke="red" fill="none" stroke-width="0.2"/>
      <!-- <rect x="0" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/>
      <rect x="267" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/>
      <rect x="534" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/> -->
      //- <line x1="50" y1="0" x2="600" y2="550" style="stroke:rgb(0,0,255);stroke-width:0.5" />
      //- <line x1="0" y1="550" x2="550" y2="0" style="stroke:rgb(0,0,255);stroke-width:0.5" />

      //- <line x1="260" y1="0" x2="300" y2="250" style="stroke:rgb(255,0,0);stroke-width:0.2" />
      //- <line x1="215" y1="0" x2="300" y2="250" style="stroke:rgb(255,0,0);stroke-width:0.2" />
      //- <line x1="165" y1="0" x2="277" y2="250" style="stroke:rgb(255,0,0);stroke-width:0.2" />
      //- <line x1="105" y1="0" x2="270" y2="250" style="stroke:rgb(255,0,0);stroke-width:0.2" />
      //- <line x1="10" y1="0" x2="265" y2="250" style="stroke:rgb(255,0,0);stroke-width:0.2" />
      //- <line x1="0" y1="110" x2="255" y2="250" style="stroke:rgb(255,0,0);stroke-width:0.2" />

      <path :d="hyper" stroke="red" fill="none" stroke-width="3"/>
      //- <path d="M215,0 220,15 230,44 240,74 250,103 260,132 270,162 280,191 290,221 300,250" stroke="black" fill="none"/>
      //- <path d="M105,0 160,80 170,95 180,110 190,126 200,142 210,160 220,179 230,201 240,250" stroke="black" fill="none"/>
      //- <path d="M10,0 120,108 130,117 140,127 150,136 160,146 170,156 180,167 190,177 200,189 210,202 220,217 230,250" stroke="black" fill="none"/>

      //- <path d="M0,110 120,174 130,180 140,186 150,192 160,198 170,204 180,211 190,219 200,229 210,250" stroke="black" fill="none"/>

      <!-- fuente -->
      <circle cx="400" cy="250" r="5" fill="white" stroke="gray" stroke-width="5" opacity="1"/>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="0s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="1s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="2s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="3s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="4s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="5s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="6s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="7s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="8s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="9s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="10s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="11s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="12s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="13s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="14s" fill="freeze" repeatCount="indefinite" />
      </circle>


      <circle cx="200" cy="250" r="5" fill="white" stroke="gray" stroke-width="5" opacity="1"/>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="0s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="1s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="2s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="3s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="4s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="5s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="6s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="7s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="8s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="9s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="10s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="11s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="12s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="13s" fill="freeze" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="250" r="5" fill="none" stroke="gray" stroke-width="5" opacity="0.5">
        <animate attributeName="r" from="0" to="450" dur="15s" begin="14s" fill="freeze" repeatCount="indefinite" />
      </circle>

      <circle cx="300" cy="250" r="5" fill="none" stroke="red" stroke-width="5" opacity="0.5">
        <animate attributeName="cy" from="240" to="0" dur="15s" begin="3s"  values="250; 200; 0; 0" keyTimes="0; 0.06; 0.4; 1" fill="freeze" repeatCount="indefinite" />
      </circle>
      <line x1="300" x2="300" y1="0" y2="300" stroke="black"/>
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
    hyper: function () {
      return hyperbol()
    },
    t1: function () {
      let max = 30
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    speed: function () {
      let max = 80
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    t2: function () {
      return Math.round(1000 * this.t1 * Math.sqrt(1 - this.speed * this.speed)) / 1000
    },
    checkedT1: function () {
      let check
      console.log('T1 => ' + this.t1 + ' : ' + parseFloat(this.enterT1))
      check = this.t1 === parseFloat(this.enterT1) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
      return check
    },
    checkedT2: function () {
      let check
      console.log('T2 => ' + this.t2 + ' : ' + parseFloat(this.enterT2))
      check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    }
  },
  mixins: [eagle.slide]
}

function hyperbol () {
  let a = [90, 75, 60, 45, 30, 15]
  // let e = 0.88831
  let e = [0.4891, 0.88, 1.35, 1.95, 3.1, 6.5]
  let xt = 300
  let yt = 250
  let d = ''
  for (var c = 0; c < 6; c++) {
    d += `M${xt - a[c]},${yt} `
    for (var i = a[c] + 10; i <= 300; i = i + 10) {
      let y = e[c] * Math.sqrt(Math.pow(i, 2) - Math.pow(a[c], 2))
      d += `${xt - i},${yt - y} `
    }
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
