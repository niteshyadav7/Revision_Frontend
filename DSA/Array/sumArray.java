import java.util.Scanner;

import DSA.Array.sum;

public class sumArray {

    public static int[] takeInput() {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] input = new int[size];
        for (int i = 0; i < size; i++) {
            input[i] = sc.nextInt();
        }
        return input;

    }

    public static void print(int arr[]) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println(sum);
    }

    public static void main(String[] args) {
        int[] ans = takeInput();
        print(ans);
    }
}
