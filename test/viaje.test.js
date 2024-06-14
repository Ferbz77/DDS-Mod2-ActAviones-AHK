import { Viaje } from "../entities/viaje";
import { Vuelo } from "../entities/vuelo";
import { Escala } from "../entities/escala";

test ("Viaje dura 200 mins, con dos escalasde 40 y dos vuelos de 60", ()=> {
    const primerEscala = new Escala (null, 40 );
    const SegundaEscala = new Escala (null, 40);

    const primerVuelo = new Vuelo(60);
    const segundoVuelo = new Vuelo(60);

    const viaje = new Viaje();
    viaje.agregarEscala(primerEscala);
    viaje.agregarEscala(SegundaEscala);
    viaje.agregarVuelo(primerVuelo);
    viaje.agregarVuelo(segundoVuelo);

    const duracionTotalObtenida = viaje.duracionTotalAproxEnMins();
    expect(duracionTotalObtenida).toBe(200);
}) 