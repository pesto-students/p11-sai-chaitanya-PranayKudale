class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance - amount >= 0) {
      this.#balance -= amount;
    } else {
      console.log("Withdrawal failed. Insufficient balance.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}
