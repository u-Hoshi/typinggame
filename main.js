let num = 0
var array = []
// const messages = ['soccer', 'baseball', 'basketball','tennis'];
// var messageNo = Math.floor( Math.random() * messages.length);
reset()
// console.log(messages[messageNo]);
const body= document.querySelector("body")
const doc = document.createElement("p")
// messages[messageNo].charAt(num).style.fontSize-'red'
doc.innerHTML = (messages[messageNo].substr(0,num))+"<span style= 'color:red';>"+(messages[messageNo]).charAt(num)+"</span>"+(messages[messageNo].slice(num+1))
// doc.innerHTML = (messages[messageNo].slice(num,7))a
// doc.createTextnode.charAt(num).style.co"lor="red"
// doc.messages[messageNo].charAt(num).style.color="red"
const now2 = 0
body.appendChild(doc)

// お題の下
const now = document.createElement("p")
now.textContent = (messages[messageNo]).charAt(num)
now.style.color='red'
body.appendChild(now)
// お題の下end

console.log(num)
// キー入力受け取り
window.addEventListener("keydown", function (event) {
  let str = event.key
  array.push(event.key);
  let strnum = array.join("")
  console.log(str);
  // const messages = ['soccer', 'baseball', 'basketball'];
  // var messageNo = Math.floor( Math.random() * messages.length);
  console.log(messages[messageNo]);
  // console.log(num);
  

    // var num =0
  // 

  // 
  
  
  // if (str == messages[messageNo].charAt(messages[messageNo].length - 1)) {
  //   reset();
  // };
  // let num =1
  if (str === messages[messageNo].charAt(num)) {
        // num = num + 1
         // console.log("true");
    num++;
    now.innerHTML = (messages[messageNo]).charAt(num)
    doc.innerHTML = (messages[messageNo].substr(0,num))+"<span style= 'color:red';>"+(messages[messageNo]).charAt(num)+"</span>"+(messages[messageNo].slice(num+1))
    console.log(num);
    console.log(strnum)
    console.log("正解")

    if (strnum.length == messages[messageNo].length){
      // if (str == messages[messageNo].charAt(messages[messageNo].length - 1)) {
    // if (messages[messageNo].charAt(messages[messageNo].slice(-1))) {
      let num = 0;
        console.log(num);
      console.log("終わり");
      array.length = 0;
        // let messageNo = Math.floor(Math.random() * messages.length);
        // console.log(messages[messageNo]);
        // console.log(messages[messageNo].charAt(num));
        reset()
      doc.innerHTML = (messages[messageNo].substr(0,num))+"<span style= 'color:red';>"+(messages[messageNo]).charAt(num)+"</span>"+(messages[messageNo].slice(num+1))
      // body.appendChild(doc)
      now.innerHTML = (messages[messageNo]).charAt(num)
      }
      
    // } else if(str == messages[messageNo].charAt(messages[messageNo].length - 2)) {
    //   // var messageNo = Math.floor( Math.random() * messages.length);
    //   console.log("おわり")
    }else {
    console.log('間違い');
    array.pop()
    console.log(strnum)
      };
  
    // console.log(messages[messageNo].charAt(messages[messageNo].length - 1));
},
  true);
//  check()


// お題を出力

// const messages = ['soccer', 'baseball', 'basketball'];
// var messageNo = Math.floor( Math.random() * messages.length);
// console.log(messages[messageNo]);

function reset() {
  console.log("リセット")
  messages = ['sepaktakraw', 'kabaddi', 'modernpentathlon','archery','cycling','triathlon','fencing'];
  messageNo = Math.floor(Math.random() * messages.length);
  console.log(messages[messageNo])
  num = 0
  console.log(num);
};


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


// game()

// 
