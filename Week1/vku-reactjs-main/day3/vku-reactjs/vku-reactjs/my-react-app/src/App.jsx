import './App.css';
import { ArrowRight } from 'lucide-react';
import Button from './components/Button';
import { Apple } from 'lucide-react';

function App() {

  return (
    <>
      <Button type='primary' label='Get Started' rightIcon={<ArrowRight />} />
      <Button type='primary' label='Continue with Google' leftIcon={<Apple />} />
      <Button type='outline' label='Continue with Apple' leftIcon={<Apple />} />
      <Button type='outline' label='Continue with Facebook' leftIcon={<Apple />} />
    </>
  );
}

export default App;
