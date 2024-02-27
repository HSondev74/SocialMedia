import { z } from "zod";


export const SignupValidation = z.object({
     username: z.string().min(2,{message: 'Qua ngan'}).max(50),
     name: z.string().min(2,{message: 'Qua ngan'}).max(50, {message: 'Qua dai'}),
     email: z.string().email(),
     password: z.string().min(8,{message: 'mat khau phai du 8 ki tu. '} ),
   })