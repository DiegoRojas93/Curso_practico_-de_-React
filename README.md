# React

### Custom Hooks

React nos permite crear nuestros propios Hooks. Solo debemos seguir algunas convenciones:

- Los hooks siempre deben empezar con la palabra use: useAPI, useMovies, useWhatever.
- Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
- Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo, name, setName, lastName, setLastName, etc.), nuestro hook debe devolver un objeto.

Recuerda que puedes aprender más sobre Custom Hooks y las nuevas características de React en el Curso Avanzado de React JS.