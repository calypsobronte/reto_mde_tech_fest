# Landing Pages para el reto MDE Tech Fest 2021
Este es un Proyecto para el reto MDE Tech Fest

### Link de la aplicacion
<>

### Herramientas Tecnológicas
- Backend
  * Nodejs
  * DB Mysql
  * Express
- Frontend
 * EJS
 * Bootstrap
- Otras
 * Git
 * Heroku
 * Github

### Instalación

* Clona el repositorio por medio de git
```bash
$ git clone https://github.com/calypsobronte/reto_mde_tech_fest.git
```

1. Ingresar al directorio clonado `reto_mde_tech_fest`

```bash
$ cd reto_mde_tech_fest
```

2. Instalar las dependencias para correr el server

```bash
$ yarn install o npm install
```

3. Inicie el servidor de desarrollo:
```bash
$ yarn dev o npm dev
```

4. Crear carpeta `env` y crear archivo `.env` añadir lo siguiente:
```bash
DB_HOST = localhost
DB_USER = user_database
DB_PASSWORD = password_database
DB_DATABASE = db_database
```

5. Inicie el servidor de desarrollo en modo local:
    ```bash
    $ yarn dev o npm run dev
    ```
    Se vera de la siguiente forma
    ```bash
    ➜  reto_mde_tech_fest yarn dev
    yarn run v1.22.15
    $ nodemon src/index.js
    [nodemon] 2.0.15
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node src/index.js`
    Servidor en el puerto 3000
    ```
6 . Ingrese al navegador con <http://localhost:3000/>


## Autores

* **Lina María Montaño Ramírez** - *Full Stack Developer* - [calypsobronte](https://github.com/calypsobronte)


## Licencia

 MIT License 
