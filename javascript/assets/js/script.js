function c(){
  var a = 1;
  var b = 5; 
  var t = "";
while(a<b && b>a){
  t = t + a + b;
  a++;
  b--;
}
console.log(t);
}

c();
