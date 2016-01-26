//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

// used for making your code more precise by keeping blocks of code within context

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

// 1. implicit: when you use 'this' inside of a function and call it by using the appropriate obj.function()
// 2. explicit: this uses bind, call or apply to dictacte where 'this' is referencing
// 3. 'new' binding: used with constructor objects in order to keep code simple
// 4. default: applies 'this' to the window or global scope

  // 3) What is the difference between call and apply?

// apply creates an array as a single paramater whereas call uses the new objects parameters

  // 4) What does .bind do?

// tell the code which context 'this' belongs to and never changes it, EVER


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'andrewmm',
  email: 'andrewmaliwauki@gmail.com',
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move + 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.bind(prius)();
getYear.bind(mustang)();

//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername.bind(myUser), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)

// undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

// the window or global scope

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
