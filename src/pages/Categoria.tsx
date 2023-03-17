import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'

const Categoria = () => {
  return (
    <div className="categoria">
      <h1>Categoria</h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={['seila', 'pão', 'asdf']}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Categorias" />}
      />
    </div>
  )
}

export default Categoria
