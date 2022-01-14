import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const user = {
  avatar: "/profile/avatar_2.png",
  city: "Barcelona",
  country: "Spain",
  name: "Roger Codina",
  timezone: "GTM-7",
};

const Input = styled("input")({
  display: "none",
});

export const AccountProfile = (props) => {
  const { updatesUserData } = props;

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={updatesUserData?.avatar ? updatesUserData.avatar : user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {updatesUserData?.name ? updatesUserData.name : user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${updatesUserData?.city ? updatesUserData.city : user.city}, ${
              updatesUserData?.country ? updatesUserData.country : user.country
            }`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ dispay: "flex", justifyContent: "center" }}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="outlined" component="span" fullWidth>
            Cambiar foto
          </Button>
        </label>
      </CardActions>
    </Card>
  );
};
