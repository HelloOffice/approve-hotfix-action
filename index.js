'use strict'

const core = require('@actions/core');
const { getOctokit, context } = require('@actions/github')

const main = async () => {
    const token = core.getInput('repo-token');
    const octokit = getOctokit(token);
    const number = context.payload.pull_request.number;

    core.info('Approving Hotfix Pull Request... ⏱');

    await octokit.rest.pulls.createReview({
        ...context.repo,
        pull_number: number,
        event: 'APPROVE',
        body: '🚨⚠️ Hotfix PR approved, merge with caution. ⚠️🚨'
    });

    core.info('Hotfix Pull Request approved ✔');
};

main().catch((err) => core.setFailed(err.message));
