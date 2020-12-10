// キー入力受け取り
    var num =0
window.addEventListener("keydown", function (event) {
  let str = event.key
    console.log(str)
  
    // var num =0
    if(str == messages[messageNo].charAt(num)) {
        // num = num + 1
         // console.log("true");
         num++;
         console.log(num)
    }
           else {
           console.log('false');
        };
    console.log(messages[messageNo].charAt(messages[messageNo].length - 1));
},
  true);
//  check()

const soccer ="soccer"

// お題を出力

const messages = ['soccer', 'baseball', 'basketball'];
const messageNo = Math.floor( Math.random() * messages.length);
console.log(messages[messageNo]);


// 正誤判断(仮)

// console.log(soccer == messages[messageNo]);


// if(soccer == messages[messageNo]) {
//     console.log("true");
// }
// else {
//     console.log('false');
// }


// // 一文字ずつ取得
// console.log(messages[messageNo].charAt(0));


// 正誤判定
// if(str == messages[messageNo].charAt(0)) {
//     console.log("true");
// }
// else {
//     console.log('false');
// }

// if文を関数に入れる

// function check() {
//     let num = 0
//     if(str == messages[messageNo].charAt(num)) {
//         // console.log("true");
//         num = num+ 1
//         console.log(num)
// }
// else {
//     console.log('false');
// }
// }



