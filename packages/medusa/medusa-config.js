const dotenv = require("dotenv");
module.exports = {
  projectConfig: {
    redisUrl: process.env.REDIS_URL,
    
    databaseUrl: process.env.DATABASE_URL,
    databaseType: process.env.DATABASE_TYPE || "postgres",
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
      authCors: process.env.AUTH_CORS,
    },
//    workerMode: process.env.MEDUSA_WORKER_MODE || "server",
  },
  
  //modules: {
    // Uncomment and configure your modules as needed for Medusa 2.x
    // eventBus: {
    //   resolve: "@medusajs/event-bus-redis",
    //   options: {
    //     redisUrl: process.env.REDIS_URL,
    //   },
    // },
    // cacheService: {
    //   resolve: "@medusajs/cache-redis",
    //   options: {
    //     redisUrl: process.env.REDIS_URL,
    //   },
    // },
    // fileService: {
    //   resolve: "@medusajs/file-local",
    //   options: {
    //     upload_dir: "uploads",
    //   },
    // },
    // payment: {
    //   resolve: "@medusajs/payment-stripe",
    //   options: {
    //     api_key: process.env.STRIPE_API_KEY,
    //   },
    // },
    // notification: {
    //   resolve: "@medusajs/sendgrid",
    //   options: {
    //     api_key: process.env.SENDGRID_API_KEY,
    //     from: process.env.SENDGRID_FROM,
    //   },
    // },
  //},

//  plugins: [
    //{
      
      //resolve: "@medusajs/admin",
      ///** @type {import('@medusajs/admin').PluginOptions} */
      //options: {
       // autoRebuild: true,
       // serve: true,
       // backendUrl: process.env.MEDUSA_BACKEND_URL || "http://localhost:9000",
       // vite: () => {
        //  return {
         //   define: {
          //    'process.env.VITE_MY_API_KEY': JSON.stringify(process.env.VITE_MY_API_KEY),
          //    'process.env.VITE_MEDUSA_BASE': JSON.stringify(process.env.VITE_MEDUSA_BASE || "/"),
          //    'process.env.VITE_MEDUSA_STOREFRONT_URL': JSON.stringify(process.env.VITE_MEDUSA_STOREFRONT_URL || "http://localhost:8000"),
          //  },
            // If you have admin extensions defined in `VITE_MEDUSA_PROJECT`,
            // the admin plugin often handles injecting them automatically.
            // If not, and you encounter issues, you might need to uncomment and configure:
            // plugins: [
            //   require("@medusajs/admin-vite-plugin").inject({
            //     sources: process.env.VITE_MEDUSA_PROJECT ? [process.env.VITE_MEDUSA_PROJECT] : [],
            //   }),
            // ],
          //};
      //  },
      //},
    //},
    // Add other plugins here, if applicable
    // {
    //   resolve: "@medusajs/fulfillment-manual",
    //   options: {},
    // },
    // {
    //   resolve: "@medusajs/payment-manual",
    //   options: {},
    // },
  //],
  plugins: [
    //{
    //  resolve: "@medusajs/admin",
    //  options: {
        // You can add options here if needed
    //  },
   // },
  ],
  admin: {
 //   // You can customize these as needed
    disable: false, // Disable admin by default
 //   path: "/app", // default admin path
  },
}