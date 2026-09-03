from pathlib import Path

PAGES=['projects.html','experience.html']
SCRIPT='<script src="assets/company-icons.js?v=2"></script>'
for filename in PAGES:
    p=Path(filename)
    text=p.read_text(encoding='utf-8')
    if 'assets/company-icons.js' in text:
        import re
        text=re.sub(r'<script src="assets/company-icons\.js\?v=\d+"></script>',SCRIPT,text)
    else:
        text=text.replace('</body>',SCRIPT+'</body>',1)
    p.write_text(text,encoding='utf-8')
    print('Updated',filename)
