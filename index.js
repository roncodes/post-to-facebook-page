const core = require('@actions/core');
const fetch = require('node-fetch');

try {
    const pageId = core.getInput('PAGE_ID');
    const accessToken = core.getInput('ACCESS_TOKEN');
    const message = core.getInput('MESSAGE');

    if (!pageId || !accessToken || !message) {
        console.log('Invalid input');
    } else {
        const url = `https://graph.facebook.com/v13.0/${pageId}/feed`;
        const data = {
            message: message,
            access_token: accessToken,
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
    }
} catch (error) {
    core.setFailed(error.message);
}
