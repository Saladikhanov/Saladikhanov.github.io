fetch("https://formsubmit.co/ajax/saladikhanov@email.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    email: "superman@gmail.com",
    name: "FormSubmit",
    message: "I'm from Devro LABS",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
