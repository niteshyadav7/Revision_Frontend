package DSA.MixedDSA;

import java.util.Scanner;

public class Pattern01 {
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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        starSquare(num);
        starTriangle(num);
        starInvertedTriangle(num);
    }
}
