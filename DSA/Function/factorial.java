import java.util.Scanner;

public class factorial {

    public static int sum(int a, int b) {
        int sum = a + b;
        return sum;
    }
    public static void printName(){
        System.out.println("Hello my name is Nitesh Yadav!");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();
        printName();
        int ans = sum(2, 3);
        System.out.println(ans);
    }
}
