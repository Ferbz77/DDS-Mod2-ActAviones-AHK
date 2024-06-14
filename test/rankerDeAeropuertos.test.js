import { Aeropuerto } from "../entities/aeropuerto";
import { RankeadorDeAeropuertos } from "../entities/ranker_aeropuertos";


test('El aeropuerto con menos escalas es el C', () => {
    const aeropuertoA = new Aeropuerto();
    
    aeropuertoA.agregarEscala('Escala 1');
    aeropuertoA.agregarEscala('Escala 2');

    const aeropuertoB = new Aeropuerto();
    aeropuertoB.agregarEscala('Escala 1');

    const aeropuertoC = new Aeropuerto();
    aeropuertoC.nombre = 'Aeropuerto C';
    // No tiene escalas

    const aeropuertos = [aeropuertoA, aeropuertoB, aeropuertoC];

    const rankeador = new RankeadorDeAeropuertos();
    const elAeropuertoConMenorEscalasEs = rankeador.aeropuertoConMenorCantDeEscalas(aeropuertos);

    expect(elAeropuertoConMenorEscalasEs).toBe(aeropuertoC);
});