import React from "react";
import { links, images } from "./links";
import ReactDOMServer from "react-dom/server";
import fs from "fs";

type LinkProps = {
  src?: string;
  children: string;
};

export const Link = ({ src, children }: LinkProps) => {
  let lookup = src ? src : children;
  let destination = links[lookup];
  if (!destination) throw `Link ${children} not found.`;
  return (
    <a target="_blank" href={destination}>
      {children}
    </a>
  );
};

type ImageProps = {
  name: string;
  children: string;
};

export const Image = ({ name, children }: ImageProps) => {
  let source = images[name];
  if (!source) throw `Image ${name} not found.`;
  return (
    <>
      <img src={`images/${source}`}></img>
      <figcaption>{children}</figcaption>
    </>
  );
};

export const Break = () => (
  <>
    <br />
    <br />
  </>
);

type PostProps = {
  title: string;
  subtitle: string;
  children: any;
};

export const Post = ({ title, subtitle, children }: PostProps) => (
  <>
    <Click name="project-wrapper" click="expand(event)">
      <div className="project-title">{title}</div>
      <div className="project-content expand">
        <div className="subtitle">
          <p>{subtitle}</p>
          <div className="arrow expand"></div>
        </div>
        <Click name="project-details expand" click="swallow(event)">
          <hr />
          {children}
        </Click>
      </div>
    </Click>
  </>
);

type SectionProps = {
  title: string;
  classes: string;
  children: any;
};

export const Section = ({ title, classes, children }: SectionProps) => (
  <section id={title} className={classes}>
    {children}
  </section>
);

export const Content = ({ children }) => <div className="content">{children}</div>;

type ClickProps = {
  name: string;
  click: string;
  children: JSX.Element[];
};

export const Click = ({ name, click, children }: ClickProps) => {
  const element = (
    //@ts-ignore
    <div className={name} __click={click}>
      {children}
    </div>
  );
  return element;
};

// The downsides to this templating scheme are that:
// - One can't use string event handlers, as React wouldn't know what
//   to do with them, so the render function prevents anything of the
//   sort from being assigned to `onClick`, and prevents anything being
//   assigned to `onclick` directly.
// - Inside the same event handlers, `'` is sanitized to `&#x27;`, which
//   we then have to remove.
export function render(element: JSX.Element) {
  let result: string = ReactDOMServer.renderToStaticMarkup(element)
    //@ts-ignore
    .replaceAll("__click", "onclick")
    .replaceAll("&#x27;", "'");
  fs.writeFile("index.html", result, (err) => {
    if (err) throw err;
    console.log("Successfully rendered JSX");
  });
}
