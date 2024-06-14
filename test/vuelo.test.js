import { Vuelo } from "../entities/vuelo.js";
import { Pasajero } from "../entities/pasajero.js";
import { Avion } from "../entities/avion.js";

test("La capacidad de pasajeros es de 50% (avión con 4 asientos)", () => {
    const unAvion = new Avion();
    unAvion.cantAsientos = 4;

    const pasajero1 = new Pasajero();
    const pasajero2 = new Pasajero();

    const unVuelo = new Vuelo();
    unVuelo.avion = unAvion;

    unVuelo.agregarPasajero(pasajero1);
    unVuelo.agregarPasajero(pasajero2);

    const capacidadEsperada = 50;
    const capacidadObtenida = unVuelo.capacidadOcupadaPorPasajeros();

    expect(capacidadObtenida).toBe(capacidadEsperada);
});

test("un pasajero realizó 2 vuelos", () => {
    const unPasajero = new Pasajero();

    const vuelo1 = new Vuelo();
    const vuelo2 = new Vuelo();

    unPasajero.agregarVuelo(vuelo1);
    unPasajero.agregarVuelo(vuelo2);


    const vuelosRealizados = unPasajero.cantVuelos();
    expect(vuelosRealizados).toBe(2);
})