import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const handleRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registered user:", userCredential.user);
    window.location.href = "/login";
  } catch (error) {
    console.error("Error registering:", error.message);
    alert("Registration failed: " + error.message);
  }
};

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const verifPass = document.getElementById("password-confirmation").value;

    if(password !== verifPass){
        console.error("AAAAAAAAAAAAA it doesnt work!")
        throw new error("AAAAAAAAAAAAA it doesnt work!")
    }

    await handleRegister(email, password);
});