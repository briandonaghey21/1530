import java.util.ArrayList;
import java.util.Scanner;

public class scriptCopy {

     ArrayList<String> xData = new ArrayList<>();
     ArrayList<Integer> yData = new ArrayList<>();
     Integer totalSpent = 0;

    public void main_driver(){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your budget: ");
        Integer userBudget = scanner.nextInt();
        if (userBudget < 0) {
            System.out.println("Please enter a valid budget.");
            scanner.close();
            return;
        }

        while (true) {
            System.out.print("Enter item name ('quit' = exit): ");
            String itemName = scanner.next();
            if (itemName.equals("quit")) {
                break;
            }

            System.out.print("Enter item price: ");
            Integer itemPrice = scanner.nextInt();
            if (itemPrice < 0) {
                System.out.println("Positive Price Required");
                continue;
            }

            Integer remainingBudget = userBudget - totalSpent;
            if (itemPrice > remainingBudget) {
                System.out.println("This would surpass budget");
                continue;
            }

            totalSpent += itemPrice;
            remainingBudget -= itemPrice;
            System.out.println("Remaining budget: $" + remainingBudget);

            xData.add(itemName);
            yData.add(itemPrice);
        }

        scanner.close();
    }
}
