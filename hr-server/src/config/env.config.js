import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") })
export const {
    PORT,
    DATABASE_URL,
    JWT_SECRET,
    DEFAULT_PASSWORD,
    FRONTEND,
    UPLOADS_PATH
} = process.env