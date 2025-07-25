require('dotenv').config();

const requiredVars = [
  'PORT',
  'MONGO_URI',
  'JWT_SECRET',
  'EMAIL_USER',
  'EMAIL_PASS'
];

const missingVars = requiredVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.error('\n❌ ERROR: Faltan variables en el archivo .env');
  console.error(`🚨 Faltan: ${missingVars.join(', ')}`);
  process.exit(1); // Detener ejecución
}

console.log('✅ Variables de entorno validadas correctamente');