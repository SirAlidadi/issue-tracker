"use client"

import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";

import CreateIssueSchema, { CreateIssueForm } from "@/schema/CreateIssueSchema";
import SimpleMDE from "react-simplemde-editor";
import Spinner from "@/components/Spinner";

import "easymde/dist/easymde.min.css";


export default function NewIssuePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<CreateIssueForm>({
    resolver: zodResolver(CreateIssueSchema),
  });

  async function onHandleSubmit(data: CreateIssueForm) {
    try {
      setLoading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onHandleSubmit)} className="space-y-5 max-w-xl">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>
                This is your title for issue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <SimpleMDE placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>
                This is your description for issue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          Submit &nbsp;{loading && <Spinner />}
        </Button>
      </form>
    </Form>
  )
}
