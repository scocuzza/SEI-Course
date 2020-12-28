class BankAccount():
    def __init__(self):
        self.balance = 0
        self.interest = 1.02

    def __str__(self):
        return f"Current Balance: $ {self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        elif amount <= 0:
            return False
        else:
            self.balance -= amount
            return amount

    def deposit(self, amount):
        if amount <= 0:
            return False
        else:
            self.balance += amount
            return self.balance

    def check_balance(self):
        return self.balance

    def accumulate_interest(self):
        self.balance = self.balance * self.interest
        return self.balance


class ChildrensAccount(BankAccount):
    def __init__(self):
        super().__init__()
        self.interest = 0

    def accumulate_interest(self):
        self.balance += 10
        return self.balance


class OverdraftAccount(BankAccount):
    def __init__(self):
        super().__init__()
        self.overdraft_penalty = 40

    def withdraw(self, amount):
        if amount > self.balance:
            self.balance -= self.overdraft_penalty
            return False
        else:
            return super().withdraw(amount)

    def accumulate_interest(self):
        if self.balance <= 0:
            return self.balance
        else:
            return super().accumulate_interest()



basic_account = BankAccount()
basic_account.deposit(600)
print(f"Basic account has ${basic_account.balance}")
basic_account.withdraw(17)
print(f"Basic account has ${basic_account.balance}")
basic_account.accumulate_interest()
print(f"Basic account has ${basic_account.balance}")
print()

childs_account = ChildrensAccount()
childs_account.deposit(34)
print(f"Child's account has ${childs_account.balance}")
childs_account.withdraw(17)
print(f"Child's account has ${childs_account.balance}")
childs_account.accumulate_interest()
print(f"Child's account has ${childs_account.balance}")
print()

overdraft_account = OverdraftAccount()
overdraft_account.deposit(12)
print(f"Overdraft account has ${overdraft_account.balance}")
overdraft_account.withdraw(17)
print(f"Overdraft account has ${overdraft_account.balance}")
overdraft_account.accumulate_interest()
print(f"Overdraft account has ${overdraft_account.balance}")