import React from "react"
import { Box } from "@mui/system"
import { FormControl, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { handleAmountChange } from "../redux/actions"

const TextFieldComp = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(handleAmountChange(event.target.value))
    }

    return (
        <Box mt={3} width="100%">
            <FormControl>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>

    )
}

export default TextFieldComp