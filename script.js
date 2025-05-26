window.onload = () => {
  const warnung = document.getElementById("virus-warning");
  warnung.style.display = "block";

  setTimeout(() => {
    warnung.style.display = "none";
  }, 3000);
};
