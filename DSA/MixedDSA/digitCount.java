package DSA.MixedDSA;

import java.util.Scanner;

public class digitCount {
    public static void countDigits(int num) {

        int count = 0;
        while (num > 0) {
            num = num / 10;
            count++;
        }
        System.out.println(count);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        countDigits(num);
    }
}
