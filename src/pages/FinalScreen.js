import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { handleAmountChange, handleScoreChange } from '../redux/actions'
import { useNavigate } from "react-router-dom"

const FinalScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { score } = useSelector(state => state)
    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(50))
        navigate("./")
    }

    return (
        <Box mt={2}>
            <Typography variant="h3" fontWeight="bold" mb={3}>Final Score {score}</Typography>
            <Button onClick={handleBackToSettings} variant="outlined">Next Quiz</Button>
        </Box>
    )
}

export default FinalScreen