---
displayName: Guide 8 - Create a Library

tags:
  - guide
---

# Guide 7 - Create a custom Pattern Library

:woman_student: **Level**: Expert

---

## What to expect

This guide takes you step by step through the process of setting up a component library **from scratch**. 

Following along is very useful to understand what happens behind the scences. 
A project setup can be very time consuming though – you might want to have a look at the following 
shortcuts if you want to focus on component creation and use:

* Reuse [Alva Designkit](https://github.com/meetalva/designkit) and change to [Create Pattern Guide](./create-pattern)

* Fetch [Component Library Starter](https://github.com/meetalva/designkit) and skip to [Section 2](#section-2)

## Prerequesites

* :evergreen_tree: [git](https://git-scm.com/downloads)
* :turtle: [Node.js](https://nodejs.org/en/) `>= 8`
* :computer: A terminal emulator 
* :globe_with_meridians: Internet connection

## 1. Project setup

Let's dive right in. Start a terminal and change to the directory
you want to work in. For this tutorial we'll use `~/alva/` in examples,
screenshots and screencasts but any location on your computer works.

## 1a) Git initialization

Create a folder, change into it and initialize it as a git repository.

```
mkdir component-library
cd component-library
git init
```

Place a `.gitignore` in the same folder next. This will cause `git` to
omit the listed files and folders when committing, which helps us to
keep our commit history clear and meaningful.

```sh
# .gitgnore
lib
node_modules
```


---
