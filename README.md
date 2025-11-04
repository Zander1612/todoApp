# TodoApp — README breve

Pequeña aplicación con registro de usuarios y verificación por correo.

Qué necesitas
- Node.js
- MongoDB (local o remoto)

Instalación rápida
1. Instala dependencias:

```powershell
npm install
```

2. Crea `.env` en la raíz con (mínimo):

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todoapp
ACCESS_TOKEN_SECRET=clave_secreta_larga
EMAIL_USER=tu_email@example.com
EMAIL_PASS=tu_contraseña_o_app_password
NODE_ENV=dev
```

# TodoApp — README breve

Pequeña app con registro de usuarios y verificación por correo.

Requisitos
- Node.js
- MongoDB (local o remoto)

Instalación rápida
1. Instala dependencias:

```powershell
npm install
```

Nota: `npm install` instalará las dependencias listadas en `package.json` (dependencies y devDependencies). En este proyecto incluye, entre otras:

- @tailwindcss/cli
- bcrypt
- cookie-parser
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- morgan
- nodemailer
- nodemon
- path

Configuración mínima
Crear un archivo `.env` en la raíz. Este proyecto usa distintas variables según `NODE_ENV`:

- Para desarrollo (conexión local a Mongo):

```
NODE_ENV=dev
MONGO_URI_TEST=mongodb://localhost:27017/todoapp
ACCESS_TOKEN_SECRET=clave_secreta_larga
EMAIL_USER=tu_email@example.com
# TodoApp — README breve

Pequeña app con registro y verificación por correo.

Essentials (resumido):

- Instalar:

```powershell
npm install
```

- Variables mínimas (`.env` en raíz):

```
NODE_ENV=dev
MONGO_URI_TEST=mongodb://localhost:27017/todoapp
ACCESS_TOKEN_SECRET=clave_secreta_larga
EMAIL_USER=tu_email@example.com
EMAIL_PASS=tu_contraseña_o_app_password
```

- Ejecutar en dev:

```powershell
npm run dev
```

- Endpoints clave:
  - POST /api/users  -> crear cuenta (envía correo de verificación)
  - PATCH /api/users/:id/:token -> verificar cuenta
  - POST /api/login -> login (devuelve cookie `accessToken`)

- Prueba rápida (registro):

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Juan","email":"juan@example.com","password":"miPass123"}'
```

- Nota TLS/correo: en dev el proyecto permite certificados autofirmados; en prod usa un SMTP confiable.

Fin.
Instalación rápida
1. Instala dependencias:

```powershell
npm install
```

Nota: `npm install` instalará las dependencias listadas en `package.json` (dependencies y devDependencies). En este proyecto incluye, entre otras:

- @tailwindcss/cli
- bcrypt
- cookie-parser
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- morgan
- nodemailer
- nodemon
- path

Configuración mínima
Crear un archivo `.env` en la raíz. Este proyecto usa distintas variables según `NODE_ENV`:

- Para desarrollo (conexión local a Mongo):

```
NODE_ENV=dev
MONGO_URI_TEST=mongodb://localhost:27017/todoapp
ACCESS_TOKEN_SECRET=clave_secreta_larga
EMAIL_USER=tu_email@example.com
EMAIL_PASS=tu_contraseña_o_app_password
```
# TodoApp — Resumen

Instalación y uso (resumen):

- Instalar dependencias:

```powershell
npm install
```

- Variables mínimas (`.env`):

```
NODE_ENV=dev
MONGO_URI_TEST=mongodb://localhost:27017/todoapp
ACCESS_TOKEN_SECRET=tu_clave_secreta
EMAIL_USER=tu_email@example.com
EMAIL_PASS=tu_contraseña_o_app_password
```

- Ejecutar en desarrollo:

```powershell
npm run dev
```

- Endpoints principales:
  - POST /api/users → registrar (envía correo con enlace de verificación)
  - PATCH /api/users/:id/:token → verificar cuenta
  - POST /api/login → iniciar sesión (devuelve cookie `accessToken`)

- Prueba rápida (registro):

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Juan","email":"juan@example.com","password":"miPass123"}'
```

- Nota rápida: en desarrollo se permiten certificados autofirmados para SMTP; en producción usa un SMTP confiable.

Fin.


```bash

curl -X PATCH http://localhost:3000/api/users/<userId>/<token>
