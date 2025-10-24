import AlertBox from "./components/AlertBox";
import AlertType from "./components/AlertBox";
import Button from "./components/Button";
import Section from "./components/Section";


function App() {
  return (
    <main className="bg-stone-900 text-white h-screen p-5">
      <h1 className="text-4xl">Components Library</h1>
      <Section title = 'Section 1'>
        <p>
          masdmlaksmdv;oaisndv;nawekvn
        </p>
      </Section>

      <Section title = 'Section 2'>
        <h3>Subheader</h3>
        <p>asdkmlva;slkdvaoisnd;asn;bansdlb;naslb</p>
      </Section>

      <Section title='Buttons'>
        <div className="grid grid-cols-3">
        <Button text='Click me!'/>
        <Button text="Submit" type="submit" onClick={()=> console.log('Submit')}/>
        <Button text="Submit" type="reset" onClick={()=> console.log('Reset')}/>
        </div>
      </Section>

    <Section title="AlertBox">
      <AlertBox type="success"
      message="Your profile has been updated successfully!"
      onClose={()=> alert('Alert Closed')}/>
        <p className="text-sm">You can now continue</p>
      

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
    
    </main>
  )
}

export default App;