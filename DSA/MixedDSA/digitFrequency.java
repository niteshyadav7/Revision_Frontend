package DSA.MixedDSA;

import java.util.*;

public class digitFrequency {
    public static int digitFrequencyOfNumber(int n, int x) {
        int count = 0;
        while (n != 0) {
            int rem = n % 10;
            n = n / 10;
            if (rem == x) {
                count++;
            }
        }
        // System.out.println(count);
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int x = sc.nextInt();
        int ans = digitFrequencyOfNumber(num, x);
        System.out.println(ans);

    }
}
