import Question from './question.js'
import Quiz from './quiz.js'

const App = (function() {
  const quizQuestion = document.querySelector('.question')
  const tracker = document.querySelector('.progress-bar')
  const progressLabel = document.querySelector('.progress-label')
  const quizChoices = document.querySelector('.choices')
  const nextButton = document.querySelector('.next')
  const restartButton = document.querySelector('.restart')

  const q1 = new Question(
    "Which Harry Potter word is now in the Oxford English Dictionary?",
    ["Hogwarts","Muggle","Voldemort","Hermoine"],
    1
  )

  const q2 = new Question(
    "Who were Harry's parents?",
    ["Henry and Maggie Potter","William and elizabeth Potter","James and Lily Potter","Sirius and Luna Potter"],
    2
  )
  const q3 = new Question(
    "Who are the muggle aunt and uncle that Harry must live with every summer?",
    ["Ned and Camilla Diddly","Vernon and Petunia Dursley","Ralph and Magnolia Dudley","Ron Hermoine Weasley"],
    1
  )
  const q4 = new Question(
    "Which of these Hogwarts professors teaches Transfiguration?",
    ["Snape","McGonagall","Sprout","Dumbledore"],
    1
  )
  const q5 = new Question(
    "Who first shows Harry the diary of Tom Riddle?",
    ["Moaning Myrtle","Nearly Headless Nick","Fawkes","Ginny Weasley"],
    0
  )
  const quiz = new Quiz([q1,q2,q3,q4,q5])
  console.log(quiz)










  // Render To DOM
    const renderProgress = ()=> {
      const index = quiz.currentIndex
      console.log(index)
     progressLabel.innerHTML = `${index+1}  of ${quiz.questions.length}`
    }
    //progress bar
    const render renderTracker = () => {
      
    }  

  const setQuestion = (elem, value) => {
    elem.innerHTML = value
  }

  const renderQuestion = ()=> {
    const question = quiz.getCurrentQuestion().question;
    console.log(question)
    setQuestion(quizQuestion, question)

  }

  const renderChoices = ()=> {
    let markup = ""
    const currentChoices = quiz.getCurrentQuestion().choices;
    currentChoices.forEach((elem, index) => {
      markup +=`
    
      <li class="choice">  
      <input type="radio" name="choice" class="choice-radio" id="choice0${index}">
      <label for="choice0${index}" class="choice-label">
        <i></i>
        <span>${elem}</span>
      </label>
    </li> 
      
      `
      console.log(elem, index)
    })
    quizChoices.innerHTML = markup
  }

  const render = ()=> {
    if (quiz.quizEndend()) {

    }
    else {
        renderQuestion()
        renderChoices()
        renderProgress()

    }
  }
  render()

})()
