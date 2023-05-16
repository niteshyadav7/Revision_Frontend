package DSA.MixedDSA;

import java.util.Scanner;

public class Pattern02 {

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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        // oddSeries(num);
        // evenSeries(num);
        oddPattern(num);
    }

}
