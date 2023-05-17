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

## 10. Print X in Pattern

```
// *   *
//  * *
//   *
//  * *
// *   *
    public static void printX(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == j || i + j == 6) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }

            }
            System.out.println();
        }
    }




// ****
// *  *
// *  *
// ****
    public static void printSquare(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
```

## 11.Find the Digit Frequency of a Number.

```
  public static int digitFrequencyOfNumber(int n, int x) {
        int count = 0;
        while (n != 0) {
            int rem = n % 10;
            n = n / 10;
            if (rem == x) {
                count++;
            }
        }
        // System.out.println(count);
        return count;
    }



       public static int AnyToD(int num, int base) {
        int ans = 0;
        int p = 1;
        while (num != 0) {
            int rem = num % 10;
            num /= 10;
            ans += rem * p;
            p = p * base;
        }
        return ans;
    }
```

## 12. How to take Input in given Array.

```
 public static int[] takeInput() {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int input[] = new int[size];
        for (int i = 0; i < size; i++) {
            input[i] = sc.nextInt();
        }
        return input;
    }
```
## 13.Masai School Questions :
```

    public static void searchNumber(int arr[], int x) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                count++;
                break;
            }
        }
        if (count > 0) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }

    public static void countGreaterBothSide(int arr[]){
        int count=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
                count++;
            }
        }
        System.out.println(count);
    }
```