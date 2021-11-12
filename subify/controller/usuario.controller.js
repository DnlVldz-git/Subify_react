const db = require("../models/");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

//Crear y Guardar un nuevo Usuario
exports.create = (req, res) => {
    //validar request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El contenido no puede ser vacio, nombre=" + req.body.nombre
        });
        return;
    };

    //crear usuario
    const usuario = {        
        correo: req.body.correo,
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        contra: req.body.contra            
    };    

    //guardar usuario en la bd
    Usuario.create(usuario)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear el ususario"
            });
        });
};

exports.findAll = (req, res) => {
    const usuario = req.query.usuario;
    var condition = usuario ? { usuario: { [Op.iLike]: `%${usuario}%` } } : null;
  
    Usuario.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
          "ss all" + err.message || "Ocurrio un error al recuperar todos los usuarios."
        });
      });
};

exports.findOne = (req, res) =>{
    const id = req.params.id;

    Usuario.findByPk(id).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: "Error al recuperar Usuario por id= "+  id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: {id: id}
    }).then(num =>{
        if(num == 1){
            res.send({
                message: "Usuario se actualizo con exito"
            });
        }else{
            res.send({
                message: `Error al actualizar Usuario con id= ${id}!`
            });        
        }
    }).catch(err =>{
        res.status(500).send({
            message: "Error al actualizar Ususario con id= "+id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({
        where: {id: id}
    }).then(num =>{
        if(num == 1){
            res.send({
                message: "Usuario eliminado con exito"
            });
        }else{
            res.send({
                message: `Error al eliminar Usuario con id =${id}`
            })
        }
    }).catch(err =>{
        res.status(500).send({
            message:
            err.message || "Error al eliminar Usuario con id= "+id
        });
    });
}
 
exports.deleteAll = (req, res) =>{
    Usuario.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({message: `${nums} Usuarios fueron eliminados con éxito`})
    }).catch(err =>{
        res.status(500).send({
            message:
            err.message || "Error al eliminar Usuarios"
        });
    });
};

exports.findAllUsuarios = (req, res) =>{
    const usu = req.params.usuario;
    Usuario.findAll({where: {usuario : usu}}).then( data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: ( "find all" +err.message) || "Ocurrio un error al recuperar Usuarios por rol"
        });
    });
};