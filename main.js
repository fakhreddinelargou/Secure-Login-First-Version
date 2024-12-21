// INPUTS
const input1 = document.querySelector('.in1')
const input2 = document.querySelector('.in2')
const input3 = document.querySelector('.in3')
const input4 = document.querySelector('.in4')
const input5 = document.querySelector('.in5')
const input6 = document.querySelector('.checkbox')

  const text =  document.querySelector('.error')

// const lvl1 = document.querySelector('.lvl1')
// const lvl2 = document.querySelector('.lvl2')
// const lvl3 = document.querySelector('.lvl3')
const lvls = document.querySelector('.lvls')
lvls.classList.add('hidden')
// FUNCTION

function btn(){

const inputVAlue1 = input1.value
const inputVAlue2 = input2.value
const inputVAlue3 = input3.value
const inputVAlue4 = input4.value
const inputVAlue5 = input5.value
const inputVAlue6 = input6.value

if (!inputVAlue3.endsWith('@gmail.com') || inputVAlue3 === '@gmail.com'){
    input3.classList.add('if-add-info-not-exact')

}else{

    input3.classList.remove('if-add-info-not-exact')
}
if(!inputVAlue6.checked){

 text.style.color = 'red'


}else{
        console.log('good');
}

if(inputVAlue1 === ''){ 
    input1.classList.add('if-add-info-not-exact')
}else{
    input1.classList.remove('if-add-info-not-exact')
}



if(inputVAlue2 === ''){
    input2.classList.add('if-add-info-not-exact')

}else{ 
    input2.classList.remove('if-add-info-not-exact')
}

if(inputVAlue4 === '' || !/\d/.test(inputVAlue4) || inputVAlue4.length < 10 ){
 
 if( !inputVAlue4.includes('@') || !/[A-Z]/.test(inputVAlue4) ){
    lvls.classList.remove('hidden')
    lvls.classList.add('message')
 }else{
    console.log('ntg');
 }
 
    
    input4.classList.add('if-add-info-not-exact')
}else{
// if(inputVAlue4.includes('@') ){
//     // lvl1.classList.remove('hidden')
//     lvls.style.backgroundcolor = 'yellow'
// }else{
//     // lvl1.classList.add('hidden')
//     console.log('hello');

// }
//  if(/[A-Z]/.test(inputVAlue4) ){
//     // lvl2.classList.remove('hidden')
    
// }else{
//     // lvl2.classList.add('hidden')
   
// }
// if(/\d/.test(inputVAlue4) ){
//     // lvl3.classList.remove('hidden')

// }else{
//     // lvl3.classList.add('hidden')
   
// }
input4.classList.remove('if-add-info-not-exact')

}
if( inputVAlue5 !== inputVAlue4){
    input5.classList.add('if-add-info-not-exact')
}else{
    input5.classList.remove('if-add-info-not-exact')
}
}

