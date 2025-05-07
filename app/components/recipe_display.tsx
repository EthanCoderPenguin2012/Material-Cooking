import type { GenerateRecipeOutput } from "@/ai/flows/generate-recipe";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ListChecks, BookOpenText, Salad } from "lucide-react";

export default function RecipeDisplay({ recipe }: { recipe: GenerateRecipeOutput }) {
  if (!recipe) return null;

  return (
    <Card className="w-full shadow-xl border">
      <CardHeader className="pb-4">
        <div className="flex items-center mb-2">
          <Salad className="h-8 w-8 text-accent mr-3" aria-hidden="true" />
          <CardTitle className="text-3xl font-bold tracking-tight">{recipe.recipeName}</CardTitle>
        </div>
        <CardDescription className="text-base">
          A delicious recipe crafted just for you from your ingredients.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {recipe.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={recipe.image}
              alt={`Image of ${recipe.recipeName}`}
              layout="fill"
              objectFit="cover"
              data-ai-hint="food photography"
            />
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center">
            <ListChecks className="h-6 w-6 text-accent mr-2" aria-hidden="true" />
            Ingredients
          </h3>
          <ul className="list-disc list-inside space-y-1 pl-2 text-foreground/90">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-base">{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center">
            <BookOpenText className="h-6 w-6 text-accent mr-2" aria-hidden="true" />
            Instructions
          </h3>
          <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground/90">
            {recipe.instructions}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
