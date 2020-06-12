const column1 = document.getElementsByClassName('column-sub_1')[0];
const column1Text = document.getElementsByClassName('column_1_text')[0];
const column2 = document.getElementsByClassName('column-sub_2')[0];
const column2Text = document.getElementsByClassName('column_2_text')[0];
const column3 = document.getElementsByClassName('column-sub_3')[0];
const column3Text = document.getElementsByClassName('column_3_text')[0];
const column4 = document.getElementsByClassName('column-sub_4')[0];
const column4Text = document.getElementsByClassName('column_4_text')[0];
const column5 = document.getElementsByClassName('column-sub_5')[0];
const column5Text = document.getElementsByClassName('column_5_text')[0];

console.log(column1Text.innerText);

var count1 = 0;
var incrementer1 = 1;
setInterval(() => {
    count1 = count1 + incrementer1;
    column1Text.innerText = count1 + '%';
    column1.style.height = 100 - count1 + '%';

    if (count1 == 0) {
        incrementer1 = 1;
    } else if (count1 === 27) {
        incrementer1 = 0;
    }
}, 40);

var count2 = 0;
var incrementer2 = 1;
setInterval(() => {
    count2 = count2 + incrementer2;
    column2Text.innerText = count2 + '%';
    column2.style.height = 100 - count2 + '%';

    if (count2 == 0) {
        incrementer2 = 1;
    } else if (count2 === 33) {
        incrementer2 = 0;
    }
}, 40);

var count3 = 0;
var incrementer3 = 1;
setInterval(() => {
    count3 = count3 + incrementer3;
    column3Text.innerText = count3 + '%';
    column3.style.height = 100 - count3 + '%';

    if (count3 == 0) {
        incrementer3 = 1;
    } else if (count3 === 67) {
        incrementer3 = 0;
    }
}, 40);

var count4 = 0;
var incrementer4 = 1;
setInterval(() => {
    count4 = count4 + incrementer4;
    column4Text.innerText = count4 + '%';
    column4.style.height = 100 - count4 + '%';

    if (count4 == 0) {
        incrementer4 = 1;
    } else if (count4 === 30) {
        incrementer4 = 0;
    }
}, 40);

var count5 = 0;
var incrementer5 = 1;
setInterval(() => {
    count5 = count5 + incrementer5;
    column5Text.innerText = count5 + '%';
    column5.style.height = 100 - count5 + '%';

    if (count5 == 0) {
        incrementer5 = 1;
    } else if (count5 === 90) {
        incrementer5 = 0;
    }
}, 40);
