async function delayedResult() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('I completed successfully');
        }, 500);
    });
}

(async function execAsyncFunc() {
    const result = await delayedResult();
    console.log(result);
})();