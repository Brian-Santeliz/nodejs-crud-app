const bcrypt = require("bcryptjs");

//creando el objeto helpers para añadir los metodos
const helpers = {};

//encripta el password usando bcypt
helpers.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const savePassword = await bcrypt.hash(password, salt);
  return savePassword;
};

//compara la contraseña encriptada con la de la db
helpers.comparePassword = async (password, passwordBD) => {
  try {
    const resul = await bcrypt.compare(password, passwordBD);
    return resul; //devuelve un boolean
  } catch {
    req.flash("error", "Error al comparar la contraseña");
    throw new Error(console.log("Eror al comparar la contraseña"));
  }
};
module.exports = helpers;
