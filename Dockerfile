FROM node:10.13

COPY . /app
WORKDIR /app
RUN yarn install

# Port for the web server
EXPOSE 3000

# Port for hot reloading
EXPOSE 35729

CMD ["yarn", "start"]