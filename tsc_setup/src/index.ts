// https://www.youtube.com/watch?v=d56mG7DezGs


console.log("ss")

// varable declaration
let salesman: string = "gopinath"
let mark: number = 20
let is_verified: boolean = true
let any;

let salesmans: string;
let marks: number;

salesmans = "ss"
marks = 11
console.log(salesman)
console.log(mark)

console.log(salesmans)
console.log(marks)


// array
let list: number[] = [1, 1]
// list[2] = "ss" // error
list[3] = 2

let listUser: string[] = ["ss", "sss", "ssss"]


// tuples
let user: [number, string] = [1, "s"]
console.log(user)

let users: [number, string, boolean, number] = [1, "ss", true, 1]
console.log(users)


// enums
// always first leeter is caps
const enum Status {
    Active = 1,
    Inactive = 0
}
// console.log(Status)


let ac: Status = Status.Active
console.log(ac)


// functions

function sample1() {
    console.log("just print no return")
}

sample1()

function sample2(text: string) {
    console.log(text)
}
sample2("hi how are u")


function sample3(text: string, val = 5): string {
    if (val === 5)
        return text
    return "no value"
}

console.log(sample3("hi"))

function sample4(): [number, string] {
    return [1, "ssss"]
}

console.log(sample4())
console.log(sample4()[0])


// object
let emp: {
    id: number,
    name: string
} = { id: 1, name: "ss" }

console.log(emp)

let emp1: {
    readonly id: number,
    name: string
} = { id: 1, name: "ss" }

// console.log(emp1.id = 1)// error


// types
type Emp = {
    id: number,
    name: string
}
let emp3: Emp = { id: 1, name: "ss" }

console.log(emp3)

// union type
function w(weight: number | string): number {
    if (typeof weight == "number")
        return weight
    else
        return parseInt(weight)
}

console.log(w(11))
console.log(w("11"))


// literal type
type Qu = 50 | 100
let s: Qu = 50

type Metric = "cm" | "inch"
let m: Metric = "cm"




// nullable type

function tt(v: string | null | undefined) {
    console.log(v)
}

tt(null)



// optinal chainning
type AA = {
    birthday: Date
}

function tts(): AA | null {
    return true ? null : { birthday: new Date() }
}

console.log(tts()?.birthday)