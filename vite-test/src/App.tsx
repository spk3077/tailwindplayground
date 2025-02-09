import Message from './components/Message';
import InterFade from './components/InterFade';
import Alert from './components/Alert';

function App() {
  let inters = ['Dog', 'Cat', 'Gerald'];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      <Message></Message>
      <Alert>Hello World</Alert>
      <InterFade items={inters} heading="Random" onSelectItem={handleSelectItem}></InterFade>
    </div>
  )}

export default App;