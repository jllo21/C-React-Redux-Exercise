//Regex validate for email
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
//Validate email input
export const validateEmail = (input: string) =>{
    //Regex check email input
    return validEmailRegex.test(input)
  }