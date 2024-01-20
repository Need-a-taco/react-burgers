# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

####################################################
The project is for Josh's learning. We got to this point by running

<npm create vite@latest>

Then we make a name, select React, and then choose between Javascript
and Typescript. In this case, I chose Javascript for simplicity. 

Then, once in the right directory, we simply run <npm install> every
once in a while to get everything installed. To actually run the
server, we do <npm run dev> to locally host it in our browser.

Now to familiarize ourselves with the file structure of a react applciation,
which is created for us like this by default. 

node_modules simply contains a bunch of external libraries and packages
that our project relies on. We don't spend time in this folder coding, but
it's good to know what it's for. This is the stuff that we piggy back off
of when using React.

The public folder is usually just images that we can render in our website.
However, this is not bundled in our project, meaning we don't wanna put
website specific stuff in here. We mainly want to put stuff availible
publically via url here. 

Then, 99% of our time is spent in the src folder. The assets folder is
like the public folder, but bundled. Thus, we should put all of the
relevant images, videos, audios, etc. in this folder so that it can run
anywhere when we host the application locally. 


