"use client"
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

type InputFieldProps = {
     buttonText?: string,
     placeholder?: string,
     handleSubmit: (todo: string)=> void
}

export default function InputField({buttonText, placeholder, handleSubmit}: InputFieldProps) {
     const [todo, setTodo] = useState("");
     const onSubmit = (e: React.FormEvent)=> {
          e.preventDefault()
          if(todo.trim()){
               handleSubmit(todo)
               setTodo("")
          }
     }
     return (
          <>
               <form action="POST" onSubmit={onSubmit} className="flex gap-3 sm:gap-6 sm:w-[70%] w-[95%] mx-auto my-10">
                    <div className="basis-[90%]">
                         {/* <input type="text" className="w-full h-full border-2 border-gray-500 rounded-md px-6" placeholder={placeholder? placeholder: "Enter your todos here"} name="todo" id="todo" /> */}
                         <Input value={todo} onChange={(e)=> setTodo(e.target.value)} type="text" className="h-full" placeholder={placeholder?placeholder: "Enter your todo here"} name="todo" />
                    </div>
                    <div className="basis-[10%] flex sm:gap-6 gap-2">
                         <Button type="submit">{buttonText? buttonText: "Add"}</Button>
                         <ModeToggle/>
                    </div>
               </form>
          </>
     )
}