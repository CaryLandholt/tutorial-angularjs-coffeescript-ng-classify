# tutorial-angularjs-coffeescript-ng-classify
> Tutorial files for https://www.youtube.com/watch?v=28gUTu9vnB4


## Installing
Before running, you must install and configure the following one-time dependencies:

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/)
* [gulp.js](http://gulpjs.com/) - use the terminal command below
```bash
$ npm install -g gulp
```

Once the dependencies have been installed, enter the following in the terminal:
```bash
$ git clone git@github.com:CaryLandholt/tutorial-angularjs-coffeescript-ng-classify.git
$ cd tutorial-angularjs-coffeescript-ng-classify
$ npm install
```


## Running
Enter the following in the terminal:
```bash
$ gulp
```

Now you can make changes to `original/controller.coffee` and with each save see the changes made by [ng-classify](https://github.com/CaryLandholt/ng-classify) in `ng-classified/controller.coffee`.

`destination/controller.js` contains the final JavaScript compiled code.