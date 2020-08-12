# React

### Añadiendo imágenes con Webpack

Vamos a usar File Loader para acceder a las imagenes de nuestro proyecto desde el código.

Inicialmente, estos archivos est'aticos se encuentran justo al código de desarrollo. Pero al momento de compilar, Webpack guardara las imagenes en una nueva carpeta justo al código para producción y actualizara nustros componentes (o donde sea que usemos las imágenes) conlos nuevos nombres y rutas de los archivos.

Para ello deberemos instalar la siguiente dependencia.

`npm install file-loader`

Despues procederemos a configurar File-loader en el archivo Webpack.config.js

```
module.exports = {
	module: {
    rules:[
			{
				test: /\.(png|gif|jpg)$/,
				use: [
					{
						'loader': 'file-loader',
						options: {
							name: 'assets/[hash].[ext]',
						}
					}
				]
			}
    ]
  }
}
```

Uso de File Loader en un componente:
```
import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => (
  <img src={nombreDeLaImagen} />
);

export default Component;
```