export class Pasajero {
  nombre;
  apellido;
  vuelos = [];

  agregarVuelo(unVuelo) {
      this.vuelos.push(unVuelo);
  }

  cantVuelos() {
      return this.vuelos.length;
  }

  cantVecesQueVisitaste(unaCiudad) {
      //Consideramos que un pasajero visitó una ciudad 
      //si partió de un aeropuerto que estaba en esa ciudad
      return this.vuelos.filter(v => unaCiudad.tenesAeropuerto(v.aeropuertoSalida)).length;
  }
}