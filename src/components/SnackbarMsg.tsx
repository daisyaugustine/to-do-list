import React, { forwardRef } from 'react'
import { Alert, AlertProps, Snackbar } from '@mui/material';

type SnackbarMsgProps = {
  open: boolean,
  errorMsg: string | null,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SnackbarMsg = ({ setOpen, open, errorMsg }: SnackbarMsgProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <Alert elevation={6} ref={ref} {...props} />
  ))

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={4000}>
      <SnackbarAlert onClose={handleClose} severity='error'>
        {errorMsg}
      </SnackbarAlert>
    </Snackbar>
  )
}
