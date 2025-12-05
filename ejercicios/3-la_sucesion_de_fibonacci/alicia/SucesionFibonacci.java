public class SucesionFibonacci {
    public static void main(String[] args) {
       int a=0;
       int b=1;
        for(int i = 0; i < 50; i ++ ){                                  
            System.out.println(a);
            final int siguiente = a+b;
            a = b;
            b = siguiente;
                   //Ejemplo: 0, 1, 1, 2, 3, 5, 8, 13.
        }
    }
}