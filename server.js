const zendesk = require('node-zendesk')

const client = zendesk.createClient({
  username: 'your Zendesk email',
  token: 'your Zendesk token',
  remoteUri: 'https://YOURDOMAIN.zendesk.com/api/v2'
})

client.users.list((err, req, result) => {
  if (err) {
      console.error(err)
      return
  }
  // gets the first page
  console.info(JSON.stringify(result[0], null, 2, true))
})
