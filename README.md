# React

### Estilos con el preprocesador Sass

Los ***preprocesadores*** como ***Sass*** son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Para usar Sass deberemos instalar las sigientes dependencias.

'npm install mini-css-extract-plugin css-loader node-sass sass-loader'

luego Configuraremos el archivo de Webpack.config.js

```
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: [
					{loader:MiniCssExtractPlugin.loader},
					'css-loader',
					'sass-loader,
				]
			}
		]
	}
},

plugins: [
	new MiniCssExtractPlugin({
		filename: 'assets/[name].css'
	})
]
```