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
      h2 Nuclear physics
      .center
        img(src='./assets/nuclear01.png' width="400px")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Begining of nuclear physics
      p In 1896 French physicist <b>Antoine-Henri Becquerel</b> (1852–1908) discovered radioactivity in uranium compounds.
      p <b>Ernest Rutherford</b> showed that the radiation is of three types—<b>alpha</b>, <b>beta</b>, and <b>gamma rays</b>
      p Later experiments showed that <b>alpha rays</b> are <b>helium nuclei</b>, <b>beta rays</b> are <b>electrons</b>, and <b>gamma rays</b> are <b>high-energy photons</b>.
      .center
        img(src='./assets/nuclear10.png' width="350px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Nuclear physics
      p In 1911, <b>Rutherford</b>, <b>Hans Geiger</b>, and <b>Ernest Marsden</b> performed the alpha-particle scattering experiments.
        .center
          img(src='./assets/atomo07.png' width="600px")
      p These experiments established that the nucleus of an atom can be modeled as a point mass and point charge and that <b>most of the atomic mass is contained in the nucleus</b>.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Nuclear physics
      p Subsequent studies revealed the presence of a new type of force, the short-range nuclear force, which is predominant at particle separation distances less than approximately 10<sup>-14</sup> m and is zero for large distances.
      .center
        img(src='./assets/forces.png' width="540px")
      p 1. Nuclear forces are effective only over short intervals (short distances).<br> 2. Nuclear forces are independent of charge. <br>3. Nuclear forces are the strongest known in nature.<br>4. Nuclear forces are quickly saturated by the surrounding nucleons.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Nuclei
      p All nuclei are composed of two types of particles: <b>protons</b> and <b>neutrons</b>. The only exception is the ordinary hydrogen nucleus, which is a single proton.
      p We describe the atomic nucleus by the number of protons and neutrons it contains, using the following quantities:
      p The <b>atomic number <span style="font-family: Times; font-style: italic;">Z</span></b>, which equals the number of protons in the nucleus (sometimes called the charge number)
      p The <b>neutron number <span style="font-family: Times; font-style: italic;">N</span></b>, which equals the number of neutrons in the nucleus
      p The <b>mass number <span style="font-family: Times; font-style: italic;">A</span> = <span style="font-family: Times; font-style: italic;">Z</span> + <span style="font-family: Times; font-style: italic;">N</span></b>, which equals the number of nucleons (neutrons plus protons) in the nucleus
      p A nuclide is a specific combination of atomic number and mass number that represents a nucleus. In representing nuclides, it is convenient to use the symbol <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -22px 0px  10px"><b>A</b></sup><sub style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -22px 0px  10px"><b>Z</b></sub> <span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>X</b></span>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Nuclei
      p In representing nuclides, it is convenient to use the symbol <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -22px 0px  10px"><b>A</b></sup><sub style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -22px 0px  10px"><b>Z</b></sub> <span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>X</b></span>
      p To convey the numbers of protons and neutrons, where <span style="font-family: Times; font-style: italic;"><b>X</b></span> represents the chemical symbol of the element.
      p For example, <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -32px 0px  10px"><b>56</b></sup><sub style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -22px 0px  10px"><b>26</b></sub> <span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>Fe</b></span> (iron) has mass number 56 and atomic number 26; therefore, it contains 26 protons and 30 neutrons.
      p Therefore, <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -32px 0px  10px"><b>56</b></sup><sub style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -22px 0px  10px"><b>26</b></sub> <span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>Fe</b></span> is the same as <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -20px 0px  10px"><b>56</b></sup><span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>Fe</b></span> and can also be expressed as “<b>iron-56</b>” or “<b>Fe-56</b>.”
      p The nuclei of all atoms of a particular element contain the same number of protons but often contain different numbers of neutrons.
      p Nuclei related in this way are called <b>isotopes</b>. The isotopes of an element have the same <span style="font-family: Times; font-style: italic;"><b>Z</b></span> value but different <span style="font-family: Times; font-style: italic;"><b>A</b></span> and <span style="font-family: Times; font-style: italic;"><b>N</b></span> values.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center  Some particles's mass
      .center
        img(src='./assets/nuclear02.png' width="700px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Nuclear structure
      .center
        img(src='./assets/nuclear05.png' width="250px")
      .center
        img(src='./assets/nuclear04.png' width="200px")
      p.center <span style="font-family: Times; font-style: italic; font-size: 40px;">a</span><span style="font-family: Times; font-style: normal; font-size: 40px;"> = 1.2 fm</span>
      .center
        img(src='./assets/nuclear03.png' width="250px")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Binding energy
      p The total mass of a nucleus is less than the sum of the masses of its individual nucleons.
      p Therefore, the rest energy of the bound system (the nucleus) is less than the combined rest energy of the separated nucleons.
      p This difference in energy is called the binding energy of the nucleus and can be interpreted as the energy that must be added to a nucleus to break it apart into its components.
      p Conservation of energy and the Einstein mass–energy equivalence relationship show that the binding energy Eb in MeV of any nucleus is
      .center
        img(src='./assets/nuclear07.png' width="600px")
      p where M(H) is the atomic mass of the neutral hydrogen atom, mn is the mass of the neutron, M(AZ X) represents the atomic mass of an atom of the isotope AZ X, and the masses are all in atomic mass units.

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

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p Bohr applied Planck’s ideas of quantized energy levels to Rutherford’s orbiting atomic electrons
      .center
        //- img(src='./assets/atomo10.png' width="400px")
      .center
        img(src='./assets/nuclear06.png' width="250px")
        img(src='./assets/nuclear08.png' width="250px")
        img(src='./assets/nuclear09.png' width="250px")
        img(src='./assets/nuclear11.png' width="250px")
        img(src='./assets/nuclear12.png' width="250px")
        img(src='./assets/nuclear13.png' width="250px")
        img(src='./assets/nuclear14.png' width="250px")
        img(src='./assets/nuclear15.png' width="250px")
        img(src='./assets/nuclear16.png' width="250px")
        img(src='./assets/nuclear17.png' width="250px")
        img(src='./assets/nuclear18.png' width="250px")
        img(src='./assets/nuclear19.png' width="250px")
        img(src='./assets/nuclear20.png' width="250px")
        img(src='./assets/nuclear21.png' width="250px")
        img(src='./assets/nuclear22.png' width="250px")
        img(src='./assets/nuclear23.png' width="250px")
        img(src='./assets/nuclear24.png' width="250px")
        img(src='./assets/nuclear25.png' width="250px")
        //- img(src='./assets/nuclear26.png' width="250px")
        img(src='./assets/nuclear27.png' width="250px")
        img(src='./assets/nuclear28.png' width="250px")
        img(src='./assets/nuclear29.png' width="250px")
        img(src='./assets/nuclear30.png' width="250px")
        img(src='./assets/nuclear31.png' width="250px")
        img(src='./assets/nuclear10.png' width="250px")
        img(src='./assets/nuclear32.png' width="250px")
        img(src='./assets/nuclear33.png' width="250px")
        img(src='./assets/nuclear34.png' width="250px")
        img(src='./assets/nuclear35.png' width="250px")
        img(src='./assets/nuclear36.png' width="250px")
        //- img(src='./assets/nuclear37.png' width="250px")
        img(src='./assets/nuclear38.png' width="250px")
        img(src='./assets/nuclear39.png' width="250px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-bottom: 60px;").center Bohr's model of the Hydrogen atom
      p(style="margin-top:20px;") 1. Physical components: The electron moves in circular orbits around the proton under the influence of the electric force of attraction.
      p 2. Behavior of the components: <br>(a) Only certain electron orbits are stable.<br>(b) The atom emits radiation when the electron makes a transition from a more energetic initial stationary state to a lower-energy stationary state.<br>(c) The allowed orbits are those for which the electron’s orbital angular momentum about the nucleus is quantized and equal to an integral multiple of
      .center
        //- img(src='./assets/atomo14.png' width="350px")
      p where <span style="font-family: Times; font-style: italic; font-weight: bold;">m<sub>e</sub></span> is the electron mass, <span style="font-family: Times; font-style: italic; font-weight: bold;">v</span> is the electron’s speed in its orbit, <span style="font-family: Times; font-style: italic; font-weight: bold;">r</span> is the orbital radius, and
          |
          //- img(src='./assets/atomo13.png' width="120px" style="margin: 0px 0 -3px 20px;")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:0px;").center Bohr's model of the Hydrogen atom
      p(style="margin-top:20px;")
      p With potential energy given by
        |
        //- img(src='./assets/atomo15.png' width="300px" style="margin: 0px 10px -11px 10px;")
        | total energy is
      .center
        //- img(src='./assets/atomo16.png' width="400px")
      p electrical force on electron must equal it's mass times the centripetal acceleration
        |
        //- img(src='./assets/atomo18.png' width="130px"  style="margin: 0px 10px -11px 10px;")
        | that is
      .center
        //- img(src='./assets/atomo19.png' width="200px"  style="margin: 0px 100px -40px 10px;")
        | then
        |
        //- img(src='./assets/atomo20.png' width="200px" style="margin: 0px 10px -40px 100px;")
      p and kinetic energy becomes
      .center
        //- img(src='./assets/atomo21.png' width="300px" style="margin: -20px 10px 0px 10px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p And total energy becomes
      .center
        //- img(src='./assets/atomo22.png' width="200px" style="margin-top: -30px;")
      p(style="margin-top: -10px;") Now solving <span style="font-family: Times; font-style: italic;">v</span> from
      .center(style="margin-top: -30px;")
        //- img(src='./assets/atomo14.png' width="350px" style="margin: 0px 100px -20px 10px;")
        | with
        |
        //- img(src='./assets/atomo20.png' width="100px" style="margin: 0px 10px -20px 100px;")
      p(style="margin-top: 20px;") we have
      .center
        //- img(src='./assets/atomo24.png' width="250px" style="margin-top: -30px;")
      p(style="margin-top: -0px;") and the orbital radius is given by
      .center
        //- img(src='./assets/atomo25.png' width="300px")


    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top:-20px;").center Bohr's model of the Hydrogen atom
      p From the orbilat radius
      .center
        //- img(src='./assets/atomo25.png' width="350px")
      p we can join all constant in a new one, called the <b>Bohr radius</b> (<span style="font-family: Times; font-style: italic;">a<sub style="font-size: 20px;">0</sub></span>)
      .center
        //- img(src='./assets/atomo26.png' width="350px")
      p and revisiting the orbital radius we have
      .center
        //- img(src='./assets/atomo27.png' width="600px")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      //- img(src='./assets/atomo10.png' width="180px" style=" position: absolute; right: 100px; top: 10px;")
      h4(style="margin-top: -20px;").center Bohr's model of the Hydrogen atom
      p Using the Bohr radius
        |
        //- img(src='./assets/atomo27.png' width="450px" style="margin: 0 10px -5px 10px;")
        | in the relation
        //- img(src='./assets/atomo22.png' width="100px" style="margin: 0 10px -20px 10px;" )
        | energy becomes
      .center
        //- img(src='./assets/atomo28.png' width="500px" style="margin-top: -10px;" )
      p(style="margin-top: -10px;") evaluating constans we have
      .center
        //- img(src='./assets/atomo29.png' width="500px" style="margin-top: -10px;" )
      p For emision frequency we have
      .center
        //- img(src='./assets/atomo31.png' width="500px" style="margin-top: -10px;" )

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Bohr's model of the Hydrogen atom
      p(style="margin: -20px 100px 10px 10px;") Changing for wavelength
      .center
        //- img(src='./assets/atomo32.png' width="300px" style="margin: 0px 100px -30px 10px;")
        | or
        //- img(src='./assets/atomo33.png' width="250px" style="margin: 0px 10px -30px 100px;")
      p(style=" position: absolute; top: 280px; right: 100px;").center Rydberg constant:<br> R<sub>H</sub> = 1.0973732x10<sup>7</sup> m<sup>-1</sup>
      .center
        //- img(src='./assets/atomo30.png' width="300px" style="margin: 50px 10px 0px 50px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Ionized atoms
      p Some ionized atoms can be modeled with the model for the hydrogen atom
      p Z is the atomic number, and is added to the equations as
      //- .center
      //-   img(src='./assets/atomo34.png' width="250px")
      //- .center
      //-   img(src='./assets/atomo35.png' width="500px")



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
              //- img(src='./assets/lasers1.png' width="100%")
          div(v-if="step >= 2" style= "width: 400px;")
            h5(style="margin: 0;").center Spontaneous emission
            .center
              //- img(src='./assets/lasers2.png' width="100%")
      div(v-if="step >= 3" style= "display: flex; flex-direction: row; justify-content: center; width: 100%; margin-top: 20px;")
        div(style= "width: 500px;")
          h5(style="margin: 0;").center Stimulated emission
          .center
            //- img(src='./assets/lasers3.png' width="100%")


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
        //- img(src='./assets/lasers4.png' width="700px" style="margin-top: -30px; margin-right: 0px;")
        //- img(src='./assets/lasers5.png' width="250px" style="margin-top: -30px; margin-left: 50px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="margin-top: -20px;").center Sponteneous end stimulated emission
      h5.center Laser cooling
      .center
        //- img(src='./assets/lasers7.png' width="400px" style="margin-top: -30px;")
        //- img(src='./assets/lasers6.png' width="400px" style="margin-top: -30px; margin-left: 100px;")

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
