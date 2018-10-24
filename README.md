# Funciones Generadoras

La generación de datos de manera secuencial es una tarea que en ocasiones necesitamos realizar cuando escribimos un programa, hasta ahora la única manera de hacerlo en JavaScript era utilizando los ciclos de repetición como for y while. En EcmaScript 6 se ha introducido una nueva característica del lenguaje llamada Generador.

Un generador es un objeto devuelto por una función especial llamada función generadora, la cual contiene la lógica necesaria para que el generador produzca la secuencia de datos que necesitamos.

```javascript
function* gen() {
  yield 1
  yield 2
  yield 3
}

var g = gen()

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next()) // undefined
```

## Uso del generador

Ahora veamos de cerca el comportamiento del código: después de declarar la función gen obtenemos el objeto generador a partir de la función, nota que el cuerpo de la función no se ejecuta.

Es hasta que llamamos al método next que se empieza a ejecutar, y devuelve el valor de la próxima sentencia yield, en este caso 1. Y allí se detiene, las demás instrucciones no son ejecutadas, hasta que volvamos a llamar a next.

La característica más importante de este tipo de funciones es que pueden recordar el contexto de la ejecución en que se encontraban previamente. En el ejemplo cuando queramos acceder al siguiente valor, la función continuará a partir de yield 2;, y así sucesivamente hasta que se acaben los valores. Cuando hemos agotado la secuencia, el generador regresa undefined.

El resultado de llamar al método next es un objeto con dos propiedades:
value: valor actual del generador
done: booleano que indica si ya termino la secuencia

[Ver Referencia](http://www.enrique7mc.com/2016/01/un-vistazo-a-los-generadores-en-es6/)
