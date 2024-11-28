"use client"
import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ]

export default function Home() {
  const [todos, setTodos] = useState([])
  const getAllTodos = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/get-all-todos`)
      const allTodos = await response.json()
      setTodos(allTodos.data)
      console.log(allTodos.data)
    } catch (e) {
      console.log("Error while fetching all todo!");
    }
  }
  const createTodo = async (newTodo)=> {
    try {
      const response = await fetch("http://localhost:8000/api/v1/add-todo", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({todo: newTodo})
      })
      if(response.ok) {
        getAllTodos()
      } else {
        console.log("Faild to create todo!")
      }
    } catch (error) {
      console.log("Error while creating todo!", error.message)
    }
  }
  useEffect(() => {
    getAllTodos();
  }, [])
  return (
    <div>
      <InputField handleSubmit={createTodo} />
      <div className="sm:w-[70%] w-[95%] mx-auto">
        <h2 className="text-center font-bold text-2xl">Todos</h2>
        <Table>
          <TableCaption>A list of your recent todos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Todo</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.length > 0 ? (
              todos.map((i) => (
                <TableRow key={i._id}>
                  <TableCell className="font-medium w-full">{i.todo}</TableCell>
                  <TableCell className="text-right flex">
                    <Button variant="ghost">Edit</Button>
                    <Button className="ml-3 w-15" variant="destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center">
                  No todos available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
