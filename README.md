# jest-my-array

Wellcome to testing in jest workshop. 

In this repo you will find a custom Array function, that creates our own Array object type. Once MyArray is instanciated, it's prototype has
a set of methods. We expect that all this methods works likely original Array methods in javascript.

The challenge is about test all methods to ensure they are all working as we expect.

### 1- Install the repo: 

```
npm install
```

### 2- How MyArray works

```
const array = new MyArray("A","B","C");
// array -> { 0: "A", 1: "B", 2:"C", length: 3 };
```

### 3- What we expect

```
const array = new MyArray("A",2,"C",44);

console.log(array.toString());    //A,2,C,44

array.push("new");
// array -> { 0: "A", 1: 2, 2:"C", 3: 44, 4: "new", length: 5 };
```

### Rules:

Is not allowed to use Array methods inside our MyArray custom methods.
We can use our MyArray custom methods inside other methods.
Javascript Object and String methods are allowed.

### Testing:

In the ```src/MyArray/tests``` folder Create a ```[method].test.js``` file for each method you want to test.

Run tests:

```
npm run test
```

Run a single test suite:

```
npm run test [TEST_FILE_PATH]
```

Check test coverage:

```
npm run test-coverage
```
Will find the coverage reports at ```coverage/lcov-report/index.html```

Run tests on debug mode (turn on Auto Attach at VSCode for a visual debugging)

```
npm run test-debug
```


Enjoy!
