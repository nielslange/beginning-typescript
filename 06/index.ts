// Void, Null, Undefined
// const logger1 = (log: unknown): void => console.log(log.toUpperCase());
// logger1("Laracast rules!");
// logger1({ foo: "bar" });

// const logger2 = (log: any): void => console.log(log.toUpperCase());
// logger2("Laracast rules!");
// logger2({ foo: "bar" });

// const logger3 = (log: unknown): void => {
//   if (typeof log === "string") {
//     console.log(log.toUpperCase());
//   } else {
//     console.log(log);
//   }
// };
// logger3("Laracast rules!");
// logger3({ foo: "bar" });

// type anyType = { prop1: any; prop2: any };
// const anyFoo: anyType = {
//   prop1: "hello",
//   prop2: { foo: "bar" },
// };
// console.log(anyFoo.prop2.foo.bar.boo.far);

// type unknownType = { prop1: unknown; prop2: unknown };
// const unknownFoo: unknownType = {
//   prop1: "hello",
//   prop2: { foo: "bar" },
// };

// if (
//   unknownFoo.prop2 && // check is not undefined
//   typeof unknownFoo.prop2 === "object" && // check is an object
//   Object.hasOwnProperty.call(unknownFoo.prop2, "foo")
// ) {
//   console.log((unknownFoo.prop2 as { foo: unknown }).foo);
// }

const canvas = document.getElementById("my_canvas") as HTMLCanvasElement;
