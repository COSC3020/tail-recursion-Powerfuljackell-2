# Tail Recursion

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

Used prior approved work at: https://github.com/COSC3020/tail-recursion-Powerfuljackell-1

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

Non-tail-recursive Fibonnaci is $O(2^n)$ since it calls itself twice for each recursion, this not only results in really bad performance, but also really bad memory utilization. Tail-recursive fibonnaci has the same big O as its iterative form $O(n)$ as it is directly reliant on n, and it only calls itself once for each recursion. The worst case would be the same $\Theta(n)$ as there is no input that would change the recursive operation of the code.