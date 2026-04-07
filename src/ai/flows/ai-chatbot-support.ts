
'use server';
/**
 * @fileOverview An AI-powered chatbot for Al Furat Concrete Works, providing answers to customer inquiries.
 *
 * - aiChatbotSupport - A function that handles customer queries about concrete products and services.
 * - AIChatbotSupportInput - The input type for the aiChatbotSupport function.
 * - AIChatbotSupportOutput - The return type for the aiChatbotSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotSupportInputSchema = z.object({
  query: z.string().describe('The user\'s question about concrete products, specifications, ordering process, or delivery status.'),
});
export type AIChatbotSupportInput = z.infer<typeof AIChatbotSupportInputSchema>;

const AIChatbotSupportOutputSchema = z.object({
  response: z.string().describe('The AI chatbot\'s detailed answer to the user\'s question.'),
});
export type AIChatbotSupportOutput = z.infer<typeof AIChatbotSupportOutputSchema>;

export async function aiChatbotSupport(input: AIChatbotSupportInput): Promise<AIChatbotSupportOutput> {
  return aiChatbotSupportFlow(input);
}

const companyDescription = `نقدم لكم الحلول الخرسانية المتكاملة لمشاريعكم بكفاءة وجودة عالية في "الفرات للأعمال الخرسانية". نحن لا نقتصر على البيع فحسب، بل نضمن لكم تجربة مميزة تبدأ من اختيار المنتج المناسب وحتى التوصيل إلى موقعكم بكل سهولة وأمان.
لماذا نحن مختلفون؟
\t•\tتنوع هائل: جميع أنواع القواعد الخرسانية لأعمدة الإنارة، المناهل الأرضية للصرف الصحي وتمديدات الكهرباء، الحواجز الخرسانية، الحواجز الأمنية، أحواض الزهور، كراسي تجميلية للحدائق والطرقات، المصدات الأرضية للسيارات، يتوفر لدينا جميع الأنواع والمقاسات حسب الطلب.
•\tجودة معتمدة: منتجاتنا مصنوعة وفق أعلى المعايير الهندسية لضمان المتانة والأداء الطويل.
\t•\tسهولة الطلب والتوصيل: واجهة موقعنا مصممة لتسهيل عملية اختيار وطلب المنتجات، مع خدمة توصيل سريعة وآمنة.
نحن في الفرات نهدف لأن نكون شريككم الموثوق في كل مشروع، ونوفر لكم جميع المنتجات الخرسانية والجودة الاعتمادية التي تبحثون عنها.`;

const aiChatbotSupportPrompt = ai.definePrompt({
  name: 'aiChatbotSupportPrompt',
  input: {schema: AIChatbotSupportInputSchema},
  output: {schema: AIChatbotSupportOutputSchema},
  system: `أنت روبوت محادثة ذكي لـ "الفرات للأعمال الخرسانية". مهمتك هي الإجابة على أسئلة العملاء حول منتجاتنا وخدماتنا.
استخدم المعلومات التالية عن شركتنا لتقديم إجابات دقيقة ومفيدة. إذا لم تتمكن من الإجابة على سؤال معين بناءً على المعلومات المتاحة، فاذكر ذلك بوضوح.
يرجى الإجابة بلغة الاستعلام التي يقدمها المستخدم إذا أمكن، وإلا فباللغة العربية.

معلومات عن "الفرات للأعمال الخرسانية":
${companyDescription}
`,
  prompt: `الاستعلام: {{{query}}}
الإجابة: `,
});

const aiChatbotSupportFlow = ai.defineFlow(
  {
    name: 'aiChatbotSupportFlow',
    inputSchema: AIChatbotSupportInputSchema,
    outputSchema: AIChatbotSupportOutputSchema,
  },
  async (input) => {
    const {output} = await aiChatbotSupportPrompt(input);
    return output!;
  }
);
