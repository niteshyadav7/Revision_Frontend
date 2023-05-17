package DSA.MixedDSA;

import java.util.*;

public class subArray {
    public static int[] takeInput() {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int input[] = new int[size];
        for (int i = 0; i < input.length; i++) {
            input[i] = sc.nextInt();
        }
        return input;
    }

    public static void presentNum(int arr[]) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 42) {
                count++;
                break;
            }
        }
        if (count > 0) {
            System.out.println("PRESENT");
        }
    }

    public static void main(String[] args) {
        int arr[] = takeInput();
        presentNum(arr);

    }
}
