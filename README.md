# React

### agregando compatibilidad con todos los navegadores usando Babel

**Babel** es una herramienta muy popular para escribir JavaSript moderno y tranformarlo en código que pueda entender cualquier navegador.

Para tener esta herramienta deberemos installar las siguientes dependecias en nuestro proyecto.

'npm install babel/loader @babel/core @babel/preset-env @babel/preset-react -D -E'

Luego de ello deberemos crear el archivo ***.babelrc*** para poder configurar Babel.

```
{
	"presets": [
		"@babel/preset-env", 	//soportara las capacidades de JavaScript
		"@babel/preset-react"	// soportara las capacidades de React
	]
}
```