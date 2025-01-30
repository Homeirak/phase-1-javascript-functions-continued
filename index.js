// code your solution here
//define function saturdayFun
//returns "This Saturday, I want to (activity)!" with activity passed in as an argument during function invocation
//if no argument is passed, returns default activity of roller-skate

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());
console.log(saturdayFun("read"));

// 
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork("will work from home"));

//define a function wrapAdjective
//returns "You are ...!" with ... = adjective passed as argument
//if no argument is passed, return "You are special!""

function wrapAdjective(highlight){
    return function(adjective = "special"){
            return `You are ${highlight}${adjective}${highlight}!` 
        
    }
}
    
console.log(wrapAdjective("*"),("a hard worker"));
console.log(wrapAdjective("||"),("a dedicated programmer"));
