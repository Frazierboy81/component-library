import AlertBox from "./components/AlertBox";
import Button from "./components/Button";
import ProductDisplay from "./components/ProductDisplay";
import Section from "./components/Section";
import UserProfileCard from "./components/UserProfileCard";

const user =  {
  id: '2',
  name: 'Tim Frazier',
  email: 'software@gmail.com',
  role: 'Software Engineer',
  // avatarUrl?: string;
}

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};


function App() {
  return (
    <main className="bg-stone-900 text-white h-screen p-5">
      <h1 className="text-4xl mb-8">Components Library</h1>
      <Section title = 'Section 1'>
        <p className="mb-4 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto dicta quod molestias repellat reiciendis minus, nisi voluptatum officia accusamus, dolores animi repellendus quos nobis? Dolor nemo repudiandae porro autem!
        </p>
      </Section>

      <Section title = 'Section 2'>
        <h3 className="mb-4 mt-4">Subheader</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident molestiae voluptate adipisci excepturi ex ab unde alias quae non? In ea ducimus commodi molestias quas quis ex consequuntur cum.</p>
      </Section>

      <Section title='Buttons'>
        <div className="grid grid-cols-3">
        <Button text='Click me!'onClick={()=> console.log('Clicked')}/>
        <Button text="Submit" type="submit" onClick={()=> console.log('Submit')}/>
        <Button text="Submit" type="reset" onClick={()=> console.log('Reset')}/>
        </div>
      </Section>

    <Section title="AlertBox">
      <AlertBox type="success"
      message="Your profile has been updated successfully!"
      onClose={()=> alert('Alert Closed')}/>
      <p className="text-sm">You can now continue.</p>
  
      
      

      <AlertBox type="error"
      message="An error has been detected!"
      onClose={()=> alert('Alert Closed')}/>
      <p className="text-sm">You can now continue</p>
      

      <AlertBox type="warning"
      message="Warning please review profile!"
      onClose={()=> alert('Alert Closed')}/>
      <p className="text-sm">You can now continue</p>
      

      <AlertBox type="info"
      message="Important information please review!"
      onClose={()=> alert('Alert Closed')}/>
      <p className="text-sm">You can now continue</p> 
    </Section>

<UserProfileCard user={user}
/>
  <ProductDisplay product={product}/>
    </main>
  )
}

export default App;