<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Vision Systems Laboratory
        img(src='./assets/U.svg')
        h4 Vision Sytems
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=7, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3
        | Lab practices
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>1.- ImageJ introduction</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>2.- Imagen scan</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>3.- Color and B/W images</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 5")
            <b>4.- Pixel Counter</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>5.- Coin counter</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>6.- Coin identifier</b>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 <b>Formato</b> para reportes
      ol
        li La <b>portada</b> debe incluir
          ul
            li(style="font-size: 0.7em;") Institución, Dependencia, materia, semestre que se cursa, actividad reportada, nombre del profesor, matrícula y nombre completo del estudiante, horario de la clase, fecha de entrega del reporte
        li <b>Introducción</b>
          ul
            li(style="font-size: 0.7em;") Descripción de el desarrollo que se hará en la practica es decir explicar el objetivo con información que respalde los resultados esperados
        li <b>Desarrollo</b>
          ul
            li(style="font-size: 0.7em;") Explicar el procedimiento que se hizo para llegar a los resultados que obtuvo
        li <b>Resultados</b>
          ul
            li(style="font-size: 0.7em;") Explicar si los resultados concuerdan con el objetivo de la practica y en caso de haber discrepacias justificar el origen de esas diferencias
        li <b>Referencias</b>
          ul
            li(style="font-size: 0.7em;") Incluir las fuentes de información de donde se documento para llevar a cabo la practica

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Practice 1
      p.center <b>ImageJ</b> introduction

      p When measuring tempetature usually hold two objects in thermal contact. One of these objects use to be a thermometer <em> <strong>termometer</strong></em>
      p It is common to wait a long period of time (minutes) before get the correct measutement because reaching the <em><strong>thermal equilibrium</strong></em> is a slow process
      p Once the thermal equilibrium is reached the thermometer has the same temperature as the object to measure and its calibration allows to get the temperature of the object in it's scale


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Fun soon!
</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems Laboratory',
    description: 'Image procesing with ImageJ',
    path: 'vision-systems-lab'
  },
  components: {

  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#TemperatureHeat {
  .frontpage {
    img {
      height: 7em;
    }
    img.control-schema {
      width: 8em;
      height: 3em;
    }
  }
  .heart {
    width: 1em;
    height: 0.8em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-image: url('./assets/logo.svg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: contain;
  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  .boredYet {
    p {
      margin-bottom: 0.3em;
      margin-top: 1.3em;
    }
    .button {
      border: none;
    }
    .button.prev {
      float: left;
    }
    .button.next {
      float: right;
    }
  }
  img.computerkid {
    height: 6.5em;
  }

  a {
    color: black;
  }

  .parentWindow {
    border: solide 1px red;
  }
}
#table-wrapper {
  display: flex;
  padding-left:0px;
  align-content: center;

}
#desc {
  width: 18em;
  border-collapse: collapse;
  border-bottom: 1px solid black;
  margin: 0 auto;

  & th {
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: .5em 0em .5em -3em;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }

  & td {
    text-align: center;
    padding-left: 0em;
    margin: 0 auto;
    font-size: 14px;
    height: 10px;
  }

  & caption {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    background-color:slateblue;
    color: white;
  }
}
</style>
