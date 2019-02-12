# react-boilerplate
My personal React boilerplate with TypeScript, webpack, SCSS module support and browser-sync.

## Why did I share this
I use this boilerplate for my personal and work projects. I kept it to a minimum to avoid any overhead.

I try to update the dependencies from time to time. I also added types for some common libraries I use quite often.

Since friends and colleagues ask me quite often how I start my projects, I thought it would be a nice idea to release this to the public.

## How to use

Simply clone this repo by using
```
  git clone <MyProject>
```
  
then move on to remove the .git folder and simply run
```
  git init
```
  
to initialize a new git repository.

Afterwards install all dependencies by running
```
npm i
```

## Usage

This boilerplate contains two scripts in the package.json, one for development, one for production build.

### Development

Just run 
```
npm start
```

and a browser window with browser-sync should open.

### Production
Just run
```
npm run prod
```

to get a minified, production-ready bundle in the "dist" folder.

## Customize
Feel free to customize the webpack config for your needs. I commented out line 10 in "config/plugins.js" which is the within the CopyWebpackPlugin. It helps copying static files, such as images or fonts to the "tmp" and "dist" folders. webpack-dev-server is not working when the directory not exists, that's why I commented it out.
