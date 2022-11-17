export default class Cursor {
  count = 1;
  targets = [];

  style = 'position: fixed; pointer-events: none; top: 0; left: 0;';
  body = document.querySelector('body');
  moved = false;

  constructor(data) {
    this.count = data.count || 1;
    this.targets = data.targets || false;

    this.init();
    this.move();
    this.status();
  }

  init() {
    const cursors = new Array(this.count).fill(0);

    cursors.forEach((_, index) => {
      const cursor = document.createElement('div');

      this.create(cursor, index);
    })
  }

  create(cursor, index) {
    cursor.setAttribute('data-cursor', `${index}`);
    cursor.setAttribute('style', this.style);

    this.body.append(cursor);
  }

  move() {
    const cursors = document.querySelectorAll('[data-cursor]');

    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      cursors.forEach((cursor) => {
        this.position(cursor, clientX, clientY);
      });

      this.moved = true;
    })
  }

  position(cursor, x, y) {
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  }

  status() {
    if (!(this.targets instanceof Array)) {
      return undefined;
    }

    for (const target of this.targets) {
      const targetEls = document.querySelectorAll(target);

      for (const el of targetEls) {
        el.addEventListener('mouseenter', this.hover.bind(this, target, true));
        el.addEventListener('mouseleave', this.hover.bind(this, target, false));
      }
    }
  }

  hover(target, show) {
    const name = target.replace(/[.#!]/g, '');

    if (!this.moved) {
      return undefined;
    }

    if (show) {
      return this.body.classList.add(`cursor-hover--${name}`);
    }

    this.body.classList.remove(`cursor-hover--${name}`);
  }
}