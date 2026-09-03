from pathlib import Path
p=Path('skills.html')
s=p.read_text(encoding='utf-8')
tag='<link rel="stylesheet" href="assets/skills-topbar-match.css?v=1">'
if 'assets/skills-topbar-match.css' not in s:
    s=s.replace('</head>',tag+'</head>',1)
    p.write_text(s,encoding='utf-8')
