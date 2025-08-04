# titulo: Backend II: DISEÑO Y ARQUITECTURA BACKEND FLEX (Proyecto Final)
## Autor
- Jorge Luis Salinas         

## Descripción del proyecto
    - Realizar un proyecto en Node.js que se conecte a una base de datos MongoDB llamada “Pasteleria” a través de mongoose.
## Objetivos
    - Crear un model de users llamador “user.js” que utilice una colección llamada “users” y tenga la siguiente estructura de datos:
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'user' }

    - Crear un router llamado “userRouter.js” que tenga su ruta principal en “/api/sessions”.
    - Desarrollar en el router los endpoints correspondientes al CRUD pensado para trabajar con el model de forma asíncrona.
    - Corroborar los resultados con Postman.
    - Implementar el middleware de autenticación JWT.

## Requisitos
    - Node.js
    - Express
    - Mongoose
    - MongoDB
    - Handlebars
    - Nodemailer
    - PDFKit
    - JSON Web Token
    - Passport
    - Passport JWT
    - Passport Local
    - Connect Mongo
    - Cookie Parser
    - Express Session
    - Body Parser
    - Nodemon
    - Cors
    - Express Handlebars

## Instalación
    - Instalar Node.js
    - Instalar MongoDB
    - Instalar Mongoose
    - Instalar Express
    - Instalar Handlebars
    - Instalar Nodemailer
    - Instalar PDFKit
    - Instalar JSON Web Token
    - Instalar Passport
    - Instalar Passport JWT
    - Instalar Passport Local
    - Instalar Connect Mongo
    - Instalar Cookie Parser
    - Instalar Express Session
    - Instalar Body Parser
    - Instalar Nodemon
    - Instalar Cors
    - Instalar Express Handlebars    

    - Abrir una terminal y ejecutar los siguientes comandos:
        npm install express
        npm install mongoose
        npm install bcrypt
        npm install jsonwebtoken
        npm install passport
        npm install passport-jwt
        npm install passport-local
        npm install connect-mongo
        npm install cookie-parser
        npm install express-session
        npm install body-parser
        npm install nodemon
        npm install cors
        npm install express-handlebars
        npm install pdfkit
        npm install jsonwebtoken
        npm install nodemailer
        npm install handlebars
        npm install dotenv
        npm install bcrypt
        npm install @sendgrid/mail

## Descripción de la configuración
    - Configuración de la base de datos
        - Conexión a la base de datos
        - Configuración de la conexión
        - Configuración del modelo
        - Configuración del esquema
        - Configuración de los métodos
        - Configuración de las rutas
        
## Ejecución del proyecto
    - Abrir una terminal y ejecutar los siguientes comandos:
        npm run dev

## Documentación
    - Documentación de Mongoose: https://mongoosejs.com/docs/guide.html
    - Documentación de Express: https://expressjs.com/es/guide/routing.html
    - Documentación de Passport: https://www.passportjs.org/docs/
    - Documentación de JWT: https://jwt.io/introduction/
    - Documentación de Nodemon: https://www.npmjs.com/package/nodemon
    - Documentación de CookieParser: https://www.npmjs.com/package/cookie-parser
    - Documentación de ExpressSession: https://www.npmjs.com/package/express-session
    - Documentación de BodyParser: https://www.npmjs.com/package/body-parser
    - Documentación de ConnectMongo: https://www.npmjs.com/package/connect-mongo
    - Documentación de Bcrypt: https://www.npmjs.com/package/bcrypt
    - Documentación de JsonWebToken: https://www.npmjs.com/package/jsonwebtoken
    - Documentación de PassportJWT: https://www.npmjs.com/package/passport-jwt
    - Documentación de Handlebars: https://handlebarsjs.com/guide/
    - Documentación de Nodemailer: https://nodemailer.com/about/
    - Documentación de PDFKit: https://pdfkit.org/docs/getting-started
    - Documentación de Cors: https://www.npmjs.com/package/cors
    - Documentación de Express Handlebars: https://www.npmjs.com/package/express-handlebars
    - Documentación de Passport Local: https://www.passportjs.org/packages/passport-local/
    - Documentación de Env: https://www.npmjs.com/package/dotenv
    - Documentación de Bcrypt: https://www.npmjs.com/package/bcrypt 
    - Documentación de SendGrid: https://sendgrid.com/docs/for-developers/sending-email/nodejs-mailer/
    - Documentación de PDFKit: https://pdfkit.org/docs/getting-started
    - Documentación de JsonWebToken: https://www.npmjs.com/package/jsonwebtoken
    - Documentación de PassportJWT: https://www.npmjs.com/package/passport-jwt

## routers
/api/sessions
/api/auth
/api/users
/api/products
/api/carts
/api/orders


## Endpoints
### POST /api/auth/register
{
    "first_name": "John",
	"last_name": "Doe",
	"email": "johndoe@example.com",
	"age": 25,
	"password": "secret",
	"role": "user"
}
### GET /api/auth/register
### GET /api/auth/login
### POST /api/auth/login
{
    "email": "johndoe@example.com",
	"password": "secret"
}
### POST /api/auth/logout
{
    "email": "johndoe@example.com",
	"password": "secret"
}
### POST /api/users
{
    "first_name": "John",
	"last_name": "Doe",
	"email": "johndoe@example.com",
	"age": 25,
	"password": "secret",
	"role": "user"
}
### GET /api/users
### GET /api/users/:id 
### PUT /api/users/:id
{
    "first_name": "John",
	"last_name": "Doe",
	"email": "johndoe@example.com",
	"age": 25,
	"password": "secret",
	"role": "user"
}
### delete /api/users/:id

