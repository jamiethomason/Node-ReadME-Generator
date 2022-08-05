// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // if "Apache", return (https://img.shields.io/badge/License-Apache_2.0-blue.svg);
  // if "Boost", return (https://img.shields.io/badge/License-Boost_1.0-lightblue.svg);
  // if "BSD", return (https://img.shields.io/badge/License-BSD_3--Clause-blue.svg);
  // if "MIT", return (https://img.shields.io/badge/License-MIT-yellow.svg);
  // if "None", return (" ");

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Use if or switch statement

//   if "Apache", return (https://opensource.org/licenses/Apache-2.0);
//   if "Boost", return (https://www.boost.org/LICENSE_1_0.txt);
//   if "BSD", return (https://opensource.org/licenses/BSD-3-Clause);
//   if "MIT", return (https://opensource.org/licenses/MIT);
//   if "None", return (" ");

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  // if "None", return (" ");
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation Instructions](#installation-instrutions)
3. [Usage Information](#Usage)
4. [Contribution Guidelines](#Contribution)
5. [Test Instructions](#Test)
6. [License](#License)
7. [Questions](#Questions)

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage Information

${data.usage}

## Contribution Guidelines

${data.contribution}

## Test Instructions

${data.test}

## License


# Questions

If you have additional questions, please reach out at:

[GitHub](${data.github})
[Email](mailto:${data.email})`;
}

module.exports = generateMarkdown;