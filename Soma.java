import java.util.Scanner;

public class Soma {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite um numero: ");
        int num = sc.nextInt();
        
        int soma = 0;
        
        for (int i = 1; i <= num; i++) {
            soma += i;
        }
        
        System.out.println("A soma de 1 a " + num + " eh igual a " + soma);
        
        sc.close();
    }
}