"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concesionaria = void 0;
class Concesionaria {
    constructor(nombre, vehiculos = []) {
        this.nombre = nombre;
        this.stock = vehiculos.length;
        this.vehiculos = vehiculos;
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
        this.stock += 1;
    }
    getVehiculos() {
        return this.vehiculos;
    }
    buscarVehiculo(local, tipoDeBusqueda, busqueda, busqueda2 = 0) {
        switch (tipoDeBusqueda) {
            case 'marca':
                console.log("Resultado de la búsqueda en " + local, this.vehiculos.filter((vehiculo) => vehiculo.marca.includes(busqueda)));
                return;
            case 'modelo':
                console.log("Resultado de la búsqueda en " + local, this.vehiculos.filter((vehiculo) => vehiculo.modelo.includes(busqueda)));
                return;
            case 'nivelDeDesgaste':
                console.log("Resultado de la búsqueda en " + local, this.vehiculos.filter((vehiculo) => vehiculo.nivelDesgaste === parseInt(busqueda)));
                return;
            case 'categoria':
                console.log("Resultado de la búsqueda en " + local, this.vehiculos.filter((vehiculo) => vehiculo.categoria.includes(busqueda)));
                return;
            case 'marca-nivelDeDesgaste':
                console.log("Resultado de la búsqueda en " + local, this.vehiculos.filter((vehiculo) => vehiculo.marca.includes(busqueda) && vehiculo.nivelDesgaste === busqueda2));
                return;
            case 'categoria-nivelDeDesgaste':
                console.log("Resultado de la búsqueda en " + local, this.vehiculos.filter((vehiculo) => vehiculo.categoria.includes(busqueda) && vehiculo.nivelDesgaste === busqueda2));
                return;
            default:
                console.log(this.vehiculos);
        }
    }
}
exports.Concesionaria = Concesionaria;
//# sourceMappingURL=Concesionaria.js.map