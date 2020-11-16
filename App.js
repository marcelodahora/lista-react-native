import { StyleSheet, view } from 'react-native'
import React, {useState} from "react"
import Menu from './src/Menu'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const App = () => {
  const [type, setType] = useState(1)
 return (
  <>  
   <Tabs  centered>
            <Tab label="Filmes" onClick={() => setType(1)}/>
      </Tabs>  
  <Menu type={type}/>
 </>
 )
}
export default App;