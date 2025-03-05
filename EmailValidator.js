//regex to first part username
const regex = /^[a-zA-Z0-9]+/;
//function to validate email
function validate(email){
    return regex.test(email)
}
console.log(validate("abc"));