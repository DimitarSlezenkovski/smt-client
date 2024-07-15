import { IconButton, IconButtonProps, ButtonProps as MuiButtonProps, Button as MuiButton } from "@mui/material";

type ButtonProps = MuiButtonProps & IconButtonProps & {
    buttonType?: 'icon' | 'transparent' | 'rounded'
}

export const Button = ({ buttonType, children, ...restProps}: ButtonProps) => {
    return (
        <>
            {buttonType === 'icon' ? (
                <IconButton {...restProps}>
                    {children}
                </IconButton>
            ) : buttonType === 'transparent' ? (
                <MuiButton {...restProps}>
                    {children}
                </MuiButton>
            ) : buttonType === 'rounded' ? (
                <MuiButton {...restProps}>
                    {children}
                </MuiButton>
            ): (
                <MuiButton {...restProps}>
                    {children}
                </MuiButton>
            )}
        </>
    )
}
