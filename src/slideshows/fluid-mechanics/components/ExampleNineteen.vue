<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A Venturi meter is used to measure the flow speed in a pipe. Derive an expression for the flow speed v<sub>1</sub> in terms of the cross-setional areas A<sub>1</sub> and A<sub>2</sub> and the difference in height h of the liquid levels in the two vertical tubes.

    p.problem Se utiliza un medidor Venturi para medir la velocidad del flujo en una tubería. Deduzca una expresión para la velocidad del flujo v<sub>1</sub> en términos de las áreas interregionales A<sub>1</sub> y A<sub>2</sub> y la diferencia de altura h de los niveles de líquido en los dos tubos verticales.
    .center
      img(src='../assets/equations/venturiPipeProblem.svg' width="300px" style="margin-top: -50px;")

    .center
        img(src='../assets/equations/ex18Solutions.svg'  width="150px")


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 60%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
