public class unique {

    public static void print(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            Boolean isUnique = true;
            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                System.out.println(arr[i] + " ");
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 2, 3, 4, 4 };
        print(arr);
    }
}
