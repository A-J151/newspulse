import { Box, Card, CardContent, Skeleton } from "@mui/material";

function FeaturedSkeleton() {
  return (
    <Box sx={{ mb: 8 }}>
      <Skeleton width={220} height={45} animation="wave" />

      <Skeleton width={320} height={30} sx={{ mb: 3 }} animation="wave" />

      <Card
        sx={{
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: "0 20px 45px rgba(0,0,0,.08)",
        }}
      >
        <Skeleton variant="rectangular" height={430} animation="wave" />

        <CardContent sx={{ p: 4 }}>
          <Skeleton width={100} height={28} animation="wave" />

          <Skeleton height={60} width="95%" sx={{ mt: 2 }} animation="wave" />

          <Skeleton height={60} width="85%" animation="wave" />

          <Skeleton width="100%" animation="wave" />

          <Skeleton width="95%" animation="wave" />

          <Skeleton width="80%" animation="wave" />

          <Skeleton width={170} height={42} sx={{ mt: 3 }} animation="wave" />
        </CardContent>
      </Card>
    </Box>
  );
}

export default FeaturedSkeleton;
