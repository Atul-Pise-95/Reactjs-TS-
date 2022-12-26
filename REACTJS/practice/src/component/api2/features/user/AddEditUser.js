import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserForm from "./UserForm";
const AddEditUser = ({ open, handleClose, operation, ...props }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {operation == "edit" ? "Edit" : "Create "}User
        </DialogTitle>
        <DialogContent>
          <UserForm
            operation={operation}
            handleClose={handleClose}
            {...props}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;
