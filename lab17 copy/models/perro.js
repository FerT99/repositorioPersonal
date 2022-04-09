const BD = require("../util/database.js");

module.exports = class Perro {
    constructor(nuevo_nombre, nueva_foto, nueva_descripción) {
        this.nombre = nuevo_nombre;
        this.foto = nueva_foto;
        this.descripción = nueva_descripción;
    }

    save(){
        return BD.execute('INSERT INTO cachorros (Nombre, Foto, Descripción) VALUES (?,?,?)', //revisa si valores son del tipo indicado, protección contra SQL
        [this.nombre, this.foto, this.descripción]) 

    }
    static fetchAll() {
        return BD.execute('SELECT * FROM cachorros');
    }

    static fetchOne(perroIndividual) {
        return BD.execute('SELECT * FROM cachorros WHERE Id=?', [perroIndividual]) //busca perroIndividual en la columna de ID en la tabla
    }
}
