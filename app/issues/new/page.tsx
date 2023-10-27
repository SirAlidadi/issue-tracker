"use client"

import { useState } from "react";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import SimpleMDE from "react-simplemde-editor";
import CreateIssueSchema, { CreateIssueForm } from "@/schema/CreateIssueSchema";
import axios from "axios";

import "easymde/dist/easymde.min.css";


export default function NewIssuePage() {
  const [error, setError] = useState<String>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateIssueForm>({
    resolver: zodResolver(CreateIssueSchema),
  });

  async function onHandleSubmit(data: CreateIssueForm) {
    try {
      setLoading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setLoading(false);
      setError("An unexpected error occurred.")
    }
  }

  return (
    <form className="max-w-xl space-y-2" onSubmit={handleSubmit(data => onHandleSubmit(data))}>
      {error &&
        <Callout.Root color="red" role="alert">
          <Callout.Text>
            { error }
          </Callout.Text>
        </Callout.Root>
      }
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>
      {errors.title?.message && <Text color="red" as="p">{errors.title?.message}</Text>}

      <Controller
        name="description"
        control={control}    
        render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
      />
      {errors.description?.message && <Text color="red" as="p">{errors.description?.message}</Text>}

      <Button className="w-full" disabled={loading}>
        Submit New Issue { loading && <Spinner /> }
      </Button>
    </form>
  )
}
