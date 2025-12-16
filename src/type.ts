import { LoginSchema } from './schemas/LoginSchema';
import z from "zod";
// =================================================================================================
export type LoginActionDataType = z.infer<typeof LoginSchema>
