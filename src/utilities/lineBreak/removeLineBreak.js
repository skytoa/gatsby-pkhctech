const regex = /[<]br[^>]*[>]/gi;

const removeLineBreak = str => str.replace(regex, '')

export default removeLineBreak;