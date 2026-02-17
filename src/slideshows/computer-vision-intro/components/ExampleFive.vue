<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem Usando el producto vectorial, calcula la recta que pasa por los siguientes pares de puntos. Recuerda: ℓ = P × Q.
  p.problem a) P=[1:0:1]  y  Q=[0:1:1] <br> b) P=[2:3:1]  y  Q=[1:−1:1] <br> c) P=[1:0:0]  y  Q=[0:1:0]
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data <em>&#x03C6; @{{ hotTemperature }}&#x00B0;</em>
    //-     input.center.data(:class="checkedUserPhi" v-model.number='userPhi')
</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      userPhi: '',
      alpha: 2.4e-5,
      coldTemperature: -78
    }
  },
  computed: {
    holeDiameter: function () {
      let max = 60
      let min = 40
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    hotTemperature: function () {
      let max = 30
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    phi: function () {
      return Math.round(1000 * this.holeDiameter * (1 + this.alpha * (this.hotTemperature - this.coldTemperature))) / 1000
    },
    checkedUserPhi: function () {
      let check
      console.log(this.phi + ' : ' + parseFloat(this.userPhi))
      check = parseFloat(this.phi) === parseFloat(this.userPhi) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
  },
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        font-family:'Space Mono', monospace;
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

.data {
  display: inline-block;
  text-transform: none;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 15px 20px 15px 20px;
  font-size: 30px;
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

</style>
