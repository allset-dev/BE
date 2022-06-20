import dotenv from "dotenv";

dotenv.config({ path: "~/.bash_profile" });
dotenv.config({ path: "./.env" });

export const MONGOOSE_AUTH = process.env.MONGOOSE_AUTH;
export const PORT = process.env.PORT || 3002;
