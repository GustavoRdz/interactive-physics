<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Figure below shows a manometer being used to indicate the pressure difference between two points in a fabricated system (called venturi meter). Calculate the volumen flow rate of water in the system if the manometer deflection h is 260mm
    p.problem La siguiente figura muestra un manómetro que se utiliza para indicar la diferencia de presión entre dos puntos en un sistema fabricado (llamado medidor venturi). Calcule el caudal volumétrico de agua en el sistema si la desviación del manómetro h es de 260 mm

    .center
      img(src='../assets/venturiExercise.png' width="400px" style="margin-top: 0px;")

    .center
        //- img(src='../assets/equations/ex18Solutions.svg'  width="200px")


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
