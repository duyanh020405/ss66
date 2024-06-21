
const a = Math.random();
const b = Math.random();
const c = Math.random();
const numbers = [a, b, c];

const b5 = (state = numbers, action:any) => {
    switch (action.type) {
        case "show2":
            return state;
        default:
            return state;
    }
};

export default b5;
