// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; // /.\*d+.*/

// const regexPassword = /.*\d+.*/;
// //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?!.*\s).{6,10}$/

// const validation = (inputs) => {
//   const errors = {};

//   if (!regexEmail.test(inputs.email)) {
//     errors.email = "El email ingresado no es válido Rick";
//   }
//   if (!inputs.email) {
//     errors.email = "Debe ingresar un email";
//   }
//   if (inputs.email.length > 35) {
//     errors.email = "El email no deve superar los 35 caracteres";
//   }
//   if (!regexPassword.test(inputs.password)) {
//     errors.password = "La contraseña debe contener al menos un mumero";
//   }
//   if (inputs.password.length < 6 && inputs.password > 10) {
//     errors.password = "la contraseña debe tener entre 6 y 10 caracteres";
//   }

//   return errors;
// };

// export default validation;

const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es válido Rick';
    }
    if(!userData.email){ // userData.email.length === ''
        errors.email = 'debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe tener un tamaño entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;