### POST /api/products
{
    "name": "product",
    "description": "product description",
    "price": 10,
    "category": "category"
    "image": "image"
    "stock": 10
    "quantity": 10
}
### GET /api/products
### PUT /api/users/:id
{
    "first_name": "John",
	"last_name": "Doe",
	"email": "johndoe@example.com",
	"age": 25,
	"password": "secret",
	"role": "user"
}

## .env
-   PORT=3000
-   MONGODB_URI=mongodb://localhost:27017/pasteleria
-   JWT_SECRET=secret
-   JWT_EXPIRES_IN=1d

## Estructura del proyecto
src
    - config
        - db.js
        - passport.config.js
        - handlebars.js
        - envValidator.js
    - controllers
        - authController.js
        - userController.js
        - productController.js
        - cartController.js
        - orderController.js
        - sessionController.js
    - dao
        - UserDAO.js
        - ProductDAO.js
        - CartDAO.js
        - OrderDAO.js
        - SessionDAO.js
    -dtos
        - UserDTO.js
        - ProductDTO.js
        - CartDTO.js
        - OrderDTO.js
        - SessionDTO.js
    - middlewares
        - authMiddleware.js
        - roleMiddleware.js
    - models
        User.js
        Product.js
        Cart.js
        Order.js
    public
        - pdfs
    - routes
        - authRoutes.js
        - userRoutes.js
        - productRoutes.js
        - cartRoutes.js
        - orderRoutes.js
        - sessionRoutes.js
    - scripts
        - fakeData.js
        - resetData.js
    - services
        - emailService.js
        - pdfService.js
        - orderService.js
    - utils
        - generateToken.js
        - hashPassword.js
        - hbs.helpers.js
    - views
        - email
            - orderConfirmation.hbs
app.js
server.js

## Estructura de la carpeta config
config
	- db.js
		- Conexión a la base de datos
		- Configuración de la conexión
		- Configuración del modelo
		- Configuración del esquema
		- Configuración de los métodos
		- Configuración de las rutas
	- passport.config.js
		- Configuración del middleware de autenticación
	- handlebars.js
		- Configuración de handlebars
	- envValidator.js
		- Validación de variables de entorno

## Estructura de la carpeta controllers
controllers
	authController.js
		- Controlador de autenticación
	userController.js
		- Controlador de usuarios
	productController.js
		- Controlador de productos
	cartController.js
		- Controlador de carrito
	orderController.js
		- Controlador de pedidos
	sessionController.js
		- Controlador de sesiones

## Estructura de la carpeta dao
dao
	UserDAO.js
		- Clase de acceso a datos de usuarios
	ProductDAO.js
		- Clase de acceso a datos de productos
	CartDAO.js
		- Clase de acceso a datos de carrito
	OrderDAO.js
		- Clase de acceso a datos de pedidos
	SessionDAO.js
		- Clase de acceso a datos de sesiones

## Estructura de la carpeta dtos
dtos
	UserDTO.js
		- Clase de transferencia de datos de usuarios
	ProductDTO.js
		- Clase de transferencia de datos de productos
	CartDTO.js
		- Clase de transferencia de datos de carrito
	OrderDTO.js
		- Clase de transferencia de datos de pedidos
	SessionDTO.js
		- Clase de transferencia de datos de sesiones

## Estructura de la carpeta middlewares
middlewares
	authMiddleware.js
		- Middleware de autenticación
	roleMiddleware.js
		- Middleware de rol

## Estructura de la carpeta models
models
	User.js
		- Modelo de usuarios
	Product.js
		- Modelo de productos
	Cart.js
		- Modelo de carrito
	Order.js
		- Modelo de pedidos

## Estructura de la carpeta public
public
	- pdfs

## Estructura de la carpeta routes
routes
	authRoutes.js
		- Rutas de autenticación
	userRoutes.js
		- Rutas de usuarios
	productRoutes.js
		- Rutas de productos
	cartRoutes.js
		- Rutas de carrito
	orderRoutes.js
		- Rutas de pedidos
	sessionRoutes.js
		- Rutas de sesiones

## Estructura de la carpeta scripts
scripts
	fakeData.js
		- Script de datos ficticios
	resetData.js
		- Script de restauración de datos

## Estructura de la carpeta services
services
	emailService.js
		- Servicio de envío de correo electrónico
	pdfService.js
		- Servicio de generación de PDF
	orderService.js
		- Servicio de pedidos

## Estructura de la carpeta utils
utils
	generateToken.js
		- Función para generar token
	hashPassword.js
		- Función para hashar contraseña
	hbs.helpers.js
		- Funciones de handlebars

## Estructura de la carpeta views
views
	email
		- views de correo electrónico
			- orderConfirmation.hbs

## Estructura de la carpeta app.js
app.js
	- Configuración de la aplicación
	- Configuración de las rutas
	- Configuración de los middlewares
	- Configuración de las rutas
	- Configuración de la base de datos
	- Configuración del modelo
	- Configuración del esquema
	- Configuración de los métodos
	- Configuración de las rutas

## Estructura de la carpeta server.js
server.js
	- Configuración de la aplicación
	- Configuración de las rutas
	- Configuración de los middlewares
	- Configuración de las rutas
	- Configuración de la base de datos
	- Configuración del modelo
	- Configuración del esquema
	- Configuración de los métodos
	- Configuración de las rutas


