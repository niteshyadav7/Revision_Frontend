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

## 6. Pattern Problems

```
 // SQUARE PRINT:
    // *****
    // *****
    // *****
    // *****
    // *****
    public static void starSquare(int num) {
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= num; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    // TRIANGULAR PRINT:

    // *
    // **
    // ***
    // ****
    // *****
    public static void starTriangle(int num) {
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    // *****
    // ****
    // ***
    // **
    // *
    public static void starInvertedTriangle(int num) {
        for (int i = num; i > 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
```

## 7. Pattern type second

```
    // 1
    // 1 2 3
    // 1 2 3 4 5
    public static void oddSeries(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    // 1 2
    // 1 2 3 4
    // 1 2 3 4 5 6
    public static void evenSeries(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= 2 * i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    // 1 2 3 4 5 6 7 8 9
    // 1 2 3 4 5 6 7
    // 1 2 3 4 5
    // 1 2 3
    // 1
    public static void oddPattern(int n) {
        for (int i = n; i > 0; i--) {
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
```

## 8. Print Pattern Alphabetical Order.

```
   // a
    // ab
    // abc
    // abcd
    // abcde
    public static void alphabaticalTrinagular(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print((char) (96 + j));
            }
            System.out.println();
        }
    }
```

## 9. Print Pattern With spaces

```
//      *
//     **
//    ***
//   ****
//  *****
    public static void spacesPattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int k = 1; k <= n - i; k++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }


   
    // IMPORTANT QUESTION:
//      *
//     ***
//    *****
//   *******
//  *********
    public static void trianglePattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int k = 1; k <= n - i; k++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for (int j = 2; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

```
