document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai input dari email dan password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Cek apakah email dan password sesuai dengan admin
    if (email === "admin@gmail.com" && password === "admin123") {
      // Redirect ke halaman dashboard
      window.location.href = "dashboard.html";
    } else {
      // Tampilkan pesan kesalahan jika login gagal
      alert("Email atau password salah. Silakan coba lagi.");
    }
  });

  // Efek scroll pada elemen dengan class .fade-in atau .fade-up
  const faders = document.querySelectorAll(".fade-in, .fade-up");
  const appearOptions = { threshold: 0.5 };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
