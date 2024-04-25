import static org.junit.Assert.*;
import org.junit.*;
import java.io.*;
import java.util.ArrayList;

public class scriptCopyTest {

    private final InputStream baseIO = System.in;
    private final ArrayList<String> xDataExpected = new ArrayList<>();
    private final ArrayList<Integer> yDataExpected = new ArrayList<>();


    @Before
    public void setUpMainTest() {
        String input = "100\nitem1\n50\nquit\n";
        InputStream tempInput = new ByteArrayInputStream(input.getBytes());
        System.setIn(tempInput);
        
        xDataExpected.add("item1");
        yDataExpected.add(50);
    }

    @After
    public void tearDownMainTest() {
        System.setIn(baseIO);
    }

    @Test
    public void testMainDriver() {

        scriptCopy driver = new scriptCopy();
        driver.main_driver();

        assertEquals(xDataExpected, driver.xData);
        assertEquals(yDataExpected, driver.yData);
        assertEquals(Integer.valueOf(50), driver.totalSpent);
    }
}
