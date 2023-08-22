<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
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
      //- .prev(@click.stop='previousSlide' style="float: left;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

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
    

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h3(style="margin: -20px 0 0 0; ").center Hough Transform
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") The Hough transform is a general approach to localizing any shape that can be defined parametrically within a distribution of points.
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") For example, many geometrical shapes, such as lines, circles, and ellipses, can be readily described using simple equations with only a few parameters.
      .center
        img(src='./assets/chap09/fig9-2.png' height="300px" style="margin-top: 20px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Hough transform
      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") The Hough transform is perhaps most often used for detecting straight line segments in edge maps.
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") A line segment in <span style="font-family: Times; font-weight: bold;">2D</span> can be described with two real-valued parameters using the classic slope-intercept form
      .center
        img(src='./assets/chap09/eq9-1.png' height="50px" style="margin-top: 20px;") 
      .center
        img(src='./assets/chap09/fig9-3.png' height="300px" style="margin-top: 10px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Hough Transform
      h6 Parameter space
      p(style="margin: -30px 0 10px 0; line-height: 1.4em;") The Hough transform examines all the possible line segments that run through a single given point in the image. Every line <span style="font-family: Times; font-weight: bold;">L<sub>j</sub> = &#x27E8;k<sub>j</sub>, d<sub>j</sub>&#x27E9;</span> that runs through a point <span style="font-family: Times; font-weight: bold;">p<sub>0</sub> = (x<sub>0</sub>, y<sub>0</sub>)</span> must satisfy the condition
      .center
        img(src='./assets/chap09/eq9-3.png' height="50px" style="margin-top: 20px;") 
      .center
        img(src='./assets/chap09/fig9-4.png' height="300px" style="margin-top: 20px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      p(style="margin: 30px 0 -40px 0px;") Parameter space
      .center
        img(src='./assets/chap09/eq9-3.png' height="70px" style="margin: 30px 0 0 0px;") 
      .center
        img(src='./assets/chap09/fig9-4.png' height="200px" style="margin: -170px 0 0 700px;") 
      p(style="margin: 0px 0 0 0px;") For a given <span style="font-family: Times; font-weight: bold;">k<sub>j</sub></span>, the solution for <span style="font-family: Times; font-weight: bold;">d<sub>j</sub></span> is
      .center
        img(src='./assets/chap09/eq9-4.png' height="70px" style="margin: -0px 0 0 0px;") 
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") which is another equation for a line, where now <span style="font-family: Times; font-weight: bold;">k<sub>j</sub>, d<sub>j</sub></span> are the variables and <span style="font-family: Times; font-weight: bold;">x<sub>0</sub>, y<sub>0</sub></span> are the constant parameters of the equation.
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") For an arbitrary image point <span style="font-family: Times; font-weight: bold;">p<sub>i</sub> = (x<sub>i</sub>, y<sub>i</sub>)</span>, the former equation describes the line
      .center
        img(src='./assets/chap09/eq9-5.png' height="70px" style="margin: -50px 0 0 0px;")
      p(style="margin: 30px 0 10px 0; line-height: 1.3em;") with the parameters <span style="font-family: Times; font-weight: bold;">-x<sub>i</sub>, y<sub>i</sub></span> in the so-called parameter or Hough space, spanned by the coordinates <span style="font-family: Times; font-weight: bold;">k, d</span>.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      p(style="margin: 30px 0 0 0px; line-height: 1.4em;") The relationship between <span style="font-family: Times; font-weight: bold;">(x, y)</span> image space and <span style="font-family: Times; font-weight: bold;">(k, d)</span> parameter space can be summarized as follows:
      .center
        img(src='./assets/chap09/table9-1.png' height="130px" style="margin: 20px 0 0 0px;") 
      p(style="padding: 20px; margin: 30px 0 0 0px; border: 1px solid; line-height: 1.3em; font-family: Times") If <em>N</em> lines intersect at position (<em>k'</em>, <em>d'</em>) in parameter space, then <em>N</em> image points lie on the corresponding line <em>y</em> = <em>k'x</em> + <em>d'</em> in <em>image space</em>.
      .center
        img(src='./assets/chap09/fig9-5.png' height="300px" style="margin: 10px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      h6(style="margin: -30px 0 0 0;") Accumulator map   
      p(style="margin: 30px 0 0 0px; line-height: 1.4em;") Finding the dominant lines in the image can now be reformulated as finding all the locations in parameter space where a significant number of lines intersect. 
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") This is basically the goal of the <span style="font-family: Times; font-weight: bold;">HT</span>. In order to compute the <span style="font-family: Times; font-weight: bold;">HT</span>, we must first decide on a discrete representation of the continuous parameter space by selecting an appropriate step size for the k and d axes.
      .center
        img(src='./assets/chap09/fig9-6.png' height="350px" style="margin: 20px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      h6(style="margin: -0px 0 0 0;") A Better Line Representation
      p(style="margin: 30px 0 0 0px; line-height: 1.4em;") A more practical representation is the so-called Hessian normal form <span style="font-family: Times; font-weight: bold;">(HNF)</span> for representing lines, 
      .center
        img(src='./assets/chap09/eq9-6.png' height="50px" style="margin: 0px 0 0 0px;") 
      p(style="margin: 10px 0 0 0px; line-height: 1.4em;") With the <span style="font-family: Times; font-weight: bold;">HNF</span> representation, the parameter space is defined by the coordinates <span style="font-family: Times; font-weight: bold;">θ, r</span>, and a point <span style="font-family: Times; font-weight: bold;">p = (x, y)</span> in image space corresponds to the relation
      .center
        img(src='./assets/chap09/eq9-7.png' height="50px" style="margin: -20px 0 0 0px;")
      p(style="margin: 10px 0 0 0px;") for angles in the range <span style="font-family: Times; font-weight: bold;">0 ≤ θ < π</span>
      .center
        img(src='./assets/chap09/fig9-7.png' height="250px" style="margin: 20px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Hough transform
      h6(style="margin: -0px 0 0 0;") A Better Line Representation
      p(style="margin: 30px 0 0 0px; line-height: 1.4em;") Thus, for a given image point <span style="font-family: Times; font-weight: bold;">p</span>, the associated radius <span style="font-family: Times; font-weight: bold;">r</span> is simply a function of the angle <span style="font-family: Times; font-weight: bold;">θ</span>. If we use the center of the image (of size <span style="font-family: Times; font-weight: bold;">M&times;N</span>),
      .center
        img(src='./assets/chap09/eq9-8.png' height="60px" style="margin: 30px 0 20px 0px;") 
      p(style="margin: 10px 0 0 0px; line-height: 1.4em;") With the <span style="font-family: Times; font-weight: bold;">HNF</span> representation, the parameter space is defined by the coordinates <span style="font-family: Times; font-weight: bold;">θ, r</span>, and a point <span style="font-family: Times; font-weight: bold;">p = (x, y)</span> in image space corresponds to the relation
      .center
        img(src='./assets/chap09/fig9-8.png' height="300px" style="margin: 0px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -30px 0 0 0;").center Hough transform for circles and ellipses
      h6(style="margin: -0px 0 0 0;")  Circles and Arcs
      p(style="margin: 30px 0 0 0px; line-height: 1.4em;") Since lines in <span style="font-family: Times; font-weight: bold;">2D</span> have two degrees of freedom, they could be completely specified using two real-valued parameters. In a similar fashion,  representing a circle in <span style="font-family: Times; font-weight: bold;">2D</span> requires three parameters, for example
      .center
        img(src='./assets/chap09/eq9-19B.png' height="50px" style="margin: 20px 0 0 0px;") 
      .center
        img(src='./assets/chap09/eq9-13.png' height="50px" style="margin: 20px 0 0 0px;") 
      p(style="margin: 10px 0 0 0px; line-height: 1.4em;") where <span style="font-family: Times; font-weight: bold;">x, y</span> are the coordinates of the center and <span style="font-family: Times; font-weight: bold;">&rho;</span> is the radius of the circle
      .center
        img(src='./assets/chap09/fig9-12.png' height="300px" style="margin: 0px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -30px 0 0 0;").center Hough transform for circles and ellipses
      h6(style="margin: -0px 0 0 0;")  Circles and Arcs
      p(style="margin: 30px 0 0 0px;") Accumulator
      .center
        img(src='./assets/chap09/fig9-13.png' height="400px" style="margin: 0px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -30px 0 0 0;").center Hough transform for circles and ellipses
      h6(style="margin: -0px 0 0 0;") Circles
      p(style="margin: 30px 0 0 0px;") 
      .center
        img(src='./assets/chap09/eq9-21.png' height="50px" style="margin: 20px 0 0 0px;")  
      .center
        img(src='./assets/chap09/fig9-14.png' height="400px" style="margin: 0px 0 0 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }} references </sup>
        h3 References
        ul
          li <b>Digital Image Processing</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, with use of images from the above referenced book
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems',
    description: '7.- Hough Transform',
    path: 'vision-systems-hough-transform',
    course: 'Vision Systems',
    part: null
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
