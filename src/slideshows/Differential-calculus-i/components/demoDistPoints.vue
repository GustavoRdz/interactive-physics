<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 25px 0px 10px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" height="200px" width="600px" >

        <!-- x grid -->
        <line v-for="x in [88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="10" :x2="x" y2="160" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [48, 86, 124]" fill="none" stroke="#000" stroke-width="0.5" x1="50" :y1="y" x2="660" :y2="y" stroke-linecap="round"/>
        <!-- Axis -->
        <path d="M50 85 l620 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        //- <path d="M100 330 l500 -250" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="7" ></path>

        <!-- Segmento AB -->
        //- <path d="M190 285 l330 -165 l-10 15 m15 -17 l-25 4" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        //- <path d="M190 285 l340 -170" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        
        <!-- origin -->
        <line x1="88" y1="60" x2="88" y2="100" fill="none" stroke="#000" stroke-width="3"  stroke-linecap="round"/>
        <text x="77" y="130" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>

        <!-- Points -->
        <circle r="8" cx="240" cy="85"  fill="red" stroke="#000" stroke-width="1"/>
        <text x="230" y="60" font-size="30" fill="red" font-weight="bold" font-family="Times" font-style="italic"> P<tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> </text>
        <text x="230" y="120" font-size="30" fill="red" font-weight="bold" font-family="Times" font-style="italic">x<tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        <circle r="8" cx="544" cy="85"  fill="blue" stroke="#000" stroke-width="1"/>
        <text x="533" y="60" font-size="30" fill="blue" font-weight="bold" font-family="Times" font-style="italic">P<tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> </text>
        <text x="533" y="120" font-size="30" fill="blue" font-weight="bold" font-family="Times" font-style="italic">x<tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
    
        </svg>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {}
  },
  computed: {},
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
