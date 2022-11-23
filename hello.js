const form = document.getElementById('form');
const display = document.getElementById('display');
// const age = form.age.value; 
var letters = /^[A-Za-z- ]+$/;
var numbers = /^[0-9]+$/;

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const inputArray = Array(e.srcElement)[0];
    const {name,age,email,password,regNo,pincode,url} = inputArray;

    const inputName = name.value;
    const inputAge = age.value;
    const inputEmail = email.value;
    const inputPassword = password.value;
    const inputRegNo = regNo.value;
    const inputPincode = pincode.value;
    const inputUrl = url.value;

    // checking input tags
    if(!name || !email || !password || !regNo){
        return document.write("Not getting input tags.");
    }

    // checking for empty inputs and name validation
    if(!inputName || !inputEmail || !inputPassword || !inputRegNo){
        return document.write("fill the credentials.");
    }

    // name validation
    if(inputName){
        if(!inputName.match(letters)){
            return document.write("name should be a string only");
        }
        // checking length of name
        if(inputName.length<4 || inputName.length>10){
           return document.write(` name should have 4-10 length`);
        }  
    }

    // checking valid registration number
     if(inputRegNo){
        if(!inputRegNo.includes("BCG")){
            return document.write("Enter a valid gaming registration number")
        }
    }

    // age validation
    if(inputAge){
        if(!inputAge.match(numbers)){
           return  document.write("Age should be in number 0-9");
        }
        if(!inputAge<=30){
            return document.write(" please fill a valid age");
        }
    }

    alert("Form submitted successfully...");
});