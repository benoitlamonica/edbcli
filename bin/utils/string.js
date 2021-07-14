class StringUtils {
    static isCamelCase = (str) => {
        return /^([a-z]+)(([A-Z]([a-z]+))+)$/.test(str) && !str.includes('_')
    }
}

module.exports = StringUtils;