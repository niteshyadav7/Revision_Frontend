package DSA.MixedDSA;

import java.util.Scanner;

public class InputTaking {

    public static int[] takeInput() {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int input[] = new int[size];
        for (int i = 0; i < size; i++) {
            input[i] = sc.nextInt();
        }
        return input;
    }

    public static void print(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {
        int arr[] = takeInput();
        // System.out.println(arr);
        print(arr);
    }
}
