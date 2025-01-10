// INPUTS
const input1 = document.querySelector(".in1");
const input2 = document.querySelector(".in2");
const input3 = document.querySelector(".in3");
const input4 = document.querySelector(".in4");
const input5 = document.querySelector(".in5");
const input6 = document.querySelector(".checkbox");
const animation = document.querySelector(".codes");
const text = document.querySelector(".error");
const loginForAll = document.querySelector('.login-for-all')
const lvls = document.querySelector(".lvls");
const singUp = document.querySelector('.singup')
const animation2 = document.querySelector('.message')
const stars = document.querySelector('.starscon')
// const charge = document.querySelector('.charge')
function btn() {
  const inputVAlue1 = input1.value;
  const inputVAlue2 = input2.value;
  const inputVAlue3 = input3.value;
  const inputVAlue4 = input4.value;
  const inputVAlue5 = input5.value;
  const inputVAlue6 = input6.value;

// if((logiq)){


//   if (!inputVAlue3.endsWith("@gmail.com") || inputVAlue3 === "@gmail.com") {
//     input3.classList.add("if-add-info-not-exact");
//   } else {
//     input3.classList.remove("if-add-info-not-exact");
//   }
//   if (!input6.checked) {
//     text.style.color = "red";
//   } else {
//     text.style.color = "black";
//   }

//   if (inputVAlue1 === "") {
//     input1.classList.add("if-add-info-not-exact");
//   } else {
//     input1.classList.remove("if-add-info-not-exact");
//   }

//   if (inputVAlue2 === "") {
//     input2.classList.add("if-add-info-not-exact");
//   } else {
//     input2.classList.remove("if-add-info-not-exact");
//   }

//   if (
//     inputVAlue4 === "" ||
//     !/\d/.test(inputVAlue4) ||
//     inputVAlue4.length < 10 ||
//     !/[A-Z]/.test(inputVAlue4)
//   ) {
//     if (!inputVAlue4.includes("@") && inputVAlue4.length >= 7) {
//       animation.classList.remove("hidden");
//       // animation.classList.toggle('message')
//       input4.classList.add("if-add-info-not-exact");
//     } else {
//       input4.classList.remove("if-add-info-not-exact");
//       //  animation.classList.remove('hidden')
//     }
//   } else {
//     input4.classList.remove("if-add-info-not-exact");
//   }
//   if (inputVAlue5 !== inputVAlue4) {
//     input5.classList.add("if-add-info-not-exact");
//   } else {
//     input5.classList.remove("if-add-info-not-exact");
//   }
//   }else{
// singUp.classList.remove('hidden')
// loginForAll.classList.add('hidden')

//   }
let isValid = true; 


if (!inputVAlue3.endsWith("@gmail.com") || inputVAlue3 === "@gmail.com") {
  input3.classList.add("if-add-info-not-exact");
  isValid = false; 
} else {
  input3.classList.remove("if-add-info-not-exact");
}

if (!input6.checked) {
  text.style.color = "red";
  isValid = false;
} else {
  text.style.color = "black";
}

if (inputVAlue1 === "") {
  input1.classList.add("if-add-info-not-exact");
  isValid = false;
} else {
  input1.classList.remove("if-add-info-not-exact");
}

if (inputVAlue2 === "") {
  input2.classList.add("if-add-info-not-exact");
  isValid = false;
} else {
  input2.classList.remove("if-add-info-not-exact");
}

if (
  inputVAlue4 === "" ||
  !/\d/.test(inputVAlue4) ||
  inputVAlue4.length < 10 ||
  !/[A-Z]/.test(inputVAlue4)
) {
  if (!inputVAlue4.includes("@") && inputVAlue4.length >= 7) {
    animation.classList.remove("hidden");
    input4.classList.add("if-add-info-not-exact");
    isValid = false;
  } else {
    input4.classList.remove("if-add-info-not-exact");
  }
} else {
  input4.classList.remove("if-add-info-not-exact");
}

if (inputVAlue5 !== inputVAlue4) {
  input5.classList.add("if-add-info-not-exact");
  isValid = false;
} else {
  input5.classList.remove("if-add-info-not-exact");
}


if (isValid) {
// charge.classList.remove('hidden')
// charge.classList.add('message')
//  singUp.classList.remove("hidden"); 
  loginForAll.classList.add("hidden"); 
  stars.classList.remove('hidden')

} else {

 console.log('this not true')

}

}



// const btnForLogin = document.querySelector('bnt-for-login')
// const originEmail = document.getElementById('origin-email')
// const originPassword = document.getElementById('origin-password')
// function  btnlogins(){

//   const originEmailValue = originEmail.value
//  const originPasswordValue = originPassword.value
// if(inputVAlue3 !== originEmailValue && inputVAlue4 !== originPasswordValue){
  
//   input2.classList.add("if-add-info-not-exact");


// }else

// input2.classList.remove("if-add-info-not-exact");
// loginForAll.classList.add('hidden')
// singUp.classList.add('hidden')
// stars.classList.remove('hidden')

// }


