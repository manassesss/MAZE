import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //variables
        Scanner sc = new Scanner(System.in);
        int number =0;
        //input
        System.out.println("please enter a number :");
        number = sc.nextInt();
        System.out.println("Your input :"+number);
        berechneQuersumme(number);

    }

    public static void berechneQuersumme(int uebergebeneZahl) {
        int number = 0;
        while (0 != uebergebeneZahl) {

            number = number + (uebergebeneZahl % 10);

            uebergebeneZahl = uebergebeneZahl / 10;
        }
        //output der quersumme :
        System.out.println(" your checksum : "+number);
    }
}
