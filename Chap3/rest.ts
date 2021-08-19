function doSomething(a, ...others) {
    console.log(a, others, others[others.length - 1]);
}

doSomething(1, 2, 3, 4, 5, 6, 7);

/*
As you can see, ...others refers to the rest of the parameters after a.
This indicates that rest parameters do not have to be the only parameters for a function.
*/