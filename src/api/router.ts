import { Context } from "elysia";
import * as ratesSvc from "./rates.service";

// GET - /rates
export const handleUpload = async (ctx: Context) => {
  try {
    return await ratesSvc.handleGetRates(ctx);
  } catch (error) {}
};
