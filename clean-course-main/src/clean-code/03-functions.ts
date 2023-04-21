(() => {
  // función para obtener información de una película por Id
  function getMovieInfoById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCatsById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getBioActorById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function checkFullName(fullName: string) {
    console.log({ fullName });
    return fullName === 'José M.';
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  // Continuar
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
