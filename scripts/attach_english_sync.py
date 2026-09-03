from pathlib import Path

FILES = [
    'index-en.html','skills-en.html','product-en.html','project-en.html','system-en.html',
    'en-05.html','en-06.html','history-en.html','role-magic-en.html','role-customer-en.html',
    'service-page-en.html','contact-en.html','work-environments-en.html','advantages-en.html'
]
TAG = '<script src="assets/english-sync.js?v=1"></script>'
for name in FILES:
    p = Path(name)
    if not p.exists():
        continue
    text = p.read_text(encoding='utf-8')
    if 'assets/english-sync.js' in text:
        continue
    if '</body>' in text:
        text = text.replace('</body>', TAG + '</body>', 1)
    else:
        text += TAG
    p.write_text(text, encoding='utf-8')
