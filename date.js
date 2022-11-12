
// fir binding with the different files of the same project 
module.exports= getDate;

function getDate()
{
var today = new Date();
var options ={
  weekday: "long",
  day: "numeric",
  month: "long"
};
let day =today.toLocaleDateString("en-us",options);
return day;
}
