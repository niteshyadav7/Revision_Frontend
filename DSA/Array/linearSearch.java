import java.util.Scanner;

public class linearSearch {

    // public static int[] takeInput() {
    //     Scanner sc = new Scanner(System.in);
    //     int size = sc.nextInt();
    //     // int x = sc.nextInt();
    //     int input[] = new int[size];
    //     for (int i = 0; i < input.length; i++) {
    //         input[i] = sc.nextInt();
    //     }
    //     return input;
    // }

    // public static void linearSearch(int arr[]) {
    //     int x=5;
    //     for (int i = 0; i < arr.length; i++) {
    //         if (arr[i] == x) {
    //             // return i;
    //             System.out.println(i);
    //         }
    //     }
    //     // return -1;
    // }

    public static void main(String[] args) {
        int []arr ={1,2,3,4};
        // System.out.println(arr[1]);
        for(int i=0;i<arr.length;i++){
            if(arr[i]==3)
            System.out.println(i);
            // return;
        }
    }
}
