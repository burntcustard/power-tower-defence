import { GameLoop } from './modified-kontra/game-loop';

import { initStyles } from './style';

import {
  svgElement, gridWidth, gridHeight
} from './svg-element';

initStyles();

const loop = GameLoop({
  update() {
  },
  render() {
  },
});

loop.start();
