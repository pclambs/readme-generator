// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
export const generateMarkdown = ({title, motivation, why, what, learn, install, use, license, dependencies, creator, name, email, contributors}) => {
  return `# ${title}

## Description

- ${motivation}
- ${why}
- ${what}
- ${learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Dependencies:
- ${dependencies}

Installation instructions:
- ${install}

## Usage

- ${use}

## Credits

- ${creator}
- ${name}
- ${email}
- ${contributors}

## License

- ${license}

## Badges


  `
}