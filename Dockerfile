FROM node:13.3.0 AS node-image
WORKDIR /opt/ng 
COPY package.json ./

RUN npm install
COPY . ./ 
RUN node_modules/.bin/ng build --prod

FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node-image /opt/ng/dist/AngularDemo2 /usr/share/nginx/html
