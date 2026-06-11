function guess(n)
{
    let guess = Number(prompt("enter a number"));
    if(n==guess)
    {
        console.log("You guessed it right");
    }
    else if (n<guess)
    {
        console.log("try a small number");
        guess(n);
    }
    else{
        console.log("try a bigger value");
        guess(n);
    }
}