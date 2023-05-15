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