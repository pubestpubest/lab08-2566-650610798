import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { Taskinput } from "../../components/Taskinput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <Taskinput></Taskinput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>

        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Pubest Ruengkum"
        studentId="650610798"
      ></Footer>
    </div>
  );
}
