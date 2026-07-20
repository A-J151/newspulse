import { Grid } from "@mui/material";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

function SkeletonGrid() {
  return (
    <Grid container spacing={3}>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} lg={4} key={index}>
          <SkeletonCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkeletonGrid;
