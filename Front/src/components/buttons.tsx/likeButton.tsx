import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export function LikeButton() {
  return (
    <>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
    </>
  );
}
