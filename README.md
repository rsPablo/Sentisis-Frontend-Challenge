# Sentisis Project

Este proyecto ha sido realizado en React js con clases funcionales

## Lanzamiento

### `npm start`

Se abrirá la aplicación en la ruta [http://localhost:3000](http://localhost:3000)

## Librerías

- axios: Para la llamada a la api
- momenjs: Para la visualización de las fechas
- react-bootstrap: Para la visualización de componentes como tablas, botones..etc

## Aclaraciones

1. La aplicación tiene un setTimeout en la llamada a la api de 2 segundos para que aparezca el loading en pantalla
2. Para la persistencia de la información se ha utilizado el localStorage
3. No he podido realizar test e2e por falta de conocimiento/tiempo. Intenté hacerlos tanto con Cypress como con Puppeteer para tuve problemas con ambos.

## Posibles mejoras

1. Para la persistencia se podría usar [redux-persist](https://github.com/rt2zz/redux-persist).
2. Los iconos no están agrupados en un fichero, estaría mejor que si.
3. Creación de test unitarios.
