import path from "path";
import { Concesionaria } from "./src/clases/Concesionaria/Concesionaria";
import { Gerente } from "./src/clases/Gerente/Gerente";
import { Sucursal } from "./src/clases/Sucursal/Sucursal";
import { vehiculos} from "./src/clases/Vehiculo/Vehiculo";
import fs from 'fs';



const concesionaria = new Concesionaria('Tdf-Car',vehiculos);

concesionaria.getVehiculos();


const [veh1,veh2,veh3,veh4,veh5,veh6,veh7,veh8] = vehiculos;



let sucursal1Json: string = fs.readFileSync(path.join(__dirname, 'sucursal1.txt'), 'utf-8');

const sucursal1Data= JSON.parse(sucursal1Json);
const sucursal1 = new Sucursal(sucursal1Data.nombre, [veh1,veh2, veh3, veh4,veh5, veh6],sucursal1Data.direccion, sucursal1Data.horarioDeAtencion);


let sucursal2Json: string = fs.readFileSync(path.join(__dirname, 'sucursal2.txt'), 'utf-8');
const sucursal2Data= JSON.parse(sucursal2Json);
const sucursal2 = new Sucursal(sucursal2Data.nombre, [veh7, veh8], sucursal2Data.direccion, sucursal2Data.horarioDeAtencion);

const gerenteLeo = new Gerente('Leonardo', 'Luchini', 4033321);
const gerenteJuan = new Gerente('Juan', 'Luchini', 45863112);

sucursal1.setGerente(gerenteLeo);
sucursal2.setGerente(gerenteJuan);

console.log(sucursal1.gerente);
console.log(sucursal2.gerente);


concesionaria.buscarVehiculo('Concesionaria','marca', 'Toyota');

sucursal1.buscarVehiculo(sucursal1.nombre,'categoria-nivelDeDesgaste', 'Auto', 1.5);

sucursal2.buscarVehiculo(sucursal2.nombre,'modelo', 'Cronos', 1.5);


console.log("Stock de la concesionaria:", concesionaria.stock);
console.log("Stock sucursal 1:", sucursal1.stock);
console.log("Stock sucursal 2:", sucursal2.stock);


console.log("Vehiculos Concesionaria:", concesionaria.getVehiculos());

sucursal2.generarListadoVehiculos(sucursal2.nombre);
sucursal1.generarListadoVehiculos(sucursal1.nombre);