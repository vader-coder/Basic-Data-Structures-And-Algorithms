import java.util.*;

public class StructureUse {

   /* This is my first java program.
    * This will print 'Hello World' as the output
    */
    public static <T> void print(T item) {
        System.out.println(item);
    } 
    public static void printC(Collection coll) {
        Iterator it = coll.iterator();
        while(it.hasNext()) {
            System.out.println(it.next());
        }
    }
    public static void printAL(ArrayList al) {
        print("ArrayList");
        for (int i=0; i<al.size(); i++) {
            print(al.get(i));
        }
    }
    public static void arraylist() {
        //https://www.tutorialspoint.com/java/java_arraylist_class.htm
        ArrayList al = new ArrayList();//ArrayList<int> would limit the type.
        al.add(1);
        al.add(2);
        al.add("two");
        printAL(al);
        al.remove(2);//can remove by index or by item
        printAL(al);
    }
    public static void linkedList() {
        //https://www.tutorialspoint.com/java/java_linkedlist_class.htm
        print("linked list");
        LinkedList ll = new LinkedList();
        ll.add("ll");
        print(ll.remove());
        ll.add("ll");
        ll.add("ll2");
        printC(ll);
    }
    public static void main(String []args) {
        System.out.println("Hello World"); // prints Hello World
        arraylist();
        linkedList();
    }
}
