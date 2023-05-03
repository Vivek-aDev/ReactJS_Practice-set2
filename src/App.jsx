import { Gadgets } from "./Gadgets";
import { GreetingCard } from "./GreetingCard";
import { Phones } from "./Phones";
import { ProductCard } from "./ProductCard";
import "./styles.css";
import { UserProfile } from "./UserProfile";
import { Article } from "./Article";
import { About } from "./About";
import { MyGadgets } from "./MyGadgets";
import { ColorPicker } from "./ColorPicker";
import { Todo } from "./Todo";
import {
  userData,
  products,
  title,
  content,
  heading,
  name,
  learning,
  red,
  blue,
  green,
  todoItems
} from "./userData";

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS Practice Question Set 2</h1>
      <hr style={{ border: "2px solid green" }} />
      <GreetingCard name="Vivek" />
      <hr />
      <ProductCard name="Pen" price="100" />
      <hr />
      <UserProfile user={userData} />
      <hr />
      <Gadgets products={products} />
      <hr />
      <Phones products={products} />
      <hr />
      <Article title={title} content={content} />
      <hr />
      <About heading={heading} name={name} learning={learning} />
      <hr />
      <MyGadgets products={products} />
      <hr />
      <ColorPicker red={red} blue={blue} green={green} />
      <hr />
      <Todo todoItems={todoItems} />
    </div>
  );
}
