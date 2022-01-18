import API from "octokit";

module.exports = async function (github: API.Octokit) {
    return await github.rest.search.code({q: "CFPAT"});
}