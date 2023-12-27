import { useState } from "react";
import ExpenseFilter from "./Expense_Management/componenets/ExpenseFilter";
import ExpenseList from "./Expense_Management/componenets/ExpensesList";
import ExpensesForm from "./Expense_Management/componenets/ExpensesForm";



function App() {

  const [selectCategory, setSelectCategory] = useState('')
  const [expenses,setExpenses] =useState([
    {id:1,description:"Iphone",amount:100,category:"Electronic"},
    {id:2,description:"Iphone",amount:100,category:"Electronic"},
    {id:3,description:"Iphone",amount:100,category:"Electronic"},
    {id:4,description:"Iphone",amount:100,category:"Electronic"},
  ])

  const visibleExpenses = selectCategory ? expenses.filter(e=>e.category=== selectCategory) : expenses;

  return (
   <>

   <ExpensesForm onSubmit={expense =>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>

   <ExpenseFilter onSelectCategory={(category)=>setSelectCategory(category)}/>

   <ExpenseList expenses={visibleExpenses}  onDelete={(id)=>setExpenses(expenses.filter(e=>e.id != id))}/>

   
   </>
  );
}

export default App;

