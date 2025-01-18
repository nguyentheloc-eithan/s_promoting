export function getTextColorFromImage(
  imageSrc: string,
  callback: (color: string) => void
) {
  const img = new Image();
  img.src = imageSrc;
  img.crossOrigin = 'anonymous'; // Prevent CORS issues

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);

    const imageData = ctx?.getImageData(0, 0, img.width, img.height);
    const data = imageData?.data;

    let r = 0,
      g = 0,
      b = 0;

    if (data) {
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      const pixelCount = data.length / 4;
      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      // Calculate brightness
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      callback(brightness > 128 ? 'black' : 'white');
    }
  };
}
