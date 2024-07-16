// //  01 
// let  num = 3;
// let result = 0;
// while(num>=0){
//     let data = Math.pow(num,2);
//     result = result+data
//     num = num-1
// }
// console.log(result)
// // 02 
// function om(arg){
//     let res = 0;
//     for(let i =0; i<arg.length; i++){
//         res = res+arg[i]
//     }
//     return res+" om"
// }
// let number = [1,2,3,4,55,5]
// let num2 = om(number)
// console.log(num2)
// let hexa = 0xff2
// let data2 =hexa.toString()
// console.log(  hexa )
// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This
//  is done by periodically removing one letter from the string end and attaching it to the front.
let str = 'w3resource'
let str2 = str.split('')// [w,3,r,e,s,o,u,r,c,e]
for(let i =1; i<=3; i++){
    let first = str2[0]
    let last = str2[str2.length-1]
    str2.shift()
    str2.push(first)
    first = null

    

}
console.log(str2.join(''))
// Write a JavaScript program to 
// determine whether a given year is a leap year
//  in the Gregorian calendar.
function leep( leep){
    let count = 0
    if(leep<=0){
        return " invalid data"
    }
    // leeep year 
    if(leep%100==0){
        if(leep%4){
            count++
            
        }
    }
    if(leep%4==0){
        count++;
    }
    return count

}
let leepData = -1999
let result = leep(leepData);
console.log(result)