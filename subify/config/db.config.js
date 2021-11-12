module.exports = {
    HOST: "localhost",
    USER: "administrador",
    PASSWORD : "admin",
    DB : "db_subify",
    dialect : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //tiempo máximo que se intentará conectar
        idle: 10000 //tiempo máximo en que conexión puede estar inactiva
    }
}