# Types

## Question 1: Which of the following strings are valid? Add an 'x' between the ( ) to indicate that it's valid.

1. ( ) "I am a "Horse""
2. ( ) "I 'prefer' ducks'
3. (x) 'Yes, duck is nice'
4. (x) "Ah, but I\'m vegan!"
5. ( ) 'You'll eat salad then'
6. (x) 'Yes I\'ll eat salad'
7. (x) "I'm happy to hear that!"
8. (x) "\"Happy to hear " + 'that" ' + "he says!"
9. ( ) “Hello world!”


## Question 2: Rewrite below all of the strings that are not valid, and correct them to make them valid. 
1. "I am a \"Horse\""
2. "I 'prefer' ducks"
5. 'You\'ll eat salad then'
9. "Hello world!"

## Question 3: Which of the following expressions are true? Add an 'x' between the ( ) to indicate that it's true.

1. ( ) 7 == 2
2. (x) 7 == 7
3. (x) 7 == '7'
4. (x) 7 != 0
5. (x) 7 !== '7'
6. ( ) 7 != '7'
7. ( ) 7 != 7


## Question 4: Which of the following expressions is/are truthy?

to test:
function testTruthyFalsy (val) 
{ 
    return val ? console.log('truthy') : console.log('falsy'); 
} 

1. (x) !0
2. ( ) !1
3. ( ) -1
4. ( ) !"hello!"
5. ( ) null
6. (x) !undefined
7. (x) !NaN

Always falsey
1. 0 (zero)
2. ' ' (empty string)
3. NaN (not a number)
4. undefined 
5. null

## Question 5: Which of the following are valid objects?

1. ( ) {}
2. ( ) { 'hello' }
3. (x) { name: 'I am fruit' }
4. ( ) {'brand-name': 'Dior' }
5. ( ) { brand-name: 'Channel' }
6. ( ) { cool_name: 'bob' + ' Dylan', age: 25 }


## Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']
    - number of elements: 3
    - type of _each_ element:
        - 'cat': string
        - 'dog': string 
        - 'bird': string
2. [[], 24, 'hello', true]
    - number of elements: 3
    - type of each elemet:
        - []: empty array
        - 24: int
        - 'hello': string
        - true: boolean

3. []
    - number of elements: 1
    - type of each element:
        - []: empty array

4. [['romeo', 'juliet'], false]
    - number of elements: 2
    - type of each element:
        - ['romeo', 'juliet']: an array
        - false: boolean

5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]
    - number of elements: 2
    - type of each elements: 
        - {name: 'bob', age: 23}: an object
        - {name: 'paul}, age: 33}: an object


## Question 7: What is the type and value for each of the following variables?

1. let  name = 'bob';
    - type: string
    - value: 'bob'
2. let age = 45;
    - type: int
    - value: 45

3. let isMarried = false;
    - type: boolean
    - value: false

4. let person = { name: name, age: age, isMarried: isMarried }
    - type: an object
    - value: {name: name, age: age, isMarriedL isMarried}

5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]
    - type: an array
    - value: [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]
