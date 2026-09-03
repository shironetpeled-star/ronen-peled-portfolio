from pathlib import Path

ROLE_PAGES = [
    'product.html',
    'project.html',
    'system.html',
    'magic.html',
    'customer.html',
]
LINK = '<link rel="stylesheet" href="assets/hebrew-role-spacing.css?v=1">'

for filename in ROLE_PAGES:
    path = Path(filename)
    text = path.read_text(encoding='utf-8')
    if 'assets/hebrew-role-spacing.css' in text:
        continue
    if '</head>' not in text:
        raise RuntimeError(f'Missing </head> in {filename}')
    text = text.replace('</head>', LINK + '</head>', 1)
    path.write_text(text, encoding='utf-8')
    print(f'Updated {filename}')
