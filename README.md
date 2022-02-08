# Trivial.Provider

Trivial.Provider es una aplicacion para mobile y desktop, para crear partidas de Trivial con preguntas variadas. La aplicacion permite guardar juegos, pidiendo una serie de datos en un formulario inicial (nombre de usuario, nombre del juego, nivel de las preguntas). Una vez rellenado el formulario, se mostraran 100 preguntas (20 preguntas de cada categoria, 5 categorias diferentes) al azar que provienen de la api "OPEN TRIVIA DATABASE" (https://opentdb.com/).

Se listaran las 100 preguntas que provienen de la API, mostrando el texto de la pregunta y el tipo de pregunta (true/false o de seleccion múltiple). Este listado se podrá filtrar por categoria o por tipo de pregunta, para que muestre solamente las preguntas filtradas. El usuario irá seleccionando las preguntas que desee añadir a su juego. Una vez seleccionadas las deseadas, se guardará el juego (en una API local) y se redireccionará a la página del listado de juegos guardados.

Desde la lista de juegos guardados, se puede borrar el juego o modificar el juego (modificar nombre de usuario o nombre del juego).

Una siguiente version de la aplicacion (a desarollar en la próxima fase), incluirá tambien el desarrollo de la partida de trivial que se ha guardado, permitiendo al usuario jugar. En esta fase, se seleccionará cualquiera de los juegos guardados en el listado de juegos. Una vez seleccionado el juego, se redirigirá a la pagina del juego, donde se mostrará una pregunta en cada pantalla, y al contestarla pasará a la siguiente pregunta hasta finalizar todas las preguntas. Al acabar el juego se mostraran los resultados de la partida (partias acertadas y falladas).
