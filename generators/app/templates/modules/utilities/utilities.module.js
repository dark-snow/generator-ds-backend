
parseJson = (string) => {
    return new Promise((resolve, reject) => {
        if (string && string.length > 0) {
            try {
                let object = JSON.parse(string);
                resolve(object);
            } catch (err) {
                reject(err)
            }
        } else {
            resolve({});
        }
    });
}

fixedEncodeURIComponent = (str) => {
    return str.replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
}

module.exports.parseJson = parseJson;
module.exports.fixedEncodeURIComponent = fixedEncodeURIComponent;