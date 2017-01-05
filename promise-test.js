/**
 * Created by tichaona on 1/4/17.
 */
function doJob(a, b, resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
    }
    else {
        reject("A and B must ne numbers");
    }

}


function addNumbers(a, b) {
    return new Promise(function (resolve, reject) {
        doJob(a, b, resolve, reject);
    });
}


function logSuccess(temp) {
    console.log("Sum is good", temp);
}

function logFailure(error) {
    console.log("We have errors:", error)
}

addNumbers(10, 12).then(temp => {
    logSuccess(temp);
}, error => {
    logFailure(error);
});


addNumbers("Ticha", 12).then(function (temp) {
    logSuccess(temp);
}, function (error) {
    logFailure(error);
});
