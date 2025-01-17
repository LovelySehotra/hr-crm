// import { ENV } from "@/config";
let allowedOrigins = ["https://hrcrm.vercel.app","http://localhost:5174"]
export const corsConfig = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin);
    } else {
      // callback(new Error('Not allowed by CORS'));
       callback(null, origin);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
};
