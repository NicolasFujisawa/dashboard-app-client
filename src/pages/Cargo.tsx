import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'

const Cargo = () => {
  return (
    <div className="cargo">
      <h1>Cargo</h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={['seila', 'pão']}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cargos" />}
      />
    </div>
  )
}

export default Cargo
