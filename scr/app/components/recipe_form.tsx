"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Utensils, Loader2 } from "lucide-react";

const formSchema = z.object({
  ingredients: z.string().min(3, {
    message: "Please enter at least one ingredient (minimum 3 characters).",
  }),
});

type RecipeFormProps = {
  onRecipeGenerate: (ingredients: string) => Promise<void>;
  isGenerating: boolean;
};

export default function RecipeForm({ onRecipeGenerate, isGenerating }: RecipeFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onRecipeGenerate(values.ingredients);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 bg-card shadow-lg rounded-lg border">
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Your Ingredients</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., chicken breast, broccoli, soy sauce, garlic"
                  className="min-h-[100px] text-base"
                  {...field}
                  disabled={isGenerating}
                  aria-label="Ingredients input"
                />
              </FormControl>
              <FormDescription>
                Enter the ingredients you have on hand, separated by commas.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-lg py-6" disabled={isGenerating}>
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Utensils className="mr-2 h-5 w-5" />
              Generate Recipe
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
