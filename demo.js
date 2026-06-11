function num(n)
{
    if(n>10)
    {
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}num(1);7