import core from '@actions/core';
import fetch from 'node-fetch';

const validateInput = (key) => {
    const input = core.getInput(key);

    if (!input) {
        return core.setFailed(`Invalid input for ${key}`);
    }

    return input;
};

async function run() {
    try {
        const pageId = validateInput('page-id');
        const accessToken = validateInput('access-token');
        const message = validateInput('message');

        const url = `https://graph.facebook.com/v13.0/${pageId}/feed`;
        const data = {
            message: message,
            access_token: accessToken,
        };

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            response
                .json()
                .then((errorData) => {
                    const errorMessage = `Error ${response.status}: ${errorData.error.message}`;
                    console.error(errorMessage);
                    core.setFailed(errorMessage);
                })
                .catch((error) => {
                    const errorMessage = `Error ${response.status}: ${response.statusText}`;
                    console.error(errorMessage);
                    core.setFailed(errorMessage);
                });
        } else {
            response
                .json()
                .then((data) => console.log(data))
                .catch((error) => {
                    const errorMessage = `Error ${response.status}: ${errorData.error.message}`;
                    console.error(errorMessage);
                    core.setFailed(errorMessage);
                });
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
