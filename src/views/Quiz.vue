<template>
  <div class="app-quiz">
    <div v-if="question == null">loading...</div>
    <div v-if="question" class="question">
      <div class="quiz-title">{{question.title}}</div>
      <div class="quiz-option-group">
        <ul>
          <li :class="{'selected': selectedAnswer == 'A', 'true': result != null && question.answer == 'A'}" @click="answerSelected('A')">A: {{question.answerA}}</li>
          <li :class="{'selected': selectedAnswer == 'B', 'true': result != null && question.answer == 'B'}" @click="answerSelected('B')">B: {{question.answerB}}</li>
          <li :class="{'selected': selectedAnswer == 'C', 'true': result != null && question.answer == 'C'}" @click="answerSelected('C')">C: {{question.answerC}}</li>
          <li :class="{'selected': selectedAnswer == 'D', 'true': result != null && question.answer == 'D'}" @click="answerSelected('D')">D: {{question.answerD}}</li>
        </ul>
      </div>
      <div v-if="result != null" class="quiz-answer">
        <div class="answer">正确答案: {{question.answer}}</div>
        <div class="analytic">{{question.analytic}}</div>
      </div>
      <div v-if="result != null" class="quiz-action-group">
        <button class="app-btn primary" @click="refreshQuestion()">下一题</button>
      </div>
    </div>
  </div>
</template>
<script>
import * as axios from 'axios'

export default {
  name: 'Quiz',
  data() {
    return {
      question: null,
      result: null,
      selectedAnswer: null,
    }
  },
  methods: {
    /**
     * Handler: Answer Selected
     */
    answerSelected(answer)  {
      // block re-answer
      if (this.result !== null) return
      // check if the answer is correct
      this.result = answer === this.question.answer ? 'T' : 'F'
      this.selectedAnswer = answer
      console.log(`answer ${answer} is selected, the answer is ${this.result}`)
    },
    /**
     * Reset Question
     */
    refreshQuestion() {
      this.result = null
      this.selectedAnswer = null
      this.question = null
      this.pullQuestion()
    },
    /**
     * Pull Question From API
     */
    pullQuestion() {
      axios.get ('/tianapi/baike')
        .then((response) => {
          console.log(response)
          if (!response.data.newslist.length) {
            console.log('Question loading failed')
          } else {
            this.question = response.data.newslist[0]
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.refreshQuestion()
  }
}
</script>
<style lang="scss" scoped>
.app-quiz {
  .question {
    text-align: left;
    font-size: 18px;

    ul {
      padding-left: 10px;
      list-style: none;
      li {
        padding: 10px 15px;
        margin-bottom: 5px;
        background-color: $app-yellow;
        border-radius: 15px;
        border-right: 2px solid $app-orange-dark-2;
        border-bottom: 4px solid $app-orange-dark-3;
        &.true, &.selected.true {
          transition: all .5s ease-out;
          background-color: $app-green;
          border-color: $app-green-dark-3;
        }
        &.selected {
          transition: all .5s ease-out;
          background-color: $app-red;
          border-color: $app-red-dark-3;
        }
      }
    }

    .quiz-answer {
      width: 90vw;
      overflow: hidden;
      padding-left: 5px;
      animation-name: fade-slide-left;
      animation-duration: .5s;
      animation-timing-function: ease-out;

      .analytic {
        max-height: 30vh;
        overflow: scroll;
        &::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari and Opera */
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    }

    .quiz-action-group {
      padding-top: 2vh;
      text-align: center;
      button {
        width: 40vw;
      }
    }
  }
}
</style>