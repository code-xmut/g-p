FROM nginx
COPY dist/ /usr/share/nginx/html

# 将自定义的配置文件覆盖默认的配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 暴露80端口
EXPOSE 80
