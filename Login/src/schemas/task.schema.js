import { z } from'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }),
    description: z.string({
        required_error: 'Description is required',
    }),
    Date: z.string().datetime().optional()
});