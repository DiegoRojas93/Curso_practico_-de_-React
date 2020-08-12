# React

### Servidor de desarrollo

Generamente siempre necesitaremos ver nuestro proyecto que vamos construyendo, por ello necesitaremos construir un entorno de desarrollo local para observar lo que cambiamos en nuestro proyecto.

'npm install webpack-dev-server -D -E'

Despues de instalado el paquete en nuestra terminal, deberemos agregar un Script en nuestro ***package.json*** para ejecutar el servidor de Webpack y visualizar los cambio en tiempo real.

```
{
  ""scripts"": {
    ""build"": ""webpack --mode production"",
    ""start"": ""webpack-dev-server --open --mode development""
  },
}
```