import { Configuration, OpenAIApi } from "openai";

export async function getMoviesFromChatGPT(
  rawContent: string,
  language: string | null
) {
  let content = `Bring me 3 movies based on this sentence "${rawContent}" and answer me just the names in json, example { "movies": [ "movie1", "movie2", "movie3" ] }`;
  if (language === "pt-BR") {
    //need more tests
    // content = `Traga-me 3 filmes baseados nesta frase "${rawContent}" e me responda apenas os nomes em json, exemplo { "movies": [ "movie1", "movie2", "movie3" ] }`;
  }

  console.log("🚀 ~ file: chatgpt.ts:11 ~ content:", content);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content }],
    });

    if (completion.data.choices[0].message?.content) {
      const completion_text = completion.data.choices[0].message.content;
      console.log(
        "🚀 ~ file: chatgpt.ts:29 ~ completion_text:",
        completion_text
      );
      return completion_text;
    }
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
