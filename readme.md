Project title
CreditorWatch this project is used for validating the anchor text tags in the blog post.

Framework
Selenium Cucumber framework is used with the Page Object Model pattern .

Configuration Files
Project related configuration files are found the in the resources folder
data.properties -- project related configuration browsers, url and timeout parameters
log4j2.xml -- Log4j logging configuration
extent-config.xml -- extent report configuration

Feature File 
BlogsTest.feature

StepDefnition File
BlogsTestSteps.java

PageObjects
BlogPage, HomePage

Implemented Browsers
chrome and firefox

Build
Maven is used for managing the project dependencies and build 

Logs
Log4j logging is used for capturing logs, the loggger configuration is log4j2.xml in the resources folder of the project and the reports can be viewed in the logs folder

Test Execution
To execute the Cucumber feature tests using junit in maven command line in the project directory run the command mvn test
The tests are executed on chrome browser by default, 
Test Execute on firefox browser update the browser value to firefox in data.properties in resources folder

The Tests validate the Anchor text tags for the blog posts "How to Avoid the Preference Payment Trap" and "Company Financial Statements"


Extent Test Reports
Extent Reporter is used for generating reports in the HTML format, the configuration for the reports is in file extent-config.xml in the resources folder. 
The reports are found in the target\cucumber-reports with the name report.html