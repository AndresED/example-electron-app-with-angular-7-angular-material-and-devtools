Angular Material Demo
=============

[![Greenkeeper badge](https://badges.greenkeeper.io/aveferrum/angular-material-demo.svg)](https://greenkeeper.io/)
[![Dependencies Status](https://david-dm.org/aveferrum/angular-material-demo.svg)](https://david-dm.org/aveferrum/angular-material-demo)
[![devDependencies Status](https://david-dm.org/aveferrum/angular-material-demo/dev-status.svg)](https://david-dm.org/aveferrum/angular-material-demo?type=dev)
![](https://travis-ci.org/aveferrum/angular-material-demo.svg?branch=master)

NOTE: This is an updated version of the original code, https://github.com/jelbourn/material2-app
Please check the package.json & CHANGELOG.md file for what's updated.
See it live: https://angular-material-demo.firebaseapp.com/

# Installation

	$ cd ~/
	$ git clone git@github.com:aveferrum/angular-material-demo.git
    $ cd angular-material-demo
    $ npm install
    $ ng serve

# Docker image

[https://hub.docker.com/r/aveferrum/angular-material-demo](https://hub.docker.com/r/aveferrum/angular-material-demo "Angular Material Demo")

    $ docker pull aveferrum/angular-material-demo
    $ docker run -it -p 4200:4200 aveferrum/angular-material-demo ng serve --host 0.0.0.0