---
displayName: Guide 6 - Create a Pattern

tags:
  - guide
---

# Guide 6 - Create a Pattern

:woman_student: **Level**: Intermediate

---

Learn how to add our own component to Alva.

## Prerequesites

Make sure you have the following software 
installed on your machine.

* :evergreen_tree: [git](https://git-scm.com/downloads)
* :turtle: [Node.js](https://nodejs.org/en/) `>= 8`
* :computer: A terminal emulator 
* :globe_with_meridians: Internet connection


## 1. Setup up Alva Designkit

> ❔
> In this guide we'll skip the project setup
> part by reusing the Alva Designkit. 
>
> If you want to start fresh, skip to our [Create a Library Guide](./create-library.md)

Please make sure to follow our [Connnect a Library Guide](./library) before 
continuing with step 2.

## 2. Add a Hello World component

!(video:https://media.meetalva.io/video/add-hello-world.m4v)

Open your favorite text editor in the Alva Designkit folder you just 
connected to Alva. We'll show [VSCode](https://code.visualstudio.com/) in screenshots and videos but any text editor will do.

Let's create a new folder called "Hello World" with an `index.tsx` file in it:


> `mkdir src/hello-world && touch src/hello-world/index.tsx`

Add the following code to it. It is a simple React component rendering "Hello, World!" into an `<h1>` tag:

```ts
import * as React from 'react';

export const HelloWorld: React.SFC = () => {
	return (
		<h1>Hello, World!</h1>
	)
}
```

!(video:https://media.meetalva.io/video/export-hello-world.m4v)

This won't do anyhting on its own in Alva just yet. Let's add our brand new component to `src/index.ts` to change that:

```ts{4}
/** lines omitted */
export * from './space';
export * from './teaser';
export * from './hello-world';
```

## 3. Update Designkit in your Alva project

!(video:https://media.meetalva.io/video/update-library.m4v)

Start Alva and open the project you created while working through the [Connect a Library Guide](./library). 

On the `meetalva-designkit` card hit the "Update" button. Wait for the card to switch back from "Connecting" to "Connected".


## 4. Use the Hello World component

!(video:https://media.meetalva.io/video/use-hello-world.m4v)

Let's put our component to use! Click on the search bar above
the pattern list and type in "Hello World" (without quotation marks).

You should now see "Hello, World" into your preview, rendered by your very first component connected to Alva. 

Congratulations! :tada:

## Next

* **Next**: [Create a Pattern Library](./create-library?guides-enabled=true)
