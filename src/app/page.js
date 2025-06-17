import Button from "./components/button"  
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
        <h1 className="text-4xl font-bold text-center">Hello World</h1>
        <Button text={"Click me"} textColor={"bg-red-500 text-white px-4 py-2 rounded-md"}/>
        <Button text={"Submit"} textColor={"text-white bg-blue-500 px-4 py-2 rounded-md"}/>
        <Button text={"Reset"}  textColor={"bg-purple-500 text-white px-4 py-2 rounded-md"}/> 
    </main>
  )
}
