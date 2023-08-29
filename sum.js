// task 1 
export const  stringLength = (str) => {
if(str.length<1 || str.length >10){
   throw new Error("string length must be between 0 and 10");
}
else
    return str.length;
}
// task 2
export const reverseString =(str) => {
  const charArray = str.split('');
  const reversedArray = charArray.reverse();
  const reversedString = reversedArray.join('');
  return reversedString;
}

// task 3 
export class Calculator{
constructor (num1,num2)
{this.num1=num1;
  this.num2=num2;

}

add(){
  return this.num1+this.num2;
}

subtract(){

  return this.num1-this.num2;
}

divide(){
  if(this.num2<0)
  {
    throw new Error("cannot divide by zero");}
  else 
  {
   return parseFloat((this.num1 / this.num2).toFixed(2));
  }
}

multiply(){
  return this.num1* this.num2;
}

}

// task 4
 export const capitalizeString = (str) => {
  return str[0].toUpperCase() + str.slice(1);


 }