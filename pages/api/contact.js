const nodemailer = require("nodemailer");

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { name, mensaje, empresa, phone, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: process.env.EMAIL_COMPANY,
    subject: `Nuevo email de ${email}`,
    html: `
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>Nombre: ${name}, Email: ✉️ ${email} </h3>
                <div style="font-size: 16px;">
                <p>Empresa: ${empresa ? empresa : "Sin especificar"}</p>
                <p>Teléfono: ${phone ? phone : "Sin especificar"}</p>
                <br>
                <p>Mensaje:</p>
                <p>${mensaje}</p>
                <br>
              </div>
      `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      res.send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });

  res.send("success");
};
