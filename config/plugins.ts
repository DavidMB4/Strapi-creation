// config/plugins.ts
const config = ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  // Otros plugins que puedas tener deben ir aquí, por ejemplo:
  // 'users-permissions': { ... },
  
  // CONFIGURACIÓN DEL PROVEEDOR DE CLOUDINARY
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'), // Usa la variable de tu .env
        api_key: env('CLOUDINARY_KEY'),     // Usa la variable de tu .env
        api_secret: env('CLOUDINARY_SECRET'), // Usa la variable de tu .env
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

export default config;