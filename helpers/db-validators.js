const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol = '') => {
    console.log("ROL: " + rol);
    if (rol === '') {
        console.log("ROL: " + rol);
        rol = 'USER_ROLE';
        console.log("ROL: " + rol);
    }
    const existeRol = await Role.findOne({ rol });
    console.log(existeRol);
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}

