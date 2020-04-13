let timerId = setTimeout(function log() {
  console.log('Hello');
  setTimeout(log, 2000);
});
clearTimeout(timerId); // Do not forget to set the condition under which the timer should stop


