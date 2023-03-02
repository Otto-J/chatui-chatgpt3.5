# chatUI + chatGPT 3.5

本项目是一个 react + vite 项目，依赖 chatUI 完成对话模型

- chatui https://chatui.io/docs/quick-start
  如果启动，需要你提供 OpenApi 的开发者密钥，放入 .env 的 VITE_KEY 中

- chatGPT 3.5 gpt-3.5-turbo

## 体验方法

1. 克隆项目
2. 修改 .env 文件的 VITE_KEY
3. 安装依赖 `pnpm i`
4. 启动项目 `npm run dev`

## 构建方式

docker build -t chatgpt-3.5-gui:0.0.2 .

docker run --rm --name my-chat-gui -p 8080:80 -e KEY=xxx chatgpt-3.5-gui:0.0.2

docker tag 10a1b01ca1da ji3206/chatgpt-3.5-gui:0.0.2

docker push ji3206/chatgpt-3.5-gui:0.0.2
