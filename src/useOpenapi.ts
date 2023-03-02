const URL = "https://api.openai.com/v1/chat/completions";
import axios from "redaxios";
// 读取 env.KEY 设定为 API_KEY
const API_KEY = import.meta.env.VITE_KEY;

// 读取用户输入的字符串，进行拼装
const standardJson = (str: string) => {
  if (!str) return;
  return {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: str,
      },
    ],
  };
};

const fetchAPI = async (str: string) => {
  const payload = standardJson(str);

  const res = await axios.post(URL, payload, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  });
  console.log(res);
  return res;
};

// 编写 react hook useOpenapi，返回 fetchAPI
export const useOpenapi = () => {
  return { fetchAPI };
};
