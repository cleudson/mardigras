


const mdg = function (){
  const PATTERNS ={
    // only numbers
    '#': new RegExp('\\d'),
    // only letters
    '&': new RegExp('[a-zA-Z]'),
    // letters and numbers
    '@': new RegExp('[a-zA-Z0-9]'),
    // special characters
    '$': new RegExp('[^a-zA-Z0-9\\s]'),
    // Separators
    '!': new RegExp('[,\\.\\/(\\[\\{\\}\\])|\\-_\\*\\^:;\\|—¯]', 'g'),
  };
  const MASK_RULE = new RegExp('[#@&\\$]', 'gi');
  const PLACEHOLDER = 'ø'	//Alt 0248;


  function removeSeparators(string){
    return string.replace(PATTERNS["!"],"")
  }
  function arrayToString(arr){
    return arr.join("");
  }


  function createArrayMask(mask){
    // Define the array of mask
    let MASK_ARRAY = [];
    const MASK_ARRAY_CONTENT = (originalMask) => (
      {
        maskOriginal: bypassMask(originalMask),
        maskCleaned: cleanMask(originalMask),
        maskBlinded: blindMask(bypassMask(originalMask)),
        maskedOutput: "",
        completed: false
      }
    );
    //remove the separators and check valid characters on mask
    function cleanMask(mask){
      // Take off the separators of mask
      const CLEANED_MASK = removeSeparators(mask);
      // get all the valid characters of mask rule
      const VALID_CHARS = CLEANED_MASK.match(MASK_RULE);
      // Tests if the cleaned string length are equal the valid string length
      if(CLEANED_MASK.length !== VALID_CHARS.length){
        throw "The mask has some invalid pattern character.";
      }
      return VALID_CHARS; 
    }
    // Turn the mask string into an array
    function bypassMask(mask){
      return mask.split("");
    }
    // Return a mask pattern without rules. Only placeholder and separators.
  function blindMask(maskOriginal){
    const BLIND_MASK = maskOriginal;
    BLIND_MASK.map((el, i) =>{
      if(PATTERNS[el]){
        BLIND_MASK[i] = PLACEHOLDER;
      }
    });
    return BLIND_MASK;
  }

    // Tests if the passed mask is an array or not
    if(!Array.isArray(mask)){
      // create an array based on the String passed
      MASK_ARRAY.push(MASK_ARRAY_CONTENT(mask));
    }
    else{
      // create a new array based on the Array passed
      mask.map((el, i) => {
        MASK_ARRAY[i] = MASK_ARRAY_CONTENT(mask[i])
      });
      // reorder de mask array
      reorderMaskArray(MASK_ARRAY);
    }
    return MASK_ARRAY;
  }


  function reorderMaskArray(maskArray){
      // Sort the array based on length of each item
      const MASK_SORTED = maskArray.sort(function(a, b) {
        if(removeSeparators(arrayToString(a.maskOriginal)) == removeSeparators(arrayToString(b.maskOriginal))) {
          throw "Two masks or more have de same amount of input characters.";
        };
        return a.maskCleaned.length - b.maskCleaned.length;
      });
      return MASK_SORTED;
  }





  function placedholderFilled(inputString, maskObject){
    // Define the mask Object value
    const MASK_OBJECT = maskObject;
    // Transform the masksBlinded array into string
    let OUTPUT = arrayToString(MASK_OBJECT.maskBlinded);
    // Set the completed value o mask object as false
    MASK_OBJECT.completed = false;
    // fulfill the output changing the blind character in favor of input characters
    for (var i = 0; i < inputString.length; i++) {
      const CURRENT_CHAR =  inputString.charAt(i);
      OUTPUT = OUTPUT.replace(PLACEHOLDER, CURRENT_CHAR);
      //break if the there is no placeholder on blinded mask
      if(OUTPUT.indexOf(PLACEHOLDER) == -1) break;
    }
    const BLIND_CHARACTER_INDEX = OUTPUT.indexOf(PLACEHOLDER);
    // check if the placeholder is stil on the output
    if(OUTPUT.indexOf(PLACEHOLDER) > -1){
      OUTPUT = OUTPUT.replace(OUTPUT.substr(BLIND_CHARACTER_INDEX),"");
      //check if output has some separator on last character and remove it
      while((PATTERNS['!'].test(OUTPUT.slice(-1))) === true && OUTPUT !== ""){
          OUTPUT = OUTPUT.substring(0, OUTPUT.length -1);
      }
    }
    // check if the generated output length is the same of original mask and change the complete state of object
    if(OUTPUT.length === maskObject.maskOriginal.length){
      MASK_OBJECT.completed = true;
    }

    MASK_OBJECT.maskedOutput = OUTPUT;

    return MASK_OBJECT;
  }


  // return the result
  function generateMaskOutuput (input, maskObject){
    let MASK_OBJECT = {};
    // set the clean mask value
    const CLEANED_MASK = maskObject.maskCleaned;
    
    // create a new string
    let STR = "";
    for (var i = 0; i < input.length; i++) {
      //Define the current regex
      let CURRENT_REGEX = undefined;
      // get the character of cleaned mask
      const CURRENT_MASK_CHAR =  CLEANED_MASK[i];
      // get the current character of input
      const CURRENT_INPUT_CHAR =  input.charAt(i);
      // Tests if the the cleaned mask has reached the last entry
      if(CURRENT_MASK_CHAR){
        // get the regex based on the character of cleaned mask
        CURRENT_REGEX = PATTERNS[CURRENT_MASK_CHAR];
      }
      else{
        break;
      }
      // Tests if the current character of input is accepted by regex
      if(CURRENT_REGEX.test(CURRENT_INPUT_CHAR)){
        // fill the new string
        STR += CURRENT_INPUT_CHAR;
      }
      else{
        break;
      }
    }
    // Fill the key "maskedOutput" of maskObject
    MASK_OBJECT=  placedholderFilled(STR, maskObject)
    return MASK_OBJECT;
  }


  function defineMaskOutput(maskArrayWithOutput){
    console.log(maskArrayWithOutput)
    //Define the array that will be populated with completed and uncompleted outputs
    let COMPLETED_MASKS = [];
    let UNCOMPLETED_MASKS = [];
    maskArrayWithOutput.map((el, i) => {
        if(el.completed){
          COMPLETED_MASKS.push(el);
        }
        else{
          UNCOMPLETED_MASKS.push(el);
        }
    });



    function defineFinalOutput (a,b, i, arr){
      // Set the chosen key based on the array that is checked
      if( arr === COMPLETED_MASKS ){
      OUTPUT_OBJ = (a.maskedOutput.length > b.maskedOutput.length) ? a : b;
      }
      else{
        OUTPUT_OBJ = ((a.maskedOutput.length > b.maskedOutput.length) || (a.maskOriginal.length < b.maskOriginal.length)) ? a : b;
      }
      
      const ARRAY_INDEX = arr.indexOf(OUTPUT_OBJ);
      return arr[ARRAY_INDEX];
    }
    // Reduce the completed masks to an object that has the biggest output length
    const COMPLETED_OUTPUT = (COMPLETED_MASKS.length > 0) ? COMPLETED_MASKS.reduce(defineFinalOutput) : undefined;
    // Reduce the uncompleted masks to an object that has the biggest output length
    const UNCOMPLETED_OUTPUT = (UNCOMPLETED_MASKS.length > 0) ? UNCOMPLETED_MASKS.reduce(defineFinalOutput) : undefined;
    return COMPLETED_OUTPUT  || UNCOMPLETED_OUTPUT;
  }



  function applyMask(input, mask, callbackSuccess) {
    // Create the array of mask
    let MASK_ARRAY = createArrayMask(mask);
    const INPUT = removeSeparators(input);
    // generate the output of each array entry
    MASK_ARRAY.map((el,i) =>{
      generateMaskOutuput(INPUT, el);
    })
    // Define which output is chosen to be returned
    const CHOSEN_OBJ = defineMaskOutput(MASK_ARRAY);
    function runCallback(){
        if(callbackSuccess){
            callbackSuccess();
        }
    }
    runCallback();
    return{
      input: input,
      mask: mask,
      callback: callbackSuccess,
      completed: CHOSEN_OBJ.completed,
      output: CHOSEN_OBJ.maskedOutput
    }
  }
  return applyMask;
}();

console.log(mdg('123456' ,['###.###-###.##', '###-##']))

///error mdg('123456' ,['###.###-###.##', '###-##']) // trava o inputfield na segunda máscara
// embora a segunda máscara esteja completa, travando no número é retirada a possibiliade de incluir mais númerosno inputfield
// entao não pode dividir as mascara entre completas ou não
// talvez eu possa eliminar a máscara caso os caracteres válidos do input sejam maiores que a masçara e que esta mascara nao seja única