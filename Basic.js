function Grandpa()
{
    this.friends = ["Alice","Bob"];
}
Grandpa.prototype.sayGrandpa = function()
{
    alert("Hello grandpa");
}

function Dad()
{
    this.sons = ["Cercei", "David"];
}
//prototype object is an instance of Grandpa
Dad.prototype = new Grandpa();

var dad1 = new Dad();
/*
 * since prototype object of Dad is an instance of
 * Grandpa, to access property friends, js has to do below
 * checking: dad1(instance) -> grandpa instance(Dad.prototype)
 * -> Grandpa.prototype
 */
alert(dad1.friends); //Alice, Bob
dad1.friends.push("Vincent");
var dad2 = new Dad();
alert(dad2.friends); //Alice, Bob, Vincent
dad1.sayGrandpa(); // Hello grandpa

/*
 * above inheritance has a problem, since all the instances of
 * Dad share the same Grandpa instance as their prototype, any change
 * on the reference value would influence other instances of Dad.
 *
 * below code shows the solution
 */
function Grandpa()
{
    this.friends = ["Alice","Bob"];
}
function Dad()
{
    //by calling constructor of supper type,
    //every instance of subtype could get a copy of properties of supper type
    Grandpa.call(this);
    this.sons = ["Cercei", "David"];
}
//prototype object is an instance of Grandpa
Dad.prototype = new Grandpa();

var dad1 = new Dad();
var dad2 = new Dad();
dad1.friends.push("Vincent");
alert(dad2.friends); //Alice, Bob