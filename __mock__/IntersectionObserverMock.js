export class IntersectionObserverMock {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
    }
  
    observe() {
      this.callback([{ isIntersecting: true }]);
    }
  
    disconnect() {
      return null;
    }
  }
  