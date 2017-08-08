// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 3

// *************
// * PROBLEM 1 *
// *************

// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the update function
// with the animal as the context, and 'Trogdor' as a parameter.
// return the result of your updateAnimal invocation

function callBinding(magicAnimals, updateAnimal, id){
var Trogdor;
    magicAnimals.filter((e)=>{
      e.id === id? Trogdor = e:null;
    })
   return updateAnimal('Trogdor');   
}


// *************
// * PROBLEM 2 *
// *************

// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and the array ['being majestic', 'eating rainbows'] as a parameter.
// return the result of your updateAnimal invocation

// CODE HERE...
function applyBinding(magicAnimals, updateAnimal, id) {
var arr; 
        magicAnimals.filter((e)=>{
         if (e.id === id){
             arr = e;
         }
    })
    updateAnimal = updateAnimal.bind(arr);
    return updateAnimal('being majestic', 'eating rainbows')
}


// *************
// * PROBLEM 3 *
// *************

// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter:
// $q (Custom promise object).
// NOTE: $q is an injected library, that works like angular's $q object.
// promiseMe will be invoked by a test and the test will expect a promise back.
// In your function, create a custom promise, then create a timeout with a duration of 20 ms.
// The timeout function should update the variable foo (seen below) to equal 'bar'.
// After the timeout is completed, the promise should be resolved with the new updated foo variable.
// NOTE: Manually invoking your function here will alter the 'foo' variable before tests run, causing them to fail.

var foo;
    function promiseMe($q) {
    var deffered = $q.defer();
        setTimeout(function() {
            foo = 'bar'
            deffered.resolve(foo);
        }, 20);
        return deffered.promise
    }


// *************
// * PROBLEM 4 *
// *************

// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters:
// $q (Custom promise object), $http (Custom request function).
// NOTE: $http is a function created to simulate the angular $http.
// Set up your custom promise, then make a GET request using $http to '/api/users'.
// Make an array of emails (array of strings) from the returned data (You will need to console log or debug to figure this out),
// and then resolve the array as you complete your promise.
function emailList($q, $http){
    var arr=[];
    var deffered = $q.defer();
    $http({
        method : "GET",
        url : "/api/users"
    }).then((response)=>{
        response.data.map((e)=>{
            arr.push(e.email);
        })
        console.log(arr);
    })
    setTimeout(function() {
        deffered.resolve(arr);
    }, 1000);
    return deffered.promise;
}
