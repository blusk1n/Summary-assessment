// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  function wordLengths(str) {
      // TODO: your code here 
      var arr = str.split(" ");
      return map(arr,function(element, i){
      	return element.length
      })
  }
  //i use split(" ") to cut the string by words then i iterate over the arr using map and return new string with words length
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  function countOccurrences(string, character) {
      // your code is here
      var arr = string.split("");
      return filter(arr, function(element, i){
      		 return element === character
      }).length
  }
  // i use filter to  iterate over the arr and then i filter only the element that
  // are equal to character then i use length yo get the length of the returned aray
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  function wordsLongerThanThree(str) {
      // TODO: your code here 
      var arr = str.split(" ")
      return filter(arr ,function(element, i){
      	return element.length > 3;
      })
  }
  // isplit the str into array of word then i iterate over it using filter to filter only the element with length larger
//than 3  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  function repeatString(str, count) { 
   // TODO: your code here .
   		if(count === 0){
   		return "";
   		}
   		return str + repeatString(str,count-1)


  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  // Write your code here .....
  /*using closure my makePizza function have some functionaliy the first function take string as input and push its to or empty array in the property
	then display ingrediant will show you the ingredient separetad by commas
	then bake pizza that give your piza description is ready and after this eat slice that check condition if its true will decrease by 1 
  */
  function makePizza(crust, size , slices){
  	var piz = {};
  	piz.crust = crust;
  	piz.size = size;
  	piz.slices = slices;
  	piz.ingredients = [];
  	return {
  		addIngredients : function(str){
  			piz.ingredients.push(str)
  		},
  		displayIngredaints : function(){
  			return "the ingredients are : "+piz.ingredients.join(",")
  		},
  		bakePizza : function(){
  			setTimeout(function(){
  				console.log( "Your "+piz.crust+" "+piz.size+" "+piz.slices+" slice is done")
  			},2000)
  		},
  		eatSlice : function(){
  			if(piz.slices > 0 ){
  				return piz.slices -= 1 ;
  			}
  			return "your piza is done"
  		}
  	}
  }

  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  
  // Write your code here .....
  /*
	i creat a class readinglist that have some property and methods that represent this class 
  */
  function ReadingList(){
  	book = {};
  	book.read = 0;
  	book.unRead = 0;
  	book.toRead = [];
  	book.currentRead = "";
  	book.readBooks = [];
		book.addBook = addBook;
		book.finishCurrentBook = finishCurrentBook ;
  	return book;
  }
  var addBook = function(bookName){
  	this.toRead.push(bookName);
  	this.unRead+=1
  }
  var finishCurrentBook = function(){
  	this.readBooks.push(this.currentRead);
  	this.read += 1;
  	this.currentRead = this.toRead[0];
  	if(this.unRead - 1 >= 0){
  	this.unRead -= 1; 
  	}
  }
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....
  /*
		my function make safe have balance that represent the init v parametre and storage to store the items name each
		 time one of the condtion is true

  */
  function makeSafe(init){
  	var balance = init;
  	var storage = [];
  	 function addItem(item, size){
  		var pound = 0 ;
  		if(size === "big"){
  			pound = 3 ;
  		}
  		else if(size === "medium"){
  			pound = 2;
  		}
  		else if(size === "small"){
  			pound = 1;
  		}
  		if(balance - pound < 0){
  			return "can't fit"
  		}
  		console.log(balance -= pound)
  		storage.push(item)
  		if(balance === 0){
  			return storage.join(" ")
  		}

  	}
  
  	return addItem
  }
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  /* cloure is the implimentation of callbacks function inside  another function to 
  avoid being in the risk of global variables bug 
  its like creating another local scoop that is higher that your function scoop*/
  // 2- In OOP, what does "this" refer to ?
  /*
  this refer to the previous object it can be refered to previous object or window object or any think that is one step higher that her
  */
  
  // 3- What is jQuery?
  /*
	jquery is java script labrari that we use to manipulate the DOM  by making changes on it 
	or delete it add classes and many other stuff 
	but what make jquery likebale is his flexibility so instead of writing one line of code yo just write $("your selector")
  */
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
  /*
  the difference between oop and closure is that closure creat another function when you creat and instance of your object
  and thats not good for the memory it also deal with functions and nested function but  the OOP (object orianted programming )
  creat a class  in general taht have property and methods and each tme you creat instance  that will just impliment this method with specifiq param not creating  other methods
  */
  