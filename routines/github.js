const fetch = require('node-fetch')

githubRepoInfo = async (msg, arrRepo) => {
    var response = await fetch(`https://api.github.com/repos/${arrRepo[0]}/${arrRepo[[1]]}`)
    var data = await response.json()
    if(data.message !== undefined) {
        msg.reply(data.message)
        return
    }
    var reply = `*${data['full_name']}*
${data['html_url']}
*Description:* ${data.description}
*Forks:* ${data.forks_count}
*Stars:* ${data['stargazers_count']}
*License:* ${data.license.name}
`
    msg.reply(reply)
    return
}

module.exports =  {
    githubRepoInfo: githubRepoInfo
}