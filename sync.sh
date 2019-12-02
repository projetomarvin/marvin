aws s3 sync . s3://app.projetomarvin.com --acl public-read --exclude ".git*" --exclude ".gitignore*"
aws cloudfront create-invalidation --distribution-id E3VBOWG22MUCR0 --paths /*
