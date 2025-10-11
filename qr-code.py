import qrcode
from PIL import Image

# Url yi ekle
url = input("")

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

try:
    logo = Image.open("logo.png")
    logo_size = 60
    logo = logo.resize((logo_size, logo_size))
    pos = ((img.size[0]-logo_size)//2, (img.size[1]-logo_size)//2)
    img.paste(logo, pos, mask=logo)
except FileNotFoundError:
    pass  
img.show()
img.save("QrCode.png")

print("QR kodunuz 'QrCode.png' olarak kaydedildi.")
