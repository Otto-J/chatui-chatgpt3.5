FROM nginx:latest

# 将本地的 nginx.conf 文件复制到容器中
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/fe.conf /etc/nginx/conf.d/fe.conf

# 将打包好的应用程序复制到 nginx 的默认目录下 /usr/share/nginx/html/
COPY ./dist /usr/share/nginx/html

# 设置环境变量
ENV KEY ""

EXPOSE 80


CMD sed -i "s/<meta name=\"KEY\" content=\"\" \/>/<meta name=\"KEY\" content=\"$KEY\" \/>/" /usr/share/nginx/html/index.html && nginx -g 'daemon off;'
