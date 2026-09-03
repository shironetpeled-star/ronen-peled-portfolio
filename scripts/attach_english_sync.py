from pathlib import Path

FILES = [
    'index-en.html','skills-en.html','product-en.html','project-en.html','system-en.html',
    'en-05.html','en-06.html','history-en.html','role-magic-en.html','role-customer-en.html',
    'service-page-en.html','contact-en.html','work-environments-en.html','advantages-en.html'
]
TAGS = [
    '<script src="assets/english-sync.js?v=1"></script>',
    '<script src="assets/english-nav-hotfix.js?v=1"></script>'
]
# Keep both shared English scripts attached to every English page.
for name in FILES:
    p = Path(name)
    if not p.exists():
        continue
    text = p.read_text(encoding='utf-8')
    additions = []
    if 'assets/english-sync.js' not in text:
        additions.append(TAGS[0])
    if 'assets/english-nav-hotfix.js' not in text:
        additions.append(TAGS[1])
    if not additions:
        continue
    tag = ''.join(additions)
    if '</body>' in text:
        text = text.replace('</body>', tag + '</body>', 1)
    else:
        text += tag
    p.write_text(text, encoding='utf-8')
