package stepdefinition;



import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks{
	
	@Before("@Regressiontest")
	public void beforetest()
	{
		System.out.println("I will be executed first");
	}
	
	@After("@Regressiontest")
	public void Aftertest()
	{
	
		System.out.println("Execution completed");
	}
	
	@Before("@Smoketest")
	public void beforeretest()
	{
		System.out.println("I will be executed first");
	}
	
	@After("@Smoketest")
	public void Afterretest()
	{
	
		System.out.println("Execution completed");
	}

}
