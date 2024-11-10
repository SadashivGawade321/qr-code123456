// Handle the form submission
document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve input values
    const studentName = document.getElementById('studentName').value.trim();
    const prnNumber = document.getElementById('prnNumber').value.trim();
  
    // Check if all fields are filled
    if (!studentName || !prnNumber) {
      alert("Please fill all the fields.");
      return;
    }
  
    // Format the data for the QR code
    const data = `${studentName},${prnNumber}`;
  
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';
  
    // Generate the new QR code
    new QRCode(document.getElementById("qrcode"), {
      text: data,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });
  