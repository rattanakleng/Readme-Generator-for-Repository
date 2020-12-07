// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n ${data.description} \n ## Installation instruction \n ${data.installation} \n ## Application usage \n ${data.usage}\n ## Constribution \n ${data.contributor}\n ## license \n ${data.license}\n ## Contact\n GitHub username: ${data.username} \n Email: ${data.email}`;
}

module.exports = generateMarkdown;
