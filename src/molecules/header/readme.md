The header component serves as the main navigation in a project.
It can take a logo to display and to link to a direction.
There is also an option to make the header sticky to the top.

### Usage
```
<Header logo="/api/static/alva-small.png">
	{children}
</Header>
```

---

### Header Props

`logo (string)`:
Optional – If a image is defined, it will be used as the logo.

`logoLink (string)`:
Optional - When Clicking on the logo, it defines the url.


`sticky (boolean)`:
Optional – Wether the header should be sticky to the top or scroll with the content.

---

### Changelog
#### 1.0.0 – `latest`
- Initial setup of component
