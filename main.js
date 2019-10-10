const num = [3, 5, 7, 8, 2, 4]

/** Method 1 : Regular old for loop */
for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

/** Method 2 : Using forEach to reduce number of lines of code */
num.forEach(x=>console.log(x));


/** Using map : Old style */
num.map(function(x){
    return console.log(x*x)
})

/** Using map : New style */
num.map((x)=>console.log(x*x));


/** Using filter : Old style */
const even_nums = num.filter(function(x){
    if(x%2 == 0){
        return true
    }
})
console.log(even_nums);

/** Using filter : New style */
const even_nums = num.filter((x)=>(x%2 == 0) ? true : false);
console.log(even_nums);


/** Using sort : Old style */
const sorted_nums = num.sort(function(a, b){
    if(a>b){
        return 1;
    }
    else {
        return -1;
    }
})
console.log(sorted_nums);

/** Using sort : New style */
const sorted_nums = num.sort((a, b)=>a>b ? 1 : -1);
console.log(sorted_nums);


/** Using reduce : New style */
const reduced_num = num.reduce((a, b)=>a+b);
console.log(reduced_num);


// Callback - synchronous / asynchronous - promises (resolve , reject)
// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

//   var promise1 = new Promise(function(resolve, reject) {
//     resolve('Success!');
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "Success!"
//   });
  

//Closure 
