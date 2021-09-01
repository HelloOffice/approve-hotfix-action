# approve-hotfix-action

A GitHub action for approving hotfix pull requests.

## Inputs

### `repo-token`

**Required** An auth token for the repository.

## Example Usage

```yaml
steps:
  - name: Approve Hotfix Pull Request
    if: startsWith(github.head_ref, 'hotfix/')
    uses: HelloOffice/approve-hotfix-action@v1
    with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```

# Build and Deploy

After making changes:

1. Bump `package.json` version
2. Run

```
ncc build index.js
git commit -a -m 'commit message'
git tag -a -m 'version_number' version_number
git push --follow-tags
```

To avoid committing the entire node_modules package, it's recommended to compile the JS code.

https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github

1. Install vercel/ncc by running this command in your terminal. `npm i -g @vercel/ncc`
2. Compile your index.js file. `ncc build index.js`
3. Commit the files and upload
