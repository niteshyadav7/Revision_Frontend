import java.util.Scanner;

public class digitFrequency {

    public static int digitFrequency(int num, int dig) {
        int count = 0;
        while (num > 0) {
            int rem = num % 10;
            if (rem == dig) {
                count++;
            }
            num = num / 10;
        }
        return count;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int dig = sc.nextInt();
        int ans = digitFrequency(num, dig);
        System.out.println(ans);
    }
}
