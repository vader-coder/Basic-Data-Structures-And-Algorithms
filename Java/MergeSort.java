import java.util.ArrayList;

public class MergeSort {
    
    public static ArrayList<Integer> merge(ArrayList<Integer> leftArray, ArrayList<Integer>rightArray) {
        ArrayList<Integer> returnArray = new ArrayList<>();

        int leftIndex = 0;
        int rightIndex = 0;

        while (leftIndex < leftArray.size() && rightIndex < rightArray.size()) {
            if (leftArray.get(leftIndex) <= rightArray.get(rightIndex)) {
                returnArray.add(leftArray.get(leftIndex));
                leftIndex++;
            } else {
                returnArray.add(rightArray.get(rightIndex));
                rightIndex++;
            }
        }
        while (leftIndex < leftArray.size()) {
            returnArray.add(leftArray.get(leftIndex));
            leftIndex++;
        }
        while (rightIndex < rightArray.size()) {
            returnArray.add(rightArray.get(rightIndex));
            rightIndex++;
        }

        return returnArray;
    }

    public static ArrayList<Integer> sort(ArrayList<Integer> array) {
        if (array.size() <= 1) {
            return array;
        } else if (array.size() == 2) {
            if (array.get(0) <= array.get(1)) {
                return array;
            } else {
                ArrayList<Integer> returnArray = new ArrayList<Integer>();
                returnArray.add(array.get(1));
                returnArray.add(array.get(0));
                return returnArray;
            }
        }
        int midpoint = array.size() / 2;
        ArrayList<Integer> leftArray = MergeSort.sort(new ArrayList<Integer>(array.subList(0, midpoint)));
        ArrayList<Integer> rightArray = MergeSort.sort(new ArrayList<Integer>(array.subList(midpoint, array.size())));
        return MergeSort.merge(leftArray, rightArray);
    }

    public static ArrayList<Integer> copy(int[] array) {
        ArrayList<Integer> arrayList = new ArrayList<>();

        for (int i = 0; i < array.length; i++) {
            arrayList.add(array[i]);
        }
        
        return arrayList;
    }
    
    public static void main(String[] args) {
        // test merge: 

        int[] leftArray = {0, 2, 4};
        ArrayList<Integer> leftArrayList = MergeSort.copy(leftArray);

        int[] rightArray = {1, 3, 5};
        ArrayList<Integer> rightArrayList = MergeSort.copy(rightArray);

        ArrayList<Integer> sortedArray = MergeSort.merge(leftArrayList, rightArrayList);
        System.out.println(sortedArray);

        // test merge-sort:
        int[] testArray = {5, 4, 3, 2, 1, 0};
        ArrayList<Integer> solution = MergeSort.sort(MergeSort.copy(testArray));
        System.out.println(solution);
    }
}