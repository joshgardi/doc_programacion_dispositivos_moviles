// Concepto básico: Tipos de datos primitivos , 
//Se definen variables con tipos numéricos, de cadena y booleanos para almacenar valores específicos.
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;


// Concepto básico: Tipos de datos compuestos, Se utiliza un array para almacenar una 
//lista de números y un objeto para representar una persona con propiedades de nombre y edad.
let numbers: number[] = [1, 2, 3, 4, 5];
let person: { name: string; age: number } = { name: "John", age: 25 };


// Concepto básico: Tipos de datos any y unknown,  Se definen variables con los tipos "any" y "unknown",
//que permiten almacenar cualquier tipo de dato. Sin embargo, "unknown" es más seguro que "any" 
//ya que no permite realizar operaciones sin verificar el tipo de dato.
let variableAny: any = "Hello";
let variableUnknown: unknown = 10;

// Concepto básico: Inferencia de tipos
let inferredType = "Hello TypeScript"; // TypeScript infiere el tipo de dato string


// Concepto básico: Tipos literales , Se utiliza el tipo literal para la variable "direction", 
//que solo puede tener uno de los cuatro valores específicos: "left", "right", "up" o "down".
let direction: "left" | "right" | "up" | "down" = "right";


// Concepto básico: Union Types , La variable "phoneNumber" puede almacenar tanto números como
//cadenas de texto, ya que se especifica como una unión de tipos "number | string".
let phoneNumber: number | string = 1234567890;


// Concepto básico: Type Aliases, Se define un alias de tipo llamado "Point" para representar un objeto
//con propiedades "x" e "y", y se utiliza para declarar una variable "point".
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };


// Concepto básico: Type Assertion, Se utiliza la sintaxis de "type assertion" para decirle a TypeScript que 
//la variable "value" es de tipo cadena, a pesar de haberse declarado como "unknown". Esto permite acceder 
//a las propiedades y métodos propios de las cadenas.
let value: unknown = "Hello TypeScript";
let length: number = (value as string).length;


// Concepto básico: Narrowing Types ,declare  la variable "userType" con un tipo de cadena específico, 
//y se realiza una verificación condicional para mostrar un mensaje de bienvenida diferente según el valor de "userType".
let userType: "admin" | "user" = "admin";
if (userType === "admin") {
  console.log("Welcome, admin!");
} else {
  console.log("Welcome, user!");
}



// Concepto básico: Functions , en este caso defini una función "greet" 
//que recibe un parámetro de tipo cadena y muestra un saludo en la consola.
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("John");


// Concepto básico: Interfaces , Se define una interfaz "Person" que especifica 
//las propiedades necesarias para representar a una persona, y se utiliza esta 
//interfaz para tipar la función "displayPerson" y la variable "john".
interface Person {
  name: string;
  age: number;
}

function displayPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

let john: Person = { name: "John", age: 25 };
displayPerson(john);

// Concepto básico: Clases,  Se crea una clase "Car" con un constructor y un método "startEngine". 
//Luego, se crea una instancia de la clase y se llama al método para mostrar un mensaje en la consola.
class Car {
  constructor(public brand: string, public model: string) {}

  startEngine(): void {
    console.log(`Starting the engine of ${this.brand} ${this.model}`);
  }
}

let myCar = new Car("Toyota", "Camry");
myCar.startEngine();



// Concepto básico: Enumeraciones,  Se define una enumeración "Color" que contiene tres valores: "Red", "Green" y "Blue".
//Se declara una variable "selectedColor" de tipo "Color" y se muestra el nombre del color seleccionado en la consola.
enum Color {
  Red,
  Green,
  Blue,
}

let selectedColor: Color = Color.Red;
console.log(`Selected color: ${Color[selectedColor]}`);


// Concepto básico: Modificadores de acceso, Se crea una clase "BankAccount" con un balance privado 
//y métodos para realizar depósitos y retiros. Los métodos acceden al balance de la cuenta y muestran 
//mensajes en la consola según la operación realizada.
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance.");
    }
  }
}

let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);


// Concepto básico: Módulos,Se importa una función "greetPerson" desde otro archivo llamado "g" 
//(cuyo contenido no se ha incluido aquí). Esto permite utilizar esa función en el archivo actual.
import { greetPerson } from "./g
