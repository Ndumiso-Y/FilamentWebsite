import fitz
import sys

pdf_path = r'd:\Digital Agency\Filiament\FilamentWebsite\src\assets\images\Filament Company Profile_ (1).pdf'
out_path = r'd:\Digital Agency\Filiament\FilamentWebsite\docs\filament-dynamic-upgrade\profile_19page_extracted.txt'

doc = fitz.open(pdf_path)
print(f'Total pages: {len(doc)}')

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(f'Source: {pdf_path}\n')
    f.write(f'Total pages: {len(doc)}\n\n')
    for i in range(len(doc)):
        text = doc[i].get_text()
        header = f'--- Page {i+1} ---'
        f.write(f'{header}\n{text}\n------------------\n\n')
        # Print to stdout too
        print(header)
        print(text[:500])  # truncate for stdout
        print('------------------')

doc.close()
print(f'\nFull extraction saved to: {out_path}')
