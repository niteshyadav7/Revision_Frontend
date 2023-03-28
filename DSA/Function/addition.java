public class addition {

    public static int addition(int n1, int n2, int b) {
        int rv = 0;
        int c = 0;
        int p = 1;
        while (n1 > 0 || n2 > 0 || c > 0) {
            int d1 = n1 % 10;
            int d2 = n2 % 10;
            n1 /= 10;
            n2 /= 10;

            int d = d1 + d2 + c;
            c = d / b;
            d = d % b;
          

            rv += d * p;
            p *= 10;
        }
        return rv;
    }

    public static void main(String[] args) {
        int n1 = 236;
        int n2 = 754;
        int b = 8;
        int ans = addition(n1, n2, b);
        System.out.println(ans);
    }
}
