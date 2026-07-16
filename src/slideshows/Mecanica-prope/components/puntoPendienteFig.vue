<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 25px 0px 10px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="500px" width="700px" >


        <!-- x grid -->
        <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
        <!-- x Axis -->
        <path d="M0 240 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="680" y="270" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>
        <!-- y Axis -->
        <path d="M352 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="320" y="20" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
                
        <text x="320" y="270" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>

        <line x1="0" y1="387" x2="700" y2="-2" fill="none" stroke="#00F" stroke-width="5"  stroke-linecap="round"/>
        <path d="M400 240 c0 0 5 -30 -23 -55  l0 5 l0 -5 l5 -1" stroke="#F00" fill="none" stroke-opacity="1" stroke-width="2"></path>
        <text x="410" y="210" font-size="35" fill="red" font-weight="bold" font-family="Times" font-style="italic">&alpha;</text>
        <text x="640" y="60" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">l</text>

        <!-- Points -->
        <circle r="8" cx="202" cy="275"  fill="#F00" stroke="#000" stroke-width="1"/>
        <circle r="8" cx="544" cy="86"  fill="#F00" stroke="#000" stroke-width="1"/>

         <text x="90" y="270" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>(<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>, <tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)</text>
         <text x="560" y="110" font-size="30" fill="#000" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan>(<tspan style="font-style: italic;">x</tspan>, <tspan style="font-style: italic;">y</tspan>)</text>
       

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
