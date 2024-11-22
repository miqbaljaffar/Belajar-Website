document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validasi email dan password
    if (email === "admin@gmail.com" && password === "admin123") {
      // Jika login berhasil, simpan status login
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "../Dashboard/index.html";
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  });
});