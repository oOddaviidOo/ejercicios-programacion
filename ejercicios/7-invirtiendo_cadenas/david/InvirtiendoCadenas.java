
public class InvirtiendoCadenas {

    public static void main(String[] args) {

        String palabra = "Amli limda";
        String[] caracteresSeparados = palabra.split("");
        String palabraDelReves="";

        for (int i = caracteresSeparados.length; i > 0; i--) {
            palabraDelReves = palabraDelReves.concat(caracteresSeparados[i - 1]);
        }

        System.out.println(palabraDelReves);
    }
}
