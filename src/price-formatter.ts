export function formatPrice(price: number): string {
  return `R$${(price / 100).toFixed(2)}`;
}
