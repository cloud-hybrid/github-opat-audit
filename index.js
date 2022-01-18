#!/usr/bin/env node

const findOrganizationCPATS = require("./distribution/src/find");
// const storeAuditLog = require('./lib/aws/store-audit-log');

exports.handler = async (event, context) => {
    console.log("Hit")
    const organization = process.env.GITHUB_ORGANIZATION_ID;

    const tokens = findOrganizationCPATS(organization);

    (async function * () {
        try {
            const tokens = yield findOrganizationCPATS(organization);
            console.log(tokens);
            // yield storeAuditLog(JSON.stringify(tokens));
        } catch (e) {
        }
    })();
};
