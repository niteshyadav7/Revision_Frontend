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
## 2. Print all  Prime Number 
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