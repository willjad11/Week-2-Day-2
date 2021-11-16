function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

console.log(pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]));

console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]));

console.log(pizzaOven("thin", "white", "cheddar", ["pineapple", "onions"]));

console.log(pizzaOven("regular", "BBQ Sauce", ["mexican blend", "swiss"], "sausage"));