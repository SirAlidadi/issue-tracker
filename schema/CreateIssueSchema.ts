import { z } from "zod";

const CreateIssueSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(50),
  description: z.string().min(1, { message: "Description is required" })
});


export type CreateIssueForm = z.infer<typeof CreateIssueSchema>;

export default CreateIssueSchema;