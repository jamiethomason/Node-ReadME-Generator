// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Use if or switch statement
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Table of Contents
1. [Description](## Description)
2. [Installation Instructions](## Installation Instructions)
3. [Usage Information](## Usage Information)
4. [Contribution Guidelines](## Contribution Guidelines)
5. [Test Instructions](## Test Instructions)
6. [License](## License)
7. [Questions](## Questions)

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

${renderLicenseBadge(license)}
${renderLicenseLink(license)}
${renderLicenseSection(license)}

# Questions

If you have additional questions, please reach out at:

[GitHub](${data.github})
[Email](mailto:${data.email})`;
}

module.exports = generateMarkdown;