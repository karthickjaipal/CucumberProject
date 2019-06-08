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


import Cucumber.CucumberTutorial.openBrowser;

@RunWith(Cucumber.class)
public class MISStepDefintion extends openBrowser {
	
	@Given("^user is on MIS login page$")
    public WebDriver user_is_on_mis_login_page() throws Throwable {
        System.out.println("User is on MIS login page......");
        return driver;
    }

    @When("^user enters username \"([^\"]*)\" password \"([^\"]*)\"$")
    public void user_enters_username_something_password_something(String strArg1, String strArg2) throws Throwable {
    	driver.findElement(By.xpath("//input[@id='username']")).sendKeys(strArg1);
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(strArg2);
    	driver.findElement(By.xpath("//input[@type='radio' and @id='MIS']")).click();
    	driver.findElement(By.xpath("//button[@id='mySelect']")).click();
    	System.out.println("User enetered the details and clicked on login button......");
    }
    
    @When("^user enters the user credentials$")
    public void user_enters_the_user_credentials(DataTable data) throws Throwable {
    	List<List<String>> obj=data.raw();
    	String uname=obj.get(0).get(0);
    	String pwd=obj.get(0).get(1);
    	System.out.println("the username"+uname);
    	System.out.println("the username"+pwd);
    }
    
    @When("^user enters (.+) and (.+)$")
    public void user_enters_and(String username, String password) throws Throwable {
    	driver.findElement(By.xpath("//input[@id='username']")).sendKeys(username);
    	driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
    	driver.findElement(By.xpath("//input[@type='radio' and @id='MIS']")).click();
    	driver.findElement(By.xpath("//button[@id='mySelect']")).click();
    	System.out.println("User entered the details and clicked on login button......");
    }

    @Then("^homepage is displayed$")
    public void homepage_is_displayed() throws Throwable {
    	boolean ele=driver.findElement(By.cssSelector("div.thbs-logo")).isDisplayed();
    	if(ele==true)
    	{
    	System.out.println("User successfully logged into THBS  MIS.....");
    	}
    	else
    	{
    		System.out.println("User login failed.....");
    	}
        
    }

}