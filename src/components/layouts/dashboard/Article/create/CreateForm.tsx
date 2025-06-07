"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Tiptap from "../../Tiptap";
import { CheckCircle, Rocket, Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Judul harus memiliki minimal 5 karakter.",
    })
    .max(100, {
      message: "Judul tidak boleh lebih dari 100 karakter.",
    }),
  content: z.string().min(10, {
    message: "Konten harus memiliki minimal 10 karakter.",
  }),
  author_name: z.string().min(2, {
    message: "Nama penulis harus memiliki minimal 2 karakter.",
  }),
});

const CreateForm = () => {
  const [is_submitting, setIsSubmitting] = useState(false);
  const [is_success, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "<p>Mulai tulis artikel luar biasa Anda di sini...</p>",
      author_name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Article submitted:", values);
      setIsSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error("Failed to submit article:", error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-main to-main/70 bg-clip-text text-transparent flex items-center justify-center gap-3">
            Buat Artikel Baru
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bagikan pemikiran Anda dengan dunia! Gunakan editor canggih kami
            untuk membuat konten yang menarik.
          </p>
        </div>
        {/* Form Card */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-border p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Title Field */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Artikel</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan judul artikel yang menarik..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Author Name Field */}
              <FormField
                control={form.control}
                name="author_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Penulis</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nama Anda sebagai penulis..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Content Field with Enhanced Tiptap */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konten Artikel</FormLabel>
                    <FormControl>
                      <div className="border-2 border-border rounded-xl overflow-hidden">
                        <Tiptap
                          content={field.value}
                          onChange={field.onChange}
                          placeholder="Mulai tulis konten luar biasa Anda di sini..."
                          className="w-full border-0"
                          min_height="600px"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                {is_success ? (
                  <div className="flex items-center gap-3 px-12 py-6 bg-green-100 border-2 border-green-300 rounded-xl text-green-700">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-xl font-bold">
                      Artikel Berhasil Dipublikasikan!
                    </span>
                  </div>
                ) : (
                  <Button type="submit" size="lg" disabled={is_submitting}>
                    {is_submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-3" />
                        Mempublikasikan...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-5 h-5 mr-2" />
                        Publikasikan Artikel
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default CreateForm;
