export default function handleImageSource(type: string) {
  switch (type) {
    case "success":
      return "/toast-success.png";
    case "warning":
      return "/toast-warning.png";
    case "error":
      return "/toast-error.png";
    default:
      return "/toast-success.png";
  }
}
