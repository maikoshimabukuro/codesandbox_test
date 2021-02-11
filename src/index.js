// var val1 = "var変数"
// console.log(val1)

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1)

// // var変数は再宣言可能
// var val1 = "変数を再宣言"
// console.log(val1)

//let
// let val2 = "let変数";
// console.log(val2)
// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数上書き";

// const val4 = {
//   name: "まいこ",
//   age: 24,
// };

// val4.name = "maiko";
// console.log(val4);
// val4.address = "okinawa";
// console.log(val4);

// //constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

//テンプレート文字列
// const name = "まいこ";
// const age = 24;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("sss"));

// //あろー関数はreturn省略可能
// const func2 = (str) => str;
// console.log(func2("func2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   name: "maiko",
//   age: 24,
// };
// const message1 = `my name is ${myProfile.name}. age is ${myProfile.age}.`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `my name is ${name}. age is ${age}.`;
// console.log(message2);

// const myProfile = ["まいこ", 24];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}才です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は?${name}です。年齢は${age}才です。`;
// console.log(message4);

//デフォルト値
// const sayHello = (name = "aaa") => console.log(`こんにちは${name}さん`);
// sayHello()

//スプレッド公文
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFanc = (num1, num2)=>console.log(num1+num2);
// sumFanc(arr1[0], arr1[1]);
// sumFanc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const[num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["ひが", "しまぶくろ"];
// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=>console.log(`${index + 1}ばんめは${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "しまぶくろ"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// 条件式 ? true : false

// const num = 1300;
// // console.log(num.toLocaleString());

// const  formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値入れろお';
// console.log(formattedNum)

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超えてるよ" : "許容";
};
console.log(checkSum(10, 10));
