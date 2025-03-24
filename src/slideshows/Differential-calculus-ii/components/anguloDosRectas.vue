<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 25px 0px 10px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="300px" width="420px" >


        <!-- x grid -->
        <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
        <!-- x Axis -->
        <path d="M0 390 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="680" y="420" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>
        <!-- y Axis -->
        <path d="M88 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="50" y="20" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
                
        <text x="60" y="420" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>

        //- <circle cx="210" cy="390" r="80" fill="none" stroke="#000" stroke-width="2"  stroke-linecap="round"/>
        <line x1="600" y1="0" x2="100" y2="500" fill="none" stroke="#000" stroke-width="2"  stroke-linecap="round"/>
        <path d="M290 390 c0 0 5 -30 -23 -55  l0 5 l0 -5 l5 -1" stroke="blue" fill="none" stroke-opacity="1" stroke-width="2"></path>
        <text x="290" y="360" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">&alpha;<tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        <text x="520" y="50" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">l<tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        
        //- <circle cx="512" cy="390" r="80" fill="none" stroke="#000" stroke-width="2"  stroke-linecap="round"/>
        <line x1="200" y1="0" x2="600" y2="500" fill="none" stroke="#000" stroke-width="2"  stroke-linecap="round"/>
        //- <path d="M592 390 c10 -50 -20 -50 -130 -62  l3 3 l-3 -3 l2 -4" stroke="red" fill="none" stroke-opacity="1" stroke-width="2"></path>
        <path d="M592 390 a80, 80 0 0 0 -127,-62  l5 2 l-5 -2 l1 -5" stroke="blue" fill="none" stroke-opacity="1" stroke-width="2"></path>
        <text x="570" y="320" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">&alpha;<tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
        <text x="170" y="50" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">l<tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>

        //- <circle cx="378" cy="222" r="80" fill="none" stroke="#000" stroke-width="2"  stroke-linecap="round"/>
        <path d="M435 166 a80, 80 0 0 0 -106,-7   l5 0 l-5 0 l2 -5" stroke="blue" fill="none" stroke-opacity="1" stroke-width="2"></path>
        <text x="370" y="120" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">&theta;<tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        <path d="M326 161 a80, 80 0 0 0 -9,113  l1 -5 l-1 5 l-5 -1" stroke="blue" fill="none" stroke-opacity="1" stroke-width="2"></path>
        //- <path d="M435 167 c0 0 5 -30 -25 -45  l2 5 l-2 -5 l5 -2" stroke="blue" fill="none" stroke-opacity="1" stroke-width="2"></path>
        <text x="260" y="220" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">&theta;<tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
        <text x="520" y="50" font-size="35" fill="blue" font-weight="bold" font-family="Times" font-style="italic">l</text>

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
