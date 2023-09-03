// export const sendForm = async (data) => fetch("/api/mail", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   }
// })

export const sendForm = async (data) => {
  const options = {
    service_id: 'service_id',
    template_id: 'template_id',
    user_id: 'USER_ID',
    template_params: {
      'message': JSON.stringify(data),
    }
  }

  return fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body: JSON.stringify(options),
    headers: {
      "Content-Type": "application/json",
    }
  })
}
