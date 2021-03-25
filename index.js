let questions = [
  {
    q: "Who is the founder of Pakistan?",
    option1: "Chaudhary Rehmat Ali",
    option2: "Allama Iqbal",
    option3: "Usman Afzal",
    option4: "Muhammad Ali Jinnah",
    correct: "Muhammad Ali Jinnah",
  },
  {
    q: "How many provinces does Pakistan have?",
    option1: "1",
    option2: "4",
    option3: "7",
    option4: "5",
    correct: "4",
  },
  {
    q: "Who is the Prime Minister of Pakistan",
    option1: "Imran Khan",
    option2: "Nawaz Sharif",
    option3: "Shahbaz Sarif",
    option4: "Gen Kamar Javed Bajwa",
    correct: "Gen Kamar Javed Bajwa",
  },
  {
    q: "What is the current economic situation of Pakistan",
    option1: "Bad",
    option2: "Very Bad",
    option3: "Good",
    option4: "Satifactory",
    correct: "Very Bad",
  },
  {
    q: "How many hours you need to work at BrainX at daily basis?",
    option1: "6",
    option2: "No hours needed",
    option3: "8",
    option4: "9",
    correct: "8",
  },
  {
    q: "Which movie did the biggest bussiness",
    option1: "Avatar",
    option2: "Avengers: Endgame",
    option3: "Justice League",
    option4: "Avengers: Infinity War",
    correct: "Avengers: Endgame",
  },
  {
    q: "Which is the strongest super hero?",
    option1: "Superman",
    option2: "Ironman",
    option3: "Hulk",
    option4: "Batman",
    correct: "Superman",
  },
  {
    q: "Which one is the richest super hero among these?",
    option1: "Batman",
    option2: "Superman",
    option3: "Wonder woman",
    option4: "Flash",
    correct: "Batman",
  },
  {
    q: "What is the batman's real name?",
    option1: "Tony stark",
    option2: "Bruce Wayne",
    option3: "Spiderman",
    option4: "Clark kent",
    correct: "Bruce Wayne",
  },
  {
    q: "Who can defeat Superman?",
    option1: "Black Adam",
    option2: "Shazam",
    option3: "Venom",
    option4: "No one. Lol",
    correct: "No one. Lol",
  },
  {
    q: "Who post the funniest memes at BrainX?",
    option1: "Usman Afzal",
    option2: "Ghulam Mustafa",
    option3: "Hamza",
    option4: "Not Hamza",
    correct: "Not Hamza",
  },
  {
    q: "Which one is coldest",
    option1: "Ice",
    option2: "Ducky bhai",
    option3: "Ali haroon's jokes",
    option4: "Ice cream",
    correct: "Ducky bhai",
  },
  {
    q: "Who is gonna get raise?",
    option1: "Muhammad Umair",
    option2: "GM",
    option3: "Not Usman Afzal lol",
    option4: "Ali Haroon",
    correct: "Not Usman Afzal lol",
  },
  {
    q: "Which is the best mobile phone company?",
    option1: "Samsung",
    option2: "Red Mi",
    option3: "Oppo",
    option4: "Apple",
    correct: "Apple",
  },
  {
    q: "Which is the best operating system for programming",
    option1: "Linux",
    option2: "Windows",
    option3: "Mac OS",
    option4: "Kali Linux",
    correct: "Linux",
  },
];

function getRandomNumber() {
  return Math.floor(Math.random() * 15);
}

function generateQuestions() {
  let i = 0;
  let questionIndex = [];
  let selectedQuestion = [];

  while (true) {
    if (questionIndex.length === 4) break;
    let num = getRandomNumber();
    if (questionIndex.indexOf(num) === -1) {
      questionIndex[i] = num;
      i++;
    }
  }

  for (let j = 0; j < questionIndex.length; j++) {
    let index = questionIndex[j];
    selectedQuestion[j] = questions[index];
  }
  return selectedQuestion;
}

function renderFirstQuestion(q) {
  let element = document.getElementById("question");
  element.children[0].innerHTML = q.q;
  element.children[1].setAttribute("value", q.option1);
  element.children[2].innerHTML = q.option1;

  element.children[4].setAttribute("value", q.option2);
  element.children[5].innerHTML = q.option2;

  element.children[7].setAttribute("value", q.option3);
  element.children[8].innerHTML = q.option3;

  element.children[10].setAttribute("value", q.option4);
  element.children[11].innerHTML = q.option4;
}

function populateQuestions() {
  let i = 1;
  let len = generateQuestions().length;
  let j = 4;

  let q = generateQuestions();
  renderFirstQuestion(q[0]);

  while (i < len) {
    var element = document.getElementById("question");
    var cln = element.cloneNode(true);
    cln.id = `question:${i + 1}`;

    cln.children[0].innerHTML = q[i].q;

    cln.children[1].name = i;
    cln.children[4].name = i;
    cln.children[7].name = i;
    cln.children[10].name = i;

    cln.children[1].id = ++j;
    cln.children[1].setAttribute("value", q[i].option1);
    cln.children[2].setAttribute("for", j);
    cln.children[2].innerHTML = q[i].option1;

    cln.children[4].id = ++j;
    cln.children[4].setAttribute("value", q[i].option2);
    cln.children[5].setAttribute("for", j);
    cln.children[5].innerHTML = q[i].option2;

    cln.children[7].id = ++j;
    cln.children[7].setAttribute("value", q[i].option3);
    cln.children[8].setAttribute("for", j);
    cln.children[8].innerHTML = q[i].option3;

    cln.children[10].id = ++j;
    cln.children[10].setAttribute("value", q[i].option4);
    cln.children[11].setAttribute("for", j);
    cln.children[11].innerHTML = q[i].option4;

    document.getElementById("main").appendChild(cln);
    i++;
  }
  return q;
}
let selectedQuestions = populateQuestions();

function getChecked() {
  let count = 0;
  let checked = [];
  for (let i = 1; i < 17; i++) {
    let element = document.getElementById(`${i}`);
    if (element.checked === true) {
      checked.push(element.value);
    }
  }

  for (let i = 0; i < selectedQuestions.length; i++) {
    if (checked[i] === selectedQuestions[i].correct) {
      count++;
    }
  }
  if (count === 4) {
    return true;
  }
  document.getElementById("answers").innerHTML =
    "You have answered " + count + " questions correctly";
  return false;
}
