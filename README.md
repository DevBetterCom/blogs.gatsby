# devBetter Blog

Source code for a multi author devBetter blog built with Gatsby.

## Prerequisites

The Gatsby CLI is required to run this project. ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli))

## Build and Run

Install dependencies with npm

```
npm install
```

Start Gatsby development server

```
gatsby develop
```

This will start the app on `http://localhost:8000/`

## Add a new Blog Post

Add a folder using `hyphen-case-of-title` as its name to `blog/`. In the folder, add `index.md` with the required headers of:

- title
- author
- date
- description
- featuredImage **(case sensitive!)**
- category

### Images

Add any images you reference in the folder. You can reference them in your markdown using a path of `./image.jpg`. For the featuredImage, use [pablo.buffer.com](https://pablo.buffer.com/#) with default settings. Add the `./src/images/devbetter-icon.png` to the bottom right of the image using the "Insert Logo or Graphic" option.

Example image:

[![Introducing NimblePros](https://blog.nimblepros.com/static/eac94d86b6885e70dbd46adfa6da5e84/db890/introducing-nimblepros.webp)](https://blog.nimblepros.com/static/eac94d86b6885e70dbd46adfa6da5e84/db890/introducing-nimblepros.webp)

Use other interesting images for most articles; reserve the NimblePros background image for company announcements, etc.

## Add a new Author

To add a new author you need to perform the following steps:

1. Update `data/author.yaml` with the author's name, bio, etc.

## Markdown Styling

[This link has a bunch of examples for how to format text documents using markdown](https://raw.githubusercontent.com/adamschwartz/github-markdown-kitchen-sink/master/README.md).