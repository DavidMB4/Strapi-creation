
import connect from './database/connect'; // Importa la configuración de PostgreSQL

const config = ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  
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

  
  return connect({ env });
};

export default config;