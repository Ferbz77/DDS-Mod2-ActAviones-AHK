export class Viaje {
    vuelos = [];
    escalas = [];

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }

    agregarEscala(escala) {
        this.escalas.push(escala);
    }

    duracionTotalVuelos() {
        let duracionTotal = 0;
        
        for(let i = 0; i < this.vuelos.length; i++) {
            duracionTotal += this.vuelos[i].duracionAproxEnMins;
        }

        return duracionTotal;
    }

    duracionTotalEscalas() {
        let duracionTotal = 0;

        this.escalas.forEach((unaEscala) => {
            duracionTotal += unaEscala.duracionAproxEnMins;
        });

        return duracionTotal;
    }

    duracionTotalAproxEnMins() {
        return this.duracionTotalVuelos() + this.duracionTotalEscalas();
    }
}