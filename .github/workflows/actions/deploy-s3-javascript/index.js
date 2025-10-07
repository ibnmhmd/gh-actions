const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('@actions/exec');

const run = async () => {
    core.notice('Starting deployment to S3...');
    // try {
    //     const bucketName = core.getInput('bucket-name', { required: true });
    //     const region = core.getInput('region', { required: true });
    //     const accessKeyId = core.getInput('access-key-id', { required: true });
    //     const secretAccessKey = core.getInput('secret-access-key', { required: true });
    //     const sourceDir = core.getInput('source-dir') || 'dist';
    //     const destinationDir = core.getInput('destination-dir') || '/';
    // } catch (error) {
    //     core.setFailed(`Deployment failed: ${error.message}`);
    // }
};

run();