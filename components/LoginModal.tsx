import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

import Typography from "@mui/material/Typography";

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function LoginModal({ open, handleClose }: LoginModalProps) {
  return (
    <div>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "white",
              borderRadius: "20px",
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
