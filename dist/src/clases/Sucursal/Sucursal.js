"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
const Concesionaria_1 = require("../Concesionaria/Concesionaria");
const fs_1 = __importDefault(require("fs"));
class Sucursal extends Concesionaria_1.Concesionaria {
    constructor(nombre, vehiculos, direccion, horarioDeAtencion) {
        super(nombre, vehiculos);
        this.direccion = direccion;
        this.horarioDeAtencion = horarioDeAtencion;
        this.gerente = null;
    }
    setGerente(gerente) {
        this.gerente = gerente;
    }
    generarListadoVehiculos(nombreSucursal) {
        fs_1.default.appendFile(nombreSucursal + '-vehiculos.txt', this.listarVehiculos() + "." + "\n", (err) => {
            if (err) {
                throw err;
            }
            console.log('el archivo se creo exitosamente con el nombre ' + nombreSucursal + '-vehiculos en la raiz del proyecto');
        });
    }
    listarVehiculos() {
        const vehiculosMap = this.vehiculos.map(vehiculo => {
            return `Vehiculo => Categoría :${vehiculo.categoria} - Marca: ${vehiculo.marca} - Modelo: ${vehiculo.modelo} \n`;
        });
        return "Archivo ---------------- \n" + vehiculosMap.join('') + "---------------- Archivo";
    }
}
exports.Sucursal = Sucursal;
//# sourceMappingURL=Sucursal.js.map