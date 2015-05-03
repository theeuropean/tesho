import { piece } from 'chasm'
const { part, gr, fn, toOSC } = piece()

// tempo(127)

part('piano',
  gr('------x-------x-', 3),
  gr('----x-------x---', 2),
  gr('--x-------x-----', 1),
  gr('x-------x-------', 0),
  fn(occ => {
    if(occ.ev.type === 'note') {
      const chord = [60, 63, 67, 72]
      const pitch = occ.ev.data.pitch
      const newPitch = chord[pitch % 4]
      occ.ev.data.pitch = newPitch      
      return occ
    }
  }),
  toOSC('', 'pitch')
)


/*
699042, DfMaj 60 63 67;
426479, AfMaj 59 62 67;
793753, EfMaj 58 62 65;
537490, BfMaj 57 60 65;
904864, FnMaj 65 69 72;
648537, CnMaj 60 64 67;
375874, GnMaj 55 59 62;
743248, DnMaj 62 66 69;
698542, DfMin 55 60 63;
425879, AfMin 55 59 62;
793253, EfMin 60 63 67;
536990, BfMin 60 63 68;
904264, FnMin 65 68 72;
647937, CnMin 60 63 67;
375374, GnMin 55 58 62;
749048, DnMin 62 65 69;
699058, Df7th 58 63 67;
426432, Af7th 58 62 65;
793769, Ef7th 55 60 63;
537442, Bf7th 56 60 63;
904879, Fn7th 58 63 67;
648553, Cn7th 58 62 65;
375890, Gn7th 55 60 63;
743264, Dn7th 55 59 62;
*/