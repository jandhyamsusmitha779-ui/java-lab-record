const CUP='<svg class="cup" viewBox="0 0 48 48" width="1em" height="1em" aria-hidden="true"><path class="ca" d="M8 20h26v8a12 12 0 0 1-12 12h-2A12 12 0 0 1 8 28z"/><path class="cb" d="M34 23h3a5 5 0 0 1 0 10h-3v-3h3a2 2 0 0 0 0-4h-3z"/><path class="cs" d="M15 7c-3 3 3 5 0 9M23 7c-3 3 3 5 0 9"/></svg>';
const P=(t,q,files,cmds,out,note)=>({t,q,files,cmds,out,note});
const WEEKS={
1:{title:"Language Comparison",table:{cols:["Parameter","Java","C","C++","Python","JavaScript"],rows:[
["Language name","Java","C","C++","Python","JavaScript"],
["Open source or commercial","Open source (OpenJDK); Oracle JDK has its own licence terms","Open standard; free compilers (GCC, Clang)","Open standard; free compilers (GCC, Clang)","Open source (PSF licence)","Open standard; open-source engines such as V8"],
["Compiler or interpreter","Compiled to bytecode, run by the JVM (JIT)","Compiler","Compiler","Interpreter (bytecode run by CPython)","Interpreted / JIT-compiled by the engine"],
["Object-oriented support","Fully object-oriented","No (procedural)","Yes (multi-paradigm)","Yes (multi-paradigm)","Yes (prototype-based, with classes)"],
["Developer organization","Oracle (originally Sun Microsystems)","ISO/ANSI committees (born at Bell Labs)","ISO C++ committee","Python Software Foundation","Netscape; now standardized by Ecma TC39"],
["Developer / person","James Gosling","Dennis Ritchie","Bjarne Stroustrup","Guido van Rossum","Brendan Eich"],
["Current major version (2026)","Java 26 (Java 25 is LTS)","C23","C++23 (C++26 coming)","Python 3.14","ECMAScript 2026"],
["Primary purpose","Portable general-purpose applications","System programming","Performance-critical and system software","General-purpose and scripting","Interactive web pages and apps"],
["Common applications","Enterprise systems, Android, web back-ends","Operating systems, embedded, drivers","Games, browsers, engines","AI/ML, data science, automation","Web front-end, Node.js servers"],
["Database support","JDBC","Through libraries (ODBC, SQLite API)","Through libraries (ODBC, connectors)","DB-API, SQLAlchemy","Node.js drivers and ORMs"],
["Memory management","Automatic garbage collection","Manual (malloc/free)","Manual, plus RAII and smart pointers","Automatic (reference counting + GC)","Automatic garbage collection"],
["Security features","Bytecode verification, sandboxing, no raw pointers","Few built-in; pointer errors possible","Few built-in; smart pointers help","Memory safe with runtime checks","Browser sandbox, same-origin policy"],
["Performance","High (JIT)","Very high","Very high","Slower","Fast (JIT), below compiled languages"],
["Platform independence","Yes (write once, run anywhere)","No (recompile per platform)","No (recompile per platform)","Yes (needs an interpreter)","Yes (any browser or Node.js)"],
["Other important features","Multithreading, large standard library, strong typing","Simple, close to hardware","Templates, STL, operator overloading","Dynamic typing, huge library ecosystem","Event-driven, asynchronous, runs in the browser"],
["Ease of learning","Moderate","Moderate to hard","Hard","Easy","Easy to moderate"],
["Popular IDEs","IntelliJ IDEA, Eclipse, NetBeans, VS Code","Code::Blocks, Dev-C++, VS Code","Visual Studio, CLion, Code::Blocks","PyCharm, VS Code, IDLE","VS Code, WebStorm"],
["Compilation output","Bytecode (.class)","Native machine code (.exe)","Native machine code (.exe)","Bytecode (.pyc)","None (compiled in memory by the engine)"],
["Advantages","Portable, secure, rich ecosystem","Fast, low-level control","Fast, powerful abstractions","Simple, readable, versatile","Runs everywhere on the web"],
["Limitations","Verbose, slower start-up, higher memory use","No OOP, manual memory, unsafe","Complex, unsafe memory handling","Slower, higher memory use","Loose typing, inconsistent behaviour"]
],summary:[["C / C++","performance &amp; control"],["Java","portability &amp; enterprise"],["Python","simplicity &amp; versatility"],["JavaScript","web &amp; cross-platform apps"]]}},
2:{title:"Java Setup",progs:(()=>{const hello=n=>[{n:"HelloJava.java",c:`public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}`}],C=["javac HelloJava.java","java HelloJava"];return[
P("OpenJDK 21 Setup and First Program",`<ol><li>Open a web browser and search for the OpenJDK website.</li><li>Go to OpenJDK downloads and download OpenJDK 21.0.11 for Windows x86 64-bit (JDK).</li><li>Install it, then open Command Prompt and run <code>java -version</code>.</li><li>Update PATH: Settings → System → About → Advanced system settings → Environment Variables, and add the JDK <code>bin</code> folder to Path.</li><li>Run <code>java -version</code> again to verify, then write and run a simple Java program.</li></ol>`,hello(),C,"Hello Java","The version check proves the JDK is installed and on PATH; javac compiles and java runs the program."),
P("OracleJDK Setup and First Program",`<ol><li>Open a web browser and search for the OracleJDK website.</li><li>Go to OracleJDK downloads and download the x64 MSI installer for Windows, then run it.</li><li>Open Command Prompt and check <code>java -version</code> and <code>javac -version</code>.</li><li>Update Path under System Variables (Environment Variables) with the JDK <code>bin</code> folder.</li><li>Verify <code>java -version</code> and <code>javac -version</code> again, then write and run a simple Java program.</li></ol>`,hello(),C,"Hello Java","Checking both java and javac confirms the runtime and the compiler are available.")];})()},
3:{title:"Java Basics",progs:(()=>{const M=c=>[{n:"Main.java",c}],C=["javac Main.java","java Main"],W=b=>`public class Main {
    public static void main(String[] args) {
${b}
    }
}`;return[
P("Hello, Java!","Display Hello, Java! and show the basic structure of a Java program.",M(W(`        System.out.println("Hello, Java!");`)),C,"Hello, Java!","A class, the main method and one print statement make a complete program."),
P("Primitive Data Types","Declare variables of all eight primitive types and display them.",M(W(`        byte b = 100;
        short s = 20000;
        int i = 100000;
        long l = 9876543210L;
        float f = 3.14f;
        double d = 19.99;
        char c = 'A';
        boolean flag = true;
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + flag);`)),C,`byte: 100
short: 20000
int: 100000
long: 9876543210
float: 3.14
double: 19.99
char: A
boolean: true`,"Each type has its own size and range. long needs L and float needs f."),
P("Integer Arithmetic","Perform addition, subtraction, multiplication, division and modulus on two integers.",M(W(`        int a = 17, b = 5;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));`)),C,`Addition: 22
Subtraction: 12
Multiplication: 85
Division: 3
Modulus: 2`,"Integer division drops the decimal part; % gives the remainder."),
P("Floating-Point Arithmetic","Perform arithmetic operations on floating-point numbers.",M(W(`        double x = 7.5, y = 2.5;
        System.out.println("Addition: " + (x + y));
        System.out.println("Subtraction: " + (x - y));
        System.out.println("Multiplication: " + (x * y));
        System.out.println("Division: " + (x / y));
        System.out.println("Modulus: " + (x % y));`)),C,`Addition: 10.0
Subtraction: 5.0
Multiplication: 18.75
Division: 3.0
Modulus: 0.0`,"With doubles the division keeps its decimal part."),
P("Character and ASCII Value","Display a character and its ASCII/Unicode value.",M(W(`        char ch = 'A';
        int code = ch;
        System.out.println("Character: " + ch);
        System.out.println("ASCII value: " + code);`)),C,`Character: A
ASCII value: 65`,"Assigning a char to an int gives its Unicode code."),
P("Boolean Variables and Expressions","Demonstrate boolean variables and boolean expressions.",M(W(`        boolean a = true, b = false;
        System.out.println("a && b: " + (a && b));
        System.out.println("a || b: " + (a || b));
        System.out.println("!a: " + (!a));
        System.out.println("10 > 5: " + (10 > 5));`)),C,`a && b: false
a || b: true
!a: false
10 > 5: true`,"&& needs both true, || needs one true, ! flips the value."),
P("Declaring and Initializing Variables","Declare and initialize different types of variables and display them.",M(W(`        String name = "Susmitha";
        int age = 19;
        double cgpa = 8.5;
        char grade = 'A';
        boolean passed = true;
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("CGPA: " + cgpa);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + passed);`)),C,`Name: Susmitha
Age: 19
CGPA: 8.5
Grade: A
Passed: true`,"Variables are declared with a type and given a starting value."),
P("Swap Using a Temporary Variable","Swap two variables using a temporary variable.",M(W(`        int a = 10, b = 20;
        System.out.println("Before: a=" + a + ", b=" + b);
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After: a=" + a + ", b=" + b);`)),C,`Before: a=10, b=20
After: a=20, b=10`,"temp holds a's value so it isn't lost when a is overwritten."),
P("Widening Type Conversion","Demonstrate automatic (widening) type conversion.",M(W(`        int i = 100;
        long l = i;
        float f = l;
        double d = f;
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);`)),C,`int: 100
long: 100
float: 100.0
double: 100.0`,"A smaller type converts to a larger one automatically, with no data loss."),
P("Narrowing Type Casting","Demonstrate explicit (narrowing) type casting.",M(W(`        double d = 9.78;
        int i = (int) d;
        int big = 300;
        byte b = (byte) big;
        System.out.println("double: " + d);
        System.out.println("int after cast: " + i);
        System.out.println("byte after cast of 300: " + b);`)),C,`double: 9.78
int after cast: 9
byte after cast of 300: 44`,"Casting to a smaller type can lose data: the decimal is dropped and 300 wraps around to 44."),
P("Character ↔ ASCII Using Casting","Convert a character to ASCII and back using type casting.",M(W(`        char c = 'B';
        int ascii = (int) c;
        System.out.println("Character to ASCII: " + ascii);
        int n = 100;
        char ch = (char) n;
        System.out.println("ASCII to character: " + ch);`)),C,`Character to ASCII: 66
ASCII to character: d`,"(int) gives the code of a char; (char) turns a code back into a character."),
P("Even or Odd","Check whether a number is even or odd using if-else.",M(W(`        int n = 17;
        if (n % 2 == 0)
            System.out.println(n + " is even");
        else
            System.out.println(n + " is odd");`)),C,"17 is odd","A number with remainder 0 when divided by 2 is even."),
P("Largest of Two Numbers","Find the largest of two numbers using if-else.",M(W(`        int a = 45, b = 72;
        if (a > b)
            System.out.println("Largest number is " + a);
        else
            System.out.println("Largest number is " + b);`)),C,"Largest number is 72","The if-else compares the two values and prints the bigger one."),
P("Keywords and Identifiers","Demonstrate reserved keywords and valid identifiers, and explain why keywords cannot be variable names.",M(W(`        int studentAge = 20;
        int _count = 5;
        int $total = 100;
        // int class = 5;   // ERROR: class is a keyword
        System.out.println("studentAge = " + studentAge);
        System.out.println("_count = " + _count);
        System.out.println("$total = " + $total);`)),C,`studentAge = 20
_count = 5
$total = 100`,"Keywords such as class, int and for are reserved for Java's syntax, so the compiler can't accept them as names. Identifiers may start with a letter, _ or $."),
P("For Loop: 1 to 10","Display the numbers 1 to 10 using a for loop.",M(W(`        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }`)),C,`1
2
3
4
5
6
7
8
9
10`,"The loop starts at 1, runs while i <= 10 and adds 1 each time.")];})()},
4:{title:"No Programs",none:true},
5:{title:"No Programs",none:true},
6:{title:"OOP Lab",progs:(()=>{const C=["javac Main.java","java Main"],Q=(t,q,c,o,n)=>P(t,q,[{n:"Main.java",c}],C,o,n),W=(d,b)=>`${d}

public class Main {
    public static void main(String[] args) {
${b}
    }
}`;return[
Q("1A: Student Information System","Store and display student information using a class.",W(`class Student {
    int roll = 101;
    String name = "Anu";
    void display() { System.out.println("Roll: " + roll + ", Name: " + name); }
}`,`        new Student().display();`),"Roll: 101, Name: Anu","A class groups data and behaviour. Concept: class and object."),
Q("1B: Employee Information System","Store and display employee information using a class.",W(`class Employee {
    int id = 1;
    String name = "Ravi";
    double salary = 40000;
    void display() { System.out.println(id + " " + name + " " + salary); }
}`,`        new Employee().display();`),"1 Ravi 40000.0","Concept: class with fields and a method."),
Q("2A: Book Details Using Constructors","Create Book objects using a constructor.",W(`class Book {
    String title, author;
    double price;
    Book(String t, String a, double p) { title = t; author = a; price = p; }
    void show() { System.out.println(title + " by " + author + ", Rs." + price); }
}`,`        new Book("Java Basics", "Gosling", 450).show();`),"Java Basics by Gosling, Rs.450.0","The constructor sets values when the object is created. Concept: constructors."),
Q("2B: Array of Student Objects","Create and display an array of Student objects.",W(`class Student {
    int roll;
    String name;
    Student(int r, String n) { roll = r; name = n; }
}`,`        Student[] s = new Student[3];
        s[0] = new Student(101, "Anu");
        s[1] = new Student(102, "Ravi");
        s[2] = new Student(103, "Sita");
        for (Student x : s) System.out.println(x.roll + " " + x.name);`),`101 Anu
102 Ravi
103 Sita`,"Each array slot holds a reference to its own object. Concept: array of objects."),
Q("3A: Reference Assignment","Show that assigning one reference to another shares the same object.",W(`class P { int x; }`,`        P a = new P();
        a.x = 1;
        P b = a;
        b.x = 5;
        System.out.println("a.x = " + a.x);
        System.out.println("b.x = " + b.x);`),`a.x = 5
b.x = 5`,"a and b point to one object, so a change through b is visible through a. Concept: object references."),
Q("3B: Comparing Object References","Compare references using ==.",W(`class P { int x; }`,`        P p1 = new P(), p2 = new P();
        P p3 = p1;
        System.out.println("p1 == p2: " + (p1 == p2));
        System.out.println("p1 == p3: " + (p1 == p3));`),`p1 == p2: false
p1 == p3: true`,"== checks whether two references point to the same object, not whether the contents match. Concept: reference comparison."),
Q("4A: Calculator Using Methods","Build a calculator with add, subtract, multiply and divide methods.",W(`class Calculator {
    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
    int mul(int a, int b) { return a * b; }
    int div(int a, int b) { return a / b; }
}`,`        Calculator c = new Calculator();
        System.out.println("Add: " + c.add(10, 5));
        System.out.println("Sub: " + c.sub(10, 5));
        System.out.println("Mul: " + c.mul(10, 5));
        System.out.println("Div: " + c.div(10, 5));`),`Add: 15
Sub: 5
Mul: 50
Div: 2`,"Concept: methods with parameters and return values."),
Q("4B: Rectangle Operations","Calculate area and perimeter of a rectangle using methods.",W(`class Rectangle {
    int l = 10, w = 5;
    int area() { return l * w; }
    int perimeter() { return 2 * (l + w); }
}`,`        Rectangle r = new Rectangle();
        System.out.println("Area: " + r.area());
        System.out.println("Perimeter: " + r.perimeter());`),`Area: 50
Perimeter: 30`,"Concept: methods that use an object's own fields."),
Q("5A: Student Constructors","Use default and parameterized constructors.",W(`class Student {
    String name;
    Student() { name = "Unknown"; }
    Student(String n) { name = n; }
}`,`        System.out.println("Name: " + new Student().name);
        System.out.println("Name: " + new Student("Susmitha").name);`),`Name: Unknown
Name: Susmitha`,"Concept: default and parameterized constructors."),
Q("5B: Constructor Overloading","Overload constructors with different parameters.",W(`class Rect {
    int area;
    Rect() { area = 1; }
    Rect(int s) { area = s * s; }
    Rect(int l, int b) { area = l * b; }
}`,`        System.out.println(new Rect().area);
        System.out.println(new Rect(4).area);
        System.out.println(new Rect(3, 4).area);`),`1
16
12`,"Java picks the constructor that matches the arguments. Concept: constructor overloading."),
Q("6A: Using this Keyword","Use this to separate fields from parameters of the same name.",W(`class Student {
    int roll;
    String name;
    Student(int roll, String name) {
        this.roll = roll;
        this.name = name;
    }
}`,`        Student s = new Student(7, "Anu");
        System.out.println(s.roll + " " + s.name);`),"7 Anu","this.roll is the field; roll is the parameter. Concept: this keyword."),
Q("6B: Constructor Chaining","Call one constructor from another using this().",W(`class Student {
    Student() {
        this("Unknown", 0);
        System.out.println("Default constructor");
    }
    Student(String n, int r) {
        System.out.println("Two-arg constructor: " + n + ", " + r);
    }
}`,`        new Student();`),`Two-arg constructor: Unknown, 0
Default constructor`,"this(...) must be the first line and runs the other constructor first. Concept: constructor chaining."),
Q("7A: Demonstrating Garbage Collection","Request garbage collection after an object is no longer referenced.",W(`class Demo { }`,`        Demo d = new Demo();
        System.out.println("Object created");
        d = null;
        System.out.println("Object set to null");
        System.gc();
        System.out.println("System.gc() called");`),`Object created
Object set to null
System.gc() called`,"System.gc() only requests collection; the JVM decides when it runs. Concept: garbage collection."),
Q("7B: Object Eligibility for Garbage Collection","Show three ways an object becomes eligible for garbage collection.",W(`class Demo { }`,`        Demo a = new Demo();
        a = null;
        System.out.println("1: set reference to null");
        Demo b = new Demo(), c = new Demo();
        b = c;
        System.out.println("2: reassigned reference");
        new Demo();
        System.out.println("3: anonymous object");`),`1: set reference to null
2: set reference to null
3: anonymous object`.replace("2: set reference to null","2: reassigned reference"),"Objects with no reference left are eligible: nulled, reassigned or anonymous. Concept: eligibility for GC."),
Q("8A: Arithmetic Overloading","Overload add() for different parameter lists.",W(`class Calc {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}`,`        Calc c = new Calc();
        System.out.println("10+20 = " + c.add(10, 20));
        System.out.println("2.5+5.0 = " + c.add(2.5, 5.0));
        System.out.println("10+20+30 = " + c.add(10, 20, 30));`),`10+20 = 30
2.5+5.0 = 7.5
10+20+30 = 60`,"Same name, different parameters. Concept: method overloading."),
Q("8B: Overloading Area Methods","Overload area() for a square, rectangle and circle.",W(`class Area {
    int area(int s) { return s * s; }
    int area(int l, int b) { return l * b; }
    double area(double r) { return 3.14 * r * r; }
}`,`        Area a = new Area();
        System.out.println("Square: " + a.area(5));
        System.out.println("Rectangle: " + a.area(3, 4));
        System.out.println("Circle: " + a.area(2.0));`),`Square: 25
Rectangle: 12
Circle: 12.56`,"Concept: overloading by number and type of parameters."),
Q("9A: Passing Student Object","Pass an object to a method.",W(`class Student {
    String name;
    Student(String n) { name = n; }
}`,`        Student s = new Student("Anu");
        show(s);
    }
    static void show(Student st) {
        System.out.println("Student: " + st.name);`),"Student: Anu","The method receives a reference to the same object. Concept: passing objects to methods."),
Q("9B: Comparing Employee Salaries","Pass two Employee objects to a method and find the higher salary.",W(`class Employee {
    String name;
    double salary;
    Employee(String n, double s) { name = n; salary = s; }
}`,`        Employee e1 = new Employee("Ravi", 50000);
        Employee e2 = new Employee("Meena", 60000);
        Employee h = higher(e1, e2);
        System.out.println("Higher salary: " + h.name + " (" + h.salary + ")");
    }
    static Employee higher(Employee a, Employee b) {
        return a.salary > b.salary ? a : b;`),"Higher salary: Meena (60000.0)","Concept: objects as parameters."),
Q("10A: Returning a Student Object","Return an object from a method.",W(`class Student {
    String name;
    Student(String n) { name = n; }
}`,`        Student s = create();
        System.out.println("Created: " + s.name);
    }
    static Student create() {
        return new Student("Anu");`),"Created: Anu","Concept: methods returning objects."),
Q("10B: Returning a Bank Account Object","Return a BankAccount object from a method.",W(`class Account {
    String holder;
    double balance;
    Account(String h, double b) { holder = h; balance = b; }
}`,`        Account a = open();
        System.out.println("Holder: " + a.holder);
        System.out.println("Balance: " + a.balance);
    }
    static Account open() {
        return new Account("Susmitha", 5000);`),`Holder: Susmitha
Balance: 5000.0`,"Concept: returning objects."),
Q("11A: Static Variable","Count objects using a static variable.",W(`class Counter {
    static int count = 0;
    Counter() { count++; }
}`,`        new Counter();
        new Counter();
        new Counter();
        System.out.println("Objects created: " + Counter.count);`),"Objects created: 3","One static variable is shared by all objects. Concept: static variable."),
Q("11B: Static Methods","Call static methods without creating an object.",W(`class MathUtil {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }
}`,`        System.out.println("Square of 6 = " + MathUtil.square(6));
        System.out.println("Cube of 3 = " + MathUtil.cube(3));`),`Square of 6 = 36
Cube of 3 = 27`,"Concept: static methods belong to the class."),
Q("12A: Final Keyword","Use final for a constant and a method that cannot be overridden.",W(`class Circle {
    final double PI = 3.14;
    final void show() { System.out.println("PI = " + PI); }
    // PI = 3.15;  // ERROR: cannot change a final variable
}`,`        new Circle().show();`),"PI = 3.14","A final variable cannot change and a final method cannot be overridden. Concept: final keyword."),
Q("12B: Blank Final Variable","Assign a blank final variable once, in the constructor.",W(`class Student {
    final int id;
    Student(int i) { id = i; }
}`,`        System.out.println("ID: " + new Student(101).id);
        System.out.println("ID: " + new Student(102).id);`),`ID: 101
ID: 102`,"A blank final is not initialized at declaration but must be set exactly once. Concept: blank final."),
Q("13A: College and Department (Static Nested Class)","Use a static nested class.",W(`class College {
    static class Department {
        void show() { System.out.println("Department: Computer Science"); }
    }
}`,`        College.Department d = new College.Department();
        d.show();`),"Department: Computer Science","A static nested class needs no outer object. Concept: static nested class."),
Q("13B: Employee Address (Static Nested Class)","Model an employee's address with a static nested class.",W(`class Employee {
    String name = "Ravi";
    static class Address {
        String city;
        int pin;
        Address(String c, int p) { city = c; pin = p; }
    }
}`,`        Employee e = new Employee();
        Employee.Address a = new Employee.Address("Chennai", 600001);
        System.out.println("Employee: " + e.name);
        System.out.println("Address: " + a.city + ", " + a.pin);`),`Employee: Ravi
Address: Chennai, 600001`,"Concept: static nested class."),
Q("14A: Student Address (Inner Class)","Use an inner class that reads the outer class's field.",W(`class Student {
    String name = "Anu";
    class Address {
        String city = "Pune";
        void show() { System.out.println(name + " lives in " + city); }
    }
}`,`        Student s = new Student();
        Student.Address a = s.new Address();
        a.show();`),"Anu lives in Pune","An inner class needs an outer object and can use its fields. Concept: inner class."),
Q("14B: Library Management (Inner Class)","Model books inside a library using an inner class.",W(`class Library {
    String name = "Central Library";
    class Book {
        String title;
        Book(String t) { title = t; }
        void show() { System.out.println(title + " is available in " + name); }
    }
}`,`        Library l = new Library();
        Library.Book b = l.new Book("Java Programming");
        b.show();`),"Java Programming is available in Central Library","Concept: inner class.")];})()},
7:{title:"Strings & Inheritance",progs:(()=>{const M=c=>[{n:"Main.java",c}],C=["javac Main.java","java Main"];return[
P("Experiment 1: String Constructors","Demonstrate a string literal, new String(), the char-array and byte-array constructors, == and .equals().",M(`public class Main {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = new String();
        char[] arr = {'J', 'a', 'v', 'a'};
        String s3 = new String(arr);
        byte[] bytes = {74, 97, 118, 97};
        String s4 = new String(bytes);
        String s5 = new String("Java");
        String s6 = "Java";
        System.out.println("s1 (literal): " + s1);
        System.out.println("s2 (empty): [" + s2 + "]");
        System.out.println("s3 (char array): " + s3);
        System.out.println("s4 (byte array): " + s4);
        System.out.println("s1 == s5: " + (s1 == s5));
        System.out.println("s1.equals(s5): " + s1.equals(s5));
        System.out.println("s1 == s6: " + (s1 == s6));
    }
}`),C,`s1 (literal): Java
s2 (empty): []
s3 (char array): Java
s4 (byte array): Java
s1 == s5: false
s1.equals(s5): true
s1 == s6: true`,"== compares references: new String() makes a new object, while identical literals share one object. .equals() compares the text. Concept: String constructors and comparison."),
P("Experiment 2: StringBuffer Class","Demonstrate append(), insert(), replace(), delete(), reverse(), length() and capacity().",M(`public class Main {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" Java");
        System.out.println("After append: " + sb);
        sb.insert(5, ",");
        System.out.println("After insert: " + sb);
        sb.replace(7, 11, "World");
        System.out.println("After replace: " + sb);
        sb.delete(5, 6);
        System.out.println("After delete: " + sb);
        sb.reverse();
        System.out.println("After reverse: " + sb);
        System.out.println("Length: " + sb.length());
        System.out.println("Capacity: " + sb.capacity());
    }
}`),C,`After append: Hello Java
After insert: Hello, Java
After replace: Hello, World
After delete: Hello World
After reverse: dlroW olleH
Length: 11
Capacity: 21`,"StringBuffer is mutable, so each method changes the same object. Initial capacity is 16 plus the starting text length (5), so 21. Concept: mutable strings."),
P("Experiment 3: StringTokenizer Class","Read a sentence with Scanner, tokenize it, show the words and count, then tokenize again using a delimiter you enter.",M(`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String text = sc.nextLine();
        StringTokenizer st = new StringTokenizer(text);
        System.out.println("Token count: " + st.countTokens());
        while (st.hasMoreTokens())
            System.out.println(st.nextToken());
        System.out.print("Enter a delimiter: ");
        String d = sc.nextLine();
        st = new StringTokenizer(text, d);
        System.out.println("Token count: " + st.countTokens());
        while (st.hasMoreTokens())
            System.out.println(st.nextToken());
    }
}`),C,`Enter a sentence: apple,banana mango,grape
Token count: 2
apple,banana
mango,grape
Enter a delimiter: ,
Token count: 3
apple
banana mango
grape`,"Sample input: apple,banana mango,grape and then a comma. The default delimiter is whitespace; passing a delimiter string changes where the text is split."),
P("Experiment 4: Basic Inheritance","Create a Person superclass and a Student subclass; display name, age, roll number and branch.",M(`class Person {
    String name;
    int age;
    Person(String n, int a) { name = n; age = a; }
    void show() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Student extends Person {
    String roll, branch;
    Student(String n, int a, String r, String b) {
        super(n, a);
        roll = r;
        branch = b;
    }
    void display() {
        show();
        System.out.println("Roll No: " + roll);
        System.out.println("Branch: " + branch);
    }
}

public class Main {
    public static void main(String[] args) {
        new Student("Susmitha", 19, "25EU02079", "AI&ML").display();
    }
}`),C,`Name: Susmitha
Age: 19
Roll No: 25EU02079
Branch: AI&ML`,"Student inherits name, age and show() from Person and adds its own fields. Concept: inheritance."),
P("Experiment 5: Using super Keyword","Create Employee and Manager (extends Employee); demonstrate super() and super.display().",M(`class Employee {
    String name;
    double salary;
    Employee(String n, double s) { name = n; salary = s; }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
}

class Manager extends Employee {
    String dept;
    Manager(String n, double s, String d) {
        super(n, s);
        dept = d;
    }
    void display() {
        super.display();
        System.out.println("Department: " + dept);
        System.out.println("Salary with 10% bonus: " + (salary + salary / 10));
    }
}

public class Main {
    public static void main(String[] args) {
        new Manager("Ravi", 50000, "Sales").display();
    }
}`),C,`Name: Ravi
Salary: 50000.0
Department: Sales
Salary with 10% bonus: 55000.0`,"super(n, s) passes values to the Employee constructor; super.display() runs the parent's version before the child adds its own lines. Concept: super keyword.")];})()},
8:{title:"Inheritance & Polymorphism",progs:(()=>{const M=c=>[{n:"Main.java",c}],C=["javac Main.java","java Main"];return[
P("Single Inheritance: Person → Student","Create a Person class and a Student class that inherits from it.",M(`class Person {
    String name = "Susmitha";
    void display() { System.out.println("Name: " + name); }
}

class Student extends Person {
    int roll = 2079;
    void show() {
        display();
        System.out.println("Roll: " + roll);
    }
}

public class Main {
    public static void main(String[] args) {
        new Student().show();
    }
}`),C,`Name: Susmitha
Roll: 2079`,"Student reuses the name field and display() of Person. Concept: single inheritance (extends)."),
P("Using super Keyword: Vehicle → Car","Use super to reach the parent's variable and method from the child.",M(`class Vehicle {
    String type = "Vehicle";
    void start() { System.out.println("Vehicle starts"); }
}

class Car extends Vehicle {
    String type = "Car";
    void show() {
        System.out.println("Child: " + type);
        System.out.println("Parent: " + super.type);
        super.start();
    }
}

public class Main {
    public static void main(String[] args) {
        new Car().show();
    }
}`),C,`Child: Car
Parent: Vehicle
Vehicle starts`,"super.type and super.start() refer to the parent's members hidden by the child. Concept: super keyword."),
P("Multilevel Inheritance: Person → Employee → Manager","Build a three-level inheritance chain.",M(`class Person {
    void info() { System.out.println("Person: Ravi"); }
}

class Employee extends Person {
    void work() { System.out.println("Employee: works"); }
}

class Manager extends Employee {
    void manage() { System.out.println("Manager: manages team"); }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.info();
        m.work();
        m.manage();
    }
}`),C,`Person: Ravi
Employee: works
Manager: manages team`,"Manager inherits from Employee, which inherits from Person. Concept: multilevel inheritance."),
P("Method Overriding: Animal → Dog/Cat","Override a parent method in two child classes.",M(`class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    void sound() { System.out.println("Dog barks"); }
}

class Cat extends Animal {
    void sound() { System.out.println("Cat meows"); }
}

public class Main {
    public static void main(String[] args) {
        new Dog().sound();
        new Cat().sound();
    }
}`),C,`Dog barks
Cat meows`,"Each child gives its own version of sound(). Concept: method overriding."),
P("Dynamic Method Dispatch: Shape → Circle/Rectangle/Triangle","Call overridden methods through a parent reference.",M(`class Shape {
    double area() { return 0; }
}

class Circle extends Shape {
    double area() { return 3.14 * 7 * 7; }
}

class Rectangle extends Shape {
    double area() { return 10 * 5; }
}

class Triangle extends Shape {
    double area() { return 0.5 * 6 * 4; }
}

public class Main {
    public static void main(String[] args) {
        Shape s;
        s = new Circle();
        System.out.println("Circle: " + s.area());
        s = new Rectangle();
        System.out.println("Rectangle: " + s.area());
        s = new Triangle();
        System.out.println("Triangle: " + s.area());
    }
}`),C,`Circle: 153.86
Rectangle: 50.0
Triangle: 12.0`,"The object type, not the reference type, decides which area() runs. Concept: dynamic method dispatch."),
P("super with Method Overriding: Employee → Manager","Call the parent version of an overridden method using super.",M(`class Employee {
    void display() { System.out.println("Employee: Ravi"); }
}

class Manager extends Employee {
    void display() {
        super.display();
        System.out.println("Role: Manager");
    }
}

public class Main {
    public static void main(String[] args) {
        new Manager().display();
    }
}`),C,`Employee: Ravi
Role: Manager`,"The child extends the parent's behaviour instead of replacing it. Concept: super.method()."),
P("Salary Calculation: Employee → Developer → SeniorDeveloper","Calculate salary through a multilevel chain using overriding.",M(`class Employee {
    int salary() { return 30000; }
}

class Developer extends Employee {
    int salary() { return super.salary() + 10000; }
}

class SeniorDeveloper extends Developer {
    int salary() { return super.salary() + 15000; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Employee: " + new Employee().salary());
        System.out.println("Developer: " + new Developer().salary());
        System.out.println("SeniorDeveloper: " + new SeniorDeveloper().salary());
    }
}`),C,`Employee: 30000
Developer: 40000
SeniorDeveloper: 55000`,"Each level adds its own amount to what the level above returns. Concept: multilevel inheritance with super."),
P("Dispatch for Bank Accounts: BankAccount → SavingsAccount/CurrentAccount","Use a BankAccount reference to call overridden interest().",M(`class BankAccount {
    double balance = 10000;
    double interest() { return 0; }
}

class SavingsAccount extends BankAccount {
    double interest() { return balance * 4 / 100; }
}

class CurrentAccount extends BankAccount {
    double interest() { return 0; }
}

public class Main {
    public static void main(String[] args) {
        BankAccount a = new SavingsAccount();
        System.out.println("Savings interest: " + a.interest());
        a = new CurrentAccount();
        System.out.println("Current interest: " + a.interest());
    }
}`),C,`Savings interest: 400.0
Current interest: 0.0`,"One BankAccount variable behaves differently for each account type. Concept: runtime polymorphism."),
P("Constructor Execution: Person → Student → GraduateStudent","Show the order in which constructors run in multilevel inheritance.",M(`class Person {
    Person() { System.out.println("Person constructor"); }
}

class Student extends Person {
    Student() { System.out.println("Student constructor"); }
}

class GraduateStudent extends Student {
    GraduateStudent() { System.out.println("GraduateStudent constructor"); }
}

public class Main {
    public static void main(String[] args) {
        new GraduateStudent();
    }
}`),C,`Person constructor
Student constructor
GraduateStudent constructor`,"Each constructor first calls super() implicitly, so parents run before children. Concept: constructor chaining in inheritance."),
P("Banking Application Using Inheritance","Build a small banking application with BankAccount, SavingsAccount and CurrentAccount.",M(`class BankAccount {
    double balance;
    BankAccount(double b) { balance = b; }
    void deposit(double a) { balance += a; }
    void withdraw(double a) {
        if (a > balance) System.out.println("Insufficient funds");
        else balance -= a;
    }
    void show() { System.out.println("Balance: " + balance); }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(double b) { super(b); }
    void addInterest() { balance += balance * 5 / 100; }
}

class CurrentAccount extends BankAccount {
    CurrentAccount(double b) { super(b); }
    void withdraw(double a) { balance -= a; }
}

public class Main {
    public static void main(String[] args) {
        SavingsAccount s = new SavingsAccount(10000);
        s.deposit(2000);
        s.addInterest();
        s.show();
        s.withdraw(50000);
        CurrentAccount c = new CurrentAccount(1000);
        c.withdraw(1500);
        c.show();
    }
}`),C,`Balance: 12600.0
Insufficient funds
Balance: -500.0`,"Savings adds interest; Current overrides withdraw() to allow an overdraft. Concept: inheritance, super(), overriding.")];})()},
9:{title:"Packages & Interfaces",progs:[
P("Creating a User-Defined Package","Develop a Java program that creates a package named mypackage containing a Student class, and access that class from a separate Java program outside the package.",
[{n:"mypackage/Student.java",c:`package mypackage;

public class Student {
    public void display() {
        System.out.println("Student class from mypackage");
    }
}`},{n:"Main.java",c:`import mypackage.Student;

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}`}],["javac -d . mypackage/Student.java","javac Main.java","java Main"],"Student class from mypackage","The package statement places Student in mypackage; Main imports it."),
P("Importing Classes from Packages","Write a Java program to demonstrate different methods of importing classes such as Student and Faculty from a package named college, using both individual and wildcard imports.",
[{n:"college/Student.java",c:`package college;

public class Student {
    public void show() { System.out.println("Student: Ravi"); }
}`},{n:"college/Faculty.java",c:`package college;

public class Faculty {
    public void show() { System.out.println("Faculty: Dr. Rao"); }
}`},{n:"Main.java",c:`import college.Student;   // individual import
import college.*;          // wildcard import

public class Main {
    public static void main(String[] args) {
        new Student().show();
        new Faculty().show();
    }
}`}],["javac -d . college/*.java","javac Main.java","java Main"],"Student: Ravi\nFaculty: Dr. Rao","An individual import names one class; the wildcard brings in every public class of the package."),
P("Accessing Package Members","Create a Java program to demonstrate the access levels of public, private, protected, and default members when accessed from the same class, another class in the same package, and a class belonging to a different package.",
[{n:"pack1/A.java",c:`package pack1;

public class A {
    public int a = 1;
    protected int b = 2;
    int c = 3;
    private int d = 4;
    public void showAll() {
        System.out.println("Same class: " + a + " " + b + " " + c + " " + d);
    }
}`},{n:"pack1/B.java",c:`package pack1;

public class B {
    public void test() {
        A obj = new A();
        System.out.println("Same package: " + obj.a + " " + obj.b + " " + obj.c);
        // obj.d is private -> not accessible
    }
}`},{n:"pack2/C.java",c:`package pack2;
import pack1.A;

public class C extends A {
    public void test() {
        System.out.println("Different package (subclass): " + a + " " + b);
        // c is default, d is private -> not accessible
    }
}`},{n:"Main.java",c:`public class Main {
    public static void main(String[] args) {
        new pack1.A().showAll();
        new pack1.B().test();
        new pack2.C().test();
    }
}`}],["javac -d . pack1/*.java pack2/*.java","javac Main.java","java Main"],"Same class: 1 2 3 4\nSame package: 1 2 3\nDifferent package (subclass): 1 2","Private: same class only. Default: same package. Protected: same package plus subclasses. Public: everywhere."),
P("Using CLASSPATH with Packages","Demonstrate how the Java CLASSPATH helps locate a user-defined package named utilities containing a Calculator class, and access the class from another program using the configured CLASSPATH.",
[{n:"utilities/Calculator.java",c:`package utilities;

public class Calculator {
    public int add(int a, int b) { return a + b; }
}`},{n:"Main.java",c:`import utilities.Calculator;

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Sum = " + c.add(10, 20));
    }
}`}],["javac -d C:\\mylib utilities/Calculator.java","set CLASSPATH=.;C:\\mylib","javac Main.java","java Main"],"Sum = 30","CLASSPATH tells javac and java which folders to search for packages."),
P("Package with Multiple Classes","Create a package named bank containing Account, Customer, and Transaction classes, and demonstrate their combined use from a main program outside the package.",
[{n:"bank/Account.java",c:`package bank;

public class Account {
    public double balance = 5000;
}`},{n:"bank/Customer.java",c:`package bank;

public class Customer {
    public String name = "Susmitha";
}`},{n:"bank/Transaction.java",c:`package bank;

public class Transaction {
    public void deposit(Account a, double amt) {
        a.balance += amt;
        System.out.println("Deposited: " + amt);
    }
}`},{n:"Main.java",c:`import bank.*;

public class Main {
    public static void main(String[] args) {
        Customer c = new Customer();
        Account a = new Account();
        Transaction t = new Transaction();
        t.deposit(a, 1500);
        System.out.println(c.name + " balance: " + a.balance);
    }
}`}],["javac -d . bank/*.java","javac Main.java","java Main"],"Deposited: 1500.0\nSusmitha balance: 6500.0","One package can hold many related classes that work together."),
P("Defining and Implementing an Interface","Create an interface named Shape with an area() method and implement it in Circle and Rectangle classes to demonstrate interface implementation.",
[{n:"Main.java",c:`interface Shape { double area(); }

class Circle implements Shape {
    double r = 7;
    public double area() { return 3.14 * r * r; }
}

class Rectangle implements Shape {
    double l = 10, b = 5;
    public double area() { return l * b; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Circle area: " + new Circle().area());
        System.out.println("Rectangle area: " + new Rectangle().area());
    }
}`}],["javac Main.java","java Main"],"Circle area: 153.86\nRectangle area: 50.0","Implementing classes must define every method the interface declares."),
P("Implementing More Than One Interface","Develop a Java program in which a single Demo class implements two interfaces, Printable and Showable, and demonstrates the methods declared by both interfaces.",
[{n:"Main.java",c:`interface Printable { void print(); }
interface Showable { void show(); }

class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing..."); }
    public void show() { System.out.println("Showing..."); }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}`}],["javac Main.java","java Main"],"Printing...\nShowing...","Java allows multiple interface implementation, which stands in for multiple inheritance."),
P("Polymorphism Through Interfaces","Write a Java program using a Vehicle interface reference to refer to objects of Car and Bike, demonstrating interface-based polymorphism.",
[{n:"Main.java",c:`interface Vehicle { void start(); }

class Car implements Vehicle {
    public void start() { System.out.println("Car starts with a key"); }
}

class Bike implements Vehicle {
    public void start() { System.out.println("Bike starts with a kick"); }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v;
        v = new Car();
        v.start();
        v = new Bike();
        v.start();
    }
}`}],["javac Main.java","java Main"],"Car starts with a key\nBike starts with a kick","One interface reference calls different implementations at run time."),
P("Using Variables Declared in an Interface","Create an interface named Constants containing variables such as MAX_MARKS and PI. Demonstrate how these values can be accessed through an implementing class as well as directly through the interface name.",
[{n:"Main.java",c:`interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14159;
}

class Test implements Constants {
    void show() {
        System.out.println("Via class: " + MAX_MARKS + ", " + PI);
    }
}

public class Main {
    public static void main(String[] args) {
        new Test().show();
        System.out.println("Via interface: " + Constants.MAX_MARKS + ", " + Constants.PI);
    }
}`}],["javac Main.java","java Main"],"Via class: 100, 3.14159\nVia interface: 100, 3.14159","Interface variables are implicitly public, static and final."),
P("Implementing a Nested Interface","Develop a Java program with an inner interface named Department declared inside an outer class University, and implement and use that interface from another class.",
[{n:"Main.java",c:`class University {
    interface Department {
        void name();
    }
}

class CSE implements University.Department {
    public void name() { System.out.println("Department: AI & ML"); }
}

public class Main {
    public static void main(String[] args) {
        University.Department d = new CSE();
        d.name();
    }
}`}],["javac Main.java","java Main"],"Department: AI & ML","A nested interface is referred to as Outer.Inner."),
P("Inheritance Between Interfaces","Create two interfaces where Dog extends Animal, then implement both inherited and newly declared methods in a Labrador class.",
[{n:"Main.java",c:`interface Animal { void eat(); }
interface Dog extends Animal { void bark(); }

class Labrador implements Dog {
    public void eat() { System.out.println("Labrador eats"); }
    public void bark() { System.out.println("Labrador barks"); }
}

public class Main {
    public static void main(String[] args) {
        Labrador l = new Labrador();
        l.eat();
        l.bark();
    }
}`}],["javac Main.java","java Main"],"Labrador eats\nLabrador barks","An interface can extend another; the class implements all methods of both."),
P("Practical Application Using Interfaces","Develop a simple real-world Java application that demonstrates how interfaces can be used to define common behavior and implement that behavior through appropriate classes.",
[{n:"Main.java",c:`interface Payment { void pay(double amount); }

class UPI implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using UPI"); }
}

class Card implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using Card"); }
}

public class Main {
    public static void main(String[] args) {
        Payment[] methods = { new UPI(), new Card() };
        for (Payment p : methods) p.pay(499.0);
    }
}`}],["javac Main.java","java Main"],"Paid 499.0 using UPI\nPaid 499.0 using Card","The checkout code depends only on Payment, so new payment types plug in easily."),
]},
10:{title:"Exceptions & I/O Streams",progs:(()=>{const M=c=>[{n:"Main.java",c}],C=["javac Main.java","java Main"];return[
P("Try-Catch: Division by Zero","Handle a division by zero using try-catch.",M(`public class Main {
    public static void main(String[] args) {
        try {
            int r = 10 / 0;
            System.out.println(r);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`),C,"Error: / by zero","The exception is caught, so the program does not crash."),
P("Common Runtime Exceptions","Demonstrate ArithmeticException, ArrayIndexOutOfBoundsException and NullPointerException.",M(`public class Main {
    public static void main(String[] args) {
        try { int a = 5 / 0; }
        catch (ArithmeticException e) { System.out.println("ArithmeticException: " + e.getMessage()); }
        try { int[] n = new int[3]; n[5] = 1; }
        catch (ArrayIndexOutOfBoundsException e) { System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage()); }
        try { String s = null; s.length(); }
        catch (NullPointerException e) { System.out.println("NullPointerException caught"); }
    }
}`),C,`ArithmeticException: / by zero
ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3
NullPointerException caught`,"Each risky statement has its own try-catch for the matching exception type."),
P("Uncaught Exception","Show the JVM's default message and stack trace for an uncaught exception.",M(`public class Main {
    public static void main(String[] args) {
        int[] a = new int[2];
        System.out.println("Before");
        a[3] = 10;
        System.out.println("After");
    }
}`),C,`Before
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 2
    at Main.main(Main.java:5)`,"With no catch, the JVM prints the stack trace and stops; 'After' never prints. The trace points to line 5."),
P("Multiple Catch Clauses","Handle several exception types with multiple catch blocks.",M(`public class Main {
    public static void main(String[] args) {
        try {
            int n = Integer.parseInt("abc");
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic problem");
        } catch (NumberFormatException e) {
            System.out.println("Invalid number: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Other error");
        }
    }
}`),C,`Invalid number: For input string: "abc"`,"The first matching catch runs. The general Exception catch must come last."),
P("The throw Statement","Demonstrate throw by raising an exception manually.",M(`public class Main {
    public static void main(String[] args) {
        int age = 15;
        try {
            if (age < 18) throw new ArithmeticException("Not eligible to vote");
            System.out.println("Eligible");
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`),C,"Caught: Not eligible to vote","throw creates and raises an exception object on purpose."),
P("throws and Propagation","Demonstrate the throws keyword and how an exception propagates up the call chain.",M(`public class Main {
    static void level2() throws Exception {
        throw new Exception("Problem in level2");
    }
    static void level1() throws Exception {
        level2();
    }
    public static void main(String[] args) {
        try { level1(); }
        catch (Exception e) { System.out.println("Handled in main: " + e.getMessage()); }
    }
}`),C,"Handled in main: Problem in level2","The exception passes from level2 to level1 to main, where it is finally handled."),
P("The finally Block","Demonstrate that finally always executes.",M(`public class Main {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught");
        } finally {
            System.out.println("Finally always runs");
        }
        System.out.println("Program continues");
    }
}`),C,`Caught
Finally always runs
Program continues`,"finally runs whether or not an exception occurs; it is used for cleanup."),
P("User-Defined Exception","Create a custom exception by extending Exception.",M(`class NegativeNumberException extends Exception {
    NegativeNumberException(String msg) { super(msg); }
}

public class Main {
    static void check(int n) throws NegativeNumberException {
        if (n < 0) throw new NegativeNumberException("Negative number: " + n);
        System.out.println("Number is " + n);
    }
    public static void main(String[] args) {
        try {
            check(5);
            check(-3);
        } catch (NegativeNumberException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`),C,`Number is 5
Caught: Negative number: -3`,"A custom exception extends Exception and passes its message to super()."),
P("Student Marks Validation","Throw a custom exception when marks are outside 0-100.",M(`class InvalidMarksException extends Exception {
    InvalidMarksException(String msg) { super(msg); }
}

public class Main {
    static void validate(int m) throws InvalidMarksException {
        if (m < 0 || m > 100) throw new InvalidMarksException("Invalid marks: " + m + " (must be 0-100)");
        System.out.println("Marks " + m + " are valid");
    }
    public static void main(String[] args) {
        int[] marks = {85, 105};
        for (int m : marks) {
            try { validate(m); }
            catch (InvalidMarksException e) { System.out.println(e.getMessage()); }
        }
    }
}`),C,`Marks 85 are valid
Invalid marks: 105 (must be 0-100)`,"The loop validates each mark; the exception is caught inside the loop so it continues."),
P("Combined Exception Application","One application using try, multiple catch, throw, throws and finally.",M(`class LowBalanceException extends Exception {
    LowBalanceException(String msg) { super(msg); }
}

public class Main {
    static void withdraw(double bal, double amt) throws LowBalanceException {
        if (amt > bal) throw new LowBalanceException("Insufficient balance");
        System.out.println("Withdrawn: " + amt);
    }
    public static void main(String[] args) {
        try {
            withdraw(5000, 2000);
            withdraw(5000, 8000);
        } catch (LowBalanceException e) {
            System.out.println("Error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Unexpected error");
        } finally {
            System.out.println("Transaction ended");
        }
    }
}`),C,`Withdrawn: 2000.0
Error: Insufficient balance
Transaction ended`,"All five keywords work together in a small banking example."),
P("InputStream and OutputStream","Demonstrate InputStream and OutputStream.",M(`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        InputStream in = new ByteArrayInputStream(new byte[]{72, 105, 33});
        OutputStream out = new ByteArrayOutputStream();
        int b;
        while ((b = in.read()) != -1) out.write(b);
        System.out.println("Copied: " + out.toString());
    }
}`),C,"Copied: Hi!","No file needed. Bytes 72, 105, 33 are read one by one and written out, giving 'Hi!'."),
P("Read a File with FileInputStream","Read a file byte by byte and display it.",M(`import java.io.*;

public class Main {
    public static void main(String[] args) {
        try (FileInputStream in = new FileInputStream("input.txt")) {
            int b;
            while ((b = in.read()) != -1) System.out.print((char) b);
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`),C,"Hello Java","File setup: create input.txt containing Hello Java in the same folder as Main.java, and run java from that folder."),
P("Write a File with FileOutputStream","Write data to a file and verify its contents.",M(`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        try (FileOutputStream out = new FileOutputStream("output.txt")) {
            out.write("Java Streams".getBytes());
        }
        System.out.println("Data written to output.txt");
        try (FileInputStream in = new FileInputStream("output.txt")) {
            int b;
            System.out.print("File contains: ");
            while ((b = in.read()) != -1) System.out.print((char) b);
            System.out.println();
        }
    }
}`),C,`Data written to output.txt
File contains: Java Streams`,"File setup: none. output.txt is created in the folder you run the program from."),
P("Copy a File","Copy one file to another using byte streams.",M(`import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        int count = 0, b;
        try (FileInputStream in = new FileInputStream("source.txt");
             FileOutputStream out = new FileOutputStream("target.txt")) {
            while ((b = in.read()) != -1) { out.write(b); count++; }
        }
        System.out.println("File copied successfully");
        System.out.println("Bytes copied: " + count);
    }
}`),C,`File copied successfully
Bytes copied: 21`,"File setup: create source.txt containing Byte stream copy demo (21 characters, no trailing newline) next to Main.java. target.txt is created."),
P("Copy an Image with Exception Handling","Copy an image using byte streams and handle FileNotFoundException and IOException with try-catch-finally.",M(`import java.io.*;

public class Main {
    public static void main(String[] args) {
        FileInputStream in = null;
        FileOutputStream out = null;
        try {
            in = new FileInputStream("photo.jpg");
            out = new FileOutputStream("copy.jpg");
            int b;
            while ((b = in.read()) != -1) out.write(b);
            System.out.println("Image copied successfully");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        } finally {
            try {
                if (in != null) in.close();
                if (out != null) out.close();
            } catch (IOException e) {
                System.out.println("Close error");
            }
            System.out.println("Streams closed");
        }
    }
}`),C,`Image copied successfully
Streams closed`,"File setup: put any image named photo.jpg next to Main.java; copy.jpg is created. If photo.jpg is missing you will see 'File not found' instead. FileNotFoundException is caught before IOException because it is the subclass.")];})()},
11:{title:"Character Streams & Multithreading",progs:(()=>{const F=(n,c)=>[{n:n+".java",c}],C=n=>["javac "+n+".java","java "+n],V="Thread execution order may vary slightly when you run it.";return[
P("Read from Keyboard with Reader, Display with Writer","Write a Java program to read characters from the keyboard using Reader and display them on the console using Writer.",F("KeyboardReaderWriter",`import java.io.*;

public class KeyboardReaderWriter {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in);
        Writer writer = new OutputStreamWriter(System.out);
        System.out.println("Type text and end with #:");
        int ch;
        while ((ch = reader.read()) != -1 && ch != '#') {
            writer.write(ch);
        }
        writer.flush();
    }
}`),C("KeyboardReaderWriter"),`Type text and end with #:
Hello Java#
Hello Java`,"Save as KeyboardReaderWriter.java. Reading stops at #. flush() makes sure the Writer prints everything."),
P("Read a File with FileReader","Write a Java program to read the contents of a text file using FileReader and display them on the console.",F("ReadFile",`import java.io.*;

public class ReadFile {
    public static void main(String[] args) {
        try (FileReader fr = new FileReader("input.txt")) {
            int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`),C("ReadFile"),`Welcome to Java Programming.
Character streams are easy to learn.`,"Save as ReadFile.java. Required input file: input.txt in the same folder, containing the two lines shown in the output."),
P("Write Text into a File with FileWriter","Write a Java program to write text into a file using FileWriter.",F("WriteFile",`import java.io.*;
import java.util.Scanner;

public class WriteFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text to write into the file: ");
        String text = sc.nextLine();
        try (FileWriter fw = new FileWriter("output.txt")) {
            fw.write(text);
            System.out.println("Text written to output.txt successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`),C("WriteFile"),`Enter text to write into the file: Java is fun and easy
Text written to output.txt successfully.`,"Save as WriteFile.java. No input file is needed. output.txt is created in the same folder; open it to see the text."),
P("Copy a Text File with FileReader and FileWriter","Write a Java program to copy the contents of one text file into another using FileReader and FileWriter.",F("CopyFile",`import java.io.*;
import java.util.Scanner;

public class CopyFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter source file name: ");
        String src = sc.nextLine();
        System.out.print("Enter destination file name: ");
        String dest = sc.nextLine();
        try (FileReader fr = new FileReader(src);
             FileWriter fw = new FileWriter(dest)) {
            int ch, count = 0;
            while ((ch = fr.read()) != -1) {
                fw.write(ch);
                count++;
            }
            System.out.println("File copied successfully.");
            System.out.println("Characters copied: " + count);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`),C("CopyFile"),`Enter source file name: source.txt
Enter destination file name: copy.txt
File copied successfully.
Characters copied: 23`,"Save as CopyFile.java. Required input file: source.txt containing Hello from source file. (23 characters, no new line at the end). copy.txt is created."),
P("Count Characters, Words and Lines in a File","Write a Java program to count the number of characters, words, and lines in a text file using character streams.",F("CountFile",`import java.io.*;
import java.util.Scanner;

public class CountFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.nextLine();
        try (FileReader fr = new FileReader(name)) {
            int ch, last = -1;
            int chars = 0, words = 0, lines = 0;
            boolean inWord = false;
            while ((ch = fr.read()) != -1) {
                last = ch;
                if (ch == '\\n') lines++;
                else if (ch != '\\r') chars++;
                if (ch == ' ' || ch == '\\n' || ch == '\\t' || ch == '\\r') {
                    inWord = false;
                } else if (!inWord) {
                    inWord = true;
                    words++;
                }
            }
            if (last != -1 && last != '\\n') lines++;
            System.out.println("Characters: " + chars);
            System.out.println("Words: " + words);
            System.out.println("Lines: " + lines);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`),C("CountFile"),`Enter file name: sample.txt
Characters: 28
Words: 7
Lines: 3`,"Save as CountFile.java. Required input file: sample.txt with three lines: Java is fun / Welcome to lab / End (no new line after End). Characters do not include line breaks."),
P("Main Thread: Name, Priority and State","Write a Java program to demonstrate the Main Thread and display its name, priority, and state.",F("MainThreadDemo",`public class MainThreadDemo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        System.out.println("Thread Name: " + t.getName());
        System.out.println("Priority: " + t.getPriority());
        System.out.println("State: " + t.getState());
    }
}`),C("MainThreadDemo"),`Thread Name: main
Priority: 5
State: RUNNABLE`,"Save as MainThreadDemo.java. Every program starts with the main thread, whose default priority is 5."),
P("Create a Thread by Extending Thread","Write a Java program to create a thread by extending the Thread class.",F("ThreadDemo",`class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " - count " + i);
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        System.out.println("Starting the thread...");
        t.start();
    }
}`),C("ThreadDemo"),`Starting the thread...
Thread-0 - count 1
Thread-0 - count 2
Thread-0 - count 3
Thread-0 - count 4
Thread-0 - count 5`,"Save as ThreadDemo.java. MyThread extends Thread and its work is written in run(). start() creates the new thread and calls run()."),
P("Create a Thread by Implementing Runnable","Write a Java program to create a thread by implementing the Runnable interface.",F("RunnableDemo",`class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " is running: step " + i);
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        MyRunnable task = new MyRunnable();
        Thread t = new Thread(task, "Worker");
        System.out.println("Starting the Runnable thread...");
        t.start();
    }
}`),C("RunnableDemo"),`Starting the Runnable thread...
Worker is running: step 1
Worker is running: step 2
Worker is running: step 3
Worker is running: step 4
Worker is running: step 5`,"Save as RunnableDemo.java. The task class implements Runnable, and the Runnable object is passed to a Thread, which is then started."),
P("Multiple Threads Running Concurrently","Write a Java program to create multiple threads and demonstrate their concurrent execution.",F("MultiThreadDemo",`class Worker extends Thread {
    Worker(String name) { super(name); }
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " - step " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        Worker a = new Worker("Thread A");
        Worker b = new Worker("Thread B");
        Worker c = new Worker("Thread C");
        a.start();
        b.start();
        c.start();
    }
}`),C("MultiThreadDemo"),`Thread A - step 1
Thread B - step 1
Thread C - step 1
Thread A - step 2
Thread C - step 2
Thread B - step 2
Thread B - step 3
Thread A - step 3
Thread C - step 3`,"Save as MultiThreadDemo.java. The three threads run at the same time and sleep(500) lets them take turns. "+V+" The lines inside each thread stay in order."),
P("isAlive() Method","Write a Java program to demonstrate the use of isAlive() method to check whether a thread is running.",F("IsAliveDemo",`class MyThread extends Thread {
    public void run() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println("Thread work finished.");
    }
}

public class IsAliveDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        System.out.println("Before start: isAlive = " + t.isAlive());
        t.start();
        System.out.println("After start: isAlive = " + t.isAlive());
        t.join();
        System.out.println("After completion: isAlive = " + t.isAlive());
    }
}`),C("IsAliveDemo"),`Before start: isAlive = false
After start: isAlive = true
Thread work finished.
After completion: isAlive = false`,"Save as IsAliveDemo.java. isAlive() is false before start(), true while the thread is running, and false again once it finishes."),
P("join() Method","Write a Java program to demonstrate the use of join() method to make one thread wait for another thread to complete.",F("JoinDemo",`class Worker extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
            System.out.println("Worker: step " + i);
        }
    }
}

public class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        Worker w = new Worker();
        System.out.println("Main: starting worker thread");
        w.start();
        System.out.println("Main: waiting using join()...");
        w.join();
        System.out.println("Main: worker finished, main continues");
    }
}`),C("JoinDemo"),`Main: starting worker thread
Main: waiting using join()...
Worker: step 1
Worker: step 2
Worker: step 3
Main: worker finished, main continues`,"Save as JoinDemo.java. join() makes the main thread wait, so the last line prints only after the worker has finished."),
P("Multiple Threads with isAlive() and join()","Write a Java program to create multiple threads and use isAlive() and join() to control their execution order.",F("OrderDemo",`class Task extends Thread {
    Task(String name) { super(name); }
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " - step " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class OrderDemo {
    public static void main(String[] args) throws InterruptedException {
        Task t1 = new Task("Thread-A");
        Task t2 = new Task("Thread-B");
        Task t3 = new Task("Thread-C");

        System.out.println("t1 alive before start: " + t1.isAlive());
        t1.start();
        t1.join();
        System.out.println("t1 alive after join: " + t1.isAlive());

        t2.start();
        t2.join();
        System.out.println("t2 alive after join: " + t2.isAlive());

        t3.start();
        t3.join();
        System.out.println("t3 alive after join: " + t3.isAlive());

        System.out.println("All threads finished in order A, B, C");
    }
}`),C("OrderDemo"),`t1 alive before start: false
Thread-A - step 1
Thread-A - step 2
Thread-A - step 3
t1 alive after join: false
Thread-B - step 1
Thread-B - step 2
Thread-B - step 3
t2 alive after join: false
Thread-C - step 1
Thread-C - step 2
Thread-C - step 3
t3 alive after join: false
All threads finished in order A, B, C`,"Save as OrderDemo.java. Each thread is started and then joined before the next one starts, so the order is always A, B, C. isAlive() is false after each join. Unlike Program 09, this output does not change from run to run.")];})()}
};
const $=s=>document.querySelector(s),app=$('#app'),esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const seen=JSON.parse(localStorage.getItem('seen')||'{}');
const root=document.documentElement;root.dataset.theme=localStorage.getItem('theme')||'light';
function themeIcon(){$('#theme').textContent=root.dataset.theme==='dark'?'☀️':'🌙'}
$('#theme').onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);themeIcon();tint(window.curW)};
themeIcon();
$('#nav').innerHTML='<a href="#/home">Home</a><a href="#/profile">Profile</a>'+Object.keys(WEEKS).map(w=>`<a href="#/w/${w}">Week ${w}</a>`).join('');
const count=w=>(WEEKS[w].progs||[]).length;
function progress(){let t=0,d=0;for(const w in WEEKS)(WEEKS[w].progs||[]).forEach((_,i)=>{t++;if(seen[w+'-'+i])d++});$('#bar').style.width=(t?d/t*100:0)+'%'}
function home(){app.innerHTML=`<section class="hero"><h1>Welcome to my Java Record ${CUP}</h1><a class="btn" href="#/w/9">Open latest week</a> <a class="btn alt" href="#/profile">About me</a></section><div class=\"profile mini\"><img src=\"assets/profile.png\" alt=\"J. Susmitha\"><dl><dt>Name</dt><dd>J. Susmitha</dd><dt>Roll number</dt><dd>25EU02079</dd><dt>Year / Branch</dt><dd>II Year · AI &amp; ML · Section B</dd><dt>Subject</dt><dd>Java Programming</dd></dl></div><div class="stats"><div><b>${Object.keys(WEEKS).length}</b>weeks</div><div><b>${Object.values(WEEKS).reduce((t,x)=>t+(x.progs?x.progs.length:0),0)}</b>programs so far</div></div><div class="grid">${Object.keys(WEEKS).map(w=>{const x=WEEKS[w];return `<a class="wk ${x.progs?'done':''}" href="#/w/${w}"><b>Week ${w}</b><small>${x.title}</small><small>${x.progs?count(w)+' programs':x.none?'No tasks':x.table?'Comparison table':'Coming soon'}</small></a>`}).join('')}</div>`}
function profile(){app.innerHTML=`<h1>My Profile</h1><div class="profile"><img src="assets/profile.png" alt="J. Susmitha"><dl><dt>Name</dt><dd>J. Susmitha</dd><dt>Roll number</dt><dd>25EU02079</dd><dt>Year</dt><dd>II Year</dd><dt>Branch</dt><dd>AI &amp; ML</dd><dt>Section</dt><dd>B</dd><dt>Subject</dt><dd>Java Programming</dd></dl></div>`}
function tbl(t){return `<div class="tw"><table><thead><tr>${t.cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${t.rows.map((r,i)=>`<tr>${r.map((c,j)=>`<td>${j?c:(i+1)+'. '+c}</td>`).join('')}</tr>`).join('')}</tbody></table></div><h2>Summary</h2><div class="grid">${t.summary.map(x=>`<div class="wk"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}</div>`}
function week(w){const x=WEEKS[w];if(!x)return home();let h=`<h1>Week ${w}</h1><h2>${x.title}</h2>`;
if(x.none)h+='<p class="q">No programming tasks were assigned this week.</p>';
else if(x.table)h+=tbl(x.table);
else if(x.todo)h+='<p class="q">The programs for this week haven\'t been added yet. Send me the questions and I\'ll add them in the same format as Week 9.</p>';
else h+=`<div class="list">${x.progs.map((p,i)=>`<a class="${seen[w+'-'+i]?'v':''}" href="#/w/${w}/${i+1}"><b>Program ${i+1}</b> · ${p.t}</a>`).join('')}</div>`;app.innerHTML=h}
function prog(w,n){const ps=WEEKS[w].progs,i=n-1,p=ps[i];seen[w+'-'+i]=1;localStorage.setItem('seen',JSON.stringify(seen));progress();
const nb=(j,l)=>ps[j]?`<a href="#/w/${w}/${j+1}"><small>${l}</small>${ps[j].t}</a>`:`<a href="#/w/${w}"><small>${l==='Previous'?'Back to':'Finished'}</small>Week ${w} overview</a>`;
app.innerHTML=`<small>Week ${w} · Program ${n} of ${ps.length}</small><h1>${p.t}</h1><div class="q"><b>Question:</b> ${p.q}</div>`+
p.files.map((f,k)=>`<div class="file"><span>${f.n}</span><button data-k="${k}">Copy</button></div><pre>${esc(f.c)}</pre>`).join('')+
`<div class="term"><div class="h"><span>Command Prompt</span><button id="re">▶ Replay</button></div><pre id="o"></pre></div><div class="q"><b>Explanation:</b> ${p.note}</div><div class="pn">${nb(i-1,'Previous')}${nb(i+1,'Next')}</div>`;
document.querySelectorAll('.file button').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(p.files[b.dataset.k].c);b.textContent='Copied';setTimeout(()=>b.textContent='Copy',1200)});
const run=()=>{const full=p.cmds.map(c=>'C:\\Java>'+c).join('\n')+'\n'+p.out+'\n\nC:\\Java>',o=$('#o');let k=0;clearInterval(window.tm);window.tm=setInterval(()=>{o.textContent=full.slice(0,k+=4);if(k>full.length)clearInterval(window.tm)},12)};
$('#re').onclick=run;run()}
function route(){const [,a,w,n]=location.hash.split('/');window.curW=a==='w'?+w:0;tint(window.curW);clearInterval(window.tm);window.scrollTo(0,0);
document.querySelectorAll('nav a').forEach(l=>l.classList.toggle('on',l.hash===(a==='w'?'#/w/'+w:'#/'+(a||'home'))));
if(a==='profile')profile();else if(a==='w'&&WEEKS[w]){n&&WEEKS[w].progs&&WEEKS[w].progs[n-1]?prog(w,+n):week(w)}else home()}
addEventListener('hashchange',route);
addEventListener('keydown',e=>{const l=document.querySelectorAll('.pn a');if(!l.length)return;if(e.key==='ArrowLeft')l[0].click();if(e.key==='ArrowRight')l[1].click()});
progress();route();

const WL=['#e0533d','#d98a00','#6aa00f','#1f9d55','#0f8f8f','#1f86d1','#d6336c','#ea6a0a','#12936f','#c92a2a'];
const WD=['#ff7f68','#ffb627','#9bd13a','#4cd689','#35d0cf','#5db4ff','#ff6f9d','#ff9a45','#3fe0b5','#ff6b6b'];
function tint(w){root.style.removeProperty('--acc')}
tint(window.curW);

const PALS=['violet','ocean','sunset','mint','rose'];
function setPal(k){root.dataset.palette=k;localStorage.setItem('pal2',k);$('#pal').title='Colours: '+k+' (click to change)'}
$('#pal').onclick=()=>setPal(PALS[(PALS.indexOf(root.dataset.palette)+1)%PALS.length]);
setPal(localStorage.getItem('pal2')||'violet');
