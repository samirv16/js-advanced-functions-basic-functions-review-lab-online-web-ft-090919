
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight="*") {
    return function(param="special") {
        return `You are ${highlight}${param}${highlight}!`
    }
}

let Calculator = {
    add: function(a, b) { return a + b },
    subtract: function(a, b) { return a - b },
    multiply: function(a, b) { return a * b },
    divide: function(a, b) { return a / b }
}

function actionApplyer(int, arr) {
     let num = int
     for ( let i = 0; i < arr.length; i++ ) {
         num = arr[i](num)
     }
     return num
}