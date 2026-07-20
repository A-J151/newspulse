import { Card, CardContent, Skeleton } from "@mui/material";

function SkeletonCard() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <Skeleton variant="rectangular" height={220} animation="wave" />

      <CardContent>
        <Skeleton width="35%" height={20} animation="wave" />

        <Skeleton width="90%" height={40} sx={{ mt: 1 }} animation="wave" />

        <Skeleton width="95%" animation="wave" />
        <Skeleton width="85%" animation="wave" />
        <Skeleton width="70%" animation="wave" />

        <Skeleton width={120} height={35} sx={{ mt: 2 }} animation="wave" />
      </CardContent>
    </Card>
  );
}

export default SkeletonCard;
