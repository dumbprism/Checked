
Well to do lists are the bread and basic building block while running over any web development course or practically a journey. It's just the way you put things and add logic to it.

As this was one of my assignments, the core of this assignment was to adhere all the SOLID principles.

### SOLID

well SOLID in programming apparently stands for

S = single responsibility
O = open and closed
L = Liskov substitution
I = Interface segregation principle
D = dependency inversion

I had to focus on single responsibility. Aight, this is confusing to those who are not quite familiar to these principles (though, I'm the only one whose unfamiliar).

Anyways, let's try to understand how they help us write clean and efficient codes.

### Single responsibility

Single responsibility is something where you give a class/function/method only one thing to do. So if I have a class Dog, thus I add some functionalities that the Dog is supposed to do, i can't add something like "meow". That is single responsibility.

It's like specifying each and every part of your computer to only perform the things that they have to. I can't sit and type numbers and words with my mouse ofcourse.

So that is single responsibility. Providing the specific and justified responsibilities to a class/function/objects etc.

### Open and Closed

Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.


Let's say you have a payment processing system for an online store that initially supports credit card payments. Over time, you need to add support for PayPal and Bitcoin. 
```JavaScript
class PaymentProcessor {
    processPayment(paymentType) {
        if (paymentType === "creditCard") {
            // process credit card payment
        } else if (paymentType === "PayPal") {
            // process PayPal payment
        } else if (paymentType === "Bitcoin") {
            // process Bitcoin payment
        }
    }
}

```

This code will definitely take in PayPal and bitCoin now, yayyyy!! no 😒. Well, it violates the open closed principle. The class is will now be modified every time there is a new payment option, making it a stressful job for you.

```JavaScript
class PaymentProcessor {
    processPayment(payment) {
        payment.process();
    }
}

class CreditCardPayment {
    process() {
        // process credit card payment
    }
}

class PayPalPayment {
    process() {
        // process PayPal payment
    }
}

class BitcoinPayment {
    process() {
        // process Bitcoin payment
    }
}

// Usage
let processor = new PaymentProcessor();
let payment = new PayPalPayment();
processor.processPayment(payment);

```

we can just extend the `PaymentProcessor` class by adding subclasses.


### Liskov Substitution Principle

objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.

Well, let's understand it with a scenario

Let's say you have a flying simulation of birds but out of no where you decide to fly penguins now :)

```JavaScript
class Bird {
    fly() {
        // code to fly
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly");
    }
}

function letBirdFly(bird) {
    bird.fly();
}

letBirdFly(new Penguin()); 

```

That is definitely gonna throw an error. Why? We are extending the `Bird` class for `Penguin`, but this breaks the Liskov Substitution Principle because `Penguin` can't fly, and substituting a `Penguin` for a `Bird` will cause errors.

So to overcome that, we can create a new non-flying birds class and keep penguin in that, so that next time we notice a non flying animal we can put it in that.

```javascript
class Bird {
    // Bird properties and methods
}

class FlyingBird extends Bird {
    fly() {
        // code to fly
    }
}

class NonFlyingBird extends Bird {
    // code for non-flying birds
}

class Penguin extends NonFlyingBird {
    // Penguin specific code
}

function letBirdFly(bird) {
    if (bird instanceof FlyingBird) {
        bird.fly();
    }
}

letBirdFly(new FlyingBird());
letBirdFly(new Penguin()); 

```


### Interface Segregation Principle

no code should be forced to depend on methods it does not use.

Let's go back to the bird and penguin example. We know that penguins can't fly and if you force them, they'll of course throw an error. So penguins are specified to do a particular job and you can't force them to do something else.

Similarly with our body, each organ is designed to a specified job, you can't force them to just simply do something unique.


### Dependency Inversion Principle

Dependency inversion talks about the coupling between the different classes or modules

There is something called tightly coupled classes. They are once of those where all the classes depend very strongly on each other, and if one fails, boom, the rest fail too.
It is advised to keep your classes/modules loosely coupled.

### ASSIGNMENT

coming to the assignment, it was all about following these principles. Especially single responsibility. 
