package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features/misLogin.feature",tags="@Smoketest",monochrome=true,glue="stepdefinition",
plugin={"pretty","html:target/miscucumber","json:target/cucmbermis.json","junit:target/miscuckes.xml"})

public class TestRunnerMIS {

}
