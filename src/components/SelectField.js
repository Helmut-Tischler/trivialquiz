import React, { useState } from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box } from "@mui/system"
import { useDispatch } from "react-redux"
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from "../redux/actions"

const SelectField = (props) => {

    const { options, label } = props
    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
        switch (label) {
            case "Category":
                dispatch(handleCategoryChange(event.target.value))
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(event.target.value))
                break;
            case "Type":
                dispatch(handleTypeChange(event.target.value))
                break;
            default:
        }
    }

    return (
        <Box mt={3} width="100">
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField