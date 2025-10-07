const core = require('@actions/core');
const github = require('@actions/github');
const exec  = require('@actions/exec');

const run = async () => {
    core.notice('Starting deployment to S3...');
    try {
        const bucketName = core.getInput('bucket-name', { required: true });
        const region = core.getInput('aws-region', { required: true });
        const accessKeyId = core.getInput('aws-access-key-id', { required: true });
        const secretAccessKey = core.getInput('aws-secret-access-key', { required: true });
        const sourceDir = core.getInput('source-dir', { required: true }) || 'dist';
        await exec.exec('aws', ['s3','sync',`${sourceDir}/`, `s3://${bucketName}/`,'--delete'], 
            {
                env: {
                    ...process.env,
                    AWS_ACCESS_KEY_ID: accessKeyId,
                    AWS_SECRET_ACCESS_KEY: secretAccessKey,
                    AWS_DEFAULT_REGION: region,
                }
            });

        core.notice('Deployment to S3 completed successfully.');
        core.setOutput('bucket-url' , `https://${bucketName}.s3.${region}.amazonaws.com/`);
    } catch (error) {
        core.setFailed(`Deployment failed: ${error.message}`);
    }
};

run();