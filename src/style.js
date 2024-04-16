import { createElement } from "./utils";

export const initStyles = () => {
  const styles = createElement('style');

  // body has user-select: none; to prevent text being highlighted.
  // ui black and shade colours inlined to make things smaller maybe
  styles.innerText = `
    body {
      position: relative;
      font-weight: 700;
      font-family: system-ui;
      color: #f00;
      margin: 0;
      width: 100vw;
      height: 100vh;
      user-select: none;
    }
  `;

  document.head.append(styles);
};
