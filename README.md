# React

### Imports, Variables y Fuentes de Google en Sass

Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.

```
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

body {
  background: $main-color;
  font-family: $theme-font;
}
```
Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.

```
# Vars.scss
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

# App.scss
@import ""./Vars.scss""

`body {
  background: $main-color;
  font-family: $theme-font;
}
```
También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.

```
@import url(https://fonts.googleapis.com/css?family=Muli&display-swap)
```