declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
    ASTRA_DB_API_ENDPOINT: string;
    ASTRA_DB_APPLICATION_TOKEN: string;
    NEXT_PUBLIC_WEBSITE_URL: string;
    ZEROBOUNCE_API_KEY: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_KEY_ID: string;
    STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
  }
}
