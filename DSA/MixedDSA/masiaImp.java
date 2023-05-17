package DSA.MixedDSA;

import java.util.*;

public class masiaImp {

    public static void searchNumber(int arr[], int x) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                count++;
                break;
            }
        }
        if (count > 0) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }

    public static void countGreaterBothSide(int arr[]){
        int count=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
                count++;
            }
        }
        System.out.println(count);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        // int x = sc.nextInt();
        int input[] = new int[size];
        for (int i = 0; i < input.length; i++) {
            input[i] = sc.nextInt();
        }
        // Search A Number. Wheather it is Present or Not .
        // searchNumber(input, x);
        countGreaterBothSide(input);
    }
}
