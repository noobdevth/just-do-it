FROM node:alpine

# Configure Environment Variables for Development Server
ENV NODE_ENV development
ENV HOST 0.0.0.0
ENV PORT 3000

# Add Yarn
RUN apk update
RUN apk add yarn

# Setup the Project Workspace
ENV app /opt/app
RUN mkdir -p $app
WORKDIR $app

# Copy the application's files
COPY src $app/src
COPY public $app/public

# Copy the configuration files
COPY .babelrc $app/.babelrc
COPY static.config.js $app/static.config.js

# Install the dependencies
COPY package.json $app
COPY yarn.lock $app
RUN yarn --dev

# Expose the Port
EXPOSE $PORT

# Start the Development Server
CMD npx react-static start
