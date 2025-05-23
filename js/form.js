
//Form-Validierung
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");

submitButton.disabled = true;

function validateForm() {
  const fn = firstName.value.trim();
  const ln = lastName.value.trim();
  const mail = email.value.trim();
  const addr = address.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fn.length < 2) {
    submitButton.disabled = true;
    errorMessage.textContent = "Vorname ist ein Pflichtfeld";
  } else if (ln.length < 2) {
    submitButton.disabled = true;
    errorMessage.textContent = "Nachname ist ein Pfichtfeld";
  } else if (!emailPattern.test(mail)) {
    submitButton.disabled = true;
    errorMessage.textContent = "Bitte gib eine gültige E-Mail-Adresse ein.";
  } else if (addr.length < 2) {
    submitButton.disabled = true;
    errorMessage.textContent = "Adresse ist Pflichtfeld";
  } else {
    submitButton.disabled = false;
    errorMessage.textContent = "";
  }
}

firstName.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
address.addEventListener("input", validateForm);

submitButton.addEventListener("click", async () => {
  // Daten aus dem Formular lesen
  const formData = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    address: address.value.trim(),
  };

  // Daten in die Datenbank einfügen
  const result = await databaseClient.insertInto("orders", formData);

  if (result && !result.error) {
    alert(`Danke für Ihre Bestellung, ${formData.firstName} ${formData.lastName}!\nEine Bestätigung wurde an ${formData.email} gesendet.`);
  } else {
    alert("Es gab ein Problem beim Speichern der Bestellung. Bitte versuche es erneut.");
    console.error(result);
  }
});
