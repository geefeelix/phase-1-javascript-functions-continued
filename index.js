function saturdayFun(activity= "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity= "go to the office"){
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(string = "*"){
    //const result = "a hard worker";
  return function (adjective = 'special') {
  return(`You are ${string}${adjective}${string}!`)
};
};
