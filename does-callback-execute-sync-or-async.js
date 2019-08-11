function a(cb) {
  console.log('in a');
  cb();
}

function run() {
  console.log('in run');
  a(() => console.log('in cb'));
}

run();
console.log('exiting');
