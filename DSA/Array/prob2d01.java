package DSA.Array;

import java.util.Scanner;

public class prob2d01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int r1 = sc.nextInt();
        int c1 = sc.nextInt();
        int one[][] = new int[r1][c1];
        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c1; j++)
                one[i][j] = sc.nextInt();
        }

        int r2 = sc.nextInt();
        int c2 = sc.nextInt();
        int two[][] = new int[r2][c2];
        for (int i = 0; i < r2; i++) {
            for (int j = 0; j < c2; j++) {
                two[i][j] = sc.nextInt();
            }
        }

        int pr[][] = new int[r1][c2];
        for (int i = 0; i < pr.length; i++) {
            for (int j = 0; j < pr[0].length; j++) {
                for (int k = 0; k < c1; i++) {
                    pr[i][j] += one[i][k] * two[k][j];
                }
            }
        }

        for (int i = 0; i < pr.length; i++) {
            for (int j = 0; j < pr[i].length; j++) {
                System.out.print(pr[i][j] + " ");
            }
            System.out.println();
        }

        // Scanner scn = new Scanner(System.in);
        // int n = scn.nextInt();
        // int m = scn.nextInt();
        // int arr[][] = new int[n][m];
        // for (int i = 0; i < n; i++) {
        // for (int j = 0; j < m; j++) {
        // arr[i][j] = scn.nextInt();
        // }
        // }
        // for (int i = 0; i < arr.length; i++) {
        // for (int j = 0; j < arr[0].length; j++) {
        // System.out.print(arr[i][j] + " ");
        // }
        // System.out.println();
        // }

        // Scanner scn = new Scanner(System.in);
        // int n = scn.nextInt();
        // int arr[]=new int[n];
        // for(int i=0;i<n;i++){
        // arr[i]=scn.nextInt();
        // }
        // for(int i=0;i<arr.length;i++){
        // System.out.println(arr[i]);
        // }
    }
}