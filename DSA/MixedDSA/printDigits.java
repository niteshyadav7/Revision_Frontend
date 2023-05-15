package DSA.MixedDSA;

import java.util.Scanner;

public class printDigits {

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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        printDigitsR_L(num);
    }
}
