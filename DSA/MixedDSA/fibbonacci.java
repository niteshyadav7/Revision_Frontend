package DSA.MixedDSA;

import java.util.Scanner;

public class fibbonacci {
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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        printFibbo(num);
    }
}
