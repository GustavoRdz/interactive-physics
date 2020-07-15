<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Laboratorio
        img(src='./assets/U.svg')
        h4 Sistemas de visión
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
        | Practicas
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>1.- Introducción al ImageJ</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>2.- Barrido de una imagen</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>3.- Imagenes a color y B/W</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 5")
            <b>4.- Contador de pixeles</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>5.- Contador de monedas</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>6.- Identificador de monedas</b>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center <b>Formato</b> para reportes
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
            li(style="font-size: 0.7em;") Responder las preguntas del manual de laboratorio y considerar los puntos que menciona el manual para la elaborción del reporte
        li <b>Referencias</b>
          ul
            li(style="font-size: 0.7em;") Incluir las fuentes de información de donde se documento para llevar a cabo la practica
        p.center <a href="http://labmtc.fime.uanl.mx/@acad_mi/@264/Lab%20264.pdf">Manual de laboratorio</a>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Practica 1
      h5.center <b>ImageJ</b> Introduction al imageJ

      p Objetivo
      p Que el alumno conozca y aprenda del software IMAGEJ, desde su descarga y e instalación hasta ver todas las funciones del mismo

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Practica 2
      h5.center <b> Barrido de una imagen</b>

      p Objetivo
      p Que el alumno aprenda a utilizar la función de macro, y haga un barrido de una imagen con varias condiciones para subir y bajar el brillo de una imagen.
      .center
        <a href="https://docs.google.com/document/d/1Rt0O4pFJ4LEYcO_MAH2nEa88awm7U79gA0ClkznObuM/edit?usp=sharing">Macro</a>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Practica 2
      h5.center <b>De color a blanco y negro</b>

      p Objetivo
      p Que el alumno aprenda cómo hacer que con ayuda de una macro, se pueda pasar de una imagen a color RGB a blanco y negro (escala de grises) usando el software IMAGEJ.
      .center
        <a href="https://docs.google.com/document/d/12IP5eZmsQws7pbbbrFn23VqSZNCu5qyJCpgNBzoZSac/edit?usp=sharing">Macro</a>


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
