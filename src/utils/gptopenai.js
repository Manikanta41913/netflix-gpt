import OpenAI from "openai";
import { GROQ_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export default client;
