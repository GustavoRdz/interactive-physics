<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Hough Transform<br> Finding Simple Curves
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    //- slide(:steps=1, enter='bounceInRight' leave='bounceOutDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
    //-   h6(style="margin-top: -20px;")
    //-     | Topics on Hough Transform
    //-   .center
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Points of interest</b>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Harris corner detector</b><br><span style="font-size: 0.7em;">Local Structure Matrix, CornerResponseFunction(CRF), Determining Corner Points.</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b> Implementation</b><br><span style="font-size: 0.7em;">. Step 1: Calculating the Corner Response Function, Step 2: Selecting “Good” Corner Points, Step 3: Cleaning up</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h3(style="margin: -20px 0 0 0; ").center Hough Transform
      p The Hough transform is a general approach to localizing any shape that can be defined parametrically within a distribution of points.
      p For example, many geometrical shapes, such as lines, circles, and ellipses, can be readily described using simple equations with only a few parameters.
      .center
        img(src='./assets/chap09/fig9-2.png' height="300px" style="margin-top: -20px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Hough transform
      p The Hough transform is perhaps most often used for detecting straight line segments in edge maps.
      p A line segment in 2D can be described with two real-valued parameters using the classic slope-intercept form
      .center
        img(src='./assets/chap09/eq9-1.png' height="50px" style="margin-top: -10px;") 
      .center
        img(src='./assets/chap09/fig9-3.png' height="300px" style="margin-top: 0px;") 


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Hough Transform
      h6 Parameter space
      p The Hough transform examines all the possible line segments that run through a single given point in the image. Every line L<sub>j</sub> = &#x27E8;k<sub>j</sub>, d<sub>j</sub>&#x27E9; that runs through a point p<sub>0</sub> = (x<sub>0</sub>, y<sub>0</sub>) must satisfy the condition
      .center
        img(src='./assets/chap09/eq9-3.png' height="50px" style="margin-top: 0px;") 
      .center
        img(src='./assets/chap09/fig9-4.png' height="300px" style="margin-top: 0px;") 
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      p(style="margin: 30px 0 -40px 0px;") Parameter space
      .center
        img(src='./assets/chap09/eq9-3.png' height="70px" style="margin: 30px 0 0 0px;") 
      p(style="margin: 0px 0 0 0px;") For a given k<sub>j</sub>, the solution for d<sub>j</sub> is
      .center
        img(src='./assets/chap09/eq9-4.png' height="70px" style="margin: -0px 0 0 0px;") 
      p(style="margin: -10px 0 0 0px;") which is another equation for a line, where now k<sub>j</sub>, d<sub>j</sub> are the variables and x<sub>0</sub>, y<sub>0</sub> are the constant parameters of the equation.
      p(style="margin: 30px 0 0 0px;") For an arbitrary image point p<sub>i</sub> = (x<sub>i</sub>, y<sub>i</sub>), the former equation describes the line
      .center
        img(src='./assets/chap09/eq9-5.png' height="70px" style="margin: -50px 0 0 0px;")
      p(style="margin: 30px 0 0 0px;") with the parameters -x<sub>i</sub>, y<sub>i</sub> in the so-called parameter or Hough space, spanned by the coordinates k, d.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      p(style="margin: 30px 0 0 0px;") The relationship between (x, y) image space and (k, d) parameter space can be summarized as follows:
      .center
        img(src='./assets/chap09/table9-1.png' height="130px" style="margin: 20px 0 0 0px;") 
      p(style="padding: 20px; margin: 30px 0 0 0px; border: 1px solid; line-height: 1.3em; font-family: Times") If <em>N</em> lines intersect at position (<em>k'</em>, <em>d'</em>) in parameter space, then <em>N</em> image points lie on the corresponding line <em>y</em> = <em>k'x</em> + <em>d'</em> in <em>image space</em>.
      .center
        img(src='./assets/chap09/fig9-5.png' height="300px" style="margin: 10px                                    n   0 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      h6(style="margin: -30px 0 0 0;") Accumulator map   
      p(style="margin: 30px 0 0 0px;") Finding the dominant lines in the image can now be reformulated as finding all the locations in parameter space where a significant number of lines intersect. 
      p(style="margin: 10px 0 0 0px;") This is basically the goal of the HT. In order to compute the HT, we must first decide on a discrete representation of the continuous parameter space by selecting an appropriate step size for the k and d axes.
      .center
        img(src='./assets/chap09/fig9-6.png' height="350px" style="margin: 20px 0 0 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      h6(style="margin: -0px 0 0 0;") A Better Line Representation
      p(style="margin: 30px 0 0 0px;") A more practical representation is the so-called Hessian normal form (HNF)1 for representing lines, 
      .center
        img(src='./assets/chap09/eq9-6.png' height="50px" style="margin: 0px 0 0 0px;") 
      p(style="margin: 0px 0 0 0px;") With the HNF representation, the parameter space is defined by the coordinates θ, r, and a point p = (x, y) in image space corresponds to the relation
      .center
        img(src='./assets/chap09/eq9-7.png' height="50px" style="margin: -20px 0 0 0px;")
      p(style="margin: 0px 0 0 0px;") for angles in the range 0 ≤ θ < π
      .center
        img(src='./assets/chap09/fig9-7.png' height="250px" style="margin: 20px 0 0 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      h6(style="margin: -0px 0 0 0;") A Better Line Representation
      p(style="margin: 30px 0 0 0px;") Thus, for a given image point p, the associated radius r is simply a function of the angle θ. If we use the center of the image (of size M&times;N),
      .center
        img(src='./assets/chap09/eq9-8.png' height="50px" style="margin: 20px 0 0 0px;") 
      p(style="margin: 10px 0 0 0px;") With the HNF representation, the parameter space is defined by the coordinates θ, r, and a point p = (x, y) in image space corresponds to the relation
      .center
        img(src='./assets/chap09/fig9-8.png' height="300px" style="margin: 0px 0 0 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -30px 0 0 0;").center Hough transform for circles and ellipses
      h6(style="margin: -0px 0 0 0;")  Circles and Arcs
      p(style="margin: 30px 0 0 0px;") Since lines in 2D have two degrees of freedom, they could be completely specified using two real-valued parameters. In a similar fashion,  representing a circle in 2D requires three parameters, for example
      .center
        img(src='./assets/chap09/eq9-19B.png' height="50px" style="margin: 20px 0 0 0px;") 
      .center
        img(src='./assets/chap09/eq9-13.png' height="50px" style="margin: 20px 0 0 0px;") 
      p(style="margin: 10px 0 0 0px;") where x, y are the coordinates of the center and &rho; is the radius of the circle
      .center
        img(src='./assets/chap09/fig9-12.png' height="300px" style="margin: 0px 0 0 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -30px 0 0 0;").center Hough transform for circles and ellipses
      h6(style="margin: -0px 0 0 0;")  Circles and Arcs
      p(style="margin: 30px 0 0 0px;") Accumulator
      .center
        img(src='./assets/chap09/fig9-13.png' height="400px" style="margin: 0px 0 0 0px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -30px 0 0 0;").center Hough transform for circles and ellipses
      h6(style="margin: -0px 0 0 0;") Ellipses
      p(style="margin: 30px 0 0 0px;") 
      .center
        img(src='./assets/chap09/eq9-21.png' height="50px" style="margin: 20px 0 0 0px;")  
      .center
        img(src='./assets/chap09/fig9-14.png' height="400px" style="margin: 0px 0 0 0px;") 

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }} references </sup>
        h3 References
        ul
          li <b>Digital Image Processing</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems',
    description: 'Hough Transform',
    path: 'vision-systems-hough-transform'
  },
  components: {
  },
  data: function () {
    return {
      theme: 'Hough transform'
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
