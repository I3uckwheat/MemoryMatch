let clickedArray = [];

setUp();

function randomAnswers(){
  var answers = [1,1,2,2,3,3,4,4,5];
  answers.sort(item => {
    return .5 - Math.random();
  });
  return answers;
}

function setUp(){
  const grid = document.getElementsByTagName("td");
  const answers = randomAnswers();

  for(let i = 0; i < grid.length; i++) {
    const cell = grid[i];
    cell.completed = false;
    cell.clicked = false;
    cell.value = answers[i];

    cell.addEventListener("mouseenter", function(){
      if(this.completed == false && this.clicked == false){
        this.style.background = "orange";
      }
    });

    cell.addEventListener("mouseleave", function(){
      if(this.completed == false && this.clicked == false){
        this.style.background = "blue";
      }
    });

    cell.addEventListener('click', function(){
      if(this.clicked == false && this.completed == false){
        clickedArray.push(this);
        reveal(this);
      }
    });
  }
}

function reveal(cell){
  cell.style.backgroundColor = "red";
  cell.innerHTML = cell.value;
  cell.clicked = true;
}
