<div align="center">
  <h1>Mardi Gras (MdG)</h1>
  <p>Mdg is for input masking</p>
  <br>
  <p>
    Mdg is a utility tool for creating single or multiple masks. It uses a template system, that make possible create an enumerous types of masks. It is designed to be used directly on DOM input fields, but also works very well with front-end frameworks. You can easily create masks for telephones, zip codes, vehicle plates, serial codes, documents, etc.
  </p>
</div>

## Table of Contents

- [Installing](#installing)
- [Template system](#template-system)
  * [Templating characters](#templating-characters)
  * [Separators](#separators)
  * [Some Examples](#some-examples)
- [Usage](#usage)
  * [First step: import the Module](#first-step-import-the-module)
  * [Second step: Initialize MdG](#second-step-initialize-mdg)
  * [Third step: Choose your Parade](#third-step-choose-your-parade)
- [What about validation](#what-about-validation)
- [License](#license)

## Installing

```bash
npm install mardigras
```

## Template system

Before to show how to use MdG, it is important to show how its template system works.
During the creation of a pattern for a single or multiple mask, you need to create a sequence of templating characters that represents each mask´s character type.

### Templating characters

| Character | Meaning            | Range                  |
| --------- |:------------------:|:----------------------:|
| #         | Number             | Any number (0-9)       |
| &         | Letter             | Any letter (a-z)       |
| @         | Alphanumeric       | Number or letter       |
| $         | Special characters | Not a number or letter |

### Separators

Separators are literal characters that separates each templating character to shape the mask. The allowed separators are:

* Backslash [  \  ]
* Brackets [  [ ]   ]
* Colon [  :  ]
* Coma [  ,  ]
* Curly braces [  { }  ]
* Dot [  .  ]
* Hyphen [  -  ]
* Parenthesis [  ( )  ]
* Slash [  /  ]
* Vertical Bar [  |  ]
* Other [  _ * ^ ; — ¯ ]


### Some Examples

Here are some examples of masks, using the template system;

* Brazilian Zip Code (CEP) - #####-###
* Canadian Zip Code - &#&#&#
* French Car Plate - &&-###-&&
* Spanish Car Plate - ####-&&&
* ISBN Code - ###-##-#####-##-#
* Phone Number - (##)#####-####
* Serial Number - ####@@@@@####
* Californian Driver License - @########


## Usage

### First step: import the Module

First, what you need to do is import MdG.

```javascript
import mdg from 'mardigras';
```

### Second step: Initialize MdG

Every mask in Mdg needs an initialization.

```javascript
const someMask = mdg(options);
```

#### Options

The Mdg initial options is a Javascript Object with the following values:

| Value | Type | Description | required |
| --- | --- | --- | --- |
| `pattern`    | Array \| String | Sequence of templating characters and separators. | Yes |
| `onError`    | Function | Method that will be called when the mask is NOT COMPLETED or INVALID. * | No |
| `onSucess`   | Function | Method that will be called when the mask is COMPLETED or VALID. ** | No |
| `validation` | Function | Method that check if the mask´s value is valid. | No |

 \* If `validation` is set, will be called only when the mask is INVALID.<br>
\*\* If `validation` is set, will be called only when the mask is VALID.

#### Example - Phone mask

In the following example, we are going to create a multi mask for a phone number. The sequence accepts 10 or 11 digits.

```javascript
const error = () => {
  console.log('Almost There.');
}
const success = () => {
  console.log('Yayyy! The mask is completed.')
}
const phoneMask = mdg({
  pattern: [
  '(##)####-####', // 10 digits
  '(##)#####-####' // 11 digits
  ],
  onError: error,
  onSuccess: success
});
```

### Third step: Choose your Parade

Still following the example above, in MdG, when it is intialized, you can choose the best way to use it.

#### Option 1 - HTML Input Field (`checkField` method)

The `checkField` method inserts the result of a mask directly on a HTML input field during its manipulation.

```javascript
someMask.checkfield(inputField, eventType)
```

| Parameter | Type | Description | required |
| --- | --- | --- | --- |
|`inputField`| DOM Element | Element that will be changed.| Yes |
|`eventType`| String | Event name to change DOM Element. * | No |

\* Default: input
<br><br>
...continuing the example:
```javascript
/*
  HTML file ->
  <input type="text" class="js-mdg" value=""/>
*/
const inputField = document.querySelector('.js-mdg');
phoneMask.checkField(inputField);
```

#### Option 2 - Internally (`checkValue` method)

With `checkValue` method you can get the mask output internally and expose it the way you want. Best choice for Front-end Frameworks and another tools.

```javascript
someMask.checkValue(inputValue)
```
| Parameter | Type | Description | required |
| --- | --- | --- | --- |
|`inputValue`| String | Value to apply mask.| Yes |

When the method `checkValue` is called, it expose a Javascript Object with the following values:

| Value | Type | Description |
| --- | --- | --- |
|  `input`   | String | The initial value. |
|  `output`   | String | The best final value. |
|  `completed`   | Boolean | If the `output` value completes the mask. |
|  `isValid`   | Boolean \| Null | If the `output` value is valid. * |

\* Null if `validation` is not defined.
<br><br>
...continuing the example:
```javascript
phoneMask.checkValue('12345'); // 5 digits long
/*
{input: "12345", output: "(12)345", completed: false, isValid: null}
*/
phoneMask.checkValue('1234512345'); // 10 digits long
/*
{input: "1234512345", output: "(12)3451-2345", completed: true, isValid: null}
*/
phoneMask.checkValue('12-34576-1234576') // 14 digits long
/*
{input: "12-34576-1234576", output: "(12)34576-1234", completed: true, isValid: null}
*/

```

## What about validation

If the mask needs to pass through validation, the `validation` value must be set during the MdG initialization.<br>
It´s a function that MUST receive a single String and return a Boolean value.<br>
Taking the example above, let´s assume that the two first digits represent the country calling code and the only acceptable codes are from Argentina(54), Chile (56) and Colombia (57).

``` javascript
const countryValidation = ( output ) =>{
  const rule = /\(5[4|6|7]/;
  return rule.test(output)
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
<br><br><br><br><br>
Enjoy. Have yourself a lot of beads.