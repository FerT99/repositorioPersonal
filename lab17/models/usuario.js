const usuarios = [];


module.exports = class Usuario { //exportar función para otros archivos
    constructor(usuario, nombre, contraseña) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.contraseña = contraseña;
    }

    save(){
        usuarios.push(this);
    }

    static fetchAll() {
        return true; //inició sesión
    }
}