/***
 *
 * Synchronous Delay Callable
 *
 * @param {number} time (ms)
 * @returns {Promise<null>}
 * @constructor
 *
 */

function Await(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve.bind(null), time)
    })
}

module.exports = Await;

export {};