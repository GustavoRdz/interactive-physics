<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 25px 0px 10px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" height="500px" width="1000px" >


        <!-- x grid -->
        <line v-for="x in [88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [48, 86, 124, 162, 200, 238, 276, 314, 352]" fill="none" stroke="#000" stroke-width="0.5" x1="50" :y1="y" x2="660" :y2="y" stroke-linecap="round"/>
        <!-- Axis -->
        <path d="M50 200 l620 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        //- <path d="M100 330 l500 -250" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="7" ></path>

        <!-- Segmento AB -->
        //- <path d="M190 285 l330 -165 l-10 15 m15 -17 l-25 4" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        //- <path d="M190 285 l340 -170" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        
        <!-- Points -->
        <circle r="8" cx="240" cy="200"  fill="red" stroke="#000" stroke-width="1"/>
        <circle r="8" cx="544" cy="200"  fill="blue" stroke="#000" stroke-width="1"/>

        <!-- text -->
        <text x="650" y="150" font-size="20" fill="red" font-weight="bold" font-family="Times" font-style="normal">Eje</text>
        <path d="M640 140 q-20 -20 -30 50 l-3 -5 l3 5 l4 -5" stroke="red" fill="none" stroke-opacity="0.8" stroke-width="1"></path>
        <text x="650" y="230" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>
        <text x="620" y="260" font-size="20" fill="red" font-weight="bold" font-family="Times" font-style="normal">Variable</text>
        <text x="621" y="280" font-size="20" fill="red" font-weight="bold" font-family="Times" font-style="normal">asociada</text>
        <text x="630" y="300" font-size="20" fill="red" font-weight="bold" font-family="Times" font-style="normal">al eje</text>
        <path d="M700 260 c50 -20 20 -40 -28 -38 l5 3 l-5 -3 l5 -3 l-5 3" stroke="red" fill="none" stroke-opacity="0.8" stroke-width="1"></path>
        <text x="230" y="180" font-size="30" fill="red" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        <text x="233" y="235" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal"> 0 </text>
        <text x="530" y="180" font-size="30" fill="blue" font-weight="bold" font-family="Times" font-style="italic"> P </text>
        <text x="537" y="235" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic"> x </text>
    
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
