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
        <path d="M0 238 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        //- <path d="M100 330 l500 -250" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="7" ></path>

        <!-- y Axis -->
        <path d="M354 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
                
        <!-- Segmento AB -->
        //- <path d="M190 285 l330 -165 l-10 15 m15 -17 l-25 4" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        //- <path d="M190 285 l340 -170" stroke="blue" fill="none" stroke-opacity="0.8" stroke-width="4"></path>
        
        <!-- Points -->
        //- <circle r="8" cx="240" cy="200"  fill="red" stroke="#000" stroke-width="1"/>
        //- <circle r="8" cx="544" cy="200"  fill="blue" stroke="#000" stroke-width="1"/>

        <!-- axis text -->
        <text x="400" y="180" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">Ejes</text>
        <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        <g transform="translate(20,40)">
          <text x="650" y="230" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>
          <text x="570" y="260" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">Variable</text>
          <text x="571" y="280" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">asociada</text>
          <text x="580" y="300" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">al eje</text>
          <path d="M633 260 c50 10 30 -10 30 -22  l3 5 l-3 -5 l-3 5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <g transform="translate(-325,-210)">
          <text x="650" y="230" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
          <text x="570" y="260" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">Variable</text>
          <text x="571" y="280" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">asociada</text>
          <text x="580" y="300" font-size="25" fill="green" font-weight="bold" font-family="Pompiere" font-style="normal">al eje</text>
          <path d="M633 260 c50 10 30 -10 30 -22  l3 5 l-3 -5 l-3 5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <g transform="translate(370,-30)">
          <text x="50" y="100" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="normal">Cuadrante I</text>
          <text x="80" y="130" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal">P(+,+)</text>
          <text x="80" y="160" font-size="25" fill="green" font-weight="bold" font-family="Times" font-style="normal">x &gt; 0</text>
          <text x="80" y="185" font-size="25" fill="green" font-weight="bold" font-family="Times" font-style="normal">y &gt; 0</text>
          //- <path d="M633 260 c50 10 30 -10 30 -22  l3 5 l-3 -5 l-3 5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <g transform="translate(40,-30)">
          <text x="50" y="100" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="normal">Cuadrante II</text>
          <text x="80" y="130" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal">P(-,+)</text>
          <text x="80" y="160" font-size="25" fill="red" font-weight="bold" font-family="Times" font-style="normal">x &lt; 0</text>
          <text x="80" y="185" font-size="25" fill="green" font-weight="bold" font-family="Times" font-style="normal">y &gt; 0</text>
          //- <path d="M633 260 c50 10 30 -10 30 -22  l3 5 l-3 -5 l-3 5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <g transform="translate(40,200)">
          <text x="50" y="100" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="normal">Cuadrante III</text>
          <text x="80" y="130" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal">P(-,-)</text>
          <text x="80" y="160" font-size="25" fill="red" font-weight="bold" font-family="Times" font-style="normal">x &lt; 0</text>
          <text x="80" y="185" font-size="25" fill="red" font-weight="bold" font-family="Times" font-style="normal">y &lt; 0</text>
          //- <path d="M633 260 c50 10 30 -10 30 -22  l3 5 l-3 -5 l-3 5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <g transform="translate(370,200)">
          <text x="50" y="100" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="normal">Cuadrante IV</text>
          <text x="80" y="130" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal">P(+,-)</text>
          <text x="80" y="160" font-size="25" fill="green" font-weight="bold" font-family="Times" font-style="normal">x &gt; 0</text>
          <text x="80" y="185" font-size="25" fill="red" font-weight="bold" font-family="Times" font-style="normal">y &lt; 0</text>
          //- <path d="M633 260 c50 10 30 -10 30 -22  l3 5 l-3 -5 l-3 5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <text x="325" y="265" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        //- <text x="233" y="235" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal"> 0 </text>
        //- <text x="530" y="180" font-size="30" fill="blue" font-weight="bold" font-family="Times" font-style="italic"> P </text>
        //- <text x="537" y="235" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic"> x </text>
        //- <text x="350" y="10" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic"> y </text>
    
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
