function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



export const taskParser = (task) => {
  console.log("taskparser",task)
  let newTask = JSON.parse(JSON.stringify(task));
  // console.log("taskparser parsed", newTask)
  // let draggedItem
  
  newTask.answers={}
  newTask.correctans = JSON.parse(newTask.correctans.replace(/'/g, '"'))
  newTask.wronganswers = JSON.parse(newTask.wronganswers.replace(/'/g, '"'))
  newTask.answers={correctans:newTask.correctans,wronganswers:newTask.wronganswers}


  if(task.type=="2")
  {
    let indexesTab = [{"index":1,"isCorrect":false},{"index":0,"isCorrect":true},{"index":2,"isCorrect":false},{"index":0,"isCorrect":false}]
    let shuffledIndexesTab = shuffle(indexesTab);
    newTask.currentAnswers={correctans:newTask.correctans,wronganswers:newTask.wronganswers,answersIndexes:shuffledIndexesTab}
  }
  else if(task.type=="1")
  {
    newTask.currentAnswers={correctans:newTask.correctans,wronganswers:newTask.wronganswers,answersIndexes:[{}]}
  }

  newTask.maxPoints = JSON.parse(newTask.points)



  console.log("taskparser nn",newTask)
  return newTask;
};

const tasksParser = (tasks) => {
  return tasks.map(taskParser);
};

export default tasksParser;
