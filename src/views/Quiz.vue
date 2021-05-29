<template>
  <div class="app-quiz">
    <div v-show="false">loading...</div>
    <div class="question">
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
export default {
  name: 'Quiz',
  data() {
    return {
      question: {
        title:"新冠肺炎的最长潜伏期一般是多久？",
        answerA:"1-2天",
        answerB:"3-7天",
        answerC:"14天",
        answerD:"28天",
        answer:"C",
        analytic:
          "新型冠状病毒感染性肺炎属于呼吸道传播性疾病，该病一般最常见的传播途径有飞沫传播，气溶胶传播，粪口传播及眼部粘膜传播，潜伏期一般为3-5天，最长不超过14天左右，也有因人而异，超过以上天数。或许以无症状感染者，不发病。该病确诊有赖于核酸病毒检测，同时做好多饮水，勤洗手，出门戴口罩，避免人群聚集，导致交叉感染。"
      },
      result: null,
      selectedAnswer: null,
    }
  },
  methods: {
    answerSelected(answer)  {
      // block re-answer
      if (this.result !== null) return;
      // check if the answer is correct
      this.result = answer === this.question.answer ? 'T' : 'F'
      this.selectedAnswer = answer;
      console.log(`answer ${answer} is selected, the answer is ${this.result}`);
    },
    refreshQuestion() {
      this.result = null;
      this.selectedAnswer = null;
    },
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