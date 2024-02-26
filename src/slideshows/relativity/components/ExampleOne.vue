<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem An <span style="font-family: times; font-style: italic; font-weight: bold;">&alpha;</span> particle is moving to the {{ particleDirection }} at an speeed of {{ Math.abs(alphaLabSpeed) }}c measured from the laboratory; from the particle emerges an electron that travels in the opposite direction at {{ Math.abs(electronAlphaSpeed) }}c measured from the <span style="font-family: times; font-style: italic; font-weight: bold;">&alpha;</span>  particle. What is the velocity of the electron measured by the person in the laboratory?
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Una partícula <span style="font-family: times; font-style: italic; font-weight: bold;">&alpha;</span> se mueve hacia la {{ particleDirection }} a una velocidad de {{ Math.abs(alphaLabSpeed) }} medida en el laboratorio; de la partícula emerge un electrón que viaja en dirección opuesta a  {{ Math.abs(electronAlphaSpeed) }}c medido desde la partícula <span style="font-family: times; font-style: italic; font-weight: bold;">&alpha;</span>. ¿Cuál es la velocidad del electrón medida por la persona en el laboratorio?<br>
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" height="200" width="300" >
        <rect x="0" y="0" width="300" height="200" fill="lightblue" opacity="0.5"/>
        <g style="text-transform: none;">

          <g>
            <circle cx="10" cy="20" r="10" fill="red"/>
            <text x="5" y="25" font-size="15" fill="white">P</text> 
            <circle cx="20" cy="10" r="10" fill="blue"/>
            <text x="15" y="15" font-size="15" fill="white">N</text> 
            <circle cx="20" cy="30" r="10" fill="blue"/>
            <text x="15" y="35" font-size="15" fill="white">N</text> 
            <circle cx="30" cy="20" r="10" fill="red"/>
            <text x="25" y="25" font-size="15" fill="white">P</text> 
            <animateTransform attributeName="transform" type="translate" from='150 50' :to="moveAlpha" begin="0s" dur="5s" fill="freeze" repeatCount="indefinite"/>
          </g>

          <g>
            <circle cx="20" cy="20" r="6" fill="#ffd700"/>
            <text x="15" y="24" font-size="15" fill="black">e</text> 
            <animateTransform attributeName="transform" type="translate" from='150 50' :to="moveElectron" begin="0s" dur="5s" fill="freeze" repeatCount="indefinite"/>
          </g>



          <g transform="translate(20,230) scale(0.05, -0.05)" fill="#000000" stroke="none"> <!-- persona -->
            <path d="M935 1984 c-66 -34 -104 -97 -105 -172 0 -115 78 -192 196 -192 70 0 131 32 166 87 35 57 33 154 -5 211 -15 23 -45 51 -67 62 -48 25 -142 27 -185 4z" fill="#E5B7B2"/>
            <path d="M795 1561 c-84 -38 -175 -180 -175 -273 0 -27 -4 -48 -9 -48 -5 0 -16 -28 -25 -62 -9 -35 -19 -74 -22 -87 l-7 -24 79 7 c116 9 138 17 144 51 3 16 11 30 18 31 7 1 8 0 2 -3 -13 -6 -13 -43 0 -43 15 0 80 61 75 71 -3 4 9 16 27 25 18 9 46 28 63 43 30 26 30 26 9 1 -11 -14 -29 -45 -39 -68 -20 -47 -85 -109 -122 -118 l-23 -6 0 -490 c0 -510 0 -515 44 -550 24 -20 96 -24 127 -8 47 26 49 43 49 460 0 340 2 390 15 390 13 0 15 -51 15 -401 l0 -401 29 -29 c25 -24 38 -29 78 -29 42 0 54 5 79 31 l29 30 5 632 c4 527 7 624 17 586 20 -74 34 -272 27 -374 -7 -91 -6 -94 19 -119 31 -31 66 -33 98 -7 24 19 24 21 24 218 -1 276 -32 412 -116 508 -57 65 -92 75 -268 75 -142 0 -153 -1 -148 -17 24 -72 47 -161 47 -178 0 -18 -5 -20 -36 -17 -24 3 -32 7 -23 13 11 6 11 17 0 61 -17 65 -48 138 -58 138 -4 0 -26 -9 -48 -19z"/>
            <path d="M746 1040 c-16 -5 -68 -12 -114 -16 l-84 -7 5 -39 c11 -84 83 -148 185 -164 l42 -7 0 122 c0 66 -1 121 -2 120 -2 0 -16 -5 -32 -9z"/>
          </g>
          <g transform="translate(27,152) scale(0.007,-0.007)"> <!-- pelo de goku -->
            <path  fill="gray" stroke="black" d="M5360 6380 c0 -10 15 -66 70 -260 13 -45 108 -445 164 -690 28 -119 35 -151 60 -260 60 -261 66 -295 66 -401 0 -59 -4 -110 -10 -114 -5 -3 -37 21 -72 54 -275 257 -512 421 -678 467 -88 24 -552 38 -794 24 -109 -6 -220 -15 -245 -19 -25 -5 -77 -14 -116 -21 -215 -37 -508 -137 -710 -241 -78 -41 -88 -62 -40 -88 427 -228 827 -584 1189 -1055 102 -132 335 -475 370 -543 33 -66 20 -76 -116 -98 -51 -9 -120 -20 -153 -26 -33 -6 -82 -15 -110 -20 -160 -28 -321 -63 -395 -86 -178 -53 -378 -169 -570 -328 -117 -98 -342 -302 -353 -321 -11 -20 -1 -22 168 -28 179 -6 253 -15 488 -57 62 -11 305 -71 362 -89 248 -79 526 -182 527 -195 1 -9 -118 -99 -419 -317 -62 -44 -113 -85 -113 -89 0 -4 4 -10 10 -14 11 -7 1061 -7 1068 0 3 2 -7 21 -22 40 -37 48 -110 207 -124 270 -31 134 -44 335 -22 335 5 0 26 -33 46 -72 49 -97 101 -173 158 -228 52 -51 136 -105 180 -116 27 -6 29 -5 22 17 -41 142 -49 191 -49 297 -1 62 4 117 9 122 9 9 32 -27 132 -210 60 -111 84 -150 91 -150 4 0 13 39 20 88 29 205 88 382 173 526 58 96 195 253 210 238 5 -5 5 -45 -1 -98 -24 -211 -44 -464 -38 -471 18 -17 185 57 283 126 92 65 154 132 252 276 137 202 215 300 237 299 11 -1 60 -12 109 -25 84 -23 91 -27 122 -69 18 -25 43 -76 56 -115 20 -62 23 -88 22 -235 -1 -150 -3 -176 -32 -288 -17 -67 -47 -162 -67 -211 -19 -49 -35 -91 -35 -95 0 -19 33 3 123 81 299 262 478 413 487 413 19 0 10 -23 -65 -177 -78 -160 -87 -188 -57 -179 49 16 186 36 192 29 4 -4 -12 -48 -36 -98 -49 -102 -55 -130 -24 -120 11 3 81 42 156 86 75 43 138 79 140 79 1 0 31 16 64 36 34 20 64 33 67 30 3 -3 -24 -92 -61 -199 -36 -107 -66 -200 -66 -207 0 -10 24  -12 123 -7 67 4 235 11 372 17 294 12 345 17 345 35 0 8 -10 17 -22 21 -12 4 -86 37 -163 74 -77 37 -157 73 -178 81 -23 8 -37 19 -35 27 2 9 85 42 218 86 768 258 757 254 744 265 -5 5 -79 19 -164 30 -85 12 -186 26 -225 32 -130 19 -200 28 -253 35 -33 4 -52 10 -49 18 2 6 35 27 73 46 70 36 314 164 479 250 50 26 185 96 300 156 116 59 232 119 259 134 27 14 51 30 53 36 2 6 -46 22 -114 37 -248 57 -444 82 -755 99 -164 8 -228 15 -228 24 0 6 6 14 13 17 6 2 75 51 152 109 77 57 178 132 225 166 148 109 149 114 30 102 -41 -4 -133 -13 -205 -19 -159 -14 -319 -29 -445 -41 -52 -5 -178 -17 -279 -27 l-184 -18 -15 24 c-9 13 -32 71 -52 130 -48 143 -91 219 -169 303 -93 101 -177 158 -376 258 -91 46 -94 54 -115 370 -19 285 -31 414 -50 545 -41 280 -86 379 -252 565 -207 232 -509 465 -789 607 -167 86 -239 114 -469 183 -41 13 -81 25 -87 27 -7 3 -13 0 -13 -7z"/>
          </g>
          <rect x="20" y="170" width="250" height="8" fill="silver" stroke="#000" stroke-opacity="0.5"></rect>
          <rect x="30" y="178" width="230" height="210" fill="brown" stroke="#000" stroke-opacity="0.5"></rect>

           <g>
            <rect x="10" y="40" width="35" height="20" fill="white" stroke="#fff" opacity="0.1"/>
            <text x="12" y="55" font-size="12" fill="black">{{ textV }} </text>
            <animateTransform attributeName="transform" type="translate" from='150 50' :to="moveAlpha" begin="0s" dur="5s" fill="freeze" repeatCount="indefinite"/>
          </g>
           <g>
            <rect x="10" y="25" width="35" height="20" fill="white" stroke="#fff" opacity="0.1"/>
            <text x="5" y="40" font-size="12" fill="black">{{ textV1 }} </text>
            <animateTransform attributeName="transform" type="translate" from='150 50' :to="moveElectron" begin="0s" dur="5s" fill="freeze" repeatCount="indefinite"/>
          </g>
           <g>
            <rect x="10" y="-5" width="35" height="20" fill="white" stroke="#fff" opacity="0.1"/>
            <text x="5" y="10" font-size="12" fill="black">{{ textV2 }} </text>
            <animateTransform attributeName="transform" type="translate" from='150 50' :to="moveElectron" begin="0s" dur="5s" fill="freeze" repeatCount="indefinite"/>
          </g>
 
          <line  x1="250" y1="172" x2="269" y2="172" stroke="#000">
            //- <animateTransform attributeName="transform" type="translate" from='-160 0' :to="cote1" begin="0s" dur="5s" fill="freeze"/>
          </line>
          <line x1="20" y1="172" x2="38" y2="172" stroke="#000">
            //- <animateTransform attributeName="transform" type="translate" from='150 0' :to="cote2" begin="0s" dur="5s" fill="freeze"/>
          </line>
          //-<text x="150" y="195" font-size="15" fill="black">{{ gapSize }} &#x03BC;m 
            //- ∫<animateTransform attributeName="transform" type="translate" from='10' :to="gapText" begin="0s" dur="5s" fill="freeze"/>
          </text>

        </g>
      </svg>

    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Velocity of the particle from lab (in c)
        input.center.data(:class="checkedLabAlpha" v-model.number='enterLabAlpha')
        <span class="error" v-if="errorLabAlpha">[e: {{ errorLabAlpha.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the electron from lab (in c)
        input.center.data(:class="checkedLabE" v-model.number='enterLabE')
        <span class="error" v-if="errorLabE">[e: {{ errorLabE.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the particle from the electron (in c)
        input.center.data(:class="checkedElectronAlpha" v-model.number='enterElectronAlpha')
        <span class="error" v-if="errorElectronAlpha">[e: {{ errorElectronAlpha.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the electron from the particle (in c)
        input.center.data(:class="checkedAlphaElectron" v-model='enterAlphaElectron')
        <span class="error" v-if="errorAlphaElectron">[e: {{ errorAlphaElectron.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterLabAlpha: '',
      errorLabAlpha: 0,
      enterLabE: '',
      errorLabE: 0,
      enterElectronAlpha: '',
      errorElectronAlpha: 0,
      enterAlphaElectron: '',
      errorAlphaElectron: 0,
      direction: ''
    }
  },
  computed: {
    particleDirection: function () {
      console.clear()
      let valor = (Math.round(Math.random()) - 0.5) * 2
      this.direction = valor
      console.log('Direction: ', this.direction)
      if (this.language) {
        return valor === 1 ? 'derecha' : 'izquierda'
      } else {
        return valor === 1 ? 'rigth' : 'left'
      }
    },
    alphaLabSpeed: function () {
      let max = 100
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * this.direction
    },
    electronAlphaSpeed: function () {
      let max = 50
      let min = 20
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * (-this.direction)
    },
    alphaElectron: function () {
      return this.electronAlphaSpeed
    },
    electronLabSpeed: function () {
      return parseFloat((this.alphaLabSpeed + this.electronAlphaSpeed).toPrecision(3))
    },
    electronAlpha: function () {
      return -this.electronAlphaSpeed
    },
    checkedLabAlpha: function () {
      let check
      let elem = this.alphaLabSpeed
      console.log('alphaLAbSpeed => ' + elem + ' : ' + parseFloat(this.enterLabAlpha))
      this.errorLabAlpha = 100 * Math.abs((elem - parseFloat(this.enterLabAlpha)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorLabAlpha + ' %')
      check = this.errorLabAlpha < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedLabE: function () {
      let check
      let elem = this.electronLabSpeed
      console.log('electronLabSpeed => ' + elem + ' : ' + parseFloat(this.enterLabE))
      this.errorLabE = 100 * Math.abs((elem - parseFloat(this.enterLabE)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorLabE + ' %')
      check = this.errorLabE < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedElectronAlpha: function () {
      let check
      let elem = this.electronAlpha
      console.log('ElectronAlpha => ' + elem + ' : ' + parseFloat(this.enterElectronAlpha))
      this.errorElectronAlpha = 100 * Math.abs((elem - parseFloat(this.enterElectronAlpha)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorElectronAlpha + ' %')
      check = this.errorElectronAlpha < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedAlphaElectron: function () {
      let check
      let elem = this.alphaElectron
      console.log('AlphaElectron => ' + elem + ' : ' + parseFloat(this.enterAlphaElectron))
      this.errorAlphaElectron = 100 * Math.abs((elem - parseFloat(this.enterAlphaElectron)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorAlphaElectron + ' %')
      check = this.errorAlphaElectron < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    moveAlpha: function () {
      let move = this.direction > 0 ? 300 : 0
      return `${move}` + ' 50'
    },
    moveElectron: function () {
      let move = this.direction > 0 ? 0 : 330
      return `${move}` + ' 50'
    },
    textV: function () {
      let text = this.enterLabAlpha !== '' ? 'v = ' + `${this.enterLabAlpha}` + 'c' : ''
      return text
    },
    textV1: function () {
      let text = this.enterLabE !== '' ? 'v1 = ' + `${this.enterLabE}` + 'c' : ''
      return text
    },
    textV2: function () {
      let text = this.enterAlphaElectron !== '' ? 'v2 = ' + `${this.enterAlphaElectron}` + 'c' : ''
      return text
    }
  },
  methods: {
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
      width: 100%;
      margin-left: 0%;
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: blue;
  width: 100%;
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
.error {
  font-size: 14px;
}
</style>
