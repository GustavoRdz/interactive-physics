<template lang='pug'>
.frontpage
  .content
    h1
      span.logo
      span Physics
      span.grey  playground
    h2 An interactive site to play with physics

    iframe.github-star(src="https://ghbtns.com/github-btn.html?user=GustavoRdz&repo=Interactive-physics&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px")
    p(style="text-align: center;") Physics playground is a place to play with physics through virtual experimentation

    p(style="text-align: center;") Themes with interactive figures will be challenge you.

    .thumbnails
      .block-box.box-card(v-for='slideshow in slideshows')
        router-link(:to='slideshow.infos.path' @click.native="click")
          .embedded-slideshow-container
            component(:is="slideshow", :embedded='true',
                      :keyboardNavigation='false',
                      :mouseNavigation='false')
        .caption
          h3 {{slideshow.infos.title}}
          p.thumbnail-description {{slideshow.infos.description}}
</template>

<script>
import slideshows from 'slideshows/slideshows'

export default {
  data: function () {
    return {
      slideshows: slideshows.list
    }
  },
  mounted: function () {
    document.currentSlide = {}
  },
  methods: {
    click: function (evt) {
      evt.stopPropagation()
    }
  }
}
</script>

<style lang='scss' scoped>
@import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
@import url(https://fonts.googleapis.com/css?family=Major+Mono+Display);

.frontpage {
  width: 100%;
  height: auto;
  position: absolute;
  background-image: assetUrl("~eagle.js/dist/themes/assets/crossword.png");
  .content{
    width: 600px;
    max-width: 90%;
    margin: 0 auto;
  }
}

h1, h2, h3, h4, p {
  font-weight: normal;
  font-family: 'Patrick Hand SC'
}

h1 {
  font-size: 8em;
  margin-top: 0.5em;
  margin-bottom: 0;
  line-height: 0.8em;
  text-align: center;
}
h2 {
  font-size: 2.2em;
  margin-top: 0.4em;
  margin-bottom: 2em;
  line-height: 0.8em;
  text-align: center;
}

p {
  margin-top: 1.5em;
  font-size: 23px;
}
h3 {
  font-size: 30px;
}

.grey {
  color: #bbb
}

.box-card {
  text-align: center;
  margin-bottom: 50px;
  display: inline;
  .embedded-slideshow-container {
    position: relative;
    width: 150px;
    height: 120px;
    margin: 0 auto;
    border: 1px solid grey;
    overflow: hidden;
    margin-top: 50px;
  }
  h3, p {
    margin-bottom: 0;
    margin-top: 0;
  }
}

a {
  text-decoration: inherit;
  color: inherit;
}

.logo {
  display: inline-block;
  width: 300px;
  height:100px;
  margin-right: 0.1em;
  background-image: url(./U.svg);
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.github-star {
  display: block;
  margin: 0 auto;
  margin-top: -10px;
}

.block-box {
  display: inline-block;
  width:200px;
  height:300px;
  vertical-align: top;
}
</style>
