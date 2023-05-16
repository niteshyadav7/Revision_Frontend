package DSA.MixedDSA;

import java.util.Scanner;

public class Pattern03 {
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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        alphabaticalTrinagular(num);
    }
}
