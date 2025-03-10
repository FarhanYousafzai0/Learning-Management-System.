import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsPlayFill } from "react-icons/bs";

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

export default function HeroVideo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="cursor-pointer play items-center outline-0 gap-3 font-semibold flex p-4 rounded-md  border-0"
      >
        <div
          style={{ boxShadow: "0 0 0 8px rgba(6, 106, 201, 0.4)" }}
          className="flex h-[40px] transition-all duration-400 play-child w-[40px]  bg-blue-700 rounded-full justify-center items-center"
        >
          <BsPlayFill size={20} color="white" />
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
            src="https://www.youtube-nocookie.com/embed/tXHviS-4ygo?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=0&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=https%3A%2F%2Fpreview.themeforest.net%2F&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=true&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fthemes.stackbros.in&amp;widgetid=5"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}