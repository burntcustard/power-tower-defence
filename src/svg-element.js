import { createElement, createSvgElement } from './utils';

export const gridCellSize = 8; // Width & height of a cell, in SVG px

export const gridWidth = 8 * 3;
export const gridHeight = 6 * 3;

export const gridSvgWidth = gridWidth * gridCellSize;
export const gridSvgHeight = gridHeight * gridCellSize;

export const gridLineThickness = 1;

export const svgContainerElement = createElement();
svgContainerElement.style.cssText = `
  position: absolute;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #0273;
  width: 100vw;
  height: 100vh;
`;
document.body.append(svgContainerElement);

export const svgElement = createSvgElement();
svgElement.style.cssText = `
  position: relative;
  display: grid;
  touch-action: none;
  width: 100vw;
  height: 100vh;
  max-height = 70vw;
  max-width = 200vh;
`;
svgElement.setAttribute('viewBox', `0 0 ${gridSvgWidth} ${gridSvgHeight}`);
svgContainerElement.append(svgElement);

export const addGridToSvg = () => {
  const defs = createSvgElement('defs');
  svgElement.append(defs);

  const pattern = createSvgElement('pattern');
  pattern.setAttribute('id', 'grid');
  pattern.setAttribute('width', gridCellSize * 3);
  pattern.setAttribute('height', gridCellSize * 3);
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  defs.append(pattern);

  const gridPathSm = createSvgElement('path');
  gridPathSm.setAttribute('d', `M${gridCellSize / 3} 0 0 0 0 ${gridCellSize / 3}`);
  gridPathSm.setAttribute('fill', 'none');
  gridPathSm.setAttribute('stroke', '#fffa');
  gridPathSm.setAttribute('stroke-width', gridLineThickness / 2);
  pattern.append(gridPathSm);

  const gridPathLg = createSvgElement('path');
  gridPathLg.setAttribute('d', `M${gridCellSize} 0 0 0 0 ${gridCellSize}`);
  gridPathLg.setAttribute('fill', 'none');
  gridPathLg.setAttribute('stroke', '#fffa');
  gridPathLg.setAttribute('stroke-width', gridLineThickness);
  pattern.append(gridPathLg);

  const gridRect = createSvgElement('rect');
  gridRect.setAttribute('width', `${gridSvgWidth + gridLineThickness / 2}px`);
  gridRect.setAttribute('height', `${gridSvgHeight + gridLineThickness / 2}px`);
  gridRect.setAttribute('transform', `translate(${1} ${1})`);
  gridRect.setAttribute('fill', 'url(#grid)');

  svgElement.append(gridRect);
}

addGridToSvg();
