# cube-ascii-react

<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="scssLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="cssLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/p5%20js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white" alt="cssLogo" style="height:50px;">
</p>

## Description

## 🚀🚀[You can try it online from your browser](https://im-rises.github.io/cube-ascii-react-website/) 🚀🚀

## 🚀🚀 [The package is available on npm](https://www.npmjs.com/package/cube-ascii-react) 🚀🚀

## Screenshots

[//]: # (|                                                      Attraction                                                       |                                                         Drag                                                          |                                                       Repulsion                                                       |)

[//]: # (|:---------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|)

[//]: # (| ![screenshot1]&#40;https://user-images.githubusercontent.com/59691442/230525907-1efd6bc5-ce33-485a-879a-57a8ed46c596.png&#41; | ![screenshot2]&#40;https://user-images.githubusercontent.com/59691442/230525910-7a41907f-d6fe-4ed2-8c44-94c09b837e6f.png&#41; | ![screenshot3]&#40;https://user-images.githubusercontent.com/59691442/230525912-bb0054c4-0f0c-4f6e-b7c9-937f11ba0acf.png&#41; |)

## Demo video

[//]: # (https://user-images.githubusercontent.com/59691442/219550627-16660c09-dbea-41f3-ba15-3d7aaafca6d9.mp4)

[//]: # (https://user-images.githubusercontent.com/59691442/230523799-9afbf327-3cf4-4530-8127-594339d94334.mp4)

[//]: # (https://user-images.githubusercontent.com/59691442/230526870-cd104007-be41-4cdd-a10e-4672da650974.mp4)

## Package installation

To install it type `npm install cube-ascii-react` in your terminal to install it.

Then you can import it in your project with `import ParticleSimulator from 'cube-ascii-react'`.

## Usage

To use it you can simply add the component in your project like this:

```tsx
import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (divRef.current) {
            setIsLoaded(true);
            console.log('loaded');
        }
    }, [divRef]);
    return (
        <div className={'App'} ref={divRef}>
            {
                isLoaded
                    ? (
                        <CubeAscii parentRef={divRef}/>
                    )
                    : (
                        <p>Loading...</p>
                    )
            }
        </div>
    );
};

export default App;

```

or you can change all the settings like this:

```tsx
import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (divRef.current) {
            setIsLoaded(true);
            console.log('loaded');
        }
    }, [divRef]);
    return (
        <div className={'App'} ref={divRef}>
            {
                isLoaded
                    ? (
                        <CubeAscii parentRef={divRef} screenWidth={70} screenHeight={30}
                                   cubeWidthHeight={40} distanceFromCamera={100}
                                   framerate={60} useColor={true}/>
                    )
                    : (
                        <p>Loading...</p>
                    )
            }
        </div>
    );
};

export default App;

```

The component takes 1 to 16 props:

- `parentRef` - a reference to the parent div of the canvas. It is used to get the size of the canvas.
- `screenWidth` - the resolution of the cube view in characters.
- `screenHeight` - the height of the cube view in characters.
- `cubeWidthHeight` - the width and height of the cube in characters.
- `distanceFromCamera` - the distance from the camera to the cube.
- `framerate` - the framerate of the animation.
- `useColor` - a boolean to use colors or not.

You can find the complete example of the project in the GitHub
repository [here](https://im-rises.github.io/cube-ascii-react-website).

> **Note**  
> Be sure to do like in the example, the parent div of the canvas must be set before the p5 canvas is created.

## GitHub Actions

[![Node.js CI](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/node.js.yml)
[![ESLint](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/eslint.yml/badge.svg?branch=main)](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/codeql.yml)
[![Node.js Package](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Im-Rises/cube-ascii-react/actions/workflows/npm-publish.yml)

The project is set up to run the following actions:

- node.js.yml : Runs the tests for the Node.js project.
- eslint.yml : Runs the ESLint linter on the project.
- codeql.yml : Runs the CodeQL linter on the project.
- npm-publish.yml : Publishes the package to npm.

## Libraries

React:  
<https://reactjs.org/docs/getting-started.html>

Xo:  
<https://github.com/xojs/xo>  
<https://github.com/xojs/eslint-config-xo-react>  
<https://github.com/xojs/eslint-config-xo-typescript>

ESLint:  
<https://eslint.org/docs/latest/user-guide/getting-started>

GitHub gh-pages:  
<https://github.com/gitname/react-gh-pages>

react-device-detect:  
<https://www.npmjs.com/package/react-device-detect>

## Documentation

The Coding Challenge (math and physics):  
<https://www.youtube.com/watch?v=OAcXnzRNiCY>

P5.js:  
<https://p5js.org/>

P5.js React:  
<https://www.npmjs.com/package/react-p5>

## Links

Check the source code
on [![github](https://user-images.githubusercontent.com/59691442/223556058-6244e346-8117-43cd-97c6-bf68611bf286.svg)](https://github.com/im-rises/cube-ascii-react)

Check the demo
on [![github](https://user-images.githubusercontent.com/59691442/223556058-6244e346-8117-43cd-97c6-bf68611bf286.svg)](https://github.com/im-rises/cube-ascii-react-website)

Check the package
on [![npm](https://user-images.githubusercontent.com/59691442/223556055-4e9ef014-79d4-4136-ac07-b837b49066c8.svg)](https://www.npmjs.com/package/cube-ascii-react)

## Contributors

Quentin MOREL :

- @Im-Rises
- <https://github.com/Im-Rises>

[![GitHub contributors](https://contrib.rocks/image?repo=Im-Rises/cube-ascii-react)](https://github.com/Im-Rises/cube-ascii-react/graphs/contributors)
