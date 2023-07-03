import { Configuration, OpenAIApi } from "openai";

export async function getMoviesFromChatGPT(rawContent: string, language: string | null) {


  // const resultLanguage = language ?? 'en-US'
  // const content = `Me indique 2 filmes com base nesta frase: ${rawContent} me responda apenas os nome separados por virgula`;
  const content = `Bring me 3 movies based on this sentence "${rawContent}" and answer me just the names in json, example { "movies": [ "movie1", "movie2", "movie3" ] }`;

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
