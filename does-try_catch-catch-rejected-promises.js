// Test if promise rejections are caught by try/catch block
// Result: they are. however the promise must execute synchronously (using await) for the try/catch to work

async function test() {
  try {
    await Promise.reject(new Error("rejection"));
  }
  catch(err) {
    console.log("caught");
  }
}

test();
