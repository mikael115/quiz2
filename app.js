const quiz = [
  {question: '大包平の収蔵先は？',
    answers: [
    '東京国立博物館',
    '東京都美術館',
    '刀剣博物館',
    '備前長船刀剣博物館'
  ],
  correct: '東京国立博物館'
  }, {
    question: '膝丸の最後の名前は？',
    answers: [
      '膝丸',
      '吼丸',
      '薄緑',
      '蜘蛛切'
    ],
    correct: '薄緑'
  } , {
    question: 'では髭切の最後の名前は？',
    answers: [
      '鬼切',
      '友切',
      '獅子ノ子',
      '髭切'
    ],
    correct: '髭切'
  } , {
    question: '山姥切長義ははたして本当に山姥を切ったのか…………いやこの話はやめよう。長義のイメージカラーは？',
    answers: [
      '青',
      '黄色',
      '緑',
      '白'
    ],
    correct: '青'
  } , {
    question: 'この中でもちマス"ミニ"が出ていないのは？',
    answers: [
      '鶴丸',
      '鶯丸',
      '蛍丸',
      '大包平'
    ],
    correct: '大包平'
  } , {
    question: '南泉一文字が「猫斬った」のはどこに所蔵されていた時？',
    answers: [
      '尾張徳川家',
      '足利将軍家',
      '徳川家康',
      '豊臣家'
    ],
    correct: '足利将軍家'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('そういうことよ');
    score++;
  }else {
    window.alert('残念です……');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解率は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
