// Zeige Fake-Warnung direkt beim Laden
window.onload = () => {
  const warnung = document.getElementById("virus-warning");
  warnung.style.display = "block";

  // Warnung nach 3 Sekunden automatisch ausblenden
  setTimeout(() => {
    warnung.style.display = "none";
  }, 3000);
};
