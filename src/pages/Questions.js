import { Button, CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import useAxios from "../hooks/useAxios"
import { useSelector } from "react-redux"


const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question

    } = useSelector(state => state)

    let apiUrl = `/api.php?amout=${amount_of_question}`
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&ctype=${question_type}`)
    }

    const { response, loading } = useAxios({ url: apiUrl })

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Box>
            <Typography variant="h4">Questions 1</Typography>
            <Typography mt={5}>This is the question?</Typography>
            <Box mt={2}>
                <Button>Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button>Answer 2</Button>
            </Box>
            <Box mt={5}>
                Score: 2 / 6
            </Box>
        </Box>
    )
}

export default Questions