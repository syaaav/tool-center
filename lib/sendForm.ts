export const sendForm = async (data) => fetch("/api/mail", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})
