# Data Structure And Algogithms

## 1. Is a Number Prime or Not?

```
 public static void IsPrimeNumber(int num) {
        int count = 0;
        for (int div = 2; div * div <= num; div++) {
            if (num % div == 0) {
                count++;
                break;
            }
        }
        if (count == 0) {
            System.out.println("PRIME");
        } else {
            System.out.println("NOT PRIME");
        }
    }

```

## 2. Print all Prime Number

```
public static void allPrimeNumber(int low, int high) {
        for (int i = low; i <= high; i++) {
            // System.out.println(i);
            int count = 0;
            for (int j = 2; j * j <= i; j++) {
                if (i % j == 0) {
                    count++;
                    break;
                }
            }
            if (count == 0) {
                System.out.println("PRIME:" + i);
            }
        }
    }

```

## 3.Print all fibonacci Number.

```
 public static void printFibbo(int num) {
        int a = 0;
        int b = 1;
        for (int i = 0; i < num; i++) {
            System.out.println(a);
            int c = a + b;
            a = b;
            b = c;
        }
    }
```

## 4.Count digits

```
 public static void countDigits(int num) {

        int count = 0;
        while (num > 0) {
            num = num / 10;
            count++;
        }
        System.out.println(count);
    }
```

## 5.Write Digits from Right to Left

## IMPORTANT QUESTION:

```
~~~ Right to Left ~~~

 public static void printDigitsR_L(int digit) {
        int temp = digit;
        int nod = 0;
        while (temp != 0) {
            temp = temp / 10;
            nod++;
        }
        int div = (int) Math.pow(10, nod - 1);
        while (div != 0) {
            int q = digit / div;
            System.out.println(q);
            digit = digit % div;
            div = div / 10;
        }
    }

~~~ Left to Right ~~~
 public static void printDigitsL_R(int digit) {
        while (digit != 0) {
            int rem = digit % 10;
            System.out.println(rem);
            digit /= 10;

        }
    }
```
