function introduction(firstName) {
    return `Hi, my name is ${firstName}.`
}


function introductionWithLanguage(firstName, programmingLanguage) {
    var Josh = "Hi, my name is Josh and I am learning to program in Ember.js";
    var Nancy = "Hi, my name is Nancy and I am learning to program in React.";
    if (firstName === Josh){
        return Josh;
    }
    else if (firstName === "Nancy"){
        return Nancy;
    }
    else if (firstName()){
        return Josh;
    }
}

// function introductionWithLanguageOptional(firstName = "User") {
//     var firstName = 
//     var programmingLanguage = false;
//     introductionWithLanguageOptional ? "Hello, my name is ${firstName}!" : "Hello, my name is ${firstName}, and I'm learning to program ${programmingLanguage}";
//     console.log(`Hello, my name is ${firstName}!`);
// } // `Hello, my name is ${firstName}, and I am learning to program in ${programmingLanguage}`



