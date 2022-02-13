#The first step is to set up the PARENT IMAGE by calling 
#the keyword FROM
FROM node:17-alpine


#It tells docker that when we run a command - do it from this directory
WORKDIR /app

#Copy to the root relative directory 
COPY . .

RUN npm install

EXPOSE 4000
# required for docker desktop port mapping

#Finally instead of running node app.js we specify the command that will be run in the docker container
CMD ["node", "app.js"]