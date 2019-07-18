// Testing if a base class can call a function in a derived class
// Result: it can

class Parent {
  run() {
    this.test();
  }

  test() {
    throw new Error("Womp- you called the base class");
  }
}

class Child extends Parent {
  test() {
    console.log("This is the derived class");
  }
}

(new Child()).run();
