const API = require( "octokit" );

const listOrgUsers = require( "./github/users" );
const findCFPATS = require( "./github/locate" );

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

if ( !GITHUB_ACCESS_TOKEN ) {
    throw new Error( "Missing or empty \"GITHUB_ACCESS_TOKEN\" env variable" );
}

const run = async function (organization: string) {
    const VCS = new API.Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN
    });

    const Organization = process.env.GITHUB_ORGANIZATION_ID;

    await VCS.auth( { type: "token", token: process.env.GITHUB_ACCESS_TOKEN } );

    const users = await listOrgUsers( VCS, organization );

    const userLogins = users.Accounts.map( (user: any ) => user.login );

    // Include the org id in the set of users to check
    userLogins.push( organization );

    console.log(userLogins);

    const allLeaks = await findCFPATS( VCS );

    console.log(allLeaks);
//
//    const orgLeaks = allLeaks.filter( (leak: any) => {
//        return userLogins.includes( leak.repository.owner.login );
//    } );
//
//    return orgLeaks.map( (leak: any) => ({
//        file: leak.html_url,
//        user: leak.repository.owner.login
//    }) );
};

module.exports = run;

export {};