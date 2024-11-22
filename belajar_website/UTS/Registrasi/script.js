// JavaScript to show pop-up when form is submitted
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from actually submitting
  
  // Show a success pop-up
  alert('Anda berhasil mendaftar!'); 
  
  // Optionally, clear form fields after submission
  document.getElementById('registrationForm').reset();
  
  // Redirect to the login page after a short delay
  setTimeout(function() {
    window.location.href = "../Login/index.html"; // Redirect to login page
  }, 1000); // 1000 milliseconds = 1 second
});