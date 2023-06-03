class CustomPromise {
  constructor(executor) {
    // Initial state of the promise
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    this.onFulfilledCallbacks = []; // Array to store onFulfilled callbacks
    this.onRejectedCallbacks = []; // Array to store onRejected callbacks

    const resolve = (value) => {
      // Transition the promise to fulfilled state and execute onFulfilled callbacks
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    };

    const reject = (reason) => {
      // Transition the promise to rejected state and execute onRejected callbacks
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback(reason);
        });
      }
    };

    try {
      executor(resolve, reject); // Execute the executor function with resolve and reject arguments
    } catch (error) {
      reject(error); // If an error occurs, reject the promise
    }
  }

  then(onFulfilled, onRejected) {
    // Create a new promise and return it for chaining
    return new CustomPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          if (typeof onFulfilled === "function") {
            const result = onFulfilled(value);
            resolve(result);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = (reason) => {
        try {
          if (typeof onRejected === "function") {
            const result = onRejected(reason);
            resolve(result);
          } else {
            reject(reason);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        // If the promise is already fulfilled, handle the value asynchronously
        setTimeout(() => {
          handleFulfilled(this.value);
        });
      } else if (this.state === "rejected") {
        // If the promise is already rejected, handle the reason asynchronously
        setTimeout(() => {
          handleRejected(this.error);
        });
      } else {
        // If the promise is still pending, add the callbacks to the respective arrays
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    // Shortcut for handling only the rejected state
    return this.then(null, onRejected);
  }

  static resolve(value) {
    // Create a new resolved promise with the given value
    return new CustomPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    // Create a new rejected promise with the given reason
    return new CustomPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

// Creating a new CustomPromise that resolves after 1 second
const myPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

// Using the then method to handle the resolved value
myPromise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error);
  });

// Creating a new CustomPromise that immediately rejects
const myPromise2 = new CustomPromise((resolve, reject) => {
  reject("Error!");
});

// Using the catch method to handle the rejected value
myPromise2.catch((error) => {
  console.error(error); // Output: Error!
});
