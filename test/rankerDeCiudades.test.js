import { Ciudad } from "../entities/ciudad";
import { RankerDeCiudades } from "../entities/ranker_ciudades";
import { Pasajero } from "../entities/pasajero";
import { Vuelo } from "../entities/vuelo";
import { Aeropuerto } from "../entities/aeropuerto";

//no funciona :(
test("New York recibió mas pasajeros en un dia", () => {
    const ciudadB= new Ciudad('Brasilia');
    const ciudadNY = new Ciudad('New York');
    const ciudadBsAs = new Ciudad('Buenos Aires');

    const pasajero1 = new Pasajero();
    const pasajero2 = new Pasajero();
    const pasajero3 = new Pasajero();
    const pasajero4 = new Pasajero();

    const vuelo1 = new Vuelo();
    const vuelo2 = new Vuelo();
    const vuelo3 = new Vuelo();

    const aeropuertoB = new Aeropuerto();
    const aeropuertoNY = new Aeropuerto();
    const aeropuertoBsAs = new Aeropuerto();

    vuelo1.llegasteEnFecha("11/06/2024");
    vuelo2.llegasteEnFecha("11/06/2024");
    vuelo3.llegasteEnFecha("11/06/2024");

    vuelo2.agregarPasajero(pasajero1);
    vuelo2.agregarPasajero(pasajero2);
    vuelo2.agregarPasajero(pasajero3);
    vuelo3.agregarPasajero(pasajero4);

    ciudadB.agregarAeropuerto(aeropuertoB);
    ciudadNY.agregarAeropuerto(aeropuertoNY);
    ciudadBsAs.agregarAeropuerto(aeropuertoBsAs);

    aeropuertoB.agregarVuelo(vuelo1);
    aeropuertoNY.agregarVuelo(vuelo2);
    aeropuertoBsAs.agregarVuelo(vuelo3);

    const ciudades = [ciudadB, ciudadNY, ciudadBsAs]
    const ranker = new RankerDeCiudades();
    const rankerResultado = ranker.ciudadQueMasPasajerosRecibioEl('11/06/2024', ciudades);

    expect(rankerResultado).toBe(ciudadNY);
})