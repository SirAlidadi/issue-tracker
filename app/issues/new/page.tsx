"use client"

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

import "easymde/dist/easymde.min.css";

interface IssueForm {
  title: String,
  description: String
}

const schema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1)
});

export default function NewIssuePage() {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(schema),
  });

  function onHandleSubmit(data: IssueForm) {
    axios.post("/api/issues", data);
    router.push("/issues");
  }

  return (
    <form className="max-w-xl space-y-2" onSubmit={handleSubmit(data => onHandleSubmit(data))}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>
      {errors.title?.message && <p>{errors.title?.message}</p>}
      <Controller
        name="description"
        control={control}    
        render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
      />
      {errors.description?.message && <p>{errors.description?.message}</p>}
      <Button className="w-full">Submit New Issue</Button>
    </form>
  )
}
