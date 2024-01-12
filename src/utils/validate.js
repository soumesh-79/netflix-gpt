export const checkValidateData = (email,password) =>{
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        const isPasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
        // const isNameValid=/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)

        // if(!isNameValid) return "Name is not valid";
        if(!isEmailValid) return "Email is not valid";
        if(!isPasswordvalid) return "Password is not valid";

        return null;
}