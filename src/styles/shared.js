export const row = (justifyContent, alignItems) => `
  display: flex;
  justify-content: ${justifyContent || "initial"};
  align-items: ${alignItems || "initial"}
`
