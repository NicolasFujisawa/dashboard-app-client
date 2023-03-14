import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'
import './App.css'

function Dashboard() {

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={['seila', 'pão']}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  )
}

export default Dashboard
