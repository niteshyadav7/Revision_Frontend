import java.util.Scanner;;
public class numberConvert {
    
   public static int tenBaseToAnyBase(int num,int base){
    int rv=0;
    int p=1;
    while(num>0){
        int rem=num%base;
        num/=base;
        rv+=rem*p;
        p=p*10;
    }
    return rv;
   }
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        int num=sc.nextInt();
        int base=sc.nextInt();
        // System.out.println(anyBase(num, base));
        // anyBase(num, base);
        int ans =tenBaseToAnyBase(num, base);
        System.out.println(ans);
}
}
