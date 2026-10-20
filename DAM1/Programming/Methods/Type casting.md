# ☕ Java — Type Casting

> [!abstract] What is Type Casting? **Type casting** means converting a value from one data type to another.

## 1. Basic Syntax

```java
(int) 5.75   // 5
(double) 5   // 5.0
(float) 10   // 10.0
```

## 2. How `(int)` Works

Example:

```java
Scanner scanner = new Scanner(System.in);

final float height = (int) scanner.nextFloat();

System.out.println(height);
```

If the user enters `5.75`, the output is:

```java
5.0
```

**How it works:**

1. `scanner.nextFloat()` reads `5.75`.
2. `(int)` removes the decimal part → `5`.
3. Java converts `5` back to a `float` → `5.0`.

> [!warning] Important Casting to `int` **does not round** the number. It removes the decimal part.

```java
(int) 5.9    // 5
(int) 5.1    // 5
(int) -5.9   // -5
```

## 3. Casting vs. No Casting

**With casting:**

```java
float number = (int) 7.8f;
System.out.println(number); // 7.0
```

**Without casting:**

```java
float number = 7.8f;
System.out.println(number); // 7.8
```

## 4. Quick Summary

|Code|Result|
|---|---|
|`(int) 4.9`|`4`|
|`(int) 8.2`|`8`|
|`(double) 5`|`5.0`|
|`(float) 3`|`3.0`|

> [!tip] Remember
> 
> - `(int)` removes the decimal part.
> - `int` stores whole numbers.
> - `float` stores decimal numbers.
> - Java can automatically convert an `int` to a `float`.

**Best practice:** If you want to keep the decimal part, don't use `(int)`.

```java
float height = scanner.nextFloat();
```

---
