const questions = [
  {
    id: 1,
    Questions: "1. HTML web pages can be read and rendered by _________.",
    answers: ["Compiler", "Server", "Web Browser", "Interpreter"],
    correctIndex: 3,
  },
  {
    id: 2,
    Questions: "2. Which of the following is not a browser ?",
    answers: [
      "Microsofts Bing",
      "Netscape Navigator",
      "Mozilla Firefox",
      "Opera",
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    Questions: "3. Which HTML tag produces the biggest heading?",
    answers: ["<h7>", "<h9>", "<h4>", "<h1>"],
    correctIndex: 3,
  },
  {
    id: 4,
    Questions: "4. HTML tags are surrounded by which type of brackets.",
    answers: ["Curly", "Round", "Squart", "Angle"],
    correctIndex: 4,
  },
  {
    id: 5,
    Questions:
      "5.Tags and texts that are not directly displayed on the page are written in _____ section.",
    answers: ["<head>", "<title>", "<body>", "<html>"],
    correctIndex: 1,
  },
  {
    id: 6,
    Questions: "6. Who is Known as the father of World Wide Web (WWW)?",
    answers: [
      "Robert Cailliau",
      "Tim Thompson",
      "Charles Darwin",
      "Tim Berners-Lee",
    ],
    correctIndex: 4,
  },
  {
    id: 7,
    Questions:
      "7. Which of the following is not a browser ?What tag is used to display a picture in a HTML page?",
    answers: ["picture", "image", "img", "src"],
    correctIndex: 3,
  },
  {
    id: 8,
    Questions: "8. What should be the first tag in any HTML document?",
    answers: ["<head>", "<title>", "<html>", "<document>"],
    correctIndex: 4,
  },
  {
    id: 9,
    Questions: "9. The year in which HTML was first proposed _______.",
    answers: ["1990", "1980", "2000", "1995"],
    correctIndex: 4,
  },
  {
    id: 10,
    Questions: "10. HTML web pages can be read and rendered by _________.",
    answers: ["Compiler", "Server", "Web Browser", "Interpreter"],
    correctIndex: 3,
  },
  {
    id: 11,
    Questions: "11. Which of the following is not a browser ?",
    answers: [
      "Microsofts Bing",
      "Netscape Navigator",
      "Mozilla Firefox",
      "Opera",
    ],
    correctIndex: 1,
  },
  {
    id: 12,
    Questions: "12. Which HTML tag produces the biggest heading?",
    answers: ["<h7>", "<h9>", "<h4>", "<h1>"],
    correctIndex: 4,
  },
  {
    id: 13,
    Questions: "13. HTML tags are surrounded by which type of brackets.",
    answers: ["Curly", "Round", "Squart", "Angle"],
    correctIndex: 4,
  },
  {
    id: 14,
    Questions:
      "14.Tags and texts that are not directly displayed on the page are written in _____ section.",
    answers: ["<head>", "<title>", "<body>", "<html>"],
    correctIndex: 1,
  },
  {
    id: 15,
    Questions: "15. Who is Known as the father of World Wide Web (WWW)?",
    answers: [
      "Robert Cailliau",
      "Tim Thompson",
      "Charles Darwin",
      "Tim Berners-Lee",
    ],
    correctIndex: 4,
  },
];


function Questions(id,Questions, answers, correctIndex)
{
    return{
        isCorrect(userChoice)
        {
            return answers[correctIndex-1]===userChoice;
        },

        getOptionNode()
        {
           
            const optioncontainer=document.createElement("div");
            for(const op of answers)
            {
            const opts_div=document.createElement("div");
            opts_div.addEventListener('click',()=>{
                opts_div.style.backgroundColor="skyblue";
                document.getElementById(id).style.backgroundColor="skyblue";
                if(this.isCorrect(op))
                score+=10;
            })
            opts_div.textContent=op;
            optioncontainer.appendChild(opts_div);
            }
            return optioncontainer;
        },

        getQuestionNode()
        {
            
            const q_box=document.createElement("div");
            const newques=document.createElement("h3");
            newques.appendChild(document.createTextNode(Questions));
            q_box.appendChild(newques);
            
            const op_container=this.getOptionNode();
            q_box.appendChild(op_container);

            return q_box;
        }
    }
}

var score = 0;
var time = questions.length-1;
var sec = 60;


/*function createQuestion(questionPrompt, options, correctOptionIndex){

    const questionContainer = document.createElement("div");

    const prompt = document.createElement("h1");
    prompt.appendChild(document.createTextNode(questionPrompt));
    questionContainer.appendChild(prompt);

    const optionContainer = document.createElement("div");
    const correctOption = options[correctOptionIndex];

    for(const option of options){
        const optionDiv = document.createElement("div");
        optionDiv.addEventListener('click' , function(){
          optionDiv.style.backgroundColor = "skyblue";
            if(correctOption === option){
                alert(option + " is correct.");  
            }else{
                alert(option + " is NOT correct.");
            }
        });
        optionDiv.textContent = option;
        optionContainer.appendChild(optionDiv);
    }
    
    questionContainer.appendChild(optionContainer);
    
    return questionContainer;
};*/

const app = document.getElementById("app");

var count = 0;
const ques_len = questions.length - 1;
const all_ques = Questions(
  questions[count].id,
  questions[count].Questions,
  questions[count].answers,
  questions[count].correctIndex
);

//const prev = document.getElementsByName("prev");
//const next = document.getElementsByName("next");

next.addEventListener("click", () =>
{
   count++;
   const all_ques = Questions(
    questions[count].id,
    questions[count].Questions,
    questions[count].answers,
    questions[count].correctIndex
  );
  app.firstElementChild.replaceWith(all_ques.getQuestionNode());
  if(count > ques_len-1){
    next.disabled = true;
  }
  else{
    next.disabled = false;
    previous.disabled = false;
  }
  if(count == ques_len){
    document.getElementById("submitBtn").style.display = "block";
  }
})


previous.addEventListener("click", function(){
  count--;
  const all_ques = Questions(
    questions[count].id,
    questions[count].Questions,
    questions[count].answers,
    questions[count].correctIndex
  );
  app.firstElementChild.replaceWith(all_ques.getQuestionNode());
  if(count < 1){
    previous.disabled = true;
  }else{
    previous.disabled = false;
    next.disabled = false;
  }
})

previous.disabled=true;

const rev = document.getElementById("review");
review.addEventListener("click", function(){
  document.getElementById(count+1).style.backgroundColor = "red";
})

app.appendChild(all_ques.getQuestionNode());

const quesBox = document.getElementById("quesBox");

for (var x = 1; x <= questions.length; x++) {
  const q_box = document.createElement("div");
  q_box.setAttribute('id', x);
  q_box.addEventListener("click", function(){
    const all_ques = Questions(
    questions[q_box.innerText-1].id,
    questions[q_box.innerText-1].Questions,
    questions[q_box.innerText-1].answers,
    questions[q_box.innerText-1].correctIndex);
    count=Number(q_box.innerText-1);
    app.firstElementChild.replaceWith(all_ques.getQuestionNode());
  })

  q_box.textContent = x;
  quesBox.appendChild(q_box);
}

const start = document.getElementById("start");

start.addEventListener("click", function(){
    const min = setInterval(function(){
      time--;
      sec = 60;
    }, 60000)
    const timer = setInterval(function(){
      sec--;
      document.getElementById("timer").innerHTML=time+" Mins " + sec+" Sec";
    }, 1000) 

   const nm = document.getElementById('name').value;
   document.getElementById('userName').innerText = nm;
   const roll = document.getElementById('rollNo').value;
   document.getElementById('userId').innerText = roll;
   document.getElementById('loginDiv').style.display = "none";

})

const submit = document.getElementById("submitBtn");

submit.addEventListener("click", function(){
     document.getElementById("score").innerText =" YOUR SCORE: " +score;
     document.getElementById("scoreDiv").style.display = "flex";
     document.getElementById("timer").style.display = "none";
     const reset =  setInterval(function() {
      window.location.reload();
   }, 12000);
})




