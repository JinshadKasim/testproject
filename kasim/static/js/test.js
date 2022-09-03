document.write('<h2>connected</h2>')
// if(a==10){
//     document.write('It is True')

// }
// else{
//     document.write('it is False')
// }

// a=Number(prompt('Enter First Number'))
// if(a%2==0){
//     document.write('it is Even')
// }
// else{
//     document.write('it is odd')
// }

// c=Number(prompt('Enter First Number'))
// d=Number(prompt('Enter First Number'))
// e=Number(prompt('Enter First Number'))
// // if(c>d){
//     document.write('it is Greater')
// }
// else if(c<d){
//     document.write('it is Lesser')
// }
// else if(c==d){
//     document.write('it is Equal')
// }
// if(c>d){
//     if(c>e){
//         document.write(c)
//     }
//     else{
//         document.write(e)
//     }
// }
// else{
//     if(d>e){
//         document.write(d)
//     }
//     else(
//         document.write(e)
//     )
// }
// a=prompt('Enter User ID')
// b=prompt('Enter Password')

// c='point break'
// d='thor'


// if(a==c){
//     if(b==d){
//     document.write('Access Granted')
//     }
// }
// else{
//     document.write('Access Denied')
// }

// if(a==c && b==d){
//     document.write("Access Granted")
// }
// else(
//     document.write("Access Denied")
// )

// a=0
// b='jinshad'
// while(a<10){
    
//     document.write(b,'<br>')
//     a++
// }

// password='thor'
// while(true){
//     a=prompt('Enter Password')
//     if(a==password){
//         document.write('Access Granted')
//         break
//     }
//     else{
//         document.write('Access Denied','<br>')
//     }

// }

// i=0
// do{
//     document.write(i)
//     i++
// }
// while(i>=5)


// for(i=0;i<=5;i++){
//     document.write(i)
// }
// t=0
// for(i=0;i<=20;i++){
//     if(i%2==0){
//         document.write(i,'<br>')
//         t=t+i
//     }

// }
// document.write(t)

// for(i=0;i<=30;i++){
//     if(i*1==i){
//         document.write(i)
//     }
// }
// a=Number(prompt('Enter a Number'))

// if(a==2){
//     document.write("prime")
// }
// else{
//     for(i=2;i<a;i++){
//         if(a%i==0){
//          document.write('Not Prime') 
//         }
//         else{
//          document.write('Prime')
//          }
//          break
// }

// }

// a=Number(prompt("enter a Number"))

// for(i=1;i<=10;i++){
//     c=a*i
//     document.write(a,'x',i,'=',c,'<br>')
// }

// a=Number(prompt("Enter a Number"))
// num1=0
// num2=1
// document.write('1','<br>')
// for(i=0;i<a;i++){
//       num3=num1+num2
//       document.write(num3,'<br>')
//       num1=num2
//       num2=num3
// }

// a=prompt('Enter a String')
// b=strlen(a)
// document.write(b)

// a=0
// q=0
// num=123
// while(num>0){
//     a=num%10
//     q=q*10+a
//     num=parseInt(num/10)
    
// }

// document.write(q)

// a=Number(prompt('Enter a Number  '))
// if(a>0){
//     alert('it is Positive')
// }
// else{
//     alert('it is Negative')
// }

// a=Number(prompt('Enter a Number  '))

// if(a%2==0){
//     alert('it is Even')
// }
// else{
//     alert('its is Odd')
// }


// a=Number(prompt('Enter first Number  '))
// b=Number(prompt('Enter second Number  '))
// c=Number(prompt('Enter third Number  '))

// if(a>b){
//     if(a>c){
//         alert(a+' is Greatest')
//     }
//     else{
//         alert(c+' is Greatest')
//     }
// } 
// else if(b>c){
//     alert(b+' is Greatest')
// }
// else{
//     alert(c+' is Greatest')
// }

// a=prompt('Enter a Day')
// if(a=='monday'){
//     alert('Today is Monday')
// }
// else if(a=='tuesday'){
//     alert('Today is tueday')
// }
// else if(a=='wednesday'){
//     alert('Today is wednesday')
// }
// else if(a=='thursday'){
//     alert('Today is thursday')
// }
// else if(a=='friday'){
//     alert('Today is friday')
// }
// else if(a=='saturday'){
//     alert('Today is saturday')
// }

// a=prompt('Enter a Day')

// switch(a){
//     case 'monday':
//         alert('today is Monday')
//     break;
//     case 'tuesday':
//         alert('today is tuesday')
//     break;
//     case 'wednesday':
//         alert('today is wednesday')
//     break;
//     case 'thursday':
//         alert('today is thursday')
//     break;
//     case 'friday':
//         alert('today is friday')
//     break;
//     case 'saturday':
//         alert('today is saturday')
//     break;
//     case 'sunday':
//         alert('today is sunday')
//     break;

// }

// function add(){
//     a=Number(prompt('Enter First Number'))
//     b=Number(prompt('Enter Second Number'))
//     c=a+b
//     document.write(c)
// }

// add();


// function add(a,b){
//     c=a+b
//     document.write(c)

// }

// add(3,5);

// function add(a,b){
//     c=a+b
//     return c
// }

// document.write(add(5,5))

// function add(){
//     a=Number(document.getElementById('inp1').value)
//     b=Number(document.getElementById('inp2').value)
//     c=a+b
//     document.getElementById('para').innerHTML=c
// }



// function check(){
//         a=Number(document.getElementById("prm").value) 
//         for(i=a-1;i>1;i--){ 
//             for(i=2;i<a;i++){
//             if(a%i==0){
//             alert("It is not a Prime Number")
//             break
//             }
//             else{
//                 alert("it is Prime Number") 
//                 break
//             }
//         }
        
        
        
// }
// }

// function fibonacci()
// {
//     num=Number(prompt("Enter a Limit"))
//     var num1=0;
//     var num2=1;
//     var sum;
//     var i=0;
//     for (i = 0; i <num; i++) 
//     {
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//         document.write(num2," ","<br>")
//     }
    
// }
  

// fibonacci();

