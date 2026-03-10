'use server';
/**
 * @fileOverview This file defines a Genkit flow for handling custom concrete product specifications.
 * It takes a natural language description from the user and returns precise specifications, feasible options,
 * or matching existing products.
 *
 * - customProductSpecification - A function that processes custom product requests.
 * - CustomProductSpecificationInput - The input type for the customProductSpecification function.
 * - CustomProductSpecificationOutput - The return type for the customProductSpecification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomProductSpecificationInputSchema = z.object({
  description: z
    .string()
    .describe('Natural language description of the desired custom concrete product.'),
});
export type CustomProductSpecificationInput = z.infer<
  typeof CustomProductSpecificationInputSchema
>;

const CustomProductSpecificationOutputSchema = z.object({
  preciseSpecifications: z
    .string()
    .describe(
      'A detailed breakdown of the product\'s technical specifications, dimensions, material, and manufacturing considerations.'
    ),
  feasibleOptions: z
    .array(
      z.object({
        optionName: z.string().describe('Name or brief title of the feasible option.'),
        details: z
          .string()
          .describe(
            'Detailed description of the alternative design, material, or approach, and why it is feasible or recommended.'
          ),
      })
    )
    .describe(
      'Suggestions for alternative designs, materials, or manufacturing processes if the original request is not fully feasible or if there are more optimal solutions.'
    ),
  matchingExistingProducts: z
    .array(
      z.object({
        productName: z.string().describe('Name of the existing product.'),
        productId: z.string().describe('Unique identifier for the existing product (if applicable).'),
        similarityScore: z
          .number()
          .describe('A score (0-100) indicating how closely this product matches the request.'),
        reason: z
          .string()
          .describe('Explanation of why this existing product is a good match.'),
      })
    )
    .describe(
      'A list of existing products from the catalog that closely match the user\'s requirements, including a reason for the match.'
    ),
});
export type CustomProductSpecificationOutput = z.infer<
  typeof CustomProductSpecificationOutputSchema
>;

export async function customProductSpecification(
  input: CustomProductSpecificationInput
): Promise<CustomProductSpecificationOutput> {
  return customProductSpecificationFlow(input);
}

const customProductSpecificationPrompt = ai.definePrompt({
  name: 'customProductSpecificationPrompt',
  input: {schema: CustomProductSpecificationInputSchema},
  output: {schema: CustomProductSpecificationOutputSchema},
  prompt: `You are an expert in concrete product design and manufacturing for 'Concreate Solutions'.
Your task is to analyze a user's natural language description of a custom concrete product and provide a comprehensive response.

Based on the following user description, you must:
1. Generate precise technical specifications for the product, including dimensions, material recommendations, and manufacturing considerations.
2. Suggest feasible alternative options if the original request has challenges or if there are more optimal solutions, detailing why they are feasible.
3. Identify and list any existing products from a typical concrete product catalog that closely match the user's needs, explaining the similarity.

User Description: """{{{description}}}"""

Think step-by-step and provide a detailed, structured JSON output as defined by the output schema.`,
});

const customProductSpecificationFlow = ai.defineFlow(
  {
    name: 'customProductSpecificationFlow',
    inputSchema: CustomProductSpecificationInputSchema,
    outputSchema: CustomProductSpecificationOutputSchema,
  },
  async input => {
    const {output} = await customProductSpecificationPrompt(input);
    return output!;
  }
);
