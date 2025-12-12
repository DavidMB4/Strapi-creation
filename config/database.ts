// NOTA: Hemos quitado la importación del tipo Database problemática
import connect from './database/connect'; // Importa la configuración de PostgreSQL

// Usamos una anotación simplificada para el tipo 'env'
const config = ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  // Cuando NO estamos en producción o si no hay URL de base de datos,
  // usamos SQLite (la configuración de desarrollo por defecto).
  if (env('NODE_ENV') === 'development' || !env('DATABASE_URL')) {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        useNullAsDefault: true,
      },
    };
  }

  // Cuando estamos en producción Y hay una DATABASE_URL,
  // usamos la configuración de PostgreSQL (que importamos).
  return connect({ env });
};

export default config;