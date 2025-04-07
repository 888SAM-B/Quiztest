const express = require('express');
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json()); // Parses JSON requests
app.use(cors());
// Sample data
let pythontest = [
  {
    "question": "Which of the following is the correct way to create a variable in Python?",
    "options": [
      "variable = 10",
      "int variable = 10",
      "var = 10;",
      "variable : 10"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following data types is immutable in Python?",
    "options": [
      "List",
      "Dictionary",
      "Set",
      "String"
    ],
    "answer": 3
  },
  {
    "question": "What will be the result of the expression 10 % 3?",
    "options": [
      "1",
      "3",
      "0",
      "10"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following is used to define a function in Python?",
    "options": [
      "func",
      "def",
      "function",
      "define"
    ],
    "answer": 1
  },
  {
    "question": "What is the output of print(2 ** 3)?",
    "options": [
      "6",
      "8",
      "9",
      "3"
    ],
    "answer": 1
  },
  {
    "question": "How can you create a list with elements 'a', 'b', and 'c' in Python?",
    "options": [
      "list = ('a', 'b', 'c')",
      "list = ['a', 'b', 'c']",
      "list = a, b, c",
      "list = <'a', 'b', 'c'>"
    ],
    "answer": 1
  },
  {
    "question": "What does the len() function return when applied to a list?",
    "options": [
      "The first element",
      "The last element",
      "The number of elements in the list",
      "The sum of elements in the list"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following will raise an exception in Python?",
    "options": [
      "x = 10 / 2",
      "y = 10 / 0",
      "z = 10 + 2",
      "w = 'Hello' + ' World'"
    ],
    "answer": 1
  },
  {
    "question": "How do you define a dictionary in Python?",
    "options": [
      "dict = (1: 'apple', 2: 'banana')",
      "dict = {1: 'apple', 2: 'banana'}",
      "dict = [1: 'apple', 2: 'banana']",
      "dict = 'apple', 'banana'"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is used to handle exceptions in Python?",
    "options": [
      "try-except",
      "catch-finally",
      "throw-catch",
      "exception-try"
    ],
    "answer": 0
  },
  {
    "question": "Which method would you use to remove an item from a list in Python?",
    "options": [
      "list.delete()",
      "list.pop()",
      "list.remove()",
      "list.removeAt()"
    ],
    "answer": 2
  },
  {
    "question": "What is the correct syntax to check if a number is even in Python?",
    "options": [
      "if number % 2 == 0:",
      "if number // 2 == 0:",
      "if number == 2:",
      "if number / 2 == 0:"
    ],
    "answer": 0
  },
  {
    "question": "What is the output of the following code: print(bool(0))?",
    "options": [
      "True",
      "False",
      "None",
      "Error"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is not a valid way to create a set in Python?",
    "options": [
      "set1 = {1, 2, 3}",
      "set2 = set([1, 2, 3])",
      "set3 = set(1, 2, 3)",
      "set4 = set()"
    ],
    "answer": 2
  },
  {
    "question": "What is the output of: print(0.1 + 0.2 == 0.3)?",
    "options": ["True", "False", "Error", "None"],
    "answer": 1
  },
  {
    "question": "What does this print? print('5' * 2)",
    "options": ["10", "55", "'10'", "'55'"],
    "answer": 3
  },
  {
    "question": "What will be the output of: print(bool('False'))?",
    "options": ["True", "False", "None", "Error"],
    "answer": 0
  },
  {
    "question": "What is the output of: print([] == False)?",
    "options": ["True", "False", "Error", "None"],
    "answer": 1
  },
  {
    "question": "What is the result of: print('2' + 2)?",
    "options": ["'22'", "4", "TypeError", "'4'"],
    "answer": 2
  },
  {
    "question": "What does: print(10/0) result in?",
    "options": ["0", "Infinity", "ZeroDivisionError", "None"],
    "answer": 2
  },
  {
    "question": "What is the output? print(None == 0)",
    "options": ["True", "False", "None", "Error"],
    "answer": 1
  },
  {
    "question": "What is the output of: print(type([]) is list)?",
    "options": ["True", "False", "Error", "None"],
    "answer": 0
  },
  {
    "question": "What is the result of: print(bool(''))?",
    "options": ["True", "False", "None", "Error"],
    "answer": 1
  },
  {
    "question": "What is the output? print([1, 2, 3] > [1, 2, 2])",
    "options": ["True", "False", "Error", "None"],
    "answer": 0
  },
  {
    "question": "What is the default value of the argument 'b' in the following function: def func(a, b=2): return a + b?",
    "options": [
      "1",
      "2",
      "None",
      "Error"
    ],
    "answer": 1
  },
  {
    "question": "What will be the output of the following code: x = [1, 2, 3]; y = x; y[0] = 100; print(x)?",
    "options": [
      "[1, 2, 3]",
      "[100, 2, 3]",
      "[1, 100, 3]",
      "Error"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following statements is used to exit a loop in Python?",
    "options": [
      "break",
      "exit",
      "stop",
      "quit"
    ],
    "answer": 0
  },
  {
    "question": "What will be the output of print(type([])) in Python?",
    "options": [
      "<class 'list'>",
      "<class 'tuple'>",
      "<class 'dict'>",
      "<class 'set'>"
    ],
    "answer": 0
  },
  {
    "question": "Which keyword is used to create an anonymous function in Python?",
    "options": [
      "def",
      "lambda",
      "function",
      "anonymous"
    ],
    "answer": 1
  },
  {
    "question": "What will be the output of the following code snippet?\nprint('Hello' * 3)",
    "options": [
      "'HelloHelloHello'",
      "'Hello * 3'",
      "Error",
      "'Hello  Hello  Hello'"
    ],
    "answer": 0
  },
  {
    "question": "What is the output of the following code?   print(4*5-4)",
    "options": [
      "5",
      "16",
      "20",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "Explain the difference between a list and a tuple in Python.",
    "options": [
      "Lists are mutable, tuples are immutable.",
      "Lists are immutable, tuples are mutable.",
      "Both are mutable.",
      "Both are immutable."
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `len()` function in Python?",
    "options": [
      "To calculate the length of a string",
      "To return the length of an object like a list, string, or tuple",
      "To check if a string is empty",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "What is a dictionary in Python? Provide an example.",
    "options": [
      "A collection of key-value pairs.",
      "A collection of ordered elements.",
      "A collection of unique items.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "How can you concatenate two strings in Python?",
    "options": [
      "Using the '+' operator.",
      "Using the '&' operator.",
      "Using the concat() method.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What are the different data types available in Python? Name at least four.",
    "options": [
      "int, float, string, list",
      "int, double, char, string",
      "string, char, set, tuple",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What does the following code snippet do?\nprint(10/0)",
    "options": [
      "It adds two numbers.",
      "It defines a function with a default argument.",
      "It raises an exception.",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "How to check if a given number is prime or not.",
    "options": [
      "The number is prime if it has no divisors other than 1 and itself.",
      "The number is prime if it is divisible by 2.",
      "The number is prime if it is divisible by 3.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is list comprehension?",
    "options": [
      "A concise way to create lists using a single line of code.",
      "A way to create lists using loops.",
      "A method to copy lists.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "Explain the concept of decorators in Python ",
    "options": [
      "A decorator is a function that modifies the behavior of another function.",
      "A decorator is a class that modifies the behavior of a function.",
      "A decorator is a built-in Python function.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What are lambda functions in Python? Provide an example.",
    "options": [
      "Small anonymous functions defined with the keyword 'lambda'.",
      "Functions that are defined within another function.",
      "Functions with no parameters.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is the purpose of the `self` keyword in Python classes?",
    "options": [
      "To refer to the instance of the class.",
      "To define a method within a class.",
      "To call another function.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "How do you implement inheritance in Python? Write an example with a parent class and a child class.",
    "options": [
      "Using the 'extends' keyword.",
      "Using the class syntax with the parent class name in parentheses.",
      "Using the 'super' function.",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "question": "What are Python's built-in data structures? Describe each briefly.",
    "options": [
      "Lists, tuples, dictionaries, sets.",
      "Lists, dictionaries, classes, functions.",
      "Strings, tuples, sets, variables.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "Explain how Python's 'with' statement is used in file handling.",
    "options": [
      "It automatically closes the file after execution.",
      "It opens files in binary mode.",
      "It creates a temporary file.",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "What is a module in Python?",
    "options": [
      "A file containing Python definitions and statements.",
      "A type of variable.",
      "A way to store user data.",
      "None of the above"
    ],
    "answer": 0
  }
  ,{
  "question": "What is the output of print(type(1/2)) in Python 3?",
  "options": [
    "int",
    "float",
    "bool",
    "str"
  ],
  "answer": 1
  },
  {
  "question": "Which of the following is not a valid variable name in Python?",
  "options": [
    "_var",
    "var1",
    "1var",
    "var_1"
  ],
  "answer": 2
  },
  {
  "question": "What does the following code return? bool(\"\")",
  "options": [
    "True",
    "False",
    "None",
    "Error"
  ],
  "answer": 1
  },
  {
  "question": "Which of the following is mutable?",
  "options": [
    "Tuple",
    "String",
    "List",
    "Integer"
  ],
  "answer": 2
  },
  {
  "question": "What is the output of print(\"Hello\"*2)?",
  "options": [
    "HelloHello",
    "Error",
    "Hello 2",
    "None"
  ],
  "answer": 0
  },
  {
  "question": "Which method would you use to add an element to the end of a list?",
  "options": [
    "insert()",
    "add()",
    "append()",
    "extend()"
  ],
  "answer": 2
  },
  {
  "question": "What is the result of 5 // 2 in Python?",
  "options": [
    "2.5",
    "2",
    "3",
    "Error"
  ],
  "answer": 1
  },
  {
  "question": "What does the __init__ method do in a Python class?",
  "options": [
    "Initializes an instance",
    "Deletes an instance",
    "Prints a statement",
    "Returns a value"
  ],
  "answer": 0
  },
  {
  "question": "What is the output of print(len({'a':1,'b':2}))?",
  "options": [
    "1",
    "2",
    "3",
    "Error"
  ],
  "answer": 1
  },
  {
  "question": "Which of these is not a built-in data type in Python?",
  "options": [
    "int",
    "float",
    "character",
    "list"
  ],
  "answer": 2
  },

    {
    "question": "Which statement correctly describes Python's handling of indentation?",
    "options": [
      "Indentation is optional and used for readability",
      "Indentation is required and determines code blocks",
      "Indentation is only required in loops and conditionals",
      "Indentation has no effect on code execution"
    ],
    "answer": 1
    },
    {
    "question": "What is the output of print(0 or 1)?",
    "options": [
      "0",
      "1",
      "True",
      "False"
    ],
    "answer": 1
    },
    {
    "question": "What is a more compact way to write the list comprehension [x for x in range(10) if x % 2 == 0]?",
    "options": [
      "list(range(0, 10, 2))",
      "[2x for x in range(5)]",
      "list(filter(lambda x: x % 2 == 0, range(10)))",
      "Both a and c"
    ],
    "answer": 3
    },
    {
    "question": "Which of the following is not a valid method for string objects?",
    "options": [
      "split()",
      "join()",
      "append()",
      "strip()"
    ],
    "answer": 2
    },
    {
    "question": "What is the purpose of the with statement in Python?",
    "options": [
      "Exception handling",
      "Resource management and cleanup",
      "Creating a local scope",
      "Defining a context manager"
    ],
    "answer": 1
    },
    {
    "question": "Which of the following operators has the highest precedence?",
    "options": [
      "+",
      "",
      "**",
      "()"
    ],
    "answer": 3
    },
    {
    "question": "What is the output of print([i for i in range(5)])?",
    "options": [
      "[0, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]",
      "[0, 1, 2, 3, 4, 5]",
      "[1, 2, 3, 4]"
    ],
    "answer": 0
    },
    {
    "question": "What is the time complexity of looking up a value in a Python dictionary?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1) on average",
      "O(n²)"
    ],
    "answer": 2
    },
      {
      "question": "What does the `yield` keyword do in Python?",
      "options": [
        "Returns multiple values from a function",
        "Creates a generator function",
        "Raises an exception",
        "Terminates a loop"
      ],
      "answer": 1
      },
      {
      "question": "Which of the following is correct about module importing in Python?",
      "options": [
        "A module can be imported multiple times but is only loaded once",
        "Each import statement loads the module again",
        "Modules cannot import other modules",
        "Importing is only allowed at the beginning of a file"
      ],
      "answer": 0
      },
      {
      "question": "What is the output of \"\".join([\"a\", \"b\", \"c\"])?",
      "options": [
        "abc",
        "a b c",
        "[a, b, c]",
        "Error"
      ],
      "answer": 0
      },
      {
      "question": "What is the difference between `is` and `==` in Python?",
      "options": [
        "is compares values while == compares identities",
        "is compares identities while == compares values",
        "They are exactly the same",
        "is is for numeric comparison while == is for string comparison"
      ],
      "answer": 1
      },
      {
      "question": "What does the `*args` parameter allow in a function definition?",
      "options": [
        "Multiple keyword arguments",
        "Variable number of positional arguments",
        "Only arguments of type array",
        "Arguments with default values"
      ],
      "answer": 1
      },
      {
      "question": "Which of these statements is true about Python sets?",
      "options": [
        "Sets are ordered collections",
        "Sets allow duplicate elements",
        "Sets are mutable",
        "Sets can contain other sets"
      ],
      "answer": 2
      },
      {
      "question": "What is the output of `print(1 in [1, 2, 3])`?",
      "options": [
        "1",
        "True",
        "False",
        "Error"
      ],
      "answer": 1
      },
      {
      "question": "What does the `global` keyword do in Python?",
      "options": [
        "Declares a variable that is accessible anywhere in the program",
        "Indicates that a variable is defined in an outer scope",
        "Allows a function to modify a variable defined in the global scope",
        "Makes a function globally accessible"
      ],
      "answer": 2
      },
      {
      "question": "Which of the following is not a dunder (double underscore) method in Python?",
      "options": [
        "__init__",
        "__str__",
        "__main__",
        "__len__"
      ],
      "answer": 2
      },
      {
      "question": "What will `range(1, 10, 2)` produce?",
      "options": [
        "[1, 3, 5, 7, 9]",
        "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        "[1, 3, 5, 7]",
        "[2, 4, 6, 8]"
      ],
      "answer": 0
      },
      {
      "question": "What does the `@staticmethod` decorator do in Python?",
      "options": [
        "Makes a method callable without an instance",
        "Makes a method thread-safe",
        "Forces static typing for the method",
        "Creates a static variable inside the method"
      ],
      "answer": 0
      },
      {
      "question": "What is the output of `print(list(filter(lambda x: x > 5, [1, 6, 3, 8, 2])))`?",
      "options": [
        "[6, 8]",
        "[1, 3, 2]",
        "[True, False, True]",
        "[6, 3, 8]"
      ],
      "answer": 0
      },
      {
      "question": "In Python, what does the `collections.defaultdict` class provide?",
      "options": [
        "A dictionary that cannot contain duplicate keys",
        "A dictionary that sorts keys automatically",
        "A dictionary that provides default values for missing keys",
        "A dictionary that can only use strings as keys"
      ],
      "answer": 2
      },
      {
      "question": "What does `mylist[::-1]` do?",
      "options": [
        "Returns a reversed copy of the list",
        "Reverses the list in place",
        "Sorts the list in descending order",
        "Returns every other element of the list"
      ],
      "answer": 0
      },
      {
      "question": "Which of the following is true about Python's GIL (Global Interpreter Lock)?",
      "options": [
        "It allows multiple threads to execute Python bytecode simultaneously",
        "It prevents multiple threads from executing Python bytecode simultaneously",
        "It optimizes memory usage in multiprocessing applications",
        "It is a lock used in Python's garbage collection"
      ],
      "answer": 1
      }
      
      
       


]
let javatest = [
  {
    "question": "What is the size of an int variable in Java?",
    "options": ["8 bits", "16 bits", "32 bits", "64 bits"],
    "answer": 2
  },
  {
    "question": "Which keyword is used to inherit a class in Java?",
    "options": ["implements", "extends", "inherit", "super"],
    "answer": 1
  },
  {
    "question": "What is the default value of a boolean variable?",
    "options": ["true", "false", "0", "null"],
    "answer": 1
  },
  {
    "question": "Which of these is not a Java access modifier?",
    "options": ["public", "private", "protected", "static"],
    "answer": 3
  },
  {
    "question": "What is the output of System.out.println(5 + 3 + \"Hello\");?",
    "options": ["8Hello", "Hello8", "53Hello", "Compilation error"],
    "answer": 0
  },
  {
    "question": "Which method is the entry point of a Java application?",
    "options": ["start()", "run()", "main()", "init()"],
    "answer": 2
  },
  {
    "question": "Which of these is a valid variable name in Java?",
    "options": ["1variable", "$variable", "variable-name", "class"],
    "answer": 1
  },
  {
    "question": "What does JVM stand for?",
    "options": ["Java Virtual Machine", "Java Variable Manager", "Java Version Monitor", "Java Visual Model"],
    "answer": 0
  },
  {
    "question": "Which keyword is used to define a constant in Java?",
    "options": ["const", "final", "static", "immutable"],
    "answer": 1
  },
  {
    "question": "Which of these is not a primitive data type in Java?",
    "options": ["int", "float", "String", "char"],
    "answer": 2
  },
  {
    "question": "What is the parent class of all classes in Java?",
    "options": ["Class", "Object", "System", "Main"],
    "answer": 1
  },
  {
    "question": "Which loop is guaranteed to execute at least once?",
    "options": ["for", "while", "do-while", "foreach"],
    "answer": 2
  },
  {
    "question": "What does the break statement do in a loop?",
    "options": ["Skips the current iteration", "Exits the loop entirely", "Restarts the loop", "Pauses the loop"],
    "answer": 1
  },
  {
    "question": "Which collection class allows duplicate elements?",
    "options": ["Set", "List", "Map", "Queue"],
    "answer": 1
  },
  {
    "question": "What is the return type of the main() method in Java?",
    "options": ["int", "void", "String", "boolean"],
    "answer": 1
  },
  {
    "question": "Which operator is used to compare object references in Java?",
    "options": ["==", "equals()", "=", "instanceof"],
    "answer": 0
  },
  {
    "question": "What is the purpose of the super keyword?",
    "options": ["To call a superclass constructor", "To create a new object", "To terminate a program", "To define a variable"],
    "answer": 0
  },
  {
    "question": "Which exception is thrown when dividing by zero?",
    "options": ["NullPointerException", "ArithmeticException", "IOException", "ClassNotFoundException"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to handle exceptions in Java?",
    "options": ["try", "catch", "throw", "throws"],
    "answer": 1
  },
  {
    "question": "What is the default value of an Object reference?",
    "options": ["0", "null", "false", "undefined"],
    "answer": 1
  },
  {
    "question": "Which of these is an interface in Java?",
    "options": ["ArrayList", "List", "String", "Thread"],
    "answer": 1
  },
  {
    "question": "What does the this keyword refer to?",
    "options": ["The current class instance", "The superclass", "A static method", "A new object"],
    "answer": 0
  },
  {
    "question": "Which method is used to start a thread in Java?",
    "options": ["run()", "start()", "execute()", "begin()"],
    "answer": 1
  },
  {
    "question": "What is the size of a char in Java?",
    "options": ["8 bits", "16 bits", "32 bits", "64 bits"],
    "answer": 1
  },
  {
    "question": "Which of these is a wrapper class in Java?",
    "options": ["int", "Integer", "String", "char"],
    "answer": 1
  },
  {
    "question": "What is the output of System.out.println(\"Hello\".length());?",
    "options": ["4", "5", "6", "Compilation error"],
    "answer": 1
  },
  {
    "question": "Which keyword prevents method overriding?",
    "options": ["static", "final", "abstract", "private"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the transient keyword?",
    "options": ["To make a variable constant", "To exclude a variable from serialization", "To make a method abstract", "To define a static variable"],
    "answer": 1
  },
  {
    "question": "Which of these is not a feature of Java?",
    "options": ["Platform independence", "Pointer arithmetic", "Multithreading", "Garbage collection"],
    "answer": 1
  },
  {
    "question": "What does the synchronized keyword do?",
    "options": ["Prevents multiple threads from accessing a block simultaneously", "Makes a method faster", "Creates a new thread", "Stops a thread"],
    "answer": 0
  },
  {
    "question": "Which collection does not allow null elements?",
    "options": ["ArrayList", "HashSet", "ConcurrentHashMap (keys)", "LinkedList"],
    "answer": 2
  },
  {
    "question": "What is the output of int x = 5; System.out.println(x++);?",
    "options": ["5", "6", "4", "Compilation error"],
    "answer": 0
  },
  {
    "question": "Which package is implicitly imported in every Java program?",
    "options": ["java.util", "java.lang", "java.io", "java.net"],
    "answer": 1
  },
  {
    "question": "What is encapsulation in Java?",
    "options": ["Hiding data using private modifiers", "Inheriting from multiple classes", "Overriding methods", "Creating threads"],
    "answer": 0
  },
  {
    "question": "Which of these is a checked exception?",
    "options": ["NullPointerException", "IOException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the finally block?",
    "options": ["To catch exceptions", "To execute code regardless of an exception", "To throw an exception", "To define a loop"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to implement multiple inheritance-like behavior in Java?",
    "options": ["extends", "implements", "super", "this"],
    "answer": 1
  },
  {
    "question": "What is polymorphism in Java?",
    "options": ["One class having multiple constructors", "One interface, multiple implementations", "Hiding data", "Creating static methods"],
    "answer": 1
  },
  {
    "question": "Which method converts a string to an integer?",
    "options": ["Integer.parseInt()", "String.valueOf()", "Integer.toString()", "System.parseInt()"],
    "answer": 0
  },
  {
    "question": "What is the output of System.out.println(10 > 5 ? \"Yes\" : \"No\");?",
    "options": ["Yes", "No", "true", "false"],
    "answer": 0
  },
  {
    "question": "Which of these is a marker interface?",
    "options": ["Runnable", "Serializable", "Comparable", "Iterator"],
    "answer": 1
  },
  {
    "question": "What is the default capacity of an ArrayList?",
    "options": ["5", "10", "15", "20"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to define an abstract class?",
    "options": ["abstract", "interface", "final", "static"],
    "answer": 0
  },
  {
    "question": "What does the equals() method compare by default?",
    "options": ["Object references", "Object content", "Variable names", "Class types"],
    "answer": 0
  },
  {
    "question": "Which of these is a valid constructor declaration?",
    "options": ["public void ClassName()", "public ClassName()", "ClassName() void", "static ClassName()"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the hashCode() method?",
    "options": ["To generate a unique string", "To return an integer representation of an object", "To compare two strings", "To sort a collection"],
    "answer": 1
  },
  {
    "question": "Which loop is best for iterating over a collection?",
    "options": ["for", "while", "do-while", "enhanced for (foreach)"],
    "answer": 3
  },
  {
    "question": "What is the output of System.out.println(\"abc\".equals(\"ABC\"));?",
    "options": ["true", "false", "null", "Compilation error"],
    "answer": 1
  },
  {
    "question": "Which of these cannot be instantiated directly?",
    "options": ["Class", "Abstract class", "Object", "String"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the static keyword?",
    "options": ["To make a variable constant", "To associate a member with the class rather than an instance", "To prevent inheritance", "To define an interface"],
    "answer": 1
  }
];
let ctest = [
  {
    "question": "What is the size of an `int` in C on a 32-bit system?",
    "options": ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    "answer": 1
  },
  {
    "question": "Which keyword is used to define a constant in C?",
    "options": ["const", "final", "static", "define"],
    "answer": 0
  },
  {
    "question": "What is the output of `printf(\"%d\", 5 + 3);`?",
    "options": ["8", "53", "5 + 3", "Error"],
    "answer": 0
  },
  {
    "question": "Which symbol is used to denote a pointer in C?",
    "options": ["&", "*", "@", "#"],
    "answer": 1
  },
  {
    "question": "What is the entry point of a C program?",
    "options": ["start()", "main()", "run()", "init()"],
    "answer": 1
  },
  {
    "question": "Which of these is a valid variable name in C?",
    "options": ["1var", "_var", "var-name", "class"],
    "answer": 1
  },
  {
    "question": "What does the `&` operator do in C?",
    "options": ["Dereferences a pointer", "Returns the address of a variable", "Performs a bitwise AND", "Increments a value"],
    "answer": 1
  },
  {
    "question": "Which header file is required for input/output operations in C?",
    "options": ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
    "answer": 1
  },
  {
    "question": "What is the default return type of a function in C if not specified?",
    "options": ["void", "int", "float", "char"],
    "answer": 1
  },
  {
    "question": "Which of these is not a primitive data type in C?",
    "options": ["int", "float", "string", "char"],
    "answer": 2
  },
  {
    "question": "What does the `sizeof` operator return?",
    "options": ["Size of a variable in bytes", "Value of a variable", "Address of a variable", "Type of a variable"],
    "answer": 0
  },
  {
    "question": "Which loop executes at least once regardless of the condition?",
    "options": ["for", "while", "do-while", "None"],
    "answer": 2
  },
  {
    "question": "What does the `break` statement do?",
    "options": ["Skips an iteration", "Exits the loop", "Restarts the loop", "Pauses execution"],
    "answer": 1
  },
  {
    "question": "Which operator is used to access the value at a pointer?",
    "options": ["&", "*", "->", "."],
    "answer": 1
  },
  {
    "question": "What is the purpose of the `void` keyword?",
    "options": ["To declare a pointer", "To indicate no return value", "To allocate memory", "To define a constant"],
    "answer": 1
  },
  {
    "question": "What is the output of `int x = 5; printf(\"%d\", x++);`?",
    "options": ["5", "6", "4", "Error"],
    "answer": 0
  },
  {
    "question": "Which function is used to allocate memory dynamically in C?",
    "options": ["alloc()", "malloc()", "calloc()", "Both b and c"],
    "answer": 3
  },
  {
    "question": "What happens if you dereference a NULL pointer?",
    "options": ["Returns 0", "Program crashes", "Undefined behavior", "Compiles but does nothing"],
    "answer": 2
  },
  {
    "question": "Which keyword is used to define a macro in C?",
    "options": ["#define", "#macro", "const", "static"],
    "answer": 0
  },
  {
    "question": "What is the output of `printf(\"%d\", sizeof(char));`?",
    "options": ["1", "2", "4", "8"],
    "answer": 0
  },
  {
    "question": "Which of these is a storage class in C?",
    "options": ["auto", "public", "private", "protected"],
    "answer": 0
  },
  {
    "question": "What does the `return 0` statement in `main()` indicate?",
    "options": ["Program failed", "Program succeeded", "Returns null", "Infinite loop"],
    "answer": 1
  },
  {
    "question": "Which operator is used to access structure members via a pointer?",
    "options": [".", "->", "*", "&"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the `static` keyword in a function?",
    "options": ["Makes variable persistent", "Restricts scope to file", "Allocates memory dynamically", "Prevents modification"],
    "answer": 0
  },
  {
    "question": "Which function is used to free dynamically allocated memory?",
    "options": ["delete()", "free()", "release()", "dealloc()"],
    "answer": 1
  },
  {
    "question": "What is the output of `int a = 10 / 3; printf(\"%d\", a);`?",
    "options": ["3", "3.33", "4", "Error"],
    "answer": 0
  },
  {
    "question": "Which of these is not a valid format specifier in C?",
    "options": ["%d", "%f", "%s", "%z"],
    "answer": 3
  },
  {
    "question": "What does the `continue` statement do in a loop?",
    "options": ["Exits the loop", "Skips the current iteration", "Restarts the loop", "Pauses execution"],
    "answer": 1
  },
  {
    "question": "Which header file provides string manipulation functions?",
    "options": ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
    "answer": 2
  },
  {
    "question": "What is the purpose of the `extern` keyword?",
    "options": ["Declares a variable without defining it", "Makes a variable constant", "Allocates memory", "Defines a function"],
    "answer": 0
  },
  {
    "question": "What is the output of `int x = 5; printf(\"%d\", ++x);`?",
    "options": ["5", "6", "4", "Error"],
    "answer": 1
  },
  {
    "question": "Which of these is a correct way to declare a function pointer?",
    "options": ["int *func()", "int (*func)()", "int func*()", "int &func()"],
    "answer": 1
  },
  {
    "question": "What does the `volatile` keyword signify?",
    "options": ["Variable can’t be modified", "Variable may change unexpectedly", "Variable is constant", "Variable is static"],
    "answer": 1
  },
  {
    "question": "Which operator performs a bitwise AND?",
    "options": ["&&", "&", "|", "^"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the `#include` directive?",
    "options": ["Defines a macro", "Includes a header file", "Declares a variable", "Links a library"],
    "answer": 1
  },
  {
    "question": "What is the output of `printf(\"%c\", 65);`?",
    "options": ["65", "A", "a", "Error"],
    "answer": 1
  },
  {
    "question": "Which of these is a correct way to declare an array in C?",
    "options": ["int arr[5];", "int arr(5);", "array int[5];", "int[5] arr;"],
    "answer": 0
  },
  {
    "question": "What does the `scanf()` function do?",
    "options": ["Prints output", "Reads input", "Allocates memory", "Compares strings"],
    "answer": 1
  },
  {
    "question": "What is the size of a `float` in C on a 32-bit system?",
    "options": ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    "answer": 1
  },
  {
    "question": "Which of these is not a valid loop in C?",
    "options": ["for", "while", "do-while", "foreach"],
    "answer": 3
  },
  {
    "question": "What is the purpose of the `union` keyword?",
    "options": ["Defines multiple variables", "Shares memory among variables", "Creates a pointer", "Declares a function"],
    "answer": 1
  },
  {
    "question": "What is the output of `int x = 1; printf(\"%d\", x << 1);`?",
    "options": ["1", "2", "0", "Error"],
    "answer": 1
  },
  {
    "question": "Which function converts a string to an integer?",
    "options": ["atoi()", "itoa()", "sprintf()", "strlen()"],
    "answer": 0
  },
  {
    "question": "What does the `typedef` keyword do?",
    "options": ["Defines a macro", "Creates an alias for a data type", "Declares a pointer", "Allocates memory"],
    "answer": 1
  },
  {
    "question": "What is the output of `int a[2] = {1, 2}; printf(\"%d\", a[2]);`?",
    "options": ["1", "2", "Undefined behavior", "0"],
    "answer": 2
  },
  {
    "question": "Which keyword is used to define a structure in C?",
    "options": ["class", "struct", "union", "type"],
    "answer": 1
  },
  {
    "question": "What is the purpose of the `#ifndef` directive?",
    "options": ["Includes a file", "Prevents multiple inclusions", "Defines a constant", "Declares a variable"],
    "answer": 1
  },
  {
    "question": "What is the output of `printf(\"%d\", 5 > 3 ? 1 : 0);`?",
    "options": ["0", "1", "5", "3"],
    "answer": 1
  },
  {
    "question": "Which of these is a preprocessor directive?",
    "options": ["#include", "int", "return", "void"],
    "answer": 0
  },
  {
    "question": "What does the `realloc()` function do?",
    "options": ["Frees memory", "Resizes allocated memory", "Allocates new memory", "Copies memory"],
    "answer": 1
  }
];
app.get('/c', (req, res) => {
    res.send(ctest);
});
app.get('/python', (req, res) => {
    res.send(pythontest);
});
app.get('/java', (req, res) => {
    res.send(javatest);
});
console.log(javatest.length);
console.log(pythontest.length)
console.log(ctest.length);
// Start the server
app.listen(3001, () => console.log('API running on http://localhost:3001'));
