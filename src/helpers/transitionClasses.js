export const transitionClasses = (name, timeout) => `
 
  .${name}-appear {
    opacity: 0;
  }
  .${name}-appear.${name}-appear-active {
    opacity: 1;
    transition: opacity ${timeout}ms ease-out;
  }

 
  .${name}-enter {
    opacity: 0;
  }
  .${name}-enter.${name}-enter-active {
    opacity: 1;
    transition: opacity ${timeout}ms ease-in;
  }
  .${name}-exit {
    opacity: 1;
  }
  .${name}-exit.${name}-exit-active {
    opacity: 0;
    transition: opacity ${timeout}ms ease-in;
  }
  .${name}-exit-done {
    opacity: 0;
  }
`
