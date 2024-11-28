import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type InputFieldProps = {
     buttonText?: string,
     placeholder?: string,
}

export default function InputField({buttonText, placeholder}: InputFieldProps) {
     return (
          <>
               <form action="POST" className="flex gap-3 sm:gap-6 sm:w-[70%] w-[95%] mx-auto my-10">
                    <div className="basis-[90%]">
                         {/* <input type="text" className="w-full h-full border-2 border-gray-500 rounded-md px-6" placeholder={placeholder? placeholder: "Enter your todos here"} name="todo" id="todo" /> */}
                         <Input type="text" className="h-full" placeholder={placeholder?placeholder: "Enter your todo here"} name="todo" />
                    </div>
                    <div className="basis-[10%] flex sm:gap-6 gap-2">
                         <Button>{buttonText? buttonText: "Add"}</Button>
                         <ModeToggle/>
                    </div>
               </form>
          </>
     )
}