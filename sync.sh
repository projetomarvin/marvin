sed -i 's/localhost/api.projetomarvin.com/g' *.html
aws s3 sync . s3://app.projetomarvin.com --acl public-read --exclude ".git*" --exclude ".gitignore*" --profile cori
aws cloudfront create-invalidation --distribution-id E3VBOWG22MUCR0 --paths /* --profile cori
sed -i 's/api.projetomarvin.com/localhost/g' *.html
