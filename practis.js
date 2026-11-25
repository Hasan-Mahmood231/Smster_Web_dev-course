let name = "hassan"
let age = 23
let semester = 4

// console.log("My name is " + name + "\nAge is "+ age + "\nAnd the semester is "+ semester)
// print all these again and each one in new line
console.log()


let array = [1, 2, 3, 4, 5]
console.log(array[0] + "\n" + array[4] + "\n" + array.length)

for (let i = 0; i< array.length; i++){
    console.log(array[i] + "->" + array[i] * 2)
}


//printing all item in single line 
// console.log(array.join("<-> "))

//printing the verious type of data in same arrray
data = [1, "hassan", 23, true, null, undefined, {name: "hassan", age: 23}, [1, 2, 3]]

for (let i = 0; i< data.length; i++){
    console.log(data[i] + "-> " + typeof data[i])
}


let obj = {
    name: "hassan",
    age: 23,
    amount: 1000,
    account_no : 1234567890,
    isActive: true,
    address: { 
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },

    showdetial(){
        console.log("Name is " + this.name)
        console.log("Age is " + this.age)
        console.log("Account number is " + this.account_no)
        console.log("Is Active: " + this.isActive)
        console.log("Address: " + this.address.street + ", " + this.address.city + ", " + this.address.state + " " + this.address.zip)
        console.log("_______________________ ")
    },

    deposit(amount){
        if (amount > 0){
            this.amount += amount
            console.log("Deposited: " + amount)
            console.log("New Balance: " + this.amount)
        }
        else{
            console.log("Invalid deposit amount")
        }
    },

    withdraw(amount){
        if (amount > 0 && amount <= this.amount){
            this.amount -= amount
            console.log("Withdrawn: " + amount)
            console.log("New Balance: " + this.amount)
        }
    }
};

// obj.showdetial()
obj.deposit(8000)