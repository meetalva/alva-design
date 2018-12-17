# Howto: Develop Alva

:woman_student: **Level**: Expert

## What to expect

Shows how to build Alva from sources. Most likely
this is interesting to you if you want to contribute
code changes to Alva or try out features that are not 
released yet.

**After following the steps below you have a working dev setup for Alva**

## Prerequesites

* :evergreen_tree: [git](https://git-scm.com/downloads)
* :turtle: [Node.js](https://nodejs.org/en/) `>= 8`
* :computer: A terminal emulator 
* :globe_with_meridians: Internet connection


## Fetch and prepare project

Open a terminal and enter

```sh
git clone https://github.com/meetalva/alva.git
cd alva
npm install
```

## Watch TypeScript changes

```sh
./node_modules/.bin/tsc -w
```

## Watch Webpack changes

In a second terminal

```sh
./node_modules/.bin/webpack -w
```

## Start Alva

```sh
node build/bin/alva # start electron version
# alternatively:
# node build/bin/alva --host=node
# node build/bin/alva --host=static --serve
```
