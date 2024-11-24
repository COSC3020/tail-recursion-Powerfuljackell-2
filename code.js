function fib(n, accum1 = 0, accum2 = 1){
    if(n == 0) return accum1;
    return fib(n-1, accum1+accum2, accum1);
}