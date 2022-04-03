const cachorritos = [{nombre: "Moka"}, {nombre: "Lucky"}, {nombre: "Rocky"}];

module.exports = class Perro {
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    save(){
        cachorritos.push(this);
    }
    static fetchAll() {
        return cachorritos;
    }
}
