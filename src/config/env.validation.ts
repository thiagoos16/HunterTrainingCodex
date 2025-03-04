import { z } from "zod";

export const envSchema = z.object({
    PORT: z.string().nonempty().transform(Number),
    DATABASE_URL: z.string().url()
})