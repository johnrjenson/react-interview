import fs from "fs";

function mapAssertionResult(assertionResult) {
  const result = {
    title: assertionResult.title,
    fullTitle: assertionResult.fullName,
    duration: assertionResult.duration,
    currentRetry: 0,
  }
  if(assertionResult.failureMessages.length) {
    result.err = {
      stack: assertionResult.failureMessages[0],
      message: assertionResult.failureMessages[0]
    }
  }
  return result;
}

function transformJestOutputToMochaStyle(testOutput) {
  const results = {
    stats: {
      suites: testOutput.numTotalTestSuites,
      tests: testOutput.numTotalTests,
      passes: testOutput.numPassedTests,
      pending: testOutput.numPendingTests,
      failures: testOutput.numFailedTests,
      start: new Date(testOutput.testResults[0].startTime).toISOString(),
      end: new Date(testOutput.testResults[0].endTime).toISOString(),
      duration: testOutput.testResults[0].endTime - testOutput.testResults[0].startTime
    },
    tests: testOutput.testResults[0].assertionResults.map(mapAssertionResult),
    pending: [],
    failures: testOutput.testResults[0].assertionResults.filter(assertionResult => assertionResult.status === "failed").map(mapAssertionResult),
    passes: testOutput.testResults[0].assertionResults.filter(assertionResult => assertionResult.status === "passed").map(mapAssertionResult),
  };

  return results;
}

function readTestOutput() {
  const testOutputRaw = fs.readFileSync("./testOutput.json", "utf8");
  return JSON.parse(testOutputRaw);
}

function writeResults(results) {
  const data = JSON.stringify(results, null, 2);
  fs.writeFileSync("./result.json", data, "utf8");
}

const testOutput = readTestOutput();
const results = transformJestOutputToMochaStyle(testOutput);
writeResults(results);
