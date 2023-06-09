import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'

function Produto() {

  return (
    <div className="produto">
      <h1>Produto</h1>
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

export default Produto
