import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="">
      <Button variant="elevated">Click Me</Button>
      <Input placeholder="Type something..." className="mt-4" />
      <Checkbox />
      <Textarea placeholder="Type your message..." className="my-4" />
      <Progress value={50} />
    </div>
  );
}
