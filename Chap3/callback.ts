function letMeKnowWhenComplete(size, callback) {
    let reducer = 0;
    for (let i = 1; i < size; i++) {
        reducer = Math.sin(reducer * i);
    }
    callback();
}

letMeKnowWhenComplete(100000000, function() {
    console.log('Great it completed.');  
});