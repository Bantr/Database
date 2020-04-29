#!/bin/sh

echo "###################################################"
echo "Migrating Hasura metadata"
echo "###################################################"
DATA=$(cat metadata.json)
curl -d'{"type":"replace_metadata", "args":'$DATA'}' $HASURA_URL -H 'X-Hasura-Admin-Secret: '$HASURA_GRAPHQL_ADMIN_SECRET''
