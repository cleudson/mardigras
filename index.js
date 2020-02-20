const emptyString =require('./src/utils/emptyString');
const {separators} = require('./src/constants');
const generateMaskOutuput = require('./src/fn/generateMaskOutput');
const createMaskSetttings = require('./src/fn/createMaskSettings');





const mdg = function (){
  function applyMask({input, pattern, onSuccess, onError}) {
    const maskGroup = createMaskSetttings(pattern);
    const inputWithoutSeparators = emptyString(input, separators);
    const maskOutput = maskGroup.map((maskObject) =>{
       return generateMaskOutuput(inputWithoutSeparators, maskObject);
    })
    const finalMask = maskOutput.reduce((prev, curr)=>{
      return (prev.output.length >= curr.output.length && prev.completed) ? prev : curr;
    });
    const { completed, output } = finalMask;

    if(completed && onSuccess){
        onSuccess();
    };
    if(!completed && onError){
      onError();
    }

    return{
      output,
      input,
      pattern,
      onSuccess,
      onError,
      completed,
    }
  }


  return applyMask;
}();

console.log(mdg({input:'12345678900', pattern:['###.###-###.##', '###-##'],
onError: function(){
  console.log("falhou")
},
onSuccess: function(){
  console.log("deu certo")
}
}))
