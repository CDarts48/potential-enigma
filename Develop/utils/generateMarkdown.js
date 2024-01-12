// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   if (license) {
    return `https://github.com/licenses/${license}`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license) {
    return `
## License

This project is licensed under the ${license} license. Click [here](${getLicenseLink(license)}) for more information.
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Deployed Application URL
${data.link}

## Screenshot
![alt-text:'Screen shot of app'](${data.screenshot})

## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Features
  ${data.features}
  
## Languages & Dependencies
  ${data.require}
  
## How to Use This Application
  ${data.usage}

  ## Contributors
  ${data.contributors}
  
## Testing
  ${data.test}
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
