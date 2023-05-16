package DSA.MixedDSA;

import java.util.Scanner;

public class conversion {
    public static int DToAny(int num, int base) {
        int ans = 0;
        int p = 1;
        while (num != 0) {
            int rem = num % base;
            num /= base;
            ans += rem * p;
            p = p * 10;
        }
        return ans;
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

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int base = sc.nextInt();
        // int ans1= DToAny(num, base);
        int ans2 = AnyToD(num, base);
        System.out.println(ans2);
        // System.out.println(ans);
    }
}
