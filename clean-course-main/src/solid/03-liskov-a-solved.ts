import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle, Ferrari } from './03-liskov-b-solved';

(() => {
  // Liskov correcto: Mi función aceptar cualquier subclase de Vehicle
  const printCarSeats = (cars: Vehicle[]) => {
    // Open and Close correcto: Nuevos vehículos no hacen que tenga que modificar aquí
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5), new Volvo(4), new Ferrari(2)];

  printCarSeats(cars);
})();
