# Material Cooking

Material Cooking is a web application that uses AI to generate delicious recipes based on the ingredients you have at home. It provides a simple and intuitive interface for users to input ingredients, generate recipes, and view detailed instructions along with an AI-generated image of the dish.

## Features

- **Ingredient Input**: Enter the ingredients you have on hand in a simple form.
- **Recipe Generation**: AI-powered recipe generation based on the provided ingredients.
- **Recipe Display**: View the generated recipe with a list of ingredients, step-by-step instructions, and an image of the dish.
- **Dark Mode Support**: Seamless light and dark mode themes for better user experience.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [Genkit](https://genkit.ai/) with Google AI's Gemini model
- **UI Components**: Built with [Radix UI](https://www.radix-ui.com/) and [Lucide Icons](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/) for schema validation
- **State Management**: React hooks and context

## Folder Structure

``` Folder Structure
├── scr/
│   ├── ai/                # AI-related logic and flows
│   ├── app/               # Next.js app directory
│   │   ├── components/    # UI components
│   │   ├── [global.css](http://_vscodecontentref_/0)     # Global styles
│   │   ├── [layout.tsx](http://_vscodecontentref_/1)     # Root layout
│   │   ├── [page.tsx](http://_vscodecontentref_/2)       # Home page
│   ├── lib/               # Utility functions
├── docs/                  # Documentation
├── public/                # Static assets
├── [tailwind.config.ts](http://_vscodecontentref_/3)     # Tailwind CSS configuration
├── [next.config.ts](http://_vscodecontentref_/4)         # Next.js configuration
├── [package.json](http://_vscodecontentref_/5)           # Project metadata and scripts
```
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/material-cooking.git
   cd material-cooking
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Genkit API key:
   ```bash
   GENKIT_API_KEY=your_genkit_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.
6. Enjoy cooking with AI-generated recipes!
## Contributing
We welcome contributions! If you have suggestions or improvements, please open an issue or submit a pull request.
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
## Acknowledgements
- [Genkit](https://genkit.ai/) for the AI recipe generation API
- [Next.js](https://nextjs.org/) for the powerful React framework
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful and responsive design
- [Radix UI](https://www.radix-ui.com/) for the accessible UI components
- [Lucide Icons](https://lucide.dev/) for the beautiful icons