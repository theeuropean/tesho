import { piece } from 'chasm'
const { part, gr, toOSC } = piece()

// tempo(127)

part('drums',
  gr('----x-------x---', 'snare'),
  gr('x-x---x-x-x---x-', 'kick'),
  toOSC('')
)