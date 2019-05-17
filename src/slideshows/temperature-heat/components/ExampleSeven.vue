<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A student eats a dinner at {{ calories }} Calories. He wishes to do an equivalent amount of work in the gymnasium by lifting a {{ weight }}-kg barbell. How many times must he raise the barbell to expend this much energy? Assume he rises the barbell {{ height }}m each time lifts it and he regains no energy when he lowers the barbell. Calculate the time required to do the lifts if each one is done in {{ time }}s

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Number of lifts
        input.center.data(:class="checkedUserLifts" v-model.number='userLifts')
      p.inline.data Time (hrs)
        input.center.data(:class="checkedUserTime" v-model.number='userTime')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      Calorie: 4186,
      g: 9.81,
      userLifts: '',
      userTime: ''
    }
  },
  computed: {
    calories: function () {
      let max = 2200
      let min = 1800
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    weight: function () {
      let max = 50
      let min = 30
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    height: function () {
      let max = 20
      let min = 15
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    time: function () {
      let max = 100
      let min = 50
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    lifts: function () {
      return Math.round(this.calories * this.Calorie / (this.weight * this.g * this.height))
    },
    totalTime: function () {
      return Math.round(10 * this.lifts * this.time / 3600) / 10
    },
    checkedUserLifts: function () {
      let check
      console.log(this.lifts + ' : ' + parseFloat(this.userLifts))
      check = this.lifts === parseFloat(this.userLifts) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserTime: function () {
      let check
      console.log(this.totalTime + ' : ' + parseFloat(this.userTime))
      check = this.totalTime === parseFloat(this.userTime) ? 'correct' : 'not-correct'
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
  text-transform: none;
  margin: 1px 2px 1px 2px;
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
