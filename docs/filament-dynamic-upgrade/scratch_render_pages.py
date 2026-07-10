import fitz
import os

pdf_path = r'd:\Digital Agency\Filiament\FilamentWebsite\src\assets\images\Filament Company Profile_ (1).pdf'
out_dir = r'd:\Digital Agency\Filiament\FilamentWebsite\docs\filament-dynamic-upgrade\profile_pages'

os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f'Total pages: {len(doc)}')

for i in range(len(doc)):
    page = doc[i]
    # Render at 150 DPI for readable but manageable size
    pix = page.get_pixmap(dpi=150)
    img_path = os.path.join(out_dir, f'page_{i+1:02d}.png')
    pix.save(img_path)
    print(f'Saved page {i+1} ({pix.width}x{pix.height}) -> {img_path}')

doc.close()
print('\nDone - all pages rendered')
