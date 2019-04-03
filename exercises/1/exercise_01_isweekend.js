
function isWeekend(){
    const todayDate=new Date();
    const WeekMap=["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];

    const dayInWeek = todayDate.getDate();
    return WeekMap[dayInWeek];

}

console.log("Today is " + isWeekend());
