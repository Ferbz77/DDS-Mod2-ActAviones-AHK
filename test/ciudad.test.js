import { Ciudad } from "../entities/ciudad";
import { Aeropuerto } from "../entities/aeropuerto";
import { Pasajero } from "../entities/pasajero";
import { Vuelo } from "../entities/vuelo";

test("Paris tiene 3 aeropuertos", () => {
    const paris = new Ciudad();
    const aeropuerto1 = new Aeropuerto();
    const aeropuerto2 = new Aeropuerto();
    const aeropuerto3 = new Aeropuerto();

    paris.agregarAeropuerto(aeropuerto1);
    paris.agregarAeropuerto(aeropuerto2);
    paris.agregarAeropuerto(aeropuerto3);

    const aeropuertosDeParis = paris.cantAeropuertos();

    expect(aeropuertosDeParis).toBe(3);
});

//no funciona :(
test("Pedro visito 2 veces Lima", () => {
    const pedro = new Pasajero();

    //ciudades
    const BuenosAires = new Ciudad();
    const lima = new Ciudad();
    const barcelona = new Ciudad();

    //aeropuertos para cada ciudad
    const aeropuerto1 = new Aeropuerto();
    const aeropuerto2 = new Aeropuerto();
    const aeropuerto3 = new Aeropuerto();

    BuenosAires.agregarAeropuerto(aeropuerto1);
    lima.agregarAeropuerto(aeropuerto2);
    barcelona.agregarAeropuerto(aeropuerto3);

    //Vuelos 
    const vuelo1 = new Vuelo();
    const vuelo2 = new Vuelo();
    const vuelo3 = new Vuelo();
    const vuelo4 = new Vuelo();


    //Vuelos para cada aeropuerto
    vuelo1.partisteDe(aeropuerto1);
    vuelo1.llegasteA(aeropuerto2);

    vuelo2.partisteDe(aeropuerto2);
    vuelo2.llegasteA(aeropuerto3);

    vuelo3.partisteDe(aeropuerto3);
    vuelo3.llegasteA(aeropuerto2);

    vuelo4.llegasteA(aeropuerto2);
    vuelo4.llegasteA(aeropuerto1);


    //vuelos para el pasajero

    pedro.agregarVuelo(vuelo1);
    pedro.agregarVuelo(vuelo2);
    pedro.agregarVuelo(vuelo3);
    pedro.agregarVuelo(vuelo4);


    const visitoMasVeces = pedro.cantVecesQueVisitaste();
    expect(visitoMasVeces).toBe(lima);
})