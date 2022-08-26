<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h2(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Optomechatronics
        h2(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Optomecatrónica
        img(src='./assets/U.svg')
        h4(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Fundamentals of optics
        h4(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Fundamentos de la óptica.
        h4 
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") Fundamentals of optics
      h6(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") Fundamentos de óptica
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          div
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Reflection and Refraction</b>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Reflexión y Refracción</b>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Lenses:</b><span style="font-size: 0.7em;"> Refraction at a Spherical Surface</span>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Lentes:</b><span style="font-size: 0.7em;"> refracción en una superficie esférica</span>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Multiple Lenses and System Matrices:</b><span style="font-size: 0.7em;"> The System Matrices, Computer Ray Tracing</span>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Lentes Múltiples y Matrices de Sistema:</b><span style="font-size: 0.7em;"> Las Matrices de Sistema, Trazado de Rayos por Computadora</span>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Aperture Stops and Pupils</b>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Stops de apertura y pupilas</b>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Aberrations:</b><span style="font-size: 0.7em;"> Spherical Aberration, Coma Aberration, Field Curvature, Astigmatism, Distortion</span>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Aberraciones:</b><span style="font-size: 0.7em;">  aberración esférica, aberración de coma, curvatura de campo, astigmatismo, distorsión</span>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Polarization</b>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Polarización</b>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Coherence</b>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Coherencia</b>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Interference:</b><span style="font-size: 0.8em;"> Young's Experiment, Fabry-Perot Interferometer, Michelson Interferometer</span>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Interferencia:</b><span style="font-size: 0.8em;">  Experimento de Young, interferómetro de Fabry-Perot, interferómetro de Michelson</span>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Diffraction:</b><span style="font-size: 0.8em;"> Double Slits, Multiple Slits, Circular Aperture, Diffraction Grating</span>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Difracción:</b><span style="font-size: 0.8em;">  rendijas dobles, rendijas múltiples, apertura circular, rejilla de difracción</span>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Fiber optics transmission</b>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Transmisión de Fibra Óptica</b>
            p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") <b>Gaussian Beam Optics</b>
            p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") <b>Óptica del haz gaussiano</b>
        .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
          span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
        .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
          span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Electromagnetic spectrum
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Espectro electromagnético
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Optics concerns with the radiation within this range visible to the human eye but often extends to the region of spectrum near visible region.<br> Visible radiation ranges from <span style="font-family: Times New Roman;">0.35</span> to <span style="font-family: Times New Roman;">0.75 μm</span>, depending upon types of color of the light their wave length varies. The ultraviolet region extends from <span style="font-family: Times New Roman;">0.01</span>  to <span style="font-family: Times New Roman;">0.35 μm</span> , while infrared radiation extends from the lower end of the visible spectrum to nearly <span style="font-family: Times New Roman;">300 μm</span> .
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La óptica se ocupa de la radiación dentro de este rango visible para el ojo humano, pero a menudo se extiende a la región del espectro cercana a la región visible. <br<La radiación visible varía de <span style="font-family: Times New Roman;">0.35</span> a <span style="font-family: Times New Roman;">0.75 μm</span>, dependiendo de los tipos de color de la luz, su longitud de onda varía. <br>La región ultravioleta se extiende desde <span style="font-family: Times New Roman;">0.01</span>  a <span style="font-family: Times New Roman;">0.35 μm</span> , mientras que la radiación infrarroja se extiende desde el extremo inferior del espectro visible hasta casi <span style="font-family: Times New Roman;">300 μm</span> .
      .center
        img(src='./assets/fig2-1.png' width="300px")
        img(src='./assets/fig2-2.png' width="300px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Reflection and Refraction
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Reflexión y Refracción
      p(v-if = '!isSpanish' style="margin: 30px 0px 30px 0px; line-height: 1.5em;") A light wave transmitting through a lens or a prism is typical of wave refraction. A light wave reflecting from the surface of a mirror or a coated reflective surface is typical of wave reflection.
      p(v-if = 'isSpanish' style="margin: 30px 0px 30px 0px; line-height: 1.5em;") Una onda de luz que se transmite a través de una lente o un prisma es típica de la refracción de ondas. Una onda de luz que se refleja en la superficie de un espejo o una superficie reflectante recubierta es típica de la reflexión de ondas. Para comprender estos fenómenos repasaremos 
      .center
        img(src='./assets/fig2-3.png' width="400px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h6(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Reflection and Refraction
      h6(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Reflexión y Refracción
      h6(v-if = '!isSpanish' style="margin: 20px 0px 0px 0px;").center Wavefront and Rays
      h6(v-if = 'isSpanish' style="margin: 20px 0px 0px 0px;").center Frente de onda y rayos
      .center
        img(src='./assets/fig2-4.png' height="500px")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") Reflection: &emsp;&emsp;
        img(src='./assets/eq2-1.png' height="70px" style="margin: 0px 0 -30px 0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") Reflexión: &emsp;&emsp;
        img(src='./assets/eq2-1.png' height="70px" style="margin: 0px 0 -30px 0px;")
      p(v-if = '!isSpanish' style="margin: 20px 0px 0px 0px;") Refraction: &emsp;&emsp;
        img(src='./assets/eq2-2.png' height="70px" style="margin: 0px 0 -30px 0px;")
      p(v-if = 'isSpanish' style="margin: 20px 0px 0px 0px;") Refracción: &emsp;&emsp;
        img(src='./assets/eq2-2.png' height="70px" style="margin: 0px 0 -30px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Reflection and Refraction
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Reflexión y Refracción
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;")  Total internal reflection
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;")  Reflexión total interna 
      .center
        img(src='./assets/fig2-5.png' height="300px" style="margin: -0px 0 0 0;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Critical angle: 
        img(src='./assets/eq2-3.png' height="70px" style="margin: 0px 0 -30px 0;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Ángulo crítico: 
        img(src='./assets/eq2-3.png' height="70px" style="margin: 0px 0 -30px 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Refraction
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Refracción
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;")  Refractive index
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;")  Índice de refracción
      p(style="padding: 1px; margin: -20px 0 0px 0px; line-height: 1.5em;") 
      p.center 
        img(src='./assets/table2-1.png' width="550px" style="margin: 0px 0 -30px 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
  
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Lenses
      h6.center image formation
      p.center 
        img(src='./assets/fig2-6.png' width="100%" style="margin: 0px 0 -30px 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Refraction at a spherical surface 
      .center
        img(src='./assets/fig2-7.png' width="500px" style="margin: -0px 0 0 0;")
      .center
        img(src='./assets/eq2-8.png' width="300px" style="margin: -0px 0 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Spherical lens
      .center
        img(src='./assets/fig2-8.png' width="500px" style="margin: -0px 0 0 0;")
      .center
        img(src='./assets/eq2-9.png' width="300px" style="margin: -0px 0 0 0;")
      .center
        img(src='./assets/eq2-10.png' width="300px" style="margin: -0px 0 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Spherical lens
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Lente esférica
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Combinig the former equations we have
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Combinando las ecuaciones anteriores tenemos
      .center
        img(src='./assets/eq2-12.png' height="70px" style="margin: -0px 0 0 0;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") When a source is located at infinity, we can see that the image distance becomes the focal length f. In this case, we have
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Cuando una fuente está ubicada en el infinito, podemos ver que la distancia de la imagen se convierte en la distancia focal f. En este caso, tenemos
      .center
        img(src='./assets/eq2-13B.png' height="70px" style="margin: -0px 0 0 0;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") This equation is referred to as the <strong>lens maker’s formula</strong>. When a surrounding medium is air, <span style="font-family: TimesNew Roman">n<sub>1</sub> &approx; 1</span>, the lens formula becomes &rArr;
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Esta ecuación se conoce como la <strong>fórmula del fabricante de lentes</strong>. Cuando un medio circundante es aire, <span style="font-family: TimesNew Roman">n<sub>1</sub> &approx; 1</span>, la fórmula de la lente se convierte en &rArr;
      .center
        img(src='./assets/eq2-13.png' height="90px" style="margin: 0 50px -35px 0;")
        | &rArr;
        img(src='./assets/eq2-14.png' height="90px" style="margin: 0 0 -35px 50px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Thin lenses - Spherical lenses
      h6.center Gauss lens formula
      .center
        img(src='./assets/eq2-14.png' width="150px" style="margin: -50px 0 50px 0px;")
      h6.center Focal point F
      .center
        img(src='./assets/fig2-9.png' width="500px" style="margin: -50px 0 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Thin lenses - Spherical lenses
      .center
        img(src='./assets/eq2-14.png' width="150px" style="margin: -0px 0 0px 0px;")
      p The effect of location of point light source.
      .center
        img(src='./assets/fig2-10.png' width="400px" style="margin: -10px 0 10px 10px;")
        img(src='./assets/gaussGraph2.png' width="435px" style="margin: -10px 0 10px 10px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Ray trace image formation
      p 
      .center
        img(src='./assets/fig2-12A.png' width="400px" style="margin: -20px 0 10px 0;")
      .center
        img(src='./assets/fig2-12B.png' width="400px" style="margin: -10px 0 0 0;")
      h6.center Magnification
      .center
        img(src='./assets/eq2-16.png' width="200px" style="margin: -40px 0 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Example
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Ejemplo
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Let us take some examples for thin lenses. When an object is located 6 cm in front of a convex lens having focal length 10 cm, the location and magnitude of the image to be formed can be calculated by using
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Tomemos algunos ejemplos de lentes delgadas. Cuando un objeto se ubica a 6 cm frente a una lente convexa que tiene una distancia focal de 10 cm, la ubicación y la magnitud de la imagen que se forma se pueden calcular usando
      .center
        img(src='./assets/eq2-14.png' height="70px" style="margin: -20px 30px 0 0;")
        img(src='./assets/eq2-16.png' height="70px" style="margin: -20px 0px 0 30px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") The image  location is obtained by (convex lens)
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") La ubicación de la imagen se obtiene por (lente convexa)
      .center
        img(src='./assets/eq2-16B.png' height="70px" style="margin: -20px 0 0 0;")
        img(src='./assets/eq2-16C.png' height="70px" style="margin: -20px 0 0 30px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") (concave lens)
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") (lente cóncava)
      .center
        img(src='./assets/eq2-16D.png' height="70px" style="margin: -20px 0 0 0;")
        img(src='./assets/eq2-16E.png' height="70px" style="margin: -20px 0 0 30px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Image characteristics
      p 
      .center
        img(src='./assets/table2-2.png' width="500px" style="margin: -30px 0px 0 0;")
      .center
        img(src='./assets/fig2-13A.png' width="500px" style="margin: 30px 0px 0 40px;")
        img(src='./assets/eq2-16F.png' width="250px" style="margin: 0px 0px 70px 10px;")
        img(src='./assets/fig2-13B.png' width="500px" style="margin: -7px 220px 0 0;")
        img(src='./assets/fig2-13C.png' width="500px" style="margin: -30px 0px 0 40px;")
        img(src='./assets/eq2-16G.png' width="250px" style="margin: 0px 0px 50px 10px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple lenses
      p 
      .center
        img(src='./assets/fig2-14.png' width="450px" style="margin: -30px 0px 0 0;")
      .center
        img(src='./assets/eq2-17.png' width="140px" style="margin: 30px 20px -30px 0px;")
        | &rArr;
        img(src='./assets/eq2-18.png' width="160px" style="margin: 20px 20px -20px 20px;")
        | &rArr;
        img(src='./assets/eq2-19.png' width="140px" style="margin: 20px 0px -30px 20px;")
      .center
        img(src='./assets/eq2-20.png' width="180px" style="margin: 100px 30px -30px 0px;")
        | &rArr;
        img(src='./assets/eq2-21.png' width="180px" style="margin: 100px 0px -30px 30px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Multiple lenses
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Múltiples lentes
      .center
        img(src='./assets/fig2-14.png' width="500px" style="margin: 0px 0px 0 0;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Consider a two convex lens compound system has <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>1</sub> = 20 cm</span>, <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>2</sub> = 20 cm</span>, and their separation <span style="font-family: Times New Roman; font-style: italic;">d</span><span style="font-family: Times New Roman;"> = 30 cm</span>. We wish to compute the image of an object located <span style="font-family: Times New Roman;">30 cm</span> from the first lens <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>1</sub></span>.<br>Applying the lens formula <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>1</sub></span>
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Considere un sistema compuesto de dos lentes convexas que tiene <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>1</sub> = 20 cm</span>, <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>2</sub> = 20 cm</span> y su separación <span style="font-family: Times New Roman; font-style: italic;">d</span><span style="font-family: Times New Roman;"> = 30 cm</span>. Deseamos calcular la imagen de un objeto ubicado a <span style="font-family: Times New Roman;">30 cm</span> de la primera lente <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>1</sub></span>. <br>Aplicando la fórmula de la lente <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>1</sub></span>
      .center
        img(src='./assets/eq2-21B.png' width="180px" style="margin: -30px 20px -30px 0px;")
        | &rArr;
        img(src='./assets/eq2-21C.png' width="180px" style="margin: -30px 20px -30px 20px;")
        | &rArr;
      .center
        img(src='./assets/eq2-21D.png' width="200px" style="margin: 30px 20px -30px 20px;")
        | &rArr;
        img(src='./assets/eq2-21E.png' width="180px" style="margin: 20px 0px -30px 20px;")
      .center
        img(src='./assets/eq2-21F.png' width="270px" style="margin: 40px 30px -30px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple Lenses and System Matrices
      p 
      .center
        img(src='./assets/fig2-15A.png' width="500px" style="margin: -10px 0px 0 0;")
        img(src='./assets/fig2-15B.png' width="500px" style="margin: 0px 0px 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Multiple Lenses and System Matrices
      p 
      .center
        img(src='./assets/fig2-16A.png' width="200px" style="margin: -30px 0px 0 0;")
        img(src='./assets/fig2-16B.png' width="200px" style="margin: -30px 0px 0 0;")
        img(src='./assets/fig2-16C.png' width="240px" style="margin: -30px 0px 0 0;")
      .center
        img(src='./assets/eq2-22.png' width="150px" style="margin: 50px 20px -30px 0;")
        | and
        img(src='./assets/eq2-23.png' width="150px" style="margin: 50px 20px -30px 20px;")
        | then
        img(src='./assets/eq2-23B.png' width="120px" style="margin: 50px 0px -20px 20px;")
      .center
        img(src='./assets/eq2-24.png' width="150px" style="margin: 70px 20px -20px 0;")
        | and
        img(src='./assets/eq2-25.png' width="150px" style="margin: 70px 20px -30px 20px;")
        | and
        img(src='./assets/eq2-26.png' width="150px" style="margin: 70px 0px -30px 20px;")
      .center
        img(src='./assets/eq2-27.png' width="170px" style="margin: 70px 20px -20px 0;")
        | or
        img(src='./assets/eq2-28.png' width="140px" style="margin: 70px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Multiple Lenses and System Matrices
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Lentes Múltiples y Matrices de Sistema
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Example
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Ejemplo
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.4em;") Let us take an example of determining the equivalent focal length of a two lens system. The front convex lens has focal length of <span style="font-family: Times New Roman;">50 mm</span>, and the rear concave lens a focal length of <span style="font-family: Times New Roman;">25 mm</span>. The lenses are separated in distance by <span style="font-family: Times New Roman;">30 mm</span> and then moved to another position, <span style="font-family: Times New Roman;">40 mm</span>. To determine the equivalent focal length, we use,
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.4em;") Tomemos un ejemplo de cómo determinar la distancia focal equivalente de un sistema de dos lentes. La lente frontal convexa tiene una distancia focal de <span style="font-family: Times New Roman;">50 mm</span> y la lente trasera cóncava una distancia focal de <span style="font-family: Times New Roman;">25 mm</span>. Las lentes están separadas en distancia por <span style="font-family: Times New Roman;">30 mm</span> y luego se mueven a otra posición, <span style="font-family: Times New Roman;">40 mm</span>. Para determinar la distancia focal equivalente, usamos,
      .center
        img(src='./assets/eq2-29B.png' width="400px" style="margin: 30px 0px 0 0;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.4em;") for <span style="font-family: Times New Roman; font-style: italic;">d</span><span style="font-family: Times New Roman; "> = 40 mm</span> the equivalent focal length becomes <span style="font-family: Times New Roman;">83.3333 mm</span>
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.4em;") para <span style="font-family: Times New Roman; font-style: italic;">d</span><span style="font-family: Times New Roman; "> = 40 mm</span> la distancia focal equivalente se convierte en <span style="font-family: Times New Roman;">83.3333 mm</span>
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Multiple Lenses and System Matrices
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Lentes Múltiples y Matrices de Sistema
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Example
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Ejemplo
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") We consider another case when two positive lenses, <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>1</sub></span> and <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>2</sub></span>, having an identical focal length, <span style="font-family: Times New Roman; font-style: italic;">f</span> are separated from each other with distance case (1) <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>4</sub></span> and pulled away from each other with distance case (2) <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>2</sub></span>: <br>We compute the <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>eq</sub></span>, or the approximate power of the two cases and determine which one is the wider-angle lens.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Consideramos otro caso cuando dos lentes positivas, <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>1</sub></span> y <span style="font-family: Times New Roman; font-style: italic;">L</span><span style="font-family: Times New Roman;"><sub>2</sub></span>, que tienen una distancia focal idéntica, <span style="font-family: Times New Roman; font-style: italic;">f</span>, se separan entre sí con el caso de distancia (1) <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>4</sub></span> y se separan entre sí con el caso de distancia (2) <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>2</sub></span>: <br>Calculamos el <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>eq</sub></span>, o la potencia aproximada de los dos casos y determinamos cuál es la lente de ángulo más amplio.
      
      .center
        | if
        img(src='./assets/eq2-29C.png' width="80px" style="margin: 50px 20px -30px 20px;")
        | then
        img(src='./assets/eq2-29D.png' width="250px" style="margin: 50px 20px -30px 20px;")
      .center
        | if
        img(src='./assets/eq2-29E.png' width="80px" style="margin: 70px 20px -20px 20px;")
        | then
        img(src='./assets/eq2-29F.png' width="250px" style="margin: 70px 20px -20px 20px;")
      p(v-if = '!isSpanish' style="margin: 20px 0px 20px 0px; line-height: 1.2em;") Because case (1) has shorter focal length, the system separated <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>4</sub></span> apart is the wider-angle lens.
      p(v-if = 'isSpanish' style="margin: 20px 0px 20px 0px; line-height: 1.2em;") Debido a que el caso (1) tiene una distancia focal más corta, el sistema separado <span style="font-family: Times New Roman; font-style: italic;">f</span><span style="font-family: Times New Roman;"><sub>4</sub></span> es la lente de gran angular.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  The system matrices
      h6 Translation matrix
      .center
        img(src='./assets/fig2-17A.png' width="400px" style="margin: 20px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-30.png' width="350px" style="margin: 30px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  The system matrices
      h6 Refraction matrix: Convex surface 
      .center
        img(src='./assets/fig2-17B.png' width="400px" style="margin: -30px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-31.png' width="90px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-32.png' width="110px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-33.png' width="120px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-34.png' width="220px" style="margin: 30px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-35.png' width="300px" style="margin: 30px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  The system matrices
      h6 Refraction matrix: Concave surface 
      .center
        img(src='./assets/fig2-17C.png' width="400px" style="margin: -30px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-31.png' width="90px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-35B.png' width="110px" style="margin: 50px 20px -30px 20px;")
        img(src='./assets/eq2-35C.png' width="120px" style="margin: 50px 20px -30px 20px;")
      .center
        img(src='./assets/eq2-36.png' width="300px" style="margin: 50px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Computer ray tracing
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Beam expanding via three-lens configuration
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.5em;") Expansión del haz a través de la configuración de tres lentes
      .center
        img(src='./assets/fig2-18.png' width="500px" style="margin: 10px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Aperture stops and pupils
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Stop de apertura y pupilas 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The aperture stop is defined to be the aperture, which limits the maximum amount of light that can be collected. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") El <strong>tope de apertura</strong> se define como la apertura, que limita la cantidad máxima de luz que se puede admitir el sistema. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") In other words, it provides a measure of the light collecting ability. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") En otras palabras, proporciona una medida de la capacidad de captación de luz. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The pupil determines whether a given particular ray will pass through the entire optical system.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La <strong>pupila</strong> determina si un rayo en particular pasará a través de todo el sistema óptico. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The entrance pupil is the image of the aperture stop as seen from object space. In other words, it is the image of the stop through which we look into the entire optical system from the object. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La pupila de entrada es la imagen del tope de apertura visto desde el espacio del objeto. En otras palabras, es la imagen de la parada a través de la cual miramos todo el sistema óptico del objeto. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The location and size of these three openings, the aperture stop, the entrance, and exit pupils have significant effect on the light collecting and also on certain types of aberrations. Therefore, it is often necessary to shift the stop along the optical axis in order to improve performance of optical systems.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La ubicación y el tamaño de estas tres aberturas, el tope de apertura, las pupilas de entrada y salida tienen un efecto significativo en la captación de luz y también en ciertos tipos de aberraciones. Por lo tanto, a menudo es necesario desplazar el tope a lo largo del eje óptico para mejorar el rendimiento de los sistemas ópticos. 
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Aperture stops and pupils 
      .center
        img(src='./assets/fig2-19A.png' width="450px" style="margin: 20px 20px -30px 20px;")
        img(src='./assets/fig2-19B.png' width="450px" style="margin: 40px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Aperture stops and pupils
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Stop de apertura y pupilas 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The amount of light admitted through the aperture is very useful in defining two useful parameters, <strong>f-number f/#</strong>, and numerical aperture, <strong>NA</strong>. If aperture diameter is denoted by D and focal length of an imaging lens is denoted by <span style="font-family: Times New Roman; font-style: italic;">f</span>, then the light power per unit area (irradiance) at the image plane is proportional to
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La cantidad de luz admitida a través de la apertura es muy útil para definir dos parámetros útiles, el <strong>número-f f/#</strong> y la apertura numérica, <strong>NA</strong> . Si el diámetro de apertura se denota por <strong>D</strong> y la distancia focal de una lente de imagen se denota por <span style="font-family: Times New Roman; font-style: italic;">f</span>, entonces la potencia de la luz por unidad de área (irradiancia) en el plano de la imagen es proporcional a 
      .center
        img(src='./assets/eq2-36B.png' width="100px" style="margin: 0px 20px -0px 20px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") since the image area is proportional to <span style="font-family: Times New Roman; font-style: italic;">f</span>. The quantity f/D is called focal ratio or relative aperture and defined by f-number and thus
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") ya que el área de la imagen es proporcional a <span style="font-family: Times New Roman; font-style: italic;">f</span>. La cantidad <span style="font-family: Times New Roman; font-style: italic;">f/D</span> se denomina relación focal o apertura relativa y se define por el número <span style="font-family: Times New Roman; font-style: italic;">f</span> y, por lo tanto, 
      .center
        img(src='./assets/eq2-36C.png' width="100px" style="margin: 0px 20px -0px 20px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The numerical aperture (NA) is defined by
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La apertura numérica (NA) está definida por
      .center
        img(src='./assets/eq2-36D.png' width="150px" style="margin: 0px 20px -0px 20px;")
      .center
        img(src='./assets/eq2-36E.png' width="205px" style="margin: 40px 20px -30px 20px;")
        img(src='./assets/eq2-36F.png' width="150px" style="margin: 40px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 0px 0px;").center Aberration
      h5(v-if = 'isSpanish' style="margin: -20px 0px 0px 0px;").center Aberración 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") An exact ray tracing in actual case would cause departures from the predictions with the paraxial description. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Un trazado de rayos exacto en el caso real provocaría desviaciones de las predicciones con la descripción paraxial. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") For example, it will no longer be generally true that all the rays leaving a point object will meet an image, as we shall see later. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Por ejemplo, ya no será generalmente cierto que todos los rayos que salen de un objeto puntual encontrarán una imagen, como veremos más adelante. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Such deviations from ideal Gaussian behavior are referred to as aberrations.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Estas desviaciones del comportamiento gaussiano ideal se denominan aberraciones.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") For monochromatic aberrations, there are
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Para las aberraciones monocromáticas,
      ul(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em; padding: 10px; margin: -10px 1px 10px 100px; line-height: 1.0em;")
        li spherical aberration,
        li coma, 
        li curvature of field,
        li astigmatism,
        li and distortion
      ul(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em; padding: 10px; margin: -10px 1px 10px 100px; line-height: 1.0em;")
        li aberración esférica,
        li coma, 
        li curvatura de campo,
        li astigmatismo,
        li distorsiónand
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Spherical aberration, astigmatism, and coma make the image unclear, while field curvature and distortion deform the image. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La aberración esférica, el astigmatismo y el coma hacen que la imagen no sea clara, mientras que la curvatura del campo y la distorsión deforman la imagen.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Spherical Aberration
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Aberración esférica
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Spherical aberration is one of the most common aberrations in lenses. If all rays emanating from a point source S, not exclusive of rays reflected by a larger lens aperture are assumed to impinge on a convex lens, the image formed can be represented as the point P due to paraxial rays and the point P' due to nonparaxial rays.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La aberración esférica es una de las aberraciones más comunes en las lentes. Si se supone que todos los rayos que emanan de una fuente puntual S, sin excluir los rayos reflejados por una lente de mayor apertura, inciden en una lente convexa, la imagen formada puede representarse como el punto P debido a los rayos paraxiales y el punto P' debido a rayos no paraxiales.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The axial distance between points P and P', is known as the longitudinal spherical aberration. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La distancia axial entre los puntos P y P', se conoce como aberración esférica longitudinal.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The height above the axis PT is called the transverse spherical aberration.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La altura sobre el eje PT se denomina aberración esférica transversal.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The amount of spherical aberration for fixed focal length and aperture is influenced by both the object distance and the lens shape. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La cantidad de aberración esférica para la distancia focal y la apertura fijas está influenciada tanto por la distancia del objeto como por la forma de la lente.
      .center
        img(src='./assets/fig2-20.png' width="450px" style="margin: 30px 20px -0px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Coma Aberration
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Aberración de coma
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Coma refers to the variation of magnification with aperture. When a bundle of rays is incident obliquely on a lens.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Coma se refiere a la variación del aumento con la apertura. Cuando un haz de rayos incide oblicuamente sobre una lente.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The rays passing through the outer zones of the lens form a larger image than the rays through the center portion. The coma of the lens, <span style="font-family: Times New Roman; font-style: italic;">h</span><span style="font-family: Times New Roman;"><sub>com</sub></span>, is defined by 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Los rayos que atraviesan las zonas exteriores de la lente forman una imagen más grande que los rayos que atraviesan la parte central. La coma de la lente, <span style="font-family: Times New Roman; font-style: italic;">h</span><span style="font-family: Times New Roman;"><sub>com</sub></span>, está definida por
      .center
        img(src='./assets/eq2-36G.png' height="50px" style="margin: -20px 20px 10px 0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") where <span style="font-family: Times New Roman; font-style: italic;">h</span><span style="font-family: Times New Roman;"><sub>p</sub></span> The image has a form which is something like the shape of a comet with its tail, therefore this aberration is named comet. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") donde <span style="font-family: Times New Roman; font-style: italic;">h</span><span style="font-family: Times New Roman;"><sub>p</sub></span> La imagen tiene una forma que es algo así como la forma de un cometa con su cola, por lo tanto, esta aberración se llama cometa.
      .center
        img(src='./assets/fig2-21.png' width="500px" style="margin: 0px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Field curvature
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Curvatura de campo
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Curvature of field is the aberration of a lens that cannot transform a plane object into a precisely plane image.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La curvatura de campo es la aberración de una lente que no puede transformar un objeto plano en una imagen exactamente plana.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") In other words, object points lying in a plane are imaged onto a curved surface when field curvature is present. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") En otras palabras, los puntos del objeto que se encuentran en un plano se reflejan en una superficie curva cuando la curvatura del campo está presente.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") This curvature of field is known as Petzval field curvature. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Esta curvatura de campo se conoce como curvatura de campo de Petzval.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") This surface depends on the focal length of the individual lens components and on their refractive indices, as we might expect. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Esta superficie depende de la distancia focal de los componentes individuales de la lente y de sus índices de refracción, como cabría esperar.
      .center
        img(src='./assets/fig2-22.png' width="500px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Astigmatism
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Astigmatismo
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Astigmatism occurs when an object point lies far distant from the optical axis and, therefore, the incident cone of rays strikes the lens asymmetrically. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") El astigmatismo ocurre cuando el punto de un objeto se encuentra lejos del eje óptico y, por lo tanto, el cono de rayos incidente incide en la lente de forma asimétrica. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") This aberration occurs mainly because off-axis object rays are in different axial sections of the lens, resulting in two slightly different focuses; tangential (meridional) and sagittal (radial). 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Esta aberración ocurre principalmente porque los rayos del objeto fuera del eje se encuentran en diferentes secciones axiales de la lente, lo que da como resultado dos focos ligeramente diferentes; tangencial (meridional) y sagital (radial).
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") When an incident cone of rays strikes obliquely, there occur two distinct focal lengths: one in the meridional plane and the other in the sagittial plane. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Cuando un cono de rayos incidente incide oblicuamente, se producen dos distancias focales distintas: una en el plano meridional y la otra en el plano sagital. 
      .center
        img(src='./assets/fig2-23.png' width="100%" style="margin: 0px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Distortion
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Distorsión
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Distortion occurs because focal length and lateral magnification more or less vary with different distance from the optical axis. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La distorsión se produce porque la distancia focal y el aumento lateral varían más o menos con las diferentes distancias desde el eje óptico.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") The lateral magnification M<sub>t</sub> may be a function of the distance from the optical axis. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") El aumento lateral Mt puede ser una función de la distancia desde el eje óptico. 
      .center
        img(src='./assets/eq2-37.png' width="300px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-24.png' width="500px" style="margin: 20px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-25.png' width="500px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Distortion
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Distorsión
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Distortion with a stop
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Distorsión con stop
      .center
        img(src='./assets/fig2-26.png' width="100%" style="margin: 10px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-26B.png' width="100%" style="margin: 10px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -20px 0px 20px 0px;").center Polarization
      h5(v-if = 'isSpanish' style="margin: -20px 0px 20px 0px;").center Polarización
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") A light wave is oscillating as a transverse electromagnetic wave.
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Una onda de luz oscila como una onda electromagnética transversal.
      p(v-if = '!isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") Polarization of the wave is a process of characterizing the orientation of such wave oscillation in both time and space. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 20px 0px; line-height: 1.2em;") La polarización de la onda es un proceso de caracterización de la orientación de dicha oscilación de onda tanto en el tiempo como en el espacio.
      .center
        img(src='./assets/fig2-27.png' width="100%" style="margin: 0px 0px 0px 0px;")
      p(v-if = '!isSpanish' style="margin: 20px 0px 20px 0px; line-height: 1.2em;") Maximum amount of polarization at
      p(v-if = 'isSpanish' style="margin: 20px 0px 20px 0px; line-height: 1.2em;") Cantidad máxima de polarización en
      .center
        img(src='./assets/eq2-38.png' width="180px" style="margin: 0px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Polarization
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Different states of polarization
      .center
        img(src='./assets/fig2-28A.png' height="250px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-28B.png' height="238px" style="margin: -20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Polarization
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Different states of polarization
      .center
        img(src='./assets/fig2-29A.png' height="250px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/fig2-29B.png' height="250px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-29C.png' height="250px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-40.png' height="50px" style="margin: 0px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Interference occurs when two or more monochromatic light sources are superimposed. 
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") To consider a more general case of interference, let us consider two point sources S1 and S2 emitting monochromatic waves E1 and E2 in a homogeneous medium. Let the two waves be represented by
      .center
        img(src='./assets/fig2-30A.png' height="200px" style="margin: 30px 20px -50px 0px;")
        img(src='./assets/eq2-41.png' height="100px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 40px 1px -40px 200px; line-height: 1.3em;") the superposition
      .center
        img(src='./assets/eq2-41B.png' height="50px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: -10px 1px -40px 200px; line-height: 1.3em;") the irradiance
      .center
        img(src='./assets/eq2-42.png' height="60px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-43.png' height="50px" style="margin: 0px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Taking the time average of the quantity in the bracket, we have
      .center
        img(src='./assets/eq2-44.png' height="50px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -40px 200px; line-height: 1.3em;") with
      .center
        img(src='./assets/eq2-44B.png' height="30px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-44C.png' height="30px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-44D.png' height="30px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -40px 200px; line-height: 1.3em;") we have
      .center
        img(src='./assets/eq2-44E.png' height="70px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -10px 200px; line-height: 1.3em;") where
      .center
        img(src='./assets/eq2-45.png' height="50px" style="margin: 0px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -10px 200px; line-height: 1.3em;") then
      .center
        img(src='./assets/eq2-46.png' height="50px" style="margin: 0px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The above equation implies that the irradiance at an arbitrary point P in space is characterized by the path difference term, and the initial phase difference &phi;<sub>1</sub> - &phi;<sub>2</sub>.
      .center
        img(src='./assets/eq2-46B.png' height="50px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-46C.png' height="50px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-30A.png' height="220px" style="margin: 0px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-30B.png' height="220px" style="margin: -10px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Young's experiment
      .center
        img(src='./assets/fig2-31.png' height="300px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-47.png' height="50px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-47B.png' height="90px" style="margin: 0px 20px -20px 0px;")
      .center
        img(src='./assets/eq2-48.png' height="60px" style="margin: 50px 20px -0px 0px;")
        img(src='./assets/eq2-48B.png' height="60px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-49.png' height="80px" style="margin: 30px 20px -10px 30px;")
      .center
        img(src='./assets/eq2-50.png' height="60px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Fabry-Perot interferometer
      .center
        img(src='./assets/fig2-32.png' height="500px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-51.png' height="50px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-52.png' height="90px" style="margin: 0px 20px -20px 0px;")
      .center
        img(src='./assets/eq2-54.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Fabry-Perot interferometer
      .center
        img(src='./assets/eq2-55.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-55B.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-56.png' height="90px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-57.png' height="100px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-58.png' height="100px" style="margin: 30px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Fabry-Perot interferometer
      .center
        img(src='./assets/eq2-58.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig2-33.png' height="350px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-59.png' height="90px" style="margin: 30px 50px -0px 0px;")
        img(src='./assets/eq2-59B.png' height="90px" style="margin: 30px 0px -0px 50px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Interference
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Michelson interferometer
      .center
        img(src='./assets/fig2-34.png' height="350px" style="margin: 0px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-59C.png' height="40px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-60.png' height="90px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-60B.png' height="30px" style="margin: 0px 100px -0px 0px;")
        | bright fringes
      .center
        img(src='./assets/eq2-60C.png' height="30px" style="margin: 0px 80px -0px 0px;")
        | dark fringes
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig2-35.png' height="500px" style="margin: 0px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig2-36.png' height="300px" style="margin: 0px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-61.png' height="80px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-61B.png' height="40px" style="margin: 30px 50px -0px 0px;")
        img(src='./assets/eq2-62.png' height="40px" style="margin: 0px 0px -0px 50px;")
      .center
        img(src='./assets/eq2-63.png' height="130px" style="margin: 30px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/eq2-63.png' height="130px" style="margin: 0px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-63B.png' height="40px" style="margin: 30px 20px -0px 0px;")
        img(src='./assets/eq2-63C.png' height="70px" style="margin: 0px 0px -15px 20px;")
      .center
        img(src='./assets/eq2-64.png' height="130px" style="margin: 30px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-65F.png' height="50px" style="margin: 50px 50px -10px 0px;")
        | dark fringes
      .center
        img(src='./assets/eq2-66.png' height="40px" style="margin: 30px 30px -10px 0px;")
        | in terms of wavelength
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig2-38.png' height="350px" style="margin: 0px 0px -0px 0px;")
      .center
        img(src='./assets/table2-3.png' height="200px" style="margin: 30px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Double Slits
      .center
        img(src='./assets/eq2-68.png' height="80px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/eq2-69.png' height="80px" style="margin: 30px 40px -0px 0px;")
        img(src='./assets/eq2-69B.png' height="80px" style="margin: 30px 0px -0px 40px;")
      .center
        img(src='./assets/fig2-39.png' height="300px" style="margin: 0px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Double Slits
      .center
        img(src='./assets/fig2-39.png' height="300px" style="margin: -20px 0px -0px 0px;")
      .center
        img(src='./assets/fig2-40.png' height="360px" style="margin: 0px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Multiple Slits
      .center
        img(src='./assets/eq2-73.png' height="130px" style="margin: -10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-74.png' height="70px" style="margin: 10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-75.png' height="30px" style="margin: 40px 0px -0px 0px;")
      .center
        img(src='./assets/fig2-41A.png' height="300px" style="margin: -0px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Multiple Slits
      .center
        img(src='./assets/fig2-41A.png' height="300px" style="margin: -0px 0px -0px 0px;")
      .center
        img(src='./assets/fig2-41B.png' height="277px" style="margin: 0px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Circular Aperture
      .center
        img(src='./assets/fig2-42.png' height="300px" style="margin: -50px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-78.png' height="80px" style="margin: -0px 0px -25px 0px;")
        | &rArr;
        img(src='./assets/eq2-80B.png' height="80px" style="margin: 20px 0px -25px 0px;")
      .center
        img(src='./assets/eq2-81.png' height="150px" style="margin: 50px 50px -60px 0px;")
        | with
        img(src='./assets/eq2-81B.png' height="80px" style="margin: 20px 0px -30px 50px;")
      .center
        img(src='./assets/eq2-82.png' height="80px" style="margin: 100px 50px -25px 0px;")
        | first dark ring
      .center
        img(src='./assets/eq2-83.png' height="80px" style="margin: 30px 50px -25px 0px;")
        | if the aperture is a lens
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Resolution
      .center
        img(src='./assets/fig2-43.png' height="600px" style="margin: -70px 0px -70px 0px;").rotateimg90
      .center
        img(src='./assets/eq2-82.png' height="80px" style="margin: 0px 50px -25px 0px;")
        | first dark ring
      .center
        img(src='./assets/eq2-83.png' height="80px" style="margin: 30px 50px -25px 0px;")
        | if the aperture is a lens
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Lens
      .center
        img(src='./assets/fig2-44.png' height="800px" style="margin: -180px 0px -70px 0px;").rotateimg90
      .center
        img(src='./assets/eq2-83.png' height="80px" style="margin: -30px 50px -25px 0px;")
        | if the aperture is a lensç
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Resolution
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") The resolution can be interpreted as the smallest resolvable separation between the central maximums (Airy disks) created by two equal-irradiance, distant point sources separated apart by an angle &theta;
      .center
        img(src='./assets/fig2-45.png' height="300px" style="margin: -0px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-84.png' height="60px" style="margin: -0px 0px -0px 0px;")
      p(style="padding: 15px; margin: -10px 10px 0px 1px; line-height: 1.3em;") The limit condition is just resolvable and known as <strong>Rayleigh criterion</strong>.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Resolution
      p(style="padding: 15px; margin: -10px 10px 0px 1px; line-height: 1.3em;") The limit condition is just resolvable and known as <strong>Rayleigh criterion</strong>.
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The limit of the resolvable angular separation of two point sources can be expressed as
      .center
        img(src='./assets/eq2-85.png' height="60px" style="margin: -0px 30px -0px 0px;")
        img(src='./assets/eq2-86.png' height="60px" style="margin: -0px 0px -0px 30px;")
      .center
        img(src='./assets/fig2-46.png' height="300px" style="margin: 20px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Diffraction grating
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") Diffraction by a large number of diffraction elements such as multiple slits, apertures, or obstacles. A periodic array of such elements is called a diffraction grating.
      .center
        img(src='./assets/fig2-47.png' height="300px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-87.png' height="70px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-88.png' height="70px" style="margin: 20px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Diffraction
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Diffraction grating
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") Spectra produced by white light
      .center
        img(src='./assets/fig2-48.png' height="300px" style="margin: 20px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Optical Fiber Transmission
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Total internal reflection
      p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.3em;") Snell law
      .center
        img(src='./assets/eq2-89.png' height="50px" style="margin: -40px 0px 0px 0px;")
      .center
        img(src='./assets/fig2-50.png' height="400px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-89B.png' height="80px" style="margin: 0px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Optical Fiber Transmission
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Total internal reflection
      .center
        img(src='./assets/eq2-90.png' height="50px" style="margin: -40px 0px 0px 0px;")
      .center
        img(src='./assets/eq2-91.png' height="80px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-91B.png' height="100px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-92.png' height="70px" style="margin: 20px 0px -0px 0px;")
      //- .center
      //-   img(src='./assets/eq2-92B.png' height="80px" style="margin: 20px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-92C.png' height="70px" style="margin: 20px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Optical Fiber Transmission
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Major refraction index configurations of optical fibers
      .center
        img(src='./assets/fig2-51.png' height="500px" style="margin: 40px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Gaussian Beam Optics
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Laser Sources
      .center
        img(src='./assets/table2-4.png' height="300px" style="margin: 100px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Gaussian Beam Optics
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Gaussian beam
      .center
        img(src='./assets/fig2-52.png' height="300px" style="margin: 10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-94.png' height="100px" style="margin: 10px 0px -0px 0px;")
      .center
        img(src='./assets/eq2-95.png' height="100px" style="margin: 10px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Taylor and Francis
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, gustavo@gusbits.com with use of images from the above referenced book
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optomechatronics',
    description: 'Optics',
    path: 'optomechatronics-optics/Optics'
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
      theme: 'Optics',
      isSpanish: true,
      languages: ['🇺🇸', '🇲🇽']
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

.language {
  display: flex;
  justify-content: flex-end;
  margin: 0px 0px 0px 0px;
}

</style>
