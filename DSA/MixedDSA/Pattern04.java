package DSA.MixedDSA;

import java.util.Scanner;

public class Pattern04 {
    // *
    // **
    // ***
    // ****
    // *****
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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        // spacesPattern(num);
        trianglePattern(num);
    }
}
