import { serviceID, templateID, userID } from "../config/config";

export const sendForm = async (data) => {
  const options = {
    service_id: serviceID,
    template_id: templateID,
    user_id: userID,
    template_params: {
      message: JSON.stringify(data),
      fullname: data.fullname,
      email: data.email,
      number: data.number,
    },
  };
  return fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body: JSON.stringify(options),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
