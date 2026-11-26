
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
obj.withdraw(170)