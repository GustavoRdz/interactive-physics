<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        h4 Introduction
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -20px;")
        | Optomechatronics
      .center
        //- eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        //-   p(v-if="step >= 1")
        //-     <b>Historical Background of Optomechatronic Technology</b><br><span style="font-size: 0.8em;"></span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Optomechatronics: Definition and Fundamental Concept</b><br><span style="font-size: 0.8em;"></span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Practical Optomechatronic Systems</b><br><span style="font-size: 0.8em;">Basic Roles of Optical and Mechatronic Technologies. Basic Roles of Optical Technology. Basic Roles of Mechatronic Elements. Characteristics of Optomechatronic Technology.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Fundamental Functions of Optomechatronic Systems</b><br><span style="font-size: 0.8em;"></span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Fundamental Functions</b><br><span style="font-size: 0.8em;">Illumination Control. Sensing. Actuating. Optical Scanning. Visual/Optical Information Feedback Control. Data Storage. Data Transmission/Switching. Data Display. Optical Property Variation. Sensory Feedback-Based Optical System Control. Optical Pattern Recognition. Remote Operation via Optical Data Transmission. Material Processing.</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Definition and Fundamental Concept 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The technology associated with the developments of machines, processes and systems has continuously evolved to enhance their performance and to create new value and new function.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Mechatronic technology integrated by mechanical, electronic/electrical, and computer technologies has been certainly taking an important role for such evolution, as can be seen from the historical time line of technology evolution.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") To make them evolve further towards systems of precision, reliability, and intelligence, however, optics and optical engineering technology needed to be integrated into mechatronics, thus compensating for some limitations in the existing functionalities and creating new ones. 
      .center
        img(src='./assets/fig1-5.png' height="200px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Practical Optomechatronic Systems 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Examples of optomechatronic systems are found in many engineering fields such as control and instrumentation, inspection and test, optical, manufacturing, consumer and industrial electronics, MEMS, automotive, and biomedical applications. 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Cameras and motors are typical products which are operated by optomechatronic components. 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") For example, a smart camera is equipped with an aperture control and a focusing adjustment together with an illuminometer to perform well regardless of the ambient brightness change. 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") With this system configuration, new functionalities are created for the enhancement of the performance modern cameras. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h6(style="margin: -20px 0 0 0; ").center Practical Optomechatronic Systems 
      .center
        img(src='./assets/fig1-6.png' height="800px").rotateimg90

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: 50px;").center Basic Roles of Optical and Mechatronic Technologies
      p(style="padding: 15px; margin: 1px 1px -100px 1px; line-height: 1.5em;")  There are a number of functions that can be carried out by optical technology. The major functions and roles of optical technology can be categorized into several functional domains
      .center
        img(src='./assets/fig1-7.png' height="900px" style="margin: -100px 0 0 0;").rotateimg90


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Roles of Mechatronic Elements
      p(style="padding: 1px; margin: -20px 0 0px 0px; line-height: 1.5em;") The major functions and roles of mechatronic elements in optomechatronic systems can be categorized into the following five functional domains: 
      ul
        li sensing. <span style="font-size: 14px">Transducer technology used for sensing nowadays enjoys the integrated nature of mechatronics.</span>
        li actuation. <span style="font-size: 14px">The drivers and actuators produce a physical effect such as a mechanical movement or a change of property and condition</span>
        li information feedback .<span style="font-size: 14px">One of the unique functions of mechatronics is to feedback information for certain objectives</span>
        li motion or state control. <span style="font-size: 14px">The control of motion or state of systems is a basic functionality that can be provided by mechatronic</span>
        li embedded intelligence with microprocessor. <span style="font-size: 14px">A mechatronic system implemented with a microprocessor provides many important functions, for example, the stored or programmed control, the digital signal processing, and the design flexibility for the whole system.</span>
    

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") Characteristic points: 
      ol
        li they possess one or more functionalities to carry out certain given tasks;
        li to produce such functionalities, several basic functional modules are required to be appropriately combined; 
        li to achieve combining functions in a desired manner, a certain law of signal (energy) transformation and manipulation needs to be utilized that converts or manipulates one signal to another in a desired form, using the basic mechanical, optical, or electrical one;
        li optomechatronic systems are hierarchically composed of subsystems, which are then composed of units or components. In other words, elements, components, units, or subsystems are integrated to form an optomechatronic system.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
      .center
        img(src='./assets/fig1-8.png' height="500px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
      h6(style="margin-top: -0px;").center Integration type
      .center
        img(src='./assets/fig1-9.png' height="500px" style="margin: -0px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Characteristics of Optomechatronic Technology 
      h6(style="margin-top: -0px;").center Interaction between three different dimensional worlds
      .center
        img(src='./assets/fig1-10.png' height="300px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") One important factor we need to consider in dealing with micro-systems is the so-called “size or scale effect” due to which the influence of the same physical phenomena becomes variable with the length scale of a system.
      //- p To take some examples: (1) Inertial (volume) force that influences a macro-scale system becomes less significant in micro-systems. Instead, surface effects (force) become rather dominant. This is because in general the inertial force is proportional to volume (L<sup>3</sup>), whereas the surface force is in proportion to surface area (L 2). (2) In optical and mechatronic interaction, deflections on the order of wavelengths of light do matter in a microsystem but not in a macrosystem. (3) Atomic attractive and repulsive forces become significant in microsystems. (4) The smaller geometrical size material gets stronger.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Fundamental Functions of Optomechatronic Systems
      .center
        img(src='./assets/fig1-11.png' height="400px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") These enabling technologies are integrated to form five engines that drive the technology.<br> These include: (1) actuator module, (2) sensor module, (3) control module, (4) signal/information processing module, and (5) decision making module.<br> It is noted that the integration of these gives a specified functionality with certain characteristics.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Fundamental Functions
      p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") A number of fundamental functions can be generated by the fusion of optical mechatronic elements.
      p These include <br>(1) illumination control,&emsp;&emsp;&emsp;(2) sensing,&emsp;&emsp;&emsp;(3) actuating,<br> (4) optical scanning,&emsp;&emsp;&emsp;&emsp;(5) visual/optical information feedback control,<br> (6) data storage,&emsp;&emsp;&emsp;&emsp;&emsp;(7) data transmission/switching,<br> (8) data display,&emsp;&emsp;&emsp;&emsp;&emsp;(9) optical property variation,<br> (10) sensory feedback based optical system control,<br> (11) optical pattern recognition,&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(12) remote monitoring/control,<br> and (13) material processing
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Fundamental Functions
      .center
        img(src='./assets/fig1-12.png' height="1000px" style="margin: -200px 0 0 0;").rotateimg90
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Fundamental Functions
      .center
        img(src='./assets/fig1-12b.png' height="1000px" style="margin: -200px 0 0 0;").rotateimg90


    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Taylor and Francis
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, gustavo@gusbits.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optomechatronics',
    description: 'Optomechatronics introduction',
    path: 'Introduction'
  },
  components: {
    // 'example-one': require('./components/ExampleOne'),
    // 'example-two': require('./components/ExampleTwo'),
    // 'example-three': require('./components/ExampleThree'),
    // 'example-four': require('./components/ExampleFour'),
    // 'example-five': require('./components/ExampleFive'),
    // 'example-six': require('./components/ExampleSix'),
    // 'example-seven': require('./components/ExampleSeven'),
    // 'example-eight': require('./components/ExampleEight'),
    // 'example-nine': require('./components/ExampleNine'),
    // 'example-ten': require('./components/ExampleTen'),
    // 'example-eleven': require('./components/ExampleEleven'),
    // 'example-twelve': require('./components/ExampleTwelve'),
    // 'example-thirteen': require('./components/ExampleThirteen'),
    // 'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      theme: 'Optics'
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
@import 'node_modules/eagle.js/dist/themes/gourmet/gourmet';
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

.rotateimg90 {
  -webkit-transform:rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
