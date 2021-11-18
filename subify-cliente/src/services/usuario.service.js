import http from "../http-common";

class UsuarioService {
    getAll(){
        return http.get("/usuarios");
    }

    get(id){
        return http.get(`/usuarios/${id}`);
    }

    create(data){
        return http.post("/registrar", data);
    }

    update(id, data){
        return http.put(`/usuarios/${id}`, data);
    }

    delete(id){
        return http.delete(`/usuarios/${id}`);
    }

    deleteAll(){
        return http.delete(`/usuarios`);
    }    
    
    findByUsuario(usuario){
        return http.get(`/ingresar/${usuario}`);
    }    
}

export default new UsuarioService();