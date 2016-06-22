import pipe from "../pipe";
export default (...fs) => (...args) => pipe(...args)(...fs.reverse());