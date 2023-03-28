public class practiceNum {
    
    public static int anyBaseTo(int num,int base){
        int rv =0;
        int p=1;
        while(num>0){
            int rem=num%10;
            num/=10;
            rv+=rem*p;
            p=p*8;
        }
        return rv;
    }
    
    public static int toAnyBase(int num,int base){
        int rv=0;
        int p=1;
        while(num>0){
            int rem=num%base;
            num/=base;
            rv+=rem*p;
            p*=10;
        }
        return rv;
    }
    public static void main(String[] args) {
        int num=1172;
        int base=10;
        int ans=anyBaseTo(num, base);
        System.out.println(ans);
    }
}
