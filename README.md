# Post to Facebook Page Action

This GitHub Action posts a message to a Facebook page using the Facebook Graph API.

## Inputs

### `page-id`

**Required** The ID of the Facebook page. This should be stored in your GitHub secrets.

### `access-token`

**Required** The access token for the Facebook page. This should be stored in your GitHub secrets.

### `message`

**Required** The message to post to the Facebook page.

## Usage

```yaml
steps:
- name: Post to Facebook
  id: post-to-facebook-page
  uses: roncodes/post-to-facebook-page@v1.0.0
  with:
    page-id: ${{ secrets.FACEBOOK_PAGE_ID }}
    access-token: ${{ secrets.FACEBOOK_ACCESS_TOKEN }}
    message: "Hello, Facebook!"
```

## How to get Facebook Page ID and Access Token

- To find your Facebook Page ID, go to your Facebook Page, click "About" in the left-hand column. Scroll down to find your Page ID at the bottom of the page.
- To get an access token, you'll need to create a Facebook App and generate the token from the Facebook Graph API Explorer. Make sure to choose the correct permissions when generating the token. Note that the token should not be shared or made public, and must be stored securely. It's recommended to use GitHub secrets to store your access token.