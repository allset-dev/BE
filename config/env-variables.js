import dotenv from "dotenv";

dotenv.config({ path: "~/.bash_profile" });
dotenv.config({ path: "./config/.env" });

export const NodeEnvs = {
  DEVELOPMENT: "development",
};

export const MONGOOSE_AUTH = process.env.MONGOOSE_AUTH;
export const PORT = process.env.PORT || 3002;
export const NODE_ENV = process.env.NODE_ENV || NodeEnvs.DEVELOPMENT;
export const FE_PROXY = process.env.FE_PROXY;
export const IS_DEV = NODE_ENV === NodeEnvs.DEVELOPMENT;
