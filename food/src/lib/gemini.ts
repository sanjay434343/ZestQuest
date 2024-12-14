import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDi5fT0E2njaQeKOuQ2hNK3-Rhn8LB39kw");

export async function generateRecipe(ingredients: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  const prompt = `Check if the input ingredients and dish are related to food, cooking, ingredients, or recipes. If the input does not relate to cooking, ingredients, cooking items, or recipes, return the exception message "This input is not related to food, cooking, ingredients, or recipes. Please provide a valid cooking-related input."

If the input is valid (related to cooking, ingredients, or recipes), proceed with generating the recipe using the following detailed format:

Generate a highly detailed and structured recipe using the following ingredients: ${ingredients}.  

Response Format:  

1. Recipe Title:  
   - Provide a creative, engaging, and descriptive name for the recipe, written in bold.  
   - Optionally, add a subtitle that hints at the cuisine or unique characteristics of the dish (e.g., "A Hearty Vegetarian Delight" or "Tangy and Spicy Asian Fusion").  
   - Avoid using overly generic names. Ensure the title reflects the essence of the dish.  

2. Recipe Overview:  
   - Introduce the dish by explaining what it is, its history, or how it fits into certain cuisines.  
   - Describe the flavor profile (e.g., "spicy, tangy, and savory with a touch of sweetness") to help the reader know what to expect.  
   - Mention special dietary considerations if relevant (e.g., vegan, gluten-free, dairy-free, low-carb, or nut-free).  
   - Suggest if the dish is ideal for specific occasions (e.g., "perfect for a summer barbecue" or "great for a cozy winter dinner").  

3. Ingredients List:  
   - List all required ingredients in clear bullet points.  
   - Be specific with measurements, using precise quantities (e.g., "1 cup of flour," "2 teaspoons of olive oil," "4 oz of diced tomatoes").  
   - Include optional substitutions for certain ingredients, especially if common allergens are present (e.g., "Use almond milk instead of regular milk for a dairy-free version").  
   - If the recipe has multiple parts (e.g., a sauce, filling, or topping), break down the ingredients into sections like:  
     - For the base:  
     - For the filling:  
     - For the dressing:  
     - For garnishing:  
   - Mention ingredients that can be prepared ahead (e.g., "Marinate the chicken overnight for enhanced flavor").  

4. Step-by-Step Instructions:  
   - Provide clear and easy-to-follow numbered steps that break down the process of making the dish.  
   - Include approximate time estimates for each step where applicable (e.g., "Sauté onions for 5 minutes or until translucent").  
   - Use action-oriented verbs (e.g., "chop," "whisk," "mix," "simmer," "bake," "saute") and describe specific techniques (e.g., "chop the garlic finely," "whisk the mixture until smooth").  
   - If applicable, provide subtle tips or notes to avoid common mistakes (e.g., "Be careful not to overcook the pasta—al dente is ideal").  
   - Mention any temperature or timing specifics:  
     - E.g., "Preheat the oven to 375°F (190°C)" or "Simmer for 20 minutes over medium heat."  
   - If relevant, include alternatives for common kitchen tools (e.g., "If you don't have a food processor, you can chop the vegetables by hand").  
   - If there’s any waiting time between steps (e.g., resting dough, marinating), mention it clearly in the instructions.  

5. Cooking Time:  
   - Clearly break down the time as:  
     - Preparation Time: Time needed to prepare the ingredients (e.g., chopping, marinating).  
     - Cooking Time: Time spent cooking the dish, including heat levels and durations.  
     - Resting Time (if applicable): Time needed for the dish to rest before serving (e.g., "Let the cake cool for 30 minutes").  
   - Add total time needed to make the dish, from start to finish.  

6. Servings:  
   - Specify how many servings the recipe yields, based on typical portion sizes (e.g., "Serves 4 as a main course" or "Makes 12 muffins").  
   - If applicable, mention how the recipe can be scaled for more or fewer servings (e.g., "Double the recipe for a larger group").  
   - Provide details on how to adjust ingredient quantities based on the number of servings.  

7. Presentation and Serving Suggestions:  
   - Describe how to plate the dish in an appealing way, including garnishes or side items.  
   - Offer ideas for complementary side dishes or beverages that would pair well with the meal (e.g., "Serve with a light salad" or "Pair with a glass of Chardonnay").  
   - Suggest any finishing touches, like drizzling sauces, sprinkling herbs, or adding spices for extra flavor.  

8. Tips, Variations, and Substitutions:  
   - Provide helpful tips for improving the dish, such as the best way to achieve certain textures (e.g., "For crispy skin, bake at a higher temperature for the last 5 minutes").  
   - Include ingredient substitutions for dietary restrictions or personal preferences (e.g., "Use coconut oil instead of butter for a dairy-free option" or "Substitute quinoa for rice for a gluten-free dish").  
   - Offer variations of the recipe (e.g., "Make it spicier by adding extra chili flakes" or "Switch up the herbs for a different flavor profile").  
   - Mention alternative methods of preparation, such as grilling, slow-cooking, or air-frying.  

9. Storage and Reheating Instructions:  
   - Explain how to store leftovers and how long the dish will last (e.g., "Store in an airtight container in the fridge for up to 3 days").  
   - Provide reheating instructions, including the best methods to preserve texture and flavor (e.g., "Reheat in the microwave for 2-3 minutes or in the oven at 350°F for 10 minutes").  
   - If applicable, mention whether the dish can be frozen and how to do so.  

10. Nutritional Information (Optional):  
    - Provide an approximate breakdown of nutritional values per serving (e.g., "Calories: 350, Protein: 15g, Carbs: 30g, Fats: 12g").  
    - Include details like sodium content, fiber, sugar, or other relevant nutritional facts.  
    - Ensure that the nutritional information aligns with the ingredients used in the recipe.  

11. Allergen Information (Optional):  
    - List common allergens present in the recipe, such as dairy, gluten, nuts, etc.  
    - If substitutions are available, mention how to adjust the recipe for allergy-friendly versions.  

12. Additional Notes and Fun Facts (Optional):  
    - Provide cultural context or historical background for the dish, especially if it's traditional or from a specific region.  
    - Share interesting facts about the ingredients, such as their health benefits or origins.  
    - Include fun anecdotes or personal stories (e.g., "This recipe is a family favorite passed down through generations").  

13. Final Thoughts:  
    - Encourage readers to try the recipe, emphasizing how enjoyable or satisfying it is.  
    - Invite readers to share their results and personalize the dish with their own twists.  
    - Optionally, mention where to find the recipe on social media (e.g., "Share your creations with #RecipeName").

Guidelines for Recipe Generation:  
- Be clear and specific in each step to ensure the recipe is easy to follow for novice cooks while providing enough detail for more experienced chefs.  
- Ensure the language is professional yet approachable, making the recipe feel inviting and reliable.  
- Use simple and accessible ingredients that are easy to find in most kitchens or grocery stores.  
- Maintain an engaging tone throughout the recipe to keep the reader interested and excited to cook.  
- Double-check all ingredient quantities, instructions, and times for accuracy to guarantee a successful dish.  
- Include all the necessary kitchen equipment, tools, or appliances, and ensure they are easily accessible for home cooks.  

This extended prompt aims to produce a thorough and highly structured recipe, ensuring clarity, accuracy, and engagement for readers of all skill levels.

---

**If the input is not related to food, cooking, ingredients, or recipes, return the following exception message:**

"This input is not related to food, cooking, ingredients, or recipes. Please provide a valid cooking-related input."
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}