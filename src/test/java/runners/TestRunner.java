package runners;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features/BlogsTest.feature",
					glue="stepDefinitions",
					plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
					monochrome = true)
public class TestRunner extends AbstractTestNGCucumberTests{
	
	@AfterClass
	 public static void writeExtentReport() {
	 Reporter.loadXMLConfig(new File("src/test/java/resources/extent-config.xml"));
	 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
     Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
     Reporter.setSystemInfo("Selenium", "3.141.0");
     Reporter.setSystemInfo("Maven", "3.6.3");
     Reporter.setSystemInfo("Java Version", "1.8.0_144"); 
	}
}
