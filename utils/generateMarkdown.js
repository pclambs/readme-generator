// functions to generate badges for licenses in README
function renderLicenseBadge(license) {
  if (!license) return ''
  return `![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)`
}

function renderLicenseLink(license) {
  if (!license || license === 'none') return ''
  return `[License](#license)`
}

function renderLicenseSection(license) {
  if (!license || license === 'none') return ''
  return `This project is covered under the ${license} license.`
}

// Function to generate markdown for README
export const generateMarkdown = ({title, motivation, why, what, learn, install, use, license, dependencies, creator, name, email, contributors}) => {
  return `
  # ${title}

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