const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  if(data.responses && data.responses.length > 0){
    data.responses.forEach(response => {
      
      // Convert empty fields to an empty string so we can use validator functions
      response.identifier = !isEmpty(response.identifier) ? response.identifier : "";

      // Question ID check
      if(Validator.isEmpty(response.identifier)){
          errors.identifier = "Question ID is missing";
      }
    });
  }else {
    errors.responses = "Responses is empty"; 
  }
  
return {
    errors,
    isValid: isEmpty(errors)
  };
};
