const password = '11111112';
console.log(password.length); //8

if(password.length>=8 && password.includes('2')){
    let x = password.length;
    console.log("That password is mighty strong " + x);
    document.getElementById("demo").innerHTML="That password is mighty strong : " + x;
}
else if(password.length>=8){
    let x = password.length;
    console.log("That password is long enough" + x);
    document.getElementById("demo").innerHTML="That password is long enough : " + x;
}