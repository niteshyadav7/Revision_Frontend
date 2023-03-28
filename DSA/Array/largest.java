package DSA.Array;

public class largest {
    public static void main(String[] args) {
        int []arr={23,45,461,23,657};
        int max=arr[0];
        int index=0;
        for(int i=0;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i];
                index=i;
            }
            System.out.println(i);
            
        }
        System.out.println(max);
        System.out.println(index);
    }
}
