<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      //- img(src='./assets/Logo-FIME copy.svg' height='820px' style="margin: -10 0 50px 0;")
      .center.frontpage
        h2 Electrostatic fields
        img(src='./assets/frontImage.svg')
        // img(src='./assets/U.svg')

        h4 Electric forces and fields
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Electric Fields</b><br><span style="font-size: 0.8em;">Properties of Electric Charges, Coulomb’s Law, Electric Field of a Continuous Charge Distribution, Electric Field Lines, Motion of a Charged Particle in a Uniform Electric Field.</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Gauss’s Law</b><br><span style="font-size: 0.8em;">Electric Flux, Gauss’s Law, Application of Gauss’s Law to Various Charge Distributions.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Electric Potential</b><br><span style="font-size: 0.8em;">Electric Potential and Potential Difference, Potential Difference in a Uniform Electric Field, Electric Potential and Potential Energy Due to Point Charges, Electric Potential Due to Continuous Charge Distributions, Electric Potential Due to a Charged Conductor.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutTop')
          p(v-if="step >= 1")
            <b>Capacitance and Dielectrics</b><br><span style="font-size: 0.8em;">Definition of Capacitance, Calculating Capacitance, Combinations of Capacitors, Energy Stored in a Charged Capacitor, Capacitors with Dielectrics, Electric Dipole in an Electric Field.</span>

    slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Electric Charges
      p.center Charges of the same sign repel one another and charges with opposite signs attract one another
      .center
        img(height="400px" src='./assets/fig23-1.png')

    slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Electric Charges
      p.center Electric charge is always conserved
      .center
        img(height="400px" src='./assets/fig23-2.png')

    slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Charging by induction
      h6.center Electrical conductors
      p.center Are materials in which some of the electrons are free electrons that are not bound to atoms and can move relatively freely through the material.
      .center
        img(height="200px" src='./assets/fig23-3a.png')
        img(height="200px" src='./assets/fig23-3b.png')
        img(height="200px" src='./assets/fig23-3c.png')
        img(height="200px" src='./assets/fig23-3d.png')
        img(height="200px" src='./assets/fig23-3e.png')

    slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Charging by induction
      h6.center Electrical insulators
      p.center Are materials in which all electrons are bound to atoms and cannot move freely through the material.
      .center
        img(height="400px" src='./assets/fig23-4.png')
        
    slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Coulomb's Law
      p.center The magnitude of the electric force between two point charges is given by Coulomb’s law.
      .center
        img(height="70px" src='./assets/eq23-1.png' style="margin: 0 0 20px 0;")
      .center
        img(height="40px" src='./assets/eq23-2.png' style="margin: 0 0 20px 0;")
      .center
        img(height="70px" src='./assets/eq23-3.png' style="margin: 0 0 20px 0;")
      .center
        img(height="40px" src='./assets/eq23-4.png' style="margin: 0 0 20px 0;")
      .center
        img(height="40px" src='./assets/eq23-5.png')

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 1
      example-one
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;").center Vector form of Coulomb's law
      p(style="margin: 0px 20px 0 0;")
      .center
        img(src='./assets/eq23-6.png' height="90px" style="margin: 0 0 -50px 0;")
      p with more than one charge
      .center
        img(src='./assets/eq23-6A.png' height="60px" style="margin: 0 0 30px 0;")
      .center
        img(src='./assets/fig23-6.png' height="300px")
     
    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 2
      example-two
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right


    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 3
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") The electric field
      p An electric field is said to exist in the region of space around a charged object, the <strong>source charge</strong>.<br> When another charged object (<strong>the test charge</strong>) enters this electric field, an electric force acts on it.
      .center
        img(src='./assets/fig23-10.png' height="200px")
      p We define the electric field vector <strong>E</strong> at a point in space as the electric force <strong>F</strong> acting on a positive test charge q<sub>0</sub> placed at that point divided by the test charge
      .center
        img(src='./assets/eq23-7.png' height="100px")
    

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;") Electric field due to a finite number of point charges
      p To calculate the electric field at a point P due to a group of point charges, we first calculate the electric field vectors at P individually using
      .center
        img(src='./assets/eq23-9.png' height="90px")
      p and then add them vectorially. Therefore, the electric field at point P due to a group of source charges can be expressed as the vector sum
      .center
        img(src='./assets/eq23-10.png' height="100px")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 4
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;") Electric Field of a Continuous Charge Distribution
      p(style="margin: -0px 0 0 0;") That is, the system of closely spaced charges is equivalent to a total charge that is continuously distributed along some line, over some surface, or throughout some volume.
      .center
        img(src='./assets/fig23-14.png' height="200px")
      p(style="margin: -0px 0 0 0;") The electric field at <em>P</em> due to one charge element carrying charge &Delta;<em>q</em> is
      .center
        img(src='./assets/eq23-10B.png' height="70px")
      p(style="margin: -0px 0 0 0;") The total electric field at P due to all elements in the charge distribution is approximately 
      .center
        img(src='./assets/eq23-10C.png' height="70px")

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: 10px;").center Electric Field of a Continuous Charge Distribution
      p(style="margin: 0px 20px 0 0;") Because the charge distribution is modeled as continuous, the total field at <em>P</em> in the limit &Delta;q<sub>i</sub> &rightarrow; 0 is 
      .center
        img(src='./assets/eq23-11.png' height="100px")
      p(style="margin: 0px 20px 0 0;") where the integration is over the entire charge distribution.

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;").center Electric Field of a Continuous Charge Distribution
      p When performing such calculations, it is convenient to use the concept of a charge density along with the following notations:
      .center
        p volume charge density: &emsp; 
          img(src='./assets/eq23-11B.png' height="70px"  style="margin: 0px 0 -20px 0px;")
      .center
        p surface charge density: &emsp; 
          img(src='./assets/eq23-11C.png' height="70px"  style="margin: 0 0  -30px 0;")
      .center
        p linear charge density: &emsp; 
          img(src='./assets/eq23-11D.png' height="70px"  style="margin: 0 0  -30px 0;")
      p And the amount of charge for each case is
      .center
        img(src='./assets/eq23-11E.png' height="60px"  style="margin: -20px 0 0 0px;")

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 5
      example-five
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 6
      example-six
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;").center Electric field lines
      p(style="margin-top: -30px;") Electric field lines, that are related to the electric field in a region of space in the following manner:
      p • The electric field vector is tangent to the electric field line at each point. The line has a direction, indicated by an arrowhead, that is the same as that of the electric field vector. The direction of the line is that of the force on a positive test charge placed in the field.
      p • The number of lines per unit area through a surface perpendicular to the lines is proportional to the magnitude of the electric field in that region. Therefore, the field lines are close together where the electric field is strong and far apart where the field is weak.
      .center
        img(src='./assets/fig23-18.png' height="200px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Inertia moments
    //-   p(style="margin-top: -30px;").center
    //-   .center
    //-     img(src='./assets/inertiaMomentsTable.png')
    //-   p.center Parallel axis theorem
    //-   .center
    //-     img(src='./assets/inertiaParallelAxisTheorem.png' height="70px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center The simple pendulum
    //-   .center
    //-     img(src='./assets/simplePendulum.png' height="350px")
    //-   .center
    //-     img(src='./assets/simplePendulumW.png' height="100px")
    //-   .center
    //-     img(src='./assets/simplePendulumF.png' height="100px")
    //-   .center
    //-     img(src='./assets/simplePendulumT.png' height="100px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center The physical pendulum
    //-   p.center We can derivre formulas for velocity
    //-   .center
    //-     img(src='./assets/physicalPendulum.png' height="350px")
    //-   .center
    //-     img(src='./assets/physicalPendulumW.png' height="100px" style="margin-right: 40px;")
    //-     img(src='./assets/physicalPendulumT.png' height="100px")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 11
    //-   example-fourteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 12
    //-   example-seventeen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 13
    //-   example-eighteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Damped oscillations
    //-   .center
    //-     img(src='./assets/dampedOscillationsX.png')
    //-   .center
    //-     img(src='./assets/dampedOscGraph.png' height="300px" style="margin-right: 50px;")
    //-     img(src='./assets/struts.png' height="300px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Forced oscillations
    //-   .center
    //-     img(src='./assets/forcedOscA.png' height="100px")
    //-   .center
    //-     img(src='./assets/forcedOscillationsGraph.png' height="500px")

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p University Physics 13th Edition. Searzs and Zemanzky
        p Physics for scientist and engineers 8th Edition. Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Electrostatic fields',
    description: 'Electrostatic fields',
    path: 'electrostatic-fields'
  },
  components: {
    // 'pressure-machine': require('./PressureMachine'),
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
    'example-fourteen': require('./components/ExampleFourteen'),
    'example-fifteen': require('./components/ExampleFifteen'),
    'example-sixteen': require('./components/ExampleSixteen'),
    'example-seventeen': require('./components/ExampleSeventeen'),
    'example-eighteen': require('./components/ExampleEighteen'),
    'example-nineteen': require('./components/ExampleNineteen'),
    'example-twenty': require('./components/ExampleTwenty'),
    'simple-pendulum': require('./components/SimplePendulum'),
    'spring-mass': require('./components/SpringMass'),
    'displacement-plot': require('./components/DisplacementPlot'),
    'torsion-pendulum': require('./components/TorsionPendulum')
  },
  data: function () {
    return {
      tiempo: '',
      theme: 'Electrostatic fields'
    }
  },
  computed: {
    time () {
      setInterval(this.updateTime, 100)
    },
    base () {
      let d = 'M10,0 10,140 500,140'
      for (var i = 1; i < 16; i++) {
        d = d + `M0,${i * 10} 10,${(i - 1) * 10}`
      }
      for (i = 1; i < 50; i++) {
        d = d + `M${i * 10},150 ${(i + 1) * 10},140`
      }
      return d
    },
    // var timer = setTimeInterval(resorte),
    resorte () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let points = 102
      for (var i = 0; i < ranges.length; i++) {
        let d1 = 'M10,90 30,90 '
        let delta = ranges[i] / (points + 0)
        let period = ranges[i] / 7
        for (var j = 0; j < points - 1; j++) {
          d1 = d1 + `${delta * j + 30},${90 + 20 * Math.sin(2 * Math.PI * delta * j / period)} `
        }
        // console.log('d1', d1)
        d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
        d = d + d1
      }
     // console.log('d: ', d)

      return d
    },
    blockPositions () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(250 + 150 * Math.cos(angle))};`
      }
      console.log(positions)
      return positions
    }
  },
  methods: {
    updateTime () {
      var cd = new Date()
      this.tiempo = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      console.log('tiempoo', this.tiempo)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#OscillatoryMotion {
  .frontpage {
    img {
      height: 10em;
    }
    img.control-schema {
      width: 10em;
      height: 5em;
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
    font-size: 10px;
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


</style>
