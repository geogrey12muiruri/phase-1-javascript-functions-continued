// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
let wrapAdjective = function(valueAdjective= "*") {
    return function (emphatic = "a hard workor") {
        return `You are ${valueAdjective}${emphatic}${valueAdjective}!`;
    };
};
