// Shared callback object — BottleStage registers its opacity handlers here,
// Product.tsx calls them at pin entry/exit to crossfade between the two canvases.
export const productBridge = {
  onEnter: () => {},
  onLeave: () => {},
}
