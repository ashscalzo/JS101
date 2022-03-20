// Consider these two simple functions. What will the function invocation return?

function foo(param = 'no') {
  return 'yes';
}

function bar(param = 'no') {
  return param === 'no' ? 'yes' : 'no';
}

bar(foo());

// default param of foo is 'no'
// return value of foo() is always yes, no matter what the parameter is
// thus bar('yes') is invoked
// result of bar('yes') is 'no'

// output will be 'no'