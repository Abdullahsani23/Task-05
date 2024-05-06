var today=new Date()
var targetDate= new Date("8-14-2024")
console.log(targetDate);
var difference= targetDate-today
console.log(difference);
var remainDays=Math.ceil(difference/(1000*3600*24))
document.write(remainDays+" are left in 14th Aug 2024 ");