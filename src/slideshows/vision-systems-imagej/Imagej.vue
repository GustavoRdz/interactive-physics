<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Introduction to ImageJ, Histograms and Image Statistics
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=6, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Topics</sup>
      h6
        | Topics on ImageJ
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Software for Digital Imaging </b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>ImageJ Overview</b><br>Key Features, Interactive Tools, Image tools, processing tools, analyze tools, ImageJ Plugins,
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Histograms and Image Statistics</b><br>What is a Histogram?, Interpreting Histograms, Calculating Histograms, Histograms of Images with More than 8 Bits, Histograms of Color Images, The Cumulative Histogram, Statistical Information from the Histogram, Block Statistics

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Introduction to ImageJ</sup>
      h5 Software for Digital Imaging
        p Traditionally, software for digital imaging has been targeted for manipulating or processing images

        p Software packages for manipulating images, such as Adobe Photoshop, Corel Paint, and others, usually offer a convenient user interface and a large number of readily available functions and tools for working with images interactively.
        p In contrast to the aforementioned category of tools, digital image processing software primarily aims at the requirements of algorithm and software developers, scientists, and engineers working with images.
        p Popular examples are Khoros/Accusoft, MatLab, ImageMagick, among many others.
        p In practice, image manipulation and image processing are of course closely related. Image processing is really at the base of any image manipulation software and certainly not an entirely different category.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Introduction to ImageJ</sup>
      h5.center ImageJ Overview
      p ImageJ, is a combination of both worlds image manipulation and processing.
      p It offers a set of ready-made tools for viewing and interactive manipulation of images but can also be extended easily by writing new software components in a “real” programming language.
      p ImageJ is thus an ideal platform for education and self-training in digital image processing but is also in regular use for serious research and application development at many laboratories around the world, particularly in biological and medical imaging.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Introduction to ImageJ</sup>
      h4.center Key Features
      p Key features of ImageJ are:
      ul
        li(style="margin-bottom: 20px;") A set of ready-to-use, interactive tools for creating, visualizing, editing, processing, analyzing, loading, and storing images, with support for several common file formats. ImageJ also provides “deep” 16-bit integer images, 32-bit floating-point images, and image sequences (“stacks”).
        li(style="margin-bottom: 20px;")  A simple plugin mechanism for extending the core functionality of ImageJ by writing (usually small) pieces of Java code.
        li A macro language and the corresponding interpreter, which make it easy to implement larger processing blocks by combining existing functions without any knowledge of Java.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") ImageJ
      .center
        img(src='./assets/imagejGenerated/imagejabout.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") ImageJ page
      .center
        img(src='./assets/imagejGenerated/imagejPage.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") ImageJ Menus
      h5 Main menu
      .center
        img(src='./assets/imagejGenerated/mainMenu.png')
      h5 Tools menu
      .center
        img(src='./assets/imagejGenerated/toolsMenu.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") Image menu
      .center
        img(src='./assets/imagejGenerated/imageMenuExploded.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") Process menu
      .center
        img(src='./assets/imagejGenerated/processMenuExploded.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") Analyze menu
      .center
        img(src='./assets/imagejGenerated/analyzeMenuExploded.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : ImageJ</sup>
      h3.center(style="margin-top: -10px;") Plugin menu
      .center
        img(src='./assets/imagejGenerated/pluginMenuExploded.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Histograms</sup>
      h5.center Histograms and Image Statistics
      p Histograms are used to depict image statistics in an easily interpreted visual format.
      p With a histogram, it is easy to determine certain types of problems in an image.
      p In fact, histograms are so useful that modern digital cameras often provide a real-time histogram overlay on the viewfinder.
      p It is important to catch errors like this at the image capture stage because poor exposure results in a permanent loss of information, which it is not possible to recover later using image-processing techniques.
      p In addition to their usefulness during image capture, histograms are also used later to improve the visual appearance of an image and as a “forensic” tool for determining what type of processing has previously been applied to an image.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Histograms</sup>
      h5.center(style="margin-top: 0px;") What is a Histogram?
      p Histograms in general are frequency distributions, and histograms of images describe the frequency of the intensity values that occur in an image.
      .center
          img(src='./assets/chap04/p038-fig4-2.png' height="300px")
      p The histogram 
        | 
        <svg x = "0px" y="0" width="30px" height="30px" viewBox="0 0 30 30" >
            <text x = 5 y=28 style="font-family: Times; font-style: italic">h</text>
        </svg>
        | for a grayscale image
        | 
        <svg x = "0px" y="0" width="30px" height="30px" viewBox="0 0 30 30" >
            <text x = 5 y=28 style="font-family: Times; font-style: italic">I</text>
        </svg>
        | with intensity values in the range 
        |
        <svg x = "0px" y="0" width="190px" height="30px" >
            <text x = 5 y=24 style="font-family: Times; font-style: none; font-size: 30px;">I(u,v)&#8712;[0,K-2]</text>
        </svg>
        | holds exactly
        |
        <svg x = "0px" y="0" width="35px" height="30px" >
            <text x = 5 y=28 style="font-family: Times; font-style: italic; font-size: 30px;"">K</text>
        </svg>
        | entries, where 
        |
        <svg x = "0px" y="0" width="150px" height="32px" >
            <text x = 5 y=32 style="font-family: Times; font-style: italic; font-size: 23px;">K = 2
            <tspan baseline-shift = "super">8</tspan> = 256
            </text>
        </svg>
        | for a typical <span style="font-family:New Times;">8</span>-bit grayscale image.
    

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Histograms</sup>
      h5.center(style="margin-top: 0px;") What is a Histogram?
      p Each single histogram entry is defined as
      p.center <span style="font-family:New Times; font-style: italic;"><b>h</b>(i)</span> = the <span style="font-style: italic;"><b>number</b></span> of pixels in <span style="font-family:New Times; font-style: italic;">I</span> with the intensity value <span style="font-family:New Times; font-style: italic;">i</span>,
      p for all <span style="font-family:New Times;">0</span> ≤ 
        | 
        <svg x = "0px" y="0" width="18px" height="30px">
            <text x = 5 y=28 style="font-family: Times; font-style: italic">i</text>
        </svg>
        | < <span style="font-family:New Times; font-style: italic;">K</span>. More formally stated,
      p.center 
        | 
        <svg x = "0px" y="0" width="500px" height="50px">
            <text x = 0 y=35 style="font-family: Times; font-style: italic; font-size: 40px;">h(i) = {card(u,v) | I(u,v) = i }</text>
        </svg>        
      p Therefore,<br><b>h</b>(<span style="font-family:New Times;">0</span>) is the number of pixels with the value <span style="font-family:New Times;">0</span>,<br><b>h</b>(<span style="font-family:New Times;">1</span>) the number of pixels with the value <span style="font-family:New Times;">1</span>, and so forth. Finally, <b>h</b>(<span style="font-family:New Times;">255</span>) is the number of all white pixels with the maximum intensity value <span style="font-family:New Times;">255</span> = <span style="font-family:New Times; font-style: italic;">K</span><span style="font-family:New Times;">-1</span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Histograms</sup>
      h5.center(style="margin-top: 0px;") What is a Histogram?
      p The result of the histogram computation is a 1D vector <b>h</b> of length <span style="font-family:New Times; font-style: italic;">k</span>.
      .center
          img(src='./assets/chap04/p039-fig4-3.png')
      p Since the histogram encodes no information about where each of its individual entries originated in the image, it contains no information about the spatial arrangement of pixels in the image.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Histograms</sup>
      h5.center(style="margin-top: 0px;") What is a Histogram?
      p This is intentional, since the main function of a histogram is to provide statistical information, (e.g., the distribution of intensity values) in a compact form.
      p Is it possible to reconstruct an image using only its histogram?<br> Given the loss of spatial information, the answer is <b>no</b>.
      .center
          img(src='./assets/chap04/p039-fig4-4.png')
      p(style="margin-top: -10px; font-size: 0.7em;").center These images would appear different but have exactly the same histogram

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms</sup>
      h5.center(style="margin-top: -10px;") Interpreting Histograms
      p A histogram depicts problems that originate during image acquisition, such as those involving contrast and dynamic range, as well as artifacts resulting from image-processing steps that were applied to the image.
      .center
          img(src='./assets/chap04/p039-fig4-5.png' height="300px")
      p Histograms are often used to determine if an image is making effective use of its intensity range by examining the size and uniformity of the histogram’s distribution.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Image acquisition</sup>
      h5.center Image Acquisition
      p Histograms make typical exposure problems readily apparent.
      p As an example, a histogram where a large section of the intensity range at one end is largely unused while the other end is crowded with high-value peaks is representative of an improperly exposed image.
      .center
          img(src='./assets/chap04/p040-fig4-6.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Contrast</sup>
      h5.center Contrast
      p Contrast is understood as the range of intensity values effectively used within a given image.
      p A full-contrast image makes effective use of the entire range of available intensity values from <b>a = a<sub>min</sub>, . . . , a<sub>max</sub></b> with <b>a<sub>min</sub> = 0</b>, <b>a<sub>max</sub> = K−1</b> (black to white).
      .center
          img(src='./assets/chap04/p041-fig4-7.png' height="300px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Interpreting Histograms : Dynamic range</sup>
      h5(style="margin-top: -10px").center Dynamic range
      p The dynamic range of an image is the number of distinct pixel values in an image. In the ideal case, the dynamic range encompasses all <b>K</b> usable pixel values, in which case the value range is completely utilized.
      p When an image has an available range of contrast <b>a = a<sub>low</sub>, . . . , a<sub>high</sub></b>, with  <b>a<sub>min</sub> < a<sub>low</sub></b> and <b>a<sub>high</sub> < a<sub>max</sub></b>, then the maximum possible dynamic range is achieved when all the intensity values lying in this range are utilized.
      .center
          img(src='./assets/chap04/p041-fig4-8.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Image Defects</sup>
      h5.center Image Defects
      p Histograms can be used to detect a wide range of image defects that originate either during image acquisition or as the result of later image processing.
      p Since histograms always depend on the visual characteristics of the scene captured in the image, no single “ideal” histogram exists.
      p While a given histogram may be optimal for a specific scene, it may be entirely unacceptable for another.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Image Defects</sup>
      h5.center Saturation
      p Ideally the contrast range of a sensor should be greater than the range of the intensity of the light that it receives from a scene. In such a case, the resulting histogram will be smooth at both ends
      p The result is a histogram that is saturated at one or both ends of its range.
      .center
          img(src='./assets/chap04/p043-fig4-9.png' height="300px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Image Defects</sup>
      h5(style="margin-top: -10px").center Spikes and gaps
      p The intensity value distribution for an unprocessed image is generally smooth; that is, it is unlikely that isolated spikes or gaps will appear in its histogram.
      p It is also unlikely that the count of any given intensity value will differ greatly from that of its neighbors
      p While artifacts like these are observed very rarely in original images, they will often be present after an image has been manipulated, for instance, by changing its contrast.
      .center
          img(src='./assets/chap04/p043-fig4-9.png' height="300px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Image Defects</sup>
      h5(style="margin-top: -10px").center Impacts of image compression
      p Image compression also changes an image in ways that are immediately evident in its histogram.
      p As an example, during GIF compression, an image’s dynamic range is reduced to only a few intensities or colors, resulting in an obvious line structure in the histogram that cannot be removed by subsequent processing.
      .center
          img(src='./assets/chap04/p043-fig4-10.png' height="300px")
      p Generally, a histogram can quickly reveal whether an image has ever been subjected to color quantization.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Interpreting Histograms : Image Defects</sup>
      h5(style="margin-top: -10px").center Impacts of image compression
      p A simple line graphic with only two gray values (128, 255) is subjected to a compression method such as JPEG, that is not designed for line graphics but instead for natural photographs.
      p The histogram of the resulting image clearly shows that it now contains a large number of gray values that were not present in the original image, resulting in a poor-quality image that appears dirty, fuzzy, and blurred.
      .center
          img(src='./assets/chap04/p044-fig4-11.png' height="400px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Calculating Histograms</sup>
      h3 Calculating Histograms
      p Computing the histogram of an 8-bit grayscale image containing intensity values between 0 and 255 is a simple task. All we need is a set of 256 counters, one for each possible intensity value. First, all counters are initialized to zero. Then we iterate through the image I, determining the pixel value p at each location (u, v), and incrementing the corresponding counter by one. At the end, each counter will contain the number of pixels in the image that have the corresponding intensity value.
      p An image with K possible intensity values requires exactly K counter variables; for example, since an 8-bit grayscale image can contain at most 256 different intensity values, we require 256 counters.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Calculating Histograms</sup>
      h5.center Calculating Histograms (8-bits)
      p Implementing a macro
      .center
          img(src='./assets/macroHistogrma.png' height="300px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Calculating Histograms</sup>
      h5.center Histograms of Images with More than 8 Bits
      p Normally histograms are computed in order to visualize the image’s distribution on the screen. This presents no problem when dealing with images having 2<sup>8</sup> = 256 entries, but when an image uses a larger range of values, for instance 16- and 32-bit or floating-point images, then the growing number of necessary histogram entries makes this no longer practical.
      p Binning
      p Since it is not possible to represent each intensity value with its own entry in the histogram, we will instead let a given entry in the histogram represent a range of intensity values. This technique is often referred to as “binning” since you can visualize it as collecting a range of pixel values in a container such as a bin or bucket.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Calculating Histograms</sup>
      h5.center Histograms of Images with More than 8 Bits
      p In a binned histogram of size <span style="font-family: New Times; font-style: italic;">B</span>, each bin <b>h</b>(<span style="font-family: New Times; font-style: italic;">j</span>) contains the number of image elements having values within the interval [<span style="font-family: New Times; font-style: italic;">a<sub>j</sub></span>, <span style="font-family: New Times; font-style: italic;">aj</span><span style="font-family: New Times;">+1</span>), and therefore
      .center
          img(src='./assets/chap04/p046-eqn4-2.png')
      p Typically the range of possible values in <span style="font-family: New Times; font-style: italic;">B</span> is divided into bins of equal size <span style="font-family: New Times; font-style: italic;">kB = K/B</span> such that the starting value of the interval j is
      .center
          img(src='./assets/chap04/p046-math-a.png' height="80px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Calculating Histograms</sup>
      h5.center Histograms of Images with More than 8 Bits
      p Example
      p In order to create a typical histogram containing B = 256 entries from a 14-bit image, one would divide the original value range j = 0, . . . , 2<sup>14</sup>−1 into 256 equal intervals, each of length kB = 214/256 = 64. This gives the following association between pixel values and histogram bins h(0), . . . , h(255):
      .center
          img(src='./assets/chap04/p047-math-a.png' height="300px")

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}:</sup>
        h5.center Histograms of Color Images
        p When referring to histograms of color images, typically what is meant is a histogram of the image intensity (luminance) or of the individual color channels. Both of these variants are supported by practically every image-processing application and are used to objectively appraise the image quality, especially directly after image acquisition.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: </sup>
        h5.center Intensity Histograms
        p The intensity or luminance histogram hLum of a color image is nothing more than the histogram of the corresponding grayscale image, so naturally all aspects of the preceding discussion also apply to this type of histogram. The grayscale image is obtained by computing the luminance of the individual channels of the color image. When computing the luminance, it is not sufficient to simply average the values of each color channel; instead, a weighted sum that takes into account color perception theory should be computed.
        .center
          img(src='./assets/p249-eqn12-5.png')
        .center
          img(src='./assets/p249-eqn12-6.png')

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}:</sup>
        h5(style="margin-top: -10px;").center   3.5.2 Individual Color Channel Histograms
        p(style="margin-top: -30px;") Even though the luminance histogram takes into account all color channels, image errors appearing in single channels can remain undiscovered. For example, the luminance histogram may appear clean even when one of the color channels is oversaturated. In RGB images, the blue channel contributes only a small amount to the total brightness and so is especially sensitive to this problem. Component histograms supply additional information about the intensity distribution within the individual color channels.
        .center
          img(src='./assets/chap04/p049-fig4-12.png' height="450px")


    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: </sup>
        h5(style="margin-top: -10px;").center The Cumulative Histogram
        p(style="margin-top: -10px;") The cumulative histogram, which is derived from the ordinary histogram, is useful when performing certain image operations involving histograms; for instance, histogram equalization. The cumulative histogram H is defined as
        .center
          img(src='./assets/chap04/p050-eqn4-5.png' height="100px")
        p(style="margin-top: -10px;") A particular value H(i) is thus the sum of all histogram values h(j), with j ≤ i. Alternatively, we can define H recursively:
        .center
          img(src='./assets/chap04/p050-eqn4-6.png' height="100px")
        p(style="margin-top: -10px;") The cumulative histogram H(i) is a monotonically increasing function with the maximum value
        .center
          img(src='./assets/chap04/p050-eqn4-7.png' height="100px"  style="margin-top: -50px;" )
        p(style="margin-top: -10px;") that is, the total number of pixels in an image of width M and height N

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: </sup>
        h5(style="margin-top: -10px;").center The Cumulative Histogram
        .center
          img(src='./assets/chap04/p051-fig4-13.png' height="450px")
        p The cumulative histogram is useful not primarily for  viewing but as a simple and powerful tool for capturing statistical information from an image.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: </sup>
        h5(style="margin-top: -10px;").center Statistical Information from the Histogram
        p Some common statistical parameters of the image can be conveniently calculated directly from its histogram. For example, the minimum and maximum pixel value of an image I can be obtained by simply finding the smallest and largest histogram index with nonzero value,
        .center
          img(src='./assets/308.png')
        p If we assume that the histogram is already available, the advantage is that the calculation does not include the entire image but only the relatively small set of histogram elements.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}:</sup>
        h5(style="margin-top: -10px;").center Mean and Variance
        p The mean value μ of an image I (of size M × N) can be calculated as
        .center
          img(src='./assets/309.png')
        p i.e., either directly from the pixel values I(u, v) or indirectly from the histogram h (of size K), where MN = i h(i) is the total number of pixels.
        p Analogously we can also calculate the variance of the pixel values straight from the histogram as
        .center
          img(src='./assets/310.png')


    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: </sup>
        h5(style="margin-top: -10px;").center Mean and Variance
        p The mean and the variance can be calculated together in a single iteration over the image pixels or the associated histogram in the form
        .center
          img(src='./assets/311-312.png' height="150px")
        p with the quantities
        .center
          img(src='./assets/313-314.png' height="200px" style="margin-top:-50px;")
        p The above formulation has the additional numerical advantage that all summations can be performed with integer values, in contrast to the summation of floating-point values.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: </sup>
        h5(style="margin-top:-30px;").center Median
        p(style="margin-top:-50px;") The median m of an image is defined as the smallest pixel value that is greater or equal to one half of all pixel values, i.e., lies “in the middle” of the pixel values. The median can also be easily calculated from the image’s histogram.
        p To determine the median of an image I from the associated histogram it is sufficient to find the index i that separates the histogram into two halves, such that the sum of the histogram entries to the left and the right of i are approximately equal. In other words, i is the smallest index where the sum of the histogram entries below (and including) i corresponds to at least half of the image size, that is,
        .center
          img(src='./assets/315.png' height="100px" style="margin-top:-50px;")
        p the median calculation can be formulated even simpler as
        .center
          img(src='./assets/316.png' height="70px" style="margin-top:-30px;")
        p given the cumulative histogram H.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: References</sup>
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
    description: '2.- Introduction to ImageJ, Histograms and Image Statistics',
    path: 'vision-systems-imagej'
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
