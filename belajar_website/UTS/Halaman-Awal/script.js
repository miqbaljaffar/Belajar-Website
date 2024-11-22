document.addEventListener("DOMContentLoaded", function () {
  // Efek muncul saat scroll
  const faders = document.querySelectorAll(".fade-in, .fade-up");
  const appearOptions = { threshold: 0.5 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  // Testimoni bergantian
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showTestimonials() {
    testimonials.forEach((testimonial, index) => {
      testimonial.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
  }

  showTestimonials(); // Tampilkan testimoni pertama
  setInterval(showTestimonials, 5000); // Ganti testimoni setiap 5 detik

  // Event listener untuk kartu layanan
  const serviceCards = document.querySelectorAll('.card-service');
  const serviceDescriptions = [
    `
      <ul>
        <li>Desain Responsif untuk Semua Perangkat</li>
        <li>Tampilan Visual yang Menarik</li>
        <li>Fungsionalitas yang Efisien</li>
        <li>Pengoptimalan Kecepatan dan Performa</li>
        <li>Fleksibilitas untuk Kustomisasi di Masa Depan</li>
      </ul>
    `,
    `
      <ul>
        <li>Penguasaan Beragam Teknologi Terbaru</li>
        <li>Pengembangan yang Disesuaikan dengan Kebutuhan</li>
        <li>Keamanan dan Skalabilitas</li>
        <li>Integrasi dengan Sistem Eksternal</li>
        <li>Proses Pengembangan Cepat</li>
      </ul>
    `,
    `
      <ul>
        <li>Strategi SEO yang Disesuaikan</li>
        <li>Optimasi On-Page dan Off-Page</li>
        <li>Pemanfaatan Data dan Analitik</li>
        <li>Fokus pada Pengalaman Pengguna (UX)</li>
        <li>Peningkatan Trafik dan Konversi</li>
      </ul>
    `
  ];

  serviceCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      // Menggunakan innerHTML untuk mendukung elemen HTML di string
      document.getElementById('serviceDescription').innerHTML = serviceDescriptions[index];
      $('#serviceModal').modal('show');
    });
  });
});
