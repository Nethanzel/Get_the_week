let date = new Date();
let today = date.getDay();

while (today > 0) {
  //gets the sunday
  date.setDate(date.getDate() - 1);
  today--;
}

let sunday = new Date(date);
let week = [sunday];
let increase = 6;

while (increase > 0) {
  //gets the week range starting from the sunday (date up here)
  let newDate = new Date(date.setDate(date.getDate() + 1));
  week.push(newDate);
  increase--;
}
console.log(week);
