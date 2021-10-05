<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h3 Mecatronica Computacional
        img(src='./assets/U.svg')
        h4 Atomic Force Microscope system
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Temas</sup>
      h6(style="margin-top: -20px;")
        | Atomic Force Microscope
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Measurement Principle</b><br><span style="font-size: 0.8em;">Cantilever Deflection</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Optical Measurement of Cantilever Deflection</b><br><span style="font-size: 0.8em;">Optics for Tip Deflection Measurement</span>
        //- eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        //-   p(v-if="step >= 1")
        //-     <b>Control of the Scanning Motion</b>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h4(style="margin: -20px 0 0 0; ").center Microscopes
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The surface topology can be probed with atomic level accuracy.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") One device achieving such probing is the <b>scanning probe microscope (SPM)</b> which can measure individual atom sizes, 0.25 nm and 80 mm length approximately.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") There are two popularly used types of SPM in imaging surface features such as shape and dimension; <b>atomic force microscope (AFM)</b> and <b>scanning tunneling microscope (STM)</b>.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;").center <b>Scanning tunneling microscope</b>
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") STM utilizes the current flow occurring due to the quantum tunneling phenomenon between a probe tip and the surface of a sample to be measured.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Since this can be used only for dielectric materials, it has limited applications, which is a drawback of this device.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h4(style="margin: -20px 0 0 0; ").center Microscopes
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;").center <b>Atomic force microscope</b>
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") AFM can be used for nonconducting material as well, because its measuring concept employs the interactive atomic force between a probe tip and a sample surface.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Besides, the AFM can work well in fluid if tip material and sample preparation are carefully chosen, and thus is successfully utilized for bioresearch appli- cations.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h5(style="margin-top: 50px;").center Microscopes
      .center
        img(src='./assets/table01.png' height="360px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h5(style="margin-top: -0px;").center Measurement Principle
      p(style="padding: 1px; margin: 0 0 20px 0px; line-height: 2em;") AFM was introduced by Binnig, Quate, and Gerber in 1986 as a topographic imaging method for conductors and insulators.
      p(style="padding: 1px; margin:  0 0 20px 0px; line-height: 2em;") The AFM employs the essence of typical optomechatronic characteristics in that it fully utilizes the fusion of optical and mechatronic technologies.
      p(style="padding: 1px; margin:  0 0 20px 0px; line-height: 2em;") In principle, the AFM operates measuring the atomic force, attractive or repulsive, induced between a deformable mechanical element (probe) and the surface of a sample.
      p(style="padding: 1px; margin:  0 0 20px 0px; line-height: 2em;") The measurement is made optically to detect such a force.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h5(style="margin-top: -0px;").center Measurement Principle
      .center
        img(src='./assets/fig7-23.png' height="350px")
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") The system possesses a probe, a laser source, and the optic elements; a detector, and a scanning system. The scanning system consists of a z direction scanner and a two-dimensional (2D) x-y scanner.
      p(style="padding: 1px; margin:  50px 0 20px 0px; line-height: 1.5em;") The scanning system moves the probe in a raster scan fashion by dragging its tip over the sample surface of interest, for the measurement needs to be made over a certain region of a sample.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h5(style="margin-top: -0px;").center Measurement Principle
      .center
        img(src='./assets/fig7-23.png' height="250px")
      p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") Basically, the AFM is a system positioning an atomically sharp conducting tip in a direction vertical to the surface of an object (sample) using a piezoelectric actuator in response to the induced atomic force.
      p(style="padding: 1px; margin:  0px 0 20px 0px; line-height: 1.5em;") A certain amount of force is induced, when the gap between the probe tip and the sample surface is kept within a specified region.
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") The atomic force between the atoms is called Van der Waals force. This force causes the deflection of the cantilever whose displacement is dependent upon the gap between the tip and sample surface.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h5(style="margin-top: -0px;").center Measurement Principle
      h6.center Van der Waals force 
      .center
        img(src='./assets/fig7-24.png' height="400px")
      .center
        img(src='./assets/eq7-16.png' height="80px")
      p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") A = 4.6625x10<sup>-27</sup> kg m<sup>3</sup> / sec<sup>2</sup>  and B = 1.133x10<sup>-79</sup> kg m<sup>9</sup> / sec<sup>2</sup>, z is the separation distance between the tip. The force is ranged within 0.01 to 10 nN
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Contact mode 
      .center
        img(src='./assets/fig7-25.png' height="350px")
      p(style="padding: 1px; margin:  30px 0 20px 0px; line-height: 1.5em;") In the contact mode, it is appropriate to consider only the cantilever motion and it is desirable to control its motion by actuating the z-axis piezostage in a vertical direction.
      p(style="padding: 1px; margin:  0px 0 20px 0px; line-height: 1.5em;") The control objective is to keep the inter atomic force F<sub>vd</sub> at a desired value, i.e., the separation distance at a constant value which is nearly zero. <br> To achieve this, it is necessary to construct a force displacement control based on the PSD signal.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Contact mode 
      .center
        img(src='./assets/fig7-25.png' height="350px")
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") Its control configuration which is composed of a controller, a piezodriver, and a piezoelectric actuator and AFM system.
       p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") Since the stiffness of the z scanner supporting the cantilever is much higher than that of the cantilever itself, we will neglect the scanner dynamics. Therefore, it will suffice to consider only the motion of the cantilever.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Contact mode 
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") The equation governing its motion is given by
      .center
        img(src='./assets/eq7-18.png' height="70px")
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") where z is the vertical displacement of the cantilever from an arbitrary position, F<sub>vd</sub> is the Van der Waals force, F<sub>p</sub> is the control force to drive the piezo stage, and m, b and k<sub>eff</sub> the mass, the damping coefficient, and the effective stiffness of the cantilever, respectively.
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") When the sample artifact to be scanned has a varying height z<sub>a</sub> along the scan directions, the control scheme is aimed at maintaining the desired gap (force) at a nearly-zero value zd between the probe tip and the surface of the artifact (contact mode) by controlling the displacement of the cantilever.
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") When the separation becomes larger than that of the contact mode, an operation mode of AFM called the “noncontact AFM” is utilized.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode 
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") In non contact AFM mode, the spacing between the tip and the sample is on the order of 1/10,1/100A ̊, and the interatomic force becomes attractive. The order of the attractive force is very small, generally about 0.1 , 0.01 nN, and therefore measurement is not easy, furthermore, it is susceptible to noise.
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") This method is suitable for measuring soft and fragile samples, since the tip does not touch them. 
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") To overcome the difficulty in the measurement of a small force, a vibrating cantilever technique is adopted in which an AFM cantilever is vibrated near the surface of a sample. This method has two basic modes; amplitude modulation (AM) and frequency modulation (FM). 
      p(style="padding: 1px; margin: 0px 0 20px 0px; line-height: 1.5em;") In AM mode, the actuator is driven by fixed amplitude at a fixed frequency. When the AFM tip approaches the sample surface, interaction causes a change in both amplitude and the phase of the cantilever. These changes are used as a feedback signal to drive the actuator. <br>In FM mode, however, the cantilever mounted in the z-axis piezoactuator is kept oscillating with a constant amplitude at its resonant frequency by an oscillator control amplifier.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode   
      .center
        img(src='./assets/fig7-26.png' height="400px")
      p As in the contact case, we will assume that the cantilever vibrating in the air can be modeled as a damped harmonic oscillator.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode      
      p The equation of motion of the vibrating cantilever is governed by
      .center
        img(src='./assets/eq7-19.png' height="70px")
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") where b is the damping coefficient, F<sub>o</sub> is the magnitude of actuating force, ω<sub>o</sub> is the operating frequency, which is slightly off from the natural frequency, ω<sub>n</sub> : In this forced oscillation, the steady state motion of the cantilever is described by
      .center
        img(src='./assets/eq7-20.png' height="40px")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode      
      p The vibration amplitude and phase at steady state are given by
      .center
        img(src='./assets/eq7-21-1.png' height="70px")
      .center
        img(src='./assets/eq7-21-2.png' height="60px")
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") where the natural frequency ω<sub>n</sub> and damping ratio, ξ, respectively, are given by
      .center
        img(src='./assets/eq7-22.png' height="80px")
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") If the tip approaches the surface.<br> In this case, the stiffness k<sub>eff</sub> varies with the separation z, because the Van der Waal’s force changes with z. Under this consideration, k<sub>eff</sub> of the cantilever varies according to
      .center
        img(src='./assets/eq7-23.png' height="70px")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode      
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") where k'<sub>eff</sub> is a new stiffness of the cantilever. Therefore, natural frequency, ω<sub>n</sub>, becomes a new frequency ω'<sub>n</sub>.
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") The motion of the cantilever becomes changed 
      .center
        img(src='./assets/eq7-24.png' height="50px" style="margin: 30px 0 0px 0px;")
      .center
        img(src='./assets/fig7-26.png' height="300px" style="margin: 50px 0 0px 0px;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode      
      .center
        img(src='./assets/fig7-27.png' height="300px" style="margin: 30px 0 0px 0px;")
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") Controlling the oscillation frequency, the cantilever here is kept at its resonant frequency ω<sub>n</sub> or slightly off the resonance.<br> Any frequency change is detected due to tip-to-sample distance variation the controller will try to bring the frequency back to its original value.
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") Here, the amplifier keeps the vibration amplitude at a constant level. Any change in oscillation frequency is detected by an analog FM demodulator circuit or any other methods such as frequency counter, tunable analogue FM detector, and gated timer.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Measurement Principle: Non contact AFM mode      
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") These methods are found to normally measure a frequency shift of 0.01 Hz at 50 kHz with 75 Hz bandwidth.
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") This noncontact method can only be applied in certain cases, since the force is very small as compared with that of the contact mode. Therefore, the measurement is more susceptible to noise such as (1) thermal expansion of the cantilever and (2) oscillation control amplifier.
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") <b>Intermittent contact mode</b> is in principle similar to noncontacting mode.<br> The difference is that in this mode the probe approaches closer to the sample surface during vibration.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Cantilever deflection    
      .center
        img(src='./assets/fig7-28.png' height="450px" style="margin: 50px 0 0px 0px;") 
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") Its dimension is dependent on application but ranges in length from 100 to 200 mm, width 10 to 40 mm and thickness 0.3 to 2 mm.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Cantilever deflection     
      .center
        img(src='./assets/fig7-29.png' height="250px" style="margin: 20px 0 0px 0px;") 
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") Let us consider the deflection of a cantilever of rectangular shape and its measurement.<br> The cantilever reflects the incident laser beam toward a position-sensitive detector (PSD). Displacement of the laser spot can be derived from the moment-curvature relation of a beam.
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") The differential equation governing the beam displacement
      .center
        img(src='./assets/eq7-25-0.png' height="100px" style="margin: 0px 0 0px 0px;") 
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Cantilever deflection     
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") Mb is the bending moment 
      .center
        img(src='./assets/eq7-25.png' height="30px" style="margin: 0px 0 0px 0px;") 
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") the deflection and deflection angle at the tip in this case can be determined respectively by
      .center
        img(src='./assets/eq7-26.png' height="60px" style="margin: 0px 0 0px 0px;") 
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;") With this PSD signal corresponding to the cantilever deflection can be easily determined by
      .center
        img(src='./assets/eq7-27.png' height="50px" style="margin: 0px 0 0px 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Optical measurement of cantilever deflection 
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig7-30.png' height="400px" style="margin: 0px 0 0px 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic systems: Atomic Force Microscope</sup>
      h6(style="margin-top: -0px;").center Optical measurement of cantilever deflection 
      p(style="padding: 1px; margin: 10px 0 20px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig7-31.png' height="400px" style="margin: 0px 0 0px 0px;")




    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Tylor and Francias
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Atomic Force Microscope',
    description: 'Atomic force microscope system',
    path: 'mecatronica-computacional-AFM'
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
    'example-twelve': require('./components/ExampleTwelve'),
    'example-thirteen': require('./components/ExampleThirteen'),
    'quantity-of-heat': require('./components/QuantityOfHeat')
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
</style>
