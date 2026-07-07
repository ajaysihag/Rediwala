export const ping = (_req, res) => {
  res.status(200).json({
    success: true,
    message: "pong",
    service: "rediwala-api",
    timestamp: new Date().toISOString()
  });
};
