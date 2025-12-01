
import java.util.Arrays;



public class AliciaEsAnagrama {


public static void main(String[] args) {
    String palabra1 = "alicia";
    String palabra2 = "vitela";
    

    if (esAnagrama(palabra1,palabra2)){

        System.out.println("es anagram");
    
    }else{

         System.out.println("no es anagram");
    }

}

    public static boolean esAnagrama (String cadena1, String cadena2) {
        boolean esAnagrama = false;
        cadena1=cadena1.toLowerCase().trim();
        cadena2=cadena2.toLowerCase().trim();
       

        if(cadena1.equals(cadena2) || cadena1.length() != cadena2.length()){
            esAnagrama = false;
        }

        String [] letrasc1 = cadena1.split("");
        Arrays.sort(letrasc1);

        String [] letrasc2 = cadena2.split("");
        Arrays.sort(letrasc2);

        
        if(Arrays.equals(letrasc1, letrasc2)){

            esAnagrama = true;
        
        }
        return esAnagrama;
        
    }

}
