import { Concesionaria } from "../Concesionaria/Concesionaria";
import { Gerente } from "../Gerente/Gerente";
import { Vehiculo } from "../Vehiculo/Vehiculo";
import fs from 'fs'

export class Sucursal extends Concesionaria {
    direccion: string;
    horarioDeAtencion: string;
    gerente: Gerente | null;


    constructor( nombre: string,  vehiculos: Vehiculo[],direccion: string, horarioDeAtencion: string){
        super(nombre, vehiculos);
        this.direccion = direccion;
        this.horarioDeAtencion = horarioDeAtencion;
        this.gerente = null;
    }

    setGerente(gerente: Gerente) {
        this.gerente = gerente;
    }

    generarListadoVehiculos(nombreSucursal: string) {
        fs.appendFile(nombreSucursal +'-vehiculos.txt',this.listarVehiculos() + "." + "\n" , (err) => {
            if(err) {
                throw err;
            }
            console.log('el archivo se creo exitosamente con el nombre ' + nombreSucursal +'-vehiculos en la raiz del proyecto');
        })
    }
    

    listarVehiculos(): string {
        const vehiculosMap =  this.vehiculos.map(vehiculo => {
            return `Vehiculo => Categoría :${vehiculo.categoria} - Marca: ${vehiculo.marca} - Modelo: ${vehiculo.modelo} \n`;
        })

        return "Archivo ---------------- \n" + vehiculosMap.join('') + "---------------- Archivo";
    }
}

