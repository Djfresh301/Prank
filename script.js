// Optional: kleine Verzögerung, damit es realer wirkt
setTimeout(() => {
  document.getElementById("progress").innerText = "100%";
}, 1000);
// Fake Virus-Warnung anzeigen
window.onload = () => {
  document.getElementById("fakeAlert").style.display = "block";
};

function closeAlert() {
  document.getElementById("fakeAlert").style.display = "none";
}
