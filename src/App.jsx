import { Typography, Button, TextField } from "@mui/material";

function App() {
	return (
		<div>
			{/* Typography */}
			<Typography variant="h1" component="div">
				Vite + React + MUI
			</Typography>
			{/* Button */}
			<Button
				sx={{ margin: 3 }}
				color="secondary"
				variant="contained"
				disableElevation
				disableRipple
				endIcon={<p>Icon</p>}
			>
				Contained
			</Button>
			<Button
				sx={{ margin: 3 }}
				size="large"
				color="success"
				variant="outlined"
			>
				Outlined
			</Button>
			<Button sx={{ margin: 3 }} color="error" variant="text" disabled>
				Text
			</Button>

			{/* Input */}

			<TextField type="text" placeholder="Name" variant="filled" />
			<TextField
				type="email"
				placeholder="email"
				variant="outlined"
				color="secondary"
			/>
			<TextField type="password" placeholder="password" variant="standard" />
			
			<TextField type="password" placeholder="password" variant="standard" />
		</div>
	);
}

export default App;
