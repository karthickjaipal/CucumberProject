package stepdefinition;


import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import java.util.List;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
public class StepDefinition {
public WebDriver driver=null;




    @Given("^User is on Login Page$")
    public WebDriver user_is_on_login_page() throws Throwable {
    	System.setProperty("webdriver.chrome.driver", "D:\\Drivers\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.get("https://webmail.thbs.com/a/index.php");
        return driver;
    }

    @When("^User enters valid username \"([^\"]*)\" and valid password \"([^\"]*)\"$")
    public void user_enters_valid_username_something_and_valid_password_something(String u_name, String pwd) throws Throwable {
        
    	driver.findElement(By.xpath("//input[@name='user_name']")).sendKeys(u_name);
    	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
    	driver.findElement(By.xpath("//input[@name='SUBMIT']")).click();
    	System.out.println("entered");
        
    }
    
    @When("^User enters valid username \"([^\"]*)\" and invalid password \"([^\"]*)\"$")
    public void user_enters_valid_username_something_and_invalid_password_something(String u_name, String pwd) throws Throwable {
    	driver.findElement(By.xpath("//input[@name='user_name']")).sendKeys(u_name);
    	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
    	driver.findElement(By.xpath("//input[@name='SUBMIT']")).click();
    	System.out.println("not entered");
    }
    
    @When("^User enters following details$")
    public void user_enters_following_details(DataTable data) throws Throwable {
    	List<List<String>> obj =data.raw();
    	String uname=obj.get(0).get(0);
    	String pwd=obj.get(0).get(1);
    	driver.findElement(By.xpath("//input[@name='user_name']")).sendKeys(uname);
    	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
    	driver.findElement(By.xpath("//input[@name='SUBMIT']")).click();
    	System.out.println("datatype model succeeded");
    }

    @Then("^login page is displayed$")
    public void login_page_is_displayed() throws Throwable {
    	/*WebDriverWait wait=new WebDriverWait(driver,30);
    	wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//div[text()='Compose']"))));
    	if(driver.findElement(By.xpath("//div[text()='Compose']")).isDisplayed()==true)
    	{
    	
    	}*/
    	System.out.println("Login successfull");
    }
    
    @Then("^login page is not displayed$")
    public void login_page_is_not_displayed() throws Throwable {
    	/*WebDriverWait wait=new WebDriverWait(driver,30);
    	wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//div[text()='Compose']"))));
    	if(driver.findElement(By.xpath("//div[text()='Compose']")).isDisplayed()==true)
    	{
    	
    	}*/
    	String title=driver.getTitle();
    	System.out.println(title);
    	if(driver.getTitle()=="https://webmail.thbs.com/index.php")
    	{
    	System.out.println("Login failed: user is on Login Page");
    	}
    }
    
    @When("^User enters the username (.+) and password (.+)$")
    public void user_enters_the_username_and_password(String username, String password) throws Throwable {
    	System.out.println(username);
    	System.out.println(password);
    	driver.findElement(By.xpath("//input[@name='user_name']")).sendKeys(username);
    	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
    	driver.findElement(By.xpath("//input[@name='SUBMIT']")).click();
    	System.out.println("not entered");
    }


  }