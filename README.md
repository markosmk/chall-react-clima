## Developer Frontend Test (React)

### Resumen

App full client-side que permita visualizar el pronóstico climático actual y de los próximos 5 días en la ubicación actual y permite visualizar el pronóstico de otras 5 ciudades seleccionables.

### Ejecutar la App

Primero se debe crear una api key en [OpenWeatherMap](https://openweathermap.org/), una vez registrado, desde [Api Keys](https://home.openweathermap.org/api_keys) puedes crear las keys

Luego es necesario agregar la key al archivo `.env` para que este disponible en todo el entorno de la app (tomar de ejemplo `.env.default`)

```
# Clonar este repositorio
git clone https://github.com/markosmk/chall-react-clima

# Acceder a la carpeta del proyecto desde la terminal/cmd
cd chall-react-clima

# Instalar las dependencias
npm install

# Ejecutar el proyecto en local
npm run start
```

### Tecnologias utilizadas

- [Reactjs](https://reactjs.org/) (create-react-app)
- [dayjs](https://day.js.org/) (para el formato y manejo de fechas)
- [talwindcss](https://tailwindcss.com/) (para el estilo css)

### Ver Online

[markosmk.github.io/chall-react-clima/](https://markosmk.github.io/chall-react-clima/)
