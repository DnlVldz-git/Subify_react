module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        correo: {
            type: Sequelize.STRING      
        },
        nombre: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        contra: {
            type: Sequelize.STRING
        }
    });

    return Usuario;
}