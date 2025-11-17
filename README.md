# ১. Interface এবং Type এর মধ্যে পার্থক্য

TypeScript এ interface এবং type alias দুটোই object এর structure নির্ধারণ করতে পারে।
তবে দুটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

## Interface :  সাধারণত Object Structure এর জন্য

```ts
interface User {
  name: string;
  age: number;
}
```

##  Type :  Object + Union + Primitive সবকিছুর জন্য

```ts
type ID = number | string;
type Status = "active" | "inactive";
```

## প্রধান পার্থক্য

### 1. Interface is extendable (re-openable)

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = {
  name: "Mahbub",
  age: 22,
};
```
 দুইটি interface স্বয়ংক্রিয়ভাবে merge হয়।


### 2. Type is NOT reopenable

```ts
type Person = {
  name: string;
};

//  Error : একই নামে আবার type declare করা যাবে না
type Person = {
  age: number;
};
```


### 3. Interface দিয়ে সহজে extends করা যায়

```ts
interface A {
  x: number;
}

interface B extends A {
  y: number;
}
```


### 4. Type Alias দিয়ে union extend করা যায়

```ts
type A = { x: number };
type B = A & { y: number };
```







#  ২. any, unknown এবং never এর পার্থক্য

TypeScript-এ তিনটি বিশেষ টাইপ আছে: any, unknown, এবং never।
এগুলো বোঝা টাইপ-সেফ কোড লেখার জন্য জরুরি।



# 1. `any`  সবচেয়ে flexible কিন্তু সবচেয়ে risky টাইপ

```ts
let value: any = "Hello";
value = 10;
value = true;
value = { a: 1 };

value.toUpperCase(); //  No error
```

`any` মানে TypeScript এর চোখ বন্ধ => ভুল ধরতে পারে না।



# 2. `unknown`  safer any

```ts
let value: unknown = "Hello";

value.toUpperCase();  //  Error

if (typeof value === "string") {
  value.toUpperCase();  //  Safe
}
```
 unknown ব্যবহার করলে TypeScript আপনাকে টাইপ চেক করতে বাধ্য করে।


# 3. `never`  এমন টাইপ যা কখনই return হয় না

### Error-throwing function:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### Infinite loop:

```ts
function loopForever(): never {
  while (true) {}
}
```

`never` মানে হলো function কখনোই শেষ হবে না 



