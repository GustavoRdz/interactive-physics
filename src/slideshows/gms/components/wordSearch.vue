
<template lang="pug">
.eg-transition
  .eg-slide-content(style="overflow: scroll;")
    div.inline letter
      input.center.data(:class='wordsFiltered' v-model='enterFirst')
    div.inline letter
      input.center.data(v-model='enterSecond')
    div.inline letter
      input.center.data(v-model='enterThird')
    div.inline letter
      input.center.data(v-model='enterFourth')
    div.inline letter
      input.center.data(v-model='enterFifth')
    
    <input :value="text" @input="event => text = event.target.value">
    //- p.center {{ words }}
    ol
      li(v-for="word in wordsFiltered1") {{ word }}

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      N: 5,
      enterFirst: '',
      enterSecond: '',
      enterThird: '',
      enterFourth: '',
      enterFifth: '',
      enterSixth: '',
      words: ['abductors', 'abducts', 'Abdul', 'Abdulla', 'Abe', 'abeam', 'abear', 'abearance', 'Abebi', 'abecedaire', 'abecedary', 'abecedaria', 'abecedarian', 'abecedarians', 'abecedaries', 'abecedarium', 'abecedarius', 'abed', 'abede', 'abedge', 'Abednego', 'abegge', 'Abey', 'abeyance', 'abeyances', 'abeyancy', 'abeyancies', 'abeyant', 'abeigh', 'ABEL', 'Abelard', 'abele', 'abeles', 'Abelia', 'Abelian', 'Abelicea', 'Abelite', 'Abell', 'Abelmoschus', 'abelmosk', 'abelmosks', 'abelmusk', 'Abelonian', 'Abelson', 'abeltree', 'Abencerrages', 'abend', 'abends', 'Abenezra', 'abenteric', 'Abeokuta'],
      wordsFiltered1: []
    }
  },
  computed: {
    wordsFiltered: function () {
      this.wordsFiltered1 = this.words
      var index
      if (this.enterFirst !== '') {
        index = 0
        this.wordsFiltered1 = this.wordsFiltered1.filter(word => {
          if (word.charAt(index) === this.enterFirst) {
            return word
          }
        })
      }
      if (this.enterSecond !== '') {
        index = 1
        this.wordsFiltered1 = this.wordsFiltered1.filter(word => {
          if (word.charAt(index) === this.enterSecond) {
            return word
          }
        })
      }
      if (this.enterThird !== '') {
        index = 2
        this.wordsFiltered1 = this.wordsFiltered1.filter(word => {
          if (word.charAt(index) === this.enterThird) {
            return word
          }
        })
      }
      if (this.enterFourth !== '') {
        index = 3
        this.wordsFiltered1 = this.wordsFiltered1.filter(word => {
          if (word.charAt(index) === this.enterFourth) {
            return word
          }
        })
      }
      if (this.enterFifth !== '') {
        index = 4
        this.wordsFiltered1 = this.wordsFiltered1.filter(word => {
          if (word.charAt(index) === this.enterFifth) {
            return word
          }
        })
      }
    }
  },
  methods: {
    // wordFilter: function (index) {
    //   var index
    //   if (this.enterFirst !== '') {
    //     index = 0
    //     this.wordsFiltered1 = this.wordsFiltered1.filter(word => {
    //       if (word.charAt(index) === this.enterFirst) {
    //         return word
    //       }
    //     })
    //   }
    // }
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
  }
}

.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
  font-size: 30px;
  color: blue;
  width: 95%;
}

.solution {
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}

.time-btn {
  width: 55px;
  font-size: 10px;
}
</style>
