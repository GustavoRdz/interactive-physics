<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 25px 0px 10px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="500px" width="700px" >


        <!-- x grid -->
        <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
        <!-- x Axis -->
        <path d="M0 390 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        //- <path d="M100 330 l500 -250" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="7" ></path>

        <!-- y Axis -->
        <path d="M90 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
                
        <!-- Segmento AB -->
        //- <path d="M190 285 l330 -165 l-10 15 m15 -17 l-25 4" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        
        <!-- triangle -->
        <path d="M202 275 l342 -190 0 191 -343 0" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        <path d="M90 86 l455 0 m-455 190 l108 0 m4 112 l0 -108 m342 112 l0 -110" stroke="black" fill="none" stroke-opacity="0.8" stroke-width="3" stroke-dasharray="30 15"></path>
        
        <!-- Points -->
        <circle r="8" cx="202" cy="275"  fill="red" stroke="#000" stroke-width="1"/>
        <circle r="8" cx="544" cy="86"  fill="blue" stroke="#000" stroke-width="1"/>

         <text x="175" y="250" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
         <text x="560" y="80" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
         <text x="555" y="290" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">A</tspan></text>
        <g transform="translate(304, 260)">    
          <text x="15" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
          <line  x1="5" y1="26" x2="5" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="95" y1="26" x2="95" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        </g>
        <g transform="translate(560, 150)">    
          <text x="15" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
          <line  x1="5" y1="26" x2="5" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="95" y1="26" x2="95" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        </g>
        <text x="55"y="90" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
        <text x="55" y="280" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        <text x="190" y="415" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        <text x="533" y="415" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>

        
        <!-- axis text -->
        <text x="670" y="420" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>
        <text x="60" y="35" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
        <text x="325" y="265" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
    
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
