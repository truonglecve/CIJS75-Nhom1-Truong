/*
    Câu 1: var khai báo một biến có phạm vi trong block? FALSE
        Var có tính chất hoisting. Dù khai báo ở đâu thì biến đều được đưa lên đầu scope với giá trị khởi tạo là undefined

    Câu 2: const khai báo một biến có phạm vi trong block? TRUE
        let và const phụ thuộc vào phạm vi khởi tạo nên chỉ có giá trị trong block

    Câu 3: let khai báo một biến có phạm vi trong block? TRUE
        let và const phụ thuộc vào phạm vi khởi tạo nên chỉ có giá trị trong block

    Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì? 3. {foo: 1, bar: 2}
        const obj = { foo: 1 }
        obj.bar = 2


    Câu 5: Kết quả của ví dụ sau đây là gì? 4. The quick brown fox jumps over the lazy dog.
        const speed = 'quick'
        `The ${speed} brown fox jumps over the lazy dog.`

    Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau: 1.undefined

        const obj = {

        }


    Câu 7: Giá trị của array trong ví dụ sau: 4. ERROR
        const array = [1, 2, 3]
        const extension = [4, 5, 6]
        array = [...extension, ...array]

    Câu 8: Giá trị của a trong ví dụ sau? 2. [1, 23, 4]
        function mystery(...params) {
            return params
        }
        let a = mystery(1, 23, 4);

    Câu 9: Giá trị của biểu thức sau? 1.3
        [...[..."..."]].length


    Câu 10: Giá trị của a và b với ví dụ sau? 2. a=3 b=12
        let a = 12, b = 3;
        [a, b] = [b, a];


    Câu 11 Giá trị của obj sau trong ví dụ sau? 3. ERROR
        const obj = {
            name: "MindX"
        }
        const sayHello = (x) => {
            let {name} = x
        name = "Code Intensive"
        }
        sayHellO(obj)
        console.log(obj)

    Câu 12: Giá trị của biểu arr trong ví dụ sau? 2. [2,2,6,4,10]
        let arr = [1, 2, 3, 4, 5]
        arr.map(item => {
        if (item % 2 === 0) {
                return item;
        }
            return item * 2;
        })
        Giải thích:
        Hàm map sẽ thực hiện 1 công việc giống nhau đối với tất cả item trong 1 mảng. Ở đây là:
         + Nếu các item chia hết cho 2 thì giữ nguyên item đó
         + Nếu các item không chia hết cho 2 thì lấy item đó * 2


    Câu 13: Giá trị của total trong ví dụ sau?  3. 16
        const arr = [1, 2, 3, 4, 5]
        B1: const total = arr.filter(item => item % 2 === 0)
        B2: .reduce((value, item) => value + item , 10)

        Giải thích:
        B1: total sẽ được trả ra 1 mảng với các item được nhặt từ arr thỏa mãn điều kiện chia hết cho 2. Ở đây total = [2,4]
        B2:  Hàm reduce trả ra kết quả bằng tổng các item trong mảng total + 10



*/

// PROBLEM 1
const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]
const result = []
function insertHTML(users) {
    for (i=0; i < users.length; i++ ) {     
        result.push('<div><h1>' + Object.values(users[i])[0] + '</h1><h2>' + Object.values(users[i])[1] + '</h2></div>')
    }
    return result;
}






// PROBLEM 2
const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'other' },
    { name: 'Truong', gender: 'male' },
    { name: 'Dung', gender: 'other' },

];
const resultNotFemale = [];
function filterFemale(students) {
    for (i=0; i<students.length; i++) {
        if(Object.values(students[i])[1] !== 'female') {
            resultNotFemale.push(students[i])
        }
    }
    return resultNotFemale;
}





















// PROBLEM 4
const nums = []
const numberCounter = {}
function singleNumber(nums) {
    for (let num of nums) {
    if (numberCounter[num]) {
        numberCounter[num]++
        continue
    }
    numberCounter[num] = 1
    }
    for (let i = 0 ; i < Object.values(numberCounter).length; i++) {
        if (Object.values(numberCounter)[i] == 1) {
            return Number(Object.keys(numberCounter)[i])
        }
    }
}
