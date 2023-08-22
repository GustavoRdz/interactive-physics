<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    
    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;" :mouseNavigation='false')
      //- img(src='./assets/Logo-FIME copy.svg' height='820px' style="margin: -10 0 50px 0;")
      .center.frontpage
        h2 Vísion por computadora
        img(src='./assets/U.svg')

        h4 Formación de Imágenes
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  
    
    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;" :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4 Geometría y transformaciones
      p Puntos, lineas y planos en 2D y 3D
      .center
        img(width="600px" src='./assets/fig2-2.png' style="margin: 40px 20px 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  
    
    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;" :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4 Geometría y transformaciones
      .center
        img(width="600px" src='./assets/myimage.svg' style="margin: 40px 20px 0 0px;")

    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;" :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4 Geometría y transformaciones
      p Puntos, lineas y planos en 2D y 3D
      .center
        img(width="600px" src='./assets/fig2-2.png' style="margin: 40px 20px 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt; 

    slide(enter='fadeIn' leave='bounceOutLeft' style="overflow: scroll;" :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4 Geometría y transformaciones
      p Puntos lineas y planos en 2D y 3D
      p <b>Puntos 2D</b>
      .center
        img(width="200px" src='./assets/eq2-0A.png' style="margin: 0px 150px 0 0px;")
        img(width="150px" src='./assets/eq2-1.png' style="margin: 0px 0px -20px 0px;")
      p <b>Coordenadas homogeneas</b>
      .center
        img(width="200px" src='./assets/eq2-1B.png' style="margin: 0px 150px 0 0px;")
        img(width="150px" src='./assets/eq2-1C.png' style="margin: 0px 0px -20px 0px;")
      p Un vector homogeneo puede ser convertido a inhomogeneo al dividir sus elementos entre el ultimo
      .center
        img(width="300px" src='./assets/eq2-2.png' style="margin: 0px 0px -20px 0px;")
      p donde 
        img(width="150px" src='./assets/eq2-2B.png' style="margin: 0px 0px -20px 0px;")
        | es el vector aumentado. 
      p Puntos homogeneos donde su ultimo elemento es cero se llaman puntos ideales o puntos en infinito
      .prev(@click.stop='previousSlide' style="float: left; margin: 150px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 150px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin: 0px 0 90px 0px;") Lineas 2D
        img(width="100px" src='./assets/fig2-2.png' style="margin: 0px -100px -80px 100px; width: 340px; height:210px; object-fit: none; object-position: 10% 0;")
      p Lineas en coordenadas homogeneas: 
        img(width="120px" src='./assets/eq2-2C.png' style="margin: 0px 0 -15px 30px;")
      p Ecuación:
        img(height="50px" src='./assets/eq2-3.png' style="margin: 0px 0 -15px 30px;")
      p Vector normalizado: 
        img(height="40px" src='./assets/eq2-3B.png' style="margin: 0px 0 -15px 30px;")
      p Ángulo de rotación: 
        img(height="40px" src='./assets/eq2-3F.png' style="margin: 0px 0 -15px 30px;")
      p Intersección de rectas: 
        img(height="50px" src='./assets/eq2-4.png' style="margin: 0px 0px -15px 30px;")
      p Línea a partir de dos puntos:
        img(height="50px" src='./assets/eq2-5.png' style="margin: 0px 0 -15px 30px;")
      p(style="margin: 50px 0 0px 100px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  


    slide(:steps=0, enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;") Puntos y planos  3D
        img(width="100px" src='./assets/fig2-2.png' style="margin: 0px -100px -80px 100px; width: 200px; height:210px; object-fit: none; object-position: 90% 0;")
      .center
      p Punto:
        img(height="40px" src='./assets/eq2-6B.png' style="margin: 0px 0 -15px 30px;")
      p Homogeneo:
        img(height="40px" src='./assets/eq2-6C.png' style="margin: 0px 0 -15px 30px;")
      p Vector aumentado:
        img(height="40px" src='./assets/eq2-6D.png' style="margin: 0px 0 -15px 30px;")
      p con
        img(height="40px" src='./assets/eq2-6E.png' style="margin: 0px 0 -15px 30px;")
      p Plano:
        img(height="40px" src='./assets/eq2-7.png' style="margin: 0px 0 -15px 30px;")
      p Normalizado: 
        img(height="40px" src='./assets/eq2-7B.png' style="margin: 0px 0 -15px 30px;")
      p Plano en infinito:
        img(height="40px" src='./assets/eq2-7C.png' style="margin: 0px 0 -15px 30px;")
      p En coordenadas polares:
        img(height="50px" src='./assets/eq2-8.png' style="margin: 0px 0 -15px 30px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;") Línea 3D
        img(width="90px" src='./assets/fig2-3.png' style="margin: 10px 0px -100px 300px; width: 250px; height:210px; object-fit: none; object-position: 0% 0;")
      p Línea:
        img(width="250px" src='./assets/eq2-9.png' style="margin: 0px 0 -15px 30px;")
      p Coordenadas homogeneas:
        img(width="200px" src='./assets/eq2-10.png' style="margin: 0px 0 -15px 30px;")
      p con el segundo punto en infinito:
        img(width="300px" src='./assets/eq2-10B.png' style="margin: 0px 0 -15px 30px;")
      p Línea:
        img(width="150px" src='./assets/eq2-11.png' style="margin: 0px 0 -15px 30px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;").center Transformaciones 2D
      .center
        img(src='./assets/fig2-4.png' width="500px" style="margin: 0px 0px 0px 0px;")
      p(style="margin: 0px 0px 30px 30px; ") Traslación: 
        img(src='./assets/eq2-13B.png' width="200px" style="margin: 0px 0px -15px 30px; ")
      p(style="margin: 0px 0px 30px 30px; ") o
        img(src='./assets/eq2-14.png' height="70px" style="margin: 0px 0px -15px 30px; ")
      p(style="margin: 0px 0px 30px 30px; ")  o
        img(src='./assets/eq2-15.png' height="70px" style="margin: 0px 0px 15px 30px; ")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 1
    //-   example-one
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 2
    //-   example-two
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Motional emf
    //-   p(style="margin: -40px 0px 0 0;") The emf induced in a conductor moving through a constant magnetic field.
    //-   img(src='./assets/fig31-8.png' height="400px" style="margin: 50px 20px -350px -50px;")
    //-   img(src='./assets/eq31-4B.png' height="50px" style="margin: 0px 0px 0px 30px;")
    //-   img(src='./assets/eq31-5.png' height="70px" style="margin: 0px 0px 0 535px;")
    //-   img(src='./assets/eq31-5B.png' height="50px" style="margin: 0px 0px 0 535px;")
    //-   img(src='./assets/eq31-6.png' height="70px" style="margin: 20px 0px 0 535px;")
    //-   img(src='./assets/eq31-7.png' height="70px" style="margin: 20px 0px 0 535px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 3
    //-   example-three
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Lenz's law
    //-   p(style="margin: 0px 0px 20px 0; padding: 10px; border: 1px solid black;")  The induced current in a loop is in the direction that creates a magnetic field that opposes the change in magnetic flux through the area enclosed by the loop.
    //-   p From Faraday's law sign
    //-   .center
    //-     img(src='./assets/eq31-1.png' height="70px" style="margin: 0px 20px 0 0;")
    //-   .center
    //-     img(src='./assets/fig31-11.png' height="350px"  style="margin: 20px 100px 0 0;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  
      
    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 4
    //-   example-four
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 5
    //-   example-five
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Induced emf and Electric Fields
    //-   p(style="margin: -50px 0 0 0px;") If the magnetic field changes with time, an emf is induced in the loop.
    //-   .center
    //-     img(src='./assets/fig31-15.png' height="250px"  style="margin: 0px;")
    //-   p(style="margin: 0px 0 0 0px;") The work done by the electric field in moving a test charge q once around the loop is equal to qξ.
    //-   .center
    //-     img(src='./assets/eq31-7B.png' height="50px"  style="margin: -10px 0 0 0px;")
    //-   p(style="margin: 0px 0 -20px 0px;")  the induced electric field can be expressed as 
    //-   .center
    //-     img(src='./assets/eq31-8.png' height="70px"  style="margin: -70px 0 0px 450px;")
    //-   p(style="margin: 40px 0 -20px 0px;") <b>Faraday's law in general form</b>:
    //-   .center
    //-     img(src='./assets/eq31-9.png' height="100px"  style="margin: -47px 0 0 70px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 6
    //-   example-six
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Generators and motors
    //-   p(style="margin-top: -30px;").center
    //-   //- torsion-pendulum
    //-   .center
    //-     img(src='./assets/fig31-17.png' height="250px" style="margin: -30px 10px 0 0px;")
    //-     img(src='./assets/fig31-19.png' height="250px" style="margin: -30px 0px 0 0px;")
    //-   .center
    //-     img(src='./assets/fig31-18.png' height="200px" style="margin: 0px 0 0 0px;")
    //-   .center
    //-     img(src='./assets/eq31-9B.png' height="50px" style="margin: 50px 0 0 0px;")
    //-   .center
    //-     img(src='./assets/eq31-10.png' height="70px" style="margin: 20px 0 0 0px;")
    //-   .center
    //-     img(src='./assets/eq31-11.png' height="50px" style="margin: 20px 0 0 0px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 7
    //-   example-seven
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Self-Induction and Inductance
    //-     img(src='./assets/fig32-1.png' height="400px" style="margin: 0 50px -200px 0")
    //-     img(src='./assets/eq31-1.png' height="70px" style="margin: 0 0 100px 0px")
    //-     img(src='./assets/eq32-2.png' height="70px" style="margin: 0 0 0px -145px")
    //-     img(src='./assets/eq32-3.png' height="70px" style="margin: 0 0 -100px -123px")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 8
    //-   example-eight
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center RL Circuits
    //-   div  
    //-     p(style="margin-top: -30px;").center
    //-     img(src='./assets/fig32-2.png' height="500px" style="margin: -30px 50px -200px 0;")
    //-     img(src='./assets/eq32-6.png'  height="70px"  style="margin: 0 0px 200px 0px;")
    //-     img(src='./assets/eq32-6B.png' height="70px"  style="margin: 0 0px 100px -200px;")
    //-     img(src='./assets/eq32-6C.png' height="70px"  style="margin: 0 0 20px -160px;")
    //-     img(src='./assets/eq32-6D.png' height="70px"  style="margin: 0 0 -70px -180px;")
    //-     img(src='./assets/eq32-6E.png' height="50px"  style="margin: 0 0 -140px -160px;")
    //-     img(src='./assets/eq32-6F.png' height="60px"  style="margin: 0 0 200px 130px;")
    //-     img(src='./assets/eq32-6G.png' height="70px"  style="margin: 0 0 110px -180px;")
    //-     img(src='./assets/eq32-7.png'  height="70px"  style="margin: 0 0 30px -200px;")
    //-     img(src='./assets/eq32-8.png'  height="70px"  style="margin: 0 0 -50px -180px;")
    //-     img(src='./assets/fig32-3.png' height="300px" style="margin: 0px -300px -400px -150px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 400px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 400px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center RL Circuits
    //-   p(style="margin-top: -30px;") Con S<sub>2</sub> en b
    //-   img(src='./assets/fig32-2.png' height="500px" style="margin: -30px 100px -200px 100px;")
    //-   img(src='./assets/eq32-9B.png'  height="70px"  style="margin: 0 0px 200px 0px;")
    //-   img(src='./assets/eq32-10.png' height="70px"  style="margin: 0 0px 100px -200px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 200px 0px 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 200px 0px 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 9
    //-   example-nine
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Mutual Inductance
    //-   img(src='./assets/fig32-8.png' height="400px" style="margin: -30px 50px -100px 0;")
    //-   img(src='./assets/eq32-15.png'  height="70px"  style="margin: 0 0px 200px 0px;")
    //-   img(src='./assets/eq32-16.png' height="70px"  style="margin: 0 0px 100px -150px;")
    //-   img(src='./assets/eq32-17.png' height="70px"  style="margin: 0 0 20px -500px;")
    //-   img(src='./assets/eq32-17B.png' height="70px"  style="margin: 0 0 -70px -180px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 400px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 400px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -30px;") Exercise 10
    //-   example-ten
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Oscillations in an LC Circuit
    //-   img(src='./assets/fig32-10.png' height="250px" style="margin: -30px 50px -100px 0;")
    //-   img(src='./assets/eq32-18.png'  height="70px"  style="margin: 0 0px 200px 0px;")
    //-   img(src='./assets/eq32-19.png' height="70px"  style="margin: 0 0px 100px -280px;")
    //-   img(src='./assets/eq32-19B.png' height="70px"  style="margin: 0 0 20px -420px;")
    //-   img(src='./assets/eq32-20.png' height="70px"  style="margin: 0 0 -60px -170px;")
    //-   img(src='./assets/eq32-21.png' height="50px"  style="margin: 0 0 -120px -170px;")
    //-   img(src='./assets/eq32-22.png' height="70px"  style="margin: 0 0 -200px -200px;")
    //-   img(src='./assets/eq32-23.png' height="70px"  style="margin: 0 0 -280px -220px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 300px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 300px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 11
    //-   example-eleven
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center The RLC Circuit
    //-   .center
    //-     img(src='./assets/fig32-15.png' height="350px" style="margin: -30px 50px -100px 0;")
    //-     img(src='./assets/eq32-27C.png'  height="60px"  style="margin: 0 0px 200px 0px;")
    //-     img(src='./assets/eq32-28.png' height="60px"  style="margin: 0 0px 130px -130px;")
    //-     img(src='./assets/eq32-28B.png' height="60px"  style="margin: 0 0 60px -210px;")
    //-     img(src='./assets/eq32-28C.png' height="60px"  style="margin: 0 0 -10px -210px;")
    //-     img(src='./assets/eq32-29.png' height="60px"  style="margin: 0 0 -80px -200px;")
    //-     img(src='./assets/eq32-31.png' height="40px"  style="margin: 0 0 -130px -210px;")
    //-     img(src='./assets/eq32-32.png' height="60px"  style="margin: 0 0 -200px -230px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 300px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 300px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center The RLC Circuit
    //-   .center
    //-     img(src='./assets/fig32-16.png' height="350px" style="margin: 0px 0px 0px 0;")
    //-   .center
    //-     img(src='./assets/eq32-31.png' height="50px"  style="margin: 50px 0 0px 0px;")
    //-   .center
    //-     img(src='./assets/eq32-32.png' height="60px"  style="margin: 30px 0 0px 0px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Displacement Current and the General Form of Ampère's Law
    //-   p
    
      //- img(src='./assets/fig34-1.png' height="350px" style="margin: -30px 50px -100px 0;")
      //- img(src='./assets/eq34-0.png'  height="60px"  style="margin: 0 0px 200px 0px;")
      //- p(style="margin: -260px 0px 0px 500px;") Ampère's law
      //- img(src='./assets/eq34-1.png' height="60px"  style="margin: 50px 0px 130px 300px;")
      //- p(style="margin: -200px 0px 0px 500px;") Displacement current
      //- img(src='./assets/eq34-2.png' height="60px"  style="margin: 70px 0 60px 250px;")
      //- p(style="margin: -130px 0px 0px 650px;") Ampère-Maxwell law
      //- .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Displacement Current and the General Form of Ampère's Law
    //-   p
    //-   .center
    //-     img(src='./assets/fig34-2.png' height="350px" style="margin: 30px 50px 60px 0;")
    //-     img(src='./assets/eq34-2B.png'  height="60px"  style="margin: 0 0px 200px 0px;")
    //-     img(src='./assets/eq34-3.png' height="60px"  style="margin: 50px 0px 130px -160px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 12
    //-   example-twelve
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Maxwell's Equations
    //-   .center
    //-     img(src='./assets/eq34-4.png' height="70px" style="margin: 0 0px -70px -100px;")
    //-     p(style="margin: 0px 0px 0px 300px;") Gauss's law
    //-     img(src='./assets/eq34-5.png' height="70px" style="margin: 0 0 -70px -83px;")
    //-     p(style="margin: 0 0 0 450px;") Gauss's law in magnetism
    //-     img(src='./assets/eq34-6.png' height="70px" style="margin: 0 0 -70px -143px;")
    //-     p(style="margin: 0 0 0 325px;") Faraday's law
    //-     img(src='./assets/eq34-7.png' height="70px" style="margin: 0 0 -70px -223px;")
    //-     p(style="margin: 0 0 0 440px;") Ampère-Maxwell's law
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Wave equation
    //-   .center
    //-     img(src='./assets/fig34-6.png' height="300px" style="margin: -50px 100px -100px 0px;")
    //-     img(src='./assets/eq34-15.png' height="70px" style="margin: 0 0 0px 0px;")
    //-   .center
    //-     img(src='./assets/fig34-7.png' height="300px" style="margin: 100px 100px -100px 0px;")
    //-     img(src='./assets/eq34-16.png' height="70px" style="margin: 0 0 0px 0px;")
    //-   .center
    //-     img(src='./assets/eq34-17.png' height="70px" style="margin: 100px 0 -70px 0px;")
    //-     p(style="margin: 0 0 0 300px;") Wave speed
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Wave equation
    //-   .center
    //-     img(src='./assets/eq34-17.png' height="70px" style="margin: 0px 0 -70px 0px;")
    //-     p(style="margin: 0 0 0 350px;") Wave speed
    //-   .center
    //-     img(src='./assets/eq34-17B.png' height="100px" style="margin: 100px 0 -70px 0px;")
    //-   .center
    //-     img(src='./assets/fig34-8.png' height="300px" style="margin: 100px 100px -70px 0px;")
    //-     img(src='./assets/eq34-21.png' height="80px" style="margin: 100px 0 0px 0px;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  
      
    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 13
    //-   example-thirteen
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p Computer Vision
        p Algorithms and ApplicationsRichard Szeliski
        p Springer
        p.small created by G. Rodríguez-Morales
        p.small gustavo.rodriguezml@gmail.com
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;  

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Formación de imagenes',
    description: 'Formación de imagenes',
    path: 'computer-vision-image-formation',
    course: 'Computer Visión',
    part: null
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
    'example-fourteen': require('./components/ExampleFourteen'),
    'example-fifteen': require('./components/ExampleFifteen'),
    'example-sixteen': require('./components/ExampleSixteen'),
    'example-seventeen': require('./components/ExampleSeventeen'),
    'example-eighteen': require('./components/ExampleEighteen'),
    'example-nineteen': require('./components/ExampleNineteen'),
    'example-twenty': require('./components/ExampleTwenty')
  },
  data: function () {
    return {
      tiempo: '',
      theme: 'Formación  de imagenes'
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
