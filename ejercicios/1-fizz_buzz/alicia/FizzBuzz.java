
public class FizzBuzz {

    public static void main(String[] args) {
        for (int num = 0; num < 100; num++) {
            if (num % 3 == 0 && num % 5 == 0) {
                System.out.println("fizzbuzz\n");
            } else if (num % 3 == 0) {
                System.out.println("fizz\n");
            } else if (num % 5 == 0) {
                System.out.println("buzz\n");
            } else {
                System.out.println(num + "\n");
            }
        }
    }
}
