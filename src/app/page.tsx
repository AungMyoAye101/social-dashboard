import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button>Hello</Button>
      <Button variant={'destructive'}>Hello</Button>
      <Button variant={'secondary'} size={'sm'}>Hello</Button>

    </div>
  )
}
