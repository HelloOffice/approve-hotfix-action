'use strict'

const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    const token = core.getInput('repo-token');
    const sourceBranch = core.getInput('source-branch');

    const octokit = github.getOctokit(token);

    core.info(github.context);
    core.info(sourceBranch);

    core.info('Approving Hotfix Pull Request... ⏱');

    // await octokit.pulls.createReview({
    //     ...context.repo,
    //     event: 'APPROVE'
    // });

    core.info('Hotfix Pull Request approved ✔');
};

main().catch((err) => core.setFailed(err.message));

// try {
//     // `who-to-greet` input defined in action metadata file
//     const nameToGreet = core.getInput('who-to-greet');
//     console.log(`Hello ${nameToGreet}!`);
//     const time = (new Date()).toTimeString();
//     core.setOutput("time", time);
//     // Get the JSON webhook payload for the event that triggered the workflow
//     const payload = JSON.stringify(github.context.payload, undefined, 2)
//     console.log(`The event payload: ${payload}`);
// } catch (error) {
//     core.setFailed(error.message);
// }
