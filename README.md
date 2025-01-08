# My Blog Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation of Tools
You will need `nodejs` (>=18 version) and `npm` package manager
```
$ sudo apt install nodejs
$ sudo apt install npm
```

### Local Development
To get started, first clone the public repo at [GitHub](https://github.com/surajmaji10/aiml).\
Next go into the folder `aiml` from your current directory `pwd`.

```
$ pwd
$ ls
$ cd aiml
```
Now you are in the project and can see the files and directories associated with the website.
```
$ ls
```
Now you will need to install all the dependencies specified in `package.json`.\
Simply run this command and wait:
```
$ npm install
```
Now you can check `docusaurus` version using:
``` 
npx docusaurus version
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
Do a build of the project which will generate files to `/build` directory which can be hosted via platforms like GitHub Pages.
```
$ npm run build
```

[//]: # (This command generates static content into the `build` directory and can be served using any static contents hosting service.)

### Deployment
Serve the above generated build files using
```
$ npm run serve
```

### Test and See
If you want to test your changes as you develop, you can run this command:
```
$ npm run start
```
This will launch the project at: [http://localhost:3000/aiml/](http://localhost:3000/aiml/)

[//]: # (If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.)

### References and Credits:
1. [Official Guide](https://docusaurus.io/docs/installation)
2. [Sample Video Help](https://www.youtube.com/watch?v=QfqLQwPxFWw&t=692s&ab_channel=FedericoTartarini)

### Contact and Report Errata
[Akash Maji](https://www.akashmaji.me/)\
[akash.maji@iisc.ac.in](mailto:akash.maji@iisc.ac.in)

Thanks for your time!
