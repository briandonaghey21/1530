import static org.junit.Assert.*;
import org.junit.*;
import java.io.*;
import java.util.ArrayList;

/*
This is the test case which tests the main_driver function which was
mimiced into java for testing due to the requirement of Junit. All other
Junit test case options for javascript would have required extensive downloads.
*/ 

public class scriptCopyTest {

    private final ArrayList<String> xDataExpected = new ArrayList<>(); //Expected xData ArrayList
    private final ArrayList<Integer> yDataExpected = new ArrayList<>(); //Expected yData ArrayList


    @Before
    public void setUpMainTest() {
        String input = "100\nitem1\n50\nquit\n"; // String that simulates user response to console prompts in scriptCopy
        InputStream tempInput = new ByteArrayInputStream(input.getBytes());
        System.setIn(tempInput); // Set the new system in to this byte array of the string
        
        // Expected Values from test
        xDataExpected.add("item1");
        yDataExpected.add(50);
    }

    @After
    public void tearDownMainTest() {
        // Reset System in
        System.setIn(System.in);
    }

    @Test
    public void testMainDriver() {

        // Instance of scriptCopy
        scriptCopy driver = new scriptCopy();
        driver.main_driver();

        //Checks for correct values
        assertEquals(xDataExpected, driver.xData);
        assertEquals(yDataExpected, driver.yData);
        assertEquals(Integer.valueOf(50), driver.totalSpent);
    }
}
