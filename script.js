const questions = [
  {
    question: "When is his birthday?",
    options: ["12th January", "24th January", "1st February", "15th March"],
    answer: "24th January"
  },
  {
    question: "What is his favorite food?",
    options: ["Rice and Chicken", "Pizza", "Matooke and Gnuts", "Burgers"],
    answer: "Matooke and Gnuts"
  },
  {
    question: "How old is he?",
    options: ["21", "23", "25", "27"],
    answer: "23"
  },
  {
    question: "What are his best colors?",
    options: ["Red and Blue", "Black and White", "Green and Yellow", "Purple and Pink"],
    answer: "Black and White"
  },
  {
    question: "What is his favorite phone brand?",
    options: ["Apple", "Samsung", "Huawei", "Google"],
    answer: "Samsung"
  },
  {
    question: "How much does he love sex?",
    options: ["50%", "60%", "70%", "80%"],
    answer: "70%"
  },
  {
    question: "What does he love about his wife?",
    options: ["Hair and Smile", "Eyes and Voice", "Body Height and Personality", "Fashion sense and Cooking"],
    answer: "Body Height and Personality"
  }
];

function displayQuestions() {
  let html = "";
  questions.forEach((q, index) => {
    html += `<div>
              <p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(opt => {
      html += `<input type="radio" id="q${index}_${opt}" name="q${index}" value="${opt}">
               <label for="q${index}_${opt}">${opt}</label><br>`;
    });
    html += `</div>`;
  });
  document.getElementById('questions').innerHTML = html;
}

function checkAnswers() {
  let correctCount = 0;
  let wrongAnswers = [];

  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    
    if (!selectedOption) {
      wrongAnswers.push({ question: q.question, correctAnswer: q.answer });
      return;
    }

    if (selectedOption.value === q.answer) {
      correctCount++;
    } else {
      wrongAnswers.push({ question: q.question, correctAnswer: q.answer });
    }
  });

  let resultMessage = `You got ${correctCount} out of ${questions.length} correct!\n\n`;

  if (wrongAnswers.length > 0) {
    resultMessage += "Questions you got wrong:\n";
    wrongAnswers.forEach((wrong, index) => {
      resultMessage += `${index + 1}. ${wrong.question} - Correct Answer: ${wrong.correctAnswer}\n`;
    });
  }

  alert(resultMessage);
}

displayQuestions();


