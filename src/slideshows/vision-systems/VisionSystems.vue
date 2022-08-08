<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" :class="{active:isActive}" @click="isActive = !isActive">{{ a = isActive ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2(v-if = '!isActive' ) Vision Systems
        h2(v-if = 'isActive') Sistemas de visión
        img(src='./assets/U.svg')
        p(v-if = '!isActive') Digital image processing for vision systems
        p(v-if = 'isActive') Procesado digital de imagenes
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
        //- <button class="ui button toggle" @click="toggle">OFF</button>
        //- .inline(v-for='category, name in slideCategories')
        //-   eg-toggle(:key='name', v-model='category.show', :width='30',
        //-             on-text='', off-text='', on-color='#ffeeaa',
        //-             @change='category.show = !category.show') 
        //-     p.label {{ category }}
            //- eg-triggered-message(:trigger='!category.show',
            //-                     :duration='3', position='top right',
            //-                     enter='bounceInRight', leave='bounceOutRight')
            //-   p(v-html="message(category)")

    slide(enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false' style="border: 1px solid black;")
      .top <sup style="font-size: 10px; margin: -10px 0 0 -30px; ">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(v-if = '!isActive' ) Course Topics
      h6(v-if = 'isActive') Temas del curso
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Unit 1</b>: Image adquisition and manipulation
          p(v-if = 'isActive') <b>Unidad temática 1</b>: Adquisición y manipulación de imágenes
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Acquiring Images</b>
          p(v-if = 'isActive') <b>Adquisición de imgenes</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Printing and Storage</b>
          p(v-if = 'isActive') <b>Impresion y almacenamiento</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Correcting Imaging Defects</b>
          p(v-if = 'isActive') <b>Corrigiendo defectos en imagenes</b>


    slide(:mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(v-if = '!isActive') Course topics
      h6(v-if = 'isActive') Temas del curso
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Unit 2</b>: Image enhancement with transformations and filters
          p(v-if = 'isActive') <b>Unidad temática 2</b>: Mejoramiento de la imagen con transformaciones y filtros
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Image Enhancement in the Spatial Domain</b>
          p(v-if = 'isActive') <b>Resaltado de imagen en el dominio espacial</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Processing Images in Frequency Space</b>
          p(v-if = 'isActive') <b>Procesado de imagenes en el dominio de la frecuencia</b>

    slide(:mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(v-if = '!isActive') Course topics
      h6(v-if = 'isActive') Temas del curso
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Uniy 3</b>: Object extraction and characteristic calculus in images
          p(v-if = 'isActive') <b>Unidad temática 3</b>: Aislamiento de objetos y cálculo de las características de una imagen
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Segmentation and Thresholding</b>
          p(v-if = 'isActive') <b>Segmentación y umbral</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Processing Binary Images</b>
          p(v-if = 'isActive') <b>Procesado de imagenes binarias</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Global Image Measurements</b>
          p(v-if = 'isActive') <b>Mediciones globales en imagenes</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Feature-Specific Measurements</b>
          p(v-if = 'isActive') <b>Mediciones de caracteristics especificas</b>


    //- slide(enter='bounceInDown'  :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Bibliography</sup>
    //-   h6 Fuentes de apoyo y consulta:
    //-   ul
    //-     li(style="margin-bottom: 1em;") The Image Processing Handbook. &emsp; John C. Russ. <br> CRC Press Taylor & Francis Group. &emsp; 6ta. Edición
    //-     li(style="margin-bottom: 1em;") Visión Computacional. &emsp; L. Enrique Sucar. <br>Instituto Nacional de Astrofísica, Óptica y Electrónica Puebla, México.
    //-     li(style="margin-bottom: 1em;") Técnicas y algoritmos básicos de vision artificial. &emsp; Ana Gonzalez Marco. <br> Editorial: Universidad de la Rioja, servicios de publicaciones, 2006
    //-     li Digital Image Processing, An algorithmic Introduction using Java. &emsp; Wilhelm Burger, Mark J. Burge. <br> Springer-Verlag London 2008, 2006. &emsp; Second edition.
   
    slide(enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics on Digital Images</sup>
      h1(v-if = '!isActive').center Digital Images
      h1(v-if = 'isActive').center Imagenes digitales

    slide(enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics on Digital Images</sup>
      h6(v-if = '!isActive') Digital Images
      h6(v-if = 'isActive') Imagenes Digital
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Image processing vs. Image editing</b>
          p(v-if = 'isActive') <b>Procesado vs. edicion de imagenes</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Image Analysis and Computer Vision</b>
          p(v-if = 'isActive') <b>Analisis de imagenes y vision por computadora</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Types of Digital Images</b>
          p(v-if = 'isActive') <b>Tipos de imagenes digitales</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Image Acquisition</b><br>The Pinhole Camera Model, The “Thin” Lens, Going Digital, Image Size and Resolution, Image Coordinate System,  Pixel Values
          p(v-if = 'isActive') <b>Adquisición de imagenes</b><br>La camara de pinhole, La lente delgada, Volviendose digital, Tamaño de la imagen y la resolución, Sistema coordenado en imagenes,  Valores de pixel
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Image File Formats</b><br>Raster versus Vector Data, Tagged Image File Format (TIFF), Graphics Interchange Format (GIF), Portable Network Graphics (PNG), JPEG, Windows Bitmap (BMP), Portable Bitmap Format (PBM), Additional File Formats</b>
          p(v-if = 'isActive') <b>Formato de archivo de imagen</b><br>Raster vs. Vector, Tagged Image File Format (TIFF), Graphics Interchange Format (GIF), Portable Network Graphics (PNG), JPEG, Windows Bitmap (BMP), Portable Bitmap Format (PBM),Formatos de imagen adcionales</b>


    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center Working with images
      h5(v-if = 'isActive').center Trabajando con imagenes
      p(v-if = '!isActive').center <b>Image processing</b>  vs. <b>Image editing</b>
      p(v-if = 'isActive').center <b>Procesado de imagenes</b>  vs. <b>Edicion de imagenes</b>
      p(v-if = '!isActive') <b>Digital image editing (digital imaging)</b>, is the manipulation of digital images using an existing software application such as Adobe Photoshop or Corel Paint.
      p(v-if = 'isActive') <b>La edición de imágenes digitales </b>, es la manipulación de imágenes digitales utilizando una aplicación de software existente, como Adobe Photoshop o Corel Paint.
      p(v-if = '!isActive') <b>Digital image processing</b>, is the conception, design, development, and enhancement of digital imaging programs.
      p(v-if = 'isActive') <b>Procesado digital de imagenes</b>, es la concepción, diseño, desarrollo y mejora de programas de imágenes digitales.

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center Working with images
      h5(v-if = 'isActive').center Trabajando con imagenes
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") <b>Computer graphics</b>, in contrast to digital image processing, concentrates on the synthesis of digital images from geometrical descriptions such as three-dimensional (3D) object models.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Los <b>gráficos por computadora</b>, a diferencia del procesamiento de imágenes digitales, se concentran en la síntesis de imágenes digitales a partir de descripciones geométricas, como modelos de objetos tridimensionales (3D).
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Similarly, image processing makes use of a number of ideas that have their origin in computational geometry and computer graphics, such as volumetric models in medical image processing.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") De manera similar, el procesamiento de imágenes hace uso de una serie de ideas que tienen su origen en la geometría computacional y los gráficos por computadora, como los modelos volumétricos en el procesamiento de imágenes médicas.


    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Image Analysis and Computer Vision
      h5(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Análisis de imágenes y visión por computadora
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Often it appears at first glance that a given image-processing task will have a simple solution, especially when it is something that is easily accomplished by our own visual system.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") A menudo, a primera vista, parece que una determinada tarea de procesamiento de imágenes tendrá una solución simple, especialmente cuando es algo que nuestro propio sistema visual puede lograr fácilmente.
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Yet in practice it turns out that developing reliable, robust, and timely solutions is difficult or simply impossible to extract meaningful information about its contents
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Sin embargo, en la práctica resulta que desarrollar soluciones confiables, sólidas y oportunas es difícil o simplemente imposible de extraer información significativa sobre su contenido.
      ul(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")
        li distinguishing an object from its background
        li following a street on a map
        li finding the bar code on a milk carton
      ul(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")
        li distinguir un objeto de su fondo
        li siguiendo una calle en un mapa
        li encontrar el código de barras en un cartón de leche
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") tasks such as these often turn out to be much more difficult to accomplish than we would expect.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Tareas como estas a menudo resultan mucho más difíciles de lograr de lo que cabría esperar.

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Image Analysis and Computer Vision
      h5(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Análisis de Imágenes y Visión por Computador
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") <b>Pattern recognition</b> is primarily a mathematical discipline that have been applied extensively to problems arising in computer vision and image analysis.
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") A good example of their successful application is optical character recognition (OCR), where robust, highly accurate turnkey solutions are available for recognizing scanned text.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") <b>El reconocimiento de patrones</b> es principalmente una disciplina matemática que se ha aplicado ampliamente a los problemas que surgen en la visión artificial y el análisis de imágenes.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Un buen ejemplo de su aplicación exitosa es el reconocimiento óptico de caracteres (OCR), donde se encuentran disponibles soluciones llave en mano sólidas y de alta precisión para reconocer el texto escaneado.
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Other applicacions
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Otras aplicaciones
      ul(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")
        li speech and audio signals
        li text documents
        li stock trades
        li finding trends in large databases
      ul(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")
        li señales de voz y audio
        li documentos de texto
        li operaciones bursátiles
        li encontrar tendencias en grandes bases de datos

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Image Analysis and Computer Vision
      h5(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Image Analysis and Computer Vision
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") <b>Computer vision</b> tackles the problem of engineering artificial visual systems capable of somehow comprehending and interpreting our real, 3D world.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") <b>La visión artificial</b> aborda el problema de la ingeniería de sistemas visuales artificiales capaces de comprender e interpretar de alguna manera nuestro mundo real en 3D.
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Popular topics in this field include
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Los temas populares en este campo incluyen
      ul(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")
        li Scene understanding
        li Object recognition
        li Motion interpretation (tracking)
        li Autonomous navigation
        li Robotic manipulation of objects in a scene
      ul(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")
        li Comprensión de la escena
        li Reconocimiento de objetos
        li Interpretación de movimiento (seguimiento)
        li Navegación autónoma
        li Manipulación robótica de objetos en una escena
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Since computer vision has its roots in artificial intelligence (AI), many AI methods were originally developed to either tackle or represent a problem in computer vision.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;") Dado que la visión por computadora tiene sus raíces en la inteligencia artificial (IA), muchos métodos de IA se desarrollaron originalmente para abordar o representar un problema en la visión por computadora.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images</sup>
      h3(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Digital Images
      h3(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;").center Imágenes digitales
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")  Every day, people work with a large variety of digital raster images.
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")  Todos los días, las personas trabajan con una gran variedad de imágenes rasterizadas digitales.
      .center
        img(src='./assets/chap02/p006-fig2-1.png' height="450px")
      p(v-if = '!isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")  They are all, as a rule, ultimately represented as rectangular ordered arrays of image elements. (pixel: image element)
      p(v-if = 'isActive' style="padding: 0px 0 0 0px; margin: 0px 0px 30px 0px; line-height: 1.4em;")  Todos ellos, por regla general, se representan en última instancia como matrices rectangulares ordenadas de elementos de imagen. (píxel: elemento de imagen)

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5.center Image acquisition
      p The process by which a scene becomes a digital image is varied and complicated.
      p In most cases, the images you work with will already be in digital form, so we only outline here the essential stages in the process.
      p As most image acquisition methods are essentially variations on the classical optical camera, we will begin by examining it in more detail.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5.center(style="margin-top: -10px;") The pinhole camera
      p  The pinhole camera is one of the simplest camera models and has been in use since the 13th century, when it was known as the “Camera Obscura”.
      p While pinhole cameras have no practical use today except to hobbyists, they are a useful model for understanding the essential optical components of a simple camera.
      p The pinhole camera consists of a closed box with a small opening on the front side through which light enters, forming an image on the opposing wall. The light forms a smaller, inverted image of the scene.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5.center(style="margin-top: -10px;") The pinhole camera
      h6.center Perspective projection
      p The height of the projection y is determined by two parameters: the fixed depth of the camera box f  and the distance Z to the object from the origin of the coordinate system.
      .center
          img(src='./assets/chap02/p007-fig2-2.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5.center The pinhole camera
      h6.center Thin lens approach
      .center
          img(src='./assets/chap02/p009-fig2-3.png')
      .center
          img(src='./assets/chap02/p007-eqn2-1b.png')
          img(src='./assets/chap02/p007-eqn2-1a.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5.center Going digital
      p What is projected on the image plane of our camera is essentially a two-dimensional (2D), time-dependent, continuous distribution of light energy.
      p In order to convert this image into a digital image on our computer, the following three main steps are necessary:
      ol
        li The continuous light distribution must be <b>spatially sampled</b>.
        li This resulting function must then be <b>sampled in time</b> to create a single (still) image.
        li Finally, the resulting values must be <b>quantized</b> to a finite range of integers (or floating-point values) such that they can be represented by digital numbers.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Step 1: Spatial sampling
      p The <b>spatial sampling</b> of an image (i.e., the conversion of the continuous signal to its discrete representation) depends on the geometry of the sensor elements of the acquisition device.
      .center
          img(src='./assets/chap02/p009-fig2-4.png' height="300px")
      p The individual sensor elements are arranged in ordered rows, almost always at right angles to each other, along the sensor plane.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5.center Step 2: Temporal sampling
      p <b>Temporal sampling</b> is carried out by measuring at regular intervals the amount of light incident on each individual sensor element.
      p The CCD in a digital camera does this by triggering the charging process and then measuring the amount of electrical charge that has built up during the specified amount of time that the CCD was illuminated.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Step 3: Quantization of pixel values
      p In order to store and process the image values on the computer they are commonly converted to an <b>integer scale</b> (e.g., 256 = 2<sup>8</sup> or 4096 = 2<sup>12</sup>).
      p Occasionally floating-point values are used in professional applications, such as medical imaging.
      p Conversion is carried out using an analog to digital converter, which is typically embedded directly in the sensor electronics so that conversion occurs at image capture or is performed by special interface hardware.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Images as discrete functions
      p The result of these three stages is a description of the image in the form of a 2D, ordered matrix of integers.
      .center
          img(src='./assets/chap02/p010-fig2-5a.png' height="150px")
          img(src='./assets/chap02/p010-fig2-5b.png' height="150px")
      p Stated a bit more formally, a digital image <span style="font-family: Times;">I</span> is a <span style="font-family: Times;">2D</span> function that maps from the domain of integer coordinates <span style="font-family: Times;">NxN</span> to a range of possible pixel values P such that
      p(style="font-family: Times;").center I(u, v) ∈ P and u, v ∈ N.
      p Now we are ready to transfer the image to our computer so that we can save, compress, and otherwise manipulate it into the file format of our choice.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Image Size and Resolution
      p In the following, we assume rectangular images, and while that is a relatively safe assumption, exceptions do exist.
      p The <b>size of an image</b> is determined directly from the width <b><span style="font-family: Times;">M</span></b> (number of columns) and the height <b><span style="font-family: Times;">N</span></b> (number of rows) of the image matrix <span style="font-family: Times;">I</span>.
      p The <b>resolution of an image</b> specifies the spatial dimensions of the image in the real world and is given as the number of image elements per measurement;
      p for example, dots per inch (<b>dpi</b>) or lines per inch (<b>lpi</b>) for print production, or in pixels per kilometer for satellite images.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Image Size and Resolution
      p In most cases, the resolution of an image is the same in the horizontal and vertical directions, which means that the image elements are square.
      p Note that this is not always the case as, for example, the image sensors of most current video cameras have non-square pixels!
      p The spatial resolution of an image may not be relevant in many basic image processing steps, such as point operations or filters.
      p Precise resolution information is, however, important in cases where geometrical elements such as circles need to be drawn on an image or when distances within an image need to be measured.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Image Coordinate System
      p In order to know which position on the image corresponds to which image element, we need to impose a coordinate system.
      p In image processing the coordinate system is usually flipped in the vertical direction; that is, the <span style="font-family: Times;">y</span>-coordinate runs from top to bottom and the origin lies in the upper left corner.
      .center
          img(src='./assets/chap02/p011-fig2-6.png' height="250px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Pixel Values
      p Pixel values are practically always binary words of length k so that a pixel can represent any of <span style="font-family: Times;">2</span><sup><span style="font-family: Times;">k</span></sup> different values.
      p The value k is called the bit depth (or just “depth”) of the image. The properties of some common image types are summarized below
      .center
          img(src='./assets/chap02/p012-tab2-1.png' height="400px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Grayscale images (intensity images)
      p The image data in a grayscale image consist of a single channel that represents the intensity, brightness, or density of the image.
      p In most cases, only positive values make sense, as the numbers represent the intensity of light energy or density of film and thus cannot be negative, so typically whole integers in the range <span style="font-family: Times;">0, ..., 2<sup>k</sup>-1</span> are used.
      p For example, a typical grayscale image uses <span style="font-family: Times;">k = 8</span> bits (<span style="font-family: Times;">1</span> byte) per pixel and intensity values in the range <span style="font-family: Times;">0, ..., 255</span> where the value <span style="font-family: Times;">0</span> represents the minimum brightness (black) and <span style="font-family: Times;">255</span> the maximum brightness (white).

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Binary images
      p Binary images are a special type of intensity image where pixels can only take on one of two values, black or white. These values are typically encoded using a single bit (<span style="font-family: Times;">0/1</span>) per pixel.
      p Binary images are often used for representing line graphics, archiving documents, encoding fax transmissions, and of course in electronic printing.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Color images
      p Most color images are based on the primary colors red, green, and blue (<b>RGB</b>), typically making use of 8 bits for each color component.
      p In these color images, each pixel requires 3×8 = 24 bits to encode all three components, and the range of each individual color component is [0, 255].
      p Images with four or more color components are common in most prepress applications, typically based on the subtractive <b>CMYK</b>  (Cyan-Magenta-Yellow-Black) color model.
      p <b>Indexed</b> or <b>palette images</b> constitute a very special class of color image. The difference between an indexed image and a true color image is the number of different colors (fewer for an indexed image) that can be used in a particular image.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image acquisition</sup>
      h5 Special images
      p Special images are required if none of the above standard formats is sufficient for representing the image values.
      p Two common examples of special images are those with negative values and those with floating-point values.
      p Images with negative values arise during image processing steps, such as filtering for edge detection, and images with floating-point values are often found in medical, biological, or astronomical applications, where extended numerical range and precision are required.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats </sup>
      h5 Image File Formats
      p In practice image data must first be loaded into memory from a file.
      p Files provide the essential mechanism for storing, archiving, and exchanging image data.
      p Today there exist a wide range of standardized file formats, and developers can almost always find at least one existing format that is suitable for their application.
      p Using standardized file formats vastly increases the ease with which images can be exchanged and the likelihood that the images will be readable by other software in the long term.
      p Yet for many projects the selection of the right file format is not always simple, and compromises must be made.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Raster vs. Vector Data
      ul
        li <b>Raster images</b>: <span style="font-size: 0.8em;">contain pixel values arranged in a regular matrix using discrete coordinates.</span>
        li <b>Vector graphics</b>: <span style="font-size: 0.8em;">represent geometric objects using continuous coordinates, which are only rasterized once they need to be displayed on a physical device such as a monitor or printer.</span>
      p A number of standardized file formats exist for vector images
      ul
        li the ANSI/ISO standard format CGM (Computer Graphics Metafile)
        li SVG (Scalable Vector Graphics)
        li DXF (Drawing Exchange Format from AutoDesk),
        li AI (Adobe Illustrator),
        li PICT (QuickDraw Graphics Metafile from Apple), and
        li WMF/EMF (Windows Metafile and Enhanced Metafile from Microsoft).

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Tagged Image File Format (TIFF)
      .center
          img(src='./assets/chap02/p016-fig2-7.png' height="350px")
      p This format supports a range of grayscale, indexed, and true color images, but also special image types with large-depth integer and floating-point elements. The TIFF specification provides a range of different compression methods (LZW, ZIP, CCITT, and JPEG) and color spaces, so that it is possible, for example, to store a number of variations of an image in different sizes and representations together in a single TIFF file.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Graphics Interchange Format (GIF)
      p GIF is essentially an indexed image file format designed for color and grayscale images with a maximum depth of 8 bits and consequently it does not support true color images.
      p GIF supports color tables in the range of 2, . . . , 256, enabling pixels to be encoded using fewer bits.
      p The GIF file format is designed to efficiently encode “flat” or “iconic” images consisting of large areas of the same color.
      p It uses lossy color quantization as well as lossless LZW compression to efficiently encode large areas of the same color.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Portable Network Graphics (PNG)
      p PNG was developed as a replacement for the GIF file format.
      p It was designed as a universal image format especially for use on the Internet, and, as such, PNG supports three different types of images:
      ul
        li true color images (with up to 3 × 16 bits/pixel)
        li grayscale  images (with up to 16 bits/pixel)
        li indexed color images (with up to 256 colors).
      p Additionally, PNG includes an alpha channel for transparency with a maximum depth of 16 bits.
      p(style="margin-top: -8px;") In comparison, the transparency channel of a GIF image is only a single bit deep.
      p(style="margin-top: -8px;") The format only supports a single image per file.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 JPEG
      p(style="margin-top: -30px;") The JPEG standard defines a compression method for continuous grayscale and color images, such as those that would arise from nature photography.
      p An average data reduction of a factor of 1:16.
      p The JPEG standard supports images with up to 256 color components, and what has become increasingly important is its support for CMYK images.
      p In the case of RGB images, the algorithm consists of three main steps:
      ul
        li Color conversion and down sampling: Transformation from RGB into YC<sub>b</sub>C<sub>r</sub> space to separate the actual color from brightness Y.
        li Cosine transform and quantization in frequency space.
        li Lossless compression.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 JPEG
      .center
          img(src='./assets/chap02/p020-fig2-9.png' height="600px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Exchangeable Image File Format (EXIF)
      p The Exchangeable Image File Format (EXIF) is a variant of the JPEG format designed for storing image data originating on digital cameras, and to that end it supports storing metadata such as the type of camera, date and time, photographic parameters such as aperture and exposure time, as well as geographical (GPS) data.
      p Internally,  EXIF uses TIFF to store the metadata information and JPEG to encode a thumbnail preview image.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 JPEG-2000
      p JPEG-2000, which is specified by an ISO-ITU standard (“Coding of Still Pictures”),15 was designed to overcome some of the betterknown weaknesses of the traditional JPEG codec.
      p Among the im-provements made in JPEG-2000 are the use of larger, 64 × 64 pixel blocks and replacement of the discrete cosine transformby the wavelet transform. These and other improvements enable it to achieve significantly higher compression ratios than JPEG—up to 0.25 bits per pixel on RGB color images.
      p Despite these advantages, JPEG-2000 is supported by only a few image-processing applications and Web browsers.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Windows Bitmap (BMP)
      p The Windows Bitmap (BMP) format is a simple, and under Windows widely used, file format supporting grayscale, indexed, and true color images.
      p It also supports binary images, but not in an efficient manner, since each pixel is stored using an entire byte.
      p Optionally, the format supports simple lossless, run-length-based compression. While BMP offers storage for a similar range of image types as TIFF, it is a much less flexible format.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Portable Bitmap Format (PBM)
      p The Portable Bitmap Format (PBM) family consists of a series of very simple file formats that are exceptional in that they can be optionally saved in a human-readable text format that can be easily read in a program or simply edited using a text editor.
      .center
          img(src='./assets/chap02/p021-fig2-10a.png' height="150px")
          img(src='./assets/chap02/p021-fig2-10b.png' height="150px")
      ul
        li P2: the image is a PGM (“plain”) file stored in humanreadable format.
        li # oie.pgm: comments
        li width 17 and height 7: image dimensions
        li 255: the maximum pixel value

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 Additional File Formats
      p For most practical applications, one of the following file formats is sufficient: TIFF as a universal format and JPEG for digital color photos when storage size is a concern, and there is either PNG or GIF for when an image is destined for use on the Web.
      p In addition, there exist countless other file formats, such as those encountered in legacy applications or in special application areas where they are traditionally used. A few of the more commonly encountered types are:
      ul
        li RGB, a simple format from Silicon Graphics.
        li RAS (Sun Raster Format), a simple format from Sun Microsystems.
        li TGA (Truevision Targa File Format), is still used in medicine and biology.
        li XBM/XPM (X-Windows Bitmap/Pixmap), used in the X-Windows system and similar to PBM/PGM.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Digital Images : Image File Formats</sup>
      h5 File headers and signatures
      p Practically all image file formats contain a data header consisting of important information about the layout of the image data that follows.
      p Values such as the size of the image and the encoding of the pixels are usually present in the file header to make it easier for programmers to allocate the correct amount of memory for the image.
      p  The size and structure of this header are usually fixed, but in some formats, such as TIFF, the header can contain pointers to additional subheaders.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References</sup>
        h3 References
        ul
          li <b>Digital Image Processing</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems',
    description: '1.- Introduction and digital images',
    path: 'vision-systems'
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
      isActive: true,
      languages: ['🇺🇸', '🇲🇽']
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
// @import 'node_modules/eagle.js/dist/themes/agrume/agrume';
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

.language {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0px 0px 0px 0px;
}

</style>
