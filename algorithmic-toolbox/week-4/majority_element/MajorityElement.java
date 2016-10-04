import java.util.*;
import java.io.*;

public class Main {
    private static int getFrequency(int[] a, int majorityElement) {
        int sum = 0;

        for (int i = 0; i < a.length; i++) {
            if (a[i] == majorityElement) {
                sum++;
            }
        }

        return sum;
    }

    private static int getMajorityElement(int[] a, int left, int right) {
        // empty array
        if (left == right) {
            return -1;
        }

        // one element in array
        if (left + 1 == right) {
            return a[left];
        }

        int middle = (int) Math.floor((left + right) / 2);

        int leftMajorityElement = getMajorityElement(a, left, middle);
        int rightMajorityElement = getMajorityElement(a, middle, right);

        if (leftMajorityElement == rightMajorityElement) {
            return leftMajorityElement;
        }

        int frequencyOfLeftMajorElement = getFrequency(a, leftMajorityElement);
        int frequencyOfRightMajorElement = getFrequency(a, rightMajorityElement);

        if (frequencyOfLeftMajorElement > (right - left) / 2) {
            return leftMajorityElement;
        }

        if (frequencyOfRightMajorElement > (right - left) / 2) {
            return leftMajorityElement;
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 9, 2, 2};

        System.out.println(getMajorityElement(arr, 0, arr.length));


        /*FastScanner scanner = new FastScanner(System.in);
        int n = scanner.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = scanner.nextInt();
        }
        if (getMajorityElement(a, 0, a.length) != -1) {
            System.out.println(1);
        } else {
            System.out.println(0);
        }*/
    }

    static class FastScanner {
        BufferedReader br;
        StringTokenizer st;

        FastScanner(InputStream stream) {
            try {
                br = new BufferedReader(new InputStreamReader(stream));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        String next() {
            while (st == null || !st.hasMoreTokens()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }

        int nextInt() {
            return Integer.parseInt(next());
        }
    }
}