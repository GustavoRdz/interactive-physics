<template lang="pug">
#Relativity.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Nuclear physics
        img(src='./assets/microres4.jpg')
        h4 Nuclei structure<br> Nuclear reactions
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }} </sup>

    slide(:steps=5, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 1")
            <b>Properties of nuclei</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step >= 2")
            <b>Nuclear binding energy</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=3")
            <b>Decay processes</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=4")
            <b>Natural radioactivity</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft' )
          p(v-if="step>=5")
            <b>Nuclear reactions</b>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h2 Atomic spectra of gases
      .center
        img(src='./assets/atomo01.png' width="400px")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Atomic spectra of gases
      p The year 1896 marks the birth of nuclear physics when French physicist Antoine-Henri Becquerel (1852–1908) discovered radioactivity in uranium compounds. This discovery prompted scientists to investigate the details of radioactivity and, ultimately, the structure of the nucleus. Pioneering work by Ernest Rutherford showed that the radiation emitted from radioactive substances is of three types—alpha, beta, and gamma rays—classified according to the nature of their electric charge and their ability to penetrate matter and ionize air. Later experiments showed that alpha rays are helium nuclei, beta rays are electrons, and gamma rays are high-energy photons.
      p In 1911, Rutherford, Hans Geiger, and Ernest Marsden performed the alpha-particle scattering experiments described in Section 42.2. These experiments established that the nucleus of an atom can be modeled as a point mass and point charge and that most of the atomic mass is contained in the nucleus. Subsequent studies revealed the presence of a new type of force, the short-range nuclear force, which is predominant at particle separation distances less than approximately 10214 m and is zero for large distances.
      p In this chapter, we discuss the properties and structure of the atomic nucleus. We start by describing the basic properties of nuclei, followed by a discussion of nuclear forces and binding energy, nuclear models, and the phenomenon of radioactivity. Finally, we explore the various processes by which nuclei decay and the ways that nuclei can react with each other.
      .center
        p(style="margin-bottom: -0px; color: blue;") a) Emission spectroscopy
      .center
        img(src='./assets/atomo02.png' width="700px")
        p(style="margin-top:-20px; color: blue;") b) Absorption spectroscoy

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Emission series
      .center
        img(src='./assets/atomo03.png' width="300px" style="margin-top: -30px;")
      p.center Balmer series
      .center
        img(src='./assets/atomo04.png' width="400px" style="margin-top:-20px;")
      p.center Rydberg constant: R<sub>H</sub> = 1.0973732x10<sup>7</sup> m<sup>-1</sup>


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center  Emission series
      h6.center Other series
      div(class="container" style="display: flex; flex-direction: row;")
        div
          .center
            img(src='./assets/atomo05.png' width="540px")
        div
          p Lyman series (fall down to n = 1)
          p Paschen series (fall down to n = 3)
          p Brackett series (fall down to n = 4)
          p Pfund series (fall down to n = 5)
          p Humphreys series (fall down to n = 6)



    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Early models of the atom
      h5.center Thomson's model
      .center
        img(src='./assets/atomo06.png' width="250px")


    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Rutherford's model
      .center
        img(src='./assets/atomo07.png' width="700px")
      p “It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch [artillery] shell at a piece of tissue paper and it came back and hit you.” <br>-- E. Rutherford


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Rutherford's model
      p Drawback of the Rutherford model: accelerated electric carges emits EM energy
      .center
        img(src='./assets/atomo09.png' width="300px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p Bohr applied Planck’s ideas of quantized energy levels to Rutherford’s orbiting atomic electrons
      .center
        img(src='./assets/atomo10.png' width="400px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-bottom: 60px;").center Bohr's model of the Hydrogen atom
      p(style="margin-top:20px;") 1. Physical components: The electron moves in circular orbits around the proton under the influence of the electric force of attraction.
      p 2. Behavior of the components: <br>(a) Only certain electron orbits are stable.<br>(b) The atom emits radiation when the electron makes a transition from a more energetic initial stationary state to a lower-energy stationary state.<br>(c) The allowed orbits are those for which the electron’s orbital angular momentum about the nucleus is quantized and equal to an integral multiple of
      .center
        img(src='./assets/atomo14.png' width="350px")
      p where <span style="font-family: Times; font-style: italic; font-weight: bold;">m<sub>e</sub></span> is the electron mass, <span style="font-family: Times; font-style: italic; font-weight: bold;">v</span> is the electron’s speed in its orbit, <span style="font-family: Times; font-style: italic; font-weight: bold;">r</span> is the orbital radius, and
          |
          img(src='./assets/atomo13.png' width="120px" style="margin: 0px 0 -3px 20px;")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:0px;").center Bohr's model of the Hydrogen atom
      p(style="margin-top:20px;")
      p With potential energy given by
        |
        img(src='./assets/atomo15.png' width="300px" style="margin: 0px 10px -11px 10px;")
        | total energy is
      .center
        img(src='./assets/atomo16.png' width="400px")
      p electrical force on electron must equal it's mass times the centripetal acceleration
        |
        img(src='./assets/atomo18.png' width="130px"  style="margin: 0px 10px -11px 10px;")
        | that is
      .center
        img(src='./assets/atomo19.png' width="200px"  style="margin: 0px 100px -40px 10px;")
        | then
        |
        img(src='./assets/atomo20.png' width="200px" style="margin: 0px 10px -40px 100px;")
      p and kinetic energy becomes
      .center
        img(src='./assets/atomo21.png' width="300px" style="margin: -20px 10px 0px 10px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p And total energy becomes
      .center
        img(src='./assets/atomo22.png' width="200px" style="margin-top: -30px;")
      p(style="margin-top: -10px;") Now solving <span style="font-family: Times; font-style: italic;">v</span> from
      .center(style="margin-top: -30px;")
        img(src='./assets/atomo14.png' width="350px" style="margin: 0px 100px -20px 10px;")
        | with
        |
        img(src='./assets/atomo20.png' width="100px" style="margin: 0px 10px -20px 100px;")
      p(style="margin-top: 20px;") we have
      .center
        img(src='./assets/atomo24.png' width="250px" style="margin-top: -30px;")
      p(style="margin-top: -0px;") and the orbital radius is given by
      .center
        img(src='./assets/atomo25.png' width="300px")


    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p From the orbilat radius
      .center
        img(src='./assets/atomo25.png' width="350px")
      p we can join all constant in a new one, called the <b>Bohr radius</b> (<span style="font-family: Times; font-style: italic;">a<sub style="font-size: 20px;">0</sub></span>)
      .center
        img(src='./assets/atomo26.png' width="350px")
      p and revisiting the orbital radius we have
      .center
        img(src='./assets/atomo27.png' width="600px")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top: -20px;").center Bohr's model of the Hydrogen atom
      p Using the Bohr radius
        |
        img(src='./assets/atomo27.png' width="450px" style="margin: 0 10px -5px 10px;")
        | in the relation
        img(src='./assets/atomo22.png' width="100px" style="margin: 0 10px -20px 10px;" )
        | energy becomes
      .center
        img(src='./assets/atomo28.png' width="500px" style="margin-top: -10px;" )
      p(style="margin-top: -10px;") evaluating constans we have
      .center
        img(src='./assets/atomo29.png' width="500px" style="margin-top: -10px;" )
      p For emision frequency we have
      .center
        img(src='./assets/atomo31.png' width="500px" style="margin-top: -10px;" )

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Bohr's model of the Hydrogen atom
      p(style="margin: -20px 100px 10px 10px;") Changing for wavelength
      .center
        img(src='./assets/atomo32.png' width="300px" style="margin: 0px 100px -30px 10px;")
        | or
        img(src='./assets/atomo33.png' width="250px" style="margin: 0px 10px -30px 100px;")
      p(style=" position: absolute; top: 280px; right: 100px;").center Rydberg constant:<br> R<sub>H</sub> = 1.0973732x10<sup>7</sup> m<sup>-1</sup>
      .center
        img(src='./assets/atomo30.png' width="300px" style="margin: 50px 10px 0px 50px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Ionized atoms
      p Some ionized atoms can be modeled with the model for the hydrogen atom
      p Z is the atomic number, and is added to the equations as
      .center
        img(src='./assets/atomo34.png' width="250px")
      .center
        img(src='./assets/atomo35.png' width="500px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 1
      example-one
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 2
      example-two
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(:steps=1 enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 3
      example-three
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(style="margin-top: -10px;") Exercise 4
      example-four
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Exercise 5
      example-five
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=3 enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -0px; margin-bottom: 40px").center Spontaneous end stimulated emission
      div(class="container" style="display: flex; flex-direction: row; margin-top: 20px;")
        div(style= "display: flex; flex-direction: row; height: 100%;  width: 100%; justify-content: center;")
          div(v-if="step >= 1" style= "width: 485px;")
            h5(style="margin: 0;").center Absorption
            .center
              img(src='./assets/lasers1.png' width="100%")
          div(v-if="step >= 2" style= "width: 400px;")
            h5(style="margin: 0;").center Spontaneous emission
            .center
              img(src='./assets/lasers2.png' width="100%")
      div(v-if="step >= 3" style= "display: flex; flex-direction: row; justify-content: center; width: 100%; margin-top: 20px;")
        div(style= "width: 500px;")
          h5(style="margin: 0;").center Stimulated emission
          .center
            img(src='./assets/lasers3.png' width="100%")


    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous end stimulated emission
      h5.center Laser
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">L</span>igth
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">A</span>mplification by
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">S</span>timulated
      p(style="margin: 0 0 -15PX 400px;") <span style="font-size: 60px; color: blue;">E</span>mission of
      p(style="margin: 0 0 -0PX 400px;") <span style="font-size: 60px; color: blue;">R</span>adiation

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous end stimulated emission
      h5.center Lasers
      .center
        img(src='./assets/lasers4.png' width="700px" style="margin-top: -30px; margin-right: 0px;")
        img(src='./assets/lasers5.png' width="250px" style="margin-top: -30px; margin-left: 50px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous end stimulated emission
      h5.center Laser cooling
      .center
        img(src='./assets/lasers7.png' width="400px" style="margin-top: -30px;")
        img(src='./assets/lasers6.png' width="400px" style="margin-top: -30px; margin-left: 100px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p.center Física Moderna<br> Edición revisada<br> Norma Esthela Flores, Jorge Enrique Figueroa.<br>Pearsons-Prentice Hall
        p.center Physics for Scientist and Engineers with Modern Physics <br>9th Edition<br> Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com



</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Nuclear Physics',
    description: 'Nuclear physics',
    path: 'nuclear-physics'
  },
  components: {
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
    'interference': require('./components/interference'),
    'interference2': require('./components/interference2'),
    'sodoku': require('./components/Sodoku')
  },

  data: function () {
    return {
      theme: 'Optics'
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#Relativity {
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

  #table-wrapper {
    display: flex;
    padding-left:0px;
    align-content: center;

  }
  #desc {
    width: 30em;
    border-collapse: collapse;
    border-bottom: 1px solid black;

    & th {
      background-color: whitesmoke;
      border-bottom: 1px solid black;
      padding: 1em;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
    }

    & td {
      text-align:left;
      padding-left: 4em;
      font-size: 15px;
      height: 15px;
    }

    & caption {
      font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      font-style: italic;
    }
  }

  .eg-slide-content {
    width: 30em;
    max-width: 95%;
    margin: 0 100 0 50;
  }

  .pressureFormula{
      height: 5em;
  }
}
</style>
