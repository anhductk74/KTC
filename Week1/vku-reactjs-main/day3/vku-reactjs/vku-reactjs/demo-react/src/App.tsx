import './App.css';
import { ArrowRight } from 'lucide-react';
import Button from './components/Button';
import { Apple } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Chrome } from 'lucide-react';
import InputText from './components/InputText';
import { Search } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import Dashboard from './components/dashboard';
import { Ellipsis } from 'lucide-react';
import Contact from './components/contact';
import { Camera } from 'lucide-react';
import MyTeam from './components/MyTeam';


function App() {

  return (
    <>
      <div className="container">
        {/* mobile 1 */}
        <div className="card">
          <Button type='primary' label='Get Started' rightIcon={<ArrowRight />} />
          <Button type='primary' label='Continue with Google' leftIcon={<Chrome />} />
          <Button type='outline' label='Continue with Apple' leftIcon={<Apple />} />
          <Button type='outline' label='Continue with Facebook' leftIcon={<Facebook />} />
        </div>
        {/* mobile 2 */}
        <div className="card">
          <InputText leftIcon={<Search />} />
          <InputText leftIcon={<Search />} placeholder='Search' />
          <InputText leftIcon={<Search />} value='Textfield' />
          <InputText leftIcon={<Search />} rightIcon={<BadgeCheck />} placeholder='Search in the web' />
          <InputText leftIcon={<Search />} placeholder='Search crypto' srcimg='./images/adjust.png'/>
          <InputText placeholder='Phone number' srcimg='./images/telephone.png'/>
          <InputText leftIcon={<Search />} placeholder='Search in the web' srcimg='./images/web.png'/>
        </div>
        {/* mobile 3 */}
        <div className="card">
          <Dashboard textCenter='0 : 0' iconright={<Ellipsis />} imgleft="./images/spain.png" imgright="./images/france.png" />
        </div>
        {/* mobile 4 */}
        <div className="card">
          <Contact avatar='./images/yolanda.png' name='Yolanda' job='Web Developer' rightIcon={<Camera />} />
          <Contact avatar='./images/maria.png' name='María' rightIcon={<Camera />} />
        </div>
        {/* mobile 5 */}
        <div className="card">
          <MyTeam avatars={['/images/yolanda.png']} name='Miriam Jimenez' customtext='text1' backgroundColor='#12C0E7'/>
          <MyTeam avatars={['./images/team1.png', './images/team2.png', './images/team3.png']} name='Teams' content='Two crrently' customtext='text1' backgroundColor='#740EF5'/>
          <MyTeam avatars={['./images/team1.png', './images/team2.png']} name='New Teams' customtext='text2' backgroundColor='#FFF614'/>
        </div>
        

      </div>
    </>
  );
}

export default App;
