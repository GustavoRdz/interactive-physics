<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem.center Sodoku
    p(style="font-family: arial; font-size: 10px;").center {{ arreglo[0] }}<br>{{ arreglo[1] }}<br>{{ arreglo[2] }}<br>{{ arreglo[3] }}<br>{{ arreglo[4] }}<br>{{ arreglo[5] }}<br>{{ arreglo[6] }}<br>{{ arreglo[7] }}<br>{{ arreglo[8] }}
    p.solution.center Introduce numbers
    .center
      input.data.m0(:class="checkedCeroCero" v-model.number='malla[0][0]')
      input.data.m0(:class="checkedLabE" v-model.number='malla[0][1]')
      input.data.mr(:class="checkedLabE" v-model.number='malla[0][2]')
      input.data.m0(:class="checkedLabAlpha" v-model.number='malla[0][3]')
      input.data.m0(:class="checkedLabE" v-model.number='malla[0][4]')
      input.data.m0(:class="checkedLabE" v-model.number='malla[0][5]')
      input.data.ml(:class="checkedLabAlpha" v-model.number='malla[0][6]')
      input.data.m0(:class="checkedLabE" v-model.number='malla[0][7]')
      input.data.m0(:class="checkedLabE" v-model.number='malla[0][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[1][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[1][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[1][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[1][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[1][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[1][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[1][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[1][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[1][8]')
    .center
      input.data.md(:class="checkedElectronAlpha" v-model.number='malla[2][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[2][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[2][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[2][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[2][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[2][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[2][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[2][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[2][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[3][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[3][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[3][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[3][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[3][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[3][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[3][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[3][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[3][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[4][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[4][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[4][2]')
      input.data.m0(:class="checkedTresCuatro" v-model.number='malla[4][3]')
      input.data.m0(:class="checkedCuatroCuatro" v-model.number='malla[4][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[4][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[4][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[4][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[4][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[5][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[5][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[5][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[5][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[5][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[5][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[5][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[5][7]')
      input.data.mu(:class="checkedAlphaElectron" v-model.number='malla[5][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[6][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[6][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[6][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[6][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[6][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[6][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[6][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[6][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[6][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[7][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[7][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[7][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[7][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[7][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[7][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[7][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[7][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[7][8]')
    .center
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[8][0]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[8][1]')
      input.data.mr(:class="checkedAlphaElectron" v-model.number='malla[8][2]')
      input.data.m0(:class="checkedElectronAlpha" v-model.number='malla[8][3]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[8][4]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[8][5]')
      input.data.ml(:class="checkedElectronAlpha" v-model.number='malla[8][6]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[8][7]')
      input.data.m0(:class="checkedAlphaElectron" v-model.number='malla[8][8]')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLabAlpha: '',
      enterLabE: '',
      enterElectronAlpha: '',
      enterAlphaElectron: '',
      direction: '',
      malla: Array(9).fill(0).map(x => Array(9).fill(10)),
      enterCeroCero: '',
      enterTresCuatro: '',
      enterCuatroCuatro: ''
    }
  },
  computed: {
    arreglo: function () {
      // let malla = []
      console.log(this.malla)
      for (let i = 0; i < 9; i++) {
        let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let row = []
        for (let j = 0; j < 9; j++) {
          console.log('(row, col): numero ==>' + '(' + i + ',' + j + '): ' + row)
          let index = Math.floor(Math.random() * data.length)
          console.log('index: ' + index)
          row[j] = data.slice(index, index + 1)[0]
          data.splice(index, 1)
          console.log('row[j]: ' + row[j])
          console.log('data: ' + data)
        }
        this.malla[i] = row
      }
      console.log(this.malla)
      return this.malla
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
      return this.alphaLabSpeed - this.electronAlphaSpeed
    },
    electronAlpha: function () {
      return -this.electronAlphaSpeed
    },
    checkedCeroCero: function () {
      let check
      console.log('alphaLAbSpeed => ' + ' : ' + parseFloat(this.enterLabAlpha))
      check = this.alphaLabSpeed === parseFloat(this.enterLabAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedTresCuatro: function () {
      let check
      console.log('alphaLAbSpeed => ' + ' : ' + parseFloat(this.enterLabAlpha))
      check = this.alphaLabSpeed === parseFloat(this.enterLabAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedCuatroCuatro: function () {
      let check
      console.log('alphaLAbSpeed => ' + ' : ' + parseFloat(this.enterLabAlpha))
      check = this.alphaLabSpeed === parseFloat(this.enterLabAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedLabAlpha: function () {
      let check
      console.log('alphaLAbSpeed => ' + this.alphaLabSpeed + ' : ' + parseFloat(this.enterLabAlpha))
      check = this.alphaLabSpeed === parseFloat(this.enterLabAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedLabE: function () {
      let check
      console.log('electronLabSpeed => ' + this.electronLabSpeed + ' : ' + parseFloat(this.enterLabE))
      check = this.electronLabSpeed === parseFloat(this.enterLabE) ? 'correct' : 'not-correct'
      return check
    },
    checkedElectronAlpha: function () {
      let check
      console.log('ElectronAlpha => ' + this.electronAlpha + ' : ' + parseFloat(this.enterElectronAlpha))
      check = this.electronAlpha === parseFloat(this.enterElectronAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedAlphaElectron: function () {
      let check
      console.log('AlphaElectron => ' + this.alphaElectron + ' : ' + parseFloat(this.enterAlphaElectron))
      check = this.alphaElectron === parseFloat(this.enterAlphaElectron) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    },
    possible: function (i, j, number) {
      console.log('(row, col): numero ==>' + '(' + i + ',' + j + '): ' + number)
      for (let n = 0; n <= i; n++) {
        console.log('n: ' + n)
        console.log('(row, col): numero ==>' + '(' + i + ',' + j + '): ' + this.malla[i][j])
        console.log('(row, col): numero ==>' + '(' + i + ',' + j + '): ' + (this.malla[i][j] === number))
      }
      return true
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
  display: flex;
  display: inline-flex;
  padding-left: 12px;
  padding-top: 1px;
  padding-right: 0px;
  padding-bottom: 0px;
  width: 30px;
  height: 40px;
  font-size: 35px;
  color: white;
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
.m0 {
  margin: 0;
}
.mr {
  margin: 0 5px 0 0;
}
.ml {
  margin: 0 0 0 5px;
}
.md {
  margin: 0 0 5px 0;
}
.mu {
  margin: 0 0 5px 0;
}

</style>
