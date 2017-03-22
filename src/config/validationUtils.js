import { validate } from 'validate.js/validate';

// export default function validate(fieldName, value) {
//   // Validate.js validates your values as an object
//   // e.g. var form = {email: 'email@example.com'}
//   // Line 8-9 creates an object based on the field name and field value
//   var formValues = {}
//   formValues[fieldName] = value

//   // Line 13-14 creates an temporary form with the validation fields
//   // e.g. var formFields = {
//   //                        email: {
//   //                         presence: {
//   //                          message: 'Email is blank'
//   //                         }
//   //                       }
//   var formFields = {}
//   formFields[fieldName] = validationRules[value]


//   // The formValues and validated against the formFields
//   // the variable result hold the error messages of the field
//   const result = validatejs(formValues, formFields)

//   // If there is an error message, return it!
//   if (result) {
//     // Return only the field error message if there are multiple
//     return result[value][0]
//   }

//   return null
// }

const validationRules = {
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    format: {
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '^Please enter a valid email address'
    }
  },

  password: {
    presence: {
      message: '^Please enter a password'
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters'
    }
  }
};


export default function validateWrapper(fieldName, value) {

  var formValues = {};
  formValues[fieldName] = value;

  const result = validate(formValues, validationRules);

  console.log("DMMM >>> result: " + JSON.stringify(result));

  // If there is an error message, return it!
  if (('undefined' === typeof result) || ('undefined' === typeof result[fieldName])) {
    return null;
  }

  if (result) {
    // Return only the field error message if there are multiple
    // return result[value][0];
    return result[fieldName][0];
  }

  return null
}