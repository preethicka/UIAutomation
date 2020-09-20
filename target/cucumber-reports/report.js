$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BlogsTest.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the anchor tags text in the Blogs",
  "description": "",
  "id": "validate-the-anchor-tags-text-in-the-blogs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate the anchor tags text in the Blog Post",
  "description": "",
  "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on creditor watch home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Blog link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select the category \u003ccategory name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select the Blog post \u003cpost name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I validate all the anchor tags text in the post \u003ccategory name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post;",
  "rows": [
    {
      "cells": [
        "category name",
        "post name"
      ],
      "line": 12,
      "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post;;1"
    },
    {
      "cells": [
        "Risk Management",
        "How to Avoid the Preference Payment Trap"
      ],
      "line": 13,
      "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post;;2"
    },
    {
      "cells": [
        "Due Diligence",
        "Company Financial Statements"
      ],
      "line": 14,
      "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Validate the anchor tags text in the Blog Post",
  "description": "",
  "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on creditor watch home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Blog link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select the category Risk Management",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select the Blog post How to Avoid the Preference Payment Trap",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I validate all the anchor tags text in the post Risk Management",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.i_am_on_creditor_watch_home_page()"
});
formatter.result({
  "duration": 13065563300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.i_click_on_blog_link()"
});
formatter.result({
  "duration": 2407868300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Risk Management",
      "offset": 20
    }
  ],
  "location": "MyStepDefinitions.select_the_category(String)"
});
formatter.result({
  "duration": 1047644300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How to Avoid the Preference Payment Trap",
      "offset": 21
    }
  ],
  "location": "MyStepDefinitions.select_the_blog_post(String)"
});
formatter.result({
  "duration": 3181601100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Risk Management",
      "offset": 48
    }
  ],
  "location": "MyStepDefinitions.i_validate_all_the_anchor_tags_text_in_the_post(String)"
});
formatter.result({
  "duration": 49684730300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //h1[contains(text(),\u0027Payment Trap\u0027)] (tried for 15 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat creditorWatch.pageObjects.BlogPage.verifyLinks(BlogPage.java:81)\r\n\tat creditorWatch.stepDefinitions.MyStepDefinitions.i_validate_all_the_anchor_tags_text_in_the_post(MyStepDefinitions.java:98)\r\n\tat ✽.Then I validate all the anchor tags text in the post Risk Management(src/test/java/features/BlogsTest.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Payment Trap\u0027)]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027LAPTOP-9RRPRPJ5\u0027, ip: \u002710.0.0.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\SRINIV~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62199}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bf2d8dea9d70e1f5bae1f8d440ef6c02\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Payment Trap\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat creditorWatch.pageObjects.BlogPage.verifyLinks(BlogPage.java:81)\r\n\tat creditorWatch.stepDefinitions.MyStepDefinitions.i_validate_all_the_anchor_tags_text_in_the_post(MyStepDefinitions.java:98)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:80)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:650)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1249)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:841)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:679)\r\n\tat org.testng.TestRunner.run(TestRunner.java:583)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1218)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1140)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1069)\r\n\tat org.testng.TestNG.run(TestNG.java:1037)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:136)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:145)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:428)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:162)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:562)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:548)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 750826200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate the anchor tags text in the Blog Post",
  "description": "",
  "id": "validate-the-anchor-tags-text-in-the-blogs;validate-the-anchor-tags-text-in-the-blog-post;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on creditor watch home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Blog link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select the category Due Diligence",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select the Blog post Company Financial Statements",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I validate all the anchor tags text in the post Due Diligence",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.i_am_on_creditor_watch_home_page()"
});
formatter.result({
  "duration": 11396475600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.i_click_on_blog_link()"
});
formatter.result({
  "duration": 2651068600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Due Diligence",
      "offset": 20
    }
  ],
  "location": "MyStepDefinitions.select_the_category(String)"
});
formatter.result({
  "duration": 143023400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company Financial Statements",
      "offset": 21
    }
  ],
  "location": "MyStepDefinitions.select_the_blog_post(String)"
});
formatter.result({
  "duration": 3395668600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Due Diligence",
      "offset": 48
    }
  ],
  "location": "MyStepDefinitions.i_validate_all_the_anchor_tags_text_in_the_post(String)"
});
formatter.result({
  "duration": 50075124600,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [http://www.creditsource.com.au/] but found [https://www.creditsource.com.au/]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:47)\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:31)\r\n\tat creditorWatch.pageObjects.BlogPage.verifyLinks(BlogPage.java:100)\r\n\tat creditorWatch.stepDefinitions.MyStepDefinitions.i_validate_all_the_anchor_tags_text_in_the_post(MyStepDefinitions.java:98)\r\n\tat ✽.Then I validate all the anchor tags text in the post Due Diligence(src/test/java/features/BlogsTest.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 785614700,
  "status": "passed"
});
});