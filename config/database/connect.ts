const connection = ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),

    ssl: env('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
  },
});

export default connection;