from pathlib import Path
p=Path('experience.html')
s=p.read_text(encoding='utf-8')
s=s.replace('.domainsGrid{grid-template-columns:repeat(5,minmax(0,1fr));gap:16px;align-items:stretch}', '.domainsGrid{grid-template-columns:repeat(8,minmax(0,1fr));gap:16px;align-items:stretch}.domainCard{grid-column:span 2}.domainCard:nth-child(5){grid-column:2/span 2}.domainCard:nth-child(6){grid-column:4/span 2}.domainCard:nth-child(7){grid-column:6/span 2}')
s=s.replace('@media(max-width:1180px){.domainsGrid{grid-template-columns:repeat(3,minmax(0,1fr))}}', '@media(max-width:1180px){.domainsGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.domainCard,.domainCard:nth-child(5),.domainCard:nth-child(6),.domainCard:nth-child(7){grid-column:auto}}')
s=s.replace('@media(max-width:760px){.domainsSection{padding:38px 18px}.domainsGrid{grid-template-columns:1fr}', '@media(max-width:760px){.domainsSection{padding:38px 18px}.domainsGrid{grid-template-columns:1fr}.domainCard,.domainCard:nth-child(5),.domainCard:nth-child(6),.domainCard:nth-child(7){grid-column:auto}')
p.write_text(s,encoding='utf-8')
