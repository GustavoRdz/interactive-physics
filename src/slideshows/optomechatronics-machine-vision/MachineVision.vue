<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        p Machine Vision<br>Visual Sensing and Image Processing
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        //- .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -20px;")
        | Fundamentals of optics
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Image Formation</b>
        //- eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        //-   p(style="margin: -10px 0 0 0;") <b>Imaging Devices</b><br><span style="font-size: 0.7em;">Image Display: Interlacing</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Image Processing</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Image Representation</b><br><span style="font-size: 0.7em;">Binary Image, Gray Scale Image, Histogram, Histogram Modification.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Image Filtering</b><br><span style="font-size: 0.7em;">Mean Filter, Median Filter.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Image Segmentation</b><br><span style="font-size: 0.7em;">Thresholding, Iterative Thresholding, Region-Based Segmentation</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Edge Detection</b><br><span style="font-size: 0.7em;">Roberts Operator, Sobel Operator. Laplacian Operator.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Hough Transform</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Camera Calibration</b><br><span style="font-size: 0.7em;">Perspective Projection</span>
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Visual sensing
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Detección visual
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Visual sensing is prerequisite for understanding the structure of a 3D environment, which requires assessing the shape and position of objects.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La detección visual es un requisito previo para comprender la estructura de un entorno 3D, lo que requiere evaluar la forma y la posición de los objetos.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The sensing is to acquire the image of the environment through a visual or an imaging system, usually a camera system.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La detección consiste en adquirir la imagen del entorno a través de un sistema visual o de imágenes, generalmente un sistema de cámara.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") When the system sees the scene containing objects, the amount of light energy it acquires depends upon a number of factors, such as shape, optical properties of objects, background, and illumination conditions. Often, these factors are critical to determine the amount of light impinging on the object’s surface.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Cuando el sistema ve la escena que contiene objetos, la cantidad de energía luminosa que adquiere depende de varios factores, como la forma, las propiedades ópticas de los objetos, el fondo y las condiciones de iluminación. A menudo, estos factores son críticos para determinar la cantidad de luz que incide sobre la superficie del objeto.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") In proportion to the intensity of the received light, the imaging hardware device process and digitize in a discrete fashion so that a computer can understand the digitized values. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En proporción a la intensidad de la luz recibida, el dispositivo de hardware de imágenes procesa y digitaliza de manera discreta para que una computadora pueda comprender los valores digitalizados.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") After digitization, this signal is sent to a computer for image processing.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Después de la digitalización, esta señal se envía a una computadora para el procesamiento de imágenes.After digitization, this signal is sent to a computer for image processing.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Image processing, analyzing, and understanding
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Procesamiento, análisis y comprensión de imágenes
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") (1) Preprocessing <br>(2) Intermediate processing <br>(3) Feature extraction <br>(4) Scene understanding.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") (1) Preprocesamiento <br>(2) Procesamiento intermedio <br>(3) Extracción de características <br>(4) Comprensión de la escena.
      .center
        img(src='./assets/fig3-1.png' height="500px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Features
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center CaraProcesamiento, análisis y comprensión de imágenes
      .center
        img(src='./assets/table3-1.png' width="100%")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: 50px;").center Image formation 
      .center
        img(src='./assets/fig3-3.png' height="400px" style="margin: 0px 0 0 -50px;")
        img(src='./assets/eq3-1.png' height="60px" style="margin: 0px -209px 300px 70px;")
        img(src='./assets/eq3-2.png' height="40px" style="margin: 0px -128px 250px 70px;")
        img(src='./assets/eq3-3.png' height="40px" style="margin: 0px -193px 120px -100px;")
        img(src='./assets/eq3-3B.png' height="60px" style="margin: 100px -5px 50px -100px;")
        img(src='./assets/eq3-4.png' height="40px" style="margin: 0px 0px -0px -100px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;


    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Imaging devices
    //-   p(style="padding: 1px; margin: -20px 0 0px 0px; line-height: 1.5em;") The most commonly used device is the <b>charge coupled device</b> (CCD) 
    //-   p(style="padding: 1px; margin: 5px 0 0px 0px; line-height: 1.5em;") The CCD visual sensor is composed of an array of tiny photosensitive semiconductor devices called “pixels”.<br> The amount of the charge accumulation is dependent on the intensity of light.<br>The accumulated charge is stored and converted to an electrical signal to be used for image analysis.
    //-   p.center 
    //-     img(src='./assets/fig3-4.png' height="300px" style="margin: 0px 0 0px 0;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
    

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Imagin devices: CCD
    //-   h6(style="margin-top: -20px;").center Charge transfer in a “three phase” CCD
    //-   p.center 
    //-     img(src='./assets/fig3-5.png' height="650px" style="margin: -0px 0 -0px 0;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Imagin devices: CCD
    //-   h6(style="margin-top: -0px;").center Charge transfer configuration for read-out
    //-   .center
    //-     img(src='./assets/fig3-6.png' height="450px" style="margin: 30px 0 0 0;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Imagin devices: CCD
    //-   h6(style="margin-top: -0px;").center Horizontal synchronization
    //-   .center
    //-     img(src='./assets/fig3-7.png' height="350px" style="margin: -0px 0 0 0;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Imagin devices: CCD
    //-   h6(style="margin-top: -0px;").center Interlaced image display
    //-   .center
    //-     img(src='./assets/fig3-8.png' height="400px" style="margin: -0px 0 0 0;")
    //-   p Complete cycle in 63.5 &mu;s
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -0px;").center Image processing
    //-   h6.center Architecture of an image grabber
    //-   .center
    //-     img(src='./assets/fig3-9.png' height="500px" style="margin: -0px 0 0 0;")
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Image Representation
      p(style="padding: 1px; margin: -20px 0 0px 0px; line-height: 1.5em;") Brightness of the image acquired by the camera is defined on every pixel within the CCD array, which is a function of spatial coordinates.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") To describe the brightness an image function is usually used, which is a mathematical representation of an image that a camera produces on a CCD cell.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The function denoted by f(x,y) defines the brightness of the gray level at the spatial location (x, y).
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") When digitized by the frame grabber, it can be represented by f(i,j) where i and j are the ith row and jth column of the 2D CCD array cell, respectively.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Two types of image will be considered here: binary and gray scale.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Binary image
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The binary images have two-valued gray levels and are produced from the gray scale image by using a threshold technique to segment the image into regions.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The image represented by this two-valued function is called binary image.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") If the pixel intensity is larger than that of the set threshold, it is regarded to possess “1”. On the other hand, if the intensity is below it, it is regarded to possess “0”.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Therefore this image is usually used for simple image analysis or analysis of simple image.
      .center
        img(src='./assets/fig3-10.png' height="300px" style="margin: -0px 0 0px 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Gray Scale Image
      p In contrast to the binary information, gray scale images have a number of different brightness levels.
      p The levels can be expressed by using eight bit/pixel which expresses 255 different levels.
      .center
        img(src='./assets/fig3-10.png' height="300px" style="margin: 0px 30px 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Histogram
      p Histogram representation of an image is a fundamental tool for image analysis and enhancement. The histogram is a plot of the relationship between gray scale value and the number of pixels at that value and, thus, it is a discrete function.
      p The shape and the magnitude of the histogram are indicative of the characteristic nature of the image, and they are very useful in determining a threshold.
      .center
        img(src='./assets/fig3-11.png' height="300px" style="margin: -0px 0px 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Histogram Modification
      p(style="margin: -50px 0px 0 0;") contrast enhancement
      .center
        img(src='./assets/fig3-12.png' height="350px" style="margin: -10px 0px 0 0;")
      p(style="margin: -0px 0px 0 0;") Histogram equalization
      .center
        img(src='./assets/fig3-13.png' height="350px" style="margin: -30px 0px 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Image filtering
      p Filtering an image is to recover its intrinsic visual information when it contains unwanted noise.
      p This can be done by transforming the image intensities in order to remove noise or by performing image enhancement.
      p There are two types of filtering depending upon whether the transformation is made in spatial or frequency domain: spatial domain filter and frequency domain filter.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Image filtering
      h6(style="margin-top: -0px;").center  Convolution masks
      p 
      .center
        img(src='./assets/fig3-14.png' height="500px" style="margin: 30px 0px 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Image filtering
      h6(style="margin-top: -0px;").center  Convolution masks
      p 
      .center
        img(src='./assets/fig3-15.png' height="300px" style="margin: -30px 0px 0 0;")
        img(src='./assets/eq3-6.png' height="80px" style="margin: -0px 0px 0 0;")
        img(src='./assets/eq3-7.png' height="100px" style="margin: -0px 0px 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Image filtering
      h6(style="margin-top: -0px;").center  Mean filter
      .center
        img(src='./assets/eq3-11.png' height="70px" style="margin: 0px 0px 0 0;")
      .center
        img(src='./assets/eq3-11B.png' height="200px" style="margin: 0px 0px 0 0;")
      .center
        img(src='./assets/eq3-12.png' height="70px" style="margin: 0px 0px 0 0;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Image filtering
      h6(style="margin-top: -0px;").center  Median filter
      .center
        img(src='./assets/fig3-16.png' height="300px" style="margin: 0px 20px -30px 20px;")
      .center
        img(src='./assets/eq3-13.png' height="150px" style="margin: 50px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Image filtering
      h6(style="margin-top: -0px;").center  Median filter
      p(style="padding: 15px; margin: -60px 1px -0px 1px; line-height: 1.2em;")
      .center
        img(src='./assets/fig3-17.png' height="300px" style="margin: 50px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Image thresholding
      .center
        img(src='./assets/fig3-19.png' height="500px" style="margin: 50px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Image thresholding
      h6 
      .center
        img(src='./assets/fig3-20.png' height="350px" style="margin: -30px 20px -30px 20px;")
      .center
        img(src='./assets/fig3-18.png' height="200px" style="margin: 20px 20px -30px 20px;")
        img(src='./assets/eq3-15.png' height="100px" style="margin: 20px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Iterative Thresholding
      p 1) Choose an initially estimated value of the threshold value T <br>2) Partition the image into two groups R1 and R2 using the T value.<br> 3) Calculate the mean gray value of the partitioned group R1 and R2; respectively
      .center
        img(src='./assets/eq3-16.png' height="200px" style="margin: -40px 20px -30px 20px;")
      p 4) Choose a new threshold to have
      .center
        img(src='./assets/eq3-17.png' height="70px" style="margin: 40px 20px -30px 20px;")
      p 5) Repeat step (2) through step (4) until the mean gray values do not change as iteration proceeds
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Iterative Thresholding
      p(style="padding: 15px; margin: -60px 1px -0px 1px; line-height: 1.2em;")
      .center
        img(src='./assets/fig3-22.png' height="500px" style="margin: 40px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Region-Based Segmentation
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") Seven divided different image regions.
      .center
        img(src='./assets/fig3-23.png' height="300px" style="margin: 40px 20px -30px 20px;")
        img(src='./assets/eq3-19.png' height="250px" style="margin: 40px 20px -30px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Region-Based Segmentation
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") 
      .center
        img(src='./assets/fig3-25.png' height="500px" style="margin: 0px 20px -0px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Edge Detection
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") Edge detection is one such method for analyzing and identifying image contents, and presents the most common approach for detecting discontinuities in gray level. 
      .center
        img(src='./assets/fig3-26.png' height="400px" style="margin: 20px 20px -0px 20px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Edge Detection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Image Gradient
      .center
        img(src='./assets/eq3-24.png' height="100px" style="margin: 30px 20px -0px 20px;")
      .center
        img(src='./assets/eq3-25.png' height="60px" style="margin: 30px 20px -0px 20px;")
      .center
        img(src='./assets/eq3-27.png' height="70px" style="margin: 30px 20px -0px 20px;")
      p numerically
      .center
        img(src='./assets/eq3-28.png' height="50px" style="margin: -50px 0px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Edge Detection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Roberts operator
      .center
        img(src='./assets/eq3-29.png' height="170px" style="margin: 30px 0px 0px 0px;")
      p(style="padding: 15px; margin: 30px 1px -0px 1px; line-height: 1.3em;") Sobel operator
      .center
        img(src='./assets/eq3-31.png' height="200px" style="margin: 30px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Edge Detection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Sobel operation of a series of mosaic images
      .center
        img(src='./assets/fig3-27.png' height="600px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Edge Detection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Sobel operation of a series of mosaic images
      .center
        img(src='./assets/fig3-27B.png' height="600px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Edge Detection
      .center
        img(src='./assets/fig3-28.png' height="300px" style="margin: 20px 20px -0px 0px;")
      p  Laplacian
      //- .center
      //-   img(src='./assets/eq3-33.png' height="70px" style="margin: 20px 20px -0px 0px;")
      .center
        img(src='./assets/eq3-34.png' height="100px" style="margin: 20px 20px -0px 0px;")
      .center
        img(src='./assets/eq3-35.png' height="100px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Laplacian 
      .center
        img(src='./assets/fig3-29.png' height="400px" style="margin: -10px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Laplacian of a Gaussian
      p LoG
      .center
        img(src='./assets/eq3-37.png' height="50px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/eq3-41.png' height="100px" style="margin: 10px 20px -0px 0px;")
      p Th e edge detection using the LoG filter is summarized in the following three steps:
        p 1) Smoothing operation by a Gaussian filter<br>2) Enhancing the edges using Laplacian<br>3) Detecting zero crossing.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Hough transform
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Distortion with a stop
      .center
        img(src='./assets/fig3-30.png' height="300px" style="margin: 10px 20px -0px 0px;")
      p Discretization of parameter space (m, c)
      .center
        img(src='./assets/fig3-31.png' height="300px" style="margin: -30px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Hough transform
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In the following, the Hough algorithm for line detection is summarized:
      p <b>Step 1</b>: Quantize the parameter space (m, c) within the range m<sub>min</sub> &leq; m &leq; m<sub>max</sub> and c<sub>min</sub> &leq; c &leq; c<sub>max</sub><br><b>Step 2</b>: Form an accumulator array A(m, c) and initialize it to some value. <br><b>Step 3</b>: Increment the value of an accumulator array A(m,c) in relation to the points composing lines in the image. 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Hough transform
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The Hough transform method suffers when the line approaches the vertical. One way to avoid this difficulty is to represent a line as
      .center
        img(src='./assets/eq3-45.png' height="50px" style="margin: 30px 20px -0px 0px;")
      .center
        img(src='./assets/fig3-32.png' height="400px" style="margin: 20px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Hough transform
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig3-33.png' height="600px" style="margin: 30px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Hough transform
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig3-34.png' height="600px" style="margin: 30px 20px -0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Camera calibration
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In the pinhole camera model, a small hole is punched at the optical lens center in the camera coordinate system, through which some of the rays of light reflected by the object pass to form an inverted image of the object on the image plane.
      .center
        img(src='./assets/fig3-35.png' height="400px" style="margin: 30px 0px 30px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") This is a camera perspective model.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Camera calibration
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In the pinhole camera model, a small hole is punched at the optical lens center in the camera coordinate system, through which some of the rays of light reflected by the object pass to form an inverted image of the object on the image plane.
      .center
        img(src='./assets/fig3-35.png' height="350px" style="margin: 30px 0px 30px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") A pinhole does not focus and, in fact, limits the entrance of incoming light, requiring long exposure time.
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In actual cameras, the pinhole is sufficiently opened by using a converging lens to avoid the disadvantage of the pinhole model.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Camera calibration
      .center
        img(src='./assets/fig3-35.png' height="350px" style="margin: 30px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Let us consider the focus variation of the image plane. If an object is located at z = s from the lens as shown in the figure, the following Gaussian lens formula holds
      .center
        img(src='./assets/eq3-46.png' height="70px" style="margin: 10px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where f and f' are the focal length of the lens and the distance of the image plane from the center point of the lens, respectively.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Camera calibration
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The objective of the image analysis is then how we map the image of an object acquired in the image plane into the world coordinate system. Referring to Appendix A1, the mapping conveniently can be described in the following form.
      .center
        img(src='./assets/eq3-47.png' height="50px" style="margin: 30px 0px 10px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") A perspective transformation called the imaging transformation projects 3D points on to a plane.
      .center
        img(src='./assets/fig3-36.png' height="300px" style="margin: 30px 0px 40px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In other words, the transformation changes a 3D aggregate of the objects into a plane surface. 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In other words, the transformation changes a 3D aggregate of the objects into a plane surface.
      .center
        img(src='./assets/fig3-37.png' height="350px" style="margin: 0px 0px 30px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The first step to obtain the image interpretation is to obtain a relationship when a point (Xc, Yc, Zc) in the camera coordinate systems is projected onto the image coordinates (ui, vi) Under the assumption of the ideal projection, the transformation can be described by the projection equation
      .center
        img(src='./assets/eq3-48.png' height="60px" style="margin: 10px 0px 10px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Utilizing these coordinate systems, the whole imaging process can be described in the following sequence:
      .center
        img(src='./assets/eq3-49.png' height="150px" style="margin: 20px 0px 20px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In other words, the transformation changes a 3D aggregate of the objects into a plane surface. The image coordinates (ui; vi) are located at the center of the pixel coordinate system (u0; v0) As shown in the figure, the relationship between the pixel coordinate and image coordinate systems is, therefore, given by
      .center
        img(src='./assets/eq3-50.png' height="70px" style="margin: 10px 0px 10px 0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Then, the relationship called perspective matrix can be conveniently expressed in linear form,
      .center
        img(src='./assets/eq3-51.png' height="150px" style="margin: 20px 0px 20px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Using the rigid body transformation, Xc can be related to the world coordinates by the equation
      .center
        img(src='./assets/eq3-52.png' height="200px" style="margin: 10px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where R denotes the 3D rotation matrix, T denotes the 3D translational vector, and ri (i = 1,2,3) is a row vector.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Finally, the relationship between the image and the pixel coordinates in the homogeneous coordinate spaceThen, the relationship called perspective matrix can be conveniently expressed in linear form,
      .center
        img(src='./assets/eq3-53.png' height="130px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Therefore, the overall imaging process is described by the relationship,
      .center
        img(src='./assets/eq3-54.png' height="160px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where [H] is the 3&times;4 camera projection matrix, which is denoted by
      .center
        img(src='./assets/eq3-55.png' height="120px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where &alpha;<sub>u</sub> = k<sub>u</sub>f and &alpha;<sub>v</sub> = k<sub>v</sub>f
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Rewriting the above equation as,
      .center
        img(src='./assets/eq3-56.png' height="130px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") When the above 12 elements are scaled by the value H<sub>34</sub>, we have 11 variables to determine. The resulting equation is obtained by
      .center
        img(src='./assets/eq3-57.png' height="160px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where s' is given by s/H<sub>34</sub> This yields the camera calibration equation from which the relationship between the pixel coordinates and the world coordinates can be established.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") To illustrate the relationship in more detail, let us consider a point, say ith point, in the world coordinates {X} and the corresponding point imaged in the pixel coordinates {u<sub>p</sub>},
      .center
        img(src='./assets/eq3-58.png' height="400px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In deriving the above equation, we have used the following relationship
      .center
        img(src='./assets/eq3-58B.png' height="60px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") It needs to be pointed out that, at least, we need 12 equations like these that can be obtained by six calibration points.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Perspective projection
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The equation can be written in a more compact form
      .center
        img(src='./assets/eq3-59.png' height="50px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Solving for q yields
      .center
        img(src='./assets/eq3-60.png' height="50px" style="margin: 0px 0px 10px 0px;")
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where A+ is the pseudo inverse of A. Here, we have 11 unknowns for q<sub>s</sub> to be determined and, therefore, need at least six calibration points.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Taylor and Francis
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, gustavo@gusbits.com with use of images from the above referenced book
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Problems
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 1. La figura muestra una imagen que tiene un cierto histograma de nivel de gris. Si deseamos modificar el histograma original de modo que se estire en un rango determinado y se deslice con cierta desviación del histograma original, como se muestra en la figura, explique qué tipo de cambios en la imagen ocurrirán en ambos casos. 
        .center
          img(src='./assets/p31.png' width="500px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 2. Encontrar los componentes conectados en una imagen es una práctica común en la visión artificial. Un algoritmo de etiquetado encuentra todos los componentes conectados en la imagen y asigna una etiqueta a todos los puntos en el mismo componente. Para una imagen que se muestra en la figura, explique cómo puede funcionar el algoritmo de etiquetado para segmentar cada componente individual. 
        .center
          img(src='./assets/p32.png' width="300px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 3. La imagen binaria varía mucho según el valor de umbral que se utilice. La figura muestra una imagen de la hoja de un árbol. Obtenga las imágenes binarias en T<sub>1</sub> = 150 y T<sub>2</sub> = 180 y explique los resultados comparando las imágenes binarias obtenidas. 
        .center
          img(src='./assets/p33.png' width="300px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 4. En la figura, se dan dos series simples de mosaicos de 1 y 0 que imitan una imagen de nivel de gris en una ventana de 8 × 10. Deseamos determinar su borde usando los operadores de Robert y Laplaciano. <br>(1) Obtenga el vector gradiente G<sub>x</sub> y G<sub>y</sub> de la imagen (a), usando un operador de Robert y encuentre el borde, usando T = 220.<br> (2) Obtenga la operación laplaciana de la imagen (b) y encuentre la línea de cruce por cero a partir del resultado. 
        .center
          img(src='./assets/p34.png' width="500px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 5. La imagen de una matriz de resistencia se muestra en la figura. Utilice el operador de Sobel para detectar el borde en tres valores de umbral arbitrarios diferentes.
        .center
          img(src='./assets/p35.png' width="300px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 6. La figura contiene dos niveles de ruido diferentes. Obtenga las imágenes filtradas de las imágenes utilizando un filtro mediano con media = 0.0 y desviación estándar = 2.0.
        .center
          img(src='./assets/p36.png' width="500px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 7. En la figura se muestra una línea en el marco de coordenadas x-y. Los puntos P<sub>1</sub> y P<sub>2</sub> están ubicados en la línea. <br>(1) Explique por qué la representación de líneas en coordenadas polares, &rho; = xcos&theta; + ysen&theta;, es más adecuada para la detección de líneas usando la transformada de Hough que la representación de línea estándar, y =  mx + c. <br>(2) Explique cómo la representación de línea estándar y = mx + c se puede convertir a la representación de coordenadas polares, r = xcos&theta; + ysen&theta;. <br>(3) Para la línea que se muestra en la figura, muestre la representación de línea estándar y la representación de coordenadas polares de la línea.
        .center
          img(src='./assets/p37.png' width="400px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 8. Sea un plano de imagen con un tamaño de 300&times;400 píxeles como se muestra en la figura. Para extraer la información de línea de la imagen adquirida en este plano de imagen, generalmente se utiliza una transformada de Hough. Aquí, nos gustaría obtener la resolución especificada de la línea extraída y &Delta;&rho; = 1 píxel. <br>(1) Diseñe la matriz de acumuladores A(&theta;). Suponga que el efecto de cuantización de la imagen es insignificante. Determine los valores de m y c donde m y c son los tamaños horizontal y vertical del acumulador, respectivamente. <br>(2) En este plano de imagen, se adquiere una línea denotada por AB, como se muestra en la figura. ¿Qué celda del acumulador corresponde a la línea? <br>(3) Cuando esta línea se reconstruye a partir de la celda del acumulador correspondiente, ¿cuál es el error paramétrico de la ecuación de la línea?
        .center
          img(src='./assets/p38.png' width="500px" style="margin: 10px 0px 10px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 9. Una cámara está ubicada relativamente al marco de coordenadas del mundo {W}, como se muestra en la figura. Deseamos asignar un punto en coordenadas del mundo a los puntos correspondientes en el marco de coordenadas de la imagen.
        .center
          img(src='./assets/p39A.png' width="400px" style="margin: 10px 0px 10px 0px;")
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") (1) La transformación entre las coordenadas del mundo y las coordenadas de la cámara se puede expresar usando el ángulo de Euler (&phi;,&theta; y &psi;) y traslación(a, b, c) y está dada por 
        .center
          img(src='./assets/p39B.png' width="250px" style="margin: 10px 0px 10px 0px;")
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") donde cTw viene dado por 
        .center
          img(src='./assets/p39C.png' width="600px" style="margin: 10px 0px 10px 0px;")
        p(style="padding: 15px; margin: -10px 1px 10px 1px; line-height: 1.3em; font-family: New Times Roman;") Sean los parámetros intrínsecos de la cámara dados por f = 16mm, k<sub>u</sub> = k<sub>v</sub> = 50mm<sup>-1</sup>, u<sub>0</sub> = 320, v<sub>0</sub> = 240. <br>(1) Encuentre la matriz de transformación <strong>H</strong> en la Ecuación 3.52. 
        .center
          img(src='./assets/eq3-52.png' width="400px" style="margin: 10px 0px 10px 0px;")
        p(style="padding: 15px; margin: -30px 1px 10px 1px; line-height: 1.3em; font-family: New Times Roman;") (2) Si un punto P<sub>w</sub> está ubicado en X<sub>w</sub> = [200, 600, 200] en las coordenadas del mundo, ¿cuál es el correspondiente u<sub>p</sub> en las coordenadas de píxeles? 
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 10. Considere una transformación de perspectiva que tiene <sup>~</sup>u<sub>p</sub> =  HX<sup>~</sup><sub>w</sub> donde
        .center
          img(src='./assets/p310A.png' width="250px" style="margin: 10px 0px 10px 0px;")
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") y sea
          |
          img(src='./assets/p310B.png' width="150px" style="margin: 0px 0px -10px 0px;")
          | , 
          img(src='./assets/p310C.png' width="150px" style="margin: 0px 0px -10px 0px;")
          | , 
          img(src='./assets/p310D.png' width="150px" style="margin: 0px 0px -10px 0px;")
          | , 
          img(src='./assets/p310E.png' width="160px" style="margin: 0px 0px -10px 0px;")
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") (1) Demuestre que u<sub>0</sub> y v<sub>0</sub> se pueden expresar como 
          | 
          img(src='./assets/p310F.png' width="100px" style="margin: 10px 0px -10px 0px;")
          | , 
          img(src='./assets/p310G.png' width="100px" style="margin: 10px 0px -10px 0px;")
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") (2) Demuestre que
          | 
          img(src='./assets/p310H.png' width="300px" style="margin: 10px 0px -12px 0px;")
      div.pcontainer
        p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em; font-family: New Times Roman;") 11. Considere la configuración de calibración de la cámara presentada en la sección "Calibración de la cámara". Se obtiene una imagen de patrón como se muestra en la figura <br>(1) Determine los valores de las coordenadas de los centroides de los círculos de esta imagen. <br>(2) Compare este resultado con el obtenido por la matriz de calibración de la cámara. <br>Los valores absolutos de las coordenadas de los círculos se muestran en la tabla. Discuta el error causado por la calibración.
        .center
          img(src='./assets/p311.png' height="300px" style="margin: 0px 0px 10px 0px;")
        .center
          img(src='./assets/tablep31.png' height="400px" style="margin: 0px 0px 10px 0px;")
        
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      //- .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optomechatronics',
    description: 'Machine Vision',
    path: 'optomechatronics-machine-vision/MachineVision'
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
      theme: 'Machine Vision',
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

.pcontainer {
  padding: 15px;
  margin: 3px 0px 3px 0px;
  border: 1px solid black;
}
</style>
