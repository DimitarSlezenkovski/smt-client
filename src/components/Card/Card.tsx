import { Card as MuiCard, CardContent, CardProps as MuiCardProps, CardActions, Typography} from "@mui/material";
import { ReactElement } from "react";

interface CardProps extends MuiCardProps {
    title: string;
    description: string;
    dateCreated: string;
    createdBy: string;
    actions?: ReactElement[]
}

export const Card = ({
    title,
    description,
    dateCreated,
    createdBy,
    actions,
    ...restProps
 }: CardProps) => {
    return (
        <MuiCard sx={{ minWidth: 275 }} {...restProps}>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    {description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {dateCreated}
                </Typography>
                <Typography variant="body2">
                    {createdBy}
                </Typography>
            </CardContent>
            {actions && (
                <CardActions>      
                    {actions.map((action) => action)}
                </CardActions>
            )}
        </MuiCard>
    )
}
