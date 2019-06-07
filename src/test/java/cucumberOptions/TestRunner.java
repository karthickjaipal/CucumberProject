package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(	
		//Feature file path has to be provided here
		features="src/test/java/features",
		//glue hold the path of Stepdefinition 
		glue="stepdefinition",tags="@Dhanyatest",
		//reports
		plugin={"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cuckes.xml"}
		)

public class TestRunner {
	
	
	
	
	
	
			
			

}
