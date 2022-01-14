import validator from "validator";

const handleContactFormValidation = (formValues) => {
  const { email, empresa, mensaje, name, phone } = formValues;

  const isNameValid = validator.isAlpha(sanitizeInput(name));
  if (!isNameValid) {
    return {
      success: false,
      message: "Nombre introducido es incorrecto",
    };
  }

  const isEmailValid = validator.isEmail(email);
  if (!isEmailValid) {
    return {
      success: false,
      message: "E-mail introducido incorrecto",
    };
  }

  if (phone) {
    const isPhoneValid = validator.isNumeric(phone);
    if (!isPhoneValid) {
      return {
        success: false,
        message: "Teléfono introducido es incorrecto",
      };
    }
  }

  if (empresa) {
    const isEmpresaValid = sanitizeInput(empresa);
    if (!isEmpresaValid.length) {
      return {
        success: false,
        message: "Empresa introducida incorrecta",
      };
    }
  }

  if (mensaje) {
    const isMensajeValid = sanitizeInput(mensaje);
    if (!isMensajeValid.length) {
      return {
        success: false,
        message: "Mensaje introducido es incorrecto",
      };
    }
  }

  return { success: true };
};

const sanitizeInput = (input) => {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(input, "text/html");
  return parsed.body.innerText.toLowerCase().trim();
};

export default handleContactFormValidation;
