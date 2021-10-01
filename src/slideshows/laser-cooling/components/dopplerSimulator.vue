<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="300" width="800" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 1000 300">
        //- <rect x="0" y="0" width="600" height="300" stroke="red" fill="none" stroke-width="0.2"/>
        <!-- <rect x="0" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/>
        <rect x="267" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/>
        <rect x="534" y="0" width="266" height="200" stroke="green" fill="none" stroke-width="0.1"/> -->

        //- <path :d="hyper" stroke="red" fill="none" stroke-width="3" opacity="0.2" />

        <circle :cx="x[index]" cy="150" r="5" fill="white" stroke="gray" stroke-width="5" opacity="0.1" v-for="(item, index) in x"/>

        <circle cx="0" cy="150" r="5" fill="white" stroke="blue" stroke-width="5" opacity="1">
          <animate id="op" attributeName="cx" from="0" to="1000" dur="20s" begin="0s" fill="freeze" repeatCount="indefinite" />
        </circle>

        <circle :cx="x[index]" cy="150" r="5" fill="none" stroke="red" stroke-width="5" opacity="0.5" v-for="(item, index) in x">
          <animate id="op" attributeName="r" from="0" :to="1000 / M" dur="20s" :begin="index" fill="freeze" repeatCount="indefinite" />
        </circle>


        <!-- observador -->

        <circle cx="200" cy="125" r="5" fill="white" stroke="green" stroke-width="5" opacity="1"/>
        <path d="M200,125 " stroke="red" fill="none" stroke-width="3" opacity="0.2" />

        <text x="170" y="100" font-size="20px" fill="blue">Observador 1</text>
        <circle cx="800" cy="125" r="5" fill="white" stroke="green" stroke-width="5" opacity="1"/>
        <text x="770" y="100" font-size="20px" fill="blue">Observador 2</text>

        //- <circle cx="300" cy="250" r="5" fill="none" stroke="red" stroke-width="5" opacity="0.5">
        //-   <animate attributeName="cy" from="240" to="0" dur="15s" begin="3s"  values="250; 200; 0; 0" keyTimes="0; 0.06; 0.4; 1" fill="freeze" repeatCount="indefinite" />
        //- </circle>
        //- <line x1="300" x2="300" y1="0" y2="300" stroke="black"/>
    </svg>
    div.time-control
      div(style="display: flex; justify-content: space-around; border: solid 1px; border-radius: 10px; height: 80px;")
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold; color: red; margin: auto;").center fr = <span style="font-style: normal;">{{ frAtras.toPrecision(3) }} ff</span><br>
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold; color:blue; margin: auto;").center fr= <span style="font-style: normal;">{{ frDelante.toPrecision(3) }} ff</span><br>
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: auto;").center M = <span style="font-style: normal;">{{ M.toPrecision(3) }}</span><br>
            button(@click="M -=0.1").time-btn -0.1
            button(@click="M +=0.1").time-btn +0.1
            <br>
            button(@click="M -=0.01").time-btn -0.01
            button(@click="M +=0.01").time-btn +0.01
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: auto;").center v = <span style="font-style: normal;">340 m/s</span><br>
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: auto;").center vf = <span style="font-style: normal;">{{ (M * v).toPrecision(4) }}</span><br>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterT1: '',
      enterT2: '',
      enterV: '',
      points: 20,
      speed: 0.1,
      v: 340,
      vf: 34,
      M: 0.7,
      x: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]
    }
  },
  computed: {
    frAtras: function () {
      return 1 / (1 + this.M)
    },
    frDelante: function () {
      return 1 / (1 - this.M)
    }
    // positions: function () {
    //   console.log(this.t)
    //   this.x = []
    //   for (var i = 0; i <= this.points; i++) {
    //     this.x.push(i * 50)
    //   }
    //   console.log(this.x)
    // }
  },
  methods: {
    // positions: function () {
    //   console.log(this.t)
    //   this.x = []
    //   for (var i = 0; i <= this.points; i++) {
    //     this.x.push(i * 50)
    //   }
    //   console.log(this.x)
    // },
    increaseK (l) {
      this.t += l
      console.log(this.t)
    },
    message: function (name) {
      return
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
