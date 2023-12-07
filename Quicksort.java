import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Quicksort {
    private static List<Integer> desordedNums = new ArrayList<>();
    private static List<Integer> ordedNums = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a quantidade de numeros: ");
        int N = scanner.nextInt();

        makeArray(N);

        System.out.println("Numeros Desordenados: " + desordedNums);
        ordedNums = quicksort(desordedNums);
        System.out.println("Numeros Ordenados: " + ordedNums);

        scanner.close();
    }

    private static void makeArray(int N) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < N; i++) {
            System.out.print("Digite o " + (i + 1) + " numero: ");
            int num = scanner.nextInt();
            desordedNums.add(num);
        }

        scanner.close();
    }

    private static List<Integer> quicksort(List<Integer> array) {
        if (array.size() <= 1) {
            return array;
        }

        int pivot = array.get(0);
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int i = 1; i < array.size(); i++) {
            if (array.get(i) < pivot) {
                left.add(array.get(i));
            } else {
                right.add(array.get(i));
            }
        }

        List<Integer> result = new ArrayList<>();
        result.addAll(quicksort(left));
        result.add(pivot);
        result.addAll(quicksort(right));

        return result;
    }
}