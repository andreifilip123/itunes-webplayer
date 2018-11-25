# iTunes to Youtube converter

The app loads your iTunes library and gives you the YouTube link of each song through the UI.

## Getting Started

The app receives as input your iTunes library. This app is found in `/Users/${USER}/Music/iTunes/iTunes Music Library.xml`. This file should be copied in the `public` folder with the same name.

### Prerequisites

Since this is a node-based package, you'll need to have node installed. I won't get into details. There are way too many tutorials on the internet on that. I recommend you to install [n](https://github.com/tj/n) for node version managing but any nvm works just fine.
Also, since it's a project for iTunes, you might want to have iTunes installed. Also, if you don't have the iTunes library as xml in `/Users/${USER}/Music/iTunes/iTunes Music Library.xml`, you'll have to open iTunes preferences(`Ctrl + ,`) and click on **Advanced** and then **Share iTunes Library XML with other applications**

### Installing

Download the repository by clicking on the green button at the top or by `git clone git@github.com:andreifilip123/itunes-webplayer.git`.

Go into the downloaded directory and install the project's dependencies using your favourite package manager(`npm`, `yarn`, `whatever floats your boat`).

Go to the p
npm:

```
npm install
```

yarn:

```
yarn
```

After you installed the projects dependencies, run the serve script:

npm:

```
npm run serve
```

yarn: 

```
yarn serve
```

The app will open on [localhost:8080](http://localhost:8080)

## Deployment

For building into production mode, you'll have to run the `build` script.

npm:

```
npm run build
```

yarn:

```
yarn build
```

## Built With

* [Vue CLI 3](https://cli.vuejs.org)
* [VueX](https://vuex.vuejs.org)
* [Foundation Sites](https://foundation.zurb.com/sites/docs/)
* [jQuery](https://jquery.com)

## Authors

* **Filip Andrei** - *Initial work* 

## Find me on:
 [Github](https://github.com/andreifilip123/) - andreifilip123
 
 [Twitter](https://twitter.com/andreifilip96) - andreifilip96
 
