package stepdefinition;



import org.openqa.selenium.WebDriver;

import Cucumber.CucumberTutorial.openBrowser;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends openBrowser{
	
	@Before("@Smoketest")
	public void beforetest()
	{
		openBrowser.openWebUrl();
	}
	
	@After("@Smoketest")
	public void Afterretest() throws Throwable
	{
		driver.close();
	    System.out.println("Execution completed");
	}

}
