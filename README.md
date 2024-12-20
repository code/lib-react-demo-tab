# React DemoTab 📑

[![npm version][npm-badge]][npm-url]
[![CI][build-badge]][build-url]
[![semantic-release][semantic-badge]][semantic-url]
[![TypeScript][typescript-badge]][typescript-url]

_Easily create React demo components_

## [Demo](https://demozap.github.io/react-demo-tab)

## Install

```bash
npm install react-demo-tab
```

## Example

[![](misc/demo-tab.gif)](https://demozap.github.io/react-demo-tab/?path=/story/examples--button-green)

```jsx
import ReactDOM from 'react-dom';
import DemoTab from 'react-demo-tab';
import DemoComponent from './ButtonGreen';

const demoCode = `
import './ButtonGreen.css';

const ButtonGreen = () => <button className="btn-green">Green Button</button>;
export default ButtonGreen;`;

const demoStyle = `
.btn-green {
  background-color: green;
  font-size: 14px;
  padding: 12px 26px;
  border-radius: 6px;
}`;

const App = () => {
  return (
    <DemoTab code={demoCode} style={demoStyle}>
      <DemoComponent />
    </DemoTab>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props

Create demo of component that is passed as a child.

Below is the complete list of possible props and their options:

> ▶︎ indicates optional prop with default value

**code**: string  
Demo code. Required.

**style**: string ▶︎ `undefined`  
Demo style.

**codeExt**: 'jsx' | 'tsx' ▶︎ `jsx`  
Code file extension for image to be displayed.

**styleExt**: 'css' | 'scss' ▶︎ `css`  
Style file extension for image to be displayed.

## Create demos with CLI

Instead of manually creating demos, automate the process with [DemoZap CLI](https://github.com/demozap/demozap).

## Development

_Easily set up a local development environment!_

Build project and start storybook on [localhost](http://localhost:9009):

- clone
- `npm install`
- `npm start`

**Start coding!** 🎉

## Built with DemoTab

- [React Tilt](https://github.com/mkosir/react-parallax-tilt) - [DemoTab](https://mkosir.github.io/react-parallax-tilt)
- [Mighty Mouse](https://github.com/mkosir/react-hook-mighty-mouse) - [DemoTab](https://mkosir.github.io/react-hook-mighty-mouse)
- [Magnetic Board](https://github.com/mkosir/react-magnetic-board) - [DemoTab](https://mkosir.github.io/react-magnetic-board)

## Contributing

All contributions are welcome!

[npm-url]: https://www.npmjs.com/package/react-demo-tab
[npm-badge]: https://img.shields.io/npm/v/react-demo-tab.svg
[build-badge]: https://github.com/demozap/react-demo-tab/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/demozap/react-demo-tab/actions/workflows/main.yml
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
