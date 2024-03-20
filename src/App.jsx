import {
	Typography,
	Button,
	TextField,
	AppBar,
	Toolbar,
	Menu,
	MenuItem,
	createTheme,
	ThemeProvider,
	Container,
	Tabs,
	Tab,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Dialog,
	DialogContent,
	DialogActions,
	DialogTitle,
	Modal,
	Box,
} from "@mui/material";
import { useState } from "react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

function App() {
	const [anchor, setAnchor] = useState(null);
	const [value, setValue] = useState(0);
	const [openDialog, setOpenDialog] = useState(false);
	const [selectedValue, setSelectedValue] = useState("Not Selected");
	const [openModal, setOpenModal] = useState(false);

	const open = Boolean(anchor);

	const handleClick = (event) => {
		setAnchor(event.currentTarget);
	};
	const handleClose = () => {
		setAnchor(null);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const handleActionClick = (value) => {
		console.log(value);
		setSelectedValue(value);
		handleCloseDialog();
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			{/* NavBar */}
			<AppBar position="sticky">
				<Toolbar variant="regular">
					<Typography variant="h6" component="div">
						Logo ji
					</Typography>

					<Tabs value={value} onChange={handleChange}>
						<Tab label="Home" />
						<Tab label="About" />
						<Tab label="Projects" />
					</Tabs>

					<Button color="inherit" variant="contained">
						Login
					</Button>
				</Toolbar>
			</AppBar>

			{/* Typography */}
			<Typography variant="h1" component="div" color="#fff">
				Vite + React + MUI
			</Typography>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "400px",
					gap: "10px",
				}}
			>
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

				<Button onClick={handleClick} variant="contained">
					Open Menu
				</Button>
				<Menu anchorEl={anchor} open={open} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>

				<Card>
					<CardMedia
						sx={{ height: 140 }}
						image="https://media.post.rvohealth.io/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
						title="green iguana"
					/>

					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Share</Button>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
				<Typography variant="h5" color="white">
					{selectedValue}
				</Typography>
				<Button size="large" onClick={handleOpenDialog}>
					Open Dialog
				</Button>

				<Dialog open={openDialog} onClose={handleCloseDialog}>
					<DialogTitle>Custom Dialog Box</DialogTitle>
					<DialogContent>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
						aperiam omnis explicabo molestias atque neque debitis, perferendis
						voluptatem, consequuntur, magni non in quisquam? Harum?
					</DialogContent>
					<DialogActions>
						<Button onClick={() => handleActionClick("Close")}>Close</Button>
						<Button onClick={() => handleActionClick("Agree")}>Agree</Button>
					</DialogActions>
				</Dialog>

				<Button onClick={() => setOpenModal(true)}>Open modal</Button>
				<Modal
					open={openModal}
					onClose={handleCloseModal}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Modal>
			</Container>
		</ThemeProvider>
	);
}

export default App;
