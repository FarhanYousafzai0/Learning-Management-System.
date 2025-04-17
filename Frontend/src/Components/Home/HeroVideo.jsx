import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsPlayFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";

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

const  HeroVideo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="cursor-pointer play items-center outline-0 gap-3 font-semibold flex p-4 rounded-md  border-0"
      >
        <div className="relative">
                          <FaPlayCircle className="text-3xl text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                          <span className="absolute inset-0 bg-indigo-100 rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-opacity"></span>
                        </div>
        
        Watch video
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          background: "rgba(0,0,0,0.7)",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[60%] mx-auto flex justify-center items-center min-h-screen">
          <iframe
            id="youtube-2499"
            frameborder="0"
            allowfullscreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Player for In Medellín, Colombia teachers &amp; students work together to achieve blended learning success"
            width="100%"
            height="500px"
            className="rounded-xl"
            src="https://www.youtube.com/embed/IZp1mbBAaRo?si=oa-BrA6iEJPEVNjQ"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default HeroVideo;