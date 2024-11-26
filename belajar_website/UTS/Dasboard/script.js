document.addEventListener("DOMContentLoaded", function () {
  // Initialize Chart.js chart
  const ctx = document.getElementById('orderStatusChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Selesai', 'Dalam Proses', 'Dibatalkan'],
      datasets: [{
        label: 'Status Pesanan',
        data: [12, 19, 3],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: { y: { beginAtZero: true } },
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top' },
        title: { display: true, text: 'Grafik Status Pesanan' }
      }
    }
  });

  // Show additional stats
  window.showStats = function () {
    alert('Statistik Lengkap Akan Segera Tersedia!');
  };

  // Search order functionality
  document.getElementById('searchOrder').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const orderId = row.querySelector('td:first-child').textContent.toLowerCase();
      if (orderId.includes(searchQuery)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});
