document.title = "TOGGLE PASSWORD";
const pass = document.getElementById("pass");
console.log(pass);

const togglePassword = () => {
    console.log(pass.type);
    if(pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}