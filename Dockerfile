FROM node:10.8.0-alpine as builder
COPY package.json package-lock.json ./
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
RUN $(npm bin)/ng build --prod


FROM nginx:1.13.3-alpine
COPY /nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app/dist/newSpotApp/* /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
