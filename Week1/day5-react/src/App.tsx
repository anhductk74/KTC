import './App.css'
import ButtonClickCounter from './components/ButtonClickCounter'
import InputFieldTracker from './components/InputFieldTracker'
import ToggleSwitch from './components/ToggleSwitch'
import HoverHighlight from './components/HoverHighlight'
import FormSubmissionAlert from './components/FormSubmissionAlert'
import KeyPressDisplay from './components/KeyPressDisplay'
import DoubleClickMessage from './components/DoubleClickMessage'
import DropdownSelection from './components/DropdownSelection'
import CheckboxToggle from './components/CheckboxToggle'
import SearchFilter from './components/SearchFilter'

function App() {

  return (
    <>
      <ButtonClickCounter/>
      <InputFieldTracker/>
      <ToggleSwitch/>
      <HoverHighlight/>
      <FormSubmissionAlert/>
      <KeyPressDisplay/>
      <DoubleClickMessage/>
      <DropdownSelection/>
      <CheckboxToggle/>
      <SearchFilter/>
    </>
  )
}

export default App
