<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Óptica, Átomo y Enfriamiento Láser
        img(src='./assets/U.svg' :mouseNavigation='false')
        h4 La interacción radiación materia
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    //- slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}</sup>
    //-   h3
    //-     | Topics
    //-     .inline(class='animated infinite pulse heart')
    //-   .center
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Óptica</b>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>La física cuántica</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>El átomo</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>El láser</b>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Temperatura</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Enfriamiento Láser</b>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 Óptica
      p Estudio de la naturaleza de la luz
      .center
        img(src='./assets/wave01.png')

    slide(enter='bounceInDown', :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 La física cuántica
      h6.center Radiación de cuerpo negro
      .center
        img(src='./assets/blackBodyCavity.png', height="350px" style="margin-right: 50px;")
        img(src='./assets/blackbody.png', height="350px")
        img(src='./assets/briquettes.png', height="350px" style="margin-right: 50px;")
        
    slide(enter='bounceInDown', :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5 La física cuántica: Radiación de cuerpo negro
      .center
        img(src='./assets/wienLaw.png', height="40px" style="margin: 50px 50px -10px 0;")
        | Wien Law
      .center
        img(src='./assets/RayleighJeansLaw.png', height="70px" style="margin: 50px 0 -20px 0;")
        | <span style="margin: 50px 0 0 50px">Rayleigh-Jeans</span>
      .center
        img(src='./assets/rayleighJeansPlot.png', height="350px" style="margin: 50px;")
        

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6.center Radiación de cuerpo negro
      .center
        img(src='./assets/plank.png', height="300px" style="margin-right: 50px;")
        img(src='./assets/oscilatorLevels.png', height="250px" style="margin-right: 30px;")
        img(src='./assets/plankDist.png', height="300px" style="margin-left: 0px;")
      .center
        img(src='./assets/planckFormula.png', height="100px" style="margin: 50px 0 50px 0;")
      .center
        img(src='./assets/planckConstant.png', height="50px" style="margin-left: 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Efecto fotoeléctrico
      .centere
        img(src='./assets/photoelectric1.png', height="400px" style="margin-right: 50px;")
        img(src='./assets/photoelectric2.png', height="500px" style="margin-left: 50px;")
      .center
        img(src='./assets/photoelectricEq.png', height="50px" style="margin: 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Dispersión Compton
      .centere
        img(src='./assets/aCompton.png', height="350px" style="margin-right: 20px;")
        img(src='./assets/XraysScattering.png', height="300px" style="margin-left: 20px;")
        img(src='./assets/XraysShift.png', height="300px" style="margin-left: 20px;")
      .center
        img(src='./assets/componEq.png', height="70px" style="margin-top: 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 Espectro atómico
        .center
          img(src='./assets/twoSpecte.png' height="285x" style="")
          img(src='./assets/sevenSpectre.png' height="250px" style="margin-top: 150px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 El átomo
        .center
          img(src='./assets/earlyAtom.png' height="500px" style="margin-right: 30px;")
          img(src='./assets/bohrAtom.png' height="500px" style="margin-right: 30px;")
          img(src='./assets/bohr.png' height="250px" style="margin: 0 0 140px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center El átomo: modelo de Bohr
        .center
          div
            img(src='./assets/radioOrbitas.png' height="300px" style="margin: 0px 30px 100px 0;")
            img(src='./assets/hidrogenAtomEmisionLines.png' height="500px" style="margin: 0px 0 0 0;")
            img(src='./assets/emissionLinesFormula.png' height="70px" style="margin: 0 0 200px 30px ;")
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Transiciones electrónicas: Coeficientes de Einstein
      .center
          img(src='./assets/absorption.png' height="200px" style="margin: 60px;")
          img(src='./assets/spontaneousEmision.png' height="200px" style="margin: 60px;")
          img(src='./assets/stimulatedEmison.png' height="250px" style="margin: 10px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center El láser
      p
        .center
          img(src='./assets/He-NeLevels.png' height="350px" style="margin-right: 70px;")
          img(src='./assets/laser.png' height="300px")
          img(src='./assets/schemaLaser.png' height="200px" style="margin: 70px 0 0 200px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 Caracteristicas de la luz láser
      p <b>• Coherente.</b> <br>Rayos individuales en un haz laser matienen una relación de fase fija con los otros rayos.
      p <b>• Monocromatica.</b> <br>Tiene una banda delgada de longitudes de onda.
      p <b>• Direccional.</b> <br>El haz diverge poco en distancias grandes.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Temperatura
      p.center Indica si un sistema esta en equilibrio térmico con otros sistemas
      p.center En un gas: <span style="font-family: Times;">T &#x221D<em> v</em><sup>2</sup></span>
        .center
          img(src='./assets/Translational_motion.gif')
      p.center <span style="font-family: Times;">¿Como enfriar los átomos con luz?</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 Presion de Radiación
      p.center Las ondas electromagneticas ejercen fuerza sobre los objetos.
      .center
          img(src='./assets/radiometroA.gif' height="300px" style="margin-right: 30px;")
          img(src='./assets/cometarytails.gif' height="300px" style="margin-right: 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Fuerza en resonancia
        force-resonance


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Efecto Doppler
        doppler-simulator
      

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Fuerza de radiación
        force-beams

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Fuerza de radiacion
        force-beams2

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Trampa óptica
      .center
          img(src='./assets/opticalTrap.png' height="600px")
        
    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Trampa magneto-óptica
      .center
          img(src='./assets/motB.png' height="600px")
      
    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center El laboratorio en el INAOE
      .center
          img(src='./assets/IMG-6967.jpg' height="600px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Diodo láser estabilizado en frecuencia
      .center
          img(src='./assets/diodeGrating.png' height="300px" style="margin: 100px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center El laboratorio
      .center
          img(src='./assets/IMG-6970.jpg' height="600px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center El laboratorio
      .center
          img(src='./assets/IMG-6969.jpg' height="600px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center El laboratorio
      .center
          img(src='./assets/IMG-6968.jpg' height="600px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Aplicaciones de átomos frios
      h6.center Experimentación cuántica
      .center
        img(src='./assets/atomTrap.jpeg' height="300px")
      p Louis de Broglie (1892–1987): dualidad onda-particula:  <span style="font-family: Times;">λ &#x221D 1/T<sup>1/2</sup></span>

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Aplicaciones de átomos frios
      h6.center Condensado de Bose-Einstein
      .center
        img(src='./assets/boseE.gif' height="300px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Aplicaciones de átomos frios
      h6.center Computación cuántica
      .center
        img(src='./assets/quantumComputer.jpeg' height="400px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Aplicaciones de átomos frios
      h6.center Relojes atómicos
      .center
        img(src='./assets/atomicClock.jpeg' height="400px")

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      
      h5.center Creado por <br>Gustavo Rodríguez Morales
        p gustavo.rodriguezml@uanl.edu.mx
        p gustavo.rodriguezml@gmail.com


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Fun soon!
</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Enfriamiento laser',
    description: 'Enfriamiento laser',
    path: 'laser-cooling'
  },
  components: {
    'light-wave': require('./components/LightWave'),
    'pressure-machine': require('./PressureMachine'),
    'force-resonance': require('./components/ForceResonance'),
    'doppler-simulator': require('./components/dopplerSimulator'),
    'force-beams': require('./components/forceBeams'),
    'force-beams2': require('./components/forceBeams2'),
    'example-one': require('./components/ExampleOne'),
    'example-two': require('./components/ExampleTwo'),
    'example-three': require('./components/ExampleThree'),
    'example-four': require('./components/ExampleFour'),
    'example-five': require('./components/ExampleFive'),
    'example-six': require('./components/ExampleSix'),
    'example-seven': require('./components/ExampleSeven'),
    'example-eight': require('./components/ExampleEight'),
    'example-nine': require('./components/ExampleNine'),
    'example-ten': require('./components/ExampleTen'),
    'example-eleven': require('./components/ExampleEleven'),
    'example-twelve': require('./components/ExampleTwelve'),
    'example-thirteen': require('./components/ExampleThirteen'),
    'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      theme: 'Óptica, Átomo y Enfriamiento Láser'
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
