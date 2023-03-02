import "./App.css";
import Chat, { Bubble, useMessages } from "@chatui/core";
import { useOpenapi } from "./useOpenapi";

function App() {
  const { messages, appendMsg, setTyping } = useMessages([]);

  const { fetchAPI } = useOpenapi();
  function handleSend(type: any, val: string) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      fetchAPI(val)
        .then((res) => {
          const resArr = res.data.choices ?? [];
          // 循环 resArr 把元素 message 丢给 appendMsg
          resArr.forEach((item: any) => {
            appendMsg({
              type: "text",
              content: { text: item.message.content },
            });
          });
        })
        .catch((e) => {
          console.log("err", e);
        });
    }
  }

  function renderMessageContent(msg: any) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <div className="app">
      <Chat
        navbar={{ title: "智能助理" }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
    </div>
  );
}

export default App;
