"use client";

import { useState } from "react";
import type { GenerateRecipeOutput } from "@/ai/flows/generate-recipe";
import { generateRecipe } from "@/ai/flows/generate-recipe";
import RecipeForm from "@/components/recipe-form";
import RecipeDisplay from "@/components/recipe-display";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [recipe, setRecipe] = useState<GenerateRecipeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRecipeGeneration = async (ingredients: string) => {
    setIsLoading(true);
    setError(null);
    setRecipe(null); 

    try {
      const result = await generateRecipe({ ingredients });
      if (result) {
        setRecipe(result);
        toast({
          title: "Recipe Generated!",
          description: `Enjoy your ${result.recipeName}.`,
        });
      } else {
        throw new Error("AI did not return a recipe.");
      }
    } catch (e: any) {
      console.error("Error generating recipe:", e);
      setError(e.message || "Failed to generate recipe. Please try again.");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message || "There was a problem generating your recipe.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold">Material Cooking</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="space-y-10">
          <section aria-labelledby="ingredient-input-heading">
            <h2 id="ingredient-input-heading" className="sr-only">
              Ingredient Input
            </h2>
            <RecipeForm onRecipeGenerate={handleRecipeGeneration} isGenerating={isLoading} />
          </section>

          {error && (
            <Alert variant="destructive" role="alert">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error Generating Recipe</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isLoading && (
            <section aria-busy="true" aria-live="polite">
              <div className="space-y-4 p-6 bg-card shadow-lg rounded-lg border">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="aspect-video w-full rounded-lg" />
                <Skeleton className="h-6 w-1/4 mt-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-6 w-1/4 mt-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </section>
          )}

          {recipe && !isLoading && (
            <section aria-labelledby="recipe-display-heading">
              <h2 id="recipe-display-heading" className="sr-only">
                Generated Recipe
              </h2>
              <RecipeDisplay recipe={recipe} />
            </section>
          )}

          {!recipe && !isLoading && !error && (
             <section className="text-center py-12">
              <Image 
                src="https://picsum.photos/seed/recipebook/600/400" 
                alt="Stylized illustration of a recipe book and cooking ingredients" 
                width={600} 
                height={400} 
                className="mx-auto rounded-lg shadow-md mb-6 opacity-75"
                data-ai-hint="cooking ingredients"
              />
              <h2 className="text-2xl font-semibold text-foreground/80 mb-2">Ready to cook something amazing?</h2>
              <p className="text-muted-foreground">Enter your ingredients above and let our AI chef inspire you!</p>
            </section>
          )}
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>&copy; {new Date().getFullYear()} Material Cooking. All rights reserved.</p>
      </footer>
    </div>
  );
}
