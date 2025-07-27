require('dotenv').config();

// 👉 Lista de variables requeridas (requiredVars)
const requiredVars = [
  'PORT',
  'MONGO_URI',
  'JWT_SECRET',
  'EMAIL_USER',
  'EMAIL_PASS',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'TWILIO_ACCOUNT_SID',
  'TWILIO_AUTH_TOKEN',
  'TWILIO_PHONE_NUMBER'
];

const missingVars = requiredVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.error('\n❌ ERROR: Faltan variables en el archivo .env');
  console.error(`🚨 Faltan: ${missingVars.join(', ')}`);
  process.exit(1); // Detener ejecución
}

console.log('✅ Variables de entorno validadas correctamente');
