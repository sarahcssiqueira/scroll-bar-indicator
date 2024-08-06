# Scroll Bar Indicator 

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Version](https://img.shields.io/npm/v/scroll-bar-indicator)
[![Release Version](https://img.shields.io/github/release/sarahcssiqueira/scroll-bar-indicator.svg?color)](https://github.com/sarahcssiqueira/scroll-bar-indicator/releases/latest)

`ScrollBarIndicator` is a customizable React component that displays a scroll position indicator.

<p align="center">
  <img src="./src/assets/scroll-bar-indicator-screenshot.png" alt="Scroll Bar Indicator Screenshot"/>
</p>

## Usage

### Install

To install the `scroll-bar-indicator` package, run:

`npm install scroll-bar-indicator` or 

`yarn add scroll-bar-indicator`

### Import

Import the ScrollBarIndicator in your React application:

`import ScrollBarIndicator from 'scroll-bar-indicator';`

Add the component with your custom props.

```
    <ScrollBarIndicator
      barColor="rgb(200, 200, 200)"
      barHeight = "2rem",
      indicatorColor="rgb(14, 179, 170)" 
      infoColor="rgb(51, 51, 51)"
      showInfo={true}
    />

```

### Props

To customize, use the props below into the ScrollBarIndicator:

- `barColor` (string): Background color of the scroll bar. Default is `rgb(179, 179, 179)`.
- `barHeight` (string): Defines the bar height. Default is `2 rem`.
- `indicatorColor` (string): Background color of the scroll indicator. Default is `rgb(14, 179, 170)`.
- `infoColor` (string): Color of the scroll info text. Default is `rgb(51, 51, 51)`.
- `showInfo` (boolean): Whether to display the scroll info text. Default is `true`.

## License

MIT