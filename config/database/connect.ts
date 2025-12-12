const connection = ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    // Esto es importante para que las variables de entorno funcionen correctamente:
    ssl: env('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
  },
});

export default connection;