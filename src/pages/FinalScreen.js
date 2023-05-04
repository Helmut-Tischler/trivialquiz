import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import useAxios from "../hooks/useAxios"


const FinalScreen = () => {

    let apiUrl = `/api.php?amout=10`

    const { response, loading } = useAxios({ url: apiUrl })
    console.log(response)

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

export default FinalScreen