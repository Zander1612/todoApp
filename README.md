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

Arrancar en desarrollo

```powershell
npm run dev
```

API útil
- POST /api/users — crear usuario

Body JSON:
```json
{ "name": "Nombre", "email": "correo@ejemplo.com", "password": "contraseña" }
```

Notas cortas
- Si recibes `self-signed certificate in certificate chain` al enviar correo:
  - En desarrollo el código ya permite certificados autofirmados (solo si NODE_ENV != 'production').
  - En producción usa un SMTP confiable (SendGrid, Mailgun, SMTP del hosting).
  - Alternativa temporal (no segura globalmente):

```powershell
$env:NODE_TLS_REJECT_UNAUTHORIZED = '0'; npm run dev
```

- Usa contraseña de aplicación para Gmail y no subas `.env` al repo.

