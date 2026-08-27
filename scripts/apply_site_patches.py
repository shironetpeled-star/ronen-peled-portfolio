import json,re,sys
from pathlib import Path

cfg=Path('site-patches/current.json')
if not cfg.exists():
    sys.exit('patch config not found')
data=json.loads(cfg.read_text(encoding='utf-8'))
changed=[]
for op in data.get('operations',[]):
    path=Path(op['file'])
    text=path.read_text(encoding='utf-8')
    original=text
    kind=op.get('type','regex_replace')
    if kind=='regex_replace':
        pattern=op['pattern']; repl=op['replacement']; expected=op.get('expected',1)
        text,count=re.subn(pattern,repl,text,count=expected,flags=re.S)
        if count!=expected:
            raise SystemExit(f'{path}: expected {expected} replacement(s), got {count}')
    elif kind=='replace':
        old=op['old']; new=op['new']; expected=op.get('expected',1)
        count=text.count(old)
        if count!=expected:
            raise SystemExit(f'{path}: expected {expected} exact match(es), got {count}')
        text=text.replace(old,new,expected)
    else:
        raise SystemExit(f'unsupported patch type: {kind}')
    if text!=original:
        path.write_text(text,encoding='utf-8')
        changed.append(str(path))
print('\n'.join(changed))
