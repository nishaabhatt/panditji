import React , {useState} from "react";
import { CgNotes } from "react-icons/cg";
import { SlDiamond } from "react-icons/sl";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../../../components/Button";

const Steps = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <section className="py-5">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  text-center my-2">
        3 Simple Step to Connect{" "}
        <span className="text-primaryLight underline underline-offset-4 decoration-secondary">
          Pandit Jii
        </span>
      </h2>
      <div className="flex justify-evenly my-10 flex-wrap gap-5">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Fill <span className="text-primaryLight">form</span>{" "}
          </h4>
          
          <div className="w-48 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
          <Button 
            show="block" 
            name={<CgNotes className="text-primary text-5xl " />}
            handleFunction={() => setModalOpen(true)} 
            >
            <CgNotes className="text-primary text-5xl " />
            </Button>
          </div>
          <Dialog open={modalOpen} onClose={handleClose}>
            <div className="flex px-5 justify-between items-center">
              <DialogTitle>
                Enter your details
              </DialogTitle>
              <RxCross1
                size={25}
                onClick={() => setModalOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Contact Number"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label=" Your Address"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="pincode"
                label="Pin Code"
                type="teq"
                fullWidth
                variant="outlined"
              />
               <div className="flex flex-row gap-5">
              <TextField
                autoFocus
                margin="dense"
                id="date"
                // label="Available "
                type="date"
                fullWidth
                variant="outlined"
                name="date"
                // value={userData.date}
                // onChange={postUserData}
              />
              <TextField
                autoFocus
                margin="dense"
                id="time"
                // label="Available Time"
                type="time"
                fullWidth
                variant="outlined"
                name="time"
                // value={userData.time}
                // onChange={postUserData}
              />
              </div>
            </DialogContent>
            <div className="flex justify-center items-center py-3">
              <button className="btn-primary">Submit</button>
            </div>
          </Dialog>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Pay <span className="text-primaryLight">Online</span>
          </h4>
          <div className="w-48 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <BsFillCreditCardFill className="text-primary text-5xl" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-semibold">
            Make <span className="text-primaryLight">a Call</span>
          </h4>
          <div className="w-48 h-24 bg-secondary rounded-xl border-2 border-primary flex justify-center items-center">
            {" "}
            <FiPhoneCall className="text-primary text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
