const taskParser = (task) => {
  let newTask = JSON.parse(JSON.stringify(task));
  // let draggedItem
  newTask.answers.correctans = JSON.parse(newTask.answer.correctans.replace(/'/g, '"'))
  newTask.answers.wronganswers = JSON.parse(newTask.answer.wronganswers.replace(/'/g, '"'))
  // newTask.dataset = newTask.dataset.map((dataSet) => {
  //   dataSet.answers = dataSet.answers.map((answer) => {
  //     answer.allanswers = JSON.parse(answer.allanswers.replace(/'/g, '"'));
  //     answer.correctans = JSON.parse(answer.correctans.replace(/'/g, '"'));
  //     return answer
  //   });
  //   dataSet.answers = dataSet.answers[0];
  //   return dataSet
  // });
  // console.log("oldtask", task,"new", newTask)
  return newTask;
};

const tasksParser = (tasks) => {
  return tasks.map(taskParser);
};

export default tasksParser;
