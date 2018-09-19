---
displayName: Guide 4 – Interaction

tags:
  - guide

options:
  order: 4
---

# Interaction
In this guide you will learn how to link pages and bring life into your prototype.

### (1) Add Page
On the left side of Alva all of the pages are shown. Let’s **add a page** and give it a name.

[IMAGE]

### (2) Add Button
We need an interactive component. Let’s **add a button**, for example.

> Technical Note: For Interactive Elements you need an `React.MouseEventHandler`or `React.EventHandler` property.


[IMAGE]

### (3) Link Page
Below the usual button properties such as Order or Disabled, you’ll find an **Interaction Property**. **Set it to** `Switch to Page` and **select the page** you want to link to below. That’s it!

[IMAGE]

### (4) Click
Well, because usually when you click on an element in the preview it gets selected, we have to test our interaction differently. **Hold *CMD* on macOS or *Ctrl* on Windows and click on the Button**. Yay, you just switched to the other page! After exporting your prototype you won’t need to hold those keys anymore.

[IMAGE]